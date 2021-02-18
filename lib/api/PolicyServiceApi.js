"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmListPolicyGroupsRequest = _interopRequireDefault(require("../model/IdmListPolicyGroupsRequest"));

var _IdmListPolicyGroupsResponse = _interopRequireDefault(require("../model/IdmListPolicyGroupsResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* PolicyService service.
* @module api/PolicyServiceApi
* @version 1.0
*/
var PolicyServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PolicyServiceApi. 
  * @alias module:api/PolicyServiceApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PolicyServiceApi(apiClient) {
    _classCallCheck(this, PolicyServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * List all defined security policies
   * @param {module:model/IdmListPolicyGroupsRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmListPolicyGroupsResponse} and HTTP response
   */


  _createClass(PolicyServiceApi, [{
    key: "listPoliciesWithHttpInfo",
    value: function listPoliciesWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling listPolicies");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IdmListPolicyGroupsResponse["default"];
      return this.apiClient.callApi('/policy', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * List all defined security policies
     * @param {module:model/IdmListPolicyGroupsRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmListPolicyGroupsResponse}
     */

  }, {
    key: "listPolicies",
    value: function listPolicies(body) {
      return this.listPoliciesWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return PolicyServiceApi;
}();

exports["default"] = PolicyServiceApi;
//# sourceMappingURL=PolicyServiceApi.js.map
