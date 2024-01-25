import Vue from 'vue';
import get from 'lodash/get';
import { mergeData } from 'vue-functional-data-merge';
import merge from 'lodash/merge';

function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
function getBasePlacement(placement) {
  return placement.split('-')[0];
}

function getAlignment(placement) {
  return placement.split('-')[1];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].includes(getBasePlacement(placement)) ? 'x' : 'y';
}

function getLengthFromAxis(axis) {
  return axis === 'y' ? 'height' : 'width';
}

function computeCoordsFromPlacement(_ref) {
  var reference = _ref.reference;
  var floating = _ref.floating;
  var placement = _ref.placement;
  var commonX = reference.x + reference.width / 2 - floating.width / 2;
  var commonY = reference.y + reference.height / 2 - floating.height / 2;
  var coords;

  switch (getBasePlacement(placement)) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;

    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;

    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = getMainAxisFromPlacement(placement);
  var length = getLengthFromAxis(mainAxis);

  switch (getAlignment(placement)) {
    case 'start':
      coords[mainAxis] = coords[mainAxis] - (reference[length] / 2 - floating[length] / 2);
      break;

    case 'end':
      coords[mainAxis] = coords[mainAxis] + (reference[length] / 2 - floating[length] / 2);
      break;
  }

  return coords;
}

var computePosition$1 = async function (reference, floating, config) {
  var obj, assign;

  var placement = config.placement; if ( placement === void 0 ) placement = 'bottom';
  var strategy = config.strategy; if ( strategy === void 0 ) strategy = 'absolute';
  var middleware = config.middleware; if ( middleware === void 0 ) middleware = [];
  var platform = config.platform;

  var rects = await platform.getElementRects({
    reference: reference,
    floating: floating,
    strategy: strategy
  });
  var ref = computeCoordsFromPlacement(Object.assign({}, rects,
    {placement: placement}));
  var x = ref.x;
  var y = ref.y;
  var statefulPlacement = placement;
  var middlewareData = {};

  for (var i = 0; i < middleware.length; i++) {

    var ref$1 = middleware[i];
    var name = ref$1.name;
    var fn = ref$1.fn;
    var ref$2 = await fn({
      x: x,
      y: y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy: strategy,
      middlewareData: middlewareData,
      rects: rects,
      platform: platform,
      elements: {
        reference: reference,
        floating: floating
      }
    });
    var nextX = ref$2.x;
    var nextY = ref$2.y;
    var data = ref$2.data;
    var reset = ref$2.reset;
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = Object.assign({}, middlewareData,
      ( obj = {}, obj[name] = data != null ? data : {}, obj ));

    if (reset) {
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }

        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference: reference,
            floating: floating,
            strategy: strategy
          }) : reset.rects;
        }

        ((assign = computeCoordsFromPlacement(Object.assign({}, rects,
          {placement: statefulPlacement})), x = assign.x, y = assign.y));
      }

      i = -1;
      continue;
    }
  }

  return {
    x: x,
    y: y,
    placement: statefulPlacement,
    strategy: strategy,
    middlewareData: middlewareData
  };
};

function expandPaddingObject(padding) {
  return Object.assign({}, {top: 0,
    right: 0,
    bottom: 0,
    left: 0},
    padding);
}

function getSideObjectFromPadding(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}

function rectToClientRect(rect) {
  return Object.assign({}, rect,
    {top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height});
}

async function detectOverflow(middlewareArguments, options) {
  if (options === void 0) {
    options = {};
  }

  var x = middlewareArguments.x;
  var y = middlewareArguments.y;
  var platform = middlewareArguments.platform;
  var rects = middlewareArguments.rects;
  var elements = middlewareArguments.elements;
  var strategy = middlewareArguments.strategy;
  var boundary = options.boundary; if ( boundary === void 0 ) boundary = 'clippingParents';
  var rootBoundary = options.rootBoundary; if ( rootBoundary === void 0 ) rootBoundary = 'viewport';
  var elementContext = options.elementContext; if ( elementContext === void 0 ) elementContext = 'floating';
  var altBoundary = options.altBoundary; if ( altBoundary === void 0 ) altBoundary = false;
  var padding = options.padding; if ( padding === void 0 ) padding = 0;
  var paddingObject = getSideObjectFromPadding(padding);
  var altContext = elementContext === 'floating' ? 'reference' : 'floating';
  var element = elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = await platform.getClippingClientRect({
    element: (await platform.isElement(element)) ? element : element.contextElement || (await platform.getDocumentElement({
      element: elements.floating
    })),
    boundary: boundary,
    rootBoundary: rootBoundary
  });
  var elementClientRect = rectToClientRect(await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: elementContext === 'floating' ? Object.assign({}, rects.floating,
      {x: x,
      y: y}) : rects.reference,
    offsetParent: await platform.getOffsetParent({
      element: elements.floating
    }),
    strategy: strategy
  })); // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  return {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
}

var min$1 = Math.min;
var max$1 = Math.max;

function within(min$1$1, value, max$1$1) {
  return max$1(min$1$1, min$1(value, max$1$1));
}

var arrow = function (options) { return ({
  name: 'arrow',
  options: options,

  fn: async function fn(middlewareArguments) {
    var obj;

    // Since `element` is required, we don't Partial<> the type
    var ref = options != null ? options : {};
    var element = ref.element;
    var padding = ref.padding; if ( padding === void 0 ) padding = 0;
    var x = middlewareArguments.x;
    var y = middlewareArguments.y;
    var placement = middlewareArguments.placement;
    var rects = middlewareArguments.rects;
    var platform = middlewareArguments.platform;

    if (element == null) {

      return {};
    }

    var paddingObject = getSideObjectFromPadding(padding);
    var coords = {
      x: x,
      y: y
    };
    var basePlacement = getBasePlacement(placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var length = getLengthFromAxis(axis);
    var arrowDimensions = await platform.getDimensions({
      element: element
    });
    var minProp = axis === 'y' ? 'top' : 'left';
    var maxProp = axis === 'y' ? 'bottom' : 'right';
    var endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    var startDiff = coords[axis] - rects.reference[axis];
    var arrowOffsetParent = await platform.getOffsetParent({
      element: element
    });
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside of the floating element's bounds

    var min = paddingObject[minProp];
    var max = clientSize - arrowDimensions[length] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    var offset = within(min, center, max);
    return {
      data: ( obj = {}, obj[axis] = offset, obj.centerOffset = center - offset, obj )
    };
  }

}); };

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) { return hash$1[matched]; });
}

function getAlignmentSides(placement, rects) {
  var isStart = getAlignment(placement) === 'start';
  var mainAxis = getMainAxisFromPlacement(placement);
  var length = getLengthFromAxis(mainAxis);
  var mainAlignmentSide = mainAxis === 'x' ? isStart ? 'right' : 'left' : isStart ? 'bottom' : 'top';

  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }

  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) { return hash[matched]; });
}

var basePlacements = ['top', 'right', 'bottom', 'left'];
var allPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, basePlacement) { return acc.concat(basePlacement, basePlacement + "-start", basePlacement + "-end"); }, []);

function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  var allowedPlacementsSortedByAlignment = alignment ? allowedPlacements.filter(function (placement) { return getAlignment(placement) === alignment; }).concat( allowedPlacements.filter(function (placement) { return getAlignment(placement) !== alignment; })) : allowedPlacements.filter(function (placement) { return getBasePlacement(placement) === placement; });
  return allowedPlacementsSortedByAlignment.filter(function (placement) {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }

    return true;
  });
}
var autoPlacement = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'autoPlacement',
    options: options,

    fn: async function fn(middlewareArguments) {
      var _middlewareData$autoP, _middlewareData$autoP2, _middlewareData$autoP3, _middlewareData$autoP4, _middlewareData$autoP5, _placementsSortedByLe;

      var x = middlewareArguments.x;
      var y = middlewareArguments.y;
      var rects = middlewareArguments.rects;
      var middlewareData = middlewareArguments.middlewareData;
      var placement = middlewareArguments.placement;
      var alignment = options.alignment; if ( alignment === void 0 ) alignment = null;
      var allowedPlacements = options.allowedPlacements; if ( allowedPlacements === void 0 ) allowedPlacements = allPlacements;
      var autoAlignment = options.autoAlignment; if ( autoAlignment === void 0 ) autoAlignment = true;
      var rest = objectWithoutProperties( options, ["alignment", "allowedPlacements", "autoAlignment"] );
      var detectOverflowOptions = rest;

      if ((_middlewareData$autoP = middlewareData.autoPlacement) != null && _middlewareData$autoP.skip) {
        return {};
      }

      var placements = getPlacementList(alignment, autoAlignment, allowedPlacements);
      var overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      var currentIndex = (_middlewareData$autoP2 = (_middlewareData$autoP3 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP3.index) != null ? _middlewareData$autoP2 : 0;
      var currentPlacement = placements[currentIndex];
      var ref = getAlignmentSides(currentPlacement, rects);
      var main = ref.main;
      var cross = ref.cross; // Make `computeCoords` start from the right place

      if (placement !== currentPlacement) {
        return {
          x: x,
          y: y,
          reset: {
            placement: placements[0]
          }
        };
      }

      var currentOverflows = [overflow[getBasePlacement(currentPlacement)], overflow[main], overflow[cross]];
      var allOverflows = ((_middlewareData$autoP4 = (_middlewareData$autoP5 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP5.overflows) != null ? _middlewareData$autoP4 : []).concat( [{
        placement: currentPlacement,
        overflows: currentOverflows
      }]);
      var nextPlacement = placements[currentIndex + 1]; // There are more placements to check

      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }

      var placementsSortedByLeastOverflow = allOverflows.slice().sort(function (a, b) { return a.overflows[0] - b.overflows[0]; });
      var placementThatFitsOnAllSides = (_placementsSortedByLe = placementsSortedByLeastOverflow.find(function (_ref) {
        var overflows = _ref.overflows;
        return overflows.every(function (overflow) { return overflow <= 0; });
      })) == null ? void 0 : _placementsSortedByLe.placement;
      return {
        data: {
          skip: true
        },
        reset: {
          placement: placementThatFitsOnAllSides != null ? placementThatFitsOnAllSides : placementsSortedByLeastOverflow[0].placement
        }
      };
    }

  };
};

function getExpandedPlacements(placement) {
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}

var flip = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'flip',
    options: options,

    fn: async function fn(middlewareArguments) {
      var _middlewareData$flip, _middlewareData$flip2;

      var placement = middlewareArguments.placement;
      var middlewareData = middlewareArguments.middlewareData;
      var rects = middlewareArguments.rects;
      var initialPlacement = middlewareArguments.initialPlacement;

      if ((_middlewareData$flip = middlewareData.flip) != null && _middlewareData$flip.skip) {
        return {};
      }

      var checkMainAxis = options.mainAxis; if ( checkMainAxis === void 0 ) checkMainAxis = true;
      var checkCrossAxis = options.crossAxis; if ( checkCrossAxis === void 0 ) checkCrossAxis = true;
      var specifiedFallbackPlacements = options.fallbackPlacements;
      var fallbackStrategy = options.fallbackStrategy; if ( fallbackStrategy === void 0 ) fallbackStrategy = 'bestFit';
      var flipAlignment = options.flipAlignment; if ( flipAlignment === void 0 ) flipAlignment = true;
      var rest = objectWithoutProperties( options, ["mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "flipAlignment"] );
      var detectOverflowOptions = rest;
      var basePlacement = getBasePlacement(placement);
      var isBasePlacement = basePlacement === initialPlacement;
      var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      var placements = [initialPlacement ].concat( fallbackPlacements);
      var overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      var overflows = [];
      var overflowsData = ((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.overflows) || [];

      if (checkMainAxis) {
        overflows.push(overflow[basePlacement]);
      }

      if (checkCrossAxis) {
        var ref = getAlignmentSides(placement, rects);
        var main = ref.main;
        var cross = ref.cross;
        overflows.push(overflow[main], overflow[cross]);
      }

      overflowsData = overflowsData.concat( [{
        placement: placement,
        overflows: overflows
      }]); // One or more sides is overflowing

      if (!overflows.every(function (side) { return side <= 0; })) {
        var _middlewareData$flip$, _middlewareData$flip3;

        var nextIndex = ((_middlewareData$flip$ = (_middlewareData$flip3 = middlewareData.flip) == null ? void 0 : _middlewareData$flip3.index) != null ? _middlewareData$flip$ : 0) + 1;
        var nextPlacement = placements[nextIndex];

        if (nextPlacement) {
          // Try next placement and re-run the lifecycle
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        var resetPlacement = 'bottom';

        switch (fallbackStrategy) {
          case 'bestFit':
            {
              var _overflowsData$slice$;

              var placement$1 = (_overflowsData$slice$ = overflowsData.slice().sort(function (a, b) { return a.overflows.filter(function (overflow) { return overflow > 0; }).reduce(function (acc, overflow) { return acc + overflow; }, 0) - b.overflows.filter(function (overflow) { return overflow > 0; }).reduce(function (acc, overflow) { return acc + overflow; }, 0); })[0]) == null ? void 0 : _overflowsData$slice$.placement;

              if (placement$1) {
                resetPlacement = placement$1;
              }

              break;
            }

          case 'initialPlacement':
            resetPlacement = initialPlacement;
            break;
        }

        return {
          data: {
            skip: true
          },
          reset: {
            placement: resetPlacement
          }
        };
      }

      return {};
    }

  };
};

function convertValueToCoords(_ref) {
  var placement = _ref.placement;
  var rects = _ref.rects;
  var value = _ref.value;
  var basePlacement = getBasePlacement(placement);
  var multiplier = ['left', 'top'].includes(basePlacement) ? -1 : 1;
  var rawValue = typeof value === 'function' ? value(Object.assign({}, rects,
    {placement: placement})) : value;
  var ref = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0
  } : Object.assign({}, {mainAxis: 0,
    crossAxis: 0},
    rawValue);
  var mainAxis = ref.mainAxis;
  var crossAxis = ref.crossAxis;
  return getMainAxisFromPlacement(basePlacement) === 'x' ? {
    x: crossAxis,
    y: mainAxis * multiplier
  } : {
    x: mainAxis * multiplier,
    y: crossAxis
  };
}
var offset = function (value) {
  if (value === void 0) {
    value = 0;
  }

  return {
    name: 'offset',
    options: value,

    fn: function fn(middlewareArguments) {
      var x = middlewareArguments.x;
      var y = middlewareArguments.y;
      var placement = middlewareArguments.placement;
      var rects = middlewareArguments.rects;
      var diffCoords = convertValueToCoords({
        placement: placement,
        rects: rects,
        value: value
      });
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }

  };
};

function getCrossAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

var shift = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'shift',
    options: options,

    fn: async function fn(middlewareArguments) {
      var obj;

      var x = middlewareArguments.x;
      var y = middlewareArguments.y;
      var placement = middlewareArguments.placement;
      var checkMainAxis = options.mainAxis; if ( checkMainAxis === void 0 ) checkMainAxis = true;
      var checkCrossAxis = options.crossAxis; if ( checkCrossAxis === void 0 ) checkCrossAxis = false;
      var limiter = options.limiter; if ( limiter === void 0 ) limiter = {
          fn: function (_ref) {
            var x = _ref.x;
            var y = _ref.y;
            return {
              x: x,
              y: y
            };
          }
        };
      var rest = objectWithoutProperties( options, ["mainAxis", "crossAxis", "limiter"] );
      var detectOverflowOptions = rest;
      var coords = {
        x: x,
        y: y
      };
      var overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      var mainAxis = getMainAxisFromPlacement(getBasePlacement(placement));
      var crossAxis = getCrossAxis(mainAxis);
      var mainAxisCoord = coords[mainAxis];
      var crossAxisCoord = coords[crossAxis];

      if (checkMainAxis) {
        var minSide = mainAxis === 'y' ? 'top' : 'left';
        var maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        var min = mainAxisCoord + overflow[minSide];
        var max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min, mainAxisCoord, max);
      }

      if (checkCrossAxis) {
        var minSide$1 = crossAxis === 'y' ? 'top' : 'left';
        var maxSide$1 = crossAxis === 'y' ? 'bottom' : 'right';
        var min$1 = crossAxisCoord + overflow[minSide$1];
        var max$1 = crossAxisCoord - overflow[maxSide$1];
        crossAxisCoord = within(min$1, crossAxisCoord, max$1);
      }

      var limitedCoords = limiter.fn(Object.assign({}, middlewareArguments,
        ( obj = {}, obj[mainAxis] = mainAxisCoord, obj[crossAxis] = crossAxisCoord, obj )));
      return Object.assign({}, limitedCoords,
        {data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }});
    }

  };
};

var size = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'size',
    options: options,

    fn: async function fn(middlewareArguments) {
      var _middlewareData$size;

      var placement = middlewareArguments.placement;
      var rects = middlewareArguments.rects;
      var middlewareData = middlewareArguments.middlewareData;
      var apply = options.apply;
      var rest = objectWithoutProperties( options, ["apply"] );
      var detectOverflowOptions = rest;

      if ((_middlewareData$size = middlewareData.size) != null && _middlewareData$size.skip) {
        return {};
      }

      var overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      var basePlacement = getBasePlacement(placement);
      var isEnd = getAlignment(placement) === 'end';
      var heightSide;
      var widthSide;

      if (basePlacement === 'top' || basePlacement === 'bottom') {
        heightSide = basePlacement;
        widthSide = isEnd ? 'left' : 'right';
      } else {
        widthSide = basePlacement;
        heightSide = isEnd ? 'top' : 'bottom';
      }

      var xMin = max$1(overflow.left, 0);
      var xMax = max$1(overflow.right, 0);
      var yMin = max$1(overflow.top, 0);
      var yMax = max$1(overflow.bottom, 0);
      var dimensions = {
        height: rects.floating.height - (['left', 'right'].includes(placement) ? 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max$1(overflow.top, overflow.bottom)) : overflow[heightSide]),
        width: rects.floating.width - (['top', 'bottom'].includes(placement) ? 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max$1(overflow.left, overflow.right)) : overflow[widthSide])
      };
      apply == null ? void 0 : apply(Object.assign({}, dimensions,
        rects));
      return {
        data: {
          skip: true
        },
        reset: {
          rects: true
        }
      };
    }

  };
};

function isWindow(value) {
  return (value == null ? void 0 : value.toString()) === '[object Window]';
}
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (!isWindow(node)) {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function getNodeName(node) {
  return isWindow(node) ? '' : node ? (node.nodeName || '').toLowerCase() : '';
}

function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function isShadowRoot(node) {
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var ref = getComputedStyle$1(element);
  var overflow = ref.overflow;
  var overflowX = ref.overflowX;
  var overflowY = ref.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  // TODO: Try and use feature detection here instead
  var isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
  var css = getComputedStyle$1(element); // This is non-exhaustive but covers the most common CSS properties that
  // create a containing block.
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

  return css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].includes(css.willChange) || isFirefox && css.willChange === 'filter' || isFirefox && (css.filter ? css.filter !== 'none' : false);
}

var min = Math.min;
var max = Math.max;
var round = Math.round;

function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  return {
    width: clientRect.width / scaleX,
    height: clientRect.height / scaleY,
    top: clientRect.top / scaleY,
    right: clientRect.right / scaleX,
    bottom: clientRect.bottom / scaleY,
    left: clientRect.left / scaleX,
    x: clientRect.left / scaleX,
    y: clientRect.top / scaleY
  };
}

function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}

function getNodeScroll(element) {
  if (isWindow(element)) {
    return {
      scrollLeft: element.pageXOffset,
      scrollTop: element.pageYOffset
    };
  }

  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

function isScaled(element) {
  var rect = getBoundingClientRect(element);
  return round(rect.width) !== element.offsetWidth || round(rect.height) !== element.offsetHeight;
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(element, isOffsetParentAnElement && isScaled(offsetParent));
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      var offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // @ts-ignore
    node.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    node.parentNode || ( // DOM Element detected
    isShadowRoot(node) ? node.host : null) || // ShadowRoot detected
    getDocumentElement(node) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
}

function getContainingBlock(element) {
  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && !['html', 'body'].includes(getNodeName(currentNode))) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getDimensions(element) {
  return {
    width: element.offsetWidth,
    height: element.offsetHeight
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  var rect = _ref.rect;
  var offsetParent = _ref.offsetParent;
  var strategy = _ref.strategy;
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var documentElement = getDocumentElement(offsetParent);

  if (offsetParent === documentElement) {
    return rect;
  }

  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      var offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } // This doesn't appear to be need to be negated.
    // else if (documentElement) {
    //   offsets.x = getWindowScrollBarX(documentElement);
    // }

  }

  return Object.assign({}, rect,
    {x: rect.x - scroll.scrollLeft + offsets.x,
    y: rect.y - scroll.scrollTop + offsets.y});
}

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed

    if (Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) < 0.01) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var scroll = getNodeScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -scroll.scrollLeft + getWindowScrollBarX(element);
  var y = -scroll.scrollTop;

  if (getComputedStyle$1(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].includes(getNodeName(node))) {
    // @ts-ignore assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

function getScrollParents(node, list) {
  var _node$ownerDocument;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(node);
  var isBody = scrollParent === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // @ts-ignore: isBody tells us target will be an HTMLElement here
  updatedList.concat(getScrollParents(getParentNode(target)));
}

function contains(parent, child) {
  var rootNode = child.getRootNode == null ? void 0 : child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;

    do {
      // use `===` replace node.isSameNode()
      if (next && parent === next) {
        return true;
      } // @ts-ignore: need a better way to handle this...


      next = next.parentNode || next.host;
    } while (next);
  }

  return false;
}

function getInnerBoundingClientRect(element) {
  var clientRect = getBoundingClientRect(element);
  var top = clientRect.top + element.clientTop;
  var left = clientRect.left + element.clientLeft;
  return {
    top: top,
    left: left,
    x: left,
    y: top,
    right: left + element.clientWidth,
    bottom: top + element.clientHeight,
    width: element.clientWidth,
    height: element.clientHeight
  };
}

