"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The TreeVersioningKeepPeriod model module.
* @module model/TreeVersioningKeepPeriod
* @version 1.0
*/
var TreeVersioningKeepPeriod = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>TreeVersioningKeepPeriod</code>.
  * @alias module:model/TreeVersioningKeepPeriod
  * @class
  */
  function TreeVersioningKeepPeriod() {
    _classCallCheck(this, TreeVersioningKeepPeriod);

    _defineProperty(this, "IntervalStart", undefined);

    _defineProperty(this, "MaxNumber", undefined);
  }
  /**
  * Constructs a <code>TreeVersioningKeepPeriod</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/TreeVersioningKeepPeriod} obj Optional instance to populate.
  * @return {module:model/TreeVersioningKeepPeriod} The populated <code>TreeVersioningKeepPeriod</code> instance.
  */


  _createClass(TreeVersioningKeepPeriod, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TreeVersioningKeepPeriod();

        if (data.hasOwnProperty('IntervalStart')) {
          obj['IntervalStart'] = _ApiClient["default"].convertToType(data['IntervalStart'], 'String');
        }

        if (data.hasOwnProperty('MaxNumber')) {
          obj['MaxNumber'] = _ApiClient["default"].convertToType(data['MaxNumber'], 'Number');
        }
      }

      return obj;
    }
    /**
    * @member {String} IntervalStart
    */

  }]);

  return TreeVersioningKeepPeriod;
}();

exports["default"] = TreeVersioningKeepPeriod;
//# sourceMappingURL=TreeVersioningKeepPeriod.js.map
