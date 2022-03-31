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
 * The InstallInstallRequest model module.
 * @module model/InstallInstallRequest
 * @version 4.0
 */
var InstallInstallRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InstallInstallRequest</code>.
   * @alias module:model/InstallInstallRequest
   */
  function InstallInstallRequest() {
    _classCallCheck(this, InstallInstallRequest);

    InstallInstallRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstallInstallRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstallInstallRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstallInstallRequest} obj Optional instance to populate.
     * @return {module:model/InstallInstallRequest} The populated <code>InstallInstallRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstallInstallRequest();

        if (data.hasOwnProperty('config')) {
          obj['config'] = _InstallInstallConfig["default"].constructFromObject(data['config']);
        }
      }

      return obj;
    }
  }]);

  return InstallInstallRequest;
}();
/**
 * @member {module:model/InstallInstallConfig} config
 */


InstallInstallRequest.prototype['config'] = undefined;
var _default = InstallInstallRequest;
exports["default"] = _default;
//# sourceMappingURL=InstallInstallRequest.js.map
