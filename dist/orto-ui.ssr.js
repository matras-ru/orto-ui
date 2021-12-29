'use strict';Object.defineProperty(exports,'__esModule',{value:true});var Vue=require('vue'),get=require('lodash/get'),vueFunctionalDataMerge=require('vue-functional-data-merge'),merge=require('lodash/merge');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var Vue__default=/*#__PURE__*/_interopDefaultLegacy(Vue);var get__default=/*#__PURE__*/_interopDefaultLegacy(get);var merge__default=/*#__PURE__*/_interopDefaultLegacy(merge);var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};function getBasePlacement(placement) {
  return placement.split('-')[0];
}var max = Math.max;
var min = Math.min;
var round = Math.round;function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
    // Fallback to 1 in case both values are `0`

    if (offsetWidth > 0) {
      scaleX = round(rect.width) / offsetWidth || 1;
    }

    if (offsetHeight > 0) {
      scaleY = round(rect.height) / offsetHeight || 1;
    }
  }

  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
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

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};function getVariation(placement) {
  return placement.split('-')[1];
}var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body' && (canEscapeClipping ? getComputedStyle(clippingParent).position !== 'static' : true);
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") { break; }
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = offset + overflow[mainSide];
    var max$1 = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
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
}function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  var arguments$1 = arguments;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments$1[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules
function getInternetExplorerVersion() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');

  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');

  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');

  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  } // other browser


  return -1;
}

//
var isIE;

function initCompat() {
  if (!initCompat.init) {
    initCompat.init = true;
    isIE = getInternetExplorerVersion() !== -1;
  }
}

var script$6 = {
  name: 'ResizeObserver',
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
    this.$nextTick(function () {
      _this._w = _this.$el.offsetWidth;
      _this._h = _this.$el.offsetHeight;

      if (_this.emitOnMount) {
        _this.emitSize();
      }
    });
    var object = document.createElement('object');
    this._resizeObject = object;
    object.setAttribute('aria-hidden', 'true');
    object.setAttribute('tabindex', -1);
    object.onload = this.addResizeHandlers;
    object.type = 'text/html';

    if (isIE) {
      this.$el.appendChild(object);
    }

    object.data = 'about:blank';

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
      this.$emit('notify', {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers: function addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener('resize', this.compareAndNotify);

      this.compareAndNotify();
    },
    removeResizeHandlers: function removeResizeHandlers() {
      if (this._resizeObject && this._resizeObject.onload) {
        if (!isIE && this._resizeObject.contentDocument) {
          this._resizeObject.contentDocument.defaultView.removeEventListener('resize', this.compareAndNotify);
        }

        this.$el.removeChild(this._resizeObject);
        this._resizeObject.onload = null;
        this._resizeObject = null;
      }
    }
  }
};

function normalizeComponent$1(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function (context) {
      style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

/* script */
var __vue_script__$6 = script$6;
/* template */

var __vue_render__$3 = function __vue_render__() {
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

var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;
/* style */

var __vue_inject_styles__$6 = undefined;
/* scoped */

var __vue_scope_id__$6 = "data-v-8859cc6c";
/* module identifier */

var __vue_module_identifier__$6 = undefined;
/* functional template */

var __vue_is_functional_template__$6 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$6 = /*#__PURE__*/normalizeComponent$1({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);

function install$2(Vue) {
  // eslint-disable-next-line vue/component-definition-name-casing
  Vue.component('resize-observer', __vue_component__$6);
  Vue.component('ResizeObserver', __vue_component__$6);
}

var plugin$1 = {
  // eslint-disable-next-line no-undef
  version: "1.0.1",
  install: install$2
};

var GlobalVue$1 = null;

if (typeof window !== 'undefined') {
  GlobalVue$1 = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue$1 = global.Vue;
}

if (GlobalVue$1) {
  GlobalVue$1.use(plugin$1);
}function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) { symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    }); }
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  var arguments$1 = arguments;

  for (var i = 1; i < arguments.length; i++) {
    var source = arguments$1[i] != null ? arguments$1[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) { return {}; }
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) { continue; }
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) { return {}; }

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) { continue; }
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) { continue; }
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) { return _arrayLikeToArray(arr); }
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) { return Array.from(iter); }
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) { return; }
  if (typeof o === "string") { return _arrayLikeToArray(o, minLen); }
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) { n = o.constructor.name; }
  if (n === "Map" || n === "Set") { return Array.from(o); }
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) { return _arrayLikeToArray(o, minLen); }
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) { len = arr.length; }

  for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; }

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) { o = it; }
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) { return {
            done: true
          }; }
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) { it.return(); }
      } finally {
        if (didErr) { throw err; }
      }
    }
  };
}

function assign(to, from) {
  for (var key in from) {
    if (Object.prototype.hasOwnProperty.call(from, key)) {
      if (_typeof(from[key]) === 'object' && to[key]) {
        assign(to[key], from[key]);
      } else {
        to[key] = from[key];
      }
    }
  }
}

var config = {
  // Disable popper components
  disabled: false,
  // Default position offset [skidding, distance] (px)
  offset: [0, 5],
  // Default container where the tooltip will be appended
  container: 'body',
  // Element used to compute position and size boundaries
  boundary: undefined,
  // Skip delay & CSS transitions when another popper is shown, so that the popper appear to instanly move to the new position.
  instantMove: false,
  // Auto destroy tooltip DOM nodes (ms)
  disposeTimeout: 5000,
  // Triggers on the popper itself
  popperTriggers: [],
  // Positioning strategy
  strategy: 'absolute',
  // Popperjs modifiers
  modifiers: [],
  // Other options passed to Popperjs constructor
  popperOptions: {},
  // Themes
  themes: {
    tooltip: {
      // Default tooltip placement relative to target element
      placement: 'top',
      // Default events that trigger the tooltip
      triggers: ['hover', 'focus', 'touch'],
      // Close tooltip on click on tooltip target
      hideTriggers: function hideTriggers(events) {
        return [].concat(_toConsumableArray(events), ['click']);
      },
      // Delay (ms)
      delay: {
        show: 200,
        hide: 0
      },
      // Update popper on content resize
      handleResize: false,
      // Enable HTML content in directive
      html: false,
      // Displayed when tooltip content is loading
      loadingContent: '...'
    },
    dropdown: {
      // Default dropdown placement relative to target element
      placement: 'bottom',
      // Default events that trigger the dropdown
      triggers: ['click'],
      // Delay (ms)
      delay: 0,
      // Update popper on content resize
      handleResize: true,
      // Hide on clock outside
      autoHide: true
    },
    menu: {
      $extend: 'dropdown',
      triggers: ['hover', 'focus'],
      popperTriggers: ['hover', 'focus'],
      delay: {
        show: 0,
        hide: 400
      }
    }
  }
};
/**
 * Get default config value depending on theme
 */

function getDefaultConfig(theme, key) {
  var themeConfig = config.themes[theme] || {};
  var value;

  do {
    value = themeConfig[key];

    if (typeof value === 'undefined') {
      // Support theme extend
      if (themeConfig.$extend) {
        themeConfig = config.themes[themeConfig.$extend] || {};
      } else {
        // Base config
        themeConfig = null;
        value = config[key];
      }
    } else {
      themeConfig = null;
    }
  } while (themeConfig);

  return value;
}
/**
 * Theme CSS inheritance
 */

