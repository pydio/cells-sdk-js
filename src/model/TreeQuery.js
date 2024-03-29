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
import TreeGeoQuery from './TreeGeoQuery';
import TreeNodeType from './TreeNodeType';

/**
 * The TreeQuery model module.
 * @module model/TreeQuery
 * @version 4.0
 */
class TreeQuery {
    /**
     * Constructs a new <code>TreeQuery</code>.
     * @alias module:model/TreeQuery
     */
    constructor() { 
        
        TreeQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TreeQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TreeQuery} obj Optional instance to populate.
     * @return {module:model/TreeQuery} The populated <code>TreeQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TreeQuery();

            if (data.hasOwnProperty('Content')) {
                obj['Content'] = ApiClient.convertToType(data['Content'], 'String');
            }
            if (data.hasOwnProperty('DurationDate')) {
                obj['DurationDate'] = ApiClient.convertToType(data['DurationDate'], 'String');
            }
            if (data.hasOwnProperty('ETag')) {
                obj['ETag'] = ApiClient.convertToType(data['ETag'], 'String');
            }
            if (data.hasOwnProperty('Extension')) {
                obj['Extension'] = ApiClient.convertToType(data['Extension'], 'String');
            }
            if (data.hasOwnProperty('FileName')) {
                obj['FileName'] = ApiClient.convertToType(data['FileName'], 'String');
            }
            if (data.hasOwnProperty('FileNameOrContent')) {
                obj['FileNameOrContent'] = ApiClient.convertToType(data['FileNameOrContent'], 'String');
            }
            if (data.hasOwnProperty('FreeString')) {
                obj['FreeString'] = ApiClient.convertToType(data['FreeString'], 'String');
            }
            if (data.hasOwnProperty('GeoQuery')) {
                obj['GeoQuery'] = TreeGeoQuery.constructFromObject(data['GeoQuery']);
            }
            if (data.hasOwnProperty('MaxDate')) {
                obj['MaxDate'] = ApiClient.convertToType(data['MaxDate'], 'String');
            }
            if (data.hasOwnProperty('MaxSize')) {
                obj['MaxSize'] = ApiClient.convertToType(data['MaxSize'], 'String');
            }
            if (data.hasOwnProperty('MinDate')) {
                obj['MinDate'] = ApiClient.convertToType(data['MinDate'], 'String');
            }
            if (data.hasOwnProperty('MinSize')) {
                obj['MinSize'] = ApiClient.convertToType(data['MinSize'], 'String');
            }
            if (data.hasOwnProperty('Not')) {
                obj['Not'] = ApiClient.convertToType(data['Not'], 'Boolean');
            }
            if (data.hasOwnProperty('PathDepth')) {
                obj['PathDepth'] = ApiClient.convertToType(data['PathDepth'], 'Number');
            }
            if (data.hasOwnProperty('PathPrefix')) {
                obj['PathPrefix'] = ApiClient.convertToType(data['PathPrefix'], ['String']);
            }
            if (data.hasOwnProperty('Paths')) {
                obj['Paths'] = ApiClient.convertToType(data['Paths'], ['String']);
            }
            if (data.hasOwnProperty('Type')) {
                obj['Type'] = TreeNodeType.constructFromObject(data['Type']);
            }
            if (data.hasOwnProperty('UUIDs')) {
                obj['UUIDs'] = ApiClient.convertToType(data['UUIDs'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} Content
 */
TreeQuery.prototype['Content'] = undefined;

/**
 * @member {String} DurationDate
 */
TreeQuery.prototype['DurationDate'] = undefined;

/**
 * @member {String} ETag
 */
TreeQuery.prototype['ETag'] = undefined;

/**
 * @member {String} Extension
 */
TreeQuery.prototype['Extension'] = undefined;

/**
 * @member {String} FileName
 */
TreeQuery.prototype['FileName'] = undefined;

/**
 * @member {String} FileNameOrContent
 */
TreeQuery.prototype['FileNameOrContent'] = undefined;

/**
 * Bleve-like search query to search for a specific metadata value. When querying nodes, this will redirect this query to the Search Engine. When filtering an input, this will load an in-memory bleve engine to evaluate the node.  Bleve query string format is a space separated list of `[+-]key:value`, where node meta keys must be prepended with \"Meta.\" For Example, for tags: `+Meta.usermeta-tags:myvalue`
 * @member {String} FreeString
 */
TreeQuery.prototype['FreeString'] = undefined;

/**
 * @member {module:model/TreeGeoQuery} GeoQuery
 */
TreeQuery.prototype['GeoQuery'] = undefined;

/**
 * @member {String} MaxDate
 */
TreeQuery.prototype['MaxDate'] = undefined;

/**
 * @member {String} MaxSize
 */
TreeQuery.prototype['MaxSize'] = undefined;

/**
 * @member {String} MinDate
 */
TreeQuery.prototype['MinDate'] = undefined;

/**
 * @member {String} MinSize
 */
TreeQuery.prototype['MinSize'] = undefined;

/**
 * @member {Boolean} Not
 */
TreeQuery.prototype['Not'] = undefined;

/**
 * @member {Number} PathDepth
 */
TreeQuery.prototype['PathDepth'] = undefined;

/**
 * @member {Array.<String>} PathPrefix
 */
TreeQuery.prototype['PathPrefix'] = undefined;

/**
 * @member {Array.<String>} Paths
 */
TreeQuery.prototype['Paths'] = undefined;

/**
 * @member {module:model/TreeNodeType} Type
 */
TreeQuery.prototype['Type'] = undefined;

/**
 * @member {Array.<String>} UUIDs
 */
TreeQuery.prototype['UUIDs'] = undefined;






export default TreeQuery;

