"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TreeNode = _interopRequireDefault(require("./TreeNode"));

var _TreeNodeType = _interopRequireDefault(require("./TreeNodeType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TreeListNodesRequest model module.
 * @module model/TreeListNodesRequest
 * @version 4.0
 */
var TreeListNodesRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TreeListNodesRequest</code>.
   * @alias module:model/TreeListNodesRequest
   */
  function TreeListNodesRequest() {
    _classCallCheck(this, TreeListNodesRequest);

    TreeListNodesRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TreeListNodesRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TreeListNodesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TreeListNodesRequest} obj Optional instance to populate.
     * @return {module:model/TreeListNodesRequest} The populated <code>TreeListNodesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TreeListNodesRequest();

        if (data.hasOwnProperty('Ancestors')) {
          obj['Ancestors'] = _ApiClient["default"].convertToType(data['Ancestors'], 'Boolean');
        }

        if (data.hasOwnProperty('FilterType')) {
          obj['FilterType'] = _TreeNodeType["default"].constructFromObject(data['FilterType']);
        }

        if (data.hasOwnProperty('Limit')) {
          obj['Limit'] = _ApiClient["default"].convertToType(data['Limit'], 'String');
        }

        if (data.hasOwnProperty('Node')) {
          obj['Node'] = _TreeNode["default"].constructFromObject(data['Node']);
        }

        if (data.hasOwnProperty('Offset')) {
          obj['Offset'] = _ApiClient["default"].convertToType(data['Offset'], 'String');
        }

        if (data.hasOwnProperty('Recursive')) {
          obj['Recursive'] = _ApiClient["default"].convertToType(data['Recursive'], 'Boolean');
        }

        if (data.hasOwnProperty('StatFlags')) {
          obj['StatFlags'] = _ApiClient["default"].convertToType(data['StatFlags'], ['Number']);
        }

        if (data.hasOwnProperty('WithCommits')) {
          obj['WithCommits'] = _ApiClient["default"].convertToType(data['WithCommits'], 'Boolean');
        }

        if (data.hasOwnProperty('WithVersions')) {
          obj['WithVersions'] = _ApiClient["default"].convertToType(data['WithVersions'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return TreeListNodesRequest;
}();
/**
 * @member {Boolean} Ancestors
 */


TreeListNodesRequest.prototype['Ancestors'] = undefined;
/**
 * @member {module:model/TreeNodeType} FilterType
 */

TreeListNodesRequest.prototype['FilterType'] = undefined;
/**
 * @member {String} Limit
 */

TreeListNodesRequest.prototype['Limit'] = undefined;
/**
 * @member {module:model/TreeNode} Node
 */

TreeListNodesRequest.prototype['Node'] = undefined;
/**
 * @member {String} Offset
 */

TreeListNodesRequest.prototype['Offset'] = undefined;
/**
 * @member {Boolean} Recursive
 */

TreeListNodesRequest.prototype['Recursive'] = undefined;
/**
 * @member {Array.<Number>} StatFlags
 */

TreeListNodesRequest.prototype['StatFlags'] = undefined;
/**
 * @member {Boolean} WithCommits
 */

TreeListNodesRequest.prototype['WithCommits'] = undefined;
/**
 * @member {Boolean} WithVersions
 */

TreeListNodesRequest.prototype['WithVersions'] = undefined;
var _default = TreeListNodesRequest;
exports["default"] = _default;
//# sourceMappingURL=TreeListNodesRequest.js.map
