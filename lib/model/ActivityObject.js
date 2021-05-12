"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActivityObjectType = _interopRequireDefault(require("./ActivityObjectType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The ActivityObject model module.
* @module model/ActivityObject
* @version 1.0
*/
var ActivityObject = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>ActivityObject</code>.
  * @alias module:model/ActivityObject
  * @class
  */
  function ActivityObject() {
    _classCallCheck(this, ActivityObject);

    _defineProperty(this, "jsonLdContext", undefined);

    _defineProperty(this, "type", undefined);

    _defineProperty(this, "id", undefined);

    _defineProperty(this, "name", undefined);

    _defineProperty(this, "summary", undefined);

    _defineProperty(this, "markdown", undefined);

    _defineProperty(this, "context", undefined);

    _defineProperty(this, "attachment", undefined);

    _defineProperty(this, "attributedTo", undefined);

    _defineProperty(this, "audience", undefined);

    _defineProperty(this, "content", undefined);

    _defineProperty(this, "startTime", undefined);

    _defineProperty(this, "endTime", undefined);

    _defineProperty(this, "published", undefined);

    _defineProperty(this, "updated", undefined);

    _defineProperty(this, "duration", undefined);

    _defineProperty(this, "url", undefined);

    _defineProperty(this, "mediaType", undefined);

    _defineProperty(this, "icon", undefined);

    _defineProperty(this, "image", undefined);

    _defineProperty(this, "preview", undefined);

    _defineProperty(this, "location", undefined);

    _defineProperty(this, "inReplyTo", undefined);

    _defineProperty(this, "replies", undefined);

    _defineProperty(this, "tag", undefined);

    _defineProperty(this, "generator", undefined);

    _defineProperty(this, "to", undefined);

    _defineProperty(this, "bto", undefined);

    _defineProperty(this, "cc", undefined);

    _defineProperty(this, "bcc", undefined);

    _defineProperty(this, "actor", undefined);

    _defineProperty(this, "object", undefined);

    _defineProperty(this, "target", undefined);

    _defineProperty(this, "result", undefined);

    _defineProperty(this, "origin", undefined);

    _defineProperty(this, "instrument", undefined);

    _defineProperty(this, "href", undefined);

    _defineProperty(this, "rel", undefined);

    _defineProperty(this, "hreflang", undefined);

    _defineProperty(this, "height", undefined);

    _defineProperty(this, "width", undefined);

    _defineProperty(this, "oneOf", undefined);

    _defineProperty(this, "anyOf", undefined);

    _defineProperty(this, "closed", undefined);

    _defineProperty(this, "subject", undefined);

    _defineProperty(this, "relationship", undefined);

    _defineProperty(this, "formerType", undefined);

    _defineProperty(this, "deleted", undefined);

    _defineProperty(this, "accuracy", undefined);

    _defineProperty(this, "altitude", undefined);

    _defineProperty(this, "latitude", undefined);

    _defineProperty(this, "longitude", undefined);

    _defineProperty(this, "radius", undefined);

    _defineProperty(this, "units", undefined);

    _defineProperty(this, "items", undefined);

    _defineProperty(this, "totalItems", undefined);

    _defineProperty(this, "current", undefined);

    _defineProperty(this, "first", undefined);

    _defineProperty(this, "last", undefined);

    _defineProperty(this, "partOf", undefined);

    _defineProperty(this, "next", undefined);

    _defineProperty(this, "prev", undefined);
  }
  /**
  * Constructs a <code>ActivityObject</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/ActivityObject} obj Optional instance to populate.
  * @return {module:model/ActivityObject} The populated <code>ActivityObject</code> instance.
  */


  _createClass(ActivityObject, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ActivityObject();

        if (data.hasOwnProperty('jsonLdContext')) {
          obj['jsonLdContext'] = _ApiClient["default"].convertToType(data['jsonLdContext'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ActivityObjectType["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('summary')) {
          obj['summary'] = _ApiClient["default"].convertToType(data['summary'], 'String');
        }

        if (data.hasOwnProperty('markdown')) {
          obj['markdown'] = _ApiClient["default"].convertToType(data['markdown'], 'String');
        }

        if (data.hasOwnProperty('context')) {
          obj['context'] = ActivityObject.constructFromObject(data['context']);
        }

        if (data.hasOwnProperty('attachment')) {
          obj['attachment'] = ActivityObject.constructFromObject(data['attachment']);
        }

        if (data.hasOwnProperty('attributedTo')) {
          obj['attributedTo'] = ActivityObject.constructFromObject(data['attributedTo']);
        }

        if (data.hasOwnProperty('audience')) {
          obj['audience'] = ActivityObject.constructFromObject(data['audience']);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = ActivityObject.constructFromObject(data['content']);
        }

        if (data.hasOwnProperty('startTime')) {
          obj['startTime'] = _ApiClient["default"].convertToType(data['startTime'], 'Date');
        }

        if (data.hasOwnProperty('endTime')) {
          obj['endTime'] = _ApiClient["default"].convertToType(data['endTime'], 'Date');
        }

        if (data.hasOwnProperty('published')) {
          obj['published'] = _ApiClient["default"].convertToType(data['published'], 'Date');
        }

        if (data.hasOwnProperty('updated')) {
          obj['updated'] = _ApiClient["default"].convertToType(data['updated'], 'Date');
        }

        if (data.hasOwnProperty('duration')) {
          obj['duration'] = _ApiClient["default"].convertToType(data['duration'], 'Date');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = ActivityObject.constructFromObject(data['url']);
        }

        if (data.hasOwnProperty('mediaType')) {
          obj['mediaType'] = _ApiClient["default"].convertToType(data['mediaType'], 'String');
        }

        if (data.hasOwnProperty('icon')) {
          obj['icon'] = ActivityObject.constructFromObject(data['icon']);
        }

        if (data.hasOwnProperty('image')) {
          obj['image'] = ActivityObject.constructFromObject(data['image']);
        }

        if (data.hasOwnProperty('preview')) {
          obj['preview'] = ActivityObject.constructFromObject(data['preview']);
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = ActivityObject.constructFromObject(data['location']);
        }

        if (data.hasOwnProperty('inReplyTo')) {
          obj['inReplyTo'] = ActivityObject.constructFromObject(data['inReplyTo']);
        }

        if (data.hasOwnProperty('replies')) {
          obj['replies'] = ActivityObject.constructFromObject(data['replies']);
        }

        if (data.hasOwnProperty('tag')) {
          obj['tag'] = ActivityObject.constructFromObject(data['tag']);
        }

        if (data.hasOwnProperty('generator')) {
          obj['generator'] = ActivityObject.constructFromObject(data['generator']);
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = ActivityObject.constructFromObject(data['to']);
        }

        if (data.hasOwnProperty('bto')) {
          obj['bto'] = ActivityObject.constructFromObject(data['bto']);
        }

        if (data.hasOwnProperty('cc')) {
          obj['cc'] = ActivityObject.constructFromObject(data['cc']);
        }

        if (data.hasOwnProperty('bcc')) {
          obj['bcc'] = ActivityObject.constructFromObject(data['bcc']);
        }

        if (data.hasOwnProperty('actor')) {
          obj['actor'] = ActivityObject.constructFromObject(data['actor']);
        }

        if (data.hasOwnProperty('object')) {
          obj['object'] = ActivityObject.constructFromObject(data['object']);
        }

        if (data.hasOwnProperty('target')) {
          obj['target'] = ActivityObject.constructFromObject(data['target']);
        }

        if (data.hasOwnProperty('result')) {
          obj['result'] = ActivityObject.constructFromObject(data['result']);
        }

        if (data.hasOwnProperty('origin')) {
          obj['origin'] = ActivityObject.constructFromObject(data['origin']);
        }

        if (data.hasOwnProperty('instrument')) {
          obj['instrument'] = ActivityObject.constructFromObject(data['instrument']);
        }

        if (data.hasOwnProperty('href')) {
          obj['href'] = _ApiClient["default"].convertToType(data['href'], 'String');
        }

        if (data.hasOwnProperty('rel')) {
          obj['rel'] = _ApiClient["default"].convertToType(data['rel'], 'String');
        }

        if (data.hasOwnProperty('hreflang')) {
          obj['hreflang'] = _ApiClient["default"].convertToType(data['hreflang'], 'String');
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _ApiClient["default"].convertToType(data['height'], 'Number');
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _ApiClient["default"].convertToType(data['width'], 'Number');
        }

        if (data.hasOwnProperty('oneOf')) {
          obj['oneOf'] = ActivityObject.constructFromObject(data['oneOf']);
        }

        if (data.hasOwnProperty('anyOf')) {
          obj['anyOf'] = ActivityObject.constructFromObject(data['anyOf']);
        }

        if (data.hasOwnProperty('closed')) {
          obj['closed'] = _ApiClient["default"].convertToType(data['closed'], 'Date');
        }

        if (data.hasOwnProperty('subject')) {
          obj['subject'] = ActivityObject.constructFromObject(data['subject']);
        }

        if (data.hasOwnProperty('relationship')) {
          obj['relationship'] = ActivityObject.constructFromObject(data['relationship']);
        }

        if (data.hasOwnProperty('formerType')) {
          obj['formerType'] = _ActivityObjectType["default"].constructFromObject(data['formerType']);
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Date');
        }

        if (data.hasOwnProperty('accuracy')) {
          obj['accuracy'] = _ApiClient["default"].convertToType(data['accuracy'], 'Number');
        }

        if (data.hasOwnProperty('altitude')) {
          obj['altitude'] = _ApiClient["default"].convertToType(data['altitude'], 'Number');
        }

        if (data.hasOwnProperty('latitude')) {
          obj['latitude'] = _ApiClient["default"].convertToType(data['latitude'], 'Number');
        }

        if (data.hasOwnProperty('longitude')) {
          obj['longitude'] = _ApiClient["default"].convertToType(data['longitude'], 'Number');
        }

        if (data.hasOwnProperty('radius')) {
          obj['radius'] = _ApiClient["default"].convertToType(data['radius'], 'Number');
        }

        if (data.hasOwnProperty('units')) {
          obj['units'] = _ApiClient["default"].convertToType(data['units'], 'String');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], [ActivityObject]);
        }

        if (data.hasOwnProperty('totalItems')) {
          obj['totalItems'] = _ApiClient["default"].convertToType(data['totalItems'], 'Number');
        }

        if (data.hasOwnProperty('current')) {
          obj['current'] = ActivityObject.constructFromObject(data['current']);
        }

        if (data.hasOwnProperty('first')) {
          obj['first'] = ActivityObject.constructFromObject(data['first']);
        }

        if (data.hasOwnProperty('last')) {
          obj['last'] = ActivityObject.constructFromObject(data['last']);
        }

        if (data.hasOwnProperty('partOf')) {
          obj['partOf'] = ActivityObject.constructFromObject(data['partOf']);
        }

        if (data.hasOwnProperty('next')) {
          obj['next'] = ActivityObject.constructFromObject(data['next']);
        }

        if (data.hasOwnProperty('prev')) {
          obj['prev'] = ActivityObject.constructFromObject(data['prev']);
        }
      }

      return obj;
    }
    /**
    * @member {String} jsonLdContext
    */

  }]);

  return ActivityObject;
}();

exports["default"] = ActivityObject;
//# sourceMappingURL=ActivityObject.js.map
