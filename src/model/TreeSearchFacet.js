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
 * The TreeSearchFacet model module.
 * @module model/TreeSearchFacet
 * @version 4.0
 */
class TreeSearchFacet {
    /**
     * Constructs a new <code>TreeSearchFacet</code>.
     * @alias module:model/TreeSearchFacet
     */
    constructor() { 
        
        TreeSearchFacet.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TreeSearchFacet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TreeSearchFacet} obj Optional instance to populate.
     * @return {module:model/TreeSearchFacet} The populated <code>TreeSearchFacet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TreeSearchFacet();

            if (data.hasOwnProperty('Count')) {
                obj['Count'] = ApiClient.convertToType(data['Count'], 'Number');
            }
            if (data.hasOwnProperty('End')) {
                obj['End'] = ApiClient.convertToType(data['End'], 'Number');
            }
            if (data.hasOwnProperty('FieldName')) {
                obj['FieldName'] = ApiClient.convertToType(data['FieldName'], 'String');
            }
            if (data.hasOwnProperty('Label')) {
                obj['Label'] = ApiClient.convertToType(data['Label'], 'String');
            }
            if (data.hasOwnProperty('Max')) {
                obj['Max'] = ApiClient.convertToType(data['Max'], 'String');
            }
            if (data.hasOwnProperty('Min')) {
                obj['Min'] = ApiClient.convertToType(data['Min'], 'String');
            }
            if (data.hasOwnProperty('Start')) {
                obj['Start'] = ApiClient.convertToType(data['Start'], 'Number');
            }
            if (data.hasOwnProperty('Term')) {
                obj['Term'] = ApiClient.convertToType(data['Term'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} Count
 */
TreeSearchFacet.prototype['Count'] = undefined;

/**
 * @member {Number} End
 */
TreeSearchFacet.prototype['End'] = undefined;

/**
 * @member {String} FieldName
 */
TreeSearchFacet.prototype['FieldName'] = undefined;

/**
 * @member {String} Label
 */
TreeSearchFacet.prototype['Label'] = undefined;

/**
 * @member {String} Max
 */
TreeSearchFacet.prototype['Max'] = undefined;

/**
 * @member {String} Min
 */
TreeSearchFacet.prototype['Min'] = undefined;

/**
 * @member {Number} Start
 */
TreeSearchFacet.prototype['Start'] = undefined;

/**
 * @member {String} Term
 */
TreeSearchFacet.prototype['Term'] = undefined;






export default TreeSearchFacet;

