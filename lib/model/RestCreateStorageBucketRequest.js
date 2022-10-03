"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ObjectDataSource = _interopRequireDefault(require("./ObjectDataSource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RestCreateStorageBucketRequest model module.
 * @module model/RestCreateStorageBucketRequest
 * @version 4.0
 */
var RestCreateStorageBucketRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestCreateStorageBucketRequest</code>.
   * @alias module:model/RestCreateStorageBucketRequest
   */
  function RestCreateStorageBucketRequest() {
    _classCallCheck(this, RestCreateStorageBucketRequest);

    RestCreateStorageBucketRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestCreateStorageBucketRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestCreateStorageBucketRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestCreateStorageBucketRequest} obj Optional instance to populate.
     * @return {module:model/RestCreateStorageBucketRequest} The populated <code>RestCreateStorageBucketRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestCreateStorageBucketRequest();

        if (data.hasOwnProperty('DataSource')) {
          obj['DataSource'] = _ObjectDataSource["default"].constructFromObject(data['DataSource']);
        }
      }

      return obj;
    }
  }]);

  return RestCreateStorageBucketRequest;
}();
/**
 * @member {module:model/ObjectDataSource} DataSource
 */


RestCreateStorageBucketRequest.prototype['DataSource'] = undefined;
var _default = RestCreateStorageBucketRequest;
exports["default"] = _default;
//# sourceMappingURL=RestCreateStorageBucketRequest.js.map
