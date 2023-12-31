function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive": (
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": (
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container\">\n  <img src=\"assets/images/spy.jpg\">\n    <router-outlet class=\"\"></router-outlet>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/eights-question/eights-question.component.html": (
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/eights-question/eights-question.component.html ***!
    \*****************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEightsQuestionEightsQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"task-container text-center\">\n  <div class=\"task-container text-center\">\n    <div class=\"question-div\" [ngClass]=\"currentAgent.memberSide==1 ? 'for-first':'for-second'\">{{currentQuestions.question}}</div>\n    <span class=\"small text-danger\">{{currentQuestions.title}}</span>\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"submitForm()\" class=\"d-flex flex-column justify-content-center \">\n      <div class=\"mb-3 input-array\">\n        <input type=\"number\" class=\"form-control\" min=\"0\" max=\"9\" content=\"width=device-width, initial-scale=1, maximum-scale=1\" formControlName=\"agentAnswer\"  id=\"exampleInputNumber\">\n      </div>\n      <button type=\"submit\" [disabled]=\"!myForm.valid\" class=\"btn btn-primary\">Підтвердити</button>\n      <span *ngIf=\"myForm.valid && correct\" class=\"mt-3 text-danger text-center\">Відповідь хибна ,ти можеш краще!</span>\n    </form>\n\n  </div>\n  <img *ngIf=\"correctAnswer\" src=\"assets/images/true.png\">\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/fifth-question/fifth-question.component.html": (
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fifth-question/fifth-question.component.html ***!
    \***************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFifthQuestionFifthQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"task-container text-center\">\n  <div class=\"task-container text-center\">\n    <div class=\"question-div\" [ngClass]=\"currentAgent.memberSide==1 ? 'for-first':'for-second'\">{{currentQuestions.question}}</div>\n    <span class=\"small text-danger\">{{currentQuestions.title}}</span>\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"submitForm()\" class=\"d-flex flex-column justify-content-center \">\n      <div class=\"mb-3 input-array\">\n        <input type=\"number\" class=\"form-control\" min=\"0\" max=\"9\" content=\"width=device-width, initial-scale=1, maximum-scale=1\" formControlName=\"agentAnswer\"  id=\"exampleInputNumber\">\n      </div>\n      <button type=\"submit\" [disabled]=\"!myForm.valid\" class=\"btn btn-primary\">Підтвердити</button>\n      <span *ngIf=\"myForm.valid && correct\" class=\"mt-3 text-danger text-center\">Відповідь хибна ,ти можеш краще!</span>\n    </form>\n\n  </div>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/final-question/final-question.component.html": (
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/final-question/final-question.component.html ***!
    \***************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFinalQuestionFinalQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"task-container text-center\">\n  <div class=\"task-container text-center\">\n    <div class=\"question-div\" [ngClass]=\"currentAgent.memberSide==1 ? 'for-first':'for-second'\">{{currentQuestions.question}}</div>\n    <span class=\"small text-danger\">{{currentQuestions.title}}</span>\n\n\n  </div>\n  <img *ngIf=\"correctAnswer\" src=\"assets/images/true.png\">\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/first-task/first-task.component.html": (
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/first-task/first-task.component.html ***!
    \*******************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFirstTaskFirstTaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"task-container text-center\">\n  <h3>Агенте {{currentAgent}} Тобі необхідно знайти свого напарника</h3>\n  <span >{{currentQuestions.question}}</span>\n  <span class=\"small text-danger\">{{currentQuestions.title}}</span>\n  <form [formGroup]=\"myForm\" (ngSubmit)=\"submitForm()\" class=\"d-flex flex-column justify-content-center \">\n    <div class=\"mb-3 input-array\">\n      <input type=\"number\" (keyup)=\"checkCorrect($event)\"  class=\"form-control\" min=\"0\" max=\"9\" content=\"width=device-width, initial-scale=1, maximum-scale=1\" formControlName=\"agentNumber\"  id=\"exampleInputNumber\">\n      <input type=\"number\" (keyup)=\"checkCorrect($event)\" class=\"form-control mx-2\" maxlength=\"1\" max=\"9\" content=\"width=device-width, initial-scale=1, maximum-scale=1\" formControlName=\"agentNumber2\"  id=\"exampleInputNumber2\">\n      <input type=\"number\" (keyup)=\"checkCorrect($event)\" class=\"form-control\" maxlength=\"1\" max=\"9\" content=\"width=device-width, initial-scale=1, maximum-scale=1\" formControlName=\"agentNumber3\"  id=\"exampleInputNumber3\">\n    </div>\n    <button type=\"submit\" [disabled]=\"!myForm.valid\" class=\"btn btn-primary\">Підтвердити</button>\n    <span *ngIf=\"myForm.valid && correct\" class=\"mt-3 text-danger text-center\">Такого агента не існує!</span>\n  </form>\n  <img *ngIf=\"correctAnswer\" src=\"assets/images/true.png\">\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/fours-question/fours-question.component.html": (
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fours-question/fours-question.component.html ***!
    \***************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFoursQuestionFoursQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"task-container text-center\">\n  <div class=\"task-container text-center\">\n    <div class=\"question-div\" [ngClass]=\"currentAgent.memberSide==1 ? 'for-first':'for-second'\">{{currentQuestions.question}}</div>\n    <span class=\"small text-danger\">{{currentQuestions.title}}</span>\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"submitForm()\" class=\"d-flex flex-column justify-content-center \">\n      <div class=\"mb-3 input-array\">\n        <input type=\"number\" class=\"form-control\" min=\"0\" max=\"9\" content=\"width=device-width, initial-scale=1, maximum-scale=1\" formControlName=\"agentAnswer\"  id=\"exampleInputNumber\">\n      </div>\n      <button type=\"submit\" [disabled]=\"!myForm.valid\" class=\"btn btn-primary\">Підтвердити</button>\n      <span *ngIf=\"myForm.valid && correct\" class=\"mt-3 text-danger text-center\">Відповідь хибна ,ти можеш краще!</span>\n    </form>\n\n  </div>\n  <img *ngIf=\"correctAnswer\" src=\"assets/images/true.png\">\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/quest-offer/quest-offer.component.html": (
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/quest-offer/quest-offer.component.html ***!
    \*********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsQuestOfferQuestOfferComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"container-for-offer\">\n  <h2>Умови</h2>\n  <div class=\"font-italic\">\n    <ul>\n      <li>Умова 1</li>\n      <li>Умова 2</li>\n      <li>Умова 3</li>\n    </ul>\n\n  </div>\n  <div class=\"form-check d-flex align-items-center justify-content-start mt-2\">\n    <input class=\"form-check-input mt-0 mr-2\" [(ngModel)]=\"isChecked\"  type=\"checkbox\" value=\"\" id=\"flexCheckChecked\" checked>\n    <span class=\"ml-3\">\n      Я погоджуюсь з умовами\n    </span>\n  </div>\n  <button type=\"submit\" (click)=\"goToFirstTask()\" [disabled]=\"!isChecked\" class=\"btn btn-sm mt-3 btn-primary\">Підтвердити</button>\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/registration/registration.component.html": (
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/registration/registration.component.html ***!
    \***********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRegistrationRegistrationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "\n<form [formGroup]=\"myForm\" (ngSubmit)=\"submitForm()\" class=\"d-flex flex-column justify-content-center \">\n  <h2 class=\" font-weight-bold w-100 text-center mb-3\">Ваш шифр,Агенте!</h2>\n  <div class=\"mb-3 input-array\">\n    <input type=\"number\" (keyup)=\"checkCorrect($event)\"  class=\"form-control\" min=\"0\" max=\"9\" content=\"width=device-width, initial-scale=1, maximum-scale=1\" formControlName=\"agentNumber\"  id=\"exampleInputNumber\">\n    <input type=\"number\" (keyup)=\"checkCorrect($event)\" class=\"form-control mx-2\" maxlength=\"1\" max=\"9\" content=\"width=device-width, initial-scale=1, maximum-scale=1\" formControlName=\"agentNumber2\"  id=\"exampleInputNumber2\">\n    <input type=\"number\" (keyup)=\"checkCorrect($event)\" class=\"form-control\" maxlength=\"1\" max=\"9\" content=\"width=device-width, initial-scale=1, maximum-scale=1\" formControlName=\"agentNumber3\"  id=\"exampleInputNumber3\">\n  </div>\n  <button type=\"submit\" [disabled]=\"!myForm.valid\" class=\"btn btn-primary\">Підтвердити</button>\n  <span *ngIf=\"myForm.valid && correct\" class=\"mt-3 text-danger text-center\">Такого агента не існує!</span>\n</form>\n\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/second-task/second-task.component.html": (
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/second-task/second-task.component.html ***!
    \*********************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSecondTaskSecondTaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"task-container text-center\">\n  <div class=\"task-container text-center\">\n    <div class=\"question-div\" [ngClass]=\"currentAgent.memberSide==1 ? 'for-first':'for-second'\">{{currentQuestions.question}}</div>\n    <span class=\"small text-danger\">{{currentQuestions.title}}</span>\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"submitForm()\" class=\"d-flex flex-column justify-content-center \">\n      <div class=\"mb-3 input-array\">\n        <input type=\"number\" class=\"form-control\" min=\"0\" max=\"9\" content=\"width=device-width, initial-scale=1, maximum-scale=1\" formControlName=\"agentAnswer\"  id=\"exampleInputNumber\">\n      </div>\n      <button type=\"submit\" [disabled]=\"!myForm.valid\" class=\"btn btn-primary\">Підтвердити</button>\n      <span *ngIf=\"myForm.valid && correct\" class=\"mt-3 text-danger text-center\">Такого агента не існує!</span>\n    </form>\n  </div>\n  <img *ngIf=\"correctAnswer\" src=\"assets/images/true.png\">\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/sevens-question/sevens-question.component.html": (
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sevens-question/sevens-question.component.html ***!
    \*****************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSevensQuestionSevensQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"task-container text-center\">\n  <div class=\"task-container text-center\">\n    <div class=\"question-div\" [ngClass]=\"currentAgent.memberSide==1 ? 'for-first':'for-second'\">{{currentQuestions.question}}</div>\n    <span class=\"small text-danger\">{{currentQuestions.title}}</span>\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"submitForm()\" class=\"d-flex flex-column justify-content-center \">\n      <div class=\"mb-3 input-array\">\n        <input type=\"number\" class=\"form-control\" min=\"0\" max=\"9\" content=\"width=device-width, initial-scale=1, maximum-scale=1\" formControlName=\"agentAnswer\"  id=\"exampleInputNumber\">\n      </div>\n      <button type=\"submit\" [disabled]=\"!myForm.valid\" class=\"btn btn-primary\">Підтвердити</button>\n      <span *ngIf=\"myForm.valid && correct\" class=\"mt-3 text-danger text-center\">Відповідь хибна ,ти можеш краще!</span>\n    </form>\n\n  </div>\n  <img *ngIf=\"correctAnswer\" src=\"assets/images/true.png\">\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/sixs-question/sixs-question.component.html": (
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sixs-question/sixs-question.component.html ***!
    \*************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSixsQuestionSixsQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"task-container text-center\">\n  <div class=\"task-container text-center\">\n    <div class=\"question-div\" [ngClass]=\"currentAgent.memberSide==1 ? 'for-first':'for-second'\">{{currentQuestions.question}}</div>\n    <span class=\"small text-danger\">{{currentQuestions.title}}</span>\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"submitForm()\" class=\"d-flex flex-column justify-content-center \">\n      <div class=\"mb-3 input-array\">\n        <input type=\"number\" class=\"form-control\" min=\"0\" max=\"9\" content=\"width=device-width, initial-scale=1, maximum-scale=1\" formControlName=\"agentAnswer\"  id=\"exampleInputNumber\">\n      </div>\n      <button type=\"submit\" [disabled]=\"!myForm.valid\" class=\"btn btn-primary\">Підтвердити</button>\n      <span *ngIf=\"myForm.valid && correct\" class=\"mt-3 text-danger text-center\">Відповідь хибна ,ти можеш краще!</span>\n    </form>\n\n  </div>\n  <img *ngIf=\"correctAnswer\" src=\"assets/images/true.png\">\n</div>\n";

    /***/
  }),
  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/components/thrd-question/thrd-question.component.html": (
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/thrd-question/thrd-question.component.html ***!
    \*************************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsThrdQuestionThrdQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"task-container text-center\">\n  <div class=\"task-container text-center\">\n    <div class=\"question-div\" [ngClass]=\"currentAgent.memberSide==1 ? 'for-first':'for-second'\">{{currentQuestions.question}}</div>\n    <span class=\"small text-danger\">{{currentQuestions.title}}</span>\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"submitForm()\" class=\"d-flex flex-column justify-content-center \">\n      <div class=\"mb-3 input-array\">\n        <input type=\"number\" class=\"form-control\" min=\"0\" max=\"9\" content=\"width=device-width, initial-scale=1, maximum-scale=1\" formControlName=\"agentAnswer\"  id=\"exampleInputNumber\">\n      </div>\n      <button type=\"submit\" [disabled]=\"!myForm.valid\" class=\"btn btn-primary\">Підтвердити</button>\n      <span *ngIf=\"myForm.valid && correct\" class=\"mt-3 text-danger text-center\">Відповідь хибна ,ти можеш краще!</span>\n    </form>\n\n  </div>\n  <img *ngIf=\"correctAnswer\" src=\"assets/images/true.png\">\n</div>\n";

    /***/
  }),
  /***/"./node_modules/tslib/tslib.es6.js": (
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  }),
  /***/"./src/app/app-routing.module.ts": (
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./components/registration/registration.component */"./src/app/components/registration/registration.component.ts");
    /* harmony import */
    var _components_quest_offer_quest_offer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./components/quest-offer/quest-offer.component */"./src/app/components/quest-offer/quest-offer.component.ts");
    /* harmony import */
    var _components_first_task_first_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./components/first-task/first-task.component */"./src/app/components/first-task/first-task.component.ts");
    /* harmony import */
    var _components_second_task_second_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./components/second-task/second-task.component */"./src/app/components/second-task/second-task.component.ts");
    /* harmony import */
    var _components_thrd_question_thrd_question_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./components/thrd-question/thrd-question.component */"./src/app/components/thrd-question/thrd-question.component.ts");
    /* harmony import */
    var _components_fours_question_fours_question_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./components/fours-question/fours-question.component */"./src/app/components/fours-question/fours-question.component.ts");
    /* harmony import */
    var _components_fifth_question_fifth_question_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./components/fifth-question/fifth-question.component */"./src/app/components/fifth-question/fifth-question.component.ts");
    /* harmony import */
    var _components_sixs_question_sixs_question_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./components/sixs-question/sixs-question.component */"./src/app/components/sixs-question/sixs-question.component.ts");
    /* harmony import */
    var _components_sevens_question_sevens_question_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./components/sevens-question/sevens-question.component */"./src/app/components/sevens-question/sevens-question.component.ts");
    /* harmony import */
    var _components_eights_question_eights_question_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./components/eights-question/eights-question.component */"./src/app/components/eights-question/eights-question.component.ts");
    /* harmony import */
    var _components_final_question_final_question_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./components/final-question/final-question.component */"./src/app/components/final-question/final-question.component.ts");
    var routes = [{
      path: 'registration',
      component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"]
    }, {
      path: '',
      component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"]
    }, {
      path: 'rules',
      component: _components_quest_offer_quest_offer_component__WEBPACK_IMPORTED_MODULE_4__["QuestOfferComponent"]
    }, {
      path: 'first-task',
      component: _components_first_task_first_task_component__WEBPACK_IMPORTED_MODULE_5__["FirstTaskComponent"]
    }, {
      path: 'second-task',
      component: _components_second_task_second_task_component__WEBPACK_IMPORTED_MODULE_6__["SecondTaskComponent"]
    }, {
      path: 'third-task',
      component: _components_thrd_question_thrd_question_component__WEBPACK_IMPORTED_MODULE_7__["ThrdQuestionComponent"]
    }, {
      path: 'fours-task',
      component: _components_fours_question_fours_question_component__WEBPACK_IMPORTED_MODULE_8__["FoursQuestionComponent"]
    }, {
      path: 'fifth-task',
      component: _components_fifth_question_fifth_question_component__WEBPACK_IMPORTED_MODULE_9__["FifthQuestionComponent"]
    }, {
      path: 'sixes-task',
      component: _components_sixs_question_sixs_question_component__WEBPACK_IMPORTED_MODULE_10__["SixsQuestionComponent"]
    }, {
      path: 'sevens-task',
      component: _components_sevens_question_sevens_question_component__WEBPACK_IMPORTED_MODULE_11__["SevensQuestionComponent"]
    }, {
      path: 'eights-task',
      component: _components_eights_question_eights_question_component__WEBPACK_IMPORTED_MODULE_12__["EightsQuestionComponent"]
    }, {
      path: 'final-task',
      component: _components_final_question_final_question_component__WEBPACK_IMPORTED_MODULE_13__["FinalQuestionComponent"]
    }, {
      path: '**',
      component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"]
    }];
    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);

    /***/
  }),
  /***/"./src/app/app.component.css": (
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/
  /*! exports provided: default */
  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".container{\r\n  height: 100vh;\r\n  max-height: 100vh;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  overflow-x: hidden;\r\n  position: relative;\r\n  background-color: #fef7f1 ;\r\n}\r\n\r\nimg{\r\n  position: absolute;\r\n  top:15px;\r\n  left: 15px;\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWY3ZjEgO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDoxNXB4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiJdfQ== */";

    /***/
  }),
  /***/"./src/app/app.component.ts": (
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
      this.title = 'new-year-proj';
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./app.component.css */"./src/app/app.component.css"))["default"]]
    })], AppComponent);

    /***/
  }),
  /***/"./src/app/app.module.ts": (
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app-routing.module */"./src/app/app-routing.module.ts");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _components_quest_offer_quest_offer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./components/quest-offer/quest-offer.component */"./src/app/components/quest-offer/quest-offer.component.ts");
    /* harmony import */
    var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./components/registration/registration.component */"./src/app/components/registration/registration.component.ts");
    /* harmony import */
    var _components_first_task_first_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./components/first-task/first-task.component */"./src/app/components/first-task/first-task.component.ts");
    /* harmony import */
    var _components_second_task_second_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./components/second-task/second-task.component */"./src/app/components/second-task/second-task.component.ts");
    /* harmony import */
    var _components_thrd_question_thrd_question_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./components/thrd-question/thrd-question.component */"./src/app/components/thrd-question/thrd-question.component.ts");
    /* harmony import */
    var _components_fours_question_fours_question_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./components/fours-question/fours-question.component */"./src/app/components/fours-question/fours-question.component.ts");
    /* harmony import */
    var _components_fifth_question_fifth_question_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./components/fifth-question/fifth-question.component */"./src/app/components/fifth-question/fifth-question.component.ts");
    /* harmony import */
    var _components_sixs_question_sixs_question_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./components/sixs-question/sixs-question.component */"./src/app/components/sixs-question/sixs-question.component.ts");
    /* harmony import */
    var _components_sevens_question_sevens_question_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./components/sevens-question/sevens-question.component */"./src/app/components/sevens-question/sevens-question.component.ts");
    /* harmony import */
    var _components_eights_question_eights_question_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ./components/eights-question/eights-question.component */"./src/app/components/eights-question/eights-question.component.ts");
    /* harmony import */
    var _components_final_question_final_question_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! ./components/final-question/final-question.component */"./src/app/components/final-question/final-question.component.ts");
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_quest_offer_quest_offer_component__WEBPACK_IMPORTED_MODULE_6__["QuestOfferComponent"], _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"], _components_first_task_first_task_component__WEBPACK_IMPORTED_MODULE_8__["FirstTaskComponent"], _components_second_task_second_task_component__WEBPACK_IMPORTED_MODULE_9__["SecondTaskComponent"], _components_thrd_question_thrd_question_component__WEBPACK_IMPORTED_MODULE_10__["ThrdQuestionComponent"], _components_fours_question_fours_question_component__WEBPACK_IMPORTED_MODULE_11__["FoursQuestionComponent"], _components_fifth_question_fifth_question_component__WEBPACK_IMPORTED_MODULE_12__["FifthQuestionComponent"], _components_sixs_question_sixs_question_component__WEBPACK_IMPORTED_MODULE_13__["SixsQuestionComponent"], _components_sevens_question_sevens_question_component__WEBPACK_IMPORTED_MODULE_14__["SevensQuestionComponent"], _components_eights_question_eights_question_component__WEBPACK_IMPORTED_MODULE_15__["EightsQuestionComponent"], _components_final_question_final_question_component__WEBPACK_IMPORTED_MODULE_16__["FinalQuestionComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);

    /***/
  }),
  /***/"./src/app/components/eights-question/eights-question.component.css": (
  /*!**************************************************************************!*\
    !*** ./src/app/components/eights-question/eights-question.component.css ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsEightsQuestionEightsQuestionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".task-container{\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n.question-div{\r\n  position: absolute;\r\n  width: 300px;\r\n  padding: 5px;\r\n  bottom:20px;\r\n  border:1px solid silver;\r\n  border-radius: 15px;\r\n  background-color: lightcoral;\r\n  opacity: .8;\r\n}\r\n.for-first{\r\n  right:-150px\r\n}\r\n.for-second{\r\n  left:-150px\r\n}\r\nimg{\r\n  width: 50px;\r\n  height: 50px;\r\n  position: absolute;\r\n  right: 15px;\r\n  top:15px\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9laWdodHMtcXVlc3Rpb24vZWlnaHRzLXF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsV0FBVztBQUNiO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1g7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWlnaHRzLXF1ZXN0aW9uL2VpZ2h0cy1xdWVzdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2stY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnF1ZXN0aW9uLWRpdntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3R0b206MjBweDtcclxuICBib3JkZXI6MXB4IHNvbGlkIHNpbHZlcjtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XHJcbiAgb3BhY2l0eTogLjg7XHJcbn1cclxuLmZvci1maXJzdHtcclxuICByaWdodDotMTUwcHhcclxufVxyXG4uZm9yLXNlY29uZHtcclxuICBsZWZ0Oi0xNTBweFxyXG59XHJcbmltZ3tcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIHRvcDoxNXB4XHJcbn1cclxuIl19 */";

    /***/
  }),
  /***/"./src/app/components/eights-question/eights-question.component.ts": (
  /*!*************************************************************************!*\
    !*** ./src/app/components/eights-question/eights-question.component.ts ***!
    \*************************************************************************/
  /*! exports provided: EightsQuestionComponent */
  /***/
  function srcAppComponentsEightsQuestionEightsQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "EightsQuestionComponent", function () {
      return EightsQuestionComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _services_questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../services/questions.service */"./src/app/services/questions.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var EightsQuestionComponent = /*#__PURE__*/function () {
      function EightsQuestionComponent(formBuilder, questionsService, router) {
        _classCallCheck(this, EightsQuestionComponent);
        this.formBuilder = formBuilder;
        this.questionsService = questionsService;
        this.router = router;
        this.correct = false;
        this.correctAnswer = false;
        this.myForm = this.formBuilder.group({
          agentAnswer: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
      }
      _createClass(EightsQuestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var a = this.questionsService.getAgentNumbers();
          this.currentAgent = a.find(function (x) {
            return x.id == Number(localStorage.getItem('currentAgent'));
          });
          this.currentQuestions = this.questionsService.getQuestions(8, this.currentAgent.id);
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this = this;
          if (this.currentQuestions.answer === this.myForm.value.agentAnswer) {
            this.correctAnswer = true;
            setTimeout(function () {
              _this.router.navigate(['final-task']);
            }, 1500);
          } else this.correct = true;
        }
      }]);
      return EightsQuestionComponent;
    }();
    EightsQuestionComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    EightsQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-eights-question',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./eights-question.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/eights-question/eights-question.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./eights-question.component.css */"./src/app/components/eights-question/eights-question.component.css"))["default"]]
    })], EightsQuestionComponent);

    /***/
  }),
  /***/"./src/app/components/fifth-question/fifth-question.component.css": (
  /*!************************************************************************!*\
    !*** ./src/app/components/fifth-question/fifth-question.component.css ***!
    \************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsFifthQuestionFifthQuestionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".task-container{\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n.question-div{\r\n  position: absolute;\r\n  width: 300px;\r\n  padding: 5px;\r\n  bottom:20px;\r\n  border:1px solid silver;\r\n  border-radius: 15px;\r\n  background-color: lightcoral;\r\n  opacity: .8;\r\n}\r\n.for-first{\r\n  right:-150px\r\n}\r\n.for-second{\r\n  left:-150px\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWZ0aC1xdWVzdGlvbi9maWZ0aC1xdWVzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLFdBQVc7QUFDYjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0U7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmlmdGgtcXVlc3Rpb24vZmlmdGgtcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrLWNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucXVlc3Rpb24tZGl2e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvdHRvbToyMHB4O1xyXG4gIGJvcmRlcjoxcHggc29saWQgc2lsdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcclxuICBvcGFjaXR5OiAuODtcclxufVxyXG4uZm9yLWZpcnN0e1xyXG4gIHJpZ2h0Oi0xNTBweFxyXG59XHJcbi5mb3Itc2Vjb25ke1xyXG4gIGxlZnQ6LTE1MHB4XHJcbn1cclxuIl19 */";

    /***/
  }),
  /***/"./src/app/components/fifth-question/fifth-question.component.ts": (
  /*!***********************************************************************!*\
    !*** ./src/app/components/fifth-question/fifth-question.component.ts ***!
    \***********************************************************************/
  /*! exports provided: FifthQuestionComponent */
  /***/
  function srcAppComponentsFifthQuestionFifthQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FifthQuestionComponent", function () {
      return FifthQuestionComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _services_questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../services/questions.service */"./src/app/services/questions.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var FifthQuestionComponent = /*#__PURE__*/function () {
      function FifthQuestionComponent(formBuilder, questionsService, router) {
        _classCallCheck(this, FifthQuestionComponent);
        this.formBuilder = formBuilder;
        this.questionsService = questionsService;
        this.router = router;
        this.correct = false;
        this.myForm = this.formBuilder.group({
          agentAnswer: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
      }
      _createClass(FifthQuestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var a = this.questionsService.getAgentNumbers();
          this.currentAgent = a.find(function (x) {
            return x.id == Number(localStorage.getItem('currentAgent'));
          });
          this.currentQuestions = this.questionsService.getQuestions(5, this.currentAgent.id);
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          if (this.currentQuestions.answer === this.myForm.value.agentAnswer) {
            this.router.navigate(['sixes-task']);
          } else this.correct = true;
        }
      }]);
      return FifthQuestionComponent;
    }();
    FifthQuestionComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    FifthQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fifth-question',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./fifth-question.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/fifth-question/fifth-question.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./fifth-question.component.css */"./src/app/components/fifth-question/fifth-question.component.css"))["default"]]
    })], FifthQuestionComponent);

    /***/
  }),
  /***/"./src/app/components/final-question/final-question.component.css": (
  /*!************************************************************************!*\
    !*** ./src/app/components/final-question/final-question.component.css ***!
    \************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsFinalQuestionFinalQuestionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".task-container{\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n.question-div{\r\n  position: absolute;\r\n  width: 300px;\r\n  padding: 5px;\r\n  bottom:20px;\r\n  border:1px solid silver;\r\n  border-radius: 15px;\r\n  background-color: lightcoral;\r\n  opacity: .8;\r\n}\r\n.for-first{\r\n  right:-150px\r\n}\r\n.for-second{\r\n  left:-150px\r\n}\r\nimg{\r\n  width: 50px;\r\n  height: 50px;\r\n  position: absolute;\r\n  right: 15px;\r\n  top:15px\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maW5hbC1xdWVzdGlvbi9maW5hbC1xdWVzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLFdBQVc7QUFDYjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZpbmFsLXF1ZXN0aW9uL2ZpbmFsLXF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFzay1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucXVlc3Rpb24tZGl2e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvdHRvbToyMHB4O1xyXG4gIGJvcmRlcjoxcHggc29saWQgc2lsdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcclxuICBvcGFjaXR5OiAuODtcclxufVxyXG4uZm9yLWZpcnN0e1xyXG4gIHJpZ2h0Oi0xNTBweFxyXG59XHJcbi5mb3Itc2Vjb25ke1xyXG4gIGxlZnQ6LTE1MHB4XHJcbn1cclxuaW1ne1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgdG9wOjE1cHhcclxufVxyXG4iXX0= */";

    /***/
  }),
  /***/"./src/app/components/final-question/final-question.component.ts": (
  /*!***********************************************************************!*\
    !*** ./src/app/components/final-question/final-question.component.ts ***!
    \***********************************************************************/
  /*! exports provided: FinalQuestionComponent */
  /***/
  function srcAppComponentsFinalQuestionFinalQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FinalQuestionComponent", function () {
      return FinalQuestionComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _services_questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../services/questions.service */"./src/app/services/questions.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var FinalQuestionComponent = /*#__PURE__*/function () {
      function FinalQuestionComponent(formBuilder, questionsService, router) {
        _classCallCheck(this, FinalQuestionComponent);
        this.formBuilder = formBuilder;
        this.questionsService = questionsService;
        this.router = router;
        this.correct = false;
        this.correctAnswer = false;
        this.myForm = this.formBuilder.group({
          agentAnswer: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
      }
      _createClass(FinalQuestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var a = this.questionsService.getAgentNumbers();
          this.currentAgent = a.find(function (x) {
            return x.id == Number(localStorage.getItem('currentAgent'));
          });
          this.currentQuestions = this.questionsService.getQuestions(9, this.currentAgent.id);
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this2 = this;
          if (this.currentQuestions.answer === this.myForm.value.agentAnswer) {
            this.correctAnswer = true;
            setTimeout(function () {
              _this2.router.navigate(['eights-task']);
            }, 1500);
          } else this.correct = true;
        }
      }]);
      return FinalQuestionComponent;
    }();
    FinalQuestionComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    FinalQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-final-question',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./final-question.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/final-question/final-question.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./final-question.component.css */"./src/app/components/final-question/final-question.component.css"))["default"]]
    })], FinalQuestionComponent);

    /***/
  }),
  /***/"./src/app/components/first-task/first-task.component.css": (
  /*!****************************************************************!*\
    !*** ./src/app/components/first-task/first-task.component.css ***!
    \****************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsFirstTaskFirstTaskComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".task-container{\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n.small{\r\n  margin-top:10px;\r\n  margin-bottom: 10px;\r\n  font-size: 10px;\r\n}\r\nh3{\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n}\r\ninput{\r\n  width: 35px;\r\n}\r\n.input-array{\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\nimg{\r\n  width: 50px;\r\n  height: 50px;\r\n  position: absolute;\r\n  right: 15px;\r\n  top:15px\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maXJzdC10YXNrL2ZpcnN0LXRhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTs7RUFFYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1g7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmlyc3QtdGFzay9maXJzdC10YXNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFzay1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnNtYWxse1xyXG4gIG1hcmdpbi10b3A6MTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5oM3tcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlucHV0e1xyXG4gIHdpZHRoOiAzNXB4O1xyXG59XHJcbi5pbnB1dC1hcnJheXtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuaW1ne1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgdG9wOjE1cHhcclxufVxyXG4iXX0= */";

    /***/
  }),
  /***/"./src/app/components/first-task/first-task.component.ts": (
  /*!***************************************************************!*\
    !*** ./src/app/components/first-task/first-task.component.ts ***!
    \***************************************************************/
  /*! exports provided: FirstTaskComponent */
  /***/
  function srcAppComponentsFirstTaskFirstTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FirstTaskComponent", function () {
      return FirstTaskComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../services/questions.service */"./src/app/services/questions.service.ts");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var FirstTaskComponent = /*#__PURE__*/function () {
      function FirstTaskComponent(formBuilder, questionsService, router) {
        _classCallCheck(this, FirstTaskComponent);
        this.formBuilder = formBuilder;
        this.questionsService = questionsService;
        this.router = router;
        this.currentAgent = null;
        this.correct = false;
        this.correctAnswer = false;
        this.myForm = this.formBuilder.group({
          agentNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(9)]],
          agentNumber2: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1)]],
          agentNumber3: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(1)]]
        });
      }
      _createClass(FirstTaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentAgent = Number(localStorage.getItem('currentAgent'));
          this.currentQuestions = this.questionsService.getQuestions(1, this.currentAgent);
        }
      }, {
        key: "checkCorrect",
        value: function checkCorrect(event) {
          var next = event.target.nextElementSibling;
          if (next && event.target.value) {
            next.focus();
          } else {
            event.target.blur();
          }
          this.correct = false;
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this3 = this;
          var currentAgent = this.myForm.value.agentNumber * 100 + this.myForm.value.agentNumber2 * 10 + this.myForm.value.agentNumber3;
          if (this.currentQuestions.answer === currentAgent) {
            this.correctAnswer = true;
            setTimeout(function () {
              _this3.router.navigate(['second-task']);
            }, 1500);
          } else this.correct = true;
        }
      }]);
      return FirstTaskComponent;
    }();
    FirstTaskComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services_questions_service__WEBPACK_IMPORTED_MODULE_2__["QuestionsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    FirstTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-first-task',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./first-task.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/first-task/first-task.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./first-task.component.css */"./src/app/components/first-task/first-task.component.css"))["default"]]
    })], FirstTaskComponent);

    /***/
  }),
  /***/"./src/app/components/fours-question/fours-question.component.css": (
  /*!************************************************************************!*\
    !*** ./src/app/components/fours-question/fours-question.component.css ***!
    \************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsFoursQuestionFoursQuestionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".task-container{\r\n  width: 100%;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n.question-div{\r\n  position: absolute;\r\n  width: 300px;\r\n  padding: 5px;\r\n  bottom:20px;\r\n  border:1px solid silver;\r\n  border-radius: 15px;\r\n  background-color: lightcoral;\r\n  opacity: .8;\r\n}\r\n.for-first{\r\n  right:-150px\r\n}\r\n.for-second{\r\n  left:-150px\r\n}\r\nimg{\r\n  width: 50px;\r\n  height: 50px;\r\n  position: absolute;\r\n  right: 15px;\r\n  top:15px\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3Vycy1xdWVzdGlvbi9mb3Vycy1xdWVzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLFdBQVc7QUFDYjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZvdXJzLXF1ZXN0aW9uL2ZvdXJzLXF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFzay1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnF1ZXN0aW9uLWRpdntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3R0b206MjBweDtcclxuICBib3JkZXI6MXB4IHNvbGlkIHNpbHZlcjtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XHJcbiAgb3BhY2l0eTogLjg7XHJcbn1cclxuLmZvci1maXJzdHtcclxuICByaWdodDotMTUwcHhcclxufVxyXG4uZm9yLXNlY29uZHtcclxuICBsZWZ0Oi0xNTBweFxyXG59XHJcbmltZ3tcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIHRvcDoxNXB4XHJcbn1cclxuIl19 */";

    /***/
  }),
  /***/"./src/app/components/fours-question/fours-question.component.ts": (
  /*!***********************************************************************!*\
    !*** ./src/app/components/fours-question/fours-question.component.ts ***!
    \***********************************************************************/
  /*! exports provided: FoursQuestionComponent */
  /***/
  function srcAppComponentsFoursQuestionFoursQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FoursQuestionComponent", function () {
      return FoursQuestionComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _services_questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../services/questions.service */"./src/app/services/questions.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var FoursQuestionComponent = /*#__PURE__*/function () {
      function FoursQuestionComponent(formBuilder, questionsService, router) {
        _classCallCheck(this, FoursQuestionComponent);
        this.formBuilder = formBuilder;
        this.questionsService = questionsService;
        this.router = router;
        this.correct = false;
        this.correctAnswer = false;
        this.myForm = this.formBuilder.group({
          agentAnswer: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
      }
      _createClass(FoursQuestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var a = this.questionsService.getAgentNumbers();
          this.currentAgent = a.find(function (x) {
            return x.id == Number(localStorage.getItem('currentAgent'));
          });
          this.currentQuestions = this.questionsService.getQuestions(4, this.currentAgent.id);
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this4 = this;
          if (this.currentQuestions.answer === this.myForm.value.agentAnswer) {
            this.correctAnswer = true;
            setTimeout(function () {
              _this4.router.navigate(['fifth-task']);
            }, 1500);
          } else this.correct = true;
        }
      }]);
      return FoursQuestionComponent;
    }();
    FoursQuestionComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    FoursQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fours-question',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./fours-question.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/fours-question/fours-question.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./fours-question.component.css */"./src/app/components/fours-question/fours-question.component.css"))["default"]]
    })], FoursQuestionComponent);

    /***/
  }),
  /***/"./src/app/components/quest-offer/quest-offer.component.css": (
  /*!******************************************************************!*\
    !*** ./src/app/components/quest-offer/quest-offer.component.css ***!
    \******************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsQuestOfferQuestOfferComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".font-italic{\r\n  font-size: 10px;\r\n}\r\n.container-for-offer{\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n\r\n}\r\nspan{\r\n  margin-left: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWVzdC1vZmZlci9xdWVzdC1vZmZlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1Qjs7QUFFekI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Qtb2ZmZXIvcXVlc3Qtb2ZmZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250LWl0YWxpY3tcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLmNvbnRhaW5lci1mb3Itb2ZmZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbn1cclxuc3BhbntcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4iXX0= */";

    /***/
  }),
  /***/"./src/app/components/quest-offer/quest-offer.component.ts": (
  /*!*****************************************************************!*\
    !*** ./src/app/components/quest-offer/quest-offer.component.ts ***!
    \*****************************************************************/
  /*! exports provided: QuestOfferComponent */
  /***/
  function srcAppComponentsQuestOfferQuestOfferComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "QuestOfferComponent", function () {
      return QuestOfferComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var QuestOfferComponent = /*#__PURE__*/function () {
      function QuestOfferComponent(router) {
        _classCallCheck(this, QuestOfferComponent);
        this.router = router;
        this.isChecked = false;
      }
      _createClass(QuestOfferComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToFirstTask",
        value: function goToFirstTask() {
          this.router.navigate(['first-task']);
        }
      }]);
      return QuestOfferComponent;
    }();
    QuestOfferComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };
    QuestOfferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quest-offer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./quest-offer.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/quest-offer/quest-offer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./quest-offer.component.css */"./src/app/components/quest-offer/quest-offer.component.css"))["default"]]
    })], QuestOfferComponent);

    /***/
  }),
  /***/"./src/app/components/registration/registration.component.css": (
  /*!********************************************************************!*\
    !*** ./src/app/components/registration/registration.component.css ***!
    \********************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsRegistrationRegistrationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".offer-container{\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.input-array{\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\ninput{\r\n  width: 35px;\r\n}\r\nh2{\r\n  font-weight: 600;\r\n  font-size: 20px;\r\n}\r\nform{\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vZmZlci1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaW5wdXQtYXJyYXl7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmlucHV0e1xyXG4gIHdpZHRoOiAzNXB4O1xyXG59XHJcbmgye1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5mb3Jte1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */";

    /***/
  }),
  /***/"./src/app/components/registration/registration.component.ts": (
  /*!*******************************************************************!*\
    !*** ./src/app/components/registration/registration.component.ts ***!
    \*******************************************************************/
  /*! exports provided: RegistrationComponent */
  /***/
  function srcAppComponentsRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _services_questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../services/questions.service */"./src/app/services/questions.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var RegistrationComponent = /*#__PURE__*/function () {
      function RegistrationComponent(formBuilder, questionsService, router) {
        _classCallCheck(this, RegistrationComponent);
        this.formBuilder = formBuilder;
        this.questionsService = questionsService;
        this.router = router;
        this.correct = false;
        this.myForm = this.formBuilder.group({
          agentNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(9)]],
          agentNumber2: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1)]],
          agentNumber3: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(1)]]
        });
      }
      _createClass(RegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "checkCorrect",
        value: function checkCorrect(event) {
          var next = event.target.nextElementSibling;
          if (next && event.target.value) {
            next.focus();
          } else {
            event.target.blur();
          }
          this.correct = false;
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var currentAgent = this.myForm.value.agentNumber * 100 + this.myForm.value.agentNumber2 * 10 + this.myForm.value.agentNumber3;
          var a = this.questionsService.getAgentNumbers();
          if (a.find(function (x) {
            return x.id == currentAgent;
          })) {
            localStorage.setItem('currentAgent', String(currentAgent));
            this.router.navigate(['rules']);
          } else this.correct = true;
          console.log('Form submitted!', a.find(function (x) {
            return x.id == currentAgent;
          }));
        }
      }]);
      return RegistrationComponent;
    }();
    RegistrationComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./registration.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/registration/registration.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./registration.component.css */"./src/app/components/registration/registration.component.css"))["default"]]
    })], RegistrationComponent);

    /***/
  }),
  /***/"./src/app/components/second-task/second-task.component.css": (
  /*!******************************************************************!*\
    !*** ./src/app/components/second-task/second-task.component.css ***!
    \******************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsSecondTaskSecondTaskComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".task-container{\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n.question-div{\r\n  position: absolute;\r\n  width: 300px;\r\n  padding: 5px;\r\n  bottom:20px;\r\n  border:1px solid silver;\r\n  border-radius: 15px;\r\n  background-color: lightcoral;\r\n  opacity: .8;\r\n}\r\n.for-first{\r\n  right:-150px\r\n}\r\n.for-second{\r\n  left:-150px\r\n}\r\nimg{\r\n  width: 50px;\r\n  height: 50px;\r\n  position: absolute;\r\n  right: 15px;\r\n  top:15px\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWNvbmQtdGFzay9zZWNvbmQtdGFzay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLFdBQVc7QUFDYjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlY29uZC10YXNrL3NlY29uZC10YXNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFzay1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucXVlc3Rpb24tZGl2e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvdHRvbToyMHB4O1xyXG4gIGJvcmRlcjoxcHggc29saWQgc2lsdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcclxuICBvcGFjaXR5OiAuODtcclxufVxyXG4uZm9yLWZpcnN0e1xyXG4gIHJpZ2h0Oi0xNTBweFxyXG59XHJcbi5mb3Itc2Vjb25ke1xyXG4gIGxlZnQ6LTE1MHB4XHJcbn1cclxuaW1ne1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgdG9wOjE1cHhcclxufVxyXG4iXX0= */";

    /***/
  }),
  /***/"./src/app/components/second-task/second-task.component.ts": (
  /*!*****************************************************************!*\
    !*** ./src/app/components/second-task/second-task.component.ts ***!
    \*****************************************************************/
  /*! exports provided: SecondTaskComponent */
  /***/
  function srcAppComponentsSecondTaskSecondTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SecondTaskComponent", function () {
      return SecondTaskComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _services_questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../services/questions.service */"./src/app/services/questions.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var SecondTaskComponent = /*#__PURE__*/function () {
      function SecondTaskComponent(formBuilder, questionsService, router) {
        _classCallCheck(this, SecondTaskComponent);
        this.formBuilder = formBuilder;
        this.questionsService = questionsService;
        this.router = router;
        this.correct = false;
        this.correctAnswer = false;
        this.myForm = this.formBuilder.group({
          agentAnswer: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
      }
      _createClass(SecondTaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var a = this.questionsService.getAgentNumbers();
          this.currentAgent = a.find(function (x) {
            return x.id == Number(localStorage.getItem('currentAgent'));
          });
          this.currentQuestions = this.questionsService.getQuestions(2, this.currentAgent.id);
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this5 = this;
          if (this.currentQuestions.answer === this.myForm.value.agentAnswer) {
            this.correctAnswer = true;
            setTimeout(function () {
              _this5.router.navigate(['third-task']);
            }, 1500);
          } else this.correct = true;
        }
      }]);
      return SecondTaskComponent;
    }();
    SecondTaskComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    SecondTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-second-task',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./second-task.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/second-task/second-task.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./second-task.component.css */"./src/app/components/second-task/second-task.component.css"))["default"]]
    })], SecondTaskComponent);

    /***/
  }),
  /***/"./src/app/components/sevens-question/sevens-question.component.css": (
  /*!**************************************************************************!*\
    !*** ./src/app/components/sevens-question/sevens-question.component.css ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsSevensQuestionSevensQuestionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".task-container{\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n.question-div{\r\n  position: absolute;\r\n  width: 300px;\r\n  padding: 5px;\r\n  bottom:20px;\r\n  border:1px solid silver;\r\n  border-radius: 15px;\r\n  background-color: lightcoral;\r\n  opacity: .8;\r\n}\r\n.for-first{\r\n  right:-150px\r\n}\r\n.for-second{\r\n  left:-150px\r\n}\r\nimg{\r\n  width: 50px;\r\n  height: 50px;\r\n  position: absolute;\r\n  right: 15px;\r\n  top:15px\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXZlbnMtcXVlc3Rpb24vc2V2ZW5zLXF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsV0FBVztBQUNiO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1g7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V2ZW5zLXF1ZXN0aW9uL3NldmVucy1xdWVzdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2stY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLnF1ZXN0aW9uLWRpdntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3R0b206MjBweDtcclxuICBib3JkZXI6MXB4IHNvbGlkIHNpbHZlcjtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XHJcbiAgb3BhY2l0eTogLjg7XHJcbn1cclxuLmZvci1maXJzdHtcclxuICByaWdodDotMTUwcHhcclxufVxyXG4uZm9yLXNlY29uZHtcclxuICBsZWZ0Oi0xNTBweFxyXG59XHJcbmltZ3tcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIHRvcDoxNXB4XHJcbn1cclxuIl19 */";

    /***/
  }),
  /***/"./src/app/components/sevens-question/sevens-question.component.ts": (
  /*!*************************************************************************!*\
    !*** ./src/app/components/sevens-question/sevens-question.component.ts ***!
    \*************************************************************************/
  /*! exports provided: SevensQuestionComponent */
  /***/
  function srcAppComponentsSevensQuestionSevensQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SevensQuestionComponent", function () {
      return SevensQuestionComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _services_questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../services/questions.service */"./src/app/services/questions.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var SevensQuestionComponent = /*#__PURE__*/function () {
      function SevensQuestionComponent(formBuilder, questionsService, router) {
        _classCallCheck(this, SevensQuestionComponent);
        this.formBuilder = formBuilder;
        this.questionsService = questionsService;
        this.router = router;
        this.correct = false;
        this.correctAnswer = false;
        this.myForm = this.formBuilder.group({
          agentAnswer: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
      }
      _createClass(SevensQuestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var a = this.questionsService.getAgentNumbers();
          this.currentAgent = a.find(function (x) {
            return x.id == Number(localStorage.getItem('currentAgent'));
          });
          this.currentQuestions = this.questionsService.getQuestions(7, this.currentAgent.id);
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this6 = this;
          if (this.currentQuestions.answer === this.myForm.value.agentAnswer) {
            this.correctAnswer = true;
            setTimeout(function () {
              _this6.router.navigate(['eights-task']);
            }, 1500);
          } else this.correct = true;
        }
      }]);
      return SevensQuestionComponent;
    }();
    SevensQuestionComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    SevensQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sevens-question',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./sevens-question.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/sevens-question/sevens-question.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./sevens-question.component.css */"./src/app/components/sevens-question/sevens-question.component.css"))["default"]]
    })], SevensQuestionComponent);

    /***/
  }),
  /***/"./src/app/components/sixs-question/sixs-question.component.css": (
  /*!**********************************************************************!*\
    !*** ./src/app/components/sixs-question/sixs-question.component.css ***!
    \**********************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsSixsQuestionSixsQuestionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".task-container{\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n.question-div{\r\n  position: absolute;\r\n  width: 300px;\r\n  padding: 5px;\r\n  bottom:20px;\r\n  border:1px solid silver;\r\n  border-radius: 15px;\r\n  background-color: lightcoral;\r\n  opacity: .8;\r\n}\r\n.for-first{\r\n  right:-150px\r\n}\r\n.for-second{\r\n  left:-150px\r\n}\r\nimg{\r\n  width: 50px;\r\n  height: 50px;\r\n  position: absolute;\r\n  right: 15px;\r\n  top:15px\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaXhzLXF1ZXN0aW9uL3NpeHMtcXVlc3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixXQUFXO0FBQ2I7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaXhzLXF1ZXN0aW9uL3NpeHMtcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrLWNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5xdWVzdGlvbi1kaXZ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm90dG9tOjIwcHg7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCBzaWx2ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xyXG4gIG9wYWNpdHk6IC44O1xyXG59XHJcbi5mb3ItZmlyc3R7XHJcbiAgcmlnaHQ6LTE1MHB4XHJcbn1cclxuLmZvci1zZWNvbmR7XHJcbiAgbGVmdDotMTUwcHhcclxufVxyXG5pbWd7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTVweDtcclxuICB0b3A6MTVweFxyXG59XHJcbiJdfQ== */";

    /***/
  }),
  /***/"./src/app/components/sixs-question/sixs-question.component.ts": (
  /*!*********************************************************************!*\
    !*** ./src/app/components/sixs-question/sixs-question.component.ts ***!
    \*********************************************************************/
  /*! exports provided: SixsQuestionComponent */
  /***/
  function srcAppComponentsSixsQuestionSixsQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "SixsQuestionComponent", function () {
      return SixsQuestionComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _services_questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../services/questions.service */"./src/app/services/questions.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var SixsQuestionComponent = /*#__PURE__*/function () {
      function SixsQuestionComponent(formBuilder, questionsService, router) {
        _classCallCheck(this, SixsQuestionComponent);
        this.formBuilder = formBuilder;
        this.questionsService = questionsService;
        this.router = router;
        this.correct = false;
        this.correctAnswer = false;
        this.myForm = this.formBuilder.group({
          agentAnswer: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
      }
      _createClass(SixsQuestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var a = this.questionsService.getAgentNumbers();
          this.currentAgent = a.find(function (x) {
            return x.id == Number(localStorage.getItem('currentAgent'));
          });
          this.currentQuestions = this.questionsService.getQuestions(6, this.currentAgent.id);
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this7 = this;
          if (this.currentQuestions.answer === this.myForm.value.agentAnswer) {
            this.correctAnswer = true;
            setTimeout(function () {
              _this7.router.navigate(['sevens-task']);
            }, 1500);
          } else this.correct = true;
        }
      }]);
      return SixsQuestionComponent;
    }();
    SixsQuestionComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    SixsQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sixs-question',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./sixs-question.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/sixs-question/sixs-question.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./sixs-question.component.css */"./src/app/components/sixs-question/sixs-question.component.css"))["default"]]
    })], SixsQuestionComponent);

    /***/
  }),
  /***/"./src/app/components/thrd-question/thrd-question.component.css": (
  /*!**********************************************************************!*\
    !*** ./src/app/components/thrd-question/thrd-question.component.css ***!
    \**********************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppComponentsThrdQuestionThrdQuestionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = ".task-container{\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n.question-div{\r\n  position: absolute;\r\n  width: 300px;\r\n  padding: 5px;\r\n  bottom:20px;\r\n  border:1px solid silver;\r\n  border-radius: 15px;\r\n  background-color: lightcoral;\r\n  opacity: .8;\r\n}\r\n.for-first{\r\n  right:-150px\r\n}\r\n.for-second{\r\n  left:-150px\r\n}\r\nimg{\r\n  width: 50px;\r\n  height: 50px;\r\n  position: absolute;\r\n  right: 15px;\r\n  top:15px\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aHJkLXF1ZXN0aW9uL3RocmQtcXVlc3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixXQUFXO0FBQ2I7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90aHJkLXF1ZXN0aW9uL3RocmQtcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrLWNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5xdWVzdGlvbi1kaXZ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm90dG9tOjIwcHg7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCBzaWx2ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xyXG4gIG9wYWNpdHk6IC44O1xyXG59XHJcbi5mb3ItZmlyc3R7XHJcbiAgcmlnaHQ6LTE1MHB4XHJcbn1cclxuLmZvci1zZWNvbmR7XHJcbiAgbGVmdDotMTUwcHhcclxufVxyXG5pbWd7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTVweDtcclxuICB0b3A6MTVweFxyXG59XHJcbiJdfQ== */";

    /***/
  }),
  /***/"./src/app/components/thrd-question/thrd-question.component.ts": (
  /*!*********************************************************************!*\
    !*** ./src/app/components/thrd-question/thrd-question.component.ts ***!
    \*********************************************************************/
  /*! exports provided: ThrdQuestionComponent */
  /***/
  function srcAppComponentsThrdQuestionThrdQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ThrdQuestionComponent", function () {
      return ThrdQuestionComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _services_questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../services/questions.service */"./src/app/services/questions.service.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    var ThrdQuestionComponent = /*#__PURE__*/function () {
      function ThrdQuestionComponent(formBuilder, questionsService, router) {
        _classCallCheck(this, ThrdQuestionComponent);
        this.formBuilder = formBuilder;
        this.questionsService = questionsService;
        this.router = router;
        this.correct = false;
        this.correctAnswer = false;
        this.myForm = this.formBuilder.group({
          agentAnswer: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
      }
      _createClass(ThrdQuestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var a = this.questionsService.getAgentNumbers();
          this.currentAgent = a.find(function (x) {
            return x.id == Number(localStorage.getItem('currentAgent'));
          });
          this.currentQuestions = this.questionsService.getQuestions(3, this.currentAgent.id);
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this8 = this;
          if (this.currentQuestions.answer === this.myForm.value.agentAnswer) {
            this.correctAnswer = true;
            setTimeout(function () {
              _this8.router.navigate(['fours-task']);
            }, 1500);
          } else this.correct = true;
        }
      }]);
      return ThrdQuestionComponent;
    }();
    ThrdQuestionComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };
    ThrdQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-thrd-question',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./thrd-question.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/components/thrd-question/thrd-question.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./thrd-question.component.css */"./src/app/components/thrd-question/thrd-question.component.css"))["default"]]
    })], ThrdQuestionComponent);

    /***/
  }),
  /***/"./src/app/services/questions.service.ts": (
  /*!***********************************************!*\
    !*** ./src/app/services/questions.service.ts ***!
    \***********************************************/
  /*! exports provided: QuestionsService */
  /***/
  function srcAppServicesQuestionsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "QuestionsService", function () {
      return QuestionsService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var QuestionsService = /*#__PURE__*/function () {
      function QuestionsService() {
        _classCallCheck(this, QuestionsService);
        this.agentsNumbers = [{
          id: 777,
          team: 1,
          memberSide: 1
        }, {
          id: 690,
          team: 1,
          memberSide: 2
        }, {
          id: 111,
          team: 2,
          memberSide: 1
        }, {
          id: 303,
          team: 2,
          memberSide: 2
        }, {
          id: 906,
          team: 3,
          memberSide: 1
        }, {
          id: 228,
          team: 3,
          memberSide: 2
        }];
        this.agentsQuestions = [{
          id: 1,
          memberId: 777,
          questionNumber: 1,
          question: 'Знайди свого напарника.Перевір чи немає когось за вхідними дверима!',
          title: 'Аби продовжити введи номер цього солоденького',
          answer: 690
        }, {
          id: 2,
          memberId: 690,
          questionNumber: 1,
          question: 'Знайди свого напарника.Перевір чи немає когось за вхідними дверима!',
          title: 'Тільки не кажи одному з агентів,що ви в одній команді)',
          answer: 777
        }, {
          id: 3,
          memberId: 111,
          questionNumber: 1,
          question: 'Знайди свого напарника\n' + 'Твій напарник чекатиме тебе в туалеті',
          title: 'Чинннааааааа) треба номер напарника:',
          answer: 303
        }, {
          id: 4,
          memberId: 303,
          questionNumber: 1,
          question: 'Знайди свого напарника\n' + 'Твій напарник чекатиме тебе в туалеті',
          title: 'Сподіваюсь він білий... введи його номер:',
          answer: 111
        }, {
          id: 5,
          memberId: 906,
          questionNumber: 1,
          question: 'Знайди свого напарника\n' + 'Здається, щось підгоріло в духовці',
          title: 'Контролюй ,аби він не перебрав,будь-ласка.Потрібен його номер ',
          answer: 228
        }, {
          id: 6,
          memberId: 228,
          questionNumber: 1,
          question: 'Знайди свого напарника\n' + 'Здається, щось підгоріло в духовці',
          title: 'Давно ми не пили за началь... ой тфу.Номер напарника:',
          answer: 906
        }, {
          id: 7,
          memberId: 777,
          questionNumber: 2,
          question: 'Інформація - найцінніша монета, на жаль, небезпечна.\n' + 'Доводиться використовувати шифрування щоб ворожі спец. служби не перехопили потрібний Вам код.\n' + 'Прямуйте в кімнату між входом та ванною.  В пустому куті лежить все необхідне для роботи.\n' + '\n' + 'Підказка: 2 перші літери однакові',
          title: 'Тобі знадобиться азбука',
          answer: 1125415325
        }, {
          id: 8,
          memberId: 690,
          questionNumber: 2,
          question: 'Інформація - найцінніша монета, на жаль, небезпечна.\n' + 'Доводиться використовувати шифрування щоб ворожі спец. служби не перехопили потрібний Вам код.\n' + 'Прямуйте в кімнату між входом та ванною.  В пустому куті лежить все необхідне для роботи.\n' + '\n' + 'Підказка: 2 перші літери однакові',
          title: 'Тобі знадобиться азбука',
          answer: 1125415325
        }, {
          id: 9,
          memberId: 111,
          questionNumber: 2,
          question: 'Роботи… ЦРУ створювало їх, щоб було легше контролювати людей. Але хитрі жінки почали  використовувати їх в корисливих цілях.\n' + 'Ваша задача знайти робота, який виглядає як пральна машина, але не пускає воду, а навпаки. Щось він приховує!',
          title: 'Тобі знадобиться азбука',
          answer: 72612
        }, {
          id: 10,
          memberId: 303,
          questionNumber: 2,
          question: 'Роботи… ЦРУ створювало їх, щоб було легше контролювати людей. Але хитрі жінки почали  використовувати їх в корисливих цілях.\n' + 'Ваша задача знайти робота, який виглядає як пральна машина, але не пускає воду, а навпаки. Щось він приховує!',
          title: 'Тобі знадобиться азбука',
          answer: 72612
        }, {
          id: 11,
          memberId: 906,
          questionNumber: 2,
          question: 'Чи знали ви, що 16% художників - наші агенти?\n' + 'Вони залишили підказку на своїх творіннях у кімнаті з найбільшим дзеркалом.',
          title: 'Тобі знадобиться азбука',
          answer: 5212142
        }, {
          id: 12,
          memberId: 228,
          questionNumber: 2,
          question: 'Чи знали ви, що 16% художників - наші агенти?\n' + 'Вони залишили підказку на своїх творіннях у кімнаті з найбільшим дзеркалом.',
          title: '',
          answer: 5212142
        }, {
          id: 13,
          memberId: 777,
          questionNumber: 3,
          question: 'Зараз ви будете знайомитись з головою німецької розвідки.\n' + 'Вона руда та гарна.\n' + 'Будьте найкращими друзями для неї і вона дасть Вам знайти код.',
          title: 'Тобі знадобиться азбука',
          answer: 802051
        }, {
          id: 14,
          memberId: 690,
          questionNumber: 3,
          question: 'Зараз ви будете знайомитись з головою німецької розвідки.\n' + 'Вона руда та гарна.\n' + 'Будьте найкращими друзями для неї і вона дасть Вам знайти код.',
          title: 'Тобі знадобиться азбука',
          answer: 802051
        }, {
          id: 15,
          memberId: 111,
          questionNumber: 3,
          question: 'Хто спалив мацкву?',
          title: 'Тобі знадобиться азбука',
          answer: 42127624
        }, {
          id: 16,
          memberId: 303,
          questionNumber: 3,
          question: 'Хто спалив мацкву?',
          title: 'Тобі знадобиться азбука',
          answer: 42127624
        }, {
          id: 17,
          memberId: 906,
          questionNumber: 3,
          question: 'Прямуйте до головних агентів.\n' + 'У них всі інструкції. Код надають також вони.',
          title: 'Тобі знадобиться азбука',
          answer: 33447
        }, {
          id: 18,
          memberId: 228,
          questionNumber: 3,
          question: 'Прямуйте до головних агентів.\n' + 'У них всі інструкції. Код надають також вони.',
          title: '',
          answer: 33447
        }, {
          id: 19,
          memberId: 777,
          questionNumber: 4,
          question: 'Прямуйте до головних агентів.\n' + 'У них всі інструкції. Код надають також вони.',
          title: 'Тобі знадобиться азбука',
          answer: 33447
        }, {
          id: 20,
          memberId: 690,
          questionNumber: 4,
          question: 'Прямуйте до головних агентів.\n' + 'У них всі інструкції. Код надають також вони.',
          title: 'Тобі знадобиться азбука',
          answer: 33447
        }, {
          id: 21,
          memberId: 111,
          questionNumber: 4,
          question: 'Інформація - найцінніша монета, на жаль, небезпечна.\n' + 'Доводиться використовувати шифрування щоб ворожі спец. служби не перехопили потрібний Вам код.\n' + 'Прямуйте в кімнату між входом та ванною.  В пустому куті лежить все необхідне для роботи.\n' + '\n' + 'Підказка: 2 перші літери однакові',
          title: 'Тобі знадобиться азбука',
          answer: 1125415325
        }, {
          id: 22,
          memberId: 303,
          questionNumber: 4,
          question: 'Інформація - найцінніша монета, на жаль, небезпечна.\n' + 'Доводиться використовувати шифрування щоб ворожі спец. служби не перехопили потрібний Вам код.\n' + 'Прямуйте в кімнату між входом та ванною.  В пустому куті лежить все необхідне для роботи.\n' + '\n' + 'Підказка: 2 перші літери однакові',
          title: 'Тобі знадобиться азбука',
          answer: 1125415325
        }, {
          id: 23,
          memberId: 906,
          questionNumber: 4,
          question: 'Роботи… ЦРУ створювало їх, щоб було легше контролювати людей. Але хитрі жінки почали  використовувати їх в корисливих цілях.\n' + 'Знайдіть робота, який дасть фору Єноту полоскуну. У нього є те, що Вам потрібно!',
          title: 'Тобі знадобиться азбука',
          answer: 72612
        }, {
          id: 24,
          memberId: 228,
          questionNumber: 4,
          question: 'Роботи… ЦРУ створювало їх, щоб було легше контролювати людей. Але хитрі жінки почали  використовувати їх в корисливих цілях.\n' + 'Знайдіть робота, який дасть фору Єноту полоскуну. У нього є те, що Вам потрібно!',
          title: 'Тобі знадобиться азбука',
          answer: 72612
        }, {
          id: 25,
          memberId: 777,
          questionNumber: 5,
          question: 'Чи знали ви, що 16% художників - наші агенти?\n' + 'Вони залишили підказку на своїх творіннях у кімнаті з найбільшим дзеркалом.',
          title: 'Тобі знадобиться азбука',
          answer: 5212142
        }, {
          id: 26,
          memberId: 690,
          questionNumber: 5,
          question: 'Чи знали ви, що 16% художників - наші агенти?\n' + 'Вони залишили підказку на своїх творіннях у кімнаті з найбільшим дзеркалом.',
          title: 'Тобі знадобиться азбука',
          answer: 5212142
        }, {
          id: 27,
          memberId: 111,
          questionNumber: 5,
          question: 'Прямуйте до головних агентів.\n' + 'У них всі інструкції. Код надають також вони.',
          title: 'Тобі знадобиться азбука',
          answer: 33447
        }, {
          id: 28,
          memberId: 303,
          questionNumber: 5,
          question: 'Прямуйте до головних агентів.\n' + 'У них всі інструкції. Код надають також вони.',
          title: 'Тобі знадобиться азбука',
          answer: 33447
        }, {
          id: 29,
          memberId: 906,
          questionNumber: 5,
          question: 'У Вас вже є необхідний інструмент. Повертайтесь в 1 клас і ідіть вивчати літери.',
          title: 'Тобі знадобиться азбука',
          answer: 513812
        }, {
          id: 30,
          memberId: 228,
          questionNumber: 5,
          question: 'У Вас вже є необхідний інструмент. Повертайтесь в 1 клас і ідіть вивчати літери.',
          title: 'Тобі знадобиться азбука',
          answer: 513812
        }, {
          id: 31,
          memberId: 777,
          questionNumber: 6,
          question: 'Хто спалив мацкву?',
          title: 'Тобі знадобиться азбука',
          answer: 42127624
        }, {
          id: 32,
          memberId: 690,
          questionNumber: 6,
          question: 'Хто спалив мацкву?',
          title: 'Тобі знадобиться азбука',
          answer: 42127624
        }, {
          id: 33,
          memberId: 111,
          questionNumber: 6,
          question: 'Зараз ви будете знайомитись з головою німецької розвідки.\n' + 'Вона руда та гарна.\n' + 'Будьте найкращими друзями для неї і вона дасть Вам знайти код.',
          title: 'Тобі знадобиться азбука',
          answer: 802051
        }, {
          id: 34,
          memberId: 303,
          questionNumber: 6,
          question: 'Зараз ви будете знайомитись з головою німецької розвідки.\n' + 'Вона руда та гарна.\n' + 'Будьте найкращими друзями для неї і вона дасть Вам знайти код.',
          title: 'Тобі знадобиться азбука',
          answer: 802051
        }, {
          id: 35,
          memberId: 906,
          questionNumber: 6,
          question: 'Інформація - найцінніша монета, на жаль, небезпечна.\n' + 'Доводиться використовувати шифрування щоб ворожі спец. служби не перехопили потрібний Вам код.\n' + 'Прямуйте в кімнату між входом та ванною.  В пустому куті лежить все необхідне для роботи.\n' + '\n' + 'Підказка: 2 перші літери однакові',
          title: 'Тобі знадобиться азбука',
          answer: 1125415325
        }, {
          id: 36,
          memberId: 228,
          questionNumber: 6,
          question: 'Інформація - найцінніша монета, на жаль, небезпечна.\n' + 'Доводиться використовувати шифрування щоб ворожі спец. служби не перехопили потрібний Вам код.\n' + 'Прямуйте в кімнату між входом та ванною.  В пустому куті лежить все необхідне для роботи.\n' + '\n' + 'Підказка: 2 перші літери однакові',
          title: 'Тобі знадобиться азбука',
          answer: 1125415325
        }, {
          id: 31,
          memberId: 777,
          questionNumber: 7,
          question: 'Роботи… ЦРУ створювало їх, щоб було легше контролювати людей. Але хитрі жінки почали  використовувати їх в корисливих цілях.\n' + 'Ваша задача знайти робота, який допоможе не марати руки після вечері. Щось він приховує!',
          title: 'Тобі знадобиться азбука',
          answer: 73624
        }, {
          id: 32,
          memberId: 690,
          questionNumber: 7,
          question: 'Роботи… ЦРУ створювало їх, щоб було легше контролювати людей. Але хитрі жінки почали  використовувати їх в корисливих цілях.\n' + 'Ваша задача знайти робота, який допоможе не марати руки після вечері. Щось він приховує!',
          title: 'Тобі знадобиться азбука',
          answer: 73624
        }, {
          id: 33,
          memberId: 111,
          questionNumber: 7,
          question: 'У Вас вже є необхідний інструмент. Повертайтесь в 1 клас і ідіть вивчати літери.',
          title: 'Тобі знадобиться азбука',
          answer: 513812
        }, {
          id: 34,
          memberId: 303,
          questionNumber: 7,
          question: 'У Вас вже є необхідний інструмент. Повертайтесь в 1 клас і ідіть вивчати літери.',
          title: 'Тобі знадобиться азбука',
          answer: 513812
        }, {
          id: 35,
          memberId: 906,
          questionNumber: 7,
          question: 'Хто спалив мацкву?',
          title: 'Тобі знадобиться азбука',
          answer: 42127624
        }, {
          id: 36,
          memberId: 228,
          questionNumber: 7,
          question: 'Хто спалив мацкву?',
          title: 'Тобі знадобиться азбука',
          answer: 42127624
        }, {
          id: 37,
          memberId: 777,
          questionNumber: 8,
          question: 'У Вас вже є необхідний інструмент. Повертайтесь в 1 клас і ідіть вивчати літери.',
          title: 'Тобі знадобиться азбука',
          answer: 513812
        }, {
          id: 38,
          memberId: 690,
          questionNumber: 8,
          question: 'У Вас вже є необхідний інструмент. Повертайтесь в 1 клас і ідіть вивчати літери.',
          title: 'Тобі знадобиться азбука',
          answer: 513812
        }, {
          id: 39,
          memberId: 111,
          questionNumber: 8,
          question: 'Чи знали ви, що 16% художників - наші агенти?\n' + 'Вони залишили підказку на своїх творіннях у кімнаті з найбільшим дзеркалом.',
          title: 'Тобі знадобиться азбука',
          answer: 5212142
        }, {
          id: 40,
          memberId: 303,
          questionNumber: 8,
          question: 'Чи знали ви, що 16% художників - наші агенти?\n' + 'Вони залишили підказку на своїх творіннях у кімнаті з найбільшим дзеркалом.',
          title: 'Тобі знадобиться азбука',
          answer: 5212142
        }, {
          id: 41,
          memberId: 906,
          questionNumber: 8,
          question: 'Зараз ви будете знайомитись з головою німецької розвідки.\n' + 'Вона руда та гарна.\n' + 'Будьте найкращими друзями для неї і вона дасть Вам знайти код.',
          title: 'Тобі знадобиться азбука',
          answer: 802051
        }, {
          id: 42,
          memberId: 228,
          questionNumber: 8,
          question: 'Зараз ви будете знайомитись з головою німецької розвідки.\n' + 'Вона руда та гарна.\n' + 'Будьте найкращими друзями для неї і вона дасть Вам знайти код.',
          title: 'Тобі знадобиться азбука',
          answer: 802051
        }, {
          id: 37,
          memberId: 777,
          questionNumber: 9,
          question: 'Коробка від якої залежить, чи будуть працювати розетки.',
          title: 'Азбука тобі не потрібна',
          answer: 513812
        }, {
          id: 38,
          memberId: 690,
          questionNumber: 9,
          question: 'Коробка від якої залежить, чи будуть працювати розетки.',
          title: 'Тобі знадобиться азбука',
          answer: 513812
        }, {
          id: 39,
          memberId: 111,
          questionNumber: 9,
          question: 'Всі ці флакончики заміняє один 3в1.',
          title: 'Азбука тобі не потрібна',
          answer: 5212142
        }, {
          id: 40,
          memberId: 303,
          questionNumber: 9,
          question: 'Всі ці флакончики заміняє один 3в1.',
          title: 'Азбука тобі не потрібна',
          answer: 5212142
        }, {
          id: 41,
          memberId: 906,
          questionNumber: 9,
          question: 'Там зима круглий рік .',
          title: 'Азбука тобі не потрібна',
          answer: 802051
        }, {
          id: 42,
          memberId: 228,
          questionNumber: 9,
          question: 'Там зима круглий рік .',
          title: 'Азбука тобі не потрібна',
          answer: 802051
        }];
      }
      _createClass(QuestionsService, [{
        key: "getAgentNumbers",
        value: function getAgentNumbers() {
          return this.agentsNumbers;
        }
      }, {
        key: "getQuestions",
        value: function getQuestions(questionNumber, memberId) {
          return this.agentsQuestions.find(function (x) {
            return x.memberId == memberId && x.questionNumber == questionNumber;
          });
        }
      }]);
      return QuestionsService;
    }();
    QuestionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], QuestionsService);

    /***/
  }),
  /***/"./src/environments/environment.ts": (
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  }),
  /***/"./src/main.ts": (
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  }),
  /***/0: (
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! C:\Users\y.giienko\Desktop\new-year\new-year-proj\src\main.ts */"./src/main.ts");

    /***/
  })
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map