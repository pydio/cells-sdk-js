"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JobsJob = _interopRequireDefault(require("./JobsJob"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestUserJobsCollection model module.
* @module model/RestUserJobsCollection
* @version 1.0
*/
var RestUserJobsCollection = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestUserJobsCollection</code>.
  * @alias module:model/RestUserJobsCollection
  * @class
  */
  function RestUserJobsCollection() {
    _classCallCheck(this, RestUserJobsCollection);

    _defineProperty(this, "Jobs", undefined);
  }
  /**
  * Constructs a <code>RestUserJobsCollection</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestUserJobsCollection} obj Optional instance to populate.
  * @return {module:model/RestUserJobsCollection} The populated <code>RestUserJobsCollection</code> instance.
  */


  _createClass(RestUserJobsCollection, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestUserJobsCollection();

        if (data.hasOwnProperty('Jobs')) {
          obj['Jobs'] = _ApiClient["default"].convertToType(data['Jobs'], [_JobsJob["default"]]);
        }
      }

      return obj;
    }
    /**
    * @member {Array.<module:model/JobsJob>} Jobs
    */

  }]);

  return RestUserJobsCollection;
}();

exports["default"] = RestUserJobsCollection;
//# sourceMappingURL=RestUserJobsCollection.js.map
