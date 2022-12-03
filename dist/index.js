/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  background-color:hsla(120,100%,50%,1);\r\n  background-image:\r\n  radial-gradient(at 81% 100%, hsla(158,100%,93%,1) 0px, transparent 50%),\r\n  radial-gradient(at 43% 0%, hsla(187,100%,74%,1) 0px, transparent 50%),\r\n  radial-gradient(at 100% 0%, hsla(146,100%,50%,0.92) 0px, transparent 50%),\r\n  radial-gradient(at 21% 41%, hsla(154,100%,93%,1) 0px, transparent 50%),\r\n  radial-gradient(at 74% 35%, hsla(139,100%,76%,1) 0px, transparent 50%),\r\n  radial-gradient(at 0% 100%, hsla(311,100%,93%,1) 0px, transparent 50%),\r\n  radial-gradient(at 0% 0%, hsla(142,100%,76%,1) 0px, transparent 50%);\r\n  color: rgba(0, 0, 0, 0.7);\r\n  font-size: 1.6rem;\r\n  line-height: 1.6;\r\n  letter-spacing: 0.04rem;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #000000;\r\n  color: #fff;\r\n}\r\n\r\n.logo span {\r\n  font-size: 3rem;\r\n  font-weight: 700;\r\n  line-height: 1.7;\r\n  color: #fff;\r\n  margin-inline: 2rem;\r\n}\r\n\r\n.menunav {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.menunav li {\r\n  list-style: none;\r\n  margin: 2rem;\r\n}\r\n\r\n.menunav li a {\r\n  text-decoration: none;\r\n  font-size: 2rem;\r\n  color: #fff;\r\n}\r\n\r\n.cardBg {\r\n  display: none;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: fixed;\r\n  top: 0;\r\n  background-color: rgb(0, 0, 0, 0.5);\r\n  width: 100%;\r\n  height: 100vh;\r\n  z-index: 100;\r\n}\r\n\r\n.popUpCard {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #000000;\r\n  width: 50rem;\r\n  height: 90%;\r\n  border: 2px solid rgb(255, 255, 255);\r\n  border-radius: 1rem;\r\n  padding: 2rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.closeButton {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-self: flex-end;\r\n  position: fixed;\r\n  width: 2.5rem;\r\n  height: 2.5rem;\r\n  border-radius: 5px;\r\n  border: none;\r\n  font-size: 1.6rem;\r\n  color: white;\r\n  background-color: #3fc979;\r\n}\r\n\r\n.cardDiscription {\r\n  padding: 0 1.5rem;\r\n  font-size: 1.6rem;\r\n  line-height: 2.2rem;\r\n  text-align: center;\r\n}\r\n\r\n.numberComments {\r\n  margin-top: 2rem;\r\n  margin-bottom: 1rem;\r\n  font-size: 2.2rem;\r\n}\r\n\r\n.comment {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.comment-el {\r\n  display: flex;\r\n  flex-direction: row;\r\n  font-size: 1.4rem;\r\n  gap: 1rem;\r\n  border: 1px solid green;\r\n  border-radius: 5px;\r\n  padding: 0.5rem;\r\n  background-color: rgb(0, 0, 0, 0.1);\r\n  width: 80%;\r\n  line-height: 1.6rem;\r\n  margin: 0 auto 1rem auto;\r\n}\r\n\r\n.leaveComment {\r\n  margin-top: 2rem;\r\n  margin-bottom: 1rem;\r\n  font-size: 2.2rem;\r\n}\r\n\r\n.cmtInput {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5rem;\r\n  width: 100%;\r\n}\r\n\r\n.cmtInput input {\r\n  margin: 0 auto;\r\n  width: 60%;\r\n  height: 3rem;\r\n  padding: 1rem;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  border: 1px solid green;\r\n  font-weight: 300;\r\n  background: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.cmtInput input::placeholder {\r\n  font-style: oblique;\r\n}\r\n\r\n.cmtInput textarea {\r\n  margin: 0 auto;\r\n  width: 60%;\r\n  height: 10rem;\r\n  padding: 1rem;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  border: 1px solid green;\r\n  resize: none;\r\n  font-weight: 300;\r\n  background: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.cmtInput textarea::placeholder {\r\n  font-style: oblique;\r\n}\r\n\r\n.commentButton {\r\n  margin: 0 auto 1rem auto;\r\n  width: 25%;\r\n  height: 3.5rem;\r\n  border: 1px solid green;\r\n  padding: 0.5rem;\r\n  border-radius: 0.5rem;\r\n  background: rgba(255, 255, 255, 0.8);\r\n  cursor: pointer;\r\n}\r\n\r\n.commentButton:hover {\r\n  font-size: 1.4rem;\r\n  border: 2px solid green;\r\n  width: 26%;\r\n  height: 3.9rem;\r\n}\r\n\r\n.dateOfComment {\r\n  min-width: 8rem;\r\n}\r\n\r\n.message {\r\n  font-size: 1.4rem;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  background-color: rgb(0, 0, 0, 0.1);\r\n  width: 80%;\r\n}\r\n\r\n.cardImg {\r\n  margin: 2rem auto;\r\n}\r\n\r\n.item-number {\r\n  width: 100px;\r\n  height: 100px;\r\n  padding: 0.3rem 0.5rem;\r\n  background-color: #fff;\r\n  color: #000000;\r\n  font-size: 1.2rem;\r\n  border-radius: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  position: fixed;\r\n  bottom: 0;\r\n  text-align: center;\r\n  height: 5rem;\r\n  font-size: 2rem;\r\n  width: 100%;\r\n  background-color: #000000;\r\n  color: white;\r\n}\r\n\r\nsection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 2% 3rem;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.meal-title-section {\r\n  font-size: 2rem;\r\n  color: rgba(0, 0, 0, 0.7);\r\n  font-weight: 600;\r\n  text-align: center;\r\n  padding: 3rem 0 1rem 0;\r\n}\r\n\r\n#meals-container {\r\n  display: grid;\r\n  margin: 2rem 0 8rem 0;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 3rem;\r\n}\r\n\r\n.meal-card {\r\n    background-color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 36rem;\r\n  align-items: center;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.79);\r\n  padding: 3rem;\r\n  transition: 0.4s ease-in;\r\n}\r\n\r\n.meal-card:hover {\r\n  transform: translateY(-20px);\r\n}\r\n\r\n.meal-title-name {\r\n  display: flex;\r\n}\r\n\r\n.meal-title {\r\n  margin: 3rem;\r\n}\r\n\r\n.love-icon {\r\n  font-size: 2.5rem;\r\n  background-color: #000000;\r\n  color: #3fc979;\r\n  width: 50px;\r\n  height: 50px;\r\n  padding: 0.4rem 0.7rem;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  box-shadow: 0 4px 21px -12px #3fc979;\r\n}\r\n\r\n.love-icon:hover {\r\n  background-color: #fff;\r\n  color: #3fc979;\r\n}\r\n\r\n.love-icon:active {\r\n  background-color: #3fc979;\r\n  color: white;\r\n}\r\n\r\n.likes-display {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n#comment-button {\r\n  background-color: #000000;\r\n  color: #3fc979;\r\n  padding: 1.5rem 2rem;\r\n  font-size: 1.5rem;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  transition: 0.4s ease-in;\r\n  outline: 0;\r\n  border: 0;\r\n}\r\n\r\n#comment-button:hover {\r\n  background-color: transparent;\r\n  color: #000;\r\n  border: 1px solid #3fc979;\r\n}\r\n\r\n@media screen and (max-width: 1250px) {\r\n  #meals-container {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  div {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .popUpCard {\r\n    width: 45rem;\r\n  }\r\n\r\n  .commentButton {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .commentButton:hover {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  .cardTitle {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .numberComments {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .leaveComment {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .message {\r\n    font-size: 1.2rem;\r\n    padding: 0 3rem;\r\n  }\r\n\r\n  .cardImg {\r\n    width: 70%;\r\n  }\r\n\r\n  .dateOfComment {\r\n    font-size: 1rem;\r\n    min-width: 6rem;\r\n  }\r\n\r\n  .nameOfCommenter {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .commentContent {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  #meals-container {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  footer {\r\n    font-size: 1.4rem;\r\n    padding: 0 7rem;\r\n  }\r\n\r\n  .menunav li:nth-of-type(2) {\r\n    display: none;\r\n  }\r\n\r\n  .menunav li:nth-of-type(3) {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  .popUpCard {\r\n    width: 90%;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,kCAAkC;AACpC;;AAEA;EACE,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,qCAAqC;EACrC;;;;;;;sEAOoE;EACpE,yBAAyB;EACzB,iBAAiB;EACjB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,MAAM;EACN,mCAAmC;EACnC,WAAW;EACX,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,oCAAoC;EACpC,mBAAmB;EACnB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;EACpB,eAAe;EACf,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,SAAS;EACT,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,mCAAmC;EACnC,UAAU;EACV,mBAAmB;EACnB,wBAAwB;AAC1B;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,WAAW;AACb;;AAEA;EACE,cAAc;EACd,UAAU;EACV,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB,oCAAoC;AACtC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,UAAU;EACV,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,gBAAgB;EAChB,oCAAoC;AACtC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;EACxB,UAAU;EACV,cAAc;EACd,uBAAuB;EACvB,eAAe;EACf,qBAAqB;EACrB,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,mCAAmC;EACnC,UAAU;AACZ;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,sBAAsB;EACtB,cAAc;EACd,iBAAiB;EACjB,mBAAmB;EACnB,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,eAAe;EACf,SAAS;EACT,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,WAAW;EACX,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,qCAAqC;EACrC,SAAS;AACX;;AAEA;IACI,sBAAsB;EACxB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;EACnB,gDAAgD;EAChD,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,cAAc;EACd,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,kBAAkB;EAClB,oCAAoC;AACtC;;AAEA;EACE,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,oBAAoB;EACpB,iBAAiB;EACjB,mBAAmB;EACnB,wCAAwC;EACxC,qBAAqB;EACrB,eAAe;EACf,wBAAwB;EACxB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,6BAA6B;EAC7B,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE;IACE,8BAA8B;EAChC;;EAEA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,YAAY;EACd;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;IACjB,eAAe;EACjB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,eAAe;IACf,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,iBAAiB;IACjB,eAAe;EACjB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,UAAU;EACZ;AACF","sourcesContent":["*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  background-color:hsla(120,100%,50%,1);\r\n  background-image:\r\n  radial-gradient(at 81% 100%, hsla(158,100%,93%,1) 0px, transparent 50%),\r\n  radial-gradient(at 43% 0%, hsla(187,100%,74%,1) 0px, transparent 50%),\r\n  radial-gradient(at 100% 0%, hsla(146,100%,50%,0.92) 0px, transparent 50%),\r\n  radial-gradient(at 21% 41%, hsla(154,100%,93%,1) 0px, transparent 50%),\r\n  radial-gradient(at 74% 35%, hsla(139,100%,76%,1) 0px, transparent 50%),\r\n  radial-gradient(at 0% 100%, hsla(311,100%,93%,1) 0px, transparent 50%),\r\n  radial-gradient(at 0% 0%, hsla(142,100%,76%,1) 0px, transparent 50%);\r\n  color: rgba(0, 0, 0, 0.7);\r\n  font-size: 1.6rem;\r\n  line-height: 1.6;\r\n  letter-spacing: 0.04rem;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #000000;\r\n  color: #fff;\r\n}\r\n\r\n.logo span {\r\n  font-size: 3rem;\r\n  font-weight: 700;\r\n  line-height: 1.7;\r\n  color: #fff;\r\n  margin-inline: 2rem;\r\n}\r\n\r\n.menunav {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.menunav li {\r\n  list-style: none;\r\n  margin: 2rem;\r\n}\r\n\r\n.menunav li a {\r\n  text-decoration: none;\r\n  font-size: 2rem;\r\n  color: #fff;\r\n}\r\n\r\n.cardBg {\r\n  display: none;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: fixed;\r\n  top: 0;\r\n  background-color: rgb(0, 0, 0, 0.5);\r\n  width: 100%;\r\n  height: 100vh;\r\n  z-index: 100;\r\n}\r\n\r\n.popUpCard {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #000000;\r\n  width: 50rem;\r\n  height: 90%;\r\n  border: 2px solid rgb(255, 255, 255);\r\n  border-radius: 1rem;\r\n  padding: 2rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.closeButton {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-self: flex-end;\r\n  position: fixed;\r\n  width: 2.5rem;\r\n  height: 2.5rem;\r\n  border-radius: 5px;\r\n  border: none;\r\n  font-size: 1.6rem;\r\n  color: white;\r\n  background-color: #3fc979;\r\n}\r\n\r\n.cardDiscription {\r\n  padding: 0 1.5rem;\r\n  font-size: 1.6rem;\r\n  line-height: 2.2rem;\r\n  text-align: center;\r\n}\r\n\r\n.numberComments {\r\n  margin-top: 2rem;\r\n  margin-bottom: 1rem;\r\n  font-size: 2.2rem;\r\n}\r\n\r\n.comment {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.comment-el {\r\n  display: flex;\r\n  flex-direction: row;\r\n  font-size: 1.4rem;\r\n  gap: 1rem;\r\n  border: 1px solid green;\r\n  border-radius: 5px;\r\n  padding: 0.5rem;\r\n  background-color: rgb(0, 0, 0, 0.1);\r\n  width: 80%;\r\n  line-height: 1.6rem;\r\n  margin: 0 auto 1rem auto;\r\n}\r\n\r\n.leaveComment {\r\n  margin-top: 2rem;\r\n  margin-bottom: 1rem;\r\n  font-size: 2.2rem;\r\n}\r\n\r\n.cmtInput {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5rem;\r\n  width: 100%;\r\n}\r\n\r\n.cmtInput input {\r\n  margin: 0 auto;\r\n  width: 60%;\r\n  height: 3rem;\r\n  padding: 1rem;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  border: 1px solid green;\r\n  font-weight: 300;\r\n  background: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.cmtInput input::placeholder {\r\n  font-style: oblique;\r\n}\r\n\r\n.cmtInput textarea {\r\n  margin: 0 auto;\r\n  width: 60%;\r\n  height: 10rem;\r\n  padding: 1rem;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  border: 1px solid green;\r\n  resize: none;\r\n  font-weight: 300;\r\n  background: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.cmtInput textarea::placeholder {\r\n  font-style: oblique;\r\n}\r\n\r\n.commentButton {\r\n  margin: 0 auto 1rem auto;\r\n  width: 25%;\r\n  height: 3.5rem;\r\n  border: 1px solid green;\r\n  padding: 0.5rem;\r\n  border-radius: 0.5rem;\r\n  background: rgba(255, 255, 255, 0.8);\r\n  cursor: pointer;\r\n}\r\n\r\n.commentButton:hover {\r\n  font-size: 1.4rem;\r\n  border: 2px solid green;\r\n  width: 26%;\r\n  height: 3.9rem;\r\n}\r\n\r\n.dateOfComment {\r\n  min-width: 8rem;\r\n}\r\n\r\n.message {\r\n  font-size: 1.4rem;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  background-color: rgb(0, 0, 0, 0.1);\r\n  width: 80%;\r\n}\r\n\r\n.cardImg {\r\n  margin: 2rem auto;\r\n}\r\n\r\n.item-number {\r\n  width: 100px;\r\n  height: 100px;\r\n  padding: 0.3rem 0.5rem;\r\n  background-color: #fff;\r\n  color: #000000;\r\n  font-size: 1.2rem;\r\n  border-radius: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  position: fixed;\r\n  bottom: 0;\r\n  text-align: center;\r\n  height: 5rem;\r\n  font-size: 2rem;\r\n  width: 100%;\r\n  background-color: #000000;\r\n  color: white;\r\n}\r\n\r\nsection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 2% 3rem;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.meal-title-section {\r\n  font-size: 2rem;\r\n  color: rgba(0, 0, 0, 0.7);\r\n  font-weight: 600;\r\n  text-align: center;\r\n  padding: 3rem 0 1rem 0;\r\n}\r\n\r\n#meals-container {\r\n  display: grid;\r\n  margin: 2rem 0 8rem 0;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 3rem;\r\n}\r\n\r\n.meal-card {\r\n    background-color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 36rem;\r\n  align-items: center;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.79);\r\n  padding: 3rem;\r\n  transition: 0.4s ease-in;\r\n}\r\n\r\n.meal-card:hover {\r\n  transform: translateY(-20px);\r\n}\r\n\r\n.meal-title-name {\r\n  display: flex;\r\n}\r\n\r\n.meal-title {\r\n  margin: 3rem;\r\n}\r\n\r\n.love-icon {\r\n  font-size: 2.5rem;\r\n  background-color: #000000;\r\n  color: #3fc979;\r\n  width: 50px;\r\n  height: 50px;\r\n  padding: 0.4rem 0.7rem;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  box-shadow: 0 4px 21px -12px #3fc979;\r\n}\r\n\r\n.love-icon:hover {\r\n  background-color: #fff;\r\n  color: #3fc979;\r\n}\r\n\r\n.love-icon:active {\r\n  background-color: #3fc979;\r\n  color: white;\r\n}\r\n\r\n.likes-display {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n#comment-button {\r\n  background-color: #000000;\r\n  color: #3fc979;\r\n  padding: 1.5rem 2rem;\r\n  font-size: 1.5rem;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  transition: 0.4s ease-in;\r\n  outline: 0;\r\n  border: 0;\r\n}\r\n\r\n#comment-button:hover {\r\n  background-color: transparent;\r\n  color: #000;\r\n  border: 1px solid #3fc979;\r\n}\r\n\r\n@media screen and (max-width: 1250px) {\r\n  #meals-container {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  div {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .popUpCard {\r\n    width: 45rem;\r\n  }\r\n\r\n  .commentButton {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .commentButton:hover {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  .cardTitle {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .numberComments {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .leaveComment {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .message {\r\n    font-size: 1.2rem;\r\n    padding: 0 3rem;\r\n  }\r\n\r\n  .cardImg {\r\n    width: 70%;\r\n  }\r\n\r\n  .dateOfComment {\r\n    font-size: 1rem;\r\n    min-width: 6rem;\r\n  }\r\n\r\n  .nameOfCommenter {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .commentContent {\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  #meals-container {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  footer {\r\n    font-size: 1.4rem;\r\n    padding: 0 7rem;\r\n  }\r\n\r\n  .menunav li:nth-of-type(2) {\r\n    display: none;\r\n  }\r\n\r\n  .menunav li:nth-of-type(3) {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  .popUpCard {\r\n    width: 90%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getdata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getdata.js */ "./src/modules/getdata.js");
/* harmony import */ var _displaymeals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displaymeals.js */ "./src/modules/displaymeals.js");
/* harmony import */ var _getLikesData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getLikesData.js */ "./src/modules/getLikesData.js");
/* harmony import */ var _dompopupcard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dompopupcard.js */ "./src/modules/dompopupcard.js");
// import relavent code





