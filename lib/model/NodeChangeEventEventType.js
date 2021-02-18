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
* Enum class NodeChangeEventEventType.
* @enum {}
* @readonly
*/
var NodeChangeEventEventType = /*#__PURE__*/function () {
  function NodeChangeEventEventType() {
    _classCallCheck(this, NodeChangeEventEventType);

    _defineProperty(this, "CREATE", "CREATE");

    _defineProperty(this, "READ", "READ");

    _defineProperty(this, "UPDATE_PATH", "UPDATE_PATH");

    _defineProperty(this, "UPDATE_CONTENT", "UPDATE_CONTENT");

    _defineProperty(this, "UPDATE_META", "UPDATE_META");

    _defineProperty(this, "UPDATE_USER_META", "UPDATE_USER_META");

    _defineProperty(this, "DELETE", "DELETE");
  }

  _createClass(NodeChangeEventEventType, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>NodeChangeEventEventType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/NodeChangeEventEventType} The enum <code>NodeChangeEventEventType</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);

  return NodeChangeEventEventType;
}();

exports["default"] = NodeChangeEventEventType;
//# sourceMappingURL=NodeChangeEventEventType.js.map
