/*!-----------------------------------------------------------------
    Name: Piroll - Minimal & Clean Portfolio HTML Template
    Version: 1.0.4
    Author: robirurk, nK
    Website: https://nkdev.info
    Purchase: https://nkdev.info
    Support: https://nk.ticksy.com
    License: You must have a valid license purchased only from ThemeForest (the above link) in order to legally use the theme for your project.
    Copyright 2020.
-------------------------------------------------------------------*/
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/*------------------------------------------------------------------

  Theme Options

-------------------------------------------------------------------*/
var options = {
  enableShortcuts: true,
  scrollToAnchorSpeed: 700,
  parallaxSpeed: 0.8,
  templates: {
    secondaryNavbarBackItem: 'Back',
    plainVideoIcon: '<span class="nk-video-icon"><span><span class="nk-play-icon"></span></span></span>',
    plainVideoLoadIcon: '<span class="nk-loading-spinner"><i></i></span>',
    fullscreenVideoClose: '<span class="nk-icon-close"></span>',
    instagram: "<div class=\"col-3\">\n                <a href=\"{{link}}\" target=\"_blank\">\n                    <img src=\"{{image}}\" alt=\"{{caption}}\" class=\"nk-img-stretch\">\n                </a>\n            </div>",
    instagramLoadingText: 'Loading...',
    instagramFailText: 'Failed to fetch data',
    instagramApiPath: 'php/instagram/instagram.php',
    twitter: "<div class=\"nk-twitter\">\n                <span class=\"nk-twitter-icon fa fa-twitter\"></span>\n                <div class=\"nk-twitter-text\">\n                   {{tweet}}\n                </div>\n            </div>",
    twitterLoadingText: 'Loading...',
    twitterFailText: 'Failed to fetch data',
    twitterApiPath: 'php/twitter/tweet.php'
  },
  shortcuts: {
    closeFullscreenVideo: 'esc',
    postScrollToComments: 'c',
    toggleFullscreenNavbar: 'alt+f',
    openFullscreenNavbar: '',
    closeFullscreenNavbar: 'esc'
  }
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _parts_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _parts_setOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _parts_shortcuts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _parts_initNavbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var _parts_initNavbarFullscreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _parts_initNavbarDropEffect1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _parts_initHeaderTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _parts_initAnchors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);
/* harmony import */ var _parts_initVideoBlocks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
/* harmony import */ var _parts_initFullPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14);
/* harmony import */ var _parts_initForms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15);
/* harmony import */ var _parts_initInstagram__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16);
/* harmony import */ var _parts_initTwitter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17);
/* harmony import */ var _parts_initPluginStickySidebar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(18);
/* harmony import */ var _parts_initPluginNano__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19);
/* harmony import */ var _parts_initPluginJarallax__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(20);
/* harmony import */ var _parts_initPluginFlickity__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(21);
/* harmony import */ var _parts_initPluginIsotope__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(22);
/* harmony import */ var _parts_initPluginPhotoswipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(23);
/* harmony import */ var _parts_initPluginTabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(24);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }















/* Plugins */








/*------------------------------------------------------------------

  Piroll Class

-------------------------------------------------------------------*/

var PIROLL = /*#__PURE__*/function () {
  function PIROLL() {
    _classCallCheck(this, PIROLL);

    this.options = _parts_options__WEBPACK_IMPORTED_MODULE_0__["options"];
  }

  _createClass(PIROLL, [{
    key: "init",
    value: function init() {
      var self = this;
      self.initNavbar();
      self.initNavbarFullscreen();
      self.initNavbarDropEffect1();
      self.initHeaderTitle();
      self.initAnchors();
      self.initVideoBlocks();
      self.initFullPage();
      self.initForms();
      self.initForms();
      self.initInstagram();
      self.initTwitter();
      self.initShortcuts(); // init plugins

      self.initPluginStickySidebar();
      self.initPluginNano();
      self.initPluginJarallax();
      self.initPluginFlickity();
      self.initPluginIsotope();
      self.initPluginPhotoswipe();
      self.initPluginTabs();
      return self;
    }
  }, {
    key: "setOptions",
    value: function setOptions(newOpts) {
      return _parts_setOptions__WEBPACK_IMPORTED_MODULE_2__["setOptions"].call(this, newOpts);
    }
  }, {
    key: "debounceResize",
    value: function debounceResize(func) {
      return _parts_utility__WEBPACK_IMPORTED_MODULE_1__["debounceResize"].call(this, func);
    }
  }, {
    key: "throttleScroll",
    value: function throttleScroll(callback) {
      return _parts_utility__WEBPACK_IMPORTED_MODULE_1__["throttleScroll"].call(this, callback);
    }
  }, {
    key: "bodyOverflow",
    value: function bodyOverflow(type) {
      return _parts_utility__WEBPACK_IMPORTED_MODULE_1__["bodyOverflow"].call(this, type);
    }
  }, {
    key: "isInViewport",
    value: function isInViewport($item, returnRect) {
      return _parts_utility__WEBPACK_IMPORTED_MODULE_1__["isInViewport"].call(this, $item, returnRect);
    }
  }, {
    key: "scrollTo",
    value: function scrollTo($to, callback) {
      return _parts_utility__WEBPACK_IMPORTED_MODULE_1__["scrollTo"].call(this, $to, callback);
    }
  }, {
    key: "key",
    value: function key(name, callback) {
      return _parts_shortcuts__WEBPACK_IMPORTED_MODULE_3__["key"].call(this, name, callback);
    }
  }, {
    key: "initShortcuts",
    value: function initShortcuts() {
      return _parts_shortcuts__WEBPACK_IMPORTED_MODULE_3__["initShortcuts"].call(this);
    }
  }, {
    key: "initHeaderTitle",
    value: function initHeaderTitle() {
      return _parts_initHeaderTitle__WEBPACK_IMPORTED_MODULE_7__["initHeaderTitle"].call(this);
    }
  }, {
    key: "initNavbar",
    value: function initNavbar() {
      return _parts_initNavbar__WEBPACK_IMPORTED_MODULE_4__["initNavbar"].call(this);
    }
  }, {
    key: "initNavbarFullscreen",
    value: function initNavbarFullscreen() {
      return _parts_initNavbarFullscreen__WEBPACK_IMPORTED_MODULE_5__["initNavbarFullscreen"].call(this);
    }
  }, {
    key: "initNavbarDropEffect1",
    value: function initNavbarDropEffect1() {
      return _parts_initNavbarDropEffect1__WEBPACK_IMPORTED_MODULE_6__["initNavbarDropEffect1"].call(this);
    }
  }, {
    key: "initAnchors",
    value: function initAnchors() {
      return _parts_initAnchors__WEBPACK_IMPORTED_MODULE_8__["initAnchors"].call(this);
    }
  }, {
    key: "initVideoBlocks",
    value: function initVideoBlocks() {
      return _parts_initVideoBlocks__WEBPACK_IMPORTED_MODULE_9__["initVideoBlocks"].call(this);
    }
  }, {
    key: "initFullPage",
    value: function initFullPage() {
      return _parts_initFullPage__WEBPACK_IMPORTED_MODULE_10__["initFullPage"].call(this);
    }
  }, {
    key: "initForms",
    value: function initForms() {
      return _parts_initForms__WEBPACK_IMPORTED_MODULE_11__["initForms"].call(this);
    }
  }, {
    key: "initInstagram",
    value: function initInstagram() {
      return _parts_initInstagram__WEBPACK_IMPORTED_MODULE_12__["initInstagram"].call(this);
    }
  }, {
    key: "initTwitter",
    value: function initTwitter() {
      return _parts_initTwitter__WEBPACK_IMPORTED_MODULE_13__["initTwitter"].call(this);
    }
  }, {
    key: "initPluginStickySidebar",
    value: function initPluginStickySidebar() {
      return _parts_initPluginStickySidebar__WEBPACK_IMPORTED_MODULE_14__["initPluginStickySidebar"].call(this);
    }
  }, {
    key: "initPluginNano",
    value: function initPluginNano($context) {
      return _parts_initPluginNano__WEBPACK_IMPORTED_MODULE_15__["initPluginNano"].call(this, $context);
    }
  }, {
    key: "initPluginJarallax",
    value: function initPluginJarallax($context) {
      return _parts_initPluginJarallax__WEBPACK_IMPORTED_MODULE_16__["initPluginJarallax"].call(this, $context);
    }
  }, {
    key: "initPluginFlickity",
    value: function initPluginFlickity($context) {
      return _parts_initPluginFlickity__WEBPACK_IMPORTED_MODULE_17__["initPluginFlickity"].call(this, $context);
    }
  }, {
    key: "initPluginIsotope",
    value: function initPluginIsotope($context) {
      return _parts_initPluginIsotope__WEBPACK_IMPORTED_MODULE_18__["initPluginIsotope"].call(this, $context);
    }
  }, {
    key: "initPluginPhotoswipe",
    value: function initPluginPhotoswipe($context) {
      return _parts_initPluginPhotoswipe__WEBPACK_IMPORTED_MODULE_19__["initPluginPhotoswipe"].call(this, $context);
    }
  }, {
    key: "initPluginTabs",
    value: function initPluginTabs($context) {
      return _parts_initPluginTabs__WEBPACK_IMPORTED_MODULE_20__["initPluginTabs"].call(this, $context);
    }
  }]);

  return PIROLL;
}();
/*------------------------------------------------------------------

  Init Piroll

-------------------------------------------------------------------*/


