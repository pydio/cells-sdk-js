"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestCell = _interopRequireDefault(require("./RestCell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestPutCellRequest model module.
* @module model/RestPutCellRequest
* @version 1.0
*/
var RestPutCellRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestPutCellRequest</code>.
  * @alias module:model/RestPutCellRequest
  * @class
  */
  function RestPutCellRequest() {
    _classCallCheck(this, RestPutCellRequest);

    _defineProperty(this, "Room", undefined);

    _defineProperty(this, "CreateEmptyRoot", undefined);
  }
  /**
  * Constructs a <code>RestPutCellRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestPutCellRequest} obj Optional instance to populate.
  * @return {module:model/RestPutCellRequest} The populated <code>RestPutCellRequest</code> instance.
  */


  _createClass(RestPutCellRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestPutCellRequest();

        if (data.hasOwnProperty('Room')) {
          obj['Room'] = _RestCell["default"].constructFromObject(data['Room']);
        }

        if (data.hasOwnProperty('CreateEmptyRoot')) {
          obj['CreateEmptyRoot'] = _ApiClient["default"].convertToType(data['CreateEmptyRoot'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {module:model/RestCell} Room
    */

  }]);

  return RestPutCellRequest;
}();

exports["default"] = RestPutCellRequest;
//# sourceMappingURL=RestPutCellRequest.js.map
