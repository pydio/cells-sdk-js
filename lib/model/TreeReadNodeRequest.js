"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TreeNode = _interopRequireDefault(require("./TreeNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The TreeReadNodeRequest model module.
* @module model/TreeReadNodeRequest
* @version 1.0
*/
var TreeReadNodeRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>TreeReadNodeRequest</code>.
  * @alias module:model/TreeReadNodeRequest
  * @class
  */
  function TreeReadNodeRequest() {
    _classCallCheck(this, TreeReadNodeRequest);

    _defineProperty(this, "Node", undefined);

    _defineProperty(this, "WithCommits", undefined);

    _defineProperty(this, "WithExtendedStats", undefined);

    _defineProperty(this, "ObjectStats", undefined);
  }
  /**
  * Constructs a <code>TreeReadNodeRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/TreeReadNodeRequest} obj Optional instance to populate.
  * @return {module:model/TreeReadNodeRequest} The populated <code>TreeReadNodeRequest</code> instance.
  */


  _createClass(TreeReadNodeRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TreeReadNodeRequest();

        if (data.hasOwnProperty('Node')) {
          obj['Node'] = _TreeNode["default"].constructFromObject(data['Node']);
        }

        if (data.hasOwnProperty('WithCommits')) {
          obj['WithCommits'] = _ApiClient["default"].convertToType(data['WithCommits'], 'Boolean');
        }

        if (data.hasOwnProperty('WithExtendedStats')) {
          obj['WithExtendedStats'] = _ApiClient["default"].convertToType(data['WithExtendedStats'], 'Boolean');
        }

        if (data.hasOwnProperty('ObjectStats')) {
          obj['ObjectStats'] = _ApiClient["default"].convertToType(data['ObjectStats'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {module:model/TreeNode} Node
    */

  }]);

  return TreeReadNodeRequest;
}();

exports["default"] = TreeReadNodeRequest;
//# sourceMappingURL=TreeReadNodeRequest.js.map
