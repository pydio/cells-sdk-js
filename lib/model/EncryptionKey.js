"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EncryptionKeyInfo = _interopRequireDefault(require("./EncryptionKeyInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EncryptionKey model module.
 * @module model/EncryptionKey
 * @version 4.0
 */
var EncryptionKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EncryptionKey</code>.
   * @alias module:model/EncryptionKey
   */
  function EncryptionKey() {
    _classCallCheck(this, EncryptionKey);

    EncryptionKey.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EncryptionKey, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EncryptionKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EncryptionKey} obj Optional instance to populate.
     * @return {module:model/EncryptionKey} The populated <code>EncryptionKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EncryptionKey();

        if (data.hasOwnProperty('Content')) {
          obj['Content'] = _ApiClient["default"].convertToType(data['Content'], 'String');
        }

        if (data.hasOwnProperty('CreationDate')) {
          obj['CreationDate'] = _ApiClient["default"].convertToType(data['CreationDate'], 'Number');
        }

        if (data.hasOwnProperty('ID')) {
          obj['ID'] = _ApiClient["default"].convertToType(data['ID'], 'String');
        }

        if (data.hasOwnProperty('Info')) {
          obj['Info'] = _EncryptionKeyInfo["default"].constructFromObject(data['Info']);
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Owner')) {
          obj['Owner'] = _ApiClient["default"].convertToType(data['Owner'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EncryptionKey;
}();
/**
 * @member {String} Content
 */


EncryptionKey.prototype['Content'] = undefined;
/**
 * @member {Number} CreationDate
 */

EncryptionKey.prototype['CreationDate'] = undefined;
/**
 * @member {String} ID
 */

EncryptionKey.prototype['ID'] = undefined;
/**
 * @member {module:model/EncryptionKeyInfo} Info
 */

EncryptionKey.prototype['Info'] = undefined;
/**
 * @member {String} Label
 */

EncryptionKey.prototype['Label'] = undefined;
/**
 * @member {String} Owner
 */

EncryptionKey.prototype['Owner'] = undefined;
var _default = EncryptionKey;
exports["default"] = _default;
//# sourceMappingURL=EncryptionKey.js.map
