"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmWorkspaceScope = _interopRequireDefault(require("./IdmWorkspaceScope"));

var _ServiceResourcePolicy = _interopRequireDefault(require("./ServiceResourcePolicy"));

var _TreeNode = _interopRequireDefault(require("./TreeNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject3 model module.
 * @module model/InlineObject3
 * @version 4.0
 */
var InlineObject3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject3</code>.
   * A Workspace is composed of a set of nodes UUIDs and is used to provide accesses to the tree via ACLs.
   * @alias module:model/InlineObject3
   */
  function InlineObject3() {
    _classCallCheck(this, InlineObject3);

    InlineObject3.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject3, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject3} obj Optional instance to populate.
     * @return {module:model/InlineObject3} The populated <code>InlineObject3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject3();

        if (data.hasOwnProperty('Attributes')) {
          obj['Attributes'] = _ApiClient["default"].convertToType(data['Attributes'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
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

        if (data.hasOwnProperty('RootNodes')) {
          obj['RootNodes'] = _ApiClient["default"].convertToType(data['RootNodes'], {
            'String': _TreeNode["default"]
          });
        }

        if (data.hasOwnProperty('RootUUIDs')) {
          obj['RootUUIDs'] = _ApiClient["default"].convertToType(data['RootUUIDs'], ['String']);
        }

        if (data.hasOwnProperty('Scope')) {
          obj['Scope'] = _IdmWorkspaceScope["default"].constructFromObject(data['Scope']);
        }

        if (data.hasOwnProperty('UUID')) {
          obj['UUID'] = _ApiClient["default"].convertToType(data['UUID'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject3;
}();
/**
 * @member {String} Attributes
 */


InlineObject3.prototype['Attributes'] = undefined;
/**
 * @member {String} Description
 */

InlineObject3.prototype['Description'] = undefined;
/**
 * @member {String} Label
 */

InlineObject3.prototype['Label'] = undefined;
/**
 * @member {Number} LastUpdated
 */

InlineObject3.prototype['LastUpdated'] = undefined;
/**
 * @member {Array.<module:model/ServiceResourcePolicy>} Policies
 */

InlineObject3.prototype['Policies'] = undefined;
/**
 * @member {Boolean} PoliciesContextEditable
 */

InlineObject3.prototype['PoliciesContextEditable'] = undefined;
/**
 * @member {Object.<String, module:model/TreeNode>} RootNodes
 */

InlineObject3.prototype['RootNodes'] = undefined;
/**
 * @member {Array.<String>} RootUUIDs
 */

InlineObject3.prototype['RootUUIDs'] = undefined;
/**
 * @member {module:model/IdmWorkspaceScope} Scope
 */

InlineObject3.prototype['Scope'] = undefined;
/**
 * @member {String} UUID
 */

InlineObject3.prototype['UUID'] = undefined;
var _default = InlineObject3;
exports["default"] = _default;
//# sourceMappingURL=InlineObject3.js.map
