FROM nginx
# COPY ./fronted  /usr/share/nginx/html
COPY . /usr/share/nginx/html


# FROM node:10
# COPY . /app
# WORKDIR /app
# RUN npm install
# CMD ["npm", "start"]
# #containerek között a 3000 porton tud kommunikálni
# EXPOSE 3000