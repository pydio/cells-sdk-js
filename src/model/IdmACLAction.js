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
 * The IdmACLAction model module.
 * @module model/IdmACLAction
 * @version 4.0
 */
class IdmACLAction {
    /**
     * Constructs a new <code>IdmACLAction</code>.
     * @alias module:model/IdmACLAction
     */
    constructor() { 
        
        IdmACLAction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IdmACLAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdmACLAction} obj Optional instance to populate.
     * @return {module:model/IdmACLAction} The populated <code>IdmACLAction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdmACLAction();

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Value')) {
                obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Name
 */
IdmACLAction.prototype['Name'] = undefined;

/**
 * @member {String} Value
 */
IdmACLAction.prototype['Value'] = undefined;






export default IdmACLAction;

