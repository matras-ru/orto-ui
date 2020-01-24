import { selfInstall } from '@/';

const NAME = 'CFormPanel';

export default {
    name: NAME,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        theme: {
            type: Object,
            default: () => {}
        },

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
        },

        info: {
            type: String,
            default: null
        }
    },

    data() {
        return {
            open: true
        };
    },

    created() {
        this.open = !this.collapsed;
    },

    methods: {
        toggle() {
            this.open = !this.open;
        }
    },

    render(h) {
        return h('section', {}, [
            this.label
                ? h(
                      'header',
                      {
                          staticClass: 'text-2xl font-semibold mb-1-1'
                      },
                      [
                          h(
                              'div',
                              {
                                  staticClass: ''
                                  //   on: {
                                  //       click: this.collapsible ? this.toggle : noop
                                  //   }
                              },
                              [
                                  //   this.collapsible
                                  //       ? h('Icon', {
                                  //             props: {
                                  //                 size: '2xs',
                                  //                 icon: this.open ? iconMinus : iconPlus
                                  //             }
                                  //         })
                                  //       : null,

                                  h(
                                      'div',
                                      {
                                          staticClass: ''
                                      },

                                      this.label
                                  )
                              ]
                          )

                          //   this.info
                          //       ? h('InfoPopover', {
                          //             props: { html: this.info }
                          //         })
                          //       : null
                      ]
                  )
                : null,

            this.open ? h('main', {}, [this.$slots.default]) : null
        ]);
    }
};
