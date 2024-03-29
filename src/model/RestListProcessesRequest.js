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
 * The RestListProcessesRequest model module.
 * @module model/RestListProcessesRequest
 * @version 4.0
 */
class RestListProcessesRequest {
    /**
     * Constructs a new <code>RestListProcessesRequest</code>.
     * @alias module:model/RestListProcessesRequest
     */
    constructor() { 
        
        RestListProcessesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestListProcessesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestListProcessesRequest} obj Optional instance to populate.
     * @return {module:model/RestListProcessesRequest} The populated <code>RestListProcessesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestListProcessesRequest();

            if (data.hasOwnProperty('PeerId')) {
                obj['PeerId'] = ApiClient.convertToType(data['PeerId'], 'String');
            }
            if (data.hasOwnProperty('ServiceName')) {
                obj['ServiceName'] = ApiClient.convertToType(data['ServiceName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} PeerId
 */
RestListProcessesRequest.prototype['PeerId'] = undefined;

/**
 * @member {String} ServiceName
 */
RestListProcessesRequest.prototype['ServiceName'] = undefined;






export default RestListProcessesRequest;

