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
 * The InstallTLSLetsEncrypt model module.
 * @module model/InstallTLSLetsEncrypt
 * @version 4.0
 */
var InstallTLSLetsEncrypt = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InstallTLSLetsEncrypt</code>.
   * @alias module:model/InstallTLSLetsEncrypt
   */
  function InstallTLSLetsEncrypt() {
    _classCallCheck(this, InstallTLSLetsEncrypt);

    InstallTLSLetsEncrypt.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstallTLSLetsEncrypt, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstallTLSLetsEncrypt</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstallTLSLetsEncrypt} obj Optional instance to populate.
     * @return {module:model/InstallTLSLetsEncrypt} The populated <code>InstallTLSLetsEncrypt</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstallTLSLetsEncrypt();

        if (data.hasOwnProperty('AcceptEULA')) {
          obj['AcceptEULA'] = _ApiClient["default"].convertToType(data['AcceptEULA'], 'Boolean');
        }

        if (data.hasOwnProperty('Email')) {
          obj['Email'] = _ApiClient["default"].convertToType(data['Email'], 'String');
        }

        if (data.hasOwnProperty('StagingCA')) {
          obj['StagingCA'] = _ApiClient["default"].convertToType(data['StagingCA'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return InstallTLSLetsEncrypt;
}();
/**
 * @member {Boolean} AcceptEULA
 */


InstallTLSLetsEncrypt.prototype['AcceptEULA'] = undefined;
/**
 * @member {String} Email
 */

InstallTLSLetsEncrypt.prototype['Email'] = undefined;
/**
 * @member {Boolean} StagingCA
 */

InstallTLSLetsEncrypt.prototype['StagingCA'] = undefined;
var _default = InstallTLSLetsEncrypt;
exports["default"] = _default;
//# sourceMappingURL=InstallTLSLetsEncrypt.js.map
