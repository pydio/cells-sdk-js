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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestDataSourceCollection model module.
* @module model/RestDataSourceCollection
* @version 1.0
*/
var RestDataSourceCollection = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestDataSourceCollection</code>.
  * @alias module:model/RestDataSourceCollection
  * @class
  */
  function RestDataSourceCollection() {
    _classCallCheck(this, RestDataSourceCollection);

    _defineProperty(this, "DataSources", undefined);

    _defineProperty(this, "Total", undefined);
  }
  /**
  * Constructs a <code>RestDataSourceCollection</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestDataSourceCollection} obj Optional instance to populate.
  * @return {module:model/RestDataSourceCollection} The populated <code>RestDataSourceCollection</code> instance.
  */


  _createClass(RestDataSourceCollection, null, [{
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
    /**
    * @member {Array.<module:model/ObjectDataSource>} DataSources
    */

  }]);

  return RestDataSourceCollection;
}();

exports["default"] = RestDataSourceCollection;
//# sourceMappingURL=RestDataSourceCollection.js.map
