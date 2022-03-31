"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JobsTaskStatus = _interopRequireDefault(require("./JobsTaskStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JobsListJobsRequest model module.
 * @module model/JobsListJobsRequest
 * @version 4.0
 */
var JobsListJobsRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobsListJobsRequest</code>.
   * @alias module:model/JobsListJobsRequest
   */
  function JobsListJobsRequest() {
    _classCallCheck(this, JobsListJobsRequest);

    JobsListJobsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobsListJobsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JobsListJobsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsListJobsRequest} obj Optional instance to populate.
     * @return {module:model/JobsListJobsRequest} The populated <code>JobsListJobsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsListJobsRequest();

        if (data.hasOwnProperty('EventsOnly')) {
          obj['EventsOnly'] = _ApiClient["default"].convertToType(data['EventsOnly'], 'Boolean');
        }

        if (data.hasOwnProperty('JobIDs')) {
          obj['JobIDs'] = _ApiClient["default"].convertToType(data['JobIDs'], ['String']);
        }

        if (data.hasOwnProperty('LoadTasks')) {
          obj['LoadTasks'] = _JobsTaskStatus["default"].constructFromObject(data['LoadTasks']);
        }

        if (data.hasOwnProperty('Owner')) {
          obj['Owner'] = _ApiClient["default"].convertToType(data['Owner'], 'String');
        }

        if (data.hasOwnProperty('TasksLimit')) {
          obj['TasksLimit'] = _ApiClient["default"].convertToType(data['TasksLimit'], 'Number');
        }

        if (data.hasOwnProperty('TasksOffset')) {
          obj['TasksOffset'] = _ApiClient["default"].convertToType(data['TasksOffset'], 'Number');
        }

        if (data.hasOwnProperty('TimersOnly')) {
          obj['TimersOnly'] = _ApiClient["default"].convertToType(data['TimersOnly'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return JobsListJobsRequest;
}();
/**
 * @member {Boolean} EventsOnly
 */


JobsListJobsRequest.prototype['EventsOnly'] = undefined;
/**
 * @member {Array.<String>} JobIDs
 */

JobsListJobsRequest.prototype['JobIDs'] = undefined;
/**
 * @member {module:model/JobsTaskStatus} LoadTasks
 */

JobsListJobsRequest.prototype['LoadTasks'] = undefined;
/**
 * @member {String} Owner
 */

JobsListJobsRequest.prototype['Owner'] = undefined;
/**
 * @member {Number} TasksLimit
 */

JobsListJobsRequest.prototype['TasksLimit'] = undefined;
/**
 * @member {Number} TasksOffset
 */

JobsListJobsRequest.prototype['TasksOffset'] = undefined;
/**
 * @member {Boolean} TimersOnly
 */

JobsListJobsRequest.prototype['TimersOnly'] = undefined;
var _default = JobsListJobsRequest;
exports["default"] = _default;
//# sourceMappingURL=JobsListJobsRequest.js.map
