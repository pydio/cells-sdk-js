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
* The RestTemplateNode model module.
* @module model/RestTemplateNode
* @version 1.0
*/
var RestTemplateNode = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestTemplateNode</code>.
  * @alias module:model/RestTemplateNode
  * @class
  */
  function RestTemplateNode() {
    _classCallCheck(this, RestTemplateNode);

    _defineProperty(this, "IsFile", undefined);

    _defineProperty(this, "BinaryUUUID", undefined);

    _defineProperty(this, "EmbedPath", undefined);

    _defineProperty(this, "Children", undefined);
  }
  /**
  * Constructs a <code>RestTemplateNode</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestTemplateNode} obj Optional instance to populate.
  * @return {module:model/RestTemplateNode} The populated <code>RestTemplateNode</code> instance.
  */


  _createClass(RestTemplateNode, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestTemplateNode();

        if (data.hasOwnProperty('IsFile')) {
          obj['IsFile'] = _ApiClient["default"].convertToType(data['IsFile'], 'Boolean');
        }

        if (data.hasOwnProperty('BinaryUUUID')) {
          obj['BinaryUUUID'] = _ApiClient["default"].convertToType(data['BinaryUUUID'], 'String');
        }

        if (data.hasOwnProperty('EmbedPath')) {
          obj['EmbedPath'] = _ApiClient["default"].convertToType(data['EmbedPath'], 'String');
        }

        if (data.hasOwnProperty('Children')) {
          obj['Children'] = _ApiClient["default"].convertToType(data['Children'], [RestTemplateNode]);
        }
      }

      return obj;
    }
    /**
    * @member {Boolean} IsFile
    */

  }]);

  return RestTemplateNode;
}();

exports["default"] = RestTemplateNode;
//# sourceMappingURL=RestTemplateNode.js.map
