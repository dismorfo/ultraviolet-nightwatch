# ultraviolet-nightwatch

## Installation

Align node versions:
```sh
nvm use
```
Activate yarn (if you haven't before)
```sh
corepack enable
```

Install packages for this project
```sh
yarn install
```

> **_NOTE:_** I'm using [Yarn](https://yarnpkg.com/); if you don't want to install yet another dependency, you can try using [NPM](https://www.npmjs.com/), it should work as-is with NPM without any modification.

## Getting started

- First, please ensure you have an instance of UltraViolet running (https://127.0.0.1:5000/). 
- Copy the contents of `.env.example` into a new file called `.env` - `cp .env.example .env`
- Replace the empty environment variables with the credentials that match your UV instance.
- Run nightwatch tests.

### To run all the tests in the repository

```console
yarn run test
```

### To run individual test 

```console
yarn run test ./nightwatch/tests/features/INVENIO-58.js
```
