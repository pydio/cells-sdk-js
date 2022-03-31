"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestSettingsEntry = _interopRequireDefault(require("./RestSettingsEntry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestSettingsSection model module.
 * @module model/RestSettingsSection
 * @version 4.0
 */
var RestSettingsSection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestSettingsSection</code>.
   * @alias module:model/RestSettingsSection
   */
  function RestSettingsSection() {
    _classCallCheck(this, RestSettingsSection);

    RestSettingsSection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestSettingsSection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestSettingsSection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestSettingsSection} obj Optional instance to populate.
     * @return {module:model/RestSettingsSection} The populated <code>RestSettingsSection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestSettingsSection();

        if (data.hasOwnProperty('CHILDREN')) {
          obj['CHILDREN'] = _ApiClient["default"].convertToType(data['CHILDREN'], [_RestSettingsEntry["default"]]);
        }

        if (data.hasOwnProperty('DESCRIPTION')) {
          obj['DESCRIPTION'] = _ApiClient["default"].convertToType(data['DESCRIPTION'], 'String');
        }

        if (data.hasOwnProperty('Key')) {
          obj['Key'] = _ApiClient["default"].convertToType(data['Key'], 'String');
        }

        if (data.hasOwnProperty('LABEL')) {
          obj['LABEL'] = _ApiClient["default"].convertToType(data['LABEL'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RestSettingsSection;
}();
/**
 * @member {Array.<module:model/RestSettingsEntry>} CHILDREN
 */


RestSettingsSection.prototype['CHILDREN'] = undefined;
/**
 * @member {String} DESCRIPTION
 */

RestSettingsSection.prototype['DESCRIPTION'] = undefined;
/**
 * @member {String} Key
 */

RestSettingsSection.prototype['Key'] = undefined;
/**
 * @member {String} LABEL
 */

RestSettingsSection.prototype['LABEL'] = undefined;
var _default = RestSettingsSection;
exports["default"] = _default;
//# sourceMappingURL=RestSettingsSection.js.map
