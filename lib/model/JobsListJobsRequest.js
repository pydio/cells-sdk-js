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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The JobsListJobsRequest model module.
* @module model/JobsListJobsRequest
* @version 1.0
*/
var JobsListJobsRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>JobsListJobsRequest</code>.
  * @alias module:model/JobsListJobsRequest
  * @class
  */
  function JobsListJobsRequest() {
    _classCallCheck(this, JobsListJobsRequest);

    _defineProperty(this, "Owner", undefined);

    _defineProperty(this, "EventsOnly", undefined);

    _defineProperty(this, "TimersOnly", undefined);

    _defineProperty(this, "LoadTasks", undefined);

    _defineProperty(this, "JobIDs", undefined);

    _defineProperty(this, "TasksOffset", undefined);

    _defineProperty(this, "TasksLimit", undefined);
  }
  /**
  * Constructs a <code>JobsListJobsRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/JobsListJobsRequest} obj Optional instance to populate.
  * @return {module:model/JobsListJobsRequest} The populated <code>JobsListJobsRequest</code> instance.
  */


  _createClass(JobsListJobsRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsListJobsRequest();

        if (data.hasOwnProperty('Owner')) {
          obj['Owner'] = _ApiClient["default"].convertToType(data['Owner'], 'String');
        }

        if (data.hasOwnProperty('EventsOnly')) {
          obj['EventsOnly'] = _ApiClient["default"].convertToType(data['EventsOnly'], 'Boolean');
        }

        if (data.hasOwnProperty('TimersOnly')) {
          obj['TimersOnly'] = _ApiClient["default"].convertToType(data['TimersOnly'], 'Boolean');
        }

        if (data.hasOwnProperty('LoadTasks')) {
          obj['LoadTasks'] = _JobsTaskStatus["default"].constructFromObject(data['LoadTasks']);
        }

        if (data.hasOwnProperty('JobIDs')) {
          obj['JobIDs'] = _ApiClient["default"].convertToType(data['JobIDs'], ['String']);
        }

        if (data.hasOwnProperty('TasksOffset')) {
          obj['TasksOffset'] = _ApiClient["default"].convertToType(data['TasksOffset'], 'Number');
        }

        if (data.hasOwnProperty('TasksLimit')) {
          obj['TasksLimit'] = _ApiClient["default"].convertToType(data['TasksLimit'], 'Number');
        }
      }

      return obj;
    }
    /**
    * @member {String} Owner
    */

  }]);

  return JobsListJobsRequest;
}();

exports["default"] = JobsListJobsRequest;
//# sourceMappingURL=JobsListJobsRequest.js.map
