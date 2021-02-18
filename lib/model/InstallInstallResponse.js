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
* The InstallInstallResponse model module.
* @module model/InstallInstallResponse
* @version 1.0
*/
var InstallInstallResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>InstallInstallResponse</code>.
  * @alias module:model/InstallInstallResponse
  * @class
  */
  function InstallInstallResponse() {
    _classCallCheck(this, InstallInstallResponse);

    _defineProperty(this, "success", undefined);
  }
  /**
  * Constructs a <code>InstallInstallResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/InstallInstallResponse} obj Optional instance to populate.
  * @return {module:model/InstallInstallResponse} The populated <code>InstallInstallResponse</code> instance.
  */


  _createClass(InstallInstallResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstallInstallResponse();

        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {Boolean} success
    */

  }]);

  return InstallInstallResponse;
}();

exports["default"] = InstallInstallResponse;
//# sourceMappingURL=InstallInstallResponse.js.map
