import { selfInstall } from '@/';
import DefaultTheme from '@/themes/default/CDropdown';
import { getComponentConfig } from '@/config';

const validVariants = ['primary', 'secondary'];

const NAME = 'CDropdown';

export default {
    name: NAME,

    props: {
        theme: {
            type: Object,
            default: () => DefaultTheme
        },

        variant: {
            type: String,
            default: () => getComponentConfig(NAME, 'variant'),
            validator: value => validVariants.includes(value)
        }
    },

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    data() {
        return {
            isShow: false
        };
    },

    methods: {
        toggle() {
            this.isShow = !this.isShow;
        },

        close() {
            this.isShow = false;
        },

        open() {
            this.isShow = true;
        }
    },

    render(h) {
        const { wrapperClasses, dropdownClasses } = (() => {
            const {
                wrapperBase,
                dropdownBase,
                dropdownVariantPrimary,
                dropdownVariantSecondary
            } = this.theme;

            const wrapperClasses = [wrapperBase];
            const dropdownClasses = [dropdownBase];

            const themeMap = {
                variants: {
                    primary: dropdownVariantPrimary,
                    secondary: dropdownVariantSecondary
                }
            };

            dropdownClasses.push(themeMap.variants[this.variant]);

            return {
                wrapperClasses,
                dropdownClasses
            };
        })();

        return h(
            'div', // wrapper
            {
                class: wrapperClasses,
                directives: [
                    {
                        name: 'click-outside',
                        value: this.close
                    }
                ]
            },
            [
                this.$scopedSlots.holder
                    ? this.$scopedSlots.holder({
                          // holder
                          // TODO: спорное решение передавать функцию в качестве props, не совсем vue way, скорее реакт. Пока оставим так
                          toggle: this.toggle,
                          open: this.open,
                          close: this.close
                      })
                    : null,

                this.isShow
                    ? h(
                          'div', // dropdown
                          {
                              class: dropdownClasses,
                              ref: 'dropdown'
                          },
                          this.$scopedSlots.dropdown
                              ? this.$scopedSlots.dropdown({
                                    toggle: this.toggle,
                                    open: this.open,
                                    close: this.close
                                })
                              : null
                      )
                    : null
            ]
        );
    }
};
