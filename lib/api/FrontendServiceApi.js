"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestFrontBinaryRequest = _interopRequireDefault(require("../model/RestFrontBinaryRequest"));

var _RestFrontBinaryResponse = _interopRequireDefault(require("../model/RestFrontBinaryResponse"));

var _RestFrontBootConfResponse = _interopRequireDefault(require("../model/RestFrontBootConfResponse"));

var _RestFrontEnrollAuthRequest = _interopRequireDefault(require("../model/RestFrontEnrollAuthRequest"));

var _RestFrontEnrollAuthResponse = _interopRequireDefault(require("../model/RestFrontEnrollAuthResponse"));

var _RestFrontMessagesResponse = _interopRequireDefault(require("../model/RestFrontMessagesResponse"));

var _RestFrontPluginsResponse = _interopRequireDefault(require("../model/RestFrontPluginsResponse"));

var _RestFrontSessionRequest = _interopRequireDefault(require("../model/RestFrontSessionRequest"));

var _RestFrontSessionResponse = _interopRequireDefault(require("../model/RestFrontSessionResponse"));

var _RestFrontStateResponse = _interopRequireDefault(require("../model/RestFrontStateResponse"));

var _RestSettingsMenuResponse = _interopRequireDefault(require("../model/RestSettingsMenuResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* FrontendService service.
* @module api/FrontendServiceApi
* @version 1.0
*/
var FrontendServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new FrontendServiceApi. 
  * @alias module:api/FrontendServiceApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function FrontendServiceApi(apiClient) {
    _classCallCheck(this, FrontendServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Add some data to the initial set of parameters loaded by the frontend
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestFrontBootConfResponse} and HTTP response
   */


  _createClass(FrontendServiceApi, [{
    key: "frontBootConfWithHttpInfo",
    value: function frontBootConfWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestFrontBootConfResponse["default"];
      return this.apiClient.callApi('/frontend/bootconf', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Add some data to the initial set of parameters loaded by the frontend
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestFrontBootConfResponse}
     */

  }, {
    key: "frontBootConf",
    value: function frontBootConf() {
      return this.frontBootConfWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Generic endpoint that can be implemented by 2FA systems for enrollment
     * @param {module:model/RestFrontEnrollAuthRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestFrontEnrollAuthResponse} and HTTP response
     */

  }, {
    key: "frontEnrollAuthWithHttpInfo",
    value: function frontEnrollAuthWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling frontEnrollAuth");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestFrontEnrollAuthResponse["default"];
      return this.apiClient.callApi('/frontend/enroll', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Generic endpoint that can be implemented by 2FA systems for enrollment
     * @param {module:model/RestFrontEnrollAuthRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestFrontEnrollAuthResponse}
     */

  }, {
    key: "frontEnrollAuth",
    value: function frontEnrollAuth(body) {
      return this.frontEnrollAuthWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Serve list of I18n messages
     * @param {String} lang 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestFrontMessagesResponse} and HTTP response
     */

  }, {
    key: "frontMessagesWithHttpInfo",
    value: function frontMessagesWithHttpInfo(lang) {
      var postBody = null; // verify the required parameter 'lang' is set

      if (lang === undefined || lang === null) {
        throw new Error("Missing the required parameter 'lang' when calling frontMessages");
      }

      var pathParams = {
        'Lang': lang
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestFrontMessagesResponse["default"];
      return this.apiClient.callApi('/frontend/messages/{Lang}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Serve list of I18n messages
     * @param {String} lang 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestFrontMessagesResponse}
     */

  }, {
    key: "frontMessages",
    value: function frontMessages(lang) {
      return this.frontMessagesWithHttpInfo(lang).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Serve list of I18n messages
     * @param {String} lang 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestFrontPluginsResponse} and HTTP response
     */

  }, {
    key: "frontPluginsWithHttpInfo",
    value: function frontPluginsWithHttpInfo(lang) {
      var postBody = null; // verify the required parameter 'lang' is set

      if (lang === undefined || lang === null) {
        throw new Error("Missing the required parameter 'lang' when calling frontPlugins");
      }

      var pathParams = {
        'Lang': lang
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestFrontPluginsResponse["default"];
      return this.apiClient.callApi('/frontend/plugins/{Lang}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Serve list of I18n messages
     * @param {String} lang 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestFrontPluginsResponse}
     */

  }, {
    key: "frontPlugins",
    value: function frontPlugins(lang) {
      return this.frontPluginsWithHttpInfo(lang).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Upload frontend binaries (avatars / logos / bg images)
     * @param {String} binaryType 
     * @param {String} uuid 
     * @param {module:model/RestFrontBinaryRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestFrontBinaryResponse} and HTTP response
     */

  }, {
    key: "frontPutBinaryWithHttpInfo",
    value: function frontPutBinaryWithHttpInfo(binaryType, uuid, body) {
      var postBody = body; // verify the required parameter 'binaryType' is set

      if (binaryType === undefined || binaryType === null) {
        throw new Error("Missing the required parameter 'binaryType' when calling frontPutBinary");
      } // verify the required parameter 'uuid' is set


      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling frontPutBinary");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling frontPutBinary");
      }

      var pathParams = {
        'BinaryType': binaryType,
        'Uuid': uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestFrontBinaryResponse["default"];
      return this.apiClient.callApi('/frontend/binaries/{BinaryType}/{Uuid}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Upload frontend binaries (avatars / logos / bg images)
     * @param {String} binaryType 
     * @param {String} uuid 
     * @param {module:model/RestFrontBinaryRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestFrontBinaryResponse}
     */

  }, {
    key: "frontPutBinary",
    value: function frontPutBinary(binaryType, uuid, body) {
      return this.frontPutBinaryWithHttpInfo(binaryType, uuid, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Serve frontend binaries directly (avatars / logos / bg images)
     * @param {String} binaryType 
     * @param {String} uuid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestFrontBinaryResponse} and HTTP response
     */

  }, {
    key: "frontServeBinaryWithHttpInfo",
    value: function frontServeBinaryWithHttpInfo(binaryType, uuid) {
      var postBody = null; // verify the required parameter 'binaryType' is set

      if (binaryType === undefined || binaryType === null) {
        throw new Error("Missing the required parameter 'binaryType' when calling frontServeBinary");
      } // verify the required parameter 'uuid' is set


      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling frontServeBinary");
      }

      var pathParams = {
        'BinaryType': binaryType,
        'Uuid': uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestFrontBinaryResponse["default"];
      return this.apiClient.callApi('/frontend/binaries/{BinaryType}/{Uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Serve frontend binaries directly (avatars / logos / bg images)
     * @param {String} binaryType 
     * @param {String} uuid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestFrontBinaryResponse}
     */

  }, {
    key: "frontServeBinary",
    value: function frontServeBinary(binaryType, uuid) {
      return this.frontServeBinaryWithHttpInfo(binaryType, uuid).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Handle JWT
     * @param {module:model/RestFrontSessionRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestFrontSessionResponse} and HTTP response
     */

  }, {
    key: "frontSessionWithHttpInfo",
    value: function frontSessionWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling frontSession");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestFrontSessionResponse["default"];
      return this.apiClient.callApi('/frontend/session', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Handle JWT
     * @param {module:model/RestFrontSessionRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestFrontSessionResponse}
     */

  }, {
    key: "frontSession",
    value: function frontSession(body) {
      return this.frontSessionWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Send XML state registry
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestFrontStateResponse} and HTTP response
     */

  }, {
    key: "frontStateWithHttpInfo",
    value: function frontStateWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestFrontStateResponse["default"];
      return this.apiClient.callApi('/frontend/state', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Send XML state registry
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestFrontStateResponse}
     */

  }, {
    key: "frontState",
    value: function frontState() {
      return this.frontStateWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Sends a tree of nodes to be used a menu in the Settings panel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestSettingsMenuResponse} and HTTP response
     */

  }, {
    key: "settingsMenuWithHttpInfo",
    value: function settingsMenuWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestSettingsMenuResponse["default"];
      return this.apiClient.callApi('/frontend/settings-menu', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Sends a tree of nodes to be used a menu in the Settings panel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestSettingsMenuResponse}
     */

  }, {
    key: "settingsMenu",
    value: function settingsMenu() {
      return this.settingsMenuWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return FrontendServiceApi;
}();

exports["default"] = FrontendServiceApi;
//# sourceMappingURL=FrontendServiceApi.js.map
