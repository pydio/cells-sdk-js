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
* The RestResetPasswordResponse model module.
* @module model/RestResetPasswordResponse
* @version 1.0
*/
var RestResetPasswordResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestResetPasswordResponse</code>.
  * @alias module:model/RestResetPasswordResponse
  * @class
  */
  function RestResetPasswordResponse() {
    _classCallCheck(this, RestResetPasswordResponse);

    _defineProperty(this, "Success", undefined);

    _defineProperty(this, "Message", undefined);
  }
  /**
  * Constructs a <code>RestResetPasswordResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestResetPasswordResponse} obj Optional instance to populate.
  * @return {module:model/RestResetPasswordResponse} The populated <code>RestResetPasswordResponse</code> instance.
  */


  _createClass(RestResetPasswordResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestResetPasswordResponse();

        if (data.hasOwnProperty('Success')) {
          obj['Success'] = _ApiClient["default"].convertToType(data['Success'], 'Boolean');
        }

        if (data.hasOwnProperty('Message')) {
          obj['Message'] = _ApiClient["default"].convertToType(data['Message'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {Boolean} Success
    */

  }]);

  return RestResetPasswordResponse;
}();

exports["default"] = RestResetPasswordResponse;
//# sourceMappingURL=RestResetPasswordResponse.js.map
