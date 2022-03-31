"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServiceResourcePolicy = _interopRequireDefault(require("./ServiceResourcePolicy"));

var _TreeNode = _interopRequireDefault(require("./TreeNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IdmUserMeta model module.
 * @module model/IdmUserMeta
 * @version 4.0
 */
var IdmUserMeta = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IdmUserMeta</code>.
   * @alias module:model/IdmUserMeta
   */
  function IdmUserMeta() {
    _classCallCheck(this, IdmUserMeta);

    IdmUserMeta.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IdmUserMeta, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IdmUserMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdmUserMeta} obj Optional instance to populate.
     * @return {module:model/IdmUserMeta} The populated <code>IdmUserMeta</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmUserMeta();

        if (data.hasOwnProperty('JsonValue')) {
          obj['JsonValue'] = _ApiClient["default"].convertToType(data['JsonValue'], 'String');
        }

        if (data.hasOwnProperty('Namespace')) {
          obj['Namespace'] = _ApiClient["default"].convertToType(data['Namespace'], 'String');
        }

        if (data.hasOwnProperty('NodeUuid')) {
          obj['NodeUuid'] = _ApiClient["default"].convertToType(data['NodeUuid'], 'String');
        }

        if (data.hasOwnProperty('Policies')) {
          obj['Policies'] = _ApiClient["default"].convertToType(data['Policies'], [_ServiceResourcePolicy["default"]]);
        }

        if (data.hasOwnProperty('PoliciesContextEditable')) {
          obj['PoliciesContextEditable'] = _ApiClient["default"].convertToType(data['PoliciesContextEditable'], 'Boolean');
        }

        if (data.hasOwnProperty('ResolvedNode')) {
          obj['ResolvedNode'] = _TreeNode["default"].constructFromObject(data['ResolvedNode']);
        }

        if (data.hasOwnProperty('Uuid')) {
          obj['Uuid'] = _ApiClient["default"].convertToType(data['Uuid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IdmUserMeta;
}();
/**
 * @member {String} JsonValue
 */


IdmUserMeta.prototype['JsonValue'] = undefined;
/**
 * @member {String} Namespace
 */

IdmUserMeta.prototype['Namespace'] = undefined;
/**
 * @member {String} NodeUuid
 */

IdmUserMeta.prototype['NodeUuid'] = undefined;
/**
 * @member {Array.<module:model/ServiceResourcePolicy>} Policies
 */

IdmUserMeta.prototype['Policies'] = undefined;
/**
 * @member {Boolean} PoliciesContextEditable
 */

IdmUserMeta.prototype['PoliciesContextEditable'] = undefined;
/**
 * @member {module:model/TreeNode} ResolvedNode
 */

IdmUserMeta.prototype['ResolvedNode'] = undefined;
/**
 * @member {String} Uuid
 */

IdmUserMeta.prototype['Uuid'] = undefined;
var _default = IdmUserMeta;
exports["default"] = _default;
//# sourceMappingURL=IdmUserMeta.js.map
