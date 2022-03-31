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
import TreeQuery from './TreeQuery';

/**
 * The TreeSearchRequest model module.
 * @module model/TreeSearchRequest
 * @version 4.0
 */
class TreeSearchRequest {
    /**
     * Constructs a new <code>TreeSearchRequest</code>.
     * @alias module:model/TreeSearchRequest
     */
    constructor() { 
        
        TreeSearchRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TreeSearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TreeSearchRequest} obj Optional instance to populate.
     * @return {module:model/TreeSearchRequest} The populated <code>TreeSearchRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TreeSearchRequest();

            if (data.hasOwnProperty('Details')) {
                obj['Details'] = ApiClient.convertToType(data['Details'], 'Boolean');
            }
            if (data.hasOwnProperty('From')) {
                obj['From'] = ApiClient.convertToType(data['From'], 'Number');
            }
            if (data.hasOwnProperty('Query')) {
                obj['Query'] = TreeQuery.constructFromObject(data['Query']);
            }
            if (data.hasOwnProperty('Size')) {
                obj['Size'] = ApiClient.convertToType(data['Size'], 'Number');
            }
            if (data.hasOwnProperty('StatFlags')) {
                obj['StatFlags'] = ApiClient.convertToType(data['StatFlags'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} Details
 */
TreeSearchRequest.prototype['Details'] = undefined;

/**
 * @member {Number} From
 */
TreeSearchRequest.prototype['From'] = undefined;

/**
 * @member {module:model/TreeQuery} Query
 */
TreeSearchRequest.prototype['Query'] = undefined;

/**
 * @member {Number} Size
 */
TreeSearchRequest.prototype['Size'] = undefined;

/**
 * @member {Array.<Number>} StatFlags
 */
TreeSearchRequest.prototype['StatFlags'] = undefined;






export default TreeSearchRequest;

