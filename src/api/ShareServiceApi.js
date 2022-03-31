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
import RestCell from '../model/RestCell';
import RestDeleteCellResponse from '../model/RestDeleteCellResponse';
import RestDeleteShareLinkResponse from '../model/RestDeleteShareLinkResponse';
import RestError from '../model/RestError';
import RestListSharedResourcesRequest from '../model/RestListSharedResourcesRequest';
import RestListSharedResourcesResponse from '../model/RestListSharedResourcesResponse';
import RestPutCellRequest from '../model/RestPutCellRequest';
import RestPutShareLinkRequest from '../model/RestPutShareLinkRequest';
import RestShareLink from '../model/RestShareLink';
import RestUpdateSharePoliciesRequest from '../model/RestUpdateSharePoliciesRequest';
import RestUpdateSharePoliciesResponse from '../model/RestUpdateSharePoliciesResponse';

/**
* ShareService service.
* @module api/ShareServiceApi
* @version 4.0
*/
export default class ShareServiceApi {

    /**
    * Constructs a new ShareServiceApi. 
    * @alias module:api/ShareServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete a share room
     * @param {String} Uuid Cell Uuid
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDeleteCellResponse} and HTTP response
     */
    deleteCellWithHttpInfo(Uuid) {
      let postBody = null;
      // verify the required parameter 'Uuid' is set
      if (Uuid === undefined || Uuid === null) {
        throw new Error("Missing the required parameter 'Uuid' when calling deleteCell");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RestDeleteCellResponse;
      return this.apiClient.callApi(
        '/share/cell/{Uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete a share room
     * @param {String} Uuid Cell Uuid
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDeleteCellResponse}
     */
    deleteCell(Uuid) {
      return this.deleteCellWithHttpInfo(Uuid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete Share Link
     * @param {String} Uuid Id of Link to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDeleteShareLinkResponse} and HTTP response
     */
    deleteShareLinkWithHttpInfo(Uuid) {
      let postBody = null;
      // verify the required parameter 'Uuid' is set
      if (Uuid === undefined || Uuid === null) {
        throw new Error("Missing the required parameter 'Uuid' when calling deleteShareLink");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RestDeleteShareLinkResponse;
      return this.apiClient.callApi(
        '/share/link/{Uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete Share Link
     * @param {String} Uuid Id of Link to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDeleteShareLinkResponse}
     */
    deleteShareLink(Uuid) {
      return this.deleteShareLinkWithHttpInfo(Uuid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Load a share room
     * @param {String} Uuid Cell Uuid
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestCell} and HTTP response
     */
    getCellWithHttpInfo(Uuid) {
      let postBody = null;
      // verify the required parameter 'Uuid' is set
      if (Uuid === undefined || Uuid === null) {
        throw new Error("Missing the required parameter 'Uuid' when calling getCell");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RestCell;
      return this.apiClient.callApi(
        '/share/cell/{Uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Load a share room
     * @param {String} Uuid Cell Uuid
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestCell}
     */
    getCell(Uuid) {
      return this.getCellWithHttpInfo(Uuid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Load a share link with all infos
     * @param {String} Uuid Link Uuid
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestShareLink} and HTTP response
     */
    getShareLinkWithHttpInfo(Uuid) {
      let postBody = null;
      // verify the required parameter 'Uuid' is set
      if (Uuid === undefined || Uuid === null) {
        throw new Error("Missing the required parameter 'Uuid' when calling getShareLink");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RestShareLink;
      return this.apiClient.callApi(
        '/share/link/{Uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Load a share link with all infos
     * @param {String} Uuid Link Uuid
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestShareLink}
     */
    getShareLink(Uuid) {
      return this.getShareLinkWithHttpInfo(Uuid)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List Shared Resources for current user or all users
     * @param {module:model/RestListSharedResourcesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestListSharedResourcesResponse} and HTTP response
     */
    listSharedResourcesWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling listSharedResources");
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
      let returnType = RestListSharedResourcesResponse;
      return this.apiClient.callApi(
        '/share/resources', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Shared Resources for current user or all users
     * @param {module:model/RestListSharedResourcesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestListSharedResourcesResponse}
     */
    listSharedResources(body) {
      return this.listSharedResourcesWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Put or Create a share room
     * @param {module:model/RestPutCellRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestCell} and HTTP response
     */
    putCellWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putCell");
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
      let returnType = RestCell;
      return this.apiClient.callApi(
        '/share/cell', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Put or Create a share room
     * @param {module:model/RestPutCellRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestCell}
     */
    putCell(body) {
      return this.putCellWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Put or Create a share room
     * @param {module:model/RestPutShareLinkRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestShareLink} and HTTP response
     */
    putShareLinkWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putShareLink");
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
      let returnType = RestShareLink;
      return this.apiClient.callApi(
        '/share/link', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Put or Create a share room
     * @param {module:model/RestPutShareLinkRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestShareLink}
     */
    putShareLink(body) {
      return this.putShareLinkWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates policies associated to the underlying workspace for a Cell or a ShareLink
     * @param {module:model/RestUpdateSharePoliciesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestUpdateSharePoliciesResponse} and HTTP response
     */
    updateSharePoliciesWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateSharePolicies");
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
      let returnType = RestUpdateSharePoliciesResponse;
      return this.apiClient.callApi(
        '/share/policies', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Updates policies associated to the underlying workspace for a Cell or a ShareLink
     * @param {module:model/RestUpdateSharePoliciesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestUpdateSharePoliciesResponse}
     */
    updateSharePolicies(body) {
      return this.updateSharePoliciesWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
