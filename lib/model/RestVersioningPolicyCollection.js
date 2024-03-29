"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TreeVersioningPolicy = _interopRequireDefault(require("./TreeVersioningPolicy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestVersioningPolicyCollection model module.
 * @module model/RestVersioningPolicyCollection
 * @version 4.0
 */
var RestVersioningPolicyCollection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestVersioningPolicyCollection</code>.
   * @alias module:model/RestVersioningPolicyCollection
   */
  function RestVersioningPolicyCollection() {
    _classCallCheck(this, RestVersioningPolicyCollection);

    RestVersioningPolicyCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestVersioningPolicyCollection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestVersioningPolicyCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestVersioningPolicyCollection} obj Optional instance to populate.
     * @return {module:model/RestVersioningPolicyCollection} The populated <code>RestVersioningPolicyCollection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestVersioningPolicyCollection();

        if (data.hasOwnProperty('Policies')) {
          obj['Policies'] = _ApiClient["default"].convertToType(data['Policies'], [_TreeVersioningPolicy["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RestVersioningPolicyCollection;
}();
/**
 * @member {Array.<module:model/TreeVersioningPolicy>} Policies
 */


RestVersioningPolicyCollection.prototype['Policies'] = undefined;
var _default = RestVersioningPolicyCollection;
exports["default"] = _default;
//# sourceMappingURL=RestVersioningPolicyCollection.js.map
