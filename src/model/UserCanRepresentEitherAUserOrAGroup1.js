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
import IdmRole from './IdmRole';
import ServiceResourcePolicy from './ServiceResourcePolicy';

/**
 * The UserCanRepresentEitherAUserOrAGroup1 model module.
 * @module model/UserCanRepresentEitherAUserOrAGroup1
 * @version 4.0
 */
class UserCanRepresentEitherAUserOrAGroup1 {
    /**
     * Constructs a new <code>UserCanRepresentEitherAUserOrAGroup1</code>.
     * @alias module:model/UserCanRepresentEitherAUserOrAGroup1
     */
    constructor() { 
        
        UserCanRepresentEitherAUserOrAGroup1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserCanRepresentEitherAUserOrAGroup1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserCanRepresentEitherAUserOrAGroup1} obj Optional instance to populate.
     * @return {module:model/UserCanRepresentEitherAUserOrAGroup1} The populated <code>UserCanRepresentEitherAUserOrAGroup1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserCanRepresentEitherAUserOrAGroup1();

            if (data.hasOwnProperty('Attributes')) {
                obj['Attributes'] = ApiClient.convertToType(data['Attributes'], {'String': 'String'});
            }
            if (data.hasOwnProperty('GroupLabel')) {
                obj['GroupLabel'] = ApiClient.convertToType(data['GroupLabel'], 'String');
            }
            if (data.hasOwnProperty('GroupPath')) {
                obj['GroupPath'] = ApiClient.convertToType(data['GroupPath'], 'String');
            }
            if (data.hasOwnProperty('IsGroup')) {
                obj['IsGroup'] = ApiClient.convertToType(data['IsGroup'], 'Boolean');
            }
            if (data.hasOwnProperty('LastConnected')) {
                obj['LastConnected'] = ApiClient.convertToType(data['LastConnected'], 'Number');
            }
            if (data.hasOwnProperty('OldPassword')) {
                obj['OldPassword'] = ApiClient.convertToType(data['OldPassword'], 'String');
            }
            if (data.hasOwnProperty('Password')) {
                obj['Password'] = ApiClient.convertToType(data['Password'], 'String');
            }
            if (data.hasOwnProperty('Policies')) {
                obj['Policies'] = ApiClient.convertToType(data['Policies'], [ServiceResourcePolicy]);
            }
            if (data.hasOwnProperty('PoliciesContextEditable')) {
                obj['PoliciesContextEditable'] = ApiClient.convertToType(data['PoliciesContextEditable'], 'Boolean');
            }
            if (data.hasOwnProperty('Roles')) {
                obj['Roles'] = ApiClient.convertToType(data['Roles'], [IdmRole]);
            }
            if (data.hasOwnProperty('Uuid')) {
                obj['Uuid'] = ApiClient.convertToType(data['Uuid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, String>} Attributes
 */
UserCanRepresentEitherAUserOrAGroup1.prototype['Attributes'] = undefined;

/**
 * @member {String} GroupLabel
 */
UserCanRepresentEitherAUserOrAGroup1.prototype['GroupLabel'] = undefined;

/**
 * @member {String} GroupPath
 */
UserCanRepresentEitherAUserOrAGroup1.prototype['GroupPath'] = undefined;

/**
 * @member {Boolean} IsGroup
 */
UserCanRepresentEitherAUserOrAGroup1.prototype['IsGroup'] = undefined;

/**
 * @member {Number} LastConnected
 */
UserCanRepresentEitherAUserOrAGroup1.prototype['LastConnected'] = undefined;

/**
 * @member {String} OldPassword
 */
UserCanRepresentEitherAUserOrAGroup1.prototype['OldPassword'] = undefined;

/**
 * @member {String} Password
 */
UserCanRepresentEitherAUserOrAGroup1.prototype['Password'] = undefined;

/**
 * @member {Array.<module:model/ServiceResourcePolicy>} Policies
 */
UserCanRepresentEitherAUserOrAGroup1.prototype['Policies'] = undefined;

/**
 * Context-resolved to quickly check if user is editable or not.
 * @member {Boolean} PoliciesContextEditable
 */
UserCanRepresentEitherAUserOrAGroup1.prototype['PoliciesContextEditable'] = undefined;

/**
 * @member {Array.<module:model/IdmRole>} Roles
 */
UserCanRepresentEitherAUserOrAGroup1.prototype['Roles'] = undefined;

/**
 * @member {String} Uuid
 */
UserCanRepresentEitherAUserOrAGroup1.prototype['Uuid'] = undefined;






export default UserCanRepresentEitherAUserOrAGroup1;

