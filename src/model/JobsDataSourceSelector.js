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
import JobsDataSourceSelectorType from './JobsDataSourceSelectorType';
import ServiceQuery from './ServiceQuery';

/**
 * The JobsDataSourceSelector model module.
 * @module model/JobsDataSourceSelector
 * @version 4.0
 */
class JobsDataSourceSelector {
    /**
     * Constructs a new <code>JobsDataSourceSelector</code>.
     * @alias module:model/JobsDataSourceSelector
     */
    constructor() { 
        
        JobsDataSourceSelector.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobsDataSourceSelector</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsDataSourceSelector} obj Optional instance to populate.
     * @return {module:model/JobsDataSourceSelector} The populated <code>JobsDataSourceSelector</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobsDataSourceSelector();

            if (data.hasOwnProperty('All')) {
                obj['All'] = ApiClient.convertToType(data['All'], 'Boolean');
            }
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
            if (data.hasOwnProperty('Type')) {
                obj['Type'] = JobsDataSourceSelectorType.constructFromObject(data['Type']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} All
 */
JobsDataSourceSelector.prototype['All'] = undefined;

/**
 * @member {Boolean} ClearInput
 */
JobsDataSourceSelector.prototype['ClearInput'] = undefined;

/**
 * @member {Boolean} Collect
 */
JobsDataSourceSelector.prototype['Collect'] = undefined;

/**
 * @member {String} Description
 */
JobsDataSourceSelector.prototype['Description'] = undefined;

/**
 * @member {Boolean} FanOutInput
 */
JobsDataSourceSelector.prototype['FanOutInput'] = undefined;

/**
 * @member {String} Label
 */
JobsDataSourceSelector.prototype['Label'] = undefined;

/**
 * @member {module:model/ServiceQuery} Query
 */
JobsDataSourceSelector.prototype['Query'] = undefined;

/**
 * @member {String} Timeout
 */
JobsDataSourceSelector.prototype['Timeout'] = undefined;

/**
 * @member {module:model/JobsDataSourceSelectorType} Type
 */
JobsDataSourceSelector.prototype['Type'] = undefined;






export default JobsDataSourceSelector;

