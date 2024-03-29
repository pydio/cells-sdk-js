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
 * The RestFrontSessionRequest model module.
 * @module model/RestFrontSessionRequest
 * @version 4.0
 */
class RestFrontSessionRequest {
    /**
     * Constructs a new <code>RestFrontSessionRequest</code>.
     * @alias module:model/RestFrontSessionRequest
     */
    constructor() { 
        
        RestFrontSessionRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestFrontSessionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestFrontSessionRequest} obj Optional instance to populate.
     * @return {module:model/RestFrontSessionRequest} The populated <code>RestFrontSessionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestFrontSessionRequest();

            if (data.hasOwnProperty('AuthInfo')) {
                obj['AuthInfo'] = ApiClient.convertToType(data['AuthInfo'], {'String': 'String'});
            }
            if (data.hasOwnProperty('ClientTime')) {
                obj['ClientTime'] = ApiClient.convertToType(data['ClientTime'], 'Number');
            }
            if (data.hasOwnProperty('Logout')) {
                obj['Logout'] = ApiClient.convertToType(data['Logout'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, String>} AuthInfo
 */
RestFrontSessionRequest.prototype['AuthInfo'] = undefined;

/**
 * @member {Number} ClientTime
 */
RestFrontSessionRequest.prototype['ClientTime'] = undefined;

/**
 * @member {Boolean} Logout
 */
RestFrontSessionRequest.prototype['Logout'] = undefined;






export default RestFrontSessionRequest;

