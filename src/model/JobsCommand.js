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
* Enum class JobsCommand.
* @enum {}
* @readonly
*/
export default class JobsCommand {
    
        /**
         * value: "None"
         * @const
         */
        "None" = "None";

    
        /**
         * value: "Pause"
         * @const
         */
        "Pause" = "Pause";

    
        /**
         * value: "Resume"
         * @const
         */
        "Resume" = "Resume";

    
        /**
         * value: "Stop"
         * @const
         */
        "Stop" = "Stop";

    
        /**
         * value: "Delete"
         * @const
         */
        "Delete" = "Delete";

    
        /**
         * value: "RunOnce"
         * @const
         */
        "RunOnce" = "RunOnce";

    
        /**
         * value: "Inactive"
         * @const
         */
        "Inactive" = "Inactive";

    
        /**
         * value: "Active"
         * @const
         */
        "Active" = "Active";

    

    /**
    * Returns a <code>JobsCommand</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/JobsCommand} The enum <code>JobsCommand</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

