"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuthToken = _interopRequireDefault(require("./AuthToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestFrontSessionResponse model module.
* @module model/RestFrontSessionResponse
* @version 1.0
*/
var RestFrontSessionResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestFrontSessionResponse</code>.
  * @alias module:model/RestFrontSessionResponse
  * @class
  */
  function RestFrontSessionResponse() {
    _classCallCheck(this, RestFrontSessionResponse);

    _defineProperty(this, "JWT", undefined);

    _defineProperty(this, "ExpireTime", undefined);

    _defineProperty(this, "Trigger", undefined);

    _defineProperty(this, "TriggerInfo", undefined);

    _defineProperty(this, "Token", undefined);

    _defineProperty(this, "RedirectTo", undefined);

    _defineProperty(this, "Error", undefined);
  }
  /**
  * Constructs a <code>RestFrontSessionResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestFrontSessionResponse} obj Optional instance to populate.
  * @return {module:model/RestFrontSessionResponse} The populated <code>RestFrontSessionResponse</code> instance.
  */


  _createClass(RestFrontSessionResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestFrontSessionResponse();

        if (data.hasOwnProperty('JWT')) {
          obj['JWT'] = _ApiClient["default"].convertToType(data['JWT'], 'String');
        }

        if (data.hasOwnProperty('ExpireTime')) {
          obj['ExpireTime'] = _ApiClient["default"].convertToType(data['ExpireTime'], 'Number');
        }

        if (data.hasOwnProperty('Trigger')) {
          obj['Trigger'] = _ApiClient["default"].convertToType(data['Trigger'], 'String');
        }

        if (data.hasOwnProperty('TriggerInfo')) {
          obj['TriggerInfo'] = _ApiClient["default"].convertToType(data['TriggerInfo'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Token')) {
          obj['Token'] = _AuthToken["default"].constructFromObject(data['Token']);
        }

        if (data.hasOwnProperty('RedirectTo')) {
          obj['RedirectTo'] = _ApiClient["default"].convertToType(data['RedirectTo'], 'String');
        }

        if (data.hasOwnProperty('Error')) {
          obj['Error'] = _ApiClient["default"].convertToType(data['Error'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {String} JWT
    */

  }]);

  return RestFrontSessionResponse;
}();

exports["default"] = RestFrontSessionResponse;
//# sourceMappingURL=RestFrontSessionResponse.js.map
