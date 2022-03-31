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

/**
 * The JobsCtrlCommandResponse model module.
 * @module model/JobsCtrlCommandResponse
 * @version 4.0
 */
var JobsCtrlCommandResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobsCtrlCommandResponse</code>.
   * @alias module:model/JobsCtrlCommandResponse
   */
  function JobsCtrlCommandResponse() {
    _classCallCheck(this, JobsCtrlCommandResponse);

    JobsCtrlCommandResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobsCtrlCommandResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JobsCtrlCommandResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsCtrlCommandResponse} obj Optional instance to populate.
     * @return {module:model/JobsCtrlCommandResponse} The populated <code>JobsCtrlCommandResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsCtrlCommandResponse();

        if (data.hasOwnProperty('Msg')) {
          obj['Msg'] = _ApiClient["default"].convertToType(data['Msg'], 'String');
        }
      }

      return obj;
    }
  }]);

  return JobsCtrlCommandResponse;
}();
/**
 * @member {String} Msg
 */


JobsCtrlCommandResponse.prototype['Msg'] = undefined;
var _default = JobsCtrlCommandResponse;
exports["default"] = _default;
//# sourceMappingURL=JobsCtrlCommandResponse.js.map
