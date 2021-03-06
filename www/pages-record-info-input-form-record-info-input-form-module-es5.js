(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-record-info-input-form-record-info-input-form-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/record-info-input-form/record-info-input-form.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/record-info-input-form/record-info-input-form.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/app/tabs/speakers\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Information Input Form</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding speaker-detail\">\r\n  <div class=\"ion-text-center\">\r\n    <form novalidate>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-label>সিলেক্ট ইউনিয়ন/পৌরসভা</ion-label>\r\n          <ion-select\r\n            #pourosovaId=\"ngModel\"\r\n            [(ngModel)]=\"userInfo.pourosovaId\"\r\n            name=\"pourosovaId\"\r\n            (ionChange)=\"pourosovaDDLChange(userInfo.pourosovaId)\"\r\n            value=\"brown\"\r\n            okText=\"Okay\"\r\n            cancelText=\"Dismiss\"\r\n            required\r\n          >\r\n            <ion-select-option *ngFor=\"let c of pourosova\" [value]=\"c.key\">\r\n              {{ c.pourosovaName }}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label> সিলেক্ট হাঁট</ion-label>\r\n          <ion-select\r\n            #hatId=\"ngModel\"\r\n            [(ngModel)]=\"userInfo.hatId\"\r\n            name=\"hatId\"\r\n            (ionChange)=\"hatDDLChange(userInfo.hatId)\"\r\n            value=\"brown\"\r\n            okText=\"Okay\"\r\n            cancelText=\"Dismiss\"\r\n            required\r\n          >\r\n            <ion-select-option *ngFor=\"let c of searchHats\" [value]=\"c.key\">\r\n              {{ c.hatName }}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>সিলেক্ট লাইসেন্স নং</ion-label>\r\n          <ion-select\r\n            #licenceNo=\"ngModel\"\r\n            [(ngModel)]=\"userInfo.licenceNo\"\r\n            name=\"licenceNo\"\r\n            value=\"brown\"\r\n            okText=\"Okay\"\r\n            cancelText=\"Dismiss\"\r\n            required\r\n          >\r\n            <ion-select-option *ngFor=\"let c of searchLicences\" [value]=\"c.key\">\r\n              {{ c.licenceNo }}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">মালিকের নাম</ion-label>\r\n          <ion-input\r\n            #malikerName=\"ngModel\"\r\n            [(ngModel)]=\"userInfo.malikerName\"\r\n            name=\"malikerName\"\r\n            type=\"text\"\r\n            name=\"title\"\r\n            required\r\n          ></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">পিতার নাম </ion-label>\r\n          <ion-input\r\n            #montobbo=\"ngModel\"\r\n            [(ngModel)]=\"userInfo.montobbo\"\r\n            name=\"montobbo\"\r\n            type=\"text\"\r\n            name=\"title\"\r\n          ></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">সাং</ion-label>\r\n          <ion-input\r\n            #union=\"ngModel\"\r\n            [(ngModel)]=\"userInfo.union\"\r\n            name=\"union\"\r\n            type=\"text\"\r\n            name=\"title\"\r\n            required\r\n          ></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">মৌজা</ion-label>\r\n          <ion-input\r\n            #mouja=\"ngModel\"\r\n            [(ngModel)]=\"userInfo.mouja\"\r\n            name=\"mouja\"\r\n            type=\"text\"\r\n            name=\"title\"\r\n            required\r\n          ></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">দাগ নং</ion-label>\r\n          <ion-input\r\n            #korerDhoron=\"ngModel\"\r\n            [(ngModel)]=\"userInfo.korerDhoron\"\r\n            name=\"korerDhoron\"\r\n            type=\"text\"\r\n            name=\"title\"\r\n            required\r\n          ></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">পজিশন নং</ion-label>\r\n          <ion-input\r\n            #holdingNo=\"ngModel\"\r\n            [(ngModel)]=\"userInfo.holdingNo\"\r\n            name=\"holdingNo\"\r\n            type=\"text\"\r\n            name=\"title\"\r\n            required\r\n          ></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">জমির পরিমাণ</ion-label>\r\n          <ion-input\r\n            #jomirPoriman=\"ngModel\"\r\n            [(ngModel)]=\"userInfo.jomirPoriman\"\r\n            name=\"jomirPoriman\"\r\n            type=\"text\"\r\n            name=\"title\"\r\n            required\r\n          ></ion-input>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">সর্বশেষ খাজনা পরিশোধের বছর</ion-label>\r\n          <ion-input\r\n            #sorbosesKhajnaPorisodherBosor=\"ngModel\"\r\n            [(ngModel)]=\"userInfo.sorbosesKhajnaPorisodherBosor\"\r\n            name=\"sorbosesKhajnaPorisodherBosor\"\r\n            type=\"text\"\r\n            name=\"title\"\r\n            required\r\n          ></ion-input>\r\n        </ion-item>\r\n        <!-- <ion-item>\r\n          <ion-label position=\"floating\">বকেয়া বছর</ion-label>\r\n          <ion-input #bokeyaBosor=\"ngModel\" [(ngModel)]=\"userInfo.bokeyaBosor\" name=\"bokeyaBosor\" type=\"text\" name=\"title\" required></ion-input>\r\n        </ion-item> -->\r\n        <ion-item>\r\n          <ion-label position=\"floating\">বকেয়া দাবি </ion-label>\r\n          <ion-input\r\n            #bokeyaDabi=\"ngModel\"\r\n            [(ngModel)]=\"userInfo.bokeyaDabi\"\r\n            name=\"bokeyaDabi\"\r\n            type=\"text\"\r\n            name=\"title\"\r\n            required\r\n          ></ion-input>\r\n        </ion-item>\r\n        <!-- <ion-item>\r\n          <ion-label position=\"floating\">বকেয়া দাবির সুদ</ion-label>\r\n          <ion-input #bokeyaDabirSud=\"ngModel\" [(ngModel)]=\"userInfo.bokeyaDabirSud\" name=\"bokeyaDabirSud\" type=\"text\" name=\"title\" required></ion-input>\r\n        </ion-item> -->\r\n        <!-- <ion-item>\r\n          <ion-label position=\"floating\">হাল দাবি </ion-label>\r\n          <ion-input #halDabi=\"ngModel\" [(ngModel)]=\"userInfo.halDabi\" name=\"halDabi\" type=\"text\" name=\"title\" required></ion-input>\r\n        </ion-item> -->\r\n        <!-- <ion-item>\r\n          <ion-label position=\"floating\">মোট দাবি </ion-label>\r\n          <ion-input #motDabi=\"ngModel\" [(ngModel)]=\"userInfo.motDabi\" name=\"motDabi\" type=\"text\" name=\"title\" required></ion-input>\r\n        </ion-item> -->\r\n        <ion-item>\r\n          <ion-label position=\"floating\">লাইসেন্স ফি </ion-label>\r\n          <ion-input\r\n            #licenceFee=\"ngModel\"\r\n            [(ngModel)]=\"userInfo.licenceFee\"\r\n            name=\"licenceFee\"\r\n            type=\"text\"\r\n            name=\"title\"\r\n            required\r\n          ></ion-input>\r\n        </ion-item>\r\n       \r\n        \r\n      </ion-list>\r\n\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button (click)=\"save(userInfo)\" type=\"submit\" expand=\"block\"\r\n            >Submit</ion-button\r\n          >\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n"

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
                        userInfo.licenceFee = parseInt(this.converBanglaNumberToEnglish(userInfo.licenceFee));
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
    RecordInfoInputFormPage.prototype.pourosovaDDLChange = function (pourosovaId) {
        this.searchHats = [];
        this.searchLicences = [];
        var filterHats = (pourosovaId) ?
            this.hats.filter(function (p) { return p.pourosovaId == pourosovaId; }) :
            this.hats;
        this.searchHats = filterHats;
    };
    RecordInfoInputFormPage.prototype.hatDDLChange = function (hatId) {
        this.searchLicences = [];
        var filterLicence = (hatId) ?
            this.licences.filter(function (p) { return p.hatId == hatId; }) :
            this.licences;
        this.searchLicences = filterLicence;
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