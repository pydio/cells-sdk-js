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
import IdmACLAction from './IdmACLAction';
import IdmRole from './IdmRole';
import IdmUser from './IdmUser';

/**
 * The RestCellAcl model module.
 * @module model/RestCellAcl
 * @version 4.0
 */
class RestCellAcl {
    /**
     * Constructs a new <code>RestCellAcl</code>.
     * @alias module:model/RestCellAcl
     */
    constructor() { 
        
        RestCellAcl.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestCellAcl</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestCellAcl} obj Optional instance to populate.
     * @return {module:model/RestCellAcl} The populated <code>RestCellAcl</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestCellAcl();

            if (data.hasOwnProperty('Actions')) {
                obj['Actions'] = ApiClient.convertToType(data['Actions'], [IdmACLAction]);
            }
            if (data.hasOwnProperty('Group')) {
                obj['Group'] = IdmUser.constructFromObject(data['Group']);
            }
            if (data.hasOwnProperty('IsUserRole')) {
                obj['IsUserRole'] = ApiClient.convertToType(data['IsUserRole'], 'Boolean');
            }
            if (data.hasOwnProperty('Role')) {
                obj['Role'] = IdmRole.constructFromObject(data['Role']);
            }
            if (data.hasOwnProperty('RoleId')) {
                obj['RoleId'] = ApiClient.convertToType(data['RoleId'], 'String');
            }
            if (data.hasOwnProperty('User')) {
                obj['User'] = IdmUser.constructFromObject(data['User']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/IdmACLAction>} Actions
 */
RestCellAcl.prototype['Actions'] = undefined;

/**
 * @member {module:model/IdmUser} Group
 */
RestCellAcl.prototype['Group'] = undefined;

/**
 * @member {Boolean} IsUserRole
 */
RestCellAcl.prototype['IsUserRole'] = undefined;

/**
 * @member {module:model/IdmRole} Role
 */
RestCellAcl.prototype['Role'] = undefined;

/**
 * @member {String} RoleId
 */
RestCellAcl.prototype['RoleId'] = undefined;

/**
 * @member {module:model/IdmUser} User
 */
RestCellAcl.prototype['User'] = undefined;






export default RestCellAcl;

