# Docsaurus Boilerplate

Boilerplate for a static website built using [Docusaurus 2](https://docusaurus.io/) and [Swagger](https://www.npmjs.com/package/swagger-ui-react) 
for documenting software applications. 

## Usage

```console
# Install packages
yarn installv

# Local Development
yarn start

# Build 
yarn build

# Deployment (If you are using Github pages for hosting, this command is convenient way to build the website and push to `gh-pages` branch
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

## Reference

- [Error when using swagger-ui-react: Buffer is not defined](https://github.com/swagger-api/swagger-ui/issues/6869)
- [Custom webpack plugins](https://github.com/facebook/docusaurus/issues/2097)
- [Webpack 5 Issues - Buffer removed, it cause some trouble](https://github.com/webpack/changelog-v5/issues/10#issuecomment-615877593)
- [How to polyfill node core modules in webpack 5](https://sanchit3b.medium.com/how-to-polyfill-node-core-modules-in-webpack-5-905c1f5504a0)