module.exports = {
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true,
      },
    "project": "./tsconfig.json",
    "tsconfigRootDir": './'
  },
  "extends": [
    'standard'
  ],
  "plugins": ["jest"],
  "parser": "@typescript-eslint/parser",
  "rules": {
    'no-unused-vars': 0,
    'no-unused-constructor': 0,
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  "env": {
    "jest": true
  },
  "globals": {
    "fetch": true,
    "AudioContext": true
  }
}
