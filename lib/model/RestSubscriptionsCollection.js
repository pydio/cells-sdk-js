"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActivitySubscription = _interopRequireDefault(require("./ActivitySubscription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestSubscriptionsCollection model module.
 * @module model/RestSubscriptionsCollection
 * @version 4.0
 */
var RestSubscriptionsCollection = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestSubscriptionsCollection</code>.
   * @alias module:model/RestSubscriptionsCollection
   */
  function RestSubscriptionsCollection() {
    _classCallCheck(this, RestSubscriptionsCollection);

    RestSubscriptionsCollection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestSubscriptionsCollection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestSubscriptionsCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestSubscriptionsCollection} obj Optional instance to populate.
     * @return {module:model/RestSubscriptionsCollection} The populated <code>RestSubscriptionsCollection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestSubscriptionsCollection();

        if (data.hasOwnProperty('subscriptions')) {
          obj['subscriptions'] = _ApiClient["default"].convertToType(data['subscriptions'], [_ActivitySubscription["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RestSubscriptionsCollection;
}();
/**
 * @member {Array.<module:model/ActivitySubscription>} subscriptions
 */


RestSubscriptionsCollection.prototype['subscriptions'] = undefined;
var _default = RestSubscriptionsCollection;
exports["default"] = _default;
//# sourceMappingURL=RestSubscriptionsCollection.js.map