window.Piroll = new PIROLL();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tween", function() { return tween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIOs", function() { return isIOs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFireFox", function() { return isFireFox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTouch", function() { return isTouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$wnd", function() { return $wnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$doc", function() { return $doc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$body", function() { return $body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wndW", function() { return wndW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wndH", function() { return wndH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docH", function() { return docH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounceResize", function() { return debounceResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttleScroll", function() { return throttleScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bodyOverflow", function() { return bodyOverflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBodyOverflowed", function() { return isBodyOverflowed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInViewport", function() { return isInViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/*------------------------------------------------------------------

  Utility

-------------------------------------------------------------------*/
var $ = jQuery;
var tween = window.TweenMax;
var isIOs = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var isMobile = /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/g.test(navigator.userAgent || navigator.vendor || window.opera);
var isFireFox = typeof InstallTrigger !== 'undefined';
var isTouch = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;
/**
 * window size
 */

var $wnd = $(window);
var $doc = $(document);
var $html = $('html');
var $body = $('body');
var wndW = 0;
var wndH = 0;
var docH = 0;

function getWndSize() {
  wndW = $wnd.width();
  wndH = $wnd.height();
  docH = $doc.height();
}

getWndSize();
$wnd.on('resize load orientationchange', getWndSize); // add 'is-mobile' or 'is-desktop' classname to html tag

$html.addClass(isMobile ? 'is-mobile' : 'is-desktop');
/**
 * Debounce resize
 */

var resizeArr = [];
var resizeTimeout;

function debounceResized() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(function () {
    if (resizeArr.length) {
      for (var k = 0; k < resizeArr.length; k++) {
        resizeArr[k]();
      }
    }
  }, 50);
}

$wnd.on('ready load resize orientationchange', debounceResized);
debounceResized();

function debounceResize(func) {
  if (typeof func === 'function') {
    resizeArr.push(func);
  } else {
    window.dispatchEvent(new Event('resize'));
  }
}
/**
 * Throttle scroll
 * thanks: https://jsfiddle.net/mariusc23/s6mLJ/31/
 */


var hideOnScrollList = [];
var didScroll;
var lastST = 0;
$wnd.on('scroll load resize orientationchange', function () {
  if (hideOnScrollList.length) {
    didScroll = true;
  }
});

function hasScrolled() {
  var ST = $wnd.scrollTop();
  var type = ''; // [up, down, end, start]

  if (ST > lastST) {
    type = 'down';
  } else if (ST < lastST) {
    type = 'up';
  } else {
    type = 'none';
  }

  if (ST === 0) {
    type = 'start';
  } else if (ST >= docH - wndH) {
    type = 'end';
  }

  for (var k in hideOnScrollList) {
    if (typeof hideOnScrollList[k] === 'function') {
      hideOnScrollList[k](type, ST, lastST, $wnd);
    }
  }

  lastST = ST;
}

setInterval(function () {
  if (didScroll) {
    didScroll = false;
    window.requestAnimationFrame(hasScrolled);
  }
}, 250);

function throttleScroll(callback) {
  hideOnScrollList.push(callback);
}
/**
 * Body Overflow
 * Thanks https://jsfiddle.net/mariusc23/s6mLJ/31/
 * Usage:
 *    // enable
 *    bodyOverflow(1);
 *
 *    // disable
 *    bodyOverflow(0);
 */


var bodyOverflowEnabled;
var isBodyOverflowing;
var scrollbarWidth;
var originalBodyPadding;
var $headerNavbar = $('.nk-navbar-top');
var $fullNavbar = $('.nk-navbar-full');

function isBodyOverflowed() {
  return bodyOverflowEnabled;
}

function bodyGetScrollbarWidth() {
  // thx d.walsh
  var scrollDiv = document.createElement('div');
  scrollDiv.className = 'nk-body-scrollbar-measure';
  $body[0].appendChild(scrollDiv);
  var result = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  $body[0].removeChild(scrollDiv);
  return result;
}

function bodyCheckScrollbar() {
  var fullWindowWidth = window.innerWidth;

  if (!fullWindowWidth) {
    // workaround for missing window.innerWidth in IE8
    var documentElementRect = document.documentElement.getBoundingClientRect();
    fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
  }

  isBodyOverflowing = $body[0].clientWidth < fullWindowWidth;
  scrollbarWidth = bodyGetScrollbarWidth();
}

function bodySetScrollbar() {
  if (typeof originalBodyPadding === 'undefined') {
    originalBodyPadding = $html.css('padding-right') || '';
  }

  if (isBodyOverflowing) {
    $html.add($fullNavbar).add($headerNavbar).css('paddingRight', scrollbarWidth + 'px');
  }
}

function bodyResetScrollbar() {
  $html.css('paddingRight', originalBodyPadding);
  $fullNavbar.add($headerNavbar).css('paddingRight', '');
}

function bodyOverflow(enable) {
  if (enable && !bodyOverflowEnabled) {
    bodyOverflowEnabled = 1;
    bodyCheckScrollbar();
    bodySetScrollbar();
    $html.css('overflow', 'hidden');
  } else if (!enable && bodyOverflowEnabled) {
    bodyOverflowEnabled = 0;
    $html.css('overflow', '');
    bodyResetScrollbar();
  }
}
/**
 * In Viewport checker
 * return visible percent from 0 to 1
 */


function isInViewport($item, returnRect) {
  var rect = $item[0].getBoundingClientRect();
  var result = 1;

  if (rect.right <= 0 || rect.left >= wndW) {
    result = 0;
  } else if (rect.bottom < 0 && rect.top <= wndH) {
    result = 0;
  } else {
    var beforeTopEnd = Math.max(0, rect.height + rect.top);
    var beforeBottomEnd = Math.max(0, rect.height - (rect.top + rect.height - wndH));
    var afterTop = Math.max(0, -rect.top);
    var beforeBottom = Math.max(0, rect.top + rect.height - wndH);

    if (rect.height < wndH) {
      result = 1 - (afterTop || beforeBottom) / rect.height;
    } else {
      if (beforeTopEnd <= wndH) {
        result = beforeTopEnd / wndH;
      } else if (beforeBottomEnd <= wndH) {
        result = beforeBottomEnd / wndH;
      }
    }

    result = result < 0 ? 0 : result;
  }

  if (returnRect) {
    return [result, rect];
  }

  return result;
}
/**
 * Scroll To
 */


function scrollTo($to, callback) {
  var scrollPos = false;
  var speed = this.options.scrollToAnchorSpeed / 1000;

  if ($to === 'top') {
    scrollPos = 0;
  } else if ($to === 'bottom') {
    scrollPos = Math.max(0, docH - wndH);
  } else if (typeof $to === 'number') {
    scrollPos = $to;
  } else {
    scrollPos = $to.offset ? $to.offset().top : false;
  }

  if (scrollPos !== false && $wnd.scrollTop() !== scrollPos) {
    tween.to($wnd, speed, {
      scrollTo: {
        y: scrollPos,
        // disable autokill on iOs (buggy scrolling)
        autoKill: !isIOs
      },
      ease: Power2.easeOut,
      overwrite: 5
    });

    if (callback) {
      tween.delayedCall(speed, callback);
    }
  } else if (typeof callback === 'function') {
    callback();
  }
}



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOptions", function() { return setOptions; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Set Custom Options

-------------------------------------------------------------------*/

function setOptions(newOpts) {
  var self = this;
  var optsTemplates = _utility__WEBPACK_IMPORTED_MODULE_0__["$"].extend({}, this.options.templates, newOpts && newOpts.templates || {});
  var optsShortcuts = _utility__WEBPACK_IMPORTED_MODULE_0__["$"].extend({}, this.options.shortcuts, newOpts && newOpts.shortcuts || {});
  self.options = _utility__WEBPACK_IMPORTED_MODULE_0__["$"].extend({}, self.options, newOpts);
  self.options.templates = optsTemplates;
  self.options.shortcuts = optsShortcuts;
}



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "key", function() { return key; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initShortcuts", function() { return initShortcuts; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Shortcuts
  https://github.com/madrobby/keymaster

-------------------------------------------------------------------*/

function key(name, fn) {
  if (typeof window.key === 'undefined') {
    return;
  }

  name = this.options && this.options.shortcuts && this.options.shortcuts[name];

  if (name) {
    window.key(name, fn);
  }
}

function initShortcuts() {
  if (typeof window.key === 'undefined' || !this.options.enableShortcuts) {
    return;
  }

  var self = this; // FullScreen Video

  self.key('closeFullscreenVideo', function () {
    self.closeFullScreenVideo && self.closeFullScreenVideo();
  }); // post single

  self.key('postScrollToComments', function () {
    var $comments = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('#comments');

    if ($comments.length) {
      self.scrollTo($comments);
    }
  }); // Side Left Navbar

  var $leftSide = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-left-side');
  self.key('toggleSideLeftNavbar', function () {
    self.toggleSide($leftSide);
  });
  self.key('openSideLeftNavbar', function () {
    self.openSide($leftSide);
  }); // Side Right Navbar

  var $rightSide = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-right-side');
  self.key('toggleSideRightNavbar', function () {
    self.toggleSide($rightSide);
  });
  self.key('openSideRightNavbar', function () {
    self.openSide($rightSide);
  }); // Fullscreen Navbar

  self.key('toggleFullscreenNavbar', function () {
    self.toggleFullscreenNavbar();
  });
  self.key('openFullscreenNavbar', function () {
    self.openFullscreenNavbar();
  });
  self.key('closeFullscreenNavbar', function () {
    self.closeFullscreenNavbar();
  }); // ESC - use also inside form elements

  window.key.filter = function (event) {
    var tagName = (event.target || event.srcElement).tagName;
    var isContentEditable = (event.target || event.srcElement).getAttribute('contenteditable');
    var isESC = window.key.isPressed('esc');
    return isESC || !(isContentEditable || tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA');
  };
}



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initNavbar", function() { return initNavbar; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Navbar

-------------------------------------------------------------------*/

function initNavbar() {
  var self = this;
  var $navbarTop = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-top'); // add mobile navbar

  var $mobileNavItems = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('[data-nav-mobile]');

  if ($mobileNavItems.length) {
    $mobileNavItems.each(function () {
      var $nav = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).html());
      var $mobileNav = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-nav-mobile')); // insert into mobile nav

      $mobileNav.find('.nk-navbar-mobile-content > ul.nk-nav').append($nav);
    });
    var $nav = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-mobile-content > ul.nk-nav'); // remove background images

    $nav.find('.bg-image, .bg-video').remove(); // remove mega menus

    $nav.find('.nk-mega-item > .dropdown').each(function () {
      var $drop = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).children('ul').addClass('dropdown'); // fix mega menu columns

      $drop.find('> li > label').each(function () {
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).next().addClass('dropdown');
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().addClass('nk-drop-item');
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).replaceWith(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<a href="#"></a>').html(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).html()));
      });
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).replaceWith($drop);
    });
    $nav.find('.nk-mega-item').removeClass('nk-mega-item');
  } // sticky navbar


  var navbarTop = $navbarTop.length ? $navbarTop.offset().top : 0; // fake hidden navbar to prevent page jumping on stick

  var $navbarFake = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div>').hide();

  function onScrollNav() {
    var stickyOn = _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].scrollTop() >= navbarTop;

    if (stickyOn) {
      $navbarTop.addClass('nk-navbar-fixed');
      $navbarFake.show();
    } else {
      $navbarTop.removeClass('nk-navbar-fixed');
      $navbarFake.hide();
    }
  }

  if ($navbarTop.hasClass('nk-navbar-sticky')) {
    $navbarTop.after($navbarFake);
    $navbarFake.height($navbarTop.innerHeight());
    self.debounceResize(function () {
      $navbarFake.height($navbarTop.innerHeight());
    });
    _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].on('scroll resize', onScrollNav);
    onScrollNav();
  } // correct dropdown position


  function correctDropdown($item) {
    if ($item.parent().is('.nk-nav')) {
      var $dropdown = $item.children('.dropdown');
      var $parent = $item.parents('.nk-navbar:eq(0)');
      var $parentContainer = $parent.children('.container');
      $parentContainer = $parentContainer.length ? $parentContainer : $parent; // fix right value when sub menu is not hidden

      $dropdown.css('display', 'none');
      var isRight = $dropdown.css('right') !== 'auto';
      var css = {
        marginLeft: '',
        marginRight: '',
        marginTop: 0,
        display: 'block'
      };
      $dropdown.css(css);
      var rect = $dropdown[0].getBoundingClientRect();
      var rectContainer = $parentContainer[0].getBoundingClientRect();
      var itemRect = $item[0].getBoundingClientRect(); // move dropdown from right corner (right corner will check in nav container)

      if (rect.right > rectContainer.right) {
        css.marginLeft = rectContainer.right - rect.right;
        $dropdown.css(css);
        rect = $dropdown[0].getBoundingClientRect();
      } // move dropdown from left corner


      if (rect.left < 0) {
        css.marginLeft = -rect.left;
        $dropdown.css(css);
        rect = $dropdown[0].getBoundingClientRect();
      } // check if dropdown not under item


      var currentLeftPost = rect.left + (css.marginLeft || 0);

      if (currentLeftPost > itemRect.left) {
        css.marginLeft = (css.marginLeft || 0) - (currentLeftPost - itemRect.left);
      } // change to margin-right. In some cases left margin isn't working, for ex. in mega menu


      if (isRight) {
        css.marginRight = -1 * css.marginLeft;
        css.marginLeft = '';
      } // correct top position


      css.marginTop = $parent.innerHeight() - $dropdown.offset().top + $parent.offset().top; // hide menu

      css.display = 'none';
      $dropdown.css(css);
    }
  } // toggle dropdown


  function closeSubmenu($item) {
    if ($item.length) {
      $item.removeClass('open');
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($item.children('.dropdown'), 0.3, {
        opacity: 0,
        display: 'none'
      });
      _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].trigger('nk-closed-submenu', [$item]);
    }
  }

  function openSubmenu($item) {
    if (!$item.hasClass('open')) {
      correctDropdown($item);
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($item.children('.dropdown'), 0.3, {
        opacity: 1,
        display: 'block'
      });
      $item.addClass('open');
      _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].trigger('nk-opened-submenu', [$item]);
    }
  }

  var dropdownTimeout;
  $navbarTop.on('mouseenter', 'li.nk-drop-item', function () {
    var $item = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    var $openedSiblings = $item.siblings('.open').add($item.siblings().find('.open')).add($item.parents('.nk-nav:eq(0)').siblings().find('.open')).add($item.parents('.nk-nav:eq(0)').siblings('.open')).add($item.parents('.nk-nav:eq(0)').parent().siblings().find('.open'));
    clearTimeout(dropdownTimeout);
    closeSubmenu($openedSiblings);
    openSubmenu($item);
  }).on('mouseleave', 'li.nk-drop-item', function () {
    var $item = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    clearTimeout(dropdownTimeout);
    dropdownTimeout = setTimeout(function () {
      closeSubmenu($item);
    }, 200);
  });
  $navbarTop.on('mouseleave', function () {
    clearTimeout(dropdownTimeout);
    dropdownTimeout = setTimeout(function () {
      closeSubmenu($navbarTop.find('.open'));
    }, 400);
  }); // hide / show
  // add / remove solid color

  var $autohide_nav = $navbarTop.filter('.nk-navbar-autohide');
  self.throttleScroll(function (type, scroll) {
    var start = 400;
    var hideClass = 'nk-onscroll-hide';
    var showClass = 'nk-onscroll-show'; // hide / show

    if (type === 'down' && scroll > start) {
      $autohide_nav.removeClass(showClass).addClass(hideClass);
    } else if (type === 'up' || type === 'end' || type === 'start') {
      $autohide_nav.removeClass(hideClass).addClass(showClass);
    } // add solid color


    if ($navbarTop.hasClass('nk-navbar-transparent') && $navbarTop.hasClass('nk-navbar-sticky')) {
      $navbarTop[(scroll > 70 ? 'add' : 'remove') + 'Class']('nk-navbar-solid');
    }
  });
}



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initNavbarFullscreen", function() { return initNavbarFullscreen; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Navbar Fullscreen

