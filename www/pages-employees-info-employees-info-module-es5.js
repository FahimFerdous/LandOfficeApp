(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-employees-info-employees-info-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/employees-info/employees-info.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/employees-info/employees-info.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/app/tabs/speakers\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>কর্মকর্তা / কর্মচারীবৃন্দ</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"outer-content\"  >\r\n  <ion-list>\r\n    <ion-grid fixed>\r\n      <ion-row class=\"ion-align-items-stretch\" *ngFor=\"let empInfo of empInfos\">\r\n        <ion-col size=\"12\" size-md=\"12\">\r\n          <ion-card class=\"speaker-card\" >\r\n            <ion-card-header style=\"padding-bottom: 0px;\" >\r\n              <ion-item detail=\"false\" lines=\"none\">\r\n                <img\r\n                  style=\"height:100px; width:100px; border-radius: 50%; margin-left:25%\"\r\n                  [src]=\"empInfo.imageUrl\"\r\n                  alt=\"Speaker profile pic\"\r\n                />\r\n              </ion-item>\r\n          \r\n            </ion-card-header>\r\n\r\n            <ion-card-content  style=\"padding-top: 0px; padding-bottom: 0px;\">\r\n              <ion-list >\r\n                <ion-item>\r\n                  <h3>পদবী - <b>{{empInfo.empjoindate}}</b></h3>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <h3>নাম (বাংলা) -<b> {{empInfo.empname}}</b></h3>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <h3>নাম (ইংরেজি) - <b>{{empInfo.empbatch}}</b></h3>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <h3>মোবাইলঃ <b>{{empInfo.empmobile}}</b></h3>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <h3>অফিসের নামঃ <b>{{empInfo.officephn}}</b></h3>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <h3>ই-মেইলঃ <b>{{empInfo.empemail}}</b></h3>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>"

/***/ }),

/***/ "./src/app/pages/employees-info/employees-info.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/employees-info/employees-info.module.ts ***!
  \***************************************************************/
/*! exports provided: EmployeesInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesInfoPageModule", function() { return EmployeesInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _employees_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employees-info.page */ "./src/app/pages/employees-info/employees-info.page.ts");







var routes = [
    {
        path: '',
        component: _employees_info_page__WEBPACK_IMPORTED_MODULE_6__["EmployeesInfoPage"]
    }
];
var EmployeesInfoPageModule = /** @class */ (function () {
    function EmployeesInfoPageModule() {
    }
    EmployeesInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_employees_info_page__WEBPACK_IMPORTED_MODULE_6__["EmployeesInfoPage"]]
        })
    ], EmployeesInfoPageModule);
    return EmployeesInfoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/employees-info/employees-info.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/employees-info/employees-info.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtcGxveWVlcy1pbmZvL2VtcGxveWVlcy1pbmZvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/employees-info/employees-info.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/employees-info/employees-info.page.ts ***!
  \*************************************************************/
/*! exports provided: EmployeesInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesInfoPage", function() { return EmployeesInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_addempinfo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/addempinfo.service */ "./src/app/services/addempinfo.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var EmployeesInfoPage = /** @class */ (function () {
    function EmployeesInfoPage(Addemp) {
        this.Addemp = Addemp;
        this.empInfos = [];
    }
    EmployeesInfoPage.prototype.ngOnInit = function () {
        var _this = this;
        var empFormdata = this.Addemp.getAllAddempform();
        this.subscription = empFormdata.snapshotChanges().pipe().subscribe(function (item) {
            _this.empInfos = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y["key"] = element.key;
                _this.empInfos.push(y);
            });
            console.log(_this.empInfos);
        });
    };
    EmployeesInfoPage.ctorParameters = function () { return [
        { type: _services_addempinfo_service__WEBPACK_IMPORTED_MODULE_1__["AddempinfoService"] }
    ]; };
    EmployeesInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'employees-info',
            template: __webpack_require__(/*! raw-loader!./employees-info.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/employees-info/employees-info.page.html"),
            styles: [__webpack_require__(/*! ./employees-info.page.scss */ "./src/app/pages/employees-info/employees-info.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_addempinfo_service__WEBPACK_IMPORTED_MODULE_1__["AddempinfoService"]])
    ], EmployeesInfoPage);
    return EmployeesInfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-employees-info-employees-info-module-es5.js.map