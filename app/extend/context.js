'use strict';

const code = {
  OK: 200, // [GET] 服务器成功返回用户请求的数据
  CREATED: 201, // [POST/PUT/PATCH] 用户新建或修改数据成功
  ACCEPTED: 202, // 一个请求已经进入后台排队（异步任务）
  NO_CONTENT: 204, // [DELETE] 删除数据成功
  SEE_OTHER: 303, // [POST/PUT/DELETE] 暂时重定向，由客户端决定
  BAD_REQUEST: 400, // [POST/PUT/PATCH] 服务器不理解客户端的请求，未做任何处理
  UNAUTHORIZED: 401, // 用户未提供身份验证凭据，或者没有通过身份验证
  FORBIDDEN: 403, // 用户通过了身份验证，但是不具有访问资源所需的权限
  NOT_FOUND: 404, // 所请求的资源不存在或不可用
  NOT_ACCEPTABLE: 406, // [GET] 不支持用户请求的格式，如请求json，但只有xml
  GONE: 410, // [GET] 所请求的资源已被永久转移，不再可用
  UNPROCESABLE_ENTITY: 422, // [POST/PUT/PATCH] 客户端提交的表单验证失败
  INTERNAL_SERVER_ERROR: 500, // 服务端发生错误
  SERVICE_UNAVAILABLE: 503, // 服务暂时不可用
};

function successBody(data, extend) {
  return {
    data,
    extend,
  };
}

function failBody(config, msg, cause, data, err) {
  let body;
  if (config.restfulResponse && config.restfulResponse.showError) {
    body = {
      msg,
      cause,
      err,
      data,
    };
  } else {
    body = {
      msg,
      cause,
      data,
    };
  }
  return body;
}

