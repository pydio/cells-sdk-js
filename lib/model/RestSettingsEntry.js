"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestSettingsAccess = _interopRequireDefault(require("./RestSettingsAccess"));

var _RestSettingsEntryMeta = _interopRequireDefault(require("./RestSettingsEntryMeta"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestSettingsEntry model module.
 * @module model/RestSettingsEntry
 * @version 4.0
 */
var RestSettingsEntry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestSettingsEntry</code>.
   * @alias module:model/RestSettingsEntry
   */
  function RestSettingsEntry() {
    _classCallCheck(this, RestSettingsEntry);

    RestSettingsEntry.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestSettingsEntry, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestSettingsEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestSettingsEntry} obj Optional instance to populate.
     * @return {module:model/RestSettingsEntry} The populated <code>RestSettingsEntry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestSettingsEntry();

        if (data.hasOwnProperty('ALIAS')) {
          obj['ALIAS'] = _ApiClient["default"].convertToType(data['ALIAS'], 'String');
        }

        if (data.hasOwnProperty('Accesses')) {
          obj['Accesses'] = _ApiClient["default"].convertToType(data['Accesses'], {
            'String': _RestSettingsAccess["default"]
          });
        }

        if (data.hasOwnProperty('DESCRIPTION')) {
          obj['DESCRIPTION'] = _ApiClient["default"].convertToType(data['DESCRIPTION'], 'String');
        }

        if (data.hasOwnProperty('Feature')) {
          obj['Feature'] = _ApiClient["default"].convertToType(data['Feature'], 'String');
        }

        if (data.hasOwnProperty('Key')) {
          obj['Key'] = _ApiClient["default"].convertToType(data['Key'], 'String');
        }

        if (data.hasOwnProperty('LABEL')) {
          obj['LABEL'] = _ApiClient["default"].convertToType(data['LABEL'], 'String');
        }

        if (data.hasOwnProperty('MANAGER')) {
          obj['MANAGER'] = _ApiClient["default"].convertToType(data['MANAGER'], 'String');
        }

        if (data.hasOwnProperty('METADATA')) {
          obj['METADATA'] = _RestSettingsEntryMeta["default"].constructFromObject(data['METADATA']);
        }
      }

      return obj;
    }
  }]);

  return RestSettingsEntry;
}();
/**
 * @member {String} ALIAS
 */


RestSettingsEntry.prototype['ALIAS'] = undefined;
/**
 * @member {Object.<String, module:model/RestSettingsAccess>} Accesses
 */

RestSettingsEntry.prototype['Accesses'] = undefined;
/**
 * @member {String} DESCRIPTION
 */

RestSettingsEntry.prototype['DESCRIPTION'] = undefined;
/**
 * @member {String} Feature
 */

RestSettingsEntry.prototype['Feature'] = undefined;
/**
 * @member {String} Key
 */

RestSettingsEntry.prototype['Key'] = undefined;
/**
 * @member {String} LABEL
 */

RestSettingsEntry.prototype['LABEL'] = undefined;
/**
 * @member {String} MANAGER
 */

RestSettingsEntry.prototype['MANAGER'] = undefined;
/**
 * @member {module:model/RestSettingsEntryMeta} METADATA
 */

RestSettingsEntry.prototype['METADATA'] = undefined;
var _default = RestSettingsEntry;
exports["default"] = _default;
//# sourceMappingURL=RestSettingsEntry.js.map
