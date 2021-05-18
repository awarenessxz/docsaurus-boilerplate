FROM node:12-alpine as builder
LABEL stage=builder

# Set environment
ARG BUILD_ENV
ENV APP_DIR=/app APP_PORT=3000
RUN echo "Build Environment = $BUILD_ENV"

# create and cd into APP_DIR (mkdir /app && cd /app)
WORKDIR ${APP_DIR}

# copy the file from project into /app  (ADD local image)
COPY . ${APP_DIR}

# RUN apk add autoconf libtool automake
# RUN apk --update add gcc make g++ zlib-dev

# Install
RUN yarn install
#EXPOSE 3000

# Build
RUN if ["$BUILD_ENV" = "production" ]; then yarn build; else yarn build; fi
#CMD ["yarn", "start"]

## production environment
FROM nginx:1.16.0-alpine
COPY --from=builder ./app/nginx.conf /etc/nginx/
COPY --from=builder /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]