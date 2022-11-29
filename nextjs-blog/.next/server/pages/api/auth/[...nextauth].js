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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = _interopRequireDefault;\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanM/NzI1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "(api)/./models/account.js":
/*!***************************!*\
  !*** ./models/account.js ***!
  \***************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _interopRequireDefault = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nconst _mongoose = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst userSchema = new _mongoose.default.Schema({\n    username: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    admin: {\n        type: String,\n        required: true\n    },\n    name: {\n        type: String,\n        required: true\n    }\n});\nmodule.exports = _mongoose.default.models.User || _mongoose.default.model(\"User\", userSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvYWNjb3VudC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7MkVBQXFCLDBCQUFVO0FBRS9CLE1BQU1BLFVBQVUsR0FBRyxJQUFJQyxTQUFRLFNBQUNDLE1BQU0sQ0FBQztJQUNuQ0MsUUFBUSxFQUFDO1FBQ0xDLElBQUksRUFBQ0MsTUFBTTtRQUNYQyxRQUFRLEVBQUMsSUFBSTtRQUNiQyxNQUFNLEVBQUMsSUFBSTtLQUNkO0lBQ0RDLFFBQVEsRUFBQztRQUNMSixJQUFJLEVBQUNDLE1BQU07UUFDWEMsUUFBUSxFQUFDLElBQUk7S0FDaEI7SUFDREcsS0FBSyxFQUFDO1FBQ0ZMLElBQUksRUFBQ0MsTUFBTTtRQUNYQyxRQUFRLEVBQUMsSUFBSTtLQUNoQjtJQUNESSxLQUFLLEVBQUM7UUFDRk4sSUFBSSxFQUFDQyxNQUFNO1FBQ1hDLFFBQVEsRUFBQyxJQUFJO0tBQ2hCO0lBQ0RLLElBQUksRUFBQztRQUNEUCxJQUFJLEVBQUNDLE1BQU07UUFDWEMsUUFBUSxFQUFDLElBQUk7S0FDaEI7Q0FDSixDQUFDO0FBRUZNLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHWixTQUFRLFNBQUNhLE1BQU0sQ0FBQ0MsSUFBSSxJQUFJZCxTQUFRLFNBQUNlLEtBQUssQ0FBQyxNQUFNLEVBQUNoQixVQUFVLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvYWNjb3VudC5qcz9mOTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIHVzZXJuYW1lOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlLFxyXG4gICAgICAgIHVuaXF1ZTp0cnVlXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWVcclxuICAgIH0sXHJcbiAgICBlbWFpbDp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIGFkbWluOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgbmFtZTp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbCgnVXNlcicsdXNlclNjaGVtYSkiXSwibmFtZXMiOlsidXNlclNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwidXNlcm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJwYXNzd29yZCIsImVtYWlsIiwiYWRtaW4iLCJuYW1lIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/account.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_connectMongo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/connectMongo */ \"(api)/./utils/connectMongo.js\");\n/* harmony import */ var _models_account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/account */ \"(api)/./models/account.js\");\n/* harmony import */ var _models_account__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_models_account__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n(0,_utils_connectMongo__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nconst authOptions = {\n    pages: {\n        signIn: \"/statpages/login\"\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            name: \"credentials\",\n            async authorize (credentials, req) {\n                const username = credentials.username;\n                const password = credentials.password;\n                const admin = \"true\";\n                // find by username: credentials.username, password: credentials.password\n                // if found then determine if admin and return admin and username\n                const adminUser = await _models_account__WEBPACK_IMPORTED_MODULE_3___default().findOne({\n                    \"username\": username,\n                    \"password\": password,\n                    \"admin\": admin\n                });\n                if (adminUser) {\n                    return {\n                        name: credentials.username,\n                        guardian: \"true\"\n                    };\n                } else {\n                    const user = await _models_account__WEBPACK_IMPORTED_MODULE_3___default().findOne({\n                        \"username\": username,\n                        \"password\": password\n                    });\n                    if (user) {\n                        console.log(\"user\");\n                        return {\n                            name: credentials.username,\n                            guardian: \"false\"\n                        };\n                    } else {\n                        return null;\n                    }\n                }\n            }\n        })\n    ],\n    callbacks: {\n        jwt: ({ token , user  })=>{\n            // first time jwt callback is run, user object is available\n            if (user) {\n                token.guardian = user.guardian;\n            }\n            return token;\n        },\n        session: ({ session , token  })=>{\n            if (token) {\n                session.guardian = token.guardian;\n            }\n            return session;\n        }\n    },\n    jwt: {\n        secret: \"test\",\n        encryption: true\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFnQztBQUNpQztBQUNWO0FBQ1Q7QUFDOUNFLCtEQUFZLEVBQUUsQ0FBQztBQUNSLE1BQU1FLFdBQVcsR0FBRztJQUN2QkMsS0FBSyxFQUFFO1FBQ0hDLE1BQU0sRUFBRSxrQkFBa0I7S0FDN0I7SUFDREMsU0FBUyxFQUFFO1FBQ1BOLHNFQUFtQixDQUFDO1lBQ2hCTyxJQUFJLEVBQUUsYUFBYTtZQUNuQixNQUFNQyxTQUFTLEVBQUNDLFdBQVcsRUFBRUMsR0FBRyxFQUFFO2dCQUM5QixNQUFNQyxRQUFRLEdBQUdGLFdBQVcsQ0FBQ0UsUUFBUTtnQkFDckMsTUFBTUMsUUFBUSxHQUFHSCxXQUFXLENBQUNHLFFBQVE7Z0JBQ3JDLE1BQU1DLEtBQUssR0FBRyxNQUFNO2dCQUNwQix5RUFBeUU7Z0JBQ3pFLGlFQUFpRTtnQkFDakUsTUFBTUMsU0FBUyxHQUFHLE1BQU1aLDhEQUFlLENBQUM7b0JBQUMsVUFBVSxFQUFFUyxRQUFRO29CQUFFLFVBQVUsRUFBRUMsUUFBUTtvQkFBRSxPQUFPLEVBQUNDLEtBQUs7aUJBQUMsQ0FBQztnQkFDcEcsSUFBR0MsU0FBUyxFQUFDO29CQUNYLE9BQU87d0JBQ0xQLElBQUksRUFBRUUsV0FBVyxDQUFDRSxRQUFRO3dCQUMxQkssUUFBUSxFQUFDLE1BQU07cUJBQ2hCO2lCQUNGLE1BQ0c7b0JBQ0YsTUFBTUMsSUFBSSxHQUFHLE1BQU1mLDhEQUFlLENBQUM7d0JBQUMsVUFBVSxFQUFFUyxRQUFRO3dCQUFFLFVBQVUsRUFBRUMsUUFBUTtxQkFBQyxDQUFDO29CQUNoRixJQUFHSyxJQUFJLEVBQUM7d0JBQ05DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNwQixPQUFPOzRCQUNMWixJQUFJLEVBQUVFLFdBQVcsQ0FBQ0UsUUFBUTs0QkFDMUJLLFFBQVEsRUFBQyxPQUFPO3lCQUNqQjtxQkFDRixNQUNHO3dCQUNGLE9BQU8sSUFBSSxDQUFFO3FCQUNkO2lCQUNGO2FBQ0o7U0FDSixDQUFDO0tBQ0w7SUFDREksU0FBUyxFQUFFO1FBQ1BDLEdBQUcsRUFBRSxDQUFDLEVBQUVDLEtBQUssR0FBRUwsSUFBSSxHQUFFLEdBQUs7WUFDeEIsMkRBQTJEO1lBQzNELElBQUlBLElBQUksRUFBRTtnQkFDUkssS0FBSyxDQUFDTixRQUFRLEdBQUdDLElBQUksQ0FBQ0QsUUFBUSxDQUFDO2FBQ2hDO1lBQ0QsT0FBT00sS0FBSyxDQUFDO1NBQ2Q7UUFDREMsT0FBTyxFQUFFLENBQUMsRUFBRUEsT0FBTyxHQUFFRCxLQUFLLEdBQUUsR0FBSztZQUMvQixJQUFJQSxLQUFLLEVBQUU7Z0JBQ1RDLE9BQU8sQ0FBQ1AsUUFBUSxHQUFHTSxLQUFLLENBQUNOLFFBQVEsQ0FBQzthQUNuQztZQUVELE9BQU9PLE9BQU8sQ0FBQztTQUNoQjtLQUNGO0lBQ0RGLEdBQUcsRUFBRTtRQUNIRyxNQUFNLEVBQUUsTUFBTTtRQUNkQyxVQUFVLEVBQUUsSUFBSTtLQUNqQjtDQUNOO0FBRUQsaUVBQWUxQixnREFBUSxDQUFDSSxXQUFXLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiXHJcbmltcG9ydCBjb25uZWN0TW9uZ28gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY29ubmVjdE1vbmdvJztcclxuaW1wb3J0IEFjY291bnQgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2FjY291bnQnO1xyXG5jb25uZWN0TW9uZ28oKTtcclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xyXG4gICAgcGFnZXM6IHtcclxuICAgICAgICBzaWduSW46IFwiL3N0YXRwYWdlcy9sb2dpblwiXHJcbiAgICB9LFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiY3JlZGVudGlhbHNcIixcclxuICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gY3JlZGVudGlhbHMudXNlcm5hbWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXNzd29yZCA9IGNyZWRlbnRpYWxzLnBhc3N3b3JkO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWRtaW4gPSBcInRydWVcIjtcclxuICAgICAgICAgICAgICAgIC8vIGZpbmQgYnkgdXNlcm5hbWU6IGNyZWRlbnRpYWxzLnVzZXJuYW1lLCBwYXNzd29yZDogY3JlZGVudGlhbHMucGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIC8vIGlmIGZvdW5kIHRoZW4gZGV0ZXJtaW5lIGlmIGFkbWluIGFuZCByZXR1cm4gYWRtaW4gYW5kIHVzZXJuYW1lXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhZG1pblVzZXIgPSBhd2FpdCBBY2NvdW50LmZpbmRPbmUoe1widXNlcm5hbWVcIjogdXNlcm5hbWUsIFwicGFzc3dvcmRcIjogcGFzc3dvcmQsIFwiYWRtaW5cIjphZG1pbn0pO1xyXG4gICAgICAgICAgICAgICAgaWYoYWRtaW5Vc2VyKXtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBjcmVkZW50aWFscy51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBndWFyZGlhbjpcInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgQWNjb3VudC5maW5kT25lKHtcInVzZXJuYW1lXCI6IHVzZXJuYW1lLCBcInBhc3N3b3JkXCI6IHBhc3N3b3JkfSk7XHJcbiAgICAgICAgICAgICAgICAgIGlmKHVzZXIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogY3JlZGVudGlhbHMudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBndWFyZGlhbjpcImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4obnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICBdLFxyXG4gICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgand0OiAoeyB0b2tlbiwgdXNlciB9KSA9PiB7XHJcbiAgICAgICAgICAvLyBmaXJzdCB0aW1lIGp3dCBjYWxsYmFjayBpcyBydW4sIHVzZXIgb2JqZWN0IGlzIGF2YWlsYWJsZVxyXG4gICAgICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICAgICAgdG9rZW4uZ3VhcmRpYW4gPSB1c2VyLmd1YXJkaWFuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Vzc2lvbjogKHsgc2Vzc2lvbiwgdG9rZW4gfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHNlc3Npb24uZ3VhcmRpYW4gPSB0b2tlbi5ndWFyZGlhbjtcclxuICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgand0OiB7XHJcbiAgICAgICAgc2VjcmV0OiBcInRlc3RcIixcclxuICAgICAgICBlbmNyeXB0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucykiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiY29ubmVjdE1vbmdvIiwiQWNjb3VudCIsImF1dGhPcHRpb25zIiwicGFnZXMiLCJzaWduSW4iLCJwcm92aWRlcnMiLCJuYW1lIiwiYXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJyZXEiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYWRtaW4iLCJhZG1pblVzZXIiLCJmaW5kT25lIiwiZ3VhcmRpYW4iLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwic2Vzc2lvbiIsInNlY3JldCIsImVuY3J5cHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();