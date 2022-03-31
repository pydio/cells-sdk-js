"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListSharedResourcesResponseSharedResource = _interopRequireDefault(require("./ListSharedResourcesResponseSharedResource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestListSharedResourcesResponse model module.
 * @module model/RestListSharedResourcesResponse
 * @version 4.0
 */
var RestListSharedResourcesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestListSharedResourcesResponse</code>.
   * @alias module:model/RestListSharedResourcesResponse
   */
  function RestListSharedResourcesResponse() {
    _classCallCheck(this, RestListSharedResourcesResponse);

    RestListSharedResourcesResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestListSharedResourcesResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestListSharedResourcesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestListSharedResourcesResponse} obj Optional instance to populate.
     * @return {module:model/RestListSharedResourcesResponse} The populated <code>RestListSharedResourcesResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestListSharedResourcesResponse();

        if (data.hasOwnProperty('Limit')) {
          obj['Limit'] = _ApiClient["default"].convertToType(data['Limit'], 'Number');
        }

        if (data.hasOwnProperty('Offset')) {
          obj['Offset'] = _ApiClient["default"].convertToType(data['Offset'], 'Number');
        }

        if (data.hasOwnProperty('Resources')) {
          obj['Resources'] = _ApiClient["default"].convertToType(data['Resources'], [_ListSharedResourcesResponseSharedResource["default"]]);
        }

        if (data.hasOwnProperty('Total')) {
          obj['Total'] = _ApiClient["default"].convertToType(data['Total'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return RestListSharedResourcesResponse;
}();
/**
 * @member {Number} Limit
 */


RestListSharedResourcesResponse.prototype['Limit'] = undefined;
/**
 * @member {Number} Offset
 */

RestListSharedResourcesResponse.prototype['Offset'] = undefined;
/**
 * @member {Array.<module:model/ListSharedResourcesResponseSharedResource>} Resources
 */

RestListSharedResourcesResponse.prototype['Resources'] = undefined;
/**
 * @member {Number} Total
 */

RestListSharedResourcesResponse.prototype['Total'] = undefined;
var _default = RestListSharedResourcesResponse;
exports["default"] = _default;
//# sourceMappingURL=RestListSharedResourcesResponse.js.map
