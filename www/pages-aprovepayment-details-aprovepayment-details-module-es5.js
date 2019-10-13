(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-aprovepayment-details-aprovepayment-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/aprovepayment-details/aprovepayment-details.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/aprovepayment-details/aprovepayment-details.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/app/tabs/speakers\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Approve Payment Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"outer-content\">\r\n  <ion-list>\r\n    <ion-grid fixed>\r\n      <ion-row class=\"ion-align-items-stretch\">\r\n        <ion-col size=\"12\" size-md=\"6\">\r\n          <ion-card class=\"speaker-card\">\r\n            <ion-card-content>\r\n              <ion-list>\r\n                <ion-item>\r\n                  <h3>\r\n                    মালিকের নাম :\r\n                    <span style=\"font-size:15px\"><b>{{userInfos.malikerName}}</b></span>\r\n                  </h3>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <h3>\r\n                    মোট দাবি :\r\n                    <span style=\"font-size:15px\"><b>{{userInfos.motDabi}} টাকা </b></span>\r\n                  </h3>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <h3>\r\n                    bikas no :\r\n                    <span style=\"font-size:15px\"><b>{{userInfos.bkasNumber}}  </b></span>\r\n                  </h3>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <h3>\r\n                    transaction no :\r\n                    <span style=\"font-size:15px\"><b>{{userInfos.transactionNo}}  </b></span>\r\n                  </h3>\r\n                </ion-item>\r\n\r\n                <!-- <ion-item>\r\n                  <h3>\r\n                    প্রদত্ত টাকার পরিমাণ :\r\n                    <span style=\"font-size:15px\"><b>৩৪০০ টাকা </b></span>\r\n                  </h3>\r\n                </ion-item> -->\r\n                <ion-item>\r\n                  <ion-label> প্রদত্ত টাকার পরিমাণ :</ion-label>\r\n                  <br />\r\n                  <ion-input\r\n                  [(ngModel)]=\"userInfos.prodottoTakarPoriman\"\r\n                    name=\"Name\"\r\n                    clearInput\r\n                    placeholder=\"টাকা\"\r\n                  ></ion-input>\r\n                </ion-item>\r\n              </ion-list>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-button type=\"submit\" (click)=\"approved(userInfos)\" expand=\"block\">APPROVE </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-button color=\"danger\" type=\"submit\" expand=\"block\"\r\n                    >DECLINE\r\n                  </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/aprovepayment-details/aprovepayment-details.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/aprovepayment-details/aprovepayment-details.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AprovepaymentDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AprovepaymentDetailsPageModule", function() { return AprovepaymentDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _aprovepayment_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aprovepayment-details.page */ "./src/app/pages/aprovepayment-details/aprovepayment-details.page.ts");







var routes = [
    {
        path: '',
        component: _aprovepayment_details_page__WEBPACK_IMPORTED_MODULE_6__["AprovepaymentDetailsPage"]
    }
];
var AprovepaymentDetailsPageModule = /** @class */ (function () {
    function AprovepaymentDetailsPageModule() {
    }
    AprovepaymentDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_aprovepayment_details_page__WEBPACK_IMPORTED_MODULE_6__["AprovepaymentDetailsPage"]]
        })
    ], AprovepaymentDetailsPageModule);
    return AprovepaymentDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/aprovepayment-details/aprovepayment-details.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/aprovepayment-details/aprovepayment-details.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fwcm92ZXBheW1lbnQtZGV0YWlscy9hcHJvdmVwYXltZW50LWRldGFpbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/aprovepayment-details/aprovepayment-details.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/aprovepayment-details/aprovepayment-details.page.ts ***!
  \***************************************************************************/
/*! exports provided: AprovepaymentDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AprovepaymentDetailsPage", function() { return AprovepaymentDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_infos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user-infos.service */ "./src/app/services/user-infos.service.ts");
/* harmony import */ var _model_user_inofo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/user-inofo */ "./src/app/model/user-inofo.ts");
/* harmony import */ var _submittaxform_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../submittaxform.service */ "./src/app/submittaxform.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







//import { SubmittaxformService } from '../../../../submittaxform.service';
var AprovepaymentDetailsPage = /** @class */ (function () {
    function AprovepaymentDetailsPage(route, userInfoService, submitTaxService, toastController, router) {
        this.route = route;
        this.userInfoService = userInfoService;
        this.submitTaxService = submitTaxService;
        this.toastController = toastController;
        this.router = router;
        this.userInfos = new _model_user_inofo__WEBPACK_IMPORTED_MODULE_4__["UserInfos"]();
        this.submitTaxForms = [];
    }
    AprovepaymentDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.key = this.route.snapshot.paramMap.get('key');
        console.log('key', this.key);
        var getAllSubmitTaxForm = this.submitTaxService.getAllsubmittexform();
        var getById = this.userInfoService.getByKey(this.key);
        this.subscription = getAllSubmitTaxForm.snapshotChanges().pipe().subscribe(function (item) {
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                // y["key"] = element.key;                   
                _this.submitTaxForms.push(y);
            });
            console.log('submittedTaxForm', _this.submitTaxForms);
        });
        this.subscription = getById.snapshotChanges().pipe().subscribe(function (item) {
            var y = item.payload.toJSON();
            y["key"] = item.key;
            _this.userInfos = y;
            console.log(_this.userInfos);
            if (_this.submitTaxForms.length != 0) {
                var result = _this.submitTaxForms.find(function (f) { return f.key == _this.userInfos.key; });
                console.log(result);
                if (result != undefined) {
                    _this.userInfos.bkasNumber = result.bikashnumber;
                    _this.userInfos.transactionNo = result.tnsnumber;
                    _this.userInfos.trnxEntryDate = result.entrydate;
                }
                if (result == undefined) {
                    var toast = _this.toastController.create({
                        message: 'Transaction Number does not Provide',
                        duration: 2000
                    }).then(function (toastData) {
                        toastData.present();
                    });
                }
            }
        });
    };
    AprovepaymentDetailsPage.prototype.approved = function (userInfos) {
        var _this = this;
        userInfos.approved = true;
        userInfos.bokeyaDabi = (userInfos.motDabi - userInfos.prodottoTakarPoriman);
        console.log(userInfos['key']);
        this.userInfoService.update(userInfos['key'], userInfos).then(function (t) {
            _this.router.navigate(['/aprovepayment']);
        });
    };
    AprovepaymentDetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_user_infos_service__WEBPACK_IMPORTED_MODULE_3__["UserInfosService"] },
        { type: _submittaxform_service__WEBPACK_IMPORTED_MODULE_5__["SubmittaxformService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AprovepaymentDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'aprovepayment-details',
            template: __webpack_require__(/*! raw-loader!./aprovepayment-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/aprovepayment-details/aprovepayment-details.page.html"),
            styles: [__webpack_require__(/*! ./aprovepayment-details.page.scss */ "./src/app/pages/aprovepayment-details/aprovepayment-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_user_infos_service__WEBPACK_IMPORTED_MODULE_3__["UserInfosService"],
            _submittaxform_service__WEBPACK_IMPORTED_MODULE_5__["SubmittaxformService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AprovepaymentDetailsPage);
    return AprovepaymentDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-aprovepayment-details-aprovepayment-details-module-es5.js.map