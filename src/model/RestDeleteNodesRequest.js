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
import TreeNode from './TreeNode';

/**
 * The RestDeleteNodesRequest model module.
 * @module model/RestDeleteNodesRequest
 * @version 4.0
 */
class RestDeleteNodesRequest {
    /**
     * Constructs a new <code>RestDeleteNodesRequest</code>.
     * @alias module:model/RestDeleteNodesRequest
     */
    constructor() { 
        
        RestDeleteNodesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestDeleteNodesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestDeleteNodesRequest} obj Optional instance to populate.
     * @return {module:model/RestDeleteNodesRequest} The populated <code>RestDeleteNodesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestDeleteNodesRequest();

            if (data.hasOwnProperty('Nodes')) {
                obj['Nodes'] = ApiClient.convertToType(data['Nodes'], [TreeNode]);
            }
            if (data.hasOwnProperty('Recursive')) {
                obj['Recursive'] = ApiClient.convertToType(data['Recursive'], 'Boolean');
            }
            if (data.hasOwnProperty('RemovePermanently')) {
                obj['RemovePermanently'] = ApiClient.convertToType(data['RemovePermanently'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/TreeNode>} Nodes
 */
RestDeleteNodesRequest.prototype['Nodes'] = undefined;

/**
 * @member {Boolean} Recursive
 */
RestDeleteNodesRequest.prototype['Recursive'] = undefined;

/**
 * @member {Boolean} RemovePermanently
 */
RestDeleteNodesRequest.prototype['RemovePermanently'] = undefined;






export default RestDeleteNodesRequest;