-------------------------------------------------------------------*/

function initNavbarFullscreen() {
  var self = this;
  var $navbar = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-full');
  var $navbarTop = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-top');
  var $navbarSocial = $navbar.find('.nk-nav-social');
  var isOpened;

  self.fullscreenNavbarIsOpened = function () {
    return isOpened;
  };

  self.toggleFullscreenNavbar = function () {
    self[isOpened ? 'closeFullscreenNavbar' : 'openFullscreenNavbar']();
  };

  self.openFullscreenNavbar = function () {
    if (isOpened || !$navbar.length) {
      return;
    }

    isOpened = 1;
    var $navbarMenuItems = $navbar.find('.nk-nav .nk-drop-item.open > .dropdown:not(.closed) > li > a');

    if (!$navbarMenuItems.length) {
      $navbarMenuItems = $navbar.find('.nk-nav > li > a');
    } // active all togglers


    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-full-toggle').addClass('active'); // set top position and animate

    _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($navbarMenuItems, {
      opacity: 0,
      force3D: true
    });
    _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($navbarSocial, {
      opacity: 0,
      force3D: true
    });
    _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($navbar, 0.5, {
      opacity: 1,
      force3D: true,
      display: 'block',
      onComplete: function onComplete() {
        self.initPluginNano($navbar);
      }
    });
    _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].staggerTo($navbarMenuItems, 0.3, {
      y: 0,
      opacity: 1,
      delay: 0.2
    }, 0.05);
    _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($navbarSocial, 0.3, {
      y: 0,
      opacity: 1,
      delay: 0.4
    });
    $navbar.addClass('open'); // prevent body scrolling

    self.bodyOverflow(1); // trigger event

    _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].trigger('nk-open-full-navbar', [$navbar]);
  };

  self.closeFullscreenNavbar = function (dontTouchBody) {
    if (!isOpened || !$navbar.length) {
      return;
    }

    isOpened = 0; // disactive all togglers

    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-full-toggle').removeClass('active'); // set top position and animate

    _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($navbar, 0.5, {
      opacity: 0,
      force3D: true,
      display: 'none',
      onComplete: function onComplete() {
        if (!dontTouchBody) {
          // restore body scrolling
          self.bodyOverflow(0);
        }
      }
    }); // open navbar block

    $navbar.removeClass('open'); // trigger event

    _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].trigger('nk-close-full-navbar', [$navbar]);
  };

  _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"].on('click', '.nk-navbar-full-toggle', function (e) {
    self.toggleFullscreenNavbar();
    e.preventDefault();
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].on('nk-open-search-block', function () {
    self.closeFullscreenNavbar(1);
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].on('nk-open-share-place', self.closeFullscreenNavbar);
}



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initNavbarDropEffect1", function() { return initNavbarDropEffect1; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Dropdown Effect 1 for side navbars and fullscreen

-------------------------------------------------------------------*/

