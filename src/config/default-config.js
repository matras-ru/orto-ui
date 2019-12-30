export default {
    common: {
        screens: ['sm', 'md', 'lg', 'xl'],
        validJustifyContent: ['start', 'end', 'between', 'center']
    },

    CButton: {
        tag: 'button',
        variant: null,
        size: 'md',
        type: 'button'
    },

    CLink: {
        variant: null,
        target: '_self'
    },

    CChecbox: {
        falseValue: false,
        trueValue: true
    },

    CList: {
        tag: 'ul',
        horizontal: false
    },

    CListItem: {
        tag: 'li'
    },

    CRow: {
        direction: 'row',
        gutters: 'md',
        cols: 12
    },

    CCol: {},

    CTabs: {
        vertical: false,
        justify: 'start'
    }
};
