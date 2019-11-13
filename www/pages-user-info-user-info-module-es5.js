(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-info-user-info-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user-info/user-info.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user-info/user-info.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Speakers</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"outer-content\">\r\n  <ion-list>\r\n    <ion-grid fixed>\r\n      <ion-row class=\"ion-align-items-stretch\">\r\n        <ion-col size=\"12\" size-md=\"6\">\r\n          <ion-card class=\"speaker-card\">\r\n            <ion-card-header>\r\n              <ion-item detail=\"false\" lines=\"none\" routerLink=\"/app/tabs/speakers/speaker-details/\">\r\n                <ion-avatar slot=\"start\">\r\n                  <img  alt=\"Speaker profile pic\">\r\n                </ion-avatar>\r\n                speaker name\r\n              </ion-item>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content>\r\n              <ion-list>\r\n                <ion-item  routerLink=\"/app/tabs/speakers/session/\">\r\n                  <h3>session.name</h3>\r\n                </ion-item>\r\n\r\n                <ion-item routerLink=\"/app/tabs/speakers/speaker-details/\">\r\n                  <h3>About speaker name</h3>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card-content>\r\n\r\n            <ion-row class=\"ion-no-padding ion-justify-content-center\">\r\n              <ion-col size=\"4\" class=\"ion-text-left\">\r\n                <ion-button fill=\"clear\" size=\"small\" color=\"primary\" >\r\n                  <ion-icon name=\"logo-twitter\" slot=\"start\"></ion-icon>\r\n                  Tweet\r\n                </ion-button>\r\n              </ion-col>\r\n              <ion-col size=\"4\" class=\"ion-text-center\">\r\n                <ion-button fill=\"clear\" size=\"small\" color=\"primary\" >\r\n                  <ion-icon name=\"share-alt\" slot=\"start\"></ion-icon>\r\n                  Share\r\n                </ion-button>\r\n              </ion-col>\r\n              <ion-col size=\"4\" lass=\"ion-text-right\">\r\n                <ion-button fill=\"clear\" size=\"small\" color=\"primary\" >\r\n                  <ion-icon name=\"chatboxes\" slot=\"start\"></ion-icon>\r\n                  Contact\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"schedule\">\r\n      <ion-icon name=\"calendar\"></ion-icon>\r\n      <ion-label>Schedule</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"speakers\">\r\n      <ion-icon name=\"contacts\"></ion-icon>\r\n      <ion-label>Speakers</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"map\">\r\n      <ion-icon name=\"map\"></ion-icon>\r\n      <ion-label>Map</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"about\">\r\n      <ion-icon name=\"information-circle\"></ion-icon>\r\n      <ion-label>About</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>"

/***/ }),

/***/ "./src/app/pages/user-info/user-info.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/user-info/user-info.module.ts ***!
  \*****************************************************/
/*! exports provided: UserInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoPageModule", function() { return UserInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-info.page */ "./src/app/pages/user-info/user-info.page.ts");







var routes = [
    {
        path: '',
        component: _user_info_page__WEBPACK_IMPORTED_MODULE_6__["UserInfoPage"]
    }
];
var UserInfoPageModule = /** @class */ (function () {
    function UserInfoPageModule() {
    }
    UserInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_info_page__WEBPACK_IMPORTED_MODULE_6__["UserInfoPage"]]
        })
    ], UserInfoPageModule);
    return UserInfoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/user-info/user-info.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/user-info/user-info.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItaW5mby91c2VyLWluZm8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/user-info/user-info.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/user-info/user-info.page.ts ***!
  \***************************************************/
/*! exports provided: UserInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoPage", function() { return UserInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserInfoPage = /** @class */ (function () {
    function UserInfoPage() {
    }
    UserInfoPage.prototype.ngOnInit = function () {
    };
    UserInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-info',
            template: __webpack_require__(/*! raw-loader!./user-info.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user-info/user-info.page.html"),
            styles: [__webpack_require__(/*! ./user-info.page.scss */ "./src/app/pages/user-info/user-info.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserInfoPage);
    return UserInfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-user-info-user-info-module-es5.js.map