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
import ActivityObject from './ActivityObject';
import IdmACL from './IdmACL';
import IdmRole from './IdmRole';
import IdmUser from './IdmUser';
import IdmWorkspace from './IdmWorkspace';
import JobsActionOutput from './JobsActionOutput';
import ObjectDataSource from './ObjectDataSource';
import ProtobufAny from './ProtobufAny';
import TreeNode from './TreeNode';

/**
 * The JobsActionMessage model module.
 * @module model/JobsActionMessage
 * @version 4.0
 */
class JobsActionMessage {
    /**
     * Constructs a new <code>JobsActionMessage</code>.
     * @alias module:model/JobsActionMessage
     */
    constructor() { 
        
        JobsActionMessage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobsActionMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsActionMessage} obj Optional instance to populate.
     * @return {module:model/JobsActionMessage} The populated <code>JobsActionMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobsActionMessage();

            if (data.hasOwnProperty('Acls')) {
                obj['Acls'] = ApiClient.convertToType(data['Acls'], [IdmACL]);
            }
            if (data.hasOwnProperty('Activities')) {
                obj['Activities'] = ApiClient.convertToType(data['Activities'], [ActivityObject]);
            }
            if (data.hasOwnProperty('DataSources')) {
                obj['DataSources'] = ApiClient.convertToType(data['DataSources'], [ObjectDataSource]);
            }
            if (data.hasOwnProperty('Event')) {
                obj['Event'] = ProtobufAny.constructFromObject(data['Event']);
            }
            if (data.hasOwnProperty('Nodes')) {
                obj['Nodes'] = ApiClient.convertToType(data['Nodes'], [TreeNode]);
            }
            if (data.hasOwnProperty('OutputChain')) {
                obj['OutputChain'] = ApiClient.convertToType(data['OutputChain'], [JobsActionOutput]);
            }
            if (data.hasOwnProperty('Roles')) {
                obj['Roles'] = ApiClient.convertToType(data['Roles'], [IdmRole]);
            }
            if (data.hasOwnProperty('Users')) {
                obj['Users'] = ApiClient.convertToType(data['Users'], [IdmUser]);
            }
            if (data.hasOwnProperty('Workspaces')) {
                obj['Workspaces'] = ApiClient.convertToType(data['Workspaces'], [IdmWorkspace]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/IdmACL>} Acls
 */
JobsActionMessage.prototype['Acls'] = undefined;

/**
 * @member {Array.<module:model/ActivityObject>} Activities
 */
JobsActionMessage.prototype['Activities'] = undefined;

/**
 * @member {Array.<module:model/ObjectDataSource>} DataSources
 */
JobsActionMessage.prototype['DataSources'] = undefined;

/**
 * @member {module:model/ProtobufAny} Event
 */
JobsActionMessage.prototype['Event'] = undefined;

/**
 * @member {Array.<module:model/TreeNode>} Nodes
 */
JobsActionMessage.prototype['Nodes'] = undefined;

/**
 * @member {Array.<module:model/JobsActionOutput>} OutputChain
 */
JobsActionMessage.prototype['OutputChain'] = undefined;

/**
 * @member {Array.<module:model/IdmRole>} Roles
 */
JobsActionMessage.prototype['Roles'] = undefined;

/**
 * @member {Array.<module:model/IdmUser>} Users
 */
JobsActionMessage.prototype['Users'] = undefined;

/**
 * @member {Array.<module:model/IdmWorkspace>} Workspaces
 */
JobsActionMessage.prototype['Workspaces'] = undefined;






export default JobsActionMessage;

