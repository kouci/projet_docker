# Étape de construction
FROM node:14-alpine as builder
WORKDIR /app
COPY package.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape finale avec Nginx
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


