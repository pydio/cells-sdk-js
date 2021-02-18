"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The InstallTLSCertificate model module.
* @module model/InstallTLSCertificate
* @version 1.0
*/
var InstallTLSCertificate = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>InstallTLSCertificate</code>.
  * @alias module:model/InstallTLSCertificate
  * @class
  */
  function InstallTLSCertificate() {
    _classCallCheck(this, InstallTLSCertificate);

    _defineProperty(this, "CertFile", undefined);

    _defineProperty(this, "KeyFile", undefined);

    _defineProperty(this, "CellsRootCA", undefined);
  }
  /**
  * Constructs a <code>InstallTLSCertificate</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/InstallTLSCertificate} obj Optional instance to populate.
  * @return {module:model/InstallTLSCertificate} The populated <code>InstallTLSCertificate</code> instance.
  */


  _createClass(InstallTLSCertificate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstallTLSCertificate();

        if (data.hasOwnProperty('CertFile')) {
          obj['CertFile'] = _ApiClient["default"].convertToType(data['CertFile'], 'String');
        }

        if (data.hasOwnProperty('KeyFile')) {
          obj['KeyFile'] = _ApiClient["default"].convertToType(data['KeyFile'], 'String');
        }

        if (data.hasOwnProperty('CellsRootCA')) {
          obj['CellsRootCA'] = _ApiClient["default"].convertToType(data['CellsRootCA'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {String} CertFile
    */

  }]);

  return InstallTLSCertificate;
}();

exports["default"] = InstallTLSCertificate;
//# sourceMappingURL=InstallTLSCertificate.js.map
