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

/**
 * The InstallInstallConfig model module.
 * @module model/InstallInstallConfig
 * @version 4.0
 */
var InstallInstallConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InstallInstallConfig</code>.
   * @alias module:model/InstallInstallConfig
   */
  function InstallInstallConfig() {
    _classCallCheck(this, InstallInstallConfig);

    InstallInstallConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstallInstallConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstallInstallConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstallInstallConfig} obj Optional instance to populate.
     * @return {module:model/InstallInstallConfig} The populated <code>InstallInstallConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstallInstallConfig();

        if (data.hasOwnProperty('CheckResults')) {
          obj['CheckResults'] = _ApiClient["default"].convertToType(data['CheckResults'], [_InstallCheckResult["default"]]);
        }

        if (data.hasOwnProperty('DocumentsDSN')) {
          obj['DocumentsDSN'] = _ApiClient["default"].convertToType(data['DocumentsDSN'], 'String');
        }

        if (data.hasOwnProperty('ProxyConfig')) {
          obj['ProxyConfig'] = _InstallProxyConfig["default"].constructFromObject(data['ProxyConfig']);
        }

        if (data.hasOwnProperty('UseDocumentsDSN')) {
          obj['UseDocumentsDSN'] = _ApiClient["default"].convertToType(data['UseDocumentsDSN'], 'Boolean');
        }

        if (data.hasOwnProperty('dbConnectionType')) {
          obj['dbConnectionType'] = _ApiClient["default"].convertToType(data['dbConnectionType'], 'String');
        }

        if (data.hasOwnProperty('dbManualDSN')) {
          obj['dbManualDSN'] = _ApiClient["default"].convertToType(data['dbManualDSN'], 'String');
        }

        if (data.hasOwnProperty('dbSocketFile')) {
          obj['dbSocketFile'] = _ApiClient["default"].convertToType(data['dbSocketFile'], 'String');
        }

        if (data.hasOwnProperty('dbSocketName')) {
          obj['dbSocketName'] = _ApiClient["default"].convertToType(data['dbSocketName'], 'String');
        }

        if (data.hasOwnProperty('dbSocketPassword')) {
          obj['dbSocketPassword'] = _ApiClient["default"].convertToType(data['dbSocketPassword'], 'String');
        }

        if (data.hasOwnProperty('dbSocketUser')) {
          obj['dbSocketUser'] = _ApiClient["default"].convertToType(data['dbSocketUser'], 'String');
        }

        if (data.hasOwnProperty('dbTCPHostname')) {
          obj['dbTCPHostname'] = _ApiClient["default"].convertToType(data['dbTCPHostname'], 'String');
        }

        if (data.hasOwnProperty('dbTCPName')) {
          obj['dbTCPName'] = _ApiClient["default"].convertToType(data['dbTCPName'], 'String');
        }

        if (data.hasOwnProperty('dbTCPPassword')) {
          obj['dbTCPPassword'] = _ApiClient["default"].convertToType(data['dbTCPPassword'], 'String');
        }

        if (data.hasOwnProperty('dbTCPPort')) {
          obj['dbTCPPort'] = _ApiClient["default"].convertToType(data['dbTCPPort'], 'String');
        }

        if (data.hasOwnProperty('dbTCPUser')) {
          obj['dbTCPUser'] = _ApiClient["default"].convertToType(data['dbTCPUser'], 'String');
        }

        if (data.hasOwnProperty('dbUseDefaults')) {
          obj['dbUseDefaults'] = _ApiClient["default"].convertToType(data['dbUseDefaults'], 'Boolean');
        }

        if (data.hasOwnProperty('dsFolder')) {
          obj['dsFolder'] = _ApiClient["default"].convertToType(data['dsFolder'], 'String');
        }

        if (data.hasOwnProperty('dsName')) {
          obj['dsName'] = _ApiClient["default"].convertToType(data['dsName'], 'String');
        }

        if (data.hasOwnProperty('dsPort')) {
          obj['dsPort'] = _ApiClient["default"].convertToType(data['dsPort'], 'String');
        }

        if (data.hasOwnProperty('dsS3ApiKey')) {
          obj['dsS3ApiKey'] = _ApiClient["default"].convertToType(data['dsS3ApiKey'], 'String');
        }

        if (data.hasOwnProperty('dsS3ApiSecret')) {
          obj['dsS3ApiSecret'] = _ApiClient["default"].convertToType(data['dsS3ApiSecret'], 'String');
        }

        if (data.hasOwnProperty('dsS3BucketBinaries')) {
          obj['dsS3BucketBinaries'] = _ApiClient["default"].convertToType(data['dsS3BucketBinaries'], 'String');
        }

        if (data.hasOwnProperty('dsS3BucketCells')) {
          obj['dsS3BucketCells'] = _ApiClient["default"].convertToType(data['dsS3BucketCells'], 'String');
        }

        if (data.hasOwnProperty('dsS3BucketDefault')) {
          obj['dsS3BucketDefault'] = _ApiClient["default"].convertToType(data['dsS3BucketDefault'], 'String');
        }

        if (data.hasOwnProperty('dsS3BucketPersonal')) {
          obj['dsS3BucketPersonal'] = _ApiClient["default"].convertToType(data['dsS3BucketPersonal'], 'String');
        }

        if (data.hasOwnProperty('dsS3BucketThumbs')) {
          obj['dsS3BucketThumbs'] = _ApiClient["default"].convertToType(data['dsS3BucketThumbs'], 'String');
        }

        if (data.hasOwnProperty('dsS3BucketVersions')) {
          obj['dsS3BucketVersions'] = _ApiClient["default"].convertToType(data['dsS3BucketVersions'], 'String');
        }

        if (data.hasOwnProperty('dsS3Custom')) {
          obj['dsS3Custom'] = _ApiClient["default"].convertToType(data['dsS3Custom'], 'String');
        }

        if (data.hasOwnProperty('dsS3CustomRegion')) {
          obj['dsS3CustomRegion'] = _ApiClient["default"].convertToType(data['dsS3CustomRegion'], 'String');
        }

        if (data.hasOwnProperty('dsType')) {
          obj['dsType'] = _ApiClient["default"].convertToType(data['dsType'], 'String');
        }

        if (data.hasOwnProperty('frontendApplicationTitle')) {
          obj['frontendApplicationTitle'] = _ApiClient["default"].convertToType(data['frontendApplicationTitle'], 'String');
        }

        if (data.hasOwnProperty('frontendDefaultLanguage')) {
          obj['frontendDefaultLanguage'] = _ApiClient["default"].convertToType(data['frontendDefaultLanguage'], 'String');
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

        if (data.hasOwnProperty('internalUrl')) {
          obj['internalUrl'] = _ApiClient["default"].convertToType(data['internalUrl'], 'String');
        }

        if (data.hasOwnProperty('licenseRequired')) {
          obj['licenseRequired'] = _ApiClient["default"].convertToType(data['licenseRequired'], 'Boolean');
        }

        if (data.hasOwnProperty('licenseString')) {
          obj['licenseString'] = _ApiClient["default"].convertToType(data['licenseString'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InstallInstallConfig;
}();
/**
 * @member {Array.<module:model/InstallCheckResult>} CheckResults
 */


InstallInstallConfig.prototype['CheckResults'] = undefined;
/**
 * @member {String} DocumentsDSN
 */

InstallInstallConfig.prototype['DocumentsDSN'] = undefined;
/**
 * @member {module:model/InstallProxyConfig} ProxyConfig
 */

InstallInstallConfig.prototype['ProxyConfig'] = undefined;
/**
 * @member {Boolean} UseDocumentsDSN
 */

InstallInstallConfig.prototype['UseDocumentsDSN'] = undefined;
/**
 * @member {String} dbConnectionType
 */

InstallInstallConfig.prototype['dbConnectionType'] = undefined;
/**
 * @member {String} dbManualDSN
 */

InstallInstallConfig.prototype['dbManualDSN'] = undefined;
/**
 * @member {String} dbSocketFile
 */

InstallInstallConfig.prototype['dbSocketFile'] = undefined;
/**
 * @member {String} dbSocketName
 */

InstallInstallConfig.prototype['dbSocketName'] = undefined;
/**
 * @member {String} dbSocketPassword
 */

InstallInstallConfig.prototype['dbSocketPassword'] = undefined;
/**
 * @member {String} dbSocketUser
 */

InstallInstallConfig.prototype['dbSocketUser'] = undefined;
/**
 * @member {String} dbTCPHostname
 */

InstallInstallConfig.prototype['dbTCPHostname'] = undefined;
/**
 * @member {String} dbTCPName
 */

InstallInstallConfig.prototype['dbTCPName'] = undefined;
/**
 * @member {String} dbTCPPassword
 */

InstallInstallConfig.prototype['dbTCPPassword'] = undefined;
/**
 * @member {String} dbTCPPort
 */

InstallInstallConfig.prototype['dbTCPPort'] = undefined;
/**
 * @member {String} dbTCPUser
 */

InstallInstallConfig.prototype['dbTCPUser'] = undefined;
/**
 * @member {Boolean} dbUseDefaults
 */

InstallInstallConfig.prototype['dbUseDefaults'] = undefined;
/**
 * @member {String} dsFolder
 */

InstallInstallConfig.prototype['dsFolder'] = undefined;
/**
 * @member {String} dsName
 */

InstallInstallConfig.prototype['dsName'] = undefined;
/**
 * @member {String} dsPort
 */

InstallInstallConfig.prototype['dsPort'] = undefined;
/**
 * @member {String} dsS3ApiKey
 */

InstallInstallConfig.prototype['dsS3ApiKey'] = undefined;
/**
 * @member {String} dsS3ApiSecret
 */

InstallInstallConfig.prototype['dsS3ApiSecret'] = undefined;
/**
 * @member {String} dsS3BucketBinaries
 */

InstallInstallConfig.prototype['dsS3BucketBinaries'] = undefined;
/**
 * @member {String} dsS3BucketCells
 */

InstallInstallConfig.prototype['dsS3BucketCells'] = undefined;
/**
 * @member {String} dsS3BucketDefault
 */

InstallInstallConfig.prototype['dsS3BucketDefault'] = undefined;
/**
 * @member {String} dsS3BucketPersonal
 */

InstallInstallConfig.prototype['dsS3BucketPersonal'] = undefined;
/**
 * @member {String} dsS3BucketThumbs
 */

InstallInstallConfig.prototype['dsS3BucketThumbs'] = undefined;
/**
 * @member {String} dsS3BucketVersions
 */

InstallInstallConfig.prototype['dsS3BucketVersions'] = undefined;
/**
 * @member {String} dsS3Custom
 */

InstallInstallConfig.prototype['dsS3Custom'] = undefined;
/**
 * @member {String} dsS3CustomRegion
 */

InstallInstallConfig.prototype['dsS3CustomRegion'] = undefined;
/**
 * @member {String} dsType
 */

InstallInstallConfig.prototype['dsType'] = undefined;
/**
 * @member {String} frontendApplicationTitle
 */

InstallInstallConfig.prototype['frontendApplicationTitle'] = undefined;
/**
 * @member {String} frontendDefaultLanguage
 */

InstallInstallConfig.prototype['frontendDefaultLanguage'] = undefined;
/**
 * @member {String} frontendHosts
 */

InstallInstallConfig.prototype['frontendHosts'] = undefined;
/**
 * @member {String} frontendLogin
 */

InstallInstallConfig.prototype['frontendLogin'] = undefined;
/**
 * @member {String} frontendPassword
 */

InstallInstallConfig.prototype['frontendPassword'] = undefined;
/**
 * @member {String} frontendRepeatPassword
 */

InstallInstallConfig.prototype['frontendRepeatPassword'] = undefined;
/**
 * @member {String} internalUrl
 */

InstallInstallConfig.prototype['internalUrl'] = undefined;
/**
 * @member {Boolean} licenseRequired
 */

InstallInstallConfig.prototype['licenseRequired'] = undefined;
/**
 * @member {String} licenseString
 */

InstallInstallConfig.prototype['licenseString'] = undefined;
var _default = InstallInstallConfig;
exports["default"] = _default;
//# sourceMappingURL=InstallInstallConfig.js.map
