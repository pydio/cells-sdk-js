"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JobsCommand = _interopRequireDefault(require("./JobsCommand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JobsCtrlCommand model module.
 * @module model/JobsCtrlCommand
 * @version 4.0
 */
var JobsCtrlCommand = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobsCtrlCommand</code>.
   * @alias module:model/JobsCtrlCommand
   */
  function JobsCtrlCommand() {
    _classCallCheck(this, JobsCtrlCommand);

    JobsCtrlCommand.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobsCtrlCommand, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JobsCtrlCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsCtrlCommand} obj Optional instance to populate.
     * @return {module:model/JobsCtrlCommand} The populated <code>JobsCtrlCommand</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsCtrlCommand();

        if (data.hasOwnProperty('Cmd')) {
          obj['Cmd'] = _JobsCommand["default"].constructFromObject(data['Cmd']);
        }

        if (data.hasOwnProperty('JobId')) {
          obj['JobId'] = _ApiClient["default"].convertToType(data['JobId'], 'String');
        }

        if (data.hasOwnProperty('OwnerId')) {
          obj['OwnerId'] = _ApiClient["default"].convertToType(data['OwnerId'], 'String');
        }

        if (data.hasOwnProperty('RunParameters')) {
          obj['RunParameters'] = _ApiClient["default"].convertToType(data['RunParameters'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('TaskId')) {
          obj['TaskId'] = _ApiClient["default"].convertToType(data['TaskId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return JobsCtrlCommand;
}();
/**
 * @member {module:model/JobsCommand} Cmd
 */


JobsCtrlCommand.prototype['Cmd'] = undefined;
/**
 * @member {String} JobId
 */

JobsCtrlCommand.prototype['JobId'] = undefined;
/**
 * @member {String} OwnerId
 */

JobsCtrlCommand.prototype['OwnerId'] = undefined;
/**
 * @member {Object.<String, String>} RunParameters
 */

JobsCtrlCommand.prototype['RunParameters'] = undefined;
/**
 * @member {String} TaskId
 */

JobsCtrlCommand.prototype['TaskId'] = undefined;
var _default = JobsCtrlCommand;
exports["default"] = _default;
//# sourceMappingURL=JobsCtrlCommand.js.map
