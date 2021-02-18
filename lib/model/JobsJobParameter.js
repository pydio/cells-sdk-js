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
* The JobsJobParameter model module.
* @module model/JobsJobParameter
* @version 1.0
*/
var JobsJobParameter = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>JobsJobParameter</code>.
  * @alias module:model/JobsJobParameter
  * @class
  */
  function JobsJobParameter() {
    _classCallCheck(this, JobsJobParameter);

    _defineProperty(this, "Name", undefined);

    _defineProperty(this, "Description", undefined);

    _defineProperty(this, "Value", undefined);

    _defineProperty(this, "Mandatory", undefined);

    _defineProperty(this, "Type", undefined);

    _defineProperty(this, "JsonChoices", undefined);
  }
  /**
  * Constructs a <code>JobsJobParameter</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/JobsJobParameter} obj Optional instance to populate.
  * @return {module:model/JobsJobParameter} The populated <code>JobsJobParameter</code> instance.
  */


  _createClass(JobsJobParameter, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsJobParameter();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Value')) {
          obj['Value'] = _ApiClient["default"].convertToType(data['Value'], 'String');
        }

        if (data.hasOwnProperty('Mandatory')) {
          obj['Mandatory'] = _ApiClient["default"].convertToType(data['Mandatory'], 'Boolean');
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _ApiClient["default"].convertToType(data['Type'], 'String');
        }

        if (data.hasOwnProperty('JsonChoices')) {
          obj['JsonChoices'] = _ApiClient["default"].convertToType(data['JsonChoices'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {String} Name
    */

  }]);

  return JobsJobParameter;
}();

exports["default"] = JobsJobParameter;
//# sourceMappingURL=JobsJobParameter.js.map
