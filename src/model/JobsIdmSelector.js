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
import JobsIdmSelectorType from './JobsIdmSelectorType';
import ServiceQuery from './ServiceQuery';





/**
* The JobsIdmSelector model module.
* @module model/JobsIdmSelector
* @version 1.0
*/
export default class JobsIdmSelector {
    /**
    * Constructs a new <code>JobsIdmSelector</code>.
    * @alias module:model/JobsIdmSelector
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>JobsIdmSelector</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/JobsIdmSelector} obj Optional instance to populate.
    * @return {module:model/JobsIdmSelector} The populated <code>JobsIdmSelector</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobsIdmSelector();

            
            
            

            if (data.hasOwnProperty('Type')) {
                obj['Type'] = JobsIdmSelectorType.constructFromObject(data['Type']);
            }
            if (data.hasOwnProperty('All')) {
                obj['All'] = ApiClient.convertToType(data['All'], 'Boolean');
            }
            if (data.hasOwnProperty('Query')) {
                obj['Query'] = ServiceQuery.constructFromObject(data['Query']);
            }
            if (data.hasOwnProperty('Collect')) {
                obj['Collect'] = ApiClient.convertToType(data['Collect'], 'Boolean');
            }
            if (data.hasOwnProperty('Label')) {
                obj['Label'] = ApiClient.convertToType(data['Label'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/JobsIdmSelectorType} Type
    */
    Type = undefined;
    /**
    * @member {Boolean} All
    */
    All = undefined;
    /**
    * @member {module:model/ServiceQuery} Query
    */
    Query = undefined;
    /**
    * @member {Boolean} Collect
    */
    Collect = undefined;
    /**
    * @member {String} Label
    */
    Label = undefined;
    /**
    * @member {String} Description
    */
    Description = undefined;








}

