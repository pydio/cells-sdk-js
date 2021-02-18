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
* The RestListPeersAddressesResponse model module.
* @module model/RestListPeersAddressesResponse
* @version 1.0
*/
var RestListPeersAddressesResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestListPeersAddressesResponse</code>.
  * @alias module:model/RestListPeersAddressesResponse
  * @class
  */
  function RestListPeersAddressesResponse() {
    _classCallCheck(this, RestListPeersAddressesResponse);

    _defineProperty(this, "PeerAddresses", undefined);
  }
  /**
  * Constructs a <code>RestListPeersAddressesResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestListPeersAddressesResponse} obj Optional instance to populate.
  * @return {module:model/RestListPeersAddressesResponse} The populated <code>RestListPeersAddressesResponse</code> instance.
  */


  _createClass(RestListPeersAddressesResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestListPeersAddressesResponse();

        if (data.hasOwnProperty('PeerAddresses')) {
          obj['PeerAddresses'] = _ApiClient["default"].convertToType(data['PeerAddresses'], ['String']);
        }
      }

      return obj;
    }
    /**
    * @member {Array.<String>} PeerAddresses
    */

  }]);

  return RestListPeersAddressesResponse;
}();

exports["default"] = RestListPeersAddressesResponse;
//# sourceMappingURL=RestListPeersAddressesResponse.js.map
