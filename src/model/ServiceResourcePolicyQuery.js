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
 * The ServiceResourcePolicyQuery model module.
 * @module model/ServiceResourcePolicyQuery
 * @version 4.0
 */
class ServiceResourcePolicyQuery {
    /**
     * Constructs a new <code>ServiceResourcePolicyQuery</code>.
     * @alias module:model/ServiceResourcePolicyQuery
     */
    constructor() { 
        
        ServiceResourcePolicyQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceResourcePolicyQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceResourcePolicyQuery} obj Optional instance to populate.
     * @return {module:model/ServiceResourcePolicyQuery} The populated <code>ServiceResourcePolicyQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceResourcePolicyQuery();

            if (data.hasOwnProperty('Any')) {
                obj['Any'] = ApiClient.convertToType(data['Any'], 'Boolean');
            }
            if (data.hasOwnProperty('Empty')) {
                obj['Empty'] = ApiClient.convertToType(data['Empty'], 'Boolean');
            }
            if (data.hasOwnProperty('Subjects')) {
                obj['Subjects'] = ApiClient.convertToType(data['Subjects'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} Any
 */
ServiceResourcePolicyQuery.prototype['Any'] = undefined;

/**
 * @member {Boolean} Empty
 */
ServiceResourcePolicyQuery.prototype['Empty'] = undefined;

/**
 * @member {Array.<String>} Subjects
 */
ServiceResourcePolicyQuery.prototype['Subjects'] = undefined;






export default ServiceResourcePolicyQuery;

