"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestSettingsAccessRestPolicy = _interopRequireDefault(require("./RestSettingsAccessRestPolicy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestSettingsAccess model module.
* @module model/RestSettingsAccess
* @version 1.0
*/
var RestSettingsAccess = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestSettingsAccess</code>.
  * @alias module:model/RestSettingsAccess
  * @class
  */
  function RestSettingsAccess() {
    _classCallCheck(this, RestSettingsAccess);

    _defineProperty(this, "Label", undefined);

    _defineProperty(this, "Description", undefined);

    _defineProperty(this, "Policies", undefined);
  }
  /**
  * Constructs a <code>RestSettingsAccess</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestSettingsAccess} obj Optional instance to populate.
  * @return {module:model/RestSettingsAccess} The populated <code>RestSettingsAccess</code> instance.
  */


  _createClass(RestSettingsAccess, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestSettingsAccess();

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Policies')) {
          obj['Policies'] = _ApiClient["default"].convertToType(data['Policies'], [_RestSettingsAccessRestPolicy["default"]]);
        }
      }

      return obj;
    }
    /**
    * @member {String} Label
    */

  }]);

  return RestSettingsAccess;
}();

exports["default"] = RestSettingsAccess;
//# sourceMappingURL=RestSettingsAccess.js.map
