FROM node as frontend
WORKDIR /frontend
COPY /frontend .
RUN npm ci
RUN npm run-script build

FROM maven:3.8.1-jdk-11-slim as backend
WORKDIR /backend
COPY backend .
RUN mkdir -p src/main/resources/static
COPY --from=frontend /frontend/build src/main/resources/static
RUN mvn clean verify

FROM openjdk:14-jdk-alpine
COPY --from=backend /backend/target/backend-0.0.1-SNAPSHOT.jar ./app.jar
EXPOSE 8080