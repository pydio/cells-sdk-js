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
 * The InlineObject2 model module.
 * @module model/InlineObject2
 * @version 4.0
 */
var InlineObject2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject2</code>.
   * A Workspace is composed of a set of nodes UUIDs and is used to provide accesses to the tree via ACLs.
   * @alias module:model/InlineObject2
   */
  function InlineObject2() {
    _classCallCheck(this, InlineObject2);

    InlineObject2.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject2, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject2} obj Optional instance to populate.
     * @return {module:model/InlineObject2} The populated <code>InlineObject2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject2();

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

  return InlineObject2;
}();
/**
 * @member {String} Attributes
 */


InlineObject2.prototype['Attributes'] = undefined;
/**
 * @member {String} Description
 */

InlineObject2.prototype['Description'] = undefined;
/**
 * @member {String} Label
 */

InlineObject2.prototype['Label'] = undefined;
/**
 * @member {Number} LastUpdated
 */

InlineObject2.prototype['LastUpdated'] = undefined;
/**
 * @member {Array.<module:model/ServiceResourcePolicy>} Policies
 */

InlineObject2.prototype['Policies'] = undefined;
/**
 * @member {Boolean} PoliciesContextEditable
 */

InlineObject2.prototype['PoliciesContextEditable'] = undefined;
/**
 * @member {Object.<String, module:model/TreeNode>} RootNodes
 */

InlineObject2.prototype['RootNodes'] = undefined;
/**
 * @member {Array.<String>} RootUUIDs
 */

InlineObject2.prototype['RootUUIDs'] = undefined;
/**
 * @member {module:model/IdmWorkspaceScope} Scope
 */

InlineObject2.prototype['Scope'] = undefined;
/**
 * @member {String} UUID
 */

InlineObject2.prototype['UUID'] = undefined;
var _default = InlineObject2;
exports["default"] = _default;
//# sourceMappingURL=InlineObject2.js.map
