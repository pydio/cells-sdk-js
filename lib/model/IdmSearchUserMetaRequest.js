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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The IdmSearchUserMetaRequest model module.
* @module model/IdmSearchUserMetaRequest
* @version 1.0
*/
var IdmSearchUserMetaRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>IdmSearchUserMetaRequest</code>.
  * @alias module:model/IdmSearchUserMetaRequest
  * @class
  */
  function IdmSearchUserMetaRequest() {
    _classCallCheck(this, IdmSearchUserMetaRequest);

    _defineProperty(this, "MetaUuids", undefined);

    _defineProperty(this, "NodeUuids", undefined);

    _defineProperty(this, "Namespace", undefined);

    _defineProperty(this, "ResourceSubjectOwner", undefined);

    _defineProperty(this, "ResourceQuery", undefined);
  }
  /**
  * Constructs a <code>IdmSearchUserMetaRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/IdmSearchUserMetaRequest} obj Optional instance to populate.
  * @return {module:model/IdmSearchUserMetaRequest} The populated <code>IdmSearchUserMetaRequest</code> instance.
  */


  _createClass(IdmSearchUserMetaRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmSearchUserMetaRequest();

        if (data.hasOwnProperty('MetaUuids')) {
          obj['MetaUuids'] = _ApiClient["default"].convertToType(data['MetaUuids'], ['String']);
        }

        if (data.hasOwnProperty('NodeUuids')) {
          obj['NodeUuids'] = _ApiClient["default"].convertToType(data['NodeUuids'], ['String']);
        }

        if (data.hasOwnProperty('Namespace')) {
          obj['Namespace'] = _ApiClient["default"].convertToType(data['Namespace'], 'String');
        }

        if (data.hasOwnProperty('ResourceSubjectOwner')) {
          obj['ResourceSubjectOwner'] = _ApiClient["default"].convertToType(data['ResourceSubjectOwner'], 'String');
        }

        if (data.hasOwnProperty('ResourceQuery')) {
          obj['ResourceQuery'] = _ServiceResourcePolicyQuery["default"].constructFromObject(data['ResourceQuery']);
        }
      }

      return obj;
    }
    /**
    * @member {Array.<String>} MetaUuids
    */

  }]);

  return IdmSearchUserMetaRequest;
}();

exports["default"] = IdmSearchUserMetaRequest;
//# sourceMappingURL=IdmSearchUserMetaRequest.js.map
