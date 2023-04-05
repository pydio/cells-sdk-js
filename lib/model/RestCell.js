"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestCellAcl = _interopRequireDefault(require("./RestCellAcl"));

var _ServiceResourcePolicy = _interopRequireDefault(require("./ServiceResourcePolicy"));

var _TreeNode = _interopRequireDefault(require("./TreeNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestCell model module.
 * @module model/RestCell
 * @version 4.0
 */
var RestCell = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestCell</code>.
   * @alias module:model/RestCell
   */
  function RestCell() {
    _classCallCheck(this, RestCell);

    RestCell.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestCell, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestCell</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestCell} obj Optional instance to populate.
     * @return {module:model/RestCell} The populated <code>RestCell</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestCell();

        if (data.hasOwnProperty('ACLs')) {
          obj['ACLs'] = _ApiClient["default"].convertToType(data['ACLs'], {
            'String': _RestCellAcl["default"]
          });
        }

        if (data.hasOwnProperty('AccessEnd')) {
          obj['AccessEnd'] = _ApiClient["default"].convertToType(data['AccessEnd'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Policies')) {
          obj['Policies'] = _ApiClient["default"].convertToType(data['Policies'], [_ServiceResourcePolicy["default"]]);
        }

        if (data.hasOwnProperty('PoliciesContextEditable')) {
          obj['PoliciesContextEditable'] = _ApiClient["default"].convertToType(data['PoliciesContextEditable'], 'Boolean');
        }

        if (data.hasOwnProperty('RootNodes')) {
          obj['RootNodes'] = _ApiClient["default"].convertToType(data['RootNodes'], [_TreeNode["default"]]);
        }

        if (data.hasOwnProperty('Uuid')) {
          obj['Uuid'] = _ApiClient["default"].convertToType(data['Uuid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RestCell;
}();
/**
 * @member {Object.<String, module:model/RestCellAcl>} ACLs
 */


RestCell.prototype['ACLs'] = undefined;
/**
 * @member {String} AccessEnd
 */

RestCell.prototype['AccessEnd'] = undefined;
/**
 * @member {String} Description
 */

RestCell.prototype['Description'] = undefined;
/**
 * @member {String} Label
 */

RestCell.prototype['Label'] = undefined;
/**
 * @member {Array.<module:model/ServiceResourcePolicy>} Policies
 */

RestCell.prototype['Policies'] = undefined;
/**
 * @member {Boolean} PoliciesContextEditable
 */

RestCell.prototype['PoliciesContextEditable'] = undefined;
/**
 * @member {Array.<module:model/TreeNode>} RootNodes
 */

RestCell.prototype['RootNodes'] = undefined;
/**
 * @member {String} Uuid
 */

RestCell.prototype['Uuid'] = undefined;
var _default = RestCell;
exports["default"] = _default;
//# sourceMappingURL=RestCell.js.map
