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
* The JobsDeleteTasksRequest model module.
* @module model/JobsDeleteTasksRequest
* @version 1.0
*/
var JobsDeleteTasksRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>JobsDeleteTasksRequest</code>.
  * @alias module:model/JobsDeleteTasksRequest
  * @class
  */
  function JobsDeleteTasksRequest() {
    _classCallCheck(this, JobsDeleteTasksRequest);

    _defineProperty(this, "JobId", undefined);

    _defineProperty(this, "TaskID", undefined);

    _defineProperty(this, "Status", undefined);

    _defineProperty(this, "PruneLimit", undefined);
  }
  /**
  * Constructs a <code>JobsDeleteTasksRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/JobsDeleteTasksRequest} obj Optional instance to populate.
  * @return {module:model/JobsDeleteTasksRequest} The populated <code>JobsDeleteTasksRequest</code> instance.
  */


  _createClass(JobsDeleteTasksRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsDeleteTasksRequest();

        if (data.hasOwnProperty('JobId')) {
          obj['JobId'] = _ApiClient["default"].convertToType(data['JobId'], 'String');
        }

        if (data.hasOwnProperty('TaskID')) {
          obj['TaskID'] = _ApiClient["default"].convertToType(data['TaskID'], ['String']);
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _ApiClient["default"].convertToType(data['Status'], [_JobsTaskStatus["default"]]);
        }

        if (data.hasOwnProperty('PruneLimit')) {
          obj['PruneLimit'] = _ApiClient["default"].convertToType(data['PruneLimit'], 'Number');
        }
      }

      return obj;
    }
    /**
    * @member {String} JobId
    */

  }]);

  return JobsDeleteTasksRequest;
}();

exports["default"] = JobsDeleteTasksRequest;
//# sourceMappingURL=JobsDeleteTasksRequest.js.map
