"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServiceResourcePolicyQuery = _interopRequireDefault(require("./ServiceResourcePolicyQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IdmSearchUserMetaRequest model module.
 * @module model/IdmSearchUserMetaRequest
 * @version 4.0
 */
var IdmSearchUserMetaRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IdmSearchUserMetaRequest</code>.
   * @alias module:model/IdmSearchUserMetaRequest
   */
  function IdmSearchUserMetaRequest() {
    _classCallCheck(this, IdmSearchUserMetaRequest);

    IdmSearchUserMetaRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IdmSearchUserMetaRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IdmSearchUserMetaRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdmSearchUserMetaRequest} obj Optional instance to populate.
     * @return {module:model/IdmSearchUserMetaRequest} The populated <code>IdmSearchUserMetaRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmSearchUserMetaRequest();

        if (data.hasOwnProperty('MetaUuids')) {
          obj['MetaUuids'] = _ApiClient["default"].convertToType(data['MetaUuids'], ['String']);
        }

        if (data.hasOwnProperty('Namespace')) {
          obj['Namespace'] = _ApiClient["default"].convertToType(data['Namespace'], 'String');
        }

        if (data.hasOwnProperty('NodeUuids')) {
          obj['NodeUuids'] = _ApiClient["default"].convertToType(data['NodeUuids'], ['String']);
        }

        if (data.hasOwnProperty('ResourceQuery')) {
          obj['ResourceQuery'] = _ServiceResourcePolicyQuery["default"].constructFromObject(data['ResourceQuery']);
        }

        if (data.hasOwnProperty('ResourceSubjectOwner')) {
          obj['ResourceSubjectOwner'] = _ApiClient["default"].convertToType(data['ResourceSubjectOwner'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IdmSearchUserMetaRequest;
}();
/**
 * @member {Array.<String>} MetaUuids
 */


IdmSearchUserMetaRequest.prototype['MetaUuids'] = undefined;
/**
 * @member {String} Namespace
 */

IdmSearchUserMetaRequest.prototype['Namespace'] = undefined;
/**
 * @member {Array.<String>} NodeUuids
 */

IdmSearchUserMetaRequest.prototype['NodeUuids'] = undefined;
/**
 * @member {module:model/ServiceResourcePolicyQuery} ResourceQuery
 */

IdmSearchUserMetaRequest.prototype['ResourceQuery'] = undefined;
/**
 * @member {String} ResourceSubjectOwner
 */

IdmSearchUserMetaRequest.prototype['ResourceSubjectOwner'] = undefined;
var _default = IdmSearchUserMetaRequest;
exports["default"] = _default;
//# sourceMappingURL=IdmSearchUserMetaRequest.js.map
