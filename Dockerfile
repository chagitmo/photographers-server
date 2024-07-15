FROM node:18.14.1 AS build
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18.14.1
WORKDIR /src
COPY --from=build /src .
EXPOSE 5000
CMD ["node", "dist/server.js"]

