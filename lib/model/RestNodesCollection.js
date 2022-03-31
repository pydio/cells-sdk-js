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
 * The RestNodesCollection model module.
 * @module model/RestNodesCollection
 * @version 4.0
 */
var RestNodesCollection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestNodesCollection</code>.
   * @alias module:model/RestNodesCollection
   */
  function RestNodesCollection() {
    _classCallCheck(this, RestNodesCollection);

    RestNodesCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestNodesCollection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestNodesCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestNodesCollection} obj Optional instance to populate.
     * @return {module:model/RestNodesCollection} The populated <code>RestNodesCollection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestNodesCollection();

        if (data.hasOwnProperty('Children')) {
          obj['Children'] = _ApiClient["default"].convertToType(data['Children'], [_TreeNode["default"]]);
        }

        if (data.hasOwnProperty('Parent')) {
          obj['Parent'] = _TreeNode["default"].constructFromObject(data['Parent']);
        }
      }

      return obj;
    }
  }]);

  return RestNodesCollection;
}();
/**
 * @member {Array.<module:model/TreeNode>} Children
 */


RestNodesCollection.prototype['Children'] = undefined;
/**
 * @member {module:model/TreeNode} Parent
 */

RestNodesCollection.prototype['Parent'] = undefined;
var _default = RestNodesCollection;
exports["default"] = _default;
//# sourceMappingURL=RestNodesCollection.js.map
