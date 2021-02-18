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
* The RestFrontPluginsResponse model module.
* @module model/RestFrontPluginsResponse
* @version 1.0
*/
var RestFrontPluginsResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestFrontPluginsResponse</code>.
  * @alias module:model/RestFrontPluginsResponse
  * @class
  */
  function RestFrontPluginsResponse() {
    _classCallCheck(this, RestFrontPluginsResponse);
  }
  /**
  * Constructs a <code>RestFrontPluginsResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestFrontPluginsResponse} obj Optional instance to populate.
  * @return {module:model/RestFrontPluginsResponse} The populated <code>RestFrontPluginsResponse</code> instance.
  */


  _createClass(RestFrontPluginsResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestFrontPluginsResponse();
      }

      return obj;
    }
  }]);

  return RestFrontPluginsResponse;
}();

exports["default"] = RestFrontPluginsResponse;
//# sourceMappingURL=RestFrontPluginsResponse.js.map
