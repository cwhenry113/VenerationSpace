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
exports.id = "pages/api/veneration/find";
exports.ids = ["pages/api/veneration/find"];
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// Schema for venerations\nconst venSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    //Required------------------------------------------\n    givenName: {\n        type: String,\n        required: true,\n        maxLength: 32,\n        minLength: 1\n    },\n    familyName: {\n        type: String,\n        required: true,\n        maxLength: 32,\n        minLength: 1\n    },\n    //Non-required--------------------------------------\n    middleName: {\n        type: String,\n        maxLength: 32\n    },\n    born: Date,\n    died: Date,\n    bio: String,\n    comments: [\n        String\n    ]\n}, {\n    timestamps: true,\n    unique: true\n});\nconst Veneration = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Veneration || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Veneration\", venSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Veneration);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdmVuTW9kZWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBRWpELHlCQUF5QjtBQUN6QixNQUFNRyxTQUFTLEdBQUcsSUFBSUgsNENBQU0sQ0FBQztJQUMzQixvREFBb0Q7SUFDcERJLFNBQVMsRUFBRTtRQUFFQyxJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7UUFBRUMsU0FBUyxFQUFFLEVBQUU7UUFBRUMsU0FBUyxFQUFFLENBQUM7S0FBRTtJQUN4RUMsVUFBVSxFQUFFO1FBQUVMLElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtRQUFFQyxTQUFTLEVBQUUsRUFBRTtRQUFFQyxTQUFTLEVBQUUsQ0FBQztLQUFFO0lBQ3pFLG9EQUFvRDtJQUNwREUsVUFBVSxFQUFFO1FBQUVOLElBQUksRUFBRUMsTUFBTTtRQUFFRSxTQUFTLEVBQUUsRUFBRTtLQUFFO0lBQzNDSSxJQUFJLEVBQUVDLElBQUk7SUFDVkMsSUFBSSxFQUFFRCxJQUFJO0lBQ1ZFLEdBQUcsRUFBRVQsTUFBTTtJQUNYVSxRQUFRLEVBQUU7UUFBQ1YsTUFBTTtLQUFDO0NBQ25CLEVBQ0M7SUFDRVcsVUFBVSxFQUFFLElBQUk7SUFDaEJDLE1BQU0sRUFBRSxJQUFJO0NBQ2IsQ0FDRjtBQUVELE1BQU1DLFVBQVUsR0FBR2pCLHVEQUFpQixJQUFJRCwrQ0FBSyxDQUFDLFlBQVksRUFBRUUsU0FBUyxDQUFDO0FBQ3RFLGlFQUFlZ0IsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbW9kZWxzL3Zlbk1vZGVsLmpzPzRmNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCwgbW9kZWxzIH0gZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuLy8gU2NoZW1hIGZvciB2ZW5lcmF0aW9uc1xyXG5jb25zdCB2ZW5TY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICAvL1JlcXVpcmVkLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgZ2l2ZW5OYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIG1heExlbmd0aDogMzIsIG1pbkxlbmd0aDogMSB9LFxyXG4gIGZhbWlseU5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgbWF4TGVuZ3RoOiAzMiwgbWluTGVuZ3RoOiAxIH0sXHJcbiAgLy9Ob24tcmVxdWlyZWQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIG1pZGRsZU5hbWU6IHsgdHlwZTogU3RyaW5nLCBtYXhMZW5ndGg6IDMyIH0sXHJcbiAgYm9ybjogRGF0ZSxcclxuICBkaWVkOiBEYXRlLFxyXG4gIGJpbzogU3RyaW5nLFxyXG4gIGNvbW1lbnRzOiBbU3RyaW5nXVxyXG59LFxyXG4gIHtcclxuICAgIHRpbWVzdGFtcHM6IHRydWUsXHJcbiAgICB1bmlxdWU6IHRydWVcclxuICB9XHJcbik7XHJcblxyXG5jb25zdCBWZW5lcmF0aW9uID0gbW9kZWxzLlZlbmVyYXRpb24gfHwgbW9kZWwoJ1ZlbmVyYXRpb24nLCB2ZW5TY2hlbWEpO1xyXG5leHBvcnQgZGVmYXVsdCBWZW5lcmF0aW9uOyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb2RlbCIsIm1vZGVscyIsInZlblNjaGVtYSIsImdpdmVuTmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm1heExlbmd0aCIsIm1pbkxlbmd0aCIsImZhbWlseU5hbWUiLCJtaWRkbGVOYW1lIiwiYm9ybiIsIkRhdGUiLCJkaWVkIiwiYmlvIiwiY29tbWVudHMiLCJ0aW1lc3RhbXBzIiwidW5pcXVlIiwiVmVuZXJhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/venModel.js\n");