function getClientRectFromClippingParent(element, clippingParent) {
  if (clippingParent === 'viewport') {
    return rectToClientRect(getViewportRect(element));
  }

  if (isElement(clippingParent)) {
    return getInnerBoundingClientRect(clippingParent);
  }

  return rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = getScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].includes(getComputedStyle$1(element).position);
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // @ts-ignore isElement check ensures we return Array<Element>


  return clippingParents.filter(function (clippingParent) { return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body'; });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingClientRect(_ref) {
  var element = _ref.element;
  var boundary = _ref.boundary;
  var rootBoundary = _ref.rootBoundary;
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = mainClippingParents.concat( [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromClippingParent(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingParent(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

var platform = {
  getElementRects: function (_ref) {
    var reference = _ref.reference;
    var floating = _ref.floating;
    var strategy = _ref.strategy;
    return {
      reference: getRectRelativeToOffsetParent(reference, getOffsetParent(floating), strategy),
      floating: Object.assign({}, getDimensions(floating),
        {x: 0,
        y: 0})
    };
  },
  convertOffsetParentRelativeRectToViewportRelativeRect: function (args) { return convertOffsetParentRelativeRectToViewportRelativeRect(args); },
  getOffsetParent: function (_ref2) {
    var element = _ref2.element;
    return getOffsetParent(element);
  },
  isElement: function (value) { return isElement(value); },
  getDocumentElement: function (_ref3) {
    var element = _ref3.element;
    return getDocumentElement(element);
  },
  getClippingClientRect: function (args) { return getClippingClientRect(args); },
  getDimensions: function (_ref4) {
    var element = _ref4.element;
    return getDimensions(element);
  },
  getClientRects: function (_ref5) {
    var element = _ref5.element;
    return element.getClientRects();
  }
};

var computePosition = function (reference, floating, options) { return computePosition$1(reference, floating, Object.assign({}, {platform: platform},
  options)); };

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function (obj, key, value) { return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value }) : obj[key] = value; };
var __spreadValues = function (a, b) {
  for (var prop in b || (b = {}))
    { if (__hasOwnProp.call(b, prop))
      { __defNormalProp(a, prop, b[prop]); } }
  if (__getOwnPropSymbols)
    { for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        { __defNormalProp(a, prop, b[prop]); }
    } }
  return a;
};
var __spreadProps = function (a, b) { return __defProps(a, __getOwnPropDescs(b)); };
var __objRest = function (source, exclude) {
  var target = {};
  for (var prop in source)
    { if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      { target[prop] = source[prop]; } }
  if (source != null && __getOwnPropSymbols)
    { for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        { target[prop] = source[prop]; }
    } }
  return target;
};
function assign(to, from) {
  for (var key in from) {
    if (Object.prototype.hasOwnProperty.call(from, key)) {
      if (typeof from[key] === "object" && to[key]) {
        assign(to[key], from[key]);
      } else {
        to[key] = from[key];
      }
    }
  }
}
var config = {
  disabled: false,
  distance: 5,
  skidding: 0,
  container: "body",
  boundary: void 0,
  instantMove: false,
  disposeTimeout: 5e3,
  popperTriggers: [],
  strategy: "absolute",
  preventOverflow: true,
  flip: true,
  shift: true,
  overflowPadding: 0,
  arrowPadding: 0,
  arrowOverflow: true,
  themes: {
    tooltip: {
      placement: "top",
      triggers: ["hover", "focus", "touch"],
      hideTriggers: function (events) { return events.concat( ["click"]); },
      delay: {
        show: 200,
        hide: 0
      },
      handleResize: false,
      html: false,
      loadingContent: "..."
    },
    dropdown: {
      placement: "bottom",
      triggers: ["click"],
      delay: 0,
      handleResize: true,
      autoHide: true
    },
    menu: {
      $extend: "dropdown",
      triggers: ["hover", "focus"],
      popperTriggers: ["hover", "focus"],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
function getDefaultConfig(theme, key) {
  var themeConfig = config.themes[theme] || {};
  var value;
  do {
    value = themeConfig[key];
    if (typeof value === "undefined") {
      if (themeConfig.$extend) {
        themeConfig = config.themes[themeConfig.$extend] || {};
      } else {
        themeConfig = null;
        value = config[key];
      }
    } else {
      themeConfig = null;
    }
  } while (themeConfig);
  return value;
}
function getThemeClasses(theme) {
  var result = [theme];
  var themeConfig = config.themes[theme] || {};
  do {
    if (themeConfig.$extend && !themeConfig.$resetCss) {
      result.push(themeConfig.$extend);
      themeConfig = config.themes[themeConfig.$extend] || {};
    } else {
      themeConfig = null;
    }
  } while (themeConfig);
  return result.map(function (c) { return ("v-popper--theme-" + c); });
}
function getAllParentThemes(theme) {
  var result = [theme];
  var themeConfig = config.themes[theme] || {};
  do {
    if (themeConfig.$extend) {
      result.push(themeConfig.$extend);
      themeConfig = config.themes[themeConfig.$extend] || {};
    } else {
      themeConfig = null;
    }
  } while (themeConfig);
  return result;
}
var supportsPassive = false;
if (typeof window !== "undefined") {
  supportsPassive = false;
  try {
    var opts = Object.defineProperty({}, "passive", {
      get: function get() {
        supportsPassive = true;
      }
    });
    window.addEventListener("test", null, opts);
  } catch (e) {
  }
}
var isIOS = false;
if (typeof window !== "undefined" && typeof navigator !== "undefined") {
  isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}
var placements = ["auto", "top", "bottom", "left", "right"].reduce(function (acc, base) { return acc.concat([
  base,
  (base + "-start"),
  (base + "-end")
]); }, []);
var SHOW_EVENT_MAP = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart"
};
var HIDE_EVENT_MAP = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend"
};
function removeFromArray(array, item) {
  var index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}
function nextFrame() {
  return new Promise(function (resolve) { return requestAnimationFrame(function () {
    requestAnimationFrame(resolve);
  }); });
}
var shownPoppers = [];
var hidingPopper = null;
var shownPoppersByTheme = {};
function getShownPoppersByTheme(theme) {
  var list = shownPoppersByTheme[theme];
  if (!list) {
    list = shownPoppersByTheme[theme] = [];
  }
  return list;
}
var Element = function() {
};
if (typeof window !== "undefined") {
  Element = window.Element;
}
function defaultPropFactory(prop) {
  return function() {
    var props = this.$props;
    return getDefaultConfig(props.theme, prop);
  };
}
var PROVIDE_KEY = "__floating-vue__popper";
var PrivatePopper = function () {
  var obj;

  return ({
  name: "VPopper",
  props: {
    theme: {
      type: String,
      required: true
    },
    targetNodes: {
      type: Function,
      required: true
    },
    referenceNode: {
      type: Function,
      required: true
    },
    popperNode: {
      type: Function,
      required: true
    },
    shown: {
      type: Boolean,
      default: false
    },
    showGroup: {
      type: String,
      default: null
    },
    ariaId: {
      default: null
    },
    disabled: {
      type: Boolean,
      default: defaultPropFactory("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: defaultPropFactory("positioningDisabled")
    },
    placement: {
      type: String,
      default: defaultPropFactory("placement"),
      validator: function (value) { return placements.includes(value); }
    },
    delay: {
      type: [String, Number, Object],
      default: defaultPropFactory("delay")
    },
    distance: {
      type: [Number, String],
      default: defaultPropFactory("distance")
    },
    skidding: {
      type: [Number, String],
      default: defaultPropFactory("skidding")
    },
    triggers: {
      type: Array,
      default: defaultPropFactory("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: defaultPropFactory("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: defaultPropFactory("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: defaultPropFactory("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: defaultPropFactory("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: defaultPropFactory("popperHideTriggers")
    },
    container: {
      type: [String, Object, Element, Boolean],
      default: defaultPropFactory("container")
    },
    boundary: {
      type: [String, Element],
      default: defaultPropFactory("boundary")
    },
    strategy: {
      type: String,
      validator: function (value) { return ["absolute", "fixed"].includes(value); },
      default: defaultPropFactory("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: defaultPropFactory("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: defaultPropFactory("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: defaultPropFactory("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: defaultPropFactory("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: defaultPropFactory("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: defaultPropFactory("computeTransformOrigin")
    },
    autoMinSize: {
      type: Boolean,
      default: defaultPropFactory("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: defaultPropFactory("autoSize")
    },
    autoMaxSize: {
      type: Boolean,
      default: defaultPropFactory("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: defaultPropFactory("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: defaultPropFactory("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: defaultPropFactory("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: defaultPropFactory("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: defaultPropFactory("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: defaultPropFactory("flip")
    },
    shift: {
      type: Boolean,
      default: defaultPropFactory("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: defaultPropFactory("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: defaultPropFactory("noAutoFocus")
    }
  },
  provide: function provide() {
    var obj;

    return ( obj = {}, obj[PROVIDE_KEY] = {
        parentPopper: this
      }, obj );
  },
  inject: ( obj = {}, obj[PROVIDE_KEY] = { default: null }, obj ),
  data: function data() {
    return {
      isShown: false,
      isMounted: false,
      skipTransition: false,
      classes: {
        showFrom: false,
        showTo: false,
        hideFrom: false,
        hideTo: true
      },
      result: {
        x: 0,
        y: 0,
        placement: "",
        strategy: this.strategy,
        arrow: {
          x: 0,
          y: 0,
          centerOffset: 0
        },
        transformOrigin: null
      },
      shownChildren: /* @__PURE__ */ new Set(),
      lastAutoHide: true
    };
  },
  computed: {
    popperId: function popperId() {
      return this.ariaId != null ? this.ariaId : this.randomId;
    },
    shouldMountContent: function shouldMountContent() {
      return this.eagerMount || this.isMounted;
    },
    slotData: function slotData() {
      return {
        popperId: this.popperId,
        isShown: this.isShown,
        shouldMountContent: this.shouldMountContent,
        skipTransition: this.skipTransition,
        autoHide: typeof this.autoHide === "function" ? this.lastAutoHide : this.autoHide,
        show: this.show,
        hide: this.hide,
        handleResize: this.handleResize,
        onResize: this.onResize,
        classes: __spreadProps(__spreadValues({}, this.classes), {
          popperClass: this.popperClass
        }),
        result: this.positioningDisabled ? null : this.result
      };
    },
    parentPopper: function parentPopper() {
      var _a;
      return (_a = this[PROVIDE_KEY]) == null ? void 0 : _a.parentPopper;
    },
    hasPopperShowTriggerHover: function hasPopperShowTriggerHover() {
      var _a, _b;
      return ((_a = this.popperTriggers) == null ? void 0 : _a.includes("hover")) || ((_b = this.popperShowTriggers) == null ? void 0 : _b.includes("hover"));
    }
  },
  watch: __spreadValues(__spreadValues({
    shown: "$_autoShowHide",
    disabled: function disabled(value) {
      if (value) {
        this.dispose();
      } else {
        this.init();
      }
    },
    container: async function container() {
      if (this.isShown) {
        this.$_ensureTeleport();
        await this.$_computePosition();
      }
    }
  }, [
    "triggers",
    "positioningDisabled"
  ].reduce(function (acc, prop) {
    acc[prop] = "$_refreshListeners";
    return acc;
  }, {})), [
    "placement",
    "distance",
    "skidding",
    "boundary",
    "strategy",
    "overflowPadding",
    "arrowPadding",
    "preventOverflow",
    "shift",
    "shiftCrossAxis",
    "flip"
  ].reduce(function (acc, prop) {
    acc[prop] = "$_computePosition";
    return acc;
  }, {})),
  created: function created() {
    this.$_isDisposed = true;
    this.randomId = "popper_" + ([Math.random(), Date.now()].map(function (n) { return n.toString(36).substring(2, 10); }).join("_"));
    if (this.autoMinSize) {
      console.warn('[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.');
    }
    if (this.autoMaxSize) {
      console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
    }
  },
  mounted: function mounted() {
    this.init();
    this.$_detachPopperNode();
  },
  activated: function activated() {
    this.$_autoShowHide();
  },
  deactivated: function deactivated() {
    this.hide();
  },
  beforeDestroy: function beforeDestroy() {
    this.dispose();
  },
  methods: {
    show: function show(ref) {
      var this$1$1 = this;
      if ( ref === void 0 ) ref = {};
      var event = ref.event; if ( event === void 0 ) event = null;
      var skipDelay = ref.skipDelay; if ( skipDelay === void 0 ) skipDelay = false;
      var force = ref.force; if ( force === void 0 ) force = false;

      var _a, _b;
      if (((_a = this.parentPopper) == null ? void 0 : _a.lockedChild) && this.parentPopper.lockedChild !== this)
        { return; }
      this.$_pendingHide = false;
      if (force || !this.disabled) {
        if (((_b = this.parentPopper) == null ? void 0 : _b.lockedChild) === this) {
          this.parentPopper.lockedChild = null;
        }
        this.$_scheduleShow(event, skipDelay);
        this.$emit("show");
        this.$_showFrameLocked = true;
        requestAnimationFrame(function () {
          this$1$1.$_showFrameLocked = false;
        });
      }
      this.$emit("update:shown", true);
    },
    hide: function hide(ref) {
      var this$1$1 = this;
      if ( ref === void 0 ) ref = {};
      var event = ref.event; if ( event === void 0 ) event = null;
      var skipDelay = ref.skipDelay; if ( skipDelay === void 0 ) skipDelay = false;
      var skipAiming = ref.skipAiming; if ( skipAiming === void 0 ) skipAiming = false;

      var _a;
      if (this.$_hideInProgress)
        { return; }
      if (this.shownChildren.size > 0) {
        this.$_pendingHide = true;
        return;
      }
      if (!skipAiming && this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
        if (this.parentPopper) {
          this.parentPopper.lockedChild = this;
          clearTimeout(this.parentPopper.lockedChildTimer);
          this.parentPopper.lockedChildTimer = setTimeout(function () {
            if (this$1$1.parentPopper.lockedChild === this$1$1) {
              this$1$1.parentPopper.lockedChild.hide({ skipDelay: skipDelay });
              this$1$1.parentPopper.lockedChild = null;
            }
          }, 1e3);
        }
        return;
      }
      if (((_a = this.parentPopper) == null ? void 0 : _a.lockedChild) === this) {
        this.parentPopper.lockedChild = null;
      }
      this.$_pendingHide = false;
      this.$_scheduleHide(event, skipDelay);
      this.$emit("hide");
      this.$emit("update:shown", false);
    },
    init: function init() {
      if (!this.$_isDisposed)
        { return; }
      this.$_isDisposed = false;
      this.isMounted = false;
      this.$_events = [];
      this.$_preventShow = false;
      this.$_referenceNode = this.referenceNode();
      this.$_targetNodes = this.targetNodes().filter(function (e) { return e.nodeType === e.ELEMENT_NODE; });
      this.$_popperNode = this.popperNode();
      this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner");
      this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container");
      this.$_swapTargetAttrs("title", "data-original-title");
      this.$_detachPopperNode();
      if (this.triggers.length) {
        this.$_addEventListeners();
      }
      if (this.shown) {
        this.show();
      }
    },
    dispose: function dispose() {
      if (this.$_isDisposed)
        { return; }
      this.$_isDisposed = true;
      this.$_removeEventListeners();
      this.hide({ skipDelay: true });
      this.$_detachPopperNode();
      this.isMounted = false;
      this.isShown = false;
      this.$_updateParentShownChildren(false);
      this.$_swapTargetAttrs("data-original-title", "title");
      this.$emit("dispose");
    },
    onResize: async function onResize() {
      if (this.isShown) {
        await this.$_computePosition();
        this.$emit("resize");
      }
    },
    $_computePosition: async function $_computePosition() {
      var this$1$1 = this;

      var _a;
      if (this.$_isDisposed || this.positioningDisabled)
        { return; }
      var options2 = {
        strategy: this.strategy,
        middleware: []
      };
      if (this.distance || this.skidding) {
        options2.middleware.push(offset({
          mainAxis: this.distance,
          crossAxis: this.skidding
        }));
      }
      var isPlacementAuto = this.placement.startsWith("auto");
      if (isPlacementAuto) {
        options2.middleware.push(autoPlacement({
          alignment: (_a = this.placement.split("-")[1]) != null ? _a : ""
        }));
      } else {
        options2.placement = this.placement;
      }
      if (this.preventOverflow) {
        if (this.shift) {
          options2.middleware.push(shift({
            padding: this.overflowPadding,
            boundary: this.boundary,
            crossAxis: this.shiftCrossAxis
          }));
        }
        if (!isPlacementAuto && this.flip) {
          options2.middleware.push(flip({
            padding: this.overflowPadding,
            boundary: this.boundary
          }));
        }
      }
      options2.middleware.push(arrow({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      }));
      if (this.arrowOverflow) {
        options2.middleware.push({
          name: "arrowOverflow",
          fn: function (ref) {
            var placement = ref.placement;
            var rects = ref.rects;
            var middlewareData = ref.middlewareData;

            var overflow;
            var ref$1 = middlewareData.arrow;
            var centerOffset = ref$1.centerOffset;
            if (placement.startsWith("top") || placement.startsWith("bottom")) {
              overflow = Math.abs(centerOffset) > rects.reference.width / 2;
            } else {
              overflow = Math.abs(centerOffset) > rects.reference.height / 2;
            }
            return {
              data: {
                overflow: overflow
              }
            };
          }
        });
      }
      if (this.autoMinSize || this.autoSize) {
        var autoSize = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        options2.middleware.push({
          name: "autoSize",
          fn: function (ref) {
            var rects = ref.rects;
            var placement = ref.placement;
            var middlewareData = ref.middlewareData;

            var _a2;
            if ((_a2 = middlewareData.autoSize) == null ? void 0 : _a2.skip) {
              return {};
            }
            var width;
            var height;
            if (placement.startsWith("top") || placement.startsWith("bottom")) {
              width = rects.reference.width;
            } else {
              height = rects.reference.height;
            }
            this$1$1.$_innerNode.style[autoSize === "min" ? "minWidth" : autoSize === "max" ? "maxWidth" : "width"] = width != null ? (width + "px") : null;
            this$1$1.$_innerNode.style[autoSize === "min" ? "minHeight" : autoSize === "max" ? "maxHeight" : "height"] = height != null ? (height + "px") : null;
            return {
              data: {
                skip: true
              },
              reset: {
                rects: true
              }
            };
          }
        });
      }
      if (this.autoMaxSize || this.autoBoundaryMaxSize) {
        this.$_innerNode.style.maxWidth = null;
        this.$_innerNode.style.maxHeight = null;
        options2.middleware.push(size({
          boundary: this.boundary,
          padding: this.overflowPadding,
          apply: function (ref) {
            var width = ref.width;
            var height = ref.height;

            this$1$1.$_innerNode.style.maxWidth = width != null ? (width + "px") : null;
            this$1$1.$_innerNode.style.maxHeight = height != null ? (height + "px") : null;
          }
        }));
      }
      var data = await computePosition(this.$_referenceNode, this.$_popperNode, options2);
      Object.assign(this.result, {
        x: data.x,
        y: data.y,
        placement: data.placement,
        strategy: data.strategy,
        arrow: __spreadValues(__spreadValues({}, data.middlewareData.arrow), data.middlewareData.arrowOverflow)
      });
    },
    $_scheduleShow: function $_scheduleShow(event, skipDelay) {
      if ( skipDelay === void 0 ) skipDelay = false;

      this.$_updateParentShownChildren(true);
      this.$_hideInProgress = false;
      clearTimeout(this.$_scheduleTimer);
      if (hidingPopper && this.instantMove && hidingPopper.instantMove && hidingPopper !== this.parentPopper) {
        hidingPopper.$_applyHide(true);
        this.$_applyShow(true);
        return;
      }
      if (skipDelay) {
        this.$_applyShow();
      } else {
        this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
      }
    },
    $_scheduleHide: function $_scheduleHide(event, skipDelay) {
      if ( skipDelay === void 0 ) skipDelay = false;

      if (this.shownChildren.size > 0) {
        this.$_pendingHide = true;
        return;
      }
      this.$_updateParentShownChildren(false);
      this.$_hideInProgress = true;
      clearTimeout(this.$_scheduleTimer);
      if (this.isShown) {
        hidingPopper = this;
      }
      if (skipDelay) {
        this.$_applyHide();
      } else {
        this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
      }
    },
    $_computeDelay: function $_computeDelay(type) {
      var delay = this.delay;
      return parseInt(delay && delay[type] || delay || 0);
    },
    $_applyShow: async function $_applyShow(skipTransition) {
      var this$1$1 = this;
      if ( skipTransition === void 0 ) skipTransition = false;

      clearTimeout(this.$_disposeTimer);
      clearTimeout(this.$_scheduleTimer);
      this.skipTransition = skipTransition;
      if (this.isShown) {
        return;
      }
      this.$_ensureTeleport();
      await nextFrame();
      await this.$_computePosition();
      await this.$_applyShowEffect();
      if (!this.positioningDisabled) {
        this.$_registerEventListeners(getScrollParents(this.$_referenceNode).concat( getScrollParents(this.$_popperNode)
        ), "scroll", function () {
          this$1$1.$_computePosition();
        });
      }
    },
    $_applyShowEffect: async function $_applyShowEffect() {
      if (this.$_hideInProgress)
        { return; }
      if (this.computeTransformOrigin) {
        var bounds = this.$_referenceNode.getBoundingClientRect();
        var popperWrapper = this.$_popperNode.querySelector(".v-popper__wrapper");
        var parentBounds = popperWrapper.parentNode.getBoundingClientRect();
        var x = bounds.x + bounds.width / 2 - (parentBounds.left + popperWrapper.offsetLeft);
        var y = bounds.y + bounds.height / 2 - (parentBounds.top + popperWrapper.offsetTop);
        this.result.transformOrigin = x + "px " + y + "px";
      }
      this.isShown = true;
      this.$_applyAttrsToTarget({
        "aria-describedby": this.popperId,
        "data-popper-shown": ""
      });
      var showGroup = this.showGroup;
      if (showGroup) {
        var popover;
        for (var i = 0; i < shownPoppers.length; i++) {
          popover = shownPoppers[i];
          if (popover.showGroup !== showGroup) {
            popover.hide();
            popover.$emit("close-group");
          }
        }
      }
      shownPoppers.push(this);
      document.body.classList.add("v-popper--some-open");
      for (var theme of getAllParentThemes(this.theme)) {
        getShownPoppersByTheme(theme).push(this);
        document.body.classList.add(("v-popper--some-open--" + theme));
      }
      this.$emit("apply-show");
      this.classes.showFrom = true;
      this.classes.showTo = false;
      this.classes.hideFrom = false;
      this.classes.hideTo = false;
      await nextFrame();
      this.classes.showFrom = false;
      this.classes.showTo = true;
      if (!this.noAutoFocus)
        { this.$_popperNode.focus(); }
    },
    $_applyHide: async function $_applyHide(skipTransition) {
      var this$1$1 = this;
      if ( skipTransition === void 0 ) skipTransition = false;

      if (this.shownChildren.size > 0) {
        this.$_pendingHide = true;
        this.$_hideInProgress = false;
        return;
      }
      clearTimeout(this.$_scheduleTimer);
      if (!this.isShown) {
        return;
      }
      this.skipTransition = skipTransition;
      removeFromArray(shownPoppers, this);
      if (shownPoppers.length === 0) {
        document.body.classList.remove("v-popper--some-open");
      }
      for (var theme of getAllParentThemes(this.theme)) {
        var list = getShownPoppersByTheme(theme);
        removeFromArray(list, this);
        if (list.length === 0) {
          document.body.classList.remove(("v-popper--some-open--" + theme));
        }
      }
      if (hidingPopper === this) {
        hidingPopper = null;
      }
      this.isShown = false;
      this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      });
      clearTimeout(this.$_disposeTimer);
      var disposeTime = getDefaultConfig(this.theme, "disposeTimeout");
      if (disposeTime !== null) {
        this.$_disposeTimer = setTimeout(function () {
          if (this$1$1.$_popperNode) {
            this$1$1.$_detachPopperNode();
            this$1$1.isMounted = false;
          }
        }, disposeTime);
      }
      this.$_removeEventListeners("scroll");
      this.$emit("apply-hide");
      this.classes.showFrom = false;
      this.classes.showTo = false;
      this.classes.hideFrom = true;
      this.classes.hideTo = false;
      await nextFrame();
      this.classes.hideFrom = false;
      this.classes.hideTo = true;
    },
    $_autoShowHide: function $_autoShowHide() {
      if (this.shown) {
        this.show();
      } else {
        this.hide();
      }
    },
    $_ensureTeleport: function $_ensureTeleport() {
      if (this.$_isDisposed)
        { return; }
      var container = this.container;
      if (typeof container === "string") {
        container = window.document.querySelector(container);
      } else if (container === false) {
        container = this.$_targetNodes[0].parentNode;
      }
      if (!container) {
        throw new Error("No container for popover: " + this.container);
      }
      container.appendChild(this.$_popperNode);
      this.isMounted = true;
    },
    $_addEventListeners: function $_addEventListeners() {
      var this$1$1 = this;

      var handleShow = function (event) {
        if (this$1$1.isShown && !this$1$1.$_hideInProgress) {
          return;
        }
        event.usedByTooltip = true;
        !this$1$1.$_preventShow && this$1$1.show({ event: event });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, SHOW_EVENT_MAP, this.triggers, this.showTriggers, handleShow);
      this.$_registerTriggerListeners([this.$_popperNode], SHOW_EVENT_MAP, this.popperTriggers, this.popperShowTriggers, handleShow);
      var handleHide = function (skipAiming) { return function (event) {
        if (event.usedByTooltip) {
          return;
        }
        this$1$1.hide({ event: event, skipAiming: skipAiming });
      }; };
      this.$_registerTriggerListeners(this.$_targetNodes, HIDE_EVENT_MAP, this.triggers, this.hideTriggers, handleHide(false));
      this.$_registerTriggerListeners([this.$_popperNode], HIDE_EVENT_MAP, this.popperTriggers, this.popperHideTriggers, handleHide(true));
    },
    $_registerEventListeners: function $_registerEventListeners(targetNodes, eventType, handler) {
      this.$_events.push({ targetNodes: targetNodes, eventType: eventType, handler: handler });
      targetNodes.forEach(function (node) { return node.addEventListener(eventType, handler, supportsPassive ? {
        passive: true
      } : void 0); });
    },
    $_registerTriggerListeners: function $_registerTriggerListeners(targetNodes, eventMap, commonTriggers, customTrigger, handler) {
      var this$1$1 = this;

      var triggers = commonTriggers;
      if (customTrigger != null) {
        triggers = typeof customTrigger === "function" ? customTrigger(triggers) : customTrigger;
      }
      triggers.forEach(function (trigger) {
        var eventType = eventMap[trigger];
        if (eventType) {
          this$1$1.$_registerEventListeners(targetNodes, eventType, handler);
        }
      });
    },
    $_removeEventListeners: function $_removeEventListeners(filterEventType) {
      var newList = [];
      this.$_events.forEach(function (listener) {
        var targetNodes = listener.targetNodes;
        var eventType = listener.eventType;
        var handler = listener.handler;
        if (!filterEventType || filterEventType === eventType) {
          targetNodes.forEach(function (node) { return node.removeEventListener(eventType, handler); });
        } else {
          newList.push(listener);
        }
      });
      this.$_events = newList;
    },
    $_refreshListeners: function $_refreshListeners() {
      if (!this.$_isDisposed) {
        this.$_removeEventListeners();
        this.$_addEventListeners();
      }
    },
    $_handleGlobalClose: function $_handleGlobalClose(event, touch) {
      var this$1$1 = this;
      if ( touch === void 0 ) touch = false;

      if (this.$_showFrameLocked)
        { return; }
      this.hide({ event: event });
      if (event.closePopover) {
        this.$emit("close-directive");
      } else {
        this.$emit("auto-hide");
      }
      if (touch) {
        this.$_preventShow = true;
        setTimeout(function () {
          this$1$1.$_preventShow = false;
        }, 300);
      }
    },
    $_detachPopperNode: function $_detachPopperNode() {
      this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
    },
    $_swapTargetAttrs: function $_swapTargetAttrs(attrFrom, attrTo) {
      for (var el of this.$_targetNodes) {
        var value = el.getAttribute(attrFrom);
        if (value) {
          el.removeAttribute(attrFrom);
          el.setAttribute(attrTo, value);
        }
      }
    },
    $_applyAttrsToTarget: function $_applyAttrsToTarget(attrs) {
      for (var el of this.$_targetNodes) {
        for (var n in attrs) {
          var value = attrs[n];
          if (value == null) {
            el.removeAttribute(n);
          } else {
            el.setAttribute(n, value);
          }
        }
      }
    },
    $_updateParentShownChildren: function $_updateParentShownChildren(value) {
      var parent = this.parentPopper;
      while (parent) {
        if (value) {
          parent.shownChildren.add(this.randomId);
        } else {
          parent.shownChildren.delete(this.randomId);
          if (parent.$_pendingHide) {
            parent.hide();
          }
        }
        parent = parent.parentPopper;
      }
    },
    $_isAimingPopper: function $_isAimingPopper() {
      var referenceBounds = this.$el.getBoundingClientRect();
      if (mouseX >= referenceBounds.left && mouseX <= referenceBounds.right && mouseY >= referenceBounds.top && mouseY <= referenceBounds.bottom) {
        var popperBounds = this.$_popperNode.getBoundingClientRect();
        var vectorX = mouseX - mousePreviousX;
        var vectorY = mouseY - mousePreviousY;
        var distance = popperBounds.left + popperBounds.width / 2 - mousePreviousX + (popperBounds.top + popperBounds.height / 2) - mousePreviousY;
        var newVectorLength = distance + popperBounds.width + popperBounds.height;
        var edgeX = mousePreviousX + vectorX * newVectorLength;
        var edgeY = mousePreviousY + vectorY * newVectorLength;
        return lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.left, popperBounds.top, popperBounds.left, popperBounds.bottom) || lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.left, popperBounds.top, popperBounds.right, popperBounds.top) || lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.right, popperBounds.top, popperBounds.right, popperBounds.bottom) || lineIntersectsLine(mousePreviousX, mousePreviousY, edgeX, edgeY, popperBounds.left, popperBounds.bottom, popperBounds.right, popperBounds.bottom);
      }
      return false;
    }
  },
  render: function render() {
    return this.$scopedSlots.default(this.slotData)[0];
  }
});
};
if (typeof document !== "undefined" && typeof window !== "undefined") {
  if (isIOS) {
    document.addEventListener("touchstart", handleGlobalMousedown, supportsPassive ? {
      passive: true,
      capture: true
    } : true);
    document.addEventListener("touchend", handleGlobalTouchend, supportsPassive ? {
      passive: true,
      capture: true
    } : true);
  } else {
    window.addEventListener("mousedown", handleGlobalMousedown, true);
    window.addEventListener("click", handleGlobalClick, true);
  }
  window.addEventListener("resize", computePositionAllShownPoppers);
}
function handleGlobalMousedown(event) {
  for (var i = 0; i < shownPoppers.length; i++) {
    var popper = shownPoppers[i];
    try {
      var popperContent = popper.popperNode();
      popper.$_mouseDownContains = popperContent.contains(event.target);
    } catch (e) {
    }
  }
}
function handleGlobalClick(event) {
  handleGlobalClose(event);
}
function handleGlobalTouchend(event) {
  handleGlobalClose(event, true);
}
function handleGlobalClose(event, touch) {
  if ( touch === void 0 ) touch = false;

  var preventClose = {};
  var loop = function ( i ) {
    var popper = shownPoppers[i];
    try {
      var contains = popper.$_containsGlobalTarget = isContainingEventTarget(popper, event);
      popper.$_pendingHide = false;
      requestAnimationFrame(function () {
        popper.$_pendingHide = false;
        if (preventClose[popper.randomId])
          { return; }
        if (shouldAutoHide(popper, contains, event)) {
          popper.$_handleGlobalClose(event, touch);
          if (!event.closeAllPopover && event.closePopover && contains) {
            var parent2 = popper.parentPopper;
            while (parent2) {
              preventClose[parent2.randomId] = true;
              parent2 = parent2.parentPopper;
            }
            return;
          }
          var parent = popper.parentPopper;
          while (parent) {
            if (shouldAutoHide(parent, parent.$_containsGlobalTarget, event)) {
              parent.$_handleGlobalClose(event, touch);
            } else {
              break;
            }
            parent = parent.parentPopper;
          }
        }
      });
    } catch (e) {
    }
  };

  for (var i = shownPoppers.length - 1; i >= 0; i--) loop( i );
}
function isContainingEventTarget(popper, event) {
  var popperContent = popper.popperNode();
  return popper.$_mouseDownContains || popperContent.contains(event.target);
}
function shouldAutoHide(popper, contains, event) {
  return event.closeAllPopover || event.closePopover && contains || getAutoHideResult(popper, event) && !contains;
}
function getAutoHideResult(popper, event) {
  if (typeof popper.autoHide === "function") {
    var result = popper.autoHide(event);
    popper.lastAutoHide = result;
    return result;
  }
  return popper.autoHide;
}
function computePositionAllShownPoppers(event) {
  for (var i = 0; i < shownPoppers.length; i++) {
    var popper = shownPoppers[i];
    popper.$_computePosition(event);
  }
}
var mousePreviousX = 0;
var mousePreviousY = 0;
var mouseX = 0;
var mouseY = 0;
if (typeof window !== "undefined") {
  window.addEventListener("mousemove", function (event) {
    mousePreviousX = mouseX;
    mousePreviousY = mouseY;
    mouseX = event.clientX;
    mouseY = event.clientY;
  }, supportsPassive ? {
    passive: true
  } : void 0);
}
function lineIntersectsLine(x1, y1, x2, y2, x3, y3, x4, y4) {
  var uA = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
  var uB = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
  return uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1;
}
function getInternetExplorerVersion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  if (msie > 0) {
    return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
  }
  var trident = ua.indexOf("Trident/");
  if (trident > 0) {
    var rv = ua.indexOf("rv:");
    return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
  }
  var edge = ua.indexOf("Edge/");
  if (edge > 0) {
    return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
  }
  return -1;
}
var isIE;
function initCompat() {
  if (!initCompat.init) {
    initCompat.init = true;
    isIE = getInternetExplorerVersion() !== -1;
  }
}
var script = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: false
    },
    ignoreWidth: {
      type: Boolean,
      default: false
    },
    ignoreHeight: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    var _this = this;
    initCompat();
    this.$nextTick(function() {
      _this._w = _this.$el.offsetWidth;
      _this._h = _this.$el.offsetHeight;
      if (_this.emitOnMount) {
        _this.emitSize();
      }
    });
    var object = document.createElement("object");
    this._resizeObject = object;
    object.setAttribute("aria-hidden", "true");
    object.setAttribute("tabindex", -1);
    object.onload = this.addResizeHandlers;
    object.type = "text/html";
    if (isIE) {
      this.$el.appendChild(object);
    }
    object.data = "about:blank";
    if (!isIE) {
      this.$el.appendChild(object);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify: function compareAndNotify() {
      if (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) {
        this._w = this.$el.offsetWidth;
        this._h = this.$el.offsetHeight;
        this.emitSize();
      }
    },
    emitSize: function emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers: function addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify);
      this.compareAndNotify();
    },
    removeResizeHandlers: function removeResizeHandlers() {
      if (this._resizeObject && this._resizeObject.onload) {
        if (!isIE && this._resizeObject.contentDocument) {
          this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify);
        }
        this.$el.removeChild(this._resizeObject);
        this._resizeObject.onload = null;
        this._resizeObject = null;
      }
    }
  }
};
function normalizeComponent$1(template, style, script2, scopeId, isFunctionalTemplate, moduleIdentifier, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== "boolean") {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  }
  var options2 = typeof script2 === "function" ? script2.options : script2;
  if (template && template.render) {
    options2.render = template.render;
    options2.staticRenderFns = template.staticRenderFns;
    options2._compiled = true;
    if (isFunctionalTemplate) {
      options2.functional = true;
    }
  }
  if (scopeId) {
    options2._scopeId = scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function hook2(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (style) {
        style.call(this, createInjectorSSR(context));
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options2._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function(context) {
      style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function(context) {
      style.call(this, createInjector(context));
    };
  }
  if (hook) {
    if (options2.functional) {
      var originalRender = options2.render;
      options2.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options2.beforeCreate;
      options2.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return script2;
}
var __vue_script__ = script;
var __vue_render__ = function __vue_render__2() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "resize-observer",
    attrs: {
      tabindex: "-1"
    }
  });
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
var __vue_inject_styles__ = void 0;
var __vue_scope_id__ = "data-v-8859cc6c";
var __vue_module_identifier__ = void 0;
var __vue_is_functional_template__ = false;
var __vue_component__ = /* @__PURE__ */ normalizeComponent$1({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, void 0, void 0, void 0);
function install$1(Vue2) {
  Vue2.component("resize-observer", __vue_component__);
  Vue2.component("ResizeObserver", __vue_component__);
}
var plugin$1 = {
  version: "1.0.1",
  install: install$1
};
var GlobalVue$1 = null;
if (typeof window !== "undefined") {
  GlobalVue$1 = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue$1 = global.Vue;
}
if (GlobalVue$1) {
  GlobalVue$1.use(plugin$1);
}
var PrivateThemeClass = {
  computed: {
    themeClass: function themeClass() {
      return getThemeClasses(this.theme);
    }
  }
};
var __vue2_script$5 = {
  name: "VPopperContent",
  components: {
    ResizeObserver: __vue_component__
  },
  mixins: [
    PrivateThemeClass
  ],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object,
    result: Object
  },
  methods: {
    toPx: function toPx(value) {
      if (value != null && !isNaN(value)) {
        return (value + "px");
      }
      return null;
    }
  }
};
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { ref: "popover", staticClass: "v-popper__popper", class: [
    _vm.themeClass,
    _vm.classes.popperClass,
    {
      "v-popper__popper--shown": _vm.shown,
      "v-popper__popper--hidden": !_vm.shown,
      "v-popper__popper--show-from": _vm.classes.showFrom,
      "v-popper__popper--show-to": _vm.classes.showTo,
      "v-popper__popper--hide-from": _vm.classes.hideFrom,
      "v-popper__popper--hide-to": _vm.classes.hideTo,
      "v-popper__popper--skip-transition": _vm.skipTransition,
      "v-popper__popper--arrow-overflow": _vm.result && _vm.result.arrow.overflow,
      "v-popper__popper--no-positioning": !_vm.result
    }
  ], style: _vm.result ? {
    position: _vm.result.strategy,
    transform: "translate3d(" + Math.round(_vm.result.x) + "px," + Math.round(_vm.result.y) + "px,0)"
  } : void 0, attrs: { "id": _vm.popperId, "aria-hidden": _vm.shown ? "false" : "true", "tabindex": _vm.autoHide ? 0 : void 0, "data-popper-placement": _vm.result ? _vm.result.placement : void 0 }, on: { "keyup": function($event) {
    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
      return null;
    }
    _vm.autoHide && _vm.$emit("hide");
  } } }, [_c("div", { staticClass: "v-popper__backdrop", on: { "click": function($event) {
    _vm.autoHide && _vm.$emit("hide");
  } } }), _c("div", { staticClass: "v-popper__wrapper", style: _vm.result ? {
    transformOrigin: _vm.result.transformOrigin
  } : void 0 }, [_c("div", { ref: "inner", staticClass: "v-popper__inner" }, [_vm.mounted ? [_c("div", [_vm._t("default")], 2), _vm.handleResize ? _c("ResizeObserver", { on: { "notify": function($event) {
    return _vm.$emit("resize", $event);
  } } }) : _vm._e()] : _vm._e()], 2), _c("div", { ref: "arrow", staticClass: "v-popper__arrow-container", style: _vm.result ? {
    left: _vm.toPx(_vm.result.arrow.x),
    top: _vm.toPx(_vm.result.arrow.y)
  } : void 0 }, [_c("div", { staticClass: "v-popper__arrow-outer" }), _c("div", { staticClass: "v-popper__arrow-inner" })])])]);
};
var staticRenderFns$2 = [];
function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options2 = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render2) {
    options2.render = render2;
    options2.staticRenderFns = staticRenderFns2;
    options2._compiled = true;
  }
  if (functionalTemplate) {
    options2.functional = true;
  }
  if (scopeId) {
    options2._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options2._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(this, (options2.functional ? this.parent : this).$root.$options.shadowRoot);
    } : injectStyles;
  }
  if (hook) {
    if (options2.functional) {
      options2._injectStyles = hook;
      var originalRender = options2.render;
      options2.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options2.beforeCreate;
      options2.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options: options2
  };
}
var __cssModules$5 = {};
var __component__$5 = /* @__PURE__ */ normalizeComponent(__vue2_script$5, render$2, staticRenderFns$2, false, __vue2_injectStyles$5, null, null, null);
function __vue2_injectStyles$5(context) {
  for (var o in __cssModules$5) {
    this[o] = __cssModules$5[o];
  }
}
var PrivatePopperContent = /* @__PURE__ */ function() {
  return __component__$5.exports;
}();
var PrivatePopperMethods = {
  methods: {
    show: function show() {
      var ref;

      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];
      return (ref = this.$refs.popper).show.apply(ref, args);
    },
    hide: function hide() {
      var ref;

      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];
      return (ref = this.$refs.popper).hide.apply(ref, args);
    },
    dispose: function dispose() {
      var ref;

      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];
      return (ref = this.$refs.popper).dispose.apply(ref, args);
    },
    onResize: function onResize() {
      var ref;

      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];
      return (ref = this.$refs.popper).onResize.apply(ref, args);
    }
  }
};
var __vue2_script$4 = {
  name: "VPopperWrapper",
  components: {
    Popper: PrivatePopper(),
    PopperContent: PrivatePopperContent
  },
  mixins: [
    PrivatePopperMethods,
    PrivateThemeClass
  ],
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: function default$1() {
        return this.$options.vPopperTheme;
      }
    }
  },
  methods: {
    getTargetNodes: function getTargetNodes() {
      var this$1$1 = this;

      return Array.from(this.$refs.reference.children).filter(function (node) { return node !== this$1$1.$refs.popperContent.$el; });
    }
  }
};
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("Popper", _vm._g(_vm._b({ ref: "popper", attrs: { "theme": _vm.theme, "target-nodes": _vm.getTargetNodes, "reference-node": function() {
    return _vm.$refs.reference;
  }, "popper-node": function() {
    return _vm.$refs.popperContent.$el;
  } }, scopedSlots: _vm._u([{ key: "default", fn: function(ref) {
    var popperId = ref.popperId;
    var isShown = ref.isShown;
    var shouldMountContent = ref.shouldMountContent;
    var skipTransition = ref.skipTransition;
    var autoHide = ref.autoHide;
    var show = ref.show;
    var hide = ref.hide;
    var handleResize = ref.handleResize;
    var onResize = ref.onResize;
    var classes = ref.classes;
    var result = ref.result;
    return [_c("div", { ref: "reference", staticClass: "v-popper", class: [
      _vm.themeClass,
      {
        "v-popper--shown": isShown
      }
    ] }, [_vm._t("default", null, { "shown": isShown, "show": show, "hide": hide }), _c("PopperContent", { ref: "popperContent", attrs: { "popper-id": popperId, "theme": _vm.theme, "shown": isShown, "mounted": shouldMountContent, "skip-transition": skipTransition, "auto-hide": autoHide, "handle-resize": handleResize, "classes": classes, "result": result }, on: { "hide": hide, "resize": onResize } }, [_vm._t("popper", null, { "shown": isShown, "hide": hide })], 2)], 2)];
  } }], null, true) }, "Popper", _vm.$attrs, false), _vm.$listeners));
};
var staticRenderFns$1 = [];
var __cssModules$4 = {};
var __component__$4 = /* @__PURE__ */ normalizeComponent(__vue2_script$4, render$1, staticRenderFns$1, false, __vue2_injectStyles$4, null, null, null);
function __vue2_injectStyles$4(context) {
  for (var o in __cssModules$4) {
    this[o] = __cssModules$4[o];
  }
}
var PrivatePopperWrapper = /* @__PURE__ */ function() {
  return __component__$4.exports;
}();
var __vue2_script$3 = __spreadProps(__spreadValues({}, PrivatePopperWrapper), {
  name: "VDropdown",
  vPopperTheme: "dropdown"
});
var __vue2_render$2, __vue2_staticRenderFns$2;
var __cssModules$3 = {};
var __component__$3 = /* @__PURE__ */ normalizeComponent(__vue2_script$3, __vue2_render$2, __vue2_staticRenderFns$2, false, __vue2_injectStyles$3, null, null, null);
function __vue2_injectStyles$3(context) {
  for (var o in __cssModules$3) {
    this[o] = __cssModules$3[o];
  }
}
var PrivateDropdown = /* @__PURE__ */ function() {
  return __component__$3.exports;
}();
var __vue2_script$2 = __spreadProps(__spreadValues({}, PrivatePopperWrapper), {
  name: "VMenu",
  vPopperTheme: "menu"
});
var __vue2_render$1, __vue2_staticRenderFns$1;
var __cssModules$2 = {};
var __component__$2 = /* @__PURE__ */ normalizeComponent(__vue2_script$2, __vue2_render$1, __vue2_staticRenderFns$1, false, __vue2_injectStyles$2, null, null, null);
function __vue2_injectStyles$2(context) {
  for (var o in __cssModules$2) {
    this[o] = __cssModules$2[o];
  }
}
var PrivateMenu = /* @__PURE__ */ function() {
  return __component__$2.exports;
}();
var __vue2_script$1 = __spreadProps(__spreadValues({}, PrivatePopperWrapper), {
  name: "VTooltip",
  vPopperTheme: "tooltip"
});
var __vue2_render, __vue2_staticRenderFns;
var __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(__vue2_script$1, __vue2_render, __vue2_staticRenderFns, false, __vue2_injectStyles$1, null, null, null);
function __vue2_injectStyles$1(context) {
  for (var o in __cssModules$1) {
    this[o] = __cssModules$1[o];
  }
}
var PrivateTooltip = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
var __vue2_script = {
  name: "VTooltipDirective",
  components: {
    Popper: PrivatePopper(),
    PopperContent: PrivatePopperContent
  },
  mixins: [
    PrivatePopperMethods
  ],
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: "tooltip"
    },
    html: {
      type: Boolean,
      default: function default$2() {
        return getDefaultConfig(this.theme, "html");
      }
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: function default$3() {
        return getDefaultConfig(this.theme, "loadingContent");
      }
    }
  },
  data: function data() {
    return {
      asyncContent: null
    };
  },
  computed: {
    isContentAsync: function isContentAsync() {
      return typeof this.content === "function";
    },
    loading: function loading() {
      return this.isContentAsync && this.asyncContent == null;
    },
    finalContent: function finalContent() {
      if (this.isContentAsync) {
        return this.loading ? this.loadingContent : this.asyncContent;
      }
      return this.content;
    }
  },
  watch: {
    content: {
      handler: function handler() {
        this.fetchContent(true);
      },
      immediate: true
    },
    finalContent: async function finalContent(value) {
      await this.$nextTick();
      this.$refs.popper.onResize();
    }
  },
  created: function created() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent: function fetchContent(force) {
      var this$1$1 = this;

      if (typeof this.content === "function" && this.$_isShown && (force || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null;
        this.$_loading = true;
        var fetchId = ++this.$_fetchId;
        var result = this.content(this);
        if (result.then) {
          result.then(function (res) { return this$1$1.onResult(fetchId, res); });
        } else {
          this.onResult(fetchId, result);
        }
      }
    },
    onResult: function onResult(fetchId, result) {
      if (fetchId !== this.$_fetchId)
        { return; }
      this.$_loading = false;
      this.asyncContent = result;
    },
    onShow: function onShow() {
      this.$_isShown = true;
      this.fetchContent();
    },
    onHide: function onHide() {
      this.$_isShown = false;
    }
  }
};
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("Popper", _vm._g(_vm._b({ ref: "popper", attrs: { "theme": _vm.theme, "popper-node": function() {
    return _vm.$refs.popperContent.$el;
  } }, on: { "apply-show": _vm.onShow, "apply-hide": _vm.onHide }, scopedSlots: _vm._u([{ key: "default", fn: function(ref) {
    var popperId = ref.popperId;
    var isShown = ref.isShown;
    var shouldMountContent = ref.shouldMountContent;
    var skipTransition = ref.skipTransition;
    var autoHide = ref.autoHide;
    var hide = ref.hide;
    var handleResize = ref.handleResize;
    var onResize = ref.onResize;
    var classes = ref.classes;
    var result = ref.result;
    return [_c("PopperContent", { ref: "popperContent", class: {
      "v-popper--tooltip-loading": _vm.loading
    }, attrs: { "popper-id": popperId, "theme": _vm.theme, "shown": isShown, "mounted": shouldMountContent, "skip-transition": skipTransition, "auto-hide": autoHide, "handle-resize": handleResize, "classes": classes, "result": result }, on: { "hide": hide, "resize": onResize } }, [_vm.html ? _c("div", { domProps: { "innerHTML": _vm._s(_vm.finalContent) } }) : _c("div", { domProps: { "textContent": _vm._s(_vm.finalContent) } })])];
  } }]) }, "Popper", _vm.$attrs, false), _vm.$listeners));
};
var staticRenderFns = [];
var __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (var o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
var PrivateTooltipDirective = /* @__PURE__ */ function() {
  return __component__.exports;
}();
var TARGET_CLASS = "v-popper--has-tooltip";
function getPlacement(options2, modifiers) {
  var result = options2.placement;
  if (!result && modifiers) {
    for (var pos of placements) {
      if (modifiers[pos]) {
        result = pos;
      }
    }
  }
  if (!result) {
    result = getDefaultConfig(options2.theme || "tooltip", "placement");
  }
  return result;
}
function getOptions(el, value, modifiers) {
  var options2;
  var type = typeof value;
  if (type === "string") {
    options2 = { content: value };
  } else if (value && type === "object") {
    options2 = value;
  } else {
    options2 = { content: false };
  }
  options2.placement = getPlacement(options2, modifiers);
  options2.targetNodes = function () { return [el]; };
  options2.referenceNode = function () { return el; };
  return options2;
}
function createTooltip(el, value, modifiers) {
  var options2 = getOptions(el, value, modifiers);
  var tooltipApp = el.$_popper = new Vue({
    mixins: [
      PrivatePopperMethods
    ],
    data: function data() {
      return {
        options: options2
      };
    },
    render: function render(h) {
      var _a = this.options;
      var theme = _a.theme;
      var html = _a.html;
      var content = _a.content;
      var loadingContent = _a.loadingContent;
      var otherOptions = __objRest(_a, [
        "theme",
        "html",
        "content",
        "loadingContent"
      ]);
      return h(PrivateTooltipDirective, {
        props: {
          theme: theme,
          html: html,
          content: content,
          loadingContent: loadingContent
        },
        attrs: otherOptions,
        ref: "popper"
      });
    },
    devtools: {
      hide: true
    }
  });
  var mountTarget = document.createElement("div");
  document.body.appendChild(mountTarget);
  tooltipApp.$mount(mountTarget);
  if (el.classList) {
    el.classList.add(TARGET_CLASS);
  }
  return tooltipApp;
}
function destroyTooltip(el) {
  if (el.$_popper) {
    el.$_popper.$destroy();
    delete el.$_popper;
    delete el.$_popperOldShown;
  }
  if (el.classList) {
    el.classList.remove(TARGET_CLASS);
  }
}
function bind(el, ref) {
  var value = ref.value;
  ref.oldValue;
  var modifiers = ref.modifiers;

  var options2 = getOptions(el, value, modifiers);
  if (!options2.content || getDefaultConfig(options2.theme || "tooltip", "disabled")) {
    destroyTooltip(el);
  } else {
    var tooltipApp;
    if (el.$_popper) {
      tooltipApp = el.$_popper;
      tooltipApp.options = options2;
    } else {
      tooltipApp = createTooltip(el, value, modifiers);
    }
    if (typeof value.shown !== "undefined" && value.shown !== el.$_popperOldShown) {
      el.$_popperOldShown = value.shown;
      value.shown ? tooltipApp.show() : tooltipApp.hide();
    }
  }
}
var PrivateVTooltip = {
  bind: bind,
  update: bind,
  unbind: function unbind(el) {
    destroyTooltip(el);
  }
};
function addListeners(el) {
  el.addEventListener("click", onClick);
  el.addEventListener("touchstart", onTouchStart, supportsPassive ? {
    passive: true
  } : false);
}
function removeListeners(el) {
  el.removeEventListener("click", onClick);
  el.removeEventListener("touchstart", onTouchStart);
  el.removeEventListener("touchend", onTouchEnd);
  el.removeEventListener("touchcancel", onTouchCancel);
}
function onClick(event) {
  var el = event.currentTarget;
  event.closePopover = !el.$_vclosepopover_touch;
  event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
}
function onTouchStart(event) {
  if (event.changedTouches.length === 1) {
    var el = event.currentTarget;
    el.$_vclosepopover_touch = true;
    var touch = event.changedTouches[0];
    el.$_vclosepopover_touchPoint = touch;
    el.addEventListener("touchend", onTouchEnd);
    el.addEventListener("touchcancel", onTouchCancel);
  }
}
function onTouchEnd(event) {
  var el = event.currentTarget;
  el.$_vclosepopover_touch = false;
  if (event.changedTouches.length === 1) {
    var touch = event.changedTouches[0];
    var firstTouch = el.$_vclosepopover_touchPoint;
    event.closePopover = Math.abs(touch.screenY - firstTouch.screenY) < 20 && Math.abs(touch.screenX - firstTouch.screenX) < 20;
    event.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all;
  }
}
function onTouchCancel(event) {
  var el = event.currentTarget;
  el.$_vclosepopover_touch = false;
}
var PrivateVClosePopper = {
  bind: function bind(el, ref) {
    var value = ref.value;
    var modifiers = ref.modifiers;

    el.$_closePopoverModifiers = modifiers;
    if (typeof value === "undefined" || value) {
      addListeners(el);
    }
  },
  update: function update(el, ref) {
    var value = ref.value;
    var oldValue = ref.oldValue;
    var modifiers = ref.modifiers;

    el.$_closePopoverModifiers = modifiers;
    if (value !== oldValue) {
      if (typeof value === "undefined" || value) {
        addListeners(el);
      } else {
        removeListeners(el);
      }
    }
  },
  unbind: function unbind(el) {
    removeListeners(el);
  }
};
var Popper = PrivatePopper;
var PopperContent = PrivatePopperContent;
var PopperMethods = PrivatePopperMethods;
var ThemeClass = PrivateThemeClass;
function install$2(app, options2) {
  if ( options2 === void 0 ) options2 = {};

  if (app.$_vTooltipInstalled)
    { return; }
  app.$_vTooltipInstalled = true;
  assign(config, options2);
  app.directive("tooltip", PrivateVTooltip);
  app.directive("close-popper", PrivateVClosePopper);
  app.component("v-tooltip", PrivateTooltip);
  app.component("VTooltip", PrivateTooltip);
  app.component("v-dropdown", PrivateDropdown);
  app.component("VDropdown", PrivateDropdown);
  app.component("v-menu", PrivateMenu);
  app.component("VMenu", PrivateMenu);
}
var plugin = {
  version: "1.0.0-beta.19",
  install: install$2,
  options: config
};
var GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

var base$d =
    'inline-flex items-center justify-center rounded-lg uppercase font-semibold text-black-100 duration-250 ease-in-out border-3 focus:outline-none';

var variantPrimary$2 =
    'border-primary-100 transition-shadow hover:shadow disabled:shadow-none';
var variantSecondary$2 =
    'bg-primary-100 border-primary-100 transition-shadow hover:shadow disabled:shadow-none';
var variantTertiary$2 =
    'border-secondary-200 text-secondary-200 transition-colors hover:text-white disabled:text-secondary-200 hover:bg-secondary-200 disabled:bg-transparent';
var variantQuaternary$2 =
    'border-tertiary-100 text-secondary-200 transition-bg hover:bg-tertiary-100 disabled:bg-transparent';
var variantQuinary$2 =
    'border-black-100 transition-colors hover:text-white disabled:text-black-100 hover:bg-black-100 disabled:bg-transparent';

var stateDisable$1 = 'cursor-not-allowed opacity-75';

var sizeSm$1 = 'text-base px-1-3 py-0-3 leading-snug';
var sizeMd$1 = 'text-base px-1-5 py-0-4 leading-snug';
var sizeLg$1 = 'text-lg px-1-5 py-0-6 leading-none';

var displayBlock = 'w-full';

var DefaultTheme$k = {
    base: base$d,

    variantPrimary: variantPrimary$2,
    variantSecondary: variantSecondary$2,
    variantTertiary: variantTertiary$2,
    variantQuaternary: variantQuaternary$2,
    variantQuinary: variantQuinary$2,

    stateDisable: stateDisable$1,

    sizeSm: sizeSm$1,
    sizeMd: sizeMd$1,
    sizeLg: sizeLg$1,

    displayBlock: displayBlock
};

var base$c = 'no-underline cursor-pointer';
var inlineType = 'inline';
var inlineBlockType = 'inline-block';

var stateDisable = 'opacity-75 cursor-not-allowed';

var variantPrimary$1 = 'text-secondary-200 hover:text-black-200 border-b-2';
var variantSecondary$1 = '';
var variantTertiary$1 = 'hover:text-secondary-200 border-b';
var variantQuaternary$1 = 'text-tertiary-300 hover:text-black-200';
var variantQuinary$1 =
    'border-b border-dashed hover:text-tertiary-300 hover:border-tertiary-300';

var DefaultTheme$j = {
    base: base$c,
    inlineType: inlineType,
    inlineBlockType: inlineBlockType,
    stateDisable: stateDisable,
    variantPrimary: variantPrimary$1,
    variantSecondary: variantSecondary$1,
    variantTertiary: variantTertiary$1,
    variantQuaternary: variantQuaternary$1,
    variantQuinary: variantQuinary$1
};

var outerWrapBase = 'block px-0-4';
var outerWrapSpace = 'mb-0-8';

var innerWrapBase =
    'flex items-center border-2 rounded-lg -mx-0-4 transition-border duration-150';
var innerWrapStateDefault = 'border-black-200';
var innerWrapStateFocused = 'border-primary-100';
var innerWrapStateError = 'border-danger';
var innerWrapsizeSm = 'pl-0-5 pr-0-1';
var innerWrapsizeMd = 'px-0-8';

var labelBase$1 =
    'absolute left-0 max-w-full truncate pointer-events-none uppercase origin-top-left transition-transform ease-in duration-150 leading-snug';
var labelPositionFloat = 'transform -translate-y-full scale-75';
var labelStateDefault$1 = 'text-tertiary-300';
var labelStateError$1 = 'text-danger';
var labelBgPrimary = 'bg-white';
var labelSizeSm = 'px-0-2 top-0-3 text-sm';
var labelSizeMd = 'px-0-4 top-0-5';

var controlWrapBase = 'flex-auto relative';
var controlWrapSizeMd = 'py-0-5';
var controlWrapSizeSm = ' py-0-3';

var prependSizeMd = 'pr-0-4';
var prependSizeSm = 'pr-0-2';

var appendSizeMd = 'pl-0-4';
var appendSizeSm = 'pl-0-2';

var hintBase = 'text-tertiary-300';
var errorBase = 'text-danger';

var bottomPlaceholderBase = 'text-sm mt-0-2';

var DefaultTheme$i = {
    outerWrapBase: outerWrapBase,
    outerWrapSpace: outerWrapSpace,
    innerWrapBase: innerWrapBase,

    innerWrapStateDefault: innerWrapStateDefault,
    innerWrapStateFocused: innerWrapStateFocused,
    innerWrapStateError: innerWrapStateError,
    innerWrapsizeSm: innerWrapsizeSm,
    innerWrapsizeMd: innerWrapsizeMd,

    controlWrapBase: controlWrapBase,
    controlWrapSizeMd: controlWrapSizeMd,
    controlWrapSizeSm: controlWrapSizeSm,

    labelBase: labelBase$1,
    labelPositionFloat: labelPositionFloat,
    labelStateDefault: labelStateDefault$1,
    labelStateError: labelStateError$1,
    labelBgPrimary: labelBgPrimary,

    prependSizeSm: prependSizeSm,
    prependSizeMd: prependSizeMd,

    appendSizeSm: appendSizeSm,
    appendSizeMd: appendSizeMd,

    labelSizeSm: labelSizeSm,
    labelSizeMd: labelSizeMd,

    hintBase: hintBase,
    errorBase: errorBase,

    bottomPlaceholderBase: bottomPlaceholderBase
};

var controlWrap = 'relative';
var base$b = 'w-full form-input';
var stateReadonly = 'cursor-pointer';
var stateNotLabel = 'form-input-not-label';
var typeTextarea = 'resize-none';

var apperanceNumberWrap = 'absolute top-0 right-0 flex flex-col h-full';
var apperanceNumberBase =
    'inline-flex items-center justify-center h-1/2 cursor-pointer select-none';
var apperanceNumberStateDisable = 'opacity-50 pointer-events-none';

var sizeSmBase = '';
var sizeMdBase = '';

var DefaultTheme$h = Object.assign({}, DefaultTheme$i,
    {controlWrap: controlWrap,
    base: base$b,
    stateReadonly: stateReadonly,
    stateNotLabel: stateNotLabel,
    typeTextarea: typeTextarea,
    apperanceNumberWrap: apperanceNumberWrap,
    apperanceNumberBase: apperanceNumberBase,
    apperanceNumberStateDisable: apperanceNumberStateDisable,
    sizeSmBase: sizeSmBase,
    sizeMdBase: sizeMdBase});

var base$a = 'mb-1-4';

var DefaultTheme$g = {
    base: base$a
};

var wrapperBase = 'flex flex-wrap mb-0-4';

var labelBase = 'relative pl-1-4';
var labelStateDefault = 'cursor-pointer';
var labelStateDisabled = 'cursor-not-allowed opacity-50';
var labelStateError = 'cursor-pointer';

var inputBase$1 = 'absolute top-0-2 left-0 w-0-8 h-0-8';

var inputCheckboxBase = 'form-checkbox';
var inputCheckboxStateError = 'form-checkbox-is-error';

var inputRadioBase = 'form-radio';
var inputRadioStateError = 'form-radio-is-error';

var DefaultTheme$f = {
    wrapperBase: wrapperBase,

    labelBase: labelBase,
    labelStateDefault: labelStateDefault,
    labelStateDisabled: labelStateDisabled,
    labelStateError: labelStateError,

    inputBase: inputBase$1,

    inputCheckboxBase: inputCheckboxBase,
    inputCheckboxStateError: inputCheckboxStateError,

    inputRadioBase: inputRadioBase,
    inputRadioStateError: inputRadioStateError
};

var base$9 = 'outline-none select-none font-semibold text-lg uppercase px-1-5 py-0-7';
var stateDefault$1 = '';
var stateActive$1 = 'text-secondary-200 border-b-4 border-secondary-200';

var DefaultTheme$e = {
    base: base$9,
    stateDefault: stateDefault$1,
    stateActive: stateActive$1
};

var base$8 = '';

var DefaultTheme$d = {
    base: base$8
};

var base$7 = '';
var directionColumn = 'flex-col';
var directionHorizontal = 'flex-row';
var DISPLAY_FLEX = 'flex';
var DISPLAY_BLOCK$1 = 'block';

var DefaultTheme$c = {
    base: base$7,
    directionColumn: directionColumn,
    directionHorizontal: directionHorizontal,
    DISPLAY_FLEX: DISPLAY_FLEX,
    DISPLAY_BLOCK: DISPLAY_BLOCK$1
};

var base$6 = '';
var DISPLAY_LIST_ITEM = 'list-item';
var DISPLAY_INLINE = 'inline-block';
var DISPLAY_BLOCK = 'block';

var DefaultTheme$b = {
    base: base$6,
    DISPLAY_LIST_ITEM: DISPLAY_LIST_ITEM,
    DISPLAY_INLINE: DISPLAY_INLINE,
    DISPLAY_BLOCK: DISPLAY_BLOCK
};

var base$5 = 'container';
var modeFluid = 'max-w-none';

var DefaultTheme$a = {
    base: base$5,
    modeFluid: modeFluid
};

var base$4 = 'flex flex-wrap';

var guttersNormalizeXl = '-mx-1-2';
var guttersXl = 'px-1-2';

var guttersNormalizeLg = '-mx-0-8';
var guttersLg = 'px-0-8';

var guttersNormalizeMd = '-mx-0-4';
var guttersMd = 'px-0-4';

var guttersNormalizeSm = '-mx-0-2';
var guttersSm = 'px-0-2';

var guttersNormalizeNone = '';
var guttersNone = '';

var DefaultTheme$9 = {
    base: base$4,
    guttersNormalizeXl: guttersNormalizeXl,
    guttersXl: guttersXl,
    guttersNormalizeLg: guttersNormalizeLg,
    guttersLg: guttersLg,
    guttersNormalizeMd: guttersNormalizeMd,
    guttersMd: guttersMd,
    guttersNormalizeSm: guttersNormalizeSm,
    guttersSm: guttersSm,
    guttersNormalizeNone: guttersNormalizeNone,
    guttersNone: guttersNone
};

var base$3 = 'max-w-full';

var DefaultTheme$8 = {
    base: base$3
};

var panelHeaderBase = 'text-xl font-semibold mb-0-8';
var panelWrapperBase = 'mb-2-2';

var CFormPanel$1 = {
    panelHeaderBase: panelHeaderBase,
    panelWrapperBase: panelWrapperBase
};

var inputBase = 'cursor-pointer';
var inputIconBase = 'block form-select';
var inputIconSizeMd = 'w-1-4 h-1-4';
var inputIconSizeSm = 'w-1-2 h-1-2';
var inputIconClass = 'form-select-icon';

var optionBase = 'cursor-pointer py-0-4 px-0-8';
var optionStateDefault = 'bg-white hover:bg-tertiary-100';
var optionStateActive = 'bg-tertiary-100';

var listBase = 'overscroll-contain overflow-y-auto max-h-18-6';

var DefaultTheme$7 = {
    inputBase: inputBase,
    inputIconBase: inputIconBase,
    inputIconSizeMd: inputIconSizeMd,
    inputIconSizeSm: inputIconSizeSm,
    inputIconClass: inputIconClass,

    optionBase: optionBase,
    optionStateDefault: optionStateDefault,
    optionStateActive: optionStateActive,

    listBase: listBase
};

var base$2 = 'rounded-lg font-bold inline-block border-2 leading-none align-middle';

var variantPrimary = 'bg-primary-100 border-primary-100 text-white';
var variantSecondary = 'border-secondary-200 text-secondary-200';
var variantTertiary = 'text-danger border-danger';
var variantQuaternary = '';
var variantQuinary = '';

// TODO: Unit
var sizeSm = 'text-sm px-0-4 py-0-2';
var sizeMd = 'text-base px-0-6 py-0-3';
var sizeLg = 'text-lg px-0-8 py-0-4';

var DefaultTheme$6 = {
    base: base$2,

    variantPrimary: variantPrimary,
    variantSecondary: variantSecondary,
    variantTertiary: variantTertiary,
    variantQuaternary: variantQuaternary,
    variantQuinary: variantQuinary,
    sizeSm: sizeSm,
    sizeMd: sizeMd,
    sizeLg: sizeLg
};

var DefaultTheme$5 = {};

var stateDefault = '#dedede';
var stateActive = '#fda368';

var starsWrapper = 'inline-block';
var labelWrapper = 'inline-block align-middle';

var stateCursorPointer = 'cursor-pointer';

var DefaultTheme$4 = {
    stateDefault: stateDefault,
    stateActive: stateActive,

    starsWrapper: starsWrapper,
    labelWrapper: labelWrapper,

    stateCursorPointer: stateCursorPointer
};

var base$1 = 'inline-block';

var DefaultTheme$3 = {
    base: base$1
};

var DefaultTheme$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  CBadge: DefaultTheme$6,
  CButton: DefaultTheme$k,
  CCheckbox: DefaultTheme$f,
  CCol: DefaultTheme$8,
  CContainer: DefaultTheme$a,
  CForm: DefaultTheme$g,
  CFormField: DefaultTheme$i,
  CFormInput: DefaultTheme$h,
  CFormPanel: CFormPanel$1,
  CFormSelectCustom: DefaultTheme$7,
  CLink: DefaultTheme$j,
  CList: DefaultTheme$c,
  CListItem: DefaultTheme$b,
  CListToggle: DefaultTheme$5,
  CRadio: DefaultTheme$f,
  CRating: DefaultTheme$4,
  CRow: DefaultTheme$9,
  CStar: DefaultTheme$3,
  CTab: DefaultTheme$e,
  CTabPanel: DefaultTheme$d
});

