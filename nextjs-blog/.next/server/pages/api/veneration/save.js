"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/veneration/save";
exports.ids = ["pages/api/veneration/save"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/venModel.js":
/*!****************************!*\
  !*** ./models/venModel.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst dataSchema = new mongoose.Schema({\n    fullName: {\n        required: true,\n        type: String\n    },\n    birthDate: {\n        required: true,\n        type: String\n    },\n    deathDate: {\n        required: true,\n        type: String\n    },\n    pictureURL: {\n        required: true,\n        type: String\n    },\n    bio: {\n        required: true,\n        type: String\n    },\n    guardianUser: {\n        required: true,\n        type: String\n    },\n    dateCreated: {\n        type: String\n    },\n    dateUpdated: {\n        type: String\n    }\n});\nmodule.exports = mongoose.model(\"Data\", dataSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdmVuTW9kZWwuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxRQUFRLEdBQUdDLG1CQUFPLENBQUMsMEJBQVUsQ0FBQztBQUVwQyxNQUFNQyxVQUFVLEdBQUcsSUFBSUYsUUFBUSxDQUFDRyxNQUFNLENBQUM7SUFDbkNDLFFBQVEsRUFBRTtRQUNOQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxJQUFJLEVBQUVDLE1BQU07S0FDZjtJQUNEQyxTQUFTLEVBQUM7UUFDTkgsUUFBUSxFQUFFLElBQUk7UUFDZEMsSUFBSSxFQUFFQyxNQUFNO0tBQ2Y7SUFDREUsU0FBUyxFQUFDO1FBQ05KLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLElBQUksRUFBRUMsTUFBTTtLQUNmO0lBQ0RHLFVBQVUsRUFBRTtRQUNSTCxRQUFRLEVBQUUsSUFBSTtRQUNkQyxJQUFJLEVBQUVDLE1BQU07S0FDZjtJQUNESSxHQUFHLEVBQUU7UUFDRE4sUUFBUSxFQUFFLElBQUk7UUFDZEMsSUFBSSxFQUFFQyxNQUFNO0tBQ2Y7SUFDREssWUFBWSxFQUFFO1FBQ1ZQLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLElBQUksRUFBRUMsTUFBTTtLQUNmO0lBQ0RNLFdBQVcsRUFBRTtRQUNUUCxJQUFJLEVBQUVDLE1BQU07S0FDZjtJQUNETyxXQUFXLEVBQUU7UUFDVFIsSUFBSSxFQUFFQyxNQUFNO0tBQ2Y7Q0FDSixDQUFDO0FBRUZRLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHaEIsUUFBUSxDQUFDaUIsS0FBSyxDQUFDLE1BQU0sRUFBRWYsVUFBVSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbW9kZWxzL3Zlbk1vZGVsLmpzPzRmNTYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xuXG5jb25zdCBkYXRhU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgZnVsbE5hbWU6IHtcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgYmlydGhEYXRlOntcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgZGVhdGhEYXRlOntcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgcGljdHVyZVVSTDoge1xuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBiaW86IHtcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgZ3VhcmRpYW5Vc2VyOiB7XG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIGRhdGVDcmVhdGVkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgZGF0ZVVwZGF0ZWQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgfVxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbCgnRGF0YScsIGRhdGFTY2hlbWEpXG5cbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJkYXRhU2NoZW1hIiwiU2NoZW1hIiwiZnVsbE5hbWUiLCJyZXF1aXJlZCIsInR5cGUiLCJTdHJpbmciLCJiaXJ0aERhdGUiLCJkZWF0aERhdGUiLCJwaWN0dXJlVVJMIiwiYmlvIiwiZ3VhcmRpYW5Vc2VyIiwiZGF0ZUNyZWF0ZWQiLCJkYXRlVXBkYXRlZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/venModel.js\n");

/***/ }),

