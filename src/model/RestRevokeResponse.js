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
 * The RestRevokeResponse model module.
 * @module model/RestRevokeResponse
 * @version 4.0
 */
class RestRevokeResponse {
    /**
     * Constructs a new <code>RestRevokeResponse</code>.
     * @alias module:model/RestRevokeResponse
     */
    constructor() { 
        
        RestRevokeResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestRevokeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestRevokeResponse} obj Optional instance to populate.
     * @return {module:model/RestRevokeResponse} The populated <code>RestRevokeResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestRevokeResponse();

            if (data.hasOwnProperty('Message')) {
                obj['Message'] = ApiClient.convertToType(data['Message'], 'String');
            }
            if (data.hasOwnProperty('Success')) {
                obj['Success'] = ApiClient.convertToType(data['Success'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Message
 */
RestRevokeResponse.prototype['Message'] = undefined;

/**
 * @member {Boolean} Success
 */
RestRevokeResponse.prototype['Success'] = undefined;






export default RestRevokeResponse;

