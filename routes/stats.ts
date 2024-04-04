import Router from 'koa-router';

import { statsController } from 'controllers';
import { ApiPath } from 'enums';

/**
 * @swagger
 * components:
 *   schemas:
 *     AutoStatsFull:
 *       type: object
 *       properties:
 *         autoId:
 *           type: string
 *           description: The auto ID.
 *           example: 12345678
 *         listingOpens:
 *           type: number
 *           description: The listing views quantity.
 *           example: 1
 *         phoneOpens:
 *           type: number
 *           description: The phone views quantity.
 *           example: 1
 *     AutoStatsListing:
 *       type: object
 *       properties:
 *         autoId:
 *           type: string
 *           description: The auto ID.
 *           example: 12345678
 *         listingOpens:
 *           type: number
 *           description: The listing views quantity.
 *           example: 1
 *     AutoStatsPhone:
 *       type: object
 *       properties:
 *         autoId:
 *           type: string
 *           description: The auto ID.
 *           example: 12345678
 *         phoneOpens:
 *           type: number
 *           description: The phone views quantity.
 *           example: 1
 *     AutoId:
 *       type: object
 *       properties:
 *         autoId:
 *           type: string
 *           description: The auto ID.
 *           example: 12345678
 */

const routerStats = new Router();

/**
 * @swagger
 * /stats/{autoId}:
 *   get:
 *     summary: Retrieve statistics by autoId
 *     description: Retrieve statistics for a listing by its autoId.
 *     parameters:
 *       - in: path
 *         name: autoId
 *         required: true
 *         description: ID of the listing.
 *     responses:
 *       '200':
 *         description: Statistics for the listing.
 *         content:
 *           application/json:
 *             schema:
 *              $ref: "#/components/schemas/AutoStatsFull"
 *       '404':
 *         description: Listing not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: ${Messages.noAnyViews} {autoId}
 */ routerStats.get(
  ApiPath.statsGetAllViewsById,
  statsController.getAllViewsById,
);

/**
 * @swagger
 * /stats/{autoId}/listing:
 *   get:
 *     summary: Retrieve listing views by autoId
 *     description: Retrieve the number of views for a listing by its autoId.
 *     parameters:
 *       - in: path
 *         name: autoId
 *         required: true
 *         description: ID of the listing.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Number of listing views.
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                autoId:
 *                  type: string
 *                  description: The auto ID.
 *                  example: 12345678
 *                listingOpens:
 *                  type: number
 *                  description: The listing views quantity.
 *                  example: 1
 *       '404':
 *         description: Listing not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: ${Messages.noListingViews} {autoId}
 */
routerStats.get(
  ApiPath.statsGetListingViewsById,
  statsController.getListingViewsById,
);

/**
 * @swagger
 * /stats/{autoId}/phone:
 *   get:
 *     summary: Retrieve phone views by autoId
 *     description: Retrieve the number of phone views for a listing by its autoId.
 *     parameters:
 *       - in: path
 *         name: autoId
 *         required: true
 *         description: ID of the listing.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Number of phone views.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 autoId:
 *                   type: string
 *                 phoneOpens:
 *                   type: number
 *       '404':
 *         description: Listing not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: ${Messages.noPhoneViews} {autoId}
 */
routerStats.get(
  ApiPath.statsGetPhoneViewsById,
  statsController.getPhoneViewsById,
);

/**
 * @swagger
 * /stats/listing:
 *   post:
 *     summary: Add listing view
 *     description: Increment the number of listing views for a listing.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               autoId:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Views updated successfully.
 *       '404':
 *         description: ${Messages.autoIdMissing}
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: ${Messages.autoIdMissing}
 */
routerStats.post(ApiPath.statsAddListingView, statsController.addListingView);

/**
 * @swagger
 * /stats/phone:
 *   post:
 *     summary: Add phone view
 *     description: Increment the number of phone views for a listing.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               autoId:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Views updated successfully.
 *       '404':
 *         description: ${Messages.autoIdMissing}
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: ${Messages.autoIdMissing}
 */
routerStats.post(ApiPath.statsAddPhoneView, statsController.addPhoneView);

export { routerStats };
