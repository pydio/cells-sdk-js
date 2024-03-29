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
import RestActionDescription from './RestActionDescription';

/**
 * The RestSchedulerActionsResponse model module.
 * @module model/RestSchedulerActionsResponse
 * @version 4.0
 */
class RestSchedulerActionsResponse {
    /**
     * Constructs a new <code>RestSchedulerActionsResponse</code>.
     * @alias module:model/RestSchedulerActionsResponse
     */
    constructor() { 
        
        RestSchedulerActionsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestSchedulerActionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestSchedulerActionsResponse} obj Optional instance to populate.
     * @return {module:model/RestSchedulerActionsResponse} The populated <code>RestSchedulerActionsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestSchedulerActionsResponse();

            if (data.hasOwnProperty('Actions')) {
                obj['Actions'] = ApiClient.convertToType(data['Actions'], {'String': RestActionDescription});
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, module:model/RestActionDescription>} Actions
 */
RestSchedulerActionsResponse.prototype['Actions'] = undefined;






export default RestSchedulerActionsResponse;

