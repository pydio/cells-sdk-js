"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmWorkspace = _interopRequireDefault(require("../model/IdmWorkspace"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject2"));

var _RestDeleteResponse = _interopRequireDefault(require("../model/RestDeleteResponse"));

var _RestError = _interopRequireDefault(require("../model/RestError"));

var _RestSearchWorkspaceRequest = _interopRequireDefault(require("../model/RestSearchWorkspaceRequest"));

var _RestWorkspaceCollection = _interopRequireDefault(require("../model/RestWorkspaceCollection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* WorkspaceService service.
* @module api/WorkspaceServiceApi
* @version 4.0
*/
var WorkspaceServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WorkspaceServiceApi. 
  * @alias module:api/WorkspaceServiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WorkspaceServiceApi(apiClient) {
    _classCallCheck(this, WorkspaceServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Delete an existing workspace
   * @param {String} Slug Slug is an url-compatible form of the workspace label, or can be freely modified (max length 500)
   * @param {Object} opts Optional parameters
   * @param {String} opts.UUID Unique identifier of the workspace
   * @param {String} opts.Label Label of the workspace (max length 500)
   * @param {String} opts.Description Description of the workspace (max length 1000)
   * @param {module:model/String} opts.Scope Scope can be ADMIN, ROOM (=CELL) or LINK (default to 'ANY')
   * @param {Number} opts.LastUpdated Last modification time
   * @param {String} opts.Attributes JSON-encoded list of attributes
   * @param {Array.<String>} opts.RootUUIDs Quick list of the RootNodes uuids
   * @param {Boolean} opts.PoliciesContextEditable Context-resolved to quickly check if workspace is editable or not
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDeleteResponse} and HTTP response
   */


  _createClass(WorkspaceServiceApi, [{
    key: "deleteWorkspaceWithHttpInfo",
    value: function deleteWorkspaceWithHttpInfo(Slug, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'Slug' is set

      if (Slug === undefined || Slug === null) {
        throw new Error("Missing the required parameter 'Slug' when calling deleteWorkspace");
      }

      var pathParams = {
        'Slug': Slug
      };
      var queryParams = {
        'UUID': opts['UUID'],
        'Label': opts['Label'],
        'Description': opts['Description'],
        'Scope': opts['Scope'],
        'LastUpdated': opts['LastUpdated'],
        'Attributes': opts['Attributes'],
        'RootUUIDs': this.apiClient.buildCollectionParam(opts['RootUUIDs'], 'multi'),
        'PoliciesContextEditable': opts['PoliciesContextEditable']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RestDeleteResponse["default"];
      return this.apiClient.callApi('/workspace/{Slug}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete an existing workspace
     * @param {String} Slug Slug is an url-compatible form of the workspace label, or can be freely modified (max length 500)
     * @param {Object} opts Optional parameters
     * @param {String} opts.UUID Unique identifier of the workspace
     * @param {String} opts.Label Label of the workspace (max length 500)
     * @param {String} opts.Description Description of the workspace (max length 1000)
     * @param {module:model/String} opts.Scope Scope can be ADMIN, ROOM (=CELL) or LINK (default to 'ANY')
     * @param {Number} opts.LastUpdated Last modification time
     * @param {String} opts.Attributes JSON-encoded list of attributes
     * @param {Array.<String>} opts.RootUUIDs Quick list of the RootNodes uuids
     * @param {Boolean} opts.PoliciesContextEditable Context-resolved to quickly check if workspace is editable or not
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDeleteResponse}
     */

  }, {
    key: "deleteWorkspace",
    value: function deleteWorkspace(Slug, opts) {
      return this.deleteWorkspaceWithHttpInfo(Slug, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create or update a workspace
     * @param {String} Slug Slug is an url-compatible form of the workspace label, or can be freely modified (max length 500)
     * @param {module:model/InlineObject2} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmWorkspace} and HTTP response
     */

  }, {
    key: "putWorkspaceWithHttpInfo",
    value: function putWorkspaceWithHttpInfo(Slug, body) {
      var postBody = body; // verify the required parameter 'Slug' is set

      if (Slug === undefined || Slug === null) {
        throw new Error("Missing the required parameter 'Slug' when calling putWorkspace");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putWorkspace");
      }

      var pathParams = {
        'Slug': Slug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IdmWorkspace["default"];
      return this.apiClient.callApi('/workspace/{Slug}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create or update a workspace
     * @param {String} Slug Slug is an url-compatible form of the workspace label, or can be freely modified (max length 500)
     * @param {module:model/InlineObject2} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmWorkspace}
     */

  }, {
    key: "putWorkspace",
    value: function putWorkspace(Slug, body) {
      return this.putWorkspaceWithHttpInfo(Slug, body).then(function (response_and_data) {
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
      return this.apiClient.callApi('/workspace', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
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
