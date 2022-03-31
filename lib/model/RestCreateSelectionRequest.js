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
 * The RestCreateSelectionRequest model module.
 * @module model/RestCreateSelectionRequest
 * @version 4.0
 */
var RestCreateSelectionRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestCreateSelectionRequest</code>.
   * @alias module:model/RestCreateSelectionRequest
   */
  function RestCreateSelectionRequest() {
    _classCallCheck(this, RestCreateSelectionRequest);

    RestCreateSelectionRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestCreateSelectionRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestCreateSelectionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestCreateSelectionRequest} obj Optional instance to populate.
     * @return {module:model/RestCreateSelectionRequest} The populated <code>RestCreateSelectionRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestCreateSelectionRequest();

        if (data.hasOwnProperty('Nodes')) {
          obj['Nodes'] = _ApiClient["default"].convertToType(data['Nodes'], [_TreeNode["default"]]);
        }

        if (data.hasOwnProperty('Persist')) {
          obj['Persist'] = _ApiClient["default"].convertToType(data['Persist'], 'Boolean');
        }

        if (data.hasOwnProperty('TargetAction')) {
          obj['TargetAction'] = _ApiClient["default"].convertToType(data['TargetAction'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RestCreateSelectionRequest;
}();
/**
 * @member {Array.<module:model/TreeNode>} Nodes
 */


RestCreateSelectionRequest.prototype['Nodes'] = undefined;
/**
 * @member {Boolean} Persist
 */

RestCreateSelectionRequest.prototype['Persist'] = undefined;
/**
 * @member {String} TargetAction
 */

RestCreateSelectionRequest.prototype['TargetAction'] = undefined;
var _default = RestCreateSelectionRequest;
exports["default"] = _default;
//# sourceMappingURL=RestCreateSelectionRequest.js.map
