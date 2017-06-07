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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Modal_1 = __webpack_require__(0);
__webpack_require__(1);
var backgroundImage = __webpack_require__(2);
var buttons = document.getElementsByClassName('btn');
buttons[0].addEventListener('click', function () {
    var modal = new Modal_1.default();
    modal.alert('This is on line alert.');
});
buttons[1].addEventListener('click', function () {
    return __awaiter(this, void 0, void 0, function () {
        var modal1;
        return __generator(this, function (_a) {
            modal1 = new Modal_1.default();
            modal1.loadingAlert({ duration: 3000000, loadingText: '生成图片' });
            setTimeout(function () {
                modal1.loadingText = '正在上传';
            }, 3000);
            setTimeout(function () {
                modal1.loadingText = '上传成功';
            }, 6000);
            setTimeout(function () {
                modal1.close();
            }, 9000);
            return [2 /*return*/];
        });
    });
});
buttons[2].addEventListener('click', function () {
    var m = new Modal_1.default();
    m.alert('This is a very long text, it will contain two or more line.This is a very long text, it will contain two or more line.This is a very long text, it will contain two or more line.This is a very long text, it will contain two or more line.This is a very long text, it will contain two or more line.This is a very long text, it will contain two or more line.This is a very long text, it will contain two or more line.This is a very long text, it will contain two or more line.');
});
buttons[3].addEventListener('click', function () {
    var m = new Modal_1.default();
    m.titleAlert('this is title', 'This is content. For alert looking more pretty, I suggest this content be two or more line.');
});
buttons[4].addEventListener('click', function () {
    var m = new Modal_1.default({
        backgroundImage: backgroundImage
    });
    m.alert('购买主题、购买字体、设置铃声后才能获得领奖机会哦～', '好哒');
});


/***/ })
/******/ ]);
});