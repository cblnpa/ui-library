import eslintPluginImport from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

export default [
  tseslint.config({ parserOptions: { sourceType: 'module', ecmaVersion: 'latest' } }),
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: { import: eslintPluginImport, prettier },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn'],
      'import/order': ['warn', { 'newlines-between': 'always' }],
      'prettier/prettier': ['warn'],
    },
    languageOptions: {
      parser: tseslint.parser,
    },
  },
];
