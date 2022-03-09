#Course Description

Turn a blank page into a web application! In this course, Java EE 7: Getting Started, you'll learn how to develop a distributed web application based on two complementary technologies: Java EE and Angular. First, you'll begin by covering how to setup your development environment, design your domain model, map it to a relational database, bring transaction management, and then expose the business domain through a REST API. Along the way, you'll make sure the integration tests always pass. Finally, once the REST API is tested, documented, and up-and-running, you'll build an Angular front-end to interact with it through HTTP and JSon. By the end of this course, you'll have the fundamental knowledge to start building REST API's with Java EE and consuming them with Angular.

https://app.pluralsight.com/library/courses/java-ee-getting-started/description

Course author : Antonio Goncalves


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
