"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/venerations/[id]",{

/***/ "./pages/venerations/[id].js":
/*!***********************************!*\
  !*** ./pages/venerations/[id].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ About; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var C_coding_projects_VenerationSpace_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_coding_projects_VenerationSpace_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_coding_projects_VenerationSpace_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ \"./node_modules/semantic-ui-css/semantic.min.css\");\n/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var semantic_ui_css_test2_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-css/test2.css */ \"./node_modules/semantic-ui-css/test2.css\");\n/* harmony import */ var semantic_ui_css_test2_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_test2_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/Search */ \"./components/Search.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/NavBar */ \"./components/NavBar.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction About() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();\n    var id = router.query.id;\n    var personId = id;\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_11__.useSession)(), session = ref.data, status = ref.status;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n        text: \"\"\n    }), form = ref1[0], setForm = ref1[1];\n    var handleFieldChange = function(e) {\n        setForm(function(old) {\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])({}, old), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_14__[\"default\"])({}, e.target.id, e.target.value));\n        });\n    };\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), full = ref2[0], setFull = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        return getFull();\n    });\n    var getFull = function() {\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/api/getOne/\" + personId).then(function(res) {\n            setFull(res.data);\n        }).catch(function(err) {\n            console.log(err);\n        });\n    };\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), comments = ref3[0], setComments = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        getComments();\n    }, []);\n    var getComments = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(C_coding_projects_VenerationSpace_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_coding_projects_VenerationSpace_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/api/getComments/\" + personId).then(function(res) {\n                            setComments(res.data);\n                        }).catch(function(err) {\n                            console.log(err);\n                        });\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getComments() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    getComments();\n    var venComments = Array.from(comments).map(function(comments) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        \" \",\n                        comments.author,\n                        \": \",\n                        comments.text\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\coding projects\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\venerations\\\\[id].js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return handleDelete(comments._id);\n                    },\n                    className: \"ui color1 button\",\n                    variant: \"contained\",\n                    children: \"Delete\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\coding projects\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\venerations\\\\[id].js\",\n                    lineNumber: 50,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\coding projects\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\venerations\\\\[id].js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, comments._id, true, {\n            fileName: \"C:\\\\coding projects\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\venerations\\\\[id].js\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, _this);\n    });\n    var handleDelete = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(C_coding_projects_VenerationSpace_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n            return C_coding_projects_VenerationSpace_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"][\"delete\"](\"http://localhost:8000/api//deleteComment/\" + id);\n                    case 2:\n                        getComments();\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleDelete(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(C_coding_projects_VenerationSpace_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            return C_coding_projects_VenerationSpace_nextjs_blog_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:8000/api//postComment/\", {\n                            \"parent\": personId,\n                            \"author\": session.user.name,\n                            \"text\": form.text\n                        });\n                    case 2:\n                        getComments();\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"container\",\n        style: {\n            backgroundImage: \"url(/bioPictures/background.jpg)\",\n            backgroundSize: \"cover\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_10__.NavBar, {}, void 0, false, {\n                fileName: \"C:\\\\coding projects\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\venerations\\\\[id].js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.Container, {\n                text: true,\n                style: {\n                    paddingTop: \"6em\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Search__WEBPACK_IMPORTED_MODULE_8__.Search, {}, void 0, false, {\n                        fileName: \"C:\\\\coding projects\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\venerations\\\\[id].js\",\n                        lineNumber: 71,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.Grid.Column, {\n                        style: {\n                            textAlign: \"right\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            class: \"ui right labeled icon button\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"i\", {\n                                    class: \"configure icon\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\coding projects\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\venerations\\\\[id].js\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    href: \"/venerations/update/\" + personId\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\coding projects\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\venerations\\\\[id].js\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, this),\n                                \"Options\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\coding projects\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\venerations\\\\[id].js\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\coding projects\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\venerations\\\\[id].js\",\n                        lineNumber: 72,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        class: \"ui massive message\",\n                        style: {\n                            margin: \"5rem\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                style: {\n                                    textAlign: \"center\",\n                                    fontSize: \"50px\",\n                                    fontFamily: \"MrsEaves-Italic\"\n                                },\n                                children: full.fullName\n                            }, void 0, false, {\n                                fileName: \"C:\\\\coding projects\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\venerations\\\\[id].js\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                style: {\n                                    textAlign: \"center\",\n                                    fontSize: \"30px\"\n                                },\n                                children: [\n                                    full.birthDate,\n                                    \" - \",\n                                    full.deathDate\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\coding projects\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\venerations\\\\[id].js\",\n                                lineNumber: 81,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.Image, {\n                                src: full.pictureURL,\n                                size: \"medium\",\n                                centered: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\coding projects\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\venerations\\\\[id].js\",\n                                lineNumber: 82,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                text: true,\n                                style: {\n                                    marginTop: \"2em\",\n                                    fontSize: \"20px\",\n                                    fontFamily: \"MrsEaves-Italic\"\n                                },\n                                children: full.bio\n                            }, void 0, false, {\n                                fileName: \"C:\\\\coding projects\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\venerations\\\\[id].js\",\n                                lineNumber: 83,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                style: {\n                                    textAlign: \"center\"\n                                },\n                                children: [\n                                    \"Comments\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                        onChange: handleFieldChange,\n                                        value: form.text,\n                                        id: \"text\",\n                                        style: {\n                                            fontSize: \"2rem\"\n                                        },\n                                        placeholder: \"Leave blank to not change\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\coding projects\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\venerations\\\\[id].js\",\n                                        lineNumber: 85,\n                                        columnNumber: 7\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                        onClick: function() {\n                                            return handleSubmit();\n                                        },\n                                        className: \"ui color1 button\",\n                                        variant: \"contained\",\n                                        children: \"Send\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\coding projects\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\venerations\\\\[id].js\",\n                                        lineNumber: 86,\n                                        columnNumber: 7\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        children: venComments\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\coding projects\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\venerations\\\\[id].js\",\n                                        lineNumber: 87,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\coding projects\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\venerations\\\\[id].js\",\n                                lineNumber: 84,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\coding projects\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\venerations\\\\[id].js\",\n                        lineNumber: 79,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\coding projects\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\venerations\\\\[id].js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                class: \"ui divider\"\n            }, void 0, false, {\n                fileName: \"C:\\\\coding projects\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\venerations\\\\[id].js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\coding projects\\\\VenerationSpace\\\\nextjs-blog\\\\pages\\\\venerations\\\\[id].js\",\n        lineNumber: 68,\n        columnNumber: 7\n    }, this);\n};\n_s(About, \"nHqndDWIwFHVl/gCaUu8bbQVYiw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_11__.useSession\n    ];\n});\n_c = About;\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZixLQUFLLEVBQUU7b0NBQUNLLFNBQVMsRUFBRSxRQUFRO2lDQUFDOztvQ0FBRSxVQUNsQztrREFBQSw4REFBQ29CLE9BQUs7d0NBQUNDLFFBQVEsRUFBRTlELGlCQUFpQjt3Q0FBRUksS0FBSyxFQUFFTixJQUFJLENBQUNELElBQUk7d0NBQUVOLEVBQUUsRUFBRyxNQUFNO3dDQUFDNkMsS0FBSyxFQUFFOzRDQUFDWSxRQUFRLEVBQUMsTUFBTTt5Q0FBQzt3Q0FBRWUsV0FBVyxFQUFHLDJCQUEyQjs7Ozs7NENBQUU7a0RBQ3ZJLDhEQUFDdkMsUUFBTTt3Q0FBQ0MsT0FBTyxFQUFJO21EQUFNTyxZQUFZLEVBQUU7eUNBQUE7d0NBQUVKLFNBQVMsRUFBQyxrQkFBa0I7d0NBQUNDLE9BQU8sRUFBQyxXQUFXO2tEQUFDLE1BQUk7Ozs7OzRDQUFTO2tEQUNyRyw4REFBQ1AsS0FBRztrREFDREosV0FBVzs7Ozs7NENBQ1I7Ozs7OztvQ0FDSDs7Ozs7OzRCQUVPOzs7Ozs7b0JBQ0E7MEJBRVosOERBQUNJLEtBQUc7Z0JBQUNvQixLQUFLLEVBQUMsWUFBWTs7Ozs7b0JBQU87Ozs7OztZQUUxQixDQUNQO0NBQ0Y7R0F2RnVCckQsS0FBSzs7UUFDWkgsa0RBQVM7UUFHVUUsd0RBQVU7OztBQUp0QkMsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy92ZW5lcmF0aW9ucy9baWRdLmpzPzA0ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7UmVhY3QsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnXG5pbXBvcnQgJ3NlbWFudGljLXVpLWNzcy90ZXN0Mi5jc3MnXG5pbXBvcnQge0NvbnRhaW5lciwgSW1hZ2UsIEdyaWR9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSAnL2NvbXBvbmVudHMvU2VhcmNoJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgTmF2QmFyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZCYXInO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCl7IFxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcbiAgdmFyIHBlcnNvbklkID0gaWRcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKVxuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XG4gICAgdGV4dDogJydcbn0pXG5cbiAgY29uc3QgaGFuZGxlRmllbGRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldEZvcm0ob2xkID0+ICh7IC4uLm9sZCwgW2UudGFyZ2V0LmlkXTogZS50YXJnZXQudmFsdWUgfSkpXG59XG4gIGNvbnN0IFtmdWxsLCBzZXRGdWxsXSA9IHVzZVN0YXRlKCcnKVxuICB1c2VFZmZlY3QoKCkgPT4gZ2V0RnVsbCgpKVxuICBjb25zdCBnZXRGdWxsID0gKCkgPT4ge1xuICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9nZXRPbmUvJysgcGVyc29uSWQpXG4gICAgLnRoZW4ocmVzID0+IHtcbiAgICAgIHNldEZ1bGwocmVzLmRhdGEpXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9KVxuICB9XG4gIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUoJycpXG4gIHVzZUVmZmVjdCgoKSA9PiB7Z2V0Q29tbWVudHMoKTt9LCBbXSlcblxuICBjb25zdCBnZXRDb21tZW50cyA9IGFzeW5jICgpID0+IHtcbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvZ2V0Q29tbWVudHMvJysgcGVyc29uSWQpXG4gICAgLnRoZW4ocmVzID0+IHtcbiAgICAgIHNldENvbW1lbnRzKHJlcy5kYXRhKVxuICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfSlcbiAgfVxuICBnZXRDb21tZW50cygpXG4gIGNvbnN0IHZlbkNvbW1lbnRzID0gQXJyYXkuZnJvbShjb21tZW50cykubWFwKChjb21tZW50cykgPT57XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBrZXkgPSB7Y29tbWVudHMuX2lkfT5cbiAgICAgICAgPGRpdj4ge2NvbW1lbnRzLmF1dGhvcn06IHtjb21tZW50cy50ZXh0fTwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0geygpID0+IGhhbmRsZURlbGV0ZShjb21tZW50cy5faWQpfSBjbGFzc05hbWU9XCJ1aSBjb2xvcjEgYnV0dG9uXCIgdmFyaWFudD0nY29udGFpbmVkJz5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0pXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGF3YWl0IGF4aW9zLmRlbGV0ZSgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS8vZGVsZXRlQ29tbWVudC8nICsgaWQpXG4gICAgZ2V0Q29tbWVudHMoKVxuICB9O1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvL3Bvc3RDb21tZW50LycgLCB7XG4gICAgICBcInBhcmVudFwiOiBwZXJzb25JZCxcbiAgICAgIFwiYXV0aG9yXCI6IHNlc3Npb24udXNlci5uYW1lLFxuICAgICAgXCJ0ZXh0XCI6IGZvcm0udGV4dFxuICAgIH0pXG4gICAgZ2V0Q29tbWVudHMoKVxuICB9O1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBcInVybCgvYmlvUGljdHVyZXMvYmFja2dyb3VuZC5qcGcpXCIsIGJhY2tncm91bmRTaXplOiAnY292ZXInfX0+XG4gICAgICA8TmF2QmFyLz5cbiAgICAgIDxDb250YWluZXIgdGV4dCBzdHlsZT17eyBwYWRkaW5nVG9wOiAnNmVtJyB9fT5cbiAgICAgIDxTZWFyY2ggLz5cbiAgICAgIDxHcmlkLkNvbHVtbiBzdHlsZT17eyB0ZXh0QWxpZ246IFwicmlnaHRcIiB9fT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ1aSByaWdodCBsYWJlbGVkIGljb24gYnV0dG9uXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiY29uZmlndXJlIGljb25cIj48L2k+XG4gICAgICAgICAgICAgIDxhIGhyZWY9eycvdmVuZXJhdGlvbnMvdXBkYXRlLycrIHBlcnNvbklkfT48L2E+XG4gICAgICAgICAgICAgIE9wdGlvbnNcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBtYXNzaXZlIG1lc3NhZ2VcIiBzdHlsZSA9IHt7IG1hcmdpbjonNXJlbSd9fT5cbiAgICAgICAgICAgIDxoMSBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIiwgZm9udFNpemU6XCI1MHB4XCIsIGZvbnRGYW1pbHk6XCJNcnNFYXZlcy1JdGFsaWNcIn19PntmdWxsLmZ1bGxOYW1lfTwvaDE+XG4gICAgICA8aDMgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRTaXplOlwiMzBweFwifX0+e2Z1bGwuYmlydGhEYXRlfSAtIHtmdWxsLmRlYXRoRGF0ZX08L2gzPlxuICAgICAgPEltYWdlIHNyYz17ZnVsbC5waWN0dXJlVVJMfSBzaXplPSdtZWRpdW0nIGNlbnRlcmVkIC8+XG4gICAgICAgIDxwIHRleHQgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMmVtJywgZm9udFNpemU6XCIyMHB4XCIsIGZvbnRGYW1pbHk6XCJNcnNFYXZlcy1JdGFsaWNcIn19PntmdWxsLmJpb308L3A+XG4gICAgICA8aDMgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5Db21tZW50c1xuICAgICAgPGlucHV0IG9uQ2hhbmdlPXtoYW5kbGVGaWVsZENoYW5nZX0gdmFsdWU9e2Zvcm0udGV4dH0gaWQgPSBcInRleHRcIiBzdHlsZT17e2ZvbnRTaXplOlwiMnJlbVwifX0gcGxhY2Vob2xkZXIgPSBcIkxlYXZlIGJsYW5rIHRvIG5vdCBjaGFuZ2VcIi8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7KCkgPT4gaGFuZGxlU3VibWl0KCl9IGNsYXNzTmFtZT1cInVpIGNvbG9yMSBidXR0b25cIiB2YXJpYW50PSdjb250YWluZWQnPlNlbmQ8L2J1dHRvbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7dmVuQ29tbWVudHN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oMz5cbiAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgPGRpdiBjbGFzcz1cInVpIGRpdmlkZXJcIj48L2Rpdj5cblxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbIkhlYWQiLCJMaW5rIiwiYXhpb3MiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiSW1hZ2UiLCJHcmlkIiwiU2VhcmNoIiwidXNlUm91dGVyIiwiTmF2QmFyIiwidXNlU2Vzc2lvbiIsIkFib3V0Iiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInBlcnNvbklkIiwiZGF0YSIsInNlc3Npb24iLCJzdGF0dXMiLCJ0ZXh0IiwiZm9ybSIsInNldEZvcm0iLCJoYW5kbGVGaWVsZENoYW5nZSIsImUiLCJvbGQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZ1bGwiLCJzZXRGdWxsIiwiZ2V0RnVsbCIsImdldCIsInRoZW4iLCJyZXMiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwiZ2V0Q29tbWVudHMiLCJ2ZW5Db21tZW50cyIsIkFycmF5IiwiZnJvbSIsIm1hcCIsImRpdiIsImF1dGhvciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoYW5kbGVEZWxldGUiLCJfaWQiLCJjbGFzc05hbWUiLCJ2YXJpYW50IiwiYnIiLCJkZWxldGUiLCJoYW5kbGVTdWJtaXQiLCJwb3N0IiwidXNlciIsIm5hbWUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwicGFkZGluZ1RvcCIsIkNvbHVtbiIsInRleHRBbGlnbiIsImNsYXNzIiwiaSIsImEiLCJocmVmIiwibWFyZ2luIiwiaDEiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJmdWxsTmFtZSIsImgzIiwiYmlydGhEYXRlIiwiZGVhdGhEYXRlIiwic3JjIiwicGljdHVyZVVSTCIsInNpemUiLCJjZW50ZXJlZCIsInAiLCJtYXJnaW5Ub3AiLCJiaW8iLCJpbnB1dCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/venerations/[id].js\n"));

/***/ })

});