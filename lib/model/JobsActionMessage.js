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

/**
 * The JobsActionMessage model module.
 * @module model/JobsActionMessage
 * @version 4.0
 */
var JobsActionMessage = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobsActionMessage</code>.
   * @alias module:model/JobsActionMessage
   */
  function JobsActionMessage() {
    _classCallCheck(this, JobsActionMessage);

    JobsActionMessage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobsActionMessage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JobsActionMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsActionMessage} obj Optional instance to populate.
     * @return {module:model/JobsActionMessage} The populated <code>JobsActionMessage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsActionMessage();

        if (data.hasOwnProperty('Acls')) {
          obj['Acls'] = _ApiClient["default"].convertToType(data['Acls'], [_IdmACL["default"]]);
        }

        if (data.hasOwnProperty('Activities')) {
          obj['Activities'] = _ApiClient["default"].convertToType(data['Activities'], [_ActivityObject["default"]]);
        }

        if (data.hasOwnProperty('DataSources')) {
          obj['DataSources'] = _ApiClient["default"].convertToType(data['DataSources'], [_ObjectDataSource["default"]]);
        }

        if (data.hasOwnProperty('Event')) {
          obj['Event'] = _ProtobufAny["default"].constructFromObject(data['Event']);
        }

        if (data.hasOwnProperty('Nodes')) {
          obj['Nodes'] = _ApiClient["default"].convertToType(data['Nodes'], [_TreeNode["default"]]);
        }

        if (data.hasOwnProperty('OutputChain')) {
          obj['OutputChain'] = _ApiClient["default"].convertToType(data['OutputChain'], [_JobsActionOutput["default"]]);
        }

        if (data.hasOwnProperty('Roles')) {
          obj['Roles'] = _ApiClient["default"].convertToType(data['Roles'], [_IdmRole["default"]]);
        }

        if (data.hasOwnProperty('Users')) {
          obj['Users'] = _ApiClient["default"].convertToType(data['Users'], [_IdmUser["default"]]);
        }

        if (data.hasOwnProperty('Workspaces')) {
          obj['Workspaces'] = _ApiClient["default"].convertToType(data['Workspaces'], [_IdmWorkspace["default"]]);
        }
      }

      return obj;
    }
  }]);

  return JobsActionMessage;
}();
/**
 * @member {Array.<module:model/IdmACL>} Acls
 */


JobsActionMessage.prototype['Acls'] = undefined;
/**
 * @member {Array.<module:model/ActivityObject>} Activities
 */

JobsActionMessage.prototype['Activities'] = undefined;
/**
 * @member {Array.<module:model/ObjectDataSource>} DataSources
 */

JobsActionMessage.prototype['DataSources'] = undefined;
/**
 * @member {module:model/ProtobufAny} Event
 */

JobsActionMessage.prototype['Event'] = undefined;
/**
 * @member {Array.<module:model/TreeNode>} Nodes
 */

JobsActionMessage.prototype['Nodes'] = undefined;
/**
 * @member {Array.<module:model/JobsActionOutput>} OutputChain
 */

JobsActionMessage.prototype['OutputChain'] = undefined;
/**
 * @member {Array.<module:model/IdmRole>} Roles
 */

JobsActionMessage.prototype['Roles'] = undefined;
/**
 * @member {Array.<module:model/IdmUser>} Users
 */

JobsActionMessage.prototype['Users'] = undefined;
/**
 * @member {Array.<module:model/IdmWorkspace>} Workspaces
 */

JobsActionMessage.prototype['Workspaces'] = undefined;
var _default = JobsActionMessage;
exports["default"] = _default;
//# sourceMappingURL=JobsActionMessage.js.map
