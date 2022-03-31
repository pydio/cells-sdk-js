"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TreeQuery = _interopRequireDefault(require("./TreeQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TreeSearchRequest model module.
 * @module model/TreeSearchRequest
 * @version 4.0
 */
var TreeSearchRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TreeSearchRequest</code>.
   * @alias module:model/TreeSearchRequest
   */
  function TreeSearchRequest() {
    _classCallCheck(this, TreeSearchRequest);

    TreeSearchRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TreeSearchRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TreeSearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TreeSearchRequest} obj Optional instance to populate.
     * @return {module:model/TreeSearchRequest} The populated <code>TreeSearchRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TreeSearchRequest();

        if (data.hasOwnProperty('Details')) {
          obj['Details'] = _ApiClient["default"].convertToType(data['Details'], 'Boolean');
        }

        if (data.hasOwnProperty('From')) {
          obj['From'] = _ApiClient["default"].convertToType(data['From'], 'Number');
        }

        if (data.hasOwnProperty('Query')) {
          obj['Query'] = _TreeQuery["default"].constructFromObject(data['Query']);
        }

        if (data.hasOwnProperty('Size')) {
          obj['Size'] = _ApiClient["default"].convertToType(data['Size'], 'Number');
        }

        if (data.hasOwnProperty('StatFlags')) {
          obj['StatFlags'] = _ApiClient["default"].convertToType(data['StatFlags'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return TreeSearchRequest;
}();
/**
 * @member {Boolean} Details
 */


TreeSearchRequest.prototype['Details'] = undefined;
/**
 * @member {Number} From
 */

TreeSearchRequest.prototype['From'] = undefined;
/**
 * @member {module:model/TreeQuery} Query
 */

TreeSearchRequest.prototype['Query'] = undefined;
/**
 * @member {Number} Size
 */

TreeSearchRequest.prototype['Size'] = undefined;
/**
 * @member {Array.<Number>} StatFlags
 */

TreeSearchRequest.prototype['StatFlags'] = undefined;
var _default = TreeSearchRequest;
exports["default"] = _default;
//# sourceMappingURL=TreeSearchRequest.js.map
