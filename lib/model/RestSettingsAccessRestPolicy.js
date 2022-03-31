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
 * The RestSettingsAccessRestPolicy model module.
 * @module model/RestSettingsAccessRestPolicy
 * @version 4.0
 */
var RestSettingsAccessRestPolicy = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestSettingsAccessRestPolicy</code>.
   * @alias module:model/RestSettingsAccessRestPolicy
   */
  function RestSettingsAccessRestPolicy() {
    _classCallCheck(this, RestSettingsAccessRestPolicy);

    RestSettingsAccessRestPolicy.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestSettingsAccessRestPolicy, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestSettingsAccessRestPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestSettingsAccessRestPolicy} obj Optional instance to populate.
     * @return {module:model/RestSettingsAccessRestPolicy} The populated <code>RestSettingsAccessRestPolicy</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestSettingsAccessRestPolicy();

        if (data.hasOwnProperty('Action')) {
          obj['Action'] = _ApiClient["default"].convertToType(data['Action'], 'String');
        }

        if (data.hasOwnProperty('Resource')) {
          obj['Resource'] = _ApiClient["default"].convertToType(data['Resource'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RestSettingsAccessRestPolicy;
}();
/**
 * @member {String} Action
 */


RestSettingsAccessRestPolicy.prototype['Action'] = undefined;
/**
 * @member {String} Resource
 */

RestSettingsAccessRestPolicy.prototype['Resource'] = undefined;
var _default = RestSettingsAccessRestPolicy;
exports["default"] = _default;
//# sourceMappingURL=RestSettingsAccessRestPolicy.js.map
