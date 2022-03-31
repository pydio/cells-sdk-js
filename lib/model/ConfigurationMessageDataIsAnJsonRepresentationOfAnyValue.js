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
 * The ConfigurationMessageDataIsAnJsonRepresentationOfAnyValue model module.
 * @module model/ConfigurationMessageDataIsAnJsonRepresentationOfAnyValue
 * @version 4.0
 */
var ConfigurationMessageDataIsAnJsonRepresentationOfAnyValue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConfigurationMessageDataIsAnJsonRepresentationOfAnyValue</code>.
   * @alias module:model/ConfigurationMessageDataIsAnJsonRepresentationOfAnyValue
   */
  function ConfigurationMessageDataIsAnJsonRepresentationOfAnyValue() {
    _classCallCheck(this, ConfigurationMessageDataIsAnJsonRepresentationOfAnyValue);

    ConfigurationMessageDataIsAnJsonRepresentationOfAnyValue.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConfigurationMessageDataIsAnJsonRepresentationOfAnyValue, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConfigurationMessageDataIsAnJsonRepresentationOfAnyValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigurationMessageDataIsAnJsonRepresentationOfAnyValue} obj Optional instance to populate.
     * @return {module:model/ConfigurationMessageDataIsAnJsonRepresentationOfAnyValue} The populated <code>ConfigurationMessageDataIsAnJsonRepresentationOfAnyValue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConfigurationMessageDataIsAnJsonRepresentationOfAnyValue();

        if (data.hasOwnProperty('Data')) {
          obj['Data'] = _ApiClient["default"].convertToType(data['Data'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConfigurationMessageDataIsAnJsonRepresentationOfAnyValue;
}();
/**
 * @member {String} Data
 */


ConfigurationMessageDataIsAnJsonRepresentationOfAnyValue.prototype['Data'] = undefined;
var _default = ConfigurationMessageDataIsAnJsonRepresentationOfAnyValue;
exports["default"] = _default;
//# sourceMappingURL=ConfigurationMessageDataIsAnJsonRepresentationOfAnyValue.js.map
