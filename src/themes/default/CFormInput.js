import { default as CFormField } from './CFormField';

export const base = 'w-full form-input py-0-5';
export const stateReadonly = 'cursor-pointer';
export const typeTextarea = 'resize-none';

export default {
    ...CFormField,
    base,
    stateReadonly,
    typeTextarea
};
