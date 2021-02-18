"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EncryptionKey = _interopRequireDefault(require("./EncryptionKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The EncryptionAdminImportKeyRequest model module.
* @module model/EncryptionAdminImportKeyRequest
* @version 1.0
*/
var EncryptionAdminImportKeyRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>EncryptionAdminImportKeyRequest</code>.
  * @alias module:model/EncryptionAdminImportKeyRequest
  * @class
  */
  function EncryptionAdminImportKeyRequest() {
    _classCallCheck(this, EncryptionAdminImportKeyRequest);

    _defineProperty(this, "Key", undefined);

    _defineProperty(this, "StrPassword", undefined);

    _defineProperty(this, "Override", undefined);
  }
  /**
  * Constructs a <code>EncryptionAdminImportKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/EncryptionAdminImportKeyRequest} obj Optional instance to populate.
  * @return {module:model/EncryptionAdminImportKeyRequest} The populated <code>EncryptionAdminImportKeyRequest</code> instance.
  */


  _createClass(EncryptionAdminImportKeyRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EncryptionAdminImportKeyRequest();

        if (data.hasOwnProperty('Key')) {
          obj['Key'] = _EncryptionKey["default"].constructFromObject(data['Key']);
        }

        if (data.hasOwnProperty('StrPassword')) {
          obj['StrPassword'] = _ApiClient["default"].convertToType(data['StrPassword'], 'String');
        }

        if (data.hasOwnProperty('Override')) {
          obj['Override'] = _ApiClient["default"].convertToType(data['Override'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {module:model/EncryptionKey} Key
    */

  }]);

  return EncryptionAdminImportKeyRequest;
}();

exports["default"] = EncryptionAdminImportKeyRequest;
//# sourceMappingURL=EncryptionAdminImportKeyRequest.js.map
