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

/**
 * The ActivityStreamActivitiesRequest model module.
 * @module model/ActivityStreamActivitiesRequest
 * @version 4.0
 */
var ActivityStreamActivitiesRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ActivityStreamActivitiesRequest</code>.
   * @alias module:model/ActivityStreamActivitiesRequest
   */
  function ActivityStreamActivitiesRequest() {
    _classCallCheck(this, ActivityStreamActivitiesRequest);

    ActivityStreamActivitiesRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ActivityStreamActivitiesRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ActivityStreamActivitiesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActivityStreamActivitiesRequest} obj Optional instance to populate.
     * @return {module:model/ActivityStreamActivitiesRequest} The populated <code>ActivityStreamActivitiesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActivityStreamActivitiesRequest();

        if (data.hasOwnProperty('AsDigest')) {
          obj['AsDigest'] = _ApiClient["default"].convertToType(data['AsDigest'], 'Boolean');
        }

        if (data.hasOwnProperty('BoxName')) {
          obj['BoxName'] = _ApiClient["default"].convertToType(data['BoxName'], 'String');
        }

        if (data.hasOwnProperty('Context')) {
          obj['Context'] = _ActivityStreamContext["default"].constructFromObject(data['Context']);
        }

        if (data.hasOwnProperty('ContextData')) {
          obj['ContextData'] = _ApiClient["default"].convertToType(data['ContextData'], 'String');
        }

        if (data.hasOwnProperty('Language')) {
          obj['Language'] = _ApiClient["default"].convertToType(data['Language'], 'String');
        }

        if (data.hasOwnProperty('Limit')) {
          obj['Limit'] = _ApiClient["default"].convertToType(data['Limit'], 'String');
        }

        if (data.hasOwnProperty('Offset')) {
          obj['Offset'] = _ApiClient["default"].convertToType(data['Offset'], 'String');
        }

        if (data.hasOwnProperty('PointOfView')) {
          obj['PointOfView'] = _ActivitySummaryPointOfView["default"].constructFromObject(data['PointOfView']);
        }

        if (data.hasOwnProperty('StreamFilter')) {
          obj['StreamFilter'] = _ApiClient["default"].convertToType(data['StreamFilter'], 'String');
        }

        if (data.hasOwnProperty('UnreadCountOnly')) {
          obj['UnreadCountOnly'] = _ApiClient["default"].convertToType(data['UnreadCountOnly'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ActivityStreamActivitiesRequest;
}();
/**
 * @member {Boolean} AsDigest
 */


ActivityStreamActivitiesRequest.prototype['AsDigest'] = undefined;
/**
 * @member {String} BoxName
 */

ActivityStreamActivitiesRequest.prototype['BoxName'] = undefined;
/**
 * @member {module:model/ActivityStreamContext} Context
 */

ActivityStreamActivitiesRequest.prototype['Context'] = undefined;
/**
 * @member {String} ContextData
 */

ActivityStreamActivitiesRequest.prototype['ContextData'] = undefined;
/**
 * Provide language information for building the human-readable strings.
 * @member {String} Language
 */

ActivityStreamActivitiesRequest.prototype['Language'] = undefined;
/**
 * @member {String} Limit
 */

ActivityStreamActivitiesRequest.prototype['Limit'] = undefined;
/**
 * @member {String} Offset
 */

ActivityStreamActivitiesRequest.prototype['Offset'] = undefined;
/**
 * @member {module:model/ActivitySummaryPointOfView} PointOfView
 */

ActivityStreamActivitiesRequest.prototype['PointOfView'] = undefined;
/**
 * @member {String} StreamFilter
 */

ActivityStreamActivitiesRequest.prototype['StreamFilter'] = undefined;
/**
 * @member {Boolean} UnreadCountOnly
 */

ActivityStreamActivitiesRequest.prototype['UnreadCountOnly'] = undefined;
var _default = ActivityStreamActivitiesRequest;
exports["default"] = _default;
//# sourceMappingURL=ActivityStreamActivitiesRequest.js.map
