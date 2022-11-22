"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServiceResourcePolicy = _interopRequireDefault(require("./ServiceResourcePolicy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JobsJobHook model module.
 * @module model/JobsJobHook
 * @version 4.0
 */
var JobsJobHook = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobsJobHook</code>.
   * @alias module:model/JobsJobHook
   */
  function JobsJobHook() {
    _classCallCheck(this, JobsJobHook);

    JobsJobHook.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobsJobHook, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JobsJobHook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsJobHook} obj Optional instance to populate.
     * @return {module:model/JobsJobHook} The populated <code>JobsJobHook</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsJobHook();

        if (data.hasOwnProperty('AllowOverridePresets')) {
          obj['AllowOverridePresets'] = _ApiClient["default"].convertToType(data['AllowOverridePresets'], 'Boolean');
        }

        if (data.hasOwnProperty('ApiSlug')) {
          obj['ApiSlug'] = _ApiClient["default"].convertToType(data['ApiSlug'], 'String');
        }

        if (data.hasOwnProperty('Metadata')) {
          obj['Metadata'] = _ApiClient["default"].convertToType(data['Metadata'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Policies')) {
          obj['Policies'] = _ApiClient["default"].convertToType(data['Policies'], [_ServiceResourcePolicy["default"]]);
        }

        if (data.hasOwnProperty('PresetParameters')) {
          obj['PresetParameters'] = _ApiClient["default"].convertToType(data['PresetParameters'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
  }]);

  return JobsJobHook;
}();
/**
 * @member {Boolean} AllowOverridePresets
 */


JobsJobHook.prototype['AllowOverridePresets'] = undefined;
/**
 * @member {String} ApiSlug
 */

JobsJobHook.prototype['ApiSlug'] = undefined;
/**
 * @member {Object.<String, String>} Metadata
 */

JobsJobHook.prototype['Metadata'] = undefined;
/**
 * @member {Array.<module:model/ServiceResourcePolicy>} Policies
 */

JobsJobHook.prototype['Policies'] = undefined;
/**
 * @member {Object.<String, String>} PresetParameters
 */

JobsJobHook.prototype['PresetParameters'] = undefined;
var _default = JobsJobHook;
exports["default"] = _default;
//# sourceMappingURL=JobsJobHook.js.map
