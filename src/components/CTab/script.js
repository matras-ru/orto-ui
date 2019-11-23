import { selfInstall } from '@/utils';

export default {
    name: 'CTab',

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props: {
        label: {
            type: String,
            default: null
        },

        name: {
            type: String,
            default: null
        },

        isActive: {
            type: Boolean,
            default: false
        }
    },

    render(h) {
        return h(
            // TODO: заменить на ListItem
            'li',
            {
                attrs: { role: 'presentation' }
            },
            [
                // TODO: Заменить на LINK
                h(
                    'a',
                    {
                        attrs: {
                            href: `#${this.name}`,
                            id: `tab-${this.name}`,
                            role: 'tab',
                            tabindex: this.isActive ? null : '-1',
                            'aria-selected': this.isActive ? 'true' : 'false'
                        },
                        on: {
                            click: () => {
                                this.$emit('onClick', this.name);
                            }
                        },
                        staticClass:
                            'block outline-none select-none font-semibold text-lg uppercase px-1-7 py-1-5',
                        class: {
                            'text-secondary-200 border-b-4 border-secondary-200': this.isActive
                        }
                    },
                    this.label
                )
            ]
        );
    }
};
