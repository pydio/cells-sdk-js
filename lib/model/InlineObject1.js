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
 * The InlineObject1 model module.
 * @module model/InlineObject1
 * @version 4.0
 */
var InlineObject1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject1</code>.
   * Role represents a generic set of permissions that can be applied to any users or groups.
   * @alias module:model/InlineObject1
   */
  function InlineObject1() {
    _classCallCheck(this, InlineObject1);

    InlineObject1.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject1, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject1} obj Optional instance to populate.
     * @return {module:model/InlineObject1} The populated <code>InlineObject1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject1();

        if (data.hasOwnProperty('AutoApplies')) {
          obj['AutoApplies'] = _ApiClient["default"].convertToType(data['AutoApplies'], ['String']);
        }

        if (data.hasOwnProperty('ForceOverride')) {
          obj['ForceOverride'] = _ApiClient["default"].convertToType(data['ForceOverride'], 'Boolean');
        }

        if (data.hasOwnProperty('GroupRole')) {
          obj['GroupRole'] = _ApiClient["default"].convertToType(data['GroupRole'], 'Boolean');
        }

        if (data.hasOwnProperty('IsTeam')) {
          obj['IsTeam'] = _ApiClient["default"].convertToType(data['IsTeam'], 'Boolean');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('LastUpdated')) {
          obj['LastUpdated'] = _ApiClient["default"].convertToType(data['LastUpdated'], 'Number');
        }

        if (data.hasOwnProperty('Policies')) {
          obj['Policies'] = _ApiClient["default"].convertToType(data['Policies'], [_ServiceResourcePolicy["default"]]);
        }

        if (data.hasOwnProperty('PoliciesContextEditable')) {
          obj['PoliciesContextEditable'] = _ApiClient["default"].convertToType(data['PoliciesContextEditable'], 'Boolean');
        }

        if (data.hasOwnProperty('UserRole')) {
          obj['UserRole'] = _ApiClient["default"].convertToType(data['UserRole'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return InlineObject1;
}();
/**
 * @member {Array.<String>} AutoApplies
 */


InlineObject1.prototype['AutoApplies'] = undefined;
/**
 * Is used in a stack of roles, this one will always be applied last.
 * @member {Boolean} ForceOverride
 */

InlineObject1.prototype['ForceOverride'] = undefined;
/**
 * @member {Boolean} GroupRole
 */

InlineObject1.prototype['GroupRole'] = undefined;
/**
 * @member {Boolean} IsTeam
 */

InlineObject1.prototype['IsTeam'] = undefined;
/**
 * @member {String} Label
 */

InlineObject1.prototype['Label'] = undefined;
/**
 * @member {Number} LastUpdated
 */

InlineObject1.prototype['LastUpdated'] = undefined;
/**
 * @member {Array.<module:model/ServiceResourcePolicy>} Policies
 */

InlineObject1.prototype['Policies'] = undefined;
/**
 * @member {Boolean} PoliciesContextEditable
 */

InlineObject1.prototype['PoliciesContextEditable'] = undefined;
/**
 * @member {Boolean} UserRole
 */

InlineObject1.prototype['UserRole'] = undefined;
var _default = InlineObject1;
exports["default"] = _default;
//# sourceMappingURL=InlineObject1.js.map
