"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/tour/[name]/page",{

/***/ "(app-pages-browser)/./Components/Book/SharButton.tsx":
/*!****************************************!*\
  !*** ./Components/Book/SharButton.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! copy-to-clipboard */ \"(app-pages-browser)/./node_modules/copy-to-clipboard/index.js\");\n/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ShareButton = (param)=>{\n    let { url } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleMenu = ()=>{\n        setIsOpen(!isOpen);\n    };\n    const copyToClipboard = ()=>{\n        copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default()(url);\n        alert(\"Link copied to clipboard!\");\n        toggleMenu();\n    };\n    const getWhatsAppShareLink = ()=>{\n        return \"https://api.whatsapp.com/send?text=\".concat(encodeURIComponent(url));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed md:bottom-4 md:right-10 right-4 bottom-20 z-20 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleMenu,\n                className: \"text-yellow-500 font-bold  rounded-full bg-black p-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faShareNodes\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-2 p-4 bg-white rounded-lg shadow-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: copyToClipboard,\n                        className: \"block text-blue-500 hover:text-blue-700 font-semibold my-2\",\n                        children: \"Copy Link\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: getWhatsAppShareLink(),\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        className: \"block text-blue-500 hover:text-blue-700 font-semibold my-2\",\n                        children: \"Share on WhatsApp\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>alert(\"Instagram sharing not supported.\"),\n                        className: \"block text-blue-500 hover:text-blue-700 font-semibold my-2\",\n                        children: \"Share on Instagram\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: toggleMenu,\n                        className: \"absolute top-0 right-0 mt-2 mr-2 text-gray-400 hover:text-gray-600\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"\\xd7\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ShareButton, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = ShareButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShareButton);\nvar _c;\n$RefreshReg$(_c, \"ShareButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvQm9vay9TaGFyQnV0dG9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBQ0g7QUFDNEI7QUFDQTtBQUVqRSxNQUFNSyxjQUFjO1FBQUMsRUFBRUMsR0FBRyxFQUFFOztJQUMxQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUM7SUFFckMsTUFBTVEsYUFBYTtRQUNqQkQsVUFBVSxDQUFDRDtJQUNiO0lBRUEsTUFBTUcsa0JBQWtCO1FBQ3RCUix3REFBSUEsQ0FBQ0k7UUFDTEssTUFBTTtRQUNORjtJQUNGO0lBRUEsTUFBTUcsdUJBQXVCO1FBQzNCLE9BQU8sc0NBQThELE9BQXhCQyxtQkFBbUJQO0lBQ2xFO0lBRUEscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBT0MsU0FBU1I7Z0JBQVlNLFdBQVU7MEJBQ3ZDLDRFQUFDWiwyRUFBZUE7b0JBQUNlLE1BQU1kLDJFQUFZQTs7Ozs7Ozs7Ozs7WUFHbENHLHdCQUNDLDhEQUFDTztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFPQyxTQUFTUDt3QkFBaUJLLFdBQVU7a0NBQTZEOzs7Ozs7a0NBR3pHLDhEQUFDSTt3QkFBRUMsTUFBTVI7d0JBQXdCUyxRQUFPO3dCQUFTQyxLQUFJO3dCQUFzQlAsV0FBVTtrQ0FBNkQ7Ozs7OztrQ0FHbEosOERBQUNDO3dCQUFPQyxTQUFTLElBQU1OLE1BQU07d0JBQXFDSSxXQUFVO2tDQUE2RDs7Ozs7O2tDQUd6SSw4REFBQ0M7d0JBQU9DLFNBQVNSO3dCQUFZTSxXQUFVO2tDQUNyQyw0RUFBQ1E7c0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxCO0dBekNNbEI7S0FBQUE7QUEyQ04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Cb29rL1NoYXJCdXR0b24udHN4P2I0Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY29weSBmcm9tICdjb3B5LXRvLWNsaXBib2FyZCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhU2hhcmVOb2RlcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcblxyXG5jb25zdCBTaGFyZUJ1dHRvbiA9ICh7IHVybCB9KSA9PiB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcclxuICAgIHNldElzT3BlbighaXNPcGVuKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb3B5VG9DbGlwYm9hcmQgPSAoKSA9PiB7XHJcbiAgICBjb3B5KHVybCk7XHJcbiAgICBhbGVydCgnTGluayBjb3BpZWQgdG8gY2xpcGJvYXJkIScpO1xyXG4gICAgdG9nZ2xlTWVudSgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFdoYXRzQXBwU2hhcmVMaW5rID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGBodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD90ZXh0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHVybCl9YDtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBtZDpib3R0b20tNCBtZDpyaWdodC0xMCByaWdodC00IGJvdHRvbS0yMCB6LTIwIFwiPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9IGNsYXNzTmFtZT1cInRleHQteWVsbG93LTUwMCBmb250LWJvbGQgIHJvdW5kZWQtZnVsbCBiZy1ibGFjayBwLTNcIj5cclxuICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNoYXJlTm9kZXN9IC8+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAge2lzT3BlbiAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIHAtNCBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjb3B5VG9DbGlwYm9hcmR9IGNsYXNzTmFtZT1cImJsb2NrIHRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTcwMCBmb250LXNlbWlib2xkIG15LTJcIj5cclxuICAgICAgICAgICAgQ29weSBMaW5rXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxhIGhyZWY9e2dldFdoYXRzQXBwU2hhcmVMaW5rKCl9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWJsdWUtNTAwIGhvdmVyOnRleHQtYmx1ZS03MDAgZm9udC1zZW1pYm9sZCBteS0yXCI+XHJcbiAgICAgICAgICAgIFNoYXJlIG9uIFdoYXRzQXBwXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFsZXJ0KCdJbnN0YWdyYW0gc2hhcmluZyBub3Qgc3VwcG9ydGVkLicpfSBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWJsdWUtNTAwIGhvdmVyOnRleHQtYmx1ZS03MDAgZm9udC1zZW1pYm9sZCBteS0yXCI+XHJcbiAgICAgICAgICAgIFNoYXJlIG9uIEluc3RhZ3JhbVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgbXQtMiBtci0yIHRleHQtZ3JheS00MDAgaG92ZXI6dGV4dC1ncmF5LTYwMFwiPlxyXG4gICAgICAgICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hhcmVCdXR0b247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY29weSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhU2hhcmVOb2RlcyIsIlNoYXJlQnV0dG9uIiwidXJsIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlTWVudSIsImNvcHlUb0NsaXBib2FyZCIsImFsZXJ0IiwiZ2V0V2hhdHNBcHBTaGFyZUxpbmsiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiaWNvbiIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Book/SharButton.tsx\n"));

/***/ })

});