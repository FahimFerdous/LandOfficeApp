(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-aprovepayment-aprovepayment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/aprovepayment/aprovepayment.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/aprovepayment/aprovepayment.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/app/tabs/speakers\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Payment Approve Page</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item-group>\r\n      <ion-item-divider sticky> </ion-item-divider>\r\n\r\n      <ion-item-sliding  *ngFor=\"let user of userInfos\">\r\n        <ion-item [routerLink]=\"['/aprovepayment-details',user.key]\">\r\n          <ion-label>\r\n            <h3>{{user.malikerName}}</h3>\r\n            <p>\r\n              Due Amount: <span><b>{{user.motDabi}}</b></span>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n      \r\n        \r\n      </ion-item-sliding>\r\n    </ion-item-group>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/aprovepayment/aprovepayment.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/aprovepayment/aprovepayment.module.ts ***!
  \*************************************************************/
/*! exports provided: AprovepaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AprovepaymentPageModule", function() { return AprovepaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _aprovepayment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aprovepayment.page */ "./src/app/pages/aprovepayment/aprovepayment.page.ts");







const routes = [
    {
        path: '',
        component: _aprovepayment_page__WEBPACK_IMPORTED_MODULE_6__["AprovepaymentPage"]
    }
];
let AprovepaymentPageModule = class AprovepaymentPageModule {
};
AprovepaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_aprovepayment_page__WEBPACK_IMPORTED_MODULE_6__["AprovepaymentPage"]]
    })
], AprovepaymentPageModule);



/***/ }),

/***/ "./src/app/pages/aprovepayment/aprovepayment.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/aprovepayment/aprovepayment.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fwcm92ZXBheW1lbnQvYXByb3ZlcGF5bWVudC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/aprovepayment/aprovepayment.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/aprovepayment/aprovepayment.page.ts ***!
  \***********************************************************/
/*! exports provided: AprovepaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AprovepaymentPage", function() { return AprovepaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_infos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-infos.service */ "./src/app/services/user-infos.service.ts");



let AprovepaymentPage = class AprovepaymentPage {
    constructor(userInfoService) {
        this.userInfoService = userInfoService;
    }
    ngOnInit() {
        var x = this.userInfoService.getAllUserInfos();
        this.subscription = x.snapshotChanges().pipe().subscribe(item => {
            this.userInfos = [];
            item.forEach(element => {
                var y = element.payload.toJSON();
                if (y['approved'] == false) {
                    y["key"] = element.key;
                    this.userInfos.push(y);
                }
            });
        });
    }
};
AprovepaymentPage.ctorParameters = () => [
    { type: _services_user_infos_service__WEBPACK_IMPORTED_MODULE_2__["UserInfosService"] }
];
AprovepaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'aprovepayment',
        template: __webpack_require__(/*! raw-loader!./aprovepayment.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/aprovepayment/aprovepayment.page.html"),
        styles: [__webpack_require__(/*! ./aprovepayment.page.scss */ "./src/app/pages/aprovepayment/aprovepayment.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_infos_service__WEBPACK_IMPORTED_MODULE_2__["UserInfosService"]])
], AprovepaymentPage);



/***/ })

}]);
//# sourceMappingURL=pages-aprovepayment-aprovepayment-module-es2015.js.map