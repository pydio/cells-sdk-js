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

import ApiClient from '../ApiClient';

/**
 * The RestGetBulkMetaRequest model module.
 * @module model/RestGetBulkMetaRequest
 * @version 4.0
 */
class RestGetBulkMetaRequest {
    /**
     * Constructs a new <code>RestGetBulkMetaRequest</code>.
     * @alias module:model/RestGetBulkMetaRequest
     */
    constructor() { 
        
        RestGetBulkMetaRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestGetBulkMetaRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestGetBulkMetaRequest} obj Optional instance to populate.
     * @return {module:model/RestGetBulkMetaRequest} The populated <code>RestGetBulkMetaRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestGetBulkMetaRequest();

            if (data.hasOwnProperty('AllMetaProviders')) {
                obj['AllMetaProviders'] = ApiClient.convertToType(data['AllMetaProviders'], 'Boolean');
            }
            if (data.hasOwnProperty('Filters')) {
                obj['Filters'] = ApiClient.convertToType(data['Filters'], {'String': 'String'});
            }
            if (data.hasOwnProperty('Limit')) {
                obj['Limit'] = ApiClient.convertToType(data['Limit'], 'Number');
            }
            if (data.hasOwnProperty('NodePaths')) {
                obj['NodePaths'] = ApiClient.convertToType(data['NodePaths'], ['String']);
            }
            if (data.hasOwnProperty('Offset')) {
                obj['Offset'] = ApiClient.convertToType(data['Offset'], 'Number');
            }
            if (data.hasOwnProperty('SortDirDesc')) {
                obj['SortDirDesc'] = ApiClient.convertToType(data['SortDirDesc'], 'Boolean');
            }
            if (data.hasOwnProperty('SortField')) {
                obj['SortField'] = ApiClient.convertToType(data['SortField'], 'String');
            }
            if (data.hasOwnProperty('Versions')) {
                obj['Versions'] = ApiClient.convertToType(data['Versions'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} AllMetaProviders
 */
RestGetBulkMetaRequest.prototype['AllMetaProviders'] = undefined;

/**
 * @member {Object.<String, String>} Filters
 */
RestGetBulkMetaRequest.prototype['Filters'] = undefined;

/**
 * @member {Number} Limit
 */
RestGetBulkMetaRequest.prototype['Limit'] = undefined;

/**
 * @member {Array.<String>} NodePaths
 */
RestGetBulkMetaRequest.prototype['NodePaths'] = undefined;

/**
 * @member {Number} Offset
 */
RestGetBulkMetaRequest.prototype['Offset'] = undefined;

/**
 * @member {Boolean} SortDirDesc
 */
RestGetBulkMetaRequest.prototype['SortDirDesc'] = undefined;

/**
 * @member {String} SortField
 */
RestGetBulkMetaRequest.prototype['SortField'] = undefined;

/**
 * @member {Boolean} Versions
 */
RestGetBulkMetaRequest.prototype['Versions'] = undefined;






export default RestGetBulkMetaRequest;

