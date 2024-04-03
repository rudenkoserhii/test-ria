import { Context as KoaContext } from 'koa';

import { statsController } from 'controllers';
import { Messages } from 'enums';
import { statsService } from 'services';

jest.mock('../services');

describe('statsController', () => {
  it('should get all views with valid autoId', async () => {
    const mockCtx: KoaContext = {
      params: { autoId: '789' },
      status: 200,
      body: null,
    } as never;

    jest
      .spyOn(statsService, 'getAllViewsById')
      .mockResolvedValueOnce({ autoId: '789', listingOpens: 2, phoneOpens: 1 });

    await statsController.getAllViewsById(mockCtx);

    expect(mockCtx.status).toBe(200);
    expect(mockCtx.body).toEqual({
      autoId: '789',
      listingOpens: 2,
      phoneOpens: 1,
    });
  });

  it('should return 404 for missing autoId', async () => {
    const mockCtx: KoaContext = {
      params: {},
      status: 200,
      body: null,
    } as never;

    await statsController.getAllViewsById(mockCtx);

    expect(mockCtx.status).toBe(404);
    expect(mockCtx.body).toEqual({ message: Messages.autoIdMissing });
  });
});
