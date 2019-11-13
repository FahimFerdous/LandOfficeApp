(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-digital-record-room-digital-record-room-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/digital-record-room/digital-record-room.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/digital-record-room/digital-record-room.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/app/tabs/speakers\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>ডিজিটাল রেকর্ড রুম </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <iframe width=\"100%\" height=\"100%\" [src]=\"url\"></iframe>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/digital-record-room/digital-record-room.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/digital-record-room/digital-record-room.module.ts ***!
  \*************************************************************************/
/*! exports provided: DigitalRecordRoomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalRecordRoomPageModule", function() { return DigitalRecordRoomPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _digital_record_room_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./digital-record-room.page */ "./src/app/pages/digital-record-room/digital-record-room.page.ts");







const routes = [
    {
        path: '',
        component: _digital_record_room_page__WEBPACK_IMPORTED_MODULE_6__["DigitalRecordRoomPage"]
    }
];
let DigitalRecordRoomPageModule = class DigitalRecordRoomPageModule {
};
DigitalRecordRoomPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_digital_record_room_page__WEBPACK_IMPORTED_MODULE_6__["DigitalRecordRoomPage"]]
    })
], DigitalRecordRoomPageModule);



/***/ }),

/***/ "./src/app/pages/digital-record-room/digital-record-room.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/digital-record-room/digital-record-room.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RpZ2l0YWwtcmVjb3JkLXJvb20vZGlnaXRhbC1yZWNvcmQtcm9vbS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/digital-record-room/digital-record-room.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/digital-record-room/digital-record-room.page.ts ***!
  \***********************************************************************/
/*! exports provided: DigitalRecordRoomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalRecordRoomPage", function() { return DigitalRecordRoomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let DigitalRecordRoomPage = class DigitalRecordRoomPage {
    constructor(sanitizer) {
        this.url = sanitizer.bypassSecurityTrustResourceUrl("http://drr.land.gov.bd/");
    }
    ngOnInit() { }
};
DigitalRecordRoomPage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
DigitalRecordRoomPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "digital-record-room",
        template: __webpack_require__(/*! raw-loader!./digital-record-room.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/digital-record-room/digital-record-room.page.html"),
        styles: [__webpack_require__(/*! ./digital-record-room.page.scss */ "./src/app/pages/digital-record-room/digital-record-room.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], DigitalRecordRoomPage);



/***/ })

}]);
//# sourceMappingURL=pages-digital-record-room-digital-record-room-module-es2015.js.map