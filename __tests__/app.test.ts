import request from 'supertest';
import { app } from '../app';
import { statsService } from '../services';
import { Messages } from '../enums';

describe('Koa Application', () => {
  describe('Error Handling Middleware', () => {
    it('should handle errors gracefully', async () => {
      jest
        .spyOn(statsService, 'getAllViewsById')
        .mockRejectedValue(new Error(Messages.testError) as never);

      const response = await request(app.callback()).get('/stats/someAutoId');

      expect(response.statusCode).toBe(500);
      expect(response.text).toBe(`Error: ${Messages.testError}`);
    });
  });

  describe('Stats Controller', () => {
    it('should handle getting all views by ID', async () => {
      jest
        .spyOn(statsService, 'getAllViewsById')
        .mockResolvedValue({ autoId: 'someAutoId', views: 5 } as never);

      const response = await request(app.callback()).get('/stats/someAutoId');

      expect(response.status).toBe(200);
      expect(response.body).toEqual({ autoId: 'someAutoId', views: 5 });
    });
  });
});
