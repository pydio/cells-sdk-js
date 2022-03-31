"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstallTLSCertificate = _interopRequireDefault(require("./InstallTLSCertificate"));

var _InstallTLSLetsEncrypt = _interopRequireDefault(require("./InstallTLSLetsEncrypt"));

var _InstallTLSSelfSigned = _interopRequireDefault(require("./InstallTLSSelfSigned"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstallProxyConfig model module.
 * @module model/InstallProxyConfig
 * @version 4.0
 */
var InstallProxyConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InstallProxyConfig</code>.
   * @alias module:model/InstallProxyConfig
   */
  function InstallProxyConfig() {
    _classCallCheck(this, InstallProxyConfig);

    InstallProxyConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstallProxyConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstallProxyConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstallProxyConfig} obj Optional instance to populate.
     * @return {module:model/InstallProxyConfig} The populated <code>InstallProxyConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstallProxyConfig();

        if (data.hasOwnProperty('Binds')) {
          obj['Binds'] = _ApiClient["default"].convertToType(data['Binds'], ['String']);
        }

        if (data.hasOwnProperty('Certificate')) {
          obj['Certificate'] = _InstallTLSCertificate["default"].constructFromObject(data['Certificate']);
        }

        if (data.hasOwnProperty('LetsEncrypt')) {
          obj['LetsEncrypt'] = _InstallTLSLetsEncrypt["default"].constructFromObject(data['LetsEncrypt']);
        }

        if (data.hasOwnProperty('Maintenance')) {
          obj['Maintenance'] = _ApiClient["default"].convertToType(data['Maintenance'], 'Boolean');
        }

        if (data.hasOwnProperty('MaintenanceConditions')) {
          obj['MaintenanceConditions'] = _ApiClient["default"].convertToType(data['MaintenanceConditions'], ['String']);
        }

        if (data.hasOwnProperty('ReverseProxyURL')) {
          obj['ReverseProxyURL'] = _ApiClient["default"].convertToType(data['ReverseProxyURL'], 'String');
        }

        if (data.hasOwnProperty('SSLRedirect')) {
          obj['SSLRedirect'] = _ApiClient["default"].convertToType(data['SSLRedirect'], 'Boolean');
        }

        if (data.hasOwnProperty('SelfSigned')) {
          obj['SelfSigned'] = _InstallTLSSelfSigned["default"].constructFromObject(data['SelfSigned']);
        }
      }

      return obj;
    }
  }]);

  return InstallProxyConfig;
}();
/**
 * @member {Array.<String>} Binds
 */


InstallProxyConfig.prototype['Binds'] = undefined;
/**
 * @member {module:model/InstallTLSCertificate} Certificate
 */

InstallProxyConfig.prototype['Certificate'] = undefined;
/**
 * @member {module:model/InstallTLSLetsEncrypt} LetsEncrypt
 */

InstallProxyConfig.prototype['LetsEncrypt'] = undefined;
/**
 * @member {Boolean} Maintenance
 */

InstallProxyConfig.prototype['Maintenance'] = undefined;
/**
 * @member {Array.<String>} MaintenanceConditions
 */

InstallProxyConfig.prototype['MaintenanceConditions'] = undefined;
/**
 * @member {String} ReverseProxyURL
 */

InstallProxyConfig.prototype['ReverseProxyURL'] = undefined;
/**
 * @member {Boolean} SSLRedirect
 */

InstallProxyConfig.prototype['SSLRedirect'] = undefined;
/**
 * @member {module:model/InstallTLSSelfSigned} SelfSigned
 */

InstallProxyConfig.prototype['SelfSigned'] = undefined;
var _default = InstallProxyConfig;
exports["default"] = _default;
//# sourceMappingURL=InstallProxyConfig.js.map
