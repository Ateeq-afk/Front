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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Actaccordian = (title, childre)=>{\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleOpen = ()=>setIsOpen(!isOpen);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-b border-gray-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.header, {\n                initial: false,\n                animate: {\n                    backgroundColor: isOpen ? \"#ddd\" : \"#fff\"\n                },\n                onClick: toggleOpen,\n                className: \"cursor-pointer p-4 flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-lg font-medium\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Actaccordian.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        initial: false,\n                        animate: {\n                            rotate: isOpen ? 45 : 0\n                        },\n                        className: \"w-6 h-6 bg-gray-200 flex items-center justify-center\",\n                        children: isOpen ? \"-\" : \"+\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Actaccordian.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Actaccordian.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n                initial: false,\n                children: isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.section, {\n                    initial: \"collapsed\",\n                    animate: \"open\",\n                    exit: \"collapsed\",\n                    variants: {\n                        open: {\n                            opacity: 1,\n                            height: \"auto\"\n                        },\n                        collapsed: {\n                            opacity: 0,\n                            height: 0\n                        }\n                    },\n                    transition: {\n                        duration: 0.8,\n                        ease: [\n                            0.04,\n                            0.62,\n                            0.23,\n                            0.98\n                        ]\n                    },\n                    className: \"overflow-hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4\",\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Actaccordian.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 15\n                    }, undefined)\n                }, \"content\", false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Actaccordian.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Actaccordian.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Actaccordian.tsx\",\n        lineNumber: 10,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Actaccordian, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = Actaccordian;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Actaccordian);\nvar _c;\n$RefreshReg$(_c, \"Actaccordian\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvQWN0aXZpdGllcy9BY3RhY2NvcmRpYW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3lCO0FBQytCO0FBQ3ZCO0FBRWpDLE1BQU1JLGVBQWUsQ0FBQ0MsT0FBT0M7O0lBQ3pCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNTSxhQUFhLElBQU1ELFVBQVUsQ0FBQ0Q7SUFDcEMscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDVixpREFBTUEsQ0FBQ1csTUFBTTtnQkFDWkMsU0FBUztnQkFDVEMsU0FBUztvQkFBRUMsaUJBQWlCUixTQUFTLFNBQVM7Z0JBQU87Z0JBQ3JEUyxTQUFTUDtnQkFDVEUsV0FBVTs7a0NBRVYsOERBQUNNO3dCQUFHTixXQUFVO2tDQUF1Qk47Ozs7OztrQ0FDckMsOERBQUNKLGlEQUFNQSxDQUFDUyxHQUFHO3dCQUNURyxTQUFTO3dCQUNUQyxTQUFTOzRCQUFFSSxRQUFRWCxTQUFTLEtBQUs7d0JBQUU7d0JBQ25DSSxXQUFVO2tDQUVUSixTQUFTLE1BQU07Ozs7Ozs7Ozs7OzswQkFHcEIsOERBQUNMLDBEQUFlQTtnQkFBQ1csU0FBUzswQkFDdkJOLHdCQUNDLDhEQUFDTixpREFBTUEsQ0FBQ2tCLE9BQU87b0JBRWJOLFNBQVE7b0JBQ1JDLFNBQVE7b0JBQ1JNLE1BQUs7b0JBQ0xDLFVBQVU7d0JBQ1JDLE1BQU07NEJBQUVDLFNBQVM7NEJBQUdDLFFBQVE7d0JBQU87d0JBQ25DQyxXQUFXOzRCQUFFRixTQUFTOzRCQUFHQyxRQUFRO3dCQUFFO29CQUNyQztvQkFDQUUsWUFBWTt3QkFBRUMsVUFBVTt3QkFBS0MsTUFBTTs0QkFBQzs0QkFBTTs0QkFBTTs0QkFBTTt5QkFBSztvQkFBQztvQkFDNURqQixXQUFVOzhCQUVWLDRFQUFDRDt3QkFBSUMsV0FBVTtrQ0FBT2tCOzs7Ozs7bUJBWGxCOzs7Ozs7Ozs7Ozs7Ozs7O0FBaUJsQjtHQXhDTXpCO0tBQUFBO0FBMENOLCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvQWN0aXZpdGllcy9BY3RhY2NvcmRpYW4udHN4Pzg5N2QiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBBY3RhY2NvcmRpYW4gPSAodGl0bGUsIGNoaWxkcmUpID0+IHtcclxuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB0b2dnbGVPcGVuID0gKCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj5cclxuICAgICAgICA8bW90aW9uLmhlYWRlclxyXG4gICAgICAgICAgaW5pdGlhbD17ZmFsc2V9XHJcbiAgICAgICAgICBhbmltYXRlPXt7IGJhY2tncm91bmRDb2xvcjogaXNPcGVuID8gJyNkZGQnIDogJyNmZmYnIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVPcGVufVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgcC00IGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW1cIj57dGl0bGV9PC9oMj5cclxuICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIGluaXRpYWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICBhbmltYXRlPXt7IHJvdGF0ZTogaXNPcGVuID8gNDUgOiAwIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTYgYmctZ3JheS0yMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXNPcGVuID8gJy0nIDogJysnfVxyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDwvbW90aW9uLmhlYWRlcj5cclxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfT5cclxuICAgICAgICAgIHtpc09wZW4gJiYgKFxyXG4gICAgICAgICAgICA8bW90aW9uLnNlY3Rpb25cclxuICAgICAgICAgICAgICBrZXk9XCJjb250ZW50XCJcclxuICAgICAgICAgICAgICBpbml0aWFsPVwiY29sbGFwc2VkXCJcclxuICAgICAgICAgICAgICBhbmltYXRlPVwib3BlblwiXHJcbiAgICAgICAgICAgICAgZXhpdD1cImNvbGxhcHNlZFwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudHM9e3tcclxuICAgICAgICAgICAgICAgIG9wZW46IHsgb3BhY2l0eTogMSwgaGVpZ2h0OiAnYXV0bycgfSxcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogeyBvcGFjaXR5OiAwLCBoZWlnaHQ6IDAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC44LCBlYXNlOiBbMC4wNCwgMC42MiwgMC4yMywgMC45OF0gfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgICAgICAgICAgIDwvbW90aW9uLnNlY3Rpb24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjdGFjY29yZGlhblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJ1c2VTdGF0ZSIsIkFjdGFjY29yZGlhbiIsInRpdGxlIiwiY2hpbGRyZSIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZU9wZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImJhY2tncm91bmRDb2xvciIsIm9uQ2xpY2siLCJoMiIsInJvdGF0ZSIsInNlY3Rpb24iLCJleGl0IiwidmFyaWFudHMiLCJvcGVuIiwib3BhY2l0eSIsImhlaWdodCIsImNvbGxhcHNlZCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Activities/Actaccordian.tsx\n"));

/***/ })

});