function initNavbarDropEffect1() {
  var self = this;
  var $navbars = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-side, .nk-navbar-full'); // add back item for dropdowns

  $navbars.find('.dropdown').prepend('<li class="dropdown-back"><a href="#">' + self.options.templates.secondaryNavbarBackItem + '</a></li>'); // change height of opened dropdown

  function updateSideNavDropdown($item) {
    var $nav = $item.parents('.nk-navbar:eq(0)');
    var $khNav = $nav.find('.nk-nav');
    var $nanoCont = $nav.find('.nano-content');
    var $drop = $nav.find('.nk-drop-item.open > .dropdown:not(.closed)');
    var dropHeight = '';

    if ($drop.length) {
      dropHeight = $drop.innerHeight();
    }

    $khNav.css({
      height: dropHeight,
      minHeight: dropHeight
    });
    self.initPluginNano($nav); // scroll to top

    _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($nanoCont, 0.3, {
      scrollTo: {
        y: 0
      },
      delay: 0.2
    });
  } // open / close submenu


  function toggleSubmenu(open, $drop) {
    var $newItems = $drop.find('> .dropdown > li > a');
    var $oldItems = $drop.parent().find('> li > a');

    if (open) {
      $drop.addClass('open').parent().addClass('closed');
    } else {
      $drop.removeClass('open').parent().removeClass('closed');
      var tmp = $newItems;
      $newItems = $oldItems;
      $oldItems = tmp;
    } // show items


    _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($newItems, {
      x: open ? '15%' : '-15%',
      opacity: 0,
      display: 'block'
    }, 0.1);
    _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].staggerTo($newItems, 0.2, {
      x: '0%',
      opacity: 1,
      delay: 0.1
    }, 0.03); // hide items

    _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].staggerTo($oldItems, 0.2, {
      x: open ? '-15%' : '15%',
      opacity: 0
    }, 0.03, function () {
      $oldItems.css('display', 'none');
    });
  }

  $navbars.on('click', '.nk-drop-item > a', function (e) {
    toggleSubmenu(true, Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent());
    updateSideNavDropdown(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this));
    e.preventDefault();
  });
  $navbars.on('click', '.dropdown-back > a', function (e) {
    toggleSubmenu(false, Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().parent().parent());
    updateSideNavDropdown(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this));
    e.preventDefault();
  });
}



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initHeaderTitle", function() { return initHeaderTitle; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Header Title

-------------------------------------------------------------------*/

function initHeaderTitle() {
  var self = this;
  var $navbarHeader = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-header');
  var isNavbarOpaque = $navbarHeader.hasClass('nk-header-opaque');
  var isNavbarTransparent = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar-top').hasClass('nk-header-transparent');
  var $headerTitle = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-header-title > .nk-header-table');
  var $fullHeaderTitle = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-header-title-full > .nk-header-table'); // remove header title padding if navbar opaque

  if (isNavbarOpaque) {
    $headerTitle.css('padding-top', 0);
  }

  self.debounceResize(function () {
    if ((isNavbarTransparent || isNavbarOpaque) && (!$fullHeaderTitle.length || !isNavbarOpaque)) {
      return;
    }

    var navH = $navbarHeader.outerHeight() || 0; // add header title padding

    if (!isNavbarTransparent && !isNavbarOpaque) {
      $headerTitle.css('padding-top', navH);
    } // fix header title height


    if ($fullHeaderTitle.length) {
      var headerH = '100vh';

      if (isNavbarOpaque) {
        headerH = 'calc(100vh - ' + navH + 'px)';
      }

      $fullHeaderTitle.css('min-height', headerH);
    }
  });
}



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAnchors", function() { return initAnchors; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Anchors

-------------------------------------------------------------------*/

function initAnchors() {
  var self = this; // click on anchors

  _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"].on('click', '.navbar a, .nk-navbar a, a.btn, a.nk-btn, a.nk-anchor, a.nk-header-title-scroll-down', function (e) {
    var isHash = this.hash;
    var isURIsame = this.baseURI === window.location.href;

    if (isHash && isURIsame) {
      // sometimes hashs have no valid selector like ##hash, it will throw errors
      try {
        var $hashBlock = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(isHash);
        var hash = isHash.replace(/^#/, '');

        if ($hashBlock.length || hash === 'top' || hash === 'bottom') {
          // close navigations
          self.closeFullscreenNavbar(); // add hash to address bar

          if ($hashBlock.length) {
            $hashBlock.attr('id', '');
            document.location.hash = hash;
            $hashBlock.attr('id', hash);
          } // scroll to block


          self.scrollTo($hashBlock.length ? $hashBlock : hash);
          e.preventDefault();
        }
      } catch (e) {}
    }
  }); // add active class on navbar items

  var $anchorItems = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-navbar .nk-nav > li > a[href*="#"]');
  var anchorBlocks = [];

  function hashInArray(item) {
    for (var k = 0; k < anchorBlocks.length; k++) {
      if (anchorBlocks[k].hash === item) {
        return k;
      }
    }

    return false;
  } // get all anchors + blocks on the page


  $anchorItems.each(function () {
    var hash = this.hash.replace(/^#/, '');

    if (!hash) {
      return;
    }

    var $item = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent();
    var $block = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('#' + hash);

    if (hash && $block.length || hash === 'top') {
      var inArray = hashInArray(hash);

      if (inArray === false) {
        anchorBlocks.push({
          hash: hash,
          $item: $item,
          $block: $block
        });
      } else {
        anchorBlocks[inArray].$item = anchorBlocks[inArray].$item.add($item);
      }
    }
  }); // prepare anchor list and listen for scroll to activate items in navbar

  function updateAnchorItemsPositions() {
    for (var k = 0; k < anchorBlocks.length; k++) {
      var item = anchorBlocks[k];
      var blockTop = 0;
      var blockH = _utility__WEBPACK_IMPORTED_MODULE_0__["wndH"];

      if (item.$block.length) {
        blockTop = item.$block.offset().top;
        blockH = item.$block.innerHeight();
      }

      item.activate = blockTop - _utility__WEBPACK_IMPORTED_MODULE_0__["wndH"] / 2;
      item.deactivate = blockTop + blockH - _utility__WEBPACK_IMPORTED_MODULE_0__["wndH"] / 2;
    }
  }

  function setAnchorActiveItem(type, ST) {
    for (var k = 0; k < anchorBlocks.length; k++) {
      var item = anchorBlocks[k];
      var active = ST >= item.activate && ST < item.deactivate;
      item.$item[active ? 'addClass' : 'removeClass']('active');
    }
  }

  if (anchorBlocks.length) {
    updateAnchorItemsPositions();
    setAnchorActiveItem('static', _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].scrollTop());
    self.throttleScroll(setAnchorActiveItem);
    self.debounceResize(updateAnchorItemsPositions);
  }
}



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initVideoBlocks", function() { return initVideoBlocks; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

 Init Video Blocks

 -------------------------------------------------------------------*/

function initVideoBlocks() {
  if (typeof window.VideoWorker === 'undefined') {
    return;
  }

  var self = this; // open fullscreen videos

  var openedFSVideo;

  self.openFullScreenVideo = function (url) {
    if (openedFSVideo) {
      return;
    }

    openedFSVideo = 1; // get api for this video

    self.FullScreenVideoApi = new VideoWorker(url, {
      autoplay: 1,
      loop: 0,
      mute: 0,
      controls: 1
    }); // set video size

    function setVideoSize() {
      var ratio = 16 / 9;
      var resultW;
      var resultH;

      if (ratio > _utility__WEBPACK_IMPORTED_MODULE_0__["wndW"] / _utility__WEBPACK_IMPORTED_MODULE_0__["wndH"]) {
        resultW = _utility__WEBPACK_IMPORTED_MODULE_0__["wndW"] * 0.9;
        resultH = resultW / ratio;
      } else {
        resultH = _utility__WEBPACK_IMPORTED_MODULE_0__["wndH"] * 0.9;
        resultW = resultH * ratio;
      }

      self.FullScreenVideoWrapper.css({
        width: resultW,
        height: resultH,
        top: (_utility__WEBPACK_IMPORTED_MODULE_0__["wndH"] - resultH) / 2,
        left: (_utility__WEBPACK_IMPORTED_MODULE_0__["wndW"] - resultW) / 2
      });
    } // create fullscreen video wrapper if doesn't exist


    if (!self.FullScreenVideo) {
      self.FullScreenVideo = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-video-fullscreen"></div>').appendTo(_utility__WEBPACK_IMPORTED_MODULE_0__["$body"]);

      self.closeFullScreenVideo = function () {
        if (openedFSVideo) {
          openedFSVideo = 0;
          self.FullScreenVideoApi.pause(); // hide animation

          _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to(self.FullScreenVideo, 0.4, {
            opacity: 0,
            display: 'none',
            onComplete: function onComplete() {
              self.FullScreenVideoWrapper.html('');
            }
          });
          _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to(self.FullScreenVideoWrapper, 0.4, {
            scale: 0.9
          }); // restore body scrolling

          self.bodyOverflow(0);
        }
      }; // close icon


      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-video-fullscreen-close">' + self.options.templates.fullscreenVideoClose + '</div>').on('click', self.closeFullScreenVideo).appendTo(self.FullScreenVideo); // video container

      self.FullScreenVideoWrapper = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-video-fullscreen-cont"></div>').appendTo(self.FullScreenVideo);
      setVideoSize();
      self.debounceResize(setVideoSize);
    } // check api and run fullscreen


    if (self.FullScreenVideoApi && self.FullScreenVideoApi.isValid()) {
      self.FullScreenVideoApi.getIframe(function (iframe) {
        var $parent = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(iframe).parent();
        self.FullScreenVideoWrapper.append(iframe);
        $parent.remove(); // pause audio

        if (typeof soundManager !== 'undefined') {
          soundManager.pauseAll();
        } // show animation


        _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].fromTo(self.FullScreenVideo, 0.4, {
          opacity: 0
        }, {
          opacity: 1,
          display: 'block'
        });
        _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].fromTo(self.FullScreenVideoWrapper, 0.4, {
          opacity: 0,
          scale: 0.9
        }, {
          opacity: 1,
          scale: 1,
          delay: 0.3
        }); // prevent body scrolling

        self.bodyOverflow(1);
      });
    }
  };

  _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"].on('click', '.nk-video-fullscreen-toggle', function (e) {
    e.preventDefault();
    self.openFullScreenVideo(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('href'));
  }); // init plain video

  function addPlainPlayButton($plainCont) {
    $plainCont.find('.nk-video-plain-toggle').html(self.options.templates.plainVideoIcon);
  }

  function addPlainLoadButton($plainCont) {
    $plainCont.find('.nk-video-plain-toggle').html(self.options.templates.plainVideoLoadIcon || self.options.templates.plainVideoIcon);
  }

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-plain-video[data-video]').each(function () {
    var $plainCont = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    var $plainIframe;
    var url = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-video');
    var thumb = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-video-thumb');
    var api = new VideoWorker(url, {
      autoplay: 0,
      loop: 0,
      mute: 0,
      controls: 1
    });

    if (api && api.isValid()) {
      var loaded = 0;
      var clicked = 0; // add play event

      $plainCont.on('click', function () {
        if (_utility__WEBPACK_IMPORTED_MODULE_0__["isMobile"]) {
          window.open(api.url);
          return;
        }

        if (clicked) {
          return;
        }

        clicked = 1; // add loading button

        if (!loaded) {
          addPlainLoadButton($plainCont);
          api.getIframe(function (iframe) {
            // add iframe
            $plainIframe = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(iframe);
            var $parent = $plainIframe.parent();
            _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set(iframe, {
              opacity: 0,
              left: '101%'
            });
            $plainIframe.appendTo($plainCont);
            $parent.remove();
            api.play();
          });
        } else {
          api.play();
        }
      }); // add play button

      $plainCont.append('<span class="nk-video-plain-toggle"></span>');
      addPlainPlayButton($plainCont); // set thumb

      if (thumb) {
        $plainCont.css('background-image', "url(\"".concat(thumb, "\")"));
      } else {
        api.getImageURL(function (imgSrc) {
          $plainCont.css('background-image', "url(\"".concat(imgSrc, "\")"));
        });
      }

      if (_utility__WEBPACK_IMPORTED_MODULE_0__["isMobile"]) {
        return;
      }

      api.on('ready', function () {
        api.play();
      });
      api.on('play', function () {
        _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($plainIframe, {
          left: '0%'
        });
        _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($plainIframe, 0.5, {
          opacity: 1,
          onComplete: function onComplete() {
            // add play button
            if (!loaded) {
              addPlainPlayButton($plainCont);
              loaded = 1;
            }
          }
        }); // pause audio

        if (typeof soundManager !== 'undefined') {
          soundManager.pauseAll();
        }
      });
    }
  });
}



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initFullPage", function() { return initFullPage; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Fullpage

