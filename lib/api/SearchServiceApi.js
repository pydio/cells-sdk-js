"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestError = _interopRequireDefault(require("../model/RestError"));

var _RestSearchResults = _interopRequireDefault(require("../model/RestSearchResults"));

var _TreeSearchRequest = _interopRequireDefault(require("../model/TreeSearchRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* SearchService service.
* @module api/SearchServiceApi
* @version 4.0
*/
var SearchServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SearchServiceApi. 
  * @alias module:api/SearchServiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SearchServiceApi(apiClient) {
    _classCallCheck(this, SearchServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Search indexed nodes (files/folders) on various aspects
   * @param {module:model/TreeSearchRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestSearchResults} and HTTP response
   */


  _createClass(SearchServiceApi, [{
    key: "nodesWithHttpInfo",
    value: function nodesWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling nodes");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestSearchResults["default"];
      return this.apiClient.callApi('/search/nodes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Search indexed nodes (files/folders) on various aspects
     * @param {module:model/TreeSearchRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestSearchResults}
     */

  }, {
    key: "nodes",
    value: function nodes(body) {
      return this.nodesWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return SearchServiceApi;
}();

exports["default"] = SearchServiceApi;
//# sourceMappingURL=SearchServiceApi.js.map
