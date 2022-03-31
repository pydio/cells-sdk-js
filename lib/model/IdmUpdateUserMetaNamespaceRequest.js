"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdmUserMetaNamespace = _interopRequireDefault(require("./IdmUserMetaNamespace"));

var _UpdateUserMetaNamespaceRequestUserMetaNsOp = _interopRequireDefault(require("./UpdateUserMetaNamespaceRequestUserMetaNsOp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IdmUpdateUserMetaNamespaceRequest model module.
 * @module model/IdmUpdateUserMetaNamespaceRequest
 * @version 4.0
 */
var IdmUpdateUserMetaNamespaceRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IdmUpdateUserMetaNamespaceRequest</code>.
   * @alias module:model/IdmUpdateUserMetaNamespaceRequest
   */
  function IdmUpdateUserMetaNamespaceRequest() {
    _classCallCheck(this, IdmUpdateUserMetaNamespaceRequest);

    IdmUpdateUserMetaNamespaceRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IdmUpdateUserMetaNamespaceRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IdmUpdateUserMetaNamespaceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdmUpdateUserMetaNamespaceRequest} obj Optional instance to populate.
     * @return {module:model/IdmUpdateUserMetaNamespaceRequest} The populated <code>IdmUpdateUserMetaNamespaceRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmUpdateUserMetaNamespaceRequest();

        if (data.hasOwnProperty('Namespaces')) {
          obj['Namespaces'] = _ApiClient["default"].convertToType(data['Namespaces'], [_IdmUserMetaNamespace["default"]]);
        }

        if (data.hasOwnProperty('Operation')) {
          obj['Operation'] = _UpdateUserMetaNamespaceRequestUserMetaNsOp["default"].constructFromObject(data['Operation']);
        }
      }

      return obj;
    }
  }]);

  return IdmUpdateUserMetaNamespaceRequest;
}();
/**
 * @member {Array.<module:model/IdmUserMetaNamespace>} Namespaces
 */


IdmUpdateUserMetaNamespaceRequest.prototype['Namespaces'] = undefined;
/**
 * @member {module:model/UpdateUserMetaNamespaceRequestUserMetaNsOp} Operation
 */

IdmUpdateUserMetaNamespaceRequest.prototype['Operation'] = undefined;
var _default = IdmUpdateUserMetaNamespaceRequest;
exports["default"] = _default;
//# sourceMappingURL=IdmUpdateUserMetaNamespaceRequest.js.map
