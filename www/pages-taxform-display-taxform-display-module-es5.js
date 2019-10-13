(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-taxform-display-taxform-display-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/taxform-display/taxform-display.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/taxform-display/taxform-display.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>taxformDisplay</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <table >\r\n       <thead>\r\n         <th>Bikas NO.</th>\r\n         <th>TRX NO.</th>\r\n       </thead>\r\n        <tr *ngFor=\"let taxrecord of taxRecords\">\r\n          <td>{{taxrecord.bikashnumber}}</td>\r\n          <td>{{taxrecord.tnsnumber}}</td>\r\n          <a [routerLink]=\"['/submittaxform/', taxrecord.key]\">Edit </a>\r\n          <a [routerLink]=\"\"  (click)=\"deleteR(taxrecord)\">Delete </a>\r\n        </tr>\r\n\r\n    </table>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/taxform-display/taxform-display.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/taxform-display/taxform-display.module.ts ***!
  \*****************************************************************/
/*! exports provided: TaxformDisplayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxformDisplayPageModule", function() { return TaxformDisplayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _taxform_display_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taxform-display.page */ "./src/app/pages/taxform-display/taxform-display.page.ts");







var routes = [
    {
        path: '',
        component: _taxform_display_page__WEBPACK_IMPORTED_MODULE_6__["TaxformDisplayPage"]
    }
];
var TaxformDisplayPageModule = /** @class */ (function () {
    function TaxformDisplayPageModule() {
    }
    TaxformDisplayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_taxform_display_page__WEBPACK_IMPORTED_MODULE_6__["TaxformDisplayPage"]]
        })
    ], TaxformDisplayPageModule);
    return TaxformDisplayPageModule;
}());



/***/ }),

/***/ "./src/app/pages/taxform-display/taxform-display.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/taxform-display/taxform-display.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RheGZvcm0tZGlzcGxheS90YXhmb3JtLWRpc3BsYXkucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/taxform-display/taxform-display.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/taxform-display/taxform-display.page.ts ***!
  \***************************************************************/
/*! exports provided: TaxformDisplayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxformDisplayPage", function() { return TaxformDisplayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _submittaxform_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../submittaxform.service */ "./src/app/submittaxform.service.ts");



var TaxformDisplayPage = /** @class */ (function () {
    function TaxformDisplayPage(submitformServices) {
        this.submitformServices = submitformServices;
        this.taxRecords = [];
    }
    TaxformDisplayPage.prototype.ngOnInit = function () {
        var _this = this;
        var confirmform = this.submitformServices.getAllsubmittexform();
        this.subscription = confirmform.snapshotChanges().pipe().subscribe(function (item) {
            _this.taxRecords = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["key"] = element.key;
                // console.log(y);
                _this.taxRecords.push(y);
                console.log(_this.taxRecords);
            });
        });
    };
    TaxformDisplayPage.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    TaxformDisplayPage.prototype.deleteR = function (taxrecord) {
        this.submitformServices.delete(taxrecord.key);
    };
    TaxformDisplayPage.ctorParameters = function () { return [
        { type: _submittaxform_service__WEBPACK_IMPORTED_MODULE_2__["SubmittaxformService"] }
    ]; };
    TaxformDisplayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'taxform-display',
            template: __webpack_require__(/*! raw-loader!./taxform-display.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/taxform-display/taxform-display.page.html"),
            styles: [__webpack_require__(/*! ./taxform-display.page.scss */ "./src/app/pages/taxform-display/taxform-display.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_submittaxform_service__WEBPACK_IMPORTED_MODULE_2__["SubmittaxformService"]])
    ], TaxformDisplayPage);
    return TaxformDisplayPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-taxform-display-taxform-display-module-es5.js.map