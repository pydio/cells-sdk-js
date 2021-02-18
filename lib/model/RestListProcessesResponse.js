"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestProcess = _interopRequireDefault(require("./RestProcess"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestListProcessesResponse model module.
* @module model/RestListProcessesResponse
* @version 1.0
*/
var RestListProcessesResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestListProcessesResponse</code>.
  * @alias module:model/RestListProcessesResponse
  * @class
  */
  function RestListProcessesResponse() {
    _classCallCheck(this, RestListProcessesResponse);

    _defineProperty(this, "Processes", undefined);
  }
  /**
  * Constructs a <code>RestListProcessesResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestListProcessesResponse} obj Optional instance to populate.
  * @return {module:model/RestListProcessesResponse} The populated <code>RestListProcessesResponse</code> instance.
  */


  _createClass(RestListProcessesResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestListProcessesResponse();

        if (data.hasOwnProperty('Processes')) {
          obj['Processes'] = _ApiClient["default"].convertToType(data['Processes'], [_RestProcess["default"]]);
        }
      }

      return obj;
    }
    /**
    * @member {Array.<module:model/RestProcess>} Processes
    */

  }]);

  return RestListProcessesResponse;
}();

exports["default"] = RestListProcessesResponse;
//# sourceMappingURL=RestListProcessesResponse.js.map
