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
import InstallInstallConfig from './InstallInstallConfig';

/**
 * The InstallInstallRequest model module.
 * @module model/InstallInstallRequest
 * @version 4.0
 */
class InstallInstallRequest {
    /**
     * Constructs a new <code>InstallInstallRequest</code>.
     * @alias module:model/InstallInstallRequest
     */
    constructor() { 
        
        InstallInstallRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InstallInstallRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstallInstallRequest} obj Optional instance to populate.
     * @return {module:model/InstallInstallRequest} The populated <code>InstallInstallRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstallInstallRequest();

            if (data.hasOwnProperty('config')) {
                obj['config'] = InstallInstallConfig.constructFromObject(data['config']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InstallInstallConfig} config
 */
InstallInstallRequest.prototype['config'] = undefined;






export default InstallInstallRequest;