function getThemeClasses(theme) {
  var result = [theme];
  var themeConfig = config.themes[theme] || {};

  do {
    // Support theme extend
    if (themeConfig.$extend && !themeConfig.$resetCss) {
      result.push(themeConfig.$extend);
      themeConfig = config.themes[themeConfig.$extend] || {};
    } else {
      themeConfig = null;
    }
  } while (themeConfig);

  return result.map(function (c) {
    return "v-popper--theme-".concat(c);
  });
}

var supportsPassive = false;

if (typeof window !== 'undefined') {
  supportsPassive = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function get() {
        supportsPassive = true;
      }
    });
    window.addEventListener('test', null, opts);
  } catch (e) {}
}

var isIOS = false;

if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
  isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

function applyModifier(modifiers, name, options) {
  var modifier = modifiers.find(function (m) {
    return m.name === name;
  });

  if (!modifier) {
    modifier = {
      name: name,
      options: {}
    };
    modifiers.push(modifier);
  } else if (!modifier.options) {
    modifier.options = {};
  }

  Object.assign(modifier.options, options);
}

var SHOW_EVENT_MAP = {
  hover: 'mouseenter',
  focus: 'focus',
  click: 'click',
  touch: 'touchstart'
};
var HIDE_EVENT_MAP = {
  hover: 'mouseleave',
  focus: 'blur',
  click: 'click',
  touch: 'touchend'
};

function removeFromArray(array, item) {
  var index = array.indexOf(item);

  if (index !== -1) {
    array.splice(index, 1);
  }
}

var shownPoppers = [];
var hidingPopper = null;

var Element$1 = function Element() {};

if (typeof window !== 'undefined') {
  Element$1 = window.Element;
}

