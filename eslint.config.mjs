import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const baseConfigs = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  // Enable eslint-plugin-prettier's recommended config (adds prettier rule)
  eslintPluginPrettierRecommended,
  // Turn off ESLint rules that conflict with Prettier
  eslintConfigPrettier,
];

export default [
  {
    ignores: ['.next', '.next/**', 'node_modules', 'dist', 'build'],
  },
  ...baseConfigs,
];
