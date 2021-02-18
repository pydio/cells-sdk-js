"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CtlServiceCommand = _interopRequireDefault(require("./CtlServiceCommand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestControlServiceRequest model module.
* @module model/RestControlServiceRequest
* @version 1.0
*/
var RestControlServiceRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestControlServiceRequest</code>.
  * @alias module:model/RestControlServiceRequest
  * @class
  */
  function RestControlServiceRequest() {
    _classCallCheck(this, RestControlServiceRequest);

    _defineProperty(this, "ServiceName", undefined);

    _defineProperty(this, "NodeName", undefined);

    _defineProperty(this, "Command", undefined);
  }
  /**
  * Constructs a <code>RestControlServiceRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestControlServiceRequest} obj Optional instance to populate.
  * @return {module:model/RestControlServiceRequest} The populated <code>RestControlServiceRequest</code> instance.
  */


  _createClass(RestControlServiceRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestControlServiceRequest();

        if (data.hasOwnProperty('ServiceName')) {
          obj['ServiceName'] = _ApiClient["default"].convertToType(data['ServiceName'], 'String');
        }

        if (data.hasOwnProperty('NodeName')) {
          obj['NodeName'] = _ApiClient["default"].convertToType(data['NodeName'], 'String');
        }

        if (data.hasOwnProperty('Command')) {
          obj['Command'] = _CtlServiceCommand["default"].constructFromObject(data['Command']);
        }
      }

      return obj;
    }
    /**
    * @member {String} ServiceName
    */

  }]);

  return RestControlServiceRequest;
}();

exports["default"] = RestControlServiceRequest;
//# sourceMappingURL=RestControlServiceRequest.js.map
