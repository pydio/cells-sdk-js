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
* Enum class RegistryActionType.
* @enum {}
* @readonly
*/
export default class RegistryActionType {
    
        /**
         * value: "ANY"
         * @const
         */
        "ANY" = "ANY";

    
        /**
         * value: "FULL_DIFF"
         * @const
         */
        "FULL_DIFF" = "FULL_DIFF";

    
        /**
         * value: "FULL_LIST"
         * @const
         */
        "FULL_LIST" = "FULL_LIST";

    
        /**
         * value: "CREATE"
         * @const
         */
        "CREATE" = "CREATE";

    
        /**
         * value: "UPDATE"
         * @const
         */
        "UPDATE" = "UPDATE";

    
        /**
         * value: "DELETE"
         * @const
         */
        "DELETE" = "DELETE";

    

    /**
    * Returns a <code>RegistryActionType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/RegistryActionType} The enum <code>RegistryActionType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
