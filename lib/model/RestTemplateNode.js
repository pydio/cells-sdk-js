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

/**
 * The RestTemplateNode model module.
 * @module model/RestTemplateNode
 * @version 4.0
 */
var RestTemplateNode = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestTemplateNode</code>.
   * @alias module:model/RestTemplateNode
   */
  function RestTemplateNode() {
    _classCallCheck(this, RestTemplateNode);

    RestTemplateNode.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestTemplateNode, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestTemplateNode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestTemplateNode} obj Optional instance to populate.
     * @return {module:model/RestTemplateNode} The populated <code>RestTemplateNode</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestTemplateNode();

        if (data.hasOwnProperty('Children')) {
          obj['Children'] = _ApiClient["default"].convertToType(data['Children'], {
            'String': _TreeNode["default"]
          });
        }

        if (data.hasOwnProperty('Node')) {
          obj['Node'] = _TreeNode["default"].constructFromObject(data['Node']);
        }
      }

      return obj;
    }
  }]);

  return RestTemplateNode;
}();
/**
 * @member {Object.<String, module:model/TreeNode>} Children
 */


RestTemplateNode.prototype['Children'] = undefined;
/**
 * @member {module:model/TreeNode} Node
 */

RestTemplateNode.prototype['Node'] = undefined;
var _default = RestTemplateNode;
exports["default"] = _default;
//# sourceMappingURL=RestTemplateNode.js.map
