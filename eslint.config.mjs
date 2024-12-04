// eslint-disable-next-line import/no-extraneous-dependencies
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
// eslint-disable-next-line import/no-extraneous-dependencies
import typescriptEslint from '@typescript-eslint/eslint-plugin'
// eslint-disable-next-line import/no-extraneous-dependencies
import prettier from 'eslint-plugin-prettier'
// eslint-disable-next-line import/no-extraneous-dependencies
import globals from 'globals'
// eslint-disable-next-line import/no-extraneous-dependencies
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
// eslint-disable-next-line import/no-extraneous-dependencies
import js from '@eslint/js'
// eslint-disable-next-line import/no-extraneous-dependencies
import { FlatCompat } from '@eslint/eslintrc'

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url)
// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  ...fixupConfigRules(
    compat.extends(
      'airbnb',
      'airbnb/hooks',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ),
  ),
  {
    plugins: {
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      prettier,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
    },

    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },

      'import/resolver': {
        typescript: {
          project: './tsconfig.app.json',
        },

        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },

    rules: {
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],

      'react/jsx-filename-extension': [
        'error',
        {
          extensions: ['.jsx', '.tsx'],
        },
      ],

      'react/function-component-definition': [
        2,
        {
          namedComponents: ['arrow-function'],
        },
      ],

      'import/prefer-default-export': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/destructuring-assignment': 'off',
    },
  },
]
