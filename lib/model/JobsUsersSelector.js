"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmUser = _interopRequireDefault(require("./IdmUser"));

var _ServiceQuery = _interopRequireDefault(require("./ServiceQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JobsUsersSelector model module.
 * @module model/JobsUsersSelector
 * @version 4.0
 */
var JobsUsersSelector = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobsUsersSelector</code>.
   * @alias module:model/JobsUsersSelector
   */
  function JobsUsersSelector() {
    _classCallCheck(this, JobsUsersSelector);

    JobsUsersSelector.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobsUsersSelector, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JobsUsersSelector</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsUsersSelector} obj Optional instance to populate.
     * @return {module:model/JobsUsersSelector} The populated <code>JobsUsersSelector</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsUsersSelector();

        if (data.hasOwnProperty('All')) {
          obj['All'] = _ApiClient["default"].convertToType(data['All'], 'Boolean');
        }

        if (data.hasOwnProperty('ClearInput')) {
          obj['ClearInput'] = _ApiClient["default"].convertToType(data['ClearInput'], 'Boolean');
        }

        if (data.hasOwnProperty('Collect')) {
          obj['Collect'] = _ApiClient["default"].convertToType(data['Collect'], 'Boolean');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Query')) {
          obj['Query'] = _ServiceQuery["default"].constructFromObject(data['Query']);
        }

        if (data.hasOwnProperty('Timeout')) {
          obj['Timeout'] = _ApiClient["default"].convertToType(data['Timeout'], 'String');
        }

        if (data.hasOwnProperty('Users')) {
          obj['Users'] = _ApiClient["default"].convertToType(data['Users'], [_IdmUser["default"]]);
        }
      }

      return obj;
    }
  }]);

  return JobsUsersSelector;
}();
/**
 * @member {Boolean} All
 */


JobsUsersSelector.prototype['All'] = undefined;
/**
 * @member {Boolean} ClearInput
 */

JobsUsersSelector.prototype['ClearInput'] = undefined;
/**
 * @member {Boolean} Collect
 */

JobsUsersSelector.prototype['Collect'] = undefined;
/**
 * @member {String} Description
 */

JobsUsersSelector.prototype['Description'] = undefined;
/**
 * @member {String} Label
 */

JobsUsersSelector.prototype['Label'] = undefined;
/**
 * @member {module:model/ServiceQuery} Query
 */

JobsUsersSelector.prototype['Query'] = undefined;
/**
 * @member {String} Timeout
 */

JobsUsersSelector.prototype['Timeout'] = undefined;
/**
 * @member {Array.<module:model/IdmUser>} Users
 */

JobsUsersSelector.prototype['Users'] = undefined;
var _default = JobsUsersSelector;
exports["default"] = _default;
//# sourceMappingURL=JobsUsersSelector.js.map
