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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The LogLogMessage model module.
* @module model/LogLogMessage
* @version 1.0
*/
var LogLogMessage = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>LogLogMessage</code>.
  * LogMessage is the format used to transmit log messages to clients via the REST API.
  * @alias module:model/LogLogMessage
  * @class
  */
  function LogLogMessage() {
    _classCallCheck(this, LogLogMessage);

    _defineProperty(this, "Ts", undefined);

    _defineProperty(this, "Level", undefined);

    _defineProperty(this, "Logger", undefined);

    _defineProperty(this, "Msg", undefined);

    _defineProperty(this, "MsgId", undefined);

    _defineProperty(this, "UserName", undefined);

    _defineProperty(this, "UserUuid", undefined);

    _defineProperty(this, "GroupPath", undefined);

    _defineProperty(this, "Profile", undefined);

    _defineProperty(this, "RoleUuids", undefined);

    _defineProperty(this, "RemoteAddress", undefined);

    _defineProperty(this, "UserAgent", undefined);

    _defineProperty(this, "HttpProtocol", undefined);

    _defineProperty(this, "NodeUuid", undefined);

    _defineProperty(this, "NodePath", undefined);

    _defineProperty(this, "WsUuid", undefined);

    _defineProperty(this, "WsScope", undefined);

    _defineProperty(this, "SpanUuid", undefined);

    _defineProperty(this, "SpanParentUuid", undefined);

    _defineProperty(this, "SpanRootUuid", undefined);

    _defineProperty(this, "OperationUuid", undefined);

    _defineProperty(this, "OperationLabel", undefined);

    _defineProperty(this, "SchedulerJobUuid", undefined);

    _defineProperty(this, "SchedulerTaskUuid", undefined);

    _defineProperty(this, "SchedulerTaskActionPath", undefined);
  }
  /**
  * Constructs a <code>LogLogMessage</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/LogLogMessage} obj Optional instance to populate.
  * @return {module:model/LogLogMessage} The populated <code>LogLogMessage</code> instance.
  */


  _createClass(LogLogMessage, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LogLogMessage();

        if (data.hasOwnProperty('Ts')) {
          obj['Ts'] = _ApiClient["default"].convertToType(data['Ts'], 'Number');
        }

        if (data.hasOwnProperty('Level')) {
          obj['Level'] = _ApiClient["default"].convertToType(data['Level'], 'String');
        }

        if (data.hasOwnProperty('Logger')) {
          obj['Logger'] = _ApiClient["default"].convertToType(data['Logger'], 'String');
        }

        if (data.hasOwnProperty('Msg')) {
          obj['Msg'] = _ApiClient["default"].convertToType(data['Msg'], 'String');
        }

        if (data.hasOwnProperty('MsgId')) {
          obj['MsgId'] = _ApiClient["default"].convertToType(data['MsgId'], 'String');
        }

        if (data.hasOwnProperty('UserName')) {
          obj['UserName'] = _ApiClient["default"].convertToType(data['UserName'], 'String');
        }

        if (data.hasOwnProperty('UserUuid')) {
          obj['UserUuid'] = _ApiClient["default"].convertToType(data['UserUuid'], 'String');
        }

        if (data.hasOwnProperty('GroupPath')) {
          obj['GroupPath'] = _ApiClient["default"].convertToType(data['GroupPath'], 'String');
        }

        if (data.hasOwnProperty('Profile')) {
          obj['Profile'] = _ApiClient["default"].convertToType(data['Profile'], 'String');
        }

        if (data.hasOwnProperty('RoleUuids')) {
          obj['RoleUuids'] = _ApiClient["default"].convertToType(data['RoleUuids'], ['String']);
        }

        if (data.hasOwnProperty('RemoteAddress')) {
          obj['RemoteAddress'] = _ApiClient["default"].convertToType(data['RemoteAddress'], 'String');
        }

        if (data.hasOwnProperty('UserAgent')) {
          obj['UserAgent'] = _ApiClient["default"].convertToType(data['UserAgent'], 'String');
        }

        if (data.hasOwnProperty('HttpProtocol')) {
          obj['HttpProtocol'] = _ApiClient["default"].convertToType(data['HttpProtocol'], 'String');
        }

        if (data.hasOwnProperty('NodeUuid')) {
          obj['NodeUuid'] = _ApiClient["default"].convertToType(data['NodeUuid'], 'String');
        }

        if (data.hasOwnProperty('NodePath')) {
          obj['NodePath'] = _ApiClient["default"].convertToType(data['NodePath'], 'String');
        }

        if (data.hasOwnProperty('WsUuid')) {
          obj['WsUuid'] = _ApiClient["default"].convertToType(data['WsUuid'], 'String');
        }

        if (data.hasOwnProperty('WsScope')) {
          obj['WsScope'] = _ApiClient["default"].convertToType(data['WsScope'], 'String');
        }

        if (data.hasOwnProperty('SpanUuid')) {
          obj['SpanUuid'] = _ApiClient["default"].convertToType(data['SpanUuid'], 'String');
        }

        if (data.hasOwnProperty('SpanParentUuid')) {
          obj['SpanParentUuid'] = _ApiClient["default"].convertToType(data['SpanParentUuid'], 'String');
        }

        if (data.hasOwnProperty('SpanRootUuid')) {
          obj['SpanRootUuid'] = _ApiClient["default"].convertToType(data['SpanRootUuid'], 'String');
        }

        if (data.hasOwnProperty('OperationUuid')) {
          obj['OperationUuid'] = _ApiClient["default"].convertToType(data['OperationUuid'], 'String');
        }

        if (data.hasOwnProperty('OperationLabel')) {
          obj['OperationLabel'] = _ApiClient["default"].convertToType(data['OperationLabel'], 'String');
        }

        if (data.hasOwnProperty('SchedulerJobUuid')) {
          obj['SchedulerJobUuid'] = _ApiClient["default"].convertToType(data['SchedulerJobUuid'], 'String');
        }

        if (data.hasOwnProperty('SchedulerTaskUuid')) {
          obj['SchedulerTaskUuid'] = _ApiClient["default"].convertToType(data['SchedulerTaskUuid'], 'String');
        }

        if (data.hasOwnProperty('SchedulerTaskActionPath')) {
          obj['SchedulerTaskActionPath'] = _ApiClient["default"].convertToType(data['SchedulerTaskActionPath'], 'String');
        }
      }

      return obj;
    }
    /**
    * @member {Number} Ts
    */

  }]);

  return LogLogMessage;
}();

exports["default"] = LogLogMessage;
//# sourceMappingURL=LogLogMessage.js.map
