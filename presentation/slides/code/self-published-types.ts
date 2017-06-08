"main": "lib/index.js",
"module": "es/index.js",
"jsnext:main": "es/index.js",
"typings": "./index.d.ts",
"scripts": {
  "clean": "rimraf lib dist es coverage",
  "lint": "eslint src test build",
  "test": "cross-env BABEL_ENV=commonjs jest",