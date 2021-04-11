"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TreeVersioningKeepPeriod = _interopRequireDefault(require("./TreeVersioningKeepPeriod"));

var _TreeVersioningNodeDeletedStrategy = _interopRequireDefault(require("./TreeVersioningNodeDeletedStrategy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The TreeVersioningPolicy model module.
* @module model/TreeVersioningPolicy
* @version 1.0
*/
var TreeVersioningPolicy = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>TreeVersioningPolicy</code>.
  * @alias module:model/TreeVersioningPolicy
  * @class
  */
  function TreeVersioningPolicy() {
    _classCallCheck(this, TreeVersioningPolicy);

    _defineProperty(this, "Uuid", undefined);

    _defineProperty(this, "Name", undefined);

    _defineProperty(this, "Description", undefined);

    _defineProperty(this, "VersionsDataSourceName", undefined);

    _defineProperty(this, "VersionsDataSourceBucket", undefined);

    _defineProperty(this, "MaxTotalSize", undefined);

    _defineProperty(this, "MaxSizePerFile", undefined);

    _defineProperty(this, "IgnoreFilesGreaterThan", undefined);

    _defineProperty(this, "KeepPeriods", undefined);

    _defineProperty(this, "NodeDeletedStrategy", undefined);
  }
  /**
  * Constructs a <code>TreeVersioningPolicy</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/TreeVersioningPolicy} obj Optional instance to populate.
  * @return {module:model/TreeVersioningPolicy} The populated <code>TreeVersioningPolicy</code> instance.
  */


  _createClass(TreeVersioningPolicy, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TreeVersioningPolicy();

        if (data.hasOwnProperty('Uuid')) {
          obj['Uuid'] = _ApiClient["default"].convertToType(data['Uuid'], 'String');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('VersionsDataSourceName')) {
          obj['VersionsDataSourceName'] = _ApiClient["default"].convertToType(data['VersionsDataSourceName'], 'String');
        }

        if (data.hasOwnProperty('VersionsDataSourceBucket')) {
          obj['VersionsDataSourceBucket'] = _ApiClient["default"].convertToType(data['VersionsDataSourceBucket'], 'String');
        }

        if (data.hasOwnProperty('MaxTotalSize')) {
          obj['MaxTotalSize'] = _ApiClient["default"].convertToType(data['MaxTotalSize'], 'String');
        }

        if (data.hasOwnProperty('MaxSizePerFile')) {
          obj['MaxSizePerFile'] = _ApiClient["default"].convertToType(data['MaxSizePerFile'], 'String');
        }

        if (data.hasOwnProperty('IgnoreFilesGreaterThan')) {
          obj['IgnoreFilesGreaterThan'] = _ApiClient["default"].convertToType(data['IgnoreFilesGreaterThan'], 'String');
        }

        if (data.hasOwnProperty('KeepPeriods')) {
          obj['KeepPeriods'] = _ApiClient["default"].convertToType(data['KeepPeriods'], [_TreeVersioningKeepPeriod["default"]]);
        }

        if (data.hasOwnProperty('NodeDeletedStrategy')) {
          obj['NodeDeletedStrategy'] = _TreeVersioningNodeDeletedStrategy["default"].constructFromObject(data['NodeDeletedStrategy']);
        }
      }

      return obj;
    }
    /**
    * @member {String} Uuid
    */

  }]);

  return TreeVersioningPolicy;
}();

exports["default"] = TreeVersioningPolicy;
//# sourceMappingURL=TreeVersioningPolicy.js.map
