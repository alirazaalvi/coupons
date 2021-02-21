FROM node:14

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

RUN npm install

ADD src /app/src
ADD tsconfig.json /app
ADD tslint.json /app
ADD copyStaticAssets.ts /app

EXPOSE 8000

CMD ["npm", "start"]
