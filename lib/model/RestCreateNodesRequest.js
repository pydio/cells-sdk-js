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

/**
 * The RestCreateNodesRequest model module.
 * @module model/RestCreateNodesRequest
 * @version 4.0
 */
var RestCreateNodesRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestCreateNodesRequest</code>.
   * @alias module:model/RestCreateNodesRequest
   */
  function RestCreateNodesRequest() {
    _classCallCheck(this, RestCreateNodesRequest);

    RestCreateNodesRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestCreateNodesRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestCreateNodesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestCreateNodesRequest} obj Optional instance to populate.
     * @return {module:model/RestCreateNodesRequest} The populated <code>RestCreateNodesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestCreateNodesRequest();

        if (data.hasOwnProperty('Nodes')) {
          obj['Nodes'] = _ApiClient["default"].convertToType(data['Nodes'], [_TreeNode["default"]]);
        }

        if (data.hasOwnProperty('Recursive')) {
          obj['Recursive'] = _ApiClient["default"].convertToType(data['Recursive'], 'Boolean');
        }

        if (data.hasOwnProperty('TemplateUUID')) {
          obj['TemplateUUID'] = _ApiClient["default"].convertToType(data['TemplateUUID'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RestCreateNodesRequest;
}();
/**
 * @member {Array.<module:model/TreeNode>} Nodes
 */


RestCreateNodesRequest.prototype['Nodes'] = undefined;
/**
 * @member {Boolean} Recursive
 */

RestCreateNodesRequest.prototype['Recursive'] = undefined;
/**
 * @member {String} TemplateUUID
 */

RestCreateNodesRequest.prototype['TemplateUUID'] = undefined;
var _default = RestCreateNodesRequest;
exports["default"] = _default;
//# sourceMappingURL=RestCreateNodesRequest.js.map
