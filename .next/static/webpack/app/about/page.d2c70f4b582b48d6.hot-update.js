"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/about/page",{

/***/ "(app-pages-browser)/./Components/teamMembers/teamMembers.tsx":
/*!************************************************!*\
  !*** ./Components/teamMembers/teamMembers.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst teamMembers = [\n    {\n        name: \"Habeeb Ul Haq\",\n        designation: \"CEO & Founder\",\n        photoUrl: \"/profile/\"\n    },\n    {\n        name: \"R Ashwin Kumar\",\n        designation: \"Human Resources\",\n        photoUrl: \"/profile/aswin.jpeg\"\n    },\n    {\n        name: \"Tejas Ram\",\n        designation: \"Operations Manager\",\n        photoUrl: \"/profile/tejs.jpeg\"\n    },\n    {\n        name: \"Syed Shadab Mehdi\",\n        designation: \"Business Development Manager\",\n        photoUrl: \"/profile/shadab.jpeg\"\n    },\n    {\n        name: \"Mohammed Sahil J\",\n        designation: \"Sales Manager\",\n        photoUrl: \"/profile/sahil.jpeg\"\n    },\n    {\n        name: \"Tahir Shariff\",\n        designation: \"Quality & Risk Analyst\",\n        photoUrl: \"/profile/tahir.jpeg\"\n    },\n    {\n        name: \"Aviral\",\n        designation: \"Content Creator\",\n        photoUrl: \"/profile/aviral.jpeg\"\n    },\n    {\n        name: \"Mohamed Aaqib\",\n        designation: \"Product Manager\",\n        photoUrl: \"/profile/aquib.jpeg\"\n    },\n    {\n        name: \"Jafar Sharief\",\n        designation: \"Operations Head - Thailand\",\n        photoUrl: \"/profile/jaffar.jpeg\"\n    },\n    {\n        name: \"Syed Mudassir Hussain\",\n        designation: \"Software Developer\",\n        photoUrl: \"/profile/syed.jpeg\"\n    },\n    {\n        name: \"Pramod\",\n        designation: \"Outdoor Lead Manager\",\n        photoUrl: \"https://imgtr.ee/images/2023/11/02/f4ff1be7d7d4868f68f3ac9be453287c.th.jpeg\"\n    },\n    {\n        name: \"Bharath M\",\n        designation: \"Outdoor Lead Manager\",\n        photoUrl: \"https://imgtr.ee/images/2023/11/02/5591f97fcdff7e41e3e128054337d124.th.jpeg\"\n    },\n    {\n        name: \"Saad Adnan\",\n        designation: \"Accounts\",\n        photoUrl: \"https://imgtr.ee/images/2023/11/02/04246e04c2161fe29055555bd6f81966.th.jpeg\"\n    },\n    {\n        name: \"Shreekanth G\",\n        designation: \"Operations\",\n        photoUrl: \"https://imgtr.ee/images/2023/11/02/b3e9269d3c2bede3fe000a6bfcf3817a.th.jpeg\"\n    },\n    {\n        name: \"Abhinandan M Kumar\",\n        designation: \"Business Development\",\n        photoUrl: \"/profile/abhi.jpeg\"\n    }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (teamMembers);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvdGVhbU1lbWJlcnMvdGVhbU1lbWJlcnMudHN4IiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxjQUFjO0lBQ2hCO1FBQ0VDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxVQUFVO0lBQ1o7SUFDQTtRQUNJRixNQUFNO1FBQ05DLGFBQWE7UUFDYkMsVUFBVTtJQUNaO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLFVBQVU7SUFDWjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxVQUFVO0lBQ1o7SUFDQTtRQUNFRixNQUFNO1FBQ05DLGFBQWE7UUFDYkMsVUFBVTtJQUNaO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLFVBQVU7SUFDWjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxVQUFVO0lBQ1o7SUFDQTtRQUNFRixNQUFNO1FBQ05DLGFBQWE7UUFDYkMsVUFBVTtJQUNaO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLFVBQVU7SUFDWjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxVQUFVO0lBQ1o7SUFDQTtRQUNFRixNQUFNO1FBQ05DLGFBQWE7UUFDYkMsVUFBVTtJQUNaO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLFVBQVU7SUFDWjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxVQUFVO0lBQ1o7SUFDQTtRQUNFRixNQUFNO1FBQ05DLGFBQWE7UUFDYkMsVUFBVTtJQUNaO0lBQ0Y7UUFDRUYsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLFVBQVU7SUFDWjtDQUNEO0FBRUQsK0RBQWVILFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy90ZWFtTWVtYmVycy90ZWFtTWVtYmVycy50c3g/OTVjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0ZWFtTWVtYmVycyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnSGFiZWViIFVsIEhhcScsXG4gICAgICBkZXNpZ25hdGlvbjogJ0NFTyAmIEZvdW5kZXInLFxuICAgICAgcGhvdG9Vcmw6ICcvcHJvZmlsZS8nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdSIEFzaHdpbiBLdW1hcicsXG4gICAgICAgIGRlc2lnbmF0aW9uOiAnSHVtYW4gUmVzb3VyY2VzJyxcbiAgICAgICAgcGhvdG9Vcmw6ICcvcHJvZmlsZS9hc3dpbi5qcGVnJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1RlamFzIFJhbScsXG4gICAgICAgIGRlc2lnbmF0aW9uOiAnT3BlcmF0aW9ucyBNYW5hZ2VyJyxcbiAgICAgICAgcGhvdG9Vcmw6ICcvcHJvZmlsZS90ZWpzLmpwZWcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU3llZCBTaGFkYWIgTWVoZGknLFxuICAgICAgICBkZXNpZ25hdGlvbjogJ0J1c2luZXNzIERldmVsb3BtZW50IE1hbmFnZXInLFxuICAgICAgICBwaG90b1VybDogJy9wcm9maWxlL3NoYWRhYi5qcGVnJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ01vaGFtbWVkIFNhaGlsIEonLFxuICAgICAgICBkZXNpZ25hdGlvbjogJ1NhbGVzIE1hbmFnZXInLFxuICAgICAgICBwaG90b1VybDogJy9wcm9maWxlL3NhaGlsLmpwZWcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVGFoaXIgU2hhcmlmZicsXG4gICAgICAgIGRlc2lnbmF0aW9uOiAnUXVhbGl0eSAmIFJpc2sgQW5hbHlzdCcsXG4gICAgICAgIHBob3RvVXJsOiAnL3Byb2ZpbGUvdGFoaXIuanBlZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdBdmlyYWwnLFxuICAgICAgICBkZXNpZ25hdGlvbjogJ0NvbnRlbnQgQ3JlYXRvcicsXG4gICAgICAgIHBob3RvVXJsOiAnL3Byb2ZpbGUvYXZpcmFsLmpwZWcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTW9oYW1lZCBBYXFpYicsXG4gICAgICAgIGRlc2lnbmF0aW9uOiAnUHJvZHVjdCBNYW5hZ2VyJyxcbiAgICAgICAgcGhvdG9Vcmw6ICcvcHJvZmlsZS9hcXVpYi5qcGVnJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0phZmFyIFNoYXJpZWYnLFxuICAgICAgICBkZXNpZ25hdGlvbjogJ09wZXJhdGlvbnMgSGVhZCAtIFRoYWlsYW5kJyxcbiAgICAgICAgcGhvdG9Vcmw6ICcvcHJvZmlsZS9qYWZmYXIuanBlZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTeWVkIE11ZGFzc2lyIEh1c3NhaW4nLFxuICAgICAgICBkZXNpZ25hdGlvbjogJ1NvZnR3YXJlIERldmVsb3BlcicsXG4gICAgICAgIHBob3RvVXJsOiAnL3Byb2ZpbGUvc3llZC5qcGVnJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1ByYW1vZCcsXG4gICAgICAgIGRlc2lnbmF0aW9uOiAnT3V0ZG9vciBMZWFkIE1hbmFnZXInLFxuICAgICAgICBwaG90b1VybDogJ2h0dHBzOi8vaW1ndHIuZWUvaW1hZ2VzLzIwMjMvMTEvMDIvZjRmZjFiZTdkN2Q0ODY4ZjY4ZjNhYzliZTQ1MzI4N2MudGguanBlZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCaGFyYXRoIE0nLFxuICAgICAgICBkZXNpZ25hdGlvbjogJ091dGRvb3IgTGVhZCBNYW5hZ2VyJyxcbiAgICAgICAgcGhvdG9Vcmw6ICdodHRwczovL2ltZ3RyLmVlL2ltYWdlcy8yMDIzLzExLzAyLzU1OTFmOTdmY2RmZjdlNDFlM2UxMjgwNTQzMzdkMTI0LnRoLmpwZWcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU2FhZCBBZG5hbicsXG4gICAgICAgIGRlc2lnbmF0aW9uOiAnQWNjb3VudHMnLFxuICAgICAgICBwaG90b1VybDogJ2h0dHBzOi8vaW1ndHIuZWUvaW1hZ2VzLzIwMjMvMTEvMDIvMDQyNDZlMDRjMjE2MWZlMjkwNTU1NTViZDZmODE5NjYudGguanBlZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTaHJlZWthbnRoIEcnLFxuICAgICAgICBkZXNpZ25hdGlvbjogJ09wZXJhdGlvbnMnLFxuICAgICAgICBwaG90b1VybDogJ2h0dHBzOi8vaW1ndHIuZWUvaW1hZ2VzLzIwMjMvMTEvMDIvYjNlOTI2OWQzYzJiZWRlM2ZlMDAwYTZiZmNmMzgxN2EudGguanBlZydcbiAgICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0FiaGluYW5kYW4gTSBLdW1hcicsXG4gICAgICBkZXNpZ25hdGlvbjogJ0J1c2luZXNzIERldmVsb3BtZW50JyxcbiAgICAgIHBob3RvVXJsOiAnL3Byb2ZpbGUvYWJoaS5qcGVnJ1xuICAgIH0sXG4gIF07XG4gIFxuICBleHBvcnQgZGVmYXVsdCB0ZWFtTWVtYmVyczsiXSwibmFtZXMiOlsidGVhbU1lbWJlcnMiLCJuYW1lIiwiZGVzaWduYXRpb24iLCJwaG90b1VybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/teamMembers/teamMembers.tsx\n"));

/***/ })

});