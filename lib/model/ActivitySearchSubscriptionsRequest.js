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
 * The ActivitySearchSubscriptionsRequest model module.
 * @module model/ActivitySearchSubscriptionsRequest
 * @version 4.0
 */
var ActivitySearchSubscriptionsRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActivitySearchSubscriptionsRequest</code>.
   * @alias module:model/ActivitySearchSubscriptionsRequest
   */
  function ActivitySearchSubscriptionsRequest() {
    _classCallCheck(this, ActivitySearchSubscriptionsRequest);

    ActivitySearchSubscriptionsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActivitySearchSubscriptionsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActivitySearchSubscriptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActivitySearchSubscriptionsRequest} obj Optional instance to populate.
     * @return {module:model/ActivitySearchSubscriptionsRequest} The populated <code>ActivitySearchSubscriptionsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActivitySearchSubscriptionsRequest();

        if (data.hasOwnProperty('ObjectIds')) {
          obj['ObjectIds'] = _ApiClient["default"].convertToType(data['ObjectIds'], ['String']);
        }

        if (data.hasOwnProperty('ObjectTypes')) {
          obj['ObjectTypes'] = _ApiClient["default"].convertToType(data['ObjectTypes'], [_ActivityOwnerType["default"]]);
        }

        if (data.hasOwnProperty('UserIds')) {
          obj['UserIds'] = _ApiClient["default"].convertToType(data['UserIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ActivitySearchSubscriptionsRequest;
}();
/**
 * @member {Array.<String>} ObjectIds
 */


ActivitySearchSubscriptionsRequest.prototype['ObjectIds'] = undefined;
/**
 * @member {Array.<module:model/ActivityOwnerType>} ObjectTypes
 */

ActivitySearchSubscriptionsRequest.prototype['ObjectTypes'] = undefined;
/**
 * @member {Array.<String>} UserIds
 */

ActivitySearchSubscriptionsRequest.prototype['UserIds'] = undefined;
var _default = ActivitySearchSubscriptionsRequest;
exports["default"] = _default;
//# sourceMappingURL=ActivitySearchSubscriptionsRequest.js.map
