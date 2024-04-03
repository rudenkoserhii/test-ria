import Router from 'koa-router';
import { statsController } from '../controllers';
import { ApiPath } from '../enums';

const routerStats = new Router();

routerStats.get(ApiPath.statsGetAllViewsById, statsController.getAllViewsById);
routerStats.get(
  ApiPath.statsGetListingViewsById,
  statsController.getListingViewsById,
);
routerStats.get(
  ApiPath.statsGetPhoneViewsById,
  statsController.getPhoneViewsById,
);
routerStats.post(ApiPath.statsAddListingView, statsController.addListingView);
routerStats.post(ApiPath.statsAddPhoneView, statsController.addPhoneView);

export { routerStats };
