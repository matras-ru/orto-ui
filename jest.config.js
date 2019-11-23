module.exports = {
    verbose: true,
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.[t|j]sx?$': 'babel-jest'
    },
    transformIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@root/(.*)$': '<rootDir>/$1'
    },
    snapshotSerializers: ['jest-serializer-vue'],
    testMatch: ['**/components/**/*.spec.(js)'],
    testURL: 'http://localhost/',
    watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname']
};