// create a display container by ID
const container = document.getElementById('meals-container');
// function to display the likes
const setHeartLikes = (heart, likes) => {
  const id = heart.closest('article').getAttribute('data-id');
  const item = likes.find((item) => item.item_id === id);
  heart.textContent = item.likes;
};

// click like function
const clickLikeHeart = (heart) => {
  const id = heart.closest('article').getAttribute('data-id');
  heart.addEventListener('click', async () => {
    await (0,_getLikesData_js__WEBPACK_IMPORTED_MODULE_2__.postLikeData)(id);
    const likes = await (0,_getLikesData_js__WEBPACK_IMPORTED_MODULE_2__.getLikeData)();
    const hearts = container.querySelectorAll('.likes-section');
    hearts.forEach((heart) => {
      setHeartLikes(heart, likes);
    });
  });
};

// get meal and like data
const getLists = async () => {
  const listMealMenus = await (0,_getdata_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const likes = await (0,_getLikesData_js__WEBPACK_IMPORTED_MODULE_2__.getLikeData)();

  listMealMenus.categories.forEach((meal) => {
    (0,_displaymeals_js__WEBPACK_IMPORTED_MODULE_1__["default"])(meal);
  });

  // create like icon in container
  const hearts = container.querySelectorAll('.likes-section');
  const loveIcon = container.querySelectorAll('.love-icon');

  hearts.forEach((heart) => {
    setHeartLikes(heart, likes);
  });

  loveIcon.forEach((heart) => {
    clickLikeHeart(heart);
  });

  // create comment button function
  const comment = document.querySelectorAll('.comment-Button');
  let itemIdCategory;
  if (comment !== null) {
    comment.forEach((buttonClick) => {
      buttonClick.addEventListener('click', (e) => {
        e.preventDefault();
        if (document.querySelector('.cardBg').style.display === '') {
          document.querySelector('.cardBg').style.display = 'flex';
        }
        itemIdCategory = e.currentTarget.closest('article').getAttribute('data-id');
        (0,_dompopupcard_js__WEBPACK_IMPORTED_MODULE_3__["default"])(itemIdCategory);
      });
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLists);


/***/ }),

/***/ "./src/modules/displaymeals.js":
/*!*************************************!*\
  !*** ./src/modules/displaymeals.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// create function to display meal list dynamically
const mealListDisplay = (meal) => {
  const container = document.getElementById('meals-container');
  const div = document.createElement('div');
  // div section for meal card and info
  div.setAttribute('data-id', meal.idCategory);
  div.innerHTML = `
  <div class="meal-card">
  <div class="img-of-meal"><img src="${meal.strCategoryThumb}" alt="meal img"></div>
  <div class="meal-title-name">
  <div class="meal-title"><h3>${meal.strCategory}</h3></div>
  <div class="likes-display"><i class="uil uil-heart love-icon"></i><p>Likes</p></div>
  </div>
  <button type="button" class="comment-Button" id="comment-button">Comment</button></div>`;

  container.appendChild(div);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealListDisplay);

/***/ }),