var justifyCenter = 'justify-center';
var justifyBetween = 'justify-between';
var justifyStart = 'justify-start';
var justifyEnd = 'justify-end';

var noop = function () {};

var hasOwnProperty = function (obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); };

var getHashMapValue = function (themeMap, key) {
    return themeMap[key] || themeMap.default || null;
};

var upperFirst = function (str) { return str.charAt(0).toUpperCase() + str.slice(1); };

var suffixPropName = function (suffix, str) {
    return str + (suffix ? upperFirst(suffix) : '');
};

var numProp = function () { return ({
    type: Number,
    default: null
}); };

var stringProp = function () { return ({
    type: String,
    default: null
}); };

var justifyClaassUtil = function (justify) {
    var justifyMap = {
        start: justifyStart,
        end: justifyEnd,
        center: justifyCenter,
        between: justifyBetween
    };

    return justifyMap[justify] || null;
};

var selfInstall = function (Vue, theme, component) {
    if ( theme === void 0 ) theme = {};

    var props = component.props; if ( props === void 0 ) props = {};
    var name = component.name;
    var defaultComponentTheme = Object.assign({}, (props && props.theme ? props.theme.default() : {}));

    props.theme = {
        type: Object,
        default: function () {
            return Object.assign({}, defaultComponentTheme, theme);
        }
    };

    Vue.component(name, Object.assign({}, component,
        {props: props}));
};

