"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ListLogRequestLogFormat = _interopRequireDefault(require("./ListLogRequestLogFormat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The LogListLogRequest model module.
* @module model/LogListLogRequest
* @version 1.0
*/
var LogListLogRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>LogListLogRequest</code>.
  * ListLogRequest launches a parameterised query in the log repository and streams the results.
  * @alias module:model/LogListLogRequest
  * @class
  */
  function LogListLogRequest() {
    _classCallCheck(this, LogListLogRequest);

    _defineProperty(this, "Query", undefined);

    _defineProperty(this, "Page", undefined);

    _defineProperty(this, "Size", undefined);

    _defineProperty(this, "Format", undefined);
  }
  /**
  * Constructs a <code>LogListLogRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/LogListLogRequest} obj Optional instance to populate.
  * @return {module:model/LogListLogRequest} The populated <code>LogListLogRequest</code> instance.
  */


  _createClass(LogListLogRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LogListLogRequest();

        if (data.hasOwnProperty('Query')) {
          obj['Query'] = _ApiClient["default"].convertToType(data['Query'], 'String');
        }

        if (data.hasOwnProperty('Page')) {
          obj['Page'] = _ApiClient["default"].convertToType(data['Page'], 'Number');
        }

        if (data.hasOwnProperty('Size')) {
          obj['Size'] = _ApiClient["default"].convertToType(data['Size'], 'Number');
        }

        if (data.hasOwnProperty('Format')) {
          obj['Format'] = _ListLogRequestLogFormat["default"].constructFromObject(data['Format']);
        }
      }

      return obj;
    }
    /**
    * @member {String} Query
    */

  }]);

  return LogListLogRequest;
}();

exports["default"] = LogListLogRequest;
//# sourceMappingURL=LogListLogRequest.js.map
