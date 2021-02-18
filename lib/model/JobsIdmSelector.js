"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JobsIdmSelectorType = _interopRequireDefault(require("./JobsIdmSelectorType"));

var _ServiceQuery = _interopRequireDefault(require("./ServiceQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The JobsIdmSelector model module.
* @module model/JobsIdmSelector
* @version 1.0
*/
var JobsIdmSelector = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>JobsIdmSelector</code>.
  * @alias module:model/JobsIdmSelector
  * @class
  */
  function JobsIdmSelector() {
    _classCallCheck(this, JobsIdmSelector);

    _defineProperty(this, "Type", undefined);

    _defineProperty(this, "All", undefined);

    _defineProperty(this, "Query", undefined);

    _defineProperty(this, "Collect", undefined);

    _defineProperty(this, "Label", undefined);

    _defineProperty(this, "Description", undefined);
  }
  /**
  * Constructs a <code>JobsIdmSelector</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/JobsIdmSelector} obj Optional instance to populate.
  * @return {module:model/JobsIdmSelector} The populated <code>JobsIdmSelector</code> instance.
  */


  _createClass(JobsIdmSelector, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsIdmSelector();

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _JobsIdmSelectorType["default"].constructFromObject(data['Type']);
        }

        if (data.hasOwnProperty('All')) {
          obj['All'] = _ApiClient["default"].convertToType(data['All'], 'Boolean');
        }

        if (data.hasOwnProperty('Query')) {
          obj['Query'] = _ServiceQuery["default"].constructFromObject(data['Query']);
        }

        if (data.hasOwnProperty('Collect')) {
          obj['Collect'] = _ApiClient["default"].convertToType(data['Collect'], 'Boolean');
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
    * @member {module:model/JobsIdmSelectorType} Type
    */

  }]);

  return JobsIdmSelector;
}();

exports["default"] = JobsIdmSelector;
//# sourceMappingURL=JobsIdmSelector.js.map
