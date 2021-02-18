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
* The EncryptionImport model module.
* @module model/EncryptionImport
* @version 1.0
*/
var EncryptionImport = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>EncryptionImport</code>.
  * @alias module:model/EncryptionImport
  * @class
  */
  function EncryptionImport() {
    _classCallCheck(this, EncryptionImport);

    _defineProperty(this, "By", undefined);

    _defineProperty(this, "Date", undefined);
  }
  /**
  * Constructs a <code>EncryptionImport</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/EncryptionImport} obj Optional instance to populate.
  * @return {module:model/EncryptionImport} The populated <code>EncryptionImport</code> instance.
  */


  _createClass(EncryptionImport, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EncryptionImport();

        if (data.hasOwnProperty('By')) {
          obj['By'] = _ApiClient["default"].convertToType(data['By'], 'String');
        }

        if (data.hasOwnProperty('Date')) {
          obj['Date'] = _ApiClient["default"].convertToType(data['Date'], 'Number');
        }
      }

      return obj;
    }
    /**
    * @member {String} By
    */

  }]);

  return EncryptionImport;
}();

exports["default"] = EncryptionImport;
//# sourceMappingURL=EncryptionImport.js.map
