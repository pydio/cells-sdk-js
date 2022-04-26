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
* Enum class RegistryActionType.
* @enum {}
* @readonly
*/
var RegistryActionType = /*#__PURE__*/function () {
  function RegistryActionType() {
    _classCallCheck(this, RegistryActionType);

    _defineProperty(this, "ANY", "ANY");

    _defineProperty(this, "FULL_DIFF", "FULL_DIFF");

    _defineProperty(this, "FULL_LIST", "FULL_LIST");

    _defineProperty(this, "CREATE", "CREATE");

    _defineProperty(this, "UPDATE", "UPDATE");

    _defineProperty(this, "DELETE", "DELETE");
  }

  _createClass(RegistryActionType, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>RegistryActionType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/RegistryActionType} The enum <code>RegistryActionType</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);

  return RegistryActionType;
}();

exports["default"] = RegistryActionType;
//# sourceMappingURL=RegistryActionType.js.map