-------------------------------------------------------------------*/

function initFullPage() {
  var $fullPage = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-fullpage-portfolio:eq(0)');
  var $eachItems = $fullPage.find('.nk-fullpage-item');

  if (!$fullPage.length || !$eachItems.length) {
    return;
  }

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('html').css('overflow', 'hidden');
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-main').css('overflow', 'visible');
  var self = this; // parse slides

  var slides = [];
  $eachItems.each(function () {
    var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    slides.push({
      $item: $this,
      $viewBtn: $this.find('.nk-fullpage-view-button').html(),
      $content: $this.find('.nk-fullpage-content').html(),
      img: $this.find('.nk-fullpage-image').attr('src')
    });
  }); // image blocks

  var $image1 = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-fullpage-bg-image">').appendTo($fullPage);
  var $image2 = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-fullpage-bg-image">').appendTo($fullPage); // content

  var $content = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-fullpage-content">');
  var $content2 = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-fullpage-content">');
  var $content_button = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-fullpage-view-button">');
  $fullPage.append($content);
  $fullPage.append($content2);
  $fullPage.append($content_button); // bullet navigation

  var $bullets = '<ul class="nk-fullpage-nav active">';

  for (var k = 0; k < slides.length; k++) {
    $bullets += '<li>' + (k < 9 ? '0' : '') + (k + 1) + '</li>';
  }

  $bullets += '</ul>';
  $bullets = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])($bullets);
  $fullPage.append($bullets);
  var $bulletsItems = $bullets.children('li');
  var isBusy = 0;
  var curIndex = 0; // show new slide
  // effect: fade, up, down

  function slideShow(index) {
    var effect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'fade';
    var force = arguments.length > 2 ? arguments[2] : undefined;

    if (typeof slides[index] !== 'undefined' && curIndex != index && !isBusy || force) {
      isBusy = 1; // animate image background

      switch (effect) {
        case 'up':
        case 'down':
          _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($image2, {
            y: effect == 'down' ? '100%' : '-100%',
            display: 'block'
          });
          $image2.css('background-image', 'url("' + slides[index].img + '")');
          _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($image2, 0.8, {
            y: '0%',
            force3D: true,
            ease: Power1.easeInOut
          });
          _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($image1, 0.8, {
            opacity: 0,
            scale: 0.9,
            force3D: true,
            ease: Power1.easeInOut,
            onComplete: function onComplete() {
              $image1.css('background-image', 'url("' + slides[index].img + '")');
              _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($image1, {
                scale: 1,
                opacity: 1
              });
              $image2.css('background-image', '');
              _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($image2, {
                display: 'none'
              });
              isBusy = 0;
            }
          });
          break;

        default:
          // fade
          _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($image2, {
            opacity: 0,
            display: 'block'
          });
          $image2.css('background-image', 'url("' + slides[index].img + '")');
          _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($image2, 0.8, {
            opacity: 1,
            force3D: true,
            onComplete: function onComplete() {
              $image1.css('background-image', 'url("' + slides[index].img + '")');
              $image2.css('background-image', '');
              _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($image2, {
                display: 'none'
              });
              isBusy = 0;
            }
          });
          break;
      } // activate bullet


      $bulletsItems.removeClass('active');
      $bulletsItems.eq(index).addClass('active'); // set new content

      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($content2, {
        opacity: 0,
        y: effect == 'down' ? 100 : -100,
        display: 'flex'
      });
      $content2.html(slides[index].$content);
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($content, 0.5, {
        opacity: 0,
        y: effect == 'down' ? -100 : 100,
        force3D: true
      });
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($content2, 0.5, {
        opacity: 1,
        y: 0,
        force3D: true,
        delay: 0.1,
        onComplete: function onComplete() {
          $content.html(slides[index].$content);
          _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($content, {
            opacity: 1,
            clearProps: 'transform'
          });
          _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($content2, {
            display: 'none'
          });
        }
      }); // set new button

      $content_button.html(slides[index].$viewBtn);
      curIndex = index;
    }
  }

  slideShow(curIndex, 'fade', 1);
  $bullets.on('click', '> li', function () {
    var index = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).index();

    if (index > curIndex) {
      slideShow(index, 'down');
    } else if (index < curIndex) {
      slideShow(index, 'up');
    }
  }); // show next / previous slider

  function slideShowNext() {
    if (curIndex != slides.length - 1) {
      slideShow(curIndex + 1, 'down');
    }
  }

  function slideShowPrev() {
    if (curIndex != 0) {
      slideShow(curIndex - 1, 'up');
    }
  }

  var wheelEvent;

  if ('onwheel' in document.createElement('div')) {
    wheelEvent = 'wheel';
  } else if ('onmousewheel' in document.createElement('div')) {
    wheelEvent = 'mousewheel';
  }

  if (wheelEvent) {
    // mouse wheel scroll
    _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].on(wheelEvent, function (e) {
      // check if delta >= 2 and mouse under slider
      if (Math.abs(e.originalEvent.deltaY) < 2 || !Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).parents('.nk-fullpage-portfolio').length) {
        return;
      }

      if (e.originalEvent.deltaY > 0) {
        slideShowNext();
      } else if (e.originalEvent.deltaY < 0) {
        slideShowPrev();
      }
    });
  } // touch swipe


  var touchStart = 0;
  var touchDelta = 0;
  _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].on('touchstart', function (e) {
    touchStart = e.originalEvent.touches[0].screenY;
    touchDelta = 0;
  });
  _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].on('touchmove touchend', function (e) {
    var y = e.originalEvent.touches && e.originalEvent.touches.length ? e.originalEvent.touches[0].screenY : false;
    touchDelta = y === false ? touchDelta : touchStart - y; // check if delta >= 2 and mouse under slider

    if (Math.abs(touchDelta) < 2 || !Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(e.target).parents('.nk-fullpage-portfolio').length) {
      return;
    }

    if (e.type === 'touchend') {
      if (touchDelta > 0) {
        slideShowNext();
      } else if (touchDelta < 0) {
        slideShowPrev();
      }
    }
  });
}



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initForms", function() { return initForms; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init AJAX Forms

-------------------------------------------------------------------*/

