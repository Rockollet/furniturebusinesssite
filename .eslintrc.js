module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/typescript',
    '@vue/eslint-config-typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser'
  },
  plugins: [
    'jest',
    '@typescript-eslint'
  ],
  // add your custom rules here
  rules: {
    semi: [2, 'always'],
    indent: 'off',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '^_' }],
    '@typescript-eslint/indent': [
      'error',
      2
    ],
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'vue/valid-v-slot': ['off', { allowModifiers: true }],
    'vue/experimental-script-setup-vars': 'off'
  },
  'overrides': [
    {
      'files': [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ]
    }
  ]
};