var DEFAULTS = {
    common: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px'
        },
        validJustifyContent: ['start', 'end', 'between', 'center']
    },

    CButton: {
        tag: 'button',
        variant: 'primary',
        size: 'md'
    },

    CBadge: {
        variant: 'primary',
        size: 'md'
    },

    CLink: {
        variant: 'primary',
        target: '_self'
    },

    CCheckbox: {
        falseValue: false,
        trueValue: true
    },

    CList: {
        tag: 'ul',
        direction: 'vertical'
    },

    CListItem: {
        tag: 'li',
        inline: true
    },

    CRow: {
        direction: 'row',
        gutters: 'lg',
        cols: 12
    },

    CCol: {},

    CListToggle: {
        limit: 5
    },

    CTabs: {
        vertical: false,
        justify: 'start'
    },

    CTabPanels: {
        lazy: false
    },

    CTabPanel: {
        tag: 'section'
    },

    CDropdown: {
        theme: 'orto-ui'
    },

    FloatingVue: {
        themes: {
            'orto-ui': {
                placement: 'bottom',
                handleResize: true,
                delay: 0,
                triggers: ['click'],
                autoHide: true,
                $resetCss: true
            }
        }
    },

    CFormInput: {
        rows: 6
    },

    CFormSelectCustom: {
        optionValue: 'value',
        optionLabel: 'label',
        dropdownTheme: 'orto-ui'
    },

    CRating: {}
};

