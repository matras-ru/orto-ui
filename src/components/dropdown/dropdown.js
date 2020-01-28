const NAME = 'CDropdown';

export default {
    name: NAME,

    data() {
        return {
            open: false
        };
    },

    render(h) {
        return h('div', [this.$scopedSlots('holder'), this.$scopedSlots('holder')]);
    }
};
