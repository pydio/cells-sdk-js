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
* The InstallCheckResult model module.
* @module model/InstallCheckResult
* @version 1.0
*/
var InstallCheckResult = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>InstallCheckResult</code>.
  * @alias module:model/InstallCheckResult
  * @class
  */
  function InstallCheckResult() {
    _classCallCheck(this, InstallCheckResult);

    _defineProperty(this, "Name", undefined);

    _defineProperty(this, "Success", undefined);

    _defineProperty(this, "JsonResult", undefined);
  }
  /**
  * Constructs a <code>InstallCheckResult</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/InstallCheckResult} obj Optional instance to populate.
  * @return {module:model/InstallCheckResult} The populated <code>InstallCheckResult</code> instance.
  */


  _createClass(InstallCheckResult, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstallCheckResult();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Success')) {
          obj['Success'] = _ApiClient["default"].convertToType(data['Success'], 'Boolean');
        }

        if (data.hasOwnProperty('JsonResult')) {
          obj['JsonResult'] = _ApiClient["default"].convertToType(data['JsonResult'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {String} Name
    */

  }]);

  return InstallCheckResult;
}();

exports["default"] = InstallCheckResult;
//# sourceMappingURL=InstallCheckResult.js.map
