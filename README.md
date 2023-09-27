# ultraviolet-nightwatch

## Install the package

```console
yarn install
```

> **_NOTE:_** I'm using [Yarn](https://yarnpkg.com/); if you don't want to install yet another dependency, you can try using [NPM](https://www.npmjs.com/), it should work as-is with NPM without any modification.

## Getting started

First, please ensure you have an instance of UltraViolet running (https://127.0.0.1:5000/). Once the instance is ready, you can run all or individual tests.

### To run all the tests in the repository

```console
yarn run test
```

### To run individual test 

```console
yarn run test ./nightwatch/tests/features/INVENIO-58.js
```
