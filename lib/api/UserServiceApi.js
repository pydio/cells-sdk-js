"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmUser = _interopRequireDefault(require("../model/IdmUser"));

var _RestDeleteResponse = _interopRequireDefault(require("../model/RestDeleteResponse"));

var _RestError = _interopRequireDefault(require("../model/RestError"));

var _RestSearchUserRequest = _interopRequireDefault(require("../model/RestSearchUserRequest"));

var _RestUsersCollection = _interopRequireDefault(require("../model/RestUsersCollection"));

var _UserCanRepresentEitherAUserOrAGroup = _interopRequireDefault(require("../model/UserCanRepresentEitherAUserOrAGroup"));

var _UserCanRepresentEitherAUserOrAGroup2 = _interopRequireDefault(require("../model/UserCanRepresentEitherAUserOrAGroup1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* UserService service.
* @module api/UserServiceApi
* @version 4.0
*/
var UserServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UserServiceApi. 
  * @alias module:api/UserServiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UserServiceApi(apiClient) {
    _classCallCheck(this, UserServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Delete a user
   * @param {String} Login User login is used to connect, field is empty for groups
   * @param {Object} opts Optional parameters
   * @param {String} opts.Uuid User unique identifier.
   * @param {String} opts.GroupPath Path to the parent group.
   * @param {String} opts.Password Password can be passed to be updated (but never read back), field is empty for groups.
   * @param {String} opts.OldPassword OldPassword must be set when a user updates her own password.
   * @param {Boolean} opts.IsGroup Whether this object is a group or a user.
   * @param {String} opts.GroupLabel Label of the group, field is empty for users.
   * @param {Number} opts.LastConnected Last successful connection timestamp.
   * @param {Boolean} opts.PoliciesContextEditable Context-resolved to quickly check if user is editable or not.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDeleteResponse} and HTTP response
   */


  _createClass(UserServiceApi, [{
    key: "deleteUserWithHttpInfo",
    value: function deleteUserWithHttpInfo(Login, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'Login' is set

      if (Login === undefined || Login === null) {
        throw new Error("Missing the required parameter 'Login' when calling deleteUser");
      }

      var pathParams = {
        'Login': Login
      };
      var queryParams = {
        'Uuid': opts['Uuid'],
        'GroupPath': opts['GroupPath'],
        'Password': opts['Password'],
        'OldPassword': opts['OldPassword'],
        'IsGroup': opts['IsGroup'],
        'GroupLabel': opts['GroupLabel'],
        'LastConnected': opts['LastConnected'],
        'PoliciesContextEditable': opts['PoliciesContextEditable']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RestDeleteResponse["default"];
      return this.apiClient.callApi('/user/{Login}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a user
     * @param {String} Login User login is used to connect, field is empty for groups
     * @param {Object} opts Optional parameters
     * @param {String} opts.Uuid User unique identifier.
     * @param {String} opts.GroupPath Path to the parent group.
     * @param {String} opts.Password Password can be passed to be updated (but never read back), field is empty for groups.
     * @param {String} opts.OldPassword OldPassword must be set when a user updates her own password.
     * @param {Boolean} opts.IsGroup Whether this object is a group or a user.
     * @param {String} opts.GroupLabel Label of the group, field is empty for users.
     * @param {Number} opts.LastConnected Last successful connection timestamp.
     * @param {Boolean} opts.PoliciesContextEditable Context-resolved to quickly check if user is editable or not.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDeleteResponse}
     */

  }, {
    key: "deleteUser",
    value: function deleteUser(Login, opts) {
      return this.deleteUserWithHttpInfo(Login, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a user by login
     * @param {String} Login User login is used to connect, field is empty for groups
     * @param {Object} opts Optional parameters
     * @param {String} opts.Uuid User unique identifier.
     * @param {String} opts.GroupPath Path to the parent group.
     * @param {String} opts.Password Password can be passed to be updated (but never read back), field is empty for groups.
     * @param {String} opts.OldPassword OldPassword must be set when a user updates her own password.
     * @param {Boolean} opts.IsGroup Whether this object is a group or a user.
     * @param {String} opts.GroupLabel Label of the group, field is empty for users.
     * @param {Number} opts.LastConnected Last successful connection timestamp.
     * @param {Boolean} opts.PoliciesContextEditable Context-resolved to quickly check if user is editable or not.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmUser} and HTTP response
     */

  }, {
    key: "getUserWithHttpInfo",
    value: function getUserWithHttpInfo(Login, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'Login' is set

      if (Login === undefined || Login === null) {
        throw new Error("Missing the required parameter 'Login' when calling getUser");
      }

      var pathParams = {
        'Login': Login
      };
      var queryParams = {
        'Uuid': opts['Uuid'],
        'GroupPath': opts['GroupPath'],
        'Password': opts['Password'],
        'OldPassword': opts['OldPassword'],
        'IsGroup': opts['IsGroup'],
        'GroupLabel': opts['GroupLabel'],
        'LastConnected': opts['LastConnected'],
        'PoliciesContextEditable': opts['PoliciesContextEditable']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IdmUser["default"];
      return this.apiClient.callApi('/user/{Login}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a user by login
     * @param {String} Login User login is used to connect, field is empty for groups
     * @param {Object} opts Optional parameters
     * @param {String} opts.Uuid User unique identifier.
     * @param {String} opts.GroupPath Path to the parent group.
     * @param {String} opts.Password Password can be passed to be updated (but never read back), field is empty for groups.
     * @param {String} opts.OldPassword OldPassword must be set when a user updates her own password.
     * @param {Boolean} opts.IsGroup Whether this object is a group or a user.
     * @param {String} opts.GroupLabel Label of the group, field is empty for users.
     * @param {Number} opts.LastConnected Last successful connection timestamp.
     * @param {Boolean} opts.PoliciesContextEditable Context-resolved to quickly check if user is editable or not.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmUser}
     */

  }, {
    key: "getUser",
    value: function getUser(Login, opts) {
      return this.getUserWithHttpInfo(Login, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Just save a user roles, without other datas
     * @param {String} Login User login is used to connect, field is empty for groups
     * @param {module:model/UserCanRepresentEitherAUserOrAGroup} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmUser} and HTTP response
     */

  }, {
    key: "putRolesWithHttpInfo",
    value: function putRolesWithHttpInfo(Login, body) {
      var postBody = body; // verify the required parameter 'Login' is set

      if (Login === undefined || Login === null) {
        throw new Error("Missing the required parameter 'Login' when calling putRoles");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putRoles");
      }

      var pathParams = {
        'Login': Login
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IdmUser["default"];
      return this.apiClient.callApi('/user/roles/{Login}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Just save a user roles, without other datas
     * @param {String} Login User login is used to connect, field is empty for groups
     * @param {module:model/UserCanRepresentEitherAUserOrAGroup} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmUser}
     */

  }, {
    key: "putRoles",
    value: function putRoles(Login, body) {
      return this.putRolesWithHttpInfo(Login, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create or update a user
     * @param {String} Login User login is used to connect, field is empty for groups
     * @param {module:model/UserCanRepresentEitherAUserOrAGroup1} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmUser} and HTTP response
     */

  }, {
    key: "putUserWithHttpInfo",
    value: function putUserWithHttpInfo(Login, body) {
      var postBody = body; // verify the required parameter 'Login' is set

      if (Login === undefined || Login === null) {
        throw new Error("Missing the required parameter 'Login' when calling putUser");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putUser");
      }

      var pathParams = {
        'Login': Login
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IdmUser["default"];
      return this.apiClient.callApi('/user/{Login}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create or update a user
     * @param {String} Login User login is used to connect, field is empty for groups
     * @param {module:model/UserCanRepresentEitherAUserOrAGroup1} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmUser}
     */

  }, {
    key: "putUser",
    value: function putUser(Login, body) {
      return this.putUserWithHttpInfo(Login, body).then(function (response_and_data) {
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
      return this.apiClient.callApi('/user', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
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
