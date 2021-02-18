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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestSettingsEntryMeta model module.
* @module model/RestSettingsEntryMeta
* @version 1.0
*/
var RestSettingsEntryMeta = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestSettingsEntryMeta</code>.
  * @alias module:model/RestSettingsEntryMeta
  * @class
  */
  function RestSettingsEntryMeta() {
    _classCallCheck(this, RestSettingsEntryMeta);

    _defineProperty(this, "IconClass", undefined);

    _defineProperty(this, "Component", undefined);

    _defineProperty(this, "Props", undefined);

    _defineProperty(this, "Advanced", undefined);

    _defineProperty(this, "Indexed", undefined);
  }
  /**
  * Constructs a <code>RestSettingsEntryMeta</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestSettingsEntryMeta} obj Optional instance to populate.
  * @return {module:model/RestSettingsEntryMeta} The populated <code>RestSettingsEntryMeta</code> instance.
  */


  _createClass(RestSettingsEntryMeta, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestSettingsEntryMeta();

        if (data.hasOwnProperty('IconClass')) {
          obj['IconClass'] = _ApiClient["default"].convertToType(data['IconClass'], 'String');
        }

        if (data.hasOwnProperty('Component')) {
          obj['Component'] = _ApiClient["default"].convertToType(data['Component'], 'String');
        }

        if (data.hasOwnProperty('Props')) {
          obj['Props'] = _ApiClient["default"].convertToType(data['Props'], 'String');
        }

        if (data.hasOwnProperty('Advanced')) {
          obj['Advanced'] = _ApiClient["default"].convertToType(data['Advanced'], 'Boolean');
        }

        if (data.hasOwnProperty('Indexed')) {
          obj['Indexed'] = _ApiClient["default"].convertToType(data['Indexed'], ['String']);
        }
      }

      return obj;
    }
    /**
    * @member {String} IconClass
    */

  }]);

  return RestSettingsEntryMeta;
}();

exports["default"] = RestSettingsEntryMeta;
//# sourceMappingURL=RestSettingsEntryMeta.js.map
