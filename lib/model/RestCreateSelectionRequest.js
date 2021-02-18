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
* The RestCreateSelectionRequest model module.
* @module model/RestCreateSelectionRequest
* @version 1.0
*/
var RestCreateSelectionRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestCreateSelectionRequest</code>.
  * @alias module:model/RestCreateSelectionRequest
  * @class
  */
  function RestCreateSelectionRequest() {
    _classCallCheck(this, RestCreateSelectionRequest);

    _defineProperty(this, "Nodes", undefined);

    _defineProperty(this, "TargetAction", undefined);

    _defineProperty(this, "Persist", undefined);
  }
  /**
  * Constructs a <code>RestCreateSelectionRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestCreateSelectionRequest} obj Optional instance to populate.
  * @return {module:model/RestCreateSelectionRequest} The populated <code>RestCreateSelectionRequest</code> instance.
  */


  _createClass(RestCreateSelectionRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestCreateSelectionRequest();

        if (data.hasOwnProperty('Nodes')) {
          obj['Nodes'] = _ApiClient["default"].convertToType(data['Nodes'], [_TreeNode["default"]]);
        }

        if (data.hasOwnProperty('TargetAction')) {
          obj['TargetAction'] = _ApiClient["default"].convertToType(data['TargetAction'], 'String');
        }

        if (data.hasOwnProperty('Persist')) {
          obj['Persist'] = _ApiClient["default"].convertToType(data['Persist'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {Array.<module:model/TreeNode>} Nodes
    */

  }]);

  return RestCreateSelectionRequest;
}();

exports["default"] = RestCreateSelectionRequest;
//# sourceMappingURL=RestCreateSelectionRequest.js.map
