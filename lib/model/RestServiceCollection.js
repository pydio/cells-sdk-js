"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CtlService = _interopRequireDefault(require("./CtlService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestServiceCollection model module.
* @module model/RestServiceCollection
* @version 1.0
*/
var RestServiceCollection = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestServiceCollection</code>.
  * @alias module:model/RestServiceCollection
  * @class
  */
  function RestServiceCollection() {
    _classCallCheck(this, RestServiceCollection);

    _defineProperty(this, "Services", undefined);

    _defineProperty(this, "Total", undefined);
  }
  /**
  * Constructs a <code>RestServiceCollection</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestServiceCollection} obj Optional instance to populate.
  * @return {module:model/RestServiceCollection} The populated <code>RestServiceCollection</code> instance.
  */


  _createClass(RestServiceCollection, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestServiceCollection();

        if (data.hasOwnProperty('Services')) {
          obj['Services'] = _ApiClient["default"].convertToType(data['Services'], [_CtlService["default"]]);
        }

        if (data.hasOwnProperty('Total')) {
          obj['Total'] = _ApiClient["default"].convertToType(data['Total'], 'Number');
        }
      }

      return obj;
    }
    /**
    * @member {Array.<module:model/CtlService>} Services
    */

  }]);

  return RestServiceCollection;
}();

exports["default"] = RestServiceCollection;
//# sourceMappingURL=RestServiceCollection.js.map
