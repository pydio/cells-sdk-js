"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActivityObject = _interopRequireDefault(require("../model/ActivityObject"));

var _ActivitySearchSubscriptionsRequest = _interopRequireDefault(require("../model/ActivitySearchSubscriptionsRequest"));

var _ActivityStreamActivitiesRequest = _interopRequireDefault(require("../model/ActivityStreamActivitiesRequest"));

var _ActivitySubscription = _interopRequireDefault(require("../model/ActivitySubscription"));

var _RestError = _interopRequireDefault(require("../model/RestError"));

var _RestSubscriptionsCollection = _interopRequireDefault(require("../model/RestSubscriptionsCollection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ActivityService service.
* @module api/ActivityServiceApi
* @version 4.0
*/
var ActivityServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ActivityServiceApi. 
  * @alias module:api/ActivityServiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ActivityServiceApi(apiClient) {
    _classCallCheck(this, ActivityServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Load subscriptions to other users/nodes feeds
   * @param {module:model/ActivitySearchSubscriptionsRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestSubscriptionsCollection} and HTTP response
   */


  _createClass(ActivityServiceApi, [{
    key: "searchSubscriptionsWithHttpInfo",
    value: function searchSubscriptionsWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling searchSubscriptions");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestSubscriptionsCollection["default"];
      return this.apiClient.callApi('/activity/subscriptions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Load subscriptions to other users/nodes feeds
     * @param {module:model/ActivitySearchSubscriptionsRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestSubscriptionsCollection}
     */

  }, {
    key: "searchSubscriptions",
    value: function searchSubscriptions(body) {
      return this.searchSubscriptionsWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Load the the feeds of the currently logged user
     * @param {module:model/ActivityStreamActivitiesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActivityObject} and HTTP response
     */

  }, {
    key: "streamWithHttpInfo",
    value: function streamWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling stream");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ActivityObject["default"];
      return this.apiClient.callApi('/activity/stream', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Load the the feeds of the currently logged user
     * @param {module:model/ActivityStreamActivitiesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActivityObject}
     */

  }, {
    key: "stream",
    value: function stream(body) {
      return this.streamWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Manage subscriptions to other users/nodes feeds
     * @param {module:model/ActivitySubscription} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ActivitySubscription} and HTTP response
     */

  }, {
    key: "subscribeWithHttpInfo",
    value: function subscribeWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling subscribe");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ActivitySubscription["default"];
      return this.apiClient.callApi('/activity/subscribe', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Manage subscriptions to other users/nodes feeds
     * @param {module:model/ActivitySubscription} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ActivitySubscription}
     */

  }, {
    key: "subscribe",
    value: function subscribe(body) {
      return this.subscribeWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ActivityServiceApi;
}();

exports["default"] = ActivityServiceApi;
//# sourceMappingURL=ActivityServiceApi.js.map
