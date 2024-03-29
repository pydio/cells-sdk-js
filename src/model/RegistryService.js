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
import RegistryOptions from './RegistryOptions';

/**
 * The RegistryService model module.
 * @module model/RegistryService
 * @version 4.0
 */
class RegistryService {
    /**
     * Constructs a new <code>RegistryService</code>.
     * @alias module:model/RegistryService
     */
    constructor() { 
        
        RegistryService.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RegistryService</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegistryService} obj Optional instance to populate.
     * @return {module:model/RegistryService} The populated <code>RegistryService</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegistryService();

            if (data.hasOwnProperty('options')) {
                obj['options'] = RegistryOptions.constructFromObject(data['options']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RegistryOptions} options
 */
RegistryService.prototype['options'] = undefined;

/**
 * @member {Array.<String>} tags
 */
RegistryService.prototype['tags'] = undefined;

/**
 * @member {String} version
 */
RegistryService.prototype['version'] = undefined;






export default RegistryService;

