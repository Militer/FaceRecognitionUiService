FROM java:8
VOLUME /tmp
ADD ui-service-0.1-SNAPSHOT.jar app.jar
EXPOSE 8083
RUN sh -c 'touch /app.jar'
ENTRYPOINT ["java","-jar","/app.jar"]
