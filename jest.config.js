module.exports = {
    "globals": {
        "ts-jest": {
            babelConfig: 'babel.config.js'
        }
    },
    "testEnvironment": "jsdom",
    roots: ['<rootDir>'],
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    transform: {
        '\\.(ts)x?$': 'ts-jest',
        '\\.(js)x?$': 'babel-jest'
    },
    testMatch: ['**/__tests__/**/*.spec.(ts|tsx)'],
    "transformIgnorePatterns": ["<rootDir>/node_modules/"],

}