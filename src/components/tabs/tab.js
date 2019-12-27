import { install } from '@/mixins';
import { mergeData } from 'vue-functional-data-merge';

const NAME = 'CTab';

export default {
    name: NAME,
    functional: true,
    inheritAttrs: false,
    ...install,
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

    render(h, context) {
        const { data, props, children } = context;
        const { name, label, isActive } = props;

        console.log('context', context);
        // console.log('data1', props);

        const componentData = {
            attrs: { role: 'presentation' },
            name
        };

        return h('CListItem', mergeData(data, componentData), [
            // TODO: Заменить на LINK
            h(
                'CLink',
                {
                    props: {
                        href: `#${name}`,
                        id: `tab-${name}`,
                        tabindex: isActive ? null : '-1'
                    },

                    attrs: {
                        role: 'tab',
                        'aria-selected': isActive ? 'true' : 'false',
                        tabindex: isActive ? null : '-1'
                    }
                    // on: {
                    //     click: () => {
                    //         this.$emit('onClick', this.name);
                    //     }
                    // }
                    // staticClass:
                    //     'outline-none select-none font-semibold text-lg uppercase px-1-7 py-1-5',
                    // class: {
                    //     'text-secondary-200 border-b-4 border-secondary-200': this.isActive
                    // }
                },
                label ? label : children
            )
        ]);
    }
};
