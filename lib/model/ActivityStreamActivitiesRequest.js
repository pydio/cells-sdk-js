"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActivityStreamContext = _interopRequireDefault(require("./ActivityStreamContext"));

var _ActivitySummaryPointOfView = _interopRequireDefault(require("./ActivitySummaryPointOfView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The ActivityStreamActivitiesRequest model module.
* @module model/ActivityStreamActivitiesRequest
* @version 1.0
*/
var ActivityStreamActivitiesRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>ActivityStreamActivitiesRequest</code>.
  * @alias module:model/ActivityStreamActivitiesRequest
  * @class
  */
  function ActivityStreamActivitiesRequest() {
    _classCallCheck(this, ActivityStreamActivitiesRequest);

    _defineProperty(this, "Context", undefined);

    _defineProperty(this, "ContextData", undefined);

    _defineProperty(this, "StreamFilter", undefined);

    _defineProperty(this, "BoxName", undefined);

    _defineProperty(this, "UnreadCountOnly", undefined);

    _defineProperty(this, "Offset", undefined);

    _defineProperty(this, "Limit", undefined);

    _defineProperty(this, "AsDigest", undefined);

    _defineProperty(this, "PointOfView", undefined);

    _defineProperty(this, "Language", undefined);
  }
  /**
  * Constructs a <code>ActivityStreamActivitiesRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/ActivityStreamActivitiesRequest} obj Optional instance to populate.
  * @return {module:model/ActivityStreamActivitiesRequest} The populated <code>ActivityStreamActivitiesRequest</code> instance.
  */


  _createClass(ActivityStreamActivitiesRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActivityStreamActivitiesRequest();

        if (data.hasOwnProperty('Context')) {
          obj['Context'] = _ActivityStreamContext["default"].constructFromObject(data['Context']);
        }

        if (data.hasOwnProperty('ContextData')) {
          obj['ContextData'] = _ApiClient["default"].convertToType(data['ContextData'], 'String');
        }

        if (data.hasOwnProperty('StreamFilter')) {
          obj['StreamFilter'] = _ApiClient["default"].convertToType(data['StreamFilter'], 'String');
        }

        if (data.hasOwnProperty('BoxName')) {
          obj['BoxName'] = _ApiClient["default"].convertToType(data['BoxName'], 'String');
        }

        if (data.hasOwnProperty('UnreadCountOnly')) {
          obj['UnreadCountOnly'] = _ApiClient["default"].convertToType(data['UnreadCountOnly'], 'Boolean');
        }

        if (data.hasOwnProperty('Offset')) {
          obj['Offset'] = _ApiClient["default"].convertToType(data['Offset'], 'String');
        }

        if (data.hasOwnProperty('Limit')) {
          obj['Limit'] = _ApiClient["default"].convertToType(data['Limit'], 'String');
        }

        if (data.hasOwnProperty('AsDigest')) {
          obj['AsDigest'] = _ApiClient["default"].convertToType(data['AsDigest'], 'Boolean');
        }

        if (data.hasOwnProperty('PointOfView')) {
          obj['PointOfView'] = _ActivitySummaryPointOfView["default"].constructFromObject(data['PointOfView']);
        }

        if (data.hasOwnProperty('Language')) {
          obj['Language'] = _ApiClient["default"].convertToType(data['Language'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {module:model/ActivityStreamContext} Context
    */

  }]);

  return ActivityStreamActivitiesRequest;
}();

exports["default"] = ActivityStreamActivitiesRequest;
//# sourceMappingURL=ActivityStreamActivitiesRequest.js.map
