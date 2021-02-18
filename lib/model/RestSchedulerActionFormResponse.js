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
* The RestSchedulerActionFormResponse model module.
* @module model/RestSchedulerActionFormResponse
* @version 1.0
*/
var RestSchedulerActionFormResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestSchedulerActionFormResponse</code>.
  * @alias module:model/RestSchedulerActionFormResponse
  * @class
  */
  function RestSchedulerActionFormResponse() {
    _classCallCheck(this, RestSchedulerActionFormResponse);
  }
  /**
  * Constructs a <code>RestSchedulerActionFormResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestSchedulerActionFormResponse} obj Optional instance to populate.
  * @return {module:model/RestSchedulerActionFormResponse} The populated <code>RestSchedulerActionFormResponse</code> instance.
  */


  _createClass(RestSchedulerActionFormResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestSchedulerActionFormResponse();
      }

      return obj;
    }
  }]);

  return RestSchedulerActionFormResponse;
}();

exports["default"] = RestSchedulerActionFormResponse;
//# sourceMappingURL=RestSchedulerActionFormResponse.js.map
