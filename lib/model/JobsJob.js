"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JobsAction = _interopRequireDefault(require("./JobsAction"));

var _JobsContextMetaFilter = _interopRequireDefault(require("./JobsContextMetaFilter"));

var _JobsDataSourceSelector = _interopRequireDefault(require("./JobsDataSourceSelector"));

var _JobsIdmSelector = _interopRequireDefault(require("./JobsIdmSelector"));

var _JobsJobParameter = _interopRequireDefault(require("./JobsJobParameter"));

var _JobsNodesSelector = _interopRequireDefault(require("./JobsNodesSelector"));

var _JobsSchedule = _interopRequireDefault(require("./JobsSchedule"));

var _JobsTask = _interopRequireDefault(require("./JobsTask"));

var _JobsUsersSelector = _interopRequireDefault(require("./JobsUsersSelector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The JobsJob model module.
* @module model/JobsJob
* @version 1.0
*/
var JobsJob = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>JobsJob</code>.
  * @alias module:model/JobsJob
  * @class
  */
  function JobsJob() {
    _classCallCheck(this, JobsJob);

    _defineProperty(this, "ID", undefined);

    _defineProperty(this, "Label", undefined);

    _defineProperty(this, "Owner", undefined);

    _defineProperty(this, "Inactive", undefined);

    _defineProperty(this, "Custom", undefined);

    _defineProperty(this, "Languages", undefined);

    _defineProperty(this, "EventNames", undefined);

    _defineProperty(this, "Schedule", undefined);

    _defineProperty(this, "AutoStart", undefined);

    _defineProperty(this, "AutoClean", undefined);

    _defineProperty(this, "Actions", undefined);

    _defineProperty(this, "MaxConcurrency", undefined);

    _defineProperty(this, "TasksSilentUpdate", undefined);

    _defineProperty(this, "Tasks", undefined);

    _defineProperty(this, "NodeEventFilter", undefined);

    _defineProperty(this, "UserEventFilter", undefined);

    _defineProperty(this, "IdmFilter", undefined);

    _defineProperty(this, "ContextMetaFilter", undefined);

    _defineProperty(this, "DataSourceFilter", undefined);

    _defineProperty(this, "Parameters", undefined);
  }
  /**
  * Constructs a <code>JobsJob</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/JobsJob} obj Optional instance to populate.
  * @return {module:model/JobsJob} The populated <code>JobsJob</code> instance.
  */


  _createClass(JobsJob, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsJob();

        if (data.hasOwnProperty('ID')) {
          obj['ID'] = _ApiClient["default"].convertToType(data['ID'], 'String');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Owner')) {
          obj['Owner'] = _ApiClient["default"].convertToType(data['Owner'], 'String');
        }

        if (data.hasOwnProperty('Inactive')) {
          obj['Inactive'] = _ApiClient["default"].convertToType(data['Inactive'], 'Boolean');
        }

        if (data.hasOwnProperty('Custom')) {
          obj['Custom'] = _ApiClient["default"].convertToType(data['Custom'], 'Boolean');
        }

        if (data.hasOwnProperty('Languages')) {
          obj['Languages'] = _ApiClient["default"].convertToType(data['Languages'], ['String']);
        }

        if (data.hasOwnProperty('EventNames')) {
          obj['EventNames'] = _ApiClient["default"].convertToType(data['EventNames'], ['String']);
        }

        if (data.hasOwnProperty('Schedule')) {
          obj['Schedule'] = _JobsSchedule["default"].constructFromObject(data['Schedule']);
        }

        if (data.hasOwnProperty('AutoStart')) {
          obj['AutoStart'] = _ApiClient["default"].convertToType(data['AutoStart'], 'Boolean');
        }

        if (data.hasOwnProperty('AutoClean')) {
          obj['AutoClean'] = _ApiClient["default"].convertToType(data['AutoClean'], 'Boolean');
        }

        if (data.hasOwnProperty('Actions')) {
          obj['Actions'] = _ApiClient["default"].convertToType(data['Actions'], [_JobsAction["default"]]);
        }

        if (data.hasOwnProperty('MaxConcurrency')) {
          obj['MaxConcurrency'] = _ApiClient["default"].convertToType(data['MaxConcurrency'], 'Number');
        }

        if (data.hasOwnProperty('TasksSilentUpdate')) {
          obj['TasksSilentUpdate'] = _ApiClient["default"].convertToType(data['TasksSilentUpdate'], 'Boolean');
        }

        if (data.hasOwnProperty('Tasks')) {
          obj['Tasks'] = _ApiClient["default"].convertToType(data['Tasks'], [_JobsTask["default"]]);
        }

        if (data.hasOwnProperty('NodeEventFilter')) {
          obj['NodeEventFilter'] = _JobsNodesSelector["default"].constructFromObject(data['NodeEventFilter']);
        }

        if (data.hasOwnProperty('UserEventFilter')) {
          obj['UserEventFilter'] = _JobsUsersSelector["default"].constructFromObject(data['UserEventFilter']);
        }

        if (data.hasOwnProperty('IdmFilter')) {
          obj['IdmFilter'] = _JobsIdmSelector["default"].constructFromObject(data['IdmFilter']);
        }

        if (data.hasOwnProperty('ContextMetaFilter')) {
          obj['ContextMetaFilter'] = _JobsContextMetaFilter["default"].constructFromObject(data['ContextMetaFilter']);
        }

        if (data.hasOwnProperty('DataSourceFilter')) {
          obj['DataSourceFilter'] = _JobsDataSourceSelector["default"].constructFromObject(data['DataSourceFilter']);
        }

        if (data.hasOwnProperty('Parameters')) {
          obj['Parameters'] = _ApiClient["default"].convertToType(data['Parameters'], [_JobsJobParameter["default"]]);
        }
      }

      return obj;
    }
    /**
    * @member {String} ID
    */

  }]);

  return JobsJob;
}();

exports["default"] = JobsJob;
//# sourceMappingURL=JobsJob.js.map
