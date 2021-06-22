FROM node
RUN apt-get update
WORKDIR /frontend
RUN npm ci
RUN npm run-script build
RUN npx create-react-app react-docker
CMD [“npm”,”start”]
