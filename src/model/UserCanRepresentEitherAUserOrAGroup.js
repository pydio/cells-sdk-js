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
 * The UserCanRepresentEitherAUserOrAGroup model module.
 * @module model/UserCanRepresentEitherAUserOrAGroup
 * @version 4.0
 */
class UserCanRepresentEitherAUserOrAGroup {
    /**
     * Constructs a new <code>UserCanRepresentEitherAUserOrAGroup</code>.
     * @alias module:model/UserCanRepresentEitherAUserOrAGroup
     */
    constructor() { 
        
        UserCanRepresentEitherAUserOrAGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserCanRepresentEitherAUserOrAGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserCanRepresentEitherAUserOrAGroup} obj Optional instance to populate.
     * @return {module:model/UserCanRepresentEitherAUserOrAGroup} The populated <code>UserCanRepresentEitherAUserOrAGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserCanRepresentEitherAUserOrAGroup();

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
UserCanRepresentEitherAUserOrAGroup.prototype['Attributes'] = undefined;

/**
 * @member {String} GroupLabel
 */
UserCanRepresentEitherAUserOrAGroup.prototype['GroupLabel'] = undefined;

/**
 * @member {String} GroupPath
 */
UserCanRepresentEitherAUserOrAGroup.prototype['GroupPath'] = undefined;

/**
 * @member {Boolean} IsGroup
 */
UserCanRepresentEitherAUserOrAGroup.prototype['IsGroup'] = undefined;

/**
 * @member {Number} LastConnected
 */
UserCanRepresentEitherAUserOrAGroup.prototype['LastConnected'] = undefined;

/**
 * @member {String} OldPassword
 */
UserCanRepresentEitherAUserOrAGroup.prototype['OldPassword'] = undefined;

/**
 * @member {String} Password
 */
UserCanRepresentEitherAUserOrAGroup.prototype['Password'] = undefined;

/**
 * @member {Array.<module:model/ServiceResourcePolicy>} Policies
 */
UserCanRepresentEitherAUserOrAGroup.prototype['Policies'] = undefined;

/**
 * Context-resolved to quickly check if user is editable or not.
 * @member {Boolean} PoliciesContextEditable
 */
UserCanRepresentEitherAUserOrAGroup.prototype['PoliciesContextEditable'] = undefined;

/**
 * @member {Array.<module:model/IdmRole>} Roles
 */
UserCanRepresentEitherAUserOrAGroup.prototype['Roles'] = undefined;

/**
 * @member {String} Uuid
 */
UserCanRepresentEitherAUserOrAGroup.prototype['Uuid'] = undefined;






export default UserCanRepresentEitherAUserOrAGroup;

