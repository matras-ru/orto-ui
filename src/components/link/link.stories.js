import CLink from './link';

export default {
    title: 'Components/Link/CLink',
    component: CLink,
    argTypes: {
        href: {
            defaultValue: '/',
            description: 'Href',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'null' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        target: {
            defaultValue: '_self',
            description: 'Target',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'null' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        rel: {
            description: 'Rel',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'null' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        to: {
            description: 'To (nuxt)',
            table: {
                type: { summary: ['string', 'object'] },
                defaultValue: { summary: 'null' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        append: {
            defaultValue: false,
            description: 'Append',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'Props'
            },
            control: {
                type: 'boolean'
            }
        },
        event: {
            defaultValue: 'click',
            description: 'Event',
            table: {
                type: { summary: ['string', 'array'] },
                defaultValue: { summary: 'click' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        replace: {
            defaultValue: false,
            description: 'Replace',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'Props'
            },
            control: {
                type: 'boolean'
            }
        },
        activeClass: {
            defaultValue: 'router-link-active',
            description: 'Active class',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'router-link-active' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        routerTag: {
            defaultValue: 'a',
            description: 'Router tag',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'a' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        exact: {
            defaultValue: false,
            description: 'Exact',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'Props'
            },
            control: {
                type: 'boolean'
            }
        },
        exactActiveClass: {
            defaultValue: 'router-link-exact-active',
            description: 'Exact active class',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'router-link-exact-active' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        noPrefetch: {
            defaultValue: false,
            description: 'No prefetch (nuxt)',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'Props'
            },
            control: {
                type: 'boolean'
            }
        },
        button: {
            defaultValue: false,
            description: 'Button',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'Props'
            },
            control: {
                type: 'boolean'
            }
        },
        variant: {
            defaultValue: 'primary',
            description: 'Variant',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'primary' },
                category: 'Props'
            },
            control: {
                type: 'select',
                options: ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary']
            }
        },
        inline: {
            defaultValue: false,
            description: 'Inline',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'Props'
            },
            control: {
                type: 'boolean'
            }
        },
        label: {
            defaultValue: 'Link',
            description: 'Label',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'null' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        disabled: {
            defaultValue: false,
            description: 'Disabled',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'Props'
            },
            control: {
                type: 'boolean'
            }
        },
        onClick: {
            action: 'clicked',
            description: 'Event',
            table: {
                type: { summary: 'func' },
                category: 'Events'
            }
        }
    }
};

const Template = (args, { argTypes }) => {
    return {
        components: { CLink },
        props: Object.keys(argTypes),
        template: '<CLink v-bind="$props" @onClick="onClick" />'
    };
};

export const Default = Template.bind({});