var PrivatePopper = (function () {
  return {
    name: 'VPopper',
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
      arrowNode: {
        type: Function,
        default: null
      },
      shown: {
        type: Boolean,
        default: false
      },
      showGroup: {
        type: String,
        default: null
      },
      // eslint-disable-next-line vue/require-prop-types
      ariaId: {
        default: null
      },
      disabled: {
        type: Boolean,
        default: function _default() {
          return getDefaultConfig(this.theme, 'disabled');
        }
      },
      placement: {
        type: String,
        default: function _default() {
          return getDefaultConfig(this.theme, 'placement');
        },
        validator: function validator(value) {
          return placements.includes(value);
        }
      },
      delay: {
        type: [String, Number, Object],
        default: function _default() {
          return getDefaultConfig(this.theme, 'delay');
        }
      },
      offset: {
        type: [Array, Function],
        default: function _default() {
          return getDefaultConfig(this.theme, 'offset');
        }
      },
      triggers: {
        type: Array,
        default: function _default() {
          return getDefaultConfig(this.theme, 'triggers');
        }
      },
      showTriggers: {
        type: [Array, Function],
        default: function _default() {
          return getDefaultConfig(this.theme, 'showTriggers');
        }
      },
      hideTriggers: {
        type: [Array, Function],
        default: function _default() {
          return getDefaultConfig(this.theme, 'hideTriggers');
        }
      },
      popperTriggers: {
        type: Array,
        default: function _default() {
          return getDefaultConfig(this.theme, 'popperTriggers');
        }
      },
      popperShowTriggers: {
        type: [Array, Function],
        default: function _default() {
          return getDefaultConfig(this.theme, 'popperShowTriggers');
        }
      },
      popperHideTriggers: {
        type: [Array, Function],
        default: function _default() {
          return getDefaultConfig(this.theme, 'popperHideTriggers');
        }
      },
      container: {
        type: [String, Object, Element$1, Boolean],
        default: function _default() {
          return getDefaultConfig(this.theme, 'container');
        }
      },
      boundary: {
        type: [String, Element$1],
        default: function _default() {
          return getDefaultConfig(this.theme, 'boundary');
        }
      },
      strategy: {
        type: String,
        validator: function validator(value) {
          return ['absolute', 'fixed'].includes(value);
        },
        default: function _default() {
          return getDefaultConfig(this.theme, 'strategy');
        }
      },
      modifiers: {
        type: Array,
        default: function _default() {
          return getDefaultConfig(this.theme, 'modifiers');
        }
      },
      popperOptions: {
        type: Object,
        default: function _default() {
          return getDefaultConfig(this.theme, 'popperOptions');
        }
      },
      autoHide: {
        type: Boolean,
        default: function _default() {
          return getDefaultConfig(this.theme, 'autoHide');
        }
      },
      handleResize: {
        type: Boolean,
        default: function _default() {
          return getDefaultConfig(this.theme, 'handleResize');
        }
      },
      instantMove: {
        type: Boolean,
        default: function _default() {
          return getDefaultConfig(this.theme, 'instantMove');
        }
      },
      eagerMount: {
        type: Boolean,
        default: function _default() {
          return getDefaultConfig(this.theme, 'eagerMount');
        }
      }
    },
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
        }
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
          autoHide: this.autoHide,
          hide: this.hide,
          handleResize: this.handleResize,
          onResize: this.onResize,
          classes: _objectSpread2({}, this.classes)
        };
      }
    },
    watch: {
      shown: '$_autoShowHide',
      disabled: function disabled(value) {
        if (value) {
          this.dispose();
        } else {
          this.init();
        }
      },
      container: function container() {
        var _this = this;

        return _asyncToGenerator(function* () {
          if (_this.isShown && _this.popperInstance) {
            _this.$_ensureContainer();

            yield _this.popperInstance.update();
          }
        })();
      },
      triggers: function triggers() {
        this.$_removeEventListeners();
        this.$_addEventListeners();
      },
      placement: '$_refreshPopperOptions',
      offset: '$_refreshPopperOptions',
      boundary: '$_refreshPopperOptions',
      strategy: '$_refreshPopperOptions',
      modifiers: '$_refreshPopperOptions',
      popperOptions: {
        handler: '$_refreshPopperOptions',
        deep: true
      }
    },
    created: function created() {
      this.randomId = "popper_".concat([Math.random(), Date.now()].map(function (n) {
        return n.toString(36).substr(2, 10);
      }).join('_'));
    },
    mounted: function mounted() {
      this.init();
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
      show: function show() {
        var _this2 = this;

        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            event = _ref.event,
            _ref$skipDelay = _ref.skipDelay,
            skipDelay = _ref$skipDelay === void 0 ? false : _ref$skipDelay,
            _ref$force = _ref.force,
            force = _ref$force === void 0 ? false : _ref$force;

        if (force || !this.disabled) {
          this.$_scheduleShow(event, skipDelay);
          this.$emit('show'); // Prevent hiding with global handler

          this.$_showFrameLocked = true;
          requestAnimationFrame(function () {
            _this2.$_showFrameLocked = false;
          });
        }

        this.$emit('update:shown', true);
      },
      hide: function hide() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            event = _ref2.event,
            _ref2$skipDelay = _ref2.skipDelay,
            skipDelay = _ref2$skipDelay === void 0 ? false : _ref2$skipDelay;

        this.$_scheduleHide(event, skipDelay);
        this.$emit('hide');
        this.$emit('update:shown', false);
      },
      init: function init() {
        this.$_isDisposed = false;
        this.isMounted = false;
        this.$_events = [];
        this.$_preventShow = false; // Nodes

        this.$_targetNodes = this.targetNodes().filter(function (e) {
          return e.nodeType === e.ELEMENT_NODE;
        });
        this.$_popperNode = this.popperNode();
        this.$_swapTargetAttrs('title', 'data-original-title');
        this.$_detachPopperNode();

        if (this.triggers.length) {
          this.$_addEventListeners();
        }

        if (this.shown) {
          this.show();
        }
      },
      dispose: function dispose() {
        this.$_isDisposed = true;
        this.$_removeEventListeners();
        this.hide({
          skipDelay: true
        });

        if (this.popperInstance) {
          this.popperInstance.destroy();
          this.$_detachPopperNode();
        }

        this.isMounted = false;
        this.popperInstance = null;
        this.isShown = false;
        this.$_swapTargetAttrs('data-original-title', 'title');
        this.$emit('dispose');
      },
      onResize: function onResize() {
        var _this3 = this;

        return _asyncToGenerator(function* () {
          if (_this3.isShown && _this3.popperInstance) {
            yield _this3.popperInstance.update();

            _this3.$emit('resize');
          }
        })();
      },
      $_getPopperOptions: function $_getPopperOptions() {
        var _this4 = this;

        var popperOptions = _objectSpread2(_objectSpread2({}, this.popperOptions), {}, {
          placement: this.placement,
          strategy: this.strategy,
          modifiers: this.modifiers,
          onFirstUpdate: function () {
            var _onFirstUpdate = _asyncToGenerator(function* (state) {
              if (_this4.popperOptions.onFirstUpdate) {
                _this4.popperOptions.onFirstUpdate(state);
              }

              yield _this4.$_applyShowEffect();
            });

            function onFirstUpdate(_x) {
              return _onFirstUpdate.apply(this, arguments);
            }

            return onFirstUpdate;
          }()
        });

        if (!popperOptions.modifiers) {
          popperOptions.modifiers = [];
        }

        applyModifier(popperOptions.modifiers, 'arrow', {
          element: this.arrowNode && this.arrowNode() || '[data-popper-arrow]'
        });

        if (this.offset) {
          applyModifier(popperOptions.modifiers, 'offset', {
            offset: this.offset
          });
        }

        if (this.boundary) {
          applyModifier(popperOptions.modifiers, 'preventOverflow', {
            boundary: this.boundary
          });
        }

        if (!this.isShown) {
          // Disable event listeners
          applyModifier(popperOptions.modifiers, 'eventListeners', {
            enabled: false
          });
        }

        return popperOptions;
      },
      $_refreshPopperOptions: function $_refreshPopperOptions() {
        var _this5 = this;

        return _asyncToGenerator(function* () {
          if (_this5.popperInstance) {
            yield _this5.popperInstance.setOptions(_this5.$_getPopperOptions());
          }
        })();
      },
      $_scheduleShow: function $_scheduleShow() {
        var skipDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.$_hideInProgress = false;
        clearTimeout(this.$_scheduleTimer);

        if (hidingPopper && this.instantMove && hidingPopper.instantMove) {
          hidingPopper.$_applyHide(true);
          this.$_applyShow(true);
          return;
        }

        if (skipDelay) {
          this.$_applyShow();
        } else {
          this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay('show'));
        }
      },
      $_scheduleHide: function $_scheduleHide() {
        var skipDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.$_hideInProgress = true;
        clearTimeout(this.$_scheduleTimer);

        if (this.isShown) {
          hidingPopper = this;
        }

        if (skipDelay) {
          this.$_applyHide();
        } else {
          this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay('hide'));
        }
      },
      $_computeDelay: function $_computeDelay(type) {
        var delay = this.delay;
        return parseInt(delay && delay[type] || delay || 0);
      },
      $_applyShow: function $_applyShow() {
        var _arguments = arguments,
            _this6 = this;

        return _asyncToGenerator(function* () {
          var skipTransition = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;
          clearTimeout(_this6.$_disposeTimer);
          clearTimeout(_this6.$_scheduleTimer);
          _this6.skipTransition = skipTransition; // Already shown

          if (_this6.isShown) {
            return;
          }

          if (!_this6.isMounted) {
            _this6.$_ensureContainer();

            _this6.isMounted = true;
          }

          if (!_this6.popperInstance) {
            _this6.popperInstance = createPopper(_this6.referenceNode(), _this6.$_popperNode, _this6.$_getPopperOptions());
          } else {
            yield _this6.popperInstance.update(); // Enable event listeners

            yield _this6.$_refreshPopperOptions();
            yield _this6.$_applyShowEffect();
          }
        })();
      },
      $_applyShowEffect: function $_applyShowEffect() {
        var _this7 = this;

        return _asyncToGenerator(function* () {
          if (_this7.$_hideInProgress) { return; }
          _this7.isShown = true;

          _this7.$_applyAttrsToTarget({
            'aria-describedby': _this7.popperId,
            'data-popper-shown': ''
          });

          var showGroup = _this7.showGroup;

          if (showGroup) {
            var popover;

            for (var i = 0; i < shownPoppers.length; i++) {
              popover = shownPoppers[i];

              if (popover.showGroup !== showGroup) {
                popover.hide();
                popover.$emit('close-group');
              }
            }
          }

          shownPoppers.push(_this7);

          _this7.$emit('apply-show'); // Fix popper not applying the attribute on initial render :(


          _this7.$_popperNode.setAttribute('data-popper-placement', _this7.popperInstance.state.placement); // Advanced classes


          _this7.classes.showFrom = true;
          _this7.classes.showTo = false;
          _this7.classes.hideFrom = false;
          _this7.classes.hideTo = false;
          yield nextFrame();
          _this7.classes.showFrom = false;
          _this7.classes.showTo = true;
        })();
      },
      $_applyHide: function $_applyHide() {
        var _arguments2 = arguments,
            _this8 = this;

        return _asyncToGenerator(function* () {
          var skipTransition = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : false;
          clearTimeout(_this8.$_scheduleTimer); // Already hidden

          if (!_this8.isShown) {
            return;
          }

          _this8.skipTransition = skipTransition;
          removeFromArray(shownPoppers, _this8);

          if (hidingPopper === _this8) {
            hidingPopper = null;
          }

          _this8.isShown = false;

          if (_this8.popperInstance) {
            // Disable event listeners
            yield _this8.$_refreshPopperOptions();
          }

          _this8.$_applyAttrsToTarget({
            'aria-describedby': undefined,
            'data-popper-shown': undefined
          });

          clearTimeout(_this8.$_disposeTimer);
          var disposeTime = getDefaultConfig(_this8.theme, 'disposeTimeout');

          if (disposeTime !== null) {
            _this8.$_disposeTimer = setTimeout(function () {
              if (_this8.$_popperNode) {
                // Don't remove popper instance, just the HTML element
                _this8.$_detachPopperNode();

                _this8.isMounted = false;
              }
            }, disposeTime);
          }

          _this8.$emit('apply-hide'); // Advanced classes


          _this8.classes.showFrom = false;
          _this8.classes.showTo = false;
          _this8.classes.hideFrom = true;
          _this8.classes.hideTo = false;
          yield nextFrame();
          _this8.classes.hideFrom = false;
          _this8.classes.hideTo = true;
        })();
      },
      $_autoShowHide: function $_autoShowHide() {
        if (this.shown) {
          this.show();
        } else {
          this.hide();
        }
      },
      $_ensureContainer: function $_ensureContainer() {
        var container = this.container; // if container is a query, get the relative element

        if (typeof container === 'string') {
          container = window.document.querySelector(container);
        } else if (container === false) {
          // if container is `false`, set it to reference parent
          container = this.$_targetNodes[0].parentNode;
        }

        if (!container) {
          throw new Error('No container for popover: ' + this.container);
        }

        container.appendChild(this.$_popperNode);
      },
      $_addEventListeners: function $_addEventListeners() {
        var _this9 = this;

        var addEvents = function addEvents(targetNodes, eventMap, commonTriggers, customTrigger, handler) {
          var triggers = commonTriggers;

          if (customTrigger != null) {
            triggers = typeof customTrigger === 'function' ? customTrigger(triggers) : customTrigger;
          }

          triggers.forEach(function (trigger) {
            var eventType = eventMap[trigger];

            if (eventType) {
              _this9.$_events.push({
                targetNodes: targetNodes,
                eventType: eventType,
                handler: handler
              });

              targetNodes.forEach(function (node) {
                return node.addEventListener(eventType, handler);
              });
            }
          });
        }; // Add trigger show events


        var handleShow = function handleShow(event) {
          if (_this9.isShown && !_this9.$_hideInProgress) {
            return;
          }

          event.usedByTooltip = true; // Prevent open on mobile touch in global close

          !_this9.$_preventShow && _this9.show({
            event: event
          });
        };

        addEvents(this.$_targetNodes, SHOW_EVENT_MAP, this.triggers, this.showTriggers, handleShow);
        addEvents([this.$_popperNode], SHOW_EVENT_MAP, this.popperTriggers, this.popperShowTriggers, handleShow); // Add trigger hide events

        var handleHide = function handleHide(event) {
          if (event.usedByTooltip) {
            return;
          }

          _this9.hide({
            event: event
          });
        };

        addEvents(this.$_targetNodes, HIDE_EVENT_MAP, this.triggers, this.hideTriggers, handleHide);
        addEvents([this.$_popperNode], HIDE_EVENT_MAP, this.popperTriggers, this.popperHideTriggers, handleHide);
      },
      $_removeEventListeners: function $_removeEventListeners() {
        this.$_events.forEach(function (_ref3) {
          var targetNodes = _ref3.targetNodes,
              eventType = _ref3.eventType,
              handler = _ref3.handler;
          targetNodes.forEach(function (node) {
            return node.removeEventListener(eventType, handler);
          });
        });
        this.$_events = [];
      },
      $_handleGlobalClose: function $_handleGlobalClose(event) {
        var _this10 = this;

        var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (this.$_showFrameLocked) { return; }
        this.hide({
          event: event
        });

        if (event.closePopover) {
          this.$emit('close-directive');
        } else {
          this.$emit('auto-hide');
        }

        if (touch) {
          this.$_preventShow = true;
          setTimeout(function () {
            _this10.$_preventShow = false;
          }, 300);
        }
      },
      $_detachPopperNode: function $_detachPopperNode() {
        this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
      },
      $_swapTargetAttrs: function $_swapTargetAttrs(attrFrom, attrTo) {
        var _iterator = _createForOfIteratorHelper(this.$_targetNodes),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var el = _step.value;
            var value = el.getAttribute(attrFrom);

            if (value) {
              el.removeAttribute(attrFrom);
              el.setAttribute(attrTo, value);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      },
      $_applyAttrsToTarget: function $_applyAttrsToTarget(attrs) {
        var _iterator2 = _createForOfIteratorHelper(this.$_targetNodes),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var el = _step2.value;

            for (var n in attrs) {
              var value = attrs[n];

              if (value == null) {
                el.removeAttribute(n);
              } else {
                el.setAttribute(n, value);
              }
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    },
    render: function render(h) {
      return this.$scopedSlots.default(this.slotData)[0];
    }
  };
});

