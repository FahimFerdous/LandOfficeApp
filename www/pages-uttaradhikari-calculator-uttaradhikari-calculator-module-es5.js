(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-uttaradhikari-calculator-uttaradhikari-calculator-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/uttaradhikari-calculator/uttaradhikari-calculator.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/uttaradhikari-calculator/uttaradhikari-calculator.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <!-- <ion-back-button defaultHref=\"/app/tabs/speakers\"></ion-back-button> -->\r\n    </ion-buttons>\r\n    <ion-title>উত্তরাধিকার ক্যালকুলেটর </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- <iframe width=\"100%\" height=\"100%\" [src]=\"url\"></iframe> --><ion-button (click)=\"openSystem()\">open</ion-button>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/uttaradhikari-calculator/uttaradhikari-calculator.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/uttaradhikari-calculator/uttaradhikari-calculator.module.ts ***!
  \***********************************************************************************/
/*! exports provided: UttaradhikariCalculatorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UttaradhikariCalculatorPageModule", function() { return UttaradhikariCalculatorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _uttaradhikari_calculator_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uttaradhikari-calculator.page */ "./src/app/pages/uttaradhikari-calculator/uttaradhikari-calculator.page.ts");







var routes = [
    {
        path: '',
        component: _uttaradhikari_calculator_page__WEBPACK_IMPORTED_MODULE_6__["UttaradhikariCalculatorPage"]
    }
];
var UttaradhikariCalculatorPageModule = /** @class */ (function () {
    function UttaradhikariCalculatorPageModule() {
    }
    UttaradhikariCalculatorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_uttaradhikari_calculator_page__WEBPACK_IMPORTED_MODULE_6__["UttaradhikariCalculatorPage"]]
        })
    ], UttaradhikariCalculatorPageModule);
    return UttaradhikariCalculatorPageModule;
}());



/***/ }),

/***/ "./src/app/pages/uttaradhikari-calculator/uttaradhikari-calculator.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/uttaradhikari-calculator/uttaradhikari-calculator.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3V0dGFyYWRoaWthcmktY2FsY3VsYXRvci91dHRhcmFkaGlrYXJpLWNhbGN1bGF0b3IucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/uttaradhikari-calculator/uttaradhikari-calculator.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/uttaradhikari-calculator/uttaradhikari-calculator.page.ts ***!
  \*********************************************************************************/
/*! exports provided: UttaradhikariCalculatorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UttaradhikariCalculatorPage", function() { return UttaradhikariCalculatorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");




var UttaradhikariCalculatorPage = /** @class */ (function () {
    function UttaradhikariCalculatorPage(sanitizer, iab) {
        this.iab = iab;
        // this.url = sanitizer.bypassSecurityTrustResourceUrl(
        //   "http://উত্তরাধিকার.বাংলা/"
        // );
    }
    UttaradhikariCalculatorPage.prototype.openSystem = function () {
        this.iab.create("http://উত্তরাধিকার.বাংলা/", "_blank");
    };
    UttaradhikariCalculatorPage.prototype.ngOnInit = function () { };
    UttaradhikariCalculatorPage.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"] }
    ]; };
    UttaradhikariCalculatorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "uttaradhikari-calculator",
            template: __webpack_require__(/*! raw-loader!./uttaradhikari-calculator.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/uttaradhikari-calculator/uttaradhikari-calculator.page.html"),
            styles: [__webpack_require__(/*! ./uttaradhikari-calculator.page.scss */ "./src/app/pages/uttaradhikari-calculator/uttaradhikari-calculator.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"]])
    ], UttaradhikariCalculatorPage);
    return UttaradhikariCalculatorPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-uttaradhikari-calculator-uttaradhikari-calculator-module-es5.js.map