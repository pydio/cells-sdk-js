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
 * The RestFrontStateResponse model module.
 * @module model/RestFrontStateResponse
 * @version 4.0
 */
class RestFrontStateResponse {
    /**
     * Constructs a new <code>RestFrontStateResponse</code>.
     * @alias module:model/RestFrontStateResponse
     */
    constructor() { 
        
        RestFrontStateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestFrontStateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestFrontStateResponse} obj Optional instance to populate.
     * @return {module:model/RestFrontStateResponse} The populated <code>RestFrontStateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestFrontStateResponse();

            if (data.hasOwnProperty('Data')) {
                obj['Data'] = ApiClient.convertToType(data['Data'], 'Blob');
            }
        }
        return obj;
    }


}

/**
 * @member {Blob} Data
 */
RestFrontStateResponse.prototype['Data'] = undefined;






export default RestFrontStateResponse;

