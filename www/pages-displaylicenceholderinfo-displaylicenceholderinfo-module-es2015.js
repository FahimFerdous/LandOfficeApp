(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-displaylicenceholderinfo-displaylicenceholderinfo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/displaylicenceholderinfo/displaylicenceholderinfo.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/displaylicenceholderinfo/displaylicenceholderinfo.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/app/tabs/speakers\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>মালিক ও খাজনার তথ্য</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"outer-content\">\r\n  <ion-list>\r\n    <ion-grid fixed>\r\n      <ion-row class=\"ion-align-items-stretch\">\r\n        <ion-col size=\"12\" size-md=\"6\">\r\n          <ion-card class=\"speaker-card\">\r\n\r\n            <ion-card-content *ngIf=\"searchResultFound==0\">\r\n              <ion-item>\r\n                <h3> কোনো রেকর্ড পাওয়া যায়নি !</h3>\r\n              </ion-item>\r\n            </ion-card-content>\r\n            <ion-card-content *ngIf=\"searchResultFound!=0\">\r\n              <ion-list >\r\n                <ion-item>\r\n                  <h3>মালিকের নাম : <span style=\"font-size:15px\"><b>{{obj.malikerName}}</b></span></h3>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <h3>ইউনিয়ন : <span style=\"font-size:15px\"><b>{{obj.union}} </b></span></h3>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <h3>মৌজা : <span style=\"font-size:15px\"><b>{{obj.mouja}} </b></span></h3>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <h3>করের ধরন : <span style=\"font-size:15px\"><b>{{obj.korerDhoron}}</b></span></h3>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <h3>হোল্ডিং নং : <span style=\"font-size:15px\"><b>{{obj.holdingNo}}  </b></span></h3>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <h3>জমির পরিমাণ : <span style=\"font-size:15px\"><b>{{obj.jomirPoriman}} বর্গ মিটার </b></span></h3>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <h3>সর্বশেষ খাজনা পরিশোধের বছর : <span\r\n                      style=\"font-size:15px\"><b>{{obj.sorbosesKhajnaPorisodherBosor}} </b></span></h3>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <h3>বকেয়া বছর : <span style=\"font-size:15px\"><b>{{obj.bokeyaBosor}} </b></span></h3>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <h3>বকেয়া দাবি : <span style=\"font-size:15px\"><b>{{obj.bokeyaDabi}} টাকা </b></span></h3>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <h3>বকেয়া দাবির সুদ : <span style=\"font-size:15px\"><b>{{obj.bokeyaDabirSud}} টাকা </b></span>\r\n                  </h3>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <h3>হাল দাবি : <span style=\"font-size:15px\"><b>{{obj.halDabi}} টাকা </b></span></h3>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <h3>মোট দাবি : <span style=\"font-size:15px\"><b>{{obj.motDabi}} টাকা </b></span></h3>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <h3> মন্তব্য : <span style=\"font-size:15px\"><b>{{obj.montobbo}} </b></span></h3>\r\n                </ion-item>\r\n\r\n\r\n\r\n              </ion-list>\r\n              <ion-row *ngIf=\"searchResultFound!=0\">\r\n                <ion-col>\r\n                  <ion-button type=\"submit\" (click)=\"openSpeakerShare()\" expand=\"block\">লাইসেন্স নবায়ন করতে ক্লিক করুন\r\n                  </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-card-content>\r\n\r\n\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-list>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/displaylicenceholderinfo/displaylicenceholderinfo.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/displaylicenceholderinfo/displaylicenceholderinfo.module.ts ***!
  \***********************************************************************************/
/*! exports provided: DisplaylicenceholderinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplaylicenceholderinfoPageModule", function() { return DisplaylicenceholderinfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _displaylicenceholderinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./displaylicenceholderinfo.page */ "./src/app/pages/displaylicenceholderinfo/displaylicenceholderinfo.page.ts");







const routes = [
    {
        path: '',
        component: _displaylicenceholderinfo_page__WEBPACK_IMPORTED_MODULE_6__["DisplaylicenceholderinfoPage"]
    }
];
let DisplaylicenceholderinfoPageModule = class DisplaylicenceholderinfoPageModule {
};
DisplaylicenceholderinfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_displaylicenceholderinfo_page__WEBPACK_IMPORTED_MODULE_6__["DisplaylicenceholderinfoPage"]]
    })
], DisplaylicenceholderinfoPageModule);



/***/ }),

/***/ "./src/app/pages/displaylicenceholderinfo/displaylicenceholderinfo.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/displaylicenceholderinfo/displaylicenceholderinfo.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rpc3BsYXlsaWNlbmNlaG9sZGVyaW5mby9kaXNwbGF5bGljZW5jZWhvbGRlcmluZm8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/displaylicenceholderinfo/displaylicenceholderinfo.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/displaylicenceholderinfo/displaylicenceholderinfo.page.ts ***!
  \*********************************************************************************/
