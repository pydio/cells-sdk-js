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
* The RestDeleteNodesRequest model module.
* @module model/RestDeleteNodesRequest
* @version 1.0
*/
var RestDeleteNodesRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestDeleteNodesRequest</code>.
  * @alias module:model/RestDeleteNodesRequest
  * @class
  */
  function RestDeleteNodesRequest() {
    _classCallCheck(this, RestDeleteNodesRequest);

    _defineProperty(this, "Nodes", undefined);

    _defineProperty(this, "Recursive", undefined);
  }
  /**
  * Constructs a <code>RestDeleteNodesRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestDeleteNodesRequest} obj Optional instance to populate.
  * @return {module:model/RestDeleteNodesRequest} The populated <code>RestDeleteNodesRequest</code> instance.
  */


  _createClass(RestDeleteNodesRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestDeleteNodesRequest();

        if (data.hasOwnProperty('Nodes')) {
          obj['Nodes'] = _ApiClient["default"].convertToType(data['Nodes'], [_TreeNode["default"]]);
        }

        if (data.hasOwnProperty('Recursive')) {
          obj['Recursive'] = _ApiClient["default"].convertToType(data['Recursive'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {Array.<module:model/TreeNode>} Nodes
    */

  }]);

  return RestDeleteNodesRequest;
}();

exports["default"] = RestDeleteNodesRequest;
//# sourceMappingURL=RestDeleteNodesRequest.js.map
