const plugin = require('tailwindcss/plugin');
const svgToDataUri = require('mini-svg-data-uri');

module.exports = plugin(function ({ addBase, theme }) {
    addBase({
        [`
          [type='text'],
          [type='email'],
          [type='url'],
          [type='password'],
          [type='number'],
          [type='date'],
          [type='datetime-local'],
          [type='month'],
          [type='search'],
          [type='tel'],
          [type='time'],
          [type='week'],
          [multiple],
          textarea,
          select
        `]: {
            appearance: 'none',
            backgroundColor: 'transparent',

            '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
                '-webkit-appearance': 'none'
            },

            '-moz-appearance': 'textfield',

            '&::placeholder, &::-webkit-input-placeholder, &:-ms-input-placeholder, &:-moz-placeholder, &::-moz-placeholder': {
                opacity: 0,
                fontSize: theme('fontSize.sm')
            },

            '&:focus': {
                outline: 'none',

                '&::placeholder, &::-webkit-input-placeholder, &:-ms-input-placeholder, &:-moz-placeholder, &::-moz-placeholder': {
                    opacity: 1
                }
            }
        },
        [`[type = 'checkbox'], [type='radio']`]: {
            appearance: 'none',
            height: theme('spacing.0-8'),
            width: theme('spacing.0-8'),
            display: 'inline-block',
            verticalAlign: 'middle',
            backgroundOrigin: 'border-box',
            userSelect: 'none',
            backgroundColor: theme('colors.white'),
            borderWidth: theme('borderWidth.2'),
            borderColor: theme('colors.black.200'),
            '&:focus': {
                outline: 'none',
                boxShadow: 'none'
            },
            '&:checked': {
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }
        },
        [`[type = 'checkbox']:checked`]: {
            backgroundSize: '50%',
            backgroundImage: `url("${svgToDataUri(
                `<svg xmlns="http://www.w3.org/2000/svg" fill="${theme(
                    'colors.secondary.200'
                )}" viewBox="0 0 10 10"><path d="M0 0h10v10H0z"/></svg>`
            )}")`
        },
        [`[type='radio']`]: {
            borderRadius: theme('borderRadius.full'),
            '&:checked': {
                backgroundSize: '88%',
                backgroundImage: `url("${svgToDataUri(
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="${theme(
                        'colors.secondary.200'
                    )}"><circle cx="5" cy="5" r="3"/></svg>`
                )}")`
            }
        },
        '.form-select-icon': {
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url("${svgToDataUri(
                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${theme(
                    'colors.black.200'
                )}"><path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"/></svg>`
            )}")`
        },
        '.form-input-not-label': {
            '&::placeholder, &::-webkit-input-placeholder, &:-ms-input-placeholder, &:-moz-placeholder, &::-moz-placeholder': {
                opacity: 1
            }
        },

        '.form-checkbox-is-error': {
            borderColor: theme('colors.danger')
        }
    });
});
