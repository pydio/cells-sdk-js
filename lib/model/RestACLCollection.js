"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmACL = _interopRequireDefault(require("./IdmACL"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestACLCollection model module.
 * @module model/RestACLCollection
 * @version 4.0
 */
var RestACLCollection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestACLCollection</code>.
   * @alias module:model/RestACLCollection
   */
  function RestACLCollection() {
    _classCallCheck(this, RestACLCollection);

    RestACLCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestACLCollection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestACLCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestACLCollection} obj Optional instance to populate.
     * @return {module:model/RestACLCollection} The populated <code>RestACLCollection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestACLCollection();

        if (data.hasOwnProperty('ACLs')) {
          obj['ACLs'] = _ApiClient["default"].convertToType(data['ACLs'], [_IdmACL["default"]]);
        }

        if (data.hasOwnProperty('Total')) {
          obj['Total'] = _ApiClient["default"].convertToType(data['Total'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return RestACLCollection;
}();
/**
 * @member {Array.<module:model/IdmACL>} ACLs
 */


RestACLCollection.prototype['ACLs'] = undefined;
/**
 * @member {Number} Total
 */

RestACLCollection.prototype['Total'] = undefined;
var _default = RestACLCollection;
exports["default"] = _default;
//# sourceMappingURL=RestACLCollection.js.map
