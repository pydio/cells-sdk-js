"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestNodesCollection = _interopRequireDefault(require("../model/RestNodesCollection"));

var _TreeListNodesRequest = _interopRequireDefault(require("../model/TreeListNodesRequest"));

var _TreeReadNodeRequest = _interopRequireDefault(require("../model/TreeReadNodeRequest"));

var _TreeReadNodeResponse = _interopRequireDefault(require("../model/TreeReadNodeResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* AdminTreeService service.
* @module api/AdminTreeServiceApi
* @version 1.0
*/
var AdminTreeServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AdminTreeServiceApi. 
  * @alias module:api/AdminTreeServiceApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AdminTreeServiceApi(apiClient) {
    _classCallCheck(this, AdminTreeServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * List files and folders starting at the root (first level lists the datasources)
   * @param {module:model/TreeListNodesRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestNodesCollection} and HTTP response
   */


  _createClass(AdminTreeServiceApi, [{
    key: "listAdminTreeWithHttpInfo",
    value: function listAdminTreeWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling listAdminTree");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestNodesCollection["default"];
      return this.apiClient.callApi('/tree/admin/list', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * List files and folders starting at the root (first level lists the datasources)
     * @param {module:model/TreeListNodesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestNodesCollection}
     */

  }, {
    key: "listAdminTree",
    value: function listAdminTree(body) {
      return this.listAdminTreeWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Read a node information inside the admin tree
     * @param {module:model/TreeReadNodeRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TreeReadNodeResponse} and HTTP response
     */

  }, {
    key: "statAdminTreeWithHttpInfo",
    value: function statAdminTreeWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling statAdminTree");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TreeReadNodeResponse["default"];
      return this.apiClient.callApi('/tree/admin/stat', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Read a node information inside the admin tree
     * @param {module:model/TreeReadNodeRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TreeReadNodeResponse}
     */

  }, {
    key: "statAdminTree",
    value: function statAdminTree(body) {
      return this.statAdminTreeWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return AdminTreeServiceApi;
}();

exports["default"] = AdminTreeServiceApi;
//# sourceMappingURL=AdminTreeServiceApi.js.map
