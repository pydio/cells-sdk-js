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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestListStorageBucketsRequest model module.
* @module model/RestListStorageBucketsRequest
* @version 1.0
*/
var RestListStorageBucketsRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestListStorageBucketsRequest</code>.
  * @alias module:model/RestListStorageBucketsRequest
  * @class
  */
  function RestListStorageBucketsRequest() {
    _classCallCheck(this, RestListStorageBucketsRequest);

    _defineProperty(this, "DataSource", undefined);

    _defineProperty(this, "BucketsRegexp", undefined);
  }
  /**
  * Constructs a <code>RestListStorageBucketsRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestListStorageBucketsRequest} obj Optional instance to populate.
  * @return {module:model/RestListStorageBucketsRequest} The populated <code>RestListStorageBucketsRequest</code> instance.
  */


  _createClass(RestListStorageBucketsRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestListStorageBucketsRequest();

        if (data.hasOwnProperty('DataSource')) {
          obj['DataSource'] = _ObjectDataSource["default"].constructFromObject(data['DataSource']);
        }

        if (data.hasOwnProperty('BucketsRegexp')) {
          obj['BucketsRegexp'] = _ApiClient["default"].convertToType(data['BucketsRegexp'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {module:model/ObjectDataSource} DataSource
    */

  }]);

  return RestListStorageBucketsRequest;
}();

exports["default"] = RestListStorageBucketsRequest;
//# sourceMappingURL=RestListStorageBucketsRequest.js.map
