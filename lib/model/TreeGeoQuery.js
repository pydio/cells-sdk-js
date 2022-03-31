"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TreeGeoPoint = _interopRequireDefault(require("./TreeGeoPoint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TreeGeoQuery model module.
 * @module model/TreeGeoQuery
 * @version 4.0
 */
var TreeGeoQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TreeGeoQuery</code>.
   * @alias module:model/TreeGeoQuery
   */
  function TreeGeoQuery() {
    _classCallCheck(this, TreeGeoQuery);

    TreeGeoQuery.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TreeGeoQuery, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TreeGeoQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TreeGeoQuery} obj Optional instance to populate.
     * @return {module:model/TreeGeoQuery} The populated <code>TreeGeoQuery</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TreeGeoQuery();

        if (data.hasOwnProperty('BottomRight')) {
          obj['BottomRight'] = _TreeGeoPoint["default"].constructFromObject(data['BottomRight']);
        }

        if (data.hasOwnProperty('Center')) {
          obj['Center'] = _TreeGeoPoint["default"].constructFromObject(data['Center']);
        }

        if (data.hasOwnProperty('Distance')) {
          obj['Distance'] = _ApiClient["default"].convertToType(data['Distance'], 'String');
        }

        if (data.hasOwnProperty('TopLeft')) {
          obj['TopLeft'] = _TreeGeoPoint["default"].constructFromObject(data['TopLeft']);
        }
      }

      return obj;
    }
  }]);

  return TreeGeoQuery;
}();
/**
 * @member {module:model/TreeGeoPoint} BottomRight
 */


TreeGeoQuery.prototype['BottomRight'] = undefined;
/**
 * @member {module:model/TreeGeoPoint} Center
 */

TreeGeoQuery.prototype['Center'] = undefined;
/**
 * Example formats supported: \"5in\" \"5inch\" \"7yd\" \"7yards\" \"9ft\" \"9feet\" \"11km\" \"11kilometers\" \"3nm\" \"3nauticalmiles\" \"13mm\" \"13millimeters\" \"15cm\" \"15centimeters\" \"17mi\" \"17miles\" \"19m\" \"19meters\" If the unit cannot be determined, the entire string is parsed and the unit of meters is assumed.
 * @member {String} Distance
 */

TreeGeoQuery.prototype['Distance'] = undefined;
/**
 * @member {module:model/TreeGeoPoint} TopLeft
 */

TreeGeoQuery.prototype['TopLeft'] = undefined;
var _default = TreeGeoQuery;
exports["default"] = _default;
//# sourceMappingURL=TreeGeoQuery.js.map
