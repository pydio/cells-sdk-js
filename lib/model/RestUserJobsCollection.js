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

/**
 * The RestUserJobsCollection model module.
 * @module model/RestUserJobsCollection
 * @version 4.0
 */
var RestUserJobsCollection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestUserJobsCollection</code>.
   * @alias module:model/RestUserJobsCollection
   */
  function RestUserJobsCollection() {
    _classCallCheck(this, RestUserJobsCollection);

    RestUserJobsCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestUserJobsCollection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestUserJobsCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestUserJobsCollection} obj Optional instance to populate.
     * @return {module:model/RestUserJobsCollection} The populated <code>RestUserJobsCollection</code> instance.
     */

  }, {
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
  }]);

  return RestUserJobsCollection;
}();
/**
 * @member {Array.<module:model/JobsJob>} Jobs
 */


RestUserJobsCollection.prototype['Jobs'] = undefined;
var _default = RestUserJobsCollection;
exports["default"] = _default;
//# sourceMappingURL=RestUserJobsCollection.js.map
