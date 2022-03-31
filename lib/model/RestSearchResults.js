"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TreeNode = _interopRequireDefault(require("./TreeNode"));

var _TreeSearchFacet = _interopRequireDefault(require("./TreeSearchFacet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestSearchResults model module.
 * @module model/RestSearchResults
 * @version 4.0
 */
var RestSearchResults = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestSearchResults</code>.
   * @alias module:model/RestSearchResults
   */
  function RestSearchResults() {
    _classCallCheck(this, RestSearchResults);

    RestSearchResults.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestSearchResults, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestSearchResults</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestSearchResults} obj Optional instance to populate.
     * @return {module:model/RestSearchResults} The populated <code>RestSearchResults</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestSearchResults();

        if (data.hasOwnProperty('Facets')) {
          obj['Facets'] = _ApiClient["default"].convertToType(data['Facets'], [_TreeSearchFacet["default"]]);
        }

        if (data.hasOwnProperty('Results')) {
          obj['Results'] = _ApiClient["default"].convertToType(data['Results'], [_TreeNode["default"]]);
        }

        if (data.hasOwnProperty('Total')) {
          obj['Total'] = _ApiClient["default"].convertToType(data['Total'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return RestSearchResults;
}();
/**
 * @member {Array.<module:model/TreeSearchFacet>} Facets
 */


RestSearchResults.prototype['Facets'] = undefined;
/**
 * @member {Array.<module:model/TreeNode>} Results
 */

RestSearchResults.prototype['Results'] = undefined;
/**
 * @member {Number} Total
 */

RestSearchResults.prototype['Total'] = undefined;
var _default = RestSearchResults;
exports["default"] = _default;
//# sourceMappingURL=RestSearchResults.js.map
