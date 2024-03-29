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
import TreeNodeType from './TreeNodeType';

/**
 * The TreeListNodesRequest model module.
 * @module model/TreeListNodesRequest
 * @version 4.0
 */
class TreeListNodesRequest {
    /**
     * Constructs a new <code>TreeListNodesRequest</code>.
     * @alias module:model/TreeListNodesRequest
     */
    constructor() { 
        
        TreeListNodesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TreeListNodesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TreeListNodesRequest} obj Optional instance to populate.
     * @return {module:model/TreeListNodesRequest} The populated <code>TreeListNodesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TreeListNodesRequest();

            if (data.hasOwnProperty('Ancestors')) {
                obj['Ancestors'] = ApiClient.convertToType(data['Ancestors'], 'Boolean');
            }
            if (data.hasOwnProperty('FilterType')) {
                obj['FilterType'] = TreeNodeType.constructFromObject(data['FilterType']);
            }
            if (data.hasOwnProperty('Limit')) {
                obj['Limit'] = ApiClient.convertToType(data['Limit'], 'String');
            }
            if (data.hasOwnProperty('Node')) {
                obj['Node'] = TreeNode.constructFromObject(data['Node']);
            }
            if (data.hasOwnProperty('Offset')) {
                obj['Offset'] = ApiClient.convertToType(data['Offset'], 'String');
            }
            if (data.hasOwnProperty('Recursive')) {
                obj['Recursive'] = ApiClient.convertToType(data['Recursive'], 'Boolean');
            }
            if (data.hasOwnProperty('SortDirDesc')) {
                obj['SortDirDesc'] = ApiClient.convertToType(data['SortDirDesc'], 'Boolean');
            }
            if (data.hasOwnProperty('SortField')) {
                obj['SortField'] = ApiClient.convertToType(data['SortField'], 'String');
            }
            if (data.hasOwnProperty('StatFlags')) {
                obj['StatFlags'] = ApiClient.convertToType(data['StatFlags'], ['Number']);
            }
            if (data.hasOwnProperty('WithCommits')) {
                obj['WithCommits'] = ApiClient.convertToType(data['WithCommits'], 'Boolean');
            }
            if (data.hasOwnProperty('WithVersions')) {
                obj['WithVersions'] = ApiClient.convertToType(data['WithVersions'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} Ancestors
 */
TreeListNodesRequest.prototype['Ancestors'] = undefined;

/**
 * @member {module:model/TreeNodeType} FilterType
 */
TreeListNodesRequest.prototype['FilterType'] = undefined;

/**
 * @member {String} Limit
 */
TreeListNodesRequest.prototype['Limit'] = undefined;

/**
 * @member {module:model/TreeNode} Node
 */
TreeListNodesRequest.prototype['Node'] = undefined;

/**
 * @member {String} Offset
 */
TreeListNodesRequest.prototype['Offset'] = undefined;

/**
 * @member {Boolean} Recursive
 */
TreeListNodesRequest.prototype['Recursive'] = undefined;

/**
 * @member {Boolean} SortDirDesc
 */
TreeListNodesRequest.prototype['SortDirDesc'] = undefined;

/**
 * @member {String} SortField
 */
TreeListNodesRequest.prototype['SortField'] = undefined;

/**
 * @member {Array.<Number>} StatFlags
 */
TreeListNodesRequest.prototype['StatFlags'] = undefined;

/**
 * @member {Boolean} WithCommits
 */
TreeListNodesRequest.prototype['WithCommits'] = undefined;

/**
 * @member {Boolean} WithVersions
 */
TreeListNodesRequest.prototype['WithVersions'] = undefined;






export default TreeListNodesRequest;

