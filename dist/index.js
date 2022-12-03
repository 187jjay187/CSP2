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
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  background-color: hsla(120, 100%, 50%, 1);\r\n  background-image:\r\n    radial-gradient(at 81% 100%, hsla(158, 100%, 93%, 1) 0, transparent 50%),\r\n    radial-gradient(at 43% 0%, hsla(187, 100%, 74%, 1) 0, transparent 50%),\r\n    radial-gradient(at 100% 0%, hsla(146, 100%, 50%, 0.92) 0, transparent 50%),\r\n    radial-gradient(at 21% 41%, hsla(154, 100%, 93%, 1) 0, transparent 50%),\r\n    radial-gradient(at 74% 35%, hsla(139, 100%, 76%, 1) 0, transparent 50%),\r\n    radial-gradient(at 0% 100%, hsla(311, 100%, 93%, 1) 0, transparent 50%),\r\n    radial-gradient(at 0% 0%, hsla(142, 100%, 76%, 1) 0, transparent 50%);\r\n  color: rgba(0, 0, 0, 0.7);\r\n  font-size: 1.6rem;\r\n  line-height: 1.6;\r\n  letter-spacing: 0.04rem;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #000;\r\n  color: #fff;\r\n}\r\n\r\n.logo span {\r\n  font-size: 3rem;\r\n  font-weight: 700;\r\n  line-height: 1.7;\r\n  color: #fff;\r\n  margin-inline: 2rem;\r\n}\r\n\r\n.menunav {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.menunav li {\r\n  list-style: none;\r\n  margin: 2rem;\r\n}\r\n\r\n.menunav li a {\r\n  text-decoration: none;\r\n  font-size: 2rem;\r\n  color: #fff;\r\n}\r\n\r\n.cardBg {\r\n  display: none;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: fixed;\r\n  top: 0;\r\n  background-color: rgb(0, 0, 0, 0.5);\r\n  width: 100%;\r\n  height: 100vh;\r\n  z-index: 100;\r\n}\r\n\r\n.popUpCard {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #000;\r\n  width: 50rem;\r\n  height: 90%;\r\n  border: 2px solid rgb(255, 255, 255);\r\n  border-radius: 1rem;\r\n  padding: 2rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.closeButton {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-self: flex-end;\r\n  position: fixed;\r\n  width: 2.5rem;\r\n  height: 2.5rem;\r\n  border-radius: 5px;\r\n  border: none;\r\n  font-size: 1.6rem;\r\n  color: white;\r\n  background-color: #3fc979;\r\n}\r\n\r\n.cardDiscription {\r\n  padding: 0 1.5rem;\r\n  font-size: 1.6rem;\r\n  line-height: 2.2rem;\r\n  text-align: center;\r\n}\r\n\r\n.numberComments {\r\n  margin-top: 2rem;\r\n  margin-bottom: 1rem;\r\n  font-size: 2.2rem;\r\n}\r\n\r\n.comment {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.comment-el {\r\n  display: flex;\r\n  flex-direction: row;\r\n  font-size: 1.4rem;\r\n  gap: 1rem;\r\n  border: 1px solid green;\r\n  border-radius: 5px;\r\n  padding: 0.5rem;\r\n  background-color: rgb(0, 0, 0, 0.1);\r\n  width: 80%;\r\n  line-height: 1.6rem;\r\n  margin: 0 auto 1rem auto;\r\n}\r\n\r\n.leaveComment {\r\n  margin-top: 2rem;\r\n  margin-bottom: 1rem;\r\n  font-size: 2.2rem;\r\n}\r\n\r\n.cmtInput {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5rem;\r\n  width: 100%;\r\n}\r\n\r\n.cmtInput input {\r\n  margin: 0 auto;\r\n  width: 60%;\r\n  height: 3rem;\r\n  padding: 1rem;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  border: 1px solid green;\r\n  font-weight: 300;\r\n  background: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.cmtInput input::placeholder {\r\n  font-style: oblique;\r\n}\r\n\r\n.cmtInput textarea {\r\n  margin: 0 auto;\r\n  width: 60%;\r\n  height: 10rem;\r\n  padding: 1rem;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  border: 1px solid green;\r\n  resize: none;\r\n  font-weight: 300;\r\n  background: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.cmtInput textarea::placeholder {\r\n  font-style: oblique;\r\n}\r\n\r\n.commentButton {\r\n  margin: 0 auto 1rem auto;\r\n  width: 25%;\r\n  height: 3.5rem;\r\n  border: 1px solid green;\r\n  padding: 0.5rem;\r\n  border-radius: 0.5rem;\r\n  background: rgba(255, 255, 255, 0.8);\r\n  cursor: pointer;\r\n}\r\n\r\n.commentButton:hover {\r\n  font-size: 1.4rem;\r\n  border: 2px solid green;\r\n  width: 26%;\r\n  height: 3.9rem;\r\n}\r\n\r\n.dateOfComment {\r\n  min-width: 8rem;\r\n}\r\n\r\n.message {\r\n  font-size: 1.4rem;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  background-color: rgb(0, 0, 0, 0.1);\r\n  width: 80%;\r\n}\r\n\r\n.cardImg {\r\n  margin: 2rem auto;\r\n}\r\n\r\n.item-number {\r\n  width: 100px;\r\n  height: 100px;\r\n  padding: 0.3rem 0.5rem;\r\n  background-color: #fff;\r\n  color: #000;\r\n  font-size: 1.2rem;\r\n  border-radius: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  position: fixed;\r\n  bottom: 0;\r\n  text-align: center;\r\n  height: 5rem;\r\n  font-size: 2rem;\r\n  width: 100%;\r\n  background-color: #000;\r\n  color: white;\r\n}\r\n\r\nsection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 2% 3rem;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.meal-title-section {\r\n  font-size: 2rem;\r\n  color: rgba(0, 0, 0, 0.7);\r\n  font-weight: 600;\r\n  text-align: center;\r\n  padding: 3rem 0 1rem 0;\r\n}\r\n\r\n#meals-container {\r\n  display: grid;\r\n  margin: 2rem 0 8rem 0;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 3rem;\r\n}\r\n\r\n.meal-card {\r\n  background-color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 36rem;\r\n  align-items: center;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.79);\r\n  padding: 3rem;\r\n  transition: 0.4s ease-in;\r\n}\r\n\r\n.meal-card:hover {\r\n  transform: translateY(-20px);\r\n}\r\n\r\n.meal-title-name {\r\n  display: flex;\r\n}\r\n\r\n.meal-title {\r\n  margin: 3rem;\r\n}\r\n\r\n.love-icon {\r\n  font-size: 2.5rem;\r\n  background-color: #000;\r\n  color: #3fc979;\r\n  width: 50px;\r\n  height: 50px;\r\n  padding: 0.4rem 0.7rem;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  box-shadow: 0 4px 21px -12px #3fc979;\r\n}\r\n\r\n.love-icon:hover {\r\n  background-color: #fff;\r\n  color: #3fc979;\r\n}\r\n\r\n.love-icon:active {\r\n  background-color: #3fc979;\r\n  color: white;\r\n}\r\n\r\n.likes-display {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n#comment-button {\r\n  background-color: #000;\r\n  color: #3fc979;\r\n  padding: 1.5rem 2rem;\r\n  font-size: 1.5rem;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  transition: 0.4s ease-in;\r\n  outline: 0;\r\n  border: 0;\r\n}\r\n\r\n#comment-button:hover {\r\n  background-color: transparent;\r\n  color: #000;\r\n  border: 1px solid #3fc979;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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","sourcesContent":["*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  background-color: hsla(120, 100%, 50%, 1);\r\n  background-image:\r\n    radial-gradient(at 81% 100%, hsla(158, 100%, 93%, 1) 0, transparent 50%),\r\n    radial-gradient(at 43% 0%, hsla(187, 100%, 74%, 1) 0, transparent 50%),\r\n    radial-gradient(at 100% 0%, hsla(146, 100%, 50%, 0.92) 0, transparent 50%),\r\n    radial-gradient(at 21% 41%, hsla(154, 100%, 93%, 1) 0, transparent 50%),\r\n    radial-gradient(at 74% 35%, hsla(139, 100%, 76%, 1) 0, transparent 50%),\r\n    radial-gradient(at 0% 100%, hsla(311, 100%, 93%, 1) 0, transparent 50%),\r\n    radial-gradient(at 0% 0%, hsla(142, 100%, 76%, 1) 0, transparent 50%);\r\n  color: rgba(0, 0, 0, 0.7);\r\n  font-size: 1.6rem;\r\n  line-height: 1.6;\r\n  letter-spacing: 0.04rem;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: #000;\r\n  color: #fff;\r\n}\r\n\r\n.logo span {\r\n  font-size: 3rem;\r\n  font-weight: 700;\r\n  line-height: 1.7;\r\n  color: #fff;\r\n  margin-inline: 2rem;\r\n}\r\n\r\n.menunav {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.menunav li {\r\n  list-style: none;\r\n  margin: 2rem;\r\n}\r\n\r\n.menunav li a {\r\n  text-decoration: none;\r\n  font-size: 2rem;\r\n  color: #fff;\r\n}\r\n\r\n.cardBg {\r\n  display: none;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: fixed;\r\n  top: 0;\r\n  background-color: rgb(0, 0, 0, 0.5);\r\n  width: 100%;\r\n  height: 100vh;\r\n  z-index: 100;\r\n}\r\n\r\n.popUpCard {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #000;\r\n  width: 50rem;\r\n  height: 90%;\r\n  border: 2px solid rgb(255, 255, 255);\r\n  border-radius: 1rem;\r\n  padding: 2rem;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.closeButton {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-self: flex-end;\r\n  position: fixed;\r\n  width: 2.5rem;\r\n  height: 2.5rem;\r\n  border-radius: 5px;\r\n  border: none;\r\n  font-size: 1.6rem;\r\n  color: white;\r\n  background-color: #3fc979;\r\n}\r\n\r\n.cardDiscription {\r\n  padding: 0 1.5rem;\r\n  font-size: 1.6rem;\r\n  line-height: 2.2rem;\r\n  text-align: center;\r\n}\r\n\r\n.numberComments {\r\n  margin-top: 2rem;\r\n  margin-bottom: 1rem;\r\n  font-size: 2.2rem;\r\n}\r\n\r\n.comment {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.comment-el {\r\n  display: flex;\r\n  flex-direction: row;\r\n  font-size: 1.4rem;\r\n  gap: 1rem;\r\n  border: 1px solid green;\r\n  border-radius: 5px;\r\n  padding: 0.5rem;\r\n  background-color: rgb(0, 0, 0, 0.1);\r\n  width: 80%;\r\n  line-height: 1.6rem;\r\n  margin: 0 auto 1rem auto;\r\n}\r\n\r\n.leaveComment {\r\n  margin-top: 2rem;\r\n  margin-bottom: 1rem;\r\n  font-size: 2.2rem;\r\n}\r\n\r\n.cmtInput {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.5rem;\r\n  width: 100%;\r\n}\r\n\r\n.cmtInput input {\r\n  margin: 0 auto;\r\n  width: 60%;\r\n  height: 3rem;\r\n  padding: 1rem;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  border: 1px solid green;\r\n  font-weight: 300;\r\n  background: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.cmtInput input::placeholder {\r\n  font-style: oblique;\r\n}\r\n\r\n.cmtInput textarea {\r\n  margin: 0 auto;\r\n  width: 60%;\r\n  height: 10rem;\r\n  padding: 1rem;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  border: 1px solid green;\r\n  resize: none;\r\n  font-weight: 300;\r\n  background: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.cmtInput textarea::placeholder {\r\n  font-style: oblique;\r\n}\r\n\r\n.commentButton {\r\n  margin: 0 auto 1rem auto;\r\n  width: 25%;\r\n  height: 3.5rem;\r\n  border: 1px solid green;\r\n  padding: 0.5rem;\r\n  border-radius: 0.5rem;\r\n  background: rgba(255, 255, 255, 0.8);\r\n  cursor: pointer;\r\n}\r\n\r\n.commentButton:hover {\r\n  font-size: 1.4rem;\r\n  border: 2px solid green;\r\n  width: 26%;\r\n  height: 3.9rem;\r\n}\r\n\r\n.dateOfComment {\r\n  min-width: 8rem;\r\n}\r\n\r\n.message {\r\n  font-size: 1.4rem;\r\n  text-align: center;\r\n  border-radius: 5px;\r\n  background-color: rgb(0, 0, 0, 0.1);\r\n  width: 80%;\r\n}\r\n\r\n.cardImg {\r\n  margin: 2rem auto;\r\n}\r\n\r\n.item-number {\r\n  width: 100px;\r\n  height: 100px;\r\n  padding: 0.3rem 0.5rem;\r\n  background-color: #fff;\r\n  color: #000;\r\n  font-size: 1.2rem;\r\n  border-radius: 100%;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  position: fixed;\r\n  bottom: 0;\r\n  text-align: center;\r\n  height: 5rem;\r\n  font-size: 2rem;\r\n  width: 100%;\r\n  background-color: #000;\r\n  color: white;\r\n}\r\n\r\nsection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 2% 3rem;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.meal-title-section {\r\n  font-size: 2rem;\r\n  color: rgba(0, 0, 0, 0.7);\r\n  font-weight: 600;\r\n  text-align: center;\r\n  padding: 3rem 0 1rem 0;\r\n}\r\n\r\n#meals-container {\r\n  display: grid;\r\n  margin: 2rem 0 8rem 0;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 3rem;\r\n}\r\n\r\n.meal-card {\r\n  background-color: #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 36rem;\r\n  align-items: center;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.79);\r\n  padding: 3rem;\r\n  transition: 0.4s ease-in;\r\n}\r\n\r\n.meal-card:hover {\r\n  transform: translateY(-20px);\r\n}\r\n\r\n.meal-title-name {\r\n  display: flex;\r\n}\r\n\r\n.meal-title {\r\n  margin: 3rem;\r\n}\r\n\r\n.love-icon {\r\n  font-size: 2.5rem;\r\n  background-color: #000;\r\n  color: #3fc979;\r\n  width: 50px;\r\n  height: 50px;\r\n  padding: 0.4rem 0.7rem;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  box-shadow: 0 4px 21px -12px #3fc979;\r\n}\r\n\r\n.love-icon:hover {\r\n  background-color: #fff;\r\n  color: #3fc979;\r\n}\r\n\r\n.love-icon:active {\r\n  background-color: #3fc979;\r\n  color: white;\r\n}\r\n\r\n.likes-display {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n#comment-button {\r\n  background-color: #000;\r\n  color: #3fc979;\r\n  padding: 1.5rem 2rem;\r\n  font-size: 1.5rem;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  transition: 0.4s ease-in;\r\n  outline: 0;\r\n  border: 0;\r\n}\r\n\r\n#comment-button:hover {\r\n  background-color: transparent;\r\n  color: #000;\r\n  border: 1px solid #3fc979;\r\n}\r\n"],"sourceRoot":""}]);
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
    const mealLists = await (0,_modules_getdata_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
    const counterArray = mealLists.categories;
    homeItemCounter.textContent = (0,_modules_itemsCounter_js__WEBPACK_IMPORTED_MODULE_4__["default"])(counterArray);
  };
  getItemList();
});

