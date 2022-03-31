"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JobsContextMetaFilterType = _interopRequireDefault(require("./JobsContextMetaFilterType"));

var _ServiceQuery = _interopRequireDefault(require("./ServiceQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JobsContextMetaFilter model module.
 * @module model/JobsContextMetaFilter
 * @version 4.0
 */
var JobsContextMetaFilter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobsContextMetaFilter</code>.
   * @alias module:model/JobsContextMetaFilter
   */
  function JobsContextMetaFilter() {
    _classCallCheck(this, JobsContextMetaFilter);

    JobsContextMetaFilter.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobsContextMetaFilter, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JobsContextMetaFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsContextMetaFilter} obj Optional instance to populate.
     * @return {module:model/JobsContextMetaFilter} The populated <code>JobsContextMetaFilter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsContextMetaFilter();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Query')) {
          obj['Query'] = _ServiceQuery["default"].constructFromObject(data['Query']);
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _JobsContextMetaFilterType["default"].constructFromObject(data['Type']);
        }
      }

      return obj;
    }
  }]);

  return JobsContextMetaFilter;
}();
/**
 * @member {String} Description
 */


JobsContextMetaFilter.prototype['Description'] = undefined;
/**
 * @member {String} Label
 */

JobsContextMetaFilter.prototype['Label'] = undefined;
/**
 * @member {module:model/ServiceQuery} Query
 */

JobsContextMetaFilter.prototype['Query'] = undefined;
/**
 * @member {module:model/JobsContextMetaFilterType} Type
 */

JobsContextMetaFilter.prototype['Type'] = undefined;
var _default = JobsContextMetaFilter;
exports["default"] = _default;
//# sourceMappingURL=JobsContextMetaFilter.js.map
