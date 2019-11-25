const path = require('path');

module.exports = {
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    },

    chainWebpack: config => {
        config.resolve.alias.set('@root', path.resolve(''));

        config.module
            .rule('svg')
            .use('file-loader')
            .loader('svg-sprite-loader')
            .options({
                extract: true,
                spriteFilename: 'sprite.svg'
            });

        config.module
            .rule('svg')
            .use('svgo-loader')
            .loader('svgo-loader')
            .options({
                plugins: [
                    { removeNonInheritableGroupAttrs: true },
                    { collapseGroups: true }
                    // { removeAttrs: { attrs: '(fill|stroke)' } }
                ]
            });

        config.plugin('svg-sprite-loader-plugin').use(require('svg-sprite-loader/plugin'), [
            {
                plainSprite: true,
                spriteAttrs: {
                    id: 'my-custom-sprite-id'
                }
            }
        ]);
    }
};
