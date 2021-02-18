"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RestMetadata = _interopRequireDefault(require("./RestMetadata"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The RestMetaCollection model module.
* @module model/RestMetaCollection
* @version 1.0
*/
var RestMetaCollection = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>RestMetaCollection</code>.
  * @alias module:model/RestMetaCollection
  * @class
  */
  function RestMetaCollection() {
    _classCallCheck(this, RestMetaCollection);

    _defineProperty(this, "NodePath", undefined);

    _defineProperty(this, "Metadatas", undefined);
  }
  /**
  * Constructs a <code>RestMetaCollection</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/RestMetaCollection} obj Optional instance to populate.
  * @return {module:model/RestMetaCollection} The populated <code>RestMetaCollection</code> instance.
  */


  _createClass(RestMetaCollection, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestMetaCollection();

        if (data.hasOwnProperty('NodePath')) {
          obj['NodePath'] = _ApiClient["default"].convertToType(data['NodePath'], 'String');
        }

        if (data.hasOwnProperty('Metadatas')) {
          obj['Metadatas'] = _ApiClient["default"].convertToType(data['Metadatas'], [_RestMetadata["default"]]);
        }
      }

      return obj;
    }
    /**
    * @member {String} NodePath
    */

  }]);

  return RestMetaCollection;
}();

exports["default"] = RestMetaCollection;
//# sourceMappingURL=RestMetaCollection.js.map
