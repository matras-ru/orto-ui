/* eslint-env jest */
import { mount, createLocalVue } from '@vue/test-utils';
import CPicture from './picture';
import { ConfigPlugin } from '@/config';
const baseClass = 'w-full object-cover';

describe('CPicture', () => {
    const plugin = function (Vue, options = {}) {
        const { config = {} } = options;
        ConfigPlugin(config, Vue);
    };

    const localVue = createLocalVue();

    localVue.use(plugin);

    it('rendered', () => {
        const App = localVue.extend({
            render(h) {
                return h(CPicture, {
                    props: {
                        src: 'picture1.jpg'
                    }
                });
            }
        });

        const wrapper = mount(App, {
            localVue: localVue
        });

        const pictureCmp = wrapper.findComponent(CPicture);
        const img = wrapper.find('img');

        expect(pictureCmp.isFunctionalComponent).toBe(true);
        expect(wrapper.element.tagName).toEqual('PICTURE');
        expect(img.classes().sort()).toEqual(`${baseClass}`.split(' ').sort());
        expect(img.attributes('src')).toEqual('picture1.jpg');

        wrapper.destroy();
    });

    it('creating media source', () => {
        const App = localVue.extend({
            render(h) {
                return h(CPicture, {
                    props: {
                        src: 'picture1.jpg',
                        sm: 'picture2.jpg',
                        lg: 'picture3.jpg'
                    }
                });
            }
        });

        const wrapper = mount(App, {
            localVue: localVue
        });

        const img = wrapper.find('img');
        const pictureCmp = wrapper.findComponent(CPicture);

        const sources = wrapper.findAll('source');

        expect(pictureCmp.isFunctionalComponent).toBe(true);
        expect(wrapper.element.tagName).toEqual('PICTURE');

        expect(img.classes().sort()).toEqual(`${baseClass}`.split(' ').sort());
        expect(img.attributes('src')).toEqual('picture1.jpg');

        expect(sources.at(0).attributes('type')).toEqual('image/jpg');
        expect(sources.at(0).attributes('srcset')).toEqual('picture2.jpg');
        expect(sources.at(0).attributes('media')).toEqual('(min-width: 640px)');

        expect(sources.at(1).attributes('type')).toEqual('image/jpg');
        expect(sources.at(1).attributes('srcset')).toEqual('picture3.jpg');
        expect(sources.at(1).attributes('media')).toEqual('(min-width: 1024px)');
    });
});
