(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Modal = (function () {
    function Modal(options) {
        //setting options
        options = options || {};
        this.animationDuration = options.animationDuration || 300;
        this.backdropColor = options.backdropColor || '#ffffff';
        this.baseIndex = options.baseIndex || 200;
        this.contentBoxTransformStart = 'translate3d(-50%, -50%, 0) scale(1.4)';
        this.sizeRatio = options.sizeRatio || ((document.documentElement.clientWidth / 360) * 10);
        this.contentBoxWidth = options.contentBoxWith;
        //create wrapper
        this.wrapper = document.createElement('div');
        this.wrapper.style.position = 'fixed';
        this.wrapper.style.top = '0';
        this.wrapper.style.right = '0';
        this.wrapper.style.left = '0';
        this.wrapper.style.bottom = '0';
        this.wrapper.style.zIndex = this.baseIndex + '';
        this.wrapper.style.fontWeight = '500';
        document.body.appendChild(this.wrapper);
        //create backdrop
        this.backdrop = document.createElement('div');
        this.backdrop.style.position = 'absolute';
        this.backdrop.style.zIndex = this.baseIndex + 1 + '';
        this.backdrop.style.top = '0';
        this.backdrop.style.right = '0';
        this.backdrop.style.bottom = '0';
        this.backdrop.style.left = '0';
        this.backdrop.style.opacity = '0';
        this.backdrop.style.backgroundColor = 'rgba(0,0,0,0.5)';
        this.backdrop.style.transitionDuration = this.animationDuration + 'ms';
        this.backdrop.style.transitionProperty = 'opacity';
        this.backdrop.addEventListener('touchmove', function (event) {
            console.log('move');
            event.preventDefault();
        }, false);
        this.wrapper.appendChild(this.backdrop);
        //create content box
        this.contentBox = document.createElement('div');
        this.contentBox.style.position = 'absolute';
        this.contentBox.style.top = '50%';
        this.contentBox.style.left = '50%';
        this.contentBox.style.zIndex = this.baseIndex + 2 + '';
        this.contentBox.style.opacity = '0';
        this.contentBox.style.transform = this.contentBoxTransformStart;
        this.contentBox.style.transitionProperty = 'opacity transform';
        this.contentBox.style.transitionDuration = this.animationDuration + 'ms';
        this.contentBox.style.perspective = '1000';
        this.contentBox.style.backgroundColor = this.backdropColor;
        this.contentBox.style.borderRadius = 0.333 * this.sizeRatio + 'px';
        if (options.backgroundImage) {
            this.contentBox.style.backgroundImage = 'url("' + options.backgroundImage + '")';
            this.contentBox.style.backgroundPosition = options.backgroundPosition || 'bottom';
            this.contentBox.style.backgroundRepeat = options.backgroundRepeat || 'no-repeat';
        }
        this.wrapper.appendChild(this.contentBox);
    }
    Modal.prototype.createButtons = function (options) {
        var self = this;
        var buttonsBox = document.createElement('div');
        buttonsBox.style.textAlign = 'center';
        buttonsBox.style.paddingTop = 1.2 * this.sizeRatio + 'px';
        buttonsBox.style.paddingBottom = 1.2 * this.sizeRatio + 'px';
        buttonsBox.style.paddingLeft = 1.2 * this.sizeRatio + 'px';
        buttonsBox.style.paddingRight = 1.2 * this.sizeRatio + 'px';
        var createBtn = function () {
            var btn = document.createElement('div');
            btn.style.textAlign = 'center';
            btn.style.display = 'inline-block';
            btn.style.color = '#198ded';
            btn.style.fontSize = 1.6 * self.sizeRatio + 'px';
            btn.style.paddingTop = 1.2 * self.sizeRatio + 'px';
            btn.style.paddingBottom = 1.2 * self.sizeRatio + 'px';
            return btn;
        };
        var defaultButton = createBtn();
        defaultButton.innerText = options.defaultButtonText || '确定';
        buttonsBox.appendChild(defaultButton);
        if (options.subButtonText) {
            var subButton = createBtn();
            subButton.innerText = options.subButtonText || '取消';
            subButton.style.width = '50%';
            buttonsBox.appendChild(subButton);
            subButton.addEventListener('click', function () {
                if (options.subButtonCallback) {
                    options.subButtonCallback();
                }
                else {
                    self.close();
                }
            });
            defaultButton.style.width = '50%';
            defaultButton.addEventListener('click', function () {
                if (options.defaultButtonCallback) {
                    options.defaultButtonCallback();
                }
                else {
                    throw new Error('Please provide default button callback');
                }
            });
        }
        else {
            defaultButton.style.width = '100%';
            defaultButton.addEventListener('click', function () {
                if (options.defaultButtonCallback) {
                    options.defaultButtonCallback();
                }
                else {
                    self.close();
                }
            });
        }
        return buttonsBox;
    };
    Modal.prototype.alert = function (content, buttonText) {
        if (this.isShowing) {
            return;
        }
        var self = this;
        this.contentBoxWidth = this.contentBoxWidth || 31.2;
        this.contentBox.style.width = this.contentBoxWidth * this.sizeRatio + 'px';
        var alertContent = document.createElement('div');
        alertContent.innerText = content;
        alertContent.style.fontSize = 1.6 * this.sizeRatio + 'px';
        alertContent.style.color = '#000000';
        alertContent.style.textAlign = 'center';
        alertContent.style.padding = 2 * self.sizeRatio + 'px ' + 2.4 * self.sizeRatio + 'px 0';
        alertContent.style.marginBottom = -0.2 * self.sizeRatio + 'px';
        alertContent.style.lineHeight = 1.8 * self.sizeRatio + 'px';
        this.contentBox.appendChild(alertContent);
        this.contentBox.appendChild(self.createButtons({ defaultButtonText: buttonText }));
        var size = alertContent.getBoundingClientRect();
        if (size.height > 5 * this.sizeRatio) {
            // multi line
            alertContent.style.textAlign = 'left';
        }
        //when everything done, show the box
        self.show();
    };
    Modal.prototype.titleAlert = function (titleText, contentText, buttonText, contentHeight) {
        if (this.isShowing) {
            return;
        }
        var self = this;
        this.contentBoxWidth = this.contentBoxWidth || 31.2;
        this.contentBox.style.width = this.contentBoxWidth * this.sizeRatio + 'px';
        var box = document.createElement('div');
        box.style.paddingTop = 2.4 * self.sizeRatio + 'px';
        box.style.paddingLeft = 2.4 * self.sizeRatio + 'px';
        box.style.paddingRight = 2.4 * self.sizeRatio + 'px';
        var title = document.createElement('div');
        title.style.lineHeight = '1';
        title.style.fontSize = 1.4 * self.sizeRatio + 'px';
        title.style.marginBottom = 0.4 * self.sizeRatio + 'px';
        title.style.color = '#000000';
        title.innerText = titleText;
        box.appendChild(title);
        var content = document.createElement('div');
        content.style.fontSize = 1.4 * self.sizeRatio + 'px';
        content.style.color = 'rgba(0,0,0,0.4)';
        content.style.lineHeight = 1.8 * self.sizeRatio + 'px';
        if (contentHeight) {
            if (typeof contentHeight === 'string') {
                content.style.height = contentHeight;
            }
            else if (typeof contentHeight === 'number') {
                content.style.height = contentHeight + 'px';
            }
            else {
                throw new Error('Please supply valid type value.');
            }
        }
        else {
            content.style.height = 'auto';
        }
        content.style.overflowY = 'scroll';
        content.innerText = contentText;
        box.appendChild(content);
        this.contentBox.appendChild(box);
        this.contentBox.appendChild(self.createButtons({ defaultButtonText: buttonText }));
        this.show();
    };
    Object.defineProperty(Modal.prototype, "loadingText", {
        set: function (text) {
            this._loadingText.textContent = text;
        },
        enumerable: true,
        configurable: true
    });
    Modal.prototype.loadingAlert = function (args) {
        if (this.isShowing) {
            return;
        }
        args = args || {};
        var self = this;
        self.contentBox.style.width = '100%';
        self.contentBox.style.textAlign = 'center';
        self.contentBoxTransformStart = 'translate3d(-50%, -50%, 0) scale(1)';
        self.contentBox.style.backgroundColor = '';
        var nameSpace = 'http://www.w3.org/2000/svg';
        var loading = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        loading.setAttributeNS(null, 'viewBox', '0 0 32 32');
        loading.setAttributeNS(null, 'width', '32');
        loading.setAttributeNS(null, 'height', '32');
        loading.setAttributeNS(null, 'fill', 'white');
        loading.setAttributeNS(null, 'transform', 'scale(2)');
        loading.style.transform = 'scale(' + 0.08 * self.sizeRatio + ')';
        var path1 = document.createElementNS(nameSpace, 'path');
        path1.setAttributeNS(null, 'opacity', '0.25');
        path1.setAttributeNS(null, 'd', 'M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4');
        loading.appendChild(path1);
        var path2 = document.createElementNS(nameSpace, 'path');
        path2.setAttributeNS(null, 'd', 'M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z');
        var animate = document.createElementNS(nameSpace, 'animateTransform');
        animate.setAttributeNS(null, 'attributeName', 'transform');
        animate.setAttributeNS(null, 'type', 'rotate');
        animate.setAttributeNS(null, 'from', '0 16 16');
        animate.setAttributeNS(null, 'to', '360 16 16');
        animate.setAttributeNS(null, 'dur', '0.8s');
        animate.setAttributeNS(null, 'repeatCount', 'indefinite');
        path2.appendChild(animate);
        loading.appendChild(path2);
        self.contentBox.appendChild(loading);
        this._loadingText = document.createElement('div');
        this._loadingText.style.marginTop = 1.5 * this.sizeRatio + 'px';
        this._loadingText.style.fontSize = 1.4 * this.sizeRatio + 'px';
        this._loadingText.style.color = '#ffffff';
        this._loadingText.style.fontWeight = '500';
        self.contentBox.appendChild(this._loadingText);
        args.loadingText = args.loadingText || '';
        this.loadingText = args.loadingText;
        self.show({ hasShadow: false });
        if (args.duration) {
            setTimeout(function () {
                self.close();
                args.finishCallback && args.finishCallback();
            }, args.duration);
        }
    };
    Modal.disabledBodyScrolling = function () {
        document.body.style.height = '100%';
        document.body.style.overflow = 'hidden';
    };
    Modal.enabledBodyScrolling = function () {
        document.body.style.height = 'auto';
        document.body.style.overflow = '';
    };
    Modal.prototype.show = function (args) {
        args = args || {};
        args.hasShadow = args.hasShadow === undefined;
        var self = this;
        window.requestAnimationFrame(function () {
            Modal.disabledBodyScrolling();
            self.backdrop.style.opacity = '1';
            self.contentBox.style.transform = 'translate3d(-50%, -50%, 0) scale(1)';
            self.contentBox.style.opacity = '1';
            self.isShowing = true;
        });
        setTimeout(function () {
            args.hasShadow && (self.contentBox.style.boxShadow = '0 0 ' + 0.6666 * self.sizeRatio + 'px rgba(0,0,0,0.2)');
        }, this.animationDuration);
    };
    Modal.prototype.close = function () {
        var self = this;
        window.requestAnimationFrame(function () {
            Modal.enabledBodyScrolling();
            self.contentBox.style.transform = self.contentBoxTransformStart;
            self.contentBox.style.boxShadow = '';
            self.contentBox.style.opacity = '0';
            self.backdrop.style.opacity = '0';
        });
        setTimeout(function () {
            window.requestAnimationFrame(function () {
                self.wrapper.parentNode.removeChild(self.wrapper);
                self = undefined;
            });
        }, self.animationDuration);
    };
    return Modal;
}());
exports.default = Modal;


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Modal_1 = __webpack_require__(0);
module.exports = Modal_1.default;


/***/ })
/******/ ]);
});