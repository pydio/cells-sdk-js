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
 * The JobsJobParameter model module.
 * @module model/JobsJobParameter
 * @version 4.0
 */
class JobsJobParameter {
    /**
     * Constructs a new <code>JobsJobParameter</code>.
     * @alias module:model/JobsJobParameter
     */
    constructor() { 
        
        JobsJobParameter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobsJobParameter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsJobParameter} obj Optional instance to populate.
     * @return {module:model/JobsJobParameter} The populated <code>JobsJobParameter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobsJobParameter();

            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('JsonChoices')) {
                obj['JsonChoices'] = ApiClient.convertToType(data['JsonChoices'], 'String');
            }
            if (data.hasOwnProperty('Mandatory')) {
                obj['Mandatory'] = ApiClient.convertToType(data['Mandatory'], 'Boolean');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Type')) {
                obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
            }
            if (data.hasOwnProperty('Value')) {
                obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Description
 */
JobsJobParameter.prototype['Description'] = undefined;

/**
 * @member {String} JsonChoices
 */
JobsJobParameter.prototype['JsonChoices'] = undefined;

/**
 * @member {Boolean} Mandatory
 */
JobsJobParameter.prototype['Mandatory'] = undefined;

/**
 * @member {String} Name
 */
JobsJobParameter.prototype['Name'] = undefined;

/**
 * @member {String} Type
 */
JobsJobParameter.prototype['Type'] = undefined;

/**
 * @member {String} Value
 */
JobsJobParameter.prototype['Value'] = undefined;






export default JobsJobParameter;

