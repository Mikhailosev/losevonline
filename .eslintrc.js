const pathJoin = require('path').join
module.exports = {
  plugins: ['@typescript-eslint'], // Add
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    pathJoin(__dirname, 'strapi/.eslintrc'), // Add "prettier" last. This will turn off eslint rules conflicting with prettier. This is not what will format our code.
  ],
  rules: {
    // You can remove the prefer-const rule, as it is already added by @typescript-eslint/recommended

    // I suggest you add at least those two rules:
    'react/display-name': 'off',
    'no-empty-pattern': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/ban-types': ['off'],
  },
}
