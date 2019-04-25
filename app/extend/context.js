'use strict';

const code = {
  OK: 200, // [GET] 服务器成功返回用户请求的数据，该操作是幂等的
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
  if (config.restfulResponse.showError) {
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
  sendOk({ data = {}, extend = {} } = {}) {
    this.status = code.OK;
    this.body = successBody(data, extend);
  },

  sendBadRequest({ msg = '', cause = '', data = {} } = {}, err) {
    this.status = code.BAD_REQUEST;
    this.body = failBody(this.app.config, msg, cause, data, err);
  },
};
