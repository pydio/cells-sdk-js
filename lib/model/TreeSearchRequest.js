"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TreeQuery = _interopRequireDefault(require("./TreeQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The TreeSearchRequest model module.
* @module model/TreeSearchRequest
* @version 1.0
*/
var TreeSearchRequest = /*#__PURE__*/function () {
  /**
  * Constructs a new <code>TreeSearchRequest</code>.
  * @alias module:model/TreeSearchRequest
  * @class
  */
  function TreeSearchRequest() {
    _classCallCheck(this, TreeSearchRequest);

    _defineProperty(this, "Query", undefined);

    _defineProperty(this, "Size", undefined);

    _defineProperty(this, "From", undefined);

    _defineProperty(this, "Details", undefined);
  }
  /**
  * Constructs a <code>TreeSearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/TreeSearchRequest} obj Optional instance to populate.
  * @return {module:model/TreeSearchRequest} The populated <code>TreeSearchRequest</code> instance.
  */


  _createClass(TreeSearchRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TreeSearchRequest();

        if (data.hasOwnProperty('Query')) {
          obj['Query'] = _TreeQuery["default"].constructFromObject(data['Query']);
        }

        if (data.hasOwnProperty('Size')) {
          obj['Size'] = _ApiClient["default"].convertToType(data['Size'], 'Number');
        }

        if (data.hasOwnProperty('From')) {
          obj['From'] = _ApiClient["default"].convertToType(data['From'], 'Number');
        }

        if (data.hasOwnProperty('Details')) {
          obj['Details'] = _ApiClient["default"].convertToType(data['Details'], 'Boolean');
        }
      }

      return obj;
    }
    /**
    * @member {module:model/TreeQuery} Query
    */

  }]);

  return TreeSearchRequest;
}();

exports["default"] = TreeSearchRequest;
//# sourceMappingURL=TreeSearchRequest.js.map
