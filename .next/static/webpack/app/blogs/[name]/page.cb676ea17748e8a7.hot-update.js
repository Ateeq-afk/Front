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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components_Blogs_Blogsslider_BlogSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Blogs/Blogsslider/BlogSlider */ \"(app-pages-browser)/./Components/Blogs/Blogsslider/BlogSlider.tsx\");\n/* harmony import */ var _Components_Navbar_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Navbar/Header/Header */ \"(app-pages-browser)/./Components/Navbar/Header/Header.tsx\");\n/* harmony import */ var _Components_Navbar_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/Navbar/Footer/Footer */ \"(app-pages-browser)/./Components/Navbar/Footer/Footer.tsx\");\n/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-quill */ \"(app-pages-browser)/./node_modules/react-quill/lib/index.js\");\n/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ \"(app-pages-browser)/./node_modules/react-quill/dist/quill.snow.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Blogmain = (param)=>{\n    let { blog } = param;\n    _s();\n    const [expandedId, setExpandedId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const toggleExpanded = (id)=>{\n        setExpandedId(expandedId === id ? null : id);\n    };\n    const transformBlogToDataProps = (blog)=>{\n        return {\n            products: blog.products // Directly use the products array from Blog\n        };\n    };\n    if (!blog) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-black w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar_Header_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex  pt-20 pl-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-yellow-500 w-1 md:h-16 h-12 mt-8 md:mt-0 md:mr-6 mr-4 self-center\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 8\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"md:text-4xl  text-2xl pt-10 text-white\",\n                            children: blog.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-yellow-500 text-9xl  relative hidden md:block \",\n                            style: {\n                                top: \"-0.2em\"\n                            },\n                            children: \".\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 8\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 6\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ml-9\",\n                    children: blog && blog.over && blog.over.map((over, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-300 \",\n                            children: over\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 8\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-black py-8 pb-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container mx-auto md:px-16 px-4 grid grid-cols-1 md:grid-cols-2 md:gap-5\",\n                            children: blog && blog.blogs && blog.blogs.map((blogs, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-6 shadow-lg rounded-lg overflow-hidden border border-white\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"relative h-[200px]\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: \"https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/\".concat(blogs.image),\n                                                alt: blogs.imagealt,\n                                                layout: \"fill\",\n                                                objectFit: \"cover\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 11\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"p-6 bg-black\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    className: \"text-2xl font-bold mb-3 text-white\",\n                                                    children: blogs.title\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 11\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-white mt-4 \".concat(expandedId !== blogs._id ? \"line-clamp-2\" : \"\"),\n                                                    children: blogs.para\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 11\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"text-yellow-400 hover:yellow-400 transition-colors mt-4\",\n                                                    onClick: ()=>toggleExpanded(blogs._id),\n                                                    children: expandedId === blogs._id ? \"Read Less\" : \"Read More\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 11\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 9\n                                        }, undefined)\n                                    ]\n                                }, blogs._id, true, {\n                                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 7\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 3\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: blog && blog.blog && blog.blog.map((blogs, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-black\",\n                                            children: blogs.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                            lineNumber: 116,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_quill__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                            value: blogs.para,\n                                            readOnly: true,\n                                            theme: \"bubble\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                            lineNumber: 117,\n                                            columnNumber: 4\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 9\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 8\n                }, undefined),\n                blog && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Blogs_Blogsslider_BlogSlider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    data: transformBlogToDataProps(blog)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                    lineNumber: 123,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n            lineNumber: 72,\n            columnNumber: 6\n        }, undefined)\n    }, void 0, false);\n};\n_s(Blogmain, \"qpIQi94hcn+lxkJWgZG2jWze6qI=\");\n_c = Blogmain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blogmain);\nvar _c;\n$RefreshReg$(_c, \"Blogmain\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvQmxvZ3MvQmxvZ21haW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ29DO0FBQ0w7QUFDb0M7QUFDWjtBQUNBO0FBQ2xCO0FBQ0k7QUE0Q3pDLE1BQ0FNLFdBQTRCO1FBQUMsRUFBRUMsSUFBSSxFQUFFOztJQUNuQyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1QsK0NBQVFBLENBQWdCO0lBQzVELE1BQU1VLGlCQUFpQixDQUFDQztRQUN0QkYsY0FBY0QsZUFBZUcsS0FBSyxPQUFPQTtJQUMzQztJQUNBLE1BQU1DLDJCQUEyQixDQUFDTDtRQUNoQyxPQUFPO1lBQ0xNLFVBQVVOLEtBQUtNLFFBQVEsQ0FBQyw0Q0FBNEM7UUFDdEU7SUFDRjtJQUNBLElBQUksQ0FBQ04sTUFBTTtRQUNULHFCQUNFLDhEQUFDTztzQkFDQyw0RUFBQ0E7MEJBQUk7Ozs7Ozs7Ozs7O0lBR2I7SUFDRSxxQkFDRTtrQkFDQyw0RUFBQ0E7WUFBSUMsV0FBVTs7OEJBQ2QsOERBQUNaLHdFQUFNQTs7Ozs7OEJBQ1IsOERBQUNXO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7Ozs7OztzQ0FDZCw4REFBQ0M7NEJBQUdELFdBQVU7c0NBQTBDUixLQUFLVSxJQUFJOzs7Ozs7c0NBQ2xFLDhEQUFDQzs0QkFBS0gsV0FBVTs0QkFBc0RJLE9BQU87Z0NBQUNDLEtBQUs7NEJBQVE7c0NBQUc7Ozs7Ozs7Ozs7Ozs4QkFFOUYsOERBQUNOO29CQUFJQyxXQUFVOzhCQUNmUixRQUFRQSxLQUFLYyxJQUFJLElBQUlkLEtBQUtjLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNELE1BQU1FLHNCQUN2Qyw4REFBQ0M7NEJBQUVULFdBQVU7c0NBQ2pCTTsyQkFEdUNFOzs7Ozs7Ozs7OzhCQUt0Qyw4REFBQ1Q7b0JBQUlDLFdBQVU7O3NDQUNwQiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2RSLFFBQVFBLEtBQUtrQixLQUFLLElBQUlsQixLQUFLa0IsS0FBSyxDQUFDSCxHQUFHLENBQUMsQ0FBQ0csT0FBT0Ysc0JBQzFDLDhEQUFDVDtvQ0FBb0JDLFdBQVU7O3NEQUM3Qiw4REFBQ0Q7NENBQUlDLFdBQVU7c0RBQ2IsNEVBQUNkLG1EQUFLQTtnREFDSnlCLEtBQUssNkRBQXlFLE9BQVpELE1BQU1FLEtBQUs7Z0RBQzdFQyxLQUFLSCxNQUFNSSxRQUFRO2dEQUNuQkMsUUFBTztnREFDUEMsV0FBVTs7Ozs7Ozs7Ozs7c0RBR2QsOERBQUNqQjs0Q0FBSUMsV0FBVTs7OERBQ2IsOERBQUNpQjtvREFBR2pCLFdBQVU7OERBQXNDVSxNQUFNUSxLQUFLOzs7Ozs7OERBQy9ELDhEQUFDVDtvREFBRVQsV0FBVyxtQkFBa0UsT0FBL0NQLGVBQWVpQixNQUFNUyxHQUFHLEdBQUcsaUJBQWlCOzhEQUMxRVQsTUFBTVUsSUFBSTs7Ozs7OzhEQUViLDhEQUFDQztvREFDQ3JCLFdBQVU7b0RBQ1ZzQixTQUFTLElBQU0zQixlQUFlZSxNQUFNUyxHQUFHOzhEQUV0QzFCLGVBQWVpQixNQUFNUyxHQUFHLEdBQUcsY0FBYzs7Ozs7Ozs7Ozs7OzttQ0FsQnRDVCxNQUFNUyxHQUFHOzs7Ozs7Ozs7O3NDQXdCakIsOERBQUNwQjtzQ0FDRFAsUUFBUUEsS0FBS0EsSUFBSSxJQUFJQSxLQUFLQSxJQUFJLENBQUNlLEdBQUcsQ0FBQyxDQUFDRyxPQUFPRixzQkFDM0MsOERBQUNUO29DQUFJQyxXQUFVOztzREFDZiw4REFBQ0Q7NENBQUlDLFdBQVU7c0RBQWNVLE1BQU1RLEtBQUs7Ozs7OztzREFDN0MsOERBQUM1QixvREFBVUE7NENBQUNpQyxPQUFPYixNQUFNVSxJQUFJOzRDQUFFSSxVQUFVOzRDQUFNQyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFNdkRqQyxzQkFBUSw4REFBQ0wsZ0ZBQVVBO29CQUFDdUMsTUFBTTdCLHlCQUF5Qkw7Ozs7Ozs4QkFDL0MsOERBQUNILHdFQUFNQTs7Ozs7Ozs7Ozs7O0FBSWI7R0EzRUFFO0tBQUFBO0FBNEVBLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvQmxvZ3MvQmxvZ21haW4udHN4P2VkNGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgdXNlU3RhdGUsRkMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IEJsb2dTbGlkZXIgZnJvbSAnQC9Db21wb25lbnRzL0Jsb2dzL0Jsb2dzc2xpZGVyL0Jsb2dTbGlkZXInO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ0AvQ29tcG9uZW50cy9OYXZiYXIvSGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnQC9Db21wb25lbnRzL05hdmJhci9Gb290ZXIvRm9vdGVyJztcclxuaW1wb3J0IFJlYWN0UXVpbGwgZnJvbSAncmVhY3QtcXVpbGwnO1xyXG5pbXBvcnQgJ3JlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3MnO1xyXG5pbnRlcmZhY2UgQmxvZyB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG92ZXI6IHN0cmluZ1tdO1xyXG4gIG1ldGF0aXRsZTogc3RyaW5nO1xyXG4gIG1ldGFkZXM6IHN0cmluZztcclxuICBibG9nczogQmxvZ0RldGFpbFtdO1xyXG4gIHByb2R1Y3RzOiBQcm9kdWN0W107XHJcbn1cclxuaW50ZXJmYWNlIFByb2R1Y3Qge1xyXG4gIHRlc3RpbWFnZTogc3RyaW5nO1xyXG4gIHRlc3RpbWFnZWFsdDogc3RyaW5nO1xyXG4gIF9pZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBzdGF0ZW5hbWU6IHN0cmluZztcclxuICBhbW91bnQ6IG51bWJlcjtcclxuICB1cmxsaW5rOiBzdHJpbmc7XHJcbiAgYmFkZ2U/OiBzdHJpbmc7XHJcbn1cclxuaW50ZXJmYWNlIEJsb2dEZXRhaWwge1xyXG4gIF9pZDogc3RyaW5nO1xyXG4gIGltYWdlOiBzdHJpbmc7XHJcbiAgaW1hZ2VhbHQ6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHBhcmE6IHN0cmluZztcclxuICBzdGF0ZW5hbWU6IHN0cmluZzsgXHJcbiAgYW1vdW50OiBudW1iZXI7ICAgXHJcbiAgdXJsbGluazogc3RyaW5nOyAgXHJcbn1cclxuaW50ZXJmYWNlIERhdGFQcm9wcyB7XHJcbiAgcHJvZHVjdHM6IHtcclxuICAgIF9pZDogc3RyaW5nO1xyXG4gICAgdGVzdGltYWdlOiBzdHJpbmc7XHJcbiAgICB0ZXN0aW1hZ2VhbHQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHN0YXRlbmFtZTogc3RyaW5nO1xyXG4gICAgYW1vdW50OiBudW1iZXI7XHJcbiAgICB1cmxsaW5rOiBzdHJpbmc7XHJcbiAgICBiYWRnZT86IHN0cmluZztcclxuICB9W107XHJcbn1cclxuaW50ZXJmYWNlIEJsb2dQcm9wcyB7XHJcbiAgYmxvZzogQmxvZztcclxufVxyXG5jb25zdCBcclxuQmxvZ21haW4gOiBGQyA8QmxvZ1Byb3BzPiA9ICh7IGJsb2cgfSk9PiB7XHJcbiAgY29uc3QgW2V4cGFuZGVkSWQsIHNldEV4cGFuZGVkSWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgdG9nZ2xlRXhwYW5kZWQgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0RXhwYW5kZWRJZChleHBhbmRlZElkID09PSBpZCA/IG51bGwgOiBpZCk7XHJcbiAgfTtcclxuICBjb25zdCB0cmFuc2Zvcm1CbG9nVG9EYXRhUHJvcHMgPSAoYmxvZzogQmxvZyk6IERhdGFQcm9wcyA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9kdWN0czogYmxvZy5wcm9kdWN0cyAvLyBEaXJlY3RseSB1c2UgdGhlIHByb2R1Y3RzIGFycmF5IGZyb20gQmxvZ1xyXG4gICAgfTtcclxuICB9O1xyXG4gIGlmICghYmxvZykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWJsYWNrIHctZnVsbCc+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggIHB0LTIwIHBsLTVcIiA+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXllbGxvdy01MDAgdy0xIG1kOmgtMTYgaC0xMiBtdC04IG1kOm10LTAgbWQ6bXItNiBtci00IHNlbGYtY2VudGVyXCI+PC9kaXY+IFxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJtZDp0ZXh0LTR4bCAgdGV4dC0yeGwgcHQtMTAgdGV4dC13aGl0ZVwiPntibG9nLm5hbWV9PC9oMT5cclxuICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteWVsbG93LTUwMCB0ZXh0LTl4bCAgcmVsYXRpdmUgaGlkZGVuIG1kOmJsb2NrIFwiIHN0eWxlPXt7dG9wOiAnLTAuMmVtJ319Pi48L3NwYW4+IFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtOVwiPlxyXG4gICAgICB7YmxvZyAmJiBibG9nLm92ZXIgJiYgYmxvZy5vdmVyLm1hcCgob3ZlciwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgXCIga2V5PXtpbmRleH0gID5cclxuICAgICB7b3Zlcn1cclxuICAgICA8L3A+XHJcbiAgICAgICkpfSBcclxuICAgIDwvZGl2PiBcclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgcHktOCBwYi0wXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBtZDpweC0xNiBweC00IGdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbWQ6Z2FwLTVcIj5cclxuICB7YmxvZyAmJiBibG9nLmJsb2dzICYmIGJsb2cuYmxvZ3MubWFwKChibG9ncywgaW5kZXgpID0+IChcclxuICAgICAgPGRpdiBrZXk9e2Jsb2dzLl9pZH0gY2xhc3NOYW1lPVwibWItNiBzaGFkb3ctbGcgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyIGJvcmRlci13aGl0ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1bMjAwcHhdXCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9icHUtaW1hZ2VzLXYxLnMzLmV1LW5vcnRoLTEuYW1hem9uYXdzLmNvbS91cGxvYWRzLyR7YmxvZ3MuaW1hZ2V9YH1cclxuICAgICAgICAgICAgYWx0PXtibG9ncy5pbWFnZWFsdH1cclxuICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgYmctYmxhY2tcIj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItMyB0ZXh0LXdoaXRlXCI+e2Jsb2dzLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlIG10LTQgJHtleHBhbmRlZElkICE9PSBibG9ncy5faWQgPyAnbGluZS1jbGFtcC0yJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICB7YmxvZ3MucGFyYX1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNDAwIGhvdmVyOnllbGxvdy00MDAgdHJhbnNpdGlvbi1jb2xvcnMgbXQtNFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUV4cGFuZGVkKGJsb2dzLl9pZCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtleHBhbmRlZElkID09PSBibG9ncy5faWQgPyAnUmVhZCBMZXNzJyA6ICdSZWFkIE1vcmUnfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgIHtibG9nICYmIGJsb2cuYmxvZyAmJiBibG9nLmJsb2cubWFwKChibG9ncywgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ibGFjayc+e2Jsb2dzLnRpdGxlfTwvZGl2PlxyXG4gICA8UmVhY3RRdWlsbCB2YWx1ZT17YmxvZ3MucGFyYX0gcmVhZE9ubHk9e3RydWV9IHRoZW1lPXtcImJ1YmJsZVwifSAvPlxyXG4gICA8L2Rpdj5cclxuICAgICAgICkgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4ge2Jsb2cgJiYgPEJsb2dTbGlkZXIgZGF0YT17dHJhbnNmb3JtQmxvZ1RvRGF0YVByb3BzKGJsb2cpfSAvPn1cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj4gXHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dtYWluOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkltYWdlIiwiQmxvZ1NsaWRlciIsIkhlYWRlciIsIkZvb3RlciIsIlJlYWN0UXVpbGwiLCJCbG9nbWFpbiIsImJsb2ciLCJleHBhbmRlZElkIiwic2V0RXhwYW5kZWRJZCIsInRvZ2dsZUV4cGFuZGVkIiwiaWQiLCJ0cmFuc2Zvcm1CbG9nVG9EYXRhUHJvcHMiLCJwcm9kdWN0cyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibmFtZSIsInNwYW4iLCJzdHlsZSIsInRvcCIsIm92ZXIiLCJtYXAiLCJpbmRleCIsInAiLCJibG9ncyIsInNyYyIsImltYWdlIiwiYWx0IiwiaW1hZ2VhbHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJoMyIsInRpdGxlIiwiX2lkIiwicGFyYSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ2YWx1ZSIsInJlYWRPbmx5IiwidGhlbWUiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Blogs/Blogmain.tsx\n"));

/***/ })

});