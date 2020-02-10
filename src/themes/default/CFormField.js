export const outerWrapBase = 'block mb-1-4 px-0-4';

export const innerWrapBase =
    'flex items-center border-2 rounded-lg -mx-0-4 px-0-8 transition-border duration-150';
export const innerWrapStateDefault = 'border-black-200';
export const innerWrapStateFocused = 'border-primary-100';
export const innerWrapStateError = 'border-danger';

export const labelBase =
    'absolute left-0 max-w-full truncate pointer-events-none bg-white px-0-4 uppercase origin-top-left transition-transform ease-in duration-150 top-0-5 leading-snug';
export const labelPositionFloat = 'transform -translate-y-full scale-75';
export const labelStateDefault = 'text-tertiary-300';
export const labelStateError = 'text-danger';
export const controlWrapBase = 'flex-auto relative';
export const prependBase = 'pr-0-4';
export const appendBase = 'pl-0-4';

export default {
    outerWrapBase,
    innerWrapBase,

    innerWrapStateDefault,
    innerWrapStateFocused,
    innerWrapStateError,

    controlWrapBase,

    labelBase,
    labelPositionFloat,
    labelStateDefault,
    labelStateError,

    prependBase,
    appendBase
};
