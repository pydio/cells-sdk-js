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
 * The RestBackgroundJobResult model module.
 * @module model/RestBackgroundJobResult
 * @version 4.0
 */
class RestBackgroundJobResult {
    /**
     * Constructs a new <code>RestBackgroundJobResult</code>.
     * @alias module:model/RestBackgroundJobResult
     */
    constructor() { 
        
        RestBackgroundJobResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestBackgroundJobResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestBackgroundJobResult} obj Optional instance to populate.
     * @return {module:model/RestBackgroundJobResult} The populated <code>RestBackgroundJobResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestBackgroundJobResult();

            if (data.hasOwnProperty('Label')) {
                obj['Label'] = ApiClient.convertToType(data['Label'], 'String');
            }
            if (data.hasOwnProperty('NodeUuid')) {
                obj['NodeUuid'] = ApiClient.convertToType(data['NodeUuid'], 'String');
            }
            if (data.hasOwnProperty('Uuid')) {
                obj['Uuid'] = ApiClient.convertToType(data['Uuid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Label
 */
RestBackgroundJobResult.prototype['Label'] = undefined;

/**
 * @member {String} NodeUuid
 */
RestBackgroundJobResult.prototype['NodeUuid'] = undefined;

/**
 * @member {String} Uuid
 */
RestBackgroundJobResult.prototype['Uuid'] = undefined;






export default RestBackgroundJobResult;

