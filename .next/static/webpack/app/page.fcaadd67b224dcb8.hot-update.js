"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./Components/Home/Date/TrekDate.tsx":
/*!*******************************************!*\
  !*** ./Components/Home/Date/TrekDate.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-calendar */ \"(app-pages-browser)/./node_modules/react-calendar/dist/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst TrekDate = ()=>{\n    _s();\n    const [selectedDate, setSelectedDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const [tours, setTours] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchTours = async (date)=>{\n            const formattedDate = date.toISOString().split(\"T\")[0]; // Format date to 'YYYY-MM-DD'\n            const response = await fetch(\"/api/tours/byDate?date=\".concat(formattedDate));\n            const data = await response.json();\n            setTours(data);\n        };\n        fetchTours(selectedDate);\n    }, [\n        selectedDate\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            flexDirection: \"row\"\n        },\n        className: \"bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                flex: 1\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_calendar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onChange: setSelectedDate,\n                value: selectedDate\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Home\\\\Date\\\\TrekDate.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Home\\\\Date\\\\TrekDate.tsx\",\n            lineNumber: 21,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Home\\\\Date\\\\TrekDate.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TrekDate, \"gRfCrPuFvkGsnJh/2oETznN4NB0=\");\n_c = TrekDate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrekDate);\nvar _c;\n$RefreshReg$(_c, \"TrekDate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvSG9tZS9EYXRlL1RyZWtEYXRlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzhDO0FBQ1I7QUFFdEMsTUFBTUksV0FBVzs7SUFDYixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHSiwrQ0FBUUEsQ0FBQyxJQUFJSztJQUN2RCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUVyQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxhQUFhLE9BQU9DO1lBQ3hCLE1BQU1DLGdCQUFnQkQsS0FBS0UsV0FBVyxHQUFHQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSw4QkFBOEI7WUFDdEYsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLDBCQUF3QyxPQUFkSjtZQUN2RCxNQUFNSyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7WUFDaENULFNBQVNRO1FBQ1g7UUFFQVAsV0FBV0w7SUFDYixHQUFHO1FBQUNBO0tBQWE7SUFDakIscUJBQ0UsOERBQUNjO1FBQUlDLE9BQU87WUFBRUMsU0FBUztZQUFRQyxlQUFlO1FBQU07UUFBR0MsV0FBVTtrQkFDakUsNEVBQUNKO1lBQUlDLE9BQU87Z0JBQUVJLE1BQU07WUFBRTtzQkFDcEIsNEVBQUNyQixzREFBUUE7Z0JBQ1BzQixVQUFVbkI7Z0JBQ1ZvQixPQUFPckI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlZjtHQWxDTUQ7S0FBQUE7QUFvQ04sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ib21lL0RhdGUvVHJla0RhdGUudHN4PzM1OWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAncmVhY3QtY2FsZW5kYXInO1xyXG5cclxuY29uc3QgVHJla0RhdGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWREYXRlLCBzZXRTZWxlY3RlZERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcbiAgY29uc3QgW3RvdXJzLCBzZXRUb3Vyc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFRvdXJzID0gYXN5bmMgKGRhdGUpID0+IHtcclxuICAgICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGRhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdOyAvLyBGb3JtYXQgZGF0ZSB0byAnWVlZWS1NTS1ERCdcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS90b3Vycy9ieURhdGU/ZGF0ZT0ke2Zvcm1hdHRlZERhdGV9YCk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldFRvdXJzKGRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFRvdXJzKHNlbGVjdGVkRGF0ZSk7XHJcbiAgfSwgW3NlbGVjdGVkRGF0ZV0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3JvdycgfX0gY2xhc3NOYW1lPSdiZy13aGl0ZSc+XHJcbiAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEgfX0+XHJcbiAgICAgIDxDYWxlbmRhclxyXG4gICAgICAgIG9uQ2hhbmdlPXtzZXRTZWxlY3RlZERhdGV9XHJcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkRGF0ZX1cclxuICAgICAgICAvLyBBZGRpdGlvbmFsIHByb3BzIHRvIHN0eWxlIGFuZCBoYW5kbGUgY2FsZW5kYXIgYmVoYXZpb3JcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgey8qIDxkaXYgc3R5bGU9e3sgZmxleDogMiB9fT5cclxuXHJcbiAgICAgIHt0b3Vycy5tYXAoKHRvdXIpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17dG91ci5faWR9PlxyXG4gICAgICAgICAgPGgzPnt0b3VyLm5hbWV9PC9oMz5cclxuICAgICAgICAgIDxpbWcgc3JjPXt0b3VyLmltYWdlVXJsfSBhbHQ9e3RvdXIubmFtZX0gc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcsIGhlaWdodDogJzEwMHB4JyB9fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PiAqL31cclxuICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyZWtEYXRlXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FsZW5kYXIiLCJUcmVrRGF0ZSIsInNlbGVjdGVkRGF0ZSIsInNldFNlbGVjdGVkRGF0ZSIsIkRhdGUiLCJ0b3VycyIsInNldFRvdXJzIiwiZmV0Y2hUb3VycyIsImRhdGUiLCJmb3JtYXR0ZWREYXRlIiwidG9JU09TdHJpbmciLCJzcGxpdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJjbGFzc05hbWUiLCJmbGV4Iiwib25DaGFuZ2UiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Home/Date/TrekDate.tsx\n"));

/***/ })

});