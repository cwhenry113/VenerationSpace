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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst authOptions = {\n    pages: {\n        signIn: \"/statpages/login\"\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            name: \"Credentials\",\n            // credentials: {\n            //     username: { label: \"Username\", type: \"text\", placeholder: \"jsmith\" },\n            //     password: { label: \"Password\", type: \"password\" }\n            // },\n            async authorize (credentials, req) {\n                if (credentials.username === \"abc\" && credentials.password === \"test\" || credentials.username === \"123\" && credentials.password === \"123\") {\n                    return {\n                        name: credentials.username\n                    };\n                }\n                return null;\n            }\n        })\n    ]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnQztBQUNpQztBQUUxRCxNQUFNRSxXQUFXLEdBQUc7SUFDdkJDLEtBQUssRUFBRTtRQUNIQyxNQUFNLEVBQUUsa0JBQWtCO0tBQzdCO0lBQ0RDLFNBQVMsRUFBRTtRQUNQSixzRUFBbUIsQ0FBQztZQUNoQkssSUFBSSxFQUFFLGFBQWE7WUFDbkIsaUJBQWlCO1lBQ2pCLDRFQUE0RTtZQUM1RSx3REFBd0Q7WUFDeEQsS0FBSztZQUNMLE1BQU1DLFNBQVMsRUFBQ0MsV0FBVyxFQUFFQyxHQUFHLEVBQUU7Z0JBRTlCLElBQUdELFdBQVcsQ0FBQ0UsUUFBUSxLQUFLLEtBQUssSUFBSUYsV0FBVyxDQUFDRyxRQUFRLEtBQUssTUFBTSxJQUFJSCxXQUFXLENBQUNFLFFBQVEsS0FBSyxLQUFLLElBQUlGLFdBQVcsQ0FBQ0csUUFBUSxLQUFLLEtBQUssRUFBRTtvQkFDdEksT0FBTzt3QkFDQ0wsSUFBSSxFQUFFRSxXQUFXLENBQUNFLFFBQVE7cUJBQ2pDO2lCQUNKO2dCQUVELE9BQU8sSUFBSTthQUNkO1NBQ0osQ0FBQztLQUNMO0NBQ0o7QUFFRCxpRUFBZVYsZ0RBQVEsQ0FBQ0UsV0FBVyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xyXG4gICAgcGFnZXM6IHtcclxuICAgICAgICBzaWduSW46IFwiL3N0YXRwYWdlcy9sb2dpblwiXHJcbiAgICB9LFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcclxuICAgICAgICAgICAgLy8gY3JlZGVudGlhbHM6IHtcclxuICAgICAgICAgICAgLy8gICAgIHVzZXJuYW1lOiB7IGxhYmVsOiBcIlVzZXJuYW1lXCIsIHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJqc21pdGhcIiB9LFxyXG4gICAgICAgICAgICAvLyAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cclxuICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihjcmVkZW50aWFscy51c2VybmFtZSA9PT0gXCJhYmNcIiAmJiBjcmVkZW50aWFscy5wYXNzd29yZCA9PT0gXCJ0ZXN0XCIgfHwgY3JlZGVudGlhbHMudXNlcm5hbWUgPT09IFwiMTIzXCIgJiYgY3JlZGVudGlhbHMucGFzc3dvcmQgPT09IFwiMTIzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogY3JlZGVudGlhbHMudXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICBdLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucykiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYXV0aE9wdGlvbnMiLCJwYWdlcyIsInNpZ25JbiIsInByb3ZpZGVycyIsIm5hbWUiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsInJlcSIsInVzZXJuYW1lIiwicGFzc3dvcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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