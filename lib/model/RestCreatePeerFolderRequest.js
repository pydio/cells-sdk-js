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

/**
 * The RestCreatePeerFolderRequest model module.
 * @module model/RestCreatePeerFolderRequest
 * @version 4.0
 */
var RestCreatePeerFolderRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestCreatePeerFolderRequest</code>.
   * @alias module:model/RestCreatePeerFolderRequest
   */
  function RestCreatePeerFolderRequest() {
    _classCallCheck(this, RestCreatePeerFolderRequest);

    RestCreatePeerFolderRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestCreatePeerFolderRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestCreatePeerFolderRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestCreatePeerFolderRequest} obj Optional instance to populate.
     * @return {module:model/RestCreatePeerFolderRequest} The populated <code>RestCreatePeerFolderRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestCreatePeerFolderRequest();

        if (data.hasOwnProperty('Path')) {
          obj['Path'] = _ApiClient["default"].convertToType(data['Path'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RestCreatePeerFolderRequest;
}();
/**
 * @member {String} Path
 */


RestCreatePeerFolderRequest.prototype['Path'] = undefined;
var _default = RestCreatePeerFolderRequest;
exports["default"] = _default;
//# sourceMappingURL=RestCreatePeerFolderRequest.js.map
