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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The TreeListNodesRequest model module.
* @module model/TreeListNodesRequest
* @version 1.0
*/
var TreeListNodesRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>TreeListNodesRequest</code>.
  * @alias module:model/TreeListNodesRequest
  * @class
  */
  function TreeListNodesRequest() {
    _classCallCheck(this, TreeListNodesRequest);

    _defineProperty(this, "Node", undefined);

    _defineProperty(this, "Recursive", undefined);

    _defineProperty(this, "Ancestors", undefined);

    _defineProperty(this, "WithVersions", undefined);

    _defineProperty(this, "WithCommits", undefined);

    _defineProperty(this, "Limit", undefined);

    _defineProperty(this, "Offset", undefined);

    _defineProperty(this, "FilterType", undefined);
  }
  /**
  * Constructs a <code>TreeListNodesRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/TreeListNodesRequest} obj Optional instance to populate.
  * @return {module:model/TreeListNodesRequest} The populated <code>TreeListNodesRequest</code> instance.
  */


  _createClass(TreeListNodesRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TreeListNodesRequest();

        if (data.hasOwnProperty('Node')) {
          obj['Node'] = _TreeNode["default"].constructFromObject(data['Node']);
        }

        if (data.hasOwnProperty('Recursive')) {
          obj['Recursive'] = _ApiClient["default"].convertToType(data['Recursive'], 'Boolean');
        }

        if (data.hasOwnProperty('Ancestors')) {
          obj['Ancestors'] = _ApiClient["default"].convertToType(data['Ancestors'], 'Boolean');
        }

        if (data.hasOwnProperty('WithVersions')) {
          obj['WithVersions'] = _ApiClient["default"].convertToType(data['WithVersions'], 'Boolean');
        }

        if (data.hasOwnProperty('WithCommits')) {
          obj['WithCommits'] = _ApiClient["default"].convertToType(data['WithCommits'], 'Boolean');
        }

        if (data.hasOwnProperty('Limit')) {
          obj['Limit'] = _ApiClient["default"].convertToType(data['Limit'], 'String');
        }

        if (data.hasOwnProperty('Offset')) {
          obj['Offset'] = _ApiClient["default"].convertToType(data['Offset'], 'String');
        }

        if (data.hasOwnProperty('FilterType')) {
          obj['FilterType'] = _TreeNodeType["default"].constructFromObject(data['FilterType']);
        }
      }

      return obj;
    }
    /**
    * @member {module:model/TreeNode} Node
    */

  }]);

  return TreeListNodesRequest;
}();

exports["default"] = TreeListNodesRequest;
//# sourceMappingURL=TreeListNodesRequest.js.map
