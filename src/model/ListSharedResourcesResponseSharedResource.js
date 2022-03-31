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
import RestCell from './RestCell';
import RestShareLink from './RestShareLink';
import TreeNode from './TreeNode';

/**
 * The ListSharedResourcesResponseSharedResource model module.
 * @module model/ListSharedResourcesResponseSharedResource
 * @version 4.0
 */
class ListSharedResourcesResponseSharedResource {
    /**
     * Constructs a new <code>ListSharedResourcesResponseSharedResource</code>.
     * @alias module:model/ListSharedResourcesResponseSharedResource
     */
    constructor() { 
        
        ListSharedResourcesResponseSharedResource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListSharedResourcesResponseSharedResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListSharedResourcesResponseSharedResource} obj Optional instance to populate.
     * @return {module:model/ListSharedResourcesResponseSharedResource} The populated <code>ListSharedResourcesResponseSharedResource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListSharedResourcesResponseSharedResource();

            if (data.hasOwnProperty('Cells')) {
                obj['Cells'] = ApiClient.convertToType(data['Cells'], [RestCell]);
            }
            if (data.hasOwnProperty('Link')) {
                obj['Link'] = RestShareLink.constructFromObject(data['Link']);
            }
            if (data.hasOwnProperty('Node')) {
                obj['Node'] = TreeNode.constructFromObject(data['Node']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/RestCell>} Cells
 */
ListSharedResourcesResponseSharedResource.prototype['Cells'] = undefined;

/**
 * @member {module:model/RestShareLink} Link
 */
ListSharedResourcesResponseSharedResource.prototype['Link'] = undefined;

/**
 * @member {module:model/TreeNode} Node
 */
ListSharedResourcesResponseSharedResource.prototype['Node'] = undefined;






export default ListSharedResourcesResponseSharedResource;

