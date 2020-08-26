module.exports = {
    prefix: '',
    target: 'relaxed',
    important: false,
    separator: ':',
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px'
        },
        colors: {
            transparent: 'transparent',
            inherit: 'inherit',

            black: {
                100: '#292929',
                200: '#3d4145'
            },
            white: '#fff',

            primary: {
                100: '#ffcd00'
            },
            secondary: {
                100: '#f3f7f9',
                200: '#3da2e2'
            },
            tertiary: {
                100: '#e0e7ec',
                200: '#c3d0d7',
                300: '#a6b1b6'
            },
            danger: '#f1001a',

            layout: {
                section: '#fff',
                container: '#f1f1f1',
                row: '#87bdd8',
                col: '#b1cbbb'
            }
        },
        spacing: {
            px: '1px',
            0: '0',
            '-0-3': '-0.375rem',
            '0-1': '0.125rem',
            '0-2': '0.25rem',
            '0-3': '0.375rem',
            '0-4': '0.5rem',
            '0-5': '0.625rem',
            '0-6': '0.75rem',
            '0-7': '0.875rem',
            '0-8': '1rem',
            '1-1': '1.125rem',
            '1-2': '1.25rem',
            '1-3': '1.375rem',
            '1-4': '1.5rem',
            '1-5': '1.625rem',
            '1-6': '1.75rem',
            '1-7': '1.875rem',
            '1-8': '2rem',
            '2-1': '2.125rem',
            '2-2': '2.25rem',
            '2-3': '2.375rem',
            '2-4': '2.5rem',
            '2-5': '2.625rem',
            '2-6': '2.75rem',
            '2-7': '2.875rem',
            '2-8': '3rem',
            '12-4': '12.5rem',
            '18-6': '18.75rem' // 300px
        },
        backgroundColor: theme => theme('colors'),
        backgroundOpacity: theme => theme('opacity'),
        backgroundPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top'
        },
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain'
        },
        borderColor: theme => ({
            ...theme('colors'),
            default: theme('colors.gray.300', 'currentColor')
        }),
        borderOpacity: theme => theme('opacity'),
        borderRadius: {
            none: '0',
            sm: '0.125rem',
            default: '0.25rem',
            lg: '1.375rem',
            full: '9999px'
        },
        borderWidth: {
            default: '1px',
            0: '0',
            2: '2px',
            3: '3px',
            4: '4px',
            8: '8px'
        },
        boxShadow: {
            default: '0 6px 12px rgba(255, 205, 0, .7)',
            inner: 'inset 0 0 0 2px #FFFFFF',
            none: 'none',
            example: '0 15px 30px 0 rgba(166, 177, 182, 0.5)'
        },
        container: theme => ({
            padding: {
                default: theme('spacing.0-8')
            },
            center: true
        }),
        cursor: {
            auto: 'auto',
            default: 'default',
            pointer: 'pointer',
            wait: 'wait',
            text: 'text',
            move: 'move',
            'not-allowed': 'not-allowed'
        },
        divideColor: theme => theme('borderColor'),
        divideOpacity: theme => theme('borderOpacity'),
        divideWidth: theme => theme('borderWidth'),
        fill: theme => ({
            default: theme('colors.black.100')
        }),
        flex: {
            1: '1 1 0%',
            auto: '1 1 auto',
            initial: '0 1 auto',
            none: 'none'
        },
        flexGrow: {
            0: '0',
            default: '1'
        },
        flexShrink: {
            0: '0',
            default: '1'
        },
        fontFamily: {
            body: ['Helvetica', 'sans-serif']
        },
        fontSize: {
            '2xs': '0.625rem',
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem', // 16px
            lg: '1.125rem', // 18px
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem'
        },
        fontWeight: {
            hairline: '100',
            thin: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            black: '900'
        },
        height: theme => ({
            auto: 'auto',
            ...theme('spacing'),
            full: '100%',
            '1/2': '50%',
            screen: '100vh'
        }),
        inset: theme => ({
            0: '0',
            auto: 'auto',
            '1/2': '50%',
            full: '100%',
            ...theme('spacing')
        }),
        letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em'
        },
        lineHeight: {
            none: '1',
            tight: '1.25',
            snug: '1.375',
            normal: '1.5',
            relaxed: '1.625',
            loose: '2'
        },
        listStyleType: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal'
        },
        margin: (theme, { negative }) => ({
            auto: 'auto',
            ...theme('spacing'),
            ...theme('width'),
            ...negative(theme('spacing'))
        }),
        maxHeight: theme => ({
            ...theme('spacing'),
            full: '100%',
            screen: '100vh'
        }),
        maxWidth: {
            none: 'none',
            xs: '20rem',
            sm: '24rem',
            md: '28rem',
            lg: '32rem',
            xl: '36rem',
            '2xl': '42rem',
            '3xl': '48rem',
            '4xl': '56rem',
            '5xl': '64rem',
            '6xl': '72rem',
            full: '100%'
        },
        minHeight: {
            0: '0',
            full: '100%',
            screen: '100vh'
        },
        minWidth: {
            0: '0',
            full: '100%'
        },
        objectPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top'
        },
        opacity: {
            0: '0',
            25: '0.25',
            50: '0.5',
            75: '0.75',
            100: '1'
        },
        order: {
            first: '-9999',
            last: '9999',
            none: '0',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12'
        },
        padding: theme => theme('spacing'),
        placeholderColor: theme => theme('colors'),
        placeholderOpacity: theme => theme('opacity'),
        space: (theme, { negative }) => ({
            ...theme('spacing'),
            ...negative(theme('spacing'))
        }),
        stroke: {
            current: 'currentColor'
        },
        strokeWidth: {
            0: '0',
            1: '1'
        },
        textColor: theme => theme('colors'),
        textOpacity: theme => theme('opacity'),
        width: theme => ({
            auto: 'auto',
            ...theme('spacing'),
            '1/2': '50%',
            '1/3': '33.33333%',
            '2/3': '66.66667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.66667%',
            '2/6': '33.33333%',
            '3/6': '50%',
            '4/6': '66.66667%',
            '5/6': '83.33333%',
            '1/12': '8.33333%',
            '2/12': '16.66667%',
            '3/12': '25%',
            '4/12': '33.33333%',
            '5/12': '41.66667%',
            '6/12': '50%',
            '7/12': '58.33333%',
            '8/12': '66.66667%',
            '9/12': '75%',
            '10/12': '83.33333%',
            '11/12': '91.66667%',
            full: '100%',
            screen: '100vw'
        }),
        zIndex: {
            auto: 'auto',
            0: '0',
            10: '10',
            20: '20',
            30: '30',
            40: '40',
            50: '50'
        },
        gap: theme => theme('spacing'),
        gridTemplateColumns: {},
        gridColumn: {},
        gridColumnStart: {},
        gridColumnEnd: {},
        gridTemplateRows: {},
        gridRow: {},
        gridRowStart: {},
        gridRowEnd: {},
        transformOrigin: {
            center: 'center',
            top: 'top',
            'top-right': 'top right',
            right: 'right',
            'bottom-right': 'bottom right',
            bottom: 'bottom',
            'bottom-left': 'bottom left',
            left: 'left',
            'top-left': 'top left'
        },
        scale: {
            0: '0',
            50: '.5',
            75: '.75',
            90: '.9',
            95: '.95',
            100: '1',
            105: '1.05',
            110: '1.1',
            125: '1.25',
            150: '1.5'
        },
        rotate: {
            '-180': '-180deg',
            '-90': '-90deg',
            '-45': '-45deg',
            0: '0',
            45: '45deg',
            90: '90deg',
            180: '180deg'
        },
        translate: (theme, { negative }) => ({
            ...theme('spacing'),
            ...negative(theme('spacing')),
            '-full': '-100%',
            '-1/2': '-50%',
            '1/2': '50%',
            full: '100%'
        }),
        skew: {
            '-12': '-12deg',
            '-6': '-6deg',
            '-3': '-3deg',
            0: '0',
            3: '3deg',
            6: '6deg',
            12: '12deg'
        },
        transitionProperty: {
            none: 'none',
            all: 'all',
            default:
                'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
            colors: 'background-color, border-color, color, fill, stroke',
            border: 'border-color',
            bg: 'background-color',
            opacity: 'opacity',
            shadow: 'box-shadow',
            transform: 'transform'
        },
        transitionTimingFunction: {
            linear: 'linear',
            in: 'cubic-bezier(0.4, 0, 1, 1)',
            out: 'cubic-bezier(0, 0, 0.2, 1)',
            'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
        },
        transitionDuration: {
            default: '0ms',
            75: '75ms',
            100: '100ms',
            150: '150ms',
            250: '250ms',
            300: '300ms',
            500: '500ms',
            700: '700ms',
            1000: '1000ms'
        },
        transitionDelay: {
            75: '75ms',
            100: '100ms',
            150: '150ms',
            200: '200ms',
            300: '300ms',
            500: '500ms',
            700: '700ms',
            1000: '1000ms'
        },
        animation: {
            none: 'none',
            spin: 'spin 1s linear infinite',
            ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
            pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            bounce: 'bounce 1s infinite'
        },
        keyframes: {
            spin: {
                from: { transform: 'rotate(0deg)' },
                to: { transform: 'rotate(360deg)' }
            },
            ping: {
                '0%': { transform: 'scale(1)', opacity: '1' },
                '75%, 100%': { transform: 'scale(2)', opacity: '0' }
            },
            pulse: {
                '0%, 100%': { opacity: '1' },
                '50%': { opacity: '.5' }
            },
            bounce: {
                '0%, 100%': {
                    transform: 'translateY(-25%)',
                    animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
                },
                '50%': {
                    transform: 'translateY(0)',
                    animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
                }
            }
        },
        customForms: theme => {
            // TODO: refactoring
            return {
                default: {
                    input: {
                        appearance: 'none',
                        borderRadius: undefined,
                        borderColor: undefined,
                        backgroundColor: 'transparent',
                        borderWidth: undefined,
                        paddingTop: undefined,
                        paddingRight: undefined,
                        paddingBottom: undefined,
                        paddingLeft: undefined,
                        fontSize: undefined,
                        lineHeight: undefined,

                        '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
                            '-webkit-appearance': 'none'
                        },

                        '-moz-appearance': 'textfield',

                        '&::placeholder, &::-webkit-input-placeholder, &:-ms-input-placeholder, &:-moz-placeholder, &::-moz-placeholder': {
                            color: undefined,
                            opacity: 0,
                            fontSize: theme('fontSize.sm')
                        },

                        '&:focus': {
                            outline: 'none',
                            boxShadow: undefined,
                            borderColor: undefined,

                            '&::placeholder, &::-webkit-input-placeholder, &:-ms-input-placeholder, &:-moz-placeholder, &::-moz-placeholder': {
                                color: undefined,
                                opacity: 1
                            }
                        }
                    },

                    select: {
                        appearance: undefined,
                        colorAdjust: undefined,
                        '&::-ms-expand': undefined,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: undefined,
                        borderColor: undefined,
                        borderWidth: undefined,
                        borderRadius: undefined,
                        paddingTop: undefined,
                        paddingRight: undefined,
                        paddingBottom: undefined,
                        paddingLeft: undefined,
                        fontSize: undefined,
                        lineHeight: undefined,
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        icon: () =>
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"/></svg>`
                    },

                    checkbox: {
                        appearance: 'none',
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        backgroundOrigin: 'border-box',
                        userSelect: 'none',
                        flexShrink: 0,
                        height: undefined,
                        width: undefined,
                        color: undefined,
                        iconColor: theme('colors.secondary.200'),
                        backgroundColor: theme('colors.white'),
                        borderWidth: theme('borderWidth.2'),
                        borderColor: theme('colors.black.200'),
                        icon: iconColor =>
                            `<svg xmlns="http://www.w3.org/2000/svg" fill="${iconColor}" viewBox="0 0 10 10"><path d="M0 0h10v10H0z"/></svg>`,
                        '&:focus': {
                            outline: 'none',
                            boxShadow: 'none',
                            borderColor: theme('borderWidth.2')
                        },
                        '&:checked': {
                            borderColor: theme('colors.black.200'),
                            backgroundColor: 'transparent',
                            backgroundSize: '50%',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }
                    },

                    radio: {
                        appearance: 'none',
                        colorAdjust: 'exact',
                        iconColor: theme('colors.secondary.200'),
                        height: theme('spacing.0-8'),
                        width: theme('spacing.0-8'),
                        backgroundColor: theme('colors.white'),
                        borderWidth: theme('borderWidth.2'),
                        borderColor: theme('colors.black.200'),
                        icon: iconColor =>
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" fill="${iconColor}"><circle cx="5" cy="5" r="3"/></svg>`,
                        '&:focus': {
                            outline: 'none',
                            boxShadow: 'none',
                            borderColor: theme('borderWidth.2')
                        },
                        '&:checked': {
                            borderColor: theme('colors.black.200'),
                            backgroundColor: 'transparent',
                            backgroundSize: '88%',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }
                    }
                },

                'not-label': {
                    input: {
                        '&::placeholder, &::-webkit-input-placeholder, &:-ms-input-placeholder, &:-moz-placeholder, &::-moz-placeholder': {
                            color: undefined,
                            opacity: 1
                        }
                    }
                },

                'is-error': {
                    checkbox: {
                        borderColor: theme('colors.danger')
                    }
                }
            };
        },
        columnCount: [1, 2, 3],
        columnGap: {
            default: '1rem',
            // will fallback to 'gap' || 'gridGap' values
            sm: '1rem',
            md: '1.5rem',
            lg: '2rem'
        },
        columnWidth: {},
        columnRuleColor: false, // will fallback to `borderColor` values
        columnRuleWidth: false, // will fallback to `borderWidth` values
        columnRuleStyle: [
            'none',
            'hidden',
            'dotted',
            'dashed',
            'solid',
            'double',
            'groove',
            'ridge',
            'inset',
            'outset'
        ],
        columnFill: ['auto', 'balance', 'balance-all'],
        columnSpan: ['none', 'all']
    },
    variants: {
        accessibility: ['responsive', 'focus'],
        alignContent: ['responsive'],
        alignItems: ['responsive'],
        alignSelf: ['responsive'],
        appearance: ['responsive'],
        backgroundAttachment: ['responsive'],
        backgroundColor: ['responsive', 'hover'],
        backgroundOpacity: ['responsive', 'hover'],
        backgroundPosition: ['responsive'],
        backgroundRepeat: ['responsive'],
        backgroundSize: ['responsive'],
        borderCollapse: ['responsive'],
        borderColor: ['responsive', 'hover', 'focus'],
        borderRadius: ['responsive'],
        borderStyle: ['responsive'],
        borderWidth: ['responsive'],
        boxShadow: ['responsive', 'hover', 'focus'],
        boxSizing: ['responsive'],
        container: ['responsive'],
        cursor: ['responsive'],
        display: ['responsive'],
        divideColor: ['responsive'],
        divideOpacity: ['responsive'],
        divideWidth: ['responsive'],
        fill: ['responsive'],
        flex: ['responsive'],
        flexDirection: ['responsive'],
        flexGrow: ['responsive'],
        flexShrink: ['responsive'],
        flexWrap: ['responsive'],
        float: ['responsive'],
        fontFamily: ['responsive'],
        fontSize: ['responsive'],
        fontSmoothing: ['responsive'],
        fontStyle: ['responsive'],
        fontWeight: ['responsive', 'hover', 'focus'],
        height: ['responsive'],
        inset: ['responsive'],
        justifyContent: ['responsive'],
        letterSpacing: ['responsive'],
        lineHeight: ['responsive'],
        listStylePosition: ['responsive'],
        listStyleType: ['responsive'],
        margin: ['responsive'],
        maxHeight: ['responsive'],
        maxWidth: ['responsive'],
        minHeight: ['responsive'],
        minWidth: ['responsive'],
        objectFit: ['responsive'],
        objectPosition: ['responsive'],
        opacity: ['responsive'],
        order: ['responsive'],
        outline: ['responsive', 'focus'],
        overflow: ['responsive'],
        overscrollBehavior: ['responsive'],
        padding: ['responsive'],
        placeholderColor: ['responsive', 'focus'],
        placeholderOpacity: ['responsive', 'focus'],
        pointerEvents: ['responsive'],
        position: ['responsive'],
        resize: ['responsive'],
        space: ['responsive'],
        stroke: ['responsive'],
        strokeWidth: ['responsive'],
        tableLayout: ['responsive'],
        textAlign: ['responsive'],
        textColor: ['responsive', 'hover', 'focus'],
        textDecoration: ['responsive', 'hover', 'focus'],
        textTransform: ['responsive'],
        userSelect: ['responsive'],
        verticalAlign: ['responsive'],
        visibility: ['responsive'],
        whitespace: ['responsive'],
        width: ['responsive'],
        wordBreak: ['responsive'],
        zIndex: ['responsive'],
        gap: ['responsive'],
        gridAutoFlow: ['responsive'],
        gridTemplateColumns: ['responsive'],
        gridColumn: ['responsive'],
        gridColumnStart: ['responsive'],
        gridColumnEnd: ['responsive'],
        gridTemplateRows: ['responsive'],
        gridRow: ['responsive'],
        gridRowStart: ['responsive'],
        gridRowEnd: ['responsive'],
        transform: ['responsive'],
        transformOrigin: ['responsive'],
        scale: ['responsive', 'hover'],
        rotate: ['responsive', 'hover'],
        translate: ['responsive', 'hover'],
        skew: ['responsive', 'hover'],
        transitionProperty: ['responsive'],
        transitionTimingFunction: ['responsive'],
        transitionDuration: ['responsive'],
        transitionDelay: ['responsive'],
        animation: ['responsive'],
        columnCount: ['responsive'],
        columnGap: ['responsive'],
        columnWidth: ['responsive'],
        columnRuleColor: ['responsive'],
        columnRuleWidth: ['responsive'],
        columnRuleStyle: ['responsive'],
        columnFill: ['responsive'],
        columnSpan: ['responsive']
    },
    corePlugins: {},
    plugins: [require('@tailwindcss/custom-forms'), require('tailwindcss-multi-column')()]
};
