import { AutoStats } from 'models';

const stats: AutoStats[] = [
  { autoId: '123', listingOpens: 10, phoneOpens: 5 },
  { autoId: '456', listingOpens: 2, phoneOpens: 1 },
];

describe('statsService', () => {
  it('should get all views for an existing autoId', async () => {
    const autoId = '123';
    const mockStats = { autoId, listingOpens: 10, phoneOpens: 5 };
    jest.spyOn(stats, 'find').mockReturnValueOnce(mockStats);

    const result = stats.find((s) => s.autoId === autoId);

    expect(result).toEqual(mockStats);
  });

  it('should return undefined for a non-existent autoId', async () => {
    const autoId = '456';
    jest.spyOn(stats, 'find').mockReturnValueOnce(undefined);

    const result = stats.find((s) => s.autoId === autoId);

    expect(result).toBeUndefined();
  });
});
