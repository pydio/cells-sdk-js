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
 * The RestResetPasswordRequest model module.
 * @module model/RestResetPasswordRequest
 * @version 4.0
 */
var RestResetPasswordRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestResetPasswordRequest</code>.
   * @alias module:model/RestResetPasswordRequest
   */
  function RestResetPasswordRequest() {
    _classCallCheck(this, RestResetPasswordRequest);

    RestResetPasswordRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestResetPasswordRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestResetPasswordRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestResetPasswordRequest} obj Optional instance to populate.
     * @return {module:model/RestResetPasswordRequest} The populated <code>RestResetPasswordRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestResetPasswordRequest();

        if (data.hasOwnProperty('NewPassword')) {
          obj['NewPassword'] = _ApiClient["default"].convertToType(data['NewPassword'], 'String');
        }

        if (data.hasOwnProperty('ResetPasswordToken')) {
          obj['ResetPasswordToken'] = _ApiClient["default"].convertToType(data['ResetPasswordToken'], 'String');
        }

        if (data.hasOwnProperty('UserLogin')) {
          obj['UserLogin'] = _ApiClient["default"].convertToType(data['UserLogin'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RestResetPasswordRequest;
}();
/**
 * @member {String} NewPassword
 */


RestResetPasswordRequest.prototype['NewPassword'] = undefined;
/**
 * @member {String} ResetPasswordToken
 */

RestResetPasswordRequest.prototype['ResetPasswordToken'] = undefined;
/**
 * @member {String} UserLogin
 */

RestResetPasswordRequest.prototype['UserLogin'] = undefined;
var _default = RestResetPasswordRequest;
exports["default"] = _default;
//# sourceMappingURL=RestResetPasswordRequest.js.map
