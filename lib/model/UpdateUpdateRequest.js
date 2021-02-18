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
* The UpdateUpdateRequest model module.
* @module model/UpdateUpdateRequest
* @version 1.0
*/
var UpdateUpdateRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>UpdateUpdateRequest</code>.
  * @alias module:model/UpdateUpdateRequest
  * @class
  */
  function UpdateUpdateRequest() {
    _classCallCheck(this, UpdateUpdateRequest);

    _defineProperty(this, "Channel", undefined);

    _defineProperty(this, "PackageName", undefined);

    _defineProperty(this, "CurrentVersion", undefined);

    _defineProperty(this, "GOOS", undefined);

    _defineProperty(this, "GOARCH", undefined);

    _defineProperty(this, "ServiceName", undefined);

    _defineProperty(this, "LicenseInfo", undefined);
  }
  /**
  * Constructs a <code>UpdateUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/UpdateUpdateRequest} obj Optional instance to populate.
  * @return {module:model/UpdateUpdateRequest} The populated <code>UpdateUpdateRequest</code> instance.
  */


  _createClass(UpdateUpdateRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateUpdateRequest();

        if (data.hasOwnProperty('Channel')) {
          obj['Channel'] = _ApiClient["default"].convertToType(data['Channel'], 'String');
        }

        if (data.hasOwnProperty('PackageName')) {
          obj['PackageName'] = _ApiClient["default"].convertToType(data['PackageName'], 'String');
        }

        if (data.hasOwnProperty('CurrentVersion')) {
          obj['CurrentVersion'] = _ApiClient["default"].convertToType(data['CurrentVersion'], 'String');
        }

        if (data.hasOwnProperty('GOOS')) {
          obj['GOOS'] = _ApiClient["default"].convertToType(data['GOOS'], 'String');
        }

        if (data.hasOwnProperty('GOARCH')) {
          obj['GOARCH'] = _ApiClient["default"].convertToType(data['GOARCH'], 'String');
        }

        if (data.hasOwnProperty('ServiceName')) {
          obj['ServiceName'] = _ApiClient["default"].convertToType(data['ServiceName'], 'String');
        }

        if (data.hasOwnProperty('LicenseInfo')) {
          obj['LicenseInfo'] = _ApiClient["default"].convertToType(data['LicenseInfo'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
    /**
    * @member {String} Channel
    */

  }]);

  return UpdateUpdateRequest;
}();

exports["default"] = UpdateUpdateRequest;
//# sourceMappingURL=UpdateUpdateRequest.js.map
