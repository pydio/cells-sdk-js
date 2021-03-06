"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestRelationResponse = _interopRequireDefault(require("../model/RestRelationResponse"));

var _RestUserStateResponse = _interopRequireDefault(require("../model/RestUserStateResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* GraphService service.
* @module api/GraphServiceApi
* @version 1.0
*/
var GraphServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new GraphServiceApi. 
  * @alias module:api/GraphServiceApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function GraphServiceApi(apiClient) {
    _classCallCheck(this, GraphServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Compute relation of context user with another user
   * @param {String} userId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestRelationResponse} and HTTP response
   */


  _createClass(GraphServiceApi, [{
    key: "relationWithHttpInfo",
    value: function relationWithHttpInfo(userId) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling relation");
      }

      var pathParams = {
        'UserId': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestRelationResponse["default"];
      return this.apiClient.callApi('/graph/relation/{UserId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Compute relation of context user with another user
     * @param {String} userId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestRelationResponse}
     */

  }, {
    key: "relation",
    value: function relation(userId) {
      return this.relationWithHttpInfo(userId).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Compute accessible workspaces for a given user
     * @param {String} segment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestUserStateResponse} and HTTP response
     */

  }, {
    key: "userStateWithHttpInfo",
    value: function userStateWithHttpInfo(segment) {
      var postBody = null; // verify the required parameter 'segment' is set

      if (segment === undefined || segment === null) {
        throw new Error("Missing the required parameter 'segment' when calling userState");
      }

      var pathParams = {
        'Segment': segment
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestUserStateResponse["default"];
      return this.apiClient.callApi('/graph/state/{Segment}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Compute accessible workspaces for a given user
     * @param {String} segment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestUserStateResponse}
     */

  }, {
    key: "userState",
    value: function userState(segment) {
      return this.userStateWithHttpInfo(segment).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return GraphServiceApi;
}();

exports["default"] = GraphServiceApi;
//# sourceMappingURL=GraphServiceApi.js.map
