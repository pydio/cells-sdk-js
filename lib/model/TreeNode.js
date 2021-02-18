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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The TreeNode model module.
* @module model/TreeNode
* @version 1.0
*/
var TreeNode = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>TreeNode</code>.
  * @alias module:model/TreeNode
  * @class
  */
  function TreeNode() {
    _classCallCheck(this, TreeNode);

    _defineProperty(this, "Uuid", undefined);

    _defineProperty(this, "Path", undefined);

    _defineProperty(this, "Type", undefined);

    _defineProperty(this, "Size", undefined);

    _defineProperty(this, "MTime", undefined);

    _defineProperty(this, "Mode", undefined);

    _defineProperty(this, "Etag", undefined);

    _defineProperty(this, "Commits", undefined);

    _defineProperty(this, "MetaStore", undefined);

    _defineProperty(this, "AppearsIn", undefined);
  }
  /**
  * Constructs a <code>TreeNode</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/TreeNode} obj Optional instance to populate.
  * @return {module:model/TreeNode} The populated <code>TreeNode</code> instance.
  */


  _createClass(TreeNode, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TreeNode();

        if (data.hasOwnProperty('Uuid')) {
          obj['Uuid'] = _ApiClient["default"].convertToType(data['Uuid'], 'String');
        }

        if (data.hasOwnProperty('Path')) {
          obj['Path'] = _ApiClient["default"].convertToType(data['Path'], 'String');
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _TreeNodeType["default"].constructFromObject(data['Type']);
        }

        if (data.hasOwnProperty('Size')) {
          obj['Size'] = _ApiClient["default"].convertToType(data['Size'], 'String');
        }

        if (data.hasOwnProperty('MTime')) {
          obj['MTime'] = _ApiClient["default"].convertToType(data['MTime'], 'String');
        }

        if (data.hasOwnProperty('Mode')) {
          obj['Mode'] = _ApiClient["default"].convertToType(data['Mode'], 'Number');
        }

        if (data.hasOwnProperty('Etag')) {
          obj['Etag'] = _ApiClient["default"].convertToType(data['Etag'], 'String');
        }

        if (data.hasOwnProperty('Commits')) {
          obj['Commits'] = _ApiClient["default"].convertToType(data['Commits'], [_TreeChangeLog["default"]]);
        }

        if (data.hasOwnProperty('MetaStore')) {
          obj['MetaStore'] = _ApiClient["default"].convertToType(data['MetaStore'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('AppearsIn')) {
          obj['AppearsIn'] = _ApiClient["default"].convertToType(data['AppearsIn'], [_TreeWorkspaceRelativePath["default"]]);
        }
      }

      return obj;
    }
    /**
    * @member {String} Uuid
    */

  }]);

  return TreeNode;
}();

exports["default"] = TreeNode;
//# sourceMappingURL=TreeNode.js.map
