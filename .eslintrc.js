module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['plugin:vue/essential', '@vue/prettier'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/valid-v-for': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/no-unused-components': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-reserved-component-names': 'off'
    },
    parserOptions: {
        parser: '@babel/eslint-parser'
    },
    overrides: [
        {
            files: ['**/*.spec.(js|jsx|ts|tsx)'], // not working
            env: {
                jest: true
            }
        }
    ]
};
