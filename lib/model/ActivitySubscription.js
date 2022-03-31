"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActivityOwnerType = _interopRequireDefault(require("./ActivityOwnerType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ActivitySubscription model module.
 * @module model/ActivitySubscription
 * @version 4.0
 */
var ActivitySubscription = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActivitySubscription</code>.
   * @alias module:model/ActivitySubscription
   */
  function ActivitySubscription() {
    _classCallCheck(this, ActivitySubscription);

    ActivitySubscription.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActivitySubscription, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActivitySubscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActivitySubscription} obj Optional instance to populate.
     * @return {module:model/ActivitySubscription} The populated <code>ActivitySubscription</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActivitySubscription();

        if (data.hasOwnProperty('Events')) {
          obj['Events'] = _ApiClient["default"].convertToType(data['Events'], ['String']);
        }

        if (data.hasOwnProperty('ObjectId')) {
          obj['ObjectId'] = _ApiClient["default"].convertToType(data['ObjectId'], 'String');
        }

        if (data.hasOwnProperty('ObjectType')) {
          obj['ObjectType'] = _ActivityOwnerType["default"].constructFromObject(data['ObjectType']);
        }

        if (data.hasOwnProperty('UserId')) {
          obj['UserId'] = _ApiClient["default"].convertToType(data['UserId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ActivitySubscription;
}();
/**
 * @member {Array.<String>} Events
 */


ActivitySubscription.prototype['Events'] = undefined;
/**
 * @member {String} ObjectId
 */

ActivitySubscription.prototype['ObjectId'] = undefined;
/**
 * @member {module:model/ActivityOwnerType} ObjectType
 */

ActivitySubscription.prototype['ObjectType'] = undefined;
/**
 * @member {String} UserId
 */

ActivitySubscription.prototype['UserId'] = undefined;
var _default = ActivitySubscription;
exports["default"] = _default;
//# sourceMappingURL=ActivitySubscription.js.map
