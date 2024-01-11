"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JobsIdmSelectorType = _interopRequireDefault(require("./JobsIdmSelectorType"));

var _JobsSelectorRange = _interopRequireDefault(require("./JobsSelectorRange"));

var _ServiceQuery = _interopRequireDefault(require("./ServiceQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JobsIdmSelector model module.
 * @module model/JobsIdmSelector
 * @version 4.0
 */
var JobsIdmSelector = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobsIdmSelector</code>.
   * @alias module:model/JobsIdmSelector
   */
  function JobsIdmSelector() {
    _classCallCheck(this, JobsIdmSelector);

    JobsIdmSelector.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobsIdmSelector, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JobsIdmSelector</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsIdmSelector} obj Optional instance to populate.
     * @return {module:model/JobsIdmSelector} The populated <code>JobsIdmSelector</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsIdmSelector();

        if (data.hasOwnProperty('All')) {
          obj['All'] = _ApiClient["default"].convertToType(data['All'], 'Boolean');
        }

        if (data.hasOwnProperty('ClearInput')) {
          obj['ClearInput'] = _ApiClient["default"].convertToType(data['ClearInput'], 'Boolean');
        }

        if (data.hasOwnProperty('Collect')) {
          obj['Collect'] = _ApiClient["default"].convertToType(data['Collect'], 'Boolean');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('FanOutInput')) {
          obj['FanOutInput'] = _ApiClient["default"].convertToType(data['FanOutInput'], 'Boolean');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Query')) {
          obj['Query'] = _ServiceQuery["default"].constructFromObject(data['Query']);
        }

        if (data.hasOwnProperty('Range')) {
          obj['Range'] = _JobsSelectorRange["default"].constructFromObject(data['Range']);
        }

        if (data.hasOwnProperty('Timeout')) {
          obj['Timeout'] = _ApiClient["default"].convertToType(data['Timeout'], 'String');
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _JobsIdmSelectorType["default"].constructFromObject(data['Type']);
        }
      }

      return obj;
    }
  }]);

  return JobsIdmSelector;
}();
/**
 * @member {Boolean} All
 */


JobsIdmSelector.prototype['All'] = undefined;
/**
 * @member {Boolean} ClearInput
 */

JobsIdmSelector.prototype['ClearInput'] = undefined;
/**
 * @member {Boolean} Collect
 */

JobsIdmSelector.prototype['Collect'] = undefined;
/**
 * @member {String} Description
 */

JobsIdmSelector.prototype['Description'] = undefined;
/**
 * @member {Boolean} FanOutInput
 */

JobsIdmSelector.prototype['FanOutInput'] = undefined;
/**
 * @member {String} Label
 */

JobsIdmSelector.prototype['Label'] = undefined;
/**
 * @member {module:model/ServiceQuery} Query
 */

JobsIdmSelector.prototype['Query'] = undefined;
/**
 * @member {module:model/JobsSelectorRange} Range
 */

JobsIdmSelector.prototype['Range'] = undefined;
/**
 * @member {String} Timeout
 */

JobsIdmSelector.prototype['Timeout'] = undefined;
/**
 * @member {module:model/JobsIdmSelectorType} Type
 */

JobsIdmSelector.prototype['Type'] = undefined;
var _default = JobsIdmSelector;
exports["default"] = _default;
//# sourceMappingURL=JobsIdmSelector.js.map
