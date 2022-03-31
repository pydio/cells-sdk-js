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
 * The RestUpdateSharePoliciesRequest model module.
 * @module model/RestUpdateSharePoliciesRequest
 * @version 4.0
 */
var RestUpdateSharePoliciesRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestUpdateSharePoliciesRequest</code>.
   * @alias module:model/RestUpdateSharePoliciesRequest
   */
  function RestUpdateSharePoliciesRequest() {
    _classCallCheck(this, RestUpdateSharePoliciesRequest);

    RestUpdateSharePoliciesRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestUpdateSharePoliciesRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestUpdateSharePoliciesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestUpdateSharePoliciesRequest} obj Optional instance to populate.
     * @return {module:model/RestUpdateSharePoliciesRequest} The populated <code>RestUpdateSharePoliciesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestUpdateSharePoliciesRequest();

        if (data.hasOwnProperty('Policies')) {
          obj['Policies'] = _ApiClient["default"].convertToType(data['Policies'], [_ServiceResourcePolicy["default"]]);
        }

        if (data.hasOwnProperty('Uuid')) {
          obj['Uuid'] = _ApiClient["default"].convertToType(data['Uuid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RestUpdateSharePoliciesRequest;
}();
/**
 * @member {Array.<module:model/ServiceResourcePolicy>} Policies
 */


RestUpdateSharePoliciesRequest.prototype['Policies'] = undefined;
/**
 * @member {String} Uuid
 */

RestUpdateSharePoliciesRequest.prototype['Uuid'] = undefined;
var _default = RestUpdateSharePoliciesRequest;
exports["default"] = _default;
//# sourceMappingURL=RestUpdateSharePoliciesRequest.js.map
