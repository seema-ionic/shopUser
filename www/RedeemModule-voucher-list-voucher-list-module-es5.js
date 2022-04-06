(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["RedeemModule-voucher-list-voucher-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/voucher-list/voucher-list.page.html":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/voucher-list/voucher-list.page.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRedeemModuleVoucherListVoucherListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{allData?.settings?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <div *ngIf=\"voucherList\" class=\"dataContainer\">\n    <div *ngFor=\"let data of voucherList\" class=\"dealContainer\">\n      <ion-row class=\"paddingBottom0\">\n        <ion-col [size]=\"12\" class=\"paddingBottom0\" tappable (click)=\"seeDetails(data)\" >\n          <div class=\"container ion-activatable ripple-parent\">\n            <div class=\"shape\">\n              <img [src]=\"data?.dealImage\" onerror=\"this.src='../../assets/watermark/watermark.png'\" class=\"dealImage bannerImage\">\n              <!-- <img [src]=\"data?.dealImage\" class=\"dealImage bannerImage\" (load)=\"data.loaded = true\" [hidden]=\"!data.loaded\" onerror=\"this.src='../../assets/icon/watermark.png'\"/>\n              <img src=\"../../assets/watermark/watermark.png\" [hidden]=\"data.loaded\" class=\"dealImage menuImgWaterMark\"/> -->\n            </div>\n            <br>\n            <h4 class=\"title\">{{data?.dealName}}</h4>\n            <ion-ripple-effect></ion-ripple-effect>\n          </div>\n          <!-- <ion-button fill=\"clear\" (click)=\"addFav(data)\" class=\"heartIcon\">\n            <img [src]=\"checkFavStatus(data?.favStatus)\"/> \n          </ion-button> -->\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n\n\n  <div *ngIf=\"!voucherList && showErrorImage==''\">\n    <app-skelton-listview [iconPath]=\"'redeemVoucherList'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n\n  <ion-row *ngIf=\"!voucherList && showErrorImage!=''\">\n    <ion-col class=\"ion-text-center\" [push]=\"1\" [size]=\"10\">\n      <br><br>\n      <img [src]=\"showErrorImage\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n      <h2 class=\"noDataFoundMessage\">{{no_data_message}}</h2>\n    </ion-col>\n  </ion-row>\n \n\n  <h2 style=\"text-align:center;font-size:12px;\" *ngIf=\"errorMessage!='' && showErrorImage!='' && voucherList\"> {{errorMessage}}</h2>\n  <ion-infinite-scroll *ngIf=\"errorMessage=='' && voucherList\" threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" \n    loadingText=\"Loading more data...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/RedeemModule/voucher-list/voucher-list-routing.module.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/RedeemModule/voucher-list/voucher-list-routing.module.ts ***!
      \**************************************************************************/

    /*! exports provided: VoucherListPageRoutingModule */

    /***/
    function srcAppRedeemModuleVoucherListVoucherListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoucherListPageRoutingModule", function () {
        return VoucherListPageRoutingModule;
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


      var _voucher_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./voucher-list.page */
      "./src/app/RedeemModule/voucher-list/voucher-list.page.ts");

      var routes = [{
        path: '',
        component: _voucher_list_page__WEBPACK_IMPORTED_MODULE_3__["VoucherListPage"]
      }];

      var VoucherListPageRoutingModule = function VoucherListPageRoutingModule() {
        _classCallCheck(this, VoucherListPageRoutingModule);
      };

      VoucherListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VoucherListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/RedeemModule/voucher-list/voucher-list.module.ts":
    /*!******************************************************************!*\
      !*** ./src/app/RedeemModule/voucher-list/voucher-list.module.ts ***!
      \******************************************************************/

    /*! exports provided: VoucherListPageModule */

    /***/
    function srcAppRedeemModuleVoucherListVoucherListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoucherListPageModule", function () {
        return VoucherListPageModule;
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


      var _voucher_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./voucher-list-routing.module */
      "./src/app/RedeemModule/voucher-list/voucher-list-routing.module.ts");
      /* harmony import */


      var _voucher_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./voucher-list.page */
      "./src/app/RedeemModule/voucher-list/voucher-list.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var VoucherListPageModule = function VoucherListPageModule() {
        _classCallCheck(this, VoucherListPageModule);
      };

      VoucherListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _voucher_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["VoucherListPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_voucher_list_page__WEBPACK_IMPORTED_MODULE_6__["VoucherListPage"]]
      })], VoucherListPageModule);
      /***/
    },

    /***/
    "./src/app/RedeemModule/voucher-list/voucher-list.page.scss":
    /*!******************************************************************!*\
      !*** ./src/app/RedeemModule/voucher-list/voucher-list.page.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRedeemModuleVoucherListVoucherListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  width: 100%;\n}\n\n.shape {\n  float: right;\n  width: 50%;\n  background-color: transparent;\n  -webkit-clip-path: polygon(100% 0, 100% 100%, 1% 100%, 36% 0);\n  clip-path: polygon(100% 0, 100% 100%, 1% 100%, 36% 0);\n  shape-outside: polygon(100% 0, 100% 100%, 1% 100%, 36% 0);\n  shape-margin: 20px;\n}\n\n.dealImage {\n  min-height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: left;\n     object-position: left;\n  background: #ececec;\n}\n\nh4.title {\n  background: #ececec;\n  padding: 25px 13px;\n  font-weight: 600;\n  color: var(--headerColor);\n  font-size: 15px;\n  margin-top: 10px;\n  min-height: 115px;\n}\n\n.dealContainer {\n  margin-bottom: 12px;\n  box-shadow: 0px 6px 9px 1px #e8e8e8;\n}\n\n.paddingBottom0 {\n  padding-bottom: 0px !important;\n}\n\n.heartIcon {\n  position: absolute;\n  top: 7px;\n  right: 0px;\n}\n\n.heartIcon img {\n  width: 35px;\n  background: #fff;\n  border-radius: 50%;\n  padding: 6px;\n}\n\n.headerIcon {\n  width: 35px;\n  background: #fff;\n  border-radius: 50%;\n  padding: 6px;\n  margin-right: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUmVkZWVtTW9kdWxlL3ZvdWNoZXItbGlzdC92b3VjaGVyLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVcsV0FBQTtBQUVYOztBQURBO0VBQU8sWUFBQTtFQUFZLFVBQUE7RUFBVSw2QkFBQTtFQUN6Qiw2REFBQTtFQUNBLHFEQUFBO0VBQ0EseURBQUE7RUFBeUQsa0JBQUE7QUFRN0Q7O0FBTkE7RUFBVyxpQkFBQTtFQUFpQixvQkFBQTtLQUFBLGlCQUFBO0VBQWlCLHdCQUFBO0tBQUEscUJBQUE7RUFBcUIsbUJBQUE7QUFhbEU7O0FBWkE7RUFBUyxtQkFBQTtFQUFtQixrQkFBQTtFQUFrQixnQkFBQTtFQUFnQix5QkFBQTtFQUF5QixlQUFBO0VBQ25GLGdCQUFBO0VBQWdCLGlCQUFBO0FBcUJwQjs7QUFuQkE7RUFBZSxtQkFBQTtFQUFtQixtQ0FBQTtBQXdCbEM7O0FBdkJBO0VBQWdCLDhCQUFBO0FBMkJoQjs7QUExQkE7RUFBVyxrQkFBQTtFQUFrQixRQUFBO0VBQVEsVUFBQTtBQWdDckM7O0FBL0JBO0VBQUksV0FBQTtFQUFXLGdCQUFBO0VBQWdCLGtCQUFBO0VBQWtCLFlBQUE7QUFxQ2pEOztBQXBDQTtFQUFZLFdBQUE7RUFBVyxnQkFBQTtFQUFnQixrQkFBQTtFQUFrQixZQUFBO0VBQVksa0JBQUE7QUE0Q3JFIiwiZmlsZSI6InNyYy9hcHAvUmVkZWVtTW9kdWxlL3ZvdWNoZXItbGlzdC92b3VjaGVyLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcnt3aWR0aDoxMDAlfVxuLnNoYXBle2Zsb2F0OnJpZ2h0O3dpZHRoOjUwJTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgIC13ZWJraXQtY2xpcC1wYXRoOnBvbHlnb24oMTAwJSAwLCAxMDAlIDEwMCUsIDElIDEwMCUsIDM2JSAwKTtcbiAgICBjbGlwLXBhdGg6cG9seWdvbigxMDAlIDAsIDEwMCUgMTAwJSwgMSUgMTAwJSwgMzYlIDApO1xuICAgIHNoYXBlLW91dHNpZGU6cG9seWdvbigxMDAlIDAsIDEwMCUgMTAwJSwgMSUgMTAwJSwgMzYlIDApO3NoYXBlLW1hcmdpbjoyMHB4O1xufVxuLmRlYWxJbWFnZXttaW4taGVpZ2h0OjE1MHB4O29iamVjdC1maXQ6Y292ZXI7b2JqZWN0LXBvc2l0aW9uOmxlZnQ7YmFja2dyb3VuZDojZWNlY2VjO31cbmg0LnRpdGxle2JhY2tncm91bmQ6I2VjZWNlYztwYWRkaW5nOjI1cHggMTNweDtmb250LXdlaWdodDo2MDA7Y29sb3I6dmFyKC0taGVhZGVyQ29sb3IpO2ZvbnQtc2l6ZToxNXB4O1xuICAgIG1hcmdpbi10b3A6MTBweDttaW4taGVpZ2h0OjExNXB4O1xufVxuLmRlYWxDb250YWluZXJ7bWFyZ2luLWJvdHRvbToxMnB4O2JveC1zaGFkb3c6MHB4IDZweCA5cHggMXB4ICNlOGU4ZTg7fVxuLnBhZGRpbmdCb3R0b20we3BhZGRpbmctYm90dG9tOjBweCAhaW1wb3J0YW50O31cbi5oZWFydEljb257cG9zaXRpb246YWJzb2x1dGU7dG9wOjdweDtyaWdodDowcHg7XG5pbWd7d2lkdGg6MzVweDtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLXJhZGl1czo1MCU7cGFkZGluZzo2cHg7fX1cbi5oZWFkZXJJY29ue3dpZHRoOjM1cHg7YmFja2dyb3VuZDojZmZmO2JvcmRlci1yYWRpdXM6NTAlO3BhZGRpbmc6NnB4O21hcmdpbi1yaWdodDoyMnB4O30iXX0= */";
      /***/
    },

    /***/
    "./src/app/RedeemModule/voucher-list/voucher-list.page.ts":
    /*!****************************************************************!*\
      !*** ./src/app/RedeemModule/voucher-list/voucher-list.page.ts ***!
      \****************************************************************/

    /*! exports provided: VoucherListPage */

    /***/
    function srcAppRedeemModuleVoucherListVoucherListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoucherListPage", function () {
        return VoucherListPage;
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


      var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/local-storage.service */
      "./src/app/services/local-storage.service.ts");
      /* harmony import */


      var _src_assets_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../src/assets/constant */
      "./src/assets/constant.ts");

      var VoucherListPage = /*#__PURE__*/function () {
        function VoucherListPage(router, storageService, apiservices, sendData, zone) {
          _classCallCheck(this, VoucherListPage);

          this.router = router;
          this.storageService = storageService;
          this.apiservices = apiservices;
          this.sendData = sendData;
          this.zone = zone;
          this.errorMessage = "";
          this.value = 0;
          this.myinfiniteScrollCall = false;
          this.showErrorImage = "";
          this.no_data_message = "";
          this.categoryListResult = this.sendData.alldata;
          console.log("voucher category list data==", this.categoryListResult);
        }

        _createClass(VoucherListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storageService.getStorage().then(function (res) {
              _this.redeemHomeDetail();

              console.log("ionic lifecycle called getStorage==>", res);
            });
          }
        }, {
          key: "redeemHomeDetail",
          value: function redeemHomeDetail() {
            var _this2 = this;

            this.zone.run(function () {
              var apiKey = {
                "value": _this2.value,
                "category_id": _this2.categoryListResult.category_id
              };

              _this2.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].redeemVoucherList, apiKey).subscribe(function (result) {
                console.log('response== ', result);
                _this2.allData = result.data;

                if (result.status == 1 || result.status == '1') {
                  if (_this2.voucherList == undefined) {
                    _this2.voucherList = result.data.deals;
                    console.log("noticeBoard List Infinite Scroll if1==", _this2.voucherList);
                  } else {
                    _this2.voucherList = _this2.voucherList.concat(result.data.deals);
                    console.log("noticeBoard List Infinite Scroll else1==", _this2.voucherList);
                  }

                  if (_this2.myinfiniteScrollCall == true) {
                    console.log("noticeBoard List Infinite Scroll if2==", _this2.voucherList);

                    _this2.myInfiniteScroll.target.complete();

                    _this2.errorMessage = "";
                    _this2.myinfiniteScrollCall = false;
                  }

                  console.log("thoughtOftheDayApi List data1==", _this2.voucherList);
                  console.log("thoughtOftheDayApi List data2==", _this2.errorMessage);
                } else {
                  console.log("noticeBoard List Infinite Scroll12==", _this2.voucherList);
                  _this2.errorMessage = result.message;
                  _this2.no_data_message = result.data.settings.no_data_msg;
                  _this2.showErrorImage = result.data.settings.no_data_image;

                  if (_this2.myinfiniteScrollCall == true) {
                    console.log("noticeBoard List Infinite Scroll123==", _this2.voucherList);

                    _this2.myInfiniteScroll.target.complete();

                    _this2.myinfiniteScrollCall = false;
                  }
                }
              }, function (err) {
                _this2.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "seeDetails",
          value: function seeDetails(listData) {
            var _this3 = this;

            this.zone.run(function () {
              _this3.sendData.alldata = listData;

              _this3.router.navigate(['/voucher-list-detail']);
            });
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(infiniteScroll) {
            var _this4 = this;

            this.myinfiniteScrollCall = true;
            console.log("Begin async operation 1==");
            setTimeout(function () {
              _this4.value = _this4.voucherList.length;
              console.log("Begin async operation 2==", _this4.value);
              _this4.myInfiniteScroll = infiniteScroll;

              _this4.redeemHomeDetail();
            }, 500);
          }
        }]);

        return VoucherListPage;
      }();

      VoucherListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]
        }, {
          type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"]
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      VoucherListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-voucher-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./voucher-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/voucher-list/voucher-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./voucher-list.page.scss */
        "./src/app/RedeemModule/voucher-list/voucher-list.page.scss"))["default"]]
      })], VoucherListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=RedeemModule-voucher-list-voucher-list-module-es5.js.map