if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  if (isIOS) {
    document.addEventListener('touchend', handleGlobalTouchend, supportsPassive ? {
      passive: true,
      capture: true
    } : true);
  } else {
    window.addEventListener('click', handleGlobalClick, true);
  }
}

function handleGlobalClick(event) {
  handleGlobalClose(event);
}

function handleGlobalTouchend(event) {
  handleGlobalClose(event, true);
}

function handleGlobalClose(event) {
  var touch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var _loop = function _loop(i) {
    var popper = shownPoppers[i];
    var popperContent = popper.popperNode();
    var contains = popperContent.contains(event.target);
    requestAnimationFrame(function () {
      if (event.closeAllPopover || event.closePopover && contains || popper.autoHide && !contains) {
        popper.$_handleGlobalClose(event, touch);
      }
    });
  };

  // Delay so that close directive has time to set values
  for (var i = 0; i < shownPoppers.length; i++) {
    _loop(i);
  }
}

function nextFrame() {
  return new Promise(function (resolve) {
    return requestAnimationFrame(resolve);
  });
}

var PrivateThemeClass = {
  computed: {
    themeClass: function themeClass() {
      return getThemeClasses(this.theme);
    }
  }
};

//
var script = {
  name: 'VPopperContent',
  components: {
    ResizeObserver: __vue_component__$6
  },
  mixins: [PrivateThemeClass],
  props: {
    popperId: String,
    theme: String,
    shown: Boolean,
    mounted: Boolean,
    skipTransition: Boolean,
    autoHide: Boolean,
    handleResize: Boolean,
    classes: Object
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function (context) {
      style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    ref: "popover",
    staticClass: "v-popper__popper",
    class: [_vm.themeClass, {
      "v-popper__popper--shown": _vm.shown,
      "v-popper__popper--hidden": !_vm.shown,
      "v-popper__popper--show-from": _vm.classes.showFrom,
      "v-popper__popper--show-to": _vm.classes.showTo,
      "v-popper__popper--hide-from": _vm.classes.hideFrom,
      "v-popper__popper--hide-to": _vm.classes.hideTo,
      "v-popper__popper--skip-transition": _vm.skipTransition
    }],
    attrs: {
      id: _vm.popperId,
      "aria-hidden": _vm.shown ? "false" : "true",
      tabindex: _vm.autoHide ? 0 : undefined
    },
    on: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) {
          return null;
        }

        _vm.autoHide && _vm.$emit("hide");
      }
    }
  }, [_c("div", {
    staticClass: "v-popper__wrapper"
  }, [_c("div", {
    ref: "inner",
    staticClass: "v-popper__inner"
  }, [_vm.mounted ? [_c("div", [_vm._t("default")], 2), _vm._v(" "), _vm.handleResize ? _c("ResizeObserver", {
    on: {
      notify: function notify($event) {
        return _vm.$emit("resize", $event);
      }
    }
  }) : _vm._e()] : _vm._e()], 2), _vm._v(" "), _c("div", {
    ref: "arrow",
    staticClass: "v-popper__arrow-container"
  }, [_c("div", {
    staticClass: "v-popper__arrow"
  })])])]);
};

