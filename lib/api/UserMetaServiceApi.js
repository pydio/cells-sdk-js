"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmSearchUserMetaRequest = _interopRequireDefault(require("../model/IdmSearchUserMetaRequest"));

var _IdmUpdateUserMetaNamespaceRequest = _interopRequireDefault(require("../model/IdmUpdateUserMetaNamespaceRequest"));

var _IdmUpdateUserMetaNamespaceResponse = _interopRequireDefault(require("../model/IdmUpdateUserMetaNamespaceResponse"));

var _IdmUpdateUserMetaRequest = _interopRequireDefault(require("../model/IdmUpdateUserMetaRequest"));

var _IdmUpdateUserMetaResponse = _interopRequireDefault(require("../model/IdmUpdateUserMetaResponse"));

var _RestBulkMetaResponse = _interopRequireDefault(require("../model/RestBulkMetaResponse"));

var _RestDeleteUserMetaTagsResponse = _interopRequireDefault(require("../model/RestDeleteUserMetaTagsResponse"));

var _RestError = _interopRequireDefault(require("../model/RestError"));

var _RestListUserMetaTagsResponse = _interopRequireDefault(require("../model/RestListUserMetaTagsResponse"));

var _RestPutUserMetaTagRequest = _interopRequireDefault(require("../model/RestPutUserMetaTagRequest"));

var _RestPutUserMetaTagResponse = _interopRequireDefault(require("../model/RestPutUserMetaTagResponse"));

var _RestUserBookmarksRequest = _interopRequireDefault(require("../model/RestUserBookmarksRequest"));

var _RestUserMetaCollection = _interopRequireDefault(require("../model/RestUserMetaCollection"));

