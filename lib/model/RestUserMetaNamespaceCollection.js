"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmUserMetaNamespace = _interopRequireDefault(require("./IdmUserMetaNamespace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestUserMetaNamespaceCollection model module.
* @module model/RestUserMetaNamespaceCollection
* @version 1.0
*/
var RestUserMetaNamespaceCollection = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestUserMetaNamespaceCollection</code>.
  * @alias module:model/RestUserMetaNamespaceCollection
  * @class
  */
  function RestUserMetaNamespaceCollection() {
    _classCallCheck(this, RestUserMetaNamespaceCollection);

    _defineProperty(this, "Namespaces", undefined);
  }
  /**
  * Constructs a <code>RestUserMetaNamespaceCollection</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestUserMetaNamespaceCollection} obj Optional instance to populate.
  * @return {module:model/RestUserMetaNamespaceCollection} The populated <code>RestUserMetaNamespaceCollection</code> instance.
  */


  _createClass(RestUserMetaNamespaceCollection, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestUserMetaNamespaceCollection();

        if (data.hasOwnProperty('Namespaces')) {
          obj['Namespaces'] = _ApiClient["default"].convertToType(data['Namespaces'], [_IdmUserMetaNamespace["default"]]);
        }
      }

      return obj;
    }
    /**
    * @member {Array.<module:model/IdmUserMetaNamespace>} Namespaces
    */

  }]);

  return RestUserMetaNamespaceCollection;
}();

exports["default"] = RestUserMetaNamespaceCollection;
//# sourceMappingURL=RestUserMetaNamespaceCollection.js.map
