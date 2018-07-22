module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/header.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "C:\\myprojects\\hello-next\\components\\header.tsx";


var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Home")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "About")));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/my-layout.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header__ = __webpack_require__("./components/header.tsx");
var _jsxFileName = "C:\\myprojects\\hello-next\\components\\my-layout.tsx";


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var MyLayout = function MyLayout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (MyLayout);

/***/ }),

/***/ "./pages/posts/show.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_my_layout__ = __webpack_require__("./components/my-layout.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_markdown__ = __webpack_require__("react-markdown");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_markdown__);
var _jsxFileName = "C:\\myprojects\\hello-next\\pages\\posts\\show.tsx";



/* 
-------------------------------------------------------------------
Commented code below shows how to use getInitialData to get data from server
-------------------------------------------------------------------
*/
// import {withRouter} from "next/router";
// import MyLayout from "../../components/my-layout";
// const Post = (props) => (
//     <MyLayout>
//     <h1>{props.show.name}</h1>
//     <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
//     <img src={props.show.image.medium}/>
//     </MyLayout>
// )
// Post.getInitialProps = async function (context) {
//     const { id } = context.query
//     const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
//     const show = await res.json()
//     console.log(`Fetched show: ${show.name}`)
//     return { show }
//   }
// export default Post



/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_3_next_router__["withRouter"])(function (props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_my_layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    className: "jsx-3267370368"
  }, props.router.query.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    className: "jsx-3267370368" + " " + "markdown"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_markdown___default.a, {
    source: "\nThis is our blog post.\nYes. We can have a [link](/link).\nAnd we can have a title as well.\n\n### This is a title\n\nAnd here's the content.\n     ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3267370368",
    css: ".markdown{font-family:'Arial';}.markdown a{-webkit-text-decoration:none;text-decoration:none;color:blue;}.markdown a:hover{opacity:0.6;}.markdown h3{margin:0;padding:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwb3N0c1xcc2hvdy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NzQixBQUc0QixBQUlDLEFBS1QsQUFJSCxTQUNDLEdBSlosT0FLMkIsQ0FkM0Isd0JBZUEsTUFYYSxXQUNiIiwiZmlsZSI6InBhZ2VzXFxwb3N0c1xcc2hvdy50c3giLCJzb3VyY2VSb290IjoiQzpcXG15cHJvamVjdHNcXGhlbGxvLW5leHQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5Db21tZW50ZWQgY29kZSBiZWxvdyBzaG93cyBob3cgdG8gdXNlIGdldEluaXRpYWxEYXRhIHRvIGdldCBkYXRhIGZyb20gc2VydmVyXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKi9cclxuXHJcbi8vIGltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIGltcG9ydCBNeUxheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9teS1sYXlvdXRcIjtcclxuXHJcbi8vIGNvbnN0IFBvc3QgPSAocHJvcHMpID0+IChcclxuLy8gICAgIDxNeUxheW91dD5cclxuLy8gICAgIDxoMT57cHJvcHMuc2hvdy5uYW1lfTwvaDE+XHJcbi8vICAgICA8cD57cHJvcHMuc2hvdy5zdW1tYXJ5LnJlcGxhY2UoLzxbL10/cD4vZywgJycpfTwvcD5cclxuLy8gICAgIDxpbWcgc3JjPXtwcm9wcy5zaG93LmltYWdlLm1lZGl1bX0vPlxyXG4vLyAgICAgPC9NeUxheW91dD5cclxuLy8gKVxyXG5cclxuLy8gUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4vLyAgICAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeVxyXG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MvJHtpZH1gKVxyXG4vLyAgICAgY29uc3Qgc2hvdyA9IGF3YWl0IHJlcy5qc29uKClcclxuICBcclxuLy8gICAgIGNvbnNvbGUubG9nKGBGZXRjaGVkIHNob3c6ICR7c2hvdy5uYW1lfWApXHJcbiAgXHJcbi8vICAgICByZXR1cm4geyBzaG93IH1cclxuLy8gICB9XHJcbiAgXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFBvc3RcclxuXHJcbmltcG9ydCBNeUxheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL215LWxheW91dCdcclxuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcigocHJvcHMpID0+IChcclxuICA8TXlMYXlvdXQ+XHJcbiAgIDxoMT57cHJvcHMucm91dGVyLnF1ZXJ5LnRpdGxlfTwvaDE+XHJcbiAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2Rvd25cIj5cclxuICAgICA8TWFya2Rvd24gc291cmNlPXtgXHJcblRoaXMgaXMgb3VyIGJsb2cgcG9zdC5cclxuWWVzLiBXZSBjYW4gaGF2ZSBhIFtsaW5rXSgvbGluaykuXHJcbkFuZCB3ZSBjYW4gaGF2ZSBhIHRpdGxlIGFzIHdlbGwuXHJcblxyXG4jIyMgVGhpcyBpcyBhIHRpdGxlXHJcblxyXG5BbmQgaGVyZSdzIHRoZSBjb250ZW50LlxyXG4gICAgIGB9Lz5cclxuICAgPC9kaXY+XHJcbiAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgLm1hcmtkb3duIHtcclxuICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xyXG4gICAgIH1cclxuXHJcbiAgICAgLm1hcmtkb3duIGEge1xyXG4gICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgfVxyXG5cclxuICAgICAubWFya2Rvd24gYTpob3ZlciB7XHJcbiAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgfVxyXG5cclxuICAgICAubWFya2Rvd24gaDMge1xyXG4gICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgcGFkZGluZzogMDtcclxuICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgfVxyXG4gIGB9PC9zdHlsZT5cclxuICA8L015TGF5b3V0PlxyXG4pKTtcclxuIl19 */\n/*@ sourceURL=pages\\posts\\show.tsx */"
  }));
}));

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/posts/show.tsx");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-markdown":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=show.js.map