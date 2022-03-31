"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmRole = _interopRequireDefault(require("../model/IdmRole"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject"));

var _RestError = _interopRequireDefault(require("../model/RestError"));

var _RestRolesCollection = _interopRequireDefault(require("../model/RestRolesCollection"));

var _RestSearchRoleRequest = _interopRequireDefault(require("../model/RestSearchRoleRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* RoleService service.
* @module api/RoleServiceApi
* @version 4.0
*/
var RoleServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new RoleServiceApi. 
  * @alias module:api/RoleServiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RoleServiceApi(apiClient) {
    _classCallCheck(this, RoleServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Delete a Role by ID
   * @param {String} Uuid Unique identifier of this role
   * @param {Object} opts Optional parameters
   * @param {String} opts.Label Label of this role.
   * @param {Boolean} opts.IsTeam Whether this role represents a user team or not.
   * @param {Boolean} opts.GroupRole Whether this role is attached to a Group object.
   * @param {Boolean} opts.UserRole Whether this role is attached to a User object.
   * @param {Number} opts.LastUpdated Last modification date of the role.
   * @param {Array.<String>} opts.AutoApplies List of profiles (standard, shared, admin) on which the role will be automatically applied.
   * @param {Boolean} opts.PoliciesContextEditable Whether the policies resolve into an editable state.
   * @param {Boolean} opts.ForceOverride Is used in a stack of roles, this one will always be applied last.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmRole} and HTTP response
   */


  _createClass(RoleServiceApi, [{
    key: "deleteRoleWithHttpInfo",
    value: function deleteRoleWithHttpInfo(Uuid, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'Uuid' is set

      if (Uuid === undefined || Uuid === null) {
        throw new Error("Missing the required parameter 'Uuid' when calling deleteRole");
      }

      var pathParams = {
        'Uuid': Uuid
      };
      var queryParams = {
        'Label': opts['Label'],
        'IsTeam': opts['IsTeam'],
        'GroupRole': opts['GroupRole'],
        'UserRole': opts['UserRole'],
        'LastUpdated': opts['LastUpdated'],
        'AutoApplies': this.apiClient.buildCollectionParam(opts['AutoApplies'], 'multi'),
        'PoliciesContextEditable': opts['PoliciesContextEditable'],
        'ForceOverride': opts['ForceOverride']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IdmRole["default"];
      return this.apiClient.callApi('/role/{Uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Delete a Role by ID
     * @param {String} Uuid Unique identifier of this role
     * @param {Object} opts Optional parameters
     * @param {String} opts.Label Label of this role.
     * @param {Boolean} opts.IsTeam Whether this role represents a user team or not.
     * @param {Boolean} opts.GroupRole Whether this role is attached to a Group object.
     * @param {Boolean} opts.UserRole Whether this role is attached to a User object.
     * @param {Number} opts.LastUpdated Last modification date of the role.
     * @param {Array.<String>} opts.AutoApplies List of profiles (standard, shared, admin) on which the role will be automatically applied.
     * @param {Boolean} opts.PoliciesContextEditable Whether the policies resolve into an editable state.
     * @param {Boolean} opts.ForceOverride Is used in a stack of roles, this one will always be applied last.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmRole}
     */

  }, {
    key: "deleteRole",
    value: function deleteRole(Uuid, opts) {
      return this.deleteRoleWithHttpInfo(Uuid, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get a Role by ID
     * @param {String} Uuid Unique identifier of this role
     * @param {Object} opts Optional parameters
     * @param {String} opts.Label Label of this role.
     * @param {Boolean} opts.IsTeam Whether this role represents a user team or not.
     * @param {Boolean} opts.GroupRole Whether this role is attached to a Group object.
     * @param {Boolean} opts.UserRole Whether this role is attached to a User object.
     * @param {Number} opts.LastUpdated Last modification date of the role.
     * @param {Array.<String>} opts.AutoApplies List of profiles (standard, shared, admin) on which the role will be automatically applied.
     * @param {Boolean} opts.PoliciesContextEditable Whether the policies resolve into an editable state.
     * @param {Boolean} opts.ForceOverride Is used in a stack of roles, this one will always be applied last.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmRole} and HTTP response
     */

  }, {
    key: "getRoleWithHttpInfo",
    value: function getRoleWithHttpInfo(Uuid, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'Uuid' is set

      if (Uuid === undefined || Uuid === null) {
        throw new Error("Missing the required parameter 'Uuid' when calling getRole");
      }

      var pathParams = {
        'Uuid': Uuid
      };
      var queryParams = {
        'Label': opts['Label'],
        'IsTeam': opts['IsTeam'],
        'GroupRole': opts['GroupRole'],
        'UserRole': opts['UserRole'],
        'LastUpdated': opts['LastUpdated'],
        'AutoApplies': this.apiClient.buildCollectionParam(opts['AutoApplies'], 'multi'),
        'PoliciesContextEditable': opts['PoliciesContextEditable'],
        'ForceOverride': opts['ForceOverride']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IdmRole["default"];
      return this.apiClient.callApi('/role/{Uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Get a Role by ID
     * @param {String} Uuid Unique identifier of this role
     * @param {Object} opts Optional parameters
     * @param {String} opts.Label Label of this role.
     * @param {Boolean} opts.IsTeam Whether this role represents a user team or not.
     * @param {Boolean} opts.GroupRole Whether this role is attached to a Group object.
     * @param {Boolean} opts.UserRole Whether this role is attached to a User object.
     * @param {Number} opts.LastUpdated Last modification date of the role.
     * @param {Array.<String>} opts.AutoApplies List of profiles (standard, shared, admin) on which the role will be automatically applied.
     * @param {Boolean} opts.PoliciesContextEditable Whether the policies resolve into an editable state.
     * @param {Boolean} opts.ForceOverride Is used in a stack of roles, this one will always be applied last.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmRole}
     */

  }, {
    key: "getRole",
    value: function getRole(Uuid, opts) {
      return this.getRoleWithHttpInfo(Uuid, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Search Roles
     * @param {module:model/RestSearchRoleRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestRolesCollection} and HTTP response
     */

  }, {
    key: "searchRolesWithHttpInfo",
    value: function searchRolesWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling searchRoles");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestRolesCollection["default"];
      return this.apiClient.callApi('/role', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Search Roles
     * @param {module:model/RestSearchRoleRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestRolesCollection}
     */

  }, {
    key: "searchRoles",
    value: function searchRoles(body) {
      return this.searchRolesWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create or update a Role
     * @param {String} Uuid Unique identifier of this role
     * @param {module:model/InlineObject} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmRole} and HTTP response
     */

  }, {
    key: "setRoleWithHttpInfo",
    value: function setRoleWithHttpInfo(Uuid, body) {
      var postBody = body; // verify the required parameter 'Uuid' is set

      if (Uuid === undefined || Uuid === null) {
        throw new Error("Missing the required parameter 'Uuid' when calling setRole");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling setRole");
      }

      var pathParams = {
        'Uuid': Uuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IdmRole["default"];
      return this.apiClient.callApi('/role/{Uuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Create or update a Role
     * @param {String} Uuid Unique identifier of this role
     * @param {module:model/InlineObject} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmRole}
     */

  }, {
    key: "setRole",
    value: function setRole(Uuid, body) {
      return this.setRoleWithHttpInfo(Uuid, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return RoleServiceApi;
}();

exports["default"] = RoleServiceApi;
//# sourceMappingURL=RoleServiceApi.js.map
