"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestBulkMetaResponse = _interopRequireDefault(require("../model/RestBulkMetaResponse"));

var _RestCreateNodesRequest = _interopRequireDefault(require("../model/RestCreateNodesRequest"));

var _RestCreateSelectionRequest = _interopRequireDefault(require("../model/RestCreateSelectionRequest"));

var _RestCreateSelectionResponse = _interopRequireDefault(require("../model/RestCreateSelectionResponse"));

var _RestDeleteNodesRequest = _interopRequireDefault(require("../model/RestDeleteNodesRequest"));

var _RestDeleteNodesResponse = _interopRequireDefault(require("../model/RestDeleteNodesResponse"));

var _RestError = _interopRequireDefault(require("../model/RestError"));

var _RestGetBulkMetaRequest = _interopRequireDefault(require("../model/RestGetBulkMetaRequest"));

var _RestHeadNodeResponse = _interopRequireDefault(require("../model/RestHeadNodeResponse"));

var _RestNodesCollection = _interopRequireDefault(require("../model/RestNodesCollection"));

var _RestRestoreNodesRequest = _interopRequireDefault(require("../model/RestRestoreNodesRequest"));

var _RestRestoreNodesResponse = _interopRequireDefault(require("../model/RestRestoreNodesResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* TreeService service.
* @module api/TreeServiceApi
* @version 4.0
*/
var TreeServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TreeServiceApi. 
  * @alias module:api/TreeServiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TreeServiceApi(apiClient) {
    _classCallCheck(this, TreeServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * List meta for a list of nodes, or a full directory using /path/_* syntax
   * @param {module:model/RestGetBulkMetaRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestBulkMetaResponse} and HTTP response
   */


  _createClass(TreeServiceApi, [{
    key: "bulkStatNodesWithHttpInfo",
    value: function bulkStatNodesWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling bulkStatNodes");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestBulkMetaResponse["default"];
      return this.apiClient.callApi('/tree/stats', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * List meta for a list of nodes, or a full directory using /path/_* syntax
     * @param {module:model/RestGetBulkMetaRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestBulkMetaResponse}
     */

  }, {
    key: "bulkStatNodes",
    value: function bulkStatNodes(body) {
      return this.bulkStatNodesWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create dirs or empty files inside the tree
     * @param {module:model/RestCreateNodesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestNodesCollection} and HTTP response
     */

  }, {
    key: "createNodesWithHttpInfo",
    value: function createNodesWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createNodes");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestNodesCollection["default"];
      return this.apiClient.callApi('/tree/create', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create dirs or empty files inside the tree
     * @param {module:model/RestCreateNodesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestNodesCollection}
     */

  }, {
    key: "createNodes",
    value: function createNodes(body) {
      return this.createNodesWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a temporary selection for further action (namely download)
     * @param {module:model/RestCreateSelectionRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestCreateSelectionResponse} and HTTP response
     */

  }, {
    key: "createSelectionWithHttpInfo",
    value: function createSelectionWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createSelection");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestCreateSelectionResponse["default"];
      return this.apiClient.callApi('/tree/selection', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create a temporary selection for further action (namely download)
     * @param {module:model/RestCreateSelectionRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestCreateSelectionResponse}
     */

  }, {
    key: "createSelection",
    value: function createSelection(body) {
      return this.createSelectionWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Handle nodes deletion
     * @param {module:model/RestDeleteNodesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDeleteNodesResponse} and HTTP response
     */

  }, {
    key: "deleteNodesWithHttpInfo",
    value: function deleteNodesWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling deleteNodes");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestDeleteNodesResponse["default"];
      return this.apiClient.callApi('/tree/delete', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Handle nodes deletion
     * @param {module:model/RestDeleteNodesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDeleteNodesResponse}
     */

  }, {
    key: "deleteNodes",
    value: function deleteNodes(body) {
      return this.deleteNodesWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Return node meta without the node content itself
     * @param {String} Node The node to state
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestHeadNodeResponse} and HTTP response
     */

  }, {
    key: "headNodeWithHttpInfo",
    value: function headNodeWithHttpInfo(Node) {
      var postBody = null; // verify the required parameter 'Node' is set

      if (Node === undefined || Node === null) {
        throw new Error("Missing the required parameter 'Node' when calling headNode");
      }

      var pathParams = {
        'Node': Node
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RestHeadNodeResponse["default"];
      return this.apiClient.callApi('/tree/stat/{Node}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Return node meta without the node content itself
     * @param {String} Node The node to state
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestHeadNodeResponse}
     */

  }, {
    key: "headNode",
    value: function headNode(Node) {
      return this.headNodeWithHttpInfo(Node).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Handle nodes restoration from recycle bin
     * @param {module:model/RestRestoreNodesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestRestoreNodesResponse} and HTTP response
     */

  }, {
    key: "restoreNodesWithHttpInfo",
    value: function restoreNodesWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling restoreNodes");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestRestoreNodesResponse["default"];
      return this.apiClient.callApi('/tree/restore', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Handle nodes restoration from recycle bin
     * @param {module:model/RestRestoreNodesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestRestoreNodesResponse}
     */

  }, {
    key: "restoreNodes",
    value: function restoreNodes(body) {
      return this.restoreNodesWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TreeServiceApi;
}();

exports["default"] = TreeServiceApi;
//# sourceMappingURL=TreeServiceApi.js.map
