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
 * The RestResetPasswordResponse model module.
 * @module model/RestResetPasswordResponse
 * @version 4.0
 */
var RestResetPasswordResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestResetPasswordResponse</code>.
   * @alias module:model/RestResetPasswordResponse
   */
  function RestResetPasswordResponse() {
    _classCallCheck(this, RestResetPasswordResponse);

    RestResetPasswordResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestResetPasswordResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestResetPasswordResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestResetPasswordResponse} obj Optional instance to populate.
     * @return {module:model/RestResetPasswordResponse} The populated <code>RestResetPasswordResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestResetPasswordResponse();

        if (data.hasOwnProperty('Message')) {
          obj['Message'] = _ApiClient["default"].convertToType(data['Message'], 'String');
        }

        if (data.hasOwnProperty('Success')) {
          obj['Success'] = _ApiClient["default"].convertToType(data['Success'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return RestResetPasswordResponse;
}();
/**
 * @member {String} Message
 */


RestResetPasswordResponse.prototype['Message'] = undefined;
/**
 * @member {Boolean} Success
 */

RestResetPasswordResponse.prototype['Success'] = undefined;
var _default = RestResetPasswordResponse;
exports["default"] = _default;
//# sourceMappingURL=RestResetPasswordResponse.js.map
