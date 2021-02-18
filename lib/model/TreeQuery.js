"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TreeGeoQuery = _interopRequireDefault(require("./TreeGeoQuery"));

var _TreeNodeType = _interopRequireDefault(require("./TreeNodeType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The TreeQuery model module.
* @module model/TreeQuery
* @version 1.0
*/
var TreeQuery = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>TreeQuery</code>.
  * @alias module:model/TreeQuery
  * @class
  */
  function TreeQuery() {
    _classCallCheck(this, TreeQuery);

    _defineProperty(this, "Paths", undefined);

    _defineProperty(this, "PathPrefix", undefined);

    _defineProperty(this, "MinSize", undefined);

    _defineProperty(this, "MaxSize", undefined);

    _defineProperty(this, "MinDate", undefined);

    _defineProperty(this, "MaxDate", undefined);

    _defineProperty(this, "DurationDate", undefined);

    _defineProperty(this, "Type", undefined);

    _defineProperty(this, "FileName", undefined);

    _defineProperty(this, "Content", undefined);

    _defineProperty(this, "FileNameOrContent", undefined);

    _defineProperty(this, "FreeString", undefined);

    _defineProperty(this, "Extension", undefined);

    _defineProperty(this, "GeoQuery", undefined);

    _defineProperty(this, "PathDepth", undefined);

    _defineProperty(this, "UUIDs", undefined);

    _defineProperty(this, "Not", undefined);
  }
  /**
  * Constructs a <code>TreeQuery</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/TreeQuery} obj Optional instance to populate.
  * @return {module:model/TreeQuery} The populated <code>TreeQuery</code> instance.
  */


  _createClass(TreeQuery, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TreeQuery();

        if (data.hasOwnProperty('Paths')) {
          obj['Paths'] = _ApiClient["default"].convertToType(data['Paths'], ['String']);
        }

        if (data.hasOwnProperty('PathPrefix')) {
          obj['PathPrefix'] = _ApiClient["default"].convertToType(data['PathPrefix'], ['String']);
        }

        if (data.hasOwnProperty('MinSize')) {
          obj['MinSize'] = _ApiClient["default"].convertToType(data['MinSize'], 'String');
        }

        if (data.hasOwnProperty('MaxSize')) {
          obj['MaxSize'] = _ApiClient["default"].convertToType(data['MaxSize'], 'String');
        }

        if (data.hasOwnProperty('MinDate')) {
          obj['MinDate'] = _ApiClient["default"].convertToType(data['MinDate'], 'String');
        }

        if (data.hasOwnProperty('MaxDate')) {
          obj['MaxDate'] = _ApiClient["default"].convertToType(data['MaxDate'], 'String');
        }

        if (data.hasOwnProperty('DurationDate')) {
          obj['DurationDate'] = _ApiClient["default"].convertToType(data['DurationDate'], 'String');
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _TreeNodeType["default"].constructFromObject(data['Type']);
        }

        if (data.hasOwnProperty('FileName')) {
          obj['FileName'] = _ApiClient["default"].convertToType(data['FileName'], 'String');
        }

        if (data.hasOwnProperty('Content')) {
          obj['Content'] = _ApiClient["default"].convertToType(data['Content'], 'String');
        }

        if (data.hasOwnProperty('FileNameOrContent')) {
          obj['FileNameOrContent'] = _ApiClient["default"].convertToType(data['FileNameOrContent'], 'String');
        }

        if (data.hasOwnProperty('FreeString')) {
          obj['FreeString'] = _ApiClient["default"].convertToType(data['FreeString'], 'String');
        }

        if (data.hasOwnProperty('Extension')) {
          obj['Extension'] = _ApiClient["default"].convertToType(data['Extension'], 'String');
        }

        if (data.hasOwnProperty('GeoQuery')) {
          obj['GeoQuery'] = _TreeGeoQuery["default"].constructFromObject(data['GeoQuery']);
        }

        if (data.hasOwnProperty('PathDepth')) {
          obj['PathDepth'] = _ApiClient["default"].convertToType(data['PathDepth'], 'Number');
        }

        if (data.hasOwnProperty('UUIDs')) {
          obj['UUIDs'] = _ApiClient["default"].convertToType(data['UUIDs'], ['String']);
        }

        if (data.hasOwnProperty('Not')) {
          obj['Not'] = _ApiClient["default"].convertToType(data['Not'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {Array.<String>} Paths
    */

  }]);

  return TreeQuery;
}();

exports["default"] = TreeQuery;
//# sourceMappingURL=TreeQuery.js.map