var _RestUserMetaNamespaceCollection = _interopRequireDefault(require("../model/RestUserMetaNamespaceCollection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* UserMetaService service.
* @module api/UserMetaServiceApi
* @version 4.0
*/
var UserMetaServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UserMetaServiceApi. 
  * @alias module:api/UserMetaServiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UserMetaServiceApi(apiClient) {
    _classCallCheck(this, UserMetaServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Delete one or all tags for a given namespace (use * for all tags)
   * @param {String} Namespace Delete tags from this namespace
   * @param {String} Tags Delete this tag
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDeleteUserMetaTagsResponse} and HTTP response
   */


  _createClass(UserMetaServiceApi, [{
    key: "deleteUserMetaTagsWithHttpInfo",
    value: function deleteUserMetaTagsWithHttpInfo(Namespace, Tags) {
      var postBody = null; // verify the required parameter 'Namespace' is set

      if (Namespace === undefined || Namespace === null) {
        throw new Error("Missing the required parameter 'Namespace' when calling deleteUserMetaTags");
      } // verify the required parameter 'Tags' is set


      if (Tags === undefined || Tags === null) {
        throw new Error("Missing the required parameter 'Tags' when calling deleteUserMetaTags");
      }

      var pathParams = {
        'Namespace': Namespace,
        'Tags': Tags
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RestDeleteUserMetaTagsResponse["default"];
      return this.apiClient.callApi('/user-meta/tags/{Namespace}/{Tags}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete one or all tags for a given namespace (use * for all tags)
     * @param {String} Namespace Delete tags from this namespace
     * @param {String} Tags Delete this tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDeleteUserMetaTagsResponse}
     */

  }, {
    key: "deleteUserMetaTags",
    value: function deleteUserMetaTags(Namespace, Tags) {
      return this.deleteUserMetaTagsWithHttpInfo(Namespace, Tags).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List defined meta namespaces
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestUserMetaNamespaceCollection} and HTTP response
     */

  }, {
    key: "listUserMetaNamespaceWithHttpInfo",
    value: function listUserMetaNamespaceWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RestUserMetaNamespaceCollection["default"];
      return this.apiClient.callApi('/user-meta/namespace', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List defined meta namespaces
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestUserMetaNamespaceCollection}
     */

  }, {
    key: "listUserMetaNamespace",
    value: function listUserMetaNamespace() {
      return this.listUserMetaNamespaceWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Tags for a given namespace
     * @param {String} Namespace List user meta tags for this namespace
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestListUserMetaTagsResponse} and HTTP response
     */

  }, {
    key: "listUserMetaTagsWithHttpInfo",
    value: function listUserMetaTagsWithHttpInfo(Namespace) {
      var postBody = null; // verify the required parameter 'Namespace' is set

      if (Namespace === undefined || Namespace === null) {
        throw new Error("Missing the required parameter 'Namespace' when calling listUserMetaTags");
      }

      var pathParams = {
        'Namespace': Namespace
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RestListUserMetaTagsResponse["default"];
      return this.apiClient.callApi('/user-meta/tags/{Namespace}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List Tags for a given namespace
     * @param {String} Namespace List user meta tags for this namespace
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestListUserMetaTagsResponse}
     */

  }, {
    key: "listUserMetaTags",
    value: function listUserMetaTags(Namespace) {
      return this.listUserMetaTagsWithHttpInfo(Namespace).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Add a new value to Tags for a given namespace
     * @param {String} Namespace Add a tag value for this namespace
     * @param {module:model/RestPutUserMetaTagRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestPutUserMetaTagResponse} and HTTP response
     */

  }, {
    key: "putUserMetaTagWithHttpInfo",
    value: function putUserMetaTagWithHttpInfo(Namespace, body) {
      var postBody = body; // verify the required parameter 'Namespace' is set

      if (Namespace === undefined || Namespace === null) {
        throw new Error("Missing the required parameter 'Namespace' when calling putUserMetaTag");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putUserMetaTag");
      }

      var pathParams = {
        'Namespace': Namespace
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestPutUserMetaTagResponse["default"];
      return this.apiClient.callApi('/user-meta/tags/{Namespace}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Add a new value to Tags for a given namespace
     * @param {String} Namespace Add a tag value for this namespace
     * @param {module:model/RestPutUserMetaTagRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestPutUserMetaTagResponse}
     */

  }, {
    key: "putUserMetaTag",
    value: function putUserMetaTag(Namespace, body) {
      return this.putUserMetaTagWithHttpInfo(Namespace, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Search a list of meta by node Id or by User id and by namespace
     * @param {module:model/IdmSearchUserMetaRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestUserMetaCollection} and HTTP response
     */

  }, {
    key: "searchUserMetaWithHttpInfo",
    value: function searchUserMetaWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling searchUserMeta");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestUserMetaCollection["default"];
      return this.apiClient.callApi('/user-meta/search', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Search a list of meta by node Id or by User id and by namespace
     * @param {module:model/IdmSearchUserMetaRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestUserMetaCollection}
     */

  }, {
    key: "searchUserMeta",
    value: function searchUserMeta(body) {
      return this.searchUserMetaWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update/delete user meta
     * @param {module:model/IdmUpdateUserMetaRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmUpdateUserMetaResponse} and HTTP response
     */

  }, {
    key: "updateUserMetaWithHttpInfo",
    value: function updateUserMetaWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateUserMeta");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IdmUpdateUserMetaResponse["default"];
      return this.apiClient.callApi('/user-meta/update', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update/delete user meta
     * @param {module:model/IdmUpdateUserMetaRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmUpdateUserMetaResponse}
     */

  }, {
    key: "updateUserMeta",
    value: function updateUserMeta(body) {
      return this.updateUserMetaWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Admin: update namespaces
     * @param {module:model/IdmUpdateUserMetaNamespaceRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmUpdateUserMetaNamespaceResponse} and HTTP response
     */

  }, {
    key: "updateUserMetaNamespaceWithHttpInfo",
    value: function updateUserMetaNamespaceWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateUserMetaNamespace");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IdmUpdateUserMetaNamespaceResponse["default"];
      return this.apiClient.callApi('/user-meta/namespace', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Admin: update namespaces
     * @param {module:model/IdmUpdateUserMetaNamespaceRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmUpdateUserMetaNamespaceResponse}
     */

  }, {
    key: "updateUserMetaNamespace",
    value: function updateUserMetaNamespace(body) {
      return this.updateUserMetaNamespaceWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Special API for Bookmarks, will load userMeta and the associated nodes, and return as a node list
     * @param {module:model/RestUserBookmarksRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestBulkMetaResponse} and HTTP response
     */

  }, {
    key: "userBookmarksWithHttpInfo",
    value: function userBookmarksWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling userBookmarks");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestBulkMetaResponse["default"];
      return this.apiClient.callApi('/user-meta/bookmarks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Special API for Bookmarks, will load userMeta and the associated nodes, and return as a node list
     * @param {module:model/RestUserBookmarksRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestBulkMetaResponse}
     */

  }, {
    key: "userBookmarks",
    value: function userBookmarks(body) {
      return this.userBookmarksWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return UserMetaServiceApi;
}();

exports["default"] = UserMetaServiceApi;
//# sourceMappingURL=UserMetaServiceApi.js.map
