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
import ActivityOwnerType from './ActivityOwnerType';

/**
 * The ActivitySearchSubscriptionsRequest model module.
 * @module model/ActivitySearchSubscriptionsRequest
 * @version 4.0
 */
class ActivitySearchSubscriptionsRequest {
    /**
     * Constructs a new <code>ActivitySearchSubscriptionsRequest</code>.
     * @alias module:model/ActivitySearchSubscriptionsRequest
     */
    constructor() { 
        
        ActivitySearchSubscriptionsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActivitySearchSubscriptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActivitySearchSubscriptionsRequest} obj Optional instance to populate.
     * @return {module:model/ActivitySearchSubscriptionsRequest} The populated <code>ActivitySearchSubscriptionsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivitySearchSubscriptionsRequest();

            if (data.hasOwnProperty('ObjectIds')) {
                obj['ObjectIds'] = ApiClient.convertToType(data['ObjectIds'], ['String']);
            }
            if (data.hasOwnProperty('ObjectTypes')) {
                obj['ObjectTypes'] = ApiClient.convertToType(data['ObjectTypes'], [ActivityOwnerType]);
            }
            if (data.hasOwnProperty('UserIds')) {
                obj['UserIds'] = ApiClient.convertToType(data['UserIds'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} ObjectIds
 */
ActivitySearchSubscriptionsRequest.prototype['ObjectIds'] = undefined;

/**
 * @member {Array.<module:model/ActivityOwnerType>} ObjectTypes
 */
ActivitySearchSubscriptionsRequest.prototype['ObjectTypes'] = undefined;

/**
 * @member {Array.<String>} UserIds
 */
ActivitySearchSubscriptionsRequest.prototype['UserIds'] = undefined;






export default ActivitySearchSubscriptionsRequest;

