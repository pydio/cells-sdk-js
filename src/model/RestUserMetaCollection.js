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
import IdmUserMeta from './IdmUserMeta';

/**
 * The RestUserMetaCollection model module.
 * @module model/RestUserMetaCollection
 * @version 4.0
 */
class RestUserMetaCollection {
    /**
     * Constructs a new <code>RestUserMetaCollection</code>.
     * @alias module:model/RestUserMetaCollection
     */
    constructor() { 
        
        RestUserMetaCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestUserMetaCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestUserMetaCollection} obj Optional instance to populate.
     * @return {module:model/RestUserMetaCollection} The populated <code>RestUserMetaCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestUserMetaCollection();

            if (data.hasOwnProperty('Metadatas')) {
                obj['Metadatas'] = ApiClient.convertToType(data['Metadatas'], [IdmUserMeta]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/IdmUserMeta>} Metadatas
 */
RestUserMetaCollection.prototype['Metadatas'] = undefined;






export default RestUserMetaCollection;

