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
 * The RestListPeerFoldersRequest model module.
 * @module model/RestListPeerFoldersRequest
 * @version 4.0
 */
class RestListPeerFoldersRequest {
    /**
     * Constructs a new <code>RestListPeerFoldersRequest</code>.
     * @alias module:model/RestListPeerFoldersRequest
     */
    constructor() { 
        
        RestListPeerFoldersRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestListPeerFoldersRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestListPeerFoldersRequest} obj Optional instance to populate.
     * @return {module:model/RestListPeerFoldersRequest} The populated <code>RestListPeerFoldersRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestListPeerFoldersRequest();

            if (data.hasOwnProperty('Path')) {
                obj['Path'] = ApiClient.convertToType(data['Path'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Path
 */
RestListPeerFoldersRequest.prototype['Path'] = undefined;






export default RestListPeerFoldersRequest;