var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

// @vue/component
var PrivatePopperMethods = {
  methods: {
    show: function show() {
      var _this$$refs$popper;

      return (_this$$refs$popper = this.$refs.popper).show.apply(_this$$refs$popper, arguments);
    },
    hide: function hide() {
      var _this$$refs$popper2;

      return (_this$$refs$popper2 = this.$refs.popper).hide.apply(_this$$refs$popper2, arguments);
    },
    dispose: function dispose() {
      var _this$$refs$popper3;

      return (_this$$refs$popper3 = this.$refs.popper).dispose.apply(_this$$refs$popper3, arguments);
    },
    onResize: function onResize() {
      var _this$$refs$popper4;

      return (_this$$refs$popper4 = this.$refs.popper).onResize.apply(_this$$refs$popper4, arguments);
    }
  }
};

//
var script$1 = {
  name: 'VPopperWrapper',
  components: {
    Popper: PrivatePopper(),
    PopperContent: __vue_component__
  },
  mixins: [PrivatePopperMethods, PrivateThemeClass],
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: function _default() {
        return this.$options.vPopperTheme;
      }
    }
  },
  methods: {
    getTargetNodes: function getTargetNodes() {
      return this.$slots.default.map(function (vnode) {
        return vnode.elm;
      }).filter(Boolean);
    }
  }
};

/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("Popper", _vm._g(_vm._b({
    ref: "popper",
    attrs: {
      theme: _vm.theme,
      "target-nodes": _vm.getTargetNodes,
      "reference-node": function referenceNode() {
        return _vm.$refs.reference;
      },
      "popper-node": function popperNode() {
        return _vm.$refs.popperContent.$el;
      },
      "arrow-node": function arrowNode() {
        return _vm.$refs.popperContent.$refs.arrow;
      }
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var popperId = ref.popperId;
        var isShown = ref.isShown;
        var shouldMountContent = ref.shouldMountContent;
        var skipTransition = ref.skipTransition;
        var autoHide = ref.autoHide;
        var hide = ref.hide;
        var handleResize = ref.handleResize;
        var onResize = ref.onResize;
        var classes = ref.classes;
        return [_c("div", {
          ref: "reference",
          staticClass: "v-popper",
          class: [_vm.themeClass, {
            "v-popper--shown": isShown
          }]
        }, [_vm._t("default"), _vm._v(" "), _c("PopperContent", {
          ref: "popperContent",
          attrs: {
            "popper-id": popperId,
            theme: _vm.theme,
            shown: isShown,
            mounted: shouldMountContent,
            "skip-transition": skipTransition,
            "auto-hide": autoHide,
            "handle-resize": handleResize,
            classes: classes
          },
          on: {
            hide: hide,
            resize: onResize
          }
        }, [_vm._t("popper", null, {
          shown: isShown
        })], 2)], 2)];
      }
    }], null, true)
  }, "Popper", _vm.$attrs, false), _vm.$listeners));
};

var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = undefined;
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

var script$2 = _objectSpread2(_objectSpread2({}, __vue_component__$1), {}, {
  name: 'VDropdown',
  vPopperTheme: 'dropdown'
});

/* script */
var __vue_script__$2 = script$2;
/* template */

/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = undefined;
/* functional template */

var __vue_is_functional_template__$2 = undefined;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

var script$3 = _objectSpread2(_objectSpread2({}, __vue_component__$1), {}, {
  name: 'VMenu',
  vPopperTheme: 'menu'
});

/* script */
var __vue_script__$3 = script$3;
/* template */

/* style */

var __vue_inject_styles__$3 = undefined;
/* scoped */

var __vue_scope_id__$3 = undefined;
/* module identifier */

var __vue_module_identifier__$3 = undefined;
/* functional template */

