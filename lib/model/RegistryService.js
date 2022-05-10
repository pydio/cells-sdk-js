"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RegistryOptions = _interopRequireDefault(require("./RegistryOptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RegistryService model module.
 * @module model/RegistryService
 * @version 4.0
 */
var RegistryService = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RegistryService</code>.
   * @alias module:model/RegistryService
   */
  function RegistryService() {
    _classCallCheck(this, RegistryService);

    RegistryService.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RegistryService, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RegistryService</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegistryService} obj Optional instance to populate.
     * @return {module:model/RegistryService} The populated <code>RegistryService</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RegistryService();

        if (data.hasOwnProperty('options')) {
          obj['options'] = _RegistryOptions["default"].constructFromObject(data['options']);
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient["default"].convertToType(data['tags'], ['String']);
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RegistryService;
}();
/**
 * @member {module:model/RegistryOptions} options
 */


RegistryService.prototype['options'] = undefined;
/**
 * @member {Array.<String>} tags
 */

RegistryService.prototype['tags'] = undefined;
/**
 * @member {String} version
 */

RegistryService.prototype['version'] = undefined;
var _default = RegistryService;
exports["default"] = _default;
//# sourceMappingURL=RegistryService.js.map
