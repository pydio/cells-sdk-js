"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestListTemplatesResponse = _interopRequireDefault(require("../model/RestListTemplatesResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* TemplatesService service.
* @module api/TemplatesServiceApi
* @version 1.0
*/
var TemplatesServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TemplatesServiceApi. 
  * @alias module:api/TemplatesServiceApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TemplatesServiceApi(apiClient) {
    _classCallCheck(this, TemplatesServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * List available templates
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestListTemplatesResponse} and HTTP response
   */


  _createClass(TemplatesServiceApi, [{
    key: "listTemplatesWithHttpInfo",
    value: function listTemplatesWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestListTemplatesResponse["default"];
      return this.apiClient.callApi('/templates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * List available templates
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestListTemplatesResponse}
     */

  }, {
    key: "listTemplates",
    value: function listTemplates() {
      return this.listTemplatesWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TemplatesServiceApi;
}();

exports["default"] = TemplatesServiceApi;
//# sourceMappingURL=TemplatesServiceApi.js.map
