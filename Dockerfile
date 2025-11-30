FROM node:lts-alpine as build-stage
# Define build arguments for environment variables

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN echo "BASE_URL='/'" > .env
RUN npm run generate

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/.output/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]