"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JobsAction = _interopRequireDefault(require("./JobsAction"));

var _JobsActionMessage = _interopRequireDefault(require("./JobsActionMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JobsActionLog model module.
 * @module model/JobsActionLog
 * @version 4.0
 */
var JobsActionLog = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobsActionLog</code>.
   * @alias module:model/JobsActionLog
   */
  function JobsActionLog() {
    _classCallCheck(this, JobsActionLog);

    JobsActionLog.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobsActionLog, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JobsActionLog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsActionLog} obj Optional instance to populate.
     * @return {module:model/JobsActionLog} The populated <code>JobsActionLog</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsActionLog();

        if (data.hasOwnProperty('Action')) {
          obj['Action'] = _JobsAction["default"].constructFromObject(data['Action']);
        }

        if (data.hasOwnProperty('InputMessage')) {
          obj['InputMessage'] = _JobsActionMessage["default"].constructFromObject(data['InputMessage']);
        }

        if (data.hasOwnProperty('OutputMessage')) {
          obj['OutputMessage'] = _JobsActionMessage["default"].constructFromObject(data['OutputMessage']);
        }
      }

      return obj;
    }
  }]);

  return JobsActionLog;
}();
/**
 * @member {module:model/JobsAction} Action
 */


JobsActionLog.prototype['Action'] = undefined;
/**
 * @member {module:model/JobsActionMessage} InputMessage
 */

JobsActionLog.prototype['InputMessage'] = undefined;
/**
 * @member {module:model/JobsActionMessage} OutputMessage
 */

JobsActionLog.prototype['OutputMessage'] = undefined;
var _default = JobsActionLog;
exports["default"] = _default;
//# sourceMappingURL=JobsActionLog.js.map
