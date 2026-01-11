import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'node_modules/**', 'next-env.d.ts', '**/*.cjs'],
  },

  // Базовые правила JS
  js.configs.recommended,

  // TypeScript
  ...tseslint.configs.recommended,

  // React
  pluginReact.configs.flat.recommended,

  // Основные правила для JS/TS/React файлов
  {
    files: ['**/*.{js,mjs,ts,mts,cts,jsx,tsx}'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',
      'no-unused-vars': ['error', { vars: 'all', args: 'none' }],
      semi: 'error',
      'no-console': 'error',
      'no-debugger': 'error',
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },

  // Storybook
  {
    files: ['**/*.stories.tsx', '**/*.stories.ts', '**/storybook/**'],
    rules: {
      'react/display-name': 'off',
    },
  },
]);
