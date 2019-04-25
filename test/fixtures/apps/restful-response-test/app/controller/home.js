'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async ok() {
    this.ctx.sendOk();
  }

  async sendCreated() {
    this.ctx.sendCreated();
  }

  async sendAccepted() {
    this.ctx.sendAccepted();
  }

  async sendNoContent() {
    this.ctx.sendNoContent();
  }

  async sendSeeOthoer() {
    this.ctx.sendSeeOthoer();
  }

  async sendBadRequest() {
    this.ctx.sendBadRequest();
  }

  async sendUnauthorized() {
    this.ctx.sendUnauthorized();
  }

  async sendForbidden() {
    this.ctx.sendForbidden();
  }

  async sendNotFound() {
    this.ctx.sendNotFound();
  }

  async sendNotAcceptable() {
    this.ctx.sendNotAcceptable();
  }

  async sendGone() {
    this.ctx.sendGone();
  }

  async sendUnprocesableEntity() {
    this.ctx.sendUnprocesableEntity();
  }

  async sendInternalServerError() {
    this.ctx.sendInternalServerError();
  }

  async sendServiceUnavailable() {
    this.ctx.sendServiceUnavailable();
  }

}

module.exports = HomeController;
