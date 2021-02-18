"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmWorkspace = _interopRequireDefault(require("../model/IdmWorkspace"));

var _RestDeleteResponse = _interopRequireDefault(require("../model/RestDeleteResponse"));

var _RestSearchWorkspaceRequest = _interopRequireDefault(require("../model/RestSearchWorkspaceRequest"));

var _RestWorkspaceCollection = _interopRequireDefault(require("../model/RestWorkspaceCollection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* WorkspaceService service.
* @module api/WorkspaceServiceApi
* @version 1.0
*/
var WorkspaceServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WorkspaceServiceApi. 
  * @alias module:api/WorkspaceServiceApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WorkspaceServiceApi(apiClient) {
    _classCallCheck(this, WorkspaceServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Delete an existing workspace
   * @param {String} slug 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDeleteResponse} and HTTP response
   */


  _createClass(WorkspaceServiceApi, [{
    key: "deleteWorkspaceWithHttpInfo",
    value: function deleteWorkspaceWithHttpInfo(slug) {
      var postBody = null; // verify the required parameter 'slug' is set

      if (slug === undefined || slug === null) {
        throw new Error("Missing the required parameter 'slug' when calling deleteWorkspace");
      }

      var pathParams = {
        'Slug': slug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestDeleteResponse["default"];
      return this.apiClient.callApi('/workspace/{Slug}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Delete an existing workspace
     * @param {String} slug 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDeleteResponse}
     */

  }, {
    key: "deleteWorkspace",
    value: function deleteWorkspace(slug) {
      return this.deleteWorkspaceWithHttpInfo(slug).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create or update a workspace
     * @param {String} slug 
     * @param {module:model/IdmWorkspace} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmWorkspace} and HTTP response
     */

  }, {
    key: "putWorkspaceWithHttpInfo",
    value: function putWorkspaceWithHttpInfo(slug, body) {
      var postBody = body; // verify the required parameter 'slug' is set

      if (slug === undefined || slug === null) {
        throw new Error("Missing the required parameter 'slug' when calling putWorkspace");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putWorkspace");
      }

      var pathParams = {
        'Slug': slug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IdmWorkspace["default"];
      return this.apiClient.callApi('/workspace/{Slug}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Create or update a workspace
     * @param {String} slug 
     * @param {module:model/IdmWorkspace} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmWorkspace}
     */

  }, {
    key: "putWorkspace",
    value: function putWorkspace(slug, body) {
      return this.putWorkspaceWithHttpInfo(slug, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Search workspaces on certain keys
     * @param {module:model/RestSearchWorkspaceRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestWorkspaceCollection} and HTTP response
     */

  }, {
    key: "searchWorkspacesWithHttpInfo",
    value: function searchWorkspacesWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling searchWorkspaces");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestWorkspaceCollection["default"];
      return this.apiClient.callApi('/workspace', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Search workspaces on certain keys
     * @param {module:model/RestSearchWorkspaceRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestWorkspaceCollection}
     */

  }, {
    key: "searchWorkspaces",
    value: function searchWorkspaces(body) {
      return this.searchWorkspacesWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return WorkspaceServiceApi;
}();

exports["default"] = WorkspaceServiceApi;
//# sourceMappingURL=WorkspaceServiceApi.js.map