/***/ }),

/***/ "(api)/./pages/api/veneration/find.js":
/*!**************************************!*\
  !*** ./pages/api/veneration/find.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ findVeneration)\n/* harmony export */ });\n/* harmony import */ var _utils_connectMongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectMongo */ \"(api)/./utils/connectMongo.js\");\n/* harmony import */ var _models_venModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/venModel */ \"(api)/./models/venModel.js\");\n\n\nasync function findVeneration(req, res) {\n    try {\n        console.log(\"CONNECTING TO MONGO\");\n        await (0,_utils_connectMongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        console.log(\"CONNECTED TO MONGO\");\n        console.log(\"FINDING DOCUMENT\");\n        const foundVen = await _models_venModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(req.body).exec();\n        res.json({\n            foundVen\n        });\n    } catch (error) {\n        console.log(error);\n        res.json({\n            error\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdmVuZXJhdGlvbi9maW5kLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1RDtBQUNMO0FBRW5DLGVBQWVFLGNBQWMsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDbkQsSUFBSTtRQUNBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ25DLE1BQU1OLCtEQUFZLEVBQUUsQ0FBQztRQUNyQkssT0FBTyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUVsQ0QsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxNQUFNQyxRQUFRLEdBQUcsTUFBTU4sNkRBQWUsQ0FBQ0UsR0FBRyxDQUFDTSxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxFQUFFO1FBQ3ZETixHQUFHLENBQUNPLElBQUksQ0FBQztZQUFFSixRQUFRO1NBQUUsQ0FBQyxDQUFDO0tBQzFCLENBQUMsT0FBT0ssS0FBSyxFQUFFO1FBQ1pQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxLQUFLLENBQUMsQ0FBQztRQUNuQlIsR0FBRyxDQUFDTyxJQUFJLENBQUM7WUFBRUMsS0FBSztTQUFFLENBQUMsQ0FBQztLQUN2QjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3ZlbmVyYXRpb24vZmluZC5qcz8zMzkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0TW9uZ28gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29ubmVjdE1vbmdvJztcclxuaW1wb3J0IFZlbmVyYXRpb24gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3Zlbk1vZGVsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZpbmRWZW5lcmF0aW9uKHJlcSwgcmVzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDT05ORUNUSU5HIFRPIE1PTkdPJyk7XHJcbiAgICAgICAgYXdhaXQgY29ubmVjdE1vbmdvKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NPTk5FQ1RFRCBUTyBNT05HTycpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnRklORElORyBET0NVTUVOVCcpO1xyXG4gICAgICAgIGNvbnN0IGZvdW5kVmVuID0gYXdhaXQgVmVuZXJhdGlvbi5maW5kKHJlcS5ib2R5KS5leGVjKCk7XHJcbiAgICAgICAgcmVzLmpzb24oeyBmb3VuZFZlbiB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIHJlcy5qc29uKHsgZXJyb3IgfSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiY29ubmVjdE1vbmdvIiwiVmVuZXJhdGlvbiIsImZpbmRWZW5lcmF0aW9uIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImZvdW5kVmVuIiwiZmluZCIsImJvZHkiLCJleGVjIiwianNvbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/veneration/find.js\n");

/***/ }),

/***/ "(api)/./utils/connectMongo.js":
/*!*******************************!*\
  !*** ./utils/connectMongo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectMongo = async ()=>mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.DATABASE_URL);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9jb25uZWN0TW9uZ28uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLFlBQVksR0FBRyxVQUFZRCx1REFBZ0IsQ0FBQ0csT0FBTyxDQUFDQyxHQUFHLENBQUNDLFlBQVksQ0FBQztBQUUzRSxpRUFBZUosWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29ubmVjdE1vbmdvLmpzPzg2OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IGNvbm5lY3RNb25nbyA9IGFzeW5jICgpID0+IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RNb25nbzsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0TW9uZ28iLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFX1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/connectMongo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/veneration/find.js"));
module.exports = __webpack_exports__;

})();