module.exports = {
  /**
   * [GET] 服务器成功返回用户请求的数据
   * @param {Object} body 响应体
   * @param {Object} body.data 数据信息
   * @param {Object} body.extend 额外信息
   */
  sendOk({ data = {}, extend = {} } = {}) {
    this.status = code.OK;
    this.body = successBody(data, extend);
  },

  /**
   * [POST|PUT|PATCH] 新建或修改数据成功
   * @param {Object} body 响应体
   * @param {Object} body.data 数据信息
   * @param {Object} body.extend 额外信息
   */
  sendCreated({ data = {}, extend = {} } = {}) {
    this.status = code.CREATED;
    this.body = successBody(data, extend);
  },

  /**
   * 一个请求已经进入后台排队（异步任务）
   * @param {Object} body 响应体
   * @param {Object} body.data 数据信息
   * @param {Object} body.extend 额外信息
   */
  sendAccepted({ data = {}, extend = {} } = {}) {
    this.status = code.ACCEPTED;
    this.body = successBody(data, extend);
  },

  /**
   * [DELETE] 删除数据成功
   * @param {Object} body 响应体
   * @param {Object} body.data 数据信息
   * @param {Object} body.extend 额外信息
   */
  sendNoContent({ data = {}, extend = {} } = {}) {
    this.status = code.NO_CONTENT;
    this.body = successBody(data, extend);
  },

  /**
   * [POST|PUT|DELETE] 暂时重定向，由客户端决定
   * @param {Object} body 响应体
   * @param {String} body.url 建议用户向此 url 重定向
   * @param {Object} body.extend 额外信息
   */
  sendSeeOthoer({ url = '', extend = {} }) {
    this.status = code.SEE_OTHER;
    this.body = {
      data: {
        url,
      },
      extend,
    };
  },

  /**
   * [POST|PUT|PATCH] 服务器不理解客户端的请求，未做任何处理
   * @param {Object} body 响应体
   * @param {String} body.msg 错误文本信息
   * @param {String} body.cause 错误原因，或错误发生的大概位置
   * @param {Object} body.data 其他信息
   * @param {Error} err 错误对象，默认情况下不在生产环境输出
   */
  sendBadRequest({ msg = '', cause = '', data = {} } = {}, err) {
    this.status = code.BAD_REQUEST;
    this.body = failBody(this.app.config, msg, cause, data, err);
  },

  /**
   * 用户未提供身份验证凭据，或者没有通过身份验证
   * @param {Object} body 响应体
   * @param {String} body.msg 错误文本信息
   * @param {String} body.cause 错误原因，或错误发生的大概位置
   * @param {Object} body.data 其他信息
   * @param {Error} err 错误对象，默认情况下不在生产环境输出
   */
  sendUnauthorized({ msg = '', cause = '', data = {} } = {}, err) {
    this.status = code.UNAUTHORIZED;
    this.body = failBody(this.app.config, msg, cause, data, err);
  },

  /**
   * 用户通过了身份验证，但是不具有访问资源所需的权限
   * @param {Object} body 响应体
   * @param {String} body.msg 错误文本信息
   * @param {String} body.cause 错误原因，或错误发生的大概位置
   * @param {Object} body.data 其他信息
   * @param {Error} err 错误对象，默认情况下不在生产环境输出
   */
  sendForbidden({ msg = '', cause = '', data = {} } = {}, err) {
    this.status = code.FORBIDDEN;
    this.body = failBody(this.app.config, msg, cause, data, err);
  },

  /**
   * 所请求的资源不存在或不可用
   * @param {Object} body 响应体
   * @param {String} body.msg 错误文本信息
   * @param {String} body.cause 错误原因，或错误发生的大概位置
   * @param {Object} body.data 其他信息
   * @param {Error} err 错误对象，默认情况下不在生产环境输出
   */
  sendNotFound({ msg = '', cause = '', data = {} } = {}, err) {
    this.status = code.NOT_FOUND;
    this.body = failBody(this.app.config, msg, cause, data, err);
  },

  /**
   * [GET] 不支持用户请求的格式，如请求json，但只有xml
   * @param {Object} body 响应体
   * @param {String} body.msg 错误文本信息
   * @param {String} body.cause 错误原因，或错误发生的大概位置
   * @param {Object} body.data 其他信息
   * @param {Error} err 错误对象，默认情况下不在生产环境输出
   */
  sendNotAcceptable({ msg = '', cause = '', data = {} } = {}, err) {
    this.status = code.NOT_ACCEPTABLE;
    this.body = failBody(this.app.config, msg, cause, data, err);
  },

  /**
   * [GET] 所请求的资源已被永久转移，不再可用
   * @param {Object} body 响应体
   * @param {String} body.msg 错误文本信息
   * @param {String} body.cause 错误原因，或错误发生的大概位置
   * @param {Object} body.data 其他信息
   * @param {Error} err 错误对象，默认情况下不在生产环境输出
   */
  sendGone({ msg = '', cause = '', data = {} } = {}, err) {
    this.status = code.GONE;
    this.body = failBody(this.app.config, msg, cause, data, err);
  },

  /**
   * [POST|PUT|PATCH] 客户端提交的表单验证失败
   * @param {Object} body 响应体
   * @param {String} body.msg 错误文本信息
   * @param {String} body.cause 错误原因，或错误发生的大概位置
   * @param {Object} body.data 其他信息
   * @param {Error} err 错误对象，默认情况下不在生产环境输出
   */
  sendUnprocesableEntity({ msg = '', cause = '', data = {} } = {}, err) {
    this.status = code.UNPROCESABLE_ENTITY;
    this.body = failBody(this.app.config, msg, cause, data, err);
  },

  /**
   * 服务端发生错误
   * @param {Object} body 响应体
   * @param {String} body.msg 错误文本信息
   * @param {String} body.cause 错误原因，或错误发生的大概位置
   * @param {Object} body.data 其他信息
   * @param {Error} err 错误对象，默认情况下不在生产环境输出
   */
  sendInternalServerError({ msg = '', cause = '', data = {} } = {}, err) {
    this.status = code.INTERNAL_SERVER_ERROR;
    this.body = failBody(this.app.config, msg, cause, data, err);
  },

  /**
   * 服务暂时不可用
   * @param {Object} body 响应体
   * @param {String} body.msg 错误文本信息
   * @param {String} body.cause 错误原因，或错误发生的大概位置
   * @param {Object} body.data 其他信息
   * @param {Error} err 错误对象，默认情况下不在生产环境输出
   */
  sendServiceUnavailable({ msg = '', cause = '', data = {} } = {}, err) {
    this.status = code.SERVICE_UNAVAILABLE;
    this.body = failBody(this.app.config, msg, cause, data, err);
  },

};
