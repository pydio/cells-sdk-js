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

/**
 * The CtlPeer model module.
 * @module model/CtlPeer
 * @version 4.0
 */
class CtlPeer {
    /**
     * Constructs a new <code>CtlPeer</code>.
     * @alias module:model/CtlPeer
     */
    constructor() { 
        
        CtlPeer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CtlPeer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CtlPeer} obj Optional instance to populate.
     * @return {module:model/CtlPeer} The populated <code>CtlPeer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CtlPeer();

            if (data.hasOwnProperty('Address')) {
                obj['Address'] = ApiClient.convertToType(data['Address'], 'String');
            }
            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
            }
            if (data.hasOwnProperty('Metadata')) {
                obj['Metadata'] = ApiClient.convertToType(data['Metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('Port')) {
                obj['Port'] = ApiClient.convertToType(data['Port'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Address
 */
CtlPeer.prototype['Address'] = undefined;

/**
 * @member {String} Id
 */
CtlPeer.prototype['Id'] = undefined;

/**
 * @member {Object.<String, String>} Metadata
 */
CtlPeer.prototype['Metadata'] = undefined;

/**
 * @member {Number} Port
 */
CtlPeer.prototype['Port'] = undefined;






export default CtlPeer;

