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

/**
 * The RestPutCellRequest model module.
 * @module model/RestPutCellRequest
 * @version 4.0
 */
class RestPutCellRequest {
    /**
     * Constructs a new <code>RestPutCellRequest</code>.
     * @alias module:model/RestPutCellRequest
     */
    constructor() { 
        
        RestPutCellRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestPutCellRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestPutCellRequest} obj Optional instance to populate.
     * @return {module:model/RestPutCellRequest} The populated <code>RestPutCellRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestPutCellRequest();

            if (data.hasOwnProperty('CreateEmptyRoot')) {
                obj['CreateEmptyRoot'] = ApiClient.convertToType(data['CreateEmptyRoot'], 'Boolean');
            }
            if (data.hasOwnProperty('Room')) {
                obj['Room'] = RestCell.constructFromObject(data['Room']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} CreateEmptyRoot
 */
RestPutCellRequest.prototype['CreateEmptyRoot'] = undefined;

/**
 * @member {module:model/RestCell} Room
 */
RestPutCellRequest.prototype['Room'] = undefined;






export default RestPutCellRequest;

