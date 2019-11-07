module.exports = {
    prefix: '',
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
            danger: '#f1001a'
        },
        spacing: {
            px: '1px',
            '0': '0',
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
            '12-4': '12.5rem'
        },
        backgroundColor: theme => theme('colors'),
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
        borderRadius: {
            none: '0',
            sm: '0.125rem',
            default: '0.25rem',
            lg: '1.375rem',
            full: '9999px'
        },
        borderWidth: {
            default: '1px',
            '0': '0',
            '2': '2px',
            '3': '3px',
            '4': '4px',
            '8': '8px'
        },
        boxShadow: {
            default: '0 6px 12px rgba(255, 205, 0, .7)',
            none: 'none'
        },
        container: {},
        cursor: {
            auto: 'auto',
            default: 'default',
            pointer: 'pointer',
            wait: 'wait',
            text: 'text',
            move: 'move',
            'not-allowed': 'not-allowed'
        },
        fill: theme => ({
            default: theme('colors.black.100')
        }),
        flex: {
            '1': '1 1 0%',
            auto: '1 1 auto',
            initial: '0 1 auto',
            none: 'none'
        },
        flexGrow: {
            '0': '0',
            default: '1'
        },
        flexShrink: {
            '0': '0',
            default: '1'
        },
        fontFamily: {
            body: ['Helvetica', 'sans-serif']
        },
        fontSize: {
            '2xs': '0.625rem',
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
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
            screen: '100vh'
        }),
        inset: theme => ({
            '0': '0',
            auto: 'auto',
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
            ...negative(theme('spacing'))
        }),
        maxHeight: {
            full: '100%',
            screen: '100vh'
        },
        maxWidth: {
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
            '0': '0',
            full: '100%',
            screen: '100vh'
        },
        minWidth: {
            '0': '0',
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
            '0': '0',
            '25': '0.25',
            '50': '0.5',
            '75': '0.75',
            '100': '1'
        },
        order: {
            first: '-9999',
            last: '9999',
            none: '0',
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
            '6': '6',
            '7': '7',
            '8': '8',
            '9': '9',
            '10': '10',
            '11': '11',
            '12': '12'
        },
        padding: theme => theme('spacing'),
        stroke: {
            current: 'currentColor'
        },
        textColor: theme => theme('colors'),
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
            '0': '0',
            '10': '10',
            '20': '20',
            '30': '30',
            '40': '40',
            '50': '50'
        },
        transitionProperty: {
            default: 'none',
            none: 'none',
            all: 'all',
            color: 'color',
            bg: 'background-color',
            border: 'border-color',
            colors: ['color', 'background-color', 'border-color'],
            opacity: 'opacity',
            shadow: 'box-shadow',
            transform: 'transform'
        },
        transitionDuration: {
            default: '0ms',
            '0': '0ms',
            '100': '100ms',
            '250': '250ms',
            '500': '500ms'
        },
        transitionTimingFunction: {
            default: 'ease',
            linear: 'linear',
            ease: 'ease',
            'ease-in': 'ease-in',
            'ease-out': 'ease-out',
            'ease-in-out': 'ease-in-out'
        },
        transitionDelay: {
            default: '0ms',
            '0': '0ms',
            '100': '100ms',
            '250': '250ms',
            '500': '500ms'
        },
        customForms: theme => ({
            custom: {
                'input, textarea': {
                    '&:focus + label': {
                        fontSize: theme('fontSize.2xs'),
                        paddingTop: theme('padding.0-1')
                    }
                }
            },
            'not-empty': {
                'input, textarea': {
                    '& + label': {
                        fontSize: theme('fontSize.2xs'),
                        paddingTop: theme('padding.0-1')
                    }
                }
            }
        })
    },
    variants: {
        alignContent: ['responsive'],
        alignItems: ['responsive'],
        alignSelf: ['responsive'],
        appearance: ['responsive'],
        backgroundAttachment: ['responsive'],
        backgroundColor: ['responsive', 'hover', 'focus'],
        backgroundPosition: ['responsive'],
        backgroundRepeat: ['responsive'],
        backgroundSize: ['responsive'],
        borderCollapse: ['responsive'],
        borderColor: ['responsive', 'hover', 'focus'],
        borderRadius: ['responsive'],
        borderStyle: ['responsive'],
        borderWidth: ['responsive'],
        boxShadow: ['responsive', 'hover', 'focus'],
        cursor: ['responsive'],
        display: ['responsive'],
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
        padding: ['responsive'],
        pointerEvents: ['responsive'],
        position: ['responsive'],
        resize: ['responsive'],
        stroke: ['responsive'],
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
        transitionProperty: [],
        transitionDuration: [],
        transitionTimingFunction: [],
        transitionDelay: []
    },
    corePlugins: {},
    plugins: [
        require('tailwindcss-transitions')(),
        require('@tailwindcss/custom-forms'),
        function({ addBase, config }) {
            addBase({
                a: {
                    color: config('theme.colors.black.100')
                },
                h1: {
                    fontSize: config('theme.fontSize.2xl'),
                    fontWeight: config('theme.fontWeight.bold')
                },
                h2: {
                    fontSize: config('theme.fontSize.xl'),
                    fontWeight: config('theme.fontWeight.bold')
                },
                h3: {
                    fontSize: config('theme.fontSize.base'),
                    fontWeight: config('theme.fontWeight.bold')
                },
                p: { marginTop: 'theme.margin.12' }
            });
        }
    ]
};
