"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_Carter_Documents_venerationSpace_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Carter_Documents_venerationSpace_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Carter_Documents_venerationSpace_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/next/dist/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var semantic_ui_css_test2_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-css/test2.css */ \"./node_modules/semantic-ui-css/test2.css\");\n/* harmony import */ var semantic_ui_css_test2_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_test2_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../components/NavBar */ \"./components/NavBar.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    var createVeneration = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(C_Users_Carter_Documents_venerationSpace_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var firstName, lastName, res, data;\n            return C_Users_Carter_Documents_venerationSpace_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(\"PRESSED THE BUTTON\");\n                        firstName = \"Frontpage\";\n                        lastName = \"Addition\";\n                        _ctx.next = 5;\n                        return fetch(\"/api/veneration/add\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                givenName: \"\".concat(firstName),\n                                familyName: \"\".concat(lastName)\n                            })\n                        });\n                    case 5:\n                        res = _ctx.sent;\n                        _ctx.next = 8;\n                        return res.json();\n                    case 8:\n                        data = _ctx.sent;\n                        console.log(data);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function createVeneration() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        style: {\n            backgroundImage: \"url(/bioPictures/background.jpg)\",\n            backgroundSize: \"cover\"\n        },\n        className: \"jsx-858cd31c5d673ed2\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                style: {\n                    background: \"#BEC7E4\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        className: \"jsx-858cd31c5d673ed2\",\n                        children: \"Veneration Space\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Carter\\\\Documents\\\\venerationSpace\\\\nextjs-blog\\\\pages\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/cross.ico\",\n                        className: \"jsx-858cd31c5d673ed2\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Carter\\\\Documents\\\\venerationSpace\\\\nextjs-blog\\\\pages\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Carter\\\\Documents\\\\venerationSpace\\\\nextjs-blog\\\\pages\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__.NavBar, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Carter\\\\Documents\\\\venerationSpace\\\\nextjs-blog\\\\pages\\\\index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                class: \"ui equal width middle aligned center aligned grid\",\n                style: {\n                    backgroundImage: \"url(/bioPictures/background.jpg)\",\n                    backgroundSize: \"cover\",\n                    paddingTop: \"6em\"\n                },\n                className: \"jsx-858cd31c5d673ed2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        class: \"column six wide middle aligned grid\",\n                        className: \"jsx-858cd31c5d673ed2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                class: \"row\",\n                                className: \"jsx-858cd31c5d673ed2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    href: \"/statpages/search\",\n                                    className: \"jsx-858cd31c5d673ed2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        class: \"ui color1 button\",\n                                        style: {\n                                            fontSize: \"4.5rem\",\n                                            margin: \"5rem auto\"\n                                        },\n                                        className: \"jsx-858cd31c5d673ed2\",\n                                        children: \"Search\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Carter\\\\Documents\\\\venerationSpace\\\\nextjs-blog\\\\pages\\\\index.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Carter\\\\Documents\\\\venerationSpace\\\\nextjs-blog\\\\pages\\\\index.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Carter\\\\Documents\\\\venerationSpace\\\\nextjs-blog\\\\pages\\\\index.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                class: \"row\",\n                                className: \"jsx-858cd31c5d673ed2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    onMouseDown: createVeneration,\n                                    class: \"ui color1 button\",\n                                    style: {\n                                        fontSize: \"4.5rem\",\n                                        margin: \"5rem auto\"\n                                    },\n                                    className: \"jsx-858cd31c5d673ed2\",\n                                    children: \"Create\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Carter\\\\Documents\\\\venerationSpace\\\\nextjs-blog\\\\pages\\\\index.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Carter\\\\Documents\\\\venerationSpace\\\\nextjs-blog\\\\pages\\\\index.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Carter\\\\Documents\\\\venerationSpace\\\\nextjs-blog\\\\pages\\\\index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        class: \"column ten wide\",\n                        className: \"jsx-858cd31c5d673ed2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            class: \"ui large image\",\n                            className: \"jsx-858cd31c5d673ed2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Image, {\n                                src: \"/bioPictures/logo4.png\",\n                                size: \"massive\",\n                                centered: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Carter\\\\Documents\\\\venerationSpace\\\\nextjs-blog\\\\pages\\\\index.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Carter\\\\Documents\\\\venerationSpace\\\\nextjs-blog\\\\pages\\\\index.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Carter\\\\Documents\\\\venerationSpace\\\\nextjs-blog\\\\pages\\\\index.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Carter\\\\Documents\\\\venerationSpace\\\\nextjs-blog\\\\pages\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"858cd31c5d673ed2\",\n                children: \".container.jsx-858cd31c5d673ed2{min-height:100vh}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Carter\\\\Documents\\\\venerationSpace\\\\nextjs-blog\\\\pages\\\\index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsRUFBQyx3QkFBd0I7Z0NBQUNDLElBQUksRUFBQyxTQUFTO2dDQUFDQyxRQUFROzs7OztvQ0FBRzs7Ozs7Z0NBQzFEOzs7Ozs0QkFDRjs7Ozs7O29CQUNGOzs7Ozs7Ozs7O1lBT0YsQ0FDUDtDQUNGO0FBeER1Qm5DLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzcydcclxuaW1wb3J0ICdzZW1hbnRpYy11aS1jc3MvdGVzdDIuY3NzJ1xyXG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tICcvY29tcG9uZW50cy9OYXZCYXInO1xyXG5pbXBvcnQge1xyXG4gIEltYWdlXHJcbn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IGNyZWF0ZVZlbmVyYXRpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnUFJFU1NFRCBUSEUgQlVUVE9OJyk7XHJcbiAgICBjb25zdCBmaXJzdE5hbWUgPSBcIkZyb250cGFnZVwiO1xyXG4gICAgY29uc3QgbGFzdE5hbWUgPSBcIkFkZGl0aW9uXCI7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS92ZW5lcmF0aW9uL2FkZCcsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgZ2l2ZW5OYW1lOiBgJHtmaXJzdE5hbWV9YCxcclxuICAgICAgICBmYW1pbHlOYW1lOiBgJHtsYXN0TmFtZX1gLFxyXG4gICAgICB9KSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybCgvYmlvUGljdHVyZXMvYmFja2dyb3VuZC5qcGcpXCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInIH19PlxyXG4gICAgICA8SGVhZCBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnI0JFQzdFNCcgfX0+XHJcbiAgICAgICAgPHRpdGxlPlZlbmVyYXRpb24gU3BhY2U8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Nyb3NzLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE5hdkJhciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidWkgZXF1YWwgd2lkdGggbWlkZGxlIGFsaWduZWQgY2VudGVyIGFsaWduZWQgZ3JpZFwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL2Jpb1BpY3R1cmVzL2JhY2tncm91bmQuanBnKVwiLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJywgcGFkZGluZ1RvcDogJzZlbScgfX0gPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gc2l4IHdpZGUgbWlkZGxlIGFsaWduZWQgZ3JpZFwiID5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIi9zdGF0cGFnZXMvc2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInVpIGNvbG9yMSBidXR0b25cIiBzdHlsZT17eyBmb250U2l6ZTogJzQuNXJlbScsIG1hcmdpbjogJzVyZW0gYXV0bycgfX0+XHJcbiAgICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25Nb3VzZURvd249e2NyZWF0ZVZlbmVyYXRpb259IGNsYXNzPVwidWkgY29sb3IxIGJ1dHRvblwiIHN0eWxlPXt7IGZvbnRTaXplOiAnNC41cmVtJywgbWFyZ2luOiAnNXJlbSBhdXRvJyB9fT5cclxuICAgICAgICAgICAgICBDcmVhdGVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIHRlbiB3aWRlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgbGFyZ2UgaW1hZ2VcIj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9iaW9QaWN0dXJlcy9sb2dvNC5wbmdcIiBzaXplPSdtYXNzaXZlJyBjZW50ZXJlZCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiUmVhY3QiLCJOYXZCYXIiLCJJbWFnZSIsIkhvbWUiLCJjcmVhdGVWZW5lcmF0aW9uIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJyZXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2l2ZW5OYW1lIiwiZmFtaWx5TmFtZSIsImpzb24iLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZCIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJjbGFzcyIsInBhZGRpbmdUb3AiLCJhIiwiYnV0dG9uIiwiZm9udFNpemUiLCJtYXJnaW4iLCJvbk1vdXNlRG93biIsInNyYyIsInNpemUiLCJjZW50ZXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});