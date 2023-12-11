### STAGE 1: Build ###
FROM node:18 as build

#### make the 'app' folder the current working directory
WORKDIR /usr/src/app

#### copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

RUN ulimit -n 5000
#### install angular cli
RUN npm install -g @angular/cli --force 

#### install project dependencies
RUN npm install --force

#### copy things
COPY . .

RUN ls

#### generate build --prod
RUN npm run build:ssr

### STAGE 2: Run ###
FROM nginxinc/nginx-unprivileged

#### copy nginx conf
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

#### copy artifact build from the 'build' stage
COPY --from=build /usr/src/app/dist/management/browser/ /usr/share/nginx/html

#### don't know what this is, but seems cool and techy
CMD ["nginx", "-g", "daemon off;"]
