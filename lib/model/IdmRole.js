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
* The IdmRole model module.
* @module model/IdmRole
* @version 1.0
*/
var IdmRole = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>IdmRole</code>.
  * Role represents a generic set of permissions that can be applied to any users or groups.
  * @alias module:model/IdmRole
  * @class
  */
  function IdmRole() {
    _classCallCheck(this, IdmRole);

    _defineProperty(this, "Uuid", undefined);

    _defineProperty(this, "Label", undefined);

    _defineProperty(this, "IsTeam", undefined);

    _defineProperty(this, "GroupRole", undefined);

    _defineProperty(this, "UserRole", undefined);

    _defineProperty(this, "LastUpdated", undefined);

    _defineProperty(this, "AutoApplies", undefined);

    _defineProperty(this, "Policies", undefined);

    _defineProperty(this, "PoliciesContextEditable", undefined);

    _defineProperty(this, "ForceOverride", undefined);
  }
  /**
  * Constructs a <code>IdmRole</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/IdmRole} obj Optional instance to populate.
  * @return {module:model/IdmRole} The populated <code>IdmRole</code> instance.
  */


  _createClass(IdmRole, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmRole();

        if (data.hasOwnProperty('Uuid')) {
          obj['Uuid'] = _ApiClient["default"].convertToType(data['Uuid'], 'String');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('IsTeam')) {
          obj['IsTeam'] = _ApiClient["default"].convertToType(data['IsTeam'], 'Boolean');
        }

        if (data.hasOwnProperty('GroupRole')) {
          obj['GroupRole'] = _ApiClient["default"].convertToType(data['GroupRole'], 'Boolean');
        }

        if (data.hasOwnProperty('UserRole')) {
          obj['UserRole'] = _ApiClient["default"].convertToType(data['UserRole'], 'Boolean');
        }

        if (data.hasOwnProperty('LastUpdated')) {
          obj['LastUpdated'] = _ApiClient["default"].convertToType(data['LastUpdated'], 'Number');
        }

        if (data.hasOwnProperty('AutoApplies')) {
          obj['AutoApplies'] = _ApiClient["default"].convertToType(data['AutoApplies'], ['String']);
        }

        if (data.hasOwnProperty('Policies')) {
          obj['Policies'] = _ApiClient["default"].convertToType(data['Policies'], [_ServiceResourcePolicy["default"]]);
        }

        if (data.hasOwnProperty('PoliciesContextEditable')) {
          obj['PoliciesContextEditable'] = _ApiClient["default"].convertToType(data['PoliciesContextEditable'], 'Boolean');
        }

        if (data.hasOwnProperty('ForceOverride')) {
          obj['ForceOverride'] = _ApiClient["default"].convertToType(data['ForceOverride'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {String} Uuid
    */

  }]);

  return IdmRole;
}();

exports["default"] = IdmRole;
//# sourceMappingURL=IdmRole.js.map
