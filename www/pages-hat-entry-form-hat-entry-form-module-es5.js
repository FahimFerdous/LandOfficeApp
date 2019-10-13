(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-hat-entry-form-hat-entry-form-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/hat-entry-form/hat-entry-form.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/hat-entry-form/hat-entry-form.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/app/tabs/speakers\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Enter Hat Name</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding speaker-detail\">\r\n  <div class=\"ion-text-center\">\r\n\r\n    <form novalidate>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-label>Select Pourosova</ion-label>\r\n          <ion-select #pourosovaId=\"ngModel\" [(ngModel)]=\"hat.pourosovaId\" name=\"pourosovaId\" value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n            <ion-select-option *ngFor=\"let c of pourosova\"  [value]=\"c.key\">\r\n               {{ c.pourosovaName }}\r\n              </ion-select-option>\r\n               \r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-input #hatName=\"ngModel\" [(ngModel)]=\"hat.hatName\" name=\"hatName\" clearInput placeholder=\"Hat Name\"></ion-input>\r\n\r\n\r\n        </ion-item>\r\n\r\n\r\n      </ion-list>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button (click)=\"save(hat)\" type=\"submit\" expand=\"block\">Submit</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/model/hat.ts":
/*!******************************!*\
  !*** ./src/app/model/hat.ts ***!
  \******************************/
/*! exports provided: Hat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hat", function() { return Hat; });
var Hat = /** @class */ (function () {
    function Hat() {
    }
    return Hat;
}());



/***/ }),

/***/ "./src/app/pages/hat-entry-form/hat-entry-form.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/hat-entry-form/hat-entry-form.module.ts ***!
  \***************************************************************/
/*! exports provided: HatEntryFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HatEntryFormPageModule", function() { return HatEntryFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hat_entry_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hat-entry-form.page */ "./src/app/pages/hat-entry-form/hat-entry-form.page.ts");







var routes = [
    {
        path: '',
        component: _hat_entry_form_page__WEBPACK_IMPORTED_MODULE_6__["HatEntryFormPage"]
    }
];
var HatEntryFormPageModule = /** @class */ (function () {
    function HatEntryFormPageModule() {
    }
    HatEntryFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_hat_entry_form_page__WEBPACK_IMPORTED_MODULE_6__["HatEntryFormPage"]]
        })
    ], HatEntryFormPageModule);
    return HatEntryFormPageModule;
}());



/***/ }),

/***/ "./src/app/pages/hat-entry-form/hat-entry-form.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/hat-entry-form/hat-entry-form.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hhdC1lbnRyeS1mb3JtL2hhdC1lbnRyeS1mb3JtLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/hat-entry-form/hat-entry-form.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/hat-entry-form/hat-entry-form.page.ts ***!
  \*************************************************************/
/*! exports provided: HatEntryFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HatEntryFormPage", function() { return HatEntryFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_hat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/hat.service */ "./src/app/services/hat.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_hat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/hat */ "./src/app/model/hat.ts");
/* harmony import */ var _services_pourosova_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/pourosova.service */ "./src/app/services/pourosova.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var HatEntryFormPage = /** @class */ (function () {
    function HatEntryFormPage(pourosovaServices, hatServices, toastController) {
        this.pourosovaServices = pourosovaServices;
        this.hatServices = hatServices;
        this.toastController = toastController;
        this.hat = new _model_hat__WEBPACK_IMPORTED_MODULE_3__["Hat"]();
    }
    HatEntryFormPage.prototype.ngOnInit = function () {
        var _this = this;
        var allPourosova = this.pourosovaServices.getAllPourosova();
        this.subscription = allPourosova.snapshotChanges().pipe().subscribe(function (item) {
            _this.pourosova = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["key"] = element.key;
                console.log(y);
                _this.pourosova.push(y);
            });
        });
    };
    HatEntryFormPage.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    HatEntryFormPage.prototype.save = function (hat) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(hat);
                        return [4 /*yield*/, this.hatServices.save(hat).then(function (t) {
                                var toast = _this.toastController.create({
                                    message: 'Saved Succesfully',
                                    duration: 2000
                                }).then(function (toastData) {
                                    toastData.present();
                                });
                            })];
                    case 1:
                        _a.sent();
                        this.hat = new _model_hat__WEBPACK_IMPORTED_MODULE_3__["Hat"]();
                        return [2 /*return*/];
                }
            });
        });
    };
    HatEntryFormPage.ctorParameters = function () { return [
        { type: _services_pourosova_service__WEBPACK_IMPORTED_MODULE_4__["PourosovaService"] },
        { type: _services_hat_service__WEBPACK_IMPORTED_MODULE_1__["HatService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
    ]; };
    HatEntryFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'hat-entry-form',
            template: __webpack_require__(/*! raw-loader!./hat-entry-form.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/hat-entry-form/hat-entry-form.page.html"),
            styles: [__webpack_require__(/*! ./hat-entry-form.page.scss */ "./src/app/pages/hat-entry-form/hat-entry-form.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_pourosova_service__WEBPACK_IMPORTED_MODULE_4__["PourosovaService"],
            _services_hat_service__WEBPACK_IMPORTED_MODULE_1__["HatService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
    ], HatEntryFormPage);
    return HatEntryFormPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-hat-entry-form-hat-entry-form-module-es5.js.map