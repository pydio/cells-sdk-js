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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The TreeGeoQuery model module.
* @module model/TreeGeoQuery
* @version 1.0
*/
var TreeGeoQuery = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>TreeGeoQuery</code>.
  * @alias module:model/TreeGeoQuery
  * @class
  */
  function TreeGeoQuery() {
    _classCallCheck(this, TreeGeoQuery);

    _defineProperty(this, "Center", undefined);

    _defineProperty(this, "Distance", undefined);

    _defineProperty(this, "TopLeft", undefined);

    _defineProperty(this, "BottomRight", undefined);
  }
  /**
  * Constructs a <code>TreeGeoQuery</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/TreeGeoQuery} obj Optional instance to populate.
  * @return {module:model/TreeGeoQuery} The populated <code>TreeGeoQuery</code> instance.
  */


  _createClass(TreeGeoQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TreeGeoQuery();

        if (data.hasOwnProperty('Center')) {
          obj['Center'] = _TreeGeoPoint["default"].constructFromObject(data['Center']);
        }

        if (data.hasOwnProperty('Distance')) {
          obj['Distance'] = _ApiClient["default"].convertToType(data['Distance'], 'String');
        }

        if (data.hasOwnProperty('TopLeft')) {
          obj['TopLeft'] = _TreeGeoPoint["default"].constructFromObject(data['TopLeft']);
        }

        if (data.hasOwnProperty('BottomRight')) {
          obj['BottomRight'] = _TreeGeoPoint["default"].constructFromObject(data['BottomRight']);
        }
      }

      return obj;
    }
    /**
    * @member {module:model/TreeGeoPoint} Center
    */

  }]);

  return TreeGeoQuery;
}();

exports["default"] = TreeGeoQuery;
//# sourceMappingURL=TreeGeoQuery.js.map
