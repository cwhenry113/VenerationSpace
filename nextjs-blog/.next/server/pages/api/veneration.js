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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// Schema for venerations\nconst venSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    timestamps: true,\n    unique: true,\n    //Required------------------------------------------\n    givenName: {\n        type: String,\n        required: true,\n        maxLength: 32,\n        minLength: 1\n    },\n    familyName: {\n        type: String,\n        required: true,\n        maxLength: 32,\n        minLength: 1\n    },\n    //Non-required--------------------------------------\n    middleName: {\n        type: String,\n        maxLength: 32\n    },\n    born: Date,\n    died: Date,\n    bio: String,\n    comments: [\n        String\n    ]\n});\nconst Veneration = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Veneration || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Veneration\", venSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Veneration);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdmVuTW9kZWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBRWpELHlCQUF5QjtBQUN6QixNQUFNRyxTQUFTLEdBQUcsSUFBSUgsNENBQU0sQ0FBQztJQUMzQkksVUFBVSxFQUFFLElBQUk7SUFDaEJDLE1BQU0sRUFBRSxJQUFJO0lBQ1osb0RBQW9EO0lBQ3BEQyxTQUFTLEVBQUU7UUFBQ0MsSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO1FBQUVDLFNBQVMsRUFBRSxFQUFFO1FBQUVDLFNBQVMsRUFBRSxDQUFDO0tBQUM7SUFDdEVDLFVBQVUsRUFBRTtRQUFDTCxJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7UUFBRUMsU0FBUyxFQUFFLEVBQUU7UUFBRUMsU0FBUyxFQUFFLENBQUM7S0FBQztJQUN2RSxvREFBb0Q7SUFDcERFLFVBQVUsRUFBRTtRQUFDTixJQUFJLEVBQUVDLE1BQU07UUFBRUUsU0FBUyxFQUFFLEVBQUU7S0FBQztJQUN6Q0ksSUFBSSxFQUFFQyxJQUFJO0lBQ1ZDLElBQUksRUFBRUQsSUFBSTtJQUNWRSxHQUFHLEVBQUVULE1BQU07SUFDWFUsUUFBUSxFQUFFO1FBQUNWLE1BQU07S0FBQztDQUNuQixDQUFDO0FBRUYsTUFBTVcsVUFBVSxHQUFHakIsdURBQWlCLElBQUlELCtDQUFLLENBQUMsWUFBWSxFQUFFRSxTQUFTLENBQUM7QUFDdEUsaUVBQWVnQixVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvdmVuTW9kZWwuanM/NGY1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEsIG1vZGVsLCBtb2RlbHMgfSBmcm9tICdtb25nb29zZSc7XHJcblxyXG4vLyBTY2hlbWEgZm9yIHZlbmVyYXRpb25zXHJcbmNvbnN0IHZlblNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gIHRpbWVzdGFtcHM6IHRydWUsXHJcbiAgdW5pcXVlOiB0cnVlLFxyXG4gIC8vUmVxdWlyZWQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBnaXZlbk5hbWU6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCBtYXhMZW5ndGg6IDMyLCBtaW5MZW5ndGg6IDF9LFxyXG4gIGZhbWlseU5hbWU6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCBtYXhMZW5ndGg6IDMyLCBtaW5MZW5ndGg6IDF9LFxyXG4gIC8vTm9uLXJlcXVpcmVkLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBtaWRkbGVOYW1lOiB7dHlwZTogU3RyaW5nLCBtYXhMZW5ndGg6IDMyfSxcclxuICBib3JuOiBEYXRlLFxyXG4gIGRpZWQ6IERhdGUsXHJcbiAgYmlvOiBTdHJpbmcsXHJcbiAgY29tbWVudHM6IFtTdHJpbmddXHJcbn0pO1xyXG5cclxuY29uc3QgVmVuZXJhdGlvbiA9IG1vZGVscy5WZW5lcmF0aW9uIHx8IG1vZGVsKCdWZW5lcmF0aW9uJywgdmVuU2NoZW1hKTtcclxuZXhwb3J0IGRlZmF1bHQgVmVuZXJhdGlvbjsiXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJ2ZW5TY2hlbWEiLCJ0aW1lc3RhbXBzIiwidW5pcXVlIiwiZ2l2ZW5OYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwibWF4TGVuZ3RoIiwibWluTGVuZ3RoIiwiZmFtaWx5TmFtZSIsIm1pZGRsZU5hbWUiLCJib3JuIiwiRGF0ZSIsImRpZWQiLCJiaW8iLCJjb21tZW50cyIsIlZlbmVyYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/venModel.js\n");

