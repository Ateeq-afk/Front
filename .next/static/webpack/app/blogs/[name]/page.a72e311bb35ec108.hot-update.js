"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blogs/[name]/page",{

/***/ "(app-pages-browser)/./Components/Blogs/Blogmain.tsx":
/*!***************************************!*\
  !*** ./Components/Blogs/Blogmain.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components_Blogs_Blogsslider_BlogSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Blogs/Blogsslider/BlogSlider */ \"(app-pages-browser)/./Components/Blogs/Blogsslider/BlogSlider.tsx\");\n/* harmony import */ var _Components_Navbar_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Navbar/Header/Header */ \"(app-pages-browser)/./Components/Navbar/Header/Header.tsx\");\n/* harmony import */ var _Components_Navbar_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/Navbar/Footer/Footer */ \"(app-pages-browser)/./Components/Navbar/Footer/Footer.tsx\");\n/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-quill */ \"(app-pages-browser)/./node_modules/react-quill/lib/index.js\");\n/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ \"(app-pages-browser)/./node_modules/react-quill/dist/quill.snow.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Blogmain = (param)=>{\n    let { blog } = param;\n    _s();\n    const [expandedId, setExpandedId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const toggleExpanded = (id)=>{\n        setExpandedId(expandedId === id ? null : id);\n    };\n    console.log(\"blog\", blog.blog.para);\n    const transformBlogToDataProps = (blog)=>{\n        return {\n            products: blog.products // Directly use the products array from Blog\n        };\n    };\n    if (!blog) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-black w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar_Header_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex  pt-20 pl-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-yellow-500 w-1 md:h-16 h-12 mt-8 md:mt-0 md:mr-6 mr-4 self-center\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 8\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"md:text-4xl  text-2xl pt-10 text-white\",\n                            children: blog.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-yellow-500 text-9xl  relative hidden md:block \",\n                            style: {\n                                top: \"-0.2em\"\n                            },\n                            children: \".\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 8\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 6\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ml-9\",\n                    children: blog && blog.over && blog.over.map((over, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-300 \",\n                            children: over\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 8\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-black py-8 pb-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container mx-auto md:px-16 px-4 grid grid-cols-1 md:grid-cols-2 md:gap-5\",\n                            children: blog && blog.blogs && blog.blogs.map((blogs, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-6 shadow-lg rounded-lg overflow-hidden border border-white\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"relative h-[200px]\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: \"https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/\".concat(blogs.image),\n                                                alt: blogs.imagealt,\n                                                layout: \"fill\",\n                                                objectFit: \"cover\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 11\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"p-6 bg-black\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    className: \"text-2xl font-bold mb-3 text-white\",\n                                                    children: blogs.title\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 11\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-white mt-4 \".concat(expandedId !== blogs._id ? \"line-clamp-2\" : \"\"),\n                                                    children: blogs.para\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 11\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"text-yellow-400 hover:yellow-400 transition-colors mt-4\",\n                                                    onClick: ()=>toggleExpanded(blogs._id),\n                                                    children: expandedId === blogs._id ? \"Read Less\" : \"Read More\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 11\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 9\n                                        }, undefined)\n                                    ]\n                                }, blogs._id, true, {\n                                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 7\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 3\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: blog && blog.blog && blog.blog.map((blogs, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-white\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-black\",\n                                            children: blogs.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                            lineNumber: 117,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        blogs.para,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_quill__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                            value: blogs.para,\n                                            readOnly: true,\n                                            theme: \"snow\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                            lineNumber: 119,\n                                            columnNumber: 4\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 9\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                            lineNumber: 114,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 8\n                }, undefined),\n                blog && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Blogs_Blogsslider_BlogSlider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    data: transformBlogToDataProps(blog)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                    lineNumber: 125,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n            lineNumber: 73,\n            columnNumber: 6\n        }, undefined)\n    }, void 0, false);\n};\n_s(Blogmain, \"qpIQi94hcn+lxkJWgZG2jWze6qI=\");\n_c = Blogmain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blogmain);\nvar _c;\n$RefreshReg$(_c, \"Blogmain\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvQmxvZ3MvQmxvZ21haW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ29DO0FBQ0w7QUFDb0M7QUFDWjtBQUNBO0FBQ2xCO0FBQ0k7QUE0Q3pDLE1BQ0FNLFdBQTRCO1FBQUMsRUFBRUMsSUFBSSxFQUFFOztJQUNuQyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1QsK0NBQVFBLENBQWdCO0lBQzVELE1BQU1VLGlCQUFpQixDQUFDQztRQUN0QkYsY0FBY0QsZUFBZUcsS0FBSyxPQUFPQTtJQUMzQztJQUNBQyxRQUFRQyxHQUFHLENBQUMsUUFBT04sS0FBS0EsSUFBSSxDQUFDTyxJQUFJO0lBQ2pDLE1BQU1DLDJCQUEyQixDQUFDUjtRQUNoQyxPQUFPO1lBQ0xTLFVBQVVULEtBQUtTLFFBQVEsQ0FBQyw0Q0FBNEM7UUFDdEU7SUFDRjtJQUNBLElBQUksQ0FBQ1QsTUFBTTtRQUNULHFCQUNFLDhEQUFDVTtzQkFDQyw0RUFBQ0E7MEJBQUk7Ozs7Ozs7Ozs7O0lBR2I7SUFDRSxxQkFDRTtrQkFDQyw0RUFBQ0E7WUFBSUMsV0FBVTs7OEJBQ2QsOERBQUNmLHdFQUFNQTs7Ozs7OEJBQ1IsOERBQUNjO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7Ozs7OztzQ0FDZCw4REFBQ0M7NEJBQUdELFdBQVU7c0NBQTBDWCxLQUFLYSxJQUFJOzs7Ozs7c0NBQ2xFLDhEQUFDQzs0QkFBS0gsV0FBVTs0QkFBc0RJLE9BQU87Z0NBQUNDLEtBQUs7NEJBQVE7c0NBQUc7Ozs7Ozs7Ozs7Ozs4QkFFOUYsOERBQUNOO29CQUFJQyxXQUFVOzhCQUNmWCxRQUFRQSxLQUFLaUIsSUFBSSxJQUFJakIsS0FBS2lCLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNELE1BQU1FLHNCQUN2Qyw4REFBQ0M7NEJBQUVULFdBQVU7c0NBQ2pCTTsyQkFEdUNFOzs7Ozs7Ozs7OzhCQUt0Qyw4REFBQ1Q7b0JBQUlDLFdBQVU7O3NDQUNwQiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2RYLFFBQVFBLEtBQUtxQixLQUFLLElBQUlyQixLQUFLcUIsS0FBSyxDQUFDSCxHQUFHLENBQUMsQ0FBQ0csT0FBT0Ysc0JBQzFDLDhEQUFDVDtvQ0FBb0JDLFdBQVU7O3NEQUM3Qiw4REFBQ0Q7NENBQUlDLFdBQVU7c0RBQ2IsNEVBQUNqQixtREFBS0E7Z0RBQ0o0QixLQUFLLDZEQUF5RSxPQUFaRCxNQUFNRSxLQUFLO2dEQUM3RUMsS0FBS0gsTUFBTUksUUFBUTtnREFDbkJDLFFBQU87Z0RBQ1BDLFdBQVU7Ozs7Ozs7Ozs7O3NEQUdkLDhEQUFDakI7NENBQUlDLFdBQVU7OzhEQUNiLDhEQUFDaUI7b0RBQUdqQixXQUFVOzhEQUFzQ1UsTUFBTVEsS0FBSzs7Ozs7OzhEQUMvRCw4REFBQ1Q7b0RBQUVULFdBQVcsbUJBQWtFLE9BQS9DVixlQUFlb0IsTUFBTVMsR0FBRyxHQUFHLGlCQUFpQjs4REFDMUVULE1BQU1kLElBQUk7Ozs7Ozs4REFFYiw4REFBQ3dCO29EQUNDcEIsV0FBVTtvREFDVnFCLFNBQVMsSUFBTTdCLGVBQWVrQixNQUFNUyxHQUFHOzhEQUV0QzdCLGVBQWVvQixNQUFNUyxHQUFHLEdBQUcsY0FBYzs7Ozs7Ozs7Ozs7OzttQ0FsQnRDVCxNQUFNUyxHQUFHOzs7Ozs7Ozs7O3NDQXdCakIsOERBQUNwQjtzQ0FDRFYsUUFBUUEsS0FBS0EsSUFBSSxJQUFJQSxLQUFLQSxJQUFJLENBQUNrQixHQUFHLENBQUMsQ0FBQ0csT0FBT0Ysc0JBQzNDLDhEQUFDVDtvQ0FBSUMsV0FBVTs7c0RBQ2YsOERBQUNEOzRDQUFJQyxXQUFVO3NEQUFjVSxNQUFNUSxLQUFLOzs7Ozs7d0NBQ3ZDUixNQUFNZCxJQUFJO3NEQUNoQiw4REFBQ1Qsb0RBQVVBOzRDQUFDbUMsT0FBT1osTUFBTWQsSUFBSTs0Q0FBRTJCLFVBQVU7NENBQU1DLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQU12RG5DLHNCQUFRLDhEQUFDTCxnRkFBVUE7b0JBQUN5QyxNQUFNNUIseUJBQXlCUjs7Ozs7OzhCQUMvQyw4REFBQ0gsd0VBQU1BOzs7Ozs7Ozs7Ozs7QUFJYjtHQTdFQUU7S0FBQUE7QUE4RUEsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9CbG9ncy9CbG9nbWFpbi50c3g/ZWQ0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSxGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgQmxvZ1NsaWRlciBmcm9tICdAL0NvbXBvbmVudHMvQmxvZ3MvQmxvZ3NzbGlkZXIvQmxvZ1NsaWRlcic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnQC9Db21wb25lbnRzL05hdmJhci9IZWFkZXIvSGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICdAL0NvbXBvbmVudHMvTmF2YmFyL0Zvb3Rlci9Gb290ZXInO1xyXG5pbXBvcnQgUmVhY3RRdWlsbCBmcm9tICdyZWFjdC1xdWlsbCc7XHJcbmltcG9ydCAncmVhY3QtcXVpbGwvZGlzdC9xdWlsbC5zbm93LmNzcyc7XHJcbmludGVyZmFjZSBCbG9nIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgb3Zlcjogc3RyaW5nW107XHJcbiAgbWV0YXRpdGxlOiBzdHJpbmc7XHJcbiAgbWV0YWRlczogc3RyaW5nO1xyXG4gIGJsb2dzOiBCbG9nRGV0YWlsW107XHJcbiAgcHJvZHVjdHM6IFByb2R1Y3RbXTtcclxufVxyXG5pbnRlcmZhY2UgUHJvZHVjdCB7XHJcbiAgdGVzdGltYWdlOiBzdHJpbmc7XHJcbiAgdGVzdGltYWdlYWx0OiBzdHJpbmc7XHJcbiAgX2lkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHN0YXRlbmFtZTogc3RyaW5nO1xyXG4gIGFtb3VudDogbnVtYmVyO1xyXG4gIHVybGxpbms6IHN0cmluZztcclxuICBiYWRnZT86IHN0cmluZztcclxufVxyXG5pbnRlcmZhY2UgQmxvZ0RldGFpbCB7XHJcbiAgX2lkOiBzdHJpbmc7XHJcbiAgaW1hZ2U6IHN0cmluZztcclxuICBpbWFnZWFsdDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgcGFyYTogc3RyaW5nO1xyXG4gIHN0YXRlbmFtZTogc3RyaW5nOyBcclxuICBhbW91bnQ6IG51bWJlcjsgICBcclxuICB1cmxsaW5rOiBzdHJpbmc7ICBcclxufVxyXG5pbnRlcmZhY2UgRGF0YVByb3BzIHtcclxuICBwcm9kdWN0czoge1xyXG4gICAgX2lkOiBzdHJpbmc7XHJcbiAgICB0ZXN0aW1hZ2U6IHN0cmluZztcclxuICAgIHRlc3RpbWFnZWFsdDogc3RyaW5nO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgc3RhdGVuYW1lOiBzdHJpbmc7XHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIHVybGxpbms6IHN0cmluZztcclxuICAgIGJhZGdlPzogc3RyaW5nO1xyXG4gIH1bXTtcclxufVxyXG5pbnRlcmZhY2UgQmxvZ1Byb3BzIHtcclxuICBibG9nOiBCbG9nO1xyXG59XHJcbmNvbnN0IFxyXG5CbG9nbWFpbiA6IEZDIDxCbG9nUHJvcHM+ID0gKHsgYmxvZyB9KT0+IHtcclxuICBjb25zdCBbZXhwYW5kZWRJZCwgc2V0RXhwYW5kZWRJZF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuICBjb25zdCB0b2dnbGVFeHBhbmRlZCA9IChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXRFeHBhbmRlZElkKGV4cGFuZGVkSWQgPT09IGlkID8gbnVsbCA6IGlkKTtcclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKFwiYmxvZ1wiLGJsb2cuYmxvZy5wYXJhKVxyXG4gIGNvbnN0IHRyYW5zZm9ybUJsb2dUb0RhdGFQcm9wcyA9IChibG9nOiBCbG9nKTogRGF0YVByb3BzID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb2R1Y3RzOiBibG9nLnByb2R1Y3RzIC8vIERpcmVjdGx5IHVzZSB0aGUgcHJvZHVjdHMgYXJyYXkgZnJvbSBCbG9nXHJcbiAgICB9O1xyXG4gIH07XHJcbiAgaWYgKCFibG9nKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctYmxhY2sgdy1mdWxsJz5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAgcHQtMjAgcGwtNVwiID5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmcteWVsbG93LTUwMCB3LTEgbWQ6aC0xNiBoLTEyIG10LTggbWQ6bXQtMCBtZDptci02IG1yLTQgc2VsZi1jZW50ZXJcIj48L2Rpdj4gXHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1kOnRleHQtNHhsICB0ZXh0LTJ4bCBwdC0xMCB0ZXh0LXdoaXRlXCI+e2Jsb2cubmFtZX08L2gxPlxyXG4gICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNTAwIHRleHQtOXhsICByZWxhdGl2ZSBoaWRkZW4gbWQ6YmxvY2sgXCIgc3R5bGU9e3t0b3A6ICctMC4yZW0nfX0+Ljwvc3Bhbj4gXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC05XCI+XHJcbiAgICAgIHtibG9nICYmIGJsb2cub3ZlciAmJiBibG9nLm92ZXIubWFwKChvdmVyLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBcIiBrZXk9e2luZGV4fSAgPlxyXG4gICAgIHtvdmVyfVxyXG4gICAgIDwvcD5cclxuICAgICAgKSl9IFxyXG4gICAgPC9kaXY+IFxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayBweS04IHBiLTBcIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG1kOnB4LTE2IHB4LTQgZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBtZDpnYXAtNVwiPlxyXG4gIHtibG9nICYmIGJsb2cuYmxvZ3MgJiYgYmxvZy5ibG9ncy5tYXAoKGJsb2dzLCBpbmRleCkgPT4gKFxyXG4gICAgICA8ZGl2IGtleT17YmxvZ3MuX2lkfSBjbGFzc05hbWU9XCJtYi02IHNoYWRvdy1sZyByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBib3JkZXIgYm9yZGVyLXdoaXRlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLVsyMDBweF1cIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL2JwdS1pbWFnZXMtdjEuczMuZXUtbm9ydGgtMS5hbWF6b25hd3MuY29tL3VwbG9hZHMvJHtibG9ncy5pbWFnZX1gfVxyXG4gICAgICAgICAgICBhbHQ9e2Jsb2dzLmltYWdlYWx0fVxyXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBiZy1ibGFja1wiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi0zIHRleHQtd2hpdGVcIj57YmxvZ3MudGl0bGV9PC9oMz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17YHRleHQtd2hpdGUgbXQtNCAke2V4cGFuZGVkSWQgIT09IGJsb2dzLl9pZCA/ICdsaW5lLWNsYW1wLTInIDogJyd9YH0+XHJcbiAgICAgICAgICAgIHtibG9ncy5wYXJhfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy00MDAgaG92ZXI6eWVsbG93LTQwMCB0cmFuc2l0aW9uLWNvbG9ycyBtdC00XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRXhwYW5kZWQoYmxvZ3MuX2lkKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2V4cGFuZGVkSWQgPT09IGJsb2dzLl9pZCA/ICdSZWFkIExlc3MnIDogJ1JlYWQgTW9yZSd9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAge2Jsb2cgJiYgYmxvZy5ibG9nICYmIGJsb2cuYmxvZy5tYXAoKGJsb2dzLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZSc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtYmxhY2snPntibG9ncy50aXRsZX08L2Rpdj5cclxuICAgICAgICB7YmxvZ3MucGFyYX1cclxuICAgPFJlYWN0UXVpbGwgdmFsdWU9e2Jsb2dzLnBhcmF9IHJlYWRPbmx5PXt0cnVlfSB0aGVtZT17XCJzbm93XCJ9IC8+XHJcbiAgIDwvZGl2PlxyXG4gICAgICAgKSApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiB7YmxvZyAmJiA8QmxvZ1NsaWRlciBkYXRhPXt0cmFuc2Zvcm1CbG9nVG9EYXRhUHJvcHMoYmxvZyl9IC8+fVxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PiBcclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ21haW47Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW1hZ2UiLCJCbG9nU2xpZGVyIiwiSGVhZGVyIiwiRm9vdGVyIiwiUmVhY3RRdWlsbCIsIkJsb2dtYWluIiwiYmxvZyIsImV4cGFuZGVkSWQiLCJzZXRFeHBhbmRlZElkIiwidG9nZ2xlRXhwYW5kZWQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJwYXJhIiwidHJhbnNmb3JtQmxvZ1RvRGF0YVByb3BzIiwicHJvZHVjdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm5hbWUiLCJzcGFuIiwic3R5bGUiLCJ0b3AiLCJvdmVyIiwibWFwIiwiaW5kZXgiLCJwIiwiYmxvZ3MiLCJzcmMiLCJpbWFnZSIsImFsdCIsImltYWdlYWx0IiwibGF5b3V0Iiwib2JqZWN0Rml0IiwiaDMiLCJ0aXRsZSIsIl9pZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ2YWx1ZSIsInJlYWRPbmx5IiwidGhlbWUiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Blogs/Blogmain.tsx\n"));

/***/ })

});