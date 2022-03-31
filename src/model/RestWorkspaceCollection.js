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
 * The RestWorkspaceCollection model module.
 * @module model/RestWorkspaceCollection
 * @version 4.0
 */
class RestWorkspaceCollection {
    /**
     * Constructs a new <code>RestWorkspaceCollection</code>.
     * @alias module:model/RestWorkspaceCollection
     */
    constructor() { 
        
        RestWorkspaceCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestWorkspaceCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestWorkspaceCollection} obj Optional instance to populate.
     * @return {module:model/RestWorkspaceCollection} The populated <code>RestWorkspaceCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestWorkspaceCollection();

            if (data.hasOwnProperty('Total')) {
                obj['Total'] = ApiClient.convertToType(data['Total'], 'Number');
            }
            if (data.hasOwnProperty('Workspaces')) {
                obj['Workspaces'] = ApiClient.convertToType(data['Workspaces'], [IdmWorkspace]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} Total
 */
RestWorkspaceCollection.prototype['Total'] = undefined;

/**
 * @member {Array.<module:model/IdmWorkspace>} Workspaces
 */
RestWorkspaceCollection.prototype['Workspaces'] = undefined;






export default RestWorkspaceCollection;

