/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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
import RestLogMessageCollection from '../model/RestLogMessageCollection';
import RestUserJobRequest from '../model/RestUserJobRequest';
import RestUserJobResponse from '../model/RestUserJobResponse';
import RestUserJobsCollection from '../model/RestUserJobsCollection';

/**
* JobsService service.
* @module api/JobsServiceApi
* @version 1.0
*/
export default class JobsServiceApi {

    /**
    * Constructs a new JobsServiceApi. 
    * @alias module:api/JobsServiceApi
    * @class
    * @param {module:ApiClient} apiClient Optional API client implementation to use,
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
        authNames, contentTypes, accepts, returnType
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
        authNames, contentTypes, accepts, returnType
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
     * @param {String} jobName 
     * @param {module:model/RestUserJobRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestUserJobResponse} and HTTP response
     */
    userCreateJobWithHttpInfo(jobName, body) {
      let postBody = body;

      // verify the required parameter 'jobName' is set
      if (jobName === undefined || jobName === null) {
        throw new Error("Missing the required parameter 'jobName' when calling userCreateJob");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling userCreateJob");
      }


      let pathParams = {
        'JobName': jobName
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a predefined job to be run directly
     * @param {String} jobName 
     * @param {module:model/RestUserJobRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestUserJobResponse}
     */
    userCreateJob(jobName, body) {
      return this.userCreateJobWithHttpInfo(jobName, body)
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
        authNames, contentTypes, accepts, returnType
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
        authNames, contentTypes, accepts, returnType
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