/* eslint-env jest */
import { createLocalVue, mount } from '@vue/test-utils';
import CRating from './rating';

describe('Rating basic', () => {
    it('is rendered', () => {
        const wrapper = mount(CRating, {
            propsData: {
                id: 'test1'
            }
        });

        const stars = wrapper.find('span svg');

        expect(wrapper.element.tagName).toEqual('DIV');
        expect(stars.element.tagName).toEqual('svg');
        expect(wrapper.html()).toMatchSnapshot();

        wrapper.destroy();
    });
});

describe('Rating with label', () => {
    it('is rendered', () => {
        const scale = [
            { id: 1, label: 'Ужасно', value: 1 },
            { id: 2, label: 'Плохо', value: 2 },
            { id: 3, label: 'Нормально', value: 3 },
            { id: 4, label: 'Хорошо', value: 4 },
            { id: 5, label: 'Отлично', value: 5 }
        ];

        const wrapper = mount(CRating, {
            propsData: {
                scale,
                id: 'test1'
            }
        });

        const stars = wrapper.find('span svg');
        const label = wrapper.find('div');

        expect(wrapper.element.tagName).toEqual('DIV');
        expect(stars.element.tagName).toEqual('svg');
        expect(label.element.tagName).toEqual('DIV');
        expect(wrapper.vm.scale).toBe(scale);
        expect(wrapper.html()).toMatchSnapshot();

        wrapper.destroy();
    });
});

describe('Rating with rating number', () => {
    it('is rendered', () => {
        const wrapper = mount(CRating, {
            propsData: {
                rating: '4.3',
                id: 'test1'
            }
        });

        const stars = wrapper.find('span svg');
        const rating = wrapper.find('div');

        expect(wrapper.element.tagName).toEqual('DIV');
        expect(stars.element.tagName).toEqual('svg');
        expect(rating.element.tagName).toEqual('DIV');
        expect(wrapper.vm.rating).toBe('4.3');
        expect(wrapper.html()).toMatchSnapshot();

        wrapper.destroy();
    });
});

describe('Rating events', () => {
    it('should emit star selected event when selected', () => {
        const wrapper = mount(CRating);

        const stars = wrapper.find('span svg');
        stars.trigger('click');
        expect(stars.emitted()).toHaveProperty('starSelected');

        wrapper.destroy();
    });

    it('should emit star mouse move event when mouse move', () => {
        const wrapper = mount(CRating);

        const stars = wrapper.find('span svg');
        stars.trigger('mousemove');
        expect(stars.emitted()).toHaveProperty('starMouseMove');

        wrapper.destroy();
    });
});

describe('Rating readonly and events', () => {
    it('is rendered', () => {
        const wrapper = mount(CRating, {
            propsData: {
                id: 'test1',
                readOnly: true,
                rating: '4.5'
            }
        });

        const stars = wrapper.find('span svg');

        expect(wrapper.element.tagName).toEqual('DIV');
        expect(stars.element.tagName).toEqual('svg');
        expect(wrapper.vm.readOnly).toBe(true);
        expect(wrapper.vm.rating).toBe('4.5');
        expect(wrapper.html()).toMatchSnapshot();

        wrapper.destroy();
    });

    it('should emit star selected event when selected', () => {
        const wrapper = mount(CRating, {
            propsData: {
                readOnly: true,
                rating: '4.5'
            }
        });

        const stars = wrapper.find('span svg');
        stars.trigger('click');
        expect(wrapper.emitted()).not.toHaveProperty('starSelected');

        wrapper.destroy();
    });

    it('should emit star mouse move event when mouse move', async () => {
        const wrapper = mount(CRating, {
            propsData: {
                readOnly: true,
                rating: '4.5'
            }
        });

        const stars = wrapper.find('span svg');
        await stars.trigger('mousemove');
        expect(wrapper.emitted()).not.toHaveProperty('starMouseMove');

        wrapper.destroy();
    });
});

describe('Rating v-model', () => {
    it('v-model', () => {
        const localVue = new createLocalVue();

        const App = localVue.extend({
            data() {
                return {
                    model: undefined
                };
            },

            render(h) {
                return h(CRating, {
                    props: {
                        id: 'test1',
                        gradeModel: this.model
                    },
                    on: {
                        'star-selected': val => {
                            this.model = val;
                        }
                    }
                });
            }
        });

        const wrapper = mount(App, {
            localVue: localVue
        });

        expect(wrapper.vm.model).toEqual(undefined);
        wrapper.setData({ model: 5 });
        expect(wrapper.vm.model).toEqual(5);
        expect(wrapper.html()).toMatchSnapshot();

        wrapper.destroy();
    });
});
