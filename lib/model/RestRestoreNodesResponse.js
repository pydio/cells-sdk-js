"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestBackgroundJobResult = _interopRequireDefault(require("./RestBackgroundJobResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestRestoreNodesResponse model module.
* @module model/RestRestoreNodesResponse
* @version 1.0
*/
var RestRestoreNodesResponse = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestRestoreNodesResponse</code>.
  * @alias module:model/RestRestoreNodesResponse
  * @class
  */
  function RestRestoreNodesResponse() {
    _classCallCheck(this, RestRestoreNodesResponse);

    _defineProperty(this, "RestoreJobs", undefined);
  }
  /**
  * Constructs a <code>RestRestoreNodesResponse</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestRestoreNodesResponse} obj Optional instance to populate.
  * @return {module:model/RestRestoreNodesResponse} The populated <code>RestRestoreNodesResponse</code> instance.
  */


  _createClass(RestRestoreNodesResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestRestoreNodesResponse();

        if (data.hasOwnProperty('RestoreJobs')) {
          obj['RestoreJobs'] = _ApiClient["default"].convertToType(data['RestoreJobs'], [_RestBackgroundJobResult["default"]]);
        }
      }

      return obj;
    }
    /**
    * @member {Array.<module:model/RestBackgroundJobResult>} RestoreJobs
    */

  }]);

  return RestRestoreNodesResponse;
}();

exports["default"] = RestRestoreNodesResponse;
//# sourceMappingURL=RestRestoreNodesResponse.js.map
