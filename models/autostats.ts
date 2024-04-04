interface AutoStats {
  autoId: string;
  listingOpens: number;
  phoneOpens: number;
}

interface AutoStatsListing {
  autoId: string;
  listingOpens: number;
}

interface AutoStatsPhone {
  autoId: string;
  phoneOpens: number;
}

export { type AutoStats, type AutoStatsListing, type AutoStatsPhone };
