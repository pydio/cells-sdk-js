"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstallInstallConfig = _interopRequireDefault(require("./InstallInstallConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstallPerformCheckRequest model module.
 * @module model/InstallPerformCheckRequest
 * @version 4.0
 */
var InstallPerformCheckRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InstallPerformCheckRequest</code>.
   * @alias module:model/InstallPerformCheckRequest
   */
  function InstallPerformCheckRequest() {
    _classCallCheck(this, InstallPerformCheckRequest);

    InstallPerformCheckRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstallPerformCheckRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstallPerformCheckRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstallPerformCheckRequest} obj Optional instance to populate.
     * @return {module:model/InstallPerformCheckRequest} The populated <code>InstallPerformCheckRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstallPerformCheckRequest();

        if (data.hasOwnProperty('Config')) {
          obj['Config'] = _InstallInstallConfig["default"].constructFromObject(data['Config']);
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InstallPerformCheckRequest;
}();
/**
 * @member {module:model/InstallInstallConfig} Config
 */


InstallPerformCheckRequest.prototype['Config'] = undefined;
/**
 * @member {String} Name
 */

InstallPerformCheckRequest.prototype['Name'] = undefined;
var _default = InstallPerformCheckRequest;
exports["default"] = _default;
//# sourceMappingURL=InstallPerformCheckRequest.js.map