(0,_modules_dompopupcard_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

(0,_modules_submitComment_js__WEBPACK_IMPORTED_MODULE_3__.displayCommentData)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDM0NBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN1QjtBQUNRO0FBQ1k7QUFDaEU7QUFDb0Q7QUFDVDtBQUMzQztBQUNBO0FBQ0E7QUFDQSxFQUFFLCtEQUFRO0FBQ1Y7QUFDQTtBQUNBLDRCQUE0QiwrREFBTztBQUNuQztBQUNBLGtDQUFrQyxvRUFBVztBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0VBQVc7QUFDWDtBQUNBLDZFQUFrQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQ1NQMi8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vQ1NQMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vQ1NQMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL0NTUDIvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vQ1NQMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9DU1AyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9DU1AyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL0NTUDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vQ1NQMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL0NTUDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9DU1AyLy4vc3JjL21vZHVsZXMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9DU1AyLy4vc3JjL21vZHVsZXMvZGlzcGxheW1lYWxzLmpzIiwid2VicGFjazovL0NTUDIvLi9zcmMvbW9kdWxlcy9kb21wb3B1cGNhcmQuanMiLCJ3ZWJwYWNrOi8vQ1NQMi8uL3NyYy9tb2R1bGVzL2dldExpa2VzRGF0YS5qcyIsIndlYnBhY2s6Ly9DU1AyLy4vc3JjL21vZHVsZXMvZ2V0ZGF0YS5qcyIsIndlYnBhY2s6Ly9DU1AyLy4vc3JjL21vZHVsZXMvaXRlbXNDb3VudGVyLmpzIiwid2VicGFjazovL0NTUDIvLi9zcmMvbW9kdWxlcy9zdWJtaXRDb21tZW50LmpzIiwid2VicGFjazovL0NTUDIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQ1NQMi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9DU1AyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9DU1AyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQ1NQMi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0NTUDIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL0NTUDIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbio6OmFmdGVyLFxcclxcbio6OmJlZm9yZSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMTIwLCAxMDAlLCA1MCUsIDEpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTpcXHJcXG4gICAgcmFkaWFsLWdyYWRpZW50KGF0IDgxJSAxMDAlLCBoc2xhKDE1OCwgMTAwJSwgOTMlLCAxKSAwLCB0cmFuc3BhcmVudCA1MCUpLFxcclxcbiAgICByYWRpYWwtZ3JhZGllbnQoYXQgNDMlIDAlLCBoc2xhKDE4NywgMTAwJSwgNzQlLCAxKSAwLCB0cmFuc3BhcmVudCA1MCUpLFxcclxcbiAgICByYWRpYWwtZ3JhZGllbnQoYXQgMTAwJSAwJSwgaHNsYSgxNDYsIDEwMCUsIDUwJSwgMC45MikgMCwgdHJhbnNwYXJlbnQgNTAlKSxcXHJcXG4gICAgcmFkaWFsLWdyYWRpZW50KGF0IDIxJSA0MSUsIGhzbGEoMTU0LCAxMDAlLCA5MyUsIDEpIDAsIHRyYW5zcGFyZW50IDUwJSksXFxyXFxuICAgIHJhZGlhbC1ncmFkaWVudChhdCA3NCUgMzUlLCBoc2xhKDEzOSwgMTAwJSwgNzYlLCAxKSAwLCB0cmFuc3BhcmVudCA1MCUpLFxcclxcbiAgICByYWRpYWwtZ3JhZGllbnQoYXQgMCUgMTAwJSwgaHNsYSgzMTEsIDEwMCUsIDkzJSwgMSkgMCwgdHJhbnNwYXJlbnQgNTAlKSxcXHJcXG4gICAgcmFkaWFsLWdyYWRpZW50KGF0IDAlIDAlLCBoc2xhKDE0MiwgMTAwJSwgNzYlLCAxKSAwLCB0cmFuc3BhcmVudCA1MCUpO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHNwYW4ge1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51bmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51bmF2IGxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBtYXJnaW46IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51bmF2IGxpIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5jYXJkQmcge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC41KTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcFVwQ2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgd2lkdGg6IDUwcmVtO1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlQnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAyLjVyZW07XFxyXFxuICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmYzk3OTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmREaXNjcmlwdGlvbiB7XFxyXFxuICBwYWRkaW5nOiAwIDEuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIuMnJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm51bWJlckNvbW1lbnRzIHtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMSk7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvIDFyZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmxlYXZlQ29tbWVudCB7XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY210SW5wdXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEuNXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY210SW5wdXQgaW5wdXQge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxyXFxufVxcclxcblxcclxcbi5jbXRJbnB1dCBpbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNtdElucHV0IHRleHRhcmVhIHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGhlaWdodDogMTByZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNtdElucHV0IHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudEJ1dHRvbiB7XFxyXFxuICBtYXJnaW46IDAgYXV0byAxcmVtIGF1dG87XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbiAgaGVpZ2h0OiAzLjVyZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRCdXR0b246aG92ZXIge1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcXHJcXG4gIHdpZHRoOiAyNiU7XFxyXFxuICBoZWlnaHQ6IDMuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhdGVPZkNvbW1lbnQge1xcclxcbiAgbWluLXdpZHRoOiA4cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVzc2FnZSB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjEpO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRJbWcge1xcclxcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5pdGVtLW51bWJlciB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiA1cmVtO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIlIDNyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC10aXRsZS1zZWN0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogM3JlbSAwIDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuI21lYWxzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgbWFyZ2luOiAycmVtIDAgOHJlbSAwO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAzNnJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgYm94LXNoYWRvdzogMCA0cHggMjFweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNzkpO1xcclxcbiAgcGFkZGluZzogM3JlbTtcXHJcXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtY2FyZDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC10aXRsZS1uYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXRpdGxlIHtcXHJcXG4gIG1hcmdpbjogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvdmUtaWNvbiB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBjb2xvcjogIzNmYzk3OTtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgcGFkZGluZzogMC40cmVtIDAuN3JlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIxcHggLTEycHggIzNmYzk3OTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvdmUtaWNvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgY29sb3I6ICMzZmM5Nzk7XFxyXFxufVxcclxcblxcclxcbi5sb3ZlLWljb246YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmM5Nzk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5saWtlcy1kaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgY29sb3I6ICMzZmM5Nzk7XFxyXFxuICBwYWRkaW5nOiAxLjVyZW0gMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW47XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzZmM5Nzk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtFQUNWLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekM7Ozs7Ozs7eUVBT3VFO0VBQ3ZFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLE1BQU07RUFDTixtQ0FBbUM7RUFDbkMsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQ0FBb0M7RUFD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QTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxyXFxuKjo6YWZ0ZXIsXFxyXFxuKjo6YmVmb3JlIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgxMjAsIDEwMCUsIDUwJSwgMSk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcclxcbiAgICByYWRpYWwtZ3JhZGllbnQoYXQgODElIDEwMCUsIGhzbGEoMTU4LCAxMDAlLCA5MyUsIDEpIDAsIHRyYW5zcGFyZW50IDUwJSksXFxyXFxuICAgIHJhZGlhbC1ncmFkaWVudChhdCA0MyUgMCUsIGhzbGEoMTg3LCAxMDAlLCA3NCUsIDEpIDAsIHRyYW5zcGFyZW50IDUwJSksXFxyXFxuICAgIHJhZGlhbC1ncmFkaWVudChhdCAxMDAlIDAlLCBoc2xhKDE0NiwgMTAwJSwgNTAlLCAwLjkyKSAwLCB0cmFuc3BhcmVudCA1MCUpLFxcclxcbiAgICByYWRpYWwtZ3JhZGllbnQoYXQgMjElIDQxJSwgaHNsYSgxNTQsIDEwMCUsIDkzJSwgMSkgMCwgdHJhbnNwYXJlbnQgNTAlKSxcXHJcXG4gICAgcmFkaWFsLWdyYWRpZW50KGF0IDc0JSAzNSUsIGhzbGEoMTM5LCAxMDAlLCA3NiUsIDEpIDAsIHRyYW5zcGFyZW50IDUwJSksXFxyXFxuICAgIHJhZGlhbC1ncmFkaWVudChhdCAwJSAxMDAlLCBoc2xhKDMxMSwgMTAwJSwgOTMlLCAxKSAwLCB0cmFuc3BhcmVudCA1MCUpLFxcclxcbiAgICByYWRpYWwtZ3JhZGllbnQoYXQgMCUgMCUsIGhzbGEoMTQyLCAxMDAlLCA3NiUsIDEpIDAsIHRyYW5zcGFyZW50IDUwJSk7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRyZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28gc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNztcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLWlubGluZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVuYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVuYXYgbGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVuYXYgbGkgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRCZyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wVXBDYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICB3aWR0aDogNTByZW07XFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VCdXR0b24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDIuNXJlbTtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2ZjOTc5O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZERpc2NyaXB0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDAgMS41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMi4ycmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubnVtYmVyQ29tbWVudHMge1xcclxcbiAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1lbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4xKTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBsaW5lLWhlaWdodDogMS42cmVtO1xcclxcbiAgbWFyZ2luOiAwIGF1dG8gMXJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVhdmVDb21tZW50IHtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAyLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5jbXRJbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMS41cmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jbXRJbnB1dCBpbnB1dCB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBoZWlnaHQ6IDNyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNtdElucHV0IGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xcclxcbn1cXHJcXG5cXHJcXG4uY210SW5wdXQgdGV4dGFyZWEge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgaGVpZ2h0OiAxMHJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG4uY210SW5wdXQgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50QnV0dG9uIHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvIDFyZW0gYXV0bztcXHJcXG4gIHdpZHRoOiAyNSU7XFxyXFxuICBoZWlnaHQ6IDMuNXJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudEJ1dHRvbjpob3ZlciB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcclxcbiAgd2lkdGg6IDI2JTtcXHJcXG4gIGhlaWdodDogMy45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF0ZU9mQ29tbWVudCB7XFxyXFxuICBtaW4td2lkdGg6IDhyZW07XFxyXFxufVxcclxcblxcclxcbi5tZXNzYWdlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMSk7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZEltZyB7XFxyXFxuICBtYXJnaW46IDJyZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tbnVtYmVyIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbnNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMiUgM3JlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXRpdGxlLXNlY3Rpb24ge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAzcmVtIDAgMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVhbHMtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBtYXJnaW46IDJyZW0gMCA4cmVtIDA7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgZ2FwOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jYXJkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDM2cmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICBib3gtc2hhZG93OiAwIDRweCAyMXB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC43OSk7XFxyXFxuICBwYWRkaW5nOiAzcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jYXJkOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXRpdGxlLW5hbWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtdGl0bGUge1xcclxcbiAgbWFyZ2luOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubG92ZS1pY29uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gIGNvbG9yOiAjM2ZjOTc5O1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAwLjRyZW0gMC43cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYm94LXNoYWRvdzogMCA0cHggMjFweCAtMTJweCAjM2ZjOTc5O1xcclxcbn1cXHJcXG5cXHJcXG4ubG92ZS1pY29uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogIzNmYzk3OTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvdmUtaWNvbjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmYzk3OTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLWRpc3BsYXkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbW1lbnQtYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICBjb2xvcjogIzNmYzk3OTtcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbjtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50LWJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzNmYzk3OTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gaW1wb3J0IHJlbGF2ZW50IGNvZGVcclxuaW1wb3J0IGdldERhdGEgZnJvbSAnLi9nZXRkYXRhLmpzJztcclxuaW1wb3J0IG1lYWxMaXN0RGlzcGxheSBmcm9tICcuL2Rpc3BsYXltZWFscy5qcyc7XHJcbmltcG9ydCB7IGdldExpa2VEYXRhLCBwb3N0TGlrZURhdGEgfSBmcm9tICcuL2dldExpa2VzRGF0YS5qcyc7XHJcbmltcG9ydCBnZXRNZWFsSXRlbSBmcm9tICcuL2RvbXBvcHVwY2FyZC5qcyc7XHJcblxyXG4vLyBjcmVhdGUgYSBkaXNwbGF5IGNvbnRhaW5lciBieSBJRFxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVhbHMtY29udGFpbmVyJyk7XHJcbi8vIGZ1bmN0aW9uIHRvIGRpc3BsYXkgdGhlIGxpa2VzXHJcbmNvbnN0IHNldEhlYXJ0TGlrZXMgPSAoaGVhcnQsIGxpa2VzKSA9PiB7XHJcbiAgY29uc3QgaWQgPSBoZWFydC5jbG9zZXN0KCdhcnRpY2xlJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgY29uc3QgaXRlbSA9IGxpa2VzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaXRlbV9pZCA9PT0gaWQpO1xyXG4gIGhlYXJ0LnRleHRDb250ZW50ID0gaXRlbS5saWtlcztcclxufTtcclxuXHJcbi8vIGNsaWNrIGxpa2UgZnVuY3Rpb25cclxuY29uc3QgY2xpY2tMaWtlSGVhcnQgPSAoaGVhcnQpID0+IHtcclxuICBjb25zdCBpZCA9IGhlYXJ0LmNsb3Nlc3QoJ2FydGljbGUnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICBoZWFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IHBvc3RMaWtlRGF0YShpZCk7XHJcbiAgICBjb25zdCBsaWtlcyA9IGF3YWl0IGdldExpa2VEYXRhKCk7XHJcbiAgICBjb25zdCBoZWFydHMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmxpa2VzLXNlY3Rpb24nKTtcclxuICAgIGhlYXJ0cy5mb3JFYWNoKChoZWFydCkgPT4ge1xyXG4gICAgICBzZXRIZWFydExpa2VzKGhlYXJ0LCBsaWtlcyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbi8vIGdldCBtZWFsIGFuZCBsaWtlIGRhdGFcclxuY29uc3QgZ2V0TGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgbGlzdE1lYWxNZW51cyA9IGF3YWl0IGdldERhdGEoKTtcclxuICBjb25zdCBsaWtlcyA9IGF3YWl0IGdldExpa2VEYXRhKCk7XHJcblxyXG4gIGxpc3RNZWFsTWVudXMuY2F0ZWdvcmllcy5mb3JFYWNoKChtZWFsKSA9PiB7XHJcbiAgICBtZWFsTGlzdERpc3BsYXkobWVhbCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGNyZWF0ZSBsaWtlIGljb24gaW4gY29udGFpbmVyXHJcbiAgY29uc3QgaGVhcnRzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlcy1zZWN0aW9uJyk7XHJcbiAgY29uc3QgbG92ZUljb24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmxvdmUtaWNvbicpO1xyXG5cclxuICBoZWFydHMuZm9yRWFjaCgoaGVhcnQpID0+IHtcclxuICAgIHNldEhlYXJ0TGlrZXMoaGVhcnQsIGxpa2VzKTtcclxuICB9KTtcclxuXHJcbiAgbG92ZUljb24uZm9yRWFjaCgoaGVhcnQpID0+IHtcclxuICAgIGNsaWNrTGlrZUhlYXJ0KGhlYXJ0KTtcclxuICB9KTtcclxuXHJcbiAgLy8gY3JlYXRlIGNvbW1lbnQgYnV0dG9uIGZ1bmN0aW9uXHJcbiAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50LUJ1dHRvbicpO1xyXG4gIGxldCBpdGVtSWRDYXRlZ29yeTtcclxuICBpZiAoY29tbWVudCAhPT0gbnVsbCkge1xyXG4gICAgY29tbWVudC5mb3JFYWNoKChidXR0b25DbGljaykgPT4ge1xyXG4gICAgICBidXR0b25DbGljay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZEJnJykuc3R5bGUuZGlzcGxheSA9PT0gJycpIHtcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkQmcnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpdGVtSWRDYXRlZ29yeSA9IGUuY3VycmVudFRhcmdldC5jbG9zZXN0KCdhcnRpY2xlJykuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgZ2V0TWVhbEl0ZW0oaXRlbUlkQ2F0ZWdvcnkpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldExpc3RzO1xyXG4iLCIvLyBjcmVhdGUgZnVuY3Rpb24gdG8gZGlzcGxheSBtZWFsIGxpc3QgZHluYW1pY2FsbHlcclxuY29uc3QgbWVhbExpc3REaXNwbGF5ID0gKG1lYWwpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVhbHMtY29udGFpbmVyJyk7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgLy8gZGl2IHNlY3Rpb24gZm9yIG1lYWwgY2FyZCBhbmQgaW5mb1xyXG4gIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBtZWFsLmlkQ2F0ZWdvcnkpO1xyXG4gIGRpdi5pbm5lckhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cIm1lYWwtY2FyZFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJpbWctb2YtbWVhbFwiPjxpbWcgc3JjPVwiJHttZWFsLnN0ckNhdGVnb3J5VGh1bWJ9XCIgYWx0PVwibWVhbCBpbWdcIj48L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibWVhbC10aXRsZS1uYW1lXCI+XHJcbiAgPGRpdiBjbGFzcz1cIm1lYWwtdGl0bGVcIj48aDM+JHttZWFsLnN0ckNhdGVnb3J5fTwvaDM+PC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImxpa2VzLWRpc3BsYXlcIj48aSBjbGFzcz1cInVpbCB1aWwtaGVhcnQgbG92ZS1pY29uXCI+PC9pPjxwPkxpa2VzPC9wPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY29tbWVudC1CdXR0b25cIiBpZD1cImNvbW1lbnQtYnV0dG9uXCI+Q29tbWVudDwvYnV0dG9uPjwvZGl2PmA7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVhbExpc3REaXNwbGF5OyIsIi8vIGltcG9ydCByZWxhdmVudCBjb2RlXHJcbmltcG9ydCBnZXREYXRhIGZyb20gJy4vZ2V0ZGF0YS5qcyc7XHJcbmltcG9ydCB7IGRpc3BsYXlDb21tZW50RGF0YSwgbGVhdmVDb21tZW50SW5wdXQgfSBmcm9tICcuL3N1Ym1pdENvbW1lbnQuanMnO1xyXG5cclxuLy8gY3JlYXRlIGZ1bmN0aW9uIGZvciBwb3AgdXAgY2FyZFxyXG5jb25zdCBwb3BVcENhcmRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRCZycpO1xyXG5jb25zdCBwb3BVcENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbi8vIGNyZWF0ZSBmdW5jdGlvbiBmb3IgdG8gZGlzcGxheSBjb21tZW50cyBpbiBwb3AgdXAgY2FyZFxyXG5jb25zdCBkZXZDb21tZW50ID0gKGNvbW1lbnRzKSA9PiB7XHJcbiAgY29uc3QgY29tbWVudFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudCcpO1xyXG5cclxuICAvLyBmdW5jdGlvbiB0byBkaXNwbGF5IGNvbW1lbnQgaW5mbyBvbiB0aGUgcG9wIHVwIGNhcmRcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBjb21tZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21tZW50RGl2LmNsYXNzTmFtZSA9ICdjb21tZW50LWVsJztcclxuXHJcbiAgICBjb25zdCBkYXRlT2ZDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZGF0ZU9mQ29tbWVudC5jbGFzc05hbWUgPSAnZGF0ZU9mQ29tbWVudCc7XHJcbiAgICBkYXRlT2ZDb21tZW50LnRleHRDb250ZW50ID0gY29tbWVudHNbaV0uY3JlYXRpb25fZGF0ZTtcclxuXHJcbiAgICBjb25zdCBuYW1lT2ZDb21tZW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBuYW1lT2ZDb21tZW50ZXIuY2xhc3NOYW1lID0gJ25hbWVPZkNvbW1lbnRlcic7XHJcbiAgICBuYW1lT2ZDb21tZW50ZXIudGV4dENvbnRlbnQgPSBgJHtjb21tZW50c1tpXS51c2VybmFtZX06YDtcclxuXHJcbiAgICBjb25zdCBsb3JlbUNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsb3JlbUNvbW1lbnQuY2xhc3NOYW1lID0gJ2xvcmVtQ29tbWVudCc7XHJcbiAgICBsb3JlbUNvbW1lbnQudGV4dENvbnRlbnQgPSBjb21tZW50c1tpXS5jb21tZW50O1xyXG5cclxuICAgIGNvbW1lbnREaXYuYXBwZW5kQ2hpbGQoZGF0ZU9mQ29tbWVudCk7XHJcbiAgICBjb21tZW50RGl2LmFwcGVuZENoaWxkKG5hbWVPZkNvbW1lbnRlcik7XHJcbiAgICBjb21tZW50RGl2LmFwcGVuZENoaWxkKGxvcmVtQ29tbWVudCk7XHJcbiAgICBjb21tZW50U2VjdGlvbi5hcHBlbmRDaGlsZChjb21tZW50RGl2KTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBjcmVhdGUgZnVudGlvbiBmb3IgbnVtYmVyIG9mIGNvbW1lbnRzIHNob3duXHJcbmNvbnN0IGNvbW1lbnROdW1iZXJzID0gKGNvbW1lbnRzKSA9PiAoY29tbWVudHMubGVuZ3RoID8gY29tbWVudHMubGVuZ3RoIDogMCk7XHJcblxyXG4vLyBkaXNwbGF5IHNlbGVjdGVkIG1lYWwgcG9wIHVwIGNhcmQgaW5mb1xyXG5jb25zdCBkaXNwbGF5TWVhbEl0ZW1zID0gKG1lYWxJdGVtU2VsZWN0ZWQsIGNvbW1lbnRzKSA9PiB7XHJcbiAgcG9wVXBDYXJkLmNsYXNzTmFtZSA9ICdwb3BVcENhcmQnO1xyXG4gIHBvcFVwQ2FyZC5pbm5lckhUTUwgPSBgXHJcbiAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlQnV0dG9uXCI+WDwvYnV0dG9uPlxyXG4gIDxpbWcgY2xhc3M9XCJjYXJkSW1nXCIgc3JjPVwiJHttZWFsSXRlbVNlbGVjdGVkLnN0ckNhdGVnb3J5VGh1bWJ9XCIgYWx0PVwibWVhbEltYWdlXCI+XHJcbiAgPGgyIGNsYXNzPVwiY2FyZFRpdGxlXCI+JHttZWFsSXRlbVNlbGVjdGVkLnN0ckNhdGVnb3J5fTwvaDI+XHJcbiAgPHAgY2xhc3M9XCJjYXJkRGlzY3JpcHRpb25cIj4ke21lYWxJdGVtU2VsZWN0ZWQuc3RyQ2F0ZWdvcnlEZXNjcmlwdGlvbn08L3A+XHJcbiAgPGgzIGNsYXNzPVwibnVtYmVyQ29tbWVudHNcIj5Db21tZW50czxzcGFuIGlkPVwibnVtYmVyQ29tbWVudHNcIiBjbGFzcz1cImNvbW1lbnROdW1iZXJzXCI+KCR7Y29tbWVudE51bWJlcnMoY29tbWVudHMpfSk8L3NwYW4+PC9oMz5cclxuICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPiAgICAgXHJcbiAgPC9kaXY+XHJcbiAgPGgzIGNsYXNzPVwibGVhdmVDb21tZW50XCI+TGVhdmUgQSBDb21tZW50PC9oMz5cclxuICA8IS0tIGZvcm0gc2VjdGlvbiBzdGFydHMgaGVyZSAtLT5cclxuPGZvcm0gaWQ9XCJjbXRJbnB1dFwiIGNsYXNzPVwiY210SW5wdXRcIiBhY3Rpb249XCIjXCIgbWV0aG9kPVwicG9zdFwiPlxyXG48aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiIHJlcXVpcmVkPlxyXG48dGV4dGFyZWEgdHlwZT1cInRleHRcIiBuYW1lPVwiY29tbWVudFwiIHBsYWNlaG9sZGVyPVwiQWRkIENvbW1lbnQuLi5cIiByZXF1aXJlZD48L3RleHRhcmVhPlxyXG48YnV0dG9uIGNsYXNzPVwiY29tbWVudEJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5Qb3N0IENvbW1lbnQ8L2J1dHRvbj5cclxuPC9mb3JtPiBcclxuICA8IS0tIGZvcm0gc2VjdGlvbiBlbmRzIGhlcmUgLS0+XHJcbiAgPCEtLSBzdWNjZXNzbWVzc2FnZSBzZWN0aW9uIHN0YXJ0cyBoZXJlIC0tPlxyXG4gICAgICA8c3BhbiBpZD1cInN1Y2Nlc3NNZXNzYWdlXCIgY2xhc3M9XCJtZXNzYWdlXCI+PC9zcGFuPmA7XHJcblxyXG4gIHBvcFVwQ2FyZFNlY3Rpb24uYXBwZW5kQ2hpbGQocG9wVXBDYXJkKTtcclxuICBkZXZDb21tZW50KGNvbW1lbnRzKTtcclxufTtcclxuXHJcbi8vIGdldCBzZWxldGVkIG1lYWwgZnJvbSBhcGkgSWRDYXRlZ29yeVxyXG5jb25zdCBnZXRNZWFsSXRlbSA9IGFzeW5jIChpdGVtSWRDYXRlZ29yeSkgPT4ge1xyXG4gIGNvbnN0IG1lYWxJdGVtcyA9IGF3YWl0IGdldERhdGEoKTtcclxuICBpZiAoaXRlbUlkQ2F0ZWdvcnkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgY29uc3QgY29tbWVudFNlYyA9IGF3YWl0IGRpc3BsYXlDb21tZW50RGF0YShpdGVtSWRDYXRlZ29yeSk7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxyXG4gICAgY29uc3QgbWVhbEl0ZW1TZWxlY3RlZCA9IG1lYWxJdGVtcy5jYXRlZ29yaWVzLmZpbmQoKG1lYWwpID0+IG1lYWwuaWRDYXRlZ29yeSA9PT0gaXRlbUlkQ2F0ZWdvcnkpO1xyXG4gICAgZGlzcGxheU1lYWxJdGVtcyhtZWFsSXRlbVNlbGVjdGVkLCBjb21tZW50U2VjKTtcclxuICB9XHJcblxyXG4gIC8vIHJlbW92ZSBjb21tZW50c1xyXG4gIGNvbnN0IHJlbW92ZUFsbENvbW1lbnRzID0gKHBhcmVudCkgPT4ge1xyXG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gcmVzZXQgY29tbWVudCBpbnB1dCBmaWVsZFxyXG4gIGNvbnN0IHJlc2V0Q210ID0gYXN5bmMgKGFsbENvbW1lbnRzKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtYmVyQ29tbWVudHMnKS5pbm5lckhUTUwgPSBgKCR7Y29tbWVudE51bWJlcnMoYWxsQ29tbWVudHMpfSlgO1xyXG4gICAgcmVtb3ZlQWxsQ29tbWVudHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQnKSk7XHJcbiAgICBkZXZDb21tZW50KGFsbENvbW1lbnRzKTtcclxuICB9O1xyXG5cclxuICAvLyB3aGl0ZSBzcGFjZSBzaG91bGQgbm90IGJlIGVtcHR5XHJcbiAgY29uc3Qgd2hpdGVTZWNTcGMgPSAoeCkgPT4ge1xyXG4gICAgY29uc3Qgc3BjID0gbmV3IFJlZ0V4cCgvXlxccyQvKTtcclxuICAgIHJldHVybiBzcGMudGVzdCh4LmNoYXJBdCgwKSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gY3JlYXRlIGZ1bmN0aW9uIHRvIHJlZ2lzdGVyIGNvbW1lbnRzIG9uIHRoZSBhcGlcclxuICBjb25zdCBsZWF2ZUNvbW1lbnRSZWdpc3RlcmVkID0gYXN5bmMgKGl0ZW1JZENhdGVnb3J5KSA9PiB7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NtdElucHV0JykgIT09IG51bGwpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NtdElucHV0JykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgY29tbWVudGVySW5wdXROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NtdElucHV0JykuZWxlbWVudHMudXNlcm5hbWU7XHJcbiAgICAgICAgY29uc3QgaW5wdXRDbXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY210SW5wdXQnKS5lbGVtZW50cy5jb21tZW50O1xyXG5cclxuICAgICAgICAvLyBkaXNwbGF5IGVycm9yIG1lc3NhZ2Ugd2hlbiBpbnB1dCBmaWVsZCBjb250YWlucyB3aGl0ZSBzcGFjZXNcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpLmlubmVySFRNTCA9ICcgUmVtb3ZlIGVtcHR5IHNwYWNlcyBQbGVhc2UuICc7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKS5zdHlsZS5jb2xvciA9ICdSZWQnO1xyXG5cclxuICAgICAgICBpZiAoIXdoaXRlU2VjU3BjKGNvbW1lbnRlcklucHV0TmFtZS52YWx1ZSkgJiYgIXdoaXRlU2VjU3BjKGlucHV0Q210LnZhbHVlKSkge1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKS5pbm5lckhUTUwgPSAnIENvbW1lbnQgUG9zdGVkICc7XHJcbiAgICAgICAgICBjb25zdCByZW5kZXJDb21tZW50ID0ge1xyXG4gICAgICAgICAgICBpdGVtX2lkOiBpdGVtSWRDYXRlZ29yeSxcclxuICAgICAgICAgICAgdXNlcm5hbWU6IGNvbW1lbnRlcklucHV0TmFtZS52YWx1ZS50cmltKCksXHJcbiAgICAgICAgICAgIGNvbW1lbnQ6IGlucHV0Q210LnZhbHVlLnRyaW0oKSxcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgLy8gZGlzcGxheSBhbGwgY29tbWVudHMgdGhhdCBoYXZlIGJlZW4gcHJldmlvdXNseSBzZW50IHRvIHRoZSBhcGlcclxuICAgICAgICAgIGNvbnN0IGFsbENvbW1lbnRzID0gYXdhaXQgbGVhdmVDb21tZW50SW5wdXQocmVuZGVyQ29tbWVudCk7XHJcbiAgICAgICAgICAvLyByZXNldCB0aGUgZm9ybVxyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NtdElucHV0JykucmVzZXQoKTtcclxuICAgICAgICAgIHJlc2V0Q210KGFsbENvbW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VjY2Vzc01lc3NhZ2UnKS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gcmVnaXN0ZXIgYSBjb21tZW50IG9uIHRoZSBhcGlcclxuICBsZWF2ZUNvbW1lbnRSZWdpc3RlcmVkKGl0ZW1JZENhdGVnb3J5KTtcclxuXHJcbiAgLy8gY3JlYXRlIGNsb3NlIGJ1dHRvbiBmb3IgcG9wIHVwIGNhcmRcclxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlQnV0dG9uJykgIT09IG51bGwpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZUJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAocG9wVXBDYXJkU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID09PSAnZmxleCcpIHtcclxuICAgICAgICBwb3BVcENhcmRTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gZXhwb3J0IHJlbGV2YW50IGNvZGVcclxuZXhwb3J0IGRlZmF1bHQgZ2V0TWVhbEl0ZW07XHJcbmV4cG9ydCB7IGNvbW1lbnROdW1iZXJzIH07IiwiY29uc3QgbGluayA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke3Byb2Nlc3MuZW52LkFQSV9LRVl9L2xpa2VzYDtcclxuXHJcbi8vIGdldCBsaWtlIGRhdGFcclxuY29uc3QgZ2V0TGlrZURhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIGAke2xpbmt9YCxcclxuICApO1xyXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbn07XHJcblxyXG4vLyBwb3N0IGxpa2UgZGF0YVxyXG5jb25zdCBwb3N0TGlrZURhdGEgPSBhc3luYyAobWVhbElkKSA9PiB7XHJcbiAgYXdhaXQgZmV0Y2goYCR7bGlua31gLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgaXRlbV9pZDogbWVhbElkLFxyXG4gICAgfSksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZ2V0TGlrZURhdGEsIHBvc3RMaWtlRGF0YSB9OyIsIi8vIHBvc3QgdG8gdGhlIGFwaVxyXG5jb25zdCBBUElfVVJMID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9jYXRlZ29yaWVzLnBocCc7XHJcblxyXG5jb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgJHtBUElfVVJMfWAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICB9LFxyXG4gICk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldERhdGE7IiwiLy8gaXRlbSBjb3VudGVyXHJcblxyXG5jb25zdCBpdGVtQ291bnRlciA9IChpdGVtKSA9PiBpdGVtLmxlbmd0aDtcclxuXHJcbi8vIGV4cG9ydCByZWxhdmVudCBjb2RlXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpdGVtQ291bnRlcjsiLCIvLyBzZXQgYXBpIGxpbmsgdG8gZGlzcGxheSBjb21tZW50IGRhdGEgYW5kIHNlbmQgY29tbWVudCBpbnB1dHMgdG8gdGhlIGFwaVxyXG5jb25zdCBsaW5rID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7cHJvY2Vzcy5lbnYuQVBJX0tFWX0vY29tbWVudHNgO1xyXG5jb25zdCBnZXRMaW5rID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7cHJvY2Vzcy5lbnYuQVBJX0tFWX0vY29tbWVudHM/aXRlbV9pZD1gO1xyXG5cclxuLy8gY3JlYXRlIGZ1bmN0aW9uIHRvIGRpc3BsYXkgY29tbWVudCBkYXRhXHJcbmNvbnN0IGRpc3BsYXlDb21tZW50RGF0YSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGNvbnN0IGdldExpbmtXaXRoSUQgPSBnZXRMaW5rICsgaWQ7XHJcbiAgaWYgKGlkICE9PSB1bmRlZmluZWQpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGAke2dldExpbmtXaXRoSUR9YCxcclxuICAgICk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbi8vIGNyZWF0ZSBmdW5jdGlvbiB0byBzZW5kIGNvbW1lbnQgaW5wdXQgdG8gdGhlIGFwaVxyXG5jb25zdCBsZWF2ZUNvbW1lbnRJbnB1dCA9IGFzeW5jIChyZW5kZXJDb21tZW50KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobGluaywge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVuZGVyQ29tbWVudCksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgY29uc3QgYWxsQ29tbWVudHMgPSBhd2FpdCBkaXNwbGF5Q29tbWVudERhdGEocmVuZGVyQ29tbWVudC5pdGVtX2lkKTtcclxuICAgICAgaWYgKGFsbENvbW1lbnRzICE9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsbENvbW1lbnRzO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IHRoZSByZWxldmFudCBmaWxlc1xyXG5leHBvcnQgeyBsZWF2ZUNvbW1lbnRJbnB1dCwgZGlzcGxheUNvbW1lbnREYXRhIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcbmltcG9ydCBnZXRMaXN0cyBmcm9tICcuL21vZHVsZXMvZGlzcGxheS5qcyc7XHJcbmltcG9ydCBnZXRNZWFsSXRlbSBmcm9tICcuL21vZHVsZXMvZG9tcG9wdXBjYXJkLmpzJztcclxuaW1wb3J0IHsgZGlzcGxheUNvbW1lbnREYXRhIH0gZnJvbSAnLi9tb2R1bGVzL3N1Ym1pdENvbW1lbnQuanMnO1xyXG4vLyBpbXBvcnQgZ2V0TGlzdHMgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXkuanMnO1xyXG5pbXBvcnQgaXRlbUNvdW50ZXIgZnJvbSAnLi9tb2R1bGVzL2l0ZW1zQ291bnRlci5qcyc7XHJcbmltcG9ydCBnZXREYXRhIGZyb20gJy4vbW9kdWxlcy9nZXRkYXRhLmpzJztcclxuXHJcbi8vIGxhb2QgZG9tIGNvbnRlbnQgd2hlbiB3ZWJwYWdlIGlzIGxvYWRlZFxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBnZXRMaXN0cygpO1xyXG4gIGNvbnN0IGhvbWVJdGVtQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLW51bWJlcicpO1xyXG4gIGNvbnN0IGdldEl0ZW1MaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbWVhbExpc3RzID0gYXdhaXQgZ2V0RGF0YSgpO1xyXG4gICAgY29uc3QgY291bnRlckFycmF5ID0gbWVhbExpc3RzLmNhdGVnb3JpZXM7XHJcbiAgICBob21lSXRlbUNvdW50ZXIudGV4dENvbnRlbnQgPSBpdGVtQ291bnRlcihjb3VudGVyQXJyYXkpO1xyXG4gIH07XHJcbiAgZ2V0SXRlbUxpc3QoKTtcclxufSk7XHJcblxyXG5nZXRNZWFsSXRlbSgpO1xyXG5cclxuZGlzcGxheUNvbW1lbnREYXRhKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9