/**
 * Pydio Cells Rest API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 4.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The LogLogMessage model module.
 * @module model/LogLogMessage
 * @version 4.0
 */
class LogLogMessage {
    /**
     * Constructs a new <code>LogLogMessage</code>.
     * LogMessage is the format used to transmit log messages to clients via the REST API.
     * @alias module:model/LogLogMessage
     */
    constructor() { 
        
        LogLogMessage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LogLogMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LogLogMessage} obj Optional instance to populate.
     * @return {module:model/LogLogMessage} The populated <code>LogLogMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LogLogMessage();

            if (data.hasOwnProperty('GroupPath')) {
                obj['GroupPath'] = ApiClient.convertToType(data['GroupPath'], 'String');
            }
            if (data.hasOwnProperty('HttpProtocol')) {
                obj['HttpProtocol'] = ApiClient.convertToType(data['HttpProtocol'], 'String');
            }
            if (data.hasOwnProperty('JsonZaps')) {
                obj['JsonZaps'] = ApiClient.convertToType(data['JsonZaps'], 'String');
            }
            if (data.hasOwnProperty('Level')) {
                obj['Level'] = ApiClient.convertToType(data['Level'], 'String');
            }
            if (data.hasOwnProperty('Logger')) {
                obj['Logger'] = ApiClient.convertToType(data['Logger'], 'String');
            }
            if (data.hasOwnProperty('Msg')) {
                obj['Msg'] = ApiClient.convertToType(data['Msg'], 'String');
            }
            if (data.hasOwnProperty('MsgId')) {
                obj['MsgId'] = ApiClient.convertToType(data['MsgId'], 'String');
            }
            if (data.hasOwnProperty('NodePath')) {
                obj['NodePath'] = ApiClient.convertToType(data['NodePath'], 'String');
            }
            if (data.hasOwnProperty('NodeUuid')) {
                obj['NodeUuid'] = ApiClient.convertToType(data['NodeUuid'], 'String');
            }
            if (data.hasOwnProperty('OperationLabel')) {
                obj['OperationLabel'] = ApiClient.convertToType(data['OperationLabel'], 'String');
            }
            if (data.hasOwnProperty('OperationUuid')) {
                obj['OperationUuid'] = ApiClient.convertToType(data['OperationUuid'], 'String');
            }
            if (data.hasOwnProperty('Profile')) {
                obj['Profile'] = ApiClient.convertToType(data['Profile'], 'String');
            }
            if (data.hasOwnProperty('RemoteAddress')) {
                obj['RemoteAddress'] = ApiClient.convertToType(data['RemoteAddress'], 'String');
            }
            if (data.hasOwnProperty('RoleUuids')) {
                obj['RoleUuids'] = ApiClient.convertToType(data['RoleUuids'], ['String']);
            }
            if (data.hasOwnProperty('SchedulerJobUuid')) {
                obj['SchedulerJobUuid'] = ApiClient.convertToType(data['SchedulerJobUuid'], 'String');
            }
            if (data.hasOwnProperty('SchedulerTaskActionPath')) {
                obj['SchedulerTaskActionPath'] = ApiClient.convertToType(data['SchedulerTaskActionPath'], 'String');
            }
            if (data.hasOwnProperty('SchedulerTaskUuid')) {
                obj['SchedulerTaskUuid'] = ApiClient.convertToType(data['SchedulerTaskUuid'], 'String');
            }
            if (data.hasOwnProperty('SpanParentUuid')) {
                obj['SpanParentUuid'] = ApiClient.convertToType(data['SpanParentUuid'], 'String');
            }
            if (data.hasOwnProperty('SpanRootUuid')) {
                obj['SpanRootUuid'] = ApiClient.convertToType(data['SpanRootUuid'], 'String');
            }
            if (data.hasOwnProperty('SpanUuid')) {
                obj['SpanUuid'] = ApiClient.convertToType(data['SpanUuid'], 'String');
            }
            if (data.hasOwnProperty('TransferSize')) {
                obj['TransferSize'] = ApiClient.convertToType(data['TransferSize'], 'String');
            }
            if (data.hasOwnProperty('Ts')) {
                obj['Ts'] = ApiClient.convertToType(data['Ts'], 'Number');
            }
            if (data.hasOwnProperty('UserAgent')) {
                obj['UserAgent'] = ApiClient.convertToType(data['UserAgent'], 'String');
            }
            if (data.hasOwnProperty('UserName')) {
                obj['UserName'] = ApiClient.convertToType(data['UserName'], 'String');
            }
            if (data.hasOwnProperty('UserUuid')) {
                obj['UserUuid'] = ApiClient.convertToType(data['UserUuid'], 'String');
            }
            if (data.hasOwnProperty('WsScope')) {
                obj['WsScope'] = ApiClient.convertToType(data['WsScope'], 'String');
            }
            if (data.hasOwnProperty('WsUuid')) {
                obj['WsUuid'] = ApiClient.convertToType(data['WsUuid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} GroupPath
 */
LogLogMessage.prototype['GroupPath'] = undefined;

/**
 * @member {String} HttpProtocol
 */
LogLogMessage.prototype['HttpProtocol'] = undefined;

/**
 * @member {String} JsonZaps
 */
LogLogMessage.prototype['JsonZaps'] = undefined;

/**
 * @member {String} Level
 */
LogLogMessage.prototype['Level'] = undefined;

/**
 * @member {String} Logger
 */
LogLogMessage.prototype['Logger'] = undefined;

/**
 * @member {String} Msg
 */
LogLogMessage.prototype['Msg'] = undefined;

/**
 * @member {String} MsgId
 */
LogLogMessage.prototype['MsgId'] = undefined;

/**
 * @member {String} NodePath
 */
LogLogMessage.prototype['NodePath'] = undefined;

/**
 * @member {String} NodeUuid
 */
LogLogMessage.prototype['NodeUuid'] = undefined;

/**
 * @member {String} OperationLabel
 */
LogLogMessage.prototype['OperationLabel'] = undefined;

/**
 * @member {String} OperationUuid
 */
LogLogMessage.prototype['OperationUuid'] = undefined;

/**
 * @member {String} Profile
 */
LogLogMessage.prototype['Profile'] = undefined;

/**
 * @member {String} RemoteAddress
 */
LogLogMessage.prototype['RemoteAddress'] = undefined;

/**
 * @member {Array.<String>} RoleUuids
 */
LogLogMessage.prototype['RoleUuids'] = undefined;

/**
 * @member {String} SchedulerJobUuid
 */
LogLogMessage.prototype['SchedulerJobUuid'] = undefined;

/**
 * @member {String} SchedulerTaskActionPath
 */
LogLogMessage.prototype['SchedulerTaskActionPath'] = undefined;

/**
 * @member {String} SchedulerTaskUuid
 */
LogLogMessage.prototype['SchedulerTaskUuid'] = undefined;

/**
 * @member {String} SpanParentUuid
 */
LogLogMessage.prototype['SpanParentUuid'] = undefined;

/**
 * @member {String} SpanRootUuid
 */
LogLogMessage.prototype['SpanRootUuid'] = undefined;

/**
 * @member {String} SpanUuid
 */
LogLogMessage.prototype['SpanUuid'] = undefined;

/**
 * @member {String} TransferSize
 */
LogLogMessage.prototype['TransferSize'] = undefined;

/**
 * @member {Number} Ts
 */
LogLogMessage.prototype['Ts'] = undefined;

/**
 * @member {String} UserAgent
 */
LogLogMessage.prototype['UserAgent'] = undefined;

/**
 * @member {String} UserName
 */
LogLogMessage.prototype['UserName'] = undefined;

/**
 * @member {String} UserUuid
 */
LogLogMessage.prototype['UserUuid'] = undefined;

/**
 * @member {String} WsScope
 */
LogLogMessage.prototype['WsScope'] = undefined;

/**
 * @member {String} WsUuid
 */
LogLogMessage.prototype['WsUuid'] = undefined;






export default LogLogMessage;

