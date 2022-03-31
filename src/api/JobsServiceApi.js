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
import JobsCtrlCommand from '../model/JobsCtrlCommand';
import JobsCtrlCommandResponse from '../model/JobsCtrlCommandResponse';
import JobsDeleteTasksRequest from '../model/JobsDeleteTasksRequest';
import JobsDeleteTasksResponse from '../model/JobsDeleteTasksResponse';
import JobsListJobsRequest from '../model/JobsListJobsRequest';
import LogListLogRequest from '../model/LogListLogRequest';
import RestError from '../model/RestError';
import RestLogMessageCollection from '../model/RestLogMessageCollection';
import RestUserJobRequest from '../model/RestUserJobRequest';
import RestUserJobResponse from '../model/RestUserJobResponse';
import RestUserJobsCollection from '../model/RestUserJobsCollection';

/**
* JobsService service.
* @module api/JobsServiceApi
* @version 4.0
*/
export default class JobsServiceApi {

    /**
    * Constructs a new JobsServiceApi. 
    * @alias module:api/JobsServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Technical Logs, in Json or CSV format
     * @param {module:model/LogListLogRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestLogMessageCollection} and HTTP response
     */
    listTasksLogsWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling listTasksLogs");
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
      let returnType = RestLogMessageCollection;
      return this.apiClient.callApi(
        '/jobs/tasks/logs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Technical Logs, in Json or CSV format
     * @param {module:model/LogListLogRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestLogMessageCollection}
     */
    listTasksLogs(body) {
      return this.listTasksLogsWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send Control Commands to one or many jobs / tasks
     * @param {module:model/JobsCtrlCommand} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/JobsCtrlCommandResponse} and HTTP response
     */
    userControlJobWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling userControlJob");
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
      let returnType = JobsCtrlCommandResponse;
      return this.apiClient.callApi(
        '/jobs/user', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Send Control Commands to one or many jobs / tasks
     * @param {module:model/JobsCtrlCommand} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JobsCtrlCommandResponse}
     */
    userControlJob(body) {
      return this.userControlJobWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a predefined job to be run directly
     * @param {String} JobName Name of the job to create in the user space
     * @param {module:model/RestUserJobRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestUserJobResponse} and HTTP response
     */
    userCreateJobWithHttpInfo(JobName, body) {
      let postBody = body;
      // verify the required parameter 'JobName' is set
      if (JobName === undefined || JobName === null) {
        throw new Error("Missing the required parameter 'JobName' when calling userCreateJob");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling userCreateJob");
      }

      let pathParams = {
        'JobName': JobName
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
      let returnType = RestUserJobResponse;
      return this.apiClient.callApi(
        '/jobs/user/{JobName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a predefined job to be run directly
     * @param {String} JobName Name of the job to create in the user space
     * @param {module:model/RestUserJobRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestUserJobResponse}
     */
    userCreateJob(JobName, body) {
      return this.userCreateJobWithHttpInfo(JobName, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send a control command to clean tasks on a given job
     * @param {module:model/JobsDeleteTasksRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/JobsDeleteTasksResponse} and HTTP response
     */
    userDeleteTasksWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling userDeleteTasks");
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
      let returnType = JobsDeleteTasksResponse;
      return this.apiClient.callApi(
        '/jobs/tasks/delete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Send a control command to clean tasks on a given job
     * @param {module:model/JobsDeleteTasksRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JobsDeleteTasksResponse}
     */
    userDeleteTasks(body) {
      return this.userDeleteTasksWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List jobs associated with current user
     * @param {module:model/JobsListJobsRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestUserJobsCollection} and HTTP response
     */
    userListJobsWithHttpInfo(body) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling userListJobs");
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
      let returnType = RestUserJobsCollection;
      return this.apiClient.callApi(
        '/jobs/user', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List jobs associated with current user
     * @param {module:model/JobsListJobsRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestUserJobsCollection}
     */
    userListJobs(body) {
      return this.userListJobsWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
