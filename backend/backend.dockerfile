FROM maven:3.8.1-jdk-11-slim
RUN mkdir -p /app
WORKDIR /app

COPY backend/build/libs/*.jar ./app.jar
EXPOSE $PORT

CMD [ "java", "-jar", "./app.jar" ]