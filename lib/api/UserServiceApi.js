"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmUser = _interopRequireDefault(require("../model/IdmUser"));

var _RestDeleteResponse = _interopRequireDefault(require("../model/RestDeleteResponse"));

var _RestSearchUserRequest = _interopRequireDefault(require("../model/RestSearchUserRequest"));

var _RestUsersCollection = _interopRequireDefault(require("../model/RestUsersCollection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* UserService service.
* @module api/UserServiceApi
* @version 1.0
*/
var UserServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UserServiceApi. 
  * @alias module:api/UserServiceApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UserServiceApi(apiClient) {
    _classCallCheck(this, UserServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Delete a user
   * @param {String} login 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDeleteResponse} and HTTP response
   */


  _createClass(UserServiceApi, [{
    key: "deleteUserWithHttpInfo",
    value: function deleteUserWithHttpInfo(login) {
      var postBody = null; // verify the required parameter 'login' is set

      if (login === undefined || login === null) {
        throw new Error("Missing the required parameter 'login' when calling deleteUser");
      }

      var pathParams = {
        'Login': login
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestDeleteResponse["default"];
      return this.apiClient.callApi('/user/{Login}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Delete a user
     * @param {String} login 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDeleteResponse}
     */

  }, {
    key: "deleteUser",
    value: function deleteUser(login) {
      return this.deleteUserWithHttpInfo(login).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a user by login
     * @param {String} login 
     * @param {Object} opts Optional parameters
     * @param {String} opts.uuid User unique identifier.
     * @param {String} opts.groupPath Path to the parent group.
     * @param {String} opts.password Password can be passed to be updated (but never read back), field is empty for groups.
     * @param {String} opts.oldPassword OldPassword must be set when a user updates her own password.
     * @param {Boolean} opts.isGroup Whether this object is a group or a user.
     * @param {String} opts.groupLabel Label of the group, field is empty for users.
     * @param {Number} opts.lastConnected Last successful connection timestamp.
     * @param {Boolean} opts.policiesContextEditable Context-resolved to quickly check if user is editable or not.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmUser} and HTTP response
     */

  }, {
    key: "getUserWithHttpInfo",
    value: function getUserWithHttpInfo(login, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'login' is set

      if (login === undefined || login === null) {
        throw new Error("Missing the required parameter 'login' when calling getUser");
      }

      var pathParams = {
        'Login': login
      };
      var queryParams = {
        'Uuid': opts['uuid'],
        'GroupPath': opts['groupPath'],
        'Password': opts['password'],
        'OldPassword': opts['oldPassword'],
        'IsGroup': opts['isGroup'],
        'GroupLabel': opts['groupLabel'],
        'LastConnected': opts['lastConnected'],
        'PoliciesContextEditable': opts['policiesContextEditable']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IdmUser["default"];
      return this.apiClient.callApi('/user/{Login}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Get a user by login
     * @param {String} login 
     * @param {Object} opts Optional parameters
     * @param {String} opts.uuid User unique identifier.
     * @param {String} opts.groupPath Path to the parent group.
     * @param {String} opts.password Password can be passed to be updated (but never read back), field is empty for groups.
     * @param {String} opts.oldPassword OldPassword must be set when a user updates her own password.
     * @param {Boolean} opts.isGroup Whether this object is a group or a user.
     * @param {String} opts.groupLabel Label of the group, field is empty for users.
     * @param {Number} opts.lastConnected Last successful connection timestamp.
     * @param {Boolean} opts.policiesContextEditable Context-resolved to quickly check if user is editable or not.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmUser}
     */

  }, {
    key: "getUser",
    value: function getUser(login, opts) {
      return this.getUserWithHttpInfo(login, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Just save a user roles, without other datas
     * @param {String} login 
     * @param {module:model/IdmUser} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmUser} and HTTP response
     */

  }, {
    key: "putRolesWithHttpInfo",
    value: function putRolesWithHttpInfo(login, body) {
      var postBody = body; // verify the required parameter 'login' is set

      if (login === undefined || login === null) {
        throw new Error("Missing the required parameter 'login' when calling putRoles");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putRoles");
      }

      var pathParams = {
        'Login': login
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IdmUser["default"];
      return this.apiClient.callApi('/user/roles/{Login}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Just save a user roles, without other datas
     * @param {String} login 
     * @param {module:model/IdmUser} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmUser}
     */

  }, {
    key: "putRoles",
    value: function putRoles(login, body) {
      return this.putRolesWithHttpInfo(login, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create or update a user
     * @param {String} login 
     * @param {module:model/IdmUser} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmUser} and HTTP response
     */

  }, {
    key: "putUserWithHttpInfo",
    value: function putUserWithHttpInfo(login, body) {
      var postBody = body; // verify the required parameter 'login' is set

      if (login === undefined || login === null) {
        throw new Error("Missing the required parameter 'login' when calling putUser");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putUser");
      }

      var pathParams = {
        'Login': login
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IdmUser["default"];
      return this.apiClient.callApi('/user/{Login}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Create or update a user
     * @param {String} login 
     * @param {module:model/IdmUser} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmUser}
     */

  }, {
    key: "putUser",
    value: function putUser(login, body) {
      return this.putUserWithHttpInfo(login, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List/Search users
     * @param {module:model/RestSearchUserRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestUsersCollection} and HTTP response
     */

  }, {
    key: "searchUsersWithHttpInfo",
    value: function searchUsersWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling searchUsers");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestUsersCollection["default"];
      return this.apiClient.callApi('/user', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * List/Search users
     * @param {module:model/RestSearchUserRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestUsersCollection}
     */

  }, {
    key: "searchUsers",
    value: function searchUsers(body) {
      return this.searchUsersWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return UserServiceApi;
}();

exports["default"] = UserServiceApi;
//# sourceMappingURL=UserServiceApi.js.map
