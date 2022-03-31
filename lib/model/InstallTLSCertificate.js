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

/**
 * The InstallTLSCertificate model module.
 * @module model/InstallTLSCertificate
 * @version 4.0
 */
var InstallTLSCertificate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InstallTLSCertificate</code>.
   * @alias module:model/InstallTLSCertificate
   */
  function InstallTLSCertificate() {
    _classCallCheck(this, InstallTLSCertificate);

    InstallTLSCertificate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstallTLSCertificate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstallTLSCertificate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstallTLSCertificate} obj Optional instance to populate.
     * @return {module:model/InstallTLSCertificate} The populated <code>InstallTLSCertificate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstallTLSCertificate();

        if (data.hasOwnProperty('CellsRootCA')) {
          obj['CellsRootCA'] = _ApiClient["default"].convertToType(data['CellsRootCA'], 'String');
        }

        if (data.hasOwnProperty('CertFile')) {
          obj['CertFile'] = _ApiClient["default"].convertToType(data['CertFile'], 'String');
        }

        if (data.hasOwnProperty('KeyFile')) {
          obj['KeyFile'] = _ApiClient["default"].convertToType(data['KeyFile'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InstallTLSCertificate;
}();
/**
 * @member {String} CellsRootCA
 */


InstallTLSCertificate.prototype['CellsRootCA'] = undefined;
/**
 * @member {String} CertFile
 */

InstallTLSCertificate.prototype['CertFile'] = undefined;
/**
 * @member {String} KeyFile
 */

InstallTLSCertificate.prototype['KeyFile'] = undefined;
var _default = InstallTLSCertificate;
exports["default"] = _default;
//# sourceMappingURL=InstallTLSCertificate.js.map
