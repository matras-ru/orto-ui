import { default as CFormField } from './CFormField';

export const controlWrap = 'relative';
export const base = 'w-full form-input py-0-5';
export const stateReadonly = 'cursor-pointer';
export const typeTextarea = 'resize-none';

export const apperanceWrap = 'absolute top-0 right-0 flex flex-col h-full py-0-3';
export const apperanceBase =
    'inline-flex items-center justify-center h-1/2 cursor-pointer select-none';
export const apperanceStateDisable = 'opacity-50 pointer-events-none';

export default {
    ...CFormField,
    controlWrap,
    base,
    stateReadonly,
    typeTextarea,
    apperanceWrap,
    apperanceBase,
    apperanceStateDisable
};