var PROP_NAME = '$ortoUIConfig';

var Config = function Config() {
    this.$_config = {};
};

var prototypeAccessors = { defaults: { configurable: true } };
var staticAccessors = { Defaults: { configurable: true } };

staticAccessors.Defaults.get = function () {
    return DEFAULTS;
};

prototypeAccessors.defaults.get = function () {
    return DEFAULTS;
};

// Returns the defaults
Config.prototype.getDefaults = function getDefaults () {
    return this.defaults;
};

// Method to merge in user config parameters
Config.prototype.setConfig = function setConfig (config) {
        var this$1$1 = this;
        if ( config === void 0 ) config = {};

    Object.keys(config).forEach(function (cmpName) {
        if (!hasOwnProperty(DEFAULTS, cmpName)) {
            console.warn(("config: unknown config property \"" + cmpName + "\""));
            return;
        }

        var cmpConfig = config[cmpName];

        // Component prop defaults
        var props = Object.getOwnPropertyNames(cmpConfig);
        props.forEach(function (prop) {
            if (!hasOwnProperty(DEFAULTS[cmpName], prop)) {
                console.warn(("config: unknown config property \"" + cmpName + "." + prop + "\""));
            } else {
                this$1$1.$_config[cmpName] = this$1$1.$_config[cmpName] || {};
                this$1$1.$_config[cmpName][prop] = cmpConfig[prop];
            }
        });
    });
};

Config.prototype.resetConfig = function resetConfig () {
    this.$_config = {};
};

Config.prototype.getConfig = function getConfig () {
    return this.$_config;
};

Config.prototype.getConfigValue = function getConfigValue (key) {
    return get(this.$_config, key, get(DEFAULTS, key));
};

Object.defineProperties( Config.prototype, prototypeAccessors );
Object.defineProperties( Config, staticAccessors );

var getConfigValue = function (key) {
    return Vue.prototype[PROP_NAME]
        ? Vue.prototype[PROP_NAME].getConfigValue(key)
        : get(DEFAULTS, key);
};

var ConfigPlugin = function (config, Vue) {
    if ( config === void 0 ) config = {};

    Vue.prototype[PROP_NAME] = new Config();
    Vue.prototype[PROP_NAME].setConfig(config);
};

var getComponentConfig = function (cmpName, key) {
    if ( key === void 0 ) key = null;

    return key ? getConfigValue((cmpName + "." + key)) : getConfigValue(cmpName) || {};
};

var NAME$o = 'CForm';

var props$8 = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$g; }
    }
};

var CForm = {
    name: NAME$o,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props$8,

    render: function render(h, ref) {
        var props = ref.props;
        var data = ref.data;
        var children = ref.children;

        var ref$1 = props.theme;
        var base = ref$1.base;

        var componentData = {
            staticClass: base
        };

        return h('form', mergeData(data, componentData), children);
    }
};

var FormPanel = {
    props: {
        label: {
            type: String,
            default: null
        },

        collapsible: {
            type: Boolean,
            default: false
        },

        collapsed: {
            type: Boolean,
            default: false
        }
    },

    data: function data() {
        return {
            open: !this.collapsed
        };
    },

    methods: {
        // TODO:
        toggle: function toggle() {
            this.open = !this.open;
        }
    },

    render: function render(h) {
        var ref = this.theme;
        var panelHeaderBase = ref.panelHeaderBase;
        var panelWrapperBase = ref.panelWrapperBase;

        return h(
            'div',
            {
                staticClass: panelWrapperBase
            },
            [
                this.label
                    ? h(
                          'header',
                          {
                              staticClass: panelHeaderBase
                          },
                          [h('div', this.label)]
                      )
                    : null,
                this.open
                    ? h('div', [
                          [
                              this.getControl !== void 0 // control slot
                                  ? this.getControl(h)
                                  : this.$slots.default
                          ]
                      ])
                    : null
            ]
        );
    }
};

var NAME$n = 'CFormPanel';

var CFormPanel = {
    name: NAME$n,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    mixins: [FormPanel],

    props: {
        theme: {
            type: Object,
            default: function () { return CFormPanel$1; }
        }
    },

    methods: {
        getControl: function getControl(h) {
            return h('div', [this.$slots.default]);
        }
    }
};

var NAME$m = 'CFormField';
var validSizes$3 = ['sm', 'md'];

var createSizeMap$2 = function (ref) {
    var labelSizeSm = ref.labelSizeSm;
    var labelSizeMd = ref.labelSizeMd;
    var innerWrapsizeSm = ref.innerWrapsizeSm;
    var innerWrapsizeMd = ref.innerWrapsizeMd;
    var controlWrapSizeMd = ref.controlWrapSizeMd;
    var controlWrapSizeSm = ref.controlWrapSizeSm;
    var appendSizeSm = ref.appendSizeSm;
    var appendSizeMd = ref.appendSizeMd;
    var prependSizeSm = ref.prependSizeSm;
    var prependSizeMd = ref.prependSizeMd;

    return {
        md: {
            label: labelSizeMd,
            innerWrap: innerWrapsizeMd,
            append: appendSizeMd,
            prepend: prependSizeMd,
            controlWrap: controlWrapSizeMd
        },
        sm: {
            label: labelSizeSm,
            innerWrap: innerWrapsizeSm,
            append: appendSizeSm,
            prepend: prependSizeSm,
            controlWrap: controlWrapSizeSm
        }
    };
};

var CFormField$1 = {
    name: NAME$m,

    inheritAttrs: false,

    props: {
        modelValue: {
            type: [String, Number]
        },

        label: {
            type: String
        },

        inline: {
            type: Boolean
        },

        name: {
            type: String
        },

        id: {
            type: String
        },

        placeholder: {
            type: String
        },

        hint: {
            type: String
        },

        error: {
            type: Boolean,
            default: false
        },

        errorMessage: {
            type: String
        },

        labelBgColor: {
            type: String
        },

        labelStick: {
            type: Boolean,
            default: false
        },

        size: {
            type: String,
            default: 'md',
            validator: function (value) { return validSizes$3.includes(value); }
        }
    },

    data: function data() {
        return {
            focused: false
        };
    },

    render: function render(h) {
        var this$1$1 = this;

        var ref = (function () {
            var ref = this$1$1.theme;
            var outerWrapBase = ref.outerWrapBase;
            var outerWrapSpace = ref.outerWrapSpace;
            var innerWrapBase = ref.innerWrapBase;
            var innerWrapStateDefault = ref.innerWrapStateDefault;
            var innerWrapStateFocused = ref.innerWrapStateFocused;
            var innerWrapStateError = ref.innerWrapStateError;
            var controlWrapBase = ref.controlWrapBase;
            var labelBase = ref.labelBase;
            var labelStateDefault = ref.labelStateDefault;
            var labelStateError = ref.labelStateError;
            var labelPositionFloat = ref.labelPositionFloat;
            var labelBgPrimary = ref.labelBgPrimary;
            var hintBase = ref.hintBase;
            var errorBase = ref.errorBase;
            var bottomPlaceholderBase = ref.bottomPlaceholderBase;

            var outerWrapClasses = [outerWrapBase];
            var innerWrapClasses = [innerWrapBase];
            var controlWrapClasses = [controlWrapBase];
            var labelClasses = [labelBase];
            var hintClasses = [hintBase];
            var errorClasses = [errorBase];
            var bottomPlaceholderClasses = [bottomPlaceholderBase];

            var sizes = createSizeMap$2(this$1$1.theme);

            if (!this$1$1.inline) {
                outerWrapClasses.push(outerWrapSpace);
            }

            if (!this$1$1.labelBgColor) {
                labelClasses.push(labelBgPrimary);
            } else {
                labelClasses.push(this$1$1.labelBgColor);
            }

            // status
            var isError = function () {
                innerWrapClasses.push(innerWrapStateError);
                labelClasses.push(labelStateError);
            };

            var isErrorAndNotEmptyOrFocused = function () {
                labelClasses.push(labelPositionFloat);
            };

            var isFocused = function () {
                innerWrapClasses.push(innerWrapStateFocused);
                labelClasses.push(labelPositionFloat);
                labelClasses.push(labelStateDefault);
            };

            var isNotEmpty = function () {
                labelClasses.push(labelPositionFloat);
                labelClasses.push(labelStateDefault);
                innerWrapClasses.push(innerWrapStateDefault);
            };

            var isDefault = function () {
                innerWrapClasses.push(innerWrapStateDefault);
                labelClasses.push(labelStateDefault);
            };

            level1: if (this$1$1.error) {
                isError();

                if (this$1$1.modelValue || this$1$1.focused) {
                    isErrorAndNotEmptyOrFocused();
                    break level1;
                }
            } else {
                if (this$1$1.focused) {
                    isFocused();
                    break level1;
                }

                if (this$1$1.modelValue || this$1$1.labelStick) {
                    isNotEmpty();
                    break level1;
                }

                isDefault();
            }

            var ref$1 = getHashMapValue(
                sizes,
                this$1$1.size
            );
            var label = ref$1.label;
            var innerWrap = ref$1.innerWrap;
            var prepend = ref$1.prepend;
            var append = ref$1.append;
            var controlWrap = ref$1.controlWrap;

            labelClasses.push(label);
            innerWrapClasses.push(innerWrap);
            controlWrapClasses.push(controlWrap);
            var appendWrapClasses = [append];
            var prependWrapClasses = [prepend];

            return {
                outerWrapClasses: outerWrapClasses,
                innerWrapClasses: innerWrapClasses,
                controlWrapClasses: controlWrapClasses,
                labelClasses: labelClasses,
                prependWrapClasses: prependWrapClasses,
                appendWrapClasses: appendWrapClasses,
                hintClasses: hintClasses,
                errorClasses: errorClasses,
                bottomPlaceholderClasses: bottomPlaceholderClasses
            };
        })();
        var outerWrapClasses = ref.outerWrapClasses;
        var innerWrapClasses = ref.innerWrapClasses;
        var controlWrapClasses = ref.controlWrapClasses;
        var labelClasses = ref.labelClasses;
        var prependWrapClasses = ref.prependWrapClasses;
        var appendWrapClasses = ref.appendWrapClasses;
        var hintClasses = ref.hintClasses;
        var errorClasses = ref.errorClasses;
        var bottomPlaceholderClasses = ref.bottomPlaceholderClasses;

        return h(
            'label', // outer wrap
            {
                class: outerWrapClasses,
                attrs: Object.assign({}, this.$attrs),
                on: this.$listeners
            },
            [
                h(
                    'div', // inner wrap
                    {
                        class: innerWrapClasses
                    },
                    [
                        this.$scopedSlots.prepend
                            ? h('div', { class: prependWrapClasses }, this.$scopedSlots.prepend())
                            : null, // append
                        h(
                            'div', // control wrap
                            {
                                class: controlWrapClasses
                            },
                            [
                                this.getControl !== void 0 // control slot
                                    ? this.getControl(h)
                                    : this.$slots.default,

                                this.$slots.label || this.label
                                    ? h(
                                          'div', // label
                                          {
                                              class: labelClasses,
                                              ref: 'label'
                                          },
                                          this.$slots.label || this.label
                                      )
                                    : null
                            ]
                        ),
                        this.$scopedSlots.append
                            ? h('div', { class: appendWrapClasses }, this.$scopedSlots.append())
                            : null // prepend
                    ]
                ),
                (this.error && this.errorMessage) || this.hint
                    ? h('div', { class: bottomPlaceholderClasses }, [
                          this.error && this.errorMessage
                              ? h('div', { class: errorClasses }, this.errorMessage)
                              : h('div', { class: hintClasses }, this.hint)
                      ])
                    : null
            ]
        );
    }
};

// TODO: support attr - inputmode

var validTypes$1 = [
    'text',
    'textarea',
    'password',
    'email',
    'number',
    'url',
    'tel',
    'search',
    'date'
];

var createSizeMap$1 = function (ref) {
    var sizeSmBase = ref.sizeSmBase;
    var sizeMdBase = ref.sizeMdBase;

    return {
        md: sizeMdBase,
        sm: sizeSmBase
    };
};

var NAME$l = 'CFormInput';

var REGEXP_NUMBER = /^\d+$/;

var CFormInput = {
    name: NAME$l,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    // inheritAttrs: false,

    mixins: [CFormField$1],

    props: {
        type: {
            type: String,
            default: 'text',
            validator: function (value) { return validTypes$1.includes(value); }
        },

        readonly: {
            type: Boolean,
            default: false
        },

        theme: {
            type: Object,
            default: function () { return DefaultTheme$h; }
        },

        // textarea specific

        rows: {
            type: Number,
            default: function () { return getComponentConfig(NAME$l, 'rows'); }
        },

        // number + date specific

        min: {
            type: [Number, String, Date],
            default: null
        },

        max: {
            type: [Number, String, Date],
            default: null
        }
    },

    model: {
        prop: 'modelValue',
        event: 'input'
    },

    computed: {
        isNumeric: function isNumeric() {
            return this.type === 'number';
        }
    },

    methods: {
        paste: function paste(event) {
            var clipboardData = event.clipboardData || window.clipboardData;

            if (clipboardData && !REGEXP_NUMBER.test(clipboardData.getData('text'))) {
                event.preventDefault();
            }
        },

        decrease: function decrease() {
            var numericValue = this.numericProcess(this.modelValue);

            if (isNaN(numericValue)) {
                numericValue = 1;
            }

            if (numericValue <= this.min) { return; }

            this.update({ type: 'change', value: numericValue - 1 });
        },

        increase: function increase() {
            var numericValue = this.numericProcess(this.modelValue);

            if (isNaN(numericValue)) {
                numericValue = 1;
            }

            if (numericValue === this.max) { return; }

            this.update({ type: 'change', value: numericValue + 1 });
        },

        numericProcess: function numericProcess(value) {
            /*
            1 - empty -> null
            2 - min/max
            3 - negative
            */
            var num = parseInt(value);
            var localValue = isNaN(num) ? value : num;

            // 1
            if (!localValue) { return this.min || 0; }

            // 2
            if (this.max) {
                if (localValue >= this.max) { return this.max; }
            }

            if (localValue <= this.min) { return this.min || 0; }

            // 3
            if (localValue < 0) { return this.min >= 0 ? this.min : 0; }

            return localValue;
        },

        onUpdate: function onUpdate(ref) {
            var e = ref.e;
            var type = ref.type;

            var value = e.target.value;

            if (this.isNumeric) {
                var numericValue = this.numericProcess(value);
                this.update({ type: type, value: numericValue });
            } else {
                this.update({ type: type, value: value });
            }
        },

        update: function update(ref) {
            var type = ref.type;
            var value = ref.value;

            this.$emit(type === 'input' ? 'input' : 'change', value);
        },

        getControl: function getControl(h) {
            var this$1$1 = this;

            //
            var ref = this.theme;
            var base = ref.base;
            var stateReadonly = ref.stateReadonly;
            var stateNotLabel = ref.stateNotLabel;
            var typeTextarea = ref.typeTextarea;
            var controlWrap = ref.controlWrap;
            var apperanceNumberWrap = ref.apperanceNumberWrap;
            var apperanceNumberBase = ref.apperanceNumberBase;
            var apperanceNumberStateDisable = ref.apperanceNumberStateDisable;

            var size = createSizeMap$1(this.theme);

            var isTextArea = this.type === 'textarea';

            var inputClasses = [base];

            if (isTextArea) { inputClasses.push(typeTextarea); }

            if (this.readonly) { inputClasses.push(stateReadonly); }

            if (!this.label) { inputClasses.push(stateNotLabel); }

            inputClasses.push(getHashMapValue(size, this.size));

            return h(
                'div',
                {
                    staticClass: controlWrap
                },
                [
                    h(isTextArea ? 'textarea' : 'input', {
                        attrs: Object.assign({}, this.$attrs,
                            {name: this.name,
                            id: this.id,
                            type: !isTextArea ? this.type : null,
                            rows: isTextArea ? this.rows : null},
                            (['number', 'date'].includes(this.type)
                                ? {
                                      min: this.min,
                                      max: this.max
                                  }
                                : null),
                            {placeholder: this.placeholder,
                            readonly: this.readonly}),

                        domProps: {
                            value: this.modelValue
                        },

                        class: inputClasses,

                        on: Object.assign({}, this.$listeners,

                            {focus: function () {
                                if (this$1$1.readonly) { return; }
                                this$1$1.focused = true;
                                this$1$1.$emit('focus');
                            },

                            blur: function () {
                                this$1$1.focused = false;
                                this$1$1.$emit('blur');
                            },

                            input: function (e) { return this$1$1.onUpdate({ e: e, type: 'input' }); },

                            change: function (e) { return this$1$1.onUpdate({ e: e, type: 'change' }); }},

                            (this.isNumeric && {
                                paste: function (e) {
                                    this$1$1.paste(e);
                                    this$1$1.$emit('paste');
                                }
                            }))
                    }),

                    // custom number appearance
                    this.isNumeric
                        ? h(
                              'div',
                              {
                                  staticClass: apperanceNumberWrap
                              },
                              [
                                  h(
                                      'span',
                                      {
                                          staticClass: apperanceNumberBase,
                                          class: [
                                              this.modelValue === this.max
                                                  ? apperanceNumberStateDisable
                                                  : null
                                          ],
                                          on: {
                                              click: this.increase
                                          }
                                      },
                                      this.$slots.up
                                  ),
                                  h(
                                      'span',
                                      {
                                          staticClass: apperanceNumberBase,
                                          class: [
                                              this.modelValue <= this.min
                                                  ? apperanceNumberStateDisable
                                                  : null
                                          ],
                                          on: {
                                              click: this.decrease
                                          }
                                      },
                                      this.$slots.down
                                  )
                              ]
                          )
                        : null
                ]
            );
        }
    }
};

