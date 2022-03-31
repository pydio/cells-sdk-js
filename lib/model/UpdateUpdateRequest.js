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
 * The UpdateUpdateRequest model module.
 * @module model/UpdateUpdateRequest
 * @version 4.0
 */
var UpdateUpdateRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UpdateUpdateRequest</code>.
   * @alias module:model/UpdateUpdateRequest
   */
  function UpdateUpdateRequest() {
    _classCallCheck(this, UpdateUpdateRequest);

    UpdateUpdateRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UpdateUpdateRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UpdateUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateUpdateRequest} obj Optional instance to populate.
     * @return {module:model/UpdateUpdateRequest} The populated <code>UpdateUpdateRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateUpdateRequest();

        if (data.hasOwnProperty('Channel')) {
          obj['Channel'] = _ApiClient["default"].convertToType(data['Channel'], 'String');
        }

        if (data.hasOwnProperty('CurrentVersion')) {
          obj['CurrentVersion'] = _ApiClient["default"].convertToType(data['CurrentVersion'], 'String');
        }

        if (data.hasOwnProperty('GOARCH')) {
          obj['GOARCH'] = _ApiClient["default"].convertToType(data['GOARCH'], 'String');
        }

        if (data.hasOwnProperty('GOOS')) {
          obj['GOOS'] = _ApiClient["default"].convertToType(data['GOOS'], 'String');
        }

        if (data.hasOwnProperty('LicenseInfo')) {
          obj['LicenseInfo'] = _ApiClient["default"].convertToType(data['LicenseInfo'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('PackageName')) {
          obj['PackageName'] = _ApiClient["default"].convertToType(data['PackageName'], 'String');
        }

        if (data.hasOwnProperty('ServiceName')) {
          obj['ServiceName'] = _ApiClient["default"].convertToType(data['ServiceName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UpdateUpdateRequest;
}();
/**
 * @member {String} Channel
 */


UpdateUpdateRequest.prototype['Channel'] = undefined;
/**
 * @member {String} CurrentVersion
 */

UpdateUpdateRequest.prototype['CurrentVersion'] = undefined;
/**
 * @member {String} GOARCH
 */

UpdateUpdateRequest.prototype['GOARCH'] = undefined;
/**
 * @member {String} GOOS
 */

UpdateUpdateRequest.prototype['GOOS'] = undefined;
/**
 * @member {Object.<String, String>} LicenseInfo
 */

UpdateUpdateRequest.prototype['LicenseInfo'] = undefined;
/**
 * @member {String} PackageName
 */

UpdateUpdateRequest.prototype['PackageName'] = undefined;
/**
 * @member {String} ServiceName
 */

UpdateUpdateRequest.prototype['ServiceName'] = undefined;
var _default = UpdateUpdateRequest;
exports["default"] = _default;
//# sourceMappingURL=UpdateUpdateRequest.js.map
