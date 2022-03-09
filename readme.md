To run it is necessary:
* JDK 8
* WildFly 26.0.1.Final
  * Working directory: C:\Java\wildfly-26.0.1.Final\

To run the integration tests it is necessary to run WildFly and deploy the project

* Define user variable SWAGGER = C:\Java\Swagger
** folder most have the swagger-codegen JAR file

* Add SWAGGER to the PATH

* Define a swagger-codegen.bat file, inside the folder, with:
java -jar %SWAGGER%\swagger-codegen-cli-2.2.1.jar %*

* Command to generate code with Swagger:
swagger-codegen generate -i bookstore-back/src/main/webapp/swagger.json -l typescript-angular2 -o bookstore-front/src/app/service