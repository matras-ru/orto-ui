import { install } from '@/mixins';
import { mergeData } from 'vue-functional-data-merge';

const NAME = 'CTabs';

export default {
    name: NAME,
    functional: true,
    ...install,
    props: {
        modelValue: {
            type: [Number, String],
            default: null
        }
    },

    model: {
        prop: 'modelValue',
        event: 'change'
    },

    render(h, { props, children, listeners }) {
        const onChange = listeners['change'];

        const normalizeTabs = children.map(tab => {
            const { name } = tab.data;
            const isActive = props.modelValue === name;
            // mixin isAactive props
            // tab.componentOptions.propsData = {
            //     ...tab.componentOptions.propsData,
            //     isActive
            // };

            // // mixin listeners
            // tab.componentOptions.listeners = {
            //     ...tab.componentOptions.listeners,
            //     onClick: name => {
            //         onChange(name);
            //     }
            // };

            tab.data = mergeData(tab.data, {
                ddddd: {
                    isActive
                }
            });

            // console.log(tab.data);

            return tab;
        });

        return h(
            'CList',
            {
                attrs: {
                    role: 'tablist'
                },
                props: {
                    horizontal: true,
                    justify: 'between'
                }
            },
            [...normalizeTabs]
        );
    }
};
