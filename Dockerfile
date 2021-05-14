FROM node:12-alpine as builder
LABEL stage=builder

ENV APP_DIR=/app APP_PORT=3000

# create and cd into APP_DIR (mkdir /app && cd /app)
WORKDIR ${APP_DIR}

# copy the file from project into /app  (ADD local image)
COPY . ${APP_DIR}


RUN apk add autoconf libtool automake
RUN apk --update add gcc make g++ zlib-dev

# Install
RUN yarn install
#EXPOSE 3000

# Build
RUN yarn build
#CMD ["yarn", "start"]

## production environment
FROM nginx:1.16.0-alpine
COPY --from=builder ./app/nginx.conf /etc/nginx/
COPY --from=builder /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]