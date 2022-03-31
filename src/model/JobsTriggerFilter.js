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
import ServiceQuery from './ServiceQuery';

/**
 * The JobsTriggerFilter model module.
 * @module model/JobsTriggerFilter
 * @version 4.0
 */
class JobsTriggerFilter {
    /**
     * Constructs a new <code>JobsTriggerFilter</code>.
     * @alias module:model/JobsTriggerFilter
     */
    constructor() { 
        
        JobsTriggerFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobsTriggerFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsTriggerFilter} obj Optional instance to populate.
     * @return {module:model/JobsTriggerFilter} The populated <code>JobsTriggerFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobsTriggerFilter();

            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('Label')) {
                obj['Label'] = ApiClient.convertToType(data['Label'], 'String');
            }
            if (data.hasOwnProperty('Query')) {
                obj['Query'] = ServiceQuery.constructFromObject(data['Query']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} Description
 */
JobsTriggerFilter.prototype['Description'] = undefined;

/**
 * @member {String} Label
 */
JobsTriggerFilter.prototype['Label'] = undefined;

/**
 * @member {module:model/ServiceQuery} Query
 */
JobsTriggerFilter.prototype['Query'] = undefined;






export default JobsTriggerFilter;

