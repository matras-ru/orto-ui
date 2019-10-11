const Button = {
    baseClass:
        'inline-block rounded-lg uppercase font-semibold text-black-100 transition-250 transition-ease-in-out border-3 mb-12',
    defaultClass: 'bg-white border-primary-100 transition-shadow hover:shadow',
    primaryClass: 'bg-primary-100 border-primary-100 transition-shadow hover:shadow',
    secondaryClass:
        'bg-white border-secondary-200 text-secondary-200 transition-bg transition-color hover:text-white hover:bg-secondary-200',
    tertiaryClass:
        'bg-white border-tertiary-100 text-secondary-200 transition-bg hover:bg-tertiary-100',
    quaternaryClass:
        'bg-white border-black-100 transition-bg transition-color hover:text-white hover:bg-black-100',
    disabledClass: 'cursor-not-allowed opacity-75',
    defaultSizeClass: 'text-base px-13 py-4 leading-snug',
    largeSizeClass: 'text-lg px-13 py-6 leading-none',
    smallSizeClass: 'text-base px-11 py-3 leading-snug'
};

export default Button;
