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
exports.id = "pages/api/veneration";
exports.ids = ["pages/api/veneration"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// Schema for venerations\nconst venSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    //Required------------------------------------------\n    givenName: {\n        type: String,\n        required: true,\n        maxLength: 32,\n        minLength: 1\n    },\n    familyName: {\n        type: String,\n        required: true,\n        maxLength: 32,\n        minLength: 1\n    },\n    //Non-required--------------------------------------\n    middleName: {\n        type: String,\n        maxLength: 32\n    },\n    born: Date,\n    died: Date,\n    bio: String,\n    comments: [\n        String\n    ]\n}, {\n    timestamps: true,\n    unique: true\n});\nconst Veneration = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Veneration || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Veneration\", venSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Veneration);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdmVuTW9kZWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBRWpELHlCQUF5QjtBQUN6QixNQUFNRyxTQUFTLEdBQUcsSUFBSUgsNENBQU0sQ0FBQztJQUMzQixvREFBb0Q7SUFDcERJLFNBQVMsRUFBRTtRQUFFQyxJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7UUFBRUMsU0FBUyxFQUFFLEVBQUU7UUFBRUMsU0FBUyxFQUFFLENBQUM7S0FBRTtJQUN4RUMsVUFBVSxFQUFFO1FBQUVMLElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtRQUFFQyxTQUFTLEVBQUUsRUFBRTtRQUFFQyxTQUFTLEVBQUUsQ0FBQztLQUFFO0lBQ3pFLG9EQUFvRDtJQUNwREUsVUFBVSxFQUFFO1FBQUVOLElBQUksRUFBRUMsTUFBTTtRQUFFRSxTQUFTLEVBQUUsRUFBRTtLQUFFO0lBQzNDSSxJQUFJLEVBQUVDLElBQUk7SUFDVkMsSUFBSSxFQUFFRCxJQUFJO0lBQ1ZFLEdBQUcsRUFBRVQsTUFBTTtJQUNYVSxRQUFRLEVBQUU7UUFBQ1YsTUFBTTtLQUFDO0NBQ25CLEVBQ0M7SUFDRVcsVUFBVSxFQUFFLElBQUk7SUFDaEJDLE1BQU0sRUFBRSxJQUFJO0NBQ2IsQ0FDRjtBQUVELE1BQU1DLFVBQVUsR0FBR2pCLHVEQUFpQixJQUFJRCwrQ0FBSyxDQUFDLFlBQVksRUFBRUUsU0FBUyxDQUFDO0FBQ3RFLGlFQUFlZ0IsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbW9kZWxzL3Zlbk1vZGVsLmpzPzRmNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbCwgbW9kZWxzIH0gZnJvbSAnbW9uZ29vc2UnO1xuXG4vLyBTY2hlbWEgZm9yIHZlbmVyYXRpb25zXG5jb25zdCB2ZW5TY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgLy9SZXF1aXJlZC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnaXZlbk5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgbWF4TGVuZ3RoOiAzMiwgbWluTGVuZ3RoOiAxIH0sXG4gIGZhbWlseU5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgbWF4TGVuZ3RoOiAzMiwgbWluTGVuZ3RoOiAxIH0sXG4gIC8vTm9uLXJlcXVpcmVkLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbWlkZGxlTmFtZTogeyB0eXBlOiBTdHJpbmcsIG1heExlbmd0aDogMzIgfSxcbiAgYm9ybjogRGF0ZSxcbiAgZGllZDogRGF0ZSxcbiAgYmlvOiBTdHJpbmcsXG4gIGNvbW1lbnRzOiBbU3RyaW5nXVxufSxcbiAge1xuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gICAgdW5pcXVlOiB0cnVlXG4gIH1cbik7XG5cbmNvbnN0IFZlbmVyYXRpb24gPSBtb2RlbHMuVmVuZXJhdGlvbiB8fCBtb2RlbCgnVmVuZXJhdGlvbicsIHZlblNjaGVtYSk7XG5leHBvcnQgZGVmYXVsdCBWZW5lcmF0aW9uOyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb2RlbCIsIm1vZGVscyIsInZlblNjaGVtYSIsImdpdmVuTmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIm1heExlbmd0aCIsIm1pbkxlbmd0aCIsImZhbWlseU5hbWUiLCJtaWRkbGVOYW1lIiwiYm9ybiIsIkRhdGUiLCJkaWVkIiwiYmlvIiwiY29tbWVudHMiLCJ0aW1lc3RhbXBzIiwidW5pcXVlIiwiVmVuZXJhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/venModel.js\n");

/***/ }),

