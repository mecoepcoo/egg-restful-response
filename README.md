# egg-restful-response

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-restful-response.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-restful-response
[travis-image]: https://img.shields.io/travis/mecoepcoo/egg-restful-response/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/mecoepcoo/egg-restful-response
[codecov-image]: https://img.shields.io/codecov/c/github/mecoepcoo/egg-restful-response/master.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/mecoepcoo/egg-restful-response?branch=master
[download-image]: https://img.shields.io/npm/dm/egg-restful-response.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-restful-response

插件用于简单地给出 restful 标准的响应。

## 依赖说明

### 依赖的 egg 版本

egg-restful-response 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌


## 开启插件

```js
// config/plugin.js
exports.restfulResponse = {
  enable: true,
  package: 'egg-restful-response',
};
```

## 使用

阅读 [app/extend/context.js](app/extend/context.js)

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
