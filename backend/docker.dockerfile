FROM maven:3.8.1-jdk-11-slim
WORKDIR /backend
COPY backend .
RUN mvn clean verify