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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components_Blogs_Blogsslider_BlogSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Blogs/Blogsslider/BlogSlider */ \"(app-pages-browser)/./Components/Blogs/Blogsslider/BlogSlider.tsx\");\n/* harmony import */ var _Components_Navbar_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Navbar/Header/Header */ \"(app-pages-browser)/./Components/Navbar/Header/Header.tsx\");\n/* harmony import */ var _Components_Navbar_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/Navbar/Footer/Footer */ \"(app-pages-browser)/./Components/Navbar/Footer/Footer.tsx\");\n/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-quill */ \"(app-pages-browser)/./node_modules/react-quill/lib/index.js\");\n/* harmony import */ var react_quill__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_quill__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ \"(app-pages-browser)/./node_modules/react-quill/dist/quill.snow.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Blogmain = (param)=>{\n    let { blog } = param;\n    _s();\n    const [expandedId, setExpandedId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const toggleExpanded = (id)=>{\n        setExpandedId(expandedId === id ? null : id);\n    };\n    const transformBlogToDataProps = (blog)=>{\n        return {\n            products: blog.products // Directly use the products array from Blog\n        };\n    };\n    if (!blog) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-black w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar_Header_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex  pt-20 pl-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-yellow-500 w-1 md:h-16 h-12 mt-8 md:mt-0 md:mr-6 mr-4 self-center\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 8\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"md:text-4xl  text-2xl pt-10 text-white\",\n                            children: blog.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-yellow-500 text-9xl  relative hidden md:block \",\n                            style: {\n                                top: \"-0.2em\"\n                            },\n                            children: \".\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 8\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 6\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ml-9\",\n                    children: blog && blog.over && blog.over.map((over, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-300 \",\n                            children: over\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 8\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-black py-8 pb-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container mx-auto md:px-16 px-4 grid grid-cols-1 md:grid-cols-2 md:gap-5\",\n                            children: blog && blog.blogs && blog.blogs.map((blogs, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-6 shadow-lg rounded-lg overflow-hidden border border-white\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"relative h-[200px]\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: \"https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/\".concat(blogs.image),\n                                                alt: blogs.imagealt,\n                                                layout: \"fill\",\n                                                objectFit: \"cover\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 11\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"p-6 bg-black\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    className: \"text-2xl font-bold mb-3 text-white\",\n                                                    children: blogs.title\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 11\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-white mt-4 \".concat(expandedId !== blogs._id ? \"line-clamp-2\" : \"\"),\n                                                    children: blogs.para\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 11\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"text-yellow-400 hover:yellow-400 transition-colors mt-4\",\n                                                    onClick: ()=>toggleExpanded(blogs._id),\n                                                    children: expandedId === blogs._id ? \"Read Less\" : \"Read More\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 11\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 9\n                                        }, undefined)\n                                    ]\n                                }, blogs._id, true, {\n                                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 7\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 3\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: blog && blog.blog && blog.blog.map((blogs, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-white\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-black\",\n                                            children: blogs.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                            lineNumber: 116,\n                                            columnNumber: 9\n                                        }, undefined),\n                                        blogs.para,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_quill__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                            value: blogs.para,\n                                            readOnly: true,\n                                            theme: \"subble\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                            lineNumber: 118,\n                                            columnNumber: 4\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 9\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 8\n                }, undefined),\n                blog && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Blogs_Blogsslider_BlogSlider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    data: transformBlogToDataProps(blog)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                    lineNumber: 125,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n            lineNumber: 72,\n            columnNumber: 6\n        }, undefined)\n    }, void 0, false);\n};\n_s(Blogmain, \"qpIQi94hcn+lxkJWgZG2jWze6qI=\");\n_c = Blogmain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blogmain);\nvar _c;\n$RefreshReg$(_c, \"Blogmain\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvQmxvZ3MvQmxvZ21haW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ29DO0FBQ0w7QUFDb0M7QUFDWjtBQUNBO0FBQ2xCO0FBQ0k7QUE0Q3pDLE1BQ0FNLFdBQTRCO1FBQUMsRUFBRUMsSUFBSSxFQUFFOztJQUNuQyxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1QsK0NBQVFBLENBQWdCO0lBQzVELE1BQU1VLGlCQUFpQixDQUFDQztRQUN0QkYsY0FBY0QsZUFBZUcsS0FBSyxPQUFPQTtJQUMzQztJQUNBLE1BQU1DLDJCQUEyQixDQUFDTDtRQUNoQyxPQUFPO1lBQ0xNLFVBQVVOLEtBQUtNLFFBQVEsQ0FBQyw0Q0FBNEM7UUFDdEU7SUFDRjtJQUNBLElBQUksQ0FBQ04sTUFBTTtRQUNULHFCQUNFLDhEQUFDTztzQkFDQyw0RUFBQ0E7MEJBQUk7Ozs7Ozs7Ozs7O0lBR2I7SUFDRSxxQkFDRTtrQkFDQyw0RUFBQ0E7WUFBSUMsV0FBVTs7OEJBQ2QsOERBQUNaLHdFQUFNQTs7Ozs7OEJBQ1IsOERBQUNXO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7Ozs7OztzQ0FDZCw4REFBQ0M7NEJBQUdELFdBQVU7c0NBQTBDUixLQUFLVSxJQUFJOzs7Ozs7c0NBQ2xFLDhEQUFDQzs0QkFBS0gsV0FBVTs0QkFBc0RJLE9BQU87Z0NBQUNDLEtBQUs7NEJBQVE7c0NBQUc7Ozs7Ozs7Ozs7Ozs4QkFFOUYsOERBQUNOO29CQUFJQyxXQUFVOzhCQUNmUixRQUFRQSxLQUFLYyxJQUFJLElBQUlkLEtBQUtjLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNELE1BQU1FLHNCQUN2Qyw4REFBQ0M7NEJBQUVULFdBQVU7c0NBQ2pCTTsyQkFEdUNFOzs7Ozs7Ozs7OzhCQUt0Qyw4REFBQ1Q7b0JBQUlDLFdBQVU7O3NDQUNwQiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2RSLFFBQVFBLEtBQUtrQixLQUFLLElBQUlsQixLQUFLa0IsS0FBSyxDQUFDSCxHQUFHLENBQUMsQ0FBQ0csT0FBT0Ysc0JBQzFDLDhEQUFDVDtvQ0FBb0JDLFdBQVU7O3NEQUM3Qiw4REFBQ0Q7NENBQUlDLFdBQVU7c0RBQ2IsNEVBQUNkLG1EQUFLQTtnREFDSnlCLEtBQUssNkRBQXlFLE9BQVpELE1BQU1FLEtBQUs7Z0RBQzdFQyxLQUFLSCxNQUFNSSxRQUFRO2dEQUNuQkMsUUFBTztnREFDUEMsV0FBVTs7Ozs7Ozs7Ozs7c0RBR2QsOERBQUNqQjs0Q0FBSUMsV0FBVTs7OERBQ2IsOERBQUNpQjtvREFBR2pCLFdBQVU7OERBQXNDVSxNQUFNUSxLQUFLOzs7Ozs7OERBQy9ELDhEQUFDVDtvREFBRVQsV0FBVyxtQkFBa0UsT0FBL0NQLGVBQWVpQixNQUFNUyxHQUFHLEdBQUcsaUJBQWlCOzhEQUMxRVQsTUFBTVUsSUFBSTs7Ozs7OzhEQUViLDhEQUFDQztvREFDQ3JCLFdBQVU7b0RBQ1ZzQixTQUFTLElBQU0zQixlQUFlZSxNQUFNUyxHQUFHOzhEQUV0QzFCLGVBQWVpQixNQUFNUyxHQUFHLEdBQUcsY0FBYzs7Ozs7Ozs7Ozs7OzttQ0FsQnRDVCxNQUFNUyxHQUFHOzs7Ozs7Ozs7O3NDQXdCakIsOERBQUNwQjtzQ0FDRFAsUUFBUUEsS0FBS0EsSUFBSSxJQUFJQSxLQUFLQSxJQUFJLENBQUNlLEdBQUcsQ0FBQyxDQUFDRyxPQUFPRixzQkFDM0MsOERBQUNUO29DQUFJQyxXQUFVOztzREFDZiw4REFBQ0Q7NENBQUlDLFdBQVU7c0RBQWNVLE1BQU1RLEtBQUs7Ozs7Ozt3Q0FDdkNSLE1BQU1VLElBQUk7c0RBQ2hCLDhEQUFDOUIsb0RBQVVBOzRDQUFDaUMsT0FBT2IsTUFBTVUsSUFBSTs0Q0FBRUksVUFBVTs0Q0FBTUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBTXZEakMsc0JBQVEsOERBQUNMLGdGQUFVQTtvQkFBQ3VDLE1BQU03Qix5QkFBeUJMOzs7Ozs7OEJBQy9DLDhEQUFDSCx3RUFBTUE7Ozs7Ozs7Ozs7OztBQUliO0dBNUVBRTtLQUFBQTtBQTZFQSwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL0Jsb2dzL0Jsb2dtYWluLnRzeD9lZDRhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IHVzZVN0YXRlLEZDIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBCbG9nU2xpZGVyIGZyb20gJ0AvQ29tcG9uZW50cy9CbG9ncy9CbG9nc3NsaWRlci9CbG9nU2xpZGVyJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICdAL0NvbXBvbmVudHMvTmF2YmFyL0hlYWRlci9IZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvQ29tcG9uZW50cy9OYXZiYXIvRm9vdGVyL0Zvb3Rlcic7XHJcbmltcG9ydCBSZWFjdFF1aWxsIGZyb20gJ3JlYWN0LXF1aWxsJztcclxuaW1wb3J0ICdyZWFjdC1xdWlsbC9kaXN0L3F1aWxsLnNub3cuY3NzJztcclxuaW50ZXJmYWNlIEJsb2cge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBvdmVyOiBzdHJpbmdbXTtcclxuICBtZXRhdGl0bGU6IHN0cmluZztcclxuICBtZXRhZGVzOiBzdHJpbmc7XHJcbiAgYmxvZ3M6IEJsb2dEZXRhaWxbXTtcclxuICBwcm9kdWN0czogUHJvZHVjdFtdO1xyXG59XHJcbmludGVyZmFjZSBQcm9kdWN0IHtcclxuICB0ZXN0aW1hZ2U6IHN0cmluZztcclxuICB0ZXN0aW1hZ2VhbHQ6IHN0cmluZztcclxuICBfaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgc3RhdGVuYW1lOiBzdHJpbmc7XHJcbiAgYW1vdW50OiBudW1iZXI7XHJcbiAgdXJsbGluazogc3RyaW5nO1xyXG4gIGJhZGdlPzogc3RyaW5nO1xyXG59XHJcbmludGVyZmFjZSBCbG9nRGV0YWlsIHtcclxuICBfaWQ6IHN0cmluZztcclxuICBpbWFnZTogc3RyaW5nO1xyXG4gIGltYWdlYWx0OiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBwYXJhOiBzdHJpbmc7XHJcbiAgc3RhdGVuYW1lOiBzdHJpbmc7IFxyXG4gIGFtb3VudDogbnVtYmVyOyAgIFxyXG4gIHVybGxpbms6IHN0cmluZzsgIFxyXG59XHJcbmludGVyZmFjZSBEYXRhUHJvcHMge1xyXG4gIHByb2R1Y3RzOiB7XHJcbiAgICBfaWQ6IHN0cmluZztcclxuICAgIHRlc3RpbWFnZTogc3RyaW5nO1xyXG4gICAgdGVzdGltYWdlYWx0OiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBzdGF0ZW5hbWU6IHN0cmluZztcclxuICAgIGFtb3VudDogbnVtYmVyO1xyXG4gICAgdXJsbGluazogc3RyaW5nO1xyXG4gICAgYmFkZ2U/OiBzdHJpbmc7XHJcbiAgfVtdO1xyXG59XHJcbmludGVyZmFjZSBCbG9nUHJvcHMge1xyXG4gIGJsb2c6IEJsb2c7XHJcbn1cclxuY29uc3QgXHJcbkJsb2dtYWluIDogRkMgPEJsb2dQcm9wcz4gPSAoeyBibG9nIH0pPT4ge1xyXG4gIGNvbnN0IFtleHBhbmRlZElkLCBzZXRFeHBhbmRlZElkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IHRvZ2dsZUV4cGFuZGVkID0gKGlkOiBzdHJpbmcpID0+IHtcclxuICAgIHNldEV4cGFuZGVkSWQoZXhwYW5kZWRJZCA9PT0gaWQgPyBudWxsIDogaWQpO1xyXG4gIH07XHJcbiAgY29uc3QgdHJhbnNmb3JtQmxvZ1RvRGF0YVByb3BzID0gKGJsb2c6IEJsb2cpOiBEYXRhUHJvcHMgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvZHVjdHM6IGJsb2cucHJvZHVjdHMgLy8gRGlyZWN0bHkgdXNlIHRoZSBwcm9kdWN0cyBhcnJheSBmcm9tIEJsb2dcclxuICAgIH07XHJcbiAgfTtcclxuICBpZiAoIWJsb2cpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1ibGFjayB3LWZ1bGwnPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ICBwdC0yMCBwbC01XCIgPlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy15ZWxsb3ctNTAwIHctMSBtZDpoLTE2IGgtMTIgbXQtOCBtZDptdC0wIG1kOm1yLTYgbXItNCBzZWxmLWNlbnRlclwiPjwvZGl2PiBcclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWQ6dGV4dC00eGwgIHRleHQtMnhsIHB0LTEwIHRleHQtd2hpdGVcIj57YmxvZy5uYW1lfTwvaDE+XHJcbiAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy01MDAgdGV4dC05eGwgIHJlbGF0aXZlIGhpZGRlbiBtZDpibG9jayBcIiBzdHlsZT17e3RvcDogJy0wLjJlbSd9fT4uPC9zcGFuPiBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTlcIj5cclxuICAgICAge2Jsb2cgJiYgYmxvZy5vdmVyICYmIGJsb2cub3Zlci5tYXAoKG92ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIFwiIGtleT17aW5kZXh9ICA+XHJcbiAgICAge292ZXJ9XHJcbiAgICAgPC9wPlxyXG4gICAgICApKX0gXHJcbiAgICA8L2Rpdj4gXHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIHB5LTggcGItMFwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbWQ6cHgtMTYgcHgtNCBncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIG1kOmdhcC01XCI+XHJcbiAge2Jsb2cgJiYgYmxvZy5ibG9ncyAmJiBibG9nLmJsb2dzLm1hcCgoYmxvZ3MsIGluZGV4KSA9PiAoXHJcbiAgICAgIDxkaXYga2V5PXtibG9ncy5faWR9IGNsYXNzTmFtZT1cIm1iLTYgc2hhZG93LWxnIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlciBib3JkZXItd2hpdGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtWzIwMHB4XVwiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vYnB1LWltYWdlcy12MS5zMy5ldS1ub3J0aC0xLmFtYXpvbmF3cy5jb20vdXBsb2Fkcy8ke2Jsb2dzLmltYWdlfWB9XHJcbiAgICAgICAgICAgIGFsdD17YmxvZ3MuaW1hZ2VhbHR9XHJcbiAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IGJnLWJsYWNrXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTMgdGV4dC13aGl0ZVwiPntibG9ncy50aXRsZX08L2gzPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSBtdC00ICR7ZXhwYW5kZWRJZCAhPT0gYmxvZ3MuX2lkID8gJ2xpbmUtY2xhbXAtMicgOiAnJ31gfT5cclxuICAgICAgICAgICAge2Jsb2dzLnBhcmF9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteWVsbG93LTQwMCBob3Zlcjp5ZWxsb3ctNDAwIHRyYW5zaXRpb24tY29sb3JzIG10LTRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVFeHBhbmRlZChibG9ncy5faWQpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZXhwYW5kZWRJZCA9PT0gYmxvZ3MuX2lkID8gJ1JlYWQgTGVzcycgOiAnUmVhZCBNb3JlJ31cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICB7YmxvZyAmJiBibG9nLmJsb2cgJiYgYmxvZy5ibG9nLm1hcCgoYmxvZ3MsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLXdoaXRlJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ibGFjayc+e2Jsb2dzLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgIHtibG9ncy5wYXJhfVxyXG4gICA8UmVhY3RRdWlsbCB2YWx1ZT17YmxvZ3MucGFyYX0gcmVhZE9ubHk9e3RydWV9IHRoZW1lPXtcInN1YmJsZVwifSAvPlxyXG4gICA8L2Rpdj5cclxuICAgICAgICkgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4ge2Jsb2cgJiYgPEJsb2dTbGlkZXIgZGF0YT17dHJhbnNmb3JtQmxvZ1RvRGF0YVByb3BzKGJsb2cpfSAvPn1cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj4gXHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dtYWluOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkltYWdlIiwiQmxvZ1NsaWRlciIsIkhlYWRlciIsIkZvb3RlciIsIlJlYWN0UXVpbGwiLCJCbG9nbWFpbiIsImJsb2ciLCJleHBhbmRlZElkIiwic2V0RXhwYW5kZWRJZCIsInRvZ2dsZUV4cGFuZGVkIiwiaWQiLCJ0cmFuc2Zvcm1CbG9nVG9EYXRhUHJvcHMiLCJwcm9kdWN0cyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibmFtZSIsInNwYW4iLCJzdHlsZSIsInRvcCIsIm92ZXIiLCJtYXAiLCJpbmRleCIsInAiLCJibG9ncyIsInNyYyIsImltYWdlIiwiYWx0IiwiaW1hZ2VhbHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJoMyIsInRpdGxlIiwiX2lkIiwicGFyYSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ2YWx1ZSIsInJlYWRPbmx5IiwidGhlbWUiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Blogs/Blogmain.tsx\n"));

/***/ })

});