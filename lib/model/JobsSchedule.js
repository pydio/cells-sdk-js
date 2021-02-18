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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The JobsSchedule model module.
* @module model/JobsSchedule
* @version 1.0
*/
var JobsSchedule = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>JobsSchedule</code>.
  * @alias module:model/JobsSchedule
  * @class
  */
  function JobsSchedule() {
    _classCallCheck(this, JobsSchedule);

    _defineProperty(this, "Iso8601Schedule", undefined);

    _defineProperty(this, "Iso8601MinDelta", undefined);
  }
  /**
  * Constructs a <code>JobsSchedule</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/JobsSchedule} obj Optional instance to populate.
  * @return {module:model/JobsSchedule} The populated <code>JobsSchedule</code> instance.
  */


  _createClass(JobsSchedule, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsSchedule();

        if (data.hasOwnProperty('Iso8601Schedule')) {
          obj['Iso8601Schedule'] = _ApiClient["default"].convertToType(data['Iso8601Schedule'], 'String');
        }

        if (data.hasOwnProperty('Iso8601MinDelta')) {
          obj['Iso8601MinDelta'] = _ApiClient["default"].convertToType(data['Iso8601MinDelta'], 'String');
        }
      }

      return obj;
    }
    /**
    * ISO 8601 Description of the scheduling for instance \"R2/2015-06-04T19:25:16.828696-07:00/PT4S\" where first part is the number of repetitions (if 0, infinite repetition),  second part the starting date and last part, the duration between 2 occurrences.
    * @member {String} Iso8601Schedule
    */

  }]);

  return JobsSchedule;
}();

exports["default"] = JobsSchedule;
//# sourceMappingURL=JobsSchedule.js.map
