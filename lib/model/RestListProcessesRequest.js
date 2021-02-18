"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestListProcessesRequest model module.
* @module model/RestListProcessesRequest
* @version 1.0
*/
var RestListProcessesRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestListProcessesRequest</code>.
  * @alias module:model/RestListProcessesRequest
  * @class
  */
  function RestListProcessesRequest() {
    _classCallCheck(this, RestListProcessesRequest);

    _defineProperty(this, "PeerId", undefined);

    _defineProperty(this, "ServiceName", undefined);
  }
  /**
  * Constructs a <code>RestListProcessesRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestListProcessesRequest} obj Optional instance to populate.
  * @return {module:model/RestListProcessesRequest} The populated <code>RestListProcessesRequest</code> instance.
  */


  _createClass(RestListProcessesRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestListProcessesRequest();

        if (data.hasOwnProperty('PeerId')) {
          obj['PeerId'] = _ApiClient["default"].convertToType(data['PeerId'], 'String');
        }

        if (data.hasOwnProperty('ServiceName')) {
          obj['ServiceName'] = _ApiClient["default"].convertToType(data['ServiceName'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {String} PeerId
    */

  }]);

  return RestListProcessesRequest;
}();

exports["default"] = RestListProcessesRequest;
//# sourceMappingURL=RestListProcessesRequest.js.map
