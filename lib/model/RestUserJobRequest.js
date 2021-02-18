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
* The RestUserJobRequest model module.
* @module model/RestUserJobRequest
* @version 1.0
*/
var RestUserJobRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestUserJobRequest</code>.
  * @alias module:model/RestUserJobRequest
  * @class
  */
  function RestUserJobRequest() {
    _classCallCheck(this, RestUserJobRequest);

    _defineProperty(this, "JobName", undefined);

    _defineProperty(this, "JsonParameters", undefined);
  }
  /**
  * Constructs a <code>RestUserJobRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestUserJobRequest} obj Optional instance to populate.
  * @return {module:model/RestUserJobRequest} The populated <code>RestUserJobRequest</code> instance.
  */


  _createClass(RestUserJobRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestUserJobRequest();

        if (data.hasOwnProperty('JobName')) {
          obj['JobName'] = _ApiClient["default"].convertToType(data['JobName'], 'String');
        }

        if (data.hasOwnProperty('JsonParameters')) {
          obj['JsonParameters'] = _ApiClient["default"].convertToType(data['JsonParameters'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {String} JobName
    */

  }]);

  return RestUserJobRequest;
}();

exports["default"] = RestUserJobRequest;
//# sourceMappingURL=RestUserJobRequest.js.map
