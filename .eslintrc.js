module.exports = {
    root: true,
    extends: ['@react-native-community'],
    rules: {
        // indent: ['error', 4],
        curly: ['error', 'multi-or-nest'],
        'no-spaced-func': 'error',
        // 'keyword-spacing': [
        //     'error',
        //     {
        //         overrides: {
        //             if: {after: false, before: false},
        //             for: {after: false, before: false},
        //             while: {after: false, before: false},
        //             else: {after: false, before: true},
        //         },
        //     },
        // ],
        // 'space-before-blocks': ['error', 'never'],
        'space-before-function-paren': ['error', {anonymous: 'never', named: 'never', asyncArrow: 'always'}],
        quotes: ['error', 'single', {allowTemplateLiterals: true}],
        semi: ['error', 'never'],
    },
}
