"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestCell = _interopRequireDefault(require("./RestCell"));

var _RestShareLink = _interopRequireDefault(require("./RestShareLink"));

var _TreeNode = _interopRequireDefault(require("./TreeNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The ListSharedResourcesResponseSharedResource model module.
* @module model/ListSharedResourcesResponseSharedResource
* @version 1.0
*/
var ListSharedResourcesResponseSharedResource = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>ListSharedResourcesResponseSharedResource</code>.
  * @alias module:model/ListSharedResourcesResponseSharedResource
  * @class
  */
  function ListSharedResourcesResponseSharedResource() {
    _classCallCheck(this, ListSharedResourcesResponseSharedResource);

    _defineProperty(this, "Node", undefined);

    _defineProperty(this, "Link", undefined);

    _defineProperty(this, "Cells", undefined);
  }
  /**
  * Constructs a <code>ListSharedResourcesResponseSharedResource</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/ListSharedResourcesResponseSharedResource} obj Optional instance to populate.
  * @return {module:model/ListSharedResourcesResponseSharedResource} The populated <code>ListSharedResourcesResponseSharedResource</code> instance.
  */


  _createClass(ListSharedResourcesResponseSharedResource, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListSharedResourcesResponseSharedResource();

        if (data.hasOwnProperty('Node')) {
          obj['Node'] = _TreeNode["default"].constructFromObject(data['Node']);
        }

        if (data.hasOwnProperty('Link')) {
          obj['Link'] = _RestShareLink["default"].constructFromObject(data['Link']);
        }

        if (data.hasOwnProperty('Cells')) {
          obj['Cells'] = _ApiClient["default"].convertToType(data['Cells'], [_RestCell["default"]]);
        }
      }

      return obj;
    }
    /**
    * @member {module:model/TreeNode} Node
    */

  }]);

  return ListSharedResourcesResponseSharedResource;
}();

exports["default"] = ListSharedResourcesResponseSharedResource;
//# sourceMappingURL=ListSharedResourcesResponseSharedResource.js.map
