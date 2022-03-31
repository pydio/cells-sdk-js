"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ResourcePolicyQueryQueryType = _interopRequireDefault(require("./ResourcePolicyQueryQueryType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestResourcePolicyQuery model module.
 * @module model/RestResourcePolicyQuery
 * @version 4.0
 */
var RestResourcePolicyQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestResourcePolicyQuery</code>.
   * @alias module:model/RestResourcePolicyQuery
   */
  function RestResourcePolicyQuery() {
    _classCallCheck(this, RestResourcePolicyQuery);

    RestResourcePolicyQuery.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestResourcePolicyQuery, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestResourcePolicyQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestResourcePolicyQuery} obj Optional instance to populate.
     * @return {module:model/RestResourcePolicyQuery} The populated <code>RestResourcePolicyQuery</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestResourcePolicyQuery();

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _ResourcePolicyQueryQueryType["default"].constructFromObject(data['Type']);
        }

        if (data.hasOwnProperty('UserId')) {
          obj['UserId'] = _ApiClient["default"].convertToType(data['UserId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RestResourcePolicyQuery;
}();
/**
 * @member {module:model/ResourcePolicyQueryQueryType} Type
 */


RestResourcePolicyQuery.prototype['Type'] = undefined;
/**
 * @member {String} UserId
 */

RestResourcePolicyQuery.prototype['UserId'] = undefined;
var _default = RestResourcePolicyQuery;
exports["default"] = _default;
//# sourceMappingURL=RestResourcePolicyQuery.js.map
