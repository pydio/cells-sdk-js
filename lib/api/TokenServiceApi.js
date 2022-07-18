"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject"));

var _RestDocumentAccessTokenRequest = _interopRequireDefault(require("../model/RestDocumentAccessTokenRequest"));

var _RestDocumentAccessTokenResponse = _interopRequireDefault(require("../model/RestDocumentAccessTokenResponse"));

var _RestError = _interopRequireDefault(require("../model/RestError"));

var _RestResetPasswordRequest = _interopRequireDefault(require("../model/RestResetPasswordRequest"));

var _RestResetPasswordResponse = _interopRequireDefault(require("../model/RestResetPasswordResponse"));

var _RestResetPasswordTokenResponse = _interopRequireDefault(require("../model/RestResetPasswordTokenResponse"));

var _RestRevokeRequest = _interopRequireDefault(require("../model/RestRevokeRequest"));

var _RestRevokeResponse = _interopRequireDefault(require("../model/RestRevokeResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* TokenService service.
* @module api/TokenServiceApi
* @version 4.0
*/
var TokenServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TokenServiceApi. 
  * @alias module:api/TokenServiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TokenServiceApi(apiClient) {
    _classCallCheck(this, TokenServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Generate a temporary access token for a specific document for the current user
   * @param {module:model/RestDocumentAccessTokenRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDocumentAccessTokenResponse} and HTTP response
   */


  _createClass(TokenServiceApi, [{
    key: "generateDocumentAccessTokenWithHttpInfo",
    value: function generateDocumentAccessTokenWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling generateDocumentAccessToken");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestDocumentAccessTokenResponse["default"];
      return this.apiClient.callApi('/auth/token/document', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Generate a temporary access token for a specific document for the current user
     * @param {module:model/RestDocumentAccessTokenRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDocumentAccessTokenResponse}
     */

  }, {
    key: "generateDocumentAccessToken",
    value: function generateDocumentAccessToken(body) {
      return this.generateDocumentAccessTokenWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Finish up the reset password process by providing the unique token
     * @param {module:model/RestResetPasswordRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestResetPasswordResponse} and HTTP response
     */

  }, {
    key: "resetPasswordWithHttpInfo",
    value: function resetPasswordWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling resetPassword");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestResetPasswordResponse["default"];
      return this.apiClient.callApi('/auth/reset-password', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Finish up the reset password process by providing the unique token
     * @param {module:model/RestResetPasswordRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestResetPasswordResponse}
     */

  }, {
    key: "resetPassword",
    value: function resetPassword(body) {
      return this.resetPasswordWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Generate a unique token for the reset password process
     * @param {String} UserLogin Start a ResetPassword workflow for this user
     * @param {module:model/InlineObject} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestResetPasswordTokenResponse} and HTTP response
     */

  }, {
    key: "resetPasswordTokenWithHttpInfo",
    value: function resetPasswordTokenWithHttpInfo(UserLogin, body) {
      var postBody = body; // verify the required parameter 'UserLogin' is set

      if (UserLogin === undefined || UserLogin === null) {
        throw new Error("Missing the required parameter 'UserLogin' when calling resetPasswordToken");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling resetPasswordToken");
      }

      var pathParams = {
        'UserLogin': UserLogin
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestResetPasswordTokenResponse["default"];
      return this.apiClient.callApi('/auth/reset-password-token/{UserLogin}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Generate a unique token for the reset password process
     * @param {String} UserLogin Start a ResetPassword workflow for this user
     * @param {module:model/InlineObject} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestResetPasswordTokenResponse}
     */

  }, {
    key: "resetPasswordToken",
    value: function resetPasswordToken(UserLogin, body) {
      return this.resetPasswordTokenWithHttpInfo(UserLogin, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Revoke a JWT token
     * @param {module:model/RestRevokeRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestRevokeResponse} and HTTP response
     */

  }, {
    key: "revokeWithHttpInfo",
    value: function revokeWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling revoke");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestRevokeResponse["default"];
      return this.apiClient.callApi('/auth/token/revoke', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Revoke a JWT token
     * @param {module:model/RestRevokeRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestRevokeResponse}
     */

  }, {
    key: "revoke",
    value: function revoke(body) {
      return this.revokeWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TokenServiceApi;
}();

exports["default"] = TokenServiceApi;
//# sourceMappingURL=TokenServiceApi.js.map
