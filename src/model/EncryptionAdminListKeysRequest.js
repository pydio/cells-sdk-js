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
 * The EncryptionAdminListKeysRequest model module.
 * @module model/EncryptionAdminListKeysRequest
 * @version 4.0
 */
class EncryptionAdminListKeysRequest {
    /**
     * Constructs a new <code>EncryptionAdminListKeysRequest</code>.
     * @alias module:model/EncryptionAdminListKeysRequest
     */
    constructor() { 
        
        EncryptionAdminListKeysRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EncryptionAdminListKeysRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EncryptionAdminListKeysRequest} obj Optional instance to populate.
     * @return {module:model/EncryptionAdminListKeysRequest} The populated <code>EncryptionAdminListKeysRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EncryptionAdminListKeysRequest();

            if (data.hasOwnProperty('All')) {
                obj['All'] = ApiClient.convertToType(data['All'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} All
 */
EncryptionAdminListKeysRequest.prototype['All'] = undefined;






export default EncryptionAdminListKeysRequest;

