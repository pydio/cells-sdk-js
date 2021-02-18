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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The InstallProxyConfig model module.
* @module model/InstallProxyConfig
* @version 1.0
*/
var InstallProxyConfig = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>InstallProxyConfig</code>.
  * @alias module:model/InstallProxyConfig
  * @class
  */
  function InstallProxyConfig() {
    _classCallCheck(this, InstallProxyConfig);

    _defineProperty(this, "Binds", undefined);

    _defineProperty(this, "ReverseProxyURL", undefined);

    _defineProperty(this, "SelfSigned", undefined);

    _defineProperty(this, "LetsEncrypt", undefined);

    _defineProperty(this, "Certificate", undefined);

    _defineProperty(this, "SSLRedirect", undefined);

    _defineProperty(this, "Maintenance", undefined);

    _defineProperty(this, "MaintenanceConditions", undefined);
  }
  /**
  * Constructs a <code>InstallProxyConfig</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/InstallProxyConfig} obj Optional instance to populate.
  * @return {module:model/InstallProxyConfig} The populated <code>InstallProxyConfig</code> instance.
  */


  _createClass(InstallProxyConfig, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstallProxyConfig();

        if (data.hasOwnProperty('Binds')) {
          obj['Binds'] = _ApiClient["default"].convertToType(data['Binds'], ['String']);
        }

        if (data.hasOwnProperty('ReverseProxyURL')) {
          obj['ReverseProxyURL'] = _ApiClient["default"].convertToType(data['ReverseProxyURL'], 'String');
        }

        if (data.hasOwnProperty('SelfSigned')) {
          obj['SelfSigned'] = _InstallTLSSelfSigned["default"].constructFromObject(data['SelfSigned']);
        }

        if (data.hasOwnProperty('LetsEncrypt')) {
          obj['LetsEncrypt'] = _InstallTLSLetsEncrypt["default"].constructFromObject(data['LetsEncrypt']);
        }

        if (data.hasOwnProperty('Certificate')) {
          obj['Certificate'] = _InstallTLSCertificate["default"].constructFromObject(data['Certificate']);
        }

        if (data.hasOwnProperty('SSLRedirect')) {
          obj['SSLRedirect'] = _ApiClient["default"].convertToType(data['SSLRedirect'], 'Boolean');
        }

        if (data.hasOwnProperty('Maintenance')) {
          obj['Maintenance'] = _ApiClient["default"].convertToType(data['Maintenance'], 'Boolean');
        }

        if (data.hasOwnProperty('MaintenanceConditions')) {
          obj['MaintenanceConditions'] = _ApiClient["default"].convertToType(data['MaintenanceConditions'], ['String']);
        }
      }

      return obj;
    }
    /**
    * @member {Array.<String>} Binds
    */

  }]);

  return InstallProxyConfig;
}();

exports["default"] = InstallProxyConfig;
//# sourceMappingURL=InstallProxyConfig.js.map
