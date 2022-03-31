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
 * The RestSettingsEntryMeta model module.
 * @module model/RestSettingsEntryMeta
 * @version 4.0
 */
var RestSettingsEntryMeta = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestSettingsEntryMeta</code>.
   * @alias module:model/RestSettingsEntryMeta
   */
  function RestSettingsEntryMeta() {
    _classCallCheck(this, RestSettingsEntryMeta);

    RestSettingsEntryMeta.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestSettingsEntryMeta, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestSettingsEntryMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestSettingsEntryMeta} obj Optional instance to populate.
     * @return {module:model/RestSettingsEntryMeta} The populated <code>RestSettingsEntryMeta</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestSettingsEntryMeta();

        if (data.hasOwnProperty('advanced')) {
          obj['advanced'] = _ApiClient["default"].convertToType(data['advanced'], 'Boolean');
        }

        if (data.hasOwnProperty('component')) {
          obj['component'] = _ApiClient["default"].convertToType(data['component'], 'String');
        }

        if (data.hasOwnProperty('icon_class')) {
          obj['icon_class'] = _ApiClient["default"].convertToType(data['icon_class'], 'String');
        }

        if (data.hasOwnProperty('indexed')) {
          obj['indexed'] = _ApiClient["default"].convertToType(data['indexed'], ['String']);
        }

        if (data.hasOwnProperty('props')) {
          obj['props'] = _ApiClient["default"].convertToType(data['props'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RestSettingsEntryMeta;
}();
/**
 * @member {Boolean} advanced
 */


RestSettingsEntryMeta.prototype['advanced'] = undefined;
/**
 * @member {String} component
 */

RestSettingsEntryMeta.prototype['component'] = undefined;
/**
 * @member {String} icon_class
 */

RestSettingsEntryMeta.prototype['icon_class'] = undefined;
/**
 * @member {Array.<String>} indexed
 */

RestSettingsEntryMeta.prototype['indexed'] = undefined;
/**
 * @member {String} props
 */

RestSettingsEntryMeta.prototype['props'] = undefined;
var _default = RestSettingsEntryMeta;
exports["default"] = _default;
//# sourceMappingURL=RestSettingsEntryMeta.js.map
