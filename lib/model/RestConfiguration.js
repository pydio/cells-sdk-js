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
 * The RestConfiguration model module.
 * @module model/RestConfiguration
 * @version 4.0
 */
var RestConfiguration = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestConfiguration</code>.
   * @alias module:model/RestConfiguration
   */
  function RestConfiguration() {
    _classCallCheck(this, RestConfiguration);

    RestConfiguration.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestConfiguration, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestConfiguration} obj Optional instance to populate.
     * @return {module:model/RestConfiguration} The populated <code>RestConfiguration</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestConfiguration();

        if (data.hasOwnProperty('Data')) {
          obj['Data'] = _ApiClient["default"].convertToType(data['Data'], 'String');
        }

        if (data.hasOwnProperty('FullPath')) {
          obj['FullPath'] = _ApiClient["default"].convertToType(data['FullPath'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RestConfiguration;
}();
/**
 * @member {String} Data
 */


RestConfiguration.prototype['Data'] = undefined;
/**
 * @member {String} FullPath
 */

RestConfiguration.prototype['FullPath'] = undefined;
var _default = RestConfiguration;
exports["default"] = _default;
//# sourceMappingURL=RestConfiguration.js.map
