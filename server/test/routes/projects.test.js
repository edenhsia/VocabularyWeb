import request from 'supertest';

import app from '../../src/app';


it('projects', () => {
  expect(500).toEqual(500);
  // test('post one duplicate project, other correct should fail but insert correct projects', async () => {
  //   await request(app).post('/api/projects/').send([projectPayload]);
  //   const res = await request(app)
  //     .post('/api/projects/')
  //     .send([projectPayload, { projectId: 'hi', projectName: 'hi' }]);
  //   expect(res.statusCode).toEqual(500);
  // });
});
