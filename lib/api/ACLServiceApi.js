"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmACL = _interopRequireDefault(require("../model/IdmACL"));

var _RestACLCollection = _interopRequireDefault(require("../model/RestACLCollection"));

var _RestDeleteResponse = _interopRequireDefault(require("../model/RestDeleteResponse"));

var _RestError = _interopRequireDefault(require("../model/RestError"));

var _RestSearchACLRequest = _interopRequireDefault(require("../model/RestSearchACLRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ACLService service.
* @module api/ACLServiceApi
* @version 4.0
*/
var ACLServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ACLServiceApi. 
  * @alias module:api/ACLServiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ACLServiceApi(apiClient) {
    _classCallCheck(this, ACLServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Delete one or more ACLs
   * @param {module:model/IdmACL} body ACL are the basic flags that can be put anywhere in the tree to provide some specific rights to a given role. The context of how they apply can be fine-tuned by workspace.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDeleteResponse} and HTTP response
   */


  _createClass(ACLServiceApi, [{
    key: "deleteAclWithHttpInfo",
    value: function deleteAclWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling deleteAcl");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestDeleteResponse["default"];
      return this.apiClient.callApi('/acl/bulk/delete', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete one or more ACLs
     * @param {module:model/IdmACL} body ACL are the basic flags that can be put anywhere in the tree to provide some specific rights to a given role. The context of how they apply can be fine-tuned by workspace.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDeleteResponse}
     */

  }, {
    key: "deleteAcl",
    value: function deleteAcl(body) {
      return this.deleteAclWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Store an ACL
     * @param {module:model/IdmACL} body ACL are the basic flags that can be put anywhere in the tree to provide some specific rights to a given role. The context of how they apply can be fine-tuned by workspace.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmACL} and HTTP response
     */

  }, {
    key: "putAclWithHttpInfo",
    value: function putAclWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putAcl");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IdmACL["default"];
      return this.apiClient.callApi('/acl', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Store an ACL
     * @param {module:model/IdmACL} body ACL are the basic flags that can be put anywhere in the tree to provide some specific rights to a given role. The context of how they apply can be fine-tuned by workspace.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmACL}
     */

  }, {
    key: "putAcl",
    value: function putAcl(body) {
      return this.putAclWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Search Acls
     * @param {module:model/RestSearchACLRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestACLCollection} and HTTP response
     */

  }, {
    key: "searchAclsWithHttpInfo",
    value: function searchAclsWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling searchAcls");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestACLCollection["default"];
      return this.apiClient.callApi('/acl', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Search Acls
     * @param {module:model/RestSearchACLRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestACLCollection}
     */

  }, {
    key: "searchAcls",
    value: function searchAcls(body) {
      return this.searchAclsWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ACLServiceApi;
}();

exports["default"] = ACLServiceApi;
//# sourceMappingURL=ACLServiceApi.js.map
