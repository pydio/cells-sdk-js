"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JobsActionOutputFilter = _interopRequireDefault(require("./JobsActionOutputFilter"));

var _JobsChatEventFilter = _interopRequireDefault(require("./JobsChatEventFilter"));

var _JobsContextMetaFilter = _interopRequireDefault(require("./JobsContextMetaFilter"));

var _JobsDataSelector = _interopRequireDefault(require("./JobsDataSelector"));

var _JobsDataSourceSelector = _interopRequireDefault(require("./JobsDataSourceSelector"));

var _JobsIdmSelector = _interopRequireDefault(require("./JobsIdmSelector"));

var _JobsNodesSelector = _interopRequireDefault(require("./JobsNodesSelector"));

var _JobsTriggerFilter = _interopRequireDefault(require("./JobsTriggerFilter"));

var _JobsUsersSelector = _interopRequireDefault(require("./JobsUsersSelector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JobsAction model module.
 * @module model/JobsAction
 * @version 4.0
 */
var JobsAction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JobsAction</code>.
   * @alias module:model/JobsAction
   */
  function JobsAction() {
    _classCallCheck(this, JobsAction);

    JobsAction.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JobsAction, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JobsAction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsAction} obj Optional instance to populate.
     * @return {module:model/JobsAction} The populated <code>JobsAction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsAction();

        if (data.hasOwnProperty('ActionOutputFilter')) {
          obj['ActionOutputFilter'] = _JobsActionOutputFilter["default"].constructFromObject(data['ActionOutputFilter']);
        }

        if (data.hasOwnProperty('BreakAfter')) {
          obj['BreakAfter'] = _ApiClient["default"].convertToType(data['BreakAfter'], 'Boolean');
        }

        if (data.hasOwnProperty('Bypass')) {
          obj['Bypass'] = _ApiClient["default"].convertToType(data['Bypass'], 'Boolean');
        }

        if (data.hasOwnProperty('ChainedActions')) {
          obj['ChainedActions'] = _ApiClient["default"].convertToType(data['ChainedActions'], [JobsAction]);
        }

        if (data.hasOwnProperty('ChatEventFilter')) {
          obj['ChatEventFilter'] = _JobsChatEventFilter["default"].constructFromObject(data['ChatEventFilter']);
        }

        if (data.hasOwnProperty('ContextMetaFilter')) {
          obj['ContextMetaFilter'] = _JobsContextMetaFilter["default"].constructFromObject(data['ContextMetaFilter']);
        }

        if (data.hasOwnProperty('DataFilter')) {
          obj['DataFilter'] = _JobsDataSelector["default"].constructFromObject(data['DataFilter']);
        }

        if (data.hasOwnProperty('DataSelector')) {
          obj['DataSelector'] = _JobsDataSelector["default"].constructFromObject(data['DataSelector']);
        }

        if (data.hasOwnProperty('DataSourceFilter')) {
          obj['DataSourceFilter'] = _JobsDataSourceSelector["default"].constructFromObject(data['DataSourceFilter']);
        }

        if (data.hasOwnProperty('DataSourceSelector')) {
          obj['DataSourceSelector'] = _JobsDataSourceSelector["default"].constructFromObject(data['DataSourceSelector']);
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('FailedFilterActions')) {
          obj['FailedFilterActions'] = _ApiClient["default"].convertToType(data['FailedFilterActions'], [JobsAction]);
        }

        if (data.hasOwnProperty('ID')) {
          obj['ID'] = _ApiClient["default"].convertToType(data['ID'], 'String');
        }

        if (data.hasOwnProperty('IdmFilter')) {
          obj['IdmFilter'] = _JobsIdmSelector["default"].constructFromObject(data['IdmFilter']);
        }

        if (data.hasOwnProperty('IdmSelector')) {
          obj['IdmSelector'] = _JobsIdmSelector["default"].constructFromObject(data['IdmSelector']);
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('MergeAction')) {
          obj['MergeAction'] = JobsAction.constructFromObject(data['MergeAction']);
        }

        if (data.hasOwnProperty('NodesFilter')) {
          obj['NodesFilter'] = _JobsNodesSelector["default"].constructFromObject(data['NodesFilter']);
        }

        if (data.hasOwnProperty('NodesSelector')) {
          obj['NodesSelector'] = _JobsNodesSelector["default"].constructFromObject(data['NodesSelector']);
        }

        if (data.hasOwnProperty('Parameters')) {
          obj['Parameters'] = _ApiClient["default"].convertToType(data['Parameters'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Timeout')) {
          obj['Timeout'] = _ApiClient["default"].convertToType(data['Timeout'], 'String');
        }

        if (data.hasOwnProperty('TriggerFilter')) {
          obj['TriggerFilter'] = _JobsTriggerFilter["default"].constructFromObject(data['TriggerFilter']);
        }

        if (data.hasOwnProperty('UsersFilter')) {
          obj['UsersFilter'] = _JobsUsersSelector["default"].constructFromObject(data['UsersFilter']);
        }

        if (data.hasOwnProperty('UsersSelector')) {
          obj['UsersSelector'] = _JobsUsersSelector["default"].constructFromObject(data['UsersSelector']);
        }
      }

      return obj;
    }
  }]);

  return JobsAction;
}();
/**
 * @member {module:model/JobsActionOutputFilter} ActionOutputFilter
 */