/***/ "(api)/./pages/api/veneration/index.js":
/*!***************************************!*\
  !*** ./pages/api/veneration/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_connectMongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectMongo */ \"(api)/./utils/connectMongo.js\");\n/* harmony import */ var _models_venModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/venModel */ \"(api)/./models/venModel.js\");\n\n\nasync function handler(req, res) {\n    const { method  } = req;\n    await (0,_utils_connectMongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    switch(method){\n        case \"GET\":\n            try {\n                const vens = await _models_venModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n                res.status(200).json({\n                    success: true,\n                    data: vens\n                });\n            } catch (error) {\n                res.status(400).json({\n                    success: false\n                });\n            }\n            break;\n        case \"POST\":\n            try {\n                const ven = await _models_venModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(req.body);\n                /* create a new model in the database */ res.status(201).json({\n                    success: true,\n                    data: ven\n                });\n            } catch (error1) {\n                res.status(400).json({\n                    success: false\n                });\n            }\n            break;\n        default:\n            res.status(400).json({\n                success: false\n            });\n            break;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdmVuZXJhdGlvbi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0Q7QUFDTDtBQUVsQyxlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU0sRUFBRUMsTUFBTSxHQUFFLEdBQUdGLEdBQUc7SUFFdEIsTUFBTUgsK0RBQVksRUFBRTtJQUVwQixPQUFRSyxNQUFNO1FBQ1osS0FBSyxLQUFLO1lBQ1IsSUFBSTtnQkFDRixNQUFNQyxJQUFJLEdBQUcsTUFBTUwsNkRBQWUsQ0FBQyxFQUFFLENBQUM7Z0JBQ3RDRyxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFQyxPQUFPLEVBQUUsSUFBSTtvQkFBRUMsSUFBSSxFQUFFTCxJQUFJO2lCQUFFLENBQUM7YUFDcEQsQ0FBQyxPQUFPTSxLQUFLLEVBQUU7Z0JBQ2RSLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVDLE9BQU8sRUFBRSxLQUFLO2lCQUFFLENBQUM7YUFDekM7WUFDRCxNQUFLO1FBQ1AsS0FBSyxNQUFNO1lBQ1QsSUFBSTtnQkFDRixNQUFNRyxHQUFHLEdBQUcsTUFBTVosK0RBQWlCLENBQ2pDRSxHQUFHLENBQUNZLElBQUksQ0FDVDtnQkFBQyxzQ0FBc0MsR0FDeENYLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVDLE9BQU8sRUFBRSxJQUFJO29CQUFFQyxJQUFJLEVBQUVFLEdBQUc7aUJBQUUsQ0FBQzthQUNuRCxDQUFDLE9BQU9ELE1BQUssRUFBRTtnQkFDZFIsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRUMsT0FBTyxFQUFFLEtBQUs7aUJBQUUsQ0FBQzthQUN6QztZQUNELE1BQUs7UUFDUDtZQUNFTixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPLEVBQUUsS0FBSzthQUFFLENBQUM7WUFDeEMsTUFBSztLQUNSO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdmVuZXJhdGlvbi9pbmRleC5qcz9iZjdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0TW9uZ28gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29ubmVjdE1vbmdvJ1xuaW1wb3J0IHZlbmVyYXRpb24gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3Zlbk1vZGVsJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgbWV0aG9kIH0gPSByZXFcblxuICBhd2FpdCBjb25uZWN0TW9uZ28oKVxuXG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSAnR0VUJzpcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHZlbnMgPSBhd2FpdCB2ZW5lcmF0aW9uLmZpbmQoe30pXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdmVucyB9KVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KVxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdQT1NUJzpcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHZlbiA9IGF3YWl0IHZlbmVyYXRpb24uY3JlYXRlKFxuICAgICAgICAgIHJlcS5ib2R5XG4gICAgICAgICkgLyogY3JlYXRlIGEgbmV3IG1vZGVsIGluIHRoZSBkYXRhYmFzZSAqL1xuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHZlbiB9KVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KVxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KVxuICAgICAgYnJlYWtcbiAgfVxufSJdLCJuYW1lcyI6WyJjb25uZWN0TW9uZ28iLCJ2ZW5lcmF0aW9uIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInZlbnMiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJkYXRhIiwiZXJyb3IiLCJ2ZW4iLCJjcmVhdGUiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/veneration/index.js\n");

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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/veneration/index.js"));
module.exports = __webpack_exports__;

})();