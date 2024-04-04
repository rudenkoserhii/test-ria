import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import json from 'koa-json';
import logger from 'koa-logger';

import { ApiPath } from 'enums';
// import { routerStats, routerSwagger } from 'routes';
import { routerStats, routerSwagger, swaggerSpec, swaggerUi } from 'routes';
import { customLogger } from 'utils';

const app = new Koa();

app.use(json());
app.use(logger());
app.use(bodyParser());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    customLogger(error);

    ctx.status = error.status || 500;

    ctx.body = error.message;
  }
});

// app.use(routerSwagger.routes());

routerSwagger.prefix(ApiPath.swagger);
app.use(swaggerUi.serve).use(swaggerUi.setup(swaggerSpec));

routerStats.prefix(ApiPath.stats);
app.use(routerStats.routes()).use(routerStats.allowedMethods());

export { app };
