(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pourosova-entry-form-pourosova-entry-form-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/pourosova-entry-form/pourosova-entry-form.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/pourosova-entry-form/pourosova-entry-form.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/app/tabs/speakers\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Enter Pourosova Name</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding speaker-detail\">\r\n  <div class=\"ion-text-center\">\r\n\r\n    <form novalidate>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-input #PourosovaName=\"ngModel\" [(ngModel)]=\"Pourosova.pourosovaName\" name=\"PourosovaName\" clearInput placeholder=\"Pourosova Name\"></ion-input>\r\n\r\n\r\n        </ion-item>\r\n\r\n\r\n      </ion-list>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button type=\"submit\" (click)=\"save(Pourosova)\" expand=\"block\">Submit</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/model/pourosova.ts":
/*!************************************!*\
  !*** ./src/app/model/pourosova.ts ***!
  \************************************/
/*! exports provided: Pourosova */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pourosova", function() { return Pourosova; });
class Pourosova {
}


/***/ }),

/***/ "./src/app/pages/pourosova-entry-form/pourosova-entry-form.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/pourosova-entry-form/pourosova-entry-form.module.ts ***!
  \***************************************************************************/
/*! exports provided: PourosovaEntryFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PourosovaEntryFormPageModule", function() { return PourosovaEntryFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pourosova_entry_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pourosova-entry-form.page */ "./src/app/pages/pourosova-entry-form/pourosova-entry-form.page.ts");







const routes = [
    {
        path: '',
        component: _pourosova_entry_form_page__WEBPACK_IMPORTED_MODULE_6__["PourosovaEntryFormPage"]
    }
];
let PourosovaEntryFormPageModule = class PourosovaEntryFormPageModule {
};
PourosovaEntryFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_pourosova_entry_form_page__WEBPACK_IMPORTED_MODULE_6__["PourosovaEntryFormPage"]]
    })
], PourosovaEntryFormPageModule);



/***/ }),

/***/ "./src/app/pages/pourosova-entry-form/pourosova-entry-form.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/pourosova-entry-form/pourosova-entry-form.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvdXJvc292YS1lbnRyeS1mb3JtL3BvdXJvc292YS1lbnRyeS1mb3JtLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/pourosova-entry-form/pourosova-entry-form.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/pourosova-entry-form/pourosova-entry-form.page.ts ***!
  \*************************************************************************/
/*! exports provided: PourosovaEntryFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PourosovaEntryFormPage", function() { return PourosovaEntryFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_pourosova_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/pourosova.service */ "./src/app/services/pourosova.service.ts");
/* harmony import */ var _model_pourosova__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../model/pourosova */ "./src/app/model/pourosova.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let PourosovaEntryFormPage = class PourosovaEntryFormPage {
    constructor(pourosovaServices, toastController) {
        this.pourosovaServices = pourosovaServices;
        this.toastController = toastController;
        this.Pourosova = new _model_pourosova__WEBPACK_IMPORTED_MODULE_2__["Pourosova"]();
    }
    ngOnInit() {
    }
    save(pourosova) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.pourosovaServices.save(pourosova).then(t => {
                this.toast = this.toastController.create({
                    message: 'Saved Succesfully',
                    duration: 2000
                }).then((toastData) => {
                    toastData.present();
                });
            });
            this.Pourosova = new _model_pourosova__WEBPACK_IMPORTED_MODULE_2__["Pourosova"]();
        });
    }
    HideToast() {
        this.toast = this.toastController.dismiss();
    }
};
PourosovaEntryFormPage.ctorParameters = () => [
    { type: _services_pourosova_service__WEBPACK_IMPORTED_MODULE_1__["PourosovaService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
PourosovaEntryFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'pourosova-entry-form',
        template: __webpack_require__(/*! raw-loader!./pourosova-entry-form.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/pourosova-entry-form/pourosova-entry-form.page.html"),
        styles: [__webpack_require__(/*! ./pourosova-entry-form.page.scss */ "./src/app/pages/pourosova-entry-form/pourosova-entry-form.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_pourosova_service__WEBPACK_IMPORTED_MODULE_1__["PourosovaService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], PourosovaEntryFormPage);



/***/ })

}]);
//# sourceMappingURL=pages-pourosova-entry-form-pourosova-entry-form-module-es2015.js.map