/**
 * Pydio Cells Rest API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import IdmRole from '../model/IdmRole';
import InlineObject from '../model/InlineObject';
import RestError from '../model/RestError';
import RestRolesCollection from '../model/RestRolesCollection';
import RestSearchRoleRequest from '../model/RestSearchRoleRequest';

/**
* RoleService service.
* @module api/RoleServiceApi
* @version 4.0
*/
export default class RoleServiceApi {

    /**
    * Constructs a new RoleServiceApi. 
    * @alias module:api/RoleServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    deleteRoleWithHttpInfo(Uuid, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'Uuid' is set
      if (Uuid === undefined || Uuid === null) {
        throw new Error("Missing the required parameter 'Uuid' when calling deleteRole");
      }

      let pathParams = {
        'Uuid': Uuid
      };
      let queryParams = {
        'Label': opts['Label'],
        'IsTeam': opts['IsTeam'],
        'GroupRole': opts['GroupRole'],
        'UserRole': opts['UserRole'],
        'LastUpdated': opts['LastUpdated'],
        'AutoApplies': this.apiClient.buildCollectionParam(opts['AutoApplies'], 'multi'),
        'PoliciesContextEditable': opts['PoliciesContextEditable'],
        'ForceOverride': opts['ForceOverride']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = IdmRole;
      return this.apiClient.callApi(
        '/role/{Uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    deleteRole(Uuid, opts) {
      return this.deleteRoleWithHttpInfo(Uuid, opts)
        .then(function(response_and_data) {
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
    getRoleWithHttpInfo(Uuid, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'Uuid' is set
      if (Uuid === undefined || Uuid === null) {
        throw new Error("Missing the required parameter 'Uuid' when calling getRole");
      }

      let pathParams = {
        'Uuid': Uuid
      };
      let queryParams = {
        'Label': opts['Label'],
        'IsTeam': opts['IsTeam'],
        'GroupRole': opts['GroupRole'],
        'UserRole': opts['UserRole'],
        'LastUpdated': opts['LastUpdated'],
        'AutoApplies': this.apiClient.buildCollectionParam(opts['AutoApplies'], 'multi'),
        'PoliciesContextEditable': opts['PoliciesContextEditable'],
        'ForceOverride': opts['ForceOverride']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = IdmRole;
      return this.apiClient.callApi(
        '/role/{Uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
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
    getRole(Uuid, opts) {
      return this.getRoleWithHttpInfo(Uuid, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search Roles
     * @param {module:model/RestSearchRoleRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestRolesCollection} and HTTP response
     */
    searchRolesWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling searchRoles");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RestRolesCollection;
      return this.apiClient.callApi(
        '/role', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Search Roles
     * @param {module:model/RestSearchRoleRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestRolesCollection}
     */
    searchRoles(body) {
      return this.searchRolesWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create or update a Role
     * @param {String} Uuid Unique identifier of this role
     * @param {module:model/InlineObject} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/IdmRole} and HTTP response
     */
    setRoleWithHttpInfo(Uuid, body) {
      let postBody = body;
      // verify the required parameter 'Uuid' is set
      if (Uuid === undefined || Uuid === null) {
        throw new Error("Missing the required parameter 'Uuid' when calling setRole");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling setRole");
      }

      let pathParams = {
        'Uuid': Uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = IdmRole;
      return this.apiClient.callApi(
        '/role/{Uuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create or update a Role
     * @param {String} Uuid Unique identifier of this role
     * @param {module:model/InlineObject} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/IdmRole}
     */
    setRole(Uuid, body) {
      return this.setRoleWithHttpInfo(Uuid, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
