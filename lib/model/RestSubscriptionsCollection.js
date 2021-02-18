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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestSubscriptionsCollection model module.
* @module model/RestSubscriptionsCollection
* @version 1.0
*/
var RestSubscriptionsCollection = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestSubscriptionsCollection</code>.
  * @alias module:model/RestSubscriptionsCollection
  * @class
  */
  function RestSubscriptionsCollection() {
    _classCallCheck(this, RestSubscriptionsCollection);

    _defineProperty(this, "subscriptions", undefined);
  }
  /**
  * Constructs a <code>RestSubscriptionsCollection</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestSubscriptionsCollection} obj Optional instance to populate.
  * @return {module:model/RestSubscriptionsCollection} The populated <code>RestSubscriptionsCollection</code> instance.
  */


  _createClass(RestSubscriptionsCollection, null, [{
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
    /**
    * @member {Array.<module:model/ActivitySubscription>} subscriptions
    */

  }]);

  return RestSubscriptionsCollection;
}();

exports["default"] = RestSubscriptionsCollection;
//# sourceMappingURL=RestSubscriptionsCollection.js.map
