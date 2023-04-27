module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    '@nuxt/eslint-config',
    'plugin:vue/vue3-essential',
    'airbnb-base',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    semi: 'off',
    'vue/multi-word-component-names': 'off',
    // for lintimport/no-unresolved
    'import/no-unresolved': 'off',
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always',
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'always',
    }],
  },
};