function initForms() {
  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__["$"].fn.ajaxSubmit === 'undefined' || typeof _utility__WEBPACK_IMPORTED_MODULE_0__["$"].validator === 'undefined') {
    return;
  }

  var self = this; // Validate Forms

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('form:not(.nk-form-ajax):not([novalidate])').each(function () {
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).validate({
      errorClass: 'nk-error',
      errorElement: 'div',
      errorPlacement: function errorPlacement(error, element) {
        var $parent = element.parent('.input-group');

        if ($parent.length) {
          $parent.after(error);
        } else {
          element.after(error);
        }

        self.debounceResize();
      }
    });
  }); // ajax form

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('form.nk-form-ajax:not([novalidate])').each(function () {
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).validate({
      errorClass: 'nk-error',
      errorElement: 'div',
      errorPlacement: function errorPlacement(error, element) {
        var $parent = element.parent('.input-group');

        if ($parent.length) {
          $parent.after(error);
        } else {
          element.after(error);
        }

        self.debounceResize();
      },
      // Submit the form via ajax (see: jQuery Form plugin)
      submitHandler: function submitHandler(form) {
        var $responseSuccess = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(form).find('.nk-form-response-success');
        var $responseError = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(form).find('.nk-form-response-error');
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(form).ajaxSubmit({
          type: 'POST',
          success: function success(response) {
            response = JSON.parse(response);

            if (response.type && response.type === 'success') {
              $responseError.hide();
              $responseSuccess.html(response.response).show();
              form.reset();
            } else {
              $responseSuccess.hide();
              $responseError.html(response.response).show();
            }

            self.debounceResize();
          },
          error: function error(response) {
            $responseSuccess.hide();
            $responseError.html(response.responseText).show();
            self.debounceResize();
          }
        });
      }
    });
  });
}



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initInstagram", function() { return initInstagram; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Instagram

-------------------------------------------------------------------*/

function initInstagram() {
  var self = this;
  var $instagram = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-instagram');

  if (!$instagram.length || !self.options.templates.instagram) {
    return;
  }
  /**
   * Templating a instagram item using '{{ }}' braces
   * @param  {Object} data Instagram item details are passed
   * @return {String} Templated string
   */


  function templating(data, temp) {
    var temp_variables = ['link', 'image', 'caption'];

    for (var i = 0, len = temp_variables.length; i < len; i++) {
      temp = temp.replace(new RegExp('{{' + temp_variables[i] + '}}', 'gi'), data[temp_variables[i]]);
    }

    return temp;
  }

  $instagram.each(function () {
    var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    var options = {
      userID: $this.attr('data-instagram-user-id') || null,
      count: $this.attr('data-instagram-count') || 8,
      template: $this.attr('data-instagram-template') || self.options.templates.instagram,
      quality: $this.attr('data-instagram-quality') || 'sm',
      // sm, md, lg
      loadingText: self.options.templates.instagramLoadingText,
      failText: self.options.templates.instagramFailText,
      apiPath: self.options.templates.instagramApiPath
    }; // stop if running in file protocol

    if (window.location.protocol === 'file:') {
      $this.html('<div class="col-12">' + options.failText + '</div>');
      console.error('You should run you website on webserver with PHP to get working Instagram');
      return;
    }

    $this.html('<div class="col-12">' + options.loadingText + '</div>'); // Fetch instagram images

    _utility__WEBPACK_IMPORTED_MODULE_0__["$"].getJSON(options.apiPath, {
      userID: options.userID,
      count: options.count
    }, function (response) {
      $this.html('');

      for (var i = 0; i < options.count; i++) {
        var instaItem = false;

        if (response[i]) {
          instaItem = response[i];
        } else if (response.statuses && response.statuses[i]) {
          instaItem = response.statuses[i];
        } else {
          break;
        }

        var resolution = 'thumbnail';

        if (options.quality === 'md') {
          resolution = 'low_resolution';
        }

        if (options.quality === 'lg') {
          resolution = 'standard_resolution';
        }

        var temp_data = {
          link: instaItem.link,
          image: instaItem.images[resolution].url,
          caption: instaItem.caption
        };
        $this.append(templating(temp_data, options.template));
      } // resize window


      self.debounceResize();
    }).fail(function (a) {
      $this.html('<div class="col-12">' + options.failText + '</div>');
      _utility__WEBPACK_IMPORTED_MODULE_0__["$"].error(a.responseText);
    });
  });
}



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initTwitter", function() { return initTwitter; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Twitter

-------------------------------------------------------------------*/

function initTwitter() {
  var self = this;
  var $twtFeeds = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-twitter-list');

  if (!$twtFeeds.length || !self.options.templates.twitter) {
    return;
  }
  /**
   * Templating a tweet using '{{ }}' braces
   * @param  {Object} data Tweet details are passed
   * @return {String}      Templated string
   */


  function templating(data, temp) {
    var temp_variables = ['date', 'tweet', 'avatar', 'url', 'retweeted', 'screen_name', 'user_name'];

    for (var i = 0, len = temp_variables.length; i < len; i++) {
      temp = temp.replace(new RegExp('{{' + temp_variables[i] + '}}', 'gi'), data[temp_variables[i]]);
    }

    return temp;
  }

  $twtFeeds.each(function () {
    var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    var options = {
      username: $this.attr('data-twitter-user-name') || null,
      list: null,
      hashtag: $this.attr('data-twitter-hashtag') || null,
      count: $this.attr('data-twitter-count') || 2,
      hideReplies: $this.attr('data-twitter-hide-replies') === 'true' ? true : false,
      template: $this.attr('data-twitter-template') || self.options.templates.twitter,
      loadingText: self.options.templates.twitterLoadingText,
      failText: self.options.templates.twitterFailText,
      apiPath: self.options.templates.twitterApiPath
    }; // stop if running in file protocol

    if (window.location.protocol === 'file:') {
      $this.html(options.failText);
      console.error('You should run you website on webserver with PHP to get working Twitter');
      return;
    } // Set loading


    $this.html('<span>' + options.loadingText + '</span>'); // Fetch tweets

    _utility__WEBPACK_IMPORTED_MODULE_0__["$"].getJSON(options.apiPath, {
      username: options.username,
      list: options.list,
      hashtag: options.hashtag,
      count: options.count,
      exclude_replies: options.hideReplies
    }, function (twt) {
      $this.html('');

      for (var i = 0; i < options.count; i++) {
        var tweet = false;

        if (twt[i]) {
          tweet = twt[i];
        } else if (twt.statuses && twt.statuses[i]) {
          tweet = twt.statuses[i];
        } else {
          break;
        }

        var temp_data = {
          user_name: tweet.user.name,
          date: tweet.date_formatted,
          tweet: tweet.text_entitled,
          avatar: '<img src="' + tweet.user.profile_image_url + '" />',
          url: 'https://twitter.com/' + tweet.user.screen_name + '/status/' + tweet.id_str,
          retweeted: tweet.retweeted,
          screen_name: '@' + tweet.user.screen_name
        };
        $this.append(templating(temp_data, options.template));
      } // resize window


      self.debounceResize();
    }).fail(function (a) {
      $this.html(options.failText);
      _utility__WEBPACK_IMPORTED_MODULE_0__["$"].error(a.responseText);
    });
  });
}



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginStickySidebar", function() { return initPluginStickySidebar; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/*------------------------------------------------------------------

  Init Plugin Sticky Sidebar

-------------------------------------------------------------------*/

function initPluginStickySidebar() {
  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__["$"].fn.stick_in_parent === 'undefined') {
    return;
  }

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-sidebar-sticky').each(function () {
    var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    var $parent = $this.parent();
    $parent.addClass('nk-sidebar-sticky-parent');
    $this.wrapInner('<div>').children().stick_in_parent({
      parent: $parent,
      recalc_every: 50,
      offset_top: parseInt($this.attr('data-offset-top'), 10) || 0,
      // fixed ADS reloading issue https://github.com/leafo/sticky-kit/issues/45
      spacer: false
    }) // we need to set min height on parent block (in theme it is equal height column) to prevent sidebar content jumping
    .on('sticky_kit:unbottom sticky_kit:stick sticky_kit:bottom', function () {
      $parent.css('min-height', Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).height());
    }).on('sticky_kit:unstick', function () {
      $parent.css('min-height', '');
    });
  });
}



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginNano", function() { return initPluginNano; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/* Nano Scroller */

function initPluginNano($context) {
  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__["$"].fn.nanoScroller !== 'undefined') {
    ($context || _utility__WEBPACK_IMPORTED_MODULE_0__["$doc"]).find('.nano').nanoScroller();
  }
}



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginJarallax", function() { return initPluginJarallax; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/* Jarallax */

function initPluginJarallax() {
  if (typeof _utility__WEBPACK_IMPORTED_MODULE_0__["$"].fn.jarallax === 'undefined') {
    return;
  }

  var self = this; // header parallax

  var $parallaxHeader = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-header-title-parallax, .nk-header-title-parallax-opacity').eq(0);

  if ($parallaxHeader.length) {
    var $headerImage = $parallaxHeader.find('> .bg-image > div:eq(0)');
    var $headerContent = $parallaxHeader.find('> .bg-image ~ *');
    var headerParallaxScroll = $parallaxHeader.hasClass('nk-header-title-parallax');
    var headerParallaxOpacity = $parallaxHeader.hasClass('nk-header-title-parallax-opacity');
    $parallaxHeader.jarallax({
      type: 'custom',
      imgSrc: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      imgWidth: 1,
      imgHeight: 1,
      onScroll: function onScroll(calc) {
        var scrollImg = Math.min(100, 100 * (1 - calc.visiblePercent));
        var scrollInfo = Math.min(50, 50 * (1 - calc.visiblePercent)); // fix if top banner not on top

        if (calc.beforeTop > 0) {
          scrollImg = 0;
          scrollInfo = 0;
        }

        if (headerParallaxScroll) {
          $headerImage.css({
            transform: 'translateY(' + scrollImg + 'px) translateZ(0)'
          });
          $headerContent.css({
            transform: 'translateY(' + scrollInfo + 'px) translateZ(0)'
          });
        }

        if (headerParallaxOpacity) {
          $headerContent.css({
            opacity: calc.visiblePercent < 0 || calc.beforeTop > 0 ? 1 : calc.visiblePercent
          });
        }
      }
    });
  } // footer parallax


  var $parallaxFooter = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-footer-parallax, .nk-footer-parallax-opacity').eq(0);

  if ($parallaxFooter.length) {
    var $footerImage = $parallaxFooter.find('> .bg-image > div');
    var $footerContent = $parallaxFooter.find('> .bg-image ~ *');
    var footerParallaxScroll = $parallaxFooter.hasClass('nk-footer-parallax');
    var footerParallaxOpacity = $parallaxFooter.hasClass('nk-footer-parallax-opacity');
    $parallaxFooter.jarallax({
      type: 'custom',
      imgSrc: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
      imgWidth: 1,
      imgHeight: 1,
      onScroll: function onScroll(calc) {
        var scrollImg = -Math.min(100, 100 * (1 - calc.visiblePercent));
        var scrollInfo = -Math.min(50, 50 * (1 - calc.visiblePercent));

        if (footerParallaxScroll) {
          $footerImage.css({
            transform: 'translateY(' + scrollImg + 'px) translateZ(0)'
          });
          $footerContent.css({
            transform: 'translateY(' + scrollInfo + 'px) translateZ(0)'
          });
        }

        if (footerParallaxOpacity) {
          $footerContent.css({
            opacity: calc.visiblePercent < 0 ? 1 : calc.visiblePercent
          });
        }
      }
    });
  } // video backgrounds


  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.bg-video[data-video]').each(function () {
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-jarallax-video', Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-video'));
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).removeAttr('data-video');
  }); // primary parallax

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.bg-image-parallax, .bg-video-parallax').jarallax({
    speed: self.options.parallaxSpeed
  }); // video without parallax

  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.bg-video:not(.bg-video-parallax)').jarallax({
    speed: 1
  });
}



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginFlickity", function() { return initPluginFlickity; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/* Flickity */

