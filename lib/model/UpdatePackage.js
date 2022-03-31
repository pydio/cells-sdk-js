"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PackagePackageStatus = _interopRequireDefault(require("./PackagePackageStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UpdatePackage model module.
 * @module model/UpdatePackage
 * @version 4.0
 */
var UpdatePackage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdatePackage</code>.
   * @alias module:model/UpdatePackage
   */
  function UpdatePackage() {
    _classCallCheck(this, UpdatePackage);

    UpdatePackage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdatePackage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UpdatePackage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePackage} obj Optional instance to populate.
     * @return {module:model/UpdatePackage} The populated <code>UpdatePackage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdatePackage();

        if (data.hasOwnProperty('BinaryArch')) {
          obj['BinaryArch'] = _ApiClient["default"].convertToType(data['BinaryArch'], 'String');
        }

        if (data.hasOwnProperty('BinaryChecksum')) {
          obj['BinaryChecksum'] = _ApiClient["default"].convertToType(data['BinaryChecksum'], 'String');
        }

        if (data.hasOwnProperty('BinaryHashType')) {
          obj['BinaryHashType'] = _ApiClient["default"].convertToType(data['BinaryHashType'], 'String');
        }

        if (data.hasOwnProperty('BinaryOS')) {
          obj['BinaryOS'] = _ApiClient["default"].convertToType(data['BinaryOS'], 'String');
        }

        if (data.hasOwnProperty('BinarySignature')) {
          obj['BinarySignature'] = _ApiClient["default"].convertToType(data['BinarySignature'], 'String');
        }

        if (data.hasOwnProperty('BinarySize')) {
          obj['BinarySize'] = _ApiClient["default"].convertToType(data['BinarySize'], 'String');
        }

        if (data.hasOwnProperty('BinaryURL')) {
          obj['BinaryURL'] = _ApiClient["default"].convertToType(data['BinaryURL'], 'String');
        }

        if (data.hasOwnProperty('ChangeLog')) {
          obj['ChangeLog'] = _ApiClient["default"].convertToType(data['ChangeLog'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('IsPatch')) {
          obj['IsPatch'] = _ApiClient["default"].convertToType(data['IsPatch'], 'Boolean');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('License')) {
          obj['License'] = _ApiClient["default"].convertToType(data['License'], 'String');
        }

        if (data.hasOwnProperty('PackageName')) {
          obj['PackageName'] = _ApiClient["default"].convertToType(data['PackageName'], 'String');
        }

        if (data.hasOwnProperty('PatchAlgorithm')) {
          obj['PatchAlgorithm'] = _ApiClient["default"].convertToType(data['PatchAlgorithm'], 'String');
        }

        if (data.hasOwnProperty('ReleaseDate')) {
          obj['ReleaseDate'] = _ApiClient["default"].convertToType(data['ReleaseDate'], 'Number');
        }

        if (data.hasOwnProperty('ServiceName')) {
          obj['ServiceName'] = _ApiClient["default"].convertToType(data['ServiceName'], 'String');
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _PackagePackageStatus["default"].constructFromObject(data['Status']);
        }

        if (data.hasOwnProperty('Version')) {
          obj['Version'] = _ApiClient["default"].convertToType(data['Version'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UpdatePackage;
}();
/**
 * @member {String} BinaryArch
 */


UpdatePackage.prototype['BinaryArch'] = undefined;
/**
 * @member {String} BinaryChecksum
 */

UpdatePackage.prototype['BinaryChecksum'] = undefined;
/**
 * @member {String} BinaryHashType
 */

UpdatePackage.prototype['BinaryHashType'] = undefined;
/**
 * @member {String} BinaryOS
 */

UpdatePackage.prototype['BinaryOS'] = undefined;
/**
 * @member {String} BinarySignature
 */

UpdatePackage.prototype['BinarySignature'] = undefined;
/**
 * @member {String} BinarySize
 */

UpdatePackage.prototype['BinarySize'] = undefined;
/**
 * @member {String} BinaryURL
 */

UpdatePackage.prototype['BinaryURL'] = undefined;
/**
 * @member {String} ChangeLog
 */

UpdatePackage.prototype['ChangeLog'] = undefined;
/**
 * @member {String} Description
 */

UpdatePackage.prototype['Description'] = undefined;
/**
 * @member {Boolean} IsPatch
 */

UpdatePackage.prototype['IsPatch'] = undefined;
/**
 * @member {String} Label
 */

UpdatePackage.prototype['Label'] = undefined;
/**
 * @member {String} License
 */

UpdatePackage.prototype['License'] = undefined;
/**
 * @member {String} PackageName
 */

UpdatePackage.prototype['PackageName'] = undefined;
/**
 * @member {String} PatchAlgorithm
 */

UpdatePackage.prototype['PatchAlgorithm'] = undefined;
/**
 * @member {Number} ReleaseDate
 */

UpdatePackage.prototype['ReleaseDate'] = undefined;
/**
 * @member {String} ServiceName
 */

UpdatePackage.prototype['ServiceName'] = undefined;
/**
 * @member {module:model/PackagePackageStatus} Status
 */

UpdatePackage.prototype['Status'] = undefined;
/**
 * @member {String} Version
 */

UpdatePackage.prototype['Version'] = undefined;
var _default = UpdatePackage;
exports["default"] = _default;
//# sourceMappingURL=UpdatePackage.js.map
