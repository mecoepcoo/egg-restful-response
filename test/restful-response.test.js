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

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, restfulResponse')
      .expect(200);
  });
});
