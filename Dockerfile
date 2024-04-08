FROM node:18

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# CMD [ "npm", "run", "start:dev" ]

#  Navigate to the container working directory 
WORKDIR /usr/src/app
#  Copy package.json
COPY package*.json ./

RUN npm install glob rimraf
RUN npm install
COPY . .
RUN npm run build