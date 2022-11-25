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

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_connectMongo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/connectMongo */ \"(api)/./utils/connectMongo.js\");\n\n\n\n(0,_utils_connectMongo__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nconst authOptions = {\n    pages: {\n        signIn: \"/statpages/login\"\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            name: \"credentials\",\n            async authorize (credentials, req) {\n                const username = credentials.username;\n                const password = credentials.password;\n                if (credentials.username === \"abc\" && credentials.password === \"test\") {\n                    return {\n                        name: credentials.username,\n                        guardian: \"true\"\n                    };\n                }\n                if (credentials.username === \"123\" && credentials.password === \"123\") {\n                    return {\n                        name: credentials.username,\n                        guardian: \"false\"\n                    };\n                }\n                return null;\n            }\n        })\n    ],\n    callbacks: {\n        jwt: ({ token , user  })=>{\n            // first time jwt callback is run, user object is available\n            if (user) {\n                token.guardian = user.guardian;\n            }\n            return token;\n        },\n        session: ({ session , token  })=>{\n            if (token) {\n                session.guardian = token.guardian;\n            }\n            return session;\n        }\n    },\n    jwt: {\n        secret: \"test\",\n        encryption: true\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFDaUM7QUFDVjtBQUN2REUsK0RBQVksRUFBRSxDQUFDO0FBQ1IsTUFBTUMsV0FBVyxHQUFHO0lBQ3ZCQyxLQUFLLEVBQUU7UUFDSEMsTUFBTSxFQUFFLGtCQUFrQjtLQUM3QjtJQUNEQyxTQUFTLEVBQUU7UUFDUEwsc0VBQW1CLENBQUM7WUFDaEJNLElBQUksRUFBRSxhQUFhO1lBQ25CLE1BQU1DLFNBQVMsRUFBQ0MsV0FBVyxFQUFFQyxHQUFHLEVBQUU7Z0JBQzlCLE1BQU1DLFFBQVEsR0FBR0YsV0FBVyxDQUFDRSxRQUFRO2dCQUNyQyxNQUFNQyxRQUFRLEdBQUdILFdBQVcsQ0FBQ0csUUFBUTtnQkFDckMsSUFBR0gsV0FBVyxDQUFDRSxRQUFRLEtBQUssS0FBSyxJQUFJRixXQUFXLENBQUNHLFFBQVEsS0FBSyxNQUFNLEVBQUU7b0JBQ2xFLE9BQU87d0JBQ0NMLElBQUksRUFBRUUsV0FBVyxDQUFDRSxRQUFRO3dCQUMxQkUsUUFBUSxFQUFDLE1BQU07cUJBQ3RCO2lCQUNKO2dCQUNELElBQUdKLFdBQVcsQ0FBQ0UsUUFBUSxLQUFLLEtBQUssSUFBSUYsV0FBVyxDQUFDRyxRQUFRLEtBQUssS0FBSyxFQUFFO29CQUNqRSxPQUFPO3dCQUNDTCxJQUFJLEVBQUVFLFdBQVcsQ0FBQ0UsUUFBUTt3QkFDMUJFLFFBQVEsRUFBQyxPQUFPO3FCQUN2QjtpQkFDSjtnQkFFRCxPQUFPLElBQUk7YUFDZDtTQUNKLENBQUM7S0FDTDtJQUNEQyxTQUFTLEVBQUU7UUFDUEMsR0FBRyxFQUFFLENBQUMsRUFBRUMsS0FBSyxHQUFFQyxJQUFJLEdBQUUsR0FBSztZQUN4QiwyREFBMkQ7WUFDM0QsSUFBSUEsSUFBSSxFQUFFO2dCQUNSRCxLQUFLLENBQUNILFFBQVEsR0FBR0ksSUFBSSxDQUFDSixRQUFRLENBQUM7YUFDaEM7WUFFRCxPQUFPRyxLQUFLLENBQUM7U0FDZDtRQUNERSxPQUFPLEVBQUUsQ0FBQyxFQUFFQSxPQUFPLEdBQUVGLEtBQUssR0FBRSxHQUFLO1lBQy9CLElBQUlBLEtBQUssRUFBRTtnQkFDVEUsT0FBTyxDQUFDTCxRQUFRLEdBQUdHLEtBQUssQ0FBQ0gsUUFBUSxDQUFDO2FBQ25DO1lBRUQsT0FBT0ssT0FBTyxDQUFDO1NBQ2hCO0tBQ0Y7SUFDREgsR0FBRyxFQUFFO1FBQ0hJLE1BQU0sRUFBRSxNQUFNO1FBQ2RDLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0NBQ047QUFFRCxpRUFBZXBCLGdEQUFRLENBQUNHLFdBQVcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiXG5pbXBvcnQgY29ubmVjdE1vbmdvIGZyb20gJy4uLy4uLy4uL3V0aWxzL2Nvbm5lY3RNb25nbyc7XG5jb25uZWN0TW9uZ28oKTtcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgICBwYWdlczoge1xuICAgICAgICBzaWduSW46IFwiL3N0YXRwYWdlcy9sb2dpblwiXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICAgICAgICBuYW1lOiBcImNyZWRlbnRpYWxzXCIsXG4gICAgICAgICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gY3JlZGVudGlhbHMudXNlcm5hbWU7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBjcmVkZW50aWFscy5wYXNzd29yZDtcbiAgICAgICAgICAgICAgICBpZihjcmVkZW50aWFscy51c2VybmFtZSA9PT0gXCJhYmNcIiAmJiBjcmVkZW50aWFscy5wYXNzd29yZCA9PT0gXCJ0ZXN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjcmVkZW50aWFscy51c2VybmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWFyZGlhbjpcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGNyZWRlbnRpYWxzLnVzZXJuYW1lID09PSBcIjEyM1wiICYmIGNyZWRlbnRpYWxzLnBhc3N3b3JkID09PSBcIjEyM1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogY3JlZGVudGlhbHMudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3VhcmRpYW46XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIF0sXG4gICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIGp3dDogKHsgdG9rZW4sIHVzZXIgfSkgPT4ge1xuICAgICAgICAgIC8vIGZpcnN0IHRpbWUgand0IGNhbGxiYWNrIGlzIHJ1biwgdXNlciBvYmplY3QgaXMgYXZhaWxhYmxlXG4gICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIHRva2VuLmd1YXJkaWFuID0gdXNlci5ndWFyZGlhbjtcbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9LFxuICAgICAgICBzZXNzaW9uOiAoeyBzZXNzaW9uLCB0b2tlbiB9KSA9PiB7XG4gICAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICBzZXNzaW9uLmd1YXJkaWFuID0gdG9rZW4uZ3VhcmRpYW47XG4gICAgICAgICAgfVxuICAgIFxuICAgICAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGp3dDoge1xuICAgICAgICBzZWNyZXQ6IFwidGVzdFwiLFxuICAgICAgICBlbmNyeXB0aW9uOiB0cnVlLFxuICAgICAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImNvbm5lY3RNb25nbyIsImF1dGhPcHRpb25zIiwicGFnZXMiLCJzaWduSW4iLCJwcm92aWRlcnMiLCJuYW1lIiwiYXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJyZXEiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZ3VhcmRpYW4iLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInVzZXIiLCJzZXNzaW9uIiwic2VjcmV0IiwiZW5jcnlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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