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

/**
* The IdmListPolicyGroupsRequest model module.
* @module model/IdmListPolicyGroupsRequest
* @version 1.0
*/
var IdmListPolicyGroupsRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>IdmListPolicyGroupsRequest</code>.
  * @alias module:model/IdmListPolicyGroupsRequest
  * @class
  */
  function IdmListPolicyGroupsRequest() {
    _classCallCheck(this, IdmListPolicyGroupsRequest);
  }
  /**
  * Constructs a <code>IdmListPolicyGroupsRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/IdmListPolicyGroupsRequest} obj Optional instance to populate.
  * @return {module:model/IdmListPolicyGroupsRequest} The populated <code>IdmListPolicyGroupsRequest</code> instance.
  */


  _createClass(IdmListPolicyGroupsRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdmListPolicyGroupsRequest();
      }

      return obj;
    }
  }]);

  return IdmListPolicyGroupsRequest;
}();

exports["default"] = IdmListPolicyGroupsRequest;
//# sourceMappingURL=IdmListPolicyGroupsRequest.js.map
