'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.get('/ok', controller.home.ok);
  router.get('/sendCreated', controller.home.sendCreated);
  router.get('/sendAccepted', controller.home.sendAccepted);
  router.get('/sendNoContent', controller.home.sendNoContent);
  router.get('/sendSeeOthoer', controller.home.sendSeeOthoer);
  router.get('/sendBadRequest', controller.home.sendBadRequest);
  router.get('/sendUnauthorized', controller.home.sendUnauthorized);
  router.get('/sendForbidden', controller.home.sendForbidden);
  router.get('/sendNotFound', controller.home.sendNotFound);
  router.get('/sendNotAcceptable', controller.home.sendNotAcceptable);
  router.get('/sendGone', controller.home.sendGone);
  router.get('/sendUnprocesableEntity', controller.home.sendUnprocesableEntity);
  router.get('/sendInternalServerError', controller.home.sendInternalServerError);
  router.get('/sendServiceUnavailable', controller.home.sendServiceUnavailable);
};
