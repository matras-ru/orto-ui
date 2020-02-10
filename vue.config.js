const path = require('path');

module.exports = {
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    },

    pluginOptions: {
        storybook: {
            allowedPlugins: ['define']
        }
    },

    chainWebpack: config => {
        config.resolve.alias.set('@root', path.resolve(''));
    }
};
