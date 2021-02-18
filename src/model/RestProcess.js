/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The RestProcess model module.
* @module model/RestProcess
* @version 1.0
*/
export default class RestProcess {
    /**
    * Constructs a new <code>RestProcess</code>.
    * @alias module:model/RestProcess
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>RestProcess</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestProcess} obj Optional instance to populate.
    * @return {module:model/RestProcess} The populated <code>RestProcess</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestProcess();

            
            
            

            if (data.hasOwnProperty('ID')) {
                obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
            }
            if (data.hasOwnProperty('ParentID')) {
                obj['ParentID'] = ApiClient.convertToType(data['ParentID'], 'String');
            }
            if (data.hasOwnProperty('MetricsPort')) {
                obj['MetricsPort'] = ApiClient.convertToType(data['MetricsPort'], 'Number');
            }
            if (data.hasOwnProperty('PeerId')) {
                obj['PeerId'] = ApiClient.convertToType(data['PeerId'], 'String');
            }
            if (data.hasOwnProperty('PeerAddress')) {
                obj['PeerAddress'] = ApiClient.convertToType(data['PeerAddress'], 'String');
            }
            if (data.hasOwnProperty('StartTag')) {
                obj['StartTag'] = ApiClient.convertToType(data['StartTag'], 'String');
            }
            if (data.hasOwnProperty('Services')) {
                obj['Services'] = ApiClient.convertToType(data['Services'], ['String']);
            }
        }
        return obj;
    }

    /**
    * @member {String} ID
    */
    ID = undefined;
    /**
    * @member {String} ParentID
    */
    ParentID = undefined;
    /**
    * @member {Number} MetricsPort
    */
    MetricsPort = undefined;
    /**
    * @member {String} PeerId
    */
    PeerId = undefined;
    /**
    * @member {String} PeerAddress
    */
    PeerAddress = undefined;
    /**
    * @member {String} StartTag
    */
    StartTag = undefined;
    /**
    * @member {Array.<String>} Services
    */
    Services = undefined;








}