/***/ }),

/***/ "(api)/./pages/api/veneration/index.js":
/*!***************************************!*\
  !*** ./pages/api/veneration/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_connectMongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/connectMongo */ \"(api)/./utils/connectMongo.js\");\n/* harmony import */ var _models_venModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/venModel */ \"(api)/./models/venModel.js\");\n\n\nasync function handler(req, res) {\n    const { method  } = req;\n    await (0,_utils_connectMongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    switch(method){\n        case \"GET\":\n            try {\n                const vens = await _models_venModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n                res.status(200).json({\n                    success: true,\n                    data: vens\n                });\n            } catch (error) {\n                res.status(400).json({\n                    success: false\n                });\n            }\n            break;\n        case \"POST\":\n            try {\n                const ven = await _models_venModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(req.body);\n                /* create a new model in the database */ res.status(201).json({\n                    success: true,\n                    data: ven\n                });\n            } catch (error1) {\n                res.status(400).json({\n                    success: false\n                });\n            }\n            break;\n        default:\n            res.status(400).json({\n                success: false\n            });\n            break;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdmVuZXJhdGlvbi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0Q7QUFDTDtBQUVsQyxlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU0sRUFBRUMsTUFBTSxHQUFFLEdBQUdGLEdBQUc7SUFFdEIsTUFBTUgsK0RBQVksRUFBRTtJQUVwQixPQUFRSyxNQUFNO1FBQ1osS0FBSyxLQUFLO1lBQ1IsSUFBSTtnQkFDRixNQUFNQyxJQUFJLEdBQUcsTUFBTUwsNkRBQWUsQ0FBQyxFQUFFLENBQUM7Z0JBQ3RDRyxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFQyxPQUFPLEVBQUUsSUFBSTtvQkFBRUMsSUFBSSxFQUFFTCxJQUFJO2lCQUFFLENBQUM7YUFDcEQsQ0FBQyxPQUFPTSxLQUFLLEVBQUU7Z0JBQ2RSLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVDLE9BQU8sRUFBRSxLQUFLO2lCQUFFLENBQUM7YUFDekM7WUFDRCxNQUFLO1FBQ1AsS0FBSyxNQUFNO1lBQ1QsSUFBSTtnQkFDRixNQUFNRyxHQUFHLEdBQUcsTUFBTVosK0RBQWlCLENBQ2pDRSxHQUFHLENBQUNZLElBQUksQ0FDVDtnQkFBQyxzQ0FBc0MsR0FDeENYLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVDLE9BQU8sRUFBRSxJQUFJO29CQUFFQyxJQUFJLEVBQUVFLEdBQUc7aUJBQUUsQ0FBQzthQUNuRCxDQUFDLE9BQU9ELE1BQUssRUFBRTtnQkFDZFIsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRUMsT0FBTyxFQUFFLEtBQUs7aUJBQUUsQ0FBQzthQUN6QztZQUNELE1BQUs7UUFDUDtZQUNFTixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPLEVBQUUsS0FBSzthQUFFLENBQUM7WUFDeEMsTUFBSztLQUNSO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdmVuZXJhdGlvbi9pbmRleC5qcz9iZjdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0TW9uZ28gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29ubmVjdE1vbmdvJ1xyXG5pbXBvcnQgdmVuZXJhdGlvbiBmcm9tICcuLi8uLi8uLi9tb2RlbHMvdmVuTW9kZWwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgeyBtZXRob2QgfSA9IHJlcVxyXG5cclxuICBhd2FpdCBjb25uZWN0TW9uZ28oKVxyXG5cclxuICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgY2FzZSAnR0VUJzpcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB2ZW5zID0gYXdhaXQgdmVuZXJhdGlvbi5maW5kKHt9KVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdmVucyB9KVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSlcclxuICAgICAgfVxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnUE9TVCc6XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdmVuID0gYXdhaXQgdmVuZXJhdGlvbi5jcmVhdGUoXHJcbiAgICAgICAgICByZXEuYm9keVxyXG4gICAgICAgICkgLyogY3JlYXRlIGEgbmV3IG1vZGVsIGluIHRoZSBkYXRhYmFzZSAqL1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdmVuIH0pXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KVxyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pXHJcbiAgICAgIGJyZWFrXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjb25uZWN0TW9uZ28iLCJ2ZW5lcmF0aW9uIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInZlbnMiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJkYXRhIiwiZXJyb3IiLCJ2ZW4iLCJjcmVhdGUiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/veneration/index.js\n");

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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/veneration/index.js"));
module.exports = __webpack_exports__;

})();