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
 * The JobsDataSelector model module.
 * @module model/JobsDataSelector
 * @version 4.0
 */
var JobsDataSelector = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobsDataSelector</code>.
   * @alias module:model/JobsDataSelector
   */
  function JobsDataSelector() {
    _classCallCheck(this, JobsDataSelector);

    JobsDataSelector.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobsDataSelector, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JobsDataSelector</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsDataSelector} obj Optional instance to populate.
     * @return {module:model/JobsDataSelector} The populated <code>JobsDataSelector</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsDataSelector();

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

        if (data.hasOwnProperty('Timeout')) {
          obj['Timeout'] = _ApiClient["default"].convertToType(data['Timeout'], 'String');
        }
      }

      return obj;
    }
  }]);

  return JobsDataSelector;
}();
/**
 * @member {Boolean} ClearInput
 */


JobsDataSelector.prototype['ClearInput'] = undefined;
/**
 * @member {Boolean} Collect
 */

JobsDataSelector.prototype['Collect'] = undefined;
/**
 * @member {String} Description
 */

JobsDataSelector.prototype['Description'] = undefined;
/**
 * @member {Boolean} FanOutInput
 */

JobsDataSelector.prototype['FanOutInput'] = undefined;
/**
 * @member {String} Label
 */

JobsDataSelector.prototype['Label'] = undefined;
/**
 * @member {module:model/ServiceQuery} Query
 */

JobsDataSelector.prototype['Query'] = undefined;
/**
 * @member {String} Timeout
 */

JobsDataSelector.prototype['Timeout'] = undefined;
var _default = JobsDataSelector;
exports["default"] = _default;
//# sourceMappingURL=JobsDataSelector.js.map
