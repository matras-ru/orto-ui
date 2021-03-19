import CRating from './rating';

export default {
    title: 'Components/Rating/CRating',
    component: CRating,
    argTypes: {
        id: {
            defaultValue: 'test1',
            description: 'ID',
            table: {
                type: { summary: ['number', 'string'] },
                defaultValue: { summary: Math.random().toString(36).substring(7) },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        scale: {
            description: 'Scale',
            table: {
                type: { summary: ['number', 'array'] },
                defaultValue: { summary: 5 },
                category: 'Props'
            },
            control: {
                type: 'number',
                min: 1,
                step: 1,
                max: 5
            }
        },
        increment: {
            description: 'Increment',
            table: {
                type: { summary: ['number', 'string'] },
                defaultValue: { summary: 1 },
                category: 'Props'
            },
            control: {
                type: 'number',
                max: 5
            }
        },
        rating: {
            description: 'Rating',
            table: {
                type: { summary: ['number', 'string'] },
                defaultValue: { summary: 'undefined' },
                category: 'Props'
            },
            control: {
                type: 'text'
            }
        },
        readOnly: {
            description: 'Read only',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'Props'
            },
            control: {
                type: 'boolean'
            }
        },
        starSize: {
            description: 'Star size',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 32 },
                category: 'Props'
            },
            control: {
                type: 'number',
                min: 1
            }
        },
        activeOnClick: {
            description: 'Active on click',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
                category: 'Props'
            },
            control: {
                type: 'boolean'
            }
        },
        gradeModel: {
            description: 'Model',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 'undefined' },
                category: 'Props'
            },
            control: {
                type: 'number',
                min: 1,
                step: 1,
                max: 5
            }
        },
        starSelected: {
            action: 'selected',
            description: 'Event',
            table: {
                type: { summary: 'func' },
                category: 'Events'
            }
        },
        starMouseMove: {
            action: 'mousemove',
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
        components: { CRating },
        props: Object.keys(argTypes),
        template:
            '<CRating v-bind="$props" @starSelected="starSelected" @starMouseMove="starMouseMove" />'
    };
};

export const Default = Template.bind({});

export const ExampleScale = (args, { argTypes }) => {
    return {
        components: { CRating },
        props: Object.keys(argTypes),
        data() {
            return {
                model: undefined
            };
        },
        template:
            '<CRating v-bind="$props" @starSelected="starSelected" @starMouseMove="starMouseMove" v-model="model" />'
    };
};

ExampleScale.args = {
    id: 'test2',
    scale: [
        { id: 1, label: 'Awful', value: 1 },
        { id: 2, label: 'Bad', value: 2 },
        { id: 3, label: 'Normal', value: 3 },
        { id: 4, label: 'Good', value: 4 },
        { id: 5, label: 'Excellent', value: 5 }
    ]
};

export const ExampleReadOnly = (args, { argTypes }) => {
    return {
        components: { CRating },
        props: Object.keys(argTypes),
        data() {
            return {
                model: undefined
            };
        },
        template:
            '<CRating v-bind="$props" @starSelected="starSelected" @starMouseMove="starMouseMove" v-model="model" />'
    };
};

ExampleReadOnly.args = {
    id: 'test3',
    readOnly: true,
    rating: '4.2',
    increment: '0.5'
};
