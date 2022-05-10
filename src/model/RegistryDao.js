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
 * The RegistryDao model module.
 * @module model/RegistryDao
 * @version 4.0
 */
class RegistryDao {
    /**
     * Constructs a new <code>RegistryDao</code>.
     * @alias module:model/RegistryDao
     */
    constructor() { 
        
        RegistryDao.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RegistryDao</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegistryDao} obj Optional instance to populate.
     * @return {module:model/RegistryDao} The populated <code>RegistryDao</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegistryDao();

            if (data.hasOwnProperty('driver')) {
                obj['driver'] = ApiClient.convertToType(data['driver'], 'String');
            }
            if (data.hasOwnProperty('dsn')) {
                obj['dsn'] = ApiClient.convertToType(data['dsn'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} driver
 */
RegistryDao.prototype['driver'] = undefined;

/**
 * @member {String} dsn
 */
RegistryDao.prototype['dsn'] = undefined;






export default RegistryDao;

