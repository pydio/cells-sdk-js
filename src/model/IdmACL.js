/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import IdmACLAction from './IdmACLAction';





/**
* The IdmACL model module.
* @module model/IdmACL
* @version 1.0
*/
export default class IdmACL {
    /**
    * Constructs a new <code>IdmACL</code>.
    * ACL are the basic flags that can be put anywhere in the tree to provide some specific rights to a given role. The context of how they apply can be fine-tuned by workspace.
    * @alias module:model/IdmACL
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>IdmACL</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/IdmACL} obj Optional instance to populate.
    * @return {module:model/IdmACL} The populated <code>IdmACL</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdmACL();

            
            
            

            if (data.hasOwnProperty('ID')) {
                obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
            }
            if (data.hasOwnProperty('Action')) {
                obj['Action'] = IdmACLAction.constructFromObject(data['Action']);
            }
            if (data.hasOwnProperty('RoleID')) {
                obj['RoleID'] = ApiClient.convertToType(data['RoleID'], 'String');
            }
            if (data.hasOwnProperty('WorkspaceID')) {
                obj['WorkspaceID'] = ApiClient.convertToType(data['WorkspaceID'], 'String');
            }
            if (data.hasOwnProperty('NodeID')) {
                obj['NodeID'] = ApiClient.convertToType(data['NodeID'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} ID
    */
    ID = undefined;
    /**
    * @member {module:model/IdmACLAction} Action
    */
    Action = undefined;
    /**
    * @member {String} RoleID
    */
    RoleID = undefined;
    /**
    * @member {String} WorkspaceID
    */
    WorkspaceID = undefined;
    /**
    * @member {String} NodeID
    */
    NodeID = undefined;








}


