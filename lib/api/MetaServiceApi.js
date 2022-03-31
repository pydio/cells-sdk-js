"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestBulkMetaResponse = _interopRequireDefault(require("../model/RestBulkMetaResponse"));

var _RestError = _interopRequireDefault(require("../model/RestError"));

var _RestGetBulkMetaRequest = _interopRequireDefault(require("../model/RestGetBulkMetaRequest"));

var _RestMetaCollection = _interopRequireDefault(require("../model/RestMetaCollection"));

var _RestMetaNamespaceRequest = _interopRequireDefault(require("../model/RestMetaNamespaceRequest"));

var _RestMetaNamespaceRequest2 = _interopRequireDefault(require("../model/RestMetaNamespaceRequest1"));

var _TreeNode = _interopRequireDefault(require("../model/TreeNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* MetaService service.
* @module api/MetaServiceApi
* @version 4.0
*/
var MetaServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MetaServiceApi. 
  * @alias module:api/MetaServiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MetaServiceApi(apiClient) {
    _classCallCheck(this, MetaServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Delete metadata of a given node
   * @param {String} NodePath Path to the requested node
   * @param {module:model/RestMetaNamespaceRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TreeNode} and HTTP response
   */


  _createClass(MetaServiceApi, [{
    key: "deleteMetaWithHttpInfo",
    value: function deleteMetaWithHttpInfo(NodePath, body) {
      var postBody = body; // verify the required parameter 'NodePath' is set

      if (NodePath === undefined || NodePath === null) {
        throw new Error("Missing the required parameter 'NodePath' when calling deleteMeta");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling deleteMeta");
      }

      var pathParams = {
        'NodePath': NodePath
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TreeNode["default"];
      return this.apiClient.callApi('/meta/delete/{NodePath}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete metadata of a given node
     * @param {String} NodePath Path to the requested node
     * @param {module:model/RestMetaNamespaceRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TreeNode}
     */

  }, {
    key: "deleteMeta",
    value: function deleteMeta(NodePath, body) {
      return this.deleteMetaWithHttpInfo(NodePath, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List meta for a list of nodes, or a full directory using /path/_* syntax
     * @param {module:model/RestGetBulkMetaRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestBulkMetaResponse} and HTTP response
     */

  }, {
    key: "getBulkMetaWithHttpInfo",
    value: function getBulkMetaWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getBulkMeta");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestBulkMetaResponse["default"];
      return this.apiClient.callApi('/meta/bulk/get', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List meta for a list of nodes, or a full directory using /path/_* syntax
     * @param {module:model/RestGetBulkMetaRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestBulkMetaResponse}
     */

  }, {
    key: "getBulkMeta",
    value: function getBulkMeta(body) {
      return this.getBulkMetaWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Load metadata for a given node
     * @param {String} NodePath Path to the requested node
     * @param {module:model/RestMetaNamespaceRequest1} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TreeNode} and HTTP response
     */

  }, {
    key: "getMetaWithHttpInfo",
    value: function getMetaWithHttpInfo(NodePath, body) {
      var postBody = body; // verify the required parameter 'NodePath' is set

      if (NodePath === undefined || NodePath === null) {
        throw new Error("Missing the required parameter 'NodePath' when calling getMeta");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling getMeta");
      }

      var pathParams = {
        'NodePath': NodePath
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TreeNode["default"];
      return this.apiClient.callApi('/meta/get/{NodePath}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Load metadata for a given node
     * @param {String} NodePath Path to the requested node
     * @param {module:model/RestMetaNamespaceRequest1} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TreeNode}
     */

  }, {
    key: "getMeta",
    value: function getMeta(NodePath, body) {
      return this.getMetaWithHttpInfo(NodePath, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update metadata for a given node
     * @param {String} NodePath 
     * @param {module:model/RestMetaCollection} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TreeNode} and HTTP response
     */

  }, {
    key: "setMetaWithHttpInfo",
    value: function setMetaWithHttpInfo(NodePath, body) {
      var postBody = body; // verify the required parameter 'NodePath' is set

      if (NodePath === undefined || NodePath === null) {
        throw new Error("Missing the required parameter 'NodePath' when calling setMeta");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling setMeta");
      }

      var pathParams = {
        'NodePath': NodePath
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TreeNode["default"];
      return this.apiClient.callApi('/meta/set/{NodePath}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Update metadata for a given node
     * @param {String} NodePath 
     * @param {module:model/RestMetaCollection} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TreeNode}
     */

  }, {
    key: "setMeta",
    value: function setMeta(NodePath, body) {
      return this.setMetaWithHttpInfo(NodePath, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return MetaServiceApi;
}();

exports["default"] = MetaServiceApi;
//# sourceMappingURL=MetaServiceApi.js.map
