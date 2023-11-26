"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blogs/page",{

/***/ "(app-pages-browser)/./app/blogs/page.tsx":
/*!****************************!*\
  !*** ./app/blogs/page.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Components_Navbar_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/Navbar/Footer/Footer */ \"(app-pages-browser)/./Components/Navbar/Footer/Footer.tsx\");\n/* harmony import */ var _Components_Navbar_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Navbar/Header/Header */ \"(app-pages-browser)/./Components/Navbar/Header/Header.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [blogs, setBlogs] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const cardsPerPage = 8;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const response = await fetch(\"https://launch-api1.vercel.app/blog\");\n            const data = await response.json();\n            console.log(\"ata\", data);\n            setBlogs(data.data);\n        };\n        fetchData();\n    }, []);\n    const totalCards = blogs.length;\n    const totalPages = Math.ceil(totalCards / cardsPerPage);\n    const startIndex = (currentPage - 1) * cardsPerPage;\n    const endIndex = currentPage * cardsPerPage;\n    const currentCards = blogs.slice(startIndex, endIndex);\n    const goToPage = (pageNumber)=>{\n        if (pageNumber >= 1 && pageNumber <= totalPages) {\n            setCurrentPage(pageNumber);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-black text-white min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar_Header_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\page.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"p-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-7xl mx-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center pt-8 mb-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-yellow-500 w-1 md:h-16  mr-8\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\page.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"md:text-7xl font-bold\",\n                                    children: \"Blogs\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\page.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-yellow-500 text-9xl md:block hidden\",\n                                    style: {\n                                        top: \"-0.2em\"\n                                    },\n                                    children: \".\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\page.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\page.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8\",\n                            children: Array.isArray(currentCards) && currentCards.map((blog, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    href: \"/blogs/\".concat(blog.urllink),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-gray-800 rounded-lg overflow-hidden h-[300px] shadow-lg\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"w-full h-48 relative\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                        src: \"https://bpu-images-v1.s3.eu-north-1.amazonaws.com/uploads/\".concat(blog.blogs[0].image),\n                                                        alt: blog.blogs[0].imagealt,\n                                                        layout: \"fill\",\n                                                        objectFit: \"cover\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\page.tsx\",\n                                                        lineNumber: 71,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\page.tsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 17\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"p-4\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                        className: \"font-bold text-lg mb-2\",\n                                                        children: blog.name\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\page.tsx\",\n                                                        lineNumber: 75,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\page.tsx\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\page.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, index, false, {\n                                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\page.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\page.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\page.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center space-x-4\",\n                            children: [\n                                ...Array(totalPages)\n                            ].map((_, pageNumber)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-4 py-2 border \".concat(currentPage === pageNumber + 1 ? \"bg-yellow-500 text-white\" : \"bg-gray-700 text-yellow-500\"),\n                                    onClick: ()=>goToPage(pageNumber + 1),\n                                    children: pageNumber + 1\n                                }, pageNumber + 1, false, {\n                                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\page.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\page.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\page.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\page.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Navbar_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\page.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\app\\\\blogs\\\\page.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"y9lkzO0Pi83mFN2z3i9CT+IsBCQ=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ibG9ncy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFdUQ7QUFDQTtBQUNaO0FBQ1o7QUFDRjtBQW9CN0IsTUFBTU0sT0FBTzs7SUFDWCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQWEsRUFBRTtJQUNqRCxNQUFNLENBQUNPLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUM7SUFDL0MsTUFBTVMsZUFBZTtJQUNyQlIsZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxZQUFZO1lBQ2hCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENDLFFBQVFDLEdBQUcsQ0FBQyxPQUFNSDtZQUNsQlAsU0FBU08sS0FBS0EsSUFBSTtRQUNwQjtRQUVFSDtJQUVKLEdBQUcsRUFBRTtJQUNMLE1BQU1PLGFBQWFaLE1BQU1hLE1BQU07SUFDL0IsTUFBTUMsYUFBYUMsS0FBS0MsSUFBSSxDQUFDSixhQUFhUjtJQUUxQyxNQUFNYSxhQUFhLENBQUNmLGNBQWMsS0FBS0U7SUFDdkMsTUFBTWMsV0FBV2hCLGNBQWNFO0lBQy9CLE1BQU1lLGVBQWVuQixNQUFNb0IsS0FBSyxDQUFDSCxZQUFZQztJQUU3QyxNQUFNRyxXQUFXLENBQUNDO1FBQ2hCLElBQUlBLGNBQWMsS0FBS0EsY0FBY1IsWUFBWTtZQUMvQ1gsZUFBZW1CO1FBQ2pCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUM5Qix3RUFBTUE7Ozs7OzBCQUNQLDhEQUFDK0I7Z0JBQUtELFdBQVU7MEJBQ2QsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSUMsV0FBVTs7Ozs7OzhDQUNmLDhEQUFDRTtvQ0FBR0YsV0FBVTs4Q0FBd0I7Ozs7Ozs4Q0FDdEMsOERBQUNHO29DQUFLSCxXQUFVO29DQUEyQ0ksT0FBTzt3Q0FBRUMsS0FBSztvQ0FBUzs4Q0FBRzs7Ozs7Ozs7Ozs7O3NDQUV2Riw4REFBQ047NEJBQUlDLFdBQVU7c0NBQ1pNLE1BQU1DLE9BQU8sQ0FBQ1osaUJBQWtCQSxhQUFhYSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ3ZELDhEQUFDcEMsa0RBQUlBO29DQUFDcUMsTUFBTSxVQUF1QixPQUFiRixLQUFLRyxPQUFPOzhDQUNsQyw0RUFBQ2I7d0NBQWdCQyxXQUFVO2tEQUNyQiw0RUFBQ0Q7OzhEQUNMLDhEQUFDQTtvREFBSUMsV0FBVTs4REFDYiw0RUFBQzNCLG1EQUFLQTt3REFBRXdDLEtBQUssNkRBQWlGLE9BQXBCSixLQUFLakMsS0FBSyxDQUFDLEVBQUUsQ0FBQ3NDLEtBQUs7d0RBQUlDLEtBQU1OLEtBQUtqQyxLQUFLLENBQUMsRUFBRSxDQUFDd0MsUUFBUTt3REFBUUMsUUFBTzt3REFDdEpDLFdBQVU7Ozs7Ozs7Ozs7OzhEQUVGLDhEQUFDbkI7b0RBQUlDLFdBQVU7OERBQ2IsNEVBQUNtQjt3REFBR25CLFdBQVU7a0VBQTBCUyxLQUFLVyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FQM0NWOzs7Ozs7Ozs7Ozs7Ozs7c0NBY2QsOERBQUNYOzRCQUFJQyxXQUFVO3NDQUNaO21DQUFJTSxNQUFNaEI7NkJBQVksQ0FBQ2tCLEdBQUcsQ0FBQyxDQUFDYSxHQUFHdkIsMkJBQzlCLDhEQUFDd0I7b0NBRUN0QixXQUFXLG9CQUVWLE9BREN0QixnQkFBZ0JvQixhQUFhLElBQUksNkJBQTZCO29DQUVoRXlCLFNBQVMsSUFBTTFCLFNBQVNDLGFBQWE7OENBRXBDQSxhQUFhO21DQU5UQSxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBWTVCLDhEQUFDN0Isd0VBQU1BOzs7Ozs7Ozs7OztBQUdiO0dBekVNTTtLQUFBQTtBQTBFTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYmxvZ3MvcGFnZS50c3g/NDliNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBGb290ZXIgZnJvbSAnQC9Db21wb25lbnRzL05hdmJhci9Gb290ZXIvRm9vdGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnQC9Db21wb25lbnRzL05hdmJhci9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbi8vIFBsYWNlaG9sZGVyIGRhdGEgZm9yIHBhZ2UgMlxuaW50ZXJmYWNlIEJsb2dEZXRhaWwge1xuICBfaWQ6IHN0cmluZzsgICAgIFxuICBpbWFnZTogc3RyaW5nOyAgIFxuICBpbWFnZWFsdDogc3RyaW5nOyBcbiAgdGl0bGU6IHN0cmluZzsgICBcbiAgcGFyYTogc3RyaW5nOyAgIFxufVxuXG5pbnRlcmZhY2UgQmxvZ0l0ZW0ge1xuICBfaWQ6IHN0cmluZzsgICAgICBcbiAgbmFtZTogc3RyaW5nOyAgICAgIFxuICB1cmxsaW5rOiBzdHJpbmc7ICAgXG4gIG92ZXI6IHN0cmluZ1tdOyAgICBcbiAgYmxvZ3M6IEJsb2dEZXRhaWxbXTsgXG4gIGNyZWF0ZWRBdD86IERhdGU7ICBcbiAgYXV0aG9yPzogc3RyaW5nOyAgIFxufVxuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2Jsb2dzLCBzZXRCbG9nc10gPSB1c2VTdGF0ZTxCbG9nSXRlbVtdPihbXSk7XG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IGNhcmRzUGVyUGFnZSA9IDg7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9sYXVuY2gtYXBpMS52ZXJjZWwuYXBwL2Jsb2cnKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyhcImF0YVwiLGRhdGEpXG4gICAgICBzZXRCbG9ncyhkYXRhLmRhdGEpO1xuICAgIH07XG5cbiAgICAgIGZldGNoRGF0YSgpO1xuICAgIFxuICB9LCBbXSlcbiAgY29uc3QgdG90YWxDYXJkcyA9IGJsb2dzLmxlbmd0aDtcbiAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbENhcmRzIC8gY2FyZHNQZXJQYWdlKTtcbiAgXG4gIGNvbnN0IHN0YXJ0SW5kZXggPSAoY3VycmVudFBhZ2UgLSAxKSAqIGNhcmRzUGVyUGFnZTtcbiAgY29uc3QgZW5kSW5kZXggPSBjdXJyZW50UGFnZSAqIGNhcmRzUGVyUGFnZTtcbiAgY29uc3QgY3VycmVudENhcmRzID0gYmxvZ3Muc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xuXG4gIGNvbnN0IGdvVG9QYWdlID0gKHBhZ2VOdW1iZXI6bnVtYmVyKSA9PiB7XG4gICAgaWYgKHBhZ2VOdW1iZXIgPj0gMSAmJiBwYWdlTnVtYmVyIDw9IHRvdGFsUGFnZXMpIHtcbiAgICAgIHNldEN1cnJlbnRQYWdlKHBhZ2VOdW1iZXIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmxhY2sgdGV4dC13aGl0ZSBtaW4taC1zY3JlZW5cIj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInAtNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwdC04IG1iLThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmcteWVsbG93LTUwMCB3LTEgbWQ6aC0xNiAgbXItOFwiPjwvZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1kOnRleHQtN3hsIGZvbnQtYm9sZFwiPkJsb2dzPC9oMT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteWVsbG93LTUwMCB0ZXh0LTl4bCBtZDpibG9jayBoaWRkZW5cIiBzdHlsZT17eyB0b3A6ICctMC4yZW0nIH19Pi48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IGdhcC00IG1iLThcIj5cbiAgICAgICAgICAgIHtBcnJheS5pc0FycmF5KGN1cnJlbnRDYXJkcykgJiYgIGN1cnJlbnRDYXJkcy5tYXAoKGJsb2csIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZ3MvJHtibG9nLnVybGxpbmt9YH0gPlxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJnLWdyYXktODAwIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIGgtWzMwMHB4XSBzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTQ4IHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2UgIHNyYz17YGh0dHBzOi8vYnB1LWltYWdlcy12MS5zMy5ldS1ub3J0aC0xLmFtYXpvbmF3cy5jb20vdXBsb2Fkcy8ke2Jsb2cuYmxvZ3NbMF0uaW1hZ2V9YH0gYWx0PXsgYmxvZy5ibG9nc1swXS5pbWFnZWFsdCB9ICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCIvPlxuPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1sZyBtYi0yXCI+e2Jsb2cubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAge1suLi5BcnJheSh0b3RhbFBhZ2VzKV0ubWFwKChfLCBwYWdlTnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBrZXk9e3BhZ2VOdW1iZXIgKyAxfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgcHktMiBib3JkZXIgJHtcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlID09PSBwYWdlTnVtYmVyICsgMSA/ICdiZy15ZWxsb3ctNTAwIHRleHQtd2hpdGUnIDogJ2JnLWdyYXktNzAwIHRleHQteWVsbG93LTUwMCdcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnb1RvUGFnZShwYWdlTnVtYmVyICsgMSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cGFnZU51bWJlciArIDF9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgUGFnZTsiXSwibmFtZXMiOlsiRm9vdGVyIiwiSGVhZGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIkxpbmsiLCJQYWdlIiwiYmxvZ3MiLCJzZXRCbG9ncyIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJjYXJkc1BlclBhZ2UiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwidG90YWxDYXJkcyIsImxlbmd0aCIsInRvdGFsUGFnZXMiLCJNYXRoIiwiY2VpbCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsImN1cnJlbnRDYXJkcyIsInNsaWNlIiwiZ29Ub1BhZ2UiLCJwYWdlTnVtYmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsImgxIiwic3BhbiIsInN0eWxlIiwidG9wIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiYmxvZyIsImluZGV4IiwiaHJlZiIsInVybGxpbmsiLCJzcmMiLCJpbWFnZSIsImFsdCIsImltYWdlYWx0IiwibGF5b3V0Iiwib2JqZWN0Rml0IiwiaDIiLCJuYW1lIiwiXyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/blogs/page.tsx\n"));

/***/ })

});