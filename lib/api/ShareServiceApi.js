"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestCell = _interopRequireDefault(require("../model/RestCell"));

var _RestDeleteCellResponse = _interopRequireDefault(require("../model/RestDeleteCellResponse"));

var _RestDeleteShareLinkResponse = _interopRequireDefault(require("../model/RestDeleteShareLinkResponse"));

var _RestListSharedResourcesRequest = _interopRequireDefault(require("../model/RestListSharedResourcesRequest"));

var _RestListSharedResourcesResponse = _interopRequireDefault(require("../model/RestListSharedResourcesResponse"));

var _RestPutCellRequest = _interopRequireDefault(require("../model/RestPutCellRequest"));

var _RestPutShareLinkRequest = _interopRequireDefault(require("../model/RestPutShareLinkRequest"));

var _RestShareLink = _interopRequireDefault(require("../model/RestShareLink"));

var _RestUpdateSharePoliciesRequest = _interopRequireDefault(require("../model/RestUpdateSharePoliciesRequest"));

var _RestUpdateSharePoliciesResponse = _interopRequireDefault(require("../model/RestUpdateSharePoliciesResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ShareService service.
* @module api/ShareServiceApi
* @version 1.0
*/
var ShareServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ShareServiceApi. 
  * @alias module:api/ShareServiceApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ShareServiceApi(apiClient) {
    _classCallCheck(this, ShareServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Delete a share room
   * @param {String} uuid 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDeleteCellResponse} and HTTP response
   */


  _createClass(ShareServiceApi, [{
    key: "deleteCellWithHttpInfo",
    value: function deleteCellWithHttpInfo(uuid) {
      var postBody = null; // verify the required parameter 'uuid' is set

      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteCell");
      }

      var pathParams = {
        'Uuid': uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestDeleteCellResponse["default"];
      return this.apiClient.callApi('/share/cell/{Uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Delete a share room
     * @param {String} uuid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDeleteCellResponse}
     */

  }, {
    key: "deleteCell",
    value: function deleteCell(uuid) {
      return this.deleteCellWithHttpInfo(uuid).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete Share Link
     * @param {String} uuid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDeleteShareLinkResponse} and HTTP response
     */

  }, {
    key: "deleteShareLinkWithHttpInfo",
    value: function deleteShareLinkWithHttpInfo(uuid) {
      var postBody = null; // verify the required parameter 'uuid' is set

      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteShareLink");
      }

      var pathParams = {
        'Uuid': uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestDeleteShareLinkResponse["default"];
      return this.apiClient.callApi('/share/link/{Uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Delete Share Link
     * @param {String} uuid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDeleteShareLinkResponse}
     */

  }, {
    key: "deleteShareLink",
    value: function deleteShareLink(uuid) {
      return this.deleteShareLinkWithHttpInfo(uuid).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Load a share room
     * @param {String} uuid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestCell} and HTTP response
     */

  }, {
    key: "getCellWithHttpInfo",
    value: function getCellWithHttpInfo(uuid) {
      var postBody = null; // verify the required parameter 'uuid' is set

      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getCell");
      }

      var pathParams = {
        'Uuid': uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestCell["default"];
      return this.apiClient.callApi('/share/cell/{Uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Load a share room
     * @param {String} uuid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestCell}
     */

  }, {
    key: "getCell",
    value: function getCell(uuid) {
      return this.getCellWithHttpInfo(uuid).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Load a share link with all infos
     * @param {String} uuid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestShareLink} and HTTP response
     */

  }, {
    key: "getShareLinkWithHttpInfo",
    value: function getShareLinkWithHttpInfo(uuid) {
      var postBody = null; // verify the required parameter 'uuid' is set

      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getShareLink");
      }

      var pathParams = {
        'Uuid': uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestShareLink["default"];
      return this.apiClient.callApi('/share/link/{Uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Load a share link with all infos
     * @param {String} uuid 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestShareLink}
     */

  }, {
    key: "getShareLink",
    value: function getShareLink(uuid) {
      return this.getShareLinkWithHttpInfo(uuid).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Shared Resources for current user or all users
     * @param {module:model/RestListSharedResourcesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestListSharedResourcesResponse} and HTTP response
     */

  }, {
    key: "listSharedResourcesWithHttpInfo",
    value: function listSharedResourcesWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling listSharedResources");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestListSharedResourcesResponse["default"];
      return this.apiClient.callApi('/share/resources', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * List Shared Resources for current user or all users
     * @param {module:model/RestListSharedResourcesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestListSharedResourcesResponse}
     */

  }, {
    key: "listSharedResources",
    value: function listSharedResources(body) {
      return this.listSharedResourcesWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Put or Create a share room
     * @param {module:model/RestPutCellRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestCell} and HTTP response
     */

  }, {
    key: "putCellWithHttpInfo",
    value: function putCellWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putCell");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestCell["default"];
      return this.apiClient.callApi('/share/cell', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Put or Create a share room
     * @param {module:model/RestPutCellRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestCell}
     */

  }, {
    key: "putCell",
    value: function putCell(body) {
      return this.putCellWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Put or Create a share room
     * @param {module:model/RestPutShareLinkRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestShareLink} and HTTP response
     */

  }, {
    key: "putShareLinkWithHttpInfo",
    value: function putShareLinkWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putShareLink");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestShareLink["default"];
      return this.apiClient.callApi('/share/link', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Put or Create a share room
     * @param {module:model/RestPutShareLinkRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestShareLink}
     */

  }, {
    key: "putShareLink",
    value: function putShareLink(body) {
      return this.putShareLinkWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Updates policies associated to the underlying workspace for a Cell or a ShareLink
     * @param {module:model/RestUpdateSharePoliciesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestUpdateSharePoliciesResponse} and HTTP response
     */

  }, {
    key: "updateSharePoliciesWithHttpInfo",
    value: function updateSharePoliciesWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateSharePolicies");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestUpdateSharePoliciesResponse["default"];
      return this.apiClient.callApi('/share/policies', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Updates policies associated to the underlying workspace for a Cell or a ShareLink
     * @param {module:model/RestUpdateSharePoliciesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestUpdateSharePoliciesResponse}
     */

  }, {
    key: "updateSharePolicies",
    value: function updateSharePolicies(body) {
      return this.updateSharePoliciesWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ShareServiceApi;
}();

exports["default"] = ShareServiceApi;
//# sourceMappingURL=ShareServiceApi.js.map
