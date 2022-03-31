"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmACLAction = _interopRequireDefault(require("./IdmACLAction"));

var _IdmRole = _interopRequireDefault(require("./IdmRole"));

var _IdmUser = _interopRequireDefault(require("./IdmUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestCellAcl model module.
 * @module model/RestCellAcl
 * @version 4.0
 */
var RestCellAcl = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestCellAcl</code>.
   * @alias module:model/RestCellAcl
   */
  function RestCellAcl() {
    _classCallCheck(this, RestCellAcl);

    RestCellAcl.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestCellAcl, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestCellAcl</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestCellAcl} obj Optional instance to populate.
     * @return {module:model/RestCellAcl} The populated <code>RestCellAcl</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestCellAcl();

        if (data.hasOwnProperty('Actions')) {
          obj['Actions'] = _ApiClient["default"].convertToType(data['Actions'], [_IdmACLAction["default"]]);
        }

        if (data.hasOwnProperty('Group')) {
          obj['Group'] = _IdmUser["default"].constructFromObject(data['Group']);
        }

        if (data.hasOwnProperty('IsUserRole')) {
          obj['IsUserRole'] = _ApiClient["default"].convertToType(data['IsUserRole'], 'Boolean');
        }

        if (data.hasOwnProperty('Role')) {
          obj['Role'] = _IdmRole["default"].constructFromObject(data['Role']);
        }

        if (data.hasOwnProperty('RoleId')) {
          obj['RoleId'] = _ApiClient["default"].convertToType(data['RoleId'], 'String');
        }

        if (data.hasOwnProperty('User')) {
          obj['User'] = _IdmUser["default"].constructFromObject(data['User']);
        }
      }

      return obj;
    }
  }]);

  return RestCellAcl;
}();
/**
 * @member {Array.<module:model/IdmACLAction>} Actions
 */


RestCellAcl.prototype['Actions'] = undefined;
/**
 * @member {module:model/IdmUser} Group
 */

RestCellAcl.prototype['Group'] = undefined;
/**
 * @member {Boolean} IsUserRole
 */

RestCellAcl.prototype['IsUserRole'] = undefined;
/**
 * @member {module:model/IdmRole} Role
 */

RestCellAcl.prototype['Role'] = undefined;
/**
 * @member {String} RoleId
 */

RestCellAcl.prototype['RoleId'] = undefined;
/**
 * @member {module:model/IdmUser} User
 */

RestCellAcl.prototype['User'] = undefined;
var _default = RestCellAcl;
exports["default"] = _default;
//# sourceMappingURL=RestCellAcl.js.map
