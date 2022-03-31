"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmUser = _interopRequireDefault(require("./IdmUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestUsersCollection model module.
 * @module model/RestUsersCollection
 * @version 4.0
 */
var RestUsersCollection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestUsersCollection</code>.
   * @alias module:model/RestUsersCollection
   */
  function RestUsersCollection() {
    _classCallCheck(this, RestUsersCollection);

    RestUsersCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestUsersCollection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestUsersCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestUsersCollection} obj Optional instance to populate.
     * @return {module:model/RestUsersCollection} The populated <code>RestUsersCollection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestUsersCollection();

        if (data.hasOwnProperty('Groups')) {
          obj['Groups'] = _ApiClient["default"].convertToType(data['Groups'], [_IdmUser["default"]]);
        }

        if (data.hasOwnProperty('Total')) {
          obj['Total'] = _ApiClient["default"].convertToType(data['Total'], 'Number');
        }

        if (data.hasOwnProperty('Users')) {
          obj['Users'] = _ApiClient["default"].convertToType(data['Users'], [_IdmUser["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RestUsersCollection;
}();
/**
 * @member {Array.<module:model/IdmUser>} Groups
 */


RestUsersCollection.prototype['Groups'] = undefined;
/**
 * @member {Number} Total
 */

RestUsersCollection.prototype['Total'] = undefined;
/**
 * @member {Array.<module:model/IdmUser>} Users
 */

RestUsersCollection.prototype['Users'] = undefined;
var _default = RestUsersCollection;
exports["default"] = _default;
//# sourceMappingURL=RestUsersCollection.js.map
