# 1. Use a build stage to keep the final image small
FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /app

# Copy the wrapper and pom first (helps with caching dependencies)
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline

# Copy source and build
COPY src ./src
RUN ./mvnw clean package -DskipTests

# 2. Use a smaller runtime stage for the final image
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Instead of target/*.jar, we copy the specific built jar to a fixed name
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

# Use a fixed filename here
ENTRYPOINT ["java", "-jar", "app.jar"]