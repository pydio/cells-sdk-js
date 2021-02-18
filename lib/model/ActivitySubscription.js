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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The ActivitySubscription model module.
* @module model/ActivitySubscription
* @version 1.0
*/
var ActivitySubscription = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>ActivitySubscription</code>.
  * @alias module:model/ActivitySubscription
  * @class
  */
  function ActivitySubscription() {
    _classCallCheck(this, ActivitySubscription);

    _defineProperty(this, "UserId", undefined);

    _defineProperty(this, "ObjectType", undefined);

    _defineProperty(this, "ObjectId", undefined);

    _defineProperty(this, "Events", undefined);
  }
  /**
  * Constructs a <code>ActivitySubscription</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/ActivitySubscription} obj Optional instance to populate.
  * @return {module:model/ActivitySubscription} The populated <code>ActivitySubscription</code> instance.
  */


  _createClass(ActivitySubscription, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActivitySubscription();

        if (data.hasOwnProperty('UserId')) {
          obj['UserId'] = _ApiClient["default"].convertToType(data['UserId'], 'String');
        }

        if (data.hasOwnProperty('ObjectType')) {
          obj['ObjectType'] = _ActivityOwnerType["default"].constructFromObject(data['ObjectType']);
        }

        if (data.hasOwnProperty('ObjectId')) {
          obj['ObjectId'] = _ApiClient["default"].convertToType(data['ObjectId'], 'String');
        }

        if (data.hasOwnProperty('Events')) {
          obj['Events'] = _ApiClient["default"].convertToType(data['Events'], ['String']);
        }
      }

      return obj;
    }
    /**
    * @member {String} UserId
    */

  }]);

  return ActivitySubscription;
}();

exports["default"] = ActivitySubscription;
//# sourceMappingURL=ActivitySubscription.js.map
