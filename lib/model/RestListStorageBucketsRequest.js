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
 * The RestListStorageBucketsRequest model module.
 * @module model/RestListStorageBucketsRequest
 * @version 4.0
 */
var RestListStorageBucketsRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestListStorageBucketsRequest</code>.
   * @alias module:model/RestListStorageBucketsRequest
   */
  function RestListStorageBucketsRequest() {
    _classCallCheck(this, RestListStorageBucketsRequest);

    RestListStorageBucketsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestListStorageBucketsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestListStorageBucketsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestListStorageBucketsRequest} obj Optional instance to populate.
     * @return {module:model/RestListStorageBucketsRequest} The populated <code>RestListStorageBucketsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestListStorageBucketsRequest();

        if (data.hasOwnProperty('BucketsRegexp')) {
          obj['BucketsRegexp'] = _ApiClient["default"].convertToType(data['BucketsRegexp'], 'String');
        }

        if (data.hasOwnProperty('DataSource')) {
          obj['DataSource'] = _ObjectDataSource["default"].constructFromObject(data['DataSource']);
        }
      }

      return obj;
    }
  }]);

  return RestListStorageBucketsRequest;
}();
/**
 * @member {String} BucketsRegexp
 */


RestListStorageBucketsRequest.prototype['BucketsRegexp'] = undefined;
/**
 * @member {module:model/ObjectDataSource} DataSource
 */

RestListStorageBucketsRequest.prototype['DataSource'] = undefined;
var _default = RestListStorageBucketsRequest;
exports["default"] = _default;
//# sourceMappingURL=RestListStorageBucketsRequest.js.map