/***/ "./src/modules/dompopupcard.js":
/*!*************************************!*\
  !*** ./src/modules/dompopupcard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commentNumbers": () => (/* binding */ commentNumbers),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getdata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getdata.js */ "./src/modules/getdata.js");
/* harmony import */ var _submitComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submitComment.js */ "./src/modules/submitComment.js");
// import relavent code



// create function for pop up card
const popUpCardSection = document.querySelector('.cardBg');
const popUpCard = document.createElement('div');

// create function for to display comments in pop up card
const devComment = (comments) => {
  const commentSection = document.querySelector('.comment');

  // function to display comment info on the pop up card
  for (let i = 0; i < comments.length; i += 1) {
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment-el';

    const dateOfComment = document.createElement('p');
    dateOfComment.className = 'dateOfComment';
    dateOfComment.textContent = comments[i].creation_date;

    const nameOfCommenter = document.createElement('p');
    nameOfCommenter.className = 'nameOfCommenter';
    nameOfCommenter.textContent = `${comments[i].username}:`;

    const loremComment = document.createElement('p');
    loremComment.className = 'loremComment';
    loremComment.textContent = comments[i].comment;

    commentDiv.appendChild(dateOfComment);
    commentDiv.appendChild(nameOfCommenter);
    commentDiv.appendChild(loremComment);
    commentSection.appendChild(commentDiv);
  }
};

// create funtion for number of comments shown
const commentNumbers = (comments) => (comments.length ? comments.length : 0);

// display selected meal pop up card info
const displayMealItems = (mealItemSelected, comments) => {
  popUpCard.className = 'popUpCard';
  popUpCard.innerHTML = `
  <button class="closeButton">X</button>
  <img class="cardImg" src="${mealItemSelected.strCategoryThumb}" alt="mealImage">
  <h2 class="cardTitle">${mealItemSelected.strCategory}</h2>
  <p class="cardDiscription">${mealItemSelected.strCategoryDescription}</p>
  <h3 class="numberComments">Comments<span id="numberComments" class="commentNumbers">(${commentNumbers(comments)})</span></h3>
  <div class="comment">     
  </div>
  <h3 class="leaveComment">Leave A Comment</h3>
  <!-- form section starts here -->
<form id="cmtInput" class="cmtInput" action="#" method="post">
<input type="text" name="username" placeholder="Your Name" required>
<textarea type="text" name="comment" placeholder="Add Comment..." required></textarea>
<button class="commentButton" type="submit">Post Comment</button>
</form> 
  <!-- form section ends here -->
  <!-- successmessage section starts here -->
      <span id="successMessage" class="message"></span>`;

  popUpCardSection.appendChild(popUpCard);
  devComment(comments);
};

