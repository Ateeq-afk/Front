"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/act/page",{

/***/ "(app-pages-browser)/./Components/Activities/Actaccordian.tsx":
/*!************************************************!*\
  !*** ./Components/Activities/Actaccordian.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Actaccordian = (param)=>{\n    let { title, children } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleOpen = ()=>setIsOpen(!isOpen);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.header, {\n                initial: false,\n                animate: {\n                    backgroundColor: isOpen ? \"#fcb418\" : \"#fff\"\n                },\n                onClick: toggleOpen,\n                className: \"cursor-pointer p-4 flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-lg font-medium\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Actaccordian.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        initial: false,\n                        animate: {\n                            rotate: isOpen ? 45 : 0\n                        },\n                        className: \"w-6 h-6 bg-gray-200 flex items-center justify-center\",\n                        children: isOpen ? \"-\" : \"+\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Actaccordian.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Actaccordian.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n                initial: false,\n                children: isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.section, {\n                    initial: \"collapsed\",\n                    animate: \"open\",\n                    exit: \"collapsed\",\n                    variants: {\n                        open: {\n                            opacity: 1,\n                            height: \"auto\"\n                        },\n                        collapsed: {\n                            opacity: 0,\n                            height: 0\n                        }\n                    },\n                    transition: {\n                        duration: 0.8,\n                        ease: [\n                            0.04,\n                            0.62,\n                            0.23,\n                            0.98\n                        ]\n                    },\n                    className: \"overflow-hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Actaccordian.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 15\n                    }, undefined)\n                }, \"content\", false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Actaccordian.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Actaccordian.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Actaccordian.tsx\",\n        lineNumber: 14,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Actaccordian, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = Actaccordian;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Actaccordian);\nvar _c;\n$RefreshReg$(_c, \"Actaccordian\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvQWN0aXZpdGllcy9BY3RhY2NvcmRpYW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3dDO0FBQ2dCO0FBQ3ZCO0FBTS9CLE1BQU1JLGVBQTRDO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUU7O0lBQ3BFLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNTSxhQUFhLElBQU1ELFVBQVUsQ0FBQ0Q7SUFDcEMscUJBQ0UsOERBQUNHOzswQkFDQyw4REFBQ1QsaURBQU1BLENBQUNVLE1BQU07Z0JBQ1pDLFNBQVM7Z0JBQ1RDLFNBQVM7b0JBQUVDLGlCQUFpQlAsU0FBUyxZQUFZO2dCQUFPO2dCQUN4RFEsU0FBU047Z0JBQ1RPLFdBQVU7O2tDQUVWLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBdUJYOzs7Ozs7a0NBQ3JDLDhEQUFDSixpREFBTUEsQ0FBQ1MsR0FBRzt3QkFDVEUsU0FBUzt3QkFDVEMsU0FBUzs0QkFBRUssUUFBUVgsU0FBUyxLQUFLO3dCQUFFO3dCQUNuQ1MsV0FBVTtrQ0FFVFQsU0FBUyxNQUFNOzs7Ozs7Ozs7Ozs7MEJBR3BCLDhEQUFDTCwwREFBZUE7Z0JBQUNVLFNBQVM7MEJBQ3ZCTCx3QkFDQyw4REFBQ04saURBQU1BLENBQUNrQixPQUFPO29CQUViUCxTQUFRO29CQUNSQyxTQUFRO29CQUNSTyxNQUFLO29CQUNMQyxVQUFVO3dCQUNSQyxNQUFNOzRCQUFFQyxTQUFTOzRCQUFHQyxRQUFRO3dCQUFPO3dCQUNuQ0MsV0FBVzs0QkFBRUYsU0FBUzs0QkFBR0MsUUFBUTt3QkFBRTtvQkFDckM7b0JBQ0FFLFlBQVk7d0JBQUVDLFVBQVU7d0JBQUtDLE1BQU07NEJBQUM7NEJBQU07NEJBQU07NEJBQU07eUJBQUs7b0JBQUM7b0JBQzVEWixXQUFVOzhCQUVWLDRFQUFDTjt3QkFBSU0sV0FBVTtrQ0FBT1Y7Ozs7OzttQkFYbEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQmxCO0dBeENRRjtLQUFBQTtBQTBDUiwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL0FjdGl2aXRpZXMvQWN0YWNjb3JkaWFuLnRzeD84OTdkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIEFjdGFjY29yZGlhblByb3BzIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG4gIH1cclxuICBjb25zdCBBY3RhY2NvcmRpYW46IFJlYWN0LkZDPEFjdGFjY29yZGlhblByb3BzPiA9ICh7IHRpdGxlLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgdG9nZ2xlT3BlbiA9ICgpID0+IHNldElzT3BlbighaXNPcGVuKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgPlxyXG4gICAgICAgIDxtb3Rpb24uaGVhZGVyXHJcbiAgICAgICAgICBpbml0aWFsPXtmYWxzZX1cclxuICAgICAgICAgIGFuaW1hdGU9e3sgYmFja2dyb3VuZENvbG9yOiBpc09wZW4gPyAnI2ZjYjQxOCcgOiAnI2ZmZicgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU9wZW59XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBwLTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bVwiPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgaW5pdGlhbD17ZmFsc2V9XHJcbiAgICAgICAgICAgIGFuaW1hdGU9e3sgcm90YXRlOiBpc09wZW4gPyA0NSA6IDAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNiBiZy1ncmF5LTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpc09wZW4gPyAnLScgOiAnKyd9XHJcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgPC9tb3Rpb24uaGVhZGVyPlxyXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD17ZmFsc2V9PlxyXG4gICAgICAgICAge2lzT3BlbiAmJiAoXHJcbiAgICAgICAgICAgIDxtb3Rpb24uc2VjdGlvblxyXG4gICAgICAgICAgICAgIGtleT1cImNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgIGluaXRpYWw9XCJjb2xsYXBzZWRcIlxyXG4gICAgICAgICAgICAgIGFuaW1hdGU9XCJvcGVuXCJcclxuICAgICAgICAgICAgICBleGl0PVwiY29sbGFwc2VkXCJcclxuICAgICAgICAgICAgICB2YXJpYW50cz17e1xyXG4gICAgICAgICAgICAgICAgb3BlbjogeyBvcGFjaXR5OiAxLCBoZWlnaHQ6ICdhdXRvJyB9LFxyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VkOiB7IG9wYWNpdHk6IDAsIGhlaWdodDogMCB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjgsIGVhc2U6IFswLjA0LCAwLjYyLCAwLjIzLCAwLjk4XSB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICAgICAgPC9tb3Rpb24uc2VjdGlvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0YWNjb3JkaWFuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsInVzZVN0YXRlIiwiQWN0YWNjb3JkaWFuIiwidGl0bGUiLCJjaGlsZHJlbiIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZU9wZW4iLCJkaXYiLCJoZWFkZXIiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImJhY2tncm91bmRDb2xvciIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJoMiIsInJvdGF0ZSIsInNlY3Rpb24iLCJleGl0IiwidmFyaWFudHMiLCJvcGVuIiwib3BhY2l0eSIsImhlaWdodCIsImNvbGxhcHNlZCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Activities/Actaccordian.tsx\n"));

/***/ })

});