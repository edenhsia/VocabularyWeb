/**
 * https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js
 * https://stackoverflow.com/questions/53189200/whats-the-difference-between-plugins-and-extends-in-eslint plugins vs extends
 */
module.exports = {
    root: true,
    /**
     * tells ESLint to use the parser package you installed (@typescript-eslint/parser).
     * This allows ESLint to understand TypeScript syntax.
     * This is required, or else ESLint will throw errors as it tries to parse TypeScript code as if it were regular JavaScript.
     */
    parser: '@typescript-eslint/parser',
    plugins: [
        /**
         * tells ESLint to load the plugin package you installed (@typescript-eslint/eslint-plugin).
         * This allows you to use the rules within your codebase.
         */
        '@typescript-eslint',
        // https://www.npmjs.com/package/eslint-plugin-jest
        'jest',
        // https://mysticatea.github.io/eslint-plugin-eslint-comments/
        'eslint-comments',
        // https://www.npmjs.com/package/eslint-plugin-promise
        'promise',
        // https://github.com/sindresorhus/eslint-plugin-unicorn
        'unicorn',
    ],
    parserOptions: {
        tsconfigRootDir: __dirname, // tells our parser the absolute path of your project's root directory.
        project: ['./tsconfig.json'], //  tells our parser the relative path where your project's tsconfig.json is.
    },
    /**
     * tells ESLint that your config extends the given configurations.
     */
    extends: [
        // https://www.npmjs.com/package/eslint-config-airbnb-typescript
        'airbnb-typescript/base',

        "plugin:@typescript-eslint/recommended",
        'plugin:@typescript-eslint/recommended-requiring-type-checking', // This one contains rules that specifically require type information.

        'plugin:eslint-comments/recommended',

        'plugin:jest/recommended',
        'plugin:jest/style',

        'plugin:promise/recommended',

        'plugin:unicorn/recommended',
        // 'plugin:node/recommended',
        // 'plugin:import/errors',
        // 'plugin:import/warnings',
        // 'plugin:import/typescript',
        // 'prettier/@typescript-eslint',
    ],
    env: {
        node: true,
        jest: true,
    },
    rules: {
        "linebreak-style": "off",
        // Common abbreviations are known and readable
        "unicorn/prevent-abbreviations": "off",
    },
};
