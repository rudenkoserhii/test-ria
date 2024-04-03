FROM node:16

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

CMD ["ts-node", "app.ts"]