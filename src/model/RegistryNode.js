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
 * The RegistryNode model module.
 * @module model/RegistryNode
 * @version 4.0
 */
class RegistryNode {
    /**
     * Constructs a new <code>RegistryNode</code>.
     * @alias module:model/RegistryNode
     */
    constructor() { 
        
        RegistryNode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RegistryNode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegistryNode} obj Optional instance to populate.
     * @return {module:model/RegistryNode} The populated <code>RegistryNode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegistryNode();

            if (data.hasOwnProperty('advertiseIp')) {
                obj['advertiseIp'] = ApiClient.convertToType(data['advertiseIp'], 'String');
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('ips')) {
                obj['ips'] = ApiClient.convertToType(data['ips'], ['String']);
            }
            if (data.hasOwnProperty('machine')) {
                obj['machine'] = ApiClient.convertToType(data['machine'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} advertiseIp
 */
RegistryNode.prototype['advertiseIp'] = undefined;

/**
 * @member {String} hostname
 */
RegistryNode.prototype['hostname'] = undefined;

/**
 * @member {Array.<String>} ips
 */
RegistryNode.prototype['ips'] = undefined;

/**
 * @member {String} machine
 */
RegistryNode.prototype['machine'] = undefined;






export default RegistryNode;
