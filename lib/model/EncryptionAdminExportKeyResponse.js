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
* The EncryptionAdminExportKeyResponse model module.
* @module model/EncryptionAdminExportKeyResponse
* @version 1.0
*/
var EncryptionAdminExportKeyResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>EncryptionAdminExportKeyResponse</code>.
  * @alias module:model/EncryptionAdminExportKeyResponse
  * @class
  */
  function EncryptionAdminExportKeyResponse() {
    _classCallCheck(this, EncryptionAdminExportKeyResponse);

    _defineProperty(this, "Key", undefined);
  }
  /**
  * Constructs a <code>EncryptionAdminExportKeyResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/EncryptionAdminExportKeyResponse} obj Optional instance to populate.
  * @return {module:model/EncryptionAdminExportKeyResponse} The populated <code>EncryptionAdminExportKeyResponse</code> instance.
  */


  _createClass(EncryptionAdminExportKeyResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EncryptionAdminExportKeyResponse();

        if (data.hasOwnProperty('Key')) {
          obj['Key'] = _EncryptionKey["default"].constructFromObject(data['Key']);
        }
      }

      return obj;
    }
    /**
    * @member {module:model/EncryptionKey} Key
    */

  }]);

  return EncryptionAdminExportKeyResponse;
}();

exports["default"] = EncryptionAdminExportKeyResponse;
//# sourceMappingURL=EncryptionAdminExportKeyResponse.js.map
