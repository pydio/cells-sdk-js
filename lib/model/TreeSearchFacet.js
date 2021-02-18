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
* The TreeSearchFacet model module.
* @module model/TreeSearchFacet
* @version 1.0
*/
var TreeSearchFacet = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>TreeSearchFacet</code>.
  * @alias module:model/TreeSearchFacet
  * @class
  */
  function TreeSearchFacet() {
    _classCallCheck(this, TreeSearchFacet);

    _defineProperty(this, "FieldName", undefined);

    _defineProperty(this, "Label", undefined);

    _defineProperty(this, "Count", undefined);

    _defineProperty(this, "Term", undefined);

    _defineProperty(this, "Min", undefined);

    _defineProperty(this, "Max", undefined);

    _defineProperty(this, "Start", undefined);

    _defineProperty(this, "End", undefined);
  }
  /**
  * Constructs a <code>TreeSearchFacet</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/TreeSearchFacet} obj Optional instance to populate.
  * @return {module:model/TreeSearchFacet} The populated <code>TreeSearchFacet</code> instance.
  */


  _createClass(TreeSearchFacet, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TreeSearchFacet();

        if (data.hasOwnProperty('FieldName')) {
          obj['FieldName'] = _ApiClient["default"].convertToType(data['FieldName'], 'String');
        }

        if (data.hasOwnProperty('Label')) {
          obj['Label'] = _ApiClient["default"].convertToType(data['Label'], 'String');
        }

        if (data.hasOwnProperty('Count')) {
          obj['Count'] = _ApiClient["default"].convertToType(data['Count'], 'Number');
        }

        if (data.hasOwnProperty('Term')) {
          obj['Term'] = _ApiClient["default"].convertToType(data['Term'], 'String');
        }

        if (data.hasOwnProperty('Min')) {
          obj['Min'] = _ApiClient["default"].convertToType(data['Min'], 'String');
        }

        if (data.hasOwnProperty('Max')) {
          obj['Max'] = _ApiClient["default"].convertToType(data['Max'], 'String');
        }

        if (data.hasOwnProperty('Start')) {
          obj['Start'] = _ApiClient["default"].convertToType(data['Start'], 'Number');
        }

        if (data.hasOwnProperty('End')) {
          obj['End'] = _ApiClient["default"].convertToType(data['End'], 'Number');
        }
      }

      return obj;
    }
    /**
    * @member {String} FieldName
    */

  }]);

  return TreeSearchFacet;
}();

exports["default"] = TreeSearchFacet;
//# sourceMappingURL=TreeSearchFacet.js.map
