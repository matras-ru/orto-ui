/* eslint-env jest */
import { mount } from '@vue/test-utils';
import CPicture from './picture';

const baseClass = 'w-full object-cover';

describe('CPicture', () => {
    it('rendered', () => {
        const wrapper = mount(CPicture, {
            context: {
                props: {
                    src: 'picture1.jpg'
                }
            }
        });

        const img = wrapper.find('img');

        expect(wrapper.isFunctionalComponent).toBe(true);
        expect(wrapper.element.tagName).toEqual('PICTURE');

        expect(img.classes().sort()).toEqual(`${baseClass}`.split(' ').sort());
        expect(img.attributes('src')).toEqual('picture1.jpg');
    });

    it('creating media source', () => {
        const wrapper = mount(CPicture, {
            context: {
                props: {
                    src: 'picture1.jpg',
                    sm: 'picture2.jpg',
                    lg: 'picture3.jpg'
                }
            }
        });

        const img = wrapper.find('img');
        const sources = wrapper.findAll('source');

        expect(wrapper.isFunctionalComponent).toBe(true);
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
