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
* The RestListPeerFoldersRequest model module.
* @module model/RestListPeerFoldersRequest
* @version 1.0
*/
var RestListPeerFoldersRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestListPeerFoldersRequest</code>.
  * @alias module:model/RestListPeerFoldersRequest
  * @class
  */
  function RestListPeerFoldersRequest() {
    _classCallCheck(this, RestListPeerFoldersRequest);

    _defineProperty(this, "PeerAddress", undefined);

    _defineProperty(this, "Path", undefined);
  }
  /**
  * Constructs a <code>RestListPeerFoldersRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestListPeerFoldersRequest} obj Optional instance to populate.
  * @return {module:model/RestListPeerFoldersRequest} The populated <code>RestListPeerFoldersRequest</code> instance.
  */


  _createClass(RestListPeerFoldersRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestListPeerFoldersRequest();

        if (data.hasOwnProperty('PeerAddress')) {
          obj['PeerAddress'] = _ApiClient["default"].convertToType(data['PeerAddress'], 'String');
        }

        if (data.hasOwnProperty('Path')) {
          obj['Path'] = _ApiClient["default"].convertToType(data['Path'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {String} PeerAddress
    */

  }]);

  return RestListPeerFoldersRequest;
}();

exports["default"] = RestListPeerFoldersRequest;
//# sourceMappingURL=RestListPeerFoldersRequest.js.map
