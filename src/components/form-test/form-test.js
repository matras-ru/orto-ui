import { selfInstall } from '@/';
// import DefaultTheme from '@/themes/default/CFormInput';

const NAME = 'CFormTest';

export default {
    name: NAME,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        modelValue: {
            type: String,
            default: null
        },

        theme: {
            type: Object,
            default: () => {}
        },

        data: {
            type: Array,
            default: () => []
        }
    },

    model: {
        prop: 'modelValue',
        event: 'change'
    },

    data() {
        return {
            open: false
        };
    },

    methods: {
        onUpdate({ e, type }) {
            const value = e.target.value;
            this.$emit(type, value);
        },

        toggle() {
            this.open = !this.open;
        }
    },

    render(h) {
        return h('div', { staticClass: 'relative' }, [
            h('CFormInput', {
                props: {
                    readonly: true,
                    label: 'test',
                    modelValue: this.modelValue
                },
                staticClass: 'cursor-pointer',
                on: {
                    click: this.toggle
                },
                scopedSlots: {
                    append: () => {
                        return h('div', { staticClass: 'form-select w-1-4 h-1-4' });
                    }
                }
            }),

            this.open
                ? h(
                      'div',
                      {
                          staticClass:
                              'absolute z-10 top-full right-0 left-0 shadow-example mt-0-4 bg-white rounded-lg overflow-hidden'
                      },
                      [
                          h('CList', [
                              this.data.map(option => {
                                  return h(
                                      'CListItem',
                                      {
                                          staticClass:
                                              'cursor-pointer py-0-4 px-0-8 bg-white hover:bg-tertiary-100',
                                          on: {
                                              click: () => {
                                                  this.$emit('change', option);
                                                  this.toggle();
                                              }
                                          }
                                      },
                                      option
                                  );
                              })
                          ])
                      ]
                  )
                : null
        ]);
    }
};
