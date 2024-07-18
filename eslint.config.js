import globals from 'globals'
import pluginJs from '@eslint/js'

export default [
    {
        rules: {
            semi: 'off',
            'prefer-const': 'error',
            'no-unused-vars': 'error'
        },
        languageOptions: {
            globals: [globals.browser, 'process']
        }
    },
    pluginJs.configs.recommended
]
