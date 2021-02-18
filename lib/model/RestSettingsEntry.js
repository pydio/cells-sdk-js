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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestSettingsEntry model module.
* @module model/RestSettingsEntry
* @version 1.0
*/
var RestSettingsEntry = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestSettingsEntry</code>.
  * @alias module:model/RestSettingsEntry
  * @class
  */
  function RestSettingsEntry() {
    _classCallCheck(this, RestSettingsEntry);

    _defineProperty(this, "Key", undefined);

    _defineProperty(this, "Label", undefined);

    _defineProperty(this, "Description", undefined);

    _defineProperty(this, "Manager", undefined);

    _defineProperty(this, "Alias", undefined);

    _defineProperty(this, "Metadata", undefined);

    _defineProperty(this, "Accesses", undefined);

    _defineProperty(this, "Feature", undefined);
  }
  /**
  * Constructs a <code>RestSettingsEntry</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestSettingsEntry} obj Optional instance to populate.
  * @return {module:model/RestSettingsEntry} The populated <code>RestSettingsEntry</code> instance.
  */


  _createClass(RestSettingsEntry, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestSettingsEntry();

        if (data.hasOwnProperty('Key')) {
          obj['Key'] = _ApiClient["default"].convertToType(data['Key'], 'String');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Manager')) {
          obj['Manager'] = _ApiClient["default"].convertToType(data['Manager'], 'String');
        }

        if (data.hasOwnProperty('Alias')) {
          obj['Alias'] = _ApiClient["default"].convertToType(data['Alias'], 'String');
        }

        if (data.hasOwnProperty('Metadata')) {
          obj['Metadata'] = _RestSettingsEntryMeta["default"].constructFromObject(data['Metadata']);
        }

        if (data.hasOwnProperty('Accesses')) {
          obj['Accesses'] = _ApiClient["default"].convertToType(data['Accesses'], {
            'String': _RestSettingsAccess["default"]
          });
        }

        if (data.hasOwnProperty('Feature')) {
          obj['Feature'] = _ApiClient["default"].convertToType(data['Feature'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {String} Key
    */

  }]);

  return RestSettingsEntry;
}();

exports["default"] = RestSettingsEntry;
//# sourceMappingURL=RestSettingsEntry.js.map
