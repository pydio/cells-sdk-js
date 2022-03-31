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
 * The RestMetaNamespaceRequest1 model module.
 * @module model/RestMetaNamespaceRequest1
 * @version 4.0
 */
var RestMetaNamespaceRequest1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestMetaNamespaceRequest1</code>.
   * @alias module:model/RestMetaNamespaceRequest1
   */
  function RestMetaNamespaceRequest1() {
    _classCallCheck(this, RestMetaNamespaceRequest1);

    RestMetaNamespaceRequest1.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestMetaNamespaceRequest1, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestMetaNamespaceRequest1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestMetaNamespaceRequest1} obj Optional instance to populate.
     * @return {module:model/RestMetaNamespaceRequest1} The populated <code>RestMetaNamespaceRequest1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestMetaNamespaceRequest1();

        if (data.hasOwnProperty('Namespace')) {
          obj['Namespace'] = _ApiClient["default"].convertToType(data['Namespace'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return RestMetaNamespaceRequest1;
}();
/**
 * @member {Array.<String>} Namespace
 */


RestMetaNamespaceRequest1.prototype['Namespace'] = undefined;
var _default = RestMetaNamespaceRequest1;
exports["default"] = _default;
//# sourceMappingURL=RestMetaNamespaceRequest1.js.map
