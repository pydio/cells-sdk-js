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
 * The RestSettingsEntryMeta model module.
 * @module model/RestSettingsEntryMeta
 * @version 4.0
 */
class RestSettingsEntryMeta {
    /**
     * Constructs a new <code>RestSettingsEntryMeta</code>.
     * @alias module:model/RestSettingsEntryMeta
     */
    constructor() { 
        
        RestSettingsEntryMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestSettingsEntryMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestSettingsEntryMeta} obj Optional instance to populate.
     * @return {module:model/RestSettingsEntryMeta} The populated <code>RestSettingsEntryMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestSettingsEntryMeta();

            if (data.hasOwnProperty('advanced')) {
                obj['advanced'] = ApiClient.convertToType(data['advanced'], 'Boolean');
            }
            if (data.hasOwnProperty('component')) {
                obj['component'] = ApiClient.convertToType(data['component'], 'String');
            }
            if (data.hasOwnProperty('icon_class')) {
                obj['icon_class'] = ApiClient.convertToType(data['icon_class'], 'String');
            }
            if (data.hasOwnProperty('indexed')) {
                obj['indexed'] = ApiClient.convertToType(data['indexed'], ['String']);
            }
            if (data.hasOwnProperty('props')) {
                obj['props'] = ApiClient.convertToType(data['props'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} advanced
 */
RestSettingsEntryMeta.prototype['advanced'] = undefined;

/**
 * @member {String} component
 */
RestSettingsEntryMeta.prototype['component'] = undefined;

/**
 * @member {String} icon_class
 */
RestSettingsEntryMeta.prototype['icon_class'] = undefined;

/**
 * @member {Array.<String>} indexed
 */
RestSettingsEntryMeta.prototype['indexed'] = undefined;

/**
 * @member {String} props
 */
RestSettingsEntryMeta.prototype['props'] = undefined;






export default RestSettingsEntryMeta;

