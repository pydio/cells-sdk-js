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
 * The JobsDataSelector model module.
 * @module model/JobsDataSelector
 * @version 4.0
 */
class JobsDataSelector {
    /**
     * Constructs a new <code>JobsDataSelector</code>.
     * @alias module:model/JobsDataSelector
     */
    constructor() { 
        
        JobsDataSelector.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobsDataSelector</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsDataSelector} obj Optional instance to populate.
     * @return {module:model/JobsDataSelector} The populated <code>JobsDataSelector</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobsDataSelector();

            if (data.hasOwnProperty('ClearInput')) {
                obj['ClearInput'] = ApiClient.convertToType(data['ClearInput'], 'Boolean');
            }
            if (data.hasOwnProperty('Collect')) {
                obj['Collect'] = ApiClient.convertToType(data['Collect'], 'Boolean');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('FanOutInput')) {
                obj['FanOutInput'] = ApiClient.convertToType(data['FanOutInput'], 'Boolean');
            }
            if (data.hasOwnProperty('Label')) {
                obj['Label'] = ApiClient.convertToType(data['Label'], 'String');
            }
            if (data.hasOwnProperty('Query')) {
                obj['Query'] = ServiceQuery.constructFromObject(data['Query']);
            }
            if (data.hasOwnProperty('Timeout')) {
                obj['Timeout'] = ApiClient.convertToType(data['Timeout'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} ClearInput
 */
JobsDataSelector.prototype['ClearInput'] = undefined;

/**
 * @member {Boolean} Collect
 */
JobsDataSelector.prototype['Collect'] = undefined;

/**
 * @member {String} Description
 */
JobsDataSelector.prototype['Description'] = undefined;

/**
 * @member {Boolean} FanOutInput
 */
JobsDataSelector.prototype['FanOutInput'] = undefined;

/**
 * @member {String} Label
 */
JobsDataSelector.prototype['Label'] = undefined;

/**
 * @member {module:model/ServiceQuery} Query
 */
JobsDataSelector.prototype['Query'] = undefined;

/**
 * @member {String} Timeout
 */
JobsDataSelector.prototype['Timeout'] = undefined;






export default JobsDataSelector;

