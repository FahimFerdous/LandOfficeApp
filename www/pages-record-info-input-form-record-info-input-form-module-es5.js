(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-record-info-input-form-record-info-input-form-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/record-info-input-form/record-info-input-form.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/record-info-input-form/record-info-input-form.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/app/tabs/speakers\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Information Input Form</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding speaker-detail\">\r\n  <div class=\"ion-text-center\">\r\n\r\n    <form novalidate>\r\n      <ion-list>\r\n\r\n        <ion-item>\r\n          <ion-label>Select pourosova</ion-label>\r\n          <ion-select #pourosovaId=\"ngModel\" [(ngModel)]=\"userInfo.pourosovaId\" name=\"pourosovaId\" value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\" required>\r\n            <ion-select-option *ngFor=\"let c of pourosova\"  [value]=\"c.key\">\r\n              {{ c.pourosovaName }}\r\n             </ion-select-option>\r\n\r\n          </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>Select Hat</ion-label>\r\n          <ion-select #hatId=\"ngModel\" [(ngModel)]=\"userInfo.hatId\" name=\"hatId\" value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\" required>\r\n            <ion-select-option *ngFor=\"let c of hats\"  [value]=\"c.key\">\r\n              {{ c.hatName }}\r\n             </ion-select-option>\r\n\r\n          </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>Select Licence No</ion-label>\r\n          <ion-select #licenceNo=\"ngModel\" [(ngModel)]=\"userInfo.licenceNo\" name=\"licenceNo\" value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\" required>\r\n            <ion-select-option *ngFor=\"let c of licences\"  [value]=\"c.key\">\r\n              {{ c.licenceNo }}\r\n             </ion-select-option>\r\n\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label  position=\"floating\">মালিকের নাম</ion-label>\r\n          <ion-input #malikerName=\"ngModel\" [(ngModel)]=\"userInfo.malikerName\" name=\"malikerName\" type=\"text\" name=\"title\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">ইউনিয়ন</ion-label>\r\n          <ion-input #union=\"ngModel\" [(ngModel)]=\"userInfo.union\" name=\"union\" type=\"text\" name=\"title\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">মৌজা</ion-label>\r\n          <ion-input #mouja=\"ngModel\" [(ngModel)]=\"userInfo.mouja\" name=\"mouja\" type=\"text\" name=\"title\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">করের ধরন</ion-label>\r\n          <ion-input #korerDhoron=\"ngModel\" [(ngModel)]=\"userInfo.korerDhoron\" name=\"korerDhoron\" type=\"text\" name=\"title\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">হোল্ডিং নং</ion-label>\r\n          <ion-input #holdingNo=\"ngModel\" [(ngModel)]=\"userInfo.holdingNo\" name=\"holdingNo\" type=\"text\" name=\"title\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">জমির পরিমাণ</ion-label>\r\n          <ion-input #jomirPoriman=\"ngModel\" [(ngModel)]=\"userInfo.jomirPoriman\" name=\"jomirPoriman\" type=\"text\" name=\"title\" required></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">সর্বশেষ খাজনা পরিশোধের বছর</ion-label>\r\n          <ion-input #sorbosesKhajnaPorisodherBosor=\"ngModel\" [(ngModel)]=\"userInfo.sorbosesKhajnaPorisodherBosor\" name=\"sorbosesKhajnaPorisodherBosor\" type=\"text\" name=\"title\" required></ion-input>\r\n        </ion-item>\r\n        <!-- <ion-item>\r\n          <ion-label position=\"floating\">বকেয়া বছর</ion-label>\r\n          <ion-input #bokeyaBosor=\"ngModel\" [(ngModel)]=\"userInfo.bokeyaBosor\" name=\"bokeyaBosor\" type=\"text\" name=\"title\" required></ion-input>\r\n        </ion-item> -->\r\n        <ion-item>\r\n          <ion-label position=\"floating\">বকেয়া দাবি </ion-label>\r\n          <ion-input #bokeyaDabi=\"ngModel\" [(ngModel)]=\"userInfo.bokeyaDabi\" name=\"bokeyaDabi\" type=\"text\" name=\"title\" required></ion-input>\r\n        </ion-item>\r\n        <!-- <ion-item>\r\n          <ion-label position=\"floating\">বকেয়া দাবির সুদ</ion-label>\r\n          <ion-input #bokeyaDabirSud=\"ngModel\" [(ngModel)]=\"userInfo.bokeyaDabirSud\" name=\"bokeyaDabirSud\" type=\"text\" name=\"title\" required></ion-input>\r\n        </ion-item> -->\r\n        <!-- <ion-item>\r\n          <ion-label position=\"floating\">হাল দাবি </ion-label>\r\n          <ion-input #halDabi=\"ngModel\" [(ngModel)]=\"userInfo.halDabi\" name=\"halDabi\" type=\"text\" name=\"title\" required></ion-input>\r\n        </ion-item> -->\r\n        <!-- <ion-item>\r\n          <ion-label position=\"floating\">মোট দাবি </ion-label>\r\n          <ion-input #motDabi=\"ngModel\" [(ngModel)]=\"userInfo.motDabi\" name=\"motDabi\" type=\"text\" name=\"title\" required></ion-input>\r\n        </ion-item> -->\r\n        <ion-item>\r\n          <ion-label position=\"floating\">মন্তব্য </ion-label>\r\n          <ion-input #montobbo=\"ngModel\" [(ngModel)]=\"userInfo.montobbo\" name=\"montobbo\" type=\"text\" name=\"title\"></ion-input>\r\n        </ion-item>\r\n\r\n\r\n\r\n\r\n      </ion-list>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button (click)=\"save(userInfo)\" type=\"submit\" expand=\"block\">Submit</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/record-info-input-form/record-info-input-form.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/record-info-input-form/record-info-input-form.module.ts ***!
  \*******************************************************************************/
/*! exports provided: RecordInfoInputFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordInfoInputFormPageModule", function() { return RecordInfoInputFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _record_info_input_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./record-info-input-form.page */ "./src/app/pages/record-info-input-form/record-info-input-form.page.ts");







