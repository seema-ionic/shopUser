(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sayCheersModule-say-cheers-card-say-cheers-card-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sayCheersModule/say-cheers-card/say-cheers-card.page.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sayCheersModule/say-cheers-card/say-cheers-card.page.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSayCheersModuleSayCheersCardSayCheersCardPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{page_header}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"commonPagePadding\" *ngIf=\"cardListData\">\n    <div class=\"tabDiv\">\n      <ion-scroll scrollX=\"true\">\n        <div *ngFor=\"let item of cardListData; let i=index\" class=\"inlineDiv\" [ngClass]=\"{'changeFilter': filterIndex==i}\">\n          <span tappable (click)=\"changeFilter(i,item)\">{{item?.category_name}}</span>\n        </div>\n      </ion-scroll>\n    </div>\n\n    <div *ngIf=\"cardListData?.length>1\" class=\"cardListDiv\">\n      <ion-row>\n        <ion-col [size]=\"4\" *ngFor=\"let listData of ArrayData?.card_list; let i=index;\">\n          <div class=\"cardDiv\" tappable (click)=\"goToMessage(listData,ArrayData)\">\n            <app-image-view [img]=\"listData?.card_image\" [imageView]=\"false\" class=\"circleCoverIcon\" ></app-image-view>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n\n  </div>\n\n\n\n\n  <!-- <div *ngIf=\"!cardListData\">\n    <app-skelton-listview [iconPath]=\"'sayCheerCard'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div> -->\n  \n  <div *ngIf=\"!cardListData && showErrorImage==''\">\n    <app-skelton-listview [iconPath]=\"'sayCheerCard'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n\n  <ion-row *ngIf=\"!cardListData && showErrorImage!=''\">\n    <ion-col class=\"ion-text-center\" [push]=\"1\" [size]=\"10\">\n      <br><br>\n      <img [src]=\"showErrorImage\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n      <h2 class=\"noDataFoundMessage\">{{no_data_message}}</h2>\n    </ion-col>\n  </ion-row>\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/sayCheersModule/say-cheers-card/say-cheers-card-routing.module.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/sayCheersModule/say-cheers-card/say-cheers-card-routing.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: SayCheersCardPageRoutingModule */

    /***/
    function srcAppSayCheersModuleSayCheersCardSayCheersCardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SayCheersCardPageRoutingModule", function () {
        return SayCheersCardPageRoutingModule;
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


      var _say_cheers_card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./say-cheers-card.page */
      "./src/app/sayCheersModule/say-cheers-card/say-cheers-card.page.ts");

      var routes = [{
        path: '',
        component: _say_cheers_card_page__WEBPACK_IMPORTED_MODULE_3__["SayCheersCardPage"]
      }];

      var SayCheersCardPageRoutingModule = function SayCheersCardPageRoutingModule() {
        _classCallCheck(this, SayCheersCardPageRoutingModule);
      };

      SayCheersCardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SayCheersCardPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/sayCheersModule/say-cheers-card/say-cheers-card.module.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/sayCheersModule/say-cheers-card/say-cheers-card.module.ts ***!
      \***************************************************************************/

    /*! exports provided: SayCheersCardPageModule */

    /***/
    function srcAppSayCheersModuleSayCheersCardSayCheersCardModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SayCheersCardPageModule", function () {
        return SayCheersCardPageModule;
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


      var _say_cheers_card_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./say-cheers-card-routing.module */
      "./src/app/sayCheersModule/say-cheers-card/say-cheers-card-routing.module.ts");
      /* harmony import */


      var _say_cheers_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./say-cheers-card.page */
      "./src/app/sayCheersModule/say-cheers-card/say-cheers-card.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var SayCheersCardPageModule = function SayCheersCardPageModule() {
        _classCallCheck(this, SayCheersCardPageModule);
      };

      SayCheersCardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _say_cheers_card_routing_module__WEBPACK_IMPORTED_MODULE_5__["SayCheersCardPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_say_cheers_card_page__WEBPACK_IMPORTED_MODULE_6__["SayCheersCardPage"]]
      })], SayCheersCardPageModule);
      /***/
    },

    /***/
    "./src/app/sayCheersModule/say-cheers-card/say-cheers-card.page.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/sayCheersModule/say-cheers-card/say-cheers-card.page.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSayCheersModuleSayCheersCardSayCheersCardPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tabDiv {\n  margin: 0px 0 10px 0;\n  border-bottom: 0px solid gray;\n}\n.tabDiv ion-scroll {\n  overflow-x: auto;\n  display: flex;\n  position: relative;\n  padding: 15px 0;\n}\n.tabDiv .inlineDiv {\n  margin: 0 10px 0 5px;\n  text-align: center;\n  padding: 10px;\n  width: 100%;\n  letter-spacing: 0.5px;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  font-weight: 600;\n  border-bottom: 2px solid gainsboro;\n  color: #000;\n  font-size: 15px;\n}\n.tabDiv .changeFilter {\n  color: var(--headerColor);\n  border-bottom: 2px solid var(--headerColor);\n}\n.cardListDiv .cardDiv {\n  width: 100%;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2F5Q2hlZXJzTW9kdWxlL3NheS1jaGVlcnMtY2FyZC9zYXktY2hlZXJzLWNhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVEsb0JBQUE7RUFBb0IsNkJBQUE7QUFHNUI7QUFGSTtFQUFXLGdCQUFBO0VBQWdCLGFBQUE7RUFBYSxrQkFBQTtFQUFrQixlQUFBO0FBUTlEO0FBUEk7RUFBVyxvQkFBQTtFQUFvQixrQkFBQTtFQUFrQixhQUFBO0VBQWEsV0FBQTtFQUFXLHFCQUFBO0VBQ3JFLDhCQUFBO0VBQThCLDJCQUFBO0VBQTJCLHNCQUFBO0VBQXNCLGdCQUFBO0VBQy9FLGtDQUFBO0VBQWtDLFdBQUE7RUFBVyxlQUFBO0FBbUJyRDtBQWpCSTtFQUFjLHlCQUFBO0VBQXlCLDJDQUFBO0FBcUIzQztBQWhCSTtFQUFTLFdBQUE7RUFBVyxhQUFBO0FBcUJ4QiIsImZpbGUiOiJzcmMvYXBwL3NheUNoZWVyc01vZHVsZS9zYXktY2hlZXJzLWNhcmQvc2F5LWNoZWVycy1jYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJEaXZ7bWFyZ2luOjBweCAwIDEwcHggMDtib3JkZXItYm90dG9tOjBweCBzb2xpZCBncmF5O1xuICAgIGlvbi1zY3JvbGx7b3ZlcmZsb3cteDphdXRvO2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOjE1cHggMDt9XG4gICAgLmlubGluZURpdnttYXJnaW46MCAxMHB4IDAgNXB4O3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MTBweDt3aWR0aDoxMDAlO2xldHRlci1zcGFjaW5nOjAuNXB4O1xuICAgICAgICBtaW4td2lkdGg6LXdlYmtpdC1maXQtY29udGVudDttaW4td2lkdGg6LW1vei1maXQtY29udGVudDttaW4td2lkdGg6Zml0LWNvbnRlbnQ7Zm9udC13ZWlnaHQ6NjAwO1xuICAgICAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCBnYWluc2Jvcm87Y29sb3I6IzAwMDtmb250LXNpemU6MTVweDtcbiAgICB9XG4gICAgLmNoYW5nZUZpbHRlcntjb2xvcjp2YXIoLS1oZWFkZXJDb2xvcik7Ym9yZGVyLWJvdHRvbToycHggc29saWQgdmFyKC0taGVhZGVyQ29sb3IpO31cbn1cblxuXG4uY2FyZExpc3REaXZ7XG4gICAgLmNhcmREaXZ7d2lkdGg6MTAwJTtoZWlnaHQ6MjAwcHg7fVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/sayCheersModule/say-cheers-card/say-cheers-card.page.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/sayCheersModule/say-cheers-card/say-cheers-card.page.ts ***!
      \*************************************************************************/

    /*! exports provided: SayCheersCardPage */

    /***/
    function srcAppSayCheersModuleSayCheersCardSayCheersCardPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SayCheersCardPage", function () {
        return SayCheersCardPage;
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


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/local-storage.service */
      "./src/app/services/local-storage.service.ts");
      /* harmony import */


      var _src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../src/assets/constant */
      "./src/assets/constant.ts");
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");

      var SayCheersCardPage = /*#__PURE__*/function () {
        function SayCheersCardPage(router, storageService, apiservices, zone, sendData) {
          _classCallCheck(this, SayCheersCardPage);

          this.router = router;
          this.storageService = storageService;
          this.apiservices = apiservices;
          this.zone = zone;
          this.sendData = sendData;
          this.filterIndex = 0;
          this.errorMessage = "";
          this.myinfiniteScrollCall = false;
          this.value = 0;
          this.sayCheersListData = this.sendData.sayCheers;
          console.log("say Cheers List User Data==", this.sayCheersListData);
        }

        _createClass(SayCheersCardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storageService.getStorage().then(function (res) {
              _this.sayCheersCard();

              console.log("ionic lifecycle called getStorage==>", res);
            });
          }
        }, {
          key: "changeFilter",
          value: function changeFilter(index, filterData) {
            var _this2 = this;

            this.zone.run(function () {
              console.log("filter data==", filterData);
              _this2.filterIndex = index;
              _this2.errorMessage = '';
              _this2.ArrayData = filterData;
            });
          }
        }, {
          key: "sayCheersCard",
          value: function sayCheersCard() {
            var _this3 = this;

            this.zone.run(function () {
              console.log("noticeBoard List api call function");
              var apikey = {
                "limit": _this3.value
              };

              _this3.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].sayCheersListApiUrl, apikey).subscribe(function (result) {
                console.log("noticeBoard List api result==", result);
                _this3.page_header = result.data.settings.page_header;

                if (result.status == 1 || result.status == '1') {
                  _this3.cardListData = result.data.list_data;
                  _this3.cardListsettings = result.data.settings; // data sent to next page "/say-cheers-message"

                  _this3.ArrayData = _this3.cardListData[0];
                } else {
                  _this3.errorMessage = result.message;
                  _this3.no_data_message = result.data.settings.no_data_msg;
                  _this3.showErrorImage = result.data.settings.no_data_image;
                  console.log("noticeBoard List Infinite Scroll12==", _this3.cardListData);
                }
              }, function (err) {
                _this3.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "goToMessage",
          value: function goToMessage(listData, ArrayData) {
            var _this4 = this;

            this.zone.run(function () {
              console.log("click card data==", listData);
              _this4.sendData.alldata = {
                listData: listData,
                ArrayData: ArrayData,
                sayCheersListData: _this4.sayCheersListData
              };
              _this4.sendData.myParam = _this4.cardListsettings;
              console.log("click card data sendData==", _this4.sendData);

              _this4.router.navigate(["/say-cheers-message"]);
            });
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(infiniteScroll) {
            var _this5 = this;

            this.myinfiniteScrollCall = true;
            console.log("Begin async operation 1==");
            setTimeout(function () {
              _this5.value = _this5.ArrayData.length;
              console.log("Begin async operation 2==", _this5.value);
              _this5.myInfiniteScroll = infiniteScroll;

              _this5.sayCheersCard();
            }, 500);
          }
        }]);

        return SayCheersCardPage;
      }();

      SayCheersCardPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
        }, {
          type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__["DataTransferService"]
        }];
      };

      SayCheersCardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-say-cheers-card',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./say-cheers-card.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sayCheersModule/say-cheers-card/say-cheers-card.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./say-cheers-card.page.scss */
        "./src/app/sayCheersModule/say-cheers-card/say-cheers-card.page.scss"))["default"]]
      })], SayCheersCardPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=sayCheersModule-say-cheers-card-say-cheers-card-module-es5.js.map