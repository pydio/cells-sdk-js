"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LogListLogRequest = _interopRequireDefault(require("../model/LogListLogRequest"));

var _RestError = _interopRequireDefault(require("../model/RestError"));

var _RestLogMessageCollection = _interopRequireDefault(require("../model/RestLogMessageCollection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* LogService service.
* @module api/LogServiceApi
* @version 4.0
*/
var LogServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LogServiceApi. 
  * @alias module:api/LogServiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LogServiceApi(apiClient) {
    _classCallCheck(this, LogServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Technical Logs, in Json or CSV format
   * @param {module:model/LogListLogRequest} body ListLogRequest launches a parameterised query in the log repository and streams the results.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestLogMessageCollection} and HTTP response
   */


  _createClass(LogServiceApi, [{
    key: "syslogWithHttpInfo",
    value: function syslogWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling syslog");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestLogMessageCollection["default"];
      return this.apiClient.callApi('/log/sys', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Technical Logs, in Json or CSV format
     * @param {module:model/LogListLogRequest} body ListLogRequest launches a parameterised query in the log repository and streams the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestLogMessageCollection}
     */

  }, {
    key: "syslog",
    value: function syslog(body) {
      return this.syslogWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return LogServiceApi;
}();

exports["default"] = LogServiceApi;
//# sourceMappingURL=LogServiceApi.js.map
