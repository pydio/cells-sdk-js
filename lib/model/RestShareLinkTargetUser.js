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
* The RestShareLinkTargetUser model module.
* @module model/RestShareLinkTargetUser
* @version 1.0
*/
var RestShareLinkTargetUser = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestShareLinkTargetUser</code>.
  * @alias module:model/RestShareLinkTargetUser
  * @class
  */
  function RestShareLinkTargetUser() {
    _classCallCheck(this, RestShareLinkTargetUser);

    _defineProperty(this, "Display", undefined);

    _defineProperty(this, "DownloadCount", undefined);
  }
  /**
  * Constructs a <code>RestShareLinkTargetUser</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestShareLinkTargetUser} obj Optional instance to populate.
  * @return {module:model/RestShareLinkTargetUser} The populated <code>RestShareLinkTargetUser</code> instance.
  */


  _createClass(RestShareLinkTargetUser, null, [{
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
    /**
    * @member {String} Display
    */

  }]);

  return RestShareLinkTargetUser;
}();

exports["default"] = RestShareLinkTargetUser;
//# sourceMappingURL=RestShareLinkTargetUser.js.map
