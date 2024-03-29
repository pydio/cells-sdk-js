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
import CtlPeer from './CtlPeer';
import CtlServiceStatus from './CtlServiceStatus';

/**
 * The CtlService model module.
 * @module model/CtlService
 * @version 4.0
 */
class CtlService {
    /**
     * Constructs a new <code>CtlService</code>.
     * @alias module:model/CtlService
     */
    constructor() { 
        
        CtlService.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CtlService</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CtlService} obj Optional instance to populate.
     * @return {module:model/CtlService} The populated <code>CtlService</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CtlService();

            if (data.hasOwnProperty('Controllable')) {
                obj['Controllable'] = ApiClient.convertToType(data['Controllable'], 'Boolean');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('Metadata')) {
                obj['Metadata'] = ApiClient.convertToType(data['Metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('RunningPeers')) {
                obj['RunningPeers'] = ApiClient.convertToType(data['RunningPeers'], [CtlPeer]);
            }
            if (data.hasOwnProperty('Status')) {
                obj['Status'] = CtlServiceStatus.constructFromObject(data['Status']);
            }
            if (data.hasOwnProperty('Tag')) {
                obj['Tag'] = ApiClient.convertToType(data['Tag'], 'String');
            }
            if (data.hasOwnProperty('Version')) {
                obj['Version'] = ApiClient.convertToType(data['Version'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} Controllable
 */
CtlService.prototype['Controllable'] = undefined;

/**
 * @member {String} Description
 */
CtlService.prototype['Description'] = undefined;

/**
 * @member {Object.<String, String>} Metadata
 */
CtlService.prototype['Metadata'] = undefined;

/**
 * @member {String} Name
 */
CtlService.prototype['Name'] = undefined;

/**
 * @member {Array.<module:model/CtlPeer>} RunningPeers
 */
CtlService.prototype['RunningPeers'] = undefined;

/**
 * @member {module:model/CtlServiceStatus} Status
 */
CtlService.prototype['Status'] = undefined;

/**
 * @member {String} Tag
 */
CtlService.prototype['Tag'] = undefined;

/**
 * @member {String} Version
 */
CtlService.prototype['Version'] = undefined;






export default CtlService;

