(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["RedeemModule-redeem-voucher-category-list-redeem-voucher-category-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/redeem-voucher-category-list/redeem-voucher-category-list.page.html":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/redeem-voucher-category-list/redeem-voucher-category-list.page.html ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRedeemModuleRedeemVoucherCategoryListRedeemVoucherCategoryListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{categoryData?.settings?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"categoryListData\" class=\"commonPagePadding\">\n    <ion-row>\n      <ion-col [size]=\"6\" *ngFor=\"let categoryList of categoryListData\">\n        <div tappable (click)=\"voucherList(categoryList)\" class=\"categoryDataDiv\">\n          <app-image-view [img]=\"categoryList?.categoryImage\" [imageView]=\"false\" class=\"circleCoverIcon\" ></app-image-view>\n          <div class=\"categoryTextDiv\">\n            <p><span>{{categoryList?.category}}</span></p>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n\n\n  <div *ngIf=\"!categoryListData && errorMessage==''\">\n    <app-skelton-listview [iconPath]=\"'voucherCatList'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n\n  <h2 style=\"text-align:center;font-size:12px;\" *ngIf=\"errorMessage!=''\"> {{errorMessage}}</h2>\n\n  <ion-infinite-scroll *ngIf=\"errorMessage=='' && categoryListData\" threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" \n    loadingText=\"Loading more data...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  \n  <!-- <div *ngIf=\"!categoryListData && showErrorImage==''\">\n    <app-skelton-listview [iconPath]=\"'voucherCatList'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n\n  <ion-row *ngIf=\"!categoryListData && showErrorImage!=''\">\n    <ion-col class=\"ion-text-center\" [push]=\"1\" [size]=\"10\">\n      <br><br>\n      <img [src]=\"showErrorImage\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n      <h2 class=\"noDataFoundMessage\">{{no_data_message}}</h2>\n    </ion-col>\n  </ion-row>\n \n\n  <h2 style=\"text-align:center;font-size:12px;\" *ngIf=\"errorMessage!='' && showErrorImage!='' && categoryListData\"> {{errorMessage}}</h2>\n  <ion-infinite-scroll *ngIf=\"errorMessage=='' && categoryListData\" threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" \n    loadingText=\"Loading more data...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/RedeemModule/redeem-voucher-category-list/redeem-voucher-category-list-routing.module.ts":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/RedeemModule/redeem-voucher-category-list/redeem-voucher-category-list-routing.module.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: RedeemVoucherCategoryListPageRoutingModule */

    /***/
    function srcAppRedeemModuleRedeemVoucherCategoryListRedeemVoucherCategoryListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedeemVoucherCategoryListPageRoutingModule", function () {
        return RedeemVoucherCategoryListPageRoutingModule;
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


      var _redeem_voucher_category_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./redeem-voucher-category-list.page */
      "./src/app/RedeemModule/redeem-voucher-category-list/redeem-voucher-category-list.page.ts");

      var routes = [{
        path: '',
        component: _redeem_voucher_category_list_page__WEBPACK_IMPORTED_MODULE_3__["RedeemVoucherCategoryListPage"]
      }];

      var RedeemVoucherCategoryListPageRoutingModule = function RedeemVoucherCategoryListPageRoutingModule() {
        _classCallCheck(this, RedeemVoucherCategoryListPageRoutingModule);
      };

      RedeemVoucherCategoryListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RedeemVoucherCategoryListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/RedeemModule/redeem-voucher-category-list/redeem-voucher-category-list.module.ts":
    /*!**************************************************************************************************!*\
      !*** ./src/app/RedeemModule/redeem-voucher-category-list/redeem-voucher-category-list.module.ts ***!
      \**************************************************************************************************/

    /*! exports provided: RedeemVoucherCategoryListPageModule */

    /***/
    function srcAppRedeemModuleRedeemVoucherCategoryListRedeemVoucherCategoryListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedeemVoucherCategoryListPageModule", function () {
        return RedeemVoucherCategoryListPageModule;
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


      var _redeem_voucher_category_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./redeem-voucher-category-list-routing.module */
      "./src/app/RedeemModule/redeem-voucher-category-list/redeem-voucher-category-list-routing.module.ts");
      /* harmony import */


      var _redeem_voucher_category_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./redeem-voucher-category-list.page */
      "./src/app/RedeemModule/redeem-voucher-category-list/redeem-voucher-category-list.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var RedeemVoucherCategoryListPageModule = function RedeemVoucherCategoryListPageModule() {
        _classCallCheck(this, RedeemVoucherCategoryListPageModule);
      };

      RedeemVoucherCategoryListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _redeem_voucher_category_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["RedeemVoucherCategoryListPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_redeem_voucher_category_list_page__WEBPACK_IMPORTED_MODULE_6__["RedeemVoucherCategoryListPage"]]
      })], RedeemVoucherCategoryListPageModule);
      /***/
    },

    /***/
    "./src/app/RedeemModule/redeem-voucher-category-list/redeem-voucher-category-list.page.scss":
    /*!**************************************************************************************************!*\
      !*** ./src/app/RedeemModule/redeem-voucher-category-list/redeem-voucher-category-list.page.scss ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRedeemModuleRedeemVoucherCategoryListRedeemVoucherCategoryListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".categoryDataDiv {\n  width: 100%;\n  position: relative;\n  height: 100px;\n}\n.categoryDataDiv .categoryTextDiv {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  text-align: center;\n  border-radius: 10px;\n}\n.categoryDataDiv .categoryTextDiv p {\n  position: relative;\n  color: #fff;\n  border-top: 1px solid white;\n  border-bottom: 1px solid white;\n  padding: 10px 5px;\n  font-size: 13px;\n  margin: 0;\n  top: 50%;\n  transform: translate(0px, -50%);\n}\n.categoryDataDiv .categoryTextDiv p span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUmVkZWVtTW9kdWxlL3JlZGVlbS12b3VjaGVyLWNhdGVnb3J5LWxpc3QvcmVkZWVtLXZvdWNoZXItY2F0ZWdvcnktbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFBaUIsV0FBQTtFQUFXLGtCQUFBO0VBQWtCLGFBQUE7QUFIOUM7QUFJSTtFQUFpQixrQkFBQTtFQUFrQixNQUFBO0VBQU0sT0FBQTtFQUFPLFFBQUE7RUFBUSxTQUFBO0VBQVMsOEJBQUE7RUFBNEIsa0JBQUE7RUFDekYsbUJBQUE7QUFLUjtBQUpRO0VBQUUsa0JBQUE7RUFBa0IsV0FBQTtFQUFXLDJCQUFBO0VBQTJCLDhCQUFBO0VBQThCLGlCQUFBO0VBQWlCLGVBQUE7RUFDckcsU0FBQTtFQUFTLFFBQUE7RUFBUSwrQkFBQTtBQWM3QjtBQWJZO0VBWFIsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFPaUM7QUFvQnJDIiwiZmlsZSI6InNyYy9hcHAvUmVkZWVtTW9kdWxlL3JlZGVlbS12b3VjaGVyLWNhdGVnb3J5LWxpc3QvcmVkZWVtLXZvdWNoZXItY2F0ZWdvcnktbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gbGluZS1jbGFtcCgkbGluZXMpe1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xuICAgIGRpc3BsYXk6LXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsO1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDokbGluZXM7XG4gIH1cbi5jYXRlZ29yeURhdGFEaXZ7d2lkdGg6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MTAwcHg7XG4gICAgLmNhdGVnb3J5VGV4dERpdntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsIDAuNyk7dGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICAgICAgcHtwb3NpdGlvbjpyZWxhdGl2ZTtjb2xvcjojZmZmO2JvcmRlci10b3A6MXB4IHNvbGlkIHdoaXRlO2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHdoaXRlO3BhZGRpbmc6MTBweCA1cHg7Zm9udC1zaXplOjEzcHg7XG4gICAgICAgICAgICBtYXJnaW46MDt0b3A6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoMHB4LCAtNTAlKTtcbiAgICAgICAgICAgIHNwYW57QGluY2x1ZGUgbGluZS1jbGFtcCgxKTt9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/RedeemModule/redeem-voucher-category-list/redeem-voucher-category-list.page.ts":
    /*!************************************************************************************************!*\
      !*** ./src/app/RedeemModule/redeem-voucher-category-list/redeem-voucher-category-list.page.ts ***!
      \************************************************************************************************/

    /*! exports provided: RedeemVoucherCategoryListPage */

    /***/
    function srcAppRedeemModuleRedeemVoucherCategoryListRedeemVoucherCategoryListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedeemVoucherCategoryListPage", function () {
        return RedeemVoucherCategoryListPage;
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

      var RedeemVoucherCategoryListPage = /*#__PURE__*/function () {
        // showErrorImage:any="";
        // no_data_message:any="";
        function RedeemVoucherCategoryListPage(router, storageService, apiservices, sendData, zone) {
          _classCallCheck(this, RedeemVoucherCategoryListPage);

          this.router = router;
          this.storageService = storageService;
          this.apiservices = apiservices;
          this.sendData = sendData;
          this.zone = zone;
          this.errorMessage = "";
          this.value = 0;
          this.myinfiniteScrollCall = false;
        }

        _createClass(RedeemVoucherCategoryListPage, [{
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
              console.log("redeem home page function==");
              var apiKey = {
                "value": _this2.value
              };
              console.log("redeem home page api key", apiKey);

              _this2.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].redeemCategoryList, apiKey).subscribe(function (result) {
                console.log("redeem home page Api Result==", result);
                _this2.categoryData = result.data;

                if (result.status == 1 || result.status == '1') {
                  if (_this2.categoryListData == undefined) {
                    _this2.categoryListData = result.data.categories;
                    console.log("noticeBoard List Infinite Scroll if1==", _this2.categoryListData);
                  } else {
                    _this2.categoryListData = _this2.categoryListData.concat(result.data.categories);
                    console.log("noticeBoard List Infinite Scroll else1==", _this2.categoryListData);
                  }

                  if (_this2.myinfiniteScrollCall == true) {
                    console.log("noticeBoard List Infinite Scroll if2==", _this2.categoryListData);

                    _this2.myInfiniteScroll.target.complete();

                    _this2.errorMessage = "";
                    _this2.myinfiniteScrollCall = false;
                  }

                  console.log("thoughtOftheDayApi List data1==", _this2.categoryListData);
                  console.log("thoughtOftheDayApi List data2==", _this2.errorMessage);
                } else {
                  _this2.errorMessage = result.message; // this.no_data_message=result.data.settings.no_data_msg;
                  // this.showErrorImage=result.data.settings.no_data_image;

                  console.log("noticeBoard List Infinite Scroll12==", _this2.categoryListData);

                  if (_this2.myinfiniteScrollCall == true) {
                    console.log("noticeBoard List Infinite Scroll123==", _this2.categoryListData);

                    _this2.myInfiniteScroll.target.complete();

                    _this2.myinfiniteScrollCall = false;
                  }
                }
              }, function (err) {
                console.log("last array of account statement==", err);

                _this2.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "voucherList",
          value: function voucherList(categoryClickData) {
            var _this3 = this;

            this.zone.run(function () {
              _this3.sendData.alldata = categoryClickData;

              _this3.router.navigate(["/voucher-list"]);
            });
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(infiniteScroll) {
            var _this4 = this;

            this.myinfiniteScrollCall = true;
            console.log("Begin async operation 1==");
            setTimeout(function () {
              _this4.value = _this4.categoryListData.length;
              console.log("Begin async operation 2==", _this4.value);
              _this4.myInfiniteScroll = infiniteScroll;

              _this4.redeemHomeDetail();
            }, 500);
          }
        }]);

        return RedeemVoucherCategoryListPage;
      }();

      RedeemVoucherCategoryListPage.ctorParameters = function () {
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

      RedeemVoucherCategoryListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-redeem-voucher-category-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./redeem-voucher-category-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/redeem-voucher-category-list/redeem-voucher-category-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./redeem-voucher-category-list.page.scss */
        "./src/app/RedeemModule/redeem-voucher-category-list/redeem-voucher-category-list.page.scss"))["default"]]
      })], RedeemVoucherCategoryListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=RedeemModule-redeem-voucher-category-list-redeem-voucher-category-list-module-es5.js.map