var routes = [
    {
        path: '',
        component: _record_info_input_form_page__WEBPACK_IMPORTED_MODULE_6__["RecordInfoInputFormPage"]
    }
];
var RecordInfoInputFormPageModule = /** @class */ (function () {
    function RecordInfoInputFormPageModule() {
    }
    RecordInfoInputFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_record_info_input_form_page__WEBPACK_IMPORTED_MODULE_6__["RecordInfoInputFormPage"]]
        })
    ], RecordInfoInputFormPageModule);
    return RecordInfoInputFormPageModule;
}());



/***/ }),

/***/ "./src/app/pages/record-info-input-form/record-info-input-form.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/record-info-input-form/record-info-input-form.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY29yZC1pbmZvLWlucHV0LWZvcm0vcmVjb3JkLWluZm8taW5wdXQtZm9ybS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/record-info-input-form/record-info-input-form.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/record-info-input-form/record-info-input-form.page.ts ***!
  \*****************************************************************************/
/*! exports provided: RecordInfoInputFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordInfoInputFormPage", function() { return RecordInfoInputFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_user_infos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/user-infos.service */ "./src/app/services/user-infos.service.ts");
/* harmony import */ var _model_user_inofo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../model/user-inofo */ "./src/app/model/user-inofo.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pourosova_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/pourosova.service */ "./src/app/services/pourosova.service.ts");
/* harmony import */ var _services_hat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/hat.service */ "./src/app/services/hat.service.ts");
/* harmony import */ var _services_licence_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/licence.service */ "./src/app/services/licence.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _model_sudCalculation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/sudCalculation */ "./src/app/model/sudCalculation.ts");










