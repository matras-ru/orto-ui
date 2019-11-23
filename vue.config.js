const path = require('path');

module.exports = {
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    },
    chainWebpack: config => {
        config.resolve.alias.set('@root', path.resolve(''));
    }
};
