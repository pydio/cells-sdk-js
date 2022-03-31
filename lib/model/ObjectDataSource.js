"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ObjectEncryptionMode = _interopRequireDefault(require("./ObjectEncryptionMode"));

var _ObjectStorageType = _interopRequireDefault(require("./ObjectStorageType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ObjectDataSource model module.
 * @module model/ObjectDataSource
 * @version 4.0
 */
var ObjectDataSource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ObjectDataSource</code>.
   * @alias module:model/ObjectDataSource
   */
  function ObjectDataSource() {
    _classCallCheck(this, ObjectDataSource);

    ObjectDataSource.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ObjectDataSource, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ObjectDataSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ObjectDataSource} obj Optional instance to populate.
     * @return {module:model/ObjectDataSource} The populated <code>ObjectDataSource</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ObjectDataSource();

        if (data.hasOwnProperty('ApiKey')) {
          obj['ApiKey'] = _ApiClient["default"].convertToType(data['ApiKey'], 'String');
        }

        if (data.hasOwnProperty('ApiSecret')) {
          obj['ApiSecret'] = _ApiClient["default"].convertToType(data['ApiSecret'], 'String');
        }

        if (data.hasOwnProperty('CreationDate')) {
          obj['CreationDate'] = _ApiClient["default"].convertToType(data['CreationDate'], 'Number');
        }

        if (data.hasOwnProperty('Disabled')) {
          obj['Disabled'] = _ApiClient["default"].convertToType(data['Disabled'], 'Boolean');
        }

        if (data.hasOwnProperty('EncryptionKey')) {
          obj['EncryptionKey'] = _ApiClient["default"].convertToType(data['EncryptionKey'], 'String');
        }

        if (data.hasOwnProperty('EncryptionMode')) {
          obj['EncryptionMode'] = _ObjectEncryptionMode["default"].constructFromObject(data['EncryptionMode']);
        }

        if (data.hasOwnProperty('FlatStorage')) {
          obj['FlatStorage'] = _ApiClient["default"].convertToType(data['FlatStorage'], 'Boolean');
        }

        if (data.hasOwnProperty('LastSynchronizationDate')) {
          obj['LastSynchronizationDate'] = _ApiClient["default"].convertToType(data['LastSynchronizationDate'], 'Number');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('ObjectsBaseFolder')) {
          obj['ObjectsBaseFolder'] = _ApiClient["default"].convertToType(data['ObjectsBaseFolder'], 'String');
        }

        if (data.hasOwnProperty('ObjectsBucket')) {
          obj['ObjectsBucket'] = _ApiClient["default"].convertToType(data['ObjectsBucket'], 'String');
        }

        if (data.hasOwnProperty('ObjectsHost')) {
          obj['ObjectsHost'] = _ApiClient["default"].convertToType(data['ObjectsHost'], 'String');
        }

        if (data.hasOwnProperty('ObjectsPort')) {
          obj['ObjectsPort'] = _ApiClient["default"].convertToType(data['ObjectsPort'], 'Number');
        }

        if (data.hasOwnProperty('ObjectsSecure')) {
          obj['ObjectsSecure'] = _ApiClient["default"].convertToType(data['ObjectsSecure'], 'Boolean');
        }

        if (data.hasOwnProperty('ObjectsServiceName')) {
          obj['ObjectsServiceName'] = _ApiClient["default"].convertToType(data['ObjectsServiceName'], 'String');
        }

        if (data.hasOwnProperty('PeerAddress')) {
          obj['PeerAddress'] = _ApiClient["default"].convertToType(data['PeerAddress'], 'String');
        }

        if (data.hasOwnProperty('SkipSyncOnRestart')) {
          obj['SkipSyncOnRestart'] = _ApiClient["default"].convertToType(data['SkipSyncOnRestart'], 'Boolean');
        }

        if (data.hasOwnProperty('StorageConfiguration')) {
          obj['StorageConfiguration'] = _ApiClient["default"].convertToType(data['StorageConfiguration'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('StorageType')) {
          obj['StorageType'] = _ObjectStorageType["default"].constructFromObject(data['StorageType']);
        }

        if (data.hasOwnProperty('VersioningPolicyName')) {
          obj['VersioningPolicyName'] = _ApiClient["default"].convertToType(data['VersioningPolicyName'], 'String');
        }

        if (data.hasOwnProperty('Watch')) {
          obj['Watch'] = _ApiClient["default"].convertToType(data['Watch'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ObjectDataSource;
}();
/**
 * @member {String} ApiKey
 */


ObjectDataSource.prototype['ApiKey'] = undefined;
/**
 * @member {String} ApiSecret
 */

ObjectDataSource.prototype['ApiSecret'] = undefined;
/**
 * @member {Number} CreationDate
 */

ObjectDataSource.prototype['CreationDate'] = undefined;
/**
 * @member {Boolean} Disabled
 */

ObjectDataSource.prototype['Disabled'] = undefined;
/**
 * @member {String} EncryptionKey
 */

ObjectDataSource.prototype['EncryptionKey'] = undefined;
/**
 * @member {module:model/ObjectEncryptionMode} EncryptionMode
 */

ObjectDataSource.prototype['EncryptionMode'] = undefined;
/**
 * @member {Boolean} FlatStorage
 */

ObjectDataSource.prototype['FlatStorage'] = undefined;
/**
 * @member {Number} LastSynchronizationDate
 */

ObjectDataSource.prototype['LastSynchronizationDate'] = undefined;
/**
 * @member {String} Name
 */

ObjectDataSource.prototype['Name'] = undefined;
/**
 * @member {String} ObjectsBaseFolder
 */

ObjectDataSource.prototype['ObjectsBaseFolder'] = undefined;
/**
 * @member {String} ObjectsBucket
 */

ObjectDataSource.prototype['ObjectsBucket'] = undefined;
/**
 * @member {String} ObjectsHost
 */

ObjectDataSource.prototype['ObjectsHost'] = undefined;
/**
 * @member {Number} ObjectsPort
 */

ObjectDataSource.prototype['ObjectsPort'] = undefined;
/**
 * @member {Boolean} ObjectsSecure
 */

ObjectDataSource.prototype['ObjectsSecure'] = undefined;
/**
 * @member {String} ObjectsServiceName
 */

ObjectDataSource.prototype['ObjectsServiceName'] = undefined;
/**
 * @member {String} PeerAddress
 */

ObjectDataSource.prototype['PeerAddress'] = undefined;
/**
 * @member {Boolean} SkipSyncOnRestart
 */

ObjectDataSource.prototype['SkipSyncOnRestart'] = undefined;
/**
 * @member {Object.<String, String>} StorageConfiguration
 */

ObjectDataSource.prototype['StorageConfiguration'] = undefined;
/**
 * @member {module:model/ObjectStorageType} StorageType
 */

ObjectDataSource.prototype['StorageType'] = undefined;
/**
 * @member {String} VersioningPolicyName
 */

ObjectDataSource.prototype['VersioningPolicyName'] = undefined;
/**
 * @member {Boolean} Watch
 */

ObjectDataSource.prototype['Watch'] = undefined;
var _default = ObjectDataSource;
exports["default"] = _default;
//# sourceMappingURL=ObjectDataSource.js.map
