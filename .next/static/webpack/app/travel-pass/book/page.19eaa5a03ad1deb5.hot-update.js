"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/travel-pass/book/page",{

/***/ "(app-pages-browser)/./Components/Member/Accordian/Accordianitem.tsx":
/*!*******************************************************!*\
  !*** ./Components/Member/Accordian/Accordianitem.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst AccordionItem = (param)=>{\n    let { title, points } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleAccordion = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-4 text\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center bg-gray-300 p-2 cursor-pointer\",\n                onClick: toggleAccordion,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-lg font-semibold\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Member\\\\Accordian\\\\Accordianitem.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: isOpen ? \"▲\" : \"▼\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Member\\\\Accordian\\\\Accordianitem.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Member\\\\Accordian\\\\Accordianitem.tsx\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gray-100 p-2\",\n                children: points && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"list-disc ml-4\",\n                    children: points.map((point, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"mb-1\",\n                            children: point\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Member\\\\Accordian\\\\Accordianitem.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Member\\\\Accordian\\\\Accordianitem.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Member\\\\Accordian\\\\Accordianitem.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Member\\\\Accordian\\\\Accordianitem.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AccordionItem, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = AccordionItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AccordionItem);\nvar _c;\n$RefreshReg$(_c, \"AccordionItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvTWVtYmVyL0FjY29yZGlhbi9BY2NvcmRpYW5pdGVtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0M7QUFNeEMsTUFBTUUsZ0JBQThDO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUU7O0lBQ3BFLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNTSxrQkFBa0I7UUFDdEJELFVBQVUsQ0FBQ0Q7SUFDYjtJQUNBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDZiw4REFBQ0Q7Z0JBQ0NDLFdBQVU7Z0JBQ1ZDLFNBQVNIOztrQ0FFVCw4REFBQ0k7d0JBQUdGLFdBQVU7a0NBQXlCTjs7Ozs7O2tDQUN2Qyw4REFBQ1M7a0NBQU1QLFNBQVMsTUFBTTs7Ozs7Ozs7Ozs7O1lBRXZCQSx3QkFDQyw4REFBQ0c7Z0JBQUlDLFdBQVU7MEJBQ1pMLHdCQUNDLDhEQUFDUztvQkFBR0osV0FBVTs4QkFDWEwsT0FBT1UsR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUNsQiw4REFBQ0M7NEJBQWVSLFdBQVU7c0NBQVFNOzJCQUF6QkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF2QjtHQTNCTWQ7S0FBQUE7QUE0Qk4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9NZW1iZXIvQWNjb3JkaWFuL0FjY29yZGlhbml0ZW0udHN4PzY0YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW50ZXJmYWNlIEFjY29yZGlvbkl0ZW1Qcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHBvaW50cz86IHN0cmluZ1tdOyBcbn1cblxuY29uc3QgQWNjb3JkaW9uSXRlbTogUmVhY3QuRkM8QWNjb3JkaW9uSXRlbVByb3BzPiA9ICh7IHRpdGxlLCBwb2ludHMgfSkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0b2dnbGVBY2NvcmRpb24gPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCB0ZXh0XCI+XG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGJnLWdyYXktMzAwIHAtMiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICBvbkNsaWNrPXt0b2dnbGVBY2NvcmRpb259XG4gICAgPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZFwiPnt0aXRsZX08L2gzPlxuICAgICAgPHNwYW4+e2lzT3BlbiA/ICfilrInIDogJ+KWvCd9PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIHtpc09wZW4gJiYgKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBwLTJcIj5cbiAgICAgICAge3BvaW50cyAmJiAoXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBtbC00XCI+XG4gICAgICAgICAgICB7cG9pbnRzLm1hcCgocG9pbnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJtYi0xXCI+e3BvaW50fTwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgPC9kaXY+XG4pO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbkl0ZW07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBY2NvcmRpb25JdGVtIiwidGl0bGUiLCJwb2ludHMiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGVBY2NvcmRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaDMiLCJzcGFuIiwidWwiLCJtYXAiLCJwb2ludCIsImluZGV4IiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Member/Accordian/Accordianitem.tsx\n"));

/***/ })

});