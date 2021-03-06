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
* The RestActionDescription model module.
* @module model/RestActionDescription
* @version 1.0
*/
export default class RestActionDescription {
    /**
    * Constructs a new <code>RestActionDescription</code>.
    * @alias module:model/RestActionDescription
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>RestActionDescription</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestActionDescription} obj Optional instance to populate.
    * @return {module:model/RestActionDescription} The populated <code>RestActionDescription</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestActionDescription();

            
            
            

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Icon')) {
                obj['Icon'] = ApiClient.convertToType(data['Icon'], 'String');
            }
            if (data.hasOwnProperty('Label')) {
                obj['Label'] = ApiClient.convertToType(data['Label'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('SummaryTemplate')) {
                obj['SummaryTemplate'] = ApiClient.convertToType(data['SummaryTemplate'], 'String');
            }
            if (data.hasOwnProperty('HasForm')) {
                obj['HasForm'] = ApiClient.convertToType(data['HasForm'], 'Boolean');
            }
            if (data.hasOwnProperty('FormModule')) {
                obj['FormModule'] = ApiClient.convertToType(data['FormModule'], 'String');
            }
            if (data.hasOwnProperty('FormModuleProps')) {
                obj['FormModuleProps'] = ApiClient.convertToType(data['FormModuleProps'], 'String');
            }
            if (data.hasOwnProperty('Category')) {
                obj['Category'] = ApiClient.convertToType(data['Category'], 'String');
            }
            if (data.hasOwnProperty('Tint')) {
                obj['Tint'] = ApiClient.convertToType(data['Tint'], 'String');
            }
            if (data.hasOwnProperty('InputDescription')) {
                obj['InputDescription'] = ApiClient.convertToType(data['InputDescription'], 'String');
            }
            if (data.hasOwnProperty('OutputDescription')) {
                obj['OutputDescription'] = ApiClient.convertToType(data['OutputDescription'], 'String');
            }
            if (data.hasOwnProperty('IsInternal')) {
                obj['IsInternal'] = ApiClient.convertToType(data['IsInternal'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {String} Name
    */
    Name = undefined;
    /**
    * @member {String} Icon
    */
    Icon = undefined;
    /**
    * @member {String} Label
    */
    Label = undefined;
    /**
    * @member {String} Description
    */
    Description = undefined;
    /**
    * @member {String} SummaryTemplate
    */
    SummaryTemplate = undefined;
    /**
    * @member {Boolean} HasForm
    */
    HasForm = undefined;
    /**
    * @member {String} FormModule
    */
    FormModule = undefined;
    /**
    * @member {String} FormModuleProps
    */
    FormModuleProps = undefined;
    /**
    * @member {String} Category
    */
    Category = undefined;
    /**
    * @member {String} Tint
    */
    Tint = undefined;
    /**
    * @member {String} InputDescription
    */
    InputDescription = undefined;
    /**
    * @member {String} OutputDescription
    */
    OutputDescription = undefined;
    /**
    * If action is declared internal, it is hidden to avoid polluting the list.
    * @member {Boolean} IsInternal
    */
    IsInternal = undefined;








}