/*! exports provided: DisplaylicenceholderinfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplaylicenceholderinfoPage", function() { return DisplaylicenceholderinfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_user_infos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/user-infos.service */ "./src/app/services/user-infos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_user_inofo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/user-inofo */ "./src/app/model/user-inofo.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let DisplaylicenceholderinfoPage = class DisplaylicenceholderinfoPage {
    constructor(route, userInfoService, actionSheetCtrl, router) {
        this.route = route;
        this.userInfoService = userInfoService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.router = router;
        this.obj = new _model_user_inofo__WEBPACK_IMPORTED_MODULE_4__["UserInfos"]();
    }
    ngOnInit() {
        this.pourosovaId = this.route.snapshot.paramMap.get("pourosovaId");
        this.hatId = this.route.snapshot.paramMap.get("hatId");
        this.licenceId = this.route.snapshot.paramMap.get("licenceId");
        var x = this.userInfoService.getAllUserInfos();
        this.subscription = x
            .snapshotChanges()
            .pipe()
            .subscribe(item => {
            this.userInfos = [];
            item.forEach(element => {
                var y = element.payload.toJSON();
                if (y["approved"] == true) {
                    y["key"] = element.key;
                    this.userInfos.push(y);
                }
            });
            if (this.pourosovaId !== undefined &&
                this.hatId !== undefined &&
                this.licenceId !== undefined) {
                this.searchResultUserInfos = [];
                let filteredUserInfo = this.licenceId
                    ? this.userInfos.filter(p => p.pourosovaId
                        .toLowerCase()
                        .includes(this.pourosovaId.toLowerCase()) &&
                        p.hatId.toLowerCase().includes(this.hatId.toLowerCase()) &&
                        p.licenceNo
                            .toLowerCase()
                            .includes(this.licenceId.toLowerCase()))
                    : this.userInfos;
                this.searchResultUserInfos = filteredUserInfo;
                this.searchResultFound = this.searchResultUserInfos.length;
                console.log("beforSortsearchingUserInfos", this.searchResultUserInfos);
                if (this.searchResultUserInfos.length != 0) {
                    this.searchResultUserInfos.sort((a, b) => new Date(b.entryDate).getTime() -
                        new Date(a.entryDate).getTime());
                    this.obj = this.searchResultUserInfos.shift();
                    console.log("ob", this.obj);
                    var dateObj = new Date(this.obj.entryDate);
                    var month = dateObj.getUTCMonth() + 1; //months from 1-12
                    var day = dateObj.getUTCDate();
                    var year = dateObj.getUTCFullYear();
                    var currentDateObj = new Date();
                    var currentyear = currentDateObj.getUTCFullYear();
                    let bokeyaBosor = currentyear - parseInt(this.obj.sorbosesKhajnaPorisodherBosor);
                    if (bokeyaBosor == 0) {
                        bokeyaBosor = 1;
                    }
                    // Fahim's Code
                    let bokeyaPaona = this.obj.bokeyaDabi;
                    let tempsud = Math.round(bokeyaPaona * 0.0625);
                    //let step1 = bokeyaBosor ;
                    //let step2 = bokeyaBosor * step1;
                    //let step3 = step2 / 32;
                    let bokeyaDabirSud = tempsud * bokeyaBosor;
                    let motDabi = bokeyaDabirSud +
                        parseInt(bokeyaPaona) +
                        parseInt(this.obj.halDabi);
                    //this.obj.motDabi = motDabi + parseInt(this.obj.bokeyaDabi);
                    this.obj.motDabi = motDabi;
                    this.obj.bokeyaBosor = bokeyaBosor;
                    this.obj.bokeyaDabirSud = bokeyaDabirSud;
                    this.obj.sorbosesKhajnaPorisodherBosor = `${year}`;
                }
            }
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.searchResultUserInfos = [];
    }
    openSpeakerShare(speaker) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let userUniCode = this.obj.userUniCode;
            let motDabi = this.obj.motDabi;
            let key = this.obj.key;
            console.log("userUniCode", userUniCode);
            const actionSheet = yield this.actionSheetCtrl.create({
                header: "কিভাবে রশিদ পেতে চান ? ",
                buttons: [
                    {
                        text: "ইমেইল",
                        handler: () => {
                            this.router.navigate(["/paymentprocedure/", 1, userUniCode, key, motDabi]);
                        }
                    },
                    {
                        text: "ডাকযোগে",
                        handler: () => {
                            this.router.navigate(["/paymentprocedure/", 2, userUniCode, key, motDabi]);
                        }
                    },
                    {
                        text: "উপজিলা বহুমি অফিস হতে",
                        handler: () => {
                            this.router.navigate(["/paymentprocedure/", 3, userUniCode, key, motDabi]);
                        }
                    },
                    {
                        text: "Cancel",
                        role: "cancel"
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
};
DisplaylicenceholderinfoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_user_infos_service__WEBPACK_IMPORTED_MODULE_1__["UserInfosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DisplaylicenceholderinfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "displaylicenceholderinfo",
        template: __webpack_require__(/*! raw-loader!./displaylicenceholderinfo.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/displaylicenceholderinfo/displaylicenceholderinfo.page.html"),
        styles: [__webpack_require__(/*! ./displaylicenceholderinfo.page.scss */ "./src/app/pages/displaylicenceholderinfo/displaylicenceholderinfo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_user_infos_service__WEBPACK_IMPORTED_MODULE_1__["UserInfosService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], DisplaylicenceholderinfoPage);



/***/ })

}]);
//# sourceMappingURL=pages-displaylicenceholderinfo-displaylicenceholderinfo-module-es2015.js.map