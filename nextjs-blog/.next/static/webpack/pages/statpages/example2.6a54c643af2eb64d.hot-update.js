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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var semantic_ui_css_test2_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-css/test2.css */ \"./node_modules/semantic-ui-css/test2.css\");\n/* harmony import */ var semantic_ui_css_test2_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_test2_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_NavBarOther__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../components/NavBarOther */ \"./components/NavBarOther.js\");\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../components/Search */ \"./components/Search.js\");\n/* harmony import */ var _components_UserInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../components/UserInput */ \"./components/UserInput.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar src1 = \"https://images.unsplash.com/photo-1620506117452-99cd6b6dcd3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80\";\nfunction About() {\n    _s();\n    //Gets person's name\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), name = ref[0], setName = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        getName();\n    }, []);\n    var getName = function() {\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/api/getOne/636c7abcc24146f70adb5536\").then(function(res) {\n            console.log(res.data.name);\n            setName(res.data.name);\n        }).catch(function(err) {\n            console.log(err);\n        });\n    };\n    //Gets person's birth and death dates\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), dates = ref1[0], setDates = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        getDate();\n    }, []);\n    var getDate = function() {\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/api/getOne/636c7abcc24146f70adb5536\").then(function(res) {\n            console.log(res.data.dates);\n            setDates(res.data.dates);\n        }).catch(function(err) {\n            console.log(err);\n        });\n    };\n    //Gets person's bio\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), bio = ref2[0], setBio = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        getBio();\n    }, []);\n    var getBio = function() {\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/api/getOne/636c7abcc24146f70adb5536\").then(function(res) {\n            console.log(res.data.bio);\n            setDates(res.data.bio);\n        }).catch(function(err) {\n            console.log(err);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        style: {\n            backgroundImage: \"url(/bioPictures/background.jpg)\",\n            backgroundSize: \"cover\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBarOther__WEBPACK_IMPORTED_MODULE_7__.NavBarOther, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Container, {\n                text: true,\n                style: {\n                    paddingTop: \"6em\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search__WEBPACK_IMPORTED_MODULE_8__.Search, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                        lineNumber: 55,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Grid.Column, {\n                        style: {\n                            textAlign: \"right\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            class: \"ui right labeled icon button\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    class: \"configure icon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, this),\n                                \"Options\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                        lineNumber: 56,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            textAlign: \"center\",\n                            fontSize: \"3vw\",\n                            fontFamily: \"MrsEaves-Italic\"\n                        },\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                        lineNumber: 62,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        style: {\n                            textAlign: \"center\",\n                            fontSize: \"1.5vw\"\n                        },\n                        children: dates\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                        lineNumber: 63,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Image, {\n                        src: src1,\n                        size: \"medium\",\n                        centered: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                        lineNumber: 64,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        text: true,\n                        style: {\n                            marginTop: \"2em\",\n                            fontSize: \"1.5vw\",\n                            fontFamily: \"MrsEaves-Italic\"\n                        },\n                        children: [\n                            bio,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                                lineNumber: 65,\n                                columnNumber: 98\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                                lineNumber: 65,\n                                columnNumber: 103\n                            }, this),\n                            \" Join now to share your stories and memories you had with him.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        style: {\n                            textAlign: \"center\"\n                        },\n                        children: [\n                            \"Add Memory\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    align: \"right\",\n                                    type: \"text\",\n                                    id: \"comment\",\n                                    name: \"comment\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 9\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                                lineNumber: 68,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                        lineNumber: 67,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"ui divider\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\JPC\\\\Documents\\\\CMPS411\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\statpages\\\\example2.js\",\n        lineNumber: 52,\n        columnNumber: 7\n    }, this);\n};\n_s(About, \"6I4PVXcp5MSxK0tjemUWwVC6bPk=\");\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdGF0cGFnZXMvZXhhbXBsZTIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTRCO0FBQ0E7QUFDcUI7QUFDdkI7QUFDZTtBQUNQO0FBQ3NCO0FBQ0Y7QUFDVjtBQUNNO0FBQ2xELElBQU1ZLElBQUksR0FBRywrSkFBK0o7QUFFN0osU0FBU0MsS0FBSyxHQUFFOztJQUM3QixvQkFBb0I7SUFDcEIsSUFBd0JULEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBN0JVLElBQUksR0FBYVYsR0FBWSxHQUF6QixFQUFFVyxPQUFPLEdBQUlYLEdBQVksR0FBaEI7SUFDcEJELGdEQUFTLENBQUMsV0FBTTtRQUFDYSxPQUFPLEVBQUUsQ0FBQztLQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ2pDLElBQU1BLE9BQU8sR0FBRyxXQUFNO1FBQ3BCWCxpREFBUyxDQUFDLDJEQUEyRCxDQUFDLENBQ3JFYSxJQUFJLENBQUNDLFNBQUFBLEdBQUcsRUFBSTtZQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDRyxJQUFJLENBQUNSLElBQUksQ0FBQztZQUMxQkMsT0FBTyxDQUFDSSxHQUFHLENBQUNHLElBQUksQ0FBQ1IsSUFBSSxDQUFDO1NBQ3ZCLENBQUMsQ0FBQ1MsS0FBSyxDQUFDQyxTQUFBQSxHQUFHLEVBQUk7WUFDZEosT0FBTyxDQUFDQyxHQUFHLENBQUNHLEdBQUcsQ0FBQztTQUNqQixDQUFDO0tBQ0g7SUFDRCxxQ0FBcUM7SUFDckMsSUFBMEJwQixJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQS9CcUIsS0FBSyxHQUFjckIsSUFBWSxHQUExQixFQUFFc0IsUUFBUSxHQUFJdEIsSUFBWSxHQUFoQjtJQUN0QkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQUN3QixPQUFPLEVBQUUsQ0FBQztLQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ2pDLElBQU1BLE9BQU8sR0FBRyxXQUFNO1FBQ3BCdEIsaURBQVMsQ0FBQywyREFBMkQsQ0FBQyxDQUNyRWEsSUFBSSxDQUFDQyxTQUFBQSxHQUFHLEVBQUk7WUFDWEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQ0csSUFBSSxDQUFDRyxLQUFLLENBQUM7WUFDM0JDLFFBQVEsQ0FBQ1AsR0FBRyxDQUFDRyxJQUFJLENBQUNHLEtBQUssQ0FBQztTQUN6QixDQUFDLENBQUNGLEtBQUssQ0FBQ0MsU0FBQUEsR0FBRyxFQUFJO1lBQ2RKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxHQUFHLENBQUM7U0FDakIsQ0FBQztLQUNIO0lBQ0QsbUJBQW1CO0lBQ25CLElBQXNCcEIsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUEzQndCLEdBQUcsR0FBWXhCLElBQVksR0FBeEIsRUFBRXlCLE1BQU0sR0FBSXpCLElBQVksR0FBaEI7SUFDbEJELGdEQUFTLENBQUMsV0FBTTtRQUFDMkIsTUFBTSxFQUFFLENBQUM7S0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNoQyxJQUFNQSxNQUFNLEdBQUcsV0FBTTtRQUNuQnpCLGlEQUFTLENBQUMsMkRBQTJELENBQUMsQ0FDckVhLElBQUksQ0FBQ0MsU0FBQUEsR0FBRyxFQUFJO1lBQ1hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUNHLElBQUksQ0FBQ00sR0FBRyxDQUFDO1lBQ3pCRixRQUFRLENBQUNQLEdBQUcsQ0FBQ0csSUFBSSxDQUFDTSxHQUFHLENBQUM7U0FDdkIsQ0FBQyxDQUFDTCxLQUFLLENBQUNDLFNBQUFBLEdBQUcsRUFBSTtZQUNkSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0csR0FBRyxDQUFDO1NBQ2pCLENBQUM7S0FDSDtJQUVDLHFCQUNFLDhEQUFDTyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxXQUFXO1FBQUNDLEtBQUssRUFBRTtZQUFFQyxlQUFlLEVBQUUsa0NBQWtDO1lBQUVDLGNBQWMsRUFBRSxPQUFPO1NBQUM7OzBCQUNqSCw4REFBQzFCLGdFQUFXOzs7O29CQUFHOzBCQUNmLDhEQUFDSCx5REFBUztnQkFBQzhCLElBQUk7Z0JBQUNILEtBQUssRUFBRTtvQkFBRUksVUFBVSxFQUFFLEtBQUs7aUJBQUU7O2tDQUM1Qyw4REFBQzNCLHNEQUFNOzs7OzRCQUFHO2tDQUNWLDhEQUFDRiwyREFBVzt3QkFBQ3lCLEtBQUssRUFBRTs0QkFBRU0sU0FBUyxFQUFFLE9BQU87eUJBQUU7a0NBQ3BDLDRFQUFDQyxRQUFNOzRCQUFDQyxLQUFLLEVBQUMsOEJBQThCOzs4Q0FDMUMsOERBQUNDLEdBQUM7b0NBQUNELEtBQUssRUFBQyxnQkFBZ0I7Ozs7O3dDQUFLO2dDQUFBLFNBRWhDOzs7Ozs7Z0NBQVM7Ozs7OzRCQUNHO2tDQUNsQiw4REFBQ0UsSUFBRTt3QkFBQ1YsS0FBSyxFQUFFOzRCQUFDTSxTQUFTLEVBQUUsUUFBUTs0QkFBRUssUUFBUSxFQUFDLEtBQUs7NEJBQUVDLFVBQVUsRUFBQyxpQkFBaUI7eUJBQUM7a0NBQUcvQixJQUFJOzs7Ozs0QkFBTTtrQ0FDM0YsOERBQUNnQyxJQUFFO3dCQUFDYixLQUFLLEVBQUU7NEJBQUNNLFNBQVMsRUFBRSxRQUFROzRCQUFFSyxRQUFRLEVBQUMsT0FBTzt5QkFBQztrQ0FBR25CLEtBQUs7Ozs7OzRCQUFNO2tDQUNoRSw4REFBQ2xCLHFEQUFLO3dCQUFDd0MsR0FBRyxFQUFFbkMsSUFBSTt3QkFBRW9DLElBQUksRUFBQyxRQUFRO3dCQUFDQyxRQUFROzs7Ozs0QkFBRztrQ0FDekMsOERBQUNDLEdBQUM7d0JBQUNkLElBQUk7d0JBQUNILEtBQUssRUFBRTs0QkFBRWtCLFNBQVMsRUFBRSxLQUFLOzRCQUFFUCxRQUFRLEVBQUMsT0FBTzs0QkFBRUMsVUFBVSxFQUFDLGlCQUFpQjt5QkFBQzs7NEJBQUdqQixHQUFHOzBDQUFDLDhEQUFDd0IsSUFBRTs7OztvQ0FBRTswQ0FBQSw4REFBQ0EsSUFBRTs7OztvQ0FBRTs0QkFBQSxnRUFDckc7Ozs7Ozs0QkFBSTtrQ0FDSiw4REFBQ04sSUFBRTt3QkFBQ2IsS0FBSyxFQUFFOzRCQUFDTSxTQUFTLEVBQUUsUUFBUTt5QkFBQzs7NEJBQUUsWUFDbEM7MENBQUEsOERBQUNjLE1BQUk7MENBQ0gsNEVBQUNDLE9BQUs7b0NBQUNDLEtBQUssRUFBQyxPQUFPO29DQUFDQyxJQUFJLEVBQUMsTUFBTTtvQ0FBQ0MsRUFBRSxFQUFDLFNBQVM7b0NBQUMzQyxJQUFJLEVBQUMsU0FBUzs7Ozs7d0NBQUU7Ozs7O29DQUN6RDs7Ozs7OzRCQUNGOzs7Ozs7b0JBQ087MEJBRVosOERBQUNpQixLQUFHO2dCQUFDVSxLQUFLLEVBQUMsWUFBWTs7Ozs7b0JBQU87Ozs7OztZQUUxQixDQUNQO0NBQ0Y7R0FqRXVCNUIsS0FBSztBQUFMQSxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N0YXRwYWdlcy9leGFtcGxlMi5qcz9lMjQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge1JlYWN0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnXHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3Rlc3QyLmNzcydcclxuaW1wb3J0IHtDb250YWluZXIsIEltYWdlLCBHcmlkfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHsgTmF2QmFyT3RoZXIgfSBmcm9tICcvY29tcG9uZW50cy9OYXZCYXJPdGhlcic7XHJcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gJy9jb21wb25lbnRzL1NlYXJjaCc7XHJcbmltcG9ydCB7IFVzZXJJbnB1dCB9IGZyb20gJy9jb21wb25lbnRzL1VzZXJJbnB1dCc7XHJcbmNvbnN0IHNyYzEgPSAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MjA1MDYxMTc0NTItOTljZDZiNmRjZDNlP2l4bGliPXJiLTEuMi4xJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz03NzQmcT04MCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCl7XHJcbiAgLy9HZXRzIHBlcnNvbidzIG5hbWVcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICB1c2VFZmZlY3QoKCkgPT4ge2dldE5hbWUoKTt9LCBbXSlcclxuICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2dldE9uZS82MzZjN2FiY2MyNDE0NmY3MGFkYjU1MzYnKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEubmFtZSlcclxuICAgICAgc2V0TmFtZShyZXMuZGF0YS5uYW1lKVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfSlcclxuICB9XHJcbiAgLy9HZXRzIHBlcnNvbidzIGJpcnRoIGFuZCBkZWF0aCBkYXRlc1xyXG4gIGNvbnN0IFtkYXRlcywgc2V0RGF0ZXNdID0gdXNlU3RhdGUoJycpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtnZXREYXRlKCk7fSwgW10pXHJcbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHtcclxuICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9nZXRPbmUvNjM2YzdhYmNjMjQxNDZmNzBhZGI1NTM2JylcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmRhdGVzKVxyXG4gICAgICBzZXREYXRlcyhyZXMuZGF0YS5kYXRlcylcclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIH0pXHJcbiAgfVxyXG4gIC8vR2V0cyBwZXJzb24ncyBiaW9cclxuICBjb25zdCBbYmlvLCBzZXRCaW9dID0gdXNlU3RhdGUoJycpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtnZXRCaW8oKTt9LCBbXSlcclxuICBjb25zdCBnZXRCaW8gPSAoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvZ2V0T25lLzYzNmM3YWJjYzI0MTQ2ZjcwYWRiNTUzNicpXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5iaW8pXHJcbiAgICAgIHNldERhdGVzKHJlcy5kYXRhLmJpbylcclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC9iaW9QaWN0dXJlcy9iYWNrZ3JvdW5kLmpwZylcIiwgYmFja2dyb3VuZFNpemU6ICdjb3Zlcid9fT5cclxuICAgICAgPE5hdkJhck90aGVyIC8+XHJcbiAgICAgIDxDb250YWluZXIgdGV4dCBzdHlsZT17eyBwYWRkaW5nVG9wOiAnNmVtJyB9fT5cclxuICAgICAgPFNlYXJjaCAvPlxyXG4gICAgICA8R3JpZC5Db2x1bW4gc3R5bGU9e3sgdGV4dEFsaWduOiBcInJpZ2h0XCIgfX0+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ1aSByaWdodCBsYWJlbGVkIGljb24gYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJjb25maWd1cmUgaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICBPcHRpb25zXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgPGgxIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250U2l6ZTpcIjN2d1wiLCBmb250RmFtaWx5OlwiTXJzRWF2ZXMtSXRhbGljXCJ9fT57bmFtZX08L2gxPlxyXG4gICAgICA8aDMgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRTaXplOlwiMS41dndcIn19PntkYXRlc308L2gzPlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtzcmMxfSBzaXplPSdtZWRpdW0nIGNlbnRlcmVkIC8+XHJcbiAgICAgICAgPHAgdGV4dCBzdHlsZT17eyBtYXJnaW5Ub3A6ICcyZW0nLCBmb250U2l6ZTpcIjEuNXZ3XCIsIGZvbnRGYW1pbHk6XCJNcnNFYXZlcy1JdGFsaWNcIn19PntiaW99PGJyLz48YnIvPiBKb2luIG5vdyB0byBzaGFyZSB5b3VyIHN0b3JpZXMgYW5kIG1lbW9yaWVzIHlvdSBoYWQgd2l0aCBoaW0uXHJcbiAgICAgIDwvcD5cclxuICAgICAgPGgzIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+QWRkIE1lbW9yeVxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICA8aW5wdXQgYWxpZ249XCJyaWdodFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjb21tZW50XCIgbmFtZT1cImNvbW1lbnRcIi8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPC9oMz5cclxuICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwidWkgZGl2aWRlclwiPjwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJIZWFkIiwiTGluayIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkNvbnRhaW5lciIsIkltYWdlIiwiR3JpZCIsIk5hdkJhck90aGVyIiwiU2VhcmNoIiwiVXNlcklucHV0Iiwic3JjMSIsIkFib3V0IiwibmFtZSIsInNldE5hbWUiLCJnZXROYW1lIiwiZ2V0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJkYXRlcyIsInNldERhdGVzIiwiZ2V0RGF0ZSIsImJpbyIsInNldEJpbyIsImdldEJpbyIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJ0ZXh0IiwicGFkZGluZ1RvcCIsIkNvbHVtbiIsInRleHRBbGlnbiIsImJ1dHRvbiIsImNsYXNzIiwiaSIsImgxIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiaDMiLCJzcmMiLCJzaXplIiwiY2VudGVyZWQiLCJwIiwibWFyZ2luVG9wIiwiYnIiLCJmb3JtIiwiaW5wdXQiLCJhbGlnbiIsInR5cGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/statpages/example2.js\n"));

/***/ })

});