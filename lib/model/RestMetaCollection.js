"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestMetadata = _interopRequireDefault(require("./RestMetadata"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestMetaCollection model module.
 * @module model/RestMetaCollection
 * @version 4.0
 */
var RestMetaCollection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestMetaCollection</code>.
   * @alias module:model/RestMetaCollection
   */
  function RestMetaCollection() {
    _classCallCheck(this, RestMetaCollection);

    RestMetaCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestMetaCollection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestMetaCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestMetaCollection} obj Optional instance to populate.
     * @return {module:model/RestMetaCollection} The populated <code>RestMetaCollection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestMetaCollection();

        if (data.hasOwnProperty('Metadatas')) {
          obj['Metadatas'] = _ApiClient["default"].convertToType(data['Metadatas'], [_RestMetadata["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RestMetaCollection;
}();
/**
 * @member {Array.<module:model/RestMetadata>} Metadatas
 */


RestMetaCollection.prototype['Metadatas'] = undefined;
var _default = RestMetaCollection;
exports["default"] = _default;
//# sourceMappingURL=RestMetaCollection.js.map