// get seleted meal from api IdCategory
const getMealItem = async (itemIdCategory) => {
  const mealItems = await (0,_getdata_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  if (itemIdCategory !== undefined) {
    const commentSec = await (0,_submitComment_js__WEBPACK_IMPORTED_MODULE_1__.displayCommentData)(itemIdCategory);
    // eslint-disable-next-line max-len
    const mealItemSelected = mealItems.categories.find((meal) => meal.idCategory === itemIdCategory);
    displayMealItems(mealItemSelected, commentSec);
  }

  // remove comments
  const removeAllComments = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  // reset comment input field
  const resetCmt = async (allComments) => {
    document.getElementById('numberComments').innerHTML = `(${commentNumbers(allComments)})`;
    removeAllComments(document.querySelector('.comment'));
    devComment(allComments);
  };

  // white space should not be empty
  const whiteSecSpc = (x) => {
    const spc = new RegExp(/^\s$/);
    return spc.test(x.charAt(0));
  };

  // create function to register comments on the api
  const leaveCommentRegistered = async (itemIdCategory) => {
    if (document.getElementById('cmtInput') !== null) {
      document.getElementById('cmtInput').addEventListener('submit', async (e) => {
        e.preventDefault();
        const commenterInputName = document.getElementById('cmtInput').elements.username;
        const inputCmt = document.getElementById('cmtInput').elements.comment;

        // display error message when input field contains white spaces
        document.querySelector('.message').innerHTML = ' Remove empty spaces Please. ';
        document.querySelector('.message').style.color = 'Red';

        if (!whiteSecSpc(commenterInputName.value) && !whiteSecSpc(inputCmt.value)) {
          document.querySelector('.message').innerHTML = ' Comment Posted ';
          const renderComment = {
            item_id: itemIdCategory,
            username: commenterInputName.value.trim(),
            comment: inputCmt.value.trim(),
          };

          // display all comments that have been previously sent to the api
          const allComments = await (0,_submitComment_js__WEBPACK_IMPORTED_MODULE_1__.leaveCommentInput)(renderComment);
          // reset the form
          document.getElementById('cmtInput').reset();
          resetCmt(allComments);
        }
        setTimeout(() => {
          document.getElementById('successMessage').innerHTML = '';
        }, 3000);
      });
    }
  };

  // register a comment on the api
  leaveCommentRegistered(itemIdCategory);

  // create close button for pop up card
  if (document.querySelector('.closeButton') !== null) {
    document.querySelector('.closeButton').addEventListener('click', (e) => {
      e.preventDefault();
      if (popUpCardSection.style.display === 'flex') {
        popUpCardSection.style.display = '';
      }
    });
  }
};

// export relevant code
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMealItem);


/***/ }),

/***/ "./src/modules/getLikesData.js":
/*!*************************************!*\
  !*** ./src/modules/getLikesData.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLikeData": () => (/* binding */ getLikeData),
