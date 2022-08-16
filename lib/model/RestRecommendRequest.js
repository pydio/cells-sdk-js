"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestRecommendRequest model module.
 * @module model/RestRecommendRequest
 * @version 4.0
 */
var RestRecommendRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestRecommendRequest</code>.
   * @alias module:model/RestRecommendRequest
   */
  function RestRecommendRequest() {
    _classCallCheck(this, RestRecommendRequest);

    RestRecommendRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestRecommendRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestRecommendRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestRecommendRequest} obj Optional instance to populate.
     * @return {module:model/RestRecommendRequest} The populated <code>RestRecommendRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestRecommendRequest();

        if (data.hasOwnProperty('Category')) {
          obj['Category'] = _ApiClient["default"].convertToType(data['Category'], 'String');
        }

        if (data.hasOwnProperty('Limit')) {
          obj['Limit'] = _ApiClient["default"].convertToType(data['Limit'], 'Number');
        }

        if (data.hasOwnProperty('Neighbor')) {
          obj['Neighbor'] = _ApiClient["default"].convertToType(data['Neighbor'], 'String');
        }

        if (data.hasOwnProperty('Segment')) {
          obj['Segment'] = _ApiClient["default"].convertToType(data['Segment'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RestRecommendRequest;
}();
/**
 * @member {String} Category
 */


RestRecommendRequest.prototype['Category'] = undefined;
/**
 * @member {Number} Limit
 */

RestRecommendRequest.prototype['Limit'] = undefined;
/**
 * @member {String} Neighbor
 */

RestRecommendRequest.prototype['Neighbor'] = undefined;
/**
 * @member {String} Segment
 */

RestRecommendRequest.prototype['Segment'] = undefined;
var _default = RestRecommendRequest;
exports["default"] = _default;
//# sourceMappingURL=RestRecommendRequest.js.map
