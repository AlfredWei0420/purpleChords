module.exports = {
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: false
    },
    sourceType: 'module'
  },
  env: {
    es6: true,
    node: true
  },
  extends: 'standard',
  globals: {
    'window': true,
    'document': true,
    'App': true,
    'Page': true,
    'Component': true,
    'Behavior': true,
    'wx': true,
    'worker': true,
    'getApp': true
  },
  plugins: [],
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-function-paren': ['error', 'never']
  }
}
