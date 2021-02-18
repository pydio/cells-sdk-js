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
* The RestNodesCollection model module.
* @module model/RestNodesCollection
* @version 1.0
*/
var RestNodesCollection = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestNodesCollection</code>.
  * @alias module:model/RestNodesCollection
  * @class
  */
  function RestNodesCollection() {
    _classCallCheck(this, RestNodesCollection);

    _defineProperty(this, "Parent", undefined);

    _defineProperty(this, "Children", undefined);
  }
  /**
  * Constructs a <code>RestNodesCollection</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestNodesCollection} obj Optional instance to populate.
  * @return {module:model/RestNodesCollection} The populated <code>RestNodesCollection</code> instance.
  */


  _createClass(RestNodesCollection, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestNodesCollection();

        if (data.hasOwnProperty('Parent')) {
          obj['Parent'] = _TreeNode["default"].constructFromObject(data['Parent']);
        }

        if (data.hasOwnProperty('Children')) {
          obj['Children'] = _ApiClient["default"].convertToType(data['Children'], [_TreeNode["default"]]);
        }
      }

      return obj;
    }
    /**
    * @member {module:model/TreeNode} Parent
    */

  }]);

  return RestNodesCollection;
}();

exports["default"] = RestNodesCollection;
//# sourceMappingURL=RestNodesCollection.js.map
