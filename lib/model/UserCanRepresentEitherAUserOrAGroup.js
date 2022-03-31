"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmRole = _interopRequireDefault(require("./IdmRole"));

var _ServiceResourcePolicy = _interopRequireDefault(require("./ServiceResourcePolicy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UserCanRepresentEitherAUserOrAGroup model module.
 * @module model/UserCanRepresentEitherAUserOrAGroup
 * @version 4.0
 */
var UserCanRepresentEitherAUserOrAGroup = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserCanRepresentEitherAUserOrAGroup</code>.
   * @alias module:model/UserCanRepresentEitherAUserOrAGroup
   */
  function UserCanRepresentEitherAUserOrAGroup() {
    _classCallCheck(this, UserCanRepresentEitherAUserOrAGroup);

    UserCanRepresentEitherAUserOrAGroup.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserCanRepresentEitherAUserOrAGroup, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserCanRepresentEitherAUserOrAGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserCanRepresentEitherAUserOrAGroup} obj Optional instance to populate.
     * @return {module:model/UserCanRepresentEitherAUserOrAGroup} The populated <code>UserCanRepresentEitherAUserOrAGroup</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserCanRepresentEitherAUserOrAGroup();

        if (data.hasOwnProperty('Attributes')) {
          obj['Attributes'] = _ApiClient["default"].convertToType(data['Attributes'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('GroupLabel')) {
          obj['GroupLabel'] = _ApiClient["default"].convertToType(data['GroupLabel'], 'String');
        }

        if (data.hasOwnProperty('GroupPath')) {
          obj['GroupPath'] = _ApiClient["default"].convertToType(data['GroupPath'], 'String');
        }

        if (data.hasOwnProperty('IsGroup')) {
          obj['IsGroup'] = _ApiClient["default"].convertToType(data['IsGroup'], 'Boolean');
        }

        if (data.hasOwnProperty('LastConnected')) {
          obj['LastConnected'] = _ApiClient["default"].convertToType(data['LastConnected'], 'Number');
        }

        if (data.hasOwnProperty('OldPassword')) {
          obj['OldPassword'] = _ApiClient["default"].convertToType(data['OldPassword'], 'String');
        }

        if (data.hasOwnProperty('Password')) {
          obj['Password'] = _ApiClient["default"].convertToType(data['Password'], 'String');
        }

        if (data.hasOwnProperty('Policies')) {
          obj['Policies'] = _ApiClient["default"].convertToType(data['Policies'], [_ServiceResourcePolicy["default"]]);
        }

        if (data.hasOwnProperty('PoliciesContextEditable')) {
          obj['PoliciesContextEditable'] = _ApiClient["default"].convertToType(data['PoliciesContextEditable'], 'Boolean');
        }

        if (data.hasOwnProperty('Roles')) {
          obj['Roles'] = _ApiClient["default"].convertToType(data['Roles'], [_IdmRole["default"]]);
        }

        if (data.hasOwnProperty('Uuid')) {
          obj['Uuid'] = _ApiClient["default"].convertToType(data['Uuid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UserCanRepresentEitherAUserOrAGroup;
}();
/**
 * @member {Object.<String, String>} Attributes
 */


UserCanRepresentEitherAUserOrAGroup.prototype['Attributes'] = undefined;
/**
 * @member {String} GroupLabel
 */

UserCanRepresentEitherAUserOrAGroup.prototype['GroupLabel'] = undefined;
/**
 * @member {String} GroupPath
 */

UserCanRepresentEitherAUserOrAGroup.prototype['GroupPath'] = undefined;
/**
 * @member {Boolean} IsGroup
 */

UserCanRepresentEitherAUserOrAGroup.prototype['IsGroup'] = undefined;
/**
 * @member {Number} LastConnected
 */

UserCanRepresentEitherAUserOrAGroup.prototype['LastConnected'] = undefined;
/**
 * @member {String} OldPassword
 */

UserCanRepresentEitherAUserOrAGroup.prototype['OldPassword'] = undefined;
/**
 * @member {String} Password
 */

UserCanRepresentEitherAUserOrAGroup.prototype['Password'] = undefined;
/**
 * @member {Array.<module:model/ServiceResourcePolicy>} Policies
 */

UserCanRepresentEitherAUserOrAGroup.prototype['Policies'] = undefined;
/**
 * Context-resolved to quickly check if user is editable or not.
 * @member {Boolean} PoliciesContextEditable
 */

UserCanRepresentEitherAUserOrAGroup.prototype['PoliciesContextEditable'] = undefined;
/**
 * @member {Array.<module:model/IdmRole>} Roles
 */

UserCanRepresentEitherAUserOrAGroup.prototype['Roles'] = undefined;
/**
 * @member {String} Uuid
 */

UserCanRepresentEitherAUserOrAGroup.prototype['Uuid'] = undefined;
var _default = UserCanRepresentEitherAUserOrAGroup;
exports["default"] = _default;
//# sourceMappingURL=UserCanRepresentEitherAUserOrAGroup.js.map
