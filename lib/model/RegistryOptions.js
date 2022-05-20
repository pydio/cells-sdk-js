"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RegistryActionType = _interopRequireDefault(require("./RegistryActionType"));

var _RegistryItemType = _interopRequireDefault(require("./RegistryItemType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RegistryOptions model module.
 * @module model/RegistryOptions
 * @version 4.0
 */
var RegistryOptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RegistryOptions</code>.
   * @alias module:model/RegistryOptions
   */
  function RegistryOptions() {
    _classCallCheck(this, RegistryOptions);

    RegistryOptions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RegistryOptions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RegistryOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegistryOptions} obj Optional instance to populate.
     * @return {module:model/RegistryOptions} The populated <code>RegistryOptions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RegistryOptions();

        if (data.hasOwnProperty('action')) {
          obj['action'] = _RegistryActionType["default"].constructFromObject(data['action']);
        }

        if (data.hasOwnProperty('metaName')) {
          obj['metaName'] = _ApiClient["default"].convertToType(data['metaName'], 'String');
        }

        if (data.hasOwnProperty('metaValue')) {
          obj['metaValue'] = _ApiClient["default"].convertToType(data['metaValue'], 'String');
        }

        if (data.hasOwnProperty('names')) {
          obj['names'] = _ApiClient["default"].convertToType(data['names'], ['String']);
        }

        if (data.hasOwnProperty('ttl')) {
          obj['ttl'] = _ApiClient["default"].convertToType(data['ttl'], 'String');
        }

        if (data.hasOwnProperty('types')) {
          obj['types'] = _ApiClient["default"].convertToType(data['types'], [_RegistryItemType["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RegistryOptions;
}();
/**
 * @member {module:model/RegistryActionType} action
 */


RegistryOptions.prototype['action'] = undefined;
/**
 * @member {String} metaName
 */

RegistryOptions.prototype['metaName'] = undefined;
/**
 * @member {String} metaValue
 */

RegistryOptions.prototype['metaValue'] = undefined;
/**
 * @member {Array.<String>} names
 */

RegistryOptions.prototype['names'] = undefined;
/**
 * @member {String} ttl
 */

RegistryOptions.prototype['ttl'] = undefined;
/**
 * @member {Array.<module:model/RegistryItemType>} types
 */

RegistryOptions.prototype['types'] = undefined;
var _default = RegistryOptions;
exports["default"] = _default;
//# sourceMappingURL=RegistryOptions.js.map
