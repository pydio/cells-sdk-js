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
 * The UpdateApplyUpdateResponse model module.
 * @module model/UpdateApplyUpdateResponse
 * @version 4.0
 */
class UpdateApplyUpdateResponse {
    /**
     * Constructs a new <code>UpdateApplyUpdateResponse</code>.
     * @alias module:model/UpdateApplyUpdateResponse
     */
    constructor() { 
        
        UpdateApplyUpdateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateApplyUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateApplyUpdateResponse} obj Optional instance to populate.
     * @return {module:model/UpdateApplyUpdateResponse} The populated <code>UpdateApplyUpdateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateApplyUpdateResponse();

            if (data.hasOwnProperty('Message')) {
                obj['Message'] = ApiClient.convertToType(data['Message'], 'String');
            }
            if (data.hasOwnProperty('Success')) {
                obj['Success'] = ApiClient.convertToType(data['Success'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Message
 */
UpdateApplyUpdateResponse.prototype['Message'] = undefined;

/**
 * @member {Boolean} Success
 */
UpdateApplyUpdateResponse.prototype['Success'] = undefined;






export default UpdateApplyUpdateResponse;

