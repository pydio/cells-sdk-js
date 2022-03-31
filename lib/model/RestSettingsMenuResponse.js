"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestSettingsEntryMeta = _interopRequireDefault(require("./RestSettingsEntryMeta"));

var _RestSettingsSection = _interopRequireDefault(require("./RestSettingsSection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestSettingsMenuResponse model module.
 * @module model/RestSettingsMenuResponse
 * @version 4.0
 */
var RestSettingsMenuResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestSettingsMenuResponse</code>.
   * @alias module:model/RestSettingsMenuResponse
   */
  function RestSettingsMenuResponse() {
    _classCallCheck(this, RestSettingsMenuResponse);

    RestSettingsMenuResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestSettingsMenuResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestSettingsMenuResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestSettingsMenuResponse} obj Optional instance to populate.
     * @return {module:model/RestSettingsMenuResponse} The populated <code>RestSettingsMenuResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestSettingsMenuResponse();

        if (data.hasOwnProperty('Sections')) {
          obj['Sections'] = _ApiClient["default"].convertToType(data['Sections'], [_RestSettingsSection["default"]]);
        }

        if (data.hasOwnProperty('__metadata__')) {
          obj['__metadata__'] = _RestSettingsEntryMeta["default"].constructFromObject(data['__metadata__']);
        }
      }

      return obj;
    }
  }]);

  return RestSettingsMenuResponse;
}();
/**
 * @member {Array.<module:model/RestSettingsSection>} Sections
 */


RestSettingsMenuResponse.prototype['Sections'] = undefined;
/**
 * @member {module:model/RestSettingsEntryMeta} __metadata__
 */

RestSettingsMenuResponse.prototype['__metadata__'] = undefined;
var _default = RestSettingsMenuResponse;
exports["default"] = _default;
//# sourceMappingURL=RestSettingsMenuResponse.js.map
