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

/***/ "(app-pages-browser)/./app/blogs/[name]/page.tsx":
/*!***********************************!*\
  !*** ./app/blogs/[name]/page.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components_Blogs_Blogsslider_BlogSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Blogs/Blogsslider/BlogSlider */ \"(app-pages-browser)/./Components/Blogs/Blogsslider/BlogSlider.tsx\");\n/* harmony import */ var _Components_Navbar_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Navbar/Header/Header */ \"(app-pages-browser)/./Components/Navbar/Header/Header.tsx\");\n/* harmony import */ var _Components_Navbar_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/Navbar/Footer/Footer */ \"(app-pages-browser)/./Components/Navbar/Footer/Footer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst page = (param)=>{\n    let { params } = param;\n    _s();\n    // State to track which activity's description is expanded\n    const [expandedId, setExpandedId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [blog, setBlog] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const toggleExpanded = (id)=>{\n        setExpandedId(expandedId === id ? null : id);\n    };\n    const name = params.name;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const response = await fetch(\"\\n      https://launch-api1.vercel.app/blog/\".concat(name));\n            const data = await response.json();\n            console.log(\"ata\", data);\n            setBlog(data);\n        };\n        if (name) {\n            fetchData();\n        }\n    }, [\n        name\n    ]);\n    const transformBlogToDataProps = (blog)=>{\n        return {\n            products: blog.products // Directly use the products array from Blog\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-black w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar_Header_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\[name]\\\\page.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex  pt-20 pl-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-yellow-500 w-1 md:h-16 h-12 mt-8 md:mt-0 md:mr-6 mr-4 self-center\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\[name]\\\\page.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 8\n                        }, undefined),\n                        (blog === null || blog === void 0 ? void 0 : blog.name) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"md:text-4xl  text-2xl pt-10 text-white\",\n                            children: blog === null || blog === void 0 ? void 0 : blog.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\[name]\\\\page.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 23\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-yellow-500 text-9xl  relative hidden md:block \",\n                            style: {\n                                top: \"-0.2em\"\n                            },\n                            children: \".\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\[name]\\\\page.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 8\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\[name]\\\\page.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 6\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ml-9\",\n                    children: blog && blog.over && blog.over.map((over, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-300 \",\n                            children: over\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\[name]\\\\page.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\[name]\\\\page.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 8\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-black py-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container mx-auto mdpx-16 grid grid-cols-1 md:grid-cols-2 md:gap-5\",\n                        children: blog && blog.blogs && blog.blogs.map((blogs, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-6 shadow-lg rounded-lg overflow-hidden border border-white\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative h-[200px]\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: \"https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/\".concat(blogs.image),\n                                            alt: blogs.imagealt,\n                                            layout: \"fill\",\n                                            objectFit: \"cover\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\[name]\\\\page.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\[name]\\\\page.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-6 bg-black\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-2xl font-bold mb-3 text-white\",\n                                                children: blogs.title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\[name]\\\\page.tsx\",\n                                                lineNumber: 113,\n                                                columnNumber: 11\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-white mt-4 \".concat(expandedId !== blogs._id ? \"line-clamp-2\" : \"\"),\n                                                children: blogs.para\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\[name]\\\\page.tsx\",\n                                                lineNumber: 114,\n                                                columnNumber: 11\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"text-yellow-400 hover:yellow-400 transition-colors mt-4\",\n                                                onClick: ()=>toggleExpanded(blogs._id),\n                                                children: expandedId === blogs._id ? \"Read Less\" : \"Read More\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\[name]\\\\page.tsx\",\n                                                lineNumber: 117,\n                                                columnNumber: 11\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\[name]\\\\page.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, blogs._id, true, {\n                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\[name]\\\\page.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 7\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\[name]\\\\page.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 3\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\[name]\\\\page.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 8\n                }, undefined),\n                blog && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Blogs_Blogsslider_BlogSlider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    data: transformBlogToDataProps(blog)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\[name]\\\\page.tsx\",\n                    lineNumber: 129,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\[name]\\\\page.tsx\",\n                    lineNumber: 131,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\[name]\\\\page.tsx\",\n            lineNumber: 83,\n            columnNumber: 6\n        }, undefined)\n    }, void 0, false);\n};\n_s(page, \"bYN4CR9DXC7hN4jTetK02lgV818=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9ncy9bbmFtZV0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDOEM7QUFFZjtBQUNvQztBQUNaO0FBQ0E7QUE4Q3ZELE1BQU1NLE9BQXdCO1FBQUMsRUFBRUMsTUFBTSxFQUFFOztJQUN2QywwREFBMEQ7SUFDMUQsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFnQjtJQUM1RCxNQUFNLENBQUNVLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQWM7SUFFOUMsTUFBTVksaUJBQWlCLENBQUNDO1FBQ3RCSixjQUFjRCxlQUFlSyxLQUFLLE9BQU9BO0lBQzNDO0lBQ0EsTUFBTUMsT0FBT1AsT0FBT08sSUFBSTtJQUN4QmIsZ0RBQVNBLENBQUM7UUFDUixNQUFNYyxZQUFZO1lBQ2hCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSwrQ0FDYyxPQUFMSDtZQUN0QyxNQUFNSSxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENDLFFBQVFDLEdBQUcsQ0FBQyxPQUFNSDtZQUNsQlAsUUFBUU87UUFDVjtRQUVBLElBQUlKLE1BQU07WUFDUkM7UUFDRjtJQUNGLEdBQUc7UUFBQ0Q7S0FBSztJQUNULE1BQU1RLDJCQUEyQixDQUFDWjtRQUNoQyxPQUFPO1lBQ0xhLFVBQVViLEtBQUthLFFBQVEsQ0FBQyw0Q0FBNEM7UUFDdEU7SUFDRjtJQUVBLHFCQUNFO2tCQUNDLDRFQUFDQztZQUFJQyxXQUFVOzs4QkFDZCw4REFBQ3JCLHdFQUFNQTs7Ozs7OEJBQ1IsOERBQUNvQjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVOzs7Ozs7d0JBQ2RmLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTUksSUFBSSxtQkFBSSw4REFBQ1k7NEJBQUdELFdBQVU7c0NBQTBDZixpQkFBQUEsMkJBQUFBLEtBQU1JLElBQUk7Ozs7OztzQ0FDakYsOERBQUNhOzRCQUFLRixXQUFVOzRCQUFzREcsT0FBTztnQ0FBQ0MsS0FBSzs0QkFBUTtzQ0FBRzs7Ozs7Ozs7Ozs7OzhCQUU5Riw4REFBQ0w7b0JBQUlDLFdBQVU7OEJBQ2ZmLFFBQVFBLEtBQUtvQixJQUFJLElBQUlwQixLQUFLb0IsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0QsTUFBTUUsc0JBQ3ZDLDhEQUFDQzs0QkFBRVIsV0FBVTtzQ0FDakJLOzJCQUR1Q0U7Ozs7Ozs7Ozs7OEJBUXRDLDhEQUFDUjtvQkFBSUMsV0FBVTs4QkFDcEIsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNkZixRQUFRQSxLQUFLd0IsS0FBSyxJQUFJeEIsS0FBS3dCLEtBQUssQ0FBQ0gsR0FBRyxDQUFDLENBQUNHLE9BQU9GLHNCQUMxQyw4REFBQ1I7Z0NBQW9CQyxXQUFVOztrREFDN0IsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDdkIsbURBQUtBOzRDQUNKaUMsS0FBSyw2REFBeUUsT0FBWkQsTUFBTUUsS0FBSzs0Q0FDN0VDLEtBQUtILE1BQU1JLFFBQVE7NENBQ25CQyxRQUFPOzRDQUNQQyxXQUFVOzs7Ozs7Ozs7OztrREFHZCw4REFBQ2hCO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ2dCO2dEQUFHaEIsV0FBVTswREFBc0NTLE1BQU1RLEtBQUs7Ozs7OzswREFDL0QsOERBQUNUO2dEQUFFUixXQUFXLG1CQUFrRSxPQUEvQ2pCLGVBQWUwQixNQUFNUyxHQUFHLEdBQUcsaUJBQWlCOzBEQUMxRVQsTUFBTVUsSUFBSTs7Ozs7OzBEQUViLDhEQUFDQztnREFDQ3BCLFdBQVU7Z0RBQ1ZxQixTQUFTLElBQU1sQyxlQUFlc0IsTUFBTVMsR0FBRzswREFFdENuQyxlQUFlMEIsTUFBTVMsR0FBRyxHQUFHLGNBQWM7Ozs7Ozs7Ozs7Ozs7K0JBbEJ0Q1QsTUFBTVMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7O2dCQTBCdkJqQyxzQkFBUSw4REFBQ1AsZ0ZBQVVBO29CQUFDZSxNQUFNSSx5QkFBeUJaOzs7Ozs7OEJBRS9DLDhEQUFDTCx3RUFBTUE7Ozs7Ozs7Ozs7OztBQUliO0dBbEZNQztBQW1GTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYmxvZ3MvW25hbWVdL3BhZ2UudHN4PzkzYmEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IHVzZVN0YXRlLHVzZUVmZmVjdCxGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IEJsb2dTbGlkZXIgZnJvbSAnQC9Db21wb25lbnRzL0Jsb2dzL0Jsb2dzc2xpZGVyL0Jsb2dTbGlkZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICdAL0NvbXBvbmVudHMvTmF2YmFyL0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICdAL0NvbXBvbmVudHMvTmF2YmFyL0Zvb3Rlci9Gb290ZXInO1xuXG5pbnRlcmZhY2UgQmxvZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgb3Zlcjogc3RyaW5nW107XG4gIGJsb2dzOiBCbG9nRGV0YWlsW107XG4gIHByb2R1Y3RzOiBQcm9kdWN0W107XG59XG5pbnRlcmZhY2UgUHJvZHVjdCB7Ly8gQWRqdXN0IHRoZSB0eXBlIGFzIG5lZWRlZFxuICB0ZXN0aW1hZ2U6IHN0cmluZztcbiAgdGVzdGltYWdlYWx0OiBzdHJpbmc7XG4gIF9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHN0YXRlbmFtZTogc3RyaW5nO1xuICBhbW91bnQ6IG51bWJlcjtcbiAgdXJsbGluazogc3RyaW5nO1xuICBiYWRnZT86IHN0cmluZztcbiAgLy8gLi4uIG90aGVyIHByb3BlcnRpZXNcbn1cbmludGVyZmFjZSBCbG9nRGV0YWlsIHtcbiAgX2lkOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIGltYWdlYWx0OiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHBhcmE6IHN0cmluZztcbiAgc3RhdGVuYW1lOiBzdHJpbmc7IFxuICBhbW91bnQ6IG51bWJlcjsgICBcbiAgdXJsbGluazogc3RyaW5nOyAgXG59XG5pbnRlcmZhY2UgUGFnZVByb3BzIHtcbiAgcGFyYW1zOiB7XG4gICAgICBuYW1lOiBzdHJpbmc7XG4gIH1cbn1cbmludGVyZmFjZSBEYXRhUHJvcHMge1xuICBwcm9kdWN0czoge1xuICAgIF9pZDogc3RyaW5nO1xuICAgIHRlc3RpbWFnZTogc3RyaW5nO1xuICAgIHRlc3RpbWFnZWFsdDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBzdGF0ZW5hbWU6IHN0cmluZztcbiAgICBhbW91bnQ6IG51bWJlcjtcbiAgICB1cmxsaW5rOiBzdHJpbmc7XG4gICAgYmFkZ2U/OiBzdHJpbmc7XG4gIH1bXTtcbn1cbmNvbnN0IHBhZ2UgOiBGQyA8UGFnZVByb3BzPiA9ICh7IHBhcmFtcyB9KT0+IHtcbiAgLy8gU3RhdGUgdG8gdHJhY2sgd2hpY2ggYWN0aXZpdHkncyBkZXNjcmlwdGlvbiBpcyBleHBhbmRlZFxuICBjb25zdCBbZXhwYW5kZWRJZCwgc2V0RXhwYW5kZWRJZF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2Jsb2csIHNldEJsb2ddID0gdXNlU3RhdGU8QmxvZyB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IHRvZ2dsZUV4cGFuZGVkID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICBzZXRFeHBhbmRlZElkKGV4cGFuZGVkSWQgPT09IGlkID8gbnVsbCA6IGlkKTtcbiAgfTtcbiAgY29uc3QgbmFtZSA9IHBhcmFtcy5uYW1lXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgXG4gICAgICBodHRwczovL2xhdW5jaC1hcGkxLnZlcmNlbC5hcHAvYmxvZy8ke25hbWV9YCk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coXCJhdGFcIixkYXRhKVxuICAgICAgc2V0QmxvZyhkYXRhKTtcbiAgICB9O1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIGZldGNoRGF0YSgpO1xuICAgIH1cbiAgfSwgW25hbWVdKVxuICBjb25zdCB0cmFuc2Zvcm1CbG9nVG9EYXRhUHJvcHMgPSAoYmxvZzogQmxvZyk6IERhdGFQcm9wcyA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2R1Y3RzOiBibG9nLnByb2R1Y3RzIC8vIERpcmVjdGx5IHVzZSB0aGUgcHJvZHVjdHMgYXJyYXkgZnJvbSBCbG9nXG4gICAgfTtcbiAgfTtcbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWJsYWNrIHctZnVsbCc+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAgcHQtMjAgcGwtNVwiID5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXllbGxvdy01MDAgdy0xIG1kOmgtMTYgaC0xMiBtdC04IG1kOm10LTAgbWQ6bXItNiBtci00IHNlbGYtY2VudGVyXCI+PC9kaXY+IFxuICAgICAgIHtibG9nPy5uYW1lICYmIDxoMSBjbGFzc05hbWU9XCJtZDp0ZXh0LTR4bCAgdGV4dC0yeGwgcHQtMTAgdGV4dC13aGl0ZVwiPntibG9nPy5uYW1lfTwvaDE+fVxuICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteWVsbG93LTUwMCB0ZXh0LTl4bCAgcmVsYXRpdmUgaGlkZGVuIG1kOmJsb2NrIFwiIHN0eWxlPXt7dG9wOiAnLTAuMmVtJ319Pi48L3NwYW4+IFxuICAgICAgPC9kaXY+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC05XCI+XG4gICAgICB7YmxvZyAmJiBibG9nLm92ZXIgJiYgYmxvZy5vdmVyLm1hcCgob3ZlciwgaW5kZXgpID0+IChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIFwiIGtleT17aW5kZXh9ICA+XG4gICAgIHtvdmVyfVxuICAgICA8L3A+XG4gICAgICApKX0gXG4gICAgPC9kaXY+IFxuICBcbiAgICAgICB7LyogQWN0aXZpdHkgU2VjdGlvbiAqL31cbiAgICAgICB7LyogQWN0aXZpdHkgU2VjdGlvbiAqL31cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIHB5LThcIj5cbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBtZHB4LTE2IGdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbWQ6Z2FwLTVcIj5cbiAge2Jsb2cgJiYgYmxvZy5ibG9ncyAmJiBibG9nLmJsb2dzLm1hcCgoYmxvZ3MsIGluZGV4KSA9PiAoXG4gICAgICA8ZGl2IGtleT17YmxvZ3MuX2lkfSBjbGFzc05hbWU9XCJtYi02IHNoYWRvdy1sZyByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBib3JkZXIgYm9yZGVyLXdoaXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1bMjAwcHhdXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL2JwdS1pbWFnZXMtdjEuczMuZXUtbm9ydGgtMS5hbWF6b25hd3MuY29tL3VwbG9hZHMvJHtibG9ncy5pbWFnZX1gfVxuICAgICAgICAgICAgYWx0PXtibG9ncy5pbWFnZWFsdH1cbiAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBiZy1ibGFja1wiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItMyB0ZXh0LXdoaXRlXCI+e2Jsb2dzLnRpdGxlfTwvaDM+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSBtdC00ICR7ZXhwYW5kZWRJZCAhPT0gYmxvZ3MuX2lkID8gJ2xpbmUtY2xhbXAtMicgOiAnJ31gfT5cbiAgICAgICAgICAgIHtibG9ncy5wYXJhfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy00MDAgaG92ZXI6eWVsbG93LTQwMCB0cmFuc2l0aW9uLWNvbG9ycyBtdC00XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUV4cGFuZGVkKGJsb2dzLl9pZCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2V4cGFuZGVkSWQgPT09IGJsb2dzLl9pZCA/ICdSZWFkIExlc3MnIDogJ1JlYWQgTW9yZSd9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogQmxvZ1NsaWRlciBDb21wb25lbnQgKi99XG4ge2Jsb2cgJiYgPEJsb2dTbGlkZXIgZGF0YT17dHJhbnNmb3JtQmxvZ1RvRGF0YVByb3BzKGJsb2cpfSAvPn1cblxuICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+IFxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgcGFnZTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIkJsb2dTbGlkZXIiLCJIZWFkZXIiLCJGb290ZXIiLCJwYWdlIiwicGFyYW1zIiwiZXhwYW5kZWRJZCIsInNldEV4cGFuZGVkSWQiLCJibG9nIiwic2V0QmxvZyIsInRvZ2dsZUV4cGFuZGVkIiwiaWQiLCJuYW1lIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInRyYW5zZm9ybUJsb2dUb0RhdGFQcm9wcyIsInByb2R1Y3RzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwic3R5bGUiLCJ0b3AiLCJvdmVyIiwibWFwIiwiaW5kZXgiLCJwIiwiYmxvZ3MiLCJzcmMiLCJpbWFnZSIsImFsdCIsImltYWdlYWx0IiwibGF5b3V0Iiwib2JqZWN0Rml0IiwiaDMiLCJ0aXRsZSIsIl9pZCIsInBhcmEiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blogs/[name]/page.tsx\n"));

/***/ })

});