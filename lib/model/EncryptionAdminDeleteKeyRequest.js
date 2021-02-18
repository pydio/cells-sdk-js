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
* The EncryptionAdminDeleteKeyRequest model module.
* @module model/EncryptionAdminDeleteKeyRequest
* @version 1.0
*/
var EncryptionAdminDeleteKeyRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>EncryptionAdminDeleteKeyRequest</code>.
  * @alias module:model/EncryptionAdminDeleteKeyRequest
  * @class
  */
  function EncryptionAdminDeleteKeyRequest() {
    _classCallCheck(this, EncryptionAdminDeleteKeyRequest);

    _defineProperty(this, "KeyID", undefined);
  }
  /**
  * Constructs a <code>EncryptionAdminDeleteKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/EncryptionAdminDeleteKeyRequest} obj Optional instance to populate.
  * @return {module:model/EncryptionAdminDeleteKeyRequest} The populated <code>EncryptionAdminDeleteKeyRequest</code> instance.
  */


  _createClass(EncryptionAdminDeleteKeyRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EncryptionAdminDeleteKeyRequest();

        if (data.hasOwnProperty('KeyID')) {
          obj['KeyID'] = _ApiClient["default"].convertToType(data['KeyID'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {String} KeyID
    */

  }]);

  return EncryptionAdminDeleteKeyRequest;
}();

exports["default"] = EncryptionAdminDeleteKeyRequest;
//# sourceMappingURL=EncryptionAdminDeleteKeyRequest.js.map
