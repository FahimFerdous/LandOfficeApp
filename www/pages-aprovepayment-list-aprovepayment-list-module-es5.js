(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-aprovepayment-list-aprovepayment-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/aprovepayment-list/aprovepayment-list.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/aprovepayment-list/aprovepayment-list.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/app/tabs/speakers\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>পেমেন্ট অনুমোদন লিস্ট</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!--  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div>\r\n          1 of 3\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div>\r\n          2 of 3 \r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div>\r\n          3 of 3\r\n        </div>\r\n      </ion-col>\r\n      <ion-col>\r\n        <div>\r\n          4 of 4\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n\r\n  <ngx-datatable\r\n    [rows]=\"userInfos\"\r\n    [columnMode]=\"'force'\"\r\n    [ngClass]=\"tableStyle\"\r\n    [rowHeight]=\"auto\"\r\n    [headerHeight]=\"50\"\r\n  >\r\n    <ngx-datatable-column name=\"malikerName\"></ngx-datatable-column>\r\n    <ngx-datatable-column name=\"approvedDate\"></ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Action\">\r\n      <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n        <ion-button size=\"small\" fill=\"outline\" (click)=\"open(row)\"\r\n          >Details</ion-button\r\n        >\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n  </ngx-datatable>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/aprovepayment-list/aprovepayment-list.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/aprovepayment-list/aprovepayment-list.module.ts ***!
  \***********************************************************************/
/*! exports provided: AprovepaymentListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AprovepaymentListPageModule", function() { return AprovepaymentListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _aprovepayment_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aprovepayment-list.page */ "./src/app/pages/aprovepayment-list/aprovepayment-list.page.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm5/swimlane-ngx-datatable.js");








var routes = [
    {
        path: '',
        component: _aprovepayment_list_page__WEBPACK_IMPORTED_MODULE_6__["AprovepaymentListPage"]
    }
];
var AprovepaymentListPageModule = /** @class */ (function () {
    function AprovepaymentListPageModule() {
    }
    AprovepaymentListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_aprovepayment_list_page__WEBPACK_IMPORTED_MODULE_6__["AprovepaymentListPage"]]
        })
    ], AprovepaymentListPageModule);
    return AprovepaymentListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/aprovepayment-list/aprovepayment-list.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/aprovepayment-list/aprovepayment-list.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fwcm92ZXBheW1lbnQtbGlzdC9hcHJvdmVwYXltZW50LWxpc3QucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/aprovepayment-list/aprovepayment-list.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/aprovepayment-list/aprovepayment-list.page.ts ***!
  \*********************************************************************/
/*! exports provided: AprovepaymentListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AprovepaymentListPage", function() { return AprovepaymentListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_infos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user-infos.service */ "./src/app/services/user-infos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AprovepaymentListPage = /** @class */ (function () {
    function AprovepaymentListPage(userInfoService, router) {
        var _this = this;
        this.userInfoService = userInfoService;
        this.router = router;
        this.userInfos = [];
        this.userInfosAfter = [];
        this.tableStyle = "bootstrap";
        var allUserInfo = this.userInfoService.getAllUserInfos();
        this.subscription = allUserInfo
            .snapshotChanges()
            .pipe()
            .subscribe(function (item) {
            _this.userInfos = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                if (y["approved"] == true) {
                    console.log(y);
                    y["key"] = element.key;
                    if (y["approvedDate"] != undefined) {
                        var dateObj = new Date(y["approvedDate"]);
                        var month = dateObj.getUTCMonth() + 1; //months from 1-12
                        var day = dateObj.getUTCDate();
                        var year = dateObj.getUTCFullYear();
                        y["approvedDate"] = day + "/" + month + "/" + year;
                    }
                    _this.userInfos.push(y);
                }
            });
            console.log("userInfos", _this.userInfos);
            // const grouped =this.groupBy(this.userInfos, pet => pet.userUniCode);
            // grouped.forEach(item=>{
            // this.userInfosAfter.push(item[0]);
            // });
            //   this.userInfosAfter.forEach(item=>{
            //     this.userInfoAfterGroup.push(item);
            // console.log('userInfosAfter',this.userInfosAfter);
            //  });
        });
    }
    AprovepaymentListPage.prototype.ngOnInit = function () { };
    //  groupBy(list, keyGetter) {
    //           const map = new Map();
    //           list.forEach((item) => {
    //               const key = keyGetter(item);
    //               const collection = map.get(key);
    //               if (!collection) {
    //                   map.set(key, [item]);
    //               } else {
    //                   collection.push(item);
    //               }
    //           });
    //           return map;
    //       }
    AprovepaymentListPage.prototype.getRowClass = function (row) { };
    AprovepaymentListPage.prototype.open = function (row) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log(row);
                this.router.navigate(["/user-payment-details", row.key]);
                return [2 /*return*/];
            });
        });
    };
    AprovepaymentListPage.ctorParameters = function () { return [
        { type: _services_user_infos_service__WEBPACK_IMPORTED_MODULE_2__["UserInfosService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AprovepaymentListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "aprovepayment-list",
            template: __webpack_require__(/*! raw-loader!./aprovepayment-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/aprovepayment-list/aprovepayment-list.page.html"),
            styles: [__webpack_require__(/*! ./aprovepayment-list.page.scss */ "./src/app/pages/aprovepayment-list/aprovepayment-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_infos_service__WEBPACK_IMPORTED_MODULE_2__["UserInfosService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AprovepaymentListPage);
    return AprovepaymentListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-aprovepayment-list-aprovepayment-list-module-es5.js.map