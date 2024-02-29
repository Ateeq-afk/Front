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

/***/ "(app-pages-browser)/./Components/Activities/Activities.tsx":
/*!**********************************************!*\
  !*** ./Components/Activities/Activities.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Navbar_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Navbar/Header/Header */ \"(app-pages-browser)/./Components/Navbar/Header/Header.tsx\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/effect-fade */ \"(app-pages-browser)/./node_modules/swiper/modules/effect-fade.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/navigation */ \"(app-pages-browser)/./node_modules/swiper/modules/navigation.css\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/modules */ \"(app-pages-browser)/./node_modules/swiper/modules/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// Import Swiper styles\n\n\n\n\n\n\nconst NavLinks = [\n    {\n        href: \"#overview\",\n        label: \"Overview\",\n        icon: \"/food/searching.png\"\n    },\n    {\n        href: \"#travel\",\n        label: \"Tour\",\n        icon: \"/food/travel.png\"\n    },\n    {\n        href: \"#attraction\",\n        label: \"Attraction\",\n        icon: \"/food/attract.png\"\n    },\n    {\n        href: \"#activities\",\n        label: \"Activities\",\n        icon: \"/food/act.png\"\n    },\n    {\n        href: \"#food\",\n        label: \"Food\",\n        icon: \"/food/food.png\"\n    },\n    {\n        href: \"#stays\",\n        label: \"Stays\",\n        icon: \"/food/hotel.png\"\n    },\n    {\n        href: \"#shopping\",\n        label: \"Shopping\",\n        icon: \"/food/shop.png\"\n    },\n    {\n        href: \"#culture\",\n        label: \"Culture\",\n        icon: \"/food/culture.png\"\n    },\n    {\n        href: \"#religioussites\",\n        label: \"Religious Sites\",\n        icon: \"/food/religious.png\"\n    },\n    {\n        href: \"#camping\",\n        label: \"Camping\",\n        icon: \"/food/camp.png\"\n    },\n    {\n        href: \"#blogs\",\n        label: \"Blogs\",\n        icon: \"/food/blog.png\"\n    }\n];\nconst Activities = ()=>{\n    _s();\n    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"overview\");\n    const swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const checkActiveSection = ()=>{\n        const offset = 170; // Height of your fixed header or any other offset\n        const currentScrollPosition = window.pageYOffset + offset;\n        let currentSection = \"overview\"; // Default to the first section\n        NavLinks.forEach((link, index)=>{\n            const sectionId = link.href.substring(1); // Adjusted to remove '#' from sectionId\n            const section = document.getElementById(sectionId);\n            if (section && currentScrollPosition >= section.offsetTop && currentScrollPosition < section.offsetTop + section.offsetHeight) {\n                currentSection = sectionId;\n                setActiveSection(currentSection);\n                if (swiperRef.current) {\n                    swiperRef.current.slideTo(index); // Use 'any' or a more specific type if known\n                }\n            }\n        });\n    };\n    const handleNavLinkClick = (e, sectionId)=>{\n        e.preventDefault(); // Prevent the default link behavior\n        const sectionElement = document.getElementById(sectionId.substring(1)); // Adjusted to remove '#' from sectionId\n        if (!sectionElement) {\n            console.error(\"Element with ID '\".concat(sectionId, \"' not found.\"));\n            return;\n        }\n        const offsetTop = sectionElement.offsetTop;\n        const headerOffset = 150; // Adjust this value based on your actual header's height\n        window.scrollTo({\n            top: offsetTop - headerOffset,\n            behavior: \"smooth\"\n        });\n        // Manually update the URL hash\n        window.history.pushState({}, \"\", sectionId);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", checkActiveSection);\n        return ()=>{\n            window.removeEventListener(\"scroll\", checkActiveSection);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar_Header_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-500 text-center md:text-7xl text-5xl z-10 font-bold\",\n                children: \"Common Name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n                spaceBetween: 30,\n                effect: \"fade\",\n                navigation: false,\n                modules: [\n                    swiper_modules__WEBPACK_IMPORTED_MODULE_7__.EffectFade,\n                    swiper_modules__WEBPACK_IMPORTED_MODULE_7__.Autoplay\n                ],\n                autoplay: {\n                    delay: 1500\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative h-[400px] w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                src: \"/dest/bhadra.jpg\",\n                                className: \"\",\n                                objectFit: \"cover\",\n                                layout: \"fill\",\n                                alt: \"bhardra\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative h-[400px] w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                src: \"/dest/devi.jpg\",\n                                className: \"\",\n                                objectFit: \"cover\",\n                                layout: \"fill\",\n                                alt: \"bhardra\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative h-[400px] w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                src: \"/dest/drum.jpg\",\n                                className: \"\",\n                                objectFit: \"cover\",\n                                layout: \"fill\",\n                                alt: \"bhardra\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative h-[400px] w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                src: \"/dest/hebbe.jpg\",\n                                className: \"\",\n                                objectFit: \"cover\",\n                                layout: \"fill\",\n                                alt: \"bhardra\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"top-bar\",\n                className: \"sticky top-[60px] z-30 bg-black bg-opacity-100 border-b-2 border-gray-700\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"flex justify-center items-center space-x-4 md:py-4 py-2 md:px-5 px-2 w-full text-white\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n                        onSwiper: (swiper)=>{\n                            swiperRef.current = swiper;\n                        },\n                        modules: [\n                            swiper_modules__WEBPACK_IMPORTED_MODULE_7__.FreeMode\n                        ],\n                        spaceBetween: 0,\n                        slidesPerView: 3.5,\n                        freeMode: true,\n                        breakpoints: {\n                            // when window width is >= 640px\n                            500: {\n                                slidesPerView: 5,\n                                initialSlide: 0\n                            },\n                            1000: {\n                                slidesPerView: 10,\n                                initialSlide: 0\n                            },\n                            1300: {\n                                slidesPerView: 11,\n                                initialSlide: 0,\n                                spaceBetween: 10\n                            }\n                        },\n                        children: NavLinks.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {\n                                    href: link.href,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: (e)=>handleNavLinkClick(e, link.href),\n                                        className: \"flex flex-col md:flex-row  items-center justify-center md:text-sm text-base space-x-2 transition duration-150 cursor-pointer md:pb-1 \".concat(activeSection === link.href.substring(1) ? \"border-b-2 border-yellow-500\" : \"\"),\n                                        children: link.label\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                                        lineNumber: 140,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                                    lineNumber: 139,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                                lineNumber: 138,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Activities, \"e7r4fSsQLvt7rkx/JRiXxjJpbp8=\");\n_c = Activities;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Activities);\nvar _c;\n$RefreshReg$(_c, \"Activities\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvQWN0aXZpdGllcy9BY3Rpdml0aWVzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ3NFO0FBQzFCO0FBQ087QUFFbkQsdUJBQXVCO0FBQ0g7QUFDWTtBQUNEO0FBQ2lDO0FBQ2pDO0FBQ0Y7QUFFN0IsTUFBTVksV0FBVztJQUNiO1FBQUVDLE1BQU07UUFBYUMsT0FBTztRQUFZQyxNQUFNO0lBQXNCO0lBQ3BFO1FBQUVGLE1BQU07UUFBV0MsT0FBTztRQUFRQyxNQUFNO0lBQW1CO0lBQzNEO1FBQUVGLE1BQU07UUFBZUMsT0FBTztRQUFjQyxNQUFNO0lBQW9CO0lBQ3RFO1FBQUVGLE1BQU07UUFBZUMsT0FBTztRQUFjQyxNQUFNO0lBQWdCO0lBQ2xFO1FBQUVGLE1BQU07UUFBU0MsT0FBTztRQUFRQyxNQUFNO0lBQWlCO0lBQ3ZEO1FBQUVGLE1BQU07UUFBVUMsT0FBTztRQUFTQyxNQUFNO0lBQWtCO0lBQzFEO1FBQUVGLE1BQU07UUFBYUMsT0FBTztRQUFZQyxNQUFNO0lBQWlCO0lBQy9EO1FBQUVGLE1BQU07UUFBWUMsT0FBTztRQUFXQyxNQUFNO0lBQW9CO0lBQ2hFO1FBQUVGLE1BQU07UUFBbUJDLE9BQU87UUFBbUJDLE1BQU07SUFBc0I7SUFDakY7UUFBRUYsTUFBTTtRQUFZQyxPQUFPO1FBQVdDLE1BQU07SUFBaUI7SUFDN0Q7UUFBRUYsTUFBTTtRQUFVQyxPQUFPO1FBQVNDLE1BQU07SUFBaUI7Q0FDMUQ7QUFDSCxNQUFNQyxhQUFhOztJQUNmLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdmLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1nQixZQUFZakIsNkNBQU1BLENBQW9CO0lBQzVDLE1BQU1rQixxQkFBcUI7UUFDdkIsTUFBTUMsU0FBUyxLQUFLLGtEQUFrRDtRQUN0RSxNQUFNQyx3QkFBd0JDLE9BQU9DLFdBQVcsR0FBR0g7UUFDbkQsSUFBSUksaUJBQWlCLFlBQVksK0JB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QUN0Qjt3QkFDQVYsU0FBUzs0QkFBQ2hELG9EQUFRQTt5QkFBQzt3QkFDbkI2QyxjQUFjO3dCQUNkYyxlQUFlO3dCQUNmQyxVQUFVO3dCQUNWQyxhQUFhOzRCQUNYLGdDQUFnQzs0QkFDaEMsS0FBSztnQ0FDREYsZUFBZTtnQ0FDZkcsY0FBYzs0QkFDaEI7NEJBQ0YsTUFBTTtnQ0FDSkgsZUFBZTtnQ0FDZkcsY0FBYzs0QkFDaEI7NEJBQ0EsTUFBSztnQ0FDREgsZUFBZTtnQ0FDZkcsY0FBYztnQ0FDZGpCLGNBQWM7NEJBQ2xCO3dCQUNGO2tDQUVDMUMsU0FBUzRELEdBQUcsQ0FBQyxDQUFDN0MsTUFBTUMsc0JBQ25CLDhEQUFDdEIscURBQVdBOzBDQUNWLDRFQUFDSyxrREFBSUE7b0NBQUNFLE1BQU1jLEtBQUtkLElBQUk7OENBQ25CLDRFQUFDdUM7d0NBQUlxQixTQUFTLENBQUNsQyxJQUFNRCxtQkFBbUJDLEdBQUdaLEtBQUtkLElBQUk7d0NBQ2xEd0MsV0FBVyx3SUFBdU4sT0FBL0VwQyxrQkFBa0JVLEtBQUtkLElBQUksQ0FBQ2lCLFNBQVMsQ0FBQyxLQUFLLGlDQUFpQztrREFDOU5ILEtBQUtiLEtBQUs7Ozs7Ozs7Ozs7OytCQUpDYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjOUI7R0E3SE1aO0tBQUFBO0FBK0hOLCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvQWN0aXZpdGllcy9BY3Rpdml0aWVzLnRzeD83NzkyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgUmVhY3QsIHsgTW91c2VFdmVudCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vTmF2YmFyL0hlYWRlci9IZWFkZXInXHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xyXG5pbXBvcnQgU3dpcGVyQ29yZSBmcm9tICdzd2lwZXInO1xyXG4vLyBJbXBvcnQgU3dpcGVyIHN0eWxlc1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MvZWZmZWN0LWZhZGUnO1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MvbmF2aWdhdGlvbic7XHJcbmltcG9ydCB7IEF1dG9wbGF5LCBFZmZlY3RGYWRlLCBGcmVlTW9kZSB9IGZyb20gJ3N3aXBlci9tb2R1bGVzJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgTmF2TGlua3MgPSBbXHJcbiAgICB7IGhyZWY6ICcjb3ZlcnZpZXcnLCBsYWJlbDogJ092ZXJ2aWV3JywgaWNvbjogJy9mb29kL3NlYXJjaGluZy5wbmcnIH0sXHJcbiAgICB7IGhyZWY6ICcjdHJhdmVsJywgbGFiZWw6ICdUb3VyJywgaWNvbjogJy9mb29kL3RyYXZlbC5wbmcnIH0sXHJcbiAgICB7IGhyZWY6ICcjYXR0cmFjdGlvbicsIGxhYmVsOiAnQXR0cmFjdGlvbicsIGljb246ICcvZm9vZC9hdHRyYWN0LnBuZycgfSxcclxuICAgIHsgaHJlZjogJyNhY3Rpdml0aWVzJywgbGFiZWw6ICdBY3Rpdml0aWVzJywgaWNvbjogJy9mb29kL2FjdC5wbmcnIH0sXHJcbiAgICB7IGhyZWY6ICcjZm9vZCcsIGxhYmVsOiAnRm9vZCcsIGljb246ICcvZm9vZC9mb29kLnBuZycgfSxcclxuICAgIHsgaHJlZjogJyNzdGF5cycsIGxhYmVsOiAnU3RheXMnLCBpY29uOiAnL2Zvb2QvaG90ZWwucG5nJyB9LFxyXG4gICAgeyBocmVmOiAnI3Nob3BwaW5nJywgbGFiZWw6ICdTaG9wcGluZycsIGljb246ICcvZm9vZC9zaG9wLnBuZycgfSxcclxuICAgIHsgaHJlZjogJyNjdWx0dXJlJywgbGFiZWw6ICdDdWx0dXJlJywgaWNvbjogJy9mb29kL2N1bHR1cmUucG5nJyB9LFxyXG4gICAgeyBocmVmOiAnI3JlbGlnaW91c3NpdGVzJywgbGFiZWw6ICdSZWxpZ2lvdXMgU2l0ZXMnLCBpY29uOiAnL2Zvb2QvcmVsaWdpb3VzLnBuZycgfSxcclxuICAgIHsgaHJlZjogJyNjYW1waW5nJywgbGFiZWw6ICdDYW1waW5nJywgaWNvbjogJy9mb29kL2NhbXAucG5nJyB9LFxyXG4gICAgeyBocmVmOiAnI2Jsb2dzJywgbGFiZWw6ICdCbG9ncycsIGljb246ICcvZm9vZC9ibG9nLnBuZycgfSxcclxuICBdO1xyXG5jb25zdCBBY3Rpdml0aWVzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2FjdGl2ZVNlY3Rpb24sIHNldEFjdGl2ZVNlY3Rpb25dID0gdXNlU3RhdGUoJ292ZXJ2aWV3Jyk7XHJcblxyXG4gICAgY29uc3Qgc3dpcGVyUmVmID0gdXNlUmVmPFN3aXBlckNvcmUgfCBudWxsPihudWxsKTtcclxuICAgIGNvbnN0IGNoZWNrQWN0aXZlU2VjdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBvZmZzZXQgPSAxNzA7IC8vIEhlaWdodCBvZiB5b3VyIGZpeGVkIGhlYWRlciBvciBhbnkgb3RoZXIgb2Zmc2V0XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNjcm9sbFBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0ICsgb2Zmc2V0O1xyXG4gICAgICAgIGxldCBjdXJyZW50U2VjdGlvbiA9ICdvdmVydmlldyc7IC8vIERlZmF1bHQgdG8gdGhlIGZpcnN0IHNlY3Rpb25cclxuICAgICAgICBcclxuICAgICAgICBOYXZMaW5rcy5mb3JFYWNoKChsaW5rLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgc2VjdGlvbklkID0gbGluay5ocmVmLnN1YnN0cmluZygxKTsgLy8gQWRqdXN0ZWQgdG8gcmVtb3ZlICcjJyBmcm9tIHNlY3Rpb25JZFxyXG4gICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb25JZCk7XHJcbiAgICAgICAgICBpZiAoc2VjdGlvbiAmJiBjdXJyZW50U2Nyb2xsUG9zaXRpb24gPj0gc2VjdGlvbi5vZmZzZXRUb3AgJiYgY3VycmVudFNjcm9sbFBvc2l0aW9uIDwgc2VjdGlvbi5vZmZzZXRUb3AgKyBzZWN0aW9uLm9mZnNldEhlaWdodCkge1xyXG4gICAgICAgICAgICBjdXJyZW50U2VjdGlvbiA9IHNlY3Rpb25JZDtcclxuICAgICAgICAgICAgc2V0QWN0aXZlU2VjdGlvbihjdXJyZW50U2VjdGlvbik7XHJcbiAgICAgICAgICAgIGlmIChzd2lwZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgKHN3aXBlclJlZi5jdXJyZW50IGFzIGFueSkuc2xpZGVUbyhpbmRleCk7IC8vIFVzZSAnYW55JyBvciBhIG1vcmUgc3BlY2lmaWMgdHlwZSBpZiBrbm93blxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGhhbmRsZU5hdkxpbmtDbGljayA9IChlOiBNb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50Piwgc2VjdGlvbklkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgbGluayBiZWhhdmlvclxyXG4gICAgICAgIGNvbnN0IHNlY3Rpb25FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VjdGlvbklkLnN1YnN0cmluZygxKSk7IC8vIEFkanVzdGVkIHRvIHJlbW92ZSAnIycgZnJvbSBzZWN0aW9uSWRcclxuICAgICAgICBpZiAoIXNlY3Rpb25FbGVtZW50KSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFbGVtZW50IHdpdGggSUQgJyR7c2VjdGlvbklkfScgbm90IGZvdW5kLmApO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvZmZzZXRUb3AgPSBzZWN0aW9uRWxlbWVudC5vZmZzZXRUb3A7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyT2Zmc2V0ID0gMTUwOyAvLyBBZGp1c3QgdGhpcyB2YWx1ZSBiYXNlZCBvbiB5b3VyIGFjdHVhbCBoZWFkZXIncyBoZWlnaHRcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgdG9wOiBvZmZzZXRUb3AgLSBoZWFkZXJPZmZzZXQsXHJcbiAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAvLyBNYW51YWxseSB1cGRhdGUgdGhlIFVSTCBoYXNoXHJcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgc2VjdGlvbklkKTtcclxuICAgICAgfTtcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja0FjdGl2ZVNlY3Rpb24pO1xyXG4gIFxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja0FjdGl2ZVNlY3Rpb24pO1xyXG4gICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMyBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yIHRleHQteWVsbG93LTUwMCB0ZXh0LWNlbnRlciBtZDp0ZXh0LTd4bCB0ZXh0LTV4bCB6LTEwIGZvbnQtYm9sZFwiPlxyXG4gICAgQ29tbW9uIE5hbWVcclxuICA8L2Rpdj5cclxuICAgICAgPFN3aXBlclxyXG4gICAgICAgIHNwYWNlQmV0d2Vlbj17MzB9XHJcbiAgICAgICAgZWZmZWN0PXsnZmFkZSd9XHJcbiAgICAgICAgbmF2aWdhdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgbW9kdWxlcz17W0VmZmVjdEZhZGUsQXV0b3BsYXldfVxyXG4gICAgICAgIGF1dG9wbGF5PXt7XHJcbiAgICAgICAgICAgIGRlbGF5OiAxNTAwLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGgtWzQwMHB4XSB3LWZ1bGwnPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Rlc3QvYmhhZHJhLmpwZ1wiIGNsYXNzTmFtZT0nJyBvYmplY3RGaXQ9J2NvdmVyJyBsYXlvdXQ9J2ZpbGwnIGFsdD0nYmhhcmRyYScgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGgtWzQwMHB4XSB3LWZ1bGwnPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Rlc3QvZGV2aS5qcGdcIiBjbGFzc05hbWU9Jycgb2JqZWN0Rml0PSdjb3ZlcicgbGF5b3V0PSdmaWxsJyBhbHQ9J2JoYXJkcmEnIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBoLVs0MDBweF0gdy1mdWxsJz5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9kZXN0L2RydW0uanBnXCIgY2xhc3NOYW1lPScnIG9iamVjdEZpdD0nY292ZXInIGxheW91dD0nZmlsbCcgYWx0PSdiaGFyZHJhJyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgaC1bNDAwcHhdIHctZnVsbCc+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvZGVzdC9oZWJiZS5qcGdcIiBjbGFzc05hbWU9Jycgb2JqZWN0Rml0PSdjb3ZlcicgbGF5b3V0PSdmaWxsJyBhbHQ9J2JoYXJkcmEnIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgIDwvU3dpcGVyPlxyXG4gICAgICA8ZGl2IGlkPVwidG9wLWJhclwiIGNsYXNzTmFtZT1cInN0aWNreSB0b3AtWzYwcHhdIHotMzAgYmctYmxhY2sgYmctb3BhY2l0eS0xMDAgYm9yZGVyLWItMiBib3JkZXItZ3JheS03MDBcIj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzcGFjZS14LTQgbWQ6cHktNCBweS0yIG1kOnB4LTUgcHgtMiB3LWZ1bGwgdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgIDxTd2lwZXJcclxuICAgICAgICBvblN3aXBlcj17KHN3aXBlcikgPT4ge1xyXG4gICAgICAgICAgICBzd2lwZXJSZWYuY3VycmVudCA9IHN3aXBlcjtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBtb2R1bGVzPXtbRnJlZU1vZGVdfVxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuPXswfVxyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldz17My41fSAvLyBEZWZhdWx0IHRvIDMgZm9yIG1vYmlsZVxyXG4gICAgICAgICAgZnJlZU1vZGU9e3RydWV9XHJcbiAgICAgICAgICBicmVha3BvaW50cz17e1xyXG4gICAgICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA2NDBweFxyXG4gICAgICAgICAgICA1MDA6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IDBcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMDAwOiB7XHJcbiAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMTAsXHJcbiAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDEzMDA6e1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMTEsXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IDAsXHJcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge05hdkxpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmsuaHJlZn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVOYXZMaW5rQ2xpY2soZSwgbGluay5ocmVmKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1kOnRleHQtc20gdGV4dC1iYXNlIHNwYWNlLXgtMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBjdXJzb3ItcG9pbnRlciBtZDpwYi0xICR7YWN0aXZlU2VjdGlvbiA9PT0gbGluay5ocmVmLnN1YnN0cmluZygxKSA/ICdib3JkZXItYi0yIGJvcmRlci15ZWxsb3ctNTAwJyA6ICcnfWB9PlxyXG4gICAgICAgICAgICAgICAgICB7bGluay5sYWJlbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU3dpcGVyPlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpdml0aWVzXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiSGVhZGVyIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJBdXRvcGxheSIsIkVmZmVjdEZhZGUiLCJGcmVlTW9kZSIsIkltYWdlIiwiTGluayIsIk5hdkxpbmtzIiwiaHJlZiIsImxhYmVsIiwiaWNvbiIsIkFjdGl2aXRpZXMiLCJhY3RpdmVTZWN0aW9uIiwic2V0QWN0aXZlU2VjdGlvbiIsInN3aXBlclJlZiIsImNoZWNrQWN0aXZlU2VjdGlvbiIsIm9mZnNldCIsImN1cnJlbnRTY3JvbGxQb3NpdGlvbiIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiY3VycmVudFNlY3Rpb24iLCJmb3JFYWNoIiwibGluayIsImluZGV4Iiwic2VjdGlvbklkIiwic3Vic3RyaW5nIiwic2VjdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJjdXJyZW50Iiwic2xpZGVUbyIsImhhbmRsZU5hdkxpbmtDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNlY3Rpb25FbGVtZW50IiwiY29uc29sZSIsImVycm9yIiwiaGVhZGVyT2Zmc2V0Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsInNwYWNlQmV0d2VlbiIsImVmZmVjdCIsIm5hdmlnYXRpb24iLCJtb2R1bGVzIiwiYXV0b3BsYXkiLCJkZWxheSIsInNyYyIsIm9iamVjdEZpdCIsImxheW91dCIsImFsdCIsImlkIiwibmF2Iiwib25Td2lwZXIiLCJzd2lwZXIiLCJzbGlkZXNQZXJWaWV3IiwiZnJlZU1vZGUiLCJicmVha3BvaW50cyIsImluaXRpYWxTbGlkZSIsIm1hcCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Activities/Activities.tsx\n"));

/***/ })

});