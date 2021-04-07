"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActivityObject = _interopRequireDefault(require("./ActivityObject"));

var _IdmACL = _interopRequireDefault(require("./IdmACL"));

var _IdmRole = _interopRequireDefault(require("./IdmRole"));

var _IdmUser = _interopRequireDefault(require("./IdmUser"));

var _IdmWorkspace = _interopRequireDefault(require("./IdmWorkspace"));

var _JobsActionOutput = _interopRequireDefault(require("./JobsActionOutput"));

var _ObjectDataSource = _interopRequireDefault(require("./ObjectDataSource"));

var _ProtobufAny = _interopRequireDefault(require("./ProtobufAny"));

var _TreeNode = _interopRequireDefault(require("./TreeNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The JobsActionMessage model module.
* @module model/JobsActionMessage
* @version 1.0
*/
var JobsActionMessage = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>JobsActionMessage</code>.
  * @alias module:model/JobsActionMessage
  * @class
  */
  function JobsActionMessage() {
    _classCallCheck(this, JobsActionMessage);

    _defineProperty(this, "Event", undefined);

    _defineProperty(this, "Nodes", undefined);

    _defineProperty(this, "Users", undefined);

    _defineProperty(this, "Roles", undefined);

    _defineProperty(this, "Workspaces", undefined);

    _defineProperty(this, "Acls", undefined);

    _defineProperty(this, "Activities", undefined);

    _defineProperty(this, "DataSources", undefined);

    _defineProperty(this, "OutputChain", undefined);
  }
  /**
  * Constructs a <code>JobsActionMessage</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/JobsActionMessage} obj Optional instance to populate.
  * @return {module:model/JobsActionMessage} The populated <code>JobsActionMessage</code> instance.
  */


  _createClass(JobsActionMessage, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsActionMessage();

        if (data.hasOwnProperty('Event')) {
          obj['Event'] = _ProtobufAny["default"].constructFromObject(data['Event']);
        }

        if (data.hasOwnProperty('Nodes')) {
          obj['Nodes'] = _ApiClient["default"].convertToType(data['Nodes'], [_TreeNode["default"]]);
        }

        if (data.hasOwnProperty('Users')) {
          obj['Users'] = _ApiClient["default"].convertToType(data['Users'], [_IdmUser["default"]]);
        }

        if (data.hasOwnProperty('Roles')) {
          obj['Roles'] = _ApiClient["default"].convertToType(data['Roles'], [_IdmRole["default"]]);
        }

        if (data.hasOwnProperty('Workspaces')) {
          obj['Workspaces'] = _ApiClient["default"].convertToType(data['Workspaces'], [_IdmWorkspace["default"]]);
        }

        if (data.hasOwnProperty('Acls')) {
          obj['Acls'] = _ApiClient["default"].convertToType(data['Acls'], [_IdmACL["default"]]);
        }

        if (data.hasOwnProperty('Activities')) {
          obj['Activities'] = _ApiClient["default"].convertToType(data['Activities'], [_ActivityObject["default"]]);
        }

        if (data.hasOwnProperty('DataSources')) {
          obj['DataSources'] = _ApiClient["default"].convertToType(data['DataSources'], [_ObjectDataSource["default"]]);
        }

        if (data.hasOwnProperty('OutputChain')) {
          obj['OutputChain'] = _ApiClient["default"].convertToType(data['OutputChain'], [_JobsActionOutput["default"]]);
        }
      }

      return obj;
    }
    /**
    * @member {module:model/ProtobufAny} Event
    */

  }]);

  return JobsActionMessage;
}();

exports["default"] = JobsActionMessage;
//# sourceMappingURL=JobsActionMessage.js.map
