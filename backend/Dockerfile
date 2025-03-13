FROM openjdk:21-jdk-slim AS builder
WORKDIR /app

RUN apt-get update && apt-get install -y wget unzip \
    && wget https://services.gradle.org/distributions/gradle-8.11.1-bin.zip \
    && unzip gradle-8.11.1-bin.zip -d /opt \
    && ln -s /opt/gradle-8.11.1/bin/gradle /usr/bin/gradle

COPY build.gradle settings.gradle /app/
RUN gradle build -x test --parallel --continue > /dev/null 2>&1 || true

COPY . /app
RUN gradle build -x test --parallel

FROM openjdk:21-jdk-slim
WORKDIR /app

COPY --from=builder /app/build/libs/*-SNAPSHOT.jar ./app.jar

COPY --from=builder /app/config/keystore.p12 /app/config/keystore.p12
RUN chmod 644 /app/config/keystore.p12

EXPOSE 8080

USER nobody
ENTRYPOINT ["java", "-jar", "app.jar"]