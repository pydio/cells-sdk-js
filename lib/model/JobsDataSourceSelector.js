"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JobsDataSourceSelectorType = _interopRequireDefault(require("./JobsDataSourceSelectorType"));

var _ServiceQuery = _interopRequireDefault(require("./ServiceQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JobsDataSourceSelector model module.
 * @module model/JobsDataSourceSelector
 * @version 4.0
 */
var JobsDataSourceSelector = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobsDataSourceSelector</code>.
   * @alias module:model/JobsDataSourceSelector
   */
  function JobsDataSourceSelector() {
    _classCallCheck(this, JobsDataSourceSelector);

    JobsDataSourceSelector.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobsDataSourceSelector, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JobsDataSourceSelector</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsDataSourceSelector} obj Optional instance to populate.
     * @return {module:model/JobsDataSourceSelector} The populated <code>JobsDataSourceSelector</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsDataSourceSelector();

        if (data.hasOwnProperty('All')) {
          obj['All'] = _ApiClient["default"].convertToType(data['All'], 'Boolean');
        }

        if (data.hasOwnProperty('Collect')) {
          obj['Collect'] = _ApiClient["default"].convertToType(data['Collect'], 'Boolean');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Query')) {
          obj['Query'] = _ServiceQuery["default"].constructFromObject(data['Query']);
        }

        if (data.hasOwnProperty('Timeout')) {
          obj['Timeout'] = _ApiClient["default"].convertToType(data['Timeout'], 'String');
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _JobsDataSourceSelectorType["default"].constructFromObject(data['Type']);
        }
      }

      return obj;
    }
  }]);

  return JobsDataSourceSelector;
}();
/**
 * @member {Boolean} All
 */


JobsDataSourceSelector.prototype['All'] = undefined;
/**
 * @member {Boolean} Collect
 */

JobsDataSourceSelector.prototype['Collect'] = undefined;
/**
 * @member {String} Description
 */

JobsDataSourceSelector.prototype['Description'] = undefined;
/**
 * @member {String} Label
 */

JobsDataSourceSelector.prototype['Label'] = undefined;
/**
 * @member {module:model/ServiceQuery} Query
 */

JobsDataSourceSelector.prototype['Query'] = undefined;
/**
 * @member {String} Timeout
 */

JobsDataSourceSelector.prototype['Timeout'] = undefined;
/**
 * @member {module:model/JobsDataSourceSelectorType} Type
 */

JobsDataSourceSelector.prototype['Type'] = undefined;
var _default = JobsDataSourceSelector;
exports["default"] = _default;
//# sourceMappingURL=JobsDataSourceSelector.js.map
