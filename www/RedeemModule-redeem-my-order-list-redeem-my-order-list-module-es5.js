(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["RedeemModule-redeem-my-order-list-redeem-my-order-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/redeem-my-order-list/redeem-my-order-list.page.html":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/redeem-my-order-list/redeem-my-order-list.page.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRedeemModuleRedeemMyOrderListRedeemMyOrderListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{pageHeader}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <div style=\"padding:15px 10px 0px 10px;\" *ngIf=\"orderListResponse\">\n    <div class=\"customCard\" *ngFor=\"let listData of orderListResponse;\">\n      <ion-row tappable (click)=\"redeemVoucherDetail(listData);\">\n        <ion-col [size]=\"3\" class=\"autoMargin\">\n          <app-image-view [img]=\"listData?.image\" class=\"\" ></app-image-view>\n        </ion-col>\n        <ion-col [size]=\"9\" class=\"autoMargin\">\n          <p class=\"titleText\">{{listData?.dealName}}</p>\n          <p class=\"orderText\">Order Id: {{listData?.refNo}}</p>\n          <p class=\"orderText\">Order Date: {{listData?.orderDate}}</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n\n\n\n\n\n  <div *ngIf=\"!orderListResponse && showErrorImage==''\">\n    <app-skelton-listview [iconPath]=\"'redeemOrderList'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n\n  <ion-row *ngIf=\"!orderListResponse && showErrorImage!=''\">\n    <ion-col class=\"ion-text-center\" [push]=\"1\" [size]=\"10\">\n      <br><br>\n      <img [src]=\"showErrorImage\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n      <h2 class=\"noDataFoundMessage\">{{no_data_message}}</h2>\n    </ion-col>\n  </ion-row>\n \n\n  <h2 style=\"text-align:center;font-size:12px;\" *ngIf=\"errorMessage!='' && showErrorImage!='' && orderListResponse\"> {{errorMessage}}</h2>\n  <ion-infinite-scroll *ngIf=\"errorMessage=='' && orderListResponse\" threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" \n    loadingText=\"Loading more data...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/RedeemModule/redeem-my-order-list/redeem-my-order-list-routing.module.ts":
    /*!******************************************************************************************!*\
      !*** ./src/app/RedeemModule/redeem-my-order-list/redeem-my-order-list-routing.module.ts ***!
      \******************************************************************************************/

    /*! exports provided: RedeemMyOrderListPageRoutingModule */

    /***/
    function srcAppRedeemModuleRedeemMyOrderListRedeemMyOrderListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedeemMyOrderListPageRoutingModule", function () {
        return RedeemMyOrderListPageRoutingModule;
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


      var _redeem_my_order_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./redeem-my-order-list.page */
      "./src/app/RedeemModule/redeem-my-order-list/redeem-my-order-list.page.ts");

      var routes = [{
        path: '',
        component: _redeem_my_order_list_page__WEBPACK_IMPORTED_MODULE_3__["RedeemMyOrderListPage"]
      }];

      var RedeemMyOrderListPageRoutingModule = function RedeemMyOrderListPageRoutingModule() {
        _classCallCheck(this, RedeemMyOrderListPageRoutingModule);
      };

      RedeemMyOrderListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RedeemMyOrderListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/RedeemModule/redeem-my-order-list/redeem-my-order-list.module.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/RedeemModule/redeem-my-order-list/redeem-my-order-list.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: RedeemMyOrderListPageModule */

    /***/
    function srcAppRedeemModuleRedeemMyOrderListRedeemMyOrderListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedeemMyOrderListPageModule", function () {
        return RedeemMyOrderListPageModule;
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


      var _redeem_my_order_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./redeem-my-order-list-routing.module */
      "./src/app/RedeemModule/redeem-my-order-list/redeem-my-order-list-routing.module.ts");
      /* harmony import */


      var _redeem_my_order_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./redeem-my-order-list.page */
      "./src/app/RedeemModule/redeem-my-order-list/redeem-my-order-list.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var RedeemMyOrderListPageModule = function RedeemMyOrderListPageModule() {
        _classCallCheck(this, RedeemMyOrderListPageModule);
      };

      RedeemMyOrderListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _redeem_my_order_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["RedeemMyOrderListPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_redeem_my_order_list_page__WEBPACK_IMPORTED_MODULE_6__["RedeemMyOrderListPage"]]
      })], RedeemMyOrderListPageModule);
      /***/
    },

    /***/
    "./src/app/RedeemModule/redeem-my-order-list/redeem-my-order-list.page.scss":
    /*!**********************************************************************************!*\
      !*** ./src/app/RedeemModule/redeem-my-order-list/redeem-my-order-list.page.scss ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRedeemModuleRedeemMyOrderListRedeemMyOrderListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".titleText {\n  margin: 0;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.orderText {\n  font-size: 11px;\n  margin: 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUmVkZWVtTW9kdWxlL3JlZGVlbS1teS1vcmRlci1saXN0L3JlZGVlbS1teS1vcmRlci1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLFNBQUE7RUFBUyxnQkFBQTtFQUFnQixlQUFBO0FBSXBDOztBQUhBO0VBQVcsZUFBQTtFQUFlLGFBQUE7QUFRMUIiLCJmaWxlIjoic3JjL2FwcC9SZWRlZW1Nb2R1bGUvcmVkZWVtLW15LW9yZGVyLWxpc3QvcmVkZWVtLW15LW9yZGVyLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlVGV4dHttYXJnaW46MDtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjE0cHg7fVxuLm9yZGVyVGV4dHtmb250LXNpemU6MTFweDttYXJnaW46NXB4IDA7fSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/RedeemModule/redeem-my-order-list/redeem-my-order-list.page.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/RedeemModule/redeem-my-order-list/redeem-my-order-list.page.ts ***!
      \********************************************************************************/

    /*! exports provided: RedeemMyOrderListPage */

    /***/
    function srcAppRedeemModuleRedeemMyOrderListRedeemMyOrderListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedeemMyOrderListPage", function () {
        return RedeemMyOrderListPage;
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
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var RedeemMyOrderListPage = /*#__PURE__*/function () {
        function RedeemMyOrderListPage(router, storageService, apiservices, sendData, actionSheetController, zone) {
          _classCallCheck(this, RedeemMyOrderListPage);

          this.router = router;
          this.storageService = storageService;
          this.apiservices = apiservices;
          this.sendData = sendData;
          this.actionSheetController = actionSheetController;
          this.zone = zone;
          this.errorMessage = "";
          this.value = 0;
          this.myinfiniteScrollCall = false;
          this.showErrorImage = "";
          this.no_data_message = "";
        }

        _createClass(RedeemMyOrderListPage, [{
          key: "redeemVoucherDetail",
          value: function redeemVoucherDetail(listData) {
            var _this = this;

            this.zone.run(function () {
              var data = {
                "commingFrom": "redeemVoucherList"
              };
              _this.sendData.alldata = data;
              _this.sendData.myParam = listData;

              _this.router.navigate(["/redeem-my-order-detail"]);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.storageService.getStorage().then(function (res) {
              _this2.myRedeemOrderList();

              console.log("ionic lifecycle called getStorage==>", res);
            });
          }
        }, {
          key: "myRedeemOrderList",
          value: function myRedeemOrderList() {
            var _this3 = this;

            this.zone.run(function () {
              console.log("myOrder list function== ");
              var apiKey = {
                "value": _this3.value
              };
              console.log("myOrder list api keys==", apiKey);

              _this3.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].redeemMyOrderList, apiKey).subscribe(function (result) {
                console.log("myOrder list Api Result==", result);
                _this3.orderListData = result;
                _this3.pageHeader = result.data.settings.page_header;

                if (result.status == 1 || result.status == '1') {
                  if (_this3.orderListResponse == undefined) {
                    _this3.orderListResponse = result.data.orders;
                    console.log("noticeBoard List Infinite Scroll if1==", _this3.orderListResponse);
                  } else {
                    _this3.orderListResponse = _this3.orderListResponse.concat(result.data.orders);
                    console.log("noticeBoard List Infinite Scroll else1==", _this3.orderListResponse);
                  }

                  if (_this3.myinfiniteScrollCall == true) {
                    console.log("noticeBoard List Infinite Scroll if2==", _this3.orderListResponse);

                    _this3.myInfiniteScroll.target.complete();

                    _this3.errorMessage = "";
                    _this3.myinfiniteScrollCall = false;
                  }

                  console.log("thoughtOftheDayApi List data1==", _this3.orderListResponse);
                  console.log("thoughtOftheDayApi List data2==", _this3.errorMessage);
                } else {
                  console.log("noticeBoard List Infinite Scroll12==", _this3.orderListResponse);
                  _this3.errorMessage = result.message;
                  _this3.showErrorImage = result.data.settings.no_data_image;
                  _this3.no_data_message = result.data.settings.no_data_msg;

                  if (_this3.myinfiniteScrollCall == true) {
                    console.log("noticeBoard List Infinite Scroll123==", _this3.orderListResponse);

                    _this3.myInfiniteScroll.target.complete();

                    _this3.myinfiniteScrollCall = false;
                  }
                }
              }, function (err) {
                console.log("myOrder list error==", err);

                _this3.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(infiniteScroll) {
            var _this4 = this;

            this.myinfiniteScrollCall = true;
            console.log("Begin async operation 1==");
            setTimeout(function () {
              _this4.value = _this4.orderListResponse.length;
              console.log("Begin async operation 2==", _this4.value);
              _this4.myInfiniteScroll = infiniteScroll;

              _this4.myRedeemOrderList();
            }, 500);
          }
        }]);

        return RedeemMyOrderListPage;
      }();

      RedeemMyOrderListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]
        }, {
          type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"]
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      RedeemMyOrderListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-redeem-my-order-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./redeem-my-order-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/redeem-my-order-list/redeem-my-order-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./redeem-my-order-list.page.scss */
        "./src/app/RedeemModule/redeem-my-order-list/redeem-my-order-list.page.scss"))["default"]]
      })], RedeemMyOrderListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=RedeemModule-redeem-my-order-list-redeem-my-order-list-module-es5.js.map