export default {
    common: {
        screens: ['sm', 'md', 'lg', 'xl'],
        validJustifyContent: ['start', 'end', 'between', 'center']
    },

    CButton: {
        tag: 'button',
        variant: 'primary',
        size: 'md'
    },

    CBadge: {
        variant: 'primary'
    },

    CLink: {
        variant: 'primary',
        target: '_self'
    },

    CCheckbox: {
        falseValue: false,
        trueValue: true
    },

    CList: {
        tag: 'ul',
        direction: 'vertical'
    },

    CListItem: {
        tag: 'li'
    },

    CRow: {
        direction: 'row',
        gutters: 'lg',
        cols: 12
    },

    CCol: {},

    CTabs: {
        vertical: false,
        justify: 'start'
    },

    CTabPanels: {
        lazy: false
    },

    CTabPanel: {
        tag: 'section'
    },

    CDropdown: {
        variant: 'primary',
        placement: 'left'
    },

    CFormInput: {
        rows: 6
    },

    CFormSelectCustom: {
        optionValue: 'value',
        optionLabel: 'label',
        dropdownVariant: 'secondary'
    }
};
