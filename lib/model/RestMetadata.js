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

/**
 * The RestMetadata model module.
 * @module model/RestMetadata
 * @version 4.0
 */
var RestMetadata = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestMetadata</code>.
   * @alias module:model/RestMetadata
   */
  function RestMetadata() {
    _classCallCheck(this, RestMetadata);

    RestMetadata.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestMetadata, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestMetadata} obj Optional instance to populate.
     * @return {module:model/RestMetadata} The populated <code>RestMetadata</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestMetadata();

        if (data.hasOwnProperty('JsonMeta')) {
          obj['JsonMeta'] = _ApiClient["default"].convertToType(data['JsonMeta'], 'String');
        }

        if (data.hasOwnProperty('Namespace')) {
          obj['Namespace'] = _ApiClient["default"].convertToType(data['Namespace'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RestMetadata;
}();
/**
 * @member {String} JsonMeta
 */


RestMetadata.prototype['JsonMeta'] = undefined;
/**
 * @member {String} Namespace
 */

RestMetadata.prototype['Namespace'] = undefined;
var _default = RestMetadata;
exports["default"] = _default;
//# sourceMappingURL=RestMetadata.js.map
