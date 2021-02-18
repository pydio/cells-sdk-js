"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstallCheckResult = _interopRequireDefault(require("./InstallCheckResult"));

var _InstallProxyConfig = _interopRequireDefault(require("./InstallProxyConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The InstallInstallConfig model module.
* @module model/InstallInstallConfig
* @version 1.0
*/
var InstallInstallConfig = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>InstallInstallConfig</code>.
  * @alias module:model/InstallInstallConfig
  * @class
  */
  function InstallInstallConfig() {
    _classCallCheck(this, InstallInstallConfig);

    _defineProperty(this, "internalUrl", undefined);

    _defineProperty(this, "dbConnectionType", undefined);

    _defineProperty(this, "dbTCPHostname", undefined);

    _defineProperty(this, "dbTCPPort", undefined);

    _defineProperty(this, "dbTCPName", undefined);

    _defineProperty(this, "dbTCPUser", undefined);

    _defineProperty(this, "dbTCPPassword", undefined);

    _defineProperty(this, "dbSocketFile", undefined);

    _defineProperty(this, "dbSocketName", undefined);

    _defineProperty(this, "dbSocketUser", undefined);

    _defineProperty(this, "dbSocketPassword", undefined);

    _defineProperty(this, "dbManualDSN", undefined);

    _defineProperty(this, "dbUseDefaults", undefined);

    _defineProperty(this, "dsName", undefined);

    _defineProperty(this, "dsPort", undefined);

    _defineProperty(this, "dsType", undefined);

    _defineProperty(this, "dsS3Custom", undefined);

    _defineProperty(this, "dsS3CustomRegion", undefined);

    _defineProperty(this, "dsS3ApiKey", undefined);

    _defineProperty(this, "dsS3ApiSecret", undefined);

    _defineProperty(this, "dsS3BucketDefault", undefined);

    _defineProperty(this, "dsS3BucketPersonal", undefined);

    _defineProperty(this, "dsS3BucketCells", undefined);

    _defineProperty(this, "dsS3BucketBinaries", undefined);

    _defineProperty(this, "dsS3BucketThumbs", undefined);

    _defineProperty(this, "dsS3BucketVersions", undefined);

    _defineProperty(this, "dsFolder", undefined);

    _defineProperty(this, "frontendHosts", undefined);

    _defineProperty(this, "frontendLogin", undefined);

    _defineProperty(this, "frontendPassword", undefined);

    _defineProperty(this, "frontendRepeatPassword", undefined);

    _defineProperty(this, "frontendApplicationTitle", undefined);

    _defineProperty(this, "frontendDefaultLanguage", undefined);

    _defineProperty(this, "licenseRequired", undefined);

    _defineProperty(this, "licenseString", undefined);

    _defineProperty(this, "CheckResults", undefined);

    _defineProperty(this, "ProxyConfig", undefined);
  }
  /**
  * Constructs a <code>InstallInstallConfig</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/InstallInstallConfig} obj Optional instance to populate.
  * @return {module:model/InstallInstallConfig} The populated <code>InstallInstallConfig</code> instance.
  */


  _createClass(InstallInstallConfig, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstallInstallConfig();

        if (data.hasOwnProperty('internalUrl')) {
          obj['internalUrl'] = _ApiClient["default"].convertToType(data['internalUrl'], 'String');
        }

        if (data.hasOwnProperty('dbConnectionType')) {
          obj['dbConnectionType'] = _ApiClient["default"].convertToType(data['dbConnectionType'], 'String');
        }

        if (data.hasOwnProperty('dbTCPHostname')) {
          obj['dbTCPHostname'] = _ApiClient["default"].convertToType(data['dbTCPHostname'], 'String');
        }

        if (data.hasOwnProperty('dbTCPPort')) {
          obj['dbTCPPort'] = _ApiClient["default"].convertToType(data['dbTCPPort'], 'String');
        }

        if (data.hasOwnProperty('dbTCPName')) {
          obj['dbTCPName'] = _ApiClient["default"].convertToType(data['dbTCPName'], 'String');
        }

        if (data.hasOwnProperty('dbTCPUser')) {
          obj['dbTCPUser'] = _ApiClient["default"].convertToType(data['dbTCPUser'], 'String');
        }

        if (data.hasOwnProperty('dbTCPPassword')) {
          obj['dbTCPPassword'] = _ApiClient["default"].convertToType(data['dbTCPPassword'], 'String');
        }

        if (data.hasOwnProperty('dbSocketFile')) {
          obj['dbSocketFile'] = _ApiClient["default"].convertToType(data['dbSocketFile'], 'String');
        }

        if (data.hasOwnProperty('dbSocketName')) {
          obj['dbSocketName'] = _ApiClient["default"].convertToType(data['dbSocketName'], 'String');
        }

        if (data.hasOwnProperty('dbSocketUser')) {
          obj['dbSocketUser'] = _ApiClient["default"].convertToType(data['dbSocketUser'], 'String');
        }

        if (data.hasOwnProperty('dbSocketPassword')) {
          obj['dbSocketPassword'] = _ApiClient["default"].convertToType(data['dbSocketPassword'], 'String');
        }

        if (data.hasOwnProperty('dbManualDSN')) {
          obj['dbManualDSN'] = _ApiClient["default"].convertToType(data['dbManualDSN'], 'String');
        }

        if (data.hasOwnProperty('dbUseDefaults')) {
          obj['dbUseDefaults'] = _ApiClient["default"].convertToType(data['dbUseDefaults'], 'Boolean');
        }

        if (data.hasOwnProperty('dsName')) {
          obj['dsName'] = _ApiClient["default"].convertToType(data['dsName'], 'String');
        }

        if (data.hasOwnProperty('dsPort')) {
          obj['dsPort'] = _ApiClient["default"].convertToType(data['dsPort'], 'String');
        }

        if (data.hasOwnProperty('dsType')) {
          obj['dsType'] = _ApiClient["default"].convertToType(data['dsType'], 'String');
        }

        if (data.hasOwnProperty('dsS3Custom')) {
          obj['dsS3Custom'] = _ApiClient["default"].convertToType(data['dsS3Custom'], 'String');
        }

        if (data.hasOwnProperty('dsS3CustomRegion')) {
          obj['dsS3CustomRegion'] = _ApiClient["default"].convertToType(data['dsS3CustomRegion'], 'String');
        }

        if (data.hasOwnProperty('dsS3ApiKey')) {
          obj['dsS3ApiKey'] = _ApiClient["default"].convertToType(data['dsS3ApiKey'], 'String');
        }

        if (data.hasOwnProperty('dsS3ApiSecret')) {
          obj['dsS3ApiSecret'] = _ApiClient["default"].convertToType(data['dsS3ApiSecret'], 'String');
        }

        if (data.hasOwnProperty('dsS3BucketDefault')) {
          obj['dsS3BucketDefault'] = _ApiClient["default"].convertToType(data['dsS3BucketDefault'], 'String');
        }

        if (data.hasOwnProperty('dsS3BucketPersonal')) {
          obj['dsS3BucketPersonal'] = _ApiClient["default"].convertToType(data['dsS3BucketPersonal'], 'String');
        }

        if (data.hasOwnProperty('dsS3BucketCells')) {
          obj['dsS3BucketCells'] = _ApiClient["default"].convertToType(data['dsS3BucketCells'], 'String');
        }

        if (data.hasOwnProperty('dsS3BucketBinaries')) {
          obj['dsS3BucketBinaries'] = _ApiClient["default"].convertToType(data['dsS3BucketBinaries'], 'String');
        }

        if (data.hasOwnProperty('dsS3BucketThumbs')) {
          obj['dsS3BucketThumbs'] = _ApiClient["default"].convertToType(data['dsS3BucketThumbs'], 'String');
        }

        if (data.hasOwnProperty('dsS3BucketVersions')) {
          obj['dsS3BucketVersions'] = _ApiClient["default"].convertToType(data['dsS3BucketVersions'], 'String');
        }

        if (data.hasOwnProperty('dsFolder')) {
          obj['dsFolder'] = _ApiClient["default"].convertToType(data['dsFolder'], 'String');
        }

        if (data.hasOwnProperty('frontendHosts')) {
          obj['frontendHosts'] = _ApiClient["default"].convertToType(data['frontendHosts'], 'String');
        }

        if (data.hasOwnProperty('frontendLogin')) {
          obj['frontendLogin'] = _ApiClient["default"].convertToType(data['frontendLogin'], 'String');
        }

        if (data.hasOwnProperty('frontendPassword')) {
          obj['frontendPassword'] = _ApiClient["default"].convertToType(data['frontendPassword'], 'String');
        }

        if (data.hasOwnProperty('frontendRepeatPassword')) {
          obj['frontendRepeatPassword'] = _ApiClient["default"].convertToType(data['frontendRepeatPassword'], 'String');
        }

        if (data.hasOwnProperty('frontendApplicationTitle')) {
          obj['frontendApplicationTitle'] = _ApiClient["default"].convertToType(data['frontendApplicationTitle'], 'String');
        }

        if (data.hasOwnProperty('frontendDefaultLanguage')) {
          obj['frontendDefaultLanguage'] = _ApiClient["default"].convertToType(data['frontendDefaultLanguage'], 'String');
        }

        if (data.hasOwnProperty('licenseRequired')) {
          obj['licenseRequired'] = _ApiClient["default"].convertToType(data['licenseRequired'], 'Boolean');
        }

        if (data.hasOwnProperty('licenseString')) {
          obj['licenseString'] = _ApiClient["default"].convertToType(data['licenseString'], 'String');
        }

        if (data.hasOwnProperty('CheckResults')) {
          obj['CheckResults'] = _ApiClient["default"].convertToType(data['CheckResults'], [_InstallCheckResult["default"]]);
        }

        if (data.hasOwnProperty('ProxyConfig')) {
          obj['ProxyConfig'] = _InstallProxyConfig["default"].constructFromObject(data['ProxyConfig']);
        }
      }

      return obj;
    }
    /**
    * @member {String} internalUrl
    */

  }]);

  return InstallInstallConfig;
}();

exports["default"] = InstallInstallConfig;
//# sourceMappingURL=InstallInstallConfig.js.map
