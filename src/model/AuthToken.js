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
 * The AuthToken model module.
 * @module model/AuthToken
 * @version 4.0
 */
class AuthToken {
    /**
     * Constructs a new <code>AuthToken</code>.
     * @alias module:model/AuthToken
     */
    constructor() { 
        
        AuthToken.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthToken} obj Optional instance to populate.
     * @return {module:model/AuthToken} The populated <code>AuthToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthToken();

            if (data.hasOwnProperty('AccessToken')) {
                obj['AccessToken'] = ApiClient.convertToType(data['AccessToken'], 'String');
            }
            if (data.hasOwnProperty('ExpiresAt')) {
                obj['ExpiresAt'] = ApiClient.convertToType(data['ExpiresAt'], 'String');
            }
            if (data.hasOwnProperty('IDToken')) {
                obj['IDToken'] = ApiClient.convertToType(data['IDToken'], 'String');
            }
            if (data.hasOwnProperty('RefreshToken')) {
                obj['RefreshToken'] = ApiClient.convertToType(data['RefreshToken'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} AccessToken
 */
AuthToken.prototype['AccessToken'] = undefined;

/**
 * @member {String} ExpiresAt
 */
AuthToken.prototype['ExpiresAt'] = undefined;

/**
 * @member {String} IDToken
 */
AuthToken.prototype['IDToken'] = undefined;

/**
 * @member {String} RefreshToken
 */
AuthToken.prototype['RefreshToken'] = undefined;






export default AuthToken;

