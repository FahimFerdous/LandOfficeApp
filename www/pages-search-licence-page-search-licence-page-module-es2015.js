(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-licence-page-search-licence-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/search-licence-page/search-licence-page.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/search-licence-page/search-licence-page.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/app/tabs/speakers\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>লাইসেন্স নাম্বার সার্চ করুন</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding speaker-detail\">\r\n  <div class=\"ion-text-center\">\r\n\r\n    <form novalidate>\r\n      <ion-list>\r\n        <ion-item style=\"margin-top:10px\">\r\n          <ion-label>পৌরসভা সিলেক্ট করুন</ion-label>\r\n          <ion-select #pourosovaId=\"ngModel\" [(ngModel)]=\"licence.pourosovaId\" name=\"pourosovaId\"\r\n            (ionChange)=\"pourosovaDDLChange(licence.pourosovaId)\" value=\"brown\" okText=\"পরবর্তী\" cancelText=\"ক্যান্সেল\">\r\n            <ion-select-option *ngFor=\"let c of pourosova\" [value]=\"c.key\">\r\n              {{ c.pourosovaName }}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item style=\"margin-top:10px\">\r\n          <ion-label>হাট সিলেক্ট করুন</ion-label>\r\n          <ion-select #hatId=\"ngModel\" [(ngModel)]=\"licence.hatId\" name=\"hatId\"\r\n            (ionChange)=\"hatDDLChange(licence.hatId)\" value=\"brown\" okText=\"পরবর্তী\" cancelText=\"ক্যান্সেল\">\r\n            <ion-select-option *ngFor=\"let c of searchHats\" [value]=\"c.key\">\r\n              {{ c.hatName }}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-item style=\"margin-top:10px\">\r\n          <ion-label>লাইসেন্স সিলেক্ট করুন</ion-label>\r\n          <ion-select #licenceId=\"ngModel\" [(ngModel)]=\"licence.licenceId\" name=\"licenceId\" value=\"brown\"\r\n            okText=\"পরবর্তী\" cancelText=\"ক্যান্সেল\">\r\n            <ion-select-option *ngFor=\"let c of searchLicences\" [value]=\"c.key\">\r\n              {{ c.licenceNo }}\r\n            </ion-select-option>\r\n          </ion-select>\r\n\r\n\r\n        </ion-item>\r\n\r\n\r\n      </ion-list>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button\r\n            [routerLink]=\"'/displaylicenceholderinfo/' + licence.pourosovaId +'/'+licence.hatId +'/'+licence.licenceId\"\r\n            routerDirection=\"forward\" expand=\"block\">সার্চ করুন</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/search-licence-page/search-licence-page.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/search-licence-page/search-licence-page.module.ts ***!
  \*************************************************************************/
/*! exports provided: SearchLicencePagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchLicencePagePageModule", function() { return SearchLicencePagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_licence_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-licence-page.page */ "./src/app/pages/search-licence-page/search-licence-page.page.ts");







const routes = [
    {
        path: '',
        component: _search_licence_page_page__WEBPACK_IMPORTED_MODULE_6__["SearchLicencePagePage"]
    }
];
let SearchLicencePagePageModule = class SearchLicencePagePageModule {
};
SearchLicencePagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_search_licence_page_page__WEBPACK_IMPORTED_MODULE_6__["SearchLicencePagePage"]]
    })
], SearchLicencePagePageModule);



/***/ }),

/***/ "./src/app/pages/search-licence-page/search-licence-page.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/search-licence-page/search-licence-page.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC1saWNlbmNlLXBhZ2Uvc2VhcmNoLWxpY2VuY2UtcGFnZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/search-licence-page/search-licence-page.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/search-licence-page/search-licence-page.page.ts ***!
  \***********************************************************************/
/*! exports provided: SearchLicencePagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchLicencePagePage", function() { return SearchLicencePagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _model_licence__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../model/licence */ "./src/app/model/licence.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_pourosova_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/pourosova.service */ "./src/app/services/pourosova.service.ts");
/* harmony import */ var _services_hat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/hat.service */ "./src/app/services/hat.service.ts");
/* harmony import */ var _services_licence_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/licence.service */ "./src/app/services/licence.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let SearchLicencePagePage = class SearchLicencePagePage {
    constructor(pourosovaServices, hatService, licenceServices, router) {
        this.pourosovaServices = pourosovaServices;
        this.hatService = hatService;
        this.licenceServices = licenceServices;
        this.router = router;
        this.licence = new _model_licence__WEBPACK_IMPORTED_MODULE_1__["Licence"]();
    }
    ngOnInit() {
        var allPourosova = this.pourosovaServices.getAllPourosova();
        var allHats = this.hatService.getAllHat();
        var allLicence = this.licenceServices.getAllLicense();
        this.pourosova = [];
        this.hats = [];
        this.licences = [];
        this.subscription = allPourosova.snapshotChanges().pipe().subscribe(item => {
            item.forEach(element => {
                var y = element.payload.toJSON();
                y["key"] = element.key;
                this.pourosova.push(y);
            });
        });
        this.subscription = allHats.snapshotChanges().pipe().subscribe(item => {
            item.forEach(element => {
                var y = element.payload.toJSON();
                y["key"] = element.key;
                this.hats.push(y);
            });
        });
        this.subscription = allLicence.snapshotChanges().pipe().subscribe(item => {
            item.forEach(element => {
                var y = element.payload.toJSON();
                y["key"] = element.key;
                this.licences.push(y);
            });
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    pourosovaDDLChange(pourosovaId) {
        this.searchHats = [];
        this.searchLicences = [];
        let filterHats = (pourosovaId) ?
            this.hats.filter(p => p.pourosovaId == pourosovaId) :
            this.hats;
        this.searchHats = filterHats;
    }
    hatDDLChange(hatId) {
        this.searchLicences = [];
        let filterLicence = (hatId) ?
            this.licences.filter(p => p.hatId == hatId) :
            this.licences;
        this.searchLicences = filterLicence;
    }
    search(licence) {
        // const v=   this.router.navigate(['/displaylicenceholderinfo/'], { queryParams: { pourosovaId: licence.pourosovaId } });
        //console.log(v);
    }
};
SearchLicencePagePage.ctorParameters = () => [
    { type: _services_pourosova_service__WEBPACK_IMPORTED_MODULE_3__["PourosovaService"] },
    { type: _services_hat_service__WEBPACK_IMPORTED_MODULE_4__["HatService"] },
    { type: _services_licence_service__WEBPACK_IMPORTED_MODULE_5__["LicenceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
SearchLicencePagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'search-licence-page',
        template: __webpack_require__(/*! raw-loader!./search-licence-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/search-licence-page/search-licence-page.page.html"),
        styles: [__webpack_require__(/*! ./search-licence-page.page.scss */ "./src/app/pages/search-licence-page/search-licence-page.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_pourosova_service__WEBPACK_IMPORTED_MODULE_3__["PourosovaService"],
        _services_hat_service__WEBPACK_IMPORTED_MODULE_4__["HatService"],
        _services_licence_service__WEBPACK_IMPORTED_MODULE_5__["LicenceService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], SearchLicencePagePage);



/***/ })

}]);
//# sourceMappingURL=pages-search-licence-page-search-licence-page-module-es2015.js.map