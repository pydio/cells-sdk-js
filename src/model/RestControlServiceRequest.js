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
import CtlServiceCommand from './CtlServiceCommand';

/**
 * The RestControlServiceRequest model module.
 * @module model/RestControlServiceRequest
 * @version 4.0
 */
class RestControlServiceRequest {
    /**
     * Constructs a new <code>RestControlServiceRequest</code>.
     * @alias module:model/RestControlServiceRequest
     */
    constructor() { 
        
        RestControlServiceRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestControlServiceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestControlServiceRequest} obj Optional instance to populate.
     * @return {module:model/RestControlServiceRequest} The populated <code>RestControlServiceRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestControlServiceRequest();

            if (data.hasOwnProperty('Command')) {
                obj['Command'] = CtlServiceCommand.constructFromObject(data['Command']);
            }
            if (data.hasOwnProperty('NodeName')) {
                obj['NodeName'] = ApiClient.convertToType(data['NodeName'], 'String');
            }
            if (data.hasOwnProperty('ServiceName')) {
                obj['ServiceName'] = ApiClient.convertToType(data['ServiceName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CtlServiceCommand} Command
 */
RestControlServiceRequest.prototype['Command'] = undefined;

/**
 * @member {String} NodeName
 */
RestControlServiceRequest.prototype['NodeName'] = undefined;

/**
 * @member {String} ServiceName
 */
RestControlServiceRequest.prototype['ServiceName'] = undefined;






export default RestControlServiceRequest;

