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
exports.id = "pages/statpages/dbExample";
exports.ids = ["pages/statpages/dbExample"];
exports.modules = {

/***/ "./pages/statpages/dbExample.js":
/*!**************************************!*\
  !*** ./pages/statpages/dbExample.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst uri = process.env.DATABASE_URL;\nmain().catch((err)=>console.log(err));\nasync function main() {\n    await mongoose.connect(uri);\n    // Schema stuff\n    const venSchema = new mongoose.Schema({\n        name: String\n    });\n    venSchema.methods.sayName = function sayName() {\n        const greeting = this.name ? \"My name is \" + this.name : \"I don't have a name.\";\n        console.log(greeting);\n    };\n    // Model stuff\n    const Veneration = mongoose.model(\"Veneration\", venSchema);\n    // Document stuff\n    const john = new Veneration({\n        name: \"John\"\n    });\n    john.sayName();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdGF0cGFnZXMvZGJFeGFtcGxlLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQywwQkFBVSxDQUFDO0FBQ3BDLE1BQU1DLEdBQUcsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFlBQVk7QUFFcENDLElBQUksRUFBRSxDQUFDQyxLQUFLLENBQUNDLENBQUFBLEdBQUcsR0FBSUMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdEMsZUFBZUYsSUFBSSxHQUFHO0lBQ2xCLE1BQU1OLFFBQVEsQ0FBQ1csT0FBTyxDQUFDVCxHQUFHLENBQUM7SUFFM0IsZUFBZTtJQUNmLE1BQU1VLFNBQVMsR0FBRyxJQUFJWixRQUFRLENBQUNhLE1BQU0sQ0FBQztRQUNsQ0MsSUFBSSxFQUFFQyxNQUFNO0tBQ2YsQ0FBQztJQUNGSCxTQUFTLENBQUNJLE9BQU8sQ0FBQ0MsT0FBTyxHQUFHLFNBQVNBLE9BQU8sR0FBRTtRQUMxQyxNQUFNQyxRQUFRLEdBQUcsSUFBSSxDQUFDSixJQUFJLEdBQ3hCLGFBQWEsR0FBRyxJQUFJLENBQUNBLElBQUksR0FDekIsc0JBQXNCO1FBQ3hCTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsUUFBUSxDQUFDLENBQUM7S0FDekIsQ0FBQztJQUVGLGNBQWM7SUFDZCxNQUFNQyxVQUFVLEdBQUduQixRQUFRLENBQUNvQixLQUFLLENBQUMsWUFBWSxFQUFFUixTQUFTLENBQUM7SUFFMUQsaUJBQWlCO0lBQ2pCLE1BQU1TLElBQUksR0FBRyxJQUFJRixVQUFVLENBQUM7UUFBQ0wsSUFBSSxFQUFFLE1BQU07S0FBQyxDQUFDO0lBQzNDTyxJQUFJLENBQUNKLE9BQU8sRUFBRSxDQUFDO0NBQ2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvc3RhdHBhZ2VzL2RiRXhhbXBsZS5qcz8zODZhIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMXHJcblxyXG5tYWluKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xyXG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdCh1cmkpXHJcblxyXG4gICAgLy8gU2NoZW1hIHN0dWZmXHJcbiAgICBjb25zdCB2ZW5TY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgICAgICBuYW1lOiBTdHJpbmdcclxuICAgIH0pO1xyXG4gICAgdmVuU2NoZW1hLm1ldGhvZHMuc2F5TmFtZSA9IGZ1bmN0aW9uIHNheU5hbWUoKXtcclxuICAgICAgICBjb25zdCBncmVldGluZyA9IHRoaXMubmFtZVxyXG4gICAgICAgID8gXCJNeSBuYW1lIGlzIFwiICsgdGhpcy5uYW1lXHJcbiAgICAgICAgOiBcIkkgZG9uJ3QgaGF2ZSBhIG5hbWUuXCI7XHJcbiAgICAgICAgY29uc29sZS5sb2coZ3JlZXRpbmcpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBNb2RlbCBzdHVmZlxyXG4gICAgY29uc3QgVmVuZXJhdGlvbiA9IG1vbmdvb3NlLm1vZGVsKCdWZW5lcmF0aW9uJywgdmVuU2NoZW1hKTtcclxuXHJcbiAgICAvLyBEb2N1bWVudCBzdHVmZlxyXG4gICAgY29uc3Qgam9obiA9IG5ldyBWZW5lcmF0aW9uKHtuYW1lOiAnSm9obid9KTtcclxuICAgIGpvaG4uc2F5TmFtZSgpO1xyXG59Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJEQVRBQkFTRV9VUkwiLCJtYWluIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInZlblNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJTdHJpbmciLCJtZXRob2RzIiwic2F5TmFtZSIsImdyZWV0aW5nIiwiVmVuZXJhdGlvbiIsIm1vZGVsIiwiam9obiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/statpages/dbExample.js\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/statpages/dbExample.js"));
module.exports = __webpack_exports__;

})();