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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The UpdatePackage model module.
* @module model/UpdatePackage
* @version 1.0
*/
var UpdatePackage = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>UpdatePackage</code>.
  * @alias module:model/UpdatePackage
  * @class
  */
  function UpdatePackage() {
    _classCallCheck(this, UpdatePackage);

    _defineProperty(this, "PackageName", undefined);

    _defineProperty(this, "Version", undefined);

    _defineProperty(this, "ReleaseDate", undefined);

    _defineProperty(this, "Label", undefined);

    _defineProperty(this, "Description", undefined);

    _defineProperty(this, "ChangeLog", undefined);

    _defineProperty(this, "License", undefined);

    _defineProperty(this, "BinaryURL", undefined);

    _defineProperty(this, "BinaryChecksum", undefined);

    _defineProperty(this, "BinarySignature", undefined);

    _defineProperty(this, "BinaryHashType", undefined);

    _defineProperty(this, "BinarySize", undefined);

    _defineProperty(this, "BinaryOS", undefined);

    _defineProperty(this, "BinaryArch", undefined);

    _defineProperty(this, "IsPatch", undefined);

    _defineProperty(this, "PatchAlgorithm", undefined);

    _defineProperty(this, "ServiceName", undefined);

    _defineProperty(this, "Status", undefined);
  }
  /**
  * Constructs a <code>UpdatePackage</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/UpdatePackage} obj Optional instance to populate.
  * @return {module:model/UpdatePackage} The populated <code>UpdatePackage</code> instance.
  */


  _createClass(UpdatePackage, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdatePackage();

        if (data.hasOwnProperty('PackageName')) {
          obj['PackageName'] = _ApiClient["default"].convertToType(data['PackageName'], 'String');
        }

        if (data.hasOwnProperty('Version')) {
          obj['Version'] = _ApiClient["default"].convertToType(data['Version'], 'String');
        }

        if (data.hasOwnProperty('ReleaseDate')) {
          obj['ReleaseDate'] = _ApiClient["default"].convertToType(data['ReleaseDate'], 'Number');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('ChangeLog')) {
          obj['ChangeLog'] = _ApiClient["default"].convertToType(data['ChangeLog'], 'String');
        }

        if (data.hasOwnProperty('License')) {
          obj['License'] = _ApiClient["default"].convertToType(data['License'], 'String');
        }

        if (data.hasOwnProperty('BinaryURL')) {
          obj['BinaryURL'] = _ApiClient["default"].convertToType(data['BinaryURL'], 'String');
        }

        if (data.hasOwnProperty('BinaryChecksum')) {
          obj['BinaryChecksum'] = _ApiClient["default"].convertToType(data['BinaryChecksum'], 'String');
        }

        if (data.hasOwnProperty('BinarySignature')) {
          obj['BinarySignature'] = _ApiClient["default"].convertToType(data['BinarySignature'], 'String');
        }

        if (data.hasOwnProperty('BinaryHashType')) {
          obj['BinaryHashType'] = _ApiClient["default"].convertToType(data['BinaryHashType'], 'String');
        }

        if (data.hasOwnProperty('BinarySize')) {
          obj['BinarySize'] = _ApiClient["default"].convertToType(data['BinarySize'], 'String');
        }

        if (data.hasOwnProperty('BinaryOS')) {
          obj['BinaryOS'] = _ApiClient["default"].convertToType(data['BinaryOS'], 'String');
        }

        if (data.hasOwnProperty('BinaryArch')) {
          obj['BinaryArch'] = _ApiClient["default"].convertToType(data['BinaryArch'], 'String');
        }

        if (data.hasOwnProperty('IsPatch')) {
          obj['IsPatch'] = _ApiClient["default"].convertToType(data['IsPatch'], 'Boolean');
        }

        if (data.hasOwnProperty('PatchAlgorithm')) {
          obj['PatchAlgorithm'] = _ApiClient["default"].convertToType(data['PatchAlgorithm'], 'String');
        }

        if (data.hasOwnProperty('ServiceName')) {
          obj['ServiceName'] = _ApiClient["default"].convertToType(data['ServiceName'], 'String');
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _PackagePackageStatus["default"].constructFromObject(data['Status']);
        }
      }

      return obj;
    }
    /**
    * @member {String} PackageName
    */

  }]);

  return UpdatePackage;
}();

exports["default"] = UpdatePackage;
//# sourceMappingURL=UpdatePackage.js.map
