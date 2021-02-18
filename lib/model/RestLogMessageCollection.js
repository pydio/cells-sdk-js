"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LogLogMessage = _interopRequireDefault(require("./LogLogMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestLogMessageCollection model module.
* @module model/RestLogMessageCollection
* @version 1.0
*/
var RestLogMessageCollection = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestLogMessageCollection</code>.
  * @alias module:model/RestLogMessageCollection
  * @class
  */
  function RestLogMessageCollection() {
    _classCallCheck(this, RestLogMessageCollection);

    _defineProperty(this, "Logs", undefined);
  }
  /**
  * Constructs a <code>RestLogMessageCollection</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestLogMessageCollection} obj Optional instance to populate.
  * @return {module:model/RestLogMessageCollection} The populated <code>RestLogMessageCollection</code> instance.
  */


  _createClass(RestLogMessageCollection, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestLogMessageCollection();

        if (data.hasOwnProperty('Logs')) {
          obj['Logs'] = _ApiClient["default"].convertToType(data['Logs'], [_LogLogMessage["default"]]);
        }
      }

      return obj;
    }
    /**
    * @member {Array.<module:model/LogLogMessage>} Logs
    */

  }]);

  return RestLogMessageCollection;
}();

exports["default"] = RestLogMessageCollection;
//# sourceMappingURL=RestLogMessageCollection.js.map
