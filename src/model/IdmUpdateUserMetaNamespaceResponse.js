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
import IdmUserMetaNamespace from './IdmUserMetaNamespace';

/**
 * The IdmUpdateUserMetaNamespaceResponse model module.
 * @module model/IdmUpdateUserMetaNamespaceResponse
 * @version 4.0
 */
class IdmUpdateUserMetaNamespaceResponse {
    /**
     * Constructs a new <code>IdmUpdateUserMetaNamespaceResponse</code>.
     * @alias module:model/IdmUpdateUserMetaNamespaceResponse
     */
    constructor() { 
        
        IdmUpdateUserMetaNamespaceResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IdmUpdateUserMetaNamespaceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdmUpdateUserMetaNamespaceResponse} obj Optional instance to populate.
     * @return {module:model/IdmUpdateUserMetaNamespaceResponse} The populated <code>IdmUpdateUserMetaNamespaceResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdmUpdateUserMetaNamespaceResponse();

            if (data.hasOwnProperty('Namespaces')) {
                obj['Namespaces'] = ApiClient.convertToType(data['Namespaces'], [IdmUserMetaNamespace]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/IdmUserMetaNamespace>} Namespaces
 */
IdmUpdateUserMetaNamespaceResponse.prototype['Namespaces'] = undefined;






export default IdmUpdateUserMetaNamespaceResponse;

