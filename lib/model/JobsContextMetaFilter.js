"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JobsContextMetaFilterType = _interopRequireDefault(require("./JobsContextMetaFilterType"));

var _ServiceQuery = _interopRequireDefault(require("./ServiceQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The JobsContextMetaFilter model module.
* @module model/JobsContextMetaFilter
* @version 1.0
*/
var JobsContextMetaFilter = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>JobsContextMetaFilter</code>.
  * @alias module:model/JobsContextMetaFilter
  * @class
  */
  function JobsContextMetaFilter() {
    _classCallCheck(this, JobsContextMetaFilter);

    _defineProperty(this, "Type", undefined);

    _defineProperty(this, "Query", undefined);

    _defineProperty(this, "Label", undefined);

    _defineProperty(this, "Description", undefined);
  }
  /**
  * Constructs a <code>JobsContextMetaFilter</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/JobsContextMetaFilter} obj Optional instance to populate.
  * @return {module:model/JobsContextMetaFilter} The populated <code>JobsContextMetaFilter</code> instance.
  */


  _createClass(JobsContextMetaFilter, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsContextMetaFilter();

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _JobsContextMetaFilterType["default"].constructFromObject(data['Type']);
        }

        if (data.hasOwnProperty('Query')) {
          obj['Query'] = _ServiceQuery["default"].constructFromObject(data['Query']);
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {module:model/JobsContextMetaFilterType} Type
    */

  }]);

  return JobsContextMetaFilter;
}();

exports["default"] = JobsContextMetaFilter;
//# sourceMappingURL=JobsContextMetaFilter.js.map
