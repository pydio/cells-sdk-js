"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmRole = _interopRequireDefault(require("./IdmRole"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestRolesCollection model module.
 * @module model/RestRolesCollection
 * @version 4.0
 */
var RestRolesCollection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestRolesCollection</code>.
   * @alias module:model/RestRolesCollection
   */
  function RestRolesCollection() {
    _classCallCheck(this, RestRolesCollection);

    RestRolesCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestRolesCollection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestRolesCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestRolesCollection} obj Optional instance to populate.
     * @return {module:model/RestRolesCollection} The populated <code>RestRolesCollection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestRolesCollection();

        if (data.hasOwnProperty('Roles')) {
          obj['Roles'] = _ApiClient["default"].convertToType(data['Roles'], [_IdmRole["default"]]);
        }

        if (data.hasOwnProperty('Total')) {
          obj['Total'] = _ApiClient["default"].convertToType(data['Total'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return RestRolesCollection;
}();
/**
 * @member {Array.<module:model/IdmRole>} Roles
 */


RestRolesCollection.prototype['Roles'] = undefined;
/**
 * @member {Number} Total
 */

RestRolesCollection.prototype['Total'] = undefined;
var _default = RestRolesCollection;
exports["default"] = _default;
//# sourceMappingURL=RestRolesCollection.js.map
