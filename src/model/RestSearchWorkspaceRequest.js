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
import IdmWorkspaceSingleQuery from './IdmWorkspaceSingleQuery';
import RestResourcePolicyQuery from './RestResourcePolicyQuery';
import ServiceOperationType from './ServiceOperationType';

/**
 * The RestSearchWorkspaceRequest model module.
 * @module model/RestSearchWorkspaceRequest
 * @version 4.0
 */
class RestSearchWorkspaceRequest {
    /**
     * Constructs a new <code>RestSearchWorkspaceRequest</code>.
     * @alias module:model/RestSearchWorkspaceRequest
     */
    constructor() { 
        
        RestSearchWorkspaceRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestSearchWorkspaceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestSearchWorkspaceRequest} obj Optional instance to populate.
     * @return {module:model/RestSearchWorkspaceRequest} The populated <code>RestSearchWorkspaceRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestSearchWorkspaceRequest();

            if (data.hasOwnProperty('CountOnly')) {
                obj['CountOnly'] = ApiClient.convertToType(data['CountOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('GroupBy')) {
                obj['GroupBy'] = ApiClient.convertToType(data['GroupBy'], 'Number');
            }
            if (data.hasOwnProperty('Limit')) {
                obj['Limit'] = ApiClient.convertToType(data['Limit'], 'String');
            }
            if (data.hasOwnProperty('Offset')) {
                obj['Offset'] = ApiClient.convertToType(data['Offset'], 'String');
            }
            if (data.hasOwnProperty('Operation')) {
                obj['Operation'] = ServiceOperationType.constructFromObject(data['Operation']);
            }
            if (data.hasOwnProperty('Queries')) {
                obj['Queries'] = ApiClient.convertToType(data['Queries'], [IdmWorkspaceSingleQuery]);
            }
            if (data.hasOwnProperty('ResourcePolicyQuery')) {
                obj['ResourcePolicyQuery'] = RestResourcePolicyQuery.constructFromObject(data['ResourcePolicyQuery']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} CountOnly
 */
RestSearchWorkspaceRequest.prototype['CountOnly'] = undefined;

/**
 * @member {Number} GroupBy
 */
RestSearchWorkspaceRequest.prototype['GroupBy'] = undefined;

/**
 * @member {String} Limit
 */
RestSearchWorkspaceRequest.prototype['Limit'] = undefined;

/**
 * @member {String} Offset
 */
RestSearchWorkspaceRequest.prototype['Offset'] = undefined;

/**
 * @member {module:model/ServiceOperationType} Operation
 */
RestSearchWorkspaceRequest.prototype['Operation'] = undefined;

/**
 * @member {Array.<module:model/IdmWorkspaceSingleQuery>} Queries
 */
RestSearchWorkspaceRequest.prototype['Queries'] = undefined;

/**
 * @member {module:model/RestResourcePolicyQuery} ResourcePolicyQuery
 */
RestSearchWorkspaceRequest.prototype['ResourcePolicyQuery'] = undefined;






export default RestSearchWorkspaceRequest;

