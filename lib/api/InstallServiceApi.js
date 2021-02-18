"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstallGetAgreementResponse = _interopRequireDefault(require("../model/InstallGetAgreementResponse"));

var _InstallGetDefaultsResponse = _interopRequireDefault(require("../model/InstallGetDefaultsResponse"));

var _InstallInstallEventsResponse = _interopRequireDefault(require("../model/InstallInstallEventsResponse"));

var _InstallInstallRequest = _interopRequireDefault(require("../model/InstallInstallRequest"));

var _InstallInstallResponse = _interopRequireDefault(require("../model/InstallInstallResponse"));

var _InstallPerformCheckRequest = _interopRequireDefault(require("../model/InstallPerformCheckRequest"));

var _InstallPerformCheckResponse = _interopRequireDefault(require("../model/InstallPerformCheckResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* InstallService service.
* @module api/InstallServiceApi
* @version 1.0
*/
var InstallServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new InstallServiceApi. 
  * @alias module:api/InstallServiceApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function InstallServiceApi(apiClient) {
    _classCallCheck(this, InstallServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Load a textual agreement for using the software
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InstallGetAgreementResponse} and HTTP response
   */


  _createClass(InstallServiceApi, [{
    key: "getAgreementWithHttpInfo",
    value: function getAgreementWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InstallGetAgreementResponse["default"];
      return this.apiClient.callApi('/install/agreement', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Load a textual agreement for using the software
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InstallGetAgreementResponse}
     */

  }, {
    key: "getAgreement",
    value: function getAgreement() {
      return this.getAgreementWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Loads default values for install form
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InstallGetDefaultsResponse} and HTTP response
     */

  }, {
    key: "getInstallWithHttpInfo",
    value: function getInstallWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InstallGetDefaultsResponse["default"];
      return this.apiClient.callApi('/install', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Loads default values for install form
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InstallGetDefaultsResponse}
     */

  }, {
    key: "getInstall",
    value: function getInstall() {
      return this.getInstallWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InstallInstallEventsResponse} and HTTP response
     */

  }, {
    key: "installEventsWithHttpInfo",
    value: function installEventsWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InstallInstallEventsResponse["default"];
      return this.apiClient.callApi('/install/events', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InstallInstallEventsResponse}
     */

  }, {
    key: "installEvents",
    value: function installEvents() {
      return this.installEventsWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Perform a check during install (like a valid DB connection)
     * @param {module:model/InstallPerformCheckRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InstallPerformCheckResponse} and HTTP response
     */

  }, {
    key: "performInstallCheckWithHttpInfo",
    value: function performInstallCheckWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling performInstallCheck");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InstallPerformCheckResponse["default"];
      return this.apiClient.callApi('/install/check', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Perform a check during install (like a valid DB connection)
     * @param {module:model/InstallPerformCheckRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InstallPerformCheckResponse}
     */

  }, {
    key: "performInstallCheck",
    value: function performInstallCheck(body) {
      return this.performInstallCheckWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Post values to be saved for install
     * @param {module:model/InstallInstallRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InstallInstallResponse} and HTTP response
     */

  }, {
    key: "postInstallWithHttpInfo",
    value: function postInstallWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling postInstall");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InstallInstallResponse["default"];
      return this.apiClient.callApi('/install', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Post values to be saved for install
     * @param {module:model/InstallInstallRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InstallInstallResponse}
     */

  }, {
    key: "postInstall",
    value: function postInstall(body) {
      return this.postInstallWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return InstallServiceApi;
}();

exports["default"] = InstallServiceApi;
//# sourceMappingURL=InstallServiceApi.js.map
