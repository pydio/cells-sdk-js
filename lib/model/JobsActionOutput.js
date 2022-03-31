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
 * The JobsActionOutput model module.
 * @module model/JobsActionOutput
 * @version 4.0
 */
var JobsActionOutput = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobsActionOutput</code>.
   * @alias module:model/JobsActionOutput
   */
  function JobsActionOutput() {
    _classCallCheck(this, JobsActionOutput);

    JobsActionOutput.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobsActionOutput, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JobsActionOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsActionOutput} obj Optional instance to populate.
     * @return {module:model/JobsActionOutput} The populated <code>JobsActionOutput</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsActionOutput();

        if (data.hasOwnProperty('ErrorString')) {
          obj['ErrorString'] = _ApiClient["default"].convertToType(data['ErrorString'], 'String');
        }

        if (data.hasOwnProperty('Ignored')) {
          obj['Ignored'] = _ApiClient["default"].convertToType(data['Ignored'], 'Boolean');
        }

        if (data.hasOwnProperty('JsonBody')) {
          obj['JsonBody'] = _ApiClient["default"].convertToType(data['JsonBody'], 'Blob');
        }

        if (data.hasOwnProperty('RawBody')) {
          obj['RawBody'] = _ApiClient["default"].convertToType(data['RawBody'], 'Blob');
        }

        if (data.hasOwnProperty('StringBody')) {
          obj['StringBody'] = _ApiClient["default"].convertToType(data['StringBody'], 'String');
        }

        if (data.hasOwnProperty('Success')) {
          obj['Success'] = _ApiClient["default"].convertToType(data['Success'], 'Boolean');
        }

        if (data.hasOwnProperty('Time')) {
          obj['Time'] = _ApiClient["default"].convertToType(data['Time'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return JobsActionOutput;
}();
/**
 * @member {String} ErrorString
 */


JobsActionOutput.prototype['ErrorString'] = undefined;
/**
 * @member {Boolean} Ignored
 */

JobsActionOutput.prototype['Ignored'] = undefined;
/**
 * @member {Blob} JsonBody
 */

JobsActionOutput.prototype['JsonBody'] = undefined;
/**
 * @member {Blob} RawBody
 */

JobsActionOutput.prototype['RawBody'] = undefined;
/**
 * @member {String} StringBody
 */

JobsActionOutput.prototype['StringBody'] = undefined;
/**
 * @member {Boolean} Success
 */

JobsActionOutput.prototype['Success'] = undefined;
/**
 * @member {Number} Time
 */

JobsActionOutput.prototype['Time'] = undefined;
var _default = JobsActionOutput;
exports["default"] = _default;
//# sourceMappingURL=JobsActionOutput.js.map