var CFormField = {
    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    mixins: [CFormField$1],

    props: {
        theme: {
            type: Object,
            default: function () { return DefaultTheme$i; }
        }
    },

    methods: {
        getControl: function getControl(h) {
            return h(
                'div',
                {
                    on: Object.assign({}, this.$listeners)
                },
                [this.$slots.default]
            );
        }
    }
};

var NAME$k = 'CDropdown';

var CDropdown = {
    name: NAME$k,

    install: function install(Vue) {
        selfInstall(Vue, this);
    },

    components: {
        Popper: Popper(),
        PopperContent: PopperContent
    },

    mixins: [PopperMethods, ThemeClass],

    inheritAttrs: false,

    props: {
        theme: {
            type: String,
            default: function default$1() {
                return getComponentConfig(NAME$k, 'theme');
            }
        }
    },

    methods: {
        getTargetNodes: function getTargetNodes() {
            return Array.from(this.$refs.reference.children);
        }
    },

    render: function render(h) {
        var this$1$1 = this;

        return h('Popper', {
            ref: 'popper',
            props: Object.assign({}, {theme: this.theme,
                targetNodes: this.getTargetNodes,
                referenceNode: function () { return this$1$1.$refs.reference; },
                popperNode: function () { return this$1$1.$refs.popperContent.$el; }},
                // arrowNode: () => this.$refs.popperContent.$refs.arrow,
                this.$attrs),
            on: this.$listeners,
            scopedSlots: {
                default: function (ref) {
                        var popperId = ref.popperId;
                        var isShown = ref.isShown;
                        var shouldMountContent = ref.shouldMountContent;
                        var skipTransition = ref.skipTransition;
                        var autoHide = ref.autoHide;
                        var hide = ref.hide;
                        var handleResize = ref.handleResize;
                        var onResize = ref.onResize;
                        var classes = ref.classes;
                        var result = ref.result;

                        return h(
                        'div',
                        {
                            ref: 'reference',
                            class: [
                                this$1$1.themeClass,
                                'v-popper',
                                {
                                    'v-popper--shown': isShown
                                }
                            ]
                        },
                        [
                            this$1$1.$scopedSlots.default({ shown: isShown }),
                            h(
                                'PopperContent',
                                {
                                    ref: 'popperContent',
                                    props: {
                                        popperId: popperId,
                                        theme: this$1$1.theme,
                                        shown: isShown,
                                        mounted: shouldMountContent,
                                        skipTransition: skipTransition,
                                        autoHide: autoHide,
                                        handleResize: handleResize,
                                        classes: classes,
                                        result: result
                                    },
                                    on: {
                                        hide: hide,
                                        resize: onResize
                                    }
                                },
                                this$1$1.$scopedSlots.popper
                                    ? this$1$1.$scopedSlots.popper({ shown: isShown })
                                    : null
                            )
                        ]
                    );
        }
            }
        });
    }
};

var validDirection = ['vertical', 'horizontal'];

var NAME$j = 'CList';

var props$7 = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$c; }
    },

    tag: {
        type: String,
        default: function () { return getComponentConfig(NAME$j, 'tag'); }
    },

    direction: {
        type: String,
        default: function () { return getComponentConfig(NAME$j, 'direction'); },
        validator: function (value) { return validDirection.includes(value); }
    },

    justify: {
        type: String,
        default: null,
        validator: function (value) { return getComponentConfig('common', 'validJustifyContent').includes(value); }
    },

    block: {
        // for col-count-
        type: Boolean,
        default: false
    }
};

var currentClass$5 = function (ref) {
    var direction = ref.direction;
    var justify = ref.justify;
    var theme = ref.theme;
    var block = ref.block;

    var base = theme.base;
    var directionColumn = theme.directionColumn;
    var directionHorizontal = theme.directionHorizontal;
    var DISPLAY_FLEX = theme.DISPLAY_FLEX;
    var DISPLAY_BLOCK = theme.DISPLAY_BLOCK;

    var classMap = {
        vertical: directionColumn,
        horizontal: directionHorizontal
    };

    var classes = [base];

    if (block) {
        classes.push(DISPLAY_BLOCK);
    } else {
        classes.push(DISPLAY_FLEX);

        // horizontal/vertical
        classes.push(classMap[direction]);

        // horizontal align
        classes.push(justifyClaassUtil(justify));
    }

    return classes;
};

var CList = {
    name: NAME$j,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props$7,

    render: function render(h, ref) {
        var props = ref.props;
        var data = ref.data;
        var children = ref.children;

        var componentData = {
            class: currentClass$5(props)
        };

        return h(props.tag, mergeData(data, componentData), children);
    }
};

var NAME$i = 'CListItem';

var props$6 = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$b; }
    },

    tag: {
        type: String,
        default: function () { return getComponentConfig(NAME$i, 'tag'); }
    },

    inline: {
        type: Boolean,
        default: function () { return getComponentConfig(NAME$i, 'inline'); }
    },

    listItem: {
        type: Boolean,
        default: false
    }
};

var CListItem = {
    name: NAME$i,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props$6,

    render: function render(h, ref) {
        var props = ref.props;
        var data = ref.data;
        var children = ref.children;

        var ref$1 = props.theme;
        var base = ref$1.base;
        var DISPLAY_LIST_ITEM = ref$1.DISPLAY_LIST_ITEM;
        var DISPLAY_INLINE = ref$1.DISPLAY_INLINE;
        var DISPLAY_BLOCK = ref$1.DISPLAY_BLOCK;

        var componentData = {
            staticClass: base,
            class:
                props.tag === 'li' && props.listItem
                    ? DISPLAY_LIST_ITEM
                    : [props.inline ? DISPLAY_INLINE : DISPLAY_BLOCK]
        };

        return h(props.tag, mergeData(data, componentData), children);
    }
};

var validSizes$2 = ['sm', 'md'];
var NAME$h = 'CFormSelectCustom';

var createSizeMap = function (ref) {
    var inputIconSizeMd = ref.inputIconSizeMd;
    var inputIconSizeSm = ref.inputIconSizeSm;

    return {
        md: {
            icon: inputIconSizeMd
        },
        sm: {
            icon: inputIconSizeSm
        }
    };
};

var mapOption = function (ref) {
        var option = ref.option;
        var optionLabel = ref.optionLabel;
        var optionValue = ref.optionValue;

        return Object.keys(option).reduce(function (output, item) {
        if (item === optionLabel) {
            output['label'] = option[item];
        } else if (item === optionValue) {
            output['value'] = option[item];
        } else {
            output[item] = option[item];
        }

        return output;
    }, {});
};

var CFormSelectCustom = {
    name: NAME$h,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    components: {
        CDropdown: CDropdown,
        CList: CList,
        CListItem: CListItem
    },

    inheritAttrs: false,

    props: {
        modelValue: {
            type: [String, Number]
        },

        theme: {
            type: Object,
            default: function () { return DefaultTheme$7; }
        },

        label: {
            type: String
        },

        name: {
            type: String
        },

        labelBgColor: {
            type: String
        },

        placeholder: {
            type: String
        },

        data: {
            type: Array,
            default: function () { return []; }
        },

        optionValue: {
            type: String,
            default: function () { return getComponentConfig(NAME$h, 'optionValue'); }
        },

        optionLabel: {
            type: String,
            default: function () { return getComponentConfig(NAME$h, 'optionLabel'); }
        },

        error: {
            type: Boolean,
            default: false
        },

        size: {
            type: String,
            default: 'md',
            validator: function (value) { return validSizes$2.includes(value); }
        }
    },

    model: {
        prop: 'modelValue',
        event: 'change'
    },

    data: function data() {
        return {
            shownList: false,
            focusIndex: -1
        };
    },

    computed: {
        selectedOption: function selectedOption() {
            var this$1$1 = this;

            return this.data.find(function (item, idx) { return item[this$1$1.optionValue] === this$1$1.modelValue; });
        },

        selectedOption2: function selectedOption2() {
            var this$1$1 = this;

            return this.data.find(function (item, idx) { return idx === this$1$1.focusIndex; });
        },

        selectIndex: function selectIndex() {
            var this$1$1 = this;

            return this.data.findIndex(function (option) { return option[this$1$1.optionValue] === this$1$1.modelValue; });
        }
    },

    created: function created() {
        var this$1$1 = this;

        if (this.modelValue) {
            this.setFocusIndex(
                this.data.findIndex(function (option) { return option[this$1$1.optionValue] === this$1$1.modelValue; })
            );
        }
    },

    methods: {
        close: function close() {
            this.shownList = false;

            this.$refs.button.$el.focus();
        },

        open: function open() {
            var this$1$1 = this;

            this.shownList = true;

            setTimeout(function () {
                console.log(this$1$1.$refs.list);
                this$1$1.$refs.list.focus();
            }, 100);
        },

        setFocusIndex: function setFocusIndex(idx) {
            this.focusIndex = idx;
        },

        scrollToSelected: function scrollToSelected() {
            if (!this.$refs.list || !this.$refs.selected) { return; }
            var ref = this.$refs;
            var list = ref.list;
            var selected = ref.selected;
            var offsetTop = selected.offsetTop;
            var clientHeight = selected.clientHeight;

            var currentVisibleArea = list.scrollTop + list.clientHeight;

            if (offsetTop < list.scrollTop) {
                list.scrollTop = offsetTop;
            } else if (offsetTop + clientHeight > currentVisibleArea) {
                list.scrollTop = offsetTop - list.clientHeight + clientHeight;
            }
        }
    },

    watch: {
        // shownList: {
        //     immediate: true,
        //     handler() {
        //         this.$nextTick().then(() => {
        //             this.shownList &&
        //                 this.$refs.selected &&
        //                 this.$refs.selected.scrollIntoView({
        //                     block: 'nearest',
        //                     inline: 'start'
        //                 });
        //         });
        //     }
        // }
    },

    render: function render(h) {
        var this$1$1 = this;

        var ref = this;
        var options = ref.data;
        var theme = ref.theme;
        ref.modelValue;
        var label = ref.label;
        var placeholder = ref.placeholder;
        var optionLabel = ref.optionLabel;
        var optionValue = ref.optionValue;
        var error = ref.error;
        var size = ref.size;

        var inputBase = theme.inputBase;
        var inputIconBase = theme.inputIconBase;
        var listBase = theme.listBase;
        var inputIconClass = theme.inputIconClass;
        var optionBase = theme.optionBase;
        var optionStateDefault = theme.optionStateDefault;
        var optionStateActive = theme.optionStateActive;
        var sizes = createSizeMap(theme);

        var iconClass = [inputIconBase];

        var ref$1 = getHashMapValue(sizes, size);
        var icon = ref$1.icon;

        iconClass.push(icon);

        var computeOptionClasses = function (isSelected) {
            var classesBasedOnState = isSelected ? optionStateActive : optionStateDefault;
            return [optionBase, classesBasedOnState];
        };

        return h('CDropdown', {
            props: {
                theme: getComponentConfig(NAME$h, 'dropdownTheme')
            },

            attrs: {
                shown: this.shownList,
                triggers: ['']
            },

            on: {
                'auto-hide': this.close
            },

            scopedSlots: {
                popper: function () {
                    return h(
                        'CList',
                        {
                            staticClass: listBase,

                            ref: 'list',

                            attrs: {
                                tabindex: '-1',
                                role: 'listbox'
                            },

                            on: {
                                keydown: function (event) {
                                    console.log(event);
                                    if ([32, 37, 38, 39, 40, 9].includes(event.keyCode)) {
                                        event.preventDefault();
                                    }

                                    // TODO: пропускать при навигации стрелками `dropdown-list-item`

                                    switch (event.keyCode) {
                                        case 38:
                                            console.log('UP');
                                            // up
                                            if (this$1$1.focusIndex === 0) { return; }
                                            this$1$1.setFocusIndex(this$1$1.focusIndex - 1);
                                            break;

                                        case 40:
                                            // down
                                            console.log('DOWN');

                                            if (this$1$1.focusIndex === this$1$1.data.length - 1) {
                                                // скроллл в низ списка
                                                this$1$1.$refs.list.scrollTop =
                                                    this$1$1.$refs.list.scrollHeight;
                                                return;
                                            }

                                            this$1$1.setFocusIndex(this$1$1.focusIndex + 1);
                                            break;

                                        case 36:
                                            console.log('HOME');

                                            // home
                                            this$1$1.setFocusIndex(0);
                                            break;

                                        case 35:
                                            console.log('END');

                                            // end
                                            this$1$1.setFocusIndex(this$1$1.data.length - 1);
                                            break;

                                        case 13:
                                            console.log('ENTER');

                                            // enter

                                            var ref = mapOption({
                                                option: this$1$1.selectedOption2,
                                                optionLabel: optionLabel,
                                                optionValue: optionValue
                                            });
                                    var value = ref.value;

                                            this$1$1.$nextTick().then(function () {
                                                this$1$1.$emit('change', value);
                                                this$1$1.close();
                                            });

                                            break;

                                        case 9:
                                            // tab
                                            console.log('TAB');

                                            this$1$1.close();
                                            break;
                                    }

                                    this$1$1.$nextTick().then(function () {
                                        this$1$1.scrollToSelected();
                                    });
                                }
                            }
                        },
                        [
                            options.map(function (option, idx) {
                                var ref = mapOption({
                                    option: option,
                                    optionLabel: optionLabel,
                                    optionValue: optionValue
                                });
                                var value = ref.value;
                                var label = ref.label;

                                // const isSelected = value === modelValue;
                                var isSelected = idx === this$1$1.focusIndex;

                                return h(
                                    'CListItem',
                                    Object.assign({}, {class: computeOptionClasses(isSelected)},
                                        (isSelected && {
                                            ref: 'selected'
                                        }),
                                        {on: {
                                            click: function () {
                                                this$1$1.$emit('change', value);
                                                this$1$1.close();
                                            }
                                        }}),
                                    this$1$1.$scopedSlots.default
                                        ? this$1$1.$scopedSlots.default(option)
                                        : label
                                );
                            })
                        ]
                    );
                },

                default: function () {
                    return h(
                        'div',
                        {
                            on: {
                                click: function () {
                                    this$1$1.$emit('beforeOpen');
                                    this$1$1.$nextTick().then(this$1$1.open);
                                }
                            }
                        },
                        [
                            h(
                                'CFormField',
                                {
                                    props: {
                                        name: this$1$1.name,
                                        labelBgColor: this$1$1.labelBgColor,
                                        error: error,
                                        label: label,
                                        size: size,
                                        modelValue:
                                            this$1$1.selectedOption &&
                                            this$1$1.selectedOption[this$1$1.optionValue]
                                    },
                                    staticClass: inputBase,
                                    ref: 'button',
                                    scopedSlots: {
                                        append: function () { return h('i', { class: [iconClass, inputIconClass] }); }
                                    },
                                    attrs: Object.assign({}, {'aria-expanded': this$1$1.shownList ? 'true' : 'false',
                                        'aria-haspopup': 'listbox',
                                        tabindex: '0'},
                                        this$1$1.$attrs),
                                    on: {
                                        keydown: function (event) {
                                            switch (event.keyCode) {
                                                case 13:
                                                    console.log('ENTER');

                                                    this$1$1.open();
                                                    // enter

                                                    break;

                                                case 9:
                                                    // tab
                                                    console.log('TAB');

                                                    this$1$1.close();
                                                    break;

                                                case 38:
                                                    // up
                                                    if (this$1$1.selectIndex === 0) { return; }

                                                    this$1$1.$emit(
                                                        'change',
                                                        mapOption({
                                                            option: this$1$1.data[this$1$1.selectIndex - 1],
                                                            optionLabel: optionLabel,
                                                            optionValue: optionValue
                                                        }).value
                                                    );
                                                    break;
                                                case 40:
                                                    // down
                                                    if (this$1$1.selectIndex === this$1$1.data.length - 1)
                                                        { return; }

                                                    console.log(this$1$1.data[this$1$1.selectIndex + 1]);
                                                    this$1$1.$emit(
                                                        'change',
                                                        mapOption({
                                                            option: this$1$1.data[this$1$1.selectIndex + 1],
                                                            optionLabel: optionLabel,
                                                            optionValue: optionValue
                                                        }).value
                                                    );
                                                    break;
                                            }
                                        }
                                    }
                                },
                                this$1$1.selectedOption
                                    ? this$1$1.$scopedSlots.selected
                                        ? this$1$1.$scopedSlots.selected(this$1$1.selectedOption)
                                        : this$1$1.selectedOption[this$1$1.optionLabel]
                                    : placeholder || label
                            )
                        ]
                    );
                }
            }
        });
    }
};

var computeIsChecked = function (ref) {
    var type = ref.type;
    var modelValue = ref.modelValue;
    var value = ref.value;
    var trueValue = ref.trueValue;

    if (type === 'checkbox') {
        if (modelValue instanceof Array) {
            return modelValue.includes(value);
        }

        return modelValue === trueValue;
    }

    return modelValue === value;
};

var computeClasses = function (type, ref) {
    var disabled = ref.disabled;
    var error = ref.error;
    var theme = ref.theme;

    var labelBase = theme.labelBase;
    var labelStateDefault = theme.labelStateDefault;
    var labelStateDisabled = theme.labelStateDisabled;
    var labelStateError = theme.labelStateError;
    var wrapperBase = theme.wrapperBase;
    var inputBase = theme.inputBase;
    var inputCheckboxBase = theme.inputCheckboxBase;
    var inputCheckboxStateError = theme.inputCheckboxStateError;
    var inputRadioBase = theme.inputRadioBase;
    var inputRadioStateError = theme.inputRadioStateError;

    var labelClasses = [labelBase];
    var inputClass = [inputBase];

    inputClass.push(type === 'checkbox' ? inputCheckboxBase : inputRadioBase);

    if (disabled) {
        labelClasses.push(labelStateDisabled);
    } else if (error) {
        labelClasses.push(labelStateError);
        inputClass.push(type === 'checkbox' ? inputCheckboxStateError : inputRadioStateError);
    } else {
        labelClasses.push(labelStateDefault);
    }

    return {
        labelClasses: labelClasses,
        wrapperBase: wrapperBase,
        inputClass: inputClass
    };
};

function radioCheckbox (type) {
    //
    return {
        install: function install(Vue, theme) {
            selfInstall(Vue, theme, this);
        },

        inheritAttrs: false,

        functional: true,

        model: {
            prop: 'modelValue',
            event: 'change'
        },

        props: {
            theme: {
                type: Object,
                default: function () { return DefaultTheme$f; }
            },

            label: {
                type: String,
                default: null
            },

            name: {
                type: String,
                default: null
            },

            value: {
                type: [String, Number],
                default: null
            },

            id: {
                type: String,
                default: null // TODO: random uuid?
            },

            error: {
                type: Boolean,
                default: false
            },

            disabled: {
                type: Boolean,
                default: false
            }
        },

        render: function render(h, ref) {
            var props = ref.props;
            var listeners = ref.listeners;

            var name = props.name;
            var label = props.label;
            var id = props.id;
            var disabled = props.disabled;
            var theme = props.theme;
            var error = props.error;
            var value = props.value;
            var modelValue = props.modelValue;
            var trueValue = props.trueValue;
            var falseValue = props.falseValue;

            var isChecked = computeIsChecked({ type: type, modelValue: modelValue, value: value, trueValue: trueValue });

            var ref$1 = computeClasses(type, {
                theme: theme,
                error: error,
                disabled: disabled,
                isChecked: isChecked
            });
            var labelClasses = ref$1.labelClasses;
            var inputClass = ref$1.inputClass;
            var wrapperBase = ref$1.wrapperBase;

            var inputData = {
                class: inputClass,
                attrs: {
                    id: id,
                    name: name,
                    type: type,
                    disabled: disabled
                },
                domProps: {
                    checked: isChecked,
                    value: value
                },
                on: {
                    change: function (e) {
                        var checked = e.target.checked;

                        if (type === 'checkbox') {
                            if (modelValue instanceof Array) {
                                var newValue = [].concat( modelValue );

                                if (checked) {
                                    newValue.push(value);
                                } else {
                                    newValue.splice(newValue.indexOf(value), 1);
                                }

                                listeners['change'](newValue);

                                return;
                            }

                            listeners['change'](checked ? trueValue : falseValue);

                            return;
                        }

                        if (checked) {
                            listeners['change'](value);
                        }
                    }
                }
            };

            return h(
                'div',
                {
                    class: wrapperBase
                },
                [
                    h('label', { class: labelClasses, attrs: { for: id } }, [
                        h('input', inputData),
                        label
                    ])
                ]
            );
        }
    };
}

