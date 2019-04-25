'use strict';

const mock = require('egg-mock');

describe('test/restful-response.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/restful-response-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('sendOk should get code 200', () => {
    return app.httpRequest()
      .get('/ok')
      .expect({ data: {}, extend: {} })
      .expect(200);
  });

  it('sendCreated should get code 201', () => {
    return app.httpRequest()
      .get('/sendCreated')
      .expect({ data: {}, extend: {} })
      .expect(201);
  });

  it('sendAccepted should get code 202', () => {
    return app.httpRequest()
      .get('/sendAccepted')
      .expect({ data: {}, extend: {} })
      .expect(202);
  });

  it('sendNoContent should get code 204', () => {
    return app.httpRequest()
      .get('/sendNoContent')
      .expect(204);
  });

  it('sendSeeOthoer should get code 303', () => {
    return app.httpRequest()
      .get('/sendSeeOthoer')
      .expect({ data: { url: '' }, extend: {} })
      .expect(303);
  });

  it('sendBadRequest should get code 400', () => {
    return app.httpRequest()
      .get('/sendBadRequest')
      .expect({ msg: '', cause: '', data: {}, err: {} })
      .expect(400);
  });

  it('sendUnauthorized should get code 401', () => {
    return app.httpRequest()
      .get('/sendUnauthorized')
      .expect({ msg: '', cause: '', data: {}, err: {} })
      .expect(401);
  });

  it('sendForbidden should get code 403', () => {
    return app.httpRequest()
      .get('/sendForbidden')
      .expect({ msg: '', cause: '', data: {}, err: {} })
      .expect(403);
  });

  it('sendNotFound should get code 404', () => {
    return app.httpRequest()
      .get('/sendNotFound')
      .expect({ msg: '', cause: '', data: {}, err: {} })
      .expect(404);
  });

  it('sendNotAcceptable should get code 406', () => {
    return app.httpRequest()
      .get('/sendNotAcceptable')
      .expect({ msg: '', cause: '', data: {}, err: {} })
      .expect(406);
  });

  it('sendGone should get code 410', () => {
    return app.httpRequest()
      .get('/sendGone')
      .expect({ msg: '', cause: '', data: {}, err: {} })
      .expect(410);
  });

  it('sendUnprocesableEntity should get code 422', () => {
    return app.httpRequest()
      .get('/sendUnprocesableEntity')
      .expect({ msg: '', cause: '', data: {}, err: {} })
      .expect(422);
  });

  it('sendInternalServerError should get code 500', () => {
    return app.httpRequest()
      .get('/sendInternalServerError')
      .expect({ msg: '', cause: '', data: {}, err: {} })
      .expect(500);
  });

  it('sendServiceUnavailable should get code 503', () => {
    return app.httpRequest()
      .get('/sendServiceUnavailable')
      .expect({ msg: '', cause: '', data: {}, err: {} })
      .expect(503);
  });
});
