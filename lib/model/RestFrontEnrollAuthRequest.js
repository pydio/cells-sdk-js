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
* The RestFrontEnrollAuthRequest model module.
* @module model/RestFrontEnrollAuthRequest
* @version 1.0
*/
var RestFrontEnrollAuthRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestFrontEnrollAuthRequest</code>.
  * @alias module:model/RestFrontEnrollAuthRequest
  * @class
  */
  function RestFrontEnrollAuthRequest() {
    _classCallCheck(this, RestFrontEnrollAuthRequest);

    _defineProperty(this, "EnrollType", undefined);

    _defineProperty(this, "EnrollInfo", undefined);
  }
  /**
  * Constructs a <code>RestFrontEnrollAuthRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestFrontEnrollAuthRequest} obj Optional instance to populate.
  * @return {module:model/RestFrontEnrollAuthRequest} The populated <code>RestFrontEnrollAuthRequest</code> instance.
  */


  _createClass(RestFrontEnrollAuthRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestFrontEnrollAuthRequest();

        if (data.hasOwnProperty('EnrollType')) {
          obj['EnrollType'] = _ApiClient["default"].convertToType(data['EnrollType'], 'String');
        }

        if (data.hasOwnProperty('EnrollInfo')) {
          obj['EnrollInfo'] = _ApiClient["default"].convertToType(data['EnrollInfo'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
    /**
    * @member {String} EnrollType
    */

  }]);

  return RestFrontEnrollAuthRequest;
}();

exports["default"] = RestFrontEnrollAuthRequest;
//# sourceMappingURL=RestFrontEnrollAuthRequest.js.map
