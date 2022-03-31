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

/**
 * The IdmPolicyGroup model module.
 * @module model/IdmPolicyGroup
 * @version 4.0
 */
var IdmPolicyGroup = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IdmPolicyGroup</code>.
   * @alias module:model/IdmPolicyGroup
   */
  function IdmPolicyGroup() {
    _classCallCheck(this, IdmPolicyGroup);

    IdmPolicyGroup.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IdmPolicyGroup, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IdmPolicyGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdmPolicyGroup} obj Optional instance to populate.
     * @return {module:model/IdmPolicyGroup} The populated <code>IdmPolicyGroup</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmPolicyGroup();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('LastUpdated')) {
          obj['LastUpdated'] = _ApiClient["default"].convertToType(data['LastUpdated'], 'Number');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('OwnerUuid')) {
          obj['OwnerUuid'] = _ApiClient["default"].convertToType(data['OwnerUuid'], 'String');
        }

        if (data.hasOwnProperty('Policies')) {
          obj['Policies'] = _ApiClient["default"].convertToType(data['Policies'], [_IdmPolicy["default"]]);
        }

        if (data.hasOwnProperty('ResourceGroup')) {
          obj['ResourceGroup'] = _IdmPolicyResourceGroup["default"].constructFromObject(data['ResourceGroup']);
        }

        if (data.hasOwnProperty('Uuid')) {
          obj['Uuid'] = _ApiClient["default"].convertToType(data['Uuid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IdmPolicyGroup;
}();
/**
 * @member {String} Description
 */


IdmPolicyGroup.prototype['Description'] = undefined;
/**
 * @member {Number} LastUpdated
 */

IdmPolicyGroup.prototype['LastUpdated'] = undefined;
/**
 * @member {String} Name
 */

IdmPolicyGroup.prototype['Name'] = undefined;
/**
 * @member {String} OwnerUuid
 */

IdmPolicyGroup.prototype['OwnerUuid'] = undefined;
/**
 * @member {Array.<module:model/IdmPolicy>} Policies
 */

IdmPolicyGroup.prototype['Policies'] = undefined;
/**
 * @member {module:model/IdmPolicyResourceGroup} ResourceGroup
 */

IdmPolicyGroup.prototype['ResourceGroup'] = undefined;
/**
 * @member {String} Uuid
 */

IdmPolicyGroup.prototype['Uuid'] = undefined;
var _default = IdmPolicyGroup;
exports["default"] = _default;
//# sourceMappingURL=IdmPolicyGroup.js.map
