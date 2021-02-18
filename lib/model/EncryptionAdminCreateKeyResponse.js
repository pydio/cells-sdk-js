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
* The EncryptionAdminCreateKeyResponse model module.
* @module model/EncryptionAdminCreateKeyResponse
* @version 1.0
*/
var EncryptionAdminCreateKeyResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>EncryptionAdminCreateKeyResponse</code>.
  * @alias module:model/EncryptionAdminCreateKeyResponse
  * @class
  */
  function EncryptionAdminCreateKeyResponse() {
    _classCallCheck(this, EncryptionAdminCreateKeyResponse);

    _defineProperty(this, "Success", undefined);
  }
  /**
  * Constructs a <code>EncryptionAdminCreateKeyResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/EncryptionAdminCreateKeyResponse} obj Optional instance to populate.
  * @return {module:model/EncryptionAdminCreateKeyResponse} The populated <code>EncryptionAdminCreateKeyResponse</code> instance.
  */


  _createClass(EncryptionAdminCreateKeyResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EncryptionAdminCreateKeyResponse();

        if (data.hasOwnProperty('Success')) {
          obj['Success'] = _ApiClient["default"].convertToType(data['Success'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {Boolean} Success
    */

  }]);

  return EncryptionAdminCreateKeyResponse;
}();

exports["default"] = EncryptionAdminCreateKeyResponse;
//# sourceMappingURL=EncryptionAdminCreateKeyResponse.js.map
