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

    const createWrapper = ({ propsData = null } = {}) => {
        const app = localVue.extend({
            render(h) {
                return h(CPicture, {
                    props: propsData
                });
            }
        });

        return mount(app, { localVue });
    };

    it('should match to snapshot', function () {
        const wrapper = createWrapper({
            propsData: {
                src: 'picture1.jpg',
                sm: 'pictureSm.jpg',
                md: 'pictureMd.jpg',
                lg: 'pictureLg.jpg',
                formats: [
                    {
                        type: 'webp',
                        sm: 'pictureSm.webp',
                        md: 'pictureMd.webp',
                        lg: 'pictureLg.webp'
                    }
                ]
            }
        });

        expect(wrapper.html()).toMatchSnapshot();

        wrapper.destroy();
    });

    it('basic functionality', () => {
        const wrapper = createWrapper({
            propsData: {
                src: 'picture1.jpg'
            }
        });

        const component = wrapper.findComponent(CPicture);
        const img = wrapper.find('img');

        expect(component.isFunctionalComponent).toBe(true);
        expect(wrapper.element.tagName).toEqual('PICTURE');
        expect(img.classes().sort()).toEqual(`${baseClass}`.split(' ').sort());
        expect(img.attributes('src')).toEqual('picture1.jpg');

        wrapper.destroy();
    });

    it('formats should render properly', () => {
        const wrapper = createWrapper({
            propsData: {
                src: 'picture1.jpg',
                formats: [
                    {
                        type: 'webp',
                        sm: 'pictureSm.webp',
                        md: 'pictureMd.webp',
                        lg: 'pictureLg.webp'
                    }
                ]
            }
        });

        const sources = wrapper.findAll('source');

        expect(sources.at(0).attributes('type')).toEqual('image/webp');
        expect(sources.at(0).attributes('srcset')).toEqual(
            'pictureSm.webp 640w, pictureMd.webp 768w, pictureLg.webp 1024w'
        );
        wrapper.destroy();
    });
});
