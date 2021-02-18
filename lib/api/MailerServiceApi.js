"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MailerMail = _interopRequireDefault(require("../model/MailerMail"));

var _MailerSendMailResponse = _interopRequireDefault(require("../model/MailerSendMailResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* MailerService service.
* @module api/MailerServiceApi
* @version 1.0
*/
var MailerServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MailerServiceApi. 
  * @alias module:api/MailerServiceApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MailerServiceApi(apiClient) {
    _classCallCheck(this, MailerServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Send an email to a user or any email address
   * @param {module:model/MailerMail} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/MailerSendMailResponse} and HTTP response
   */


  _createClass(MailerServiceApi, [{
    key: "sendWithHttpInfo",
    value: function sendWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling send");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _MailerSendMailResponse["default"];
      return this.apiClient.callApi('/mailer/send', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Send an email to a user or any email address
     * @param {module:model/MailerMail} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MailerSendMailResponse}
     */

  }, {
    key: "send",
    value: function send(body) {
      return this.sendWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return MailerServiceApi;
}();

exports["default"] = MailerServiceApi;
//# sourceMappingURL=MailerServiceApi.js.map
