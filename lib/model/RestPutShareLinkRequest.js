"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestShareLink = _interopRequireDefault(require("./RestShareLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestPutShareLinkRequest model module.
* @module model/RestPutShareLinkRequest
* @version 1.0
*/
var RestPutShareLinkRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestPutShareLinkRequest</code>.
  * @alias module:model/RestPutShareLinkRequest
  * @class
  */
  function RestPutShareLinkRequest() {
    _classCallCheck(this, RestPutShareLinkRequest);

    _defineProperty(this, "ShareLink", undefined);

    _defineProperty(this, "PasswordEnabled", undefined);

    _defineProperty(this, "CreatePassword", undefined);

    _defineProperty(this, "UpdatePassword", undefined);

    _defineProperty(this, "UpdateCustomHash", undefined);
  }
  /**
  * Constructs a <code>RestPutShareLinkRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestPutShareLinkRequest} obj Optional instance to populate.
  * @return {module:model/RestPutShareLinkRequest} The populated <code>RestPutShareLinkRequest</code> instance.
  */


  _createClass(RestPutShareLinkRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestPutShareLinkRequest();

        if (data.hasOwnProperty('ShareLink')) {
          obj['ShareLink'] = _RestShareLink["default"].constructFromObject(data['ShareLink']);
        }

        if (data.hasOwnProperty('PasswordEnabled')) {
          obj['PasswordEnabled'] = _ApiClient["default"].convertToType(data['PasswordEnabled'], 'Boolean');
        }

        if (data.hasOwnProperty('CreatePassword')) {
          obj['CreatePassword'] = _ApiClient["default"].convertToType(data['CreatePassword'], 'String');
        }

        if (data.hasOwnProperty('UpdatePassword')) {
          obj['UpdatePassword'] = _ApiClient["default"].convertToType(data['UpdatePassword'], 'String');
        }

        if (data.hasOwnProperty('UpdateCustomHash')) {
          obj['UpdateCustomHash'] = _ApiClient["default"].convertToType(data['UpdateCustomHash'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {module:model/RestShareLink} ShareLink
    */

  }]);

  return RestPutShareLinkRequest;
}();

exports["default"] = RestPutShareLinkRequest;
//# sourceMappingURL=RestPutShareLinkRequest.js.map
