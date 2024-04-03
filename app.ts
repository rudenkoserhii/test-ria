import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import json from 'koa-json';
import logger from 'koa-logger';

import { ApiPath } from './enums';
import { routerStats } from './routes';
import { customLogger } from './utils';

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
routerStats.prefix(ApiPath.stats);
app.use(routerStats.routes()).use(routerStats.allowedMethods());

export { app };
