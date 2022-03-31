"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EncryptionExport = _interopRequireDefault(require("./EncryptionExport"));

var _EncryptionImport = _interopRequireDefault(require("./EncryptionImport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EncryptionKeyInfo model module.
 * @module model/EncryptionKeyInfo
 * @version 4.0
 */
var EncryptionKeyInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EncryptionKeyInfo</code>.
   * @alias module:model/EncryptionKeyInfo
   */
  function EncryptionKeyInfo() {
    _classCallCheck(this, EncryptionKeyInfo);

    EncryptionKeyInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EncryptionKeyInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EncryptionKeyInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EncryptionKeyInfo} obj Optional instance to populate.
     * @return {module:model/EncryptionKeyInfo} The populated <code>EncryptionKeyInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EncryptionKeyInfo();

        if (data.hasOwnProperty('Exports')) {
          obj['Exports'] = _ApiClient["default"].convertToType(data['Exports'], [_EncryptionExport["default"]]);
        }

        if (data.hasOwnProperty('Imports')) {
          obj['Imports'] = _ApiClient["default"].convertToType(data['Imports'], [_EncryptionImport["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EncryptionKeyInfo;
}();
/**
 * @member {Array.<module:model/EncryptionExport>} Exports
 */


EncryptionKeyInfo.prototype['Exports'] = undefined;
/**
 * @member {Array.<module:model/EncryptionImport>} Imports
 */

EncryptionKeyInfo.prototype['Imports'] = undefined;
var _default = EncryptionKeyInfo;
exports["default"] = _default;
//# sourceMappingURL=EncryptionKeyInfo.js.map
