"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JobsActionOutputFilter = _interopRequireDefault(require("./JobsActionOutputFilter"));

var _JobsContextMetaFilter = _interopRequireDefault(require("./JobsContextMetaFilter"));

var _JobsDataSourceSelector = _interopRequireDefault(require("./JobsDataSourceSelector"));

var _JobsIdmSelector = _interopRequireDefault(require("./JobsIdmSelector"));

var _JobsNodesSelector = _interopRequireDefault(require("./JobsNodesSelector"));

var _JobsTriggerFilter = _interopRequireDefault(require("./JobsTriggerFilter"));

var _JobsUsersSelector = _interopRequireDefault(require("./JobsUsersSelector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The JobsAction model module.
* @module model/JobsAction
* @version 1.0
*/
var JobsAction = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>JobsAction</code>.
  * @alias module:model/JobsAction
  * @class
  */
  function JobsAction() {
    _classCallCheck(this, JobsAction);

    _defineProperty(this, "ID", undefined);

    _defineProperty(this, "Label", undefined);

    _defineProperty(this, "Description", undefined);

    _defineProperty(this, "Bypass", undefined);

    _defineProperty(this, "BreakAfter", undefined);

    _defineProperty(this, "NodesSelector", undefined);

    _defineProperty(this, "UsersSelector", undefined);

    _defineProperty(this, "NodesFilter", undefined);

    _defineProperty(this, "UsersFilter", undefined);

    _defineProperty(this, "IdmSelector", undefined);

    _defineProperty(this, "IdmFilter", undefined);

    _defineProperty(this, "DataSourceSelector", undefined);

    _defineProperty(this, "DataSourceFilter", undefined);

    _defineProperty(this, "ActionOutputFilter", undefined);

    _defineProperty(this, "ContextMetaFilter", undefined);

    _defineProperty(this, "TriggerFilter", undefined);

    _defineProperty(this, "Parameters", undefined);

    _defineProperty(this, "ChainedActions", undefined);

    _defineProperty(this, "FailedFilterActions", undefined);
  }
  /**
  * Constructs a <code>JobsAction</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/JobsAction} obj Optional instance to populate.
  * @return {module:model/JobsAction} The populated <code>JobsAction</code> instance.
  */


  _createClass(JobsAction, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JobsAction();

        if (data.hasOwnProperty('ID')) {
          obj['ID'] = _ApiClient["default"].convertToType(data['ID'], 'String');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Bypass')) {
          obj['Bypass'] = _ApiClient["default"].convertToType(data['Bypass'], 'Boolean');
        }

        if (data.hasOwnProperty('BreakAfter')) {
          obj['BreakAfter'] = _ApiClient["default"].convertToType(data['BreakAfter'], 'Boolean');
        }

        if (data.hasOwnProperty('NodesSelector')) {
          obj['NodesSelector'] = _JobsNodesSelector["default"].constructFromObject(data['NodesSelector']);
        }

        if (data.hasOwnProperty('UsersSelector')) {
          obj['UsersSelector'] = _JobsUsersSelector["default"].constructFromObject(data['UsersSelector']);
        }

        if (data.hasOwnProperty('NodesFilter')) {
          obj['NodesFilter'] = _JobsNodesSelector["default"].constructFromObject(data['NodesFilter']);
        }

        if (data.hasOwnProperty('UsersFilter')) {
          obj['UsersFilter'] = _JobsUsersSelector["default"].constructFromObject(data['UsersFilter']);
        }

        if (data.hasOwnProperty('IdmSelector')) {
          obj['IdmSelector'] = _JobsIdmSelector["default"].constructFromObject(data['IdmSelector']);
        }

        if (data.hasOwnProperty('IdmFilter')) {
          obj['IdmFilter'] = _JobsIdmSelector["default"].constructFromObject(data['IdmFilter']);
        }

        if (data.hasOwnProperty('DataSourceSelector')) {
          obj['DataSourceSelector'] = _JobsDataSourceSelector["default"].constructFromObject(data['DataSourceSelector']);
        }

        if (data.hasOwnProperty('DataSourceFilter')) {
          obj['DataSourceFilter'] = _JobsDataSourceSelector["default"].constructFromObject(data['DataSourceFilter']);
        }

        if (data.hasOwnProperty('ActionOutputFilter')) {
          obj['ActionOutputFilter'] = _JobsActionOutputFilter["default"].constructFromObject(data['ActionOutputFilter']);
        }

        if (data.hasOwnProperty('ContextMetaFilter')) {
          obj['ContextMetaFilter'] = _JobsContextMetaFilter["default"].constructFromObject(data['ContextMetaFilter']);
        }

        if (data.hasOwnProperty('TriggerFilter')) {
          obj['TriggerFilter'] = _JobsTriggerFilter["default"].constructFromObject(data['TriggerFilter']);
        }

        if (data.hasOwnProperty('Parameters')) {
          obj['Parameters'] = _ApiClient["default"].convertToType(data['Parameters'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('ChainedActions')) {
          obj['ChainedActions'] = _ApiClient["default"].convertToType(data['ChainedActions'], [JobsAction]);
        }

        if (data.hasOwnProperty('FailedFilterActions')) {
          obj['FailedFilterActions'] = _ApiClient["default"].convertToType(data['FailedFilterActions'], [JobsAction]);
        }
      }

      return obj;
    }
    /**
    * @member {String} ID
    */

  }]);

  return JobsAction;
}();

exports["default"] = JobsAction;
//# sourceMappingURL=JobsAction.js.map
