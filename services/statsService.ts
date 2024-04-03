import { AutoStats } from '../models';

const stats: AutoStats[] = [];

export const statsService = {
  async getAllViewsById(autoId: string): Promise<AutoStats | undefined> {
    try {
      return stats.find((s) => s.autoId === autoId);
    } catch (error) {
      throw new Error(error);
    }
  },

  async getListingViewsById(autoId: string): Promise<AutoStats | undefined> {
    try {
      const listingOpens = stats.find((s) => s.autoId === autoId)?.listingOpens;
      return {
        autoId,
        listingOpens,
      };
    } catch (error) {
      throw new Error(error);
    }
  },

  async getPhoneViewsById(autoId: string): Promise<AutoStats | undefined> {
    try {
      const phoneOpens = stats.find((s) => s.autoId === autoId)?.phoneOpens;
      return {
        autoId,
        phoneOpens,
      };
    } catch (error) {
      throw new Error(error);
    }
  },

  async addListingView(autoId: string): Promise<void> {
    try {
      const stat = stats.find((s) => s.autoId === autoId);
      if (!stat) {
        stats.push({ autoId, listingOpens: 1, phoneOpens: 0 });
      } else {
        if (stat.listingOpens) stat.listingOpens++;
      }
    } catch (error) {
      throw new Error(error);
    }
  },

  async addPhoneView(autoId: string): Promise<void> {
    try {
      const stat = stats.find((s) => s.autoId === autoId);
      if (!stat) {
        stats.push({ autoId, listingOpens: 0, phoneOpens: 1 });
      } else {
        if (stat.phoneOpens) stat.phoneOpens++;
      }
    } catch (error) {
      throw new Error(error);
    }
  },
};
