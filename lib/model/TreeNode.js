"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TreeChangeLog = _interopRequireDefault(require("./TreeChangeLog"));

var _TreeNodeType = _interopRequireDefault(require("./TreeNodeType"));

var _TreeWorkspaceRelativePath = _interopRequireDefault(require("./TreeWorkspaceRelativePath"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TreeNode model module.
 * @module model/TreeNode
 * @version 4.0
 */
var TreeNode = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TreeNode</code>.
   * @alias module:model/TreeNode
   */
  function TreeNode() {
    _classCallCheck(this, TreeNode);

    TreeNode.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TreeNode, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TreeNode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TreeNode} obj Optional instance to populate.
     * @return {module:model/TreeNode} The populated <code>TreeNode</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TreeNode();

        if (data.hasOwnProperty('AppearsIn')) {
          obj['AppearsIn'] = _ApiClient["default"].convertToType(data['AppearsIn'], [_TreeWorkspaceRelativePath["default"]]);
        }

        if (data.hasOwnProperty('Commits')) {
          obj['Commits'] = _ApiClient["default"].convertToType(data['Commits'], [_TreeChangeLog["default"]]);
        }

        if (data.hasOwnProperty('Etag')) {
          obj['Etag'] = _ApiClient["default"].convertToType(data['Etag'], 'String');
        }

        if (data.hasOwnProperty('MTime')) {
          obj['MTime'] = _ApiClient["default"].convertToType(data['MTime'], 'String');
        }

        if (data.hasOwnProperty('MetaStore')) {
          obj['MetaStore'] = _ApiClient["default"].convertToType(data['MetaStore'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Mode')) {
          obj['Mode'] = _ApiClient["default"].convertToType(data['Mode'], 'Number');
        }

        if (data.hasOwnProperty('Path')) {
          obj['Path'] = _ApiClient["default"].convertToType(data['Path'], 'String');
        }

        if (data.hasOwnProperty('Size')) {
          obj['Size'] = _ApiClient["default"].convertToType(data['Size'], 'String');
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _TreeNodeType["default"].constructFromObject(data['Type']);
        }

        if (data.hasOwnProperty('Uuid')) {
          obj['Uuid'] = _ApiClient["default"].convertToType(data['Uuid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TreeNode;
}();
/**
 * @member {Array.<module:model/TreeWorkspaceRelativePath>} AppearsIn
 */


TreeNode.prototype['AppearsIn'] = undefined;
/**
 * @member {Array.<module:model/TreeChangeLog>} Commits
 */

TreeNode.prototype['Commits'] = undefined;
/**
 * @member {String} Etag
 */

TreeNode.prototype['Etag'] = undefined;
/**
 * @member {String} MTime
 */

TreeNode.prototype['MTime'] = undefined;
/**
 * @member {Object.<String, String>} MetaStore
 */

TreeNode.prototype['MetaStore'] = undefined;
/**
 * @member {Number} Mode
 */

TreeNode.prototype['Mode'] = undefined;
/**
 * @member {String} Path
 */

TreeNode.prototype['Path'] = undefined;
/**
 * @member {String} Size
 */

TreeNode.prototype['Size'] = undefined;
/**
 * @member {module:model/TreeNodeType} Type
 */

TreeNode.prototype['Type'] = undefined;
/**
 * @member {String} Uuid
 */

TreeNode.prototype['Uuid'] = undefined;
var _default = TreeNode;
exports["default"] = _default;
//# sourceMappingURL=TreeNode.js.map
