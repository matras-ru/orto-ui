/* eslint-env jest */
import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';

import CLink from './link';

const baseClass = 'no-underline cursor-pointer inline-block';
const disabledClass = 'opacity-75 cursor-not-allowed';
const primaryClass = 'text-secondary-200 hover:text-black-200 border-b-2';

describe('Link', () => {
    it('default', () => {
        const wrapper = mount(CLink);

        expect(wrapper.is('span')).toBe(true);
        expect(wrapper.attributes('href')).not.toBeDefined();
        expect(wrapper.attributes('target')).not.toBeDefined();

        expect(wrapper.classes().sort()).toEqual(`${baseClass} ${primaryClass}`.split(' ').sort());
    });

    it('custom attrs: href & target', () => {
        const wrapper = mount(CLink, {
            propsData: {
                href: '//google.com',
                target: '_blank'
            }
        });

        expect(wrapper.attributes('target')).toBeDefined();
        expect(wrapper.attributes('target')).toBe('_blank');
        expect(wrapper.attributes('href')).toBeDefined();
        expect(wrapper.attributes('href')).toBe('//google.com');
    });

    it('default slot', () => {
        const wrapper = mount(CLink, {
            slots: {
                default: 'Example link'
            }
        });

        expect(wrapper.text()).toBe('Example link');
    });

    it('prop label > default slot', () => {
        const wrapper = mount(CLink, {
            propsData: {
                label: 'Test Link'
            },
            slots: {
                default: 'Example link'
            }
        });

        expect(wrapper.text()).toBe('Test Link');
    });

    it('disabled', () => {
        const wrapper = mount(CLink, {
            propsData: {
                disabled: true
            }
        });

        expect(wrapper.attributes('aria-disabled')).toBeDefined();
        expect(wrapper.attributes('aria-disabled')).toBe('true');

        expect(wrapper.classes().sort()).toEqual(
            `${baseClass} ${primaryClass} ${disabledClass}`.split(' ').sort()
        );
    });

    it('variant: primary', () => {
        const wrapper = mount(CLink, {
            propsData: {
                variant: 'primary'
            }
        });

        expect(wrapper.classes().sort()).toEqual(`${baseClass} ${primaryClass}`.split(' ').sort());
    });
});

describe('click event', () => {
    const localVue = new createLocalVue();

    it('single click handler', () => {
        let called = 0;
        let evt = null;
        const wrapper = mount(CLink, {
            listeners: {
                click: e => {
                    evt = e;
                    called++;
                }
            }
        });
        expect(wrapper.is('span')).toBe(true);
        expect(called).toBe(0);
        expect(evt).toEqual(null);
        wrapper.find('span').trigger('click');
        expect(called).toBe(1);
        expect(evt).toBeInstanceOf(MouseEvent);

        wrapper.destroy();
    });

    it('multiple click handlers', async () => {
        const spy1 = jest.fn();
        const spy2 = jest.fn();
        const wrapper = mount(CLink, {
            listeners: {
                click: [spy1, spy2]
            }
        });
        expect(wrapper.is('span')).toBe(true);
        expect(spy1).not.toHaveBeenCalled();
        expect(spy2).not.toHaveBeenCalled();
        wrapper.find('span').trigger('click');
        expect(spy1).toHaveBeenCalled();
        expect(spy2).toHaveBeenCalled();

        wrapper.destroy();
    });

    it('disabled and clicked', async () => {
        let called = 0;
        let evt = null;
        const wrapper = mount(CLink, {
            propsData: {
                disabled: true
            },
            listeners: {
                click: e => {
                    evt = e;
                    called++;
                }
            }
        });
        expect(wrapper.is('span')).toBe(true);
        expect(called).toBe(0);
        expect(evt).toEqual(null);
        wrapper.find('span').trigger('click');
        expect(called).toBe(0);
        expect(evt).toEqual(null);

        wrapper.destroy();
    });

    it('"clicked::link" on $root', async () => {
        const App = localVue.extend({
            render(h) {
                return h(CLink, { props: { href: '/foo' } }, 'test-link');
            }
        });

        const spy = jest.fn();
        const wrapper = mount(App, {
            localVue
        });

        wrapper.vm.$root.$on('clicked::link', spy);
        wrapper.trigger('click');
        expect(spy).toHaveBeenCalled();

        wrapper.destroy();
    });

    it('NOT "clicked::link" on $root is disabled', async () => {
        const App = localVue.extend({
            render(h) {
                return h(CLink, { props: { href: '/foo', disabled: true } }, 'link-link');
            }
        });

        const spy = jest.fn();
        const wrapper = mount(App, {
            localVue
        });

        expect(wrapper.isVueInstance()).toBe(true);

        wrapper.vm.$root.$on('clicked::link', spy);
        wrapper.trigger('click');
        expect(spy).not.toHaveBeenCalled();

        wrapper.destroy();
    });
});

describe('Router Link', () => {
    it('works', async () => {
        const localVue = new createLocalVue();
        localVue.use(VueRouter);

        const router = new VueRouter({
            mode: 'abstract',
            routes: [
                { path: '/', component: { name: 'R', template: '<div class="r">INDEX</div>' } },
                { path: '/about', component: { name: 'A', template: '<div class="a">ABOUT</div>' } }
            ]
        });

        const App = localVue.extend({
            router,
            components: { CLink },
            render(h) {
                return h('section', [
                    h('CLink', { props: { to: '/about' } }, 'to-name-about'), // router-link
                    h('CLink', { props: { to: { path: '/about' } } }, 'to-path-about'), // router-link
                    h('CLink', { props: { href: '/about' } }, 'href-about'), // regular link
                    h('router-view')
                ]);
            }
        });

        const wrapper = mount(App, {
            localVue,
            attachToDocument: true
        });

        expect(wrapper.isVueInstance()).toBe(true);
        expect(wrapper.is('section')).toBe(true);

        expect(wrapper.findAll('a').length).toBe(3);
        const $links = wrapper.findAll('a');

        expect($links.at(0).isVueInstance()).toBe(true);
        expect($links.at(0).vm.$options.name).toBe('CLink');
        expect($links.at(0).vm.$children.length).toBe(1);
        expect($links.at(0).vm.$children[0].$options.name).toBe('RouterLink');

        expect($links.at(1).isVueInstance()).toBe(true);
        expect($links.at(1).vm.$options.name).toBe('CLink');
        expect($links.at(1).vm.$children.length).toBe(1);
        expect($links.at(1).vm.$children[0].$options.name).toBe('RouterLink');

        expect($links.at(2).isVueInstance()).toBe(true);
        expect($links.at(2).vm.$options.name).toBe('CLink');
        expect($links.at(2).vm.$children.length).toBe(0);

        wrapper.destroy();
    });
});
