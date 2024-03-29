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
import InstallProxyConfig from './InstallProxyConfig';

/**
 * The RestListSitesResponse model module.
 * @module model/RestListSitesResponse
 * @version 4.0
 */
class RestListSitesResponse {
    /**
     * Constructs a new <code>RestListSitesResponse</code>.
     * @alias module:model/RestListSitesResponse
     */
    constructor() { 
        
        RestListSitesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestListSitesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestListSitesResponse} obj Optional instance to populate.
     * @return {module:model/RestListSitesResponse} The populated <code>RestListSitesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestListSitesResponse();

            if (data.hasOwnProperty('Sites')) {
                obj['Sites'] = ApiClient.convertToType(data['Sites'], [InstallProxyConfig]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/InstallProxyConfig>} Sites
 */
RestListSitesResponse.prototype['Sites'] = undefined;






export default RestListSitesResponse;

