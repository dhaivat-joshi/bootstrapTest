FROM node:15.4 as build
WORKDIR /app
COPY package*.json /
RUN npm install
COPY . .
RUN npm run prod
FROM nginx:1.19
COPY /nginx/nginx.conf /etx/nginx/nginx.conf
COPY --from=build /app/dist/bootstrapTest/ /usr/share/nginx/html