/***/ "(api)/./pages/api/veneration/save.js":
/*!**************************************!*\
  !*** ./pages/api/veneration/save.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ findVeneration)\n/* harmony export */ });\n/* harmony import */ var _utils_connectMongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectMongo */ \"(api)/./utils/connectMongo.js\");\n/* harmony import */ var _models_venModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/venModel */ \"(api)/./models/venModel.js\");\n/* harmony import */ var _models_venModel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_venModel__WEBPACK_IMPORTED_MODULE_1__);\n/* \nUses a given ID to update the corresponding document.\nRequest body example: Changing a person's middle name to Zoomer\n{\n    \"_id\": \"6351d6871586cb9e8425b18c\",\n    \"middleName\": \"Zoomer\"\n}\n*/ \n\nasync function findVeneration(req, res) {\n    try {\n        console.log(\"CONNECTING TO MONGO\");\n        await (0,_utils_connectMongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        console.log(\"CONNECTED TO MONGO\");\n        console.log(\"UPDATING DOCUMENT\");\n        const query = {\n            \"_id\": req.body._id\n        };\n        res.json(await _models_venModel__WEBPACK_IMPORTED_MODULE_1___default().findOneAndUpdate(query, {\n            $set: req.body\n        }));\n    } catch (error) {\n        console.log(error);\n        res.json({\n            error\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdmVuZXJhdGlvbi9zYXZlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7OztBQU9BLEdBRXVEO0FBQ0w7QUFFbkMsZUFBZUUsY0FBYyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNuRCxJQUFJO1FBQ0FDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkMsTUFBTU4sK0RBQVksRUFBRSxDQUFDO1FBQ3JCSyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRWxDRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLE1BQU1DLEtBQUssR0FBRztZQUFDLEtBQUssRUFBRUosR0FBRyxDQUFDSyxJQUFJLENBQUNDLEdBQUc7U0FBQztRQUNuQ0wsR0FBRyxDQUFDTSxJQUFJLENBQUMsTUFBTVQsd0VBQTJCLENBQUNNLEtBQUssRUFBRTtZQUFFSyxJQUFJLEVBQUVULEdBQUcsQ0FBQ0ssSUFBSTtTQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3pFLENBQUMsT0FBT0ssS0FBSyxFQUFFO1FBQ1pSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxLQUFLLENBQUMsQ0FBQztRQUNuQlQsR0FBRyxDQUFDTSxJQUFJLENBQUM7WUFBRUcsS0FBSztTQUFFLENBQUMsQ0FBQztLQUN2QjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3ZlbmVyYXRpb24vc2F2ZS5qcz9lZmM4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIFxuVXNlcyBhIGdpdmVuIElEIHRvIHVwZGF0ZSB0aGUgY29ycmVzcG9uZGluZyBkb2N1bWVudC5cblJlcXVlc3QgYm9keSBleGFtcGxlOiBDaGFuZ2luZyBhIHBlcnNvbidzIG1pZGRsZSBuYW1lIHRvIFpvb21lclxue1xuICAgIFwiX2lkXCI6IFwiNjM1MWQ2ODcxNTg2Y2I5ZTg0MjViMThjXCIsXG4gICAgXCJtaWRkbGVOYW1lXCI6IFwiWm9vbWVyXCJcbn1cbiovXG5cbmltcG9ydCBjb25uZWN0TW9uZ28gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29ubmVjdE1vbmdvJztcbmltcG9ydCBWZW5lcmF0aW9uIGZyb20gJy4uLy4uLy4uL21vZGVscy92ZW5Nb2RlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZpbmRWZW5lcmF0aW9uKHJlcSwgcmVzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NPTk5FQ1RJTkcgVE8gTU9OR08nKTtcbiAgICAgICAgYXdhaXQgY29ubmVjdE1vbmdvKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDT05ORUNURUQgVE8gTU9OR08nKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnVVBEQVRJTkcgRE9DVU1FTlQnKTtcbiAgICAgICAgY29uc3QgcXVlcnkgPSB7XCJfaWRcIjogcmVxLmJvZHkuX2lkfTtcbiAgICAgICAgcmVzLmpzb24oYXdhaXQgVmVuZXJhdGlvbi5maW5kT25lQW5kVXBkYXRlKHF1ZXJ5LCB7ICRzZXQ6IHJlcS5ib2R5fSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgcmVzLmpzb24oeyBlcnJvciB9KTtcbiAgICB9XG59Il0sIm5hbWVzIjpbImNvbm5lY3RNb25nbyIsIlZlbmVyYXRpb24iLCJmaW5kVmVuZXJhdGlvbiIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsImJvZHkiLCJfaWQiLCJqc29uIiwiZmluZE9uZUFuZFVwZGF0ZSIsIiRzZXQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/veneration/save.js\n");

/***/ }),

/***/ "(api)/./utils/connectMongo.js":
/*!*******************************!*\
  !*** ./utils/connectMongo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectMongo = async ()=>mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.DATABASE_URL);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb25uZWN0TW9uZ28uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLFlBQVksR0FBRyxVQUFZRCx1REFBZ0IsQ0FBQ0csT0FBTyxDQUFDQyxHQUFHLENBQUNDLFlBQVksQ0FBQztBQUUzRSxpRUFBZUosWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29ubmVjdE1vbmdvLmpzPzg2OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgY29ubmVjdE1vbmdvID0gYXN5bmMgKCkgPT4gbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwpO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0TW9uZ287Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdE1vbmdvIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJEQVRBQkFTRV9VUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/connectMongo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/veneration/save.js"));
module.exports = __webpack_exports__;

})();