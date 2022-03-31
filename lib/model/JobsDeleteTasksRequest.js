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
 * The JobsDeleteTasksRequest model module.
 * @module model/JobsDeleteTasksRequest
 * @version 4.0
 */
var JobsDeleteTasksRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobsDeleteTasksRequest</code>.
   * @alias module:model/JobsDeleteTasksRequest
   */
  function JobsDeleteTasksRequest() {
    _classCallCheck(this, JobsDeleteTasksRequest);

    JobsDeleteTasksRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobsDeleteTasksRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JobsDeleteTasksRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsDeleteTasksRequest} obj Optional instance to populate.
     * @return {module:model/JobsDeleteTasksRequest} The populated <code>JobsDeleteTasksRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsDeleteTasksRequest();

        if (data.hasOwnProperty('JobId')) {
          obj['JobId'] = _ApiClient["default"].convertToType(data['JobId'], 'String');
        }

        if (data.hasOwnProperty('PruneLimit')) {
          obj['PruneLimit'] = _ApiClient["default"].convertToType(data['PruneLimit'], 'Number');
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _ApiClient["default"].convertToType(data['Status'], [_JobsTaskStatus["default"]]);
        }

        if (data.hasOwnProperty('TaskID')) {
          obj['TaskID'] = _ApiClient["default"].convertToType(data['TaskID'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return JobsDeleteTasksRequest;
}();
/**
 * @member {String} JobId
 */


JobsDeleteTasksRequest.prototype['JobId'] = undefined;
/**
 * @member {Number} PruneLimit
 */

JobsDeleteTasksRequest.prototype['PruneLimit'] = undefined;
/**
 * @member {Array.<module:model/JobsTaskStatus>} Status
 */

JobsDeleteTasksRequest.prototype['Status'] = undefined;
/**
 * @member {Array.<String>} TaskID
 */

JobsDeleteTasksRequest.prototype['TaskID'] = undefined;
var _default = JobsDeleteTasksRequest;
exports["default"] = _default;
//# sourceMappingURL=JobsDeleteTasksRequest.js.map
