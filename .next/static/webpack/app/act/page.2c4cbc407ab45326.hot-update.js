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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Navbar_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Navbar/Header/Header */ \"(app-pages-browser)/./Components/Navbar/Header/Header.tsx\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/effect-fade */ \"(app-pages-browser)/./node_modules/swiper/modules/effect-fade.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/navigation */ \"(app-pages-browser)/./node_modules/swiper/modules/navigation.css\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/modules */ \"(app-pages-browser)/./node_modules/swiper/modules/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// Import Swiper styles\n\n\n\n\n\nconst NavLinks = [\n    {\n        href: \"#overview\",\n        label: \"Overview\",\n        icon: \"/food/searching.png\"\n    },\n    {\n        href: \"#travel\",\n        label: \"Tour\",\n        icon: \"/food/travel.png\"\n    },\n    {\n        href: \"#attraction\",\n        label: \"Attraction\",\n        icon: \"/food/attract.png\"\n    },\n    {\n        href: \"#activities\",\n        label: \"Activities\",\n        icon: \"/food/act.png\"\n    },\n    {\n        href: \"#food\",\n        label: \"Food\",\n        icon: \"/food/food.png\"\n    },\n    {\n        href: \"#stays\",\n        label: \"Stays\",\n        icon: \"/food/hotel.png\"\n    },\n    {\n        href: \"#shopping\",\n        label: \"Shopping\",\n        icon: \"/food/shop.png\"\n    },\n    {\n        href: \"#culture\",\n        label: \"Culture\",\n        icon: \"/food/culture.png\"\n    },\n    {\n        href: \"#religioussites\",\n        label: \"Religious Sites\",\n        icon: \"/food/religious.png\"\n    },\n    {\n        href: \"#camping\",\n        label: \"Camping\",\n        icon: \"/food/camp.png\"\n    },\n    {\n        href: \"#blogs\",\n        label: \"Blogs\",\n        icon: \"/food/blog.png\"\n    }\n];\nconst Activities = ()=>{\n    _s();\n    const [activeSection, setActiveSection] = useState(\"overview\");\n    const swiperRef = useRef(null);\n    const checkActiveSection = ()=>{\n        const offset = 170; // Height of your fixed header or any other offset\n        const currentScrollPosition = window.pageYOffset + offset;\n        let currentSection = \"overview\"; // Default to the first section\n        NavLinks.forEach((link, index)=>{\n            const sectionId = link.href.substring(1); // Adjusted to remove '#' from sectionId\n            const section = document.getElementById(sectionId);\n            if (section && currentScrollPosition >= section.offsetTop && currentScrollPosition < section.offsetTop + section.offsetHeight) {\n                currentSection = sectionId;\n                setActiveSection(currentSection);\n                if (swiperRef.current) {\n                    swiperRef.current.slideTo(index); // Use 'any' or a more specific type if known\n                }\n            }\n        });\n    };\n    const handleNavLinkClick = (e, sectionId)=>{\n        e.preventDefault(); // Prevent the default link behavior\n        const sectionElement = document.getElementById(sectionId.substring(1)); // Adjusted to remove '#' from sectionId\n        if (!sectionElement) {\n            console.error(\"Element with ID '\".concat(sectionId, \"' not found.\"));\n            return;\n        }\n        const offsetTop = sectionElement.offsetTop;\n        const headerOffset = 150; // Adjust this value based on your actual header's height\n        window.scrollTo({\n            top: offsetTop - headerOffset,\n            behavior: \"smooth\"\n        });\n        // Manually update the URL hash\n        window.history.pushState({}, \"\", sectionId);\n    };\n    useEffect(()=>{\n        window.addEventListener(\"scroll\", checkActiveSection);\n        return ()=>{\n            window.removeEventListener(\"scroll\", checkActiveSection);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar_Header_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-500 text-center md:text-7xl text-5xl z-10 font-bold\",\n                children: \"Common Name\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n                spaceBetween: 30,\n                effect: \"fade\",\n                navigation: false,\n                modules: [\n                    swiper_modules__WEBPACK_IMPORTED_MODULE_7__.EffectFade,\n                    swiper_modules__WEBPACK_IMPORTED_MODULE_7__.Autoplay\n                ],\n                autoplay: {\n                    delay: 1500\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative h-[400px] w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                src: \"/dest/bhadra.jpg\",\n                                className: \"\",\n                                objectFit: \"cover\",\n                                layout: \"fill\",\n                                alt: \"bhardra\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative h-[400px] w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                src: \"/dest/devi.jpg\",\n                                className: \"\",\n                                objectFit: \"cover\",\n                                layout: \"fill\",\n                                alt: \"bhardra\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative h-[400px] w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                src: \"/dest/drum.jpg\",\n                                className: \"\",\n                                objectFit: \"cover\",\n                                layout: \"fill\",\n                                alt: \"bhardra\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative h-[400px] w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {\n                                src: \"/dest/hebbe.jpg\",\n                                className: \"\",\n                                objectFit: \"cover\",\n                                layout: \"fill\",\n                                alt: \"bhardra\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 9\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"top-bar\",\n                className: \"sticky top-[60px] z-30 bg-black bg-opacity-100 border-b-2 border-gray-700\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"flex justify-center items-center space-x-4 md:py-4 py-2 md:px-5 px-2 w-full text-white\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n                        onSwiper: (swiper)=>{\n                            swiperRef.current = swiper;\n                        },\n                        modules: [\n                            FreeMode\n                        ],\n                        spaceBetween: 0,\n                        slidesPerView: 3.5,\n                        freeMode: true,\n                        breakpoints: {\n                            // when window width is >= 640px\n                            500: {\n                                slidesPerView: 5,\n                                initialSlide: 0\n                            },\n                            1000: {\n                                slidesPerView: 10,\n                                initialSlide: 0\n                            },\n                            1300: {\n                                slidesPerView: 11,\n                                initialSlide: 0,\n                                spaceBetween: 10\n                            }\n                        },\n                        children: NavLinks.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                                    href: link.href,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: (e)=>handleNavLinkClick(e, link.href),\n                                        className: \"flex flex-col md:flex-row  items-center justify-center md:text-sm text-base space-x-2 transition duration-150 cursor-pointer md:pb-1 \".concat(activeSection === link.href.substring(1) ? \"border-b-2 border-yellow-500\" : \"\"),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: link.icon,\n                                                alt: link.label,\n                                                className: \"md:w-5 md:h-5 w-8 h-8 md:mr-2\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                                                lineNumber: 140,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            link.label\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                                        lineNumber: 138,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                                    lineNumber: 137,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                                lineNumber: 136,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\Documents\\\\BPUF\\\\dino-main\\\\Components\\\\Activities\\\\Activities.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Activities, \"e7r4fSsQLvt7rkx/JRiXxjJpbp8=\");\n_c = Activities;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Activities);\nvar _c;\n$RefreshReg$(_c, \"Activities\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL0NvbXBvbmVudHMvQWN0aXZpdGllcy9BY3Rpdml0aWVzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUN5QjtBQUNtQjtBQUNPO0FBRW5ELHVCQUF1QjtBQUNIO0FBQ1k7QUFDRDtBQUN1QjtBQUN2QjtBQUUvQixNQUFNTyxXQUFXO0lBQ2I7UUFBRUMsTUFBTTtRQUFhQyxPQUFPO1FBQVlDLE1BQU07SUFBc0I7SUFDcEU7UUFBRUYsTUFBTTtRQUFXQyxPQUFPO1FBQVFDLE1BQU07SUFBbUI7SUFDM0Q7UUFBRUYsTUFBTTtRQUFlQyxPQUFPO1FBQWNDLE1BQU07SUFBb0I7SUFDdEU7UUFBRUYsTUFBTTtRQUFlQyxPQUFPO1FBQWNDLE1BQU07SUFBZ0I7SUFDbEU7UUFBRUYsTUFBTTtRQUFTQyxPQUFPO1FBQVFDLE1BQU07SUFBaUI7SUFDdkQ7UUFBRUYsTUFBTTtRQUFVQyxPQUFPO1FBQVNDLE1BQU07SUFBa0I7SUFDMUQ7UUFBRUYsTUFBTTtRQUFhQyxPQUFPO1FBQVlDLE1BQU07SUFBaUI7SUFDL0Q7UUFBRUYsTUFBTTtRQUFZQyxPQUFPO1FBQVdDLE1BQU07SUFBb0I7SUFDaEU7UUFBRUYsTUFBTTtRQUFtQkMsT0FBTztRQUFtQkMsTUFBTTtJQUFzQjtJQUNqRjtRQUFFRixNQUFNO1FBQVlDLE9BQU87UUFBV0MsTUFBTTtJQUFpQjtJQUM3RDtRQUFFRixNQUFNO1FBQVVDLE9BQU87UUFBU0MsTUFBTTtJQUFpQjtDQUMxRDtBQUNILE1BQU1DLGFBQWE7O0lBQ2YsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR0MsU0FBUztJQUNuRCxNQUFNQyxZQUFZQyxPQUEwQjtJQUM1QyxNQUFNQyxxQkFBcUI7UUFDdkIsTUFBTUMsU0FBUyxLQUFLLGtEQUFrRDtRQUN0RSxNQUFNQyx3QkFBd0JDLE9BQU9DLFdBQVcsR0FBR0g7UUFDbkQsSUFBSUksaUJBQWlCLFlBQVksK0JBQStCO1FBRWhFZixTQUFTZ0IsT0FBTyxD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O3dCQUNuQmQsY0FBYzt3QkFDZGUsZUFBZTt3QkFDZkMsVUFBVTt3QkFDVkMsYUFBYTs0QkFDWCxnQ0FBZ0M7NEJBQ2hDLEtBQUs7Z0NBQ0RGLGVBQWU7Z0NBQ2ZHLGNBQWM7NEJBQ2hCOzRCQUNGLE1BQU07Z0NBQ0pILGVBQWU7Z0NBQ2ZHLGNBQWM7NEJBQ2hCOzRCQUNBLE1BQUs7Z0NBQ0RILGVBQWU7Z0NBQ2ZHLGNBQWM7Z0NBQ2RsQixjQUFjOzRCQUNsQjt3QkFDRjtrQ0FFQzdDLFNBQVNnRSxHQUFHLENBQUMsQ0FBQy9DLE1BQU1DLHNCQUNuQiw4REFBQ3RCLHFEQUFXQTswQ0FDViw0RUFBQ3FFO29DQUFLaEUsTUFBTWdCLEtBQUtoQixJQUFJOzhDQUNuQiw0RUFBQzBDO3dDQUFJdUIsU0FBUyxDQUFDckMsSUFBTUQsbUJBQW1CQyxHQUFHWixLQUFLaEIsSUFBSTt3Q0FDbEQyQyxXQUFXLHdJQUF1TixPQUEvRXZDLGtCQUFrQlksS0FBS2hCLElBQUksQ0FBQ21CLFNBQVMsQ0FBQyxLQUFLLGlDQUFpQzs7MERBQy9OLDhEQUFDK0M7Z0RBQUloQixLQUFLbEMsS0FBS2QsSUFBSTtnREFBRW1ELEtBQUtyQyxLQUFLZixLQUFLO2dEQUFFMEMsV0FBVTs7Ozs7OzRDQUMvQzNCLEtBQUtmLEtBQUs7Ozs7Ozs7Ozs7OzsrQkFMQ2dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWU5QjtHQTdITWQ7S0FBQUE7QUErSE4sK0RBQWVBLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9BY3Rpdml0aWVzL0FjdGl2aXRpZXMudHN4Pzc3OTIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9OYXZiYXIvSGVhZGVyL0hlYWRlcidcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCc7XHJcblxyXG4vLyBJbXBvcnQgU3dpcGVyIHN0eWxlc1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MvZWZmZWN0LWZhZGUnO1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MvbmF2aWdhdGlvbic7XHJcbmltcG9ydCB7IEF1dG9wbGF5LCBFZmZlY3RGYWRlIH0gZnJvbSAnc3dpcGVyL21vZHVsZXMnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5jb25zdCBOYXZMaW5rcyA9IFtcclxuICAgIHsgaHJlZjogJyNvdmVydmlldycsIGxhYmVsOiAnT3ZlcnZpZXcnLCBpY29uOiAnL2Zvb2Qvc2VhcmNoaW5nLnBuZycgfSxcclxuICAgIHsgaHJlZjogJyN0cmF2ZWwnLCBsYWJlbDogJ1RvdXInLCBpY29uOiAnL2Zvb2QvdHJhdmVsLnBuZycgfSxcclxuICAgIHsgaHJlZjogJyNhdHRyYWN0aW9uJywgbGFiZWw6ICdBdHRyYWN0aW9uJywgaWNvbjogJy9mb29kL2F0dHJhY3QucG5nJyB9LFxyXG4gICAgeyBocmVmOiAnI2FjdGl2aXRpZXMnLCBsYWJlbDogJ0FjdGl2aXRpZXMnLCBpY29uOiAnL2Zvb2QvYWN0LnBuZycgfSxcclxuICAgIHsgaHJlZjogJyNmb29kJywgbGFiZWw6ICdGb29kJywgaWNvbjogJy9mb29kL2Zvb2QucG5nJyB9LFxyXG4gICAgeyBocmVmOiAnI3N0YXlzJywgbGFiZWw6ICdTdGF5cycsIGljb246ICcvZm9vZC9ob3RlbC5wbmcnIH0sXHJcbiAgICB7IGhyZWY6ICcjc2hvcHBpbmcnLCBsYWJlbDogJ1Nob3BwaW5nJywgaWNvbjogJy9mb29kL3Nob3AucG5nJyB9LFxyXG4gICAgeyBocmVmOiAnI2N1bHR1cmUnLCBsYWJlbDogJ0N1bHR1cmUnLCBpY29uOiAnL2Zvb2QvY3VsdHVyZS5wbmcnIH0sXHJcbiAgICB7IGhyZWY6ICcjcmVsaWdpb3Vzc2l0ZXMnLCBsYWJlbDogJ1JlbGlnaW91cyBTaXRlcycsIGljb246ICcvZm9vZC9yZWxpZ2lvdXMucG5nJyB9LFxyXG4gICAgeyBocmVmOiAnI2NhbXBpbmcnLCBsYWJlbDogJ0NhbXBpbmcnLCBpY29uOiAnL2Zvb2QvY2FtcC5wbmcnIH0sXHJcbiAgICB7IGhyZWY6ICcjYmxvZ3MnLCBsYWJlbDogJ0Jsb2dzJywgaWNvbjogJy9mb29kL2Jsb2cucG5nJyB9LFxyXG4gIF07XHJcbmNvbnN0IEFjdGl2aXRpZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbYWN0aXZlU2VjdGlvbiwgc2V0QWN0aXZlU2VjdGlvbl0gPSB1c2VTdGF0ZSgnb3ZlcnZpZXcnKTtcclxuICAgIGNvbnN0IHN3aXBlclJlZiA9IHVzZVJlZjxTd2lwZXJDb3JlIHwgbnVsbD4obnVsbCk7XHJcbiAgICBjb25zdCBjaGVja0FjdGl2ZVNlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gMTcwOyAvLyBIZWlnaHQgb2YgeW91ciBmaXhlZCBoZWFkZXIgb3IgYW55IG90aGVyIG9mZnNldFxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldCArIG9mZnNldDtcclxuICAgICAgICBsZXQgY3VycmVudFNlY3Rpb24gPSAnb3ZlcnZpZXcnOyAvLyBEZWZhdWx0IHRvIHRoZSBmaXJzdCBzZWN0aW9uXHJcbiAgICAgICAgXHJcbiAgICAgICAgTmF2TGlua3MuZm9yRWFjaCgobGluaywgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHNlY3Rpb25JZCA9IGxpbmsuaHJlZi5zdWJzdHJpbmcoMSk7IC8vIEFkanVzdGVkIHRvIHJlbW92ZSAnIycgZnJvbSBzZWN0aW9uSWRcclxuICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWN0aW9uSWQpO1xyXG4gICAgICAgICAgaWYgKHNlY3Rpb24gJiYgY3VycmVudFNjcm9sbFBvc2l0aW9uID49IHNlY3Rpb24ub2Zmc2V0VG9wICYmIGN1cnJlbnRTY3JvbGxQb3NpdGlvbiA8IHNlY3Rpb24ub2Zmc2V0VG9wICsgc2VjdGlvbi5vZmZzZXRIZWlnaHQpIHtcclxuICAgICAgICAgICAgY3VycmVudFNlY3Rpb24gPSBzZWN0aW9uSWQ7XHJcbiAgICAgICAgICAgIHNldEFjdGl2ZVNlY3Rpb24oY3VycmVudFNlY3Rpb24pO1xyXG4gICAgICAgICAgICBpZiAoc3dpcGVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIChzd2lwZXJSZWYuY3VycmVudCBhcyBhbnkpLnNsaWRlVG8oaW5kZXgpOyAvLyBVc2UgJ2FueScgb3IgYSBtb3JlIHNwZWNpZmljIHR5cGUgaWYga25vd25cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBoYW5kbGVOYXZMaW5rQ2xpY2sgPSAoZTogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4sIHNlY3Rpb25JZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGxpbmsgYmVoYXZpb3JcclxuICAgICAgICBjb25zdCBzZWN0aW9uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb25JZC5zdWJzdHJpbmcoMSkpOyAvLyBBZGp1c3RlZCB0byByZW1vdmUgJyMnIGZyb20gc2VjdGlvbklkXHJcbiAgICAgICAgaWYgKCFzZWN0aW9uRWxlbWVudCkge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRWxlbWVudCB3aXRoIElEICcke3NlY3Rpb25JZH0nIG5vdCBmb3VuZC5gKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0VG9wID0gc2VjdGlvbkVsZW1lbnQub2Zmc2V0VG9wO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlck9mZnNldCA9IDE1MDsgLy8gQWRqdXN0IHRoaXMgdmFsdWUgYmFzZWQgb24geW91ciBhY3R1YWwgaGVhZGVyJ3MgaGVpZ2h0XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgIHRvcDogb2Zmc2V0VG9wIC0gaGVhZGVyT2Zmc2V0LFxyXG4gICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgLy8gTWFudWFsbHkgdXBkYXRlIHRoZSBVUkwgaGFzaFxyXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHNlY3Rpb25JZCk7XHJcbiAgICAgIH07XHJcbiAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tBY3RpdmVTZWN0aW9uKTtcclxuICBcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tBY3RpdmVTZWN0aW9uKTtcclxuICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzMgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB0ZXh0LXllbGxvdy01MDAgdGV4dC1jZW50ZXIgbWQ6dGV4dC03eGwgdGV4dC01eGwgei0xMCBmb250LWJvbGRcIj5cclxuICAgIENvbW1vbiBOYW1lXHJcbiAgPC9kaXY+XHJcbiAgICAgIDxTd2lwZXJcclxuICAgICAgICBzcGFjZUJldHdlZW49ezMwfVxyXG4gICAgICAgIGVmZmVjdD17J2ZhZGUnfVxyXG4gICAgICAgIG5hdmlnYXRpb249e2ZhbHNlfVxyXG4gICAgICAgIG1vZHVsZXM9e1tFZmZlY3RGYWRlLEF1dG9wbGF5XX1cclxuICAgICAgICBhdXRvcGxheT17e1xyXG4gICAgICAgICAgICBkZWxheTogMTUwMCxcclxuICAgICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBoLVs0MDBweF0gdy1mdWxsJz5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9kZXN0L2JoYWRyYS5qcGdcIiBjbGFzc05hbWU9Jycgb2JqZWN0Rml0PSdjb3ZlcicgbGF5b3V0PSdmaWxsJyBhbHQ9J2JoYXJkcmEnIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgPFN3aXBlclNsaWRlPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBoLVs0MDBweF0gdy1mdWxsJz5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9kZXN0L2RldmkuanBnXCIgY2xhc3NOYW1lPScnIG9iamVjdEZpdD0nY292ZXInIGxheW91dD0nZmlsbCcgYWx0PSdiaGFyZHJhJyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgIDxTd2lwZXJTbGlkZT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgaC1bNDAwcHhdIHctZnVsbCc+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvZGVzdC9kcnVtLmpwZ1wiIGNsYXNzTmFtZT0nJyBvYmplY3RGaXQ9J2NvdmVyJyBsYXlvdXQ9J2ZpbGwnIGFsdD0nYmhhcmRyYScgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGgtWzQwMHB4XSB3LWZ1bGwnPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Rlc3QvaGViYmUuanBnXCIgY2xhc3NOYW1lPScnIG9iamVjdEZpdD0nY292ZXInIGxheW91dD0nZmlsbCcgYWx0PSdiaGFyZHJhJyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICA8L1N3aXBlcj5cclxuICAgICAgPGRpdiBpZD1cInRvcC1iYXJcIiBjbGFzc05hbWU9XCJzdGlja3kgdG9wLVs2MHB4XSB6LTMwIGJnLWJsYWNrIGJnLW9wYWNpdHktMTAwIGJvcmRlci1iLTIgYm9yZGVyLWdyYXktNzAwXCI+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc3BhY2UteC00IG1kOnB5LTQgcHktMiBtZDpweC01IHB4LTIgdy1mdWxsIHRleHQtd2hpdGVcIj5cclxuICAgICAgICA8U3dpcGVyXHJcbiAgICAgICAgb25Td2lwZXI9eyhzd2lwZXIpID0+IHtcclxuICAgICAgICAgICAgc3dpcGVyUmVmLmN1cnJlbnQgPSBzd2lwZXI7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgbW9kdWxlcz17W0ZyZWVNb2RlXX1cclxuICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MH1cclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezMuNX0gLy8gRGVmYXVsdCB0byAzIGZvciBtb2JpbGVcclxuICAgICAgICAgIGZyZWVNb2RlPXt0cnVlfVxyXG4gICAgICAgICAgYnJlYWtwb2ludHM9e3tcclxuICAgICAgICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNjQwcHhcclxuICAgICAgICAgICAgNTAwOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA1LFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiAwXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTAwMDoge1xyXG4gICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEwLFxyXG4gICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMzAwOntcclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDExLFxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiAwLFxyXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtOYXZMaW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtsaW5rLmhyZWZ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlTmF2TGlua0NsaWNrKGUsIGxpbmsuaHJlZil9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtZDp0ZXh0LXNtIHRleHQtYmFzZSBzcGFjZS14LTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgY3Vyc29yLXBvaW50ZXIgbWQ6cGItMSAke2FjdGl2ZVNlY3Rpb24gPT09IGxpbmsuaHJlZi5zdWJzdHJpbmcoMSkgPyAnYm9yZGVyLWItMiBib3JkZXIteWVsbG93LTUwMCcgOiAnJ31gfT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xpbmsuaWNvbn0gYWx0PXtsaW5rLmxhYmVsfSBjbGFzc05hbWU9XCJtZDp3LTUgbWQ6aC01IHctOCBoLTggbWQ6bXItMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjdGl2aXRpZXNcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZGVyIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJBdXRvcGxheSIsIkVmZmVjdEZhZGUiLCJJbWFnZSIsIk5hdkxpbmtzIiwiaHJlZiIsImxhYmVsIiwiaWNvbiIsIkFjdGl2aXRpZXMiLCJhY3RpdmVTZWN0aW9uIiwic2V0QWN0aXZlU2VjdGlvbiIsInVzZVN0YXRlIiwic3dpcGVyUmVmIiwidXNlUmVmIiwiY2hlY2tBY3RpdmVTZWN0aW9uIiwib2Zmc2V0IiwiY3VycmVudFNjcm9sbFBvc2l0aW9uIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJjdXJyZW50U2VjdGlvbiIsImZvckVhY2giLCJsaW5rIiwiaW5kZXgiLCJzZWN0aW9uSWQiLCJzdWJzdHJpbmciLCJzZWN0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCIsImN1cnJlbnQiLCJzbGlkZVRvIiwiaGFuZGxlTmF2TGlua0NsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VjdGlvbkVsZW1lbnQiLCJjb25zb2xlIiwiZXJyb3IiLCJoZWFkZXJPZmZzZXQiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhY2VCZXR3ZWVuIiwiZWZmZWN0IiwibmF2aWdhdGlvbiIsIm1vZHVsZXMiLCJhdXRvcGxheSIsImRlbGF5Iiwic3JjIiwib2JqZWN0Rml0IiwibGF5b3V0IiwiYWx0IiwiaWQiLCJuYXYiLCJvblN3aXBlciIsInN3aXBlciIsIkZyZWVNb2RlIiwic2xpZGVzUGVyVmlldyIsImZyZWVNb2RlIiwiYnJlYWtwb2ludHMiLCJpbml0aWFsU2xpZGUiLCJtYXAiLCJMaW5rIiwib25DbGljayIsImltZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Components/Activities/Activities.tsx\n"));

/***/ })

});