JobsAction.prototype['ActionOutputFilter'] = undefined;
/**
 * @member {Boolean} BreakAfter
 */

JobsAction.prototype['BreakAfter'] = undefined;
/**
 * @member {Boolean} Bypass
 */

JobsAction.prototype['Bypass'] = undefined;
/**
 * @member {Array.<module:model/JobsAction>} ChainedActions
 */

JobsAction.prototype['ChainedActions'] = undefined;
/**
 * @member {module:model/JobsChatEventFilter} ChatEventFilter
 */

JobsAction.prototype['ChatEventFilter'] = undefined;
/**
 * @member {module:model/JobsContextMetaFilter} ContextMetaFilter
 */

JobsAction.prototype['ContextMetaFilter'] = undefined;
/**
 * @member {module:model/JobsDataSelector} DataFilter
 */

JobsAction.prototype['DataFilter'] = undefined;
/**
 * @member {module:model/JobsDataSelector} DataSelector
 */

JobsAction.prototype['DataSelector'] = undefined;
/**
 * @member {module:model/JobsDataSourceSelector} DataSourceFilter
 */

JobsAction.prototype['DataSourceFilter'] = undefined;
/**
 * @member {module:model/JobsDataSourceSelector} DataSourceSelector
 */

JobsAction.prototype['DataSourceSelector'] = undefined;
/**
 * @member {String} Description
 */

JobsAction.prototype['Description'] = undefined;
/**
 * @member {Array.<module:model/JobsAction>} FailedFilterActions
 */

JobsAction.prototype['FailedFilterActions'] = undefined;
/**
 * @member {String} ID
 */

JobsAction.prototype['ID'] = undefined;
/**
 * @member {module:model/JobsIdmSelector} IdmFilter
 */

JobsAction.prototype['IdmFilter'] = undefined;
/**
 * @member {module:model/JobsIdmSelector} IdmSelector
 */

JobsAction.prototype['IdmSelector'] = undefined;
/**
 * @member {String} Label
 */

JobsAction.prototype['Label'] = undefined;
/**
 * @member {module:model/JobsAction} MergeAction
 */

JobsAction.prototype['MergeAction'] = undefined;
/**
 * @member {module:model/JobsNodesSelector} NodesFilter
 */

JobsAction.prototype['NodesFilter'] = undefined;
/**
 * @member {module:model/JobsNodesSelector} NodesSelector
 */

JobsAction.prototype['NodesSelector'] = undefined;
/**
 * @member {Object.<String, String>} Parameters
 */

JobsAction.prototype['Parameters'] = undefined;
/**
 * @member {String} Timeout
 */

JobsAction.prototype['Timeout'] = undefined;
/**
 * @member {module:model/JobsTriggerFilter} TriggerFilter
 */

JobsAction.prototype['TriggerFilter'] = undefined;
/**
 * @member {module:model/JobsUsersSelector} UsersFilter
 */

JobsAction.prototype['UsersFilter'] = undefined;
/**
 * @member {module:model/JobsUsersSelector} UsersSelector
 */

JobsAction.prototype['UsersSelector'] = undefined;
var _default = JobsAction;
exports["default"] = _default;
//# sourceMappingURL=JobsAction.js.map
