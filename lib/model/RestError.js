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
* The RestError model module.
* @module model/RestError
* @version 1.0
*/
var RestError = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestError</code>.
  * @alias module:model/RestError
  * @class
  */
  function RestError() {
    _classCallCheck(this, RestError);

    _defineProperty(this, "Code", undefined);

    _defineProperty(this, "Title", undefined);

    _defineProperty(this, "Detail", undefined);

    _defineProperty(this, "Source", undefined);

    _defineProperty(this, "Meta", undefined);
  }
  /**
  * Constructs a <code>RestError</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestError} obj Optional instance to populate.
  * @return {module:model/RestError} The populated <code>RestError</code> instance.
  */


  _createClass(RestError, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestError();

        if (data.hasOwnProperty('Code')) {
          obj['Code'] = _ApiClient["default"].convertToType(data['Code'], 'String');
        }

        if (data.hasOwnProperty('Title')) {
          obj['Title'] = _ApiClient["default"].convertToType(data['Title'], 'String');
        }

        if (data.hasOwnProperty('Detail')) {
          obj['Detail'] = _ApiClient["default"].convertToType(data['Detail'], 'String');
        }

        if (data.hasOwnProperty('Source')) {
          obj['Source'] = _ApiClient["default"].convertToType(data['Source'], 'String');
        }

        if (data.hasOwnProperty('Meta')) {
          obj['Meta'] = _ApiClient["default"].convertToType(data['Meta'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
    /**
    * @member {String} Code
    */

  }]);

  return RestError;
}();

exports["default"] = RestError;
//# sourceMappingURL=RestError.js.map
