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
* The EncryptionAdminExportKeyRequest model module.
* @module model/EncryptionAdminExportKeyRequest
* @version 1.0
*/
var EncryptionAdminExportKeyRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>EncryptionAdminExportKeyRequest</code>.
  * @alias module:model/EncryptionAdminExportKeyRequest
  * @class
  */
  function EncryptionAdminExportKeyRequest() {
    _classCallCheck(this, EncryptionAdminExportKeyRequest);

    _defineProperty(this, "KeyID", undefined);

    _defineProperty(this, "StrPassword", undefined);
  }
  /**
  * Constructs a <code>EncryptionAdminExportKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/EncryptionAdminExportKeyRequest} obj Optional instance to populate.
  * @return {module:model/EncryptionAdminExportKeyRequest} The populated <code>EncryptionAdminExportKeyRequest</code> instance.
  */


  _createClass(EncryptionAdminExportKeyRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EncryptionAdminExportKeyRequest();

        if (data.hasOwnProperty('KeyID')) {
          obj['KeyID'] = _ApiClient["default"].convertToType(data['KeyID'], 'String');
        }

        if (data.hasOwnProperty('StrPassword')) {
          obj['StrPassword'] = _ApiClient["default"].convertToType(data['StrPassword'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {String} KeyID
    */

  }]);

  return EncryptionAdminExportKeyRequest;
}();

exports["default"] = EncryptionAdminExportKeyRequest;
//# sourceMappingURL=EncryptionAdminExportKeyRequest.js.map
