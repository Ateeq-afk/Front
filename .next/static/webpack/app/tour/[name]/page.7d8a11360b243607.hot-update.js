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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! copy-to-clipboard */ \"(app-pages-browser)/./node_modules/copy-to-clipboard/index.js\");\n/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ShareButton = (param)=>{\n    let { url } = param;\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleVisibility = ()=>{\n        setIsVisible(!isVisible);\n    };\n    const toggleMenu = ()=>{\n        setIsMenuOpen(!isMenuOpen);\n    };\n    const copyToClipboard = ()=>{\n        copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default()(url);\n        alert(\"Link copied to clipboard!\");\n        toggleMenu();\n    };\n    const getWhatsAppShareLink = ()=>{\n        return \"https://api.whatsapp.com/send?text=\".concat(encodeURIComponent(url));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            if (window.scrollY > 200) {\n                setIsVisible(true);\n            } else {\n                setIsVisible(false);\n                setIsMenuOpen(false); // Close the menu when scrolling up\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed md:bottom-4 md:right-10 right-4 bottom-4 z-20 \".concat(isVisible ? \"visible\" : \"hidden\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleMenu,\n                className: \"text-yellow-500 font-bold text-lg rounded-full bg-black p-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faShareNodes\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            isMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-2 p-2 bg-white rounded-lg shadow-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: copyToClipboard,\n                        className: \"block text-sm font-semibold my-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCopy\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined),\n                            \" Copy Link\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: getWhatsAppShareLink(),\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        className: \"block text-sm font-semibold my-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faWhatsapp\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, undefined),\n                            \" WhatsApp\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: toggleMenu,\n                        className: \"block text-sm font-semibold my-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, undefined),\n                            \" Close\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ShareButton, \"6NIzDjhr3xnBn+WixOGHgroVhgo=\");\n_c = ShareButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShareButton);\nvar _c;\n$RefreshReg$(_c, \"ShareButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvQm9vay9TaGFyQnV0dG9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBQ2Q7QUFDNEI7QUFDNkI7QUFNOUYsTUFBTVMsY0FBMEM7UUFBQyxFQUFFQyxHQUFHLEVBQUU7O0lBQ3RELE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNZLFlBQVlDLGNBQWMsR0FBR2IsK0NBQVFBLENBQUM7SUFFN0MsTUFBTWMsbUJBQW1CO1FBQ3ZCSCxhQUFhLENBQUNEO0lBQ2hCO0lBRUEsTUFBTUssYUFBYTtRQUNqQkYsY0FBYyxDQUFDRDtJQUNqQjtJQUVBLE1BQU1JLGtCQUFrQjtRQUN0QmQsd0RBQUlBLENBQUNPO1FBQ0xRLE1BQU07UUFDTkY7SUFDRjtJQUVBLE1BQU1HLHVCQUF1QjtRQUMzQixPQUFPLHNDQUE4RCxPQUF4QkMsbUJBQW1CVjtJQUNsRTtJQUVBUixnREFBU0EsQ0FBQztRQUNSLE1BQU1tQixlQUFlO1lBQ25CLElBQUlDLE9BQU9DLE9BQU8sR0FBRyxLQUFLO2dCQUN4QlgsYUFBYTtZQUNmLE9BQU87Z0JBQ0xBLGFBQWE7Z0JBQ2JFLGNBQWMsUUFBUSxtQ0FBbUM7WUFDM0Q7UUFDRjtRQUVBUSxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUVsQyxPQUFPO1lBQ0xDLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVKO1FBQ3ZDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVcsdURBQXdGLE9BQWpDaEIsWUFBWSxZQUFZOzswQkFDN0YsOERBQUNpQjtnQkFBT0MsU0FBU2I7Z0JBQVlXLFdBQVU7MEJBQ3JDLDRFQUFDdkIsMkVBQWVBO29CQUFDMEIsTUFBTXhCLDJFQUFZQTs7Ozs7Ozs7Ozs7WUFHcENPLDRCQUNDLDhEQUFDYTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFPQyxTQUFTWjt3QkFBaUJVLFdBQVU7OzBDQUMxQyw4REFBQ3ZCLDJFQUFlQTtnQ0FBQzBCLE1BQU16QixxRUFBTUE7Ozs7Ozs0QkFBSTs7Ozs7OztrQ0FFbkMsOERBQUMwQjt3QkFBRUMsTUFBTWI7d0JBQXdCYyxRQUFPO3dCQUFTQyxLQUFJO3dCQUFzQlAsV0FBVTs7MENBQ25GLDhEQUFDdkIsMkVBQWVBO2dDQUFDMEIsTUFBTXRCLHlFQUFVQTs7Ozs7OzRCQUFJOzs7Ozs7O2tDQUV2Qyw4REFBQ29CO3dCQUFPQyxTQUFTYjt3QkFBWVcsV0FBVTs7MENBQ3JDLDhEQUFDdkIsMkVBQWVBO2dDQUFDMEIsTUFBTXZCLHNFQUFPQTs7Ozs7OzRCQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlDO0dBNURNRTtLQUFBQTtBQThETiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL0Jvb2svU2hhckJ1dHRvbi50c3g/YjRjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNvcHkgZnJvbSAnY29weS10by1jbGlwYm9hcmQnO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xyXG5pbXBvcnQgeyBmYUNvcHksIGZhU2hhcmVOb2RlcywgZmFUaW1lcywgZmFXaGF0c2FwcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcblxyXG5pbnRlcmZhY2UgU2hhcmVCdXR0b25Qcm9wcyB7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFNoYXJlQnV0dG9uOiBSZWFjdC5GQzxTaGFyZUJ1dHRvblByb3BzPiA9ICh7IHVybCB9KSA9PiB7XHJcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNZW51T3Blbiwgc2V0SXNNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1Zpc2libGUoIWlzVmlzaWJsZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcclxuICAgIHNldElzTWVudU9wZW4oIWlzTWVudU9wZW4pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvcHlUb0NsaXBib2FyZCA9ICgpID0+IHtcclxuICAgIGNvcHkodXJsKTtcclxuICAgIGFsZXJ0KCdMaW5rIGNvcGllZCB0byBjbGlwYm9hcmQhJyk7XHJcbiAgICB0b2dnbGVNZW51KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0V2hhdHNBcHBTaGFyZUxpbmsgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYGh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3RleHQ9JHtlbmNvZGVVUklDb21wb25lbnQodXJsKX1gO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDIwMCkge1xyXG4gICAgICAgIHNldElzVmlzaWJsZSh0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRJc1Zpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIHNldElzTWVudU9wZW4oZmFsc2UpOyAvLyBDbG9zZSB0aGUgbWVudSB3aGVuIHNjcm9sbGluZyB1cFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGZpeGVkIG1kOmJvdHRvbS00IG1kOnJpZ2h0LTEwIHJpZ2h0LTQgYm90dG9tLTQgei0yMCAke2lzVmlzaWJsZSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nfWB9PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9IGNsYXNzTmFtZT1cInRleHQteWVsbG93LTUwMCBmb250LWJvbGQgdGV4dC1sZyByb3VuZGVkLWZ1bGwgYmctYmxhY2sgcC0yXCI+XHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVNoYXJlTm9kZXN9IC8+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAge2lzTWVudU9wZW4gJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBwLTIgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y29weVRvQ2xpcGJvYXJkfSBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgbXktMVwiPlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ29weX0gLz4gQ29weSBMaW5rXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxhIGhyZWY9e2dldFdoYXRzQXBwU2hhcmVMaW5rKCl9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgbXktMVwiPlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhV2hhdHNhcHB9IC8+IFdoYXRzQXBwXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9IGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1zZW1pYm9sZCBteS0xXCI+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFUaW1lc30gLz4gQ2xvc2VcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoYXJlQnV0dG9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvcHkiLCJGb250QXdlc29tZUljb24iLCJmYUNvcHkiLCJmYVNoYXJlTm9kZXMiLCJmYVRpbWVzIiwiZmFXaGF0c2FwcCIsIlNoYXJlQnV0dG9uIiwidXJsIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwiaXNNZW51T3BlbiIsInNldElzTWVudU9wZW4iLCJ0b2dnbGVWaXNpYmlsaXR5IiwidG9nZ2xlTWVudSIsImNvcHlUb0NsaXBib2FyZCIsImFsZXJ0IiwiZ2V0V2hhdHNBcHBTaGFyZUxpbmsiLCJlbmNvZGVVUklDb21wb25lbnQiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiaWNvbiIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Book/SharButton.tsx\n"));

/***/ })

});