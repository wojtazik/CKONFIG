module.exports = {
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": "./tsconfig.json",
    "tsconfigRootDir": './'
  },
  "extends": [
    'standard'
  ],
  "parser": "@typescript-eslint/parser",
  "rules": {
    'no-unused-vars': 0,
    'no-unused-constructor': 0,
  },
  "env": {
    "jest": true
  },
  "globals": {
    "fetch": true,
    "AudioContext": true
  }
}
