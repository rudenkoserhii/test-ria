import Router from 'koa-router';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-koa';
// import swaggerUi from 'swagger-ui-express';
// import { ApiPath } from 'enums';
import { swaggerDefinition } from 'swaggerConfig';

const routerSwagger = new Router();

const options = {
  swaggerDefinition,
  apis: ['routes/stats.ts'],
};

const swaggerSpec = swaggerJSDoc(options);
// routerSwagger.use(ApiPath.swagger, swaggerUi.serve);
// routerSwagger.get(ApiPath.swagger, swaggerUi.setup(swaggerSpec));

export { routerSwagger, swaggerUi, swaggerSpec };
// export { routerSwagger };