var __vue_is_functional_template__$3 = undefined;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$3 = /*#__PURE__*/normalizeComponent({}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

var script$4 = _objectSpread2(_objectSpread2({}, __vue_component__$1), {}, {
  name: 'VTooltip',
  vPopperTheme: 'tooltip'
});

/* script */
var __vue_script__$4 = script$4;
/* template */

/* style */

var __vue_inject_styles__$4 = undefined;
/* scoped */

var __vue_scope_id__$4 = undefined;
/* module identifier */

var __vue_module_identifier__$4 = undefined;
/* functional template */

var __vue_is_functional_template__$4 = undefined;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$4 = /*#__PURE__*/normalizeComponent({}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

//
var script$5 = {
  name: 'VTooltipDirective',
  components: {
    Popper: PrivatePopper(),
    PopperContent: __vue_component__
  },
  mixins: [PrivatePopperMethods],
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default: 'tooltip'
    },
    html: {
      type: Boolean,
      default: function _default() {
        return getDefaultConfig(this.theme, 'html');
      }
    },
    content: {
      type: [String, Number, Function],
      default: null
    },
    loadingContent: {
      type: String,
      default: function _default() {
        return getDefaultConfig(this.theme, 'loadingContent');
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
      return typeof this.content === 'function';
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
    finalContent: function finalContent(value) {
      var _this = this;

      this.$nextTick(function () {
        _this.$refs.popper.onResize();
      });
    }
  },
  created: function created() {
    this.$_fetchId = 0;
  },
  methods: {
    fetchContent: function fetchContent(force) {
      var _this2 = this;

      if (typeof this.content === 'function' && this.$_isShown && (force || !this.$_loading && this.asyncContent == null)) {
        this.asyncContent = null;
        this.$_loading = true;
        var fetchId = ++this.$_fetchId;
        var result = this.content(this);

        if (result.then) {
          result.then(function (res) {
            return _this2.onResult(fetchId, res);
          });
        } else {
          this.onResult(fetchId, result);
        }
      }
    },
    onResult: function onResult(fetchId, result) {
      if (fetchId !== this.$_fetchId) { return; }
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

/* script */
var __vue_script__$5 = script$5;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("Popper", _vm._g(_vm._b({
    ref: "popper",
    attrs: {
      theme: _vm.theme,
      "popper-node": function popperNode() {
        return _vm.$refs.popperContent.$el;
      },
      "arrow-node": function arrowNode() {
        return _vm.$refs.popperContent.$refs.arrow;
      }
    },
    on: {
      "apply-show": _vm.onShow,
      "apply-hide": _vm.onHide
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(ref) {
        var popperId = ref.popperId;
        var isShown = ref.isShown;
        var shouldMountContent = ref.shouldMountContent;
        var skipTransition = ref.skipTransition;
        var autoHide = ref.autoHide;
        var hide = ref.hide;
        var handleResize = ref.handleResize;
        var onResize = ref.onResize;
        var classes = ref.classes;
        return [_c("PopperContent", {
          ref: "popperContent",
          class: {
            "v-popper--tooltip-loading": _vm.loading
          },
          attrs: {
            "popper-id": popperId,
            theme: _vm.theme,
            shown: isShown,
            mounted: shouldMountContent,
            "skip-transition": skipTransition,
            "auto-hide": autoHide,
            "handle-resize": handleResize,
            classes: classes
          },
          on: {
            hide: hide,
            resize: onResize
          }
        }, [_vm.html ? _c("div", {
          domProps: {
            innerHTML: _vm._s(_vm.finalContent)
          }
        }) : _c("div", {
          domProps: {
            textContent: _vm._s(_vm.finalContent)
          }
        })])];
      }
    }])
  }, "Popper", _vm.$attrs, false), _vm.$listeners));
};

var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;
/* style */

var __vue_inject_styles__$5 = undefined;
/* scoped */

var __vue_scope_id__$5 = undefined;
/* module identifier */

var __vue_module_identifier__$5 = undefined;
/* functional template */

var __vue_is_functional_template__$5 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$5 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

var TARGET_CLASS = 'v-popper--has-tooltip';
/**
 * Support placement as directive modifier
 */

function getPlacement(options, modifiers) {
  var result = options.placement;

  if (!result && modifiers) {
    var _iterator = _createForOfIteratorHelper(placements),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var pos = _step.value;

        if (modifiers[pos]) {
          result = pos;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  if (!result) {
    result = getDefaultConfig(options.theme || 'tooltip', 'placement');
  }

  return result;
}
function getOptions(el, value, modifiers) {
  var options;

  var type = _typeof(value);

  if (type === 'string') {
    options = {
      content: value
    };
  } else if (value && type === 'object') {
    options = value;
  } else {
    options = {
      content: false
    };
  }

  options.placement = getPlacement(options, modifiers);

  options.targetNodes = function () {
    return [el];
  };

  options.referenceNode = function () {
    return el;
  };

  return options;
}
function createTooltip(el, value, modifiers) {
  var options = getOptions(el, value, modifiers);
  var tooltipApp = el.$_popper = new Vue__default["default"]({
    data: function data() {
      return {
        options: options
      };
    },
    render: function render(h) {
      var _this$options = this.options,
          theme = _this$options.theme,
          html = _this$options.html,
          content = _this$options.content,
          loadingContent = _this$options.loadingContent,
          otherOptions = _objectWithoutProperties(_this$options, ["theme", "html", "content", "loadingContent"]);

      return h(__vue_component__$5, {
        props: {
          theme: theme,
          html: html,
          content: content,
          loadingContent: loadingContent
        },
        attrs: otherOptions,
        ref: 'tooltip'
      });
    },
    devtools: {
      hide: true
    }
  });
  var mountTarget = document.createElement('div');
  document.body.appendChild(mountTarget);
  tooltipApp.$mount(mountTarget); // Class on target

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
function bind(el, _ref) {
  var value = _ref.value;
      _ref.oldValue;
      var modifiers = _ref.modifiers;
  var options = getOptions(el, value, modifiers);

  if (!options.content || getDefaultConfig(options.theme || 'tooltip', 'disabled')) {
    destroyTooltip(el);
  } else {
    var tooltipApp;

    if (el.$_popper) {
      tooltipApp = el.$_popper;
      tooltipApp.options = options;
    } else {
      tooltipApp = createTooltip(el, value, modifiers);
    } // Manual show


    if (typeof value.shown !== 'undefined' && value.shown !== el.$_popperOldShown) {
      el.$_popperOldShown = value.shown;
      value.shown ? tooltipApp.$refs.tooltip.show() : tooltipApp.$refs.tooltip.hide();
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
  el.addEventListener('click', onClick);
  el.addEventListener('touchstart', onTouchStart, supportsPassive ? {
    passive: true
  } : false);
}

function removeListeners(el) {
  el.removeEventListener('click', onClick);
  el.removeEventListener('touchstart', onTouchStart);
  el.removeEventListener('touchend', onTouchEnd);
  el.removeEventListener('touchcancel', onTouchCancel);
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
    el.addEventListener('touchend', onTouchEnd);
    el.addEventListener('touchcancel', onTouchCancel);
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
  bind: function bind(el, _ref) {
    var value = _ref.value,
        modifiers = _ref.modifiers;
    el.$_closePopoverModifiers = modifiers;

    if (typeof value === 'undefined' || value) {
      addListeners(el);
    }
  },
  update: function update(el, _ref2) {
    var value = _ref2.value,
        oldValue = _ref2.oldValue,
        modifiers = _ref2.modifiers;
    el.$_closePopoverModifiers = modifiers;

    if (value !== oldValue) {
      if (typeof value === 'undefined' || value) {
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
var PopperContent = __vue_component__;
var PopperMethods = PrivatePopperMethods;
var ThemeClass = PrivateThemeClass;
/* Vue plugin */

function install$1(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (install$1.installed) { return; }
  install$1.installed = true;
  assign(config, options); // Directive

  Vue.directive('tooltip', PrivateVTooltip);
  Vue.directive('close-popper', PrivateVClosePopper); // Components
  // eslint-disable-next-line vue/component-definition-name-casing

  Vue.component('v-tooltip', __vue_component__$4);
  Vue.component('VTooltip', __vue_component__$4); // eslint-disable-next-line vue/component-definition-name-casing

  Vue.component('v-dropdown', __vue_component__$2);
  Vue.component('VDropdown', __vue_component__$2); // eslint-disable-next-line vue/component-definition-name-casing

  Vue.component('v-menu', __vue_component__$3);
  Vue.component('VMenu', __vue_component__$3);
}
var plugin = {
  // eslint-disable-next-line no-undef
  version: "3.0.0-beta.1",
  install: install$1,
  options: config
}; // Auto-install

var GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}var base$d =
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
};var base$c = 'no-underline cursor-pointer';
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
};var outerWrapBase = 'block px-0-4';
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
};var controlWrap = 'relative';
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
    sizeMdBase: sizeMdBase});var base$a = 'mb-1-4';

var DefaultTheme$g = {
    base: base$a
};var wrapperBase = 'flex flex-wrap mb-0-4';

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
};var base$9 = 'outline-none select-none font-semibold text-lg uppercase px-1-5 py-0-7';
var stateDefault$1 = '';
var stateActive$1 = 'text-secondary-200 border-b-4 border-secondary-200';

var DefaultTheme$e = {
    base: base$9,
    stateDefault: stateDefault$1,
    stateActive: stateActive$1
};var base$8 = '';

var DefaultTheme$d = {
    base: base$8
};var base$7 = '';
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
};var base$6 = '';
var DISPLAY_LIST_ITEM = 'list-item';
var DISPLAY_INLINE = 'inline-block';
var DISPLAY_BLOCK = 'block';

var DefaultTheme$b = {
    base: base$6,
    DISPLAY_LIST_ITEM: DISPLAY_LIST_ITEM,
    DISPLAY_INLINE: DISPLAY_INLINE,
    DISPLAY_BLOCK: DISPLAY_BLOCK
};var base$5 = 'container';
var modeFluid = 'max-w-none';

var DefaultTheme$a = {
    base: base$5,
    modeFluid: modeFluid
};var base$4 = 'flex flex-wrap';

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
};var base$3 = 'max-w-full';

var DefaultTheme$8 = {
    base: base$3
};var panelHeaderBase = 'text-xl font-semibold mb-0-8';
var panelWrapperBase = 'mb-2-2';

var CFormPanel$1 = {
    panelHeaderBase: panelHeaderBase,
    panelWrapperBase: panelWrapperBase
};var inputBase = 'cursor-pointer';
var inputIconBase = 'block form-select';
var inputIconSizeMd = 'w-1-4 h-1-4';
var inputIconSizeSm = 'w-1-2 h-1-2';
var inputIconClass = 'form-select-icon';

var optionBase = 'cursor-pointer py-0-4 px-0-8';
var optionStateDefault = 'bg-white hover:bg-tertiary-100';
var optionStateActive = 'bg-tertiary-100';

var listBase = 'overscroll-contain overflow-y-auto max-h-18-6';

var fakeSelectBase = 'absolute w-full h-full left-0 top-0 opacity-0 z-1 cursor-pointer';

var DefaultTheme$7 = {
    inputBase: inputBase,
    inputIconBase: inputIconBase,
    inputIconSizeMd: inputIconSizeMd,
    inputIconSizeSm: inputIconSizeSm,
    inputIconClass: inputIconClass,

    optionBase: optionBase,
    optionStateDefault: optionStateDefault,
    optionStateActive: optionStateActive,

    listBase: listBase,

    fakeSelectBase: fakeSelectBase
};var base$2 = 'rounded-lg font-bold inline-block border-2 leading-none align-middle';

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
};var DefaultTheme$5 = {};var stateDefault = '#dedede';
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
};var base$1 = 'inline-block';

