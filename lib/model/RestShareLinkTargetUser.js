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
 * The RestShareLinkTargetUser model module.
 * @module model/RestShareLinkTargetUser
 * @version 4.0
 */
var RestShareLinkTargetUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestShareLinkTargetUser</code>.
   * @alias module:model/RestShareLinkTargetUser
   */
  function RestShareLinkTargetUser() {
    _classCallCheck(this, RestShareLinkTargetUser);

    RestShareLinkTargetUser.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestShareLinkTargetUser, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestShareLinkTargetUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestShareLinkTargetUser} obj Optional instance to populate.
     * @return {module:model/RestShareLinkTargetUser} The populated <code>RestShareLinkTargetUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestShareLinkTargetUser();

        if (data.hasOwnProperty('Display')) {
          obj['Display'] = _ApiClient["default"].convertToType(data['Display'], 'String');
        }

        if (data.hasOwnProperty('DownloadCount')) {
          obj['DownloadCount'] = _ApiClient["default"].convertToType(data['DownloadCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return RestShareLinkTargetUser;
}();
/**
 * @member {String} Display
 */


RestShareLinkTargetUser.prototype['Display'] = undefined;
/**
 * @member {Number} DownloadCount
 */

RestShareLinkTargetUser.prototype['DownloadCount'] = undefined;
var _default = RestShareLinkTargetUser;
exports["default"] = _default;
//# sourceMappingURL=RestShareLinkTargetUser.js.map
