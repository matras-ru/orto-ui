import path from 'path';
import vue from 'rollup-plugin-vue';
import alias from '@rollup/plugin-alias';
import buble from '@rollup/plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import minimist from 'minimist';
import analyze from 'rollup-plugin-analyzer';
import visualizer from 'rollup-plugin-visualizer';

const argv = minimist(process.argv.slice(2));

const projectRoot = path.resolve(__dirname, '..');

const baseConfig = {
    input: 'src/index.js',
    plugins: {
        preVue: [
            replace({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            commonjs(),
            alias({
                resolve: ['.js', '.vue'],
                entries: {
                    '@': path.resolve(projectRoot, 'src'),
                    '@root': path.resolve(projectRoot, '')
                }
            })
        ],
        vue: {
            css: true,
            template: {
                isProduction: true
            }
        },
        postVue: [
            buble({
                objectAssign: 'Object.assign'
            })
        ]
    }
};

// ESM/UMD/IIFE shared settings: externals
// Refer to https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
const external = [
    'vue-functional-data-merge',
    'lodash.merge',
    'tailwindcss',
    'tailwindcss/resolveConfig',
    'tailwindcss-transitions',
    '@tailwindcss/custom-forms',
    'v-click-outside-x',
    'vue'
    // list external dependencies, exactly the way it is written in the import statement.
    // eg. 'jquery'
];

// UMD/IIFE shared settings: output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const globals = {
    'v-click-outside-x': 'vClickOutside',
    vue: 'Vue',
    'vue-functional-data-merge': 'vueFunctionalDataMerge',
    'lodash.merge': 'merge'

    // Provide global variable names to replace your external imports
    // eg. jquery: '$'
};

// Customize configs for individual targets
const buildFormats = [];
if (!argv.format || argv.format === 'es') {
    const esConfig = {
        ...baseConfig,
        external,
        output: {
            file: 'dist/orto-ui.esm.js',
            format: 'esm',
            exports: 'named'
        },
        plugins: [
            ...baseConfig.plugins.preVue,
            vue(baseConfig.plugins.vue),
            ...baseConfig.plugins.postVue
        ]
    };
    buildFormats.push(esConfig);
}

if (!argv.format || argv.format === 'cjs') {
    const umdConfig = {
        ...baseConfig,
        external,
        output: {
            compact: true,
            file: 'dist/orto-ui.ssr.js',
            format: 'cjs',
            name: 'ortoUI',
            exports: 'named',
            globals
        },
        plugins: [
            ...baseConfig.plugins.preVue,
            vue({
                ...baseConfig.plugins.vue,
                template: {
                    ...baseConfig.plugins.vue.template,
                    optimizeSSR: true
                }
            }),
            ...baseConfig.plugins.postVue,
            analyze({ summaryOnly: true }),
            visualizer({ open: true })
        ]
    };
    buildFormats.push(umdConfig);
}

if (!argv.format || argv.format === 'iife') {
    const unpkgConfig = {
        ...baseConfig,
        external,
        output: {
            compact: true,
            file: 'dist/orto-ui.min.js',
            format: 'iife',
            name: 'ortoUI',
            exports: 'named',
            globals
        },
        plugins: [
            ...baseConfig.plugins.preVue,
            vue(baseConfig.plugins.vue),
            ...baseConfig.plugins.postVue,
            terser({
                output: {
                    ecma: 5
                }
            })
        ]
    };
    buildFormats.push(unpkgConfig);
}

// Export config
export default buildFormats;
