(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-submittaxform-submittaxform-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/submittaxform/submittaxform.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/submittaxform/submittaxform.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/app/tabs/speakers\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>কনফার্ম করুন </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding speaker-detail\">\r\n  <div class=\"ion-text-center\">\r\n\r\n    <form #f=\"ngForm\" novalidate>\r\n      <ion-list>\r\n        <ion-text color=\"danger\">\r\n          <p *ngIf=\"bikashnumber.touched && bikashnumber.invalid\" class=\"ion-padding-start\">\r\n            বিকাশ নম্বর দিতে হবে !\r\n          </p>\r\n          <p *ngIf=\"tnsnumber.touched && tnsnumber.invalid\" class=\"ion-padding-start\">\r\n            ট্রানসাকশান নম্বর দিতে হবে !\r\n          </p>\r\n        </ion-text>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">বিকাশ নাম্বার দিন(যে নাম্বার হতে টাকা পাথিয়েছেন)</ion-label>\r\n          <ion-input #bikashnumber=\"ngModel\" [(ngModel)]=\"submitform.bikashnumber\" name=\"bikashnumber\" type=\"text\"\r\n            required></ion-input>\r\n\r\n        </ion-item>\r\n\r\n\r\n        <ion-item>\r\n          <ion-label position=\"floating\">ট্রানজ্যাকশন নাম্বার দিন</ion-label>\r\n          <ion-input #tnsnumber=\"ngModel\" [(ngModel)]=\"submitform.tnsnumber\" name=\"tnsnumber\" type=\"text\" required>\r\n          </ion-input>\r\n        </ion-item>\r\n\r\n      </ion-list>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button type=\"submit\" (click)=\"f.valid&&save(submitform)\" expand=\"block\">সাবমিট</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/model/submitform.ts":
/*!*************************************!*\
  !*** ./src/app/model/submitform.ts ***!
  \*************************************/
/*! exports provided: submitform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitform", function() { return submitform; });
var submitform = /** @class */ (function () {
    function submitform() {
    }
    return submitform;
}());



/***/ }),

/***/ "./src/app/pages/submittaxform/submittaxform.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/submittaxform/submittaxform.module.ts ***!
  \*************************************************************/
/*! exports provided: SubmittaxformPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmittaxformPageModule", function() { return SubmittaxformPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _submittaxform_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submittaxform.page */ "./src/app/pages/submittaxform/submittaxform.page.ts");







var routes = [
    {
        path: '',
        component: _submittaxform_page__WEBPACK_IMPORTED_MODULE_6__["SubmittaxformPage"]
    }
];
var SubmittaxformPageModule = /** @class */ (function () {
    function SubmittaxformPageModule() {
    }
    SubmittaxformPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_submittaxform_page__WEBPACK_IMPORTED_MODULE_6__["SubmittaxformPage"]]
        })
    ], SubmittaxformPageModule);
    return SubmittaxformPageModule;
}());



/***/ }),

/***/ "./src/app/pages/submittaxform/submittaxform.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/submittaxform/submittaxform.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1Ym1pdHRheGZvcm0vc3VibWl0dGF4Zm9ybS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/submittaxform/submittaxform.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/submittaxform/submittaxform.page.ts ***!
  \***********************************************************/
/*! exports provided: SubmittaxformPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmittaxformPage", function() { return SubmittaxformPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _submittaxform_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../submittaxform.service */ "./src/app/submittaxform.service.ts");
/* harmony import */ var _model_submitform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../model/submitform */ "./src/app/model/submitform.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");







var SubmittaxformPage = /** @class */ (function () {
    function SubmittaxformPage(submitformServices, toastController, afAuth, route) {
        this.submitformServices = submitformServices;
        this.toastController = toastController;
        this.afAuth = afAuth;
        this.route = route;
        this.submitform = new _model_submitform__WEBPACK_IMPORTED_MODULE_3__["submitform"]();
        this.submitformm = [];
        this.key = this.route.snapshot.paramMap.get('key');
        //  if (this.key) this.submitformServices.get(this.key).valueChanges()
        //  .subscribe(p => {
        //   const obj=  Object.assign(this.submitform,p);     
        //       this.submitform=obj;
        //  });
    }
    SubmittaxformPage.prototype.save = function (submitform) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // this.afAuth.authState.subscribe(data=>{
                        //   console.log(data.uid);
                        //   submitform.entryby=data.uid;
                        // });
                        submitform.entrydate = new Date().getTime();
                        //   submitform.key=this.key;
                        //   this.submitformServices.update(this.key,submitform);
                        submitform.key = this.key;
                        return [4 /*yield*/, this.submitformServices.save(submitform).then(function (t) {
                                _this.toast = _this.toastController.create({
                                    message: 'Payment Succesfull !',
                                    duration: 2000
                                }).then(function (toastData) {
                                    toastData.present();
                                });
                            })];
                    case 1:
                        _a.sent();
                        this.submitform.bikashnumber = '';
                        this.submitform.tnsnumber = '';
                        return [2 /*return*/];
                }
            });
        });
    };
    SubmittaxformPage.prototype.HideToast = function () {
        this.toast = this.toastController.dismiss();
    };
    SubmittaxformPage.prototype.ngOnInit = function () {
    };
    SubmittaxformPage.ctorParameters = function () { return [
        { type: _submittaxform_service__WEBPACK_IMPORTED_MODULE_2__["SubmittaxformService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    SubmittaxformPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'submittaxform',
            template: __webpack_require__(/*! raw-loader!./submittaxform.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/submittaxform/submittaxform.page.html"),
            styles: [__webpack_require__(/*! ./submittaxform.page.scss */ "./src/app/pages/submittaxform/submittaxform.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_submittaxform_service__WEBPACK_IMPORTED_MODULE_2__["SubmittaxformService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SubmittaxformPage);
    return SubmittaxformPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-submittaxform-submittaxform-module-es5.js.map