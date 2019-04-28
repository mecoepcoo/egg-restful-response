import 'egg';

interface SuccessBody {
  data?: any;
  extend?: any;
};

interface FailBody {
  msg?: string;
  cause?: string;
  data?: any;
}

interface SeeOtherBody {
  url?: string;
  extend?: any;
}

declare module 'egg' {
  interface Context {
    /**
     * 200 [GET] 服务器成功返回用户请求的数据
     * @param {Object} body 响应体
     * @param {Object} body.data 数据信息
     * @param {Object} body.extend 额外信息
     * @example SuccessBody
     * { data?: Object, extend?: Object }
     */
    sendOk(body?: SuccessBody);

    /**
     * 201 [POST|PUT|PATCH] 新建或修改数据成功
     * @param {Object} body 响应体
     * @param {Object} body.data 数据信息
     * @param {Object} body.extend 额外信息
     * @example SuccessBody
     * { data?: Object, extend?: Object }
     */
    sendCreated(body?: SuccessBody);

    /**
     * 202 一个请求已经进入后台排队（异步任务）
     * @param {Object} body 响应体
     * @param {Object} body.data 数据信息
     * @param {Object} body.extend 额外信息
     * @example SuccessBody
     * { data?: Object, extend?: Object }
     */
    sendAccepted(body?: SuccessBody);

    /**
     * 204 [DELETE] 删除数据成功
     * @param {Object} body 响应体
     * @param {Object} body.data 数据信息
     * @param {Object} body.extend 额外信息
     * @example SuccessBody
     * { data?: Object, extend?: Object }
     */
    sendNoContent(body?: SuccessBody);

    /**
     * 303 [POST|PUT|DELETE] 暂时重定向，由客户端决定
     * @param {Object} body 响应体
     * @param {String} body.url 建议用户向此 url 重定向
     * @param {Object} body.extend 额外信息
     * @example SeeOtherBody
     * { url?: string, extend?: Object }
     */
    sendSeeOthoer(body?: SeeOtherBody);

    /**
     * 400 [POST|PUT|PATCH] 服务器不理解客户端的请求，未做任何处理
     * @param {Object} body 响应体
     * @param {String} body.msg 错误文本信息
     * @param {String} body.cause 错误原因，或错误发生的大概位置
     * @param {Object} body.data 其他信息
     * @param {any} err 错误对象，默认情况下不在生产环境输出
     * @example FailBody
     * { msg?: string, cause?: string, Data?: Object }
     */
    sendBadRequest(body?: FailBody, err?: any);

    /**
     * 401 用户未提供身份验证凭据，或者没有通过身份验证
     * @param {Object} body 响应体
     * @param {String} body.msg 错误文本信息
     * @param {String} body.cause 错误原因，或错误发生的大概位置
     * @param {Object} body.data 其他信息
     * @param {any} err 错误对象，默认情况下不在生产环境输出
     * @example FailBody
     * { msg?: string, cause?: string, Data?: Object }
     */
    sendUnauthorized(body?: FailBody, err?: any);

    /**
     * 403 用户通过了身份验证，但是不具有访问资源所需的权限
     * @param {Object} body 响应体
     * @param {String} body.msg 错误文本信息
     * @param {String} body.cause 错误原因，或错误发生的大概位置
     * @param {Object} body.data 其他信息
     * @param {any} err 错误对象，默认情况下不在生产环境输出
     * @example FailBody
     * { msg?: string, cause?: string, Data?: Object }
     */
    sendForbidden(body?: FailBody, err?: any);

    /**
     * 404 所请求的资源不存在或不可用
     * @param {Object} body 响应体
     * @param {String} body.msg 错误文本信息
     * @param {String} body.cause 错误原因，或错误发生的大概位置
     * @param {Object} body.data 其他信息
     * @param {any} err 错误对象，默认情况下不在生产环境输出
     * @example FailBody
     * { msg?: string, cause?: string, Data?: Object }
     */
    sendNotFound(body?: FailBody, err?: any)

    /**
     * 406 [GET] 不支持用户请求的格式，如请求json，但只有xml
     * @param {Object} body 响应体
     * @param {String} body.msg 错误文本信息
     * @param {String} body.cause 错误原因，或错误发生的大概位置
     * @param {Object} body.data 其他信息
     * @param {any} err 错误对象，默认情况下不在生产环境输出
     * @example FailBody
     * { msg?: string, cause?: string, Data?: Object }
     */
    sendNotAcceptable(body?: FailBody, err?: any);

    /**
     * 410 [GET] 所请求的资源已被永久转移，不再可用
     * @param {Object} body 响应体
     * @param {String} body.msg 错误文本信息
     * @param {String} body.cause 错误原因，或错误发生的大概位置
     * @param {Object} body.data 其他信息
     * @param {any} err 错误对象，默认情况下不在生产环境输出
     * @example FailBody
     * { msg?: string, cause?: string, Data?: Object }
     */
    sendGone(body?: FailBody, err?: any)

    /**
     * 422 [POST|PUT|PATCH] 客户端提交的表单验证失败
     * @param {Object} body 响应体
     * @param {String} body.msg 错误文本信息
     * @param {String} body.cause 错误原因，或错误发生的大概位置
     * @param {Object} body.data 其他信息
     * @param {any} err 错误对象，默认情况下不在生产环境输出
     * @example FailBody
     * { msg?: string, cause?: string, Data?: Object }
     */
    sendUnprocesableEntity(body?: FailBody, err?: any);

    /**
     * 500 服务端发生错误
     * @param {Object} body 响应体
     * @param {String} body.msg 错误文本信息
     * @param {String} body.cause 错误原因，或错误发生的大概位置
     * @param {Object} body.data 其他信息
     * @param {any} err 错误对象，默认情况下不在生产环境输出
     * @example FailBody
     * { msg?: string, cause?: string, Data?: Object }
     */
    sendInternalServerany(body?: FailBody, err?: any);

    /**
     * 503 服务暂时不可用
     * @param {Object} body 响应体
     * @param {String} body.msg 错误文本信息
     * @param {String} body.cause 错误原因，或错误发生的大概位置
     * @param {Object} body.data 其他信息
     * @param {any} err 错误对象，默认情况下不在生产环境输出
     * @example FailBody
     * { msg?: string, cause?: string, Data?: Object }
     */
    sendServiceUnavailable(body?: FailBody, err?: any);
  }
}
