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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components_Blogs_Blogsslider_BlogSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Blogs/Blogsslider/BlogSlider */ \"(app-pages-browser)/./Components/Blogs/Blogsslider/BlogSlider.tsx\");\n/* harmony import */ var _Components_Navbar_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Navbar/Header/Header */ \"(app-pages-browser)/./Components/Navbar/Header/Header.tsx\");\n/* harmony import */ var _Components_Navbar_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/Navbar/Footer/Footer */ \"(app-pages-browser)/./Components/Navbar/Footer/Footer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Blogmain = (param)=>{\n    let { name } = param;\n    _s();\n    // State to track which activity's description is expanded\n    const [expandedId, setExpandedId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [blog, setBlog] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const toggleExpanded = (id)=>{\n        setExpandedId(expandedId === id ? null : id);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const response = await fetch(\"\\n      https://launch-api1.vercel.app/blog/\".concat(name));\n            const data = await response.json();\n            console.log(\"ata\", data);\n            setBlog(data);\n        };\n        if (name) {\n            fetchData();\n        }\n    }, [\n        name\n    ]);\n    const transformBlogToDataProps = (blog)=>{\n        return {\n            products: blog.products // Directly use the products array from Blog\n        };\n    };\n    if (!blog) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n            lineNumber: 81,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-black w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar_Header_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex  pt-20 pl-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-yellow-500 w-1 md:h-16 h-12 mt-8 md:mt-0 md:mr-6 mr-4 self-center\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 8\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"md:text-4xl  text-2xl pt-10 text-white\",\n                            children: blog.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-yellow-500 text-9xl  relative hidden md:block \",\n                            style: {\n                                top: \"-0.2em\"\n                            },\n                            children: \".\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 8\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 6\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"ml-9\",\n                    children: blog && blog.over && blog.over.map((over, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-300 \",\n                            children: over\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 8\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-black py-8 pb-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container mx-auto md:px-16 px-4 grid grid-cols-1 md:grid-cols-2 md:gap-5\",\n                        children: blog && blog.blogs && blog.blogs.map((blogs, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-6 shadow-lg rounded-lg overflow-hidden border border-white\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative h-[200px]\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: \"https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/\".concat(blogs.image),\n                                            alt: blogs.imagealt,\n                                            layout: \"fill\",\n                                            objectFit: \"cover\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                            lineNumber: 110,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 9\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-6 bg-black\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-2xl font-bold mb-3 text-white\",\n                                                children: blogs.title\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                                lineNumber: 118,\n                                                columnNumber: 11\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-white mt-4 \".concat(expandedId !== blogs._id ? \"line-clamp-2\" : \"\"),\n                                                children: blogs.para\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                                lineNumber: 119,\n                                                columnNumber: 11\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"text-yellow-400 hover:yellow-400 transition-colors mt-4\",\n                                                onClick: ()=>toggleExpanded(blogs._id),\n                                                children: expandedId === blogs._id ? \"Read Less\" : \"Read More\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                                lineNumber: 122,\n                                                columnNumber: 11\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, blogs._id, true, {\n                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 7\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 3\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 8\n                }, undefined),\n                blog && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Blogs_Blogsslider_BlogSlider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    data: transformBlogToDataProps(blog)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                    lineNumber: 134,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n                    lineNumber: 136,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Blogs\\\\Blogmain.tsx\",\n            lineNumber: 88,\n            columnNumber: 6\n        }, undefined)\n    }, void 0, false);\n};\n_s(Blogmain, \"bYN4CR9DXC7hN4jTetK02lgV818=\");\n_c = Blogmain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blogmain);\nvar _c;\n$RefreshReg$(_c, \"Blogmain\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvQmxvZ3MvQmxvZ21haW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzhDO0FBQ2Y7QUFDb0M7QUFDWjtBQUNBO0FBOEN2RCxNQUFNTSxXQUE0QjtRQUFDLEVBQUVDLElBQUksRUFBRTs7SUFDekMsMERBQTBEO0lBQzFELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBZ0I7SUFDNUQsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFjO0lBRTlDLE1BQU1ZLGlCQUFpQixDQUFDQztRQUN0QkosY0FBY0QsZUFBZUssS0FBSyxPQUFPQTtJQUMzQztJQUVBWixnREFBU0EsQ0FBQztRQUNSLE1BQU1hLFlBQVk7WUFDaEIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLCtDQUNjLE9BQUxUO1lBQ3RDLE1BQU1VLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ0MsUUFBUUMsR0FBRyxDQUFDLE9BQU1IO1lBQ2xCTixRQUFRTTtRQUNWO1FBRUEsSUFBSVYsTUFBTTtZQUNSTztRQUNGO0lBQ0YsR0FBRztRQUFDUDtLQUFLO0lBQ1QsTUFBTWMsMkJBQTJCLENBQUNYO1FBQ2hDLE9BQU87WUFDTFksVUFBVVosS0FBS1ksUUFBUSxDQUFDLDRDQUE0QztRQUN0RTtJQUNGO0lBQ0EsSUFBSSxDQUFDWixNQUFNO1FBQ1QscUJBQ0UsOERBQUNhO3NCQUNDLDRFQUFDQTswQkFBSTs7Ozs7Ozs7Ozs7SUFHYjtJQUNFLHFCQUNFO2tCQUNDLDRFQUFDQTtZQUFJQyxXQUFVOzs4QkFDZCw4REFBQ3BCLHdFQUFNQTs7Ozs7OEJBQ1IsOERBQUNtQjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVOzs7Ozs7c0NBQ2QsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUEwQ2QsS0FBS0gsSUFBSTs7Ozs7O3NDQUNsRSw4REFBQ21COzRCQUFLRixXQUFVOzRCQUFzREcsT0FBTztnQ0FBQ0MsS0FBSzs0QkFBUTtzQ0FBRzs7Ozs7Ozs7Ozs7OzhCQUU5Riw4REFBQ0w7b0JBQUlDLFdBQVU7OEJBQ2ZkLFFBQVFBLEtBQUttQixJQUFJLElBQUluQixLQUFLbUIsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0QsTUFBTUUsc0JBQ3ZDLDhEQUFDQzs0QkFBRVIsV0FBVTtzQ0FDakJLOzJCQUR1Q0U7Ozs7Ozs7Ozs7OEJBUXRDLDhEQUFDUjtvQkFBSUMsV0FBVTs4QkFDcEIsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNkZCxRQUFRQSxLQUFLdUIsS0FBSyxJQUFJdkIsS0FBS3VCLEtBQUssQ0FBQ0gsR0FBRyxDQUFDLENBQUNHLE9BQU9GLHNCQUMxQyw4REFBQ1I7Z0NBQW9CQyxXQUFVOztrREFDN0IsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDdEIsbURBQUtBOzRDQUNKZ0MsS0FBSyw2REFBeUUsT0FBWkQsTUFBTUUsS0FBSzs0Q0FDN0VDLEtBQUtILE1BQU1JLFFBQVE7NENBQ25CQyxRQUFPOzRDQUNQQyxXQUFVOzs7Ozs7Ozs7OztrREFHZCw4REFBQ2hCO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ2dCO2dEQUFHaEIsV0FBVTswREFBc0NTLE1BQU1RLEtBQUs7Ozs7OzswREFDL0QsOERBQUNUO2dEQUFFUixXQUFXLG1CQUFrRSxPQUEvQ2hCLGVBQWV5QixNQUFNUyxHQUFHLEdBQUcsaUJBQWlCOzBEQUMxRVQsTUFBTVUsSUFBSTs7Ozs7OzBEQUViLDhEQUFDQztnREFDQ3BCLFdBQVU7Z0RBQ1ZxQixTQUFTLElBQU1qQyxlQUFlcUIsTUFBTVMsR0FBRzswREFFdENsQyxlQUFleUIsTUFBTVMsR0FBRyxHQUFHLGNBQWM7Ozs7Ozs7Ozs7Ozs7K0JBbEJ0Q1QsTUFBTVMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7O2dCQTBCdkJoQyxzQkFBUSw4REFBQ1AsZ0ZBQVVBO29CQUFDYyxNQUFNSSx5QkFBeUJYOzs7Ozs7OEJBRS9DLDhEQUFDTCx3RUFBTUE7Ozs7Ozs7Ozs7OztBQUliO0dBeEZNQztLQUFBQTtBQXlGTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL0Jsb2dzL0Jsb2dtYWluLnRzeD9lZDRhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IHVzZVN0YXRlLHVzZUVmZmVjdCxGQyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgQmxvZ1NsaWRlciBmcm9tICdAL0NvbXBvbmVudHMvQmxvZ3MvQmxvZ3NzbGlkZXIvQmxvZ1NsaWRlcic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnQC9Db21wb25lbnRzL05hdmJhci9IZWFkZXIvSGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICdAL0NvbXBvbmVudHMvTmF2YmFyL0Zvb3Rlci9Gb290ZXInO1xyXG5cclxuaW50ZXJmYWNlIEJsb2cge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBvdmVyOiBzdHJpbmdbXTtcclxuICBtZXRhdGl0bGU6IHN0cmluZztcclxuICBtZXRhZGVzOiBzdHJpbmc7XHJcbiAgYmxvZ3M6IEJsb2dEZXRhaWxbXTtcclxuICBwcm9kdWN0czogUHJvZHVjdFtdO1xyXG59XHJcbmludGVyZmFjZSBQcm9kdWN0IHsvLyBBZGp1c3QgdGhlIHR5cGUgYXMgbmVlZGVkXHJcbiAgdGVzdGltYWdlOiBzdHJpbmc7XHJcbiAgdGVzdGltYWdlYWx0OiBzdHJpbmc7XHJcbiAgX2lkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHN0YXRlbmFtZTogc3RyaW5nO1xyXG4gIGFtb3VudDogbnVtYmVyO1xyXG4gIHVybGxpbms6IHN0cmluZztcclxuICBiYWRnZT86IHN0cmluZztcclxuICAvLyAuLi4gb3RoZXIgcHJvcGVydGllc1xyXG59XHJcbmludGVyZmFjZSBCbG9nRGV0YWlsIHtcclxuICBfaWQ6IHN0cmluZztcclxuICBpbWFnZTogc3RyaW5nO1xyXG4gIGltYWdlYWx0OiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBwYXJhOiBzdHJpbmc7XHJcbiAgc3RhdGVuYW1lOiBzdHJpbmc7IFxyXG4gIGFtb3VudDogbnVtYmVyOyAgIFxyXG4gIHVybGxpbms6IHN0cmluZzsgIFxyXG59XHJcbmludGVyZmFjZSBQYWdlUHJvcHMge1xyXG4gICAgICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuaW50ZXJmYWNlIERhdGFQcm9wcyB7XHJcbiAgcHJvZHVjdHM6IHtcclxuICAgIF9pZDogc3RyaW5nO1xyXG4gICAgdGVzdGltYWdlOiBzdHJpbmc7XHJcbiAgICB0ZXN0aW1hZ2VhbHQ6IHN0cmluZztcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHN0YXRlbmFtZTogc3RyaW5nO1xyXG4gICAgYW1vdW50OiBudW1iZXI7XHJcbiAgICB1cmxsaW5rOiBzdHJpbmc7XHJcbiAgICBiYWRnZT86IHN0cmluZztcclxuICB9W107XHJcbn1cclxuY29uc3QgQmxvZ21haW4gOiBGQyA8UGFnZVByb3BzPiA9ICh7IG5hbWUgfSk9PiB7XHJcbiAgLy8gU3RhdGUgdG8gdHJhY2sgd2hpY2ggYWN0aXZpdHkncyBkZXNjcmlwdGlvbiBpcyBleHBhbmRlZFxyXG4gIGNvbnN0IFtleHBhbmRlZElkLCBzZXRFeHBhbmRlZElkXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtibG9nLCBzZXRCbG9nXSA9IHVzZVN0YXRlPEJsb2cgfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlRXhwYW5kZWQgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgc2V0RXhwYW5kZWRJZChleHBhbmRlZElkID09PSBpZCA/IG51bGwgOiBpZCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgXHJcbiAgICAgIGh0dHBzOi8vbGF1bmNoLWFwaTEudmVyY2VsLmFwcC9ibG9nLyR7bmFtZX1gKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coXCJhdGFcIixkYXRhKVxyXG4gICAgICBzZXRCbG9nKGRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAobmFtZSkge1xyXG4gICAgICBmZXRjaERhdGEoKTtcclxuICAgIH1cclxuICB9LCBbbmFtZV0pXHJcbiAgY29uc3QgdHJhbnNmb3JtQmxvZ1RvRGF0YVByb3BzID0gKGJsb2c6IEJsb2cpOiBEYXRhUHJvcHMgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvZHVjdHM6IGJsb2cucHJvZHVjdHMgLy8gRGlyZWN0bHkgdXNlIHRoZSBwcm9kdWN0cyBhcnJheSBmcm9tIEJsb2dcclxuICAgIH07XHJcbiAgfTtcclxuICBpZiAoIWJsb2cpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1ibGFjayB3LWZ1bGwnPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ICBwdC0yMCBwbC01XCIgPlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy15ZWxsb3ctNTAwIHctMSBtZDpoLTE2IGgtMTIgbXQtOCBtZDptdC0wIG1kOm1yLTYgbXItNCBzZWxmLWNlbnRlclwiPjwvZGl2PiBcclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWQ6dGV4dC00eGwgIHRleHQtMnhsIHB0LTEwIHRleHQtd2hpdGVcIj57YmxvZy5uYW1lfTwvaDE+XHJcbiAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy01MDAgdGV4dC05eGwgIHJlbGF0aXZlIGhpZGRlbiBtZDpibG9jayBcIiBzdHlsZT17e3RvcDogJy0wLjJlbSd9fT4uPC9zcGFuPiBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTlcIj5cclxuICAgICAge2Jsb2cgJiYgYmxvZy5vdmVyICYmIGJsb2cub3Zlci5tYXAoKG92ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIFwiIGtleT17aW5kZXh9ICA+XHJcbiAgICAge292ZXJ9XHJcbiAgICAgPC9wPlxyXG4gICAgICApKX0gXHJcbiAgICA8L2Rpdj4gXHJcbiAgXHJcbiAgICAgICB7LyogQWN0aXZpdHkgU2VjdGlvbiAqL31cclxuICAgICAgIHsvKiBBY3Rpdml0eSBTZWN0aW9uICovfVxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayBweS04IHBiLTBcIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG1kOnB4LTE2IHB4LTQgZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBtZDpnYXAtNVwiPlxyXG4gIHtibG9nICYmIGJsb2cuYmxvZ3MgJiYgYmxvZy5ibG9ncy5tYXAoKGJsb2dzLCBpbmRleCkgPT4gKFxyXG4gICAgICA8ZGl2IGtleT17YmxvZ3MuX2lkfSBjbGFzc05hbWU9XCJtYi02IHNoYWRvdy1sZyByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBib3JkZXIgYm9yZGVyLXdoaXRlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLVsyMDBweF1cIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL2JwdS1pbWFnZXMtdjEuczMuZXUtbm9ydGgtMS5hbWF6b25hd3MuY29tL3VwbG9hZHMvJHtibG9ncy5pbWFnZX1gfVxyXG4gICAgICAgICAgICBhbHQ9e2Jsb2dzLmltYWdlYWx0fVxyXG4gICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBiZy1ibGFja1wiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi0zIHRleHQtd2hpdGVcIj57YmxvZ3MudGl0bGV9PC9oMz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17YHRleHQtd2hpdGUgbXQtNCAke2V4cGFuZGVkSWQgIT09IGJsb2dzLl9pZCA/ICdsaW5lLWNsYW1wLTInIDogJyd9YH0+XHJcbiAgICAgICAgICAgIHtibG9ncy5wYXJhfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy00MDAgaG92ZXI6eWVsbG93LTQwMCB0cmFuc2l0aW9uLWNvbG9ycyBtdC00XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRXhwYW5kZWQoYmxvZ3MuX2lkKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2V4cGFuZGVkSWQgPT09IGJsb2dzLl9pZCA/ICdSZWFkIExlc3MnIDogJ1JlYWQgTW9yZSd9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBCbG9nU2xpZGVyIENvbXBvbmVudCAqL31cclxuIHtibG9nICYmIDxCbG9nU2xpZGVyIGRhdGE9e3RyYW5zZm9ybUJsb2dUb0RhdGFQcm9wcyhibG9nKX0gLz59XHJcblxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PiBcclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ21haW47Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJCbG9nU2xpZGVyIiwiSGVhZGVyIiwiRm9vdGVyIiwiQmxvZ21haW4iLCJuYW1lIiwiZXhwYW5kZWRJZCIsInNldEV4cGFuZGVkSWQiLCJibG9nIiwic2V0QmxvZyIsInRvZ2dsZUV4cGFuZGVkIiwiaWQiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwidHJhbnNmb3JtQmxvZ1RvRGF0YVByb3BzIiwicHJvZHVjdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNwYW4iLCJzdHlsZSIsInRvcCIsIm92ZXIiLCJtYXAiLCJpbmRleCIsInAiLCJibG9ncyIsInNyYyIsImltYWdlIiwiYWx0IiwiaW1hZ2VhbHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJoMyIsInRpdGxlIiwiX2lkIiwicGFyYSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Blogs/Blogmain.tsx\n"));

/***/ })

});