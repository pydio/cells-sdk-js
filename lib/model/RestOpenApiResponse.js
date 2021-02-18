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
* The RestOpenApiResponse model module.
* @module model/RestOpenApiResponse
* @version 1.0
*/
var RestOpenApiResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestOpenApiResponse</code>.
  * @alias module:model/RestOpenApiResponse
  * @class
  */
  function RestOpenApiResponse() {
    _classCallCheck(this, RestOpenApiResponse);
  }
  /**
  * Constructs a <code>RestOpenApiResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestOpenApiResponse} obj Optional instance to populate.
  * @return {module:model/RestOpenApiResponse} The populated <code>RestOpenApiResponse</code> instance.
  */


  _createClass(RestOpenApiResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestOpenApiResponse();
      }

      return obj;
    }
  }]);

  return RestOpenApiResponse;
}();

exports["default"] = RestOpenApiResponse;
//# sourceMappingURL=RestOpenApiResponse.js.map
