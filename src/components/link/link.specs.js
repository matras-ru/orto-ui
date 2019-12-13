/* eslint-env jest */
import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';

import CLink from './link';

const baseClass = 'inline-block no-underline';
const defaultClass = 'text-black-100 font-semibold border-b-2 border-black-100';
const disabledClass = 'opacity-75 cursor-not-allowed';
const primaryClass = 'text-secondary-200 font-semibold border-b-2 border-secondary-200';

describe('Link', () => {
    it('default', () => {
        const wrapper = mount(CLink);

        expect(wrapper.is('a')).toBe(true);
        expect(wrapper.attributes('href')).not.toBeDefined();
        expect(wrapper.attributes('target')).toBeDefined();
        expect(wrapper.attributes('target')).toBe('_self');

        expect(wrapper.classes().sort()).toEqual(`${baseClass} ${defaultClass}`.split(' ').sort());
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
            `${baseClass} ${defaultClass} ${disabledClass}`.split(' ').sort()
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
                return h('section', {}, [
                    h('CLink', { props: { to: '/about' } }, ['to-name-about']), // router-link
                    h('CLink', { props: { to: { path: '/about' } } }, ['to-path-about']), // router-link
                    h('CLink', { props: { href: '/about' } }, ['href-about']), // regular link
                    h('router-view')
                ]);
            }
        });

        const wrapper = mount(App, {
            localVue: localVue,
            attachToDocument: true
        });

        expect(wrapper.isVueInstance()).toBe(true);
        expect(wrapper.is('section')).toBe(true);

        // expect(wrapper.findAll('a').length).toBe(4);

        // const $links = wrapper.findAll('a');

        // expect($links.at(0).isVueInstance()).toBe(true);
        // expect($links.at(0).vm.$options.name).toBe('BLink');
        // expect($links.at(0).vm.$children.length).toBe(1);
        // expect($links.at(0).vm.$children[0].$options.name).toBe('RouterLink');

        // expect($links.at(1).isVueInstance()).toBe(true);
        // expect($links.at(1).vm.$options.name).toBe('BLink');
        // expect($links.at(1).vm.$children.length).toBe(0);

        // expect($links.at(2).isVueInstance()).toBe(true);
        // expect($links.at(2).vm.$options.name).toBe('BLink');
        // expect($links.at(2).vm.$children.length).toBe(1);
        // expect($links.at(2).vm.$children[0].$options.name).toBe('RouterLink');

        // expect($links.at(3).isVueInstance()).toBe(true);
        // expect($links.at(3).vm.$options.name).toBe('BLink');
        // expect($links.at(3).vm.$children.length).toBe(0);

        wrapper.destroy();
    });
});