var DefaultTheme$3 = {
    base: base$1
};var DefaultTheme$2=/*#__PURE__*/Object.freeze({__proto__:null,CButton:DefaultTheme$k,CLink:DefaultTheme$j,CFormInput:DefaultTheme$h,CForm:DefaultTheme$g,CCheckbox:DefaultTheme$f,CRadio:DefaultTheme$f,CTab:DefaultTheme$e,CTabPanel:DefaultTheme$d,CList:DefaultTheme$c,CListItem:DefaultTheme$b,CContainer:DefaultTheme$a,CRow:DefaultTheme$9,CCol:DefaultTheme$8,CFormField:DefaultTheme$i,CFormPanel:CFormPanel$1,CFormSelectCustom:DefaultTheme$7,CBadge:DefaultTheme$6,CListToggle:DefaultTheme$5,CRating:DefaultTheme$4,CStar:DefaultTheme$3});var justifyCenter = 'justify-center';
var justifyBetween = 'justify-between';
var justifyStart = 'justify-start';
var justifyEnd = 'justify-end';var noop = function () {};

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
};var DEFAULTS = {
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

    VTooltip: {
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
};var PROP_NAME = '$ortoUIConfig';

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
    return get__default["default"](this.$_config, key, get__default["default"](DEFAULTS, key));
};

Object.defineProperties( Config.prototype, prototypeAccessors );
Object.defineProperties( Config, staticAccessors );

var getConfigValue = function (key) {
    return Vue__default["default"].prototype[PROP_NAME]
        ? Vue__default["default"].prototype[PROP_NAME].getConfigValue(key)
        : get__default["default"](DEFAULTS, key);
};

var ConfigPlugin = function (config, Vue) {
    if ( config === void 0 ) config = {};

    Vue.prototype[PROP_NAME] = new Config();
    Vue.prototype[PROP_NAME].setConfig(config);
};

var getComponentConfig = function (cmpName, key) {
    if ( key === void 0 ) key = null;

    return key ? getConfigValue((cmpName + "." + key)) : getConfigValue(cmpName) || {};
};var NAME$o = 'CForm';

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

        return h('form', vueFunctionalDataMerge.mergeData(data, componentData), children);
    }
};var FormPanel = {
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
};var NAME$n = 'CFormPanel';

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
};var NAME$m = 'CFormField';
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
                class: outerWrapClasses
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
};// TODO: support attr - inputmode

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
};var CFormField = {
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
};var NAME$k = 'CDropdown';

