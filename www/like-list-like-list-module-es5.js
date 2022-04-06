(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["like-list-like-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/like-list/like-list.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/like-list/like-list.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLikeListLikeListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{likeListApiResult?.data?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <div *ngIf=\"likeListData\" class=\"commonPagePadding likeListDiv\">\n    <ion-row class=\"likeRowDiv\" *ngFor=\"let likeData of likeListData; let i=index;\">\n      <ion-col class=\"autoMargin\" [size]=\"3\">\n        <app-image-view [img]=\"likeData?.empData?.profile_image\" [imageView]=\"true\" class=\"circleImage\" ></app-image-view>\n      </ion-col>\n      <ion-col [size]=\"9\" class=\"autoMargin ion-no-padding\">\n        <ion-row>\n          <ion-col [size]=\"8\">\n            <p class=\"nameText\">{{likeData?.empData?.name}}</p>\n            <p class=\"locationText\">{{likeData?.empData?.designation}}</p>\n          </ion-col>\n          <ion-col [size]=\"4\" class=\"ion-no-padding autoMargin ion-text-right\">\n            <p class=\"timeText\">{{likeData?.create_date}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n\n  \n  <div *ngIf=\"!likeListData && errorMessage==''\">\n    <app-skelton-listview [iconPath]=\"'likeList'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n\n\n\n  <h2 style=\"text-align:center;font-size:12px;\" *ngIf=\"errorMessage!=''\"> {{errorMessage}}</h2>\n\n  <ion-infinite-scroll *ngIf=\"errorMessage=='' && likeListData\" threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" \n    loadingText=\"Loading more data...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/like-list/like-list-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/like-list/like-list-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: LikeListPageRoutingModule */

    /***/
    function srcAppLikeListLikeListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LikeListPageRoutingModule", function () {
        return LikeListPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _like_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./like-list.page */
      "./src/app/like-list/like-list.page.ts");

      var routes = [{
        path: '',
        component: _like_list_page__WEBPACK_IMPORTED_MODULE_3__["LikeListPage"]
      }];

      var LikeListPageRoutingModule = function LikeListPageRoutingModule() {
        _classCallCheck(this, LikeListPageRoutingModule);
      };

      LikeListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LikeListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/like-list/like-list.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/like-list/like-list.module.ts ***!
      \***********************************************/

    /*! exports provided: LikeListPageModule */

    /***/
    function srcAppLikeListLikeListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LikeListPageModule", function () {
        return LikeListPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _like_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./like-list-routing.module */
      "./src/app/like-list/like-list-routing.module.ts");
      /* harmony import */


      var _like_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./like-list.page */
      "./src/app/like-list/like-list.page.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/components.module */
      "./src/app/components/components.module.ts");

      var LikeListPageModule = function LikeListPageModule() {
        _classCallCheck(this, LikeListPageModule);
      };

      LikeListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _like_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["LikeListPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_like_list_page__WEBPACK_IMPORTED_MODULE_6__["LikeListPage"]]
      })], LikeListPageModule);
      /***/
    },

    /***/
    "./src/app/like-list/like-list.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/like-list/like-list.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppLikeListLikeListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".likeRowDiv {\n  border-bottom: 1px solid gainsboro;\n  margin: 0 0 10px 0;\n}\n\n.likeRowDiv:nth-last-child(1) {\n  border-bottom: none;\n}\n\n.nameText {\n  margin: 3px 0;\n  font-size: 15px;\n}\n\n.locationText {\n  margin: 0;\n  font-size: 12px;\n  color: gray;\n}\n\n.timeText {\n  font-size: 10px;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlrZS1saXN0L2xpa2UtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBWSxrQ0FBQTtFQUFrQyxrQkFBQTtBQUc5Qzs7QUFGQTtFQUE4QixtQkFBQTtBQU05Qjs7QUFMQTtFQUFVLGFBQUE7RUFBYSxlQUFBO0FBVXZCOztBQVRBO0VBQWMsU0FBQTtFQUFVLGVBQUE7RUFBZ0IsV0FBQTtBQWV4Qzs7QUFkQTtFQUFVLGVBQUE7RUFBZSxXQUFBO0FBbUJ6QiIsImZpbGUiOiJzcmMvYXBwL2xpa2UtbGlzdC9saWtlLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpa2VSb3dEaXZ7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgZ2FpbnNib3JvO21hcmdpbjowIDAgMTBweCAwO31cbi5saWtlUm93RGl2Om50aC1sYXN0LWNoaWxkKDEpe2JvcmRlci1ib3R0b206bm9uZTt9XG4ubmFtZVRleHR7bWFyZ2luOjNweCAwO2ZvbnQtc2l6ZToxNXB4O31cbi5sb2NhdGlvblRleHR7bWFyZ2luOiAwO2ZvbnQtc2l6ZTogMTJweDtjb2xvcjogZ3JheTt9XG4udGltZVRleHR7Zm9udC1zaXplOjEwcHg7Y29sb3I6Z3JheTt9Il19 */";
      /***/
    },

    /***/
    "./src/app/like-list/like-list.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/like-list/like-list.page.ts ***!
      \*********************************************/

    /*! exports provided: LikeListPage */

    /***/
    function srcAppLikeListLikeListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LikeListPage", function () {
        return LikeListPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/local-storage.service */
      "./src/app/services/local-storage.service.ts");
      /* harmony import */


      var _src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../src/assets/constant */
      "./src/assets/constant.ts");

      var LikeListPage = /*#__PURE__*/function () {
        function LikeListPage(zone, storageService, apiServices, sendData) {
          _classCallCheck(this, LikeListPage);

          this.zone = zone;
          this.storageService = storageService;
          this.apiServices = apiServices;
          this.sendData = sendData;
          this.value = 0;
          this.errorMessage = "";
          this.myinfiniteScrollCall = false;
          this.listListData = this.sendData.myParam;
          this.commentArrData = this.sendData.alldata;
          console.log("data for like list==", this.listListData);
        }

        _createClass(LikeListPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storageService.getStorage().then(function (res) {
              _this.LikeListApiFunc();

              console.log("ionic lifecycle called getStorage==>", res);
            });
          }
        }, {
          key: "LikeListApiFunc",
          value: function LikeListApiFunc() {
            var _this2 = this;

            this.zone.run(function () {
              console.log("brand pending api function==");
              var apiKey = {
                "post_id": _this2.listListData.post_id,
                "module_id": _this2.listListData.module_id,
                "value": _this2.value,
                "comment_id": _this2.commentArrData.comment_id || ''
              };
              console.log("brand pending api keys==", apiKey);

              _this2.apiServices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].likeListApi, apiKey).subscribe(function (result) {
                console.log("brand pending Api Result==", result);
                _this2.likeListApiResult = result;

                if (result.status == 1 || result.status == '1') {
                  if (_this2.likeListData == undefined) {
                    _this2.likeListData = result.data.likelist;
                    console.log("noticeBoard List Infinite Scroll if1==", _this2.likeListData);
                  } else {
                    _this2.likeListData = _this2.likeListData.concat(result.data.likelist);
                    console.log("noticeBoard List Infinite Scroll else1==", _this2.likeListData);
                  }

                  if (_this2.myinfiniteScrollCall == true) {
                    console.log("noticeBoard List Infinite Scroll if2==", _this2.likeListData);

                    _this2.myInfiniteScroll.target.complete();

                    _this2.errorMessage = "";
                    _this2.myinfiniteScrollCall = false;
                  }

                  console.log("thoughtOftheDayApi List data1==", _this2.likeListData);
                  console.log("thoughtOftheDayApi List data2==", _this2.errorMessage);
                } else {
                  _this2.errorMessage = result.message;
                  console.log("noticeBoard List Infinite Scroll12==", _this2.likeListData);

                  if (_this2.myinfiniteScrollCall == true) {
                    console.log("noticeBoard List Infinite Scroll123==", _this2.likeListData);

                    _this2.myInfiniteScroll.target.complete();

                    _this2.myinfiniteScrollCall = false;
                  }
                }
              }, function (err) {
                _this2.apiServices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(infiniteScroll) {
            var _this3 = this;

            this.myinfiniteScrollCall = true;
            console.log("Begin async operation 1==");
            setTimeout(function () {
              _this3.value = _this3.likeListData.length;
              console.log("Begin async operation 2==", _this3.value);
              _this3.myInfiniteScroll = infiniteScroll;

              _this3.LikeListApiFunc();
            }, 500);
          }
        }]);

        return LikeListPage;
      }();

      LikeListPage.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
        }, {
          type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"]
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__["DataTransferService"]
        }];
      };

      LikeListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-like-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./like-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/like-list/like-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./like-list.page.scss */
        "./src/app/like-list/like-list.page.scss"))["default"]]
      })], LikeListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=like-list-like-list-module-es5.js.map