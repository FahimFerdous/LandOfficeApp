(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dropdown-input-page-dropdown-input-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dropdown-input-page/dropdown-input-page.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dropdown-input-page/dropdown-input-page.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/app/tabs/speakers\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Dropdown Input Page</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding speaker-detail\">\r\n  <div class=\"ion-text-center\">\r\n    <form novalidate>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\" color=\"primary\">Username</ion-label>\r\n          <ion-input\r\n            name=\"username\"\r\n            type=\"text\"\r\n            spellcheck=\"false\"\r\n            autocapitalize=\"off\"\r\n            required\r\n          >\r\n          </ion-input>\r\n        </ion-item>\r\n\r\n        <ion-text color=\"danger\">\r\n          <p class=\"ion-padding-start\">\r\n            Username is required\r\n          </p>\r\n        </ion-text>\r\n\r\n        <ion-item>\r\n          <ion-label position=\"stacked\" color=\"primary\">Password</ion-label>\r\n          <ion-input name=\"password\" type=\"password\" required> </ion-input>\r\n        </ion-item>\r\n\r\n        <ion-text color=\"danger\">\r\n          <p class=\"ion-padding-start\">\r\n            Password is required\r\n          </p>\r\n        </ion-text>\r\n      </ion-list>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button type=\"submit\" expand=\"block\">Login</ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button color=\"light\" expand=\"block\">Signup</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n\r\n    <ion-button fill=\"clear\" size=\"small\" color=\"twitter\">\r\n      <ion-icon name=\"logo-twitter\" slot=\"icon-only\"></ion-icon>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\" size=\"small\" color=\"github\">\r\n      <ion-icon name=\"logo-github\" slot=\"icon-only\"></ion-icon>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\" size=\"small\" color=\"instagram\">\r\n      <ion-icon name=\"logo-instagram\" slot=\"icon-only\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/dropdown-input-page/dropdown-input-page.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/dropdown-input-page/dropdown-input-page.module.ts ***!
  \*************************************************************************/
/*! exports provided: DropdownInputPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownInputPagePageModule", function() { return DropdownInputPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dropdown_input_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdown-input-page.page */ "./src/app/pages/dropdown-input-page/dropdown-input-page.page.ts");







const routes = [
    {
        path: '',
        component: _dropdown_input_page_page__WEBPACK_IMPORTED_MODULE_6__["DropdownInputPagePage"]
    }
];
let DropdownInputPagePageModule = class DropdownInputPagePageModule {
};
DropdownInputPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_dropdown_input_page_page__WEBPACK_IMPORTED_MODULE_6__["DropdownInputPagePage"]]
    })
], DropdownInputPagePageModule);



/***/ }),

/***/ "./src/app/pages/dropdown-input-page/dropdown-input-page.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/dropdown-input-page/dropdown-input-page.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Ryb3Bkb3duLWlucHV0LXBhZ2UvZHJvcGRvd24taW5wdXQtcGFnZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/dropdown-input-page/dropdown-input-page.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/dropdown-input-page/dropdown-input-page.page.ts ***!
  \***********************************************************************/
/*! exports provided: DropdownInputPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownInputPagePage", function() { return DropdownInputPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DropdownInputPagePage = class DropdownInputPagePage {
    constructor() { }
    ngOnInit() {
    }
};
DropdownInputPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dropdown-input-page',
        template: __webpack_require__(/*! raw-loader!./dropdown-input-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/dropdown-input-page/dropdown-input-page.page.html"),
        styles: [__webpack_require__(/*! ./dropdown-input-page.page.scss */ "./src/app/pages/dropdown-input-page/dropdown-input-page.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DropdownInputPagePage);



/***/ })

}]);
//# sourceMappingURL=pages-dropdown-input-page-dropdown-input-page-module-es2015.js.map