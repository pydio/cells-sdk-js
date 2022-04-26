"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TreeNode = _interopRequireDefault(require("./TreeNode"));

var _TreeNodeChangeEventEventType = _interopRequireDefault(require("./TreeNodeChangeEventEventType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TreeNodeChangeEvent model module.
 * @module model/TreeNodeChangeEvent
 * @version 4.0
 */
var TreeNodeChangeEvent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TreeNodeChangeEvent</code>.
   * @alias module:model/TreeNodeChangeEvent
   */
  function TreeNodeChangeEvent() {
    _classCallCheck(this, TreeNodeChangeEvent);

    TreeNodeChangeEvent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TreeNodeChangeEvent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TreeNodeChangeEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TreeNodeChangeEvent} obj Optional instance to populate.
     * @return {module:model/TreeNodeChangeEvent} The populated <code>TreeNodeChangeEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TreeNodeChangeEvent();

        if (data.hasOwnProperty('Metadata')) {
          obj['Metadata'] = _ApiClient["default"].convertToType(data['Metadata'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Optimistic')) {
          obj['Optimistic'] = _ApiClient["default"].convertToType(data['Optimistic'], 'Boolean');
        }

        if (data.hasOwnProperty('Silent')) {
          obj['Silent'] = _ApiClient["default"].convertToType(data['Silent'], 'Boolean');
        }

        if (data.hasOwnProperty('Source')) {
          obj['Source'] = _TreeNode["default"].constructFromObject(data['Source']);
        }

        if (data.hasOwnProperty('Target')) {
          obj['Target'] = _TreeNode["default"].constructFromObject(data['Target']);
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _TreeNodeChangeEventEventType["default"].constructFromObject(data['Type']);
        }
      }

      return obj;
    }
  }]);

  return TreeNodeChangeEvent;
}();
/**
 * @member {Object.<String, String>} Metadata
 */


TreeNodeChangeEvent.prototype['Metadata'] = undefined;
/**
 * @member {Boolean} Optimistic
 */

TreeNodeChangeEvent.prototype['Optimistic'] = undefined;
/**
 * @member {Boolean} Silent
 */

TreeNodeChangeEvent.prototype['Silent'] = undefined;
/**
 * @member {module:model/TreeNode} Source
 */

TreeNodeChangeEvent.prototype['Source'] = undefined;
/**
 * @member {module:model/TreeNode} Target
 */

TreeNodeChangeEvent.prototype['Target'] = undefined;
/**
 * @member {module:model/TreeNodeChangeEventEventType} Type
 */

TreeNodeChangeEvent.prototype['Type'] = undefined;
var _default = TreeNodeChangeEvent;
exports["default"] = _default;
//# sourceMappingURL=TreeNodeChangeEvent.js.map
