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
import TreeNode from './TreeNode';
import TreeNodeChangeEvent from './TreeNodeChangeEvent';





/**
* The TreeChangeLog model module.
* @module model/TreeChangeLog
* @version 1.0
*/
export default class TreeChangeLog {
    /**
    * Constructs a new <code>TreeChangeLog</code>.
    * @alias module:model/TreeChangeLog
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>TreeChangeLog</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TreeChangeLog} obj Optional instance to populate.
    * @return {module:model/TreeChangeLog} The populated <code>TreeChangeLog</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TreeChangeLog();

            
            
            

            if (data.hasOwnProperty('Uuid')) {
                obj['Uuid'] = ApiClient.convertToType(data['Uuid'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('MTime')) {
                obj['MTime'] = ApiClient.convertToType(data['MTime'], 'String');
            }
            if (data.hasOwnProperty('Size')) {
                obj['Size'] = ApiClient.convertToType(data['Size'], 'String');
            }
            if (data.hasOwnProperty('Data')) {
                obj['Data'] = ApiClient.convertToType(data['Data'], 'Blob');
            }
            if (data.hasOwnProperty('OwnerUuid')) {
                obj['OwnerUuid'] = ApiClient.convertToType(data['OwnerUuid'], 'String');
            }
            if (data.hasOwnProperty('Event')) {
                obj['Event'] = TreeNodeChangeEvent.constructFromObject(data['Event']);
            }
            if (data.hasOwnProperty('Location')) {
                obj['Location'] = TreeNode.constructFromObject(data['Location']);
            }
        }
        return obj;
    }

    /**
    * @member {String} Uuid
    */
    Uuid = undefined;
    /**
    * @member {String} Description
    */
    Description = undefined;
    /**
    * @member {String} MTime
    */
    MTime = undefined;
    /**
    * @member {String} Size
    */
    Size = undefined;
    /**
    * @member {Blob} Data
    */
    Data = undefined;
    /**
    * @member {String} OwnerUuid
    */
    OwnerUuid = undefined;
    /**
    * @member {module:model/TreeNodeChangeEvent} Event
    */
    Event = undefined;
    /**
    * @member {module:model/TreeNode} Location
    */
    Location = undefined;








}


