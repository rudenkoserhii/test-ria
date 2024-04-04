import { Context } from 'koa';

import { Messages } from 'enums';
import { AutoStats, AutoStatsListing, AutoStatsPhone } from 'models';
import { statsService } from 'services';
import { ListingStatRequest } from 'types';

export const statsController = {
  async getAllViewsById(ctx: Context): Promise<AutoStats | undefined> {
    try {
      const autoId = ctx.params.autoId;
      if (!autoId) {
        ctx.status = 404;
        ctx.body = { message: Messages.autoIdMissing };
        return;
      }

      const stat = await statsService.getAllViewsById(autoId);
      if (!stat) {
        ctx.status = 404;
        ctx.body = { message: Messages.noAnyViews + autoId };
        return;
      }
      ctx.body = stat;
    } catch (error) {
      throw new Error(error);
    }
  },

  async getListingViewsById(ctx: Context): Promise<AutoStatsListing | undefined> {
    try {
      const autoId = ctx.params.autoId;
      if (!autoId) {
        ctx.status = 404;
        ctx.body = { message: Messages.autoIdMissing };
        return;
      }

      const stat = await statsService.getListingViewsById(autoId);
      if (!stat) {
        ctx.status = 404;
        ctx.body = { message: Messages.noListingViews + autoId };
        return;
      }
      ctx.body = stat;
    } catch (error) {
      throw new Error(error);
    }
  },

  async getPhoneViewsById(ctx: Context): Promise<AutoStatsPhone | undefined> {
    try {
      const autoId = ctx.params.autoId;
      if (!autoId) {
        ctx.status = 404;
        ctx.body = { message: Messages.autoIdMissing };
        return;
      }

      const stat = await statsService.getPhoneViewsById(autoId);
      if (!stat) {
        ctx.status = 404;
        ctx.body = { message: Messages.noPhoneViews + autoId };
        return;
      }
      ctx.body = stat;
    } catch (error) {
      throw new Error(error);
    }
  },

  async addListingView(ctx: Context): Promise<void> {
    try {
      const { autoId } = <ListingStatRequest>ctx.request.body;
      if (!autoId) {
        ctx.status = 404;
        ctx.body = { message: Messages.autoIdMissing };
        return;
      }

      await statsService.addListingView(autoId);
      ctx.status = 200;
      ctx.body = { message: Messages.viewsUpdated };
    } catch (error) {
      throw new Error(error);
    }
  },

  async addPhoneView(ctx: Context): Promise<void> {
    try {
      const { autoId } = <ListingStatRequest>ctx.request.body;
      if (!autoId) {
        ctx.status = 404;
        ctx.body = { message: Messages.autoIdMissing };
        return;
      }

      await statsService.addPhoneView(autoId);
      ctx.status = 200;
      ctx.body = { message: Messages.viewsUpdated };
    } catch (error) {
      throw new Error(error);
    }
  },
};
