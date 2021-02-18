"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmPolicy = _interopRequireDefault(require("./IdmPolicy"));

var _IdmPolicyResourceGroup = _interopRequireDefault(require("./IdmPolicyResourceGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The IdmPolicyGroup model module.
* @module model/IdmPolicyGroup
* @version 1.0
*/
var IdmPolicyGroup = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>IdmPolicyGroup</code>.
  * @alias module:model/IdmPolicyGroup
  * @class
  */
  function IdmPolicyGroup() {
    _classCallCheck(this, IdmPolicyGroup);

    _defineProperty(this, "Uuid", undefined);

    _defineProperty(this, "Name", undefined);

    _defineProperty(this, "Description", undefined);

    _defineProperty(this, "OwnerUuid", undefined);

    _defineProperty(this, "ResourceGroup", undefined);

    _defineProperty(this, "LastUpdated", undefined);

    _defineProperty(this, "Policies", undefined);
  }
  /**
  * Constructs a <code>IdmPolicyGroup</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/IdmPolicyGroup} obj Optional instance to populate.
  * @return {module:model/IdmPolicyGroup} The populated <code>IdmPolicyGroup</code> instance.
  */


  _createClass(IdmPolicyGroup, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmPolicyGroup();

        if (data.hasOwnProperty('Uuid')) {
          obj['Uuid'] = _ApiClient["default"].convertToType(data['Uuid'], 'String');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('OwnerUuid')) {
          obj['OwnerUuid'] = _ApiClient["default"].convertToType(data['OwnerUuid'], 'String');
        }

        if (data.hasOwnProperty('ResourceGroup')) {
          obj['ResourceGroup'] = _IdmPolicyResourceGroup["default"].constructFromObject(data['ResourceGroup']);
        }

        if (data.hasOwnProperty('LastUpdated')) {
          obj['LastUpdated'] = _ApiClient["default"].convertToType(data['LastUpdated'], 'Number');
        }

        if (data.hasOwnProperty('Policies')) {
          obj['Policies'] = _ApiClient["default"].convertToType(data['Policies'], [_IdmPolicy["default"]]);
        }
      }

      return obj;
    }
    /**
    * @member {String} Uuid
    */

  }]);

  return IdmPolicyGroup;
}();

exports["default"] = IdmPolicyGroup;
//# sourceMappingURL=IdmPolicyGroup.js.map
