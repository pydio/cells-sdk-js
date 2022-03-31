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
 * The RestFrontPluginsResponse model module.
 * @module model/RestFrontPluginsResponse
 * @version 4.0
 */
class RestFrontPluginsResponse {
    /**
     * Constructs a new <code>RestFrontPluginsResponse</code>.
     * @alias module:model/RestFrontPluginsResponse
     */
    constructor() { 
        
        RestFrontPluginsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestFrontPluginsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestFrontPluginsResponse} obj Optional instance to populate.
     * @return {module:model/RestFrontPluginsResponse} The populated <code>RestFrontPluginsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestFrontPluginsResponse();

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
RestFrontPluginsResponse.prototype['Data'] = undefined;






export default RestFrontPluginsResponse;

