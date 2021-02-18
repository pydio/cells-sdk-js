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
* The RestUserBookmarksRequest model module.
* @module model/RestUserBookmarksRequest
* @version 1.0
*/
var RestUserBookmarksRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestUserBookmarksRequest</code>.
  * @alias module:model/RestUserBookmarksRequest
  * @class
  */
  function RestUserBookmarksRequest() {
    _classCallCheck(this, RestUserBookmarksRequest);
  }
  /**
  * Constructs a <code>RestUserBookmarksRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestUserBookmarksRequest} obj Optional instance to populate.
  * @return {module:model/RestUserBookmarksRequest} The populated <code>RestUserBookmarksRequest</code> instance.
  */


  _createClass(RestUserBookmarksRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestUserBookmarksRequest();
      }

      return obj;
    }
  }]);

  return RestUserBookmarksRequest;
}();

exports["default"] = RestUserBookmarksRequest;
//# sourceMappingURL=RestUserBookmarksRequest.js.map
