"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JobsActionLog = _interopRequireDefault(require("./JobsActionLog"));

var _JobsTaskStatus = _interopRequireDefault(require("./JobsTaskStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The JobsTask model module.
* @module model/JobsTask
* @version 1.0
*/
var JobsTask = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>JobsTask</code>.
  * @alias module:model/JobsTask
  * @class
  */
  function JobsTask() {
    _classCallCheck(this, JobsTask);

    _defineProperty(this, "ID", undefined);

    _defineProperty(this, "JobID", undefined);

    _defineProperty(this, "Status", undefined);

    _defineProperty(this, "StatusMessage", undefined);

    _defineProperty(this, "TriggerOwner", undefined);

    _defineProperty(this, "StartTime", undefined);

    _defineProperty(this, "EndTime", undefined);

    _defineProperty(this, "CanStop", undefined);

    _defineProperty(this, "CanPause", undefined);

    _defineProperty(this, "HasProgress", undefined);

    _defineProperty(this, "Progress", undefined);

    _defineProperty(this, "ActionsLogs", undefined);
  }
  /**
  * Constructs a <code>JobsTask</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/JobsTask} obj Optional instance to populate.
  * @return {module:model/JobsTask} The populated <code>JobsTask</code> instance.
  */


  _createClass(JobsTask, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsTask();

        if (data.hasOwnProperty('ID')) {
          obj['ID'] = _ApiClient["default"].convertToType(data['ID'], 'String');
        }

        if (data.hasOwnProperty('JobID')) {
          obj['JobID'] = _ApiClient["default"].convertToType(data['JobID'], 'String');
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _JobsTaskStatus["default"].constructFromObject(data['Status']);
        }

        if (data.hasOwnProperty('StatusMessage')) {
          obj['StatusMessage'] = _ApiClient["default"].convertToType(data['StatusMessage'], 'String');
        }

        if (data.hasOwnProperty('TriggerOwner')) {
          obj['TriggerOwner'] = _ApiClient["default"].convertToType(data['TriggerOwner'], 'String');
        }

        if (data.hasOwnProperty('StartTime')) {
          obj['StartTime'] = _ApiClient["default"].convertToType(data['StartTime'], 'Number');
        }

        if (data.hasOwnProperty('EndTime')) {
          obj['EndTime'] = _ApiClient["default"].convertToType(data['EndTime'], 'Number');
        }

        if (data.hasOwnProperty('CanStop')) {
          obj['CanStop'] = _ApiClient["default"].convertToType(data['CanStop'], 'Boolean');
        }

        if (data.hasOwnProperty('CanPause')) {
          obj['CanPause'] = _ApiClient["default"].convertToType(data['CanPause'], 'Boolean');
        }

        if (data.hasOwnProperty('HasProgress')) {
          obj['HasProgress'] = _ApiClient["default"].convertToType(data['HasProgress'], 'Boolean');
        }

        if (data.hasOwnProperty('Progress')) {
          obj['Progress'] = _ApiClient["default"].convertToType(data['Progress'], 'Number');
        }

        if (data.hasOwnProperty('ActionsLogs')) {
          obj['ActionsLogs'] = _ApiClient["default"].convertToType(data['ActionsLogs'], [_JobsActionLog["default"]]);
        }
      }

      return obj;
    }
    /**
    * @member {String} ID
    */

  }]);

  return JobsTask;
}();

exports["default"] = JobsTask;
//# sourceMappingURL=JobsTask.js.map
