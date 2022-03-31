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
 * The ServiceResourcePolicyQuery model module.
 * @module model/ServiceResourcePolicyQuery
 * @version 4.0
 */
var ServiceResourcePolicyQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceResourcePolicyQuery</code>.
   * @alias module:model/ServiceResourcePolicyQuery
   */
  function ServiceResourcePolicyQuery() {
    _classCallCheck(this, ServiceResourcePolicyQuery);

    ServiceResourcePolicyQuery.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceResourcePolicyQuery, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceResourcePolicyQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceResourcePolicyQuery} obj Optional instance to populate.
     * @return {module:model/ServiceResourcePolicyQuery} The populated <code>ServiceResourcePolicyQuery</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceResourcePolicyQuery();

        if (data.hasOwnProperty('Any')) {
          obj['Any'] = _ApiClient["default"].convertToType(data['Any'], 'Boolean');
        }

        if (data.hasOwnProperty('Empty')) {
          obj['Empty'] = _ApiClient["default"].convertToType(data['Empty'], 'Boolean');
        }

        if (data.hasOwnProperty('Subjects')) {
          obj['Subjects'] = _ApiClient["default"].convertToType(data['Subjects'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ServiceResourcePolicyQuery;
}();
/**
 * @member {Boolean} Any
 */


ServiceResourcePolicyQuery.prototype['Any'] = undefined;
/**
 * @member {Boolean} Empty
 */

ServiceResourcePolicyQuery.prototype['Empty'] = undefined;
/**
 * @member {Array.<String>} Subjects
 */

ServiceResourcePolicyQuery.prototype['Subjects'] = undefined;
var _default = ServiceResourcePolicyQuery;
exports["default"] = _default;
//# sourceMappingURL=ServiceResourcePolicyQuery.js.map