function initPluginFlickity() {
  if (typeof window.Flickity === 'undefined') {
    return;
  }

  var self = this;

  function addDefaultArrows($carousel) {
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-flickity-arrow nk-flickity-arrow-prev"><span class="pe-7s-angle-left"></span></div>').on('click', function () {
      $carousel.flickity('previous');
    }).appendTo($carousel);
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('<div class="nk-flickity-arrow nk-flickity-arrow-next"><span class="pe-7s-angle-right"></span></div>').on('click', function () {
      $carousel.flickity('next');
    }).appendTo($carousel);
  }

  function updateCustomArrows($carousel) {
    var data = $carousel.children('.nk-carousel-inner').data('flickity');
    var currIndex = data.selectedIndex;
    var nextIndex;
    var prevIndex; // get next and prev cells

    if (currIndex === 0) {
      nextIndex = 1;
      prevIndex = data.cells.length - 1;
    } else if (currIndex === data.cells.length - 1) {
      nextIndex = 0;
      prevIndex = data.cells.length - 2;
    } else {
      nextIndex = currIndex + 1;
      prevIndex = currIndex - 1;
    }

    var $nextCell = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(data.cells[nextIndex].element);
    var $prevCell = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(data.cells[prevIndex].element);
    var $currCell = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(data.cells[currIndex].element); // get name and sources

    var nextName = $nextCell.find('.nk-carousel-item-name').text();
    var prevName = $prevCell.find('.nk-carousel-item-name').text();
    var currName = $currCell.find('.nk-carousel-item-name').html();
    var currLinks = $currCell.find('.nk-carousel-item-links').html(); // add info to buttons

    $carousel.find('.nk-carousel-next > .nk-carousel-arrow-name').html(nextName);
    $carousel.find('.nk-carousel-prev > .nk-carousel-arrow-name').html(prevName);
    $carousel.find('.nk-carousel-current > .nk-carousel-name').html(currName);
    $carousel.find('.nk-carousel-current > .nk-carousel-links').html(currLinks);
  } // prevent click event fire when drag carousel


  function noClickEventOnDrag($carousel) {
    $carousel.on('dragStart.flickity', function () {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).find('.flickity-viewport').addClass('is-dragging');
    });
    $carousel.on('dragStart.flickity', function () {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).find('.flickity-viewport').removeClass('is-dragging');
    });
  } // carousel 1


  var $carousel1 = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-carousel');

  if ($carousel1.length) {
    $carousel1.children('.nk-carousel-inner').each(function () {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).flickity({
        pageDots: Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-dots') === 'true' || false,
        autoPlay: parseFloat(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-autoplay')) || false,
        prevNextButtons: false,
        wrapAround: true,
        cellAlign: Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-cell-align') || 'center'
      });

      if (Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-arrows') === 'true') {
        addDefaultArrows(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this));
      }

      updateCustomArrows(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent());
    }).on('select.flickity', function () {
      updateCustomArrows(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent());
    });
    $carousel1.on('click', '.nk-carousel-next', function () {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().children('.nk-carousel-inner').flickity('next');
    });
    $carousel1.on('click', '.nk-carousel-prev', function () {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().children('.nk-carousel-inner').flickity('previous');
    });
    noClickEventOnDrag($carousel1.children('.nk-carousel-inner'));
  } // carousel 2


  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-carousel-2 > .nk-carousel-inner').each(function () {
    Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).flickity({
      pageDots: Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-dots') === 'true' || false,
      autoPlay: parseFloat(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-autoplay')) || false,
      prevNextButtons: false,
      wrapAround: true,
      imagesLoaded: true,
      cellAlign: Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-cell-align') || 'center'
    });

    if (Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-arrows') === 'true') {
      addDefaultArrows(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this));
    }

    noClickEventOnDrag(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this));
  }); // carousel 3

  var $carousel3 = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-carousel-3'); // set height for items

  function setHeightCarousel3() {
    $carousel3.each(function () {
      var $allImages = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).find('img');
      var size = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-size') || 0.8;
      var resultH = _utility__WEBPACK_IMPORTED_MODULE_0__["wndH"] * size;
      var maxItemW = Math.min(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().width(), _utility__WEBPACK_IMPORTED_MODULE_0__["wndW"]) * size;
      $allImages.each(function () {
        if (this.naturalWidth && this.naturalHeight && resultH * this.naturalWidth / this.naturalHeight > maxItemW) {
          resultH = maxItemW * this.naturalHeight / this.naturalWidth;
        }
      });
      $allImages.css('height', resultH);
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).children('.nk-carousel-inner').flickity('resize');
    });
  }

  if ($carousel3.length) {
    $carousel3.children('.nk-carousel-inner').each(function () {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).flickity({
        pageDots: Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-dots') === 'true' || false,
        autoPlay: parseFloat(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-autoplay')) || false,
        prevNextButtons: false,
        wrapAround: true,
        imagesLoaded: true,
        cellAlign: Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-cell-align') || 'center'
      });
      updateCustomArrows(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent());

      if (Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent().attr('data-arrows') === 'true') {
        addDefaultArrows(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this));
      }
    }).on('select.flickity', function () {
      updateCustomArrows(Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent());
    });
    $carousel3.on('click', '.nk-carousel-next', function () {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parents('.nk-carousel-3:eq(0)').children('.nk-carousel-inner').flickity('next');
    });
    $carousel3.on('click', '.nk-carousel-prev', function () {
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parents('.nk-carousel-3:eq(0)').children('.nk-carousel-inner').flickity('previous');
    });
    setHeightCarousel3();
    self.debounceResize(setHeightCarousel3);
    noClickEventOnDrag($carousel3.children('.nk-carousel-inner'));
  } // update products carousel


  var $storeCarousel = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-carousel-1, .nk-carousel-2, .nk-carousel-3').filter('.nk-store');

  function updateStoreProducts() {
    $storeCarousel.each(function () {
      var currentTallest = 0;
      var currentRowStart = 0;
      var rowDivs = [];
      var topPosition = 0;
      var currentDiv = 0;
      var $el;
      Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).find('.nk-product').each(function () {
        $el = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
        $el.css('height', '');
        topPosition = $el.position().top;

        if (currentRowStart !== topPosition) {
          for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].css('height', currentTallest);
          }

          rowDivs.length = 0; // empty the array

          currentRowStart = topPosition;
          currentTallest = $el.innerHeight();
          rowDivs.push($el);
        } else {
          rowDivs.push($el);
          currentTallest = currentTallest < $el.innerHeight() ? $el.innerHeight() : currentTallest;
        }

        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
          rowDivs[currentDiv].css('height', currentTallest);
        }
      });
    });
  }

  if ($storeCarousel.length) {
    self.debounceResize(updateStoreProducts);
    updateStoreProducts();
  }
}



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginIsotope", function() { return initPluginIsotope; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/* Isotope */

