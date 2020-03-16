import { default as CFormField } from './CFormField';

export const controlWrap = 'relative';
export const base = 'w-full form-input';
export const stateReadonly = 'cursor-pointer';
export const stateNotLabel = 'form-input-not-label';
export const typeTextarea = 'resize-none';

export const apperanceNumberWrap = 'absolute top-0 right-0 flex flex-col h-full';
export const apperanceNumberBase =
    'inline-flex items-center justify-center h-1/2 cursor-pointer select-none';
export const apperanceNumberStateDisable = 'opacity-50 pointer-events-none';

export const sizeSmBase = '';
export const sizeMdBase = '';

export default {
    ...CFormField,
    controlWrap,
    base,
    stateReadonly,
    stateNotLabel,
    typeTextarea,
    apperanceNumberWrap,
    apperanceNumberBase,
    apperanceNumberStateDisable,
    sizeSmBase,
    sizeMdBase
};
