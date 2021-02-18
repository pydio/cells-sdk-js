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
* The UpdateApplyUpdateRequest model module.
* @module model/UpdateApplyUpdateRequest
* @version 1.0
*/
var UpdateApplyUpdateRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>UpdateApplyUpdateRequest</code>.
  * @alias module:model/UpdateApplyUpdateRequest
  * @class
  */
  function UpdateApplyUpdateRequest() {
    _classCallCheck(this, UpdateApplyUpdateRequest);

    _defineProperty(this, "TargetVersion", undefined);

    _defineProperty(this, "PackageName", undefined);
  }
  /**
  * Constructs a <code>UpdateApplyUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/UpdateApplyUpdateRequest} obj Optional instance to populate.
  * @return {module:model/UpdateApplyUpdateRequest} The populated <code>UpdateApplyUpdateRequest</code> instance.
  */


  _createClass(UpdateApplyUpdateRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UpdateApplyUpdateRequest();

        if (data.hasOwnProperty('TargetVersion')) {
          obj['TargetVersion'] = _ApiClient["default"].convertToType(data['TargetVersion'], 'String');
        }

        if (data.hasOwnProperty('PackageName')) {
          obj['PackageName'] = _ApiClient["default"].convertToType(data['PackageName'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {String} TargetVersion
    */

  }]);

  return UpdateApplyUpdateRequest;
}();

exports["default"] = UpdateApplyUpdateRequest;
//# sourceMappingURL=UpdateApplyUpdateRequest.js.map
