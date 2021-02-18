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
* The InstallTLSLetsEncrypt model module.
* @module model/InstallTLSLetsEncrypt
* @version 1.0
*/
var InstallTLSLetsEncrypt = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>InstallTLSLetsEncrypt</code>.
  * @alias module:model/InstallTLSLetsEncrypt
  * @class
  */
  function InstallTLSLetsEncrypt() {
    _classCallCheck(this, InstallTLSLetsEncrypt);

    _defineProperty(this, "Email", undefined);

    _defineProperty(this, "AcceptEULA", undefined);

    _defineProperty(this, "StagingCA", undefined);
  }
  /**
  * Constructs a <code>InstallTLSLetsEncrypt</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/InstallTLSLetsEncrypt} obj Optional instance to populate.
  * @return {module:model/InstallTLSLetsEncrypt} The populated <code>InstallTLSLetsEncrypt</code> instance.
  */


  _createClass(InstallTLSLetsEncrypt, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstallTLSLetsEncrypt();

        if (data.hasOwnProperty('Email')) {
          obj['Email'] = _ApiClient["default"].convertToType(data['Email'], 'String');
        }

        if (data.hasOwnProperty('AcceptEULA')) {
          obj['AcceptEULA'] = _ApiClient["default"].convertToType(data['AcceptEULA'], 'Boolean');
        }

        if (data.hasOwnProperty('StagingCA')) {
          obj['StagingCA'] = _ApiClient["default"].convertToType(data['StagingCA'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {String} Email
    */

  }]);

  return InstallTLSLetsEncrypt;
}();

exports["default"] = InstallTLSLetsEncrypt;
//# sourceMappingURL=InstallTLSLetsEncrypt.js.map
