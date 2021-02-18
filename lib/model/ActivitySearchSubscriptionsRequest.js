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
* The ActivitySearchSubscriptionsRequest model module.
* @module model/ActivitySearchSubscriptionsRequest
* @version 1.0
*/
var ActivitySearchSubscriptionsRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>ActivitySearchSubscriptionsRequest</code>.
  * @alias module:model/ActivitySearchSubscriptionsRequest
  * @class
  */
  function ActivitySearchSubscriptionsRequest() {
    _classCallCheck(this, ActivitySearchSubscriptionsRequest);

    _defineProperty(this, "UserIds", undefined);

    _defineProperty(this, "ObjectTypes", undefined);

    _defineProperty(this, "ObjectIds", undefined);
  }
  /**
  * Constructs a <code>ActivitySearchSubscriptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/ActivitySearchSubscriptionsRequest} obj Optional instance to populate.
  * @return {module:model/ActivitySearchSubscriptionsRequest} The populated <code>ActivitySearchSubscriptionsRequest</code> instance.
  */


  _createClass(ActivitySearchSubscriptionsRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActivitySearchSubscriptionsRequest();

        if (data.hasOwnProperty('UserIds')) {
          obj['UserIds'] = _ApiClient["default"].convertToType(data['UserIds'], ['String']);
        }

        if (data.hasOwnProperty('ObjectTypes')) {
          obj['ObjectTypes'] = _ApiClient["default"].convertToType(data['ObjectTypes'], [_ActivityOwnerType["default"]]);
        }

        if (data.hasOwnProperty('ObjectIds')) {
          obj['ObjectIds'] = _ApiClient["default"].convertToType(data['ObjectIds'], ['String']);
        }
      }

      return obj;
    }
    /**
    * @member {Array.<String>} UserIds
    */

  }]);

  return ActivitySearchSubscriptionsRequest;
}();

exports["default"] = ActivitySearchSubscriptionsRequest;
//# sourceMappingURL=ActivitySearchSubscriptionsRequest.js.map