function initPluginIsotope() {
  if (typeof window.Isotope === 'undefined') {
    return;
  }

  var self = this;
  Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-isotope').each(function () {
    var $this = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    var $grid = $this.isotope({
      itemSelector: '.nk-isotope-item'
    });
    $grid.imagesLoaded().progress(function () {
      $grid.isotope('layout');
    });
    $grid.on('arrangeComplete', function () {
      self.debounceResize();
    }); // filter

    var $filter = [];

    if ($this.parent().hasClass('nk-portfolio-list')) {
      $filter = $this.parent().prev('.nk-isotope-filter');
    } else {
      $filter = $this.prev('.nk-isotope-filter');
    }

    if ($filter.length) {
      $filter.on('click', '[data-filter]', function (e) {
        e.preventDefault();
        var filter = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).attr('data-filter');
        Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).addClass('active').siblings().removeClass('active');
        $grid.isotope({
          filter: filter === '*' ? '' : '[data-filter*=' + filter + ']'
        });
      });
    }
  }); // filter toggler

  _utility__WEBPACK_IMPORTED_MODULE_0__["$body"].on('click', '[href="#nk-toggle-filter"]:not(.busy)', function (e) {
    var $pagination = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).parent('.nk-pagination');
    var $filter = $pagination.next('.nk-isotope-filter');
    var isActive = $filter.hasClass('nk-isotope-filter-active');

    if (!$pagination.length || !$filter.length) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();
    $pagination.addClass('busy');

    if (isActive) {
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].staggerTo($filter.children(), 0.2, {
        y: -10,
        opacity: 0
      }, 0.04, function () {
        _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($filter, 0.4, {
          height: 0,
          marginBottom: 0,
          marginTop: 0,
          force3D: true,
          display: 'none',
          onComplete: function onComplete() {
            $pagination.removeClass('nk-isotope-filter-active');
            $filter.removeClass('nk-isotope-filter-active');
            $pagination.removeClass('busy');
            Object(_utility__WEBPACK_IMPORTED_MODULE_0__["debounceResize"])();
          }
        });
      });
    } else {
      $filter.css('height', 'auto');
      var filterHeight = $filter.height();
      $filter.css('height', 0);
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].set($filter.children(), {
        y: -10,
        opacity: 0
      });
      _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].to($filter, 0.4, {
        height: filterHeight,
        marginBottom: 30,
        marginTop: -23,
        force3D: true,
        display: 'block',
        onComplete: function onComplete() {
          _utility__WEBPACK_IMPORTED_MODULE_0__["tween"].staggerTo($filter.children(), 0.2, {
            y: 0,
            opacity: 1
          }, 0.04, function () {
            $pagination.addClass('nk-isotope-filter-active');
            $filter.addClass('nk-isotope-filter-active');
            $pagination.removeClass('busy');
            Object(_utility__WEBPACK_IMPORTED_MODULE_0__["debounceResize"])();
          });
        }
      });
    }
  });
}



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginPhotoswipe", function() { return initPluginPhotoswipe; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/* PhotoSwipe */

function initPluginPhotoswipe() {
  var $gallery = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.nk-popup-gallery');

  if (typeof PhotoSwipe === 'undefined' || !$gallery.length) {
    return;
  } // prepare photoswipe markup


  var markup = "<div id=\"gallery\" class=\"pswp\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n          <div class=\"pswp__bg\"></div>\n          <div class=\"pswp__scroll-wrap\">\n            <div class=\"pswp__container\">\n              <div class=\"pswp__item\"></div>\n              <div class=\"pswp__item\"></div>\n              <div class=\"pswp__item\"></div>\n            </div>\n            <div class=\"pswp__ui pswp__ui--hidden\">\n              <div class=\"pswp__top-bar\">\n                <div class=\"pswp__counter\"></div>\n                <button class=\"pswp__button pswp__button--close\" title=\"Close (Esc)\"></button>\n                <button class=\"pswp__button pswp__button--zoom\" title=\"Zoom in/out\"></button>\n                <div class=\"pswp__preloader\">\n                  <div class=\"pswp__preloader__icn\">\n                    <div class=\"pswp__preloader__cut\">\n                      <div class=\"pswp__preloader__donut\"></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"pswp__loading-indicator\"><div class=\"pswp__loading-indicator__line\"></div></div>\n              <button class=\"pswp__button pswp__button--arrow--left\" title=\"Previous (arrow left)\"></button>\n              <button class=\"pswp__button pswp__button--arrow--right\" title=\"Next (arrow right)\"></button>\n              <div class=\"pswp__caption\">\n                <div class=\"pswp__caption__center\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>";
  _utility__WEBPACK_IMPORTED_MODULE_0__["$body"].append(markup); // init code

  var parseThumbnailElements = function parseThumbnailElements(el) {
    var thumbElements = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(el).find('a.nk-gallery-item'),
        items = [],
        childElements,
        descrElement,
        size,
        item;
    thumbElements.each(function () {
      childElements = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).find('img');
      descrElement = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this).next('.nk-gallery-item-description');
      size = (this.getAttribute('data-size') || '1920x1080').split('x'); // create slide object

      item = {
        src: this.getAttribute('href'),
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10),
        author: this.getAttribute('data-author')
      };

      if (descrElement.length) {
        item.title = descrElement.html();
      } // save link to element for getThumbBoundsFn


      item.el = this;

      if (childElements.length > 0) {
        // thumbnail url
        item.msrc = item.src;

        if (childElements.length > 1) {
          item.title = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(childElements).filter('.photoswipe-description').html();
        }
      }

      var mediumSrc = this.getAttribute('data-med') || item.src;

      if (mediumSrc) {
        size = (this.getAttribute('data-med-size') || this.getAttribute('data-size') || '1920x1080').split('x'); // "medium-sized" image

        item.m = {
          src: mediumSrc,
          w: parseInt(size[0], 10),
          h: parseInt(size[1], 10)
        };
      } // original image


      item.o = {
        src: item.src,
        w: item.w,
        h: item.h
      };
      items.push(item);
    });
    return items;
  };

  var openPhotoSwipe = function openPhotoSwipe(index, galleryElement, disableAnimation, fromURL) {
    var pswpElement = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])('.pswp')[0],
        gallery,
        options,
        items;
    items = parseThumbnailElements(galleryElement); // define options (if needed)

    options = {
      captionAndToolbarShowEmptyCaptions: false,
      mainClass: 'pswp--minimal--dark',
      barsSize: {
        top: 0,
        bottom: 0
      },
      captionEl: true,
      fullscreenEl: false,
      shareEl: false,
      bgOpacity: 0.85,
      tapToClose: true,
      tapToToggleControls: false,
      showHideOpacity: true,
      // Function builds caption markup
      addCaptionHTMLFn: function addCaptionHTMLFn(item, captionEl) {
        // item      - slide object
        // captionEl - caption DOM element
        // isFake    - true when content is added to fake caption container
        //             (used to get size of next or previous caption)
        if (!item.title && !item.author) {
          captionEl.children[0].innerHTML = '';
          return false;
        }

        var caption = '';

        if (item.title) {
          caption += item.title;
        }

        if (item.author) {
          if (item.title) {
            caption += '<br>';
          }

          caption += '<small>' + item.author + '</small>';
        }

        captionEl.children[0].innerHTML = caption;
        return true;
      },
      galleryUID: galleryElement.getAttribute('data-pswp-uid')
    };

    if (fromURL) {
      if (options.galleryPIDs) {
        // parse real index when custom PIDs are used
        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
        for (var j = 0; j < items.length; j++) {
          if (items[j].pid === index) {
            options.index = j;
            break;
          }
        }
      } else {
        options.index = parseInt(index, 10) - 1;
      }
    } else {
      options.index = parseInt(index, 10);
    } // exit if index not found


    if (isNaN(options.index)) {
      return;
    }

    if (disableAnimation) {
      options.showAnimationDuration = 0;
    } // Pass data to PhotoSwipe and initialize it


    gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options); // see: http://photoswipe.com/documentation/responsive-images.html

    var realViewportWidth,
        useLargeImages = false,
        firstResize = true,
        imageSrcWillChange;
    gallery.listen('beforeResize', function () {
      var dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
      dpiRatio = Math.min(dpiRatio, 2.5);
      realViewportWidth = gallery.viewportSize.x * dpiRatio;

      if (realViewportWidth >= 1200 || !gallery.likelyTouchDevice && realViewportWidth > 800 || screen.width > 1200) {
        if (!useLargeImages) {
          useLargeImages = true;
          imageSrcWillChange = true;
        }
      } else {
        if (useLargeImages) {
          useLargeImages = false;
          imageSrcWillChange = true;
        }
      }

      if (imageSrcWillChange && !firstResize) {
        gallery.invalidateCurrItems();
      }

      if (firstResize) {
        firstResize = false;
      }

      imageSrcWillChange = false;
    });
    gallery.listen('gettingData', function (idx, item) {
      if (useLargeImages) {
        item.src = item.o.src;
        item.w = item.o.w;
        item.h = item.o.h;
      } else {
        item.src = item.m.src;
        item.w = item.m.w;
        item.h = item.m.h;
      }
    });
    gallery.init();
  };

  var photoswipeParseHash = function photoswipeParseHash() {
    var hash = window.location.hash.substring(1),
        params = {};

    if (hash.length < 5) {
      // pid=1
      return params;
    }

    var vars = hash.split('&');

    for (var _i = 0; _i < vars.length; _i++) {
      if (!vars[_i]) {
        continue;
      }

      var pair = vars[_i].split('=');

      if (pair.length < 2) {
        continue;
      }

      params[pair[0]] = pair[1];
    }

    if (params.gid) {
      params.gid = parseInt(params.gid, 10);
    }

    return params;
  }; // select all gallery elements


  var i = 0;
  $gallery.each(function () {
    var $thisGallery = Object(_utility__WEBPACK_IMPORTED_MODULE_0__["$"])(this);
    $thisGallery.attr('data-pswp-uid', i + 1);
    $thisGallery.on('click', 'a.nk-gallery-item', function (e) {
      e.preventDefault();
      var index = 0;
      var clicked = this;
      $thisGallery.find('a.nk-gallery-item').each(function (idx) {
        if (this === clicked) {
          index = idx;
          return false;
        }

        return true;
      });
      openPhotoSwipe(index, $thisGallery[0]);
    });
    i++;
  }); // Parse URL and open gallery if it contains #&pid=3&gid=1

  var hashData = photoswipeParseHash();

  if (hashData.pid && hashData.gid) {
    openPhotoSwipe(hashData.pid, $gallery.get(hashData.gid - 1), true, true);
  }
}



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPluginTabs", function() { return initPluginTabs; });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/* Bootstrap Tabs */

function initPluginTabs() {
  var self = this;
  _utility__WEBPACK_IMPORTED_MODULE_0__["$wnd"].on('shown.bs.tab', function () {
    self.debounceResize();
  });
}



/***/ })
/******/ ]);