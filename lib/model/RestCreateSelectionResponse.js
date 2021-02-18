"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TreeNode = _interopRequireDefault(require("./TreeNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestCreateSelectionResponse model module.
* @module model/RestCreateSelectionResponse
* @version 1.0
*/
var RestCreateSelectionResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestCreateSelectionResponse</code>.
  * @alias module:model/RestCreateSelectionResponse
  * @class
  */
  function RestCreateSelectionResponse() {
    _classCallCheck(this, RestCreateSelectionResponse);

    _defineProperty(this, "SelectionUUID", undefined);

    _defineProperty(this, "Nodes", undefined);
  }
  /**
  * Constructs a <code>RestCreateSelectionResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestCreateSelectionResponse} obj Optional instance to populate.
  * @return {module:model/RestCreateSelectionResponse} The populated <code>RestCreateSelectionResponse</code> instance.
  */


  _createClass(RestCreateSelectionResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestCreateSelectionResponse();

        if (data.hasOwnProperty('SelectionUUID')) {
          obj['SelectionUUID'] = _ApiClient["default"].convertToType(data['SelectionUUID'], 'String');
        }

        if (data.hasOwnProperty('Nodes')) {
          obj['Nodes'] = _ApiClient["default"].convertToType(data['Nodes'], [_TreeNode["default"]]);
        }
      }

      return obj;
    }
    /**
    * @member {String} SelectionUUID
    */

  }]);

  return RestCreateSelectionResponse;
}();

exports["default"] = RestCreateSelectionResponse;
//# sourceMappingURL=RestCreateSelectionResponse.js.map
