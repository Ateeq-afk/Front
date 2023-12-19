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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! copy-to-clipboard */ \"(app-pages-browser)/./node_modules/copy-to-clipboard/index.js\");\n/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-brands-svg-icons/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ShareButton = (param)=>{\n    let { url } = param;\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleVisibility = ()=>{\n        setIsVisible(!isVisible);\n    };\n    const toggleMenu = ()=>{\n        setIsMenuOpen(!isMenuOpen);\n    };\n    const copyToClipboard = ()=>{\n        copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default()(url);\n        alert(\"Link copied to clipboard!\");\n        toggleMenu();\n    };\n    const getWhatsAppShareLink = ()=>{\n        return \"https://api.whatsapp.com/send?text=\".concat(encodeURIComponent(url));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            if (window.scrollY > 200) {\n                setIsVisible(true);\n            } else {\n                setIsVisible(false);\n                setIsMenuOpen(false); // Close the menu when scrolling up\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed md:bottom-4 md:right-10 right-4 bottom-4 z-20 \".concat(isVisible ? \"visible\" : \"hidden\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleMenu,\n                className: \"text-yellow-500 font-bold text-lg rounded-full bg-black p-2 px-4 relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faShareNodes\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: toggleMenu,\n                        className: \"absolute text-sm font-semibold my-1 rounded-full bg-black top-[-15px] right-[-2px]py-1 px-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faTimes\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            isMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-2 p-2 bg-white rounded-lg shadow-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: copyToClipboard,\n                        className: \"block text-sm font-semibold my-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faCopy\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined),\n                            \" Copy Link\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: getWhatsAppShareLink(),\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        className: \"block text-sm font-semibold my-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faWhatsapp\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined),\n                            \" WhatsApp\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Book\\\\SharButton.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ShareButton, \"6NIzDjhr3xnBn+WixOGHgroVhgo=\");\n_c = ShareButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShareButton);\nvar _c;\n$RefreshReg$(_c, \"ShareButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvQm9vay9TaGFyQnV0dG9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNkO0FBQzRCO0FBQ2lCO0FBQ2xCO0FBTWhFLE1BQU1TLGNBQTBDO1FBQUMsRUFBRUMsR0FBRyxFQUFFOztJQUN0RCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1gsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDWSxZQUFZQyxjQUFjLEdBQUdiLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU1jLG1CQUFtQjtRQUN2QkgsYUFBYSxDQUFDRDtJQUNoQjtJQUVBLE1BQU1LLGFBQWE7UUFDakJGLGNBQWMsQ0FBQ0Q7SUFDakI7SUFFQSxNQUFNSSxrQkFBa0I7UUFDdEJkLHdEQUFJQSxDQUFDTztRQUNMUSxNQUFNO1FBQ05GO0lBQ0Y7SUFFQSxNQUFNRyx1QkFBdUI7UUFDM0IsT0FBTyxzQ0FBOEQsT0FBeEJDLG1CQUFtQlY7SUFDbEU7SUFFQVIsZ0RBQVNBLENBQUM7UUFDUixNQUFNbUIsZUFBZTtZQUNuQixJQUFJQyxPQUFPQyxPQUFPLEdBQUcsS0FBSztnQkFDeEJYLGFBQWE7WUFDZixPQUFPO2dCQUNMQSxhQUFhO2dCQUNiRSxjQUFjLFFBQVEsbUNBQW1DO1lBQzNEO1FBQ0Y7UUFFQVEsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7UUFFbEMsT0FBTztZQUNMQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFXLHVEQUF3RixPQUFqQ2hCLFlBQVksWUFBWTs7MEJBQzdGLDhEQUFDaUI7Z0JBQU9DLFNBQVNiO2dCQUFZVyxXQUFVOztrQ0FDckMsOERBQUN2QiwyRUFBZUE7d0JBQUMwQixNQUFNeEIsMkVBQVlBOzs7Ozs7a0NBQ25DLDhEQUFDc0I7d0JBQU9DLFNBQVNiO3dCQUFZVyxXQUFVO2tDQUNuQyw0RUFBQ3ZCLDJFQUFlQTs0QkFBQzBCLE1BQU12QixzRUFBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSW5DTSw0QkFDQyw4REFBQ2E7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBT0MsU0FBU1o7d0JBQWlCVSxXQUFVOzswQ0FDMUMsOERBQUN2QiwyRUFBZUE7Z0NBQUMwQixNQUFNekIscUVBQU1BOzs7Ozs7NEJBQUk7Ozs7Ozs7a0NBRW5DLDhEQUFDMEI7d0JBQUVDLE1BQU1iO3dCQUF3QmMsUUFBTzt3QkFBU0MsS0FBSTt3QkFBc0JQLFdBQVU7OzBDQUNuRiw4REFBQ3ZCLDJFQUFlQTtnQ0FBQzBCLE1BQU10QiwwRUFBVUE7Ozs7Ozs0QkFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9qRDtHQTdETUM7S0FBQUE7QUErRE4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Cb29rL1NoYXJCdXR0b24udHN4P2I0Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjb3B5IGZyb20gJ2NvcHktdG8tY2xpcGJvYXJkJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZmFDb3B5LCBmYVNoYXJlTm9kZXMsIGZhVGltZXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xyXG5pbXBvcnQgeyBmYVdoYXRzYXBwIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcblxyXG5pbnRlcmZhY2UgU2hhcmVCdXR0b25Qcm9wcyB7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IFNoYXJlQnV0dG9uOiBSZWFjdC5GQzxTaGFyZUJ1dHRvblByb3BzPiA9ICh7IHVybCB9KSA9PiB7XHJcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNNZW51T3Blbiwgc2V0SXNNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1Zpc2libGUoIWlzVmlzaWJsZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcclxuICAgIHNldElzTWVudU9wZW4oIWlzTWVudU9wZW4pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvcHlUb0NsaXBib2FyZCA9ICgpID0+IHtcclxuICAgIGNvcHkodXJsKTtcclxuICAgIGFsZXJ0KCdMaW5rIGNvcGllZCB0byBjbGlwYm9hcmQhJyk7XHJcbiAgICB0b2dnbGVNZW51KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0V2hhdHNBcHBTaGFyZUxpbmsgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYGh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3RleHQ9JHtlbmNvZGVVUklDb21wb25lbnQodXJsKX1gO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDIwMCkge1xyXG4gICAgICAgIHNldElzVmlzaWJsZSh0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRJc1Zpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIHNldElzTWVudU9wZW4oZmFsc2UpOyAvLyBDbG9zZSB0aGUgbWVudSB3aGVuIHNjcm9sbGluZyB1cFxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGZpeGVkIG1kOmJvdHRvbS00IG1kOnJpZ2h0LTEwIHJpZ2h0LTQgYm90dG9tLTQgei0yMCAke2lzVmlzaWJsZSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nfWB9PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9IGNsYXNzTmFtZT1cInRleHQteWVsbG93LTUwMCBmb250LWJvbGQgdGV4dC1sZyByb3VuZGVkLWZ1bGwgYmctYmxhY2sgcC0yIHB4LTQgcmVsYXRpdmVcIj5cclxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhU2hhcmVOb2Rlc30gLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU1lbnV9IGNsYXNzTmFtZT1cImFic29sdXRlIHRleHQtc20gZm9udC1zZW1pYm9sZCBteS0xIHJvdW5kZWQtZnVsbCBiZy1ibGFjayB0b3AtWy0xNXB4XSByaWdodC1bLTJweF1weS0xIHB4LTJcIj5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzfSAvPiBcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIHtpc01lbnVPcGVuICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgcC0yIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NvcHlUb0NsaXBib2FyZH0gY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LXNlbWlib2xkIG15LTFcIj5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNvcHl9IC8+IENvcHkgTGlua1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YSBocmVmPXtnZXRXaGF0c0FwcFNoYXJlTGluaygpfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LXNlbWlib2xkIG15LTFcIj5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVdoYXRzYXBwfSAvPiBXaGF0c0FwcFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGFyZUJ1dHRvbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjb3B5IiwiRm9udEF3ZXNvbWVJY29uIiwiZmFDb3B5IiwiZmFTaGFyZU5vZGVzIiwiZmFUaW1lcyIsImZhV2hhdHNhcHAiLCJTaGFyZUJ1dHRvbiIsInVybCIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsImlzTWVudU9wZW4iLCJzZXRJc01lbnVPcGVuIiwidG9nZ2xlVmlzaWJpbGl0eSIsInRvZ2dsZU1lbnUiLCJjb3B5VG9DbGlwYm9hcmQiLCJhbGVydCIsImdldFdoYXRzQXBwU2hhcmVMaW5rIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaGFuZGxlU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImljb24iLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Book/SharButton.tsx\n"));

/***/ })

});