(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-payment-details-user-payment-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user-payment-details/user-payment-details.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user-payment-details/user-payment-details.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/app/tabs/speakers\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>ব্যাক্তিগত হিসাবের লিস্ট</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"outer-content\">\r\n  <ion-list>\r\n    <ion-grid fixed>\r\n      <ion-row class=\"ion-align-items-stretch\">\r\n        <ion-col size=\"12\" size-md=\"6\">\r\n          <ion-card class=\"speaker-card\">\r\n            <ion-card-content>\r\n              <ion-list> \r\n                <ion-item>\r\n                  <h4>\r\n                    মালিকের নাম :\r\n                    <span style=\"font-size:15px\"><b>{{userInfo.malikerName}}</b></span>\r\n                  </h4>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <h4>\r\n                    মৌজা  :\r\n                    <span style=\"font-size:15px\"><b>{{userInfo.mouja}}  </b></span>\r\n                  </h4>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <h4>\r\n                    দাগ নং :\r\n                    <span style=\"font-size:15px\"><b>{{userInfo.korerDhoron}} </b></span>\r\n                  </h4>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <h4>\r\n                    জমির পরিমাণ :\r\n                    <span style=\"font-size:15px\"><b>{{userInfo.jomirPoriman}}  </b></span>\r\n                  </h4>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <h4>\r\n                    মোট দাবি :\r\n                    <span style=\"font-size:15px\"><b>{{userInfo.motDabi}} টাকা </b></span>\r\n                  </h4>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <h4>\r\n                    বকেয়া দাবি :\r\n                    <span style=\"font-size:15px\"><b>{{userInfo.motDabi}} টাকা </b></span>\r\n                  </h4>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <h4>\r\n                    পরিশোধ কৃত টাকার পরিমান :\r\n                    <span style=\"font-size:15px\"><b>{{userInfo.motDabi}} টাকা </b></span>\r\n                  </h4>\r\n                </ion-item>\r\n\r\n                \r\n\r\n              </ion-list>\r\n              <!-- <ion-row>\r\n                <ion-col>\r\n                  <ion-button type=\"submit\" (click)=\"approved(userInfos)\" expand=\"block\">APPROVE </ion-button>\r\n                </ion-col>\r\n              </ion-row> -->\r\n              <!-- <ion-row>\r\n                <ion-col>\r\n                  <ion-button color=\"danger\" type=\"submit\" expand=\"block\"\r\n                    >DECLINE\r\n                  </ion-button>\r\n                </ion-col>\r\n              </ion-row> -->\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/user-payment-details/user-payment-details.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/user-payment-details/user-payment-details.module.ts ***!
  \***************************************************************************/
/*! exports provided: UserPaymentDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPaymentDetailsPageModule", function() { return UserPaymentDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_payment_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-payment-details.page */ "./src/app/pages/user-payment-details/user-payment-details.page.ts");







var routes = [
    {
        path: '',
        component: _user_payment_details_page__WEBPACK_IMPORTED_MODULE_6__["UserPaymentDetailsPage"]
    }
];
var UserPaymentDetailsPageModule = /** @class */ (function () {
    function UserPaymentDetailsPageModule() {
    }
    UserPaymentDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_payment_details_page__WEBPACK_IMPORTED_MODULE_6__["UserPaymentDetailsPage"]]
        })
    ], UserPaymentDetailsPageModule);
    return UserPaymentDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/user-payment-details/user-payment-details.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/user-payment-details/user-payment-details.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItcGF5bWVudC1kZXRhaWxzL3VzZXItcGF5bWVudC1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/user-payment-details/user-payment-details.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/user-payment-details/user-payment-details.page.ts ***!
  \*************************************************************************/
/*! exports provided: UserPaymentDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPaymentDetailsPage", function() { return UserPaymentDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_infos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user-infos.service */ "./src/app/services/user-infos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_user_inofo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/user-inofo */ "./src/app/model/user-inofo.ts");





var UserPaymentDetailsPage = /** @class */ (function () {
    function UserPaymentDetailsPage(userInfoService, route) {
        this.userInfoService = userInfoService;
        this.route = route;
        this.userInfo = new _model_user_inofo__WEBPACK_IMPORTED_MODULE_4__["UserInfos"]();
    }
    UserPaymentDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.key = this.route.snapshot.paramMap.get('key');
        console.log('key', this.key);
        var UserInfoById = this.userInfoService.getByKey(this.key);
        this.subsription = UserInfoById.snapshotChanges().pipe().subscribe(function (item) {
            var y = item.payload.toJSON();
            y["key"] = item.key;
            _this.userInfo = y;
            console.log('userInfos', _this.userInfo);
        });
    };
    UserPaymentDetailsPage.ctorParameters = function () { return [
        { type: _services_user_infos_service__WEBPACK_IMPORTED_MODULE_2__["UserInfosService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    UserPaymentDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-payment-details',
            template: __webpack_require__(/*! raw-loader!./user-payment-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user-payment-details/user-payment-details.page.html"),
            styles: [__webpack_require__(/*! ./user-payment-details.page.scss */ "./src/app/pages/user-payment-details/user-payment-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_infos_service__WEBPACK_IMPORTED_MODULE_2__["UserInfosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserPaymentDetailsPage);
    return UserPaymentDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-user-payment-details-user-payment-details-module-es5.js.map