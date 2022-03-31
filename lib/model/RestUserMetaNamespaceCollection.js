"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmUserMetaNamespace = _interopRequireDefault(require("./IdmUserMetaNamespace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestUserMetaNamespaceCollection model module.
 * @module model/RestUserMetaNamespaceCollection
 * @version 4.0
 */
var RestUserMetaNamespaceCollection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestUserMetaNamespaceCollection</code>.
   * @alias module:model/RestUserMetaNamespaceCollection
   */
  function RestUserMetaNamespaceCollection() {
    _classCallCheck(this, RestUserMetaNamespaceCollection);

    RestUserMetaNamespaceCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestUserMetaNamespaceCollection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestUserMetaNamespaceCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestUserMetaNamespaceCollection} obj Optional instance to populate.
     * @return {module:model/RestUserMetaNamespaceCollection} The populated <code>RestUserMetaNamespaceCollection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestUserMetaNamespaceCollection();

        if (data.hasOwnProperty('Namespaces')) {
          obj['Namespaces'] = _ApiClient["default"].convertToType(data['Namespaces'], [_IdmUserMetaNamespace["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RestUserMetaNamespaceCollection;
}();
/**
 * @member {Array.<module:model/IdmUserMetaNamespace>} Namespaces
 */


RestUserMetaNamespaceCollection.prototype['Namespaces'] = undefined;
var _default = RestUserMetaNamespaceCollection;
exports["default"] = _default;
//# sourceMappingURL=RestUserMetaNamespaceCollection.js.map
