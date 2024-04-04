# Сервіс статистики лістингів (Listing Statistics Service)

## Запуск (Running the Service)

Prerequisites:

Node.js and npm (or yarn) installed on your system. You can verify their installation by running `node -v` and `npm -v` (or `yarn -v`) in your terminal.

Steps:

Clone the repository:

\\Bash `git clone https://github.com/rudenkoserhii/test-ria.git`

Navigate to the project directory:

\\Bash `cd test-ria`

### Without Docker

Install dependencies:

\\Bash `npm install`

(or)

\\Bash `yarn install`

Run the application:

\\Bash `npm start` for production `npm dev` for development

(or)

\\Bash `yarn start` for production `yarn dev` for development

This will start the application on port 3000 by default. You can access the API documentation at http://localhost:3000/api-docs (assuming the Swagger UI is integrated).

### With Docker

\\Bash `docker build -t test-ria .` `docker run -p 3000:3000 test-ria`

## API

- GET /stats/:autoId OR /stats/:autoId/listing OR /stats/:autoId/phone Отримати статистику для лістингу за його ID (Get statistics for a listing by its ID).

Параметри (Parameters): autoId: string (ідентифікатор лістингу, listing ID)

Відповідь (Response): autoId: string (ідентифікатор лістингу, listing ID) listingOpens?: number (кількість відкриттів лістингу, number of listing opens) phoneOpens?: number (кількість відкриттів номера телефону, number of phone number opens)

- POST /stats/listing Збільшити listingOpens для лістингу (Increase listingOpens for a listing).

Параметри (Parameters): autoId: string (ідентифікатор лістингу, listing ID)

Відповідь (Response): status: 200 (OK)

- POST /stats/phone Збільшити phoneOpens для лістингу (Increase phoneOpens for a listing).

Параметри (Parameters): autoId: string (ідентифікатор лістингу, listing ID)

Відповідь (Response): status: 200 (OK)

## Dockerfile

The provided Dockerfile defines a Docker image based on the node:16 image. It installs dependencies, copies the project code, builds the project using npm run build, and starts the application using npm start.

## Dependencies (package.json)

The package.json file lists the project's dependencies and development dependencies. These dependencies include libraries for building a Node.js application, TypeScript support, testing frameworks, and the Swagger documentation generation tool.

## tsconfig.json

The tsconfig.json file configures the TypeScript compiler for this project. It specifies options such as the target JavaScript version, module system, and strictness settings.

## Code Structure

The source code for the application is likely located in the root directory. This directory contain the following files and folders (structure may vary):

- models.ts: Defines the data types used in the application, such as AutoStats.
- services.ts: Implements the business logic for the application, including functions to get and update listing statistics.
- controllers.ts: Handles incoming API requests and delegates them to the appropriate service functions.
- app.ts: Responsible for setting up middleware, routing.
- server.ts: The main entry point for the application, responsible for starting the server.

## Tests

The provided test files demonstrate unit tests written with Jest for different parts of the application:

- app.test.ts: Tests error handling middleware.
- controller.test.ts: Tests the statsController for handling GET requests to /stats/:autoId.
- service.test.ts: Tests the statsService logic for retrieving statistics.

## Swagger Documentation

The project likely uses Swagger for API documentation generation. The configuration for Swagger located in a separate file swaggerConfig.js.

## Messages (enums/Messages.ts)

The Messages.ts file defines various messages used throughout the application, such as success messages and error messages.

## API Paths (enums/ApiPath.ts)

The ApiPath.ts file contains constants defining the API endpoints used in the application.
