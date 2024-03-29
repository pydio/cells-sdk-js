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
 * The RestError model module.
 * @module model/RestError
 * @version 4.0
 */
class RestError {
    /**
     * Constructs a new <code>RestError</code>.
     * @alias module:model/RestError
     */
    constructor() { 
        
        RestError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestError} obj Optional instance to populate.
     * @return {module:model/RestError} The populated <code>RestError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestError();

            if (data.hasOwnProperty('Code')) {
                obj['Code'] = ApiClient.convertToType(data['Code'], 'String');
            }
            if (data.hasOwnProperty('Detail')) {
                obj['Detail'] = ApiClient.convertToType(data['Detail'], 'String');
            }
            if (data.hasOwnProperty('Meta')) {
                obj['Meta'] = ApiClient.convertToType(data['Meta'], {'String': 'String'});
            }
            if (data.hasOwnProperty('Source')) {
                obj['Source'] = ApiClient.convertToType(data['Source'], 'String');
            }
            if (data.hasOwnProperty('Title')) {
                obj['Title'] = ApiClient.convertToType(data['Title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Code
 */
RestError.prototype['Code'] = undefined;

/**
 * @member {String} Detail
 */
RestError.prototype['Detail'] = undefined;

/**
 * @member {Object.<String, String>} Meta
 */
RestError.prototype['Meta'] = undefined;

/**
 * @member {String} Source
 */
RestError.prototype['Source'] = undefined;

/**
 * @member {String} Title
 */
RestError.prototype['Title'] = undefined;






export default RestError;

