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
* The EncryptionAdminCreateKeyRequest model module.
* @module model/EncryptionAdminCreateKeyRequest
* @version 1.0
*/
var EncryptionAdminCreateKeyRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>EncryptionAdminCreateKeyRequest</code>.
  * @alias module:model/EncryptionAdminCreateKeyRequest
  * @class
  */
  function EncryptionAdminCreateKeyRequest() {
    _classCallCheck(this, EncryptionAdminCreateKeyRequest);

    _defineProperty(this, "KeyID", undefined);

    _defineProperty(this, "Label", undefined);
  }
  /**
  * Constructs a <code>EncryptionAdminCreateKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/EncryptionAdminCreateKeyRequest} obj Optional instance to populate.
  * @return {module:model/EncryptionAdminCreateKeyRequest} The populated <code>EncryptionAdminCreateKeyRequest</code> instance.
  */


  _createClass(EncryptionAdminCreateKeyRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EncryptionAdminCreateKeyRequest();

        if (data.hasOwnProperty('KeyID')) {
          obj['KeyID'] = _ApiClient["default"].convertToType(data['KeyID'], 'String');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {String} KeyID
    */

  }]);

  return EncryptionAdminCreateKeyRequest;
}();

exports["default"] = EncryptionAdminCreateKeyRequest;
//# sourceMappingURL=EncryptionAdminCreateKeyRequest.js.map
