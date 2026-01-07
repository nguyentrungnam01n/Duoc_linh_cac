import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'],
  },

  js.configs.recommended,

  // Next.js core web vitals rules (flat config).
  nextPlugin.configs['core-web-vitals'],

  // TypeScript rules (flat config).
  ...tsPlugin.configs['flat/recommended'],

  // Prettier integration (disable conflicting rules + surface formatting as lint errors).
  {
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
    },
    plugins: {
      prettier: prettierPlugin,
    },
  },

  // Config files in CommonJS.
  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
  },
];
