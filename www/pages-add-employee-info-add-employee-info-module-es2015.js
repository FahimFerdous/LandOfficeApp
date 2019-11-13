(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-employee-info-add-employee-info-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/add-employee-info/add-employee-info.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/add-employee-info/add-employee-info.page.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/app/tabs/speakers\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>ADD Employee Info</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding speaker-detail\">\r\n  <div class=\"ion-text-center\">\r\n    <form nonvalidate>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Employee Name</ion-label>\r\n          <ion-input #empemail=\"ngModel\" [(ngModel)]=\"Addemp.empname\" name=\"empname\" type=\"text\" required></ion-input>\r\n          <!-- <ion-input #union=\"ngModel\" [(ngModel)]=\"userInfo.union\" name=\"union\" type=\"text\" name=\"title\" required></ion-input> -->\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Email</ion-label>\r\n          <ion-input  [(ngModel)]=\"Addemp.empemail\"  name=\"empemail\" type=\"email\" required></ion-input>\r\n          <!-- <ion-input #union=\"ngModel\" [(ngModel)]=\"userInfo.union\" name=\"union\" type=\"text\" name=\"title\" required></ion-input> -->\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Mobile</ion-label>\r\n          <ion-input  [(ngModel)]=\"Addemp.empmobile\"  name=\"empmobile\" type=\"text\" required></ion-input>\r\n          <!-- <ion-input #union=\"ngModel\" [(ngModel)]=\"userInfo.union\" name=\"union\" type=\"text\" name=\"title\" required></ion-input> -->\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Office Phone</ion-label>\r\n          <ion-input #empofficephn=\"ngModel\" [(ngModel)]=\"Addemp.officephn\" name=\"officePhone\" type=\"text\" required></ion-input>\r\n          <!-- <ion-input #union=\"ngModel\" [(ngModel)]=\"userInfo.union\" name=\"union\" type=\"text\" name=\"title\" required></ion-input> -->\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">\r\n            Joining Date of Present Office</ion-label\r\n          >\r\n          <ion-input #empempjoindate=\"ngModel\" [(ngModel)]=\"Addemp.empjoindate\" name=\"officePhone\" name=\"joiningDtae\" type=\"text\" required></ion-input>\r\n          <!-- <ion-input #union=\"ngModel\" [(ngModel)]=\"userInfo.union\" name=\"union\" type=\"text\" name=\"title\" required></ion-input> -->\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Batch</ion-label>\r\n          <ion-input #empbatch=\"ngModel\" [(ngModel)]=\"Addemp.empbatch\" name=\"batch\" type=\"text\"></ion-input>\r\n          <!-- <ion-input #union=\"ngModel\" [(ngModel)]=\"userInfo.union\" name=\"union\" type=\"text\" name=\"title\" required></ion-input> -->\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Fax</ion-label>\r\n          <ion-input #empfax=\"ngModel\" [(ngModel)]=\"Addemp.empfax\" name=\"fax\" type=\"text\"></ion-input>\r\n          <!-- <ion-input #union=\"ngModel\" [(ngModel)]=\"userInfo.union\" name=\"union\" type=\"text\" name=\"title\" required></ion-input> -->\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Image</ion-label>\r\n          <ion-input  (change)=\"uploadFile($event.target.files)\" type=\"file\"></ion-input>\r\n          <!-- <ion-input #union=\"ngModel\" [(ngModel)]=\"userInfo.union\" name=\"union\" type=\"text\" name=\"title\" required></ion-input> -->\r\n        </ion-item>\r\n      </ion-list>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button type=\"submit\"  (click)=\"save(Addemp)\" expand=\"block\">Submit</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/model/AddEmploye.ts":
/*!*************************************!*\
  !*** ./src/app/model/AddEmploye.ts ***!
  \*************************************/
/*! exports provided: Addemp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addemp", function() { return Addemp; });
class Addemp {
}


/***/ }),

/***/ "./src/app/pages/add-employee-info/add-employee-info.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/add-employee-info/add-employee-info.module.ts ***!
  \*********************************************************************/
/*! exports provided: AddEmployeeInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeeInfoPageModule", function() { return AddEmployeeInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_employee_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-employee-info.page */ "./src/app/pages/add-employee-info/add-employee-info.page.ts");







const routes = [
    {
        path: '',
        component: _add_employee_info_page__WEBPACK_IMPORTED_MODULE_6__["AddEmployeeInfoPage"]
    }
];
let AddEmployeeInfoPageModule = class AddEmployeeInfoPageModule {
};
AddEmployeeInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        declarations: [_add_employee_info_page__WEBPACK_IMPORTED_MODULE_6__["AddEmployeeInfoPage"]]
    })
], AddEmployeeInfoPageModule);



/***/ }),

/***/ "./src/app/pages/add-employee-info/add-employee-info.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/add-employee-info/add-employee-info.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1lbXBsb3llZS1pbmZvL2FkZC1lbXBsb3llZS1pbmZvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/add-employee-info/add-employee-info.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/add-employee-info/add-employee-info.page.ts ***!
  \*******************************************************************/
/*! exports provided: AddEmployeeInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeeInfoPage", function() { return AddEmployeeInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_addempinfo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/addempinfo.service */ "./src/app/services/addempinfo.service.ts");
/* harmony import */ var _model_AddEmploye__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../model/AddEmploye */ "./src/app/model/AddEmploye.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let AddEmployeeInfoPage = class AddEmployeeInfoPage {
    constructor(Addempinfo, toastController, afAuth, route, router) {
        this.Addempinfo = Addempinfo;
        this.toastController = toastController;
        this.afAuth = afAuth;
        this.route = route;
        this.router = router;
        this.Addemp = new _model_AddEmploye__WEBPACK_IMPORTED_MODULE_2__["Addemp"]();
    }
    save(Addemp) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.Addemp.entryDate = new Date().getTime();
            console.log(this.Addemp.imageUrlFile);
            yield this.Addempinfo.startUpLoad(Addemp);
            this.router.navigate(['/employees-info']);
        });
    }
    uploadFile(event) {
        console.log('event', event);
        this.selectedFilesForImage = event;
        console.log('f', this.selectedFilesForImage);
        this.Addemp.imageUrlFile = this.selectedFilesForImage.item(0);
    }
};
AddEmployeeInfoPage.ctorParameters = () => [
    { type: _services_addempinfo_service__WEBPACK_IMPORTED_MODULE_1__["AddempinfoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
AddEmployeeInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'add-employee-info',
        template: __webpack_require__(/*! raw-loader!./add-employee-info.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/add-employee-info/add-employee-info.page.html"),
        styles: [__webpack_require__(/*! ./add-employee-info.page.scss */ "./src/app/pages/add-employee-info/add-employee-info.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_addempinfo_service__WEBPACK_IMPORTED_MODULE_1__["AddempinfoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], AddEmployeeInfoPage);



/***/ })

}]);
//# sourceMappingURL=pages-add-employee-info-add-employee-info-module-es2015.js.map