var RecordInfoInputFormPage = /** @class */ (function () {
    function RecordInfoInputFormPage(pourosovaServices, hatService, licenceServices, toastController, userInfoService, auth) {
        this.pourosovaServices = pourosovaServices;
        this.hatService = hatService;
        this.licenceServices = licenceServices;
        this.toastController = toastController;
        this.userInfoService = userInfoService;
        this.auth = auth;
        this.userInfo = new _model_user_inofo__WEBPACK_IMPORTED_MODULE_2__["UserInfos"]();
        this.sudCalculation = new _model_sudCalculation__WEBPACK_IMPORTED_MODULE_9__["SudCalculation"]();
    }
    RecordInfoInputFormPage.prototype.ngOnInit = function () {
        var _this = this;
        var allPourosova = this.pourosovaServices.getAllPourosova();
        var allHat = this.hatService.getAllHat();
        var allLicence = this.licenceServices.getAllLicense();
        this.subscription = allPourosova
            .snapshotChanges()
            .pipe()
            .subscribe(function (item) {
            _this.pourosova = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["key"] = element.key;
                _this.pourosova.push(y);
            });
        });
        this.subscription = allHat
            .snapshotChanges()
            .pipe()
            .subscribe(function (item) {
            _this.hats = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["key"] = element.key;
                _this.hats.push(y);
            });
        });
        this.subscription = allLicence
            .snapshotChanges()
            .pipe()
            .subscribe(function (item) {
            _this.licences = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["key"] = element.key;
                _this.licences.push(y);
            });
        });
        var x = this.userInfoService.getAllUserInfos();
        this.subscription = x
            .snapshotChanges()
            .pipe()
            .subscribe(function (item) {
            _this.userCount = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                if (!y["key"]) {
                    y["key"] = element.key;
                    _this.userCount.push(y);
                }
            });
            console.log("userInfo", _this.userCount);
        });
    };
    RecordInfoInputFormPage.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    RecordInfoInputFormPage.prototype.converBanglaNumberToEnglish = function (input) {
        var numbers = {
            "০": 0,
            "১": 1,
            "২": 2,
            "৩": 3,
            "৪": 4,
            "৫": 5,
            "৬": 6,
            "৭": 7,
            "৮": 8,
            "৯": 9
        };
        var output = [];
        for (var i = 0; i < input.length; ++i) {
            if (numbers.hasOwnProperty(input[i])) {
                output.push(numbers[input[i]]);
            }
            else {
                output.push(input[i]);
            }
        }
        return output.join("");
    };
    RecordInfoInputFormPage.prototype.save = function (userInfo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.userCount.find(function (l) { return l.licenceNo == userInfo.licenceNo; })) return [3 /*break*/, 2];
                        userInfo.userUniCode = "vO00" + this.userCount.length;
                        userInfo.entryDate = new Date().getTime();
                        userInfo.approved = true;
                        userInfo.jomirPoriman = this.converBanglaNumberToEnglish(userInfo.jomirPoriman);
                        userInfo.bokeyaDabi = this.converBanglaNumberToEnglish(userInfo.bokeyaDabi);
                        userInfo.sorbosesKhajnaPorisodherBosor = this.converBanglaNumberToEnglish(userInfo.sorbosesKhajnaPorisodherBosor);
                        userInfo = this.sudCalculation.SudCalculationActionHandaler(userInfo);
                        return [4 /*yield*/, this.userInfoService.save(userInfo).then(function (t) {
                                var toast = _this.toastController
                                    .create({
                                    message: "Saved Succesfully",
                                    duration: 2000
                                })
                                    .then(function (toastData) {
                                    toastData.present();
                                });
                            })];
                    case 1:
                        _a.sent();
                        this.userInfo = new _model_user_inofo__WEBPACK_IMPORTED_MODULE_2__["UserInfos"]();
                        return [3 /*break*/, 3];
                    case 2:
                        toast = this.toastController
                            .create({
                            message: "This Licence Number Already Assign to Another User",
                            duration: 2000
                        })
                            .then(function (toastData) {
                            toastData.present();
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RecordInfoInputFormPage.ctorParameters = function () { return [
        { type: _services_pourosova_service__WEBPACK_IMPORTED_MODULE_4__["PourosovaService"] },
        { type: _services_hat_service__WEBPACK_IMPORTED_MODULE_5__["HatService"] },
        { type: _services_licence_service__WEBPACK_IMPORTED_MODULE_6__["LicenceService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
        { type: _services_user_infos_service__WEBPACK_IMPORTED_MODULE_1__["UserInfosService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
    ]; };
    RecordInfoInputFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "record-info-input-form",
            template: __webpack_require__(/*! raw-loader!./record-info-input-form.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/record-info-input-form/record-info-input-form.page.html"),
            styles: [__webpack_require__(/*! ./record-info-input-form.page.scss */ "./src/app/pages/record-info-input-form/record-info-input-form.page.scss")]
        })
        // create user info page
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_pourosova_service__WEBPACK_IMPORTED_MODULE_4__["PourosovaService"],
            _services_hat_service__WEBPACK_IMPORTED_MODULE_5__["HatService"],
            _services_licence_service__WEBPACK_IMPORTED_MODULE_6__["LicenceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _services_user_infos_service__WEBPACK_IMPORTED_MODULE_1__["UserInfosService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], RecordInfoInputFormPage);
    return RecordInfoInputFormPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-record-info-input-form-record-info-input-form-module-es5.js.map