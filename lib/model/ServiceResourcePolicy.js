"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServiceResourcePolicyAction = _interopRequireDefault(require("./ServiceResourcePolicyAction"));

var _ServiceResourcePolicyPolicyEffect = _interopRequireDefault(require("./ServiceResourcePolicyPolicyEffect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ServiceResourcePolicy model module.
 * @module model/ServiceResourcePolicy
 * @version 4.0
 */
var ServiceResourcePolicy = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceResourcePolicy</code>.
   * @alias module:model/ServiceResourcePolicy
   */
  function ServiceResourcePolicy() {
    _classCallCheck(this, ServiceResourcePolicy);

    ServiceResourcePolicy.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceResourcePolicy, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceResourcePolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceResourcePolicy} obj Optional instance to populate.
     * @return {module:model/ServiceResourcePolicy} The populated <code>ServiceResourcePolicy</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceResourcePolicy();

        if (data.hasOwnProperty('Action')) {
          obj['Action'] = _ServiceResourcePolicyAction["default"].constructFromObject(data['Action']);
        }

        if (data.hasOwnProperty('Effect')) {
          obj['Effect'] = _ServiceResourcePolicyPolicyEffect["default"].constructFromObject(data['Effect']);
        }

        if (data.hasOwnProperty('JsonConditions')) {
          obj['JsonConditions'] = _ApiClient["default"].convertToType(data['JsonConditions'], 'String');
        }

        if (data.hasOwnProperty('Resource')) {
          obj['Resource'] = _ApiClient["default"].convertToType(data['Resource'], 'String');
        }

        if (data.hasOwnProperty('Subject')) {
          obj['Subject'] = _ApiClient["default"].convertToType(data['Subject'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ServiceResourcePolicy;
}();
/**
 * @member {module:model/ServiceResourcePolicyAction} Action
 */


ServiceResourcePolicy.prototype['Action'] = undefined;
/**
 * @member {module:model/ServiceResourcePolicyPolicyEffect} Effect
 */

ServiceResourcePolicy.prototype['Effect'] = undefined;
/**
 * @member {String} JsonConditions
 */

ServiceResourcePolicy.prototype['JsonConditions'] = undefined;
/**
 * @member {String} Resource
 */

ServiceResourcePolicy.prototype['Resource'] = undefined;
/**
 * @member {String} Subject
 */

ServiceResourcePolicy.prototype['Subject'] = undefined;
/**
 * @member {String} id
 */

ServiceResourcePolicy.prototype['id'] = undefined;
var _default = ServiceResourcePolicy;
exports["default"] = _default;
//# sourceMappingURL=ServiceResourcePolicy.js.map
