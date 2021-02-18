"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServiceResourcePolicy = _interopRequireDefault(require("./ServiceResourcePolicy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestUpdateSharePoliciesResponse model module.
* @module model/RestUpdateSharePoliciesResponse
* @version 1.0
*/
var RestUpdateSharePoliciesResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestUpdateSharePoliciesResponse</code>.
  * @alias module:model/RestUpdateSharePoliciesResponse
  * @class
  */
  function RestUpdateSharePoliciesResponse() {
    _classCallCheck(this, RestUpdateSharePoliciesResponse);

    _defineProperty(this, "Success", undefined);

    _defineProperty(this, "Policies", undefined);

    _defineProperty(this, "PoliciesContextEditable", undefined);
  }
  /**
  * Constructs a <code>RestUpdateSharePoliciesResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestUpdateSharePoliciesResponse} obj Optional instance to populate.
  * @return {module:model/RestUpdateSharePoliciesResponse} The populated <code>RestUpdateSharePoliciesResponse</code> instance.
  */


  _createClass(RestUpdateSharePoliciesResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestUpdateSharePoliciesResponse();

        if (data.hasOwnProperty('Success')) {
          obj['Success'] = _ApiClient["default"].convertToType(data['Success'], 'Boolean');
        }

        if (data.hasOwnProperty('Policies')) {
          obj['Policies'] = _ApiClient["default"].convertToType(data['Policies'], [_ServiceResourcePolicy["default"]]);
        }

        if (data.hasOwnProperty('PoliciesContextEditable')) {
          obj['PoliciesContextEditable'] = _ApiClient["default"].convertToType(data['PoliciesContextEditable'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {Boolean} Success
    */

  }]);

  return RestUpdateSharePoliciesResponse;
}();

exports["default"] = RestUpdateSharePoliciesResponse;
//# sourceMappingURL=RestUpdateSharePoliciesResponse.js.map
