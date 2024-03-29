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
* Enum class ListLogRequestLogFormat.
* @enum {}
* @readonly
*/
export default class ListLogRequestLogFormat {
    
        /**
         * value: "JSON"
         * @const
         */
        "JSON" = "JSON";

    
        /**
         * value: "CSV"
         * @const
         */
        "CSV" = "CSV";

    
        /**
         * value: "XLSX"
         * @const
         */
        "XLSX" = "XLSX";

    

    /**
    * Returns a <code>ListLogRequestLogFormat</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ListLogRequestLogFormat} The enum <code>ListLogRequestLogFormat</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

