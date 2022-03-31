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

/**
 * The RestUpdateSharePoliciesResponse model module.
 * @module model/RestUpdateSharePoliciesResponse
 * @version 4.0
 */
var RestUpdateSharePoliciesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestUpdateSharePoliciesResponse</code>.
   * @alias module:model/RestUpdateSharePoliciesResponse
   */
  function RestUpdateSharePoliciesResponse() {
    _classCallCheck(this, RestUpdateSharePoliciesResponse);

    RestUpdateSharePoliciesResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestUpdateSharePoliciesResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestUpdateSharePoliciesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestUpdateSharePoliciesResponse} obj Optional instance to populate.
     * @return {module:model/RestUpdateSharePoliciesResponse} The populated <code>RestUpdateSharePoliciesResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestUpdateSharePoliciesResponse();

        if (data.hasOwnProperty('Policies')) {
          obj['Policies'] = _ApiClient["default"].convertToType(data['Policies'], [_ServiceResourcePolicy["default"]]);
        }

        if (data.hasOwnProperty('PoliciesContextEditable')) {
          obj['PoliciesContextEditable'] = _ApiClient["default"].convertToType(data['PoliciesContextEditable'], 'Boolean');
        }

        if (data.hasOwnProperty('Success')) {
          obj['Success'] = _ApiClient["default"].convertToType(data['Success'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return RestUpdateSharePoliciesResponse;
}();
/**
 * @member {Array.<module:model/ServiceResourcePolicy>} Policies
 */


RestUpdateSharePoliciesResponse.prototype['Policies'] = undefined;
/**
 * @member {Boolean} PoliciesContextEditable
 */

RestUpdateSharePoliciesResponse.prototype['PoliciesContextEditable'] = undefined;
/**
 * @member {Boolean} Success
 */

RestUpdateSharePoliciesResponse.prototype['Success'] = undefined;
var _default = RestUpdateSharePoliciesResponse;
exports["default"] = _default;
//# sourceMappingURL=RestUpdateSharePoliciesResponse.js.map
