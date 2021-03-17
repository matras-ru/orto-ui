export const base =
    'inline-flex items-center justify-center rounded-lg uppercase font-semibold text-black-100 duration-250 ease-in-out border-3 focus:outline-none';

export const variantPrimary =
    'border-primary-100 transition-shadow hover:shadow disabled:shadow-none';
export const variantSecondary =
    'bg-primary-100 border-primary-100 transition-shadow hover:shadow disabled:shadow-none';
export const variantTertiary =
    'border-secondary-200 text-secondary-200 transition-colors hover:text-white disabled:text-secondary-200 hover:bg-secondary-200 disabled:bg-transparent';
export const variantQuaternary =
    'border-tertiary-100 text-secondary-200 transition-bg hover:bg-tertiary-100 disabled:bg-transparent';
export const variantQuinary =
    'border-black-100 transition-colors hover:text-white disabled:text-black-100 hover:bg-black-100 disabled:bg-transparent';

export const stateDisable = 'cursor-not-allowed opacity-75';

export const sizeSm = 'text-base px-1-3 py-0-3 leading-snug';
export const sizeMd = 'text-base px-1-5 py-0-4 leading-snug';
export const sizeLg = 'text-lg px-1-5 py-0-6 leading-none';

export const displayBlock = 'w-full';

export default {
    base,

    variantPrimary,
    variantSecondary,
    variantTertiary,
    variantQuaternary,
    variantQuinary,

    stateDisable,

    sizeSm,
    sizeMd,
    sizeLg,

    displayBlock
};