var CDropdown = {
    name: NAME$k,

    install: function install(Vue) {
        selfInstall(Vue, this);
    },

    inheritAttrs: false,

    vPopperTheme: 'orto-ui',

    components: {
        Popper: Popper(),
        PopperContent: PopperContent
    },

    mixins: [PopperMethods, ThemeClass],

    props: {
        theme: {
            type: String,
            default: function default$1() {
                return getComponentConfig(NAME$k, 'theme');
            }
        }
    },

    render: function render(h) {
        var this$1$1 = this;

        return h('Popper', {
            ref: 'popper',
            props: Object.assign({}, {theme: this.theme,
                targetNodes: function () { return this$1$1.$slots.default.map(function (vnode) { return vnode.elm; }).filter(Boolean); },
                popperNode: function () { return this$1$1.$refs.popperContent.$el; },
                arrowNode: function () { return this$1$1.$refs.popperContent.$refs.arrow; },
                referenceNode: function () { return this$1$1.$refs.reference; }},
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

                        return h(
                        'div',
                        {
                            ref: 'reference',
                            class: [
                                'v-popper',
                                {
                                    'v-popper--shown': isShown
                                },
                                this$1$1.themeClass
                            ]
                        },
                        [
                            this$1$1.$slots.default,
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
                                        classes: classes
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
};var validDirection = ['vertical', 'horizontal'];

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

        return h(props.tag, vueFunctionalDataMerge.mergeData(data, componentData), children);
    }
};var NAME$i = 'CListItem';

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

        return h(props.tag, vueFunctionalDataMerge.mergeData(data, componentData), children);
    }
};var validSizes$2 = ['sm', 'md'];

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
        },

        useNativeList: {
            type: Boolean,
            default: false
        }
    },

    model: {
        prop: 'modelValue',
        event: 'change'
    },

    data: function data() {
        return {
            shownList: false
        };
    },

    methods: {
        close: function close() {
            this.shownList = false;
            // this.$refs.button.focus();
        },

        open: function open() {
            this.shownList = true;
        }
    },

    watch: {
        shownList: {
            // immediate: true,
            handler: function handler() {
                var this$1$1 = this;

                this.$nextTick().then(function () {
                    this$1$1.shownList &&
                        this$1$1.$refs.selected &&
                        this$1$1.$refs.selected.scrollIntoView({
                            block: 'nearest',
                            inline: 'start'
                        });
                });
            }
        }
    },

    render: function render(h) {
        var this$1$1 = this;

        var ref = this;
        var options = ref.data;
        var theme = ref.theme;
        var modelValue = ref.modelValue;
        var label = ref.label;
        var placeholder = ref.placeholder;
        var optionLabel = ref.optionLabel;
        var optionValue = ref.optionValue;
        var error = ref.error;
        var size = ref.size;
        var useNativeList = ref.useNativeList;

        var selectedOption = options.find(function (item) { return item[optionValue] === modelValue; });
        var inputBase = theme.inputBase;
        var inputIconBase = theme.inputIconBase;
        var listBase = theme.listBase;
        var fakeSelectBase = theme.fakeSelectBase;
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

        // for mobile platform
        // TODO: unit
        var fakeNativeSelect = function () { return h(
                'select',
                {
                    staticClass: fakeSelectBase,
                    directives: [
                        {
                            name: 'model',
                            rawName: 'v-model',
                            value: modelValue,
                            expression: 'modelValue'
                        }
                    ],
                    attrs: this$1$1.$attrs,
                    on: {
                        change: function (e) {
                            var target = e.target;

                            var selectedVal = Array.from(target.options)
                                .filter(function (option) { return option.selected; })
                                .map(function (option) { return ('_value' in option ? option._value : option.value); });

                            this$1$1.$emit('change', selectedVal[0]);
                        }
                    }
                },
                options.map(function (option) {
                    var ref = mapOption({
                        option: option,
                        optionLabel: optionLabel,
                        optionValue: optionValue
                    });
                    var value = ref.value;
                    var label = ref.label;

                    var computedLabel = this$1$1.$scopedSlots.default
                        ? this$1$1.$scopedSlots.default(option)[0].text
                        : label;

                    return h('option', {
                        domProps: { value: value, innerHTML: computedLabel }
                    });
                })
            ); };
        //

        return h(
            'CDropdown',
            {
                props: {
                    theme: getComponentConfig(NAME$h, 'dropdownTheme')
                },

                attrs: {
                    shown: this.shownList
                },

                on: {
                    'auto-hide': this.close
                },

                scopedSlots: Object.assign({}, (!useNativeList && {
                        popper: function () {
                            return h(
                                'CList',
                                {
                                    staticClass: listBase
                                },
                                [
                                    options.map(function (option) {
                                        var ref = mapOption({
                                            option: option,
                                            optionLabel: optionLabel,
                                            optionValue: optionValue
                                        });
                                        var value = ref.value;
                                        var label = ref.label;

                                        var isSelected = value === modelValue;

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
                        }
                    }))
            },
            [
                h(
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
                                    name: this.name,
                                    labelBgColor: this.labelBgColor,
                                    error: error,
                                    label: label,
                                    size: size,
                                    modelValue: selectedOption && selectedOption[this.optionValue]
                                },
                                staticClass: inputBase,
                                ref: 'holder',
                                scopedSlots: {
                                    append: function () { return h('i', { class: [iconClass, inputIconClass] }); }
                                },
                                attrs: this.$attrs
                            },
                            selectedOption
                                ? this.$scopedSlots.selected
                                    ? this.$scopedSlots.selected(selectedOption)
                                    : selectedOption[this.optionLabel]
                                : placeholder || label
                        ),
                        useNativeList ? fakeNativeSelect() : null
                    ]
                )
            ]
        );
    }
};var computeIsChecked = function (ref) {
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
}var NAME$g = 'CRadio';
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

    merge__default["default"](radioCheckbox(TYPE$3), {
        props: props$5
    }));var DefaultTheme$1 = Object.assign({}, CFormPanel$1);// TODO: add limit...

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
}var NAME$f = 'CRadioGroup';
var TYPE$2 = 'radio';

var CRadioGroup = Object.assign({}, {name: NAME$f},

    merge__default["default"](radioCheckboxGroup(TYPE$2), {
        props: {
            modelValue: {
                type: [String, Number, Boolean],
                default: null
            }
        }
    }));var NAME$e = 'CCheckbox';
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

    merge__default["default"](radioCheckbox(TYPE$1), {
        props: props$4
    }));var NAME$d = 'CCheckboxGroup';
var TYPE = 'checkbox';

var CCheckboxGroup = Object.assign({}, {name: NAME$d},

    merge__default["default"](radioCheckboxGroup(TYPE), {
        props: {
            modelValue: {
                type: Array,
                default: function () { return []; }
            }
        }
    }));var NAME$c = 'CStar';

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
};var NAME$b = 'CRating';
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
};var NAME$a = 'CLink';
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
};var NAME$9 = 'CButton';
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
            vueFunctionalDataMerge.mergeData(data, componentData),
            props.label ? props.label : children
        );
    }
};var NAME$8 = 'CTabs';

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

            vueFunctionalDataMerge.mergeData(data, {
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
};var NAME$7 = 'CTab';

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
};var NAME$6 = 'CTabPanels';

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

            tabPanel.data = vueFunctionalDataMerge.mergeData(tabPanel.data, {
                attrs: {
                    hidden: !isActive
                }
            });

            return props.lazy ? (isActive ? tabPanel : null) : tabPanel;
        });

        return h('div', vueFunctionalDataMerge.mergeData(data, {}), [].concat( normalizeTabPanels ));
    }
};var NAME$5 = 'CTabPanel';

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
        return h(props.tag, vueFunctionalDataMerge.mergeData(data, componentData), [children]);
    }
};var NAME$4 = 'CBadge';
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

        return h('span', vueFunctionalDataMerge.mergeData(data, componentData), props.label ? props.label : children);
    }
};var base = 'w-full object-cover';

var DefaultTheme = {
    base: base
};var NAME$3 = 'CPicture';

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

        return h('picture', sources.concat( [h('img', vueFunctionalDataMerge.mergeData(data, imgData))]));
    }
};var NAME$2 = 'CListToggle';

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
            el.data = vueFunctionalDataMerge.mergeData(el.data, {
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
};var props = {
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

        return h('div', vueFunctionalDataMerge.mergeData(data, componentData), children);
    }
};var OFFSET_PROP_NAME = 'offset';
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

        return h('div', vueFunctionalDataMerge.mergeData(data, componentData), children);
    }
};var NAME = 'CRow';
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

            col.data = vueFunctionalDataMerge.mergeData(col.data, {
                class: colClasses.concat( colBreakpointClass)
            });

            return col;
        });

        return h(
            'div',
            vueFunctionalDataMerge.mergeData(data, {
                class: rowClasses
            }),
            computedChildren
        );
    }
};var components = {
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

    Vue.use(plugin, config.VTooltip || {});
};

var index = {
    install: install
};exports.CButton=CButton;exports.CCheckbox=CCheckbox;exports.CCheckboxGroup=CCheckboxGroup;exports.CCol=CCol;exports.CContainer=CContainer;exports.CDropdown=CDropdown;exports.CForm=CForm;exports.CFormField=CFormField;exports.CFormInput=CFormInput;exports.CFormPanel=CFormPanel;exports.CFormSelectCustom=CFormSelectCustom;exports.CLink=CLink;exports.CList=CList;exports.CListItem=CListItem;exports.CListToggle=CListToggle;exports.CPicture=CPicture;exports.CRadio=CRadio;exports.CRadioGroup=CRadioGroup;exports.CRating=CRating;exports.CRow=CRow;exports.CTab=CTab;exports.CTabPanel=CTabPanel;exports.CTabPanels=CTabPanels;exports.CTabs=CTabs;exports["default"]=index;//# sourceMappingURL=orto-ui.ssr.js.map
