import CButton from './button';

export default {
    title: 'Components/Button/CButton',
    component: CButton,
    argTypes: {
        tag: {
            defaultValue: 'button',
            description: 'Choose button or link',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'button' },
                category: 'Props'
            },
            control: {
                type: 'select',
                options: ['button', 'a']
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
        label: {
            defaultValue: 'Button',
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
        type: {
            defaultValue: 'submit',
            description: 'Type',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'submit' },
                category: 'Props'
            },
            control: {
                type: 'select',
                options: ['submit', 'reset']
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
        size: {
            defaultValue: 'md',
            description: 'Size',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'md' },
                category: 'Props'
            },
            control: {
                type: 'select',
                options: ['sm', 'md', 'lg']
            }
        },
        block: {
            defaultValue: false,
            description: '100% width',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'Props'
            },
            control: {
                type: 'boolean'
            }
        },
        href: {
            description: 'Href',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'null' },
                category: 'Props ("a" tag)'
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
                category: 'Props ("a" tag)'
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
                category: 'Props ("a" tag)'
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
                category: 'Props ("a" tag)'
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
                category: 'Props ("a" tag)'
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
                category: 'Props ("a" tag)'
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
                category: 'Props ("a" tag)'
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
                category: 'Props ("a" tag)'
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
                category: 'Props ("a" tag)'
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
                category: 'Props ("a" tag)'
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
                category: 'Props ("a" tag)'
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
                category: 'Props ("a" tag)'
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
        components: { CButton },
        props: Object.keys(argTypes),
        template: '<CButton v-bind="$props" @onClick="onClick" />'
    };
};

export const Default = Template.bind({});
