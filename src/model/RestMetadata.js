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
 * The RestMetadata model module.
 * @module model/RestMetadata
 * @version 4.0
 */
class RestMetadata {
    /**
     * Constructs a new <code>RestMetadata</code>.
     * @alias module:model/RestMetadata
     */
    constructor() { 
        
        RestMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestMetadata} obj Optional instance to populate.
     * @return {module:model/RestMetadata} The populated <code>RestMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestMetadata();

            if (data.hasOwnProperty('JsonMeta')) {
                obj['JsonMeta'] = ApiClient.convertToType(data['JsonMeta'], 'String');
            }
            if (data.hasOwnProperty('Namespace')) {
                obj['Namespace'] = ApiClient.convertToType(data['Namespace'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} JsonMeta
 */
RestMetadata.prototype['JsonMeta'] = undefined;

/**
 * @member {String} Namespace
 */
RestMetadata.prototype['Namespace'] = undefined;






export default RestMetadata;

