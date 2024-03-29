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
import LogLogMessage from './LogLogMessage';

/**
 * The RestLogMessageCollection model module.
 * @module model/RestLogMessageCollection
 * @version 4.0
 */
class RestLogMessageCollection {
    /**
     * Constructs a new <code>RestLogMessageCollection</code>.
     * @alias module:model/RestLogMessageCollection
     */
    constructor() { 
        
        RestLogMessageCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestLogMessageCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestLogMessageCollection} obj Optional instance to populate.
     * @return {module:model/RestLogMessageCollection} The populated <code>RestLogMessageCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestLogMessageCollection();

            if (data.hasOwnProperty('Logs')) {
                obj['Logs'] = ApiClient.convertToType(data['Logs'], [LogLogMessage]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/LogLogMessage>} Logs
 */
RestLogMessageCollection.prototype['Logs'] = undefined;






export default RestLogMessageCollection;

