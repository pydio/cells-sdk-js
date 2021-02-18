"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstallCheckResult = _interopRequireDefault(require("./InstallCheckResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The InstallPerformCheckResponse model module.
* @module model/InstallPerformCheckResponse
* @version 1.0
*/
var InstallPerformCheckResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>InstallPerformCheckResponse</code>.
  * @alias module:model/InstallPerformCheckResponse
  * @class
  */
  function InstallPerformCheckResponse() {
    _classCallCheck(this, InstallPerformCheckResponse);

    _defineProperty(this, "Result", undefined);
  }
  /**
  * Constructs a <code>InstallPerformCheckResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/InstallPerformCheckResponse} obj Optional instance to populate.
  * @return {module:model/InstallPerformCheckResponse} The populated <code>InstallPerformCheckResponse</code> instance.
  */


  _createClass(InstallPerformCheckResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstallPerformCheckResponse();

        if (data.hasOwnProperty('Result')) {
          obj['Result'] = _InstallCheckResult["default"].constructFromObject(data['Result']);
        }
      }

      return obj;
    }
    /**
    * @member {module:model/InstallCheckResult} Result
    */

  }]);

  return InstallPerformCheckResponse;
}();

exports["default"] = InstallPerformCheckResponse;
//# sourceMappingURL=InstallPerformCheckResponse.js.map
