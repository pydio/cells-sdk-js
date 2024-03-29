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
import IdmWorkspace from './IdmWorkspace';

/**
 * The RestUserStateResponse model module.
 * @module model/RestUserStateResponse
 * @version 4.0
 */
class RestUserStateResponse {
    /**
     * Constructs a new <code>RestUserStateResponse</code>.
     * @alias module:model/RestUserStateResponse
     */
    constructor() { 
        
        RestUserStateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestUserStateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestUserStateResponse} obj Optional instance to populate.
     * @return {module:model/RestUserStateResponse} The populated <code>RestUserStateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestUserStateResponse();

            if (data.hasOwnProperty('Workspaces')) {
                obj['Workspaces'] = ApiClient.convertToType(data['Workspaces'], [IdmWorkspace]);
            }
            if (data.hasOwnProperty('WorkspacesAccesses')) {
                obj['WorkspacesAccesses'] = ApiClient.convertToType(data['WorkspacesAccesses'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/IdmWorkspace>} Workspaces
 */
RestUserStateResponse.prototype['Workspaces'] = undefined;

/**
 * @member {Object.<String, String>} WorkspacesAccesses
 */
RestUserStateResponse.prototype['WorkspacesAccesses'] = undefined;






export default RestUserStateResponse;

