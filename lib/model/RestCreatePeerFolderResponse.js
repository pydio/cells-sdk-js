"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TreeNode = _interopRequireDefault(require("./TreeNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestCreatePeerFolderResponse model module.
* @module model/RestCreatePeerFolderResponse
* @version 1.0
*/
var RestCreatePeerFolderResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestCreatePeerFolderResponse</code>.
  * @alias module:model/RestCreatePeerFolderResponse
  * @class
  */
  function RestCreatePeerFolderResponse() {
    _classCallCheck(this, RestCreatePeerFolderResponse);

    _defineProperty(this, "Success", undefined);

    _defineProperty(this, "Node", undefined);
  }
  /**
  * Constructs a <code>RestCreatePeerFolderResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestCreatePeerFolderResponse} obj Optional instance to populate.
  * @return {module:model/RestCreatePeerFolderResponse} The populated <code>RestCreatePeerFolderResponse</code> instance.
  */


  _createClass(RestCreatePeerFolderResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestCreatePeerFolderResponse();

        if (data.hasOwnProperty('Success')) {
          obj['Success'] = _ApiClient["default"].convertToType(data['Success'], 'Boolean');
        }

        if (data.hasOwnProperty('Node')) {
          obj['Node'] = _TreeNode["default"].constructFromObject(data['Node']);
        }
      }

      return obj;
    }
    /**
    * @member {Boolean} Success
    */

  }]);

  return RestCreatePeerFolderResponse;
}();

exports["default"] = RestCreatePeerFolderResponse;
//# sourceMappingURL=RestCreatePeerFolderResponse.js.map