var NAME$g = 'CRadio';
var TYPE$3 = 'radio';

var props$5 = {
    modelValue: {
        type: [String, Number, Boolean],
        default: null
    },

    value: {
        type: [String, Number, Boolean],
        default: null
    }
};

var CRadio = Object.assign({}, {name: NAME$g},

    merge(radioCheckbox(TYPE$3), {
        props: props$5
    }));

var DefaultTheme$1 = Object.assign({}, CFormPanel$1);

// TODO: add limit...

function radioCheckboxGroup (type) {
    var mapComponents = {
        checkbox: 'CCheckbox',
        radio: 'CRadio'
    };

    var ChildComponent = mapComponents[type];

    return {
        install: function install(Vue, theme) {
            selfInstall(Vue, theme, this);
        },

        mixins: [FormPanel],

        props: {
            theme: {
                type: Object,
                default: function () { return DefaultTheme$1; }
            },

            name: {
                type: String
            },

            data: {
                type: Array,
                default: function () { return []; }
            }
        },

        model: {
            prop: 'modelValue',
            event: 'change'
        },

        methods: {
            getControl: function getControl(h) {
                var this$1$1 = this;

                var children = this.data.map(function (ref) {
                    var id = ref.id;
                    var label = ref.label;
                    var disabled = ref.disabled;
                    var value = ref.value;

                    return h(ChildComponent, {
                        props: {
                            modelValue: this$1$1.modelValue,
                            id: id,
                            label: label,
                            name: this$1$1.name,
                            disabled: disabled,
                            value: value
                        },
                        on: {
                            change: function (val) { return this$1$1.$emit('change', val); }
                        }
                    });
                });

                return h('div', children);
            }
        }
    };
}

var NAME$f = 'CRadioGroup';
var TYPE$2 = 'radio';

var CRadioGroup = Object.assign({}, {name: NAME$f},

    merge(radioCheckboxGroup(TYPE$2), {
        props: {
            modelValue: {
                type: [String, Number, Boolean],
                default: null
            }
        }
    }));

var NAME$e = 'CCheckbox';
var TYPE$1 = 'checkbox';

var props$4 = {
    modelValue: {
        type: [Array, Boolean, String, Number],
        default: null
    },

    trueValue: {
        type: [String, Number, Boolean],
        default: function () { return getComponentConfig(NAME$e, 'trueValue'); }
    },

    falseValue: {
        type: [String, Number, Boolean],
        default: function () { return getComponentConfig(NAME$e, 'falseValue'); }
    },

    error: {
        type: Boolean,
        default: false
    }
};

var CCheckbox = Object.assign({}, {name: NAME$e},

    merge(radioCheckbox(TYPE$1), {
        props: props$4
    }));

var NAME$d = 'CCheckboxGroup';
var TYPE = 'checkbox';

var CCheckboxGroup = Object.assign({}, {name: NAME$d},

    merge(radioCheckboxGroup(TYPE), {
        props: {
            modelValue: {
                type: Array,
                default: function () { return []; }
            }
        }
    }));

var NAME$c = 'CStar';

var CStar = {
    name: NAME$c,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        theme: {
            type: Object,
            default: function () { return DefaultTheme$3; }
        },

        fill: {
            type: Number,
            default: undefined
        },

        starId: {
            type: Number,
            required: true,
            default: undefined
        },

        activeColor: {
            type: String,
            required: true,
            default: undefined
        },

        inactiveColor: {
            type: String,
            required: true,
            default: undefined
        },

        size: {
            type: Number,
            default: undefined
        },

        gradeModel: {
            type: Number,
            default: undefined
        },

        id: {
            type: [Number, String],
            default: undefined
        }
    },

    data: function data() {
        return {
            starPoints: [19.8, 2.2, 6.6, 43.56, 39.6, 17.16, 0, 17.16, 33, 43.56],
            isStarActive: true
        };
    },

    model: {
        prop: 'gradeModel',
        event: 'starSelected'
    },

    computed: {
        starPointsToString: function starPointsToString() {
            return this.starPoints.join(',');
        },

        gradeId: function gradeId() {
            return ("url(#" + (this.id) + (this.starId) + ")");
        },

        starFill: function starFill() {
            return ((this.fill) + "%");
        },

        starSize: function starSize() {
            return ((this.size / 16) + "rem");
        }
    },

    methods: {
        mouseMoving: function mouseMoving(e) {
            if (e.touchAction !== 'undefined') {
                this.$emit('starMouseMove', {
                    event: e,
                    position: this.getPosition(e),
                    id: this.starId
                });
            }
        },

        touchStart: function touchStart() {
            var this$1$1 = this;

            this.$nextTick(function () {
                this$1$1.isStarActive = true;
            });
        },

        touchEnd: function touchEnd() {
            var this$1$1 = this;

            this.$nextTick(function () {
                this$1$1.isStarActive = false;
            });
        },

        getPosition: function getPosition(e) {
            var starWidth = (92 / 100) * this.size;
            var offset = Math.max(e.offsetX, 1);
            var position = Math.round((100 / starWidth) * offset);

            return Math.min(position, 100);
        },

        selected: function selected(e) {
            this.$emit('starSelected', {
                id: this.starId,
                position: this.getPosition(e)
            });
        }
    },

    render: function render(h) {
        var this$1$1 = this;

        var ref = this.theme;
        var base = ref.base;
        return h(
            'svg',
            {
                attrs: {
                    viewBox: '0 0 50 50',
                    xmlns: 'http://www.w3.org/2000/svg',
                    width: this.starSize
                },
                staticClass: base,
                on: {
                    mousemove: function (e) {
                        this$1$1.mouseMoving(e);
                    },
                    click: function (e) {
                        this$1$1.selected(e);
                    },
                    touchstart: function () {
                        this$1$1.touchStart();
                    },
                    touchend: function () {
                        this$1$1.touchEnd();
                    }
                }
            },
            [
                h(
                    'linearGradient',
                    {
                        attrs: {
                            id: ("" + (this.id) + (this.starId)),
                            x1: 0,
                            x2: '100%',
                            y1: 0,
                            y2: 0
                        }
                    },
                    [
                        h('stop', {
                            attrs: {
                                offset: this.starFill,
                                'stop-color': this.activeColor
                            }
                        }),
                        h('stop', {
                            attrs: {
                                offset: this.starFill,
                                'stop-color': this.inactiveColor
                            }
                        })
                    ]
                ),
                h('polygon', {
                    attrs: {
                        points: this.starPointsToString,
                        fill: this.gradeId
                    }
                })
            ]
        );
    }
};

var NAME$b = 'CRating';
var SCALE_DEFAULT = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 }
];

var CRating = {
    name: NAME$b,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    components: {
        CStar: CStar
    },

    props: {
        theme: {
            type: Object,
            default: function () { return DefaultTheme$4; }
        },

        id: {
            type: [Number, String],
            default: Math.random().toString(36).substring(7)
        },

        scale: {
            type: [Number, Array],
            default: 5
        },

        increment: {
            type: [Number, String],
            default: 1
        },

        rating: {
            type: [Number, String],
            default: undefined
        },

        readOnly: {
            type: Boolean,
            default: false
        },

        starSize: {
            type: Number,
            default: 32
        },

        activeOnClick: {
            type: Boolean,
            default: false
        },

        gradeModel: {
            type: Number,
            default: undefined
        }
    },

    data: function data() {
        return {
            fillLevel: [],
            currentRating: this.rating,
            selectedRating: this.rating,
            isSelected: false,
            activeColor: this.theme.stateActive,
            inactiveColor: this.theme.stateDefault,
            scaleComputed: this.scale.length ? this.scale : SCALE_DEFAULT
        };
    },

    model: {
        prop: 'gradeModel',
        event: 'starSelected'
    },

    computed: {
        computedLabel: function computedLabel() {
            var this$1$1 = this;

            return this.scaleComputed.find(function (item) { return item.value === this$1$1.currentRating; });
        },

        maxRating: function maxRating() {
            return this.scale.length || this.scale;
        },

        roundedRating: function roundedRating() {
            var inv = 1.0 / this.increment;
            return Math.min(this.maxRating, Math.ceil(this.currentRating * inv) / inv);
        },

        activeColors: function activeColors() {
            if (Array.isArray(this.activeColor)) {
                return this.padColors(
                    this.activeColor,
                    this.maxRating,
                    this.activeColor.slice(-1)[0]
                );
            }
            return new Array(this.maxRating).fill(this.activeColor);
        },

        currentActiveColor: function currentActiveColor() {
            if (!this.activeOnClick) {
                return this.currentRating > 0
                    ? this.activeColors[Math.ceil(this.currentRating) - 1]
                    : this.inactiveColor;
            }
            return this.selectedRating > 0
                ? this.activeColors[Math.ceil(this.selectedRating) - 1]
                : this.inactiveColor;
        }
    },

    created: function created() {
        this.createStars();
    },

    methods: {
        setRating: function setRating(e, persist) {
            if (!this.readOnly) {
                var position = e.position / 100;
                this.currentRating = (e.id + position).toFixed(2);
                this.currentRating =
                    this.currentRating > this.maxRating ? this.maxRating : this.currentRating;
                if (persist) {
                    this.createStars(true, true);
                    this.selectedRating =
                        this.currentRating === this.selectedRating ? 0 : this.currentRating;
                    this.$emit('starSelected', this.selectedRating);
                    this.isSelected = true;
                } else {
                    this.createStars(true, !this.activeOnClick);
                    this.$emit('starMouseMove', this.currentRating); // for storybook
                }
            }
        },

        resetRating: function resetRating() {
            if (!this.readOnly) {
                this.currentRating = this.selectedRating;
                this.createStars(this.isSelected);
            }
        },

        createStars: function createStars(round, applyFill) {
            if ( round === void 0 ) round = true;
            if ( applyFill === void 0 ) applyFill = true;

            this.currentRating = round ? this.roundedRating : this.currentRating;
            for (var i = 0; i < this.maxRating; i++) {
                var level = 0;
                if (i < this.currentRating) {
                    level = this.currentRating - i > 1 ? 100 : (this.currentRating - i) * 100;
                }
                if (applyFill) {
                    this.fillLevel[i] = Math.round(level);
                }
            }
        },

        padColors: function padColors(array, minLength, fillValue) {
            return Object.assign(new Array(minLength).fill(fillValue), array);
        }
    },

    render: function render(h) {
        var this$1$1 = this;

        var ref = this.theme;
        var starsWrapper = ref.starsWrapper;
        var labelWrapper = ref.labelWrapper;
        ref.stateCursorPointer;
        var stars = this.scaleComputed.map(function (ref, i) {
            var value = ref.value;

            if (typeof value === 'number' && value <= this$1$1.maxRating && value >= 0) {
                return h('CStar', {
                    props: {
                        fill: this$1$1.fillLevel[i],
                        starId: i,
                        activeColor: this$1$1.currentActiveColor,
                        inactiveColor: this$1$1.inactiveColor,
                        size: this$1$1.starSize,
                        gradeModel: this$1$1.gradeModel,
                        id: this$1$1.id
                    },
                    on: {
                        starSelected: function (e) { return this$1$1.setRating(e, true); },
                        starMouseMove: function (e) { return this$1$1.setRating(e); }
                    }
                });
            }
        });

        return h('div', [
            h(
                'span',
                {
                    staticClass: starsWrapper,
                    class: { stateCursorPointer: !this.readOnly },
                    on: {
                        mouseleave: function () { return this$1$1.resetRating(); }
                    }
                },
                stars
            ),
            (this.computedLabel && this.computedLabel.label) || this.rating
                ? h(
                      'div',
                      {
                          staticClass: labelWrapper
                      },
                      this.computedLabel && this.computedLabel.label
                          ? (" - " + (this.computedLabel.label))
                          : (" - " + (this.rating))
                  )
                : null
        ]);
    }
};

var NAME$a = 'CLink';
var LINK_TAG = 'a';
var SPAN_TAG = 'span';
var validVariants$2 = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary'];

var concat = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return Array.prototype.concat.apply([], args);
};
var isRouterLink = function (tag) { return ![LINK_TAG, SPAN_TAG].includes(tag.toString().toLowerCase()); };

var computeTag = function (ref, instance) {
    var to = ref.to;
    var disabled = ref.disabled;
    var href = ref.href;

    return instance.$router && to && !disabled
        ? instance.$nuxt
            ? 'nuxt-link'
            : 'router-link'
        : href
          ? LINK_TAG
          : SPAN_TAG;
};

var createThemeMap$3 = function (ref) {
    var variantPrimary = ref.variantPrimary;
    var variantSecondary = ref.variantSecondary;
    var variantTertiary = ref.variantTertiary;
    var variantQuaternary = ref.variantQuaternary;
    var variantQuinary = ref.variantQuinary;

    return {
        variants: {
            primary: variantPrimary,
            secondary: variantSecondary,
            tertiary: variantTertiary,
            quaternary: variantQuaternary,
            quinary: variantQuinary
        }
    };
};

function createProps() {
    return {
        href: {
            type: String,
            default: null
        },

        target: {
            type: String,
            default: function () { return getComponentConfig(NAME$a, 'target'); }
        },

        rel: {
            type: String,
            default: null
        },

        // router specific props ref: https://router.vuejs.org/api/#router-link
        to: {
            type: [String, Object],
            default: null
        },

        append: {
            type: Boolean,
            default: false
        },

        event: {
            type: [String, Array],
            default: 'click'
        },

        replace: {
            type: Boolean,
            default: false
        },

        activeClass: {
            type: String,
            default: 'router-link-active'
        },

        routerTag: {
            type: String,
            default: 'a'
        },

        exact: {
            type: Boolean,
            default: false
        },

        exactActiveClass: {
            type: String,
            default: 'router-link-exact-active'
        },

        // nuxt-link specific prop(s)
        noPrefetch: {
            type: Boolean,
            default: false
        }
    };
}

var CLink = {
    name: NAME$a,

    inheritAttrs: false,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: Object.assign({}, createProps(),

        {theme: {
            type: Object,
            default: function () { return DefaultTheme$j; }
        },

        button: {
            type: Boolean,
            default: false
        },

        variant: {
            type: String,
            default: function () { return getComponentConfig(NAME$a, 'variant'); },
            validator: function (value) { return validVariants$2.includes(value); }
        },

        inline: {
            type: Boolean,
            default: false
        },

        label: {
            type: String,
            default: null
        },

        disabled: {
            type: Boolean,
            default: false
        }}),

    computed: {
        computedTag: function computedTag() {
            return computeTag({ to: this.to, disabled: this.disabled, href: this.href }, this);
        },

        isRouterLink: function isRouterLink$1() {
            return isRouterLink(this.computedTag);
        },

        computedProps: function computedProps() {
            return this.isRouterLink ? Object.assign({}, this.$props, {tag: this.routerTag}) : {};
        }
    },

    methods: {
        onClick: function onClick(e) {
            var arguments$1 = arguments;

            var isEvent = e instanceof Event;
            var suppliedHandler = this.$listeners.click;

            if (isEvent && this.disabled) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            } else {
                if (this.isRouterLink && e.currentTarget.__vue__) {
                    e.currentTarget.__vue__.$emit('click', e);
                }

                // Call the suppliedHandler(s), if any provided
                concat(suppliedHandler)
                    .filter(function (h) { return h instanceof Function; })
                    .forEach(function (handler) {
                        handler.apply(void 0, arguments$1);
                    });

                // Emit the global $root click event
                this.$root.$emit('clicked::link', e);
            }

            // Stop scroll-to-top behavior or navigation on
            // regular links when href is just '#'
            if (isEvent && (this.disabled || (!this.isRouterLink && this.href === '#'))) {
                e.preventDefault();
            }
        }
    },

    render: function render(h) {
        var this$1$1 = this;

        var computedClass = function () {
            if (this$1$1.button) { return; }

            var ref = this$1$1.theme;
            var base = ref.base;
            var stateDisable = ref.stateDisable;
            var inlineType = ref.inlineType;
            var inlineBlockType = ref.inlineBlockType;
            var classes = [base];

            classes.push(this$1$1.inline ? inlineType : inlineBlockType);

            if (this$1$1.disabled) {
                classes.push(stateDisable);
            }

            var ref$1 = createThemeMap$3(this$1$1.theme);
            var variants = ref$1.variants;
            classes.push(getHashMapValue(variants, this$1$1.variant));

            return classes;
        };

        var componentData = {
            class: computedClass(),
            props: this.computedProps,
            attrs: Object.assign({}, this.$attrs,
                {tabindex: this.disabled ? '-1' : this.$attrs.tabindex ? this.$attrs.tabindex : null,
                'aria-disabled': this.disabled ? 'true' : null})
        };
        componentData[this.isRouterLink ? 'nativeOn' : 'on'] = Object.assign({}, this.$listeners,
                {click: this.onClick});

        if (this.href) {
            componentData.attrs.href = this.href;
            componentData.attrs.target = this.target;
            componentData.attrs.rel = this.computeRel;
        } else {
            delete componentData.attrs.href;
            delete componentData.attrs.target;
            delete componentData.attrs.rel;
        }

        return h(this.computedTag, componentData, this.label ? this.label : this.$slots.default);
    }
};

var NAME$9 = 'CButton';
var validVariants$1 = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary'];
var validSizes$1 = ['lg', 'md', 'sm'];
var validTagNames = ['button', 'a'];
var validTypes = ['submit', 'reset'];

// Button as Link helpers
var pluckProps = function (keysToPluck, objToPluck) {
    return Object.keys(keysToPluck).reduce(function (output, prop) {
        output[prop] = objToPluck[prop];
        return output;
    }, {});
};

var linkProps = createProps();
var isLink = function (props) { return Boolean(props.href || props.to || props.tag === 'a'); };
var computeLinkProps = function (props) { return isLink(props) ? Object.assign({}, pluckProps(linkProps, props), {button: true}) : {}; };

var createThemeMap$2 = function (ref) {
    var variantPrimary = ref.variantPrimary;
    var variantSecondary = ref.variantSecondary;
    var variantTertiary = ref.variantTertiary;
    var variantQuaternary = ref.variantQuaternary;
    var variantQuinary = ref.variantQuinary;
    var sizeLg = ref.sizeLg;
    var sizeSm = ref.sizeSm;
    var sizeMd = ref.sizeMd;

    return {
        variants: {
            primary: variantPrimary,
            secondary: variantSecondary,
            tertiary: variantTertiary,
            quaternary: variantQuaternary,
            quinary: variantQuinary
        },

        sizes: {
            lg: sizeLg,
            md: sizeMd,
            sm: sizeSm
        }
    };
};

var props$3 = Object.assign({}, linkProps,

    {theme: {
        type: Object,
        default: function () { return DefaultTheme$k; }
    },

    disabled: {
        type: Boolean,
        default: false
    },

    tag: {
        type: String,
        default: function () { return getComponentConfig(NAME$9, 'tag'); },
        validator: function (value) { return validTagNames.includes(value); }
    },

    label: {
        type: String,
        default: null
    },

    type: {
        type: String,
        default: null,
        validator: function (value) { return validTypes.includes(value); }
    },

    variant: {
        type: String,
        default: function () { return getComponentConfig(NAME$9, 'variant'); },
        validator: function (value) { return validVariants$1.includes(value); }
    },

    size: {
        type: String,
        default: function () { return getComponentConfig(NAME$9, 'size'); },
        validator: function (value) { return validSizes$1.includes(value); }
    },

    block: {
        type: Boolean,
        default: false
    }});

var currentClass$4 = function (ref) {
    var disabled = ref.disabled;
    var size = ref.size;
    var variant = ref.variant;
    var block = ref.block;
    var theme = ref.theme;

    var base = theme.base;
    var stateDisable = theme.stateDisable;
    var displayBlock = theme.displayBlock;
    var ref$1 = createThemeMap$2(theme);
    var sizes = ref$1.sizes;
    var variants = ref$1.variants;
    var classes = [base];

    classes.push(getHashMapValue(sizes, size));
    classes.push(getHashMapValue(variants, variant));

    if (disabled) {
        classes.push(stateDisable);
    }

    if (block) {
        classes.push(displayBlock);
    }

    return classes;
};

var computeAttrs = function (props) {
    var link = isLink(props);

    return {
        type: !link ? props.type : null,
        disabled: props.disabled
    };
};

var CButton = {
    name: NAME$9,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props$3,

    render: function render(h, ref) {
        var data = ref.data;
        var props = ref.props;
        var listeners = ref.listeners;
        var children = ref.children;

        var link = isLink(props);

        var onClick = listeners['onClick'] || noop;

        var on = {
            click: function click(e) {
                if (props.disabled) {
                    e.stopPropagation();
                    e.preventDefault();
                    return;
                }

                onClick(e);
            }
        };

        var componentData = {
            class: currentClass$4(props),
            props: computeLinkProps(props),
            attrs: computeAttrs(props),
            on: on
        };

        return h(
            link ? CLink : props.tag,
            mergeData(data, componentData),
            props.label ? props.label : children
        );
    }
};

var NAME$8 = 'CTabs';

var CTabs = {
    name: NAME$8,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        theme: {
            type: Object,
            default: function () {}
        },

        modelValue: {
            type: [Number, String],
            default: null
        },

        vertical: {
            type: Boolean,
            default: function () { return getComponentConfig(NAME$8, 'vertical'); }
        },

        justify: {
            type: String,
            default: function () { return getComponentConfig(NAME$8, 'justify'); },
            validator: function (value) { return getComponentConfig('common', 'validJustifyContent').includes(value); }
        }
    },

    model: {
        prop: 'modelValue',
        event: 'onChange'
    },

    render: function render(h, ref) {
        var data = ref.data;
        var props = ref.props;
        var children = ref.children; if ( children === void 0 ) children = [];
        var listeners = ref.listeners;

        var vertical = props.vertical;
        var justify = props.justify;

        var normalizeTabs = children.map(function (tab) {
            var ref = tab.componentOptions.propsData;
            var name = ref.name;
            var isActive = props.modelValue === name;
            var onChange = listeners['onChange'] || noop;

            // mixin isAactive props
            tab.componentOptions.propsData = Object.assign({}, tab.componentOptions.propsData,
                {isActive: isActive});

            // mixin listeners
            tab.componentOptions.listeners = Object.assign({}, tab.componentOptions.listeners,
                {onClick: function (name) { return onChange(name); }});

            return tab;
        });

        return h(
            'CList',

            mergeData(data, {
                attrs: {
                    role: 'tablist'
                },
                props: {
                    direction: vertical ? 'vertical' : 'horizontal',
                    justify: justify
                }
            }),

            [].concat( normalizeTabs )
        );
    }
};

