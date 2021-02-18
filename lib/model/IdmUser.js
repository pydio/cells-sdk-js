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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The IdmUser model module.
* @module model/IdmUser
* @version 1.0
*/
var IdmUser = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>IdmUser</code>.
  * @alias module:model/IdmUser
  * @class
  */
  function IdmUser() {
    _classCallCheck(this, IdmUser);

    _defineProperty(this, "Uuid", undefined);

    _defineProperty(this, "GroupPath", undefined);

    _defineProperty(this, "Attributes", undefined);

    _defineProperty(this, "Roles", undefined);

    _defineProperty(this, "Login", undefined);

    _defineProperty(this, "Password", undefined);

    _defineProperty(this, "OldPassword", undefined);

    _defineProperty(this, "IsGroup", undefined);

    _defineProperty(this, "GroupLabel", undefined);

    _defineProperty(this, "LastConnected", undefined);

    _defineProperty(this, "Policies", undefined);

    _defineProperty(this, "PoliciesContextEditable", undefined);
  }
  /**
  * Constructs a <code>IdmUser</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/IdmUser} obj Optional instance to populate.
  * @return {module:model/IdmUser} The populated <code>IdmUser</code> instance.
  */


  _createClass(IdmUser, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmUser();

        if (data.hasOwnProperty('Uuid')) {
          obj['Uuid'] = _ApiClient["default"].convertToType(data['Uuid'], 'String');
        }

        if (data.hasOwnProperty('GroupPath')) {
          obj['GroupPath'] = _ApiClient["default"].convertToType(data['GroupPath'], 'String');
        }

        if (data.hasOwnProperty('Attributes')) {
          obj['Attributes'] = _ApiClient["default"].convertToType(data['Attributes'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Roles')) {
          obj['Roles'] = _ApiClient["default"].convertToType(data['Roles'], [_IdmRole["default"]]);
        }

        if (data.hasOwnProperty('Login')) {
          obj['Login'] = _ApiClient["default"].convertToType(data['Login'], 'String');
        }

        if (data.hasOwnProperty('Password')) {
          obj['Password'] = _ApiClient["default"].convertToType(data['Password'], 'String');
        }

        if (data.hasOwnProperty('OldPassword')) {
          obj['OldPassword'] = _ApiClient["default"].convertToType(data['OldPassword'], 'String');
        }

        if (data.hasOwnProperty('IsGroup')) {
          obj['IsGroup'] = _ApiClient["default"].convertToType(data['IsGroup'], 'Boolean');
        }

        if (data.hasOwnProperty('GroupLabel')) {
          obj['GroupLabel'] = _ApiClient["default"].convertToType(data['GroupLabel'], 'String');
        }

        if (data.hasOwnProperty('LastConnected')) {
          obj['LastConnected'] = _ApiClient["default"].convertToType(data['LastConnected'], 'Number');
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
    * @member {String} Uuid
    */

  }]);

  return IdmUser;
}();

exports["default"] = IdmUser;
//# sourceMappingURL=IdmUser.js.map
