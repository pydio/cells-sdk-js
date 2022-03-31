"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestError = _interopRequireDefault(require("../model/RestError"));

var _UpdateApplyUpdateRequest = _interopRequireDefault(require("../model/UpdateApplyUpdateRequest"));

var _UpdateApplyUpdateResponse = _interopRequireDefault(require("../model/UpdateApplyUpdateResponse"));

var _UpdateUpdateRequest = _interopRequireDefault(require("../model/UpdateUpdateRequest"));

var _UpdateUpdateResponse = _interopRequireDefault(require("../model/UpdateUpdateResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* UpdateService service.
* @module api/UpdateServiceApi
* @version 4.0
*/
var UpdateServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UpdateServiceApi. 
  * @alias module:api/UpdateServiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UpdateServiceApi(apiClient) {
    _classCallCheck(this, UpdateServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Apply an update to a given version
   * @param {String} TargetVersion Version of the target binary
   * @param {module:model/UpdateApplyUpdateRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateApplyUpdateResponse} and HTTP response
   */


  _createClass(UpdateServiceApi, [{
    key: "applyUpdateWithHttpInfo",
    value: function applyUpdateWithHttpInfo(TargetVersion, body) {
      var postBody = body; // verify the required parameter 'TargetVersion' is set

      if (TargetVersion === undefined || TargetVersion === null) {
        throw new Error("Missing the required parameter 'TargetVersion' when calling applyUpdate");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling applyUpdate");
      }

      var pathParams = {
        'TargetVersion': TargetVersion
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UpdateApplyUpdateResponse["default"];
      return this.apiClient.callApi('/update/{TargetVersion}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Apply an update to a given version
     * @param {String} TargetVersion Version of the target binary
     * @param {module:model/UpdateApplyUpdateRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateApplyUpdateResponse}
     */

  }, {
    key: "applyUpdate",
    value: function applyUpdate(TargetVersion, body) {
      return this.applyUpdateWithHttpInfo(TargetVersion, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Check the remote server to see if there are available binaries
     * @param {module:model/UpdateUpdateRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateUpdateResponse} and HTTP response
     */

  }, {
    key: "updateRequiredWithHttpInfo",
    value: function updateRequiredWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateRequired");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UpdateUpdateResponse["default"];
      return this.apiClient.callApi('/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Check the remote server to see if there are available binaries
     * @param {module:model/UpdateUpdateRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateUpdateResponse}
     */

  }, {
    key: "updateRequired",
    value: function updateRequired(body) {
      return this.updateRequiredWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return UpdateServiceApi;
}();

exports["default"] = UpdateServiceApi;
//# sourceMappingURL=UpdateServiceApi.js.map
