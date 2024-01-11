"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JobsSelectorRange = _interopRequireDefault(require("./JobsSelectorRange"));

var _ServiceQuery = _interopRequireDefault(require("./ServiceQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JobsNodesSelector model module.
 * @module model/JobsNodesSelector
 * @version 4.0
 */
var JobsNodesSelector = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobsNodesSelector</code>.
   * @alias module:model/JobsNodesSelector
   */
  function JobsNodesSelector() {
    _classCallCheck(this, JobsNodesSelector);

    JobsNodesSelector.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobsNodesSelector, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JobsNodesSelector</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsNodesSelector} obj Optional instance to populate.
     * @return {module:model/JobsNodesSelector} The populated <code>JobsNodesSelector</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsNodesSelector();

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

        if (data.hasOwnProperty('Pathes')) {
          obj['Pathes'] = _ApiClient["default"].convertToType(data['Pathes'], ['String']);
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
      }

      return obj;
    }
  }]);

  return JobsNodesSelector;
}();
/**
 * @member {Boolean} All
 */


JobsNodesSelector.prototype['All'] = undefined;
/**
 * @member {Boolean} ClearInput
 */

JobsNodesSelector.prototype['ClearInput'] = undefined;
/**
 * @member {Boolean} Collect
 */

JobsNodesSelector.prototype['Collect'] = undefined;
/**
 * @member {String} Description
 */

JobsNodesSelector.prototype['Description'] = undefined;
/**
 * @member {Boolean} FanOutInput
 */

JobsNodesSelector.prototype['FanOutInput'] = undefined;
/**
 * @member {String} Label
 */

JobsNodesSelector.prototype['Label'] = undefined;
/**
 * @member {Array.<String>} Pathes
 */

JobsNodesSelector.prototype['Pathes'] = undefined;
/**
 * @member {module:model/ServiceQuery} Query
 */

JobsNodesSelector.prototype['Query'] = undefined;
/**
 * @member {module:model/JobsSelectorRange} Range
 */

JobsNodesSelector.prototype['Range'] = undefined;
/**
 * @member {String} Timeout
 */

JobsNodesSelector.prototype['Timeout'] = undefined;
var _default = JobsNodesSelector;
exports["default"] = _default;
//# sourceMappingURL=JobsNodesSelector.js.map
