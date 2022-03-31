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
 * The IdmUserMetaNamespace model module.
 * @module model/IdmUserMetaNamespace
 * @version 4.0
 */
var IdmUserMetaNamespace = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IdmUserMetaNamespace</code>.
   * @alias module:model/IdmUserMetaNamespace
   */
  function IdmUserMetaNamespace() {
    _classCallCheck(this, IdmUserMetaNamespace);

    IdmUserMetaNamespace.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IdmUserMetaNamespace, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IdmUserMetaNamespace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdmUserMetaNamespace} obj Optional instance to populate.
     * @return {module:model/IdmUserMetaNamespace} The populated <code>IdmUserMetaNamespace</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmUserMetaNamespace();

        if (data.hasOwnProperty('Indexable')) {
          obj['Indexable'] = _ApiClient["default"].convertToType(data['Indexable'], 'Boolean');
        }

        if (data.hasOwnProperty('JsonDefinition')) {
          obj['JsonDefinition'] = _ApiClient["default"].convertToType(data['JsonDefinition'], 'String');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Namespace')) {
          obj['Namespace'] = _ApiClient["default"].convertToType(data['Namespace'], 'String');
        }

        if (data.hasOwnProperty('Order')) {
          obj['Order'] = _ApiClient["default"].convertToType(data['Order'], 'Number');
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
  }]);

  return IdmUserMetaNamespace;
}();
/**
 * @member {Boolean} Indexable
 */


IdmUserMetaNamespace.prototype['Indexable'] = undefined;
/**
 * @member {String} JsonDefinition
 */

IdmUserMetaNamespace.prototype['JsonDefinition'] = undefined;
/**
 * @member {String} Label
 */

IdmUserMetaNamespace.prototype['Label'] = undefined;
/**
 * @member {String} Namespace
 */

IdmUserMetaNamespace.prototype['Namespace'] = undefined;
/**
 * @member {Number} Order
 */

IdmUserMetaNamespace.prototype['Order'] = undefined;
/**
 * @member {Array.<module:model/ServiceResourcePolicy>} Policies
 */

IdmUserMetaNamespace.prototype['Policies'] = undefined;
/**
 * @member {Boolean} PoliciesContextEditable
 */

IdmUserMetaNamespace.prototype['PoliciesContextEditable'] = undefined;
var _default = IdmUserMetaNamespace;
exports["default"] = _default;
//# sourceMappingURL=IdmUserMetaNamespace.js.map
