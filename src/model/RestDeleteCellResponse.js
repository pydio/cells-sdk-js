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
 * The RestDeleteCellResponse model module.
 * @module model/RestDeleteCellResponse
 * @version 4.0
 */
class RestDeleteCellResponse {
    /**
     * Constructs a new <code>RestDeleteCellResponse</code>.
     * @alias module:model/RestDeleteCellResponse
     */
    constructor() { 
        
        RestDeleteCellResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestDeleteCellResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestDeleteCellResponse} obj Optional instance to populate.
     * @return {module:model/RestDeleteCellResponse} The populated <code>RestDeleteCellResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestDeleteCellResponse();

            if (data.hasOwnProperty('Success')) {
                obj['Success'] = ApiClient.convertToType(data['Success'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} Success
 */
RestDeleteCellResponse.prototype['Success'] = undefined;






export default RestDeleteCellResponse;

