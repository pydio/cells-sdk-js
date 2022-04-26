"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RegistryItem = _interopRequireDefault(require("./RegistryItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RegistryListResponse model module.
 * @module model/RegistryListResponse
 * @version 4.0
 */
var RegistryListResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RegistryListResponse</code>.
   * @alias module:model/RegistryListResponse
   */
  function RegistryListResponse() {
    _classCallCheck(this, RegistryListResponse);

    RegistryListResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RegistryListResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RegistryListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegistryListResponse} obj Optional instance to populate.
     * @return {module:model/RegistryListResponse} The populated <code>RegistryListResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RegistryListResponse();

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [_RegistryItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RegistryListResponse;
}();
/**
 * @member {Array.<module:model/RegistryItem>} items
 */


RegistryListResponse.prototype['items'] = undefined;
var _default = RegistryListResponse;
exports["default"] = _default;
//# sourceMappingURL=RegistryListResponse.js.map
