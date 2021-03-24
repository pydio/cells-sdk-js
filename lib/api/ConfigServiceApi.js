"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CtlService = _interopRequireDefault(require("../model/CtlService"));

var _EncryptionAdminCreateKeyRequest = _interopRequireDefault(require("../model/EncryptionAdminCreateKeyRequest"));

var _EncryptionAdminCreateKeyResponse = _interopRequireDefault(require("../model/EncryptionAdminCreateKeyResponse"));

var _EncryptionAdminDeleteKeyRequest = _interopRequireDefault(require("../model/EncryptionAdminDeleteKeyRequest"));

var _EncryptionAdminDeleteKeyResponse = _interopRequireDefault(require("../model/EncryptionAdminDeleteKeyResponse"));

var _EncryptionAdminExportKeyRequest = _interopRequireDefault(require("../model/EncryptionAdminExportKeyRequest"));

var _EncryptionAdminExportKeyResponse = _interopRequireDefault(require("../model/EncryptionAdminExportKeyResponse"));

var _EncryptionAdminImportKeyRequest = _interopRequireDefault(require("../model/EncryptionAdminImportKeyRequest"));

var _EncryptionAdminImportKeyResponse = _interopRequireDefault(require("../model/EncryptionAdminImportKeyResponse"));

var _EncryptionAdminListKeysRequest = _interopRequireDefault(require("../model/EncryptionAdminListKeysRequest"));

var _EncryptionAdminListKeysResponse = _interopRequireDefault(require("../model/EncryptionAdminListKeysResponse"));

var _ObjectDataSource = _interopRequireDefault(require("../model/ObjectDataSource"));

var _RestConfiguration = _interopRequireDefault(require("../model/RestConfiguration"));

var _RestControlServiceRequest = _interopRequireDefault(require("../model/RestControlServiceRequest"));

var _RestCreatePeerFolderRequest = _interopRequireDefault(require("../model/RestCreatePeerFolderRequest"));

var _RestCreatePeerFolderResponse = _interopRequireDefault(require("../model/RestCreatePeerFolderResponse"));

var _RestDataSourceCollection = _interopRequireDefault(require("../model/RestDataSourceCollection"));

var _RestDeleteDataSourceResponse = _interopRequireDefault(require("../model/RestDeleteDataSourceResponse"));

var _RestDiscoveryResponse = _interopRequireDefault(require("../model/RestDiscoveryResponse"));

var _RestListPeerFoldersRequest = _interopRequireDefault(require("../model/RestListPeerFoldersRequest"));

var _RestListPeersAddressesResponse = _interopRequireDefault(require("../model/RestListPeersAddressesResponse"));

var _RestListProcessesRequest = _interopRequireDefault(require("../model/RestListProcessesRequest"));

var _RestListProcessesResponse = _interopRequireDefault(require("../model/RestListProcessesResponse"));

var _RestListSitesResponse = _interopRequireDefault(require("../model/RestListSitesResponse"));

var _RestListStorageBucketsRequest = _interopRequireDefault(require("../model/RestListStorageBucketsRequest"));

var _RestNodesCollection = _interopRequireDefault(require("../model/RestNodesCollection"));

var _RestOpenApiResponse = _interopRequireDefault(require("../model/RestOpenApiResponse"));

var _RestSchedulerActionFormResponse = _interopRequireDefault(require("../model/RestSchedulerActionFormResponse"));

var _RestSchedulerActionsResponse = _interopRequireDefault(require("../model/RestSchedulerActionsResponse"));

var _RestServiceCollection = _interopRequireDefault(require("../model/RestServiceCollection"));

var _RestVersioningPolicyCollection = _interopRequireDefault(require("../model/RestVersioningPolicyCollection"));

