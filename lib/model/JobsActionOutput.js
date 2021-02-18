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
* The JobsActionOutput model module.
* @module model/JobsActionOutput
* @version 1.0
*/
var JobsActionOutput = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>JobsActionOutput</code>.
  * @alias module:model/JobsActionOutput
  * @class
  */
  function JobsActionOutput() {
    _classCallCheck(this, JobsActionOutput);

    _defineProperty(this, "Success", undefined);

    _defineProperty(this, "RawBody", undefined);

    _defineProperty(this, "StringBody", undefined);

    _defineProperty(this, "JsonBody", undefined);

    _defineProperty(this, "ErrorString", undefined);

    _defineProperty(this, "Ignored", undefined);

    _defineProperty(this, "Time", undefined);
  }
  /**
  * Constructs a <code>JobsActionOutput</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/JobsActionOutput} obj Optional instance to populate.
  * @return {module:model/JobsActionOutput} The populated <code>JobsActionOutput</code> instance.
  */


  _createClass(JobsActionOutput, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsActionOutput();

        if (data.hasOwnProperty('Success')) {
          obj['Success'] = _ApiClient["default"].convertToType(data['Success'], 'Boolean');
        }

        if (data.hasOwnProperty('RawBody')) {
          obj['RawBody'] = _ApiClient["default"].convertToType(data['RawBody'], 'Blob');
        }

        if (data.hasOwnProperty('StringBody')) {
          obj['StringBody'] = _ApiClient["default"].convertToType(data['StringBody'], 'String');
        }

        if (data.hasOwnProperty('JsonBody')) {
          obj['JsonBody'] = _ApiClient["default"].convertToType(data['JsonBody'], 'Blob');
        }

        if (data.hasOwnProperty('ErrorString')) {
          obj['ErrorString'] = _ApiClient["default"].convertToType(data['ErrorString'], 'String');
        }

        if (data.hasOwnProperty('Ignored')) {
          obj['Ignored'] = _ApiClient["default"].convertToType(data['Ignored'], 'Boolean');
        }

        if (data.hasOwnProperty('Time')) {
          obj['Time'] = _ApiClient["default"].convertToType(data['Time'], 'Number');
        }
      }

      return obj;
    }
    /**
    * @member {Boolean} Success
    */

  }]);

  return JobsActionOutput;
}();

exports["default"] = JobsActionOutput;
//# sourceMappingURL=JobsActionOutput.js.map
