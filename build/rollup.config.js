import path from 'path';
import vue from 'rollup-plugin-vue';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import buble from '@rollup/plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import minimist from 'minimist';
import visualizer from 'rollup-plugin-visualizer';

const argv = minimist(process.argv.slice(2));

const projectRootDir = path.resolve(__dirname, '..');

const globals = {
    'v-click-outside-x': 'vClickOutside',
    vue: 'Vue',
    'vue-functional-data-merge': 'vueFunctionalDataMerge',
    'lodash/merge': 'merge',
    'lodash/get': 'get',
    'mini-svg-data-uri': 'svgToDataUri'
};

const baseConfig = {
    input: 'src/index.js',

    external: Object.keys(globals),

    plugins: {
        preVue: [
            replace({
                'process.env.NODE_ENV': JSON.stringify('production'),
                preventAssignment: true
            }),
            commonjs(),
            alias({
                entries: {
                    '@': path.resolve(projectRootDir, 'src'),
                    '@root': path.resolve(projectRootDir, '')
                }
            }),
            resolve()
        ],
        vue: {
            css: true,
            template: {
                isProduction: true
            }
        },
        postVue: [
            buble({
                objectAssign: 'Object.assign',

                transforms: {
                    generator: false
                }
            })
        ]
    }
};

const buildFormats = [];
if (!argv.format || argv.format === 'es') {
    const esConfig = {
        ...baseConfig,
        output: {
            sourcemap: true,
            file: 'dist/orto-ui.esm.js',
            format: 'esm',
            exports: 'named',
            globals
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
        output: {
            sourcemap: true,
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
            visualizer({ open: true })
        ]
    };
    buildFormats.push(umdConfig);
}

if (!argv.format || argv.format === 'iife') {
    const unpkgConfig = {
        ...baseConfig,
        output: {
            sourcemap: true,
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

export default buildFormats;
