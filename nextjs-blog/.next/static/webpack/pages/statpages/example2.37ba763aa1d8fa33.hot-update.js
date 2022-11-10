"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/statpages/example2",{

/***/ "./pages/statpages/example2.js":
/*!*************************************!*\
  !*** ./pages/statpages/example2.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var semantic_ui_css_test2_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-css/test2.css */ \"./node_modules/semantic-ui-css/test2.css\");\n/* harmony import */ var semantic_ui_css_test2_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_test2_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_NavBarOther__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../components/NavBarOther */ \"./components/NavBarOther.js\");\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../components/Search */ \"./components/Search.js\");\n/* harmony import */ var _components_UserInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../components/UserInput */ \"./components/UserInput.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar src1 = \"https://images.unsplash.com/photo-1620506117452-99cd6b6dcd3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80\";\nvar personId = \"636c7abcc24146f70adb5536\";\nfunction About() {\n    _s();\n    //Gets person's name\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), name = ref[0], setName = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        getName();\n    }, []);\n    var getName = function() {\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/api/getOne/\" + personId).then(function(res) {\n            console.log(res.data.name);\n            setName(res.data.name);\n        }).catch(function(err) {\n            console.log(err);\n        });\n    };\n    //Gets person's birth and death dates\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), dates = ref1[0], setDates = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        getDate();\n    }, []);\n    var getDate = function() {\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/api/getOne/\" + personId).then(function(res) {\n            console.log(res.data.dates);\n            setDates(res.data.dates);\n        }).catch(function(err) {\n            console.log(err);\n        });\n    };\n    //Gets person's bio\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), bio = ref2[0], setBio = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        getBio();\n    }, []);\n    var getBio = function() {\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/api/getOne/\" + personId).then(function(res) {\n            console.log(res.data.bio);\n            setBio(res.data.bio);\n        }).catch(function(err) {\n            console.log(err);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        style: {\n            backgroundImage: \"url(/bioPictures/background.jpg)\",\n            backgroundSize: \"cover\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBarOther__WEBPACK_IMPORTED_MODULE_7__.NavBarOther, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Container, {\n                text: true,\n                style: {\n                    paddingTop: \"6em\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search__WEBPACK_IMPORTED_MODULE_8__.Search, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                        lineNumber: 57,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Grid.Column, {\n                        style: {\n                            textAlign: \"right\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            class: \"ui right labeled icon button\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    class: \"configure icon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, this),\n                                \"Options\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                        lineNumber: 58,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            textAlign: \"center\",\n                            fontSize: \"3vw\",\n                            fontFamily: \"MrsEaves-Italic\"\n                        },\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                        lineNumber: 64,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        style: {\n                            textAlign: \"center\",\n                            fontSize: \"1.5vw\"\n                        },\n                        children: dates\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                        lineNumber: 65,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Image, {\n                        src: src1,\n                        size: \"medium\",\n                        centered: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                        lineNumber: 66,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        text: true,\n                        style: {\n                            marginTop: \"2em\",\n                            fontSize: \"1.5vw\",\n                            fontFamily: \"MrsEaves-Italic\"\n                        },\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        style: {\n                            textAlign: \"center\"\n                        },\n                        children: [\n                            \"Add Memory\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    align: \"right\",\n                                    type: \"text\",\n                                    id: \"comment\",\n                                    name: \"comment\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 9\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                                lineNumber: 69,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                        lineNumber: 68,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"ui divider\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n        lineNumber: 54,\n        columnNumber: 7\n    }, this);\n};\n_s(About, \"6I4PVXcp5MSxK0tjemUWwVC6bPk=\");\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsWUFDbEM7MENBQUEsOERBQUNhLE1BQUk7MENBQ0gsNEVBQUNDLE9BQUs7b0NBQUNDLEtBQUssRUFBQyxPQUFPO29DQUFDQyxJQUFJLEVBQUMsTUFBTTtvQ0FBQ0MsRUFBRSxFQUFDLFNBQVM7b0NBQUMxQyxJQUFJLEVBQUMsU0FBUzs7Ozs7d0NBQUU7Ozs7O29DQUN6RDs7Ozs7OzRCQUNGOzs7Ozs7b0JBQ087MEJBRVosOERBQUNpQixLQUFHO2dCQUFDVSxLQUFLLEVBQUMsWUFBWTs7Ozs7b0JBQU87Ozs7OztZQUUxQixDQUNQO0NBQ0Y7R0FqRXVCNUIsS0FBSztBQUFMQSxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N0YXRwYWdlcy9leGFtcGxlMi5qcz9lMjQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge1JlYWN0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnXHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3Rlc3QyLmNzcydcclxuaW1wb3J0IHtDb250YWluZXIsIEltYWdlLCBHcmlkfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHsgTmF2QmFyT3RoZXIgfSBmcm9tICcvY29tcG9uZW50cy9OYXZCYXJPdGhlcic7XHJcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gJy9jb21wb25lbnRzL1NlYXJjaCc7XHJcbmltcG9ydCB7IFVzZXJJbnB1dCB9IGZyb20gJy9jb21wb25lbnRzL1VzZXJJbnB1dCc7XHJcbmNvbnN0IHNyYzEgPSAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MjA1MDYxMTc0NTItOTljZDZiNmRjZDNlP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz03NzQmcT04MCdcclxuXHJcbnZhciBwZXJzb25JZCA9IFwiNjM2YzdhYmNjMjQxNDZmNzBhZGI1NTM2XCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKXtcclxuICBcclxuICAvL0dldHMgcGVyc29uJ3MgbmFtZVxyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7Z2V0TmFtZSgpO30sIFtdKVxyXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvZ2V0T25lLycrIHBlcnNvbklkKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEubmFtZSlcclxuICAgICAgc2V0TmFtZShyZXMuZGF0YS5uYW1lKVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfSlcclxuICB9XHJcbiAgLy9HZXRzIHBlcnNvbidzIGJpcnRoIGFuZCBkZWF0aCBkYXRlc1xyXG4gIGNvbnN0IFtkYXRlcywgc2V0RGF0ZXNdID0gdXNlU3RhdGUoJycpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtnZXREYXRlKCk7fSwgW10pXHJcbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHtcclxuICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9nZXRPbmUvJyArIHBlcnNvbklkKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEuZGF0ZXMpXHJcbiAgICAgIHNldERhdGVzKHJlcy5kYXRhLmRhdGVzKVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfSlcclxuICB9XHJcbiAgLy9HZXRzIHBlcnNvbidzIGJpb1xyXG4gIGNvbnN0IFtiaW8sIHNldEJpb10gPSB1c2VTdGF0ZSgnJylcclxuICB1c2VFZmZlY3QoKCkgPT4ge2dldEJpbygpO30sIFtdKVxyXG4gIGNvbnN0IGdldEJpbyA9ICgpID0+IHtcclxuICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9nZXRPbmUvJyArIHBlcnNvbklkKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEuYmlvKVxyXG4gICAgICBzZXRCaW8ocmVzLmRhdGEuYmlvKVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL2Jpb1BpY3R1cmVzL2JhY2tncm91bmQuanBnKVwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ319PlxyXG4gICAgICA8TmF2QmFyT3RoZXIgLz5cclxuICAgICAgPENvbnRhaW5lciB0ZXh0IHN0eWxlPXt7IHBhZGRpbmdUb3A6ICc2ZW0nIH19PlxyXG4gICAgICA8U2VhcmNoIC8+XHJcbiAgICAgIDxHcmlkLkNvbHVtbiBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiB9fT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInVpIHJpZ2h0IGxhYmVsZWQgaWNvbiBidXR0b25cIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImNvbmZpZ3VyZSBpY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgIE9wdGlvbnNcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICA8aDEgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRTaXplOlwiM3Z3XCIsIGZvbnRGYW1pbHk6XCJNcnNFYXZlcy1JdGFsaWNcIn19PntuYW1lfTwvaDE+XHJcbiAgICAgIDxoMyBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIiwgZm9udFNpemU6XCIxLjV2d1wifX0+e2RhdGVzfTwvaDM+XHJcbiAgICAgIDxJbWFnZSBzcmM9e3NyYzF9IHNpemU9J21lZGl1bScgY2VudGVyZWQgLz5cclxuICAgICAgICA8cCB0ZXh0IHN0eWxlPXt7IG1hcmdpblRvcDogJzJlbScsIGZvbnRTaXplOlwiMS41dndcIiwgZm9udEZhbWlseTpcIk1yc0VhdmVzLUl0YWxpY1wifX0+e2Jpb308L3A+XHJcbiAgICAgIDxoMyBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PkFkZCBNZW1vcnlcclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAgPGlucHV0IGFsaWduPVwicmlnaHRcIiB0eXBlPVwidGV4dFwiIGlkPVwiY29tbWVudFwiIG5hbWU9XCJjb21tZW50XCIvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInVpIGRpdmlkZXJcIj48L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiSGVhZCIsIkxpbmsiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJDb250YWluZXIiLCJJbWFnZSIsIkdyaWQiLCJOYXZCYXJPdGhlciIsIlNlYXJjaCIsIlVzZXJJbnB1dCIsInNyYzEiLCJwZXJzb25JZCIsIkFib3V0IiwibmFtZSIsInNldE5hbWUiLCJnZXROYW1lIiwiZ2V0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJkYXRlcyIsInNldERhdGVzIiwiZ2V0RGF0ZSIsImJpbyIsInNldEJpbyIsImdldEJpbyIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJ0ZXh0IiwicGFkZGluZ1RvcCIsIkNvbHVtbiIsInRleHRBbGlnbiIsImJ1dHRvbiIsImNsYXNzIiwiaSIsImgxIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiaDMiLCJzcmMiLCJzaXplIiwiY2VudGVyZWQiLCJwIiwibWFyZ2luVG9wIiwiZm9ybSIsImlucHV0IiwiYWxpZ24iLCJ0eXBlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/statpages/example2.js\n"));

/***/ })

});