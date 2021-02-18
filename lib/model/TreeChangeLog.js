"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TreeNodeChangeEvent = _interopRequireDefault(require("./TreeNodeChangeEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The TreeChangeLog model module.
* @module model/TreeChangeLog
* @version 1.0
*/
var TreeChangeLog = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>TreeChangeLog</code>.
  * @alias module:model/TreeChangeLog
  * @class
  */
  function TreeChangeLog() {
    _classCallCheck(this, TreeChangeLog);

    _defineProperty(this, "Uuid", undefined);

    _defineProperty(this, "Description", undefined);

    _defineProperty(this, "MTime", undefined);

    _defineProperty(this, "Size", undefined);

    _defineProperty(this, "Data", undefined);

    _defineProperty(this, "OwnerUuid", undefined);

    _defineProperty(this, "Event", undefined);
  }
  /**
  * Constructs a <code>TreeChangeLog</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/TreeChangeLog} obj Optional instance to populate.
  * @return {module:model/TreeChangeLog} The populated <code>TreeChangeLog</code> instance.
  */


  _createClass(TreeChangeLog, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TreeChangeLog();

        if (data.hasOwnProperty('Uuid')) {
          obj['Uuid'] = _ApiClient["default"].convertToType(data['Uuid'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('MTime')) {
          obj['MTime'] = _ApiClient["default"].convertToType(data['MTime'], 'String');
        }

        if (data.hasOwnProperty('Size')) {
          obj['Size'] = _ApiClient["default"].convertToType(data['Size'], 'String');
        }

        if (data.hasOwnProperty('Data')) {
          obj['Data'] = _ApiClient["default"].convertToType(data['Data'], 'Blob');
        }

        if (data.hasOwnProperty('OwnerUuid')) {
          obj['OwnerUuid'] = _ApiClient["default"].convertToType(data['OwnerUuid'], 'String');
        }

        if (data.hasOwnProperty('Event')) {
          obj['Event'] = _TreeNodeChangeEvent["default"].constructFromObject(data['Event']);
        }
      }

      return obj;
    }
    /**
    * @member {String} Uuid
    */

  }]);

  return TreeChangeLog;
}();

exports["default"] = TreeChangeLog;
//# sourceMappingURL=TreeChangeLog.js.map
