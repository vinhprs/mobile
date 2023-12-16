# Set the base image to node:20-alpine
FROM node:18.16.0-alpine AS staging

# Specify where our app will live in the container
WORKDIR /app

#Copy package json
COPY package.json ./

#Copy yarn lock
COPY yarn.lock ./

#RUN
RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["yarn", "start:staging"]