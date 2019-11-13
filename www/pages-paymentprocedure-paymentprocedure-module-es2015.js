(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-paymentprocedure-paymentprocedure-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/paymentprocedure/paymentprocedure.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/paymentprocedure/paymentprocedure.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/app/tabs/speakers\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>পেমেন্ট মাধ্যমঃ বিকাশ </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"outer-content\">\r\n  <ion-list>\r\n    <ion-grid fixed>\r\n      <ion-row class=\"ion-align-items-stretch\">\r\n        <ion-col size=\"12\" size-md=\"6\">\r\n          <ion-card class=\"speaker-card\">\r\n\r\n\r\n            <ion-card-content>\r\n              <ion-list>\r\n                <ion-item>\r\n                  <h3>ডায়াল করুন : <span style=\"font-size:15px\"><b>*247#</b></span></h3>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <h3>সিলেক্ট করুন : <span style=\"font-size:15px\"><b>1. Send Money </b></span></h3>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <h3>বিকাশ নাম্বার দিন : <span style=\"font-size:15px\"><b>01705430525</b></span></h3>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <h3>টাকার পরিমাণ লিখুন : <span style=\"font-size:15px\"><b>{{Motdabi}}</b></span></h3>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <h3>রেফারেন্স নাম্বার দিন : <span style=\"font-size:15px\"><b>1</b></span></h3>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <h3>বিকাশ অ্যাকাউন্ট এর পাসওয়ার্ড দিন: <span style=\"font-size:15px\"><b>(Your Password)</b></span></h3>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <h3>সেন্ড বাটন এ ক্লিক করুন: <span style=\"font-size:15px\"><b>Send</b></span></h3>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <h3><b>ট্রানজ্যাকশন নাম্বার টি এবং যে নাম্বার দিয়ে বিকাশ করেছেন তা সংরক্ষণ করুন</b></h3>\r\n                </ion-item>\r\n\r\n              </ion-list>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-button  type=\"submit\" (click)=\"typeofGettingRecit()\" expand=\"block\">পরবর্তী ধাপ</ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-card-content>\r\n\r\n\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/paymentprocedure/paymentprocedure.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/paymentprocedure/paymentprocedure.module.ts ***!
  \*******************************************************************/
/*! exports provided: PaymentprocedurePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentprocedurePageModule", function() { return PaymentprocedurePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _paymentprocedure_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paymentprocedure.page */ "./src/app/pages/paymentprocedure/paymentprocedure.page.ts");







const routes = [
    {
        path: '',
        component: _paymentprocedure_page__WEBPACK_IMPORTED_MODULE_6__["PaymentprocedurePage"]
    }
];
let PaymentprocedurePageModule = class PaymentprocedurePageModule {
};
PaymentprocedurePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_paymentprocedure_page__WEBPACK_IMPORTED_MODULE_6__["PaymentprocedurePage"]]
    })
], PaymentprocedurePageModule);



/***/ }),

/***/ "./src/app/pages/paymentprocedure/paymentprocedure.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/paymentprocedure/paymentprocedure.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnRwcm9jZWR1cmUvcGF5bWVudHByb2NlZHVyZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/paymentprocedure/paymentprocedure.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/paymentprocedure/paymentprocedure.page.ts ***!
  \*****************************************************************/
/*! exports provided: PaymentprocedurePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentprocedurePage", function() { return PaymentprocedurePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _submittaxform_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../submittaxform.service */ "./src/app/submittaxform.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _services_user_infos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user-infos.service */ "./src/app/services/user-infos.service.ts");
/* harmony import */ var _model_sudCalculation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/sudCalculation */ "./src/app/model/sudCalculation.ts");








let PaymentprocedurePage = class PaymentprocedurePage {
    constructor(route, submittaxformService, userInfoService, authServic, afAuth, router) {
        this.route = route;
        this.submittaxformService = submittaxformService;
        this.userInfoService = userInfoService;
        this.authServic = authServic;
        this.afAuth = afAuth;
        this.router = router;
        this.userInfo = [];
        this.sudCalculation = new _model_sudCalculation__WEBPACK_IMPORTED_MODULE_7__["SudCalculation"]();
    }
    ngOnInit() {
        this.key = this.route.snapshot.paramMap.get("key");
        this.Motdabi = this.route.snapshot.paramMap.get("motDabi");
        if (this.key != "") {
            this.userInfoService
                .getByKey(this.key)
                .snapshotChanges()
                .pipe()
                .subscribe(d => {
                var x = d.payload.toJSON();
                x["key"] = d.key;
                this.userInfo.push(x);
            });
        }
    }
    typeofGettingRecit() {
        let gettingReciType = {
            paymentTypeName: "",
            userUniCode: "",
            entryDate: 0
        };
        this.id = this.route.snapshot.paramMap.get("id");
        let userUniCode = this.route.snapshot.paramMap.get("userUniCode");
        if (this.id == "1") {
            gettingReciType.paymentTypeName = "ইমেইল";
        }
        if (this.id == "2") {
            gettingReciType.paymentTypeName = "ডাকযোগে";
        }
        if (this.id == "3") {
            gettingReciType.paymentTypeName = "উপজেলা ভূমি অফিস হতে";
        }
        if (this.key != "") {
            let obj = this.userInfo.find(f => f.key == this.key);
            obj = this.sudCalculation.SudCalculationActionHandaler(obj);
            obj.entryDate = new Date().getTime();
            obj.approved = false;
            obj.prodottoTakarPoriman = 0;
            var currentDateObj = new Date();
            var currentyearInEnglish = currentDateObj.getUTCFullYear();
            let currentYearInBangla = currentyearInEnglish - 593;
            obj.sorbosesKhajnaPorisodherBosor = currentYearInBangla.toString();
            console.log("obj", obj);
            gettingReciType.userUniCode = userUniCode;
            gettingReciType.entryDate = new Date().getTime();
            this.submittaxformService
                .saveGettingRecitType(gettingReciType)
                .then(success => {
                //console.log(success.key);
            });
            this.userInfoService.save(obj).then(t => {
                this.router.navigate(["/submittaxform/", t.key]);
                console.log(t.key);
            });
        }
    }
};
PaymentprocedurePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _submittaxform_service__WEBPACK_IMPORTED_MODULE_3__["SubmittaxformService"] },
    { type: _services_user_infos_service__WEBPACK_IMPORTED_MODULE_6__["UserInfosService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PaymentprocedurePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "paymentprocedure",
        template: __webpack_require__(/*! raw-loader!./paymentprocedure.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/paymentprocedure/paymentprocedure.page.html"),
        styles: [__webpack_require__(/*! ./paymentprocedure.page.scss */ "./src/app/pages/paymentprocedure/paymentprocedure.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _submittaxform_service__WEBPACK_IMPORTED_MODULE_3__["SubmittaxformService"],
        _services_user_infos_service__WEBPACK_IMPORTED_MODULE_6__["UserInfosService"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], PaymentprocedurePage);



/***/ })

}]);
//# sourceMappingURL=pages-paymentprocedure-paymentprocedure-module-es2015.js.map