var NAME$7 = 'CTab';

var CTab = {
    name: NAME$7,

    inheritAttrs: false,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        theme: {
            type: Object,
            default: function () { return DefaultTheme$e; }
        },

        label: {
            type: String,
            default: null
        },

        name: {
            type: String,
            default: null
        },

        isActive: {
            type: Boolean,
            default: false
        }
    },

    render: function render(h) {
        var this$1$1 = this;

        var ref = this.theme;
        var base = ref.base;
        var stateDefault = ref.stateDefault;
        var stateActive = ref.stateActive;

        return h('CListItem', { attrs: { role: 'presentation' } }, [
            h(
                'CLink',
                {
                    props: {
                        href: ("#" + (this.name)),
                        variant: 'secondary'
                    },
                    attrs: {
                        role: 'tab',
                        'aria-selected': this.isActive ? 'true' : 'false',
                        tabindex: this.isActive ? null : '-1',
                        id: ("tab-" + (this.name))
                    },
                    on: {
                        click: function (e) {
                            e.preventDefault();
                            return this$1$1.$emit('onClick', this$1$1.name);
                        }
                    },
                    staticClass: base,
                    class: [stateDefault, this.isActive ? stateActive : null]
                },
                this.label ? this.label : this.$slots.default
            )
        ]);
    }
};

var NAME$6 = 'CTabPanels';

var CTabPanels = {
    name: NAME$6,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        theme: {
            type: Object,
            default: function () {}
        },

        modelValue: {
            type: [String, Number],
            default: null
        },

        // v-if/show
        lazy: {
            type: Boolean,
            default: function () { return getComponentConfig(NAME$6, 'lazy'); }
        }
    },

    model: {
        prop: 'modelValue',
        event: 'change'
    },

    render: function render(h, ref) {
        var data = ref.data;
        var props = ref.props;
        var children = ref.children; if ( children === void 0 ) children = [];

        var normalizeTabPanels = children.map(function (tabPanel) {
            var ref = tabPanel.data;
            var name = ref.name;
            var isActive = props.modelValue === name;

            tabPanel.data = mergeData(tabPanel.data, {
                attrs: {
                    hidden: !isActive
                }
            });

            return props.lazy ? (isActive ? tabPanel : null) : tabPanel;
        });

        return h('div', mergeData(data, {}), [].concat( normalizeTabPanels ));
    }
};

var NAME$5 = 'CTabPanel';

var CTabPanel = {
    name: NAME$5,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        theme: {
            type: Object,
            default: function () { return DefaultTheme$d; }
        },

        tag: {
            type: String,
            default: function () { return getComponentConfig(NAME$5, 'tag'); }
        },

        name: {
            type: String,
            default: null
        }
    },

    render: function render(h, ref) {
        var data = ref.data;
        var props = ref.props;
        var children = ref.children;

        var ref$1 = props.theme;
        var base = ref$1.base;

        var componentData = {
            name: props.name,
            attrs: {
                role: 'tabpanel',
                id: props.name,
                'aria-labelledby': ("tab-" + (props.name))
            },
            staticClass: base
        };
        return h(props.tag, mergeData(data, componentData), [children]);
    }
};

var NAME$4 = 'CBadge';
var validVariants = ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary'];
var validSizes = ['lg', 'md', 'sm'];

var createThemeMap$1 = function (ref) {
    var variantPrimary = ref.variantPrimary;
    var variantSecondary = ref.variantSecondary;
    var variantTertiary = ref.variantTertiary;
    var variantQuaternary = ref.variantQuaternary;
    var variantQuinary = ref.variantQuinary;
    var sizeLg = ref.sizeLg;
    var sizeSm = ref.sizeSm;
    var sizeMd = ref.sizeMd;

    return {
        variants: {
            primary: variantPrimary,
            secondary: variantSecondary,
            tertiary: variantTertiary,
            quaternary: variantQuaternary,
            quinary: variantQuinary
        },
        sizes: {
            lg: sizeLg,
            md: sizeMd,
            sm: sizeSm
        }
    };
};

var props$2 = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$6; }
    },

    label: {
        type: String,
        default: null
    },

    variant: {
        type: String,
        default: function () { return getComponentConfig(NAME$4, 'variant'); },
        validator: function (value) { return validVariants.includes(value); }
    },

    size: {
        type: String,
        default: function () { return getComponentConfig(NAME$4, 'size'); },
        validator: function (value) { return validSizes.includes(value); }
    }
};

var currentClass$3 = function (ref) {
    var size = ref.size;
    var variant = ref.variant;
    var theme = ref.theme;

    var base = theme.base;
    var ref$1 = createThemeMap$1(theme);
    var variants = ref$1.variants;
    var sizes = ref$1.sizes;
    var classes = [base];

    classes.push(getHashMapValue(variants, variant));

    // TODO: Unit
    classes.push(getHashMapValue(sizes, size));

    return classes;
};

var CBadge = {
    name: NAME$4,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props$2,

    render: function render(h, ref) {
        var data = ref.data;
        var props = ref.props;
        var children = ref.children;

        var componentData = {
            class: currentClass$3(props)
        };

        return h('span', mergeData(data, componentData), props.label ? props.label : children);
    }
};

var base = 'w-full object-cover';

var DefaultTheme = {
    base: base
};

var NAME$3 = 'CPicture';

var generateProps$2 = function () {
    var screens = getComponentConfig('common', 'screens');
    var breakpoints = Object.keys(screens);

    var breakpointSources = breakpoints.reduce(function (prop, breakpoint) {
        prop[breakpoint] = stringProp();
        return prop;
    }, Object.create(null));

    return Object.assign({}, {theme: {
            type: Object,
            default: function () { return DefaultTheme; }
        },

        /**
          [
             { type: '', lg: null, md: null, sm: null }
          ]
         */
        formats: {
            type: Array,
            required: false
        },

        src: stringProp()},

        breakpointSources);
};

var createSources = function (h, screens, props) {
    var formats = props.formats;
    if (formats == null || formats.length == null) { return []; }

    return formats.map(function (format) {
        var sizes = mapSizesAndScreens(screens, format);
        var type = format.type;

        return h('source', {
            attrs: {
                type: ("image/" + type),
                srcset: getSrcSet(sizes)
            }
        });
    });
};

var mapSizesAndScreens = function (screens, sizes) {
    var breakpoints = Object.keys(screens);

    return breakpoints
        .filter(function (breakpointKey) { return sizes[breakpointKey]; })
        .map(function (breakpointKey) { return ({
            breakpoint: breakpointKey,
            breakpointWidth: screens[breakpointKey].replace('px', ''),
            src: sizes[breakpointKey]
        }); });
};

/**
 * get srcset attribute
 * @param mappedSizes: { breakpointWidth, src }
 * @returns string
 */
var getSrcSet = function (mappedSizes) {
    return mappedSizes
        .map(function (ref) {
            var breakpointWidth = ref.breakpointWidth;
            var src = ref.src;

            return (src + " " + breakpointWidth + "w");
        })
        .join(', ');
};

var currentClass$2 = function (ref) {
    var theme = ref.theme;

    return theme.base;
};

var CPicture = {
    name: NAME$3,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    get props() {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#Smart_self-overwriting_lazy_getters
        delete this.props;
        this.props = generateProps$2();

        return this.props;
    },

    render: function render(h, ref) {
        var data = ref.data;
        var props = ref.props;
        var parent = ref.parent;

        var screens = parent.$ortoUIConfig.getConfigValue('common.screens');

        var mappedSizes = mapSizesAndScreens(screens, props);
        var srcset = getSrcSet(mappedSizes) || null;

        var imgData = {
            class: currentClass$2(props),
            attrs: {
                src: props.src,
                srcset: srcset
            }
        };

        var sources = createSources(h, screens, props);

        return h('picture', sources.concat( [h('img', mergeData(data, imgData))]));
    }
};

var NAME$2 = 'CListToggle';

var props$1 = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$5; }
    },

    limit: {
        type: Number,
        default: function () { return getComponentConfig(NAME$2, 'limit'); }
    }
};

var CListToggle = {
    name: NAME$2,

    data: function data() {
        return {
            childCount: 0,
            innerLimit: this.limit
        };
    },

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props$1,

    created: function created() {
        var this$1$1 = this;

        // TODO: optimize
        this.$nextTick().then(function () {
            this$1$1.childCount = this$1$1.$scopedSlots.default().length;
        });
    },

    methods: {
        show: function show() {
            this.innerLimit = this.childCount;
        }
    },

    render: function render(h) {
        var this$1$1 = this;

        var getShow = function (children) {
            var el = children[0];
            el.data = mergeData(el.data, {
                on: {
                    click: this$1$1.show
                }
            });
            return el;
        };

        var getWrap = function (children) {
            var el = children[0];

            //
            el.children = this$1$1.innerLimit
                ? this$1$1.$scopedSlots.default().slice(0, this$1$1.innerLimit)
                : this$1$1.$scopedSlots.default();

            //
            if (this$1$1.childCount > this$1$1.innerLimit && this$1$1.$scopedSlots.show) {
                el.children.push(getShow(this$1$1.$scopedSlots.show()));
            }

            return el;
        };

        // TODO: проверка + throw err
        return getWrap(this.$scopedSlots.wrap());
    }
};

var props = {
    theme: {
        type: Object,
        default: function () { return DefaultTheme$a; }
    },

    fluid: {
        type: Boolean,
        default: false
    }
};

var currentClass$1 = function (ref) {
    var fluid = ref.fluid;
    var theme = ref.theme;

    var base = theme.base;
    var modeFluid = theme.modeFluid;
    var classes = [base];

    if (fluid) { classes.push(modeFluid); }

    return classes;
};

var CContainer = {
    name: 'CContainer',

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: props,

    render: function render(h, ref) {
        var props = ref.props;
        var data = ref.data;
        var children = ref.children;

        var componentData = {
            class: currentClass$1(props)
        };

        return h('div', mergeData(data, componentData), children);
    }
};

var OFFSET_PROP_NAME = 'offset';
var NAME$1 = 'CCol';

var generateProps$1 = function () {
    var obj;

    var screens = getComponentConfig('common', 'screens');
    var breakpoints = Object.keys(screens);

    var breakpointCols = breakpoints.reduce(function (prop, breakpoint) {
        prop[breakpoint] = numProp();
        return prop;
    }, Object.create(null));

    var breakpointOffsets = breakpoints.reduce(function (prop, breakpoint) {
        prop[suffixPropName(breakpoint, OFFSET_PROP_NAME)] = numProp();
        return prop;
    }, Object.create(null));

    return Object.assign({
        theme: {
            type: Object,
            default: function () { return DefaultTheme$8; }
        },

        cols: {
            type: Number,
            default: null
        }
    },

        breakpointCols,

        ( obj = {}, obj[OFFSET_PROP_NAME] = {
            type: Number,
            default: null
        }, obj ),

        breakpointOffsets);
};

var CCol = {
    name: NAME$1,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    get props() {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#Smart_self-overwriting_lazy_getters
        delete this.props;
        // eslint-disable-next-line no-return-assign
        return (this.props = generateProps$1());
    },

    render: function render(h, ref) {
        var data = ref.data;
        var props = ref.props;
        var parent = ref.parent;
        var children = ref.children;

        var ref$1 = props.theme;
        var base = ref$1.base;
        var screens = parent.$ortoUIConfig.getConfigValue('common.screens');
        var breakpoints = Object.keys(screens);

        var componentData = {
            staticClass: base,
            cols: Object.assign({}, {default: props.cols},
                breakpoints.reduce(function (output, item) {
                    output[item] = props[item];
                    return output;
                }, Object.create(null))),
            offset: Object.assign({}, {default: props.offset},
                // TODO: refactoring, dry
                breakpoints.reduce(function (output, item) {
                    output[item] = props[suffixPropName(item, OFFSET_PROP_NAME)];
                    return output;
                }, Object.create(null)))
        };

        return h('div', mergeData(data, componentData), children);
    }
};

var NAME = 'CRow';
var VALID_GUTTERS = ['none', 'sm', 'md', 'lg', 'xl'];
var GUTTERS_PROP_NAME = 'gutters';
var COLS_PROP_NAME = 'cols';

var getBreakpoint = function (key, name) { return key.replace(name, '').toLowerCase(); };
var wPrefix = 'w-';
var offsetPrefix = 'ml-';

var createThemeMap = function (ref) {
    var guttersNormalizeXl = ref.guttersNormalizeXl;
    var guttersXl = ref.guttersXl;
    var guttersNormalizeLg = ref.guttersNormalizeLg;
    var guttersLg = ref.guttersLg;
    var guttersNormalizeMd = ref.guttersNormalizeMd;
    var guttersMd = ref.guttersMd;
    var guttersNormalizeSm = ref.guttersNormalizeSm;
    var guttersSm = ref.guttersSm;
    var guttersNormalizeNone = ref.guttersNormalizeNone;
    var guttersNone = ref.guttersNone;

    return {
        gutters: {
            xl: {
                row: guttersNormalizeXl,
                col: guttersXl
            },
            lg: {
                row: guttersNormalizeLg,
                col: guttersLg
            },
            md: {
                row: guttersNormalizeMd,
                col: guttersMd
            },
            sm: {
                row: guttersNormalizeSm,
                col: guttersSm
            },
            none: {
                row: guttersNormalizeNone,
                col: guttersNone
            }
        }
    };
};

// Cached copy of the breakpoint prop names
var breakpointPropMap = Object.create(null);

var generateProps = function () {
    var obj, obj$1;

    var screens = getComponentConfig('common', 'screens');
    var breakpoints = Object.keys(screens);

    var breakpointGutters = breakpoints.reduce(function (prop, breakpoint) {
        prop[suffixPropName(breakpoint, GUTTERS_PROP_NAME)] = stringProp();
        return prop;
    }, Object.create(null));

    var breakpointCols = breakpoints.reduce(function (prop, breakpoint) {
        prop[breakpoint] = numProp();
        return prop;
    }, Object.create(null));

    breakpointPropMap = Object.assign(Object.create(null), {
        gutters: Object.keys(breakpointGutters),
        cols: Object.keys(breakpointCols)
    });

    return Object.assign(( obj = {
        theme: {
            type: Object,
            default: function () { return DefaultTheme$9; }
        }
    }, obj[COLS_PROP_NAME] = {
            type: Number,
            default: function () { return getComponentConfig(NAME, COLS_PROP_NAME); }
        }, obj ),

        breakpointCols,

        ( obj$1 = {}, obj$1[GUTTERS_PROP_NAME] = {
            type: String,
            default: function () { return getComponentConfig(NAME, 'gutters'); },
            validator: function (value) { return VALID_GUTTERS.includes(value); }
        }, obj$1 ),

        breakpointGutters);
};

//
var currentClass = function (props) {
    var gutter = props.gutters;
    var theme = props.theme;
    var base = theme.base;
    var ref = createThemeMap(theme);
    var gutters = ref.gutters;

    var rowClasses = [base];
    var colClasses = [];

    var ref$1 = getHashMapValue(gutters, gutter);
    var rowGuttersClass = ref$1.row;
    var colGuttersClass = ref$1.col;

    if (rowGuttersClass && colGuttersClass) {
        rowClasses.push(rowGuttersClass);
        colClasses.push(colGuttersClass);
    }

    // breakpoints gutters

    breakpointPropMap[GUTTERS_PROP_NAME].forEach(function (key) {
        if (!props[key]) { return undefined; }

        var breakpoint = getBreakpoint(key, 'gutters');

        if (breakpoint) {
            var ref =
                getHashMapValue(gutters, props[key]);
            var rowGuttersBreakpointClass = ref.row;
            var colGuttersBreakpointClass = ref.col;

            if (rowGuttersBreakpointClass && colGuttersBreakpointClass) {
                rowClasses.push((breakpoint + ":" + rowGuttersBreakpointClass));
                colClasses.push((breakpoint + ":" + colGuttersBreakpointClass));
            }
        }
    });

    return {
        rowClasses: rowClasses,
        colClasses: colClasses
    };
};

var createColBreakpointClass = function (ref) {
    var props = ref.props;
    var cols = ref.cols;
    var offset = ref.offset;
    var colsLimit = ref.colsLimit;

    if (!cols) { return null; }

    var classes = [];

    // width
    if (cols.default) {
        if (cols.default < colsLimit) {
            classes.push(("" + wPrefix + (cols.default) + "/" + colsLimit));
        }

        if (cols.default === colsLimit) {
            classes.push((wPrefix + "full"));
        }
    }

    // offset
    if (offset.default) {
        if (offset.default < colsLimit) {
            classes.push(("" + offsetPrefix + (offset.default) + "/" + colsLimit));
        }

        if (offset.default === colsLimit) {
            classes.push((offsetPrefix + "full"));
        }
    }

    breakpointPropMap[COLS_PROP_NAME].forEach(function (breakpoint) {
        var propsValue = props[breakpoint] || colsLimit;

        // breakpoint width
        if (cols[breakpoint]) {
            if (cols[breakpoint] < propsValue) {
                classes.push((breakpoint + ":" + wPrefix + (cols[breakpoint]) + "/" + propsValue));
            }

            if (cols[breakpoint] === propsValue) {
                classes.push((breakpoint + ":" + wPrefix + "full"));
            }
        } else {
            if (props[breakpoint] && cols.default) {
                classes.push((breakpoint + ":" + wPrefix + (cols.default) + "/" + propsValue));
            }
        }

        // breakpoint offset
        if (offset[breakpoint]) {
            if (offset[breakpoint] < propsValue) {
                classes.push((breakpoint + ":" + offsetPrefix + (offset[breakpoint]) + "/" + propsValue));
            }

            if (offset[breakpoint] === propsValue) {
                classes.push((breakpoint + ":" + offsetPrefix + "full"));
            }
        } else {
            if (props[breakpoint] && offset.default) {
                classes.push((breakpoint + ":" + offsetPrefix + (offset.default) + "/" + propsValue));
            }
        }
    });

    return classes;
};

var CRow = {
    name: NAME,

    functional: true,

    install: function install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    get props() {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#Smart_self-overwriting_lazy_getters
        delete this.props;
        // eslint-disable-next-line no-return-assign
        return (this.props = generateProps());
    },

    render: function render(h, ref) {
        var props = ref.props;
        var data = ref.data;
        var children = ref.children; if ( children === void 0 ) children = [];

        var ref$1 = currentClass(props);
        var rowClasses = ref$1.rowClasses;
        var colClasses = ref$1.colClasses;
        var computedChildren = children.map(function (col) {
            if (!col.data) { return; }

            var ref = col.data;
            var cols = ref.cols;
            var offset = ref.offset;

            var colBreakpointClass = createColBreakpointClass({
                props: props,
                cols: cols,
                offset: offset,
                colsLimit: props.cols
            });

            col.data = mergeData(col.data, {
                class: colClasses.concat( colBreakpointClass)
            });

            return col;
        });

        return h(
            'div',
            mergeData(data, {
                class: rowClasses
            }),
            computedChildren
        );
    }
};

var components = {
    CButton: CButton,
    CBadge: CBadge,
    CLink: CLink,
    CForm: CForm,
    CFormPanel: CFormPanel,
    CFormField: CFormField,
    CFormInput: CFormInput,
    CFormSelectCustom: CFormSelectCustom,
    CRadio: CRadio,
    CRadioGroup: CRadioGroup,
    CCheckbox: CCheckbox,
    CCheckboxGroup: CCheckboxGroup,
    CRating: CRating,
    CTabs: CTabs,
    CTab: CTab,
    CTabPanels: CTabPanels,
    CTabPanel: CTabPanel,
    CList: CList,
    CListItem: CListItem,
    CContainer: CContainer,
    CRow: CRow,
    CCol: CCol,
    CDropdown: CDropdown,
    CPicture: CPicture,
    CListToggle: CListToggle
};

var extendComponent = function (Vue, CurrentTheme, componentName) {
    // TODO: if props is undefined
    var ref = components[componentName];
    var props = ref.props; if ( props === void 0 ) props = {};

    // conflict with v-tooltip https://v-tooltip.netlify.app/guide/custom-component.html#full-example
    if (componentName !== 'CDropdown') {
        var themeDefaultSettings = props.theme ? props.theme.default() : null;
        var themeSettings = CurrentTheme[componentName];

        props.theme = {
            type: Object,
            default: function () {
                return Object.assign({}, themeDefaultSettings, themeSettings);
            }
        };
    }

    return Vue.extend(Object.assign({}, components[componentName],
        {props: props}));
};

var install = function (Vue, options) {
    if ( options === void 0 ) options = {};

    var theme = options.theme; if ( theme === void 0 ) theme = {};
    var config = options.config; if ( config === void 0 ) config = {};
    var injectComponentList = options.components; if ( injectComponentList === void 0 ) injectComponentList = null;

    ConfigPlugin(config, Vue);

    var CurrentTheme = Object.assign({}, DefaultTheme$2,
        theme);

    var componentsToRegister = injectComponentList || Object.keys(components);

    componentsToRegister.forEach(function (componentName) {
        Vue.component(componentName, extendComponent(Vue, CurrentTheme, componentName));
    });

    Vue.use(plugin, config.FloatingVue || {});
};

var index = {
    install: install
};

export { CButton, CCheckbox, CCheckboxGroup, CCol, CContainer, CDropdown, CForm, CFormField, CFormInput, CFormPanel, CFormSelectCustom, CLink, CList, CListItem, CListToggle, CPicture, CRadio, CRadioGroup, CRating, CRow, CTab, CTabPanel, CTabPanels, CTabs, index as default };
//# sourceMappingURL=orto-ui.esm.js.map
