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
import JobsAction from './JobsAction';
import JobsChatEventFilter from './JobsChatEventFilter';
import JobsContextMetaFilter from './JobsContextMetaFilter';
import JobsDataSourceSelector from './JobsDataSourceSelector';
import JobsIdmSelector from './JobsIdmSelector';
import JobsJobHook from './JobsJobHook';
import JobsJobParameter from './JobsJobParameter';
import JobsNodesSelector from './JobsNodesSelector';
import JobsSchedule from './JobsSchedule';
import JobsTask from './JobsTask';
import JobsUsersSelector from './JobsUsersSelector';
import ProtobufAny from './ProtobufAny';

/**
 * The JobsJob model module.
 * @module model/JobsJob
 * @version 4.0
 */
class JobsJob {
    /**
     * Constructs a new <code>JobsJob</code>.
     * @alias module:model/JobsJob
     */
    constructor() { 
        
        JobsJob.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JobsJob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JobsJob} obj Optional instance to populate.
     * @return {module:model/JobsJob} The populated <code>JobsJob</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobsJob();

            if (data.hasOwnProperty('Actions')) {
                obj['Actions'] = ApiClient.convertToType(data['Actions'], [JobsAction]);
            }
            if (data.hasOwnProperty('AutoClean')) {
                obj['AutoClean'] = ApiClient.convertToType(data['AutoClean'], 'Boolean');
            }
            if (data.hasOwnProperty('AutoRestart')) {
                obj['AutoRestart'] = ApiClient.convertToType(data['AutoRestart'], 'Boolean');
            }
            if (data.hasOwnProperty('AutoStart')) {
                obj['AutoStart'] = ApiClient.convertToType(data['AutoStart'], 'Boolean');
            }
            if (data.hasOwnProperty('ChatEventFilter')) {
                obj['ChatEventFilter'] = JobsChatEventFilter.constructFromObject(data['ChatEventFilter']);
            }
            if (data.hasOwnProperty('ContextMetaFilter')) {
                obj['ContextMetaFilter'] = JobsContextMetaFilter.constructFromObject(data['ContextMetaFilter']);
            }
            if (data.hasOwnProperty('CreatedAt')) {
                obj['CreatedAt'] = ApiClient.convertToType(data['CreatedAt'], 'Number');
            }
            if (data.hasOwnProperty('Custom')) {
                obj['Custom'] = ApiClient.convertToType(data['Custom'], 'Boolean');
            }
            if (data.hasOwnProperty('DataSourceFilter')) {
                obj['DataSourceFilter'] = JobsDataSourceSelector.constructFromObject(data['DataSourceFilter']);
            }
            if (data.hasOwnProperty('EventNames')) {
                obj['EventNames'] = ApiClient.convertToType(data['EventNames'], ['String']);
            }
            if (data.hasOwnProperty('Hooks')) {
                obj['Hooks'] = ApiClient.convertToType(data['Hooks'], [JobsJobHook]);
            }
            if (data.hasOwnProperty('ID')) {
                obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
            }
            if (data.hasOwnProperty('IdmFilter')) {
                obj['IdmFilter'] = JobsIdmSelector.constructFromObject(data['IdmFilter']);
            }
            if (data.hasOwnProperty('Inactive')) {
                obj['Inactive'] = ApiClient.convertToType(data['Inactive'], 'Boolean');
            }
            if (data.hasOwnProperty('Label')) {
                obj['Label'] = ApiClient.convertToType(data['Label'], 'String');
            }
            if (data.hasOwnProperty('Languages')) {
                obj['Languages'] = ApiClient.convertToType(data['Languages'], ['String']);
            }
            if (data.hasOwnProperty('MaxConcurrency')) {
                obj['MaxConcurrency'] = ApiClient.convertToType(data['MaxConcurrency'], 'Number');
            }
            if (data.hasOwnProperty('MergeAction')) {
                obj['MergeAction'] = JobsAction.constructFromObject(data['MergeAction']);
            }
            if (data.hasOwnProperty('Metadata')) {
                obj['Metadata'] = ApiClient.convertToType(data['Metadata'], {'String': 'String'});
            }
            if (data.hasOwnProperty('ModifiedAt')) {
                obj['ModifiedAt'] = ApiClient.convertToType(data['ModifiedAt'], 'Number');
            }
            if (data.hasOwnProperty('NodeEventFilter')) {
                obj['NodeEventFilter'] = JobsNodesSelector.constructFromObject(data['NodeEventFilter']);
            }
            if (data.hasOwnProperty('Owner')) {
                obj['Owner'] = ApiClient.convertToType(data['Owner'], 'String');
            }
            if (data.hasOwnProperty('Parameters')) {
                obj['Parameters'] = ApiClient.convertToType(data['Parameters'], [JobsJobParameter]);
            }
            if (data.hasOwnProperty('ResourcesDependencies')) {
                obj['ResourcesDependencies'] = ApiClient.convertToType(data['ResourcesDependencies'], [ProtobufAny]);
            }
            if (data.hasOwnProperty('Schedule')) {
                obj['Schedule'] = JobsSchedule.constructFromObject(data['Schedule']);
            }
            if (data.hasOwnProperty('Tasks')) {
                obj['Tasks'] = ApiClient.convertToType(data['Tasks'], [JobsTask]);
            }
            if (data.hasOwnProperty('TasksSilentUpdate')) {
                obj['TasksSilentUpdate'] = ApiClient.convertToType(data['TasksSilentUpdate'], 'Boolean');
            }
            if (data.hasOwnProperty('Timeout')) {
                obj['Timeout'] = ApiClient.convertToType(data['Timeout'], 'String');
            }
            if (data.hasOwnProperty('UserEventFilter')) {
                obj['UserEventFilter'] = JobsUsersSelector.constructFromObject(data['UserEventFilter']);
            }
            if (data.hasOwnProperty('VersionMeta')) {
                obj['VersionMeta'] = ApiClient.convertToType(data['VersionMeta'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/JobsAction>} Actions
 */
JobsJob.prototype['Actions'] = undefined;

/**
 * @member {Boolean} AutoClean
 */
JobsJob.prototype['AutoClean'] = undefined;

/**
 * @member {Boolean} AutoRestart
 */
JobsJob.prototype['AutoRestart'] = undefined;

/**
 * @member {Boolean} AutoStart
 */
JobsJob.prototype['AutoStart'] = undefined;

/**
 * @member {module:model/JobsChatEventFilter} ChatEventFilter
 */
JobsJob.prototype['ChatEventFilter'] = undefined;

/**
 * @member {module:model/JobsContextMetaFilter} ContextMetaFilter
 */
JobsJob.prototype['ContextMetaFilter'] = undefined;

/**
 * @member {Number} CreatedAt
 */
JobsJob.prototype['CreatedAt'] = undefined;

/**
 * @member {Boolean} Custom
 */
JobsJob.prototype['Custom'] = undefined;

/**
 * @member {module:model/JobsDataSourceSelector} DataSourceFilter
 */
JobsJob.prototype['DataSourceFilter'] = undefined;

/**
 * @member {Array.<String>} EventNames
 */
JobsJob.prototype['EventNames'] = undefined;

/**
 * @member {Array.<module:model/JobsJobHook>} Hooks
 */
JobsJob.prototype['Hooks'] = undefined;

/**
 * @member {String} ID
 */
JobsJob.prototype['ID'] = undefined;

/**
 * @member {module:model/JobsIdmSelector} IdmFilter
 */
JobsJob.prototype['IdmFilter'] = undefined;

/**
 * @member {Boolean} Inactive
 */
JobsJob.prototype['Inactive'] = undefined;

/**
 * @member {String} Label
 */
JobsJob.prototype['Label'] = undefined;

/**
 * @member {Array.<String>} Languages
 */
JobsJob.prototype['Languages'] = undefined;

/**
 * @member {Number} MaxConcurrency
 */
JobsJob.prototype['MaxConcurrency'] = undefined;

/**
 * @member {module:model/JobsAction} MergeAction
 */
JobsJob.prototype['MergeAction'] = undefined;

/**
 * Additional user-defined metadata, can be used for icon, documentation, pre-requisites, etc.
 * @member {Object.<String, String>} Metadata
 */
JobsJob.prototype['Metadata'] = undefined;

/**
 * @member {Number} ModifiedAt
 */
JobsJob.prototype['ModifiedAt'] = undefined;

/**
 * @member {module:model/JobsNodesSelector} NodeEventFilter
 */
JobsJob.prototype['NodeEventFilter'] = undefined;

/**
 * @member {String} Owner
 */
JobsJob.prototype['Owner'] = undefined;

/**
 * @member {Array.<module:model/JobsJobParameter>} Parameters
 */
JobsJob.prototype['Parameters'] = undefined;

/**
 * @member {Array.<module:model/ProtobufAny>} ResourcesDependencies
 */
JobsJob.prototype['ResourcesDependencies'] = undefined;

/**
 * @member {module:model/JobsSchedule} Schedule
 */
JobsJob.prototype['Schedule'] = undefined;

/**
 * @member {Array.<module:model/JobsTask>} Tasks
 */
JobsJob.prototype['Tasks'] = undefined;

/**
 * @member {Boolean} TasksSilentUpdate
 */
JobsJob.prototype['TasksSilentUpdate'] = undefined;

/**
 * @member {String} Timeout
 */
JobsJob.prototype['Timeout'] = undefined;

/**
 * @member {module:model/JobsUsersSelector} UserEventFilter
 */
JobsJob.prototype['UserEventFilter'] = undefined;

/**
 * @member {Object.<String, String>} VersionMeta
 */
JobsJob.prototype['VersionMeta'] = undefined;






export default JobsJob;

