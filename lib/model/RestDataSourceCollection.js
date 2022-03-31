"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ObjectDataSource = _interopRequireDefault(require("./ObjectDataSource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestDataSourceCollection model module.
 * @module model/RestDataSourceCollection
 * @version 4.0
 */
var RestDataSourceCollection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestDataSourceCollection</code>.
   * @alias module:model/RestDataSourceCollection
   */
  function RestDataSourceCollection() {
    _classCallCheck(this, RestDataSourceCollection);

    RestDataSourceCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestDataSourceCollection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestDataSourceCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestDataSourceCollection} obj Optional instance to populate.
     * @return {module:model/RestDataSourceCollection} The populated <code>RestDataSourceCollection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestDataSourceCollection();

        if (data.hasOwnProperty('DataSources')) {
          obj['DataSources'] = _ApiClient["default"].convertToType(data['DataSources'], [_ObjectDataSource["default"]]);
        }

        if (data.hasOwnProperty('Total')) {
          obj['Total'] = _ApiClient["default"].convertToType(data['Total'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return RestDataSourceCollection;
}();
/**
 * @member {Array.<module:model/ObjectDataSource>} DataSources
 */


RestDataSourceCollection.prototype['DataSources'] = undefined;
/**
 * @member {Number} Total
 */

RestDataSourceCollection.prototype['Total'] = undefined;
var _default = RestDataSourceCollection;
exports["default"] = _default;
//# sourceMappingURL=RestDataSourceCollection.js.map
