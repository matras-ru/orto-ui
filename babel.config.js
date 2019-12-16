module.exports = {
    presets: [
        [
            '@vue/app',
            {
                useBuiltIns: false
            }
        ]
    ],
    plugins: ['@babel/plugin-proposal-optional-chaining']
};
