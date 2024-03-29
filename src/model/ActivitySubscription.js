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
 * The ActivitySubscription model module.
 * @module model/ActivitySubscription
 * @version 4.0
 */
class ActivitySubscription {
    /**
     * Constructs a new <code>ActivitySubscription</code>.
     * @alias module:model/ActivitySubscription
     */
    constructor() { 
        
        ActivitySubscription.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActivitySubscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActivitySubscription} obj Optional instance to populate.
     * @return {module:model/ActivitySubscription} The populated <code>ActivitySubscription</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivitySubscription();

            if (data.hasOwnProperty('Events')) {
                obj['Events'] = ApiClient.convertToType(data['Events'], ['String']);
            }
            if (data.hasOwnProperty('ObjectId')) {
                obj['ObjectId'] = ApiClient.convertToType(data['ObjectId'], 'String');
            }
            if (data.hasOwnProperty('ObjectType')) {
                obj['ObjectType'] = ActivityOwnerType.constructFromObject(data['ObjectType']);
            }
            if (data.hasOwnProperty('UserId')) {
                obj['UserId'] = ApiClient.convertToType(data['UserId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} Events
 */
ActivitySubscription.prototype['Events'] = undefined;

/**
 * @member {String} ObjectId
 */
ActivitySubscription.prototype['ObjectId'] = undefined;

/**
 * @member {module:model/ActivityOwnerType} ObjectType
 */
ActivitySubscription.prototype['ObjectType'] = undefined;

/**
 * @member {String} UserId
 */
ActivitySubscription.prototype['UserId'] = undefined;






export default ActivitySubscription;

