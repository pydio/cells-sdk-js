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
* The RestResetPasswordRequest model module.
* @module model/RestResetPasswordRequest
* @version 1.0
*/
var RestResetPasswordRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestResetPasswordRequest</code>.
  * @alias module:model/RestResetPasswordRequest
  * @class
  */
  function RestResetPasswordRequest() {
    _classCallCheck(this, RestResetPasswordRequest);

    _defineProperty(this, "ResetPasswordToken", undefined);

    _defineProperty(this, "UserLogin", undefined);

    _defineProperty(this, "NewPassword", undefined);
  }
  /**
  * Constructs a <code>RestResetPasswordRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestResetPasswordRequest} obj Optional instance to populate.
  * @return {module:model/RestResetPasswordRequest} The populated <code>RestResetPasswordRequest</code> instance.
  */


  _createClass(RestResetPasswordRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestResetPasswordRequest();

        if (data.hasOwnProperty('ResetPasswordToken')) {
          obj['ResetPasswordToken'] = _ApiClient["default"].convertToType(data['ResetPasswordToken'], 'String');
        }

        if (data.hasOwnProperty('UserLogin')) {
          obj['UserLogin'] = _ApiClient["default"].convertToType(data['UserLogin'], 'String');
        }

        if (data.hasOwnProperty('NewPassword')) {
          obj['NewPassword'] = _ApiClient["default"].convertToType(data['NewPassword'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {String} ResetPasswordToken
    */

  }]);

  return RestResetPasswordRequest;
}();

exports["default"] = RestResetPasswordRequest;
//# sourceMappingURL=RestResetPasswordRequest.js.map
