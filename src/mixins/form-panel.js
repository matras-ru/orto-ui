export default {
    props: {
        label: {
            type: String,
            default: null
        },

        collapsible: {
            type: Boolean,
            default: false
        },

        collapsed: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            open: !this.collapsed
        };
    },

    methods: {
        // TODO:
        toggle() {
            this.open = !this.open;
        }
    },

    render(h) {
        const { panelHeaderBase, panelWrapperBase } = this.theme;

        return h(
            'div',
            {
                staticClass: panelWrapperBase
            },
            [
                this.label
                    ? h(
                          'header',
                          {
                              staticClass: panelHeaderBase
                          },
                          [h('div', this.label)]
                      )
                    : null,
                this.open
                    ? h('div', [
                          [
                              this.getControl !== void 0 // control slot
                                  ? this.getControl(h)
                                  : this.$slots.default
                          ]
                      ])
                    : null
            ]
        );
    }
};
