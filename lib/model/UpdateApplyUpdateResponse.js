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
* The UpdateApplyUpdateResponse model module.
* @module model/UpdateApplyUpdateResponse
* @version 1.0
*/
var UpdateApplyUpdateResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>UpdateApplyUpdateResponse</code>.
  * @alias module:model/UpdateApplyUpdateResponse
  * @class
  */
  function UpdateApplyUpdateResponse() {
    _classCallCheck(this, UpdateApplyUpdateResponse);

    _defineProperty(this, "Success", undefined);

    _defineProperty(this, "Message", undefined);
  }
  /**
  * Constructs a <code>UpdateApplyUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/UpdateApplyUpdateResponse} obj Optional instance to populate.
  * @return {module:model/UpdateApplyUpdateResponse} The populated <code>UpdateApplyUpdateResponse</code> instance.
  */


  _createClass(UpdateApplyUpdateResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateApplyUpdateResponse();

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

  return UpdateApplyUpdateResponse;
}();

exports["default"] = UpdateApplyUpdateResponse;
//# sourceMappingURL=UpdateApplyUpdateResponse.js.map
