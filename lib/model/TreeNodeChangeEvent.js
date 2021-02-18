"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NodeChangeEventEventType = _interopRequireDefault(require("./NodeChangeEventEventType"));

var _TreeNode = _interopRequireDefault(require("./TreeNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The TreeNodeChangeEvent model module.
* @module model/TreeNodeChangeEvent
* @version 1.0
*/
var TreeNodeChangeEvent = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>TreeNodeChangeEvent</code>.
  * @alias module:model/TreeNodeChangeEvent
  * @class
  */
  function TreeNodeChangeEvent() {
    _classCallCheck(this, TreeNodeChangeEvent);

    _defineProperty(this, "Type", undefined);

    _defineProperty(this, "Source", undefined);

    _defineProperty(this, "Target", undefined);

    _defineProperty(this, "Metadata", undefined);

    _defineProperty(this, "Silent", undefined);

    _defineProperty(this, "Optimistic", undefined);
  }
  /**
  * Constructs a <code>TreeNodeChangeEvent</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/TreeNodeChangeEvent} obj Optional instance to populate.
  * @return {module:model/TreeNodeChangeEvent} The populated <code>TreeNodeChangeEvent</code> instance.
  */


  _createClass(TreeNodeChangeEvent, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TreeNodeChangeEvent();

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _NodeChangeEventEventType["default"].constructFromObject(data['Type']);
        }

        if (data.hasOwnProperty('Source')) {
          obj['Source'] = _TreeNode["default"].constructFromObject(data['Source']);
        }

        if (data.hasOwnProperty('Target')) {
          obj['Target'] = _TreeNode["default"].constructFromObject(data['Target']);
        }

        if (data.hasOwnProperty('Metadata')) {
          obj['Metadata'] = _ApiClient["default"].convertToType(data['Metadata'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Silent')) {
          obj['Silent'] = _ApiClient["default"].convertToType(data['Silent'], 'Boolean');
        }

        if (data.hasOwnProperty('Optimistic')) {
          obj['Optimistic'] = _ApiClient["default"].convertToType(data['Optimistic'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {module:model/NodeChangeEventEventType} Type
    */

  }]);

  return TreeNodeChangeEvent;
}();

exports["default"] = TreeNodeChangeEvent;
//# sourceMappingURL=TreeNodeChangeEvent.js.map