var _TreeVersioningPolicy = _interopRequireDefault(require("../model/TreeVersioningPolicy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ConfigService service.
* @module api/ConfigServiceApi
* @version 1.0
*/
var ConfigServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ConfigServiceApi. 
  * @alias module:api/ConfigServiceApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ConfigServiceApi(apiClient) {
    _classCallCheck(this, ConfigServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Publish Forms definition for building screens in frontend
   * @param {String} serviceName 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDiscoveryResponse} and HTTP response
   */


  _createClass(ConfigServiceApi, [{
    key: "configFormsDiscoveryWithHttpInfo",
    value: function configFormsDiscoveryWithHttpInfo(serviceName) {
      var postBody = null; // verify the required parameter 'serviceName' is set

      if (serviceName === undefined || serviceName === null) {
        throw new Error("Missing the required parameter 'serviceName' when calling configFormsDiscovery");
      }

      var pathParams = {
        'ServiceName': serviceName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestDiscoveryResponse["default"];
      return this.apiClient.callApi('/config/discovery/forms/{ServiceName}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Publish Forms definition for building screens in frontend
     * @param {String} serviceName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDiscoveryResponse}
     */

  }, {
    key: "configFormsDiscovery",
    value: function configFormsDiscovery(serviceName) {
      return this.configFormsDiscoveryWithHttpInfo(serviceName).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * [Not Implemented]  Start/Stop a service
     * @param {module:model/RestControlServiceRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CtlService} and HTTP response
     */

  }, {
    key: "controlServiceWithHttpInfo",
    value: function controlServiceWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling controlService");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CtlService["default"];
      return this.apiClient.callApi('/config/ctl', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * [Not Implemented]  Start/Stop a service
     * @param {module:model/RestControlServiceRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CtlService}
     */

  }, {
    key: "controlService",
    value: function controlService(body) {
      return this.controlServiceWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a new master key
     * @param {module:model/EncryptionAdminCreateKeyRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EncryptionAdminCreateKeyResponse} and HTTP response
     */

  }, {
    key: "createEncryptionKeyWithHttpInfo",
    value: function createEncryptionKeyWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createEncryptionKey");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EncryptionAdminCreateKeyResponse["default"];
      return this.apiClient.callApi('/config/encryption/create', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Create a new master key
     * @param {module:model/EncryptionAdminCreateKeyRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EncryptionAdminCreateKeyResponse}
     */

  }, {
    key: "createEncryptionKey",
    value: function createEncryptionKey(body) {
      return this.createEncryptionKeyWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create a folder on a given path for a given peer (filesystem)
     * @param {String} peerAddress 
     * @param {module:model/RestCreatePeerFolderRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestCreatePeerFolderResponse} and HTTP response
     */

  }, {
    key: "createPeerFolderWithHttpInfo",
    value: function createPeerFolderWithHttpInfo(peerAddress, body) {
      var postBody = body; // verify the required parameter 'peerAddress' is set

      if (peerAddress === undefined || peerAddress === null) {
        throw new Error("Missing the required parameter 'peerAddress' when calling createPeerFolder");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createPeerFolder");
      }

      var pathParams = {
        'PeerAddress': peerAddress
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestCreatePeerFolderResponse["default"];
      return this.apiClient.callApi('/config/peers/{PeerAddress}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Create a folder on a given path for a given peer (filesystem)
     * @param {String} peerAddress 
     * @param {module:model/RestCreatePeerFolderRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestCreatePeerFolderResponse}
     */

  }, {
    key: "createPeerFolder",
    value: function createPeerFolder(peerAddress, body) {
      return this.createPeerFolderWithHttpInfo(peerAddress, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete a datasource
     * @param {String} name 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDeleteDataSourceResponse} and HTTP response
     */

  }, {
    key: "deleteDataSourceWithHttpInfo",
    value: function deleteDataSourceWithHttpInfo(name) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling deleteDataSource");
      }

      var pathParams = {
        'Name': name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestDeleteDataSourceResponse["default"];
      return this.apiClient.callApi('/config/datasource/{Name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Delete a datasource
     * @param {String} name 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDeleteDataSourceResponse}
     */

  }, {
    key: "deleteDataSource",
    value: function deleteDataSource(name) {
      return this.deleteDataSourceWithHttpInfo(name).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete an existing master key
     * @param {module:model/EncryptionAdminDeleteKeyRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EncryptionAdminDeleteKeyResponse} and HTTP response
     */

  }, {
    key: "deleteEncryptionKeyWithHttpInfo",
    value: function deleteEncryptionKeyWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling deleteEncryptionKey");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EncryptionAdminDeleteKeyResponse["default"];
      return this.apiClient.callApi('/config/encryption/delete', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Delete an existing master key
     * @param {module:model/EncryptionAdminDeleteKeyRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EncryptionAdminDeleteKeyResponse}
     */

  }, {
    key: "deleteEncryptionKey",
    value: function deleteEncryptionKey(body) {
      return this.deleteEncryptionKeyWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Publish available endpoints
     * @param {Object} opts Optional parameters
     * @param {String} opts.endpointType Filter result to a specific endpoint type.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDiscoveryResponse} and HTTP response
     */

  }, {
    key: "endpointsDiscoveryWithHttpInfo",
    value: function endpointsDiscoveryWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'EndpointType': opts['endpointType']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestDiscoveryResponse["default"];
      return this.apiClient.callApi('/config/discovery', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Publish available endpoints
     * @param {Object} opts Optional parameters
     * @param {String} opts.endpointType Filter result to a specific endpoint type.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDiscoveryResponse}
     */

  }, {
    key: "endpointsDiscovery",
    value: function endpointsDiscovery(opts) {
      return this.endpointsDiscoveryWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Export a master key for backup purpose, protected with a password
     * @param {module:model/EncryptionAdminExportKeyRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EncryptionAdminExportKeyResponse} and HTTP response
     */

  }, {
    key: "exportEncryptionKeyWithHttpInfo",
    value: function exportEncryptionKeyWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling exportEncryptionKey");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EncryptionAdminExportKeyResponse["default"];
      return this.apiClient.callApi('/config/encryption/export', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Export a master key for backup purpose, protected with a password
     * @param {module:model/EncryptionAdminExportKeyRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EncryptionAdminExportKeyResponse}
     */

  }, {
    key: "exportEncryptionKey",
    value: function exportEncryptionKey(body) {
      return this.exportEncryptionKeyWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Generic config Get using a full path in the config tree
     * @param {String} fullPath 
     * @param {Object} opts Optional parameters
     * @param {String} opts.data JSON-encoded data to store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestConfiguration} and HTTP response
     */

  }, {
    key: "getConfigWithHttpInfo",
    value: function getConfigWithHttpInfo(fullPath, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'fullPath' is set

      if (fullPath === undefined || fullPath === null) {
        throw new Error("Missing the required parameter 'fullPath' when calling getConfig");
      }

      var pathParams = {
        'FullPath': fullPath
      };
      var queryParams = {
        'Data': opts['data']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestConfiguration["default"];
      return this.apiClient.callApi('/config/{FullPath}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Generic config Get using a full path in the config tree
     * @param {String} fullPath 
     * @param {Object} opts Optional parameters
     * @param {String} opts.data JSON-encoded data to store.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestConfiguration}
     */

  }, {
    key: "getConfig",
    value: function getConfig(fullPath, opts) {
      return this.getConfigWithHttpInfo(fullPath, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Load datasource information
     * @param {String} name 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.disabled Whether this data source is disabled or running.
     * @param {module:model/String} opts.storageType Type of underlying storage (LOCAL, S3, AZURE, GCS). (default to LOCAL)
     * @param {String} opts.objectsServiceName Corresponding objects service name (underlying s3 service).
     * @param {String} opts.objectsHost Corresponding objects service host.
     * @param {Number} opts.objectsPort Corresponding objects service port.
     * @param {Boolean} opts.objectsSecure Corresponding objects service connection type.
     * @param {String} opts.objectsBucket Corresponding objects service bucket.
     * @param {String} opts.objectsBaseFolder Corresponding objects service base folder inside the bucket.
     * @param {String} opts.apiKey Corresponding objects service api key.
     * @param {String} opts.apiSecret Corresponding objects service api secret.
     * @param {String} opts.peerAddress Peer address of the data source.
     * @param {Boolean} opts.watch Not implemented, whether to watch for underlying changes on the FS.
     * @param {Boolean} opts.flatStorage Store data in flat format (object-storage like).
     * @param {Boolean} opts.skipSyncOnRestart Do not trigger resync at start.
     * @param {module:model/String} opts.encryptionMode Type of encryption applied before sending data to storage. (default to CLEAR)
     * @param {String} opts.encryptionKey Encryption key used for encrypting data.
     * @param {String} opts.versioningPolicyName Versioning policy describes how files are kept in the versioning queue.
     * @param {Number} opts.creationDate Data Source creation date.
     * @param {Number} opts.lastSynchronizationDate Data Source last synchronization date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ObjectDataSource} and HTTP response
     */

  }, {
    key: "getDataSourceWithHttpInfo",
    value: function getDataSourceWithHttpInfo(name, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getDataSource");
      }

      var pathParams = {
        'Name': name
      };
      var queryParams = {
        'Disabled': opts['disabled'],
        'StorageType': opts['storageType'],
        'ObjectsServiceName': opts['objectsServiceName'],
        'ObjectsHost': opts['objectsHost'],
        'ObjectsPort': opts['objectsPort'],
        'ObjectsSecure': opts['objectsSecure'],
        'ObjectsBucket': opts['objectsBucket'],
        'ObjectsBaseFolder': opts['objectsBaseFolder'],
        'ApiKey': opts['apiKey'],
        'ApiSecret': opts['apiSecret'],
        'PeerAddress': opts['peerAddress'],
        'Watch': opts['watch'],
        'FlatStorage': opts['flatStorage'],
        'SkipSyncOnRestart': opts['skipSyncOnRestart'],
        'EncryptionMode': opts['encryptionMode'],
        'EncryptionKey': opts['encryptionKey'],
        'VersioningPolicyName': opts['versioningPolicyName'],
        'CreationDate': opts['creationDate'],
        'LastSynchronizationDate': opts['lastSynchronizationDate']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ObjectDataSource["default"];
      return this.apiClient.callApi('/config/datasource/{Name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Load datasource information
     * @param {String} name 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.disabled Whether this data source is disabled or running.
     * @param {module:model/String} opts.storageType Type of underlying storage (LOCAL, S3, AZURE, GCS). (default to LOCAL)
     * @param {String} opts.objectsServiceName Corresponding objects service name (underlying s3 service).
     * @param {String} opts.objectsHost Corresponding objects service host.
     * @param {Number} opts.objectsPort Corresponding objects service port.
     * @param {Boolean} opts.objectsSecure Corresponding objects service connection type.
     * @param {String} opts.objectsBucket Corresponding objects service bucket.
     * @param {String} opts.objectsBaseFolder Corresponding objects service base folder inside the bucket.
     * @param {String} opts.apiKey Corresponding objects service api key.
     * @param {String} opts.apiSecret Corresponding objects service api secret.
     * @param {String} opts.peerAddress Peer address of the data source.
     * @param {Boolean} opts.watch Not implemented, whether to watch for underlying changes on the FS.
     * @param {Boolean} opts.flatStorage Store data in flat format (object-storage like).
     * @param {Boolean} opts.skipSyncOnRestart Do not trigger resync at start.
     * @param {module:model/String} opts.encryptionMode Type of encryption applied before sending data to storage. (default to CLEAR)
     * @param {String} opts.encryptionKey Encryption key used for encrypting data.
     * @param {String} opts.versioningPolicyName Versioning policy describes how files are kept in the versioning queue.
     * @param {Number} opts.creationDate Data Source creation date.
     * @param {Number} opts.lastSynchronizationDate Data Source last synchronization date.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ObjectDataSource}
     */

  }, {
    key: "getDataSource",
    value: function getDataSource(name, opts) {
      return this.getDataSourceWithHttpInfo(name, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Load a given versioning policy
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.name 
     * @param {String} opts.description 
     * @param {String} opts.versionsDataSourceName 
     * @param {String} opts.versionsDataSourceBucket 
     * @param {String} opts.maxTotalSize 
     * @param {String} opts.maxSizePerFile 
     * @param {String} opts.ignoreFilesGreaterThan 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TreeVersioningPolicy} and HTTP response
     */

  }, {
    key: "getVersioningPolicyWithHttpInfo",
    value: function getVersioningPolicyWithHttpInfo(uuid, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'uuid' is set

      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getVersioningPolicy");
      }

      var pathParams = {
        'Uuid': uuid
      };
      var queryParams = {
        'Name': opts['name'],
        'Description': opts['description'],
        'VersionsDataSourceName': opts['versionsDataSourceName'],
        'VersionsDataSourceBucket': opts['versionsDataSourceBucket'],
        'MaxTotalSize': opts['maxTotalSize'],
        'MaxSizePerFile': opts['maxSizePerFile'],
        'IgnoreFilesGreaterThan': opts['ignoreFilesGreaterThan']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _TreeVersioningPolicy["default"];
      return this.apiClient.callApi('/config/versioning/{Uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Load a given versioning policy
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.name 
     * @param {String} opts.description 
     * @param {String} opts.versionsDataSourceName 
     * @param {String} opts.versionsDataSourceBucket 
     * @param {String} opts.maxTotalSize 
     * @param {String} opts.maxSizePerFile 
     * @param {String} opts.ignoreFilesGreaterThan 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TreeVersioningPolicy}
     */

  }, {
    key: "getVersioningPolicy",
    value: function getVersioningPolicy(uuid, opts) {
      return this.getVersioningPolicyWithHttpInfo(uuid, opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Import a previously exported master key, requires the password created at export time
     * @param {module:model/EncryptionAdminImportKeyRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EncryptionAdminImportKeyResponse} and HTTP response
     */

  }, {
    key: "importEncryptionKeyWithHttpInfo",
    value: function importEncryptionKeyWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling importEncryptionKey");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EncryptionAdminImportKeyResponse["default"];
      return this.apiClient.callApi('/config/encryption/import', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Import a previously exported master key, requires the password created at export time
     * @param {module:model/EncryptionAdminImportKeyRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EncryptionAdminImportKeyResponse}
     */

  }, {
    key: "importEncryptionKey",
    value: function importEncryptionKey(body) {
      return this.importEncryptionKeyWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all defined datasources
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestDataSourceCollection} and HTTP response
     */

  }, {
    key: "listDataSourcesWithHttpInfo",
    value: function listDataSourcesWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestDataSourceCollection["default"];
      return this.apiClient.callApi('/config/datasource', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * List all defined datasources
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestDataSourceCollection}
     */

  }, {
    key: "listDataSources",
    value: function listDataSources() {
      return this.listDataSourcesWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List registered master keys
     * @param {module:model/EncryptionAdminListKeysRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EncryptionAdminListKeysResponse} and HTTP response
     */

  }, {
    key: "listEncryptionKeysWithHttpInfo",
    value: function listEncryptionKeysWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling listEncryptionKeys");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _EncryptionAdminListKeysResponse["default"];
      return this.apiClient.callApi('/config/encryption/list', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * List registered master keys
     * @param {module:model/EncryptionAdminListKeysRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EncryptionAdminListKeysResponse}
     */

  }, {
    key: "listEncryptionKeys",
    value: function listEncryptionKeys(body) {
      return this.listEncryptionKeysWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List folders on a peer, starting from root
     * @param {String} peerAddress 
     * @param {module:model/RestListPeerFoldersRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestNodesCollection} and HTTP response
     */

  }, {
    key: "listPeerFoldersWithHttpInfo",
    value: function listPeerFoldersWithHttpInfo(peerAddress, body) {
      var postBody = body; // verify the required parameter 'peerAddress' is set

      if (peerAddress === undefined || peerAddress === null) {
        throw new Error("Missing the required parameter 'peerAddress' when calling listPeerFolders");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling listPeerFolders");
      }

      var pathParams = {
        'PeerAddress': peerAddress
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestNodesCollection["default"];
      return this.apiClient.callApi('/config/peers/{PeerAddress}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * List folders on a peer, starting from root
     * @param {String} peerAddress 
     * @param {module:model/RestListPeerFoldersRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestNodesCollection}
     */

  }, {
    key: "listPeerFolders",
    value: function listPeerFolders(peerAddress, body) {
      return this.listPeerFoldersWithHttpInfo(peerAddress, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all detected peers (servers on which the app is running)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestListPeersAddressesResponse} and HTTP response
     */

  }, {
    key: "listPeersAddressesWithHttpInfo",
    value: function listPeersAddressesWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestListPeersAddressesResponse["default"];
      return this.apiClient.callApi('/config/peers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * List all detected peers (servers on which the app is running)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestListPeersAddressesResponse}
     */

  }, {
    key: "listPeersAddresses",
    value: function listPeersAddresses() {
      return this.listPeersAddressesWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List running Processes, with option PeerId or ServiceName filter
     * @param {module:model/RestListProcessesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestListProcessesResponse} and HTTP response
     */

  }, {
    key: "listProcessesWithHttpInfo",
    value: function listProcessesWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling listProcesses");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestListProcessesResponse["default"];
      return this.apiClient.callApi('/config/processes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * List running Processes, with option PeerId or ServiceName filter
     * @param {module:model/RestListProcessesRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestListProcessesResponse}
     */

  }, {
    key: "listProcesses",
    value: function listProcesses(body) {
      return this.listProcessesWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all services and their status
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.statusFilter Filter services by a given status (ANY, STOPPED, STOPPING, RUNNING). (default to ANY)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestServiceCollection} and HTTP response
     */

  }, {
    key: "listServicesWithHttpInfo",
    value: function listServicesWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'StatusFilter': opts['statusFilter']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestServiceCollection["default"];
      return this.apiClient.callApi('/config/ctl', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * List all services and their status
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.statusFilter Filter services by a given status (ANY, STOPPED, STOPPING, RUNNING). (default to ANY)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestServiceCollection}
     */

  }, {
    key: "listServices",
    value: function listServices(opts) {
      return this.listServicesWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List configured sites
     * @param {String} filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestListSitesResponse} and HTTP response
     */

  }, {
    key: "listSitesWithHttpInfo",
    value: function listSitesWithHttpInfo(filter) {
      var postBody = null; // verify the required parameter 'filter' is set

      if (filter === undefined || filter === null) {
        throw new Error("Missing the required parameter 'filter' when calling listSites");
      }

      var pathParams = {
        'Filter': filter
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestListSitesResponse["default"];
      return this.apiClient.callApi('/config/sites/{Filter}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * List configured sites
     * @param {String} filter 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestListSitesResponse}
     */

  }, {
    key: "listSites",
    value: function listSites(filter) {
      return this.listSitesWithHttpInfo(filter).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List Buckets on a given object storage
     * @param {module:model/RestListStorageBucketsRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestNodesCollection} and HTTP response
     */

  }, {
    key: "listStorageBucketsWithHttpInfo",
    value: function listStorageBucketsWithHttpInfo(body) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling listStorageBuckets");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestNodesCollection["default"];
      return this.apiClient.callApi('/config/buckets', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * List Buckets on a given object storage
     * @param {module:model/RestListStorageBucketsRequest} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestNodesCollection}
     */

  }, {
    key: "listStorageBuckets",
    value: function listStorageBuckets(body) {
      return this.listStorageBucketsWithHttpInfo(body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all defined versioning policies
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestVersioningPolicyCollection} and HTTP response
     */

  }, {
    key: "listVersioningPoliciesWithHttpInfo",
    value: function listVersioningPoliciesWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestVersioningPolicyCollection["default"];
      return this.apiClient.callApi('/config/versioning', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * List all defined versioning policies
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestVersioningPolicyCollection}
     */

  }, {
    key: "listVersioningPolicies",
    value: function listVersioningPolicies() {
      return this.listVersioningPoliciesWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * List all defined virtual nodes
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestNodesCollection} and HTTP response
     */

  }, {
    key: "listVirtualNodesWithHttpInfo",
    value: function listVirtualNodesWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestNodesCollection["default"];
      return this.apiClient.callApi('/config/virtualnodes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * List all defined virtual nodes
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestNodesCollection}
     */

  }, {
    key: "listVirtualNodes",
    value: function listVirtualNodes() {
      return this.listVirtualNodesWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Publish available REST APIs
     * @param {Object} opts Optional parameters
     * @param {String} opts.endpointType Filter result to a specific endpoint type.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestOpenApiResponse} and HTTP response
     */

  }, {
    key: "openApiDiscoveryWithHttpInfo",
    value: function openApiDiscoveryWithHttpInfo(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'EndpointType': opts['endpointType']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestOpenApiResponse["default"];
      return this.apiClient.callApi('/config/discovery/openapi', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Publish available REST APIs
     * @param {Object} opts Optional parameters
     * @param {String} opts.endpointType Filter result to a specific endpoint type.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestOpenApiResponse}
     */

  }, {
    key: "openApiDiscovery",
    value: function openApiDiscovery(opts) {
      return this.openApiDiscoveryWithHttpInfo(opts).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Generic config Put, using a full path in the config tree
     * @param {String} fullPath 
     * @param {module:model/RestConfiguration} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestConfiguration} and HTTP response
     */

  }, {
    key: "putConfigWithHttpInfo",
    value: function putConfigWithHttpInfo(fullPath, body) {
      var postBody = body; // verify the required parameter 'fullPath' is set

      if (fullPath === undefined || fullPath === null) {
        throw new Error("Missing the required parameter 'fullPath' when calling putConfig");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putConfig");
      }

      var pathParams = {
        'FullPath': fullPath
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestConfiguration["default"];
      return this.apiClient.callApi('/config/{FullPath}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Generic config Put, using a full path in the config tree
     * @param {String} fullPath 
     * @param {module:model/RestConfiguration} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestConfiguration}
     */

  }, {
    key: "putConfig",
    value: function putConfig(fullPath, body) {
      return this.putConfigWithHttpInfo(fullPath, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create or update a datasource
     * @param {String} name 
     * @param {module:model/ObjectDataSource} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ObjectDataSource} and HTTP response
     */

  }, {
    key: "putDataSourceWithHttpInfo",
    value: function putDataSourceWithHttpInfo(name, body) {
      var postBody = body; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling putDataSource");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling putDataSource");
      }

      var pathParams = {
        'Name': name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ObjectDataSource["default"];
      return this.apiClient.callApi('/config/datasource/{Name}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Create or update a datasource
     * @param {String} name 
     * @param {module:model/ObjectDataSource} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ObjectDataSource}
     */

  }, {
    key: "putDataSource",
    value: function putDataSource(name, body) {
      return this.putDataSourceWithHttpInfo(name, body).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Publish scheduler action XML form for building screens in frontend
     * @param {String} actionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestSchedulerActionFormResponse} and HTTP response
     */

  }, {
    key: "schedulerActionFormDiscoveryWithHttpInfo",
    value: function schedulerActionFormDiscoveryWithHttpInfo(actionName) {
      var postBody = null; // verify the required parameter 'actionName' is set

      if (actionName === undefined || actionName === null) {
        throw new Error("Missing the required parameter 'actionName' when calling schedulerActionFormDiscovery");
      }

      var pathParams = {
        'ActionName': actionName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestSchedulerActionFormResponse["default"];
      return this.apiClient.callApi('/config/scheduler/actions/{ActionName}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Publish scheduler action XML form for building screens in frontend
     * @param {String} actionName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestSchedulerActionFormResponse}
     */

  }, {
    key: "schedulerActionFormDiscovery",
    value: function schedulerActionFormDiscovery(actionName) {
      return this.schedulerActionFormDiscoveryWithHttpInfo(actionName).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Publish scheduler registered actions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RestSchedulerActionsResponse} and HTTP response
     */

  }, {
    key: "schedulerActionsDiscoveryWithHttpInfo",
    value: function schedulerActionsDiscoveryWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _RestSchedulerActionsResponse["default"];
      return this.apiClient.callApi('/config/scheduler/actions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    /**
     * Publish scheduler registered actions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RestSchedulerActionsResponse}
     */

  }, {
    key: "schedulerActionsDiscovery",
    value: function schedulerActionsDiscovery() {
      return this.schedulerActionsDiscoveryWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ConfigServiceApi;
}();

exports["default"] = ConfigServiceApi;
//# sourceMappingURL=ConfigServiceApi.js.map
