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

var _ProtobufAny = _interopRequireDefault(require("./ProtobufAny"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JobsJob model module.
 * @module model/JobsJob
 * @version 4.0
 */
var JobsJob = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobsJob</code>.
   * @alias module:model/JobsJob
   */
  function JobsJob() {
    _classCallCheck(this, JobsJob);

    JobsJob.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobsJob, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JobsJob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsJob} obj Optional instance to populate.
     * @return {module:model/JobsJob} The populated <code>JobsJob</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsJob();

        if (data.hasOwnProperty('Actions')) {
          obj['Actions'] = _ApiClient["default"].convertToType(data['Actions'], [_JobsAction["default"]]);
        }

        if (data.hasOwnProperty('AutoClean')) {
          obj['AutoClean'] = _ApiClient["default"].convertToType(data['AutoClean'], 'Boolean');
        }

        if (data.hasOwnProperty('AutoStart')) {
          obj['AutoStart'] = _ApiClient["default"].convertToType(data['AutoStart'], 'Boolean');
        }

        if (data.hasOwnProperty('ContextMetaFilter')) {
          obj['ContextMetaFilter'] = _JobsContextMetaFilter["default"].constructFromObject(data['ContextMetaFilter']);
        }

        if (data.hasOwnProperty('Custom')) {
          obj['Custom'] = _ApiClient["default"].convertToType(data['Custom'], 'Boolean');
        }

        if (data.hasOwnProperty('DataSourceFilter')) {
          obj['DataSourceFilter'] = _JobsDataSourceSelector["default"].constructFromObject(data['DataSourceFilter']);
        }

        if (data.hasOwnProperty('EventNames')) {
          obj['EventNames'] = _ApiClient["default"].convertToType(data['EventNames'], ['String']);
        }

        if (data.hasOwnProperty('ID')) {
          obj['ID'] = _ApiClient["default"].convertToType(data['ID'], 'String');
        }

        if (data.hasOwnProperty('IdmFilter')) {
          obj['IdmFilter'] = _JobsIdmSelector["default"].constructFromObject(data['IdmFilter']);
        }

        if (data.hasOwnProperty('Inactive')) {
          obj['Inactive'] = _ApiClient["default"].convertToType(data['Inactive'], 'Boolean');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Languages')) {
          obj['Languages'] = _ApiClient["default"].convertToType(data['Languages'], ['String']);
        }

        if (data.hasOwnProperty('MaxConcurrency')) {
          obj['MaxConcurrency'] = _ApiClient["default"].convertToType(data['MaxConcurrency'], 'Number');
        }

        if (data.hasOwnProperty('NodeEventFilter')) {
          obj['NodeEventFilter'] = _JobsNodesSelector["default"].constructFromObject(data['NodeEventFilter']);
        }

        if (data.hasOwnProperty('Owner')) {
          obj['Owner'] = _ApiClient["default"].convertToType(data['Owner'], 'String');
        }

        if (data.hasOwnProperty('Parameters')) {
          obj['Parameters'] = _ApiClient["default"].convertToType(data['Parameters'], [_JobsJobParameter["default"]]);
        }

        if (data.hasOwnProperty('ResourcesDependencies')) {
          obj['ResourcesDependencies'] = _ApiClient["default"].convertToType(data['ResourcesDependencies'], [_ProtobufAny["default"]]);
        }

        if (data.hasOwnProperty('Schedule')) {
          obj['Schedule'] = _JobsSchedule["default"].constructFromObject(data['Schedule']);
        }

        if (data.hasOwnProperty('Tasks')) {
          obj['Tasks'] = _ApiClient["default"].convertToType(data['Tasks'], [_JobsTask["default"]]);
        }

        if (data.hasOwnProperty('TasksSilentUpdate')) {
          obj['TasksSilentUpdate'] = _ApiClient["default"].convertToType(data['TasksSilentUpdate'], 'Boolean');
        }

        if (data.hasOwnProperty('Timeout')) {
          obj['Timeout'] = _ApiClient["default"].convertToType(data['Timeout'], 'String');
        }

        if (data.hasOwnProperty('UserEventFilter')) {
          obj['UserEventFilter'] = _JobsUsersSelector["default"].constructFromObject(data['UserEventFilter']);
        }
      }

      return obj;
    }
  }]);

  return JobsJob;
}();
/**
 * @member {Array.<module:model/JobsAction>} Actions
 */


JobsJob.prototype['Actions'] = undefined;
/**
 * @member {Boolean} AutoClean
 */

JobsJob.prototype['AutoClean'] = undefined;
/**
 * @member {Boolean} AutoStart
 */

JobsJob.prototype['AutoStart'] = undefined;
/**
 * @member {module:model/JobsContextMetaFilter} ContextMetaFilter
 */

JobsJob.prototype['ContextMetaFilter'] = undefined;
/**
 * @member {Boolean} Custom
 */

JobsJob.prototype['Custom'] = undefined;
/**
 * @member {module:model/JobsDataSourceSelector} DataSourceFilter
 */

JobsJob.prototype['DataSourceFilter'] = undefined;
/**
 * @member {Array.<String>} EventNames
 */

JobsJob.prototype['EventNames'] = undefined;
/**
 * @member {String} ID
 */

JobsJob.prototype['ID'] = undefined;
/**
 * @member {module:model/JobsIdmSelector} IdmFilter
 */

JobsJob.prototype['IdmFilter'] = undefined;
/**
 * @member {Boolean} Inactive
 */

JobsJob.prototype['Inactive'] = undefined;
/**
 * @member {String} Label
 */

JobsJob.prototype['Label'] = undefined;
/**
 * @member {Array.<String>} Languages
 */

JobsJob.prototype['Languages'] = undefined;
/**
 * @member {Number} MaxConcurrency
 */

JobsJob.prototype['MaxConcurrency'] = undefined;
/**
 * @member {module:model/JobsNodesSelector} NodeEventFilter
 */

JobsJob.prototype['NodeEventFilter'] = undefined;
/**
 * @member {String} Owner
 */

JobsJob.prototype['Owner'] = undefined;
/**
 * @member {Array.<module:model/JobsJobParameter>} Parameters
 */

JobsJob.prototype['Parameters'] = undefined;
/**
 * @member {Array.<module:model/ProtobufAny>} ResourcesDependencies
 */

JobsJob.prototype['ResourcesDependencies'] = undefined;
/**
 * @member {module:model/JobsSchedule} Schedule
 */

JobsJob.prototype['Schedule'] = undefined;
/**
 * @member {Array.<module:model/JobsTask>} Tasks
 */

JobsJob.prototype['Tasks'] = undefined;
/**
 * @member {Boolean} TasksSilentUpdate
 */

JobsJob.prototype['TasksSilentUpdate'] = undefined;
/**
 * @member {String} Timeout
 */

JobsJob.prototype['Timeout'] = undefined;
/**
 * @member {module:model/JobsUsersSelector} UserEventFilter
 */

JobsJob.prototype['UserEventFilter'] = undefined;
var _default = JobsJob;
exports["default"] = _default;
//# sourceMappingURL=JobsJob.js.map
