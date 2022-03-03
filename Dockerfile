FROM node:14.19-alpine3.14 as nest-template

LABEL maintainer="zefey <1076971426@qq.com>"

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --production

COPY . .

RUN npm run build

EXPOSE 3000

VOLUME [ "/app/logs" ]

CMD ["npm", "run", "start:prod"]