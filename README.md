# Docusaurus + Swagger Boilerplate

Boilerplate for a static website built using [Docusaurus v2](https://docusaurus.io/) and [Swagger](https://www.npmjs.com/package/swagger-ui-react) 
for documenting software applications. The website can be easily populated with content using markdown for text documentation as well as
API Documentation using swagger-ui-react which loads swagger.json from API endpoints.

- [Screenshot](#screenshot)
- [Usage](#usage)
    - [Configuration](#configuration)
    - [Start the web](#running-the-web)
    - [Build and deploy](#build-and-deploy)
- [Reference](#reference)

## Screenshot

### Documentation with mdx

![Page 1](static/img/doc/page1.png)

### API Documentation with swagger

![Page 2](static/img/doc/page2.png)

## Usage

### Configuration

Refer to the following files to make configuration for the website.
- [web-config.json](web-config.json)
- [docusaurus.config.js](docusaurus.config.js)

### Running the web

1. Install packages
    ```bash
    yarn install
    ```

2. Start the web
    ```bash
    yarn start
    Browse to http://localhost:3000
   
    # To test functionality of search (only available in production build)
    yarn build
    npx http-server ./build
    Browse to http://localhost:8080
    ```
   
### Build and deploy

- On Github pages - Google yourself
- As a container
    ```bash 
    # Build Docker Image
    docker build -t docusaurus_swagger .
    
    # Remove intermediate build files
    docker image prune --filter label=stage=builder
  
    # Start an instance
    docker run -p 8080:80 --name devdocs -d docusaurus_swagger
  
    # Browse the website (http)
    http://localhost:8080
  
    # Clean up
    docker rm -f devdocs
    docker rmi docusaurus_swagger
    ```

## Reference

- Webpack Issues
    - [Error when using swagger-ui-react: Buffer is not defined](https://github.com/swagger-api/swagger-ui/issues/6869)
    - [Custom webpack plugins](https://github.com/facebook/docusaurus/issues/2097)
    - [Webpack 5 Issues - Buffer removed, it cause some trouble](https://github.com/webpack/changelog-v5/issues/10#issuecomment-615877593)
    - [How to polyfill node core modules in webpack 5](https://sanchit3b.medium.com/how-to-polyfill-node-core-modules-in-webpack-5-905c1f5504a0)
- Deploying using Docker and Nginx
    - [Deploy docusaurus with docker and nginx](https://ledinhcuong99.medium.com/deploy-docusaurus-with-docker-and-nginx-8c78b1390db6)
    - [How to remove intermediate images from a build after a build](https://stackoverflow.com/questions/50126741/how-to-remove-intermediate-images-from-a-build-after-the-build)
    