import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import nextPlugin from '@next/eslint-plugin-next';
import turboPlugin from 'eslint-plugin-turbo';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default tseslint.config(
  // 1. Global ignores
  {
    ignores: ['**/*.md'],
  },

  // 2. Apply base typescript-eslint configurations.
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  
  // 3. Your custom configuration that now correctly integrates the Next.js plugin.
  {
    files: ['**/*.{ts,tsx}'],
    
    languageOptions: {
      parserOptions: {
        project: path.join(__dirname, 'tsconfig.json'),
      },
    },

    // Register all plugins in the modern flat config object format.
    plugins: {
      '@next/next': nextPlugin, // CORRECTED: Manually register the plugin.
      'turbo': turboPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      'unused-imports': unusedImportsPlugin,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    
    // Your specific rule overrides and additions.
    rules: {
      // CORRECTED: Manually apply the recommended rules from the Next.js plugin.
      ...nextPlugin.configs.recommended.rules,

      'react-hooks/exhaustive-deps': 'warn', // Warn about missing dependencies in useEffect

      // Your personal overrides and other plugin rules go here.
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'warn',
      'unused-imports/no-unused-imports': 'error',
    },
  },
);