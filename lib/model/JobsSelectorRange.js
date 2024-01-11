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

/**
 * The JobsSelectorRange model module.
 * @module model/JobsSelectorRange
 * @version 4.0
 */
var JobsSelectorRange = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobsSelectorRange</code>.
   * @alias module:model/JobsSelectorRange
   */
  function JobsSelectorRange() {
    _classCallCheck(this, JobsSelectorRange);

    JobsSelectorRange.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobsSelectorRange, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JobsSelectorRange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsSelectorRange} obj Optional instance to populate.
     * @return {module:model/JobsSelectorRange} The populated <code>JobsSelectorRange</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsSelectorRange();

        if (data.hasOwnProperty('Limit')) {
          obj['Limit'] = _ApiClient["default"].convertToType(data['Limit'], 'String');
        }

        if (data.hasOwnProperty('Offset')) {
          obj['Offset'] = _ApiClient["default"].convertToType(data['Offset'], 'String');
        }

        if (data.hasOwnProperty('OrderBy')) {
          obj['OrderBy'] = _ApiClient["default"].convertToType(data['OrderBy'], 'String');
        }

        if (data.hasOwnProperty('OrderDir')) {
          obj['OrderDir'] = _ApiClient["default"].convertToType(data['OrderDir'], 'String');
        }
      }

      return obj;
    }
  }]);

  return JobsSelectorRange;
}();
/**
 * @member {String} Limit
 */


JobsSelectorRange.prototype['Limit'] = undefined;
/**
 * @member {String} Offset
 */

JobsSelectorRange.prototype['Offset'] = undefined;
/**
 * @member {String} OrderBy
 */

JobsSelectorRange.prototype['OrderBy'] = undefined;
/**
 * @member {String} OrderDir
 */

JobsSelectorRange.prototype['OrderDir'] = undefined;
var _default = JobsSelectorRange;
exports["default"] = _default;
//# sourceMappingURL=JobsSelectorRange.js.map
