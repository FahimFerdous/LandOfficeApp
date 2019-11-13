(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-licence-entry-form-licence-entry-form-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/licence-entry-form/licence-entry-form.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/licence-entry-form/licence-entry-form.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/app/tabs/speakers\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>লাইসেন্স নাম্বার দিন</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding speaker-detail\">\r\n  <div class=\"ion-text-center\">\r\n    <form novalidate>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-label>সিলেক্ট ইউনিয়ন</ion-label>\r\n          <ion-select\r\n            #pourosovaId=\"ngModel\"\r\n            [(ngModel)]=\"licence.pourosovaId\"\r\n            name=\"pourosovaId\"\r\n            (ionChange)=\"pourosovaDDLChange(licence.pourosovaId)\"\r\n            value=\"brown\"\r\n            okText=\"Okay\"\r\n            cancelText=\"Dismiss\"\r\n          >\r\n            <ion-select-option *ngFor=\"let c of pourosova\" [value]=\"c.key\">\r\n              {{ c.pourosovaName }}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>সিলেক্ট হাঁট</ion-label>\r\n          <ion-select\r\n            #hatId=\"ngModel\"\r\n            [(ngModel)]=\"licence.hatId\"\r\n            name=\"hatId\"\r\n            value=\"brown\"\r\n            okText=\"Okay\"\r\n            cancelText=\"Dismiss\"\r\n          >\r\n            <ion-select-option *ngFor=\"let c of searchHats\" [value]=\"c.key\">\r\n              {{ c.hatName }}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-input\r\n            #licenceNo=\"ngModel\"\r\n            [(ngModel)]=\"licence.licenceNo\"\r\n            name=\"licenceNo\"\r\n            clearInput\r\n            placeholder=\"Licence No\"\r\n          ></ion-input>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button (click)=\"save(licence)\" type=\"submit\" expand=\"block\"\r\n            >Submit</ion-button\r\n          >\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/licence-entry-form/licence-entry-form.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/licence-entry-form/licence-entry-form.module.ts ***!
  \***********************************************************************/
/*! exports provided: LicenceEntryFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenceEntryFormPageModule", function() { return LicenceEntryFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _licence_entry_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./licence-entry-form.page */ "./src/app/pages/licence-entry-form/licence-entry-form.page.ts");







var routes = [
    {
        path: '',
        component: _licence_entry_form_page__WEBPACK_IMPORTED_MODULE_6__["LicenceEntryFormPage"]
    }
];
var LicenceEntryFormPageModule = /** @class */ (function () {
    function LicenceEntryFormPageModule() {
    }
    LicenceEntryFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_licence_entry_form_page__WEBPACK_IMPORTED_MODULE_6__["LicenceEntryFormPage"]]
        })
    ], LicenceEntryFormPageModule);
    return LicenceEntryFormPageModule;
}());



/***/ }),

/***/ "./src/app/pages/licence-entry-form/licence-entry-form.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/licence-entry-form/licence-entry-form.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpY2VuY2UtZW50cnktZm9ybS9saWNlbmNlLWVudHJ5LWZvcm0ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/licence-entry-form/licence-entry-form.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/licence-entry-form/licence-entry-form.page.ts ***!
  \*********************************************************************/
/*! exports provided: LicenceEntryFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LicenceEntryFormPage", function() { return LicenceEntryFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_hat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/hat.service */ "./src/app/services/hat.service.ts");
/* harmony import */ var _services_pourosova_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/pourosova.service */ "./src/app/services/pourosova.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_licence__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/licence */ "./src/app/model/licence.ts");
/* harmony import */ var _services_licence_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/licence.service */ "./src/app/services/licence.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var LicenceEntryFormPage = /** @class */ (function () {
    function LicenceEntryFormPage(pourosovaServices, hatService, licenceServices, toastController) {
        this.pourosovaServices = pourosovaServices;
        this.hatService = hatService;
        this.licenceServices = licenceServices;
        this.toastController = toastController;
        this.licence = new _model_licence__WEBPACK_IMPORTED_MODULE_4__["Licence"]();
    }
    LicenceEntryFormPage.prototype.ngOnInit = function () {
        var _this = this;
        var x = this.pourosovaServices.getAllPourosova();
        var hatInfos = this.hatService.getAllHat();
        this.subscription = x.snapshotChanges().pipe().subscribe(function (item) {
            _this.pourosova = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["key"] = element.key;
                _this.pourosova.push(y);
            });
        });
        this.subscription = hatInfos.snapshotChanges().pipe().subscribe(function (item) {
            _this.hats = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["key"] = element.key;
                _this.hats.push(y);
            });
            console.log(_this.hats);
        });
    };
    LicenceEntryFormPage.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LicenceEntryFormPage.prototype.save = function (licence) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(licence);
                        return [4 /*yield*/, this.licenceServices.save(licence).then(function (t) {
                                var toast = _this.toastController.create({
                                    message: 'Saved Succesfully',
                                    duration: 2000
                                }).then(function (toastData) {
                                    toastData.present();
                                });
                            })];
                    case 1:
                        _a.sent();
                        this.licence = new _model_licence__WEBPACK_IMPORTED_MODULE_4__["Licence"]();
                        return [2 /*return*/];
                }
            });
        });
    };
    LicenceEntryFormPage.prototype.pourosovaDDLChange = function (pourosovaId) {
        this.searchHats = [];
        var filterHats = (pourosovaId) ?
            this.hats.filter(function (p) { return p.pourosovaId == pourosovaId; }) :
            this.hats;
        this.searchHats = filterHats;
    };
    LicenceEntryFormPage.ctorParameters = function () { return [
        { type: _services_pourosova_service__WEBPACK_IMPORTED_MODULE_2__["PourosovaService"] },
        { type: _services_hat_service__WEBPACK_IMPORTED_MODULE_1__["HatService"] },
        { type: _services_licence_service__WEBPACK_IMPORTED_MODULE_5__["LicenceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
    ]; };
    LicenceEntryFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'licence-entry-form',
            template: __webpack_require__(/*! raw-loader!./licence-entry-form.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/licence-entry-form/licence-entry-form.page.html"),
            styles: [__webpack_require__(/*! ./licence-entry-form.page.scss */ "./src/app/pages/licence-entry-form/licence-entry-form.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_pourosova_service__WEBPACK_IMPORTED_MODULE_2__["PourosovaService"],
            _services_hat_service__WEBPACK_IMPORTED_MODULE_1__["HatService"],
            _services_licence_service__WEBPACK_IMPORTED_MODULE_5__["LicenceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
    ], LicenceEntryFormPage);
    return LicenceEntryFormPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-licence-entry-form-licence-entry-form-module-es5.js.map