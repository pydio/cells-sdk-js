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
* The RestPagination model module.
* @module model/RestPagination
* @version 1.0
*/
var RestPagination = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestPagination</code>.
  * @alias module:model/RestPagination
  * @class
  */
  function RestPagination() {
    _classCallCheck(this, RestPagination);

    _defineProperty(this, "Limit", undefined);

    _defineProperty(this, "CurrentOffset", undefined);

    _defineProperty(this, "Total", undefined);

    _defineProperty(this, "CurrentPage", undefined);

    _defineProperty(this, "TotalPages", undefined);

    _defineProperty(this, "NextOffset", undefined);

    _defineProperty(this, "PrevOffset", undefined);
  }
  /**
  * Constructs a <code>RestPagination</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestPagination} obj Optional instance to populate.
  * @return {module:model/RestPagination} The populated <code>RestPagination</code> instance.
  */


  _createClass(RestPagination, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestPagination();

        if (data.hasOwnProperty('Limit')) {
          obj['Limit'] = _ApiClient["default"].convertToType(data['Limit'], 'Number');
        }

        if (data.hasOwnProperty('CurrentOffset')) {
          obj['CurrentOffset'] = _ApiClient["default"].convertToType(data['CurrentOffset'], 'Number');
        }

        if (data.hasOwnProperty('Total')) {
          obj['Total'] = _ApiClient["default"].convertToType(data['Total'], 'Number');
        }

        if (data.hasOwnProperty('CurrentPage')) {
          obj['CurrentPage'] = _ApiClient["default"].convertToType(data['CurrentPage'], 'Number');
        }

        if (data.hasOwnProperty('TotalPages')) {
          obj['TotalPages'] = _ApiClient["default"].convertToType(data['TotalPages'], 'Number');
        }

        if (data.hasOwnProperty('NextOffset')) {
          obj['NextOffset'] = _ApiClient["default"].convertToType(data['NextOffset'], 'Number');
        }

        if (data.hasOwnProperty('PrevOffset')) {
          obj['PrevOffset'] = _ApiClient["default"].convertToType(data['PrevOffset'], 'Number');
        }
      }

      return obj;
    }
    /**
    * @member {Number} Limit
    */

  }]);

  return RestPagination;
}();

exports["default"] = RestPagination;
//# sourceMappingURL=RestPagination.js.map
