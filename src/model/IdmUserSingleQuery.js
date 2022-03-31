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
import IdmNodeType from './IdmNodeType';

/**
 * The IdmUserSingleQuery model module.
 * @module model/IdmUserSingleQuery
 * @version 4.0
 */
class IdmUserSingleQuery {
    /**
     * Constructs a new <code>IdmUserSingleQuery</code>.
     * @alias module:model/IdmUserSingleQuery
     */
    constructor() { 
        
        IdmUserSingleQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IdmUserSingleQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdmUserSingleQuery} obj Optional instance to populate.
     * @return {module:model/IdmUserSingleQuery} The populated <code>IdmUserSingleQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdmUserSingleQuery();

            if (data.hasOwnProperty('AttributeAnyValue')) {
                obj['AttributeAnyValue'] = ApiClient.convertToType(data['AttributeAnyValue'], 'Boolean');
            }
            if (data.hasOwnProperty('AttributeName')) {
                obj['AttributeName'] = ApiClient.convertToType(data['AttributeName'], 'String');
            }
            if (data.hasOwnProperty('AttributeValue')) {
                obj['AttributeValue'] = ApiClient.convertToType(data['AttributeValue'], 'String');
            }
            if (data.hasOwnProperty('ConnectedSince')) {
                obj['ConnectedSince'] = ApiClient.convertToType(data['ConnectedSince'], 'String');
            }
            if (data.hasOwnProperty('FullPath')) {
                obj['FullPath'] = ApiClient.convertToType(data['FullPath'], 'String');
            }
            if (data.hasOwnProperty('GroupPath')) {
                obj['GroupPath'] = ApiClient.convertToType(data['GroupPath'], 'String');
            }
            if (data.hasOwnProperty('HasProfile')) {
                obj['HasProfile'] = ApiClient.convertToType(data['HasProfile'], 'String');
            }
            if (data.hasOwnProperty('HasRole')) {
                obj['HasRole'] = ApiClient.convertToType(data['HasRole'], 'String');
            }
            if (data.hasOwnProperty('Login')) {
                obj['Login'] = ApiClient.convertToType(data['Login'], 'String');
            }
            if (data.hasOwnProperty('NodeType')) {
                obj['NodeType'] = IdmNodeType.constructFromObject(data['NodeType']);
            }
            if (data.hasOwnProperty('Password')) {
                obj['Password'] = ApiClient.convertToType(data['Password'], 'String');
            }
            if (data.hasOwnProperty('Recursive')) {
                obj['Recursive'] = ApiClient.convertToType(data['Recursive'], 'Boolean');
            }
            if (data.hasOwnProperty('Uuid')) {
                obj['Uuid'] = ApiClient.convertToType(data['Uuid'], 'String');
            }
            if (data.hasOwnProperty('not')) {
                obj['not'] = ApiClient.convertToType(data['not'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} AttributeAnyValue
 */
IdmUserSingleQuery.prototype['AttributeAnyValue'] = undefined;

/**
 * @member {String} AttributeName
 */
IdmUserSingleQuery.prototype['AttributeName'] = undefined;

/**
 * @member {String} AttributeValue
 */
IdmUserSingleQuery.prototype['AttributeValue'] = undefined;

/**
 * @member {String} ConnectedSince
 */
IdmUserSingleQuery.prototype['ConnectedSince'] = undefined;

/**
 * @member {String} FullPath
 */
IdmUserSingleQuery.prototype['FullPath'] = undefined;

/**
 * @member {String} GroupPath
 */
IdmUserSingleQuery.prototype['GroupPath'] = undefined;

/**
 * @member {String} HasProfile
 */
IdmUserSingleQuery.prototype['HasProfile'] = undefined;

/**
 * @member {String} HasRole
 */
IdmUserSingleQuery.prototype['HasRole'] = undefined;

/**
 * @member {String} Login
 */
IdmUserSingleQuery.prototype['Login'] = undefined;

/**
 * @member {module:model/IdmNodeType} NodeType
 */
IdmUserSingleQuery.prototype['NodeType'] = undefined;

/**
 * @member {String} Password
 */
IdmUserSingleQuery.prototype['Password'] = undefined;

/**
 * @member {Boolean} Recursive
 */
IdmUserSingleQuery.prototype['Recursive'] = undefined;

/**
 * @member {String} Uuid
 */
IdmUserSingleQuery.prototype['Uuid'] = undefined;

/**
 * @member {Boolean} not
 */
IdmUserSingleQuery.prototype['not'] = undefined;






export default IdmUserSingleQuery;

