"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServiceQuery = _interopRequireDefault(require("./ServiceQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JobsChatEventFilter model module.
 * @module model/JobsChatEventFilter
 * @version 4.0
 */
var JobsChatEventFilter = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobsChatEventFilter</code>.
   * @alias module:model/JobsChatEventFilter
   */
  function JobsChatEventFilter() {
    _classCallCheck(this, JobsChatEventFilter);

    JobsChatEventFilter.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobsChatEventFilter, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JobsChatEventFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsChatEventFilter} obj Optional instance to populate.
     * @return {module:model/JobsChatEventFilter} The populated <code>JobsChatEventFilter</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsChatEventFilter();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Query')) {
          obj['Query'] = _ServiceQuery["default"].constructFromObject(data['Query']);
        }
      }

      return obj;
    }
  }]);

  return JobsChatEventFilter;
}();
/**
 * @member {String} Description
 */


JobsChatEventFilter.prototype['Description'] = undefined;
/**
 * @member {String} Label
 */

JobsChatEventFilter.prototype['Label'] = undefined;
/**
 * @member {module:model/ServiceQuery} Query
 */

JobsChatEventFilter.prototype['Query'] = undefined;
var _default = JobsChatEventFilter;
exports["default"] = _default;
//# sourceMappingURL=JobsChatEventFilter.js.map
