import { selfInstall } from '@/utils';
import { mergeData } from 'vue-functional-data-merge';

const props = {
    name: {
        type: String,
        default: null
    }
};

// function generateName(name) {
//     return name
//         .toLowerCase()
//         .replace(/\.svg$/, '')
//         .replace(/[^a-z0-9-]/g, '-');
// }

// function getIcon(info) {
//     const { icon, sprite } = info;
//     return (
//         require('<%= relativeToBuild(options._output) %>/' + sprite + '.svg') +
//         `#i-${generateName(icon)}`
//     );
// }

// function getInfo(name) {
//     let [sprite, icon] = name.split('/');

//     if (!icon) {
//         icon = sprite;
//         sprite = '<%= options.defaultSprite %>';
//     }

//     return {
//         icon,
//         sprite
//     };
// }

const getIcon = name => {
    const icon = require(`@/assets/icons/svg/${name}.svg`);
    return icon.default.url;
};

export default {
    name: 'CIcon',

    functional: true,

    install(Vue, theme) {
        selfInstall(Vue, theme, this);
    },

    props,

    render(h, { data, props }) {
        const icon = getIcon(props.name);

        const componentData = {
            attrs: {
                xmlns: 'http://www.w3.org/2000/svg'
            },
            staticClass: 'fill-current inline-block w-2-2 h-2-2'
        };

        const use = h('use', {
            attrs: {
                'xlink:href': icon
            }
        });

        return h('svg', mergeData(data, componentData), [use]);
    }
};
