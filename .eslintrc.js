module.exports = {
    extends: ['eslint:recommended', 'airbnb'],
    env: {
        browser: true
    },

    plugins: ['react'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },

    rules: {
        'arrow-parens': [2, 'always'],
        'comma-dangle': [2, 'never'],
        'indent': 0,
        'no-use-before-define': 0,
        'no-unused-vars': 1,
        'max-len': [1, 140, 4, {
            ignoreComments: true
        }],
        'space-before-function-paren': [2, 'never'],

        'import/no-extraneous-dependencies': [2, {'devDependencies': true}],
        'import/prefer-default-export': 0,

        'react/jsx-curly-spacing': [2, 'never'],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-tag-spacing': [1, {
            'closingSlash': 'never',
            'beforeSelfClosing': 'never',
            'afterOpening': 'never'
        }],
        'react/jsx-fragments': 0,
        'react/no-children-prop': 0
    }
};