/* harmony export */   "postLikeData": () => (/* binding */ postLikeData)
/* harmony export */ });
const link = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${"MISSING_ENV_VAR".API_KEY}/likes`;

// get like data
const getLikeData = async () => {
  const response = await fetch(
    `${link}`,
  );
  return response.json();
};

// post like data
const postLikeData = async (mealId) => {
  await fetch(`${link}`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: mealId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};



/***/ }),

/***/ "./src/modules/getdata.js":
/*!********************************!*\
  !*** ./src/modules/getdata.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// post to the api
const API_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const getData = async () => {
  const response = await fetch(
    `${API_URL}`,
    {
      method: 'GET',
    },
  );
  return response.json();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);

/***/ }),

/***/ "./src/modules/itemsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/itemsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// item counter

const itemCounter = (item) => item.length;

// export relavent code

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCounter);

/***/ }),

/***/ "./src/modules/submitComment.js":
/*!**************************************!*\
  !*** ./src/modules/submitComment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayCommentData": () => (/* binding */ displayCommentData),
/* harmony export */   "leaveCommentInput": () => (/* binding */ leaveCommentInput)
/* harmony export */ });
// set api link to display comment data and send comment inputs to the api
const link = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${"MISSING_ENV_VAR".API_KEY}/comments`;
const getLink = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${"MISSING_ENV_VAR".API_KEY}/comments?item_id=`;

// create function to display comment data
const displayCommentData = async (id) => {
  const getLinkWithID = getLink + id;
  if (id !== undefined) {
    const response = await fetch(
      `${getLinkWithID}`,
    );
    if (response.status === 200) {
      return response.json();
    }
    return null;
  }
  return null;
};

// create function to send comment input to the api
const leaveCommentInput = async (renderComment) => {
  try {
    const response = await fetch(link, {
      method: 'POST',
      body: JSON.stringify(renderComment),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response.ok) {
      const allComments = await displayCommentData(renderComment.item_id);
      if (allComments !== null) {
        return allComments;
      }
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
  return null;
};

// export the relevant files


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display.js */ "./src/modules/display.js");
/* harmony import */ var _modules_dompopupcard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dompopupcard.js */ "./src/modules/dompopupcard.js");
/* harmony import */ var _modules_submitComment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/submitComment.js */ "./src/modules/submitComment.js");
/* harmony import */ var _modules_itemsCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/itemsCounter.js */ "./src/modules/itemsCounter.js");
/* harmony import */ var _modules_getdata_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/getdata.js */ "./src/modules/getdata.js");




// import getLists from './modules/display.js';



// laod dom content when webpage is loaded
window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const homeItemCounter = document.querySelector('.item-number');
  const getItemList = async () => {
    try {
      const mealLists = await (0,_modules_getdata_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
      const counterArray = mealLists.categories;
      homeItemCounter.textContent = (0,_modules_itemsCounter_js__WEBPACK_IMPORTED_MODULE_4__["default"])(counterArray);
    } catch (error) {
      console.log(error);
    }
  };
  getItemList();
});

(0,_modules_dompopupcard_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

(0,_modules_submitComment_js__WEBPACK_IMPORTED_MODULE_3__.displayCommentData)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZ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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztVQzNDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDdUI7QUFDUTtBQUNZO0FBQ2hFO0FBQ29EO0FBQ1Q7O0FBRTNDO0FBQ0E7QUFDQSxFQUFFLCtEQUFRO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLCtEQUFPO0FBQ3JDO0FBQ0Esb0NBQW9DLG9FQUFXO0FBQy9DLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsb0VBQVc7O0FBRVgsNkVBQWtCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9DU1AyLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9DU1AyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9DU1AyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vQ1NQMi8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9DU1AyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0NTUDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL0NTUDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQ1NQMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9DU1AyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vQ1NQMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL0NTUDIvLi9zcmMvbW9kdWxlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL0NTUDIvLi9zcmMvbW9kdWxlcy9kaXNwbGF5bWVhbHMuanMiLCJ3ZWJwYWNrOi8vQ1NQMi8uL3NyYy9tb2R1bGVzL2RvbXBvcHVwY2FyZC5qcyIsIndlYnBhY2s6Ly9DU1AyLy4vc3JjL21vZHVsZXMvZ2V0TGlrZXNEYXRhLmpzIiwid2VicGFjazovL0NTUDIvLi9zcmMvbW9kdWxlcy9nZXRkYXRhLmpzIiwid2VicGFjazovL0NTUDIvLi9zcmMvbW9kdWxlcy9pdGVtc0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vQ1NQMi8uL3NyYy9tb2R1bGVzL3N1Ym1pdENvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vQ1NQMi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9DU1AyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0NTUDIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0NTUDIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9DU1AyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQ1NQMi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vQ1NQMi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxyXFxuKjo6YWZ0ZXIsXFxyXFxuKjo6YmVmb3JlIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjpoc2xhKDEyMCwxMDAlLDUwJSwxKTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6XFxyXFxuICByYWRpYWwtZ3JhZGllbnQoYXQgODElIDEwMCUsIGhzbGEoMTU4LDEwMCUsOTMlLDEpIDBweCwgdHJhbnNwYXJlbnQgNTAlKSxcXHJcXG4gIHJhZGlhbC1ncmFkaWVudChhdCA0MyUgMCUsIGhzbGEoMTg3LDEwMCUsNzQlLDEpIDBweCwgdHJhbnNwYXJlbnQgNTAlKSxcXHJcXG4gIHJhZGlhbC1ncmFkaWVudChhdCAxMDAlIDAlLCBoc2xhKDE0NiwxMDAlLDUwJSwwLjkyKSAwcHgsIHRyYW5zcGFyZW50IDUwJSksXFxyXFxuICByYWRpYWwtZ3JhZGllbnQoYXQgMjElIDQxJSwgaHNsYSgxNTQsMTAwJSw5MyUsMSkgMHB4LCB0cmFuc3BhcmVudCA1MCUpLFxcclxcbiAgcmFkaWFsLWdyYWRpZW50KGF0IDc0JSAzNSUsIGhzbGEoMTM5LDEwMCUsNzYlLDEpIDBweCwgdHJhbnNwYXJlbnQgNTAlKSxcXHJcXG4gIHJhZGlhbC1ncmFkaWVudChhdCAwJSAxMDAlLCBoc2xhKDMxMSwxMDAlLDkzJSwxKSAwcHgsIHRyYW5zcGFyZW50IDUwJSksXFxyXFxuICByYWRpYWwtZ3JhZGllbnQoYXQgMCUgMCUsIGhzbGEoMTQyLDEwMCUsNzYlLDEpIDBweCwgdHJhbnNwYXJlbnQgNTAlKTtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4wNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyBzcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMS43O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW4taW5saW5lOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudW5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudW5hdiBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgbWFyZ2luOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudW5hdiBsaSBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZEJnIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi5wb3BVcENhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXHJcXG4gIHdpZHRoOiA1MHJlbTtcXHJcXG4gIGhlaWdodDogOTAlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZUJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMi41cmVtO1xcclxcbiAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmM5Nzk7XFxyXFxufVxcclxcblxcclxcbi5jYXJkRGlzY3JpcHRpb24ge1xcclxcbiAgcGFkZGluZzogMCAxLjVyZW07XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyLjJyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5udW1iZXJDb21tZW50cyB7XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjEpO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjZyZW07XFxyXFxuICBtYXJnaW46IDAgYXV0byAxcmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5sZWF2ZUNvbW1lbnQge1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNtdElucHV0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxLjVyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNtdElucHV0IGlucHV0IHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGhlaWdodDogM3JlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4uY210SW5wdXQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxyXFxufVxcclxcblxcclxcbi5jbXRJbnB1dCB0ZXh0YXJlYSB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBoZWlnaHQ6IDEwcmVtO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxyXFxufVxcclxcblxcclxcbi5jbXRJbnB1dCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRCdXR0b24ge1xcclxcbiAgbWFyZ2luOiAwIGF1dG8gMXJlbSBhdXRvO1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG4gIGhlaWdodDogMy41cmVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50QnV0dG9uOmhvdmVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XFxyXFxuICB3aWR0aDogMjYlO1xcclxcbiAgaGVpZ2h0OiAzLjlyZW07XFxyXFxufVxcclxcblxcclxcbi5kYXRlT2ZDb21tZW50IHtcXHJcXG4gIG1pbi13aWR0aDogOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lc3NhZ2Uge1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkSW1nIHtcXHJcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1udW1iZXIge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgY29sb3I6ICMwMDAwMDA7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyJSAzcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtdGl0bGUtc2VjdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDNyZW0gMCAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbiNtZWFscy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIG1hcmdpbjogMnJlbSAwIDhyZW0gMDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICBnYXA6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWNhcmQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAzNnJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgYm94LXNoYWRvdzogMCA0cHggMjFweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNzkpO1xcclxcbiAgcGFkZGluZzogM3JlbTtcXHJcXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtY2FyZDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC10aXRsZS1uYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXRpdGxlIHtcXHJcXG4gIG1hcmdpbjogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvdmUtaWNvbiB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICBjb2xvcjogIzNmYzk3OTtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgcGFkZGluZzogMC40cmVtIDAuN3JlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIxcHggLTEycHggIzNmYzk3OTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvdmUtaWNvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgY29sb3I6ICMzZmM5Nzk7XFxyXFxufVxcclxcblxcclxcbi5sb3ZlLWljb246YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmM5Nzk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5saWtlcy1kaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcclxcbiAgY29sb3I6ICMzZmM5Nzk7XFxyXFxuICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW47XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZmM5Nzk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNTBweCkge1xcclxcbiAgI21lYWxzLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGRpdiB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAucG9wVXBDYXJkIHtcXHJcXG4gICAgd2lkdGg6IDQ1cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRCdXR0b24ge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tbWVudEJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmRUaXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5udW1iZXJDb21tZW50cyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5sZWF2ZUNvbW1lbnQge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVzc2FnZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBwYWRkaW5nOiAwIDNyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FyZEltZyB7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGF0ZU9mQ29tbWVudCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbWluLXdpZHRoOiA2cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hbWVPZkNvbW1lbnRlciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRDb250ZW50IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjbWVhbHMtY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb290ZXIge1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgcGFkZGluZzogMCA3cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnVuYXYgbGk6bnRoLW9mLXR5cGUoMikge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnVuYXYgbGk6bnRoLW9mLXR5cGUoMykge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcclxcbiAgLnBvcFVwQ2FyZCB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtFQUNWLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBcUM7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eEMscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7SUFDRSw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcclxcbio6OmFmdGVyLFxcclxcbio6OmJlZm9yZSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6aHNsYSgxMjAsMTAwJSw1MCUsMSk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcclxcbiAgcmFkaWFsLWdyYWRpZW50KGF0IDgxJSAxMDAlLCBoc2xhKDE1OCwxMDAlLDkzJSwxKSAwcHgsIHRyYW5zcGFyZW50IDUwJSksXFxyXFxuICByYWRpYWwtZ3JhZGllbnQoYXQgNDMlIDAlLCBoc2xhKDE4NywxMDAlLDc0JSwxKSAwcHgsIHRyYW5zcGFyZW50IDUwJSksXFxyXFxuICByYWRpYWwtZ3JhZGllbnQoYXQgMTAwJSAwJSwgaHNsYSgxNDYsMTAwJSw1MCUsMC45MikgMHB4LCB0cmFuc3BhcmVudCA1MCUpLFxcclxcbiAgcmFkaWFsLWdyYWRpZW50KGF0IDIxJSA0MSUsIGhzbGEoMTU0LDEwMCUsOTMlLDEpIDBweCwgdHJhbnNwYXJlbnQgNTAlKSxcXHJcXG4gIHJhZGlhbC1ncmFkaWVudChhdCA3NCUgMzUlLCBoc2xhKDEzOSwxMDAlLDc2JSwxKSAwcHgsIHRyYW5zcGFyZW50IDUwJSksXFxyXFxuICByYWRpYWwtZ3JhZGllbnQoYXQgMCUgMTAwJSwgaHNsYSgzMTEsMTAwJSw5MyUsMSkgMHB4LCB0cmFuc3BhcmVudCA1MCUpLFxcclxcbiAgcmFkaWFsLWdyYWRpZW50KGF0IDAlIDAlLCBoc2xhKDE0MiwxMDAlLDc2JSwxKSAwcHgsIHRyYW5zcGFyZW50IDUwJSk7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRyZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNztcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLWlubGluZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVuYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVuYXYgbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVuYXYgbGkgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRCZyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXBDYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICB3aWR0aDogNTByZW07XFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VCdXR0b24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDIuNXJlbTtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZjOTc5O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZERpc2NyaXB0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMi4ycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubnVtYmVyQ29tbWVudHMge1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1lbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBsaW5lLWhlaWdodDogMS42cmVtO1xcclxcbiAgbWFyZ2luOiAwIGF1dG8gMXJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVhdmVDb21tZW50IHtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5jbXRJbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMS41cmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jbXRJbnB1dCBpbnB1dCB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNtdElucHV0IGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xcclxcbn1cXHJcXG5cXHJcXG4uY210SW5wdXQgdGV4dGFyZWEge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgaGVpZ2h0OiAxMHJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4uY210SW5wdXQgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50QnV0dG9uIHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvIDFyZW0gYXV0bztcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICBoZWlnaHQ6IDMuNXJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudEJ1dHRvbjpob3ZlciB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcclxcbiAgd2lkdGg6IDI2JTtcXHJcXG4gIGhlaWdodDogMy45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZU9mQ29tbWVudCB7XFxyXFxuICBtaW4td2lkdGg6IDhyZW07XFxyXFxufVxcclxcblxcclxcbi5tZXNzYWdlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMSk7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZEltZyB7XFxyXFxuICBtYXJnaW46IDJyZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tbnVtYmVyIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMiUgM3JlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXRpdGxlLXNlY3Rpb24ge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAzcmVtIDAgMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVhbHMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBtYXJnaW46IDJyZW0gMCA4cmVtIDA7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jYXJkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMzZyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIxcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjc5KTtcXHJcXG4gIHBhZGRpbmc6IDNyZW07XFxyXFxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWNhcmQ6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtdGl0bGUtbmFtZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC10aXRsZSB7XFxyXFxuICBtYXJnaW46IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5sb3ZlLWljb24ge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcclxcbiAgY29sb3I6ICMzZmM5Nzk7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDAuNHJlbSAwLjdyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCAyMXB4IC0xMnB4ICMzZmM5Nzk7XFxyXFxufVxcclxcblxcclxcbi5sb3ZlLWljb246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjM2ZjOTc5O1xcclxcbn1cXHJcXG5cXHJcXG4ubG92ZS1pY29uOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZjOTc5O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMtZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1idXR0b24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXHJcXG4gIGNvbG9yOiAjM2ZjOTc5O1xcclxcbiAgcGFkZGluZzogMS41cmVtIDJyZW07XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluO1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjM2ZjOTc5O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjUwcHgpIHtcXHJcXG4gICNtZWFscy1jb250YWluZXIge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBkaXYge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLnBvcFVwQ2FyZCB7XFxyXFxuICAgIHdpZHRoOiA0NXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50QnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRCdXR0b246aG92ZXIge1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJkVGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubnVtYmVyQ29tbWVudHMge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubGVhdmVDb21tZW50IHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lc3NhZ2Uge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMCAzcmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmRJbWcge1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRhdGVPZkNvbW1lbnQge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIG1pbi13aWR0aDogNnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYW1lT2ZDb21tZW50ZXIge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb21tZW50Q29udGVudCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI21lYWxzLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9vdGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAgN3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51bmF2IGxpOm50aC1vZi10eXBlKDIpIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51bmF2IGxpOm50aC1vZi10eXBlKDMpIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG4gIC5wb3BVcENhcmQge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBpbXBvcnQgcmVsYXZlbnQgY29kZVxuaW1wb3J0IGdldERhdGEgZnJvbSAnLi9nZXRkYXRhLmpzJztcbmltcG9ydCBtZWFsTGlzdERpc3BsYXkgZnJvbSAnLi9kaXNwbGF5bWVhbHMuanMnO1xuaW1wb3J0IHsgZ2V0TGlrZURhdGEsIHBvc3RMaWtlRGF0YSB9IGZyb20gJy4vZ2V0TGlrZXNEYXRhLmpzJztcbmltcG9ydCBnZXRNZWFsSXRlbSBmcm9tICcuL2RvbXBvcHVwY2FyZC5qcyc7XG5cbi8vIGNyZWF0ZSBhIGRpc3BsYXkgY29udGFpbmVyIGJ5IElEXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVhbHMtY29udGFpbmVyJyk7XG4vLyBmdW5jdGlvbiB0byBkaXNwbGF5IHRoZSBsaWtlc1xuY29uc3Qgc2V0SGVhcnRMaWtlcyA9IChoZWFydCwgbGlrZXMpID0+IHtcbiAgY29uc3QgaWQgPSBoZWFydC5jbG9zZXN0KCdhcnRpY2xlJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gIGNvbnN0IGl0ZW0gPSBsaWtlcy5maW5kKChpdGVtKSA9PiBpdGVtLml0ZW1faWQgPT09IGlkKTtcbiAgaGVhcnQudGV4dENvbnRlbnQgPSBpdGVtLmxpa2VzO1xufTtcblxuLy8gY2xpY2sgbGlrZSBmdW5jdGlvblxuY29uc3QgY2xpY2tMaWtlSGVhcnQgPSAoaGVhcnQpID0+IHtcbiAgY29uc3QgaWQgPSBoZWFydC5jbG9zZXN0KCdhcnRpY2xlJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gIGhlYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHBvc3RMaWtlRGF0YShpZCk7XG4gICAgY29uc3QgbGlrZXMgPSBhd2FpdCBnZXRMaWtlRGF0YSgpO1xuICAgIGNvbnN0IGhlYXJ0cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZXMtc2VjdGlvbicpO1xuICAgIGhlYXJ0cy5mb3JFYWNoKChoZWFydCkgPT4ge1xuICAgICAgc2V0SGVhcnRMaWtlcyhoZWFydCwgbGlrZXMpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbi8vIGdldCBtZWFsIGFuZCBsaWtlIGRhdGFcbmNvbnN0IGdldExpc3RzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBsaXN0TWVhbE1lbnVzID0gYXdhaXQgZ2V0RGF0YSgpO1xuICBjb25zdCBsaWtlcyA9IGF3YWl0IGdldExpa2VEYXRhKCk7XG5cbiAgbGlzdE1lYWxNZW51cy5jYXRlZ29yaWVzLmZvckVhY2goKG1lYWwpID0+IHtcbiAgICBtZWFsTGlzdERpc3BsYXkobWVhbCk7XG4gIH0pO1xuXG4gIC8vIGNyZWF0ZSBsaWtlIGljb24gaW4gY29udGFpbmVyXG4gIGNvbnN0IGhlYXJ0cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZXMtc2VjdGlvbicpO1xuICBjb25zdCBsb3ZlSWNvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcubG92ZS1pY29uJyk7XG5cbiAgaGVhcnRzLmZvckVhY2goKGhlYXJ0KSA9PiB7XG4gICAgc2V0SGVhcnRMaWtlcyhoZWFydCwgbGlrZXMpO1xuICB9KTtcblxuICBsb3ZlSWNvbi5mb3JFYWNoKChoZWFydCkgPT4ge1xuICAgIGNsaWNrTGlrZUhlYXJ0KGhlYXJ0KTtcbiAgfSk7XG5cbiAgLy8gY3JlYXRlIGNvbW1lbnQgYnV0dG9uIGZ1bmN0aW9uXG4gIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1CdXR0b24nKTtcbiAgbGV0IGl0ZW1JZENhdGVnb3J5O1xuICBpZiAoY29tbWVudCAhPT0gbnVsbCkge1xuICAgIGNvbW1lbnQuZm9yRWFjaCgoYnV0dG9uQ2xpY2spID0+IHtcbiAgICAgIGJ1dHRvbkNsaWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRCZycpLnN0eWxlLmRpc3BsYXkgPT09ICcnKSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRCZycpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbUlkQ2F0ZWdvcnkgPSBlLmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnYXJ0aWNsZScpLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICBnZXRNZWFsSXRlbShpdGVtSWRDYXRlZ29yeSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TGlzdHM7XG4iLCIvLyBjcmVhdGUgZnVuY3Rpb24gdG8gZGlzcGxheSBtZWFsIGxpc3QgZHluYW1pY2FsbHlcbmNvbnN0IG1lYWxMaXN0RGlzcGxheSA9IChtZWFsKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWFscy1jb250YWluZXInKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vIGRpdiBzZWN0aW9uIGZvciBtZWFsIGNhcmQgYW5kIGluZm9cbiAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIG1lYWwuaWRDYXRlZ29yeSk7XG4gIGRpdi5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJtZWFsLWNhcmRcIj5cbiAgPGRpdiBjbGFzcz1cImltZy1vZi1tZWFsXCI+PGltZyBzcmM9XCIke21lYWwuc3RyQ2F0ZWdvcnlUaHVtYn1cIiBhbHQ9XCJtZWFsIGltZ1wiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibWVhbC10aXRsZS1uYW1lXCI+XG4gIDxkaXYgY2xhc3M9XCJtZWFsLXRpdGxlXCI+PGgzPiR7bWVhbC5zdHJDYXRlZ29yeX08L2gzPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibGlrZXMtZGlzcGxheVwiPjxpIGNsYXNzPVwidWlsIHVpbC1oZWFydCBsb3ZlLWljb25cIj48L2k+PHA+TGlrZXM8L3A+PC9kaXY+XG4gIDwvZGl2PlxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNvbW1lbnQtQnV0dG9uXCIgaWQ9XCJjb21tZW50LWJ1dHRvblwiPkNvbW1lbnQ8L2J1dHRvbj48L2Rpdj5gO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVhbExpc3REaXNwbGF5OyIsIi8vIGltcG9ydCByZWxhdmVudCBjb2RlXG5pbXBvcnQgZ2V0RGF0YSBmcm9tICcuL2dldGRhdGEuanMnO1xuaW1wb3J0IHsgZGlzcGxheUNvbW1lbnREYXRhLCBsZWF2ZUNvbW1lbnRJbnB1dCB9IGZyb20gJy4vc3VibWl0Q29tbWVudC5qcyc7XG5cbi8vIGNyZWF0ZSBmdW5jdGlvbiBmb3IgcG9wIHVwIGNhcmRcbmNvbnN0IHBvcFVwQ2FyZFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZEJnJyk7XG5jb25zdCBwb3BVcENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuLy8gY3JlYXRlIGZ1bmN0aW9uIGZvciB0byBkaXNwbGF5IGNvbW1lbnRzIGluIHBvcCB1cCBjYXJkXG5jb25zdCBkZXZDb21tZW50ID0gKGNvbW1lbnRzKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQnKTtcblxuICAvLyBmdW5jdGlvbiB0byBkaXNwbGF5IGNvbW1lbnQgaW5mbyBvbiB0aGUgcG9wIHVwIGNhcmRcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21tZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNvbW1lbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb21tZW50RGl2LmNsYXNzTmFtZSA9ICdjb21tZW50LWVsJztcblxuICAgIGNvbnN0IGRhdGVPZkNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGF0ZU9mQ29tbWVudC5jbGFzc05hbWUgPSAnZGF0ZU9mQ29tbWVudCc7XG4gICAgZGF0ZU9mQ29tbWVudC50ZXh0Q29udGVudCA9IGNvbW1lbnRzW2ldLmNyZWF0aW9uX2RhdGU7XG5cbiAgICBjb25zdCBuYW1lT2ZDb21tZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbmFtZU9mQ29tbWVudGVyLmNsYXNzTmFtZSA9ICduYW1lT2ZDb21tZW50ZXInO1xuICAgIG5hbWVPZkNvbW1lbnRlci50ZXh0Q29udGVudCA9IGAke2NvbW1lbnRzW2ldLnVzZXJuYW1lfTpgO1xuXG4gICAgY29uc3QgbG9yZW1Db21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxvcmVtQ29tbWVudC5jbGFzc05hbWUgPSAnbG9yZW1Db21tZW50JztcbiAgICBsb3JlbUNvbW1lbnQudGV4dENvbnRlbnQgPSBjb21tZW50c1tpXS5jb21tZW50O1xuXG4gICAgY29tbWVudERpdi5hcHBlbmRDaGlsZChkYXRlT2ZDb21tZW50KTtcbiAgICBjb21tZW50RGl2LmFwcGVuZENoaWxkKG5hbWVPZkNvbW1lbnRlcik7XG4gICAgY29tbWVudERpdi5hcHBlbmRDaGlsZChsb3JlbUNvbW1lbnQpO1xuICAgIGNvbW1lbnRTZWN0aW9uLmFwcGVuZENoaWxkKGNvbW1lbnREaXYpO1xuICB9XG59O1xuXG4vLyBjcmVhdGUgZnVudGlvbiBmb3IgbnVtYmVyIG9mIGNvbW1lbnRzIHNob3duXG5jb25zdCBjb21tZW50TnVtYmVycyA9IChjb21tZW50cykgPT4gKGNvbW1lbnRzLmxlbmd0aCA/IGNvbW1lbnRzLmxlbmd0aCA6IDApO1xuXG4vLyBkaXNwbGF5IHNlbGVjdGVkIG1lYWwgcG9wIHVwIGNhcmQgaW5mb1xuY29uc3QgZGlzcGxheU1lYWxJdGVtcyA9IChtZWFsSXRlbVNlbGVjdGVkLCBjb21tZW50cykgPT4ge1xuICBwb3BVcENhcmQuY2xhc3NOYW1lID0gJ3BvcFVwQ2FyZCc7XG4gIHBvcFVwQ2FyZC5pbm5lckhUTUwgPSBgXG4gIDxidXR0b24gY2xhc3M9XCJjbG9zZUJ1dHRvblwiPlg8L2J1dHRvbj5cbiAgPGltZyBjbGFzcz1cImNhcmRJbWdcIiBzcmM9XCIke21lYWxJdGVtU2VsZWN0ZWQuc3RyQ2F0ZWdvcnlUaHVtYn1cIiBhbHQ9XCJtZWFsSW1hZ2VcIj5cbiAgPGgyIGNsYXNzPVwiY2FyZFRpdGxlXCI+JHttZWFsSXRlbVNlbGVjdGVkLnN0ckNhdGVnb3J5fTwvaDI+XG4gIDxwIGNsYXNzPVwiY2FyZERpc2NyaXB0aW9uXCI+JHttZWFsSXRlbVNlbGVjdGVkLnN0ckNhdGVnb3J5RGVzY3JpcHRpb259PC9wPlxuICA8aDMgY2xhc3M9XCJudW1iZXJDb21tZW50c1wiPkNvbW1lbnRzPHNwYW4gaWQ9XCJudW1iZXJDb21tZW50c1wiIGNsYXNzPVwiY29tbWVudE51bWJlcnNcIj4oJHtjb21tZW50TnVtYmVycyhjb21tZW50cyl9KTwvc3Bhbj48L2gzPlxuICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPiAgICAgXG4gIDwvZGl2PlxuICA8aDMgY2xhc3M9XCJsZWF2ZUNvbW1lbnRcIj5MZWF2ZSBBIENvbW1lbnQ8L2gzPlxuICA8IS0tIGZvcm0gc2VjdGlvbiBzdGFydHMgaGVyZSAtLT5cbjxmb3JtIGlkPVwiY210SW5wdXRcIiBjbGFzcz1cImNtdElucHV0XCIgYWN0aW9uPVwiI1wiIG1ldGhvZD1cInBvc3RcIj5cbjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCIgcmVxdWlyZWQ+XG48dGV4dGFyZWEgdHlwZT1cInRleHRcIiBuYW1lPVwiY29tbWVudFwiIHBsYWNlaG9sZGVyPVwiQWRkIENvbW1lbnQuLi5cIiByZXF1aXJlZD48L3RleHRhcmVhPlxuPGJ1dHRvbiBjbGFzcz1cImNvbW1lbnRCdXR0b25cIiB0eXBlPVwic3VibWl0XCI+UG9zdCBDb21tZW50PC9idXR0b24+XG48L2Zvcm0+IFxuICA8IS0tIGZvcm0gc2VjdGlvbiBlbmRzIGhlcmUgLS0+XG4gIDwhLS0gc3VjY2Vzc21lc3NhZ2Ugc2VjdGlvbiBzdGFydHMgaGVyZSAtLT5cbiAgICAgIDxzcGFuIGlkPVwic3VjY2Vzc01lc3NhZ2VcIiBjbGFzcz1cIm1lc3NhZ2VcIj48L3NwYW4+YDtcblxuICBwb3BVcENhcmRTZWN0aW9uLmFwcGVuZENoaWxkKHBvcFVwQ2FyZCk7XG4gIGRldkNvbW1lbnQoY29tbWVudHMpO1xufTtcblxuLy8gZ2V0IHNlbGV0ZWQgbWVhbCBmcm9tIGFwaSBJZENhdGVnb3J5XG5jb25zdCBnZXRNZWFsSXRlbSA9IGFzeW5jIChpdGVtSWRDYXRlZ29yeSkgPT4ge1xuICBjb25zdCBtZWFsSXRlbXMgPSBhd2FpdCBnZXREYXRhKCk7XG4gIGlmIChpdGVtSWRDYXRlZ29yeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY29tbWVudFNlYyA9IGF3YWl0IGRpc3BsYXlDb21tZW50RGF0YShpdGVtSWRDYXRlZ29yeSk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICBjb25zdCBtZWFsSXRlbVNlbGVjdGVkID0gbWVhbEl0ZW1zLmNhdGVnb3JpZXMuZmluZCgobWVhbCkgPT4gbWVhbC5pZENhdGVnb3J5ID09PSBpdGVtSWRDYXRlZ29yeSk7XG4gICAgZGlzcGxheU1lYWxJdGVtcyhtZWFsSXRlbVNlbGVjdGVkLCBjb21tZW50U2VjKTtcbiAgfVxuXG4gIC8vIHJlbW92ZSBjb21tZW50c1xuICBjb25zdCByZW1vdmVBbGxDb21tZW50cyA9IChwYXJlbnQpID0+IHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIHJlc2V0IGNvbW1lbnQgaW5wdXQgZmllbGRcbiAgY29uc3QgcmVzZXRDbXQgPSBhc3luYyAoYWxsQ29tbWVudHMpID0+IHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtYmVyQ29tbWVudHMnKS5pbm5lckhUTUwgPSBgKCR7Y29tbWVudE51bWJlcnMoYWxsQ29tbWVudHMpfSlgO1xuICAgIHJlbW92ZUFsbENvbW1lbnRzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50JykpO1xuICAgIGRldkNvbW1lbnQoYWxsQ29tbWVudHMpO1xuICB9O1xuXG4gIC8vIHdoaXRlIHNwYWNlIHNob3VsZCBub3QgYmUgZW1wdHlcbiAgY29uc3Qgd2hpdGVTZWNTcGMgPSAoeCkgPT4ge1xuICAgIGNvbnN0IHNwYyA9IG5ldyBSZWdFeHAoL15cXHMkLyk7XG4gICAgcmV0dXJuIHNwYy50ZXN0KHguY2hhckF0KDApKTtcbiAgfTtcblxuICAvLyBjcmVhdGUgZnVuY3Rpb24gdG8gcmVnaXN0ZXIgY29tbWVudHMgb24gdGhlIGFwaVxuICBjb25zdCBsZWF2ZUNvbW1lbnRSZWdpc3RlcmVkID0gYXN5bmMgKGl0ZW1JZENhdGVnb3J5KSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbXRJbnB1dCcpICE9PSBudWxsKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY210SW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGNvbW1lbnRlcklucHV0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbXRJbnB1dCcpLmVsZW1lbnRzLnVzZXJuYW1lO1xuICAgICAgICBjb25zdCBpbnB1dENtdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbXRJbnB1dCcpLmVsZW1lbnRzLmNvbW1lbnQ7XG5cbiAgICAgICAgLy8gZGlzcGxheSBlcnJvciBtZXNzYWdlIHdoZW4gaW5wdXQgZmllbGQgY29udGFpbnMgd2hpdGUgc3BhY2VzXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJykuaW5uZXJIVE1MID0gJyBSZW1vdmUgZW1wdHkgc3BhY2VzIFBsZWFzZS4gJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKS5zdHlsZS5jb2xvciA9ICdSZWQnO1xuXG4gICAgICAgIGlmICghd2hpdGVTZWNTcGMoY29tbWVudGVySW5wdXROYW1lLnZhbHVlKSAmJiAhd2hpdGVTZWNTcGMoaW5wdXRDbXQudmFsdWUpKSB7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKS5pbm5lckhUTUwgPSAnIENvbW1lbnQgUG9zdGVkICc7XG4gICAgICAgICAgY29uc3QgcmVuZGVyQ29tbWVudCA9IHtcbiAgICAgICAgICAgIGl0ZW1faWQ6IGl0ZW1JZENhdGVnb3J5LFxuICAgICAgICAgICAgdXNlcm5hbWU6IGNvbW1lbnRlcklucHV0TmFtZS52YWx1ZS50cmltKCksXG4gICAgICAgICAgICBjb21tZW50OiBpbnB1dENtdC52YWx1ZS50cmltKCksXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIGRpc3BsYXkgYWxsIGNvbW1lbnRzIHRoYXQgaGF2ZSBiZWVuIHByZXZpb3VzbHkgc2VudCB0byB0aGUgYXBpXG4gICAgICAgICAgY29uc3QgYWxsQ29tbWVudHMgPSBhd2FpdCBsZWF2ZUNvbW1lbnRJbnB1dChyZW5kZXJDb21tZW50KTtcbiAgICAgICAgICAvLyByZXNldCB0aGUgZm9ybVxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbXRJbnB1dCcpLnJlc2V0KCk7XG4gICAgICAgICAgcmVzZXRDbXQoYWxsQ29tbWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWNjZXNzTWVzc2FnZScpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyByZWdpc3RlciBhIGNvbW1lbnQgb24gdGhlIGFwaVxuICBsZWF2ZUNvbW1lbnRSZWdpc3RlcmVkKGl0ZW1JZENhdGVnb3J5KTtcblxuICAvLyBjcmVhdGUgY2xvc2UgYnV0dG9uIGZvciBwb3AgdXAgY2FyZFxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlQnV0dG9uJykgIT09IG51bGwpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAocG9wVXBDYXJkU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgcG9wVXBDYXJkU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIGV4cG9ydCByZWxldmFudCBjb2RlXG5leHBvcnQgZGVmYXVsdCBnZXRNZWFsSXRlbTtcbmV4cG9ydCB7IGNvbW1lbnROdW1iZXJzIH07IiwiY29uc3QgbGluayA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke3Byb2Nlc3MuZW52LkFQSV9LRVl9L2xpa2VzYDtcblxuLy8gZ2V0IGxpa2UgZGF0YVxuY29uc3QgZ2V0TGlrZURhdGEgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7bGlua31gLFxuICApO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuLy8gcG9zdCBsaWtlIGRhdGFcbmNvbnN0IHBvc3RMaWtlRGF0YSA9IGFzeW5jIChtZWFsSWQpID0+IHtcbiAgYXdhaXQgZmV0Y2goYCR7bGlua31gLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogbWVhbElkLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBnZXRMaWtlRGF0YSwgcG9zdExpa2VEYXRhIH07IiwiLy8gcG9zdCB0byB0aGUgYXBpXG5jb25zdCBBUElfVVJMID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9jYXRlZ29yaWVzLnBocCc7XG5cbmNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7QVBJX1VSTH1gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgfSxcbiAgKTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERhdGE7IiwiLy8gaXRlbSBjb3VudGVyXG5cbmNvbnN0IGl0ZW1Db3VudGVyID0gKGl0ZW0pID0+IGl0ZW0ubGVuZ3RoO1xuXG4vLyBleHBvcnQgcmVsYXZlbnQgY29kZVxuXG5leHBvcnQgZGVmYXVsdCBpdGVtQ291bnRlcjsiLCIvLyBzZXQgYXBpIGxpbmsgdG8gZGlzcGxheSBjb21tZW50IGRhdGEgYW5kIHNlbmQgY29tbWVudCBpbnB1dHMgdG8gdGhlIGFwaVxuY29uc3QgbGluayA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke3Byb2Nlc3MuZW52LkFQSV9LRVl9L2NvbW1lbnRzYDtcbmNvbnN0IGdldExpbmsgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHtwcm9jZXNzLmVudi5BUElfS0VZfS9jb21tZW50cz9pdGVtX2lkPWA7XG5cbi8vIGNyZWF0ZSBmdW5jdGlvbiB0byBkaXNwbGF5IGNvbW1lbnQgZGF0YVxuY29uc3QgZGlzcGxheUNvbW1lbnREYXRhID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IGdldExpbmtXaXRoSUQgPSBnZXRMaW5rICsgaWQ7XG4gIGlmIChpZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAke2dldExpbmtXaXRoSUR9YCxcbiAgICApO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vLyBjcmVhdGUgZnVuY3Rpb24gdG8gc2VuZCBjb21tZW50IGlucHV0IHRvIHRoZSBhcGlcbmNvbnN0IGxlYXZlQ29tbWVudElucHV0ID0gYXN5bmMgKHJlbmRlckNvbW1lbnQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGxpbmssIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVuZGVyQ29tbWVudCksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgY29uc3QgYWxsQ29tbWVudHMgPSBhd2FpdCBkaXNwbGF5Q29tbWVudERhdGEocmVuZGVyQ29tbWVudC5pdGVtX2lkKTtcbiAgICAgIGlmIChhbGxDb21tZW50cyAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gYWxsQ29tbWVudHM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8vIGV4cG9ydCB0aGUgcmVsZXZhbnQgZmlsZXNcbmV4cG9ydCB7IGxlYXZlQ29tbWVudElucHV0LCBkaXNwbGF5Q29tbWVudERhdGEgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCBnZXRMaXN0cyBmcm9tICcuL21vZHVsZXMvZGlzcGxheS5qcyc7XG5pbXBvcnQgZ2V0TWVhbEl0ZW0gZnJvbSAnLi9tb2R1bGVzL2RvbXBvcHVwY2FyZC5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5Q29tbWVudERhdGEgfSBmcm9tICcuL21vZHVsZXMvc3VibWl0Q29tbWVudC5qcyc7XG4vLyBpbXBvcnQgZ2V0TGlzdHMgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXkuanMnO1xuaW1wb3J0IGl0ZW1Db3VudGVyIGZyb20gJy4vbW9kdWxlcy9pdGVtc0NvdW50ZXIuanMnO1xuaW1wb3J0IGdldERhdGEgZnJvbSAnLi9tb2R1bGVzL2dldGRhdGEuanMnO1xuXG4vLyBsYW9kIGRvbSBjb250ZW50IHdoZW4gd2VicGFnZSBpcyBsb2FkZWRcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBnZXRMaXN0cygpO1xuICBjb25zdCBob21lSXRlbUNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1udW1iZXInKTtcbiAgY29uc3QgZ2V0SXRlbUxpc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG1lYWxMaXN0cyA9IGF3YWl0IGdldERhdGEoKTtcbiAgICAgIGNvbnN0IGNvdW50ZXJBcnJheSA9IG1lYWxMaXN0cy5jYXRlZ29yaWVzO1xuICAgICAgaG9tZUl0ZW1Db3VudGVyLnRleHRDb250ZW50ID0gaXRlbUNvdW50ZXIoY291bnRlckFycmF5KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgZ2V0SXRlbUxpc3QoKTtcbn0pO1xuXG5nZXRNZWFsSXRlbSgpO1xuXG5kaXNwbGF5Q29tbWVudERhdGEoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=