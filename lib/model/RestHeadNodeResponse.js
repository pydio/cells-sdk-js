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
 * The RestHeadNodeResponse model module.
 * @module model/RestHeadNodeResponse
 * @version 4.0
 */
var RestHeadNodeResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestHeadNodeResponse</code>.
   * @alias module:model/RestHeadNodeResponse
   */
  function RestHeadNodeResponse() {
    _classCallCheck(this, RestHeadNodeResponse);

    RestHeadNodeResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestHeadNodeResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestHeadNodeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestHeadNodeResponse} obj Optional instance to populate.
     * @return {module:model/RestHeadNodeResponse} The populated <code>RestHeadNodeResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestHeadNodeResponse();

        if (data.hasOwnProperty('Node')) {
          obj['Node'] = _TreeNode["default"].constructFromObject(data['Node']);
        }
      }

      return obj;
    }
  }]);

  return RestHeadNodeResponse;
}();
/**
 * @member {module:model/TreeNode} Node
 */


RestHeadNodeResponse.prototype['Node'] = undefined;
var _default = RestHeadNodeResponse;
exports["default"] = _default;
//# sourceMappingURL=RestHeadNodeResponse.js.map
