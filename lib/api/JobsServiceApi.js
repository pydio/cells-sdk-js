"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JobsCtrlCommand = _interopRequireDefault(require("../model/JobsCtrlCommand"));

var _JobsCtrlCommandResponse = _interopRequireDefault(require("../model/JobsCtrlCommandResponse"));

var _JobsDeleteTasksRequest = _interopRequireDefault(require("../model/JobsDeleteTasksRequest"));

var _JobsDeleteTasksResponse = _interopRequireDefault(require("../model/JobsDeleteTasksResponse"));

var _JobsListJobsRequest = _interopRequireDefault(require("../model/JobsListJobsRequest"));

var _LogListLogRequest = _interopRequireDefault(require("../model/LogListLogRequest"));

var _RestLogMessageCollection = _interopRequireDefault(require("../model/RestLogMessageCollection"));

var _RestUserJobRequest = _interopRequireDefault(require("../model/RestUserJobRequest"));

var _RestUserJobResponse = _interopRequireDefault(require("../model/RestUserJobResponse"));

var _RestUserJobsCollection = _interopRequireDefault(require("../model/RestUserJobsCollection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* JobsService service.
* @module api/JobsServiceApi
* @version 1.0
*/
var JobsServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new JobsServiceApi. 
  * @alias module:api/JobsServiceApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function JobsServiceApi(apiClient) {
    _classCallCheck(this, JobsServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Technical Logs, in Json or CSV format
   * @param {module:model/LogListLogRequest} body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestLogMessageCollection} and HTTP response
   */


  _createClass(JobsServiceApi, [{
    key: "listTasksLogsWithHttpInfo",
    value: function listTasksLogsWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling listTasksLogs");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestLogMessageCollection["default"];
      return this.apiClient.callApi('/jobs/tasks/logs', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Technical Logs, in Json or CSV format
     * @param {module:model/LogListLogRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestLogMessageCollection}
     */

  }, {
    key: "listTasksLogs",
    value: function listTasksLogs(body) {
      return this.listTasksLogsWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Send Control Commands to one or many jobs / tasks
     * @param {module:model/JobsCtrlCommand} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/JobsCtrlCommandResponse} and HTTP response
     */

  }, {
    key: "userControlJobWithHttpInfo",
    value: function userControlJobWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling userControlJob");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _JobsCtrlCommandResponse["default"];
      return this.apiClient.callApi('/jobs/user', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Send Control Commands to one or many jobs / tasks
     * @param {module:model/JobsCtrlCommand} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JobsCtrlCommandResponse}
     */

  }, {
    key: "userControlJob",
    value: function userControlJob(body) {
      return this.userControlJobWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a predefined job to be run directly
     * @param {String} jobName 
     * @param {module:model/RestUserJobRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestUserJobResponse} and HTTP response
     */

  }, {
    key: "userCreateJobWithHttpInfo",
    value: function userCreateJobWithHttpInfo(jobName, body) {
      var postBody = body; // verify the required parameter 'jobName' is set

      if (jobName === undefined || jobName === null) {
        throw new Error("Missing the required parameter 'jobName' when calling userCreateJob");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling userCreateJob");
      }

      var pathParams = {
        'JobName': jobName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestUserJobResponse["default"];
      return this.apiClient.callApi('/jobs/user/{JobName}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Create a predefined job to be run directly
     * @param {String} jobName 
     * @param {module:model/RestUserJobRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestUserJobResponse}
     */

  }, {
    key: "userCreateJob",
    value: function userCreateJob(jobName, body) {
      return this.userCreateJobWithHttpInfo(jobName, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Send a control command to clean tasks on a given job
     * @param {module:model/JobsDeleteTasksRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/JobsDeleteTasksResponse} and HTTP response
     */

  }, {
    key: "userDeleteTasksWithHttpInfo",
    value: function userDeleteTasksWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling userDeleteTasks");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _JobsDeleteTasksResponse["default"];
      return this.apiClient.callApi('/jobs/tasks/delete', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Send a control command to clean tasks on a given job
     * @param {module:model/JobsDeleteTasksRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/JobsDeleteTasksResponse}
     */

  }, {
    key: "userDeleteTasks",
    value: function userDeleteTasks(body) {
      return this.userDeleteTasksWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List jobs associated with current user
     * @param {module:model/JobsListJobsRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestUserJobsCollection} and HTTP response
     */

  }, {
    key: "userListJobsWithHttpInfo",
    value: function userListJobsWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling userListJobs");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestUserJobsCollection["default"];
      return this.apiClient.callApi('/jobs/user', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * List jobs associated with current user
     * @param {module:model/JobsListJobsRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestUserJobsCollection}
     */

  }, {
    key: "userListJobs",
    value: function userListJobs(body) {
      return this.userListJobsWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return JobsServiceApi;
}();

exports["default"] = JobsServiceApi;
//# sourceMappingURL=JobsServiceApi.js.map
