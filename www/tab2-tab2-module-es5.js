(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title class=\"ion-text-center\">\n      <img style=\"max-height:40px;object-fit:contain;margin:8px 0 0 0;\" [src]=\"apiservices?.sideMenuHeaderLogo\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\">\n    </ion-title>\n\n    <!-- No use of this button, it manage only header image on center position, like home page start -->\n    <ion-buttons slot=\"end\" class=\"headerUserImg\"><p style=\"width:40px\">&nbsp;</p></ion-buttons> \n    <!-- No use of this button, it manage only header image on center position, like home page end -->\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button><img src='../../assets/icon/sidemenuIcon.svg' style=\"width:20px;\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content [fullscreen]=\"true\">\n  <!-- <ion-row>\n    <ion-col [size]=\"4\" tappable (click)=\"dynamicModule('externalBrowser')\" class=\"ion-text-center\">\n      <ion-button class=\"dynamicButtonOutline\">InApp</ion-button>\n    </ion-col>\n    <ion-col [size]=\"4\" tappable (click)=\"dynamicModule('iframe')\" class=\"ion-text-center\">\n      <ion-button class=\"dynamicButtonOutline\">Iframe</ion-button>\n    </ion-col>\n    <ion-col [size]=\"4\" tappable (click)=\"dynamicModule('InAppBrowser')\" class=\"ion-text-center\">\n      <ion-button class=\"dynamicButtonOutline\">IAB</ion-button>\n    </ion-col>\n  </ion-row> -->\n\n  <div class=\"commonPagePadding\" *ngIf=\"menuList\">    \n    <div class=\"menuDiv\" *ngFor=\"let listArr of menuList;\">\n      <ion-row tappable (click)=\"listRedirection(listArr)\">\n        <ion-col [size]=\"3\">\n          <div class=\"rtImg\"><app-image-view [img]=\"listArr?.image\" [imageView]=\"false\" class=\"sliderFullDiv\"></app-image-view></div>\n        </ion-col>\n        <ion-col [size]=\"9\" class=\"autoMargin\">\n          <h3 class=\"titleText\">{{listArr?.title}}</h3>\n          <p class=\"subTitleText\">{{listArr?.sub_title}}</p>\n        </ion-col>\n        <!-- <ion-col [size]=\"2\" class=\"ion-text-right autoMargin\"><ion-icon name=\"arrow-forward\"></ion-icon></ion-col> -->\n      </ion-row>\n    </div>\n\n  </div>  \n\n\n\n  <div *ngIf=\"!menuList\">\n    <app-skelton-listview [iconPath]=\"'tabMenu'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button tappable (click)=\"headerClick()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n</ion-content>\n\n";
      /***/
    },

    /***/
    "./src/app/tab2/tab2-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab2/tab2-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab2PageRoutingModule */

    /***/
    function srcAppTab2Tab2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function () {
        return Tab2PageRoutingModule;
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


      var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab2.page */
      "./src/app/tab2/tab2.page.ts");

      var routes = [{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"]
      }];

      var Tab2PageRoutingModule = function Tab2PageRoutingModule() {
        _classCallCheck(this, Tab2PageRoutingModule);
      };

      Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab2PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab2/tab2.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.module.ts ***!
      \*************************************/

    /*! exports provided: Tab2PageModule */

    /***/
    function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
        return Tab2PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab2.page */
      "./src/app/tab2/tab2.page.ts");
      /* harmony import */


      var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab2-routing.module */
      "./src/app/tab2/tab2-routing.module.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/components.module */
      "./src/app/components/components.module.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");

      var Tab2PageModule = function Tab2PageModule() {
        _classCallCheck(this, Tab2PageModule);
      };

      Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tab2_routing_module__WEBPACK_IMPORTED_MODULE_6__["Tab2PageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_8__["ExploreContainerComponentModule"]],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
      })], Tab2PageModule);
      /***/
    },

    /***/
    "./src/app/tab2/tab2.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".menuDiv {\n  margin: 10px 0;\n  border-radius: 10px;\n  box-shadow: 0px 0px 3px gainsboro;\n  background: white;\n}\n.menuDiv .rtImg {\n  width: 50px;\n  height: 50px;\n  overflow: hidden;\n  padding: 2px;\n}\n.menuDiv .titleText {\n  margin: 0;\n  font-size: 15px;\n  font-weight: bold;\n}\n.menuDiv .subTitleText {\n  margin: 5px 0;\n  font-size: 12px;\n  color: gray;\n}\n.menuDiv ion-icon {\n  font-size: 25px;\n  color: gray;\n}\nion-content {\n  --background: #ededed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFTLGNBQUE7RUFBYyxtQkFBQTtFQUFtQixpQ0FBQTtFQUFpQyxpQkFBQTtBQUszRTtBQUpJO0VBQU8sV0FBQTtFQUFXLFlBQUE7RUFBWSxnQkFBQTtFQUFnQixZQUFBO0FBVWxEO0FBUEk7RUFBVyxTQUFBO0VBQVMsZUFBQTtFQUFlLGlCQUFBO0FBWXZDO0FBWEk7RUFBYyxhQUFBO0VBQWEsZUFBQTtFQUFlLFdBQUE7QUFnQjlDO0FBZkk7RUFBUyxlQUFBO0VBQWUsV0FBQTtBQW1CNUI7QUFqQkE7RUFBWSxxQkFBQTtBQXFCWiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudURpdnttYXJnaW46MTBweCAwO2JvcmRlci1yYWRpdXM6MTBweDtib3gtc2hhZG93OjBweCAwcHggM3B4IGdhaW5zYm9ybztiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAucnRJbWd7d2lkdGg6NTBweDtoZWlnaHQ6NTBweDtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzoycHg7XG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6dmFyKC0taGVhZGVyTGlnaHRDb2xvcik7Ym9yZGVyOjNweCBzb2xpZCB2YXIoLS1oZWFkZXJDb2xvcik7XG4gICAgfVxuICAgIC50aXRsZVRleHR7bWFyZ2luOjA7Zm9udC1zaXplOjE1cHg7Zm9udC13ZWlnaHQ6Ym9sZDt9XG4gICAgLnN1YlRpdGxlVGV4dHttYXJnaW46NXB4IDA7Zm9udC1zaXplOjEycHg7Y29sb3I6Z3JheTt9XG4gICAgaW9uLWljb257Zm9udC1zaXplOjI1cHg7Y29sb3I6Z3JheTt9XG59XG5pb24tY29udGVudHstLWJhY2tncm91bmQ6ICNlZGVkZWQ7fSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/tab2/tab2.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab2/tab2.page.ts ***!
      \***********************************/

    /*! exports provided: Tab2Page */

    /***/
    function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
        return Tab2Page;
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
      /*! ../provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/local-storage.service */
      "./src/app/services/local-storage.service.ts");
      /* harmony import */


      var _src_assets_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../src/assets/constant */
      "./src/assets/constant.ts");

      var Tab2Page = /*#__PURE__*/function () {
        function Tab2Page(router, storageService, zone, apiservices, sendData) {
          _classCallCheck(this, Tab2Page);

          this.router = router;
          this.storageService = storageService;
          this.zone = zone;
          this.apiservices = apiservices;
          this.sendData = sendData;
        }

        _createClass(Tab2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.storageService.getStorage().then(function (res) {
              _this.tabMenuApi();

              console.log("ionic lifecycle called getStorage==>", res);
            });
          }
        }, {
          key: "tabMenuApi",
          value: function tabMenuApi() {
            var _this2 = this;

            this.zone.run(function () {
              console.log("home page all data api call function");
              var apikey = {};

              _this2.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].tabMenuData, apikey).subscribe(function (result) {
                console.log("home page all data api result11111", result);

                if (result.status == 1 || result.status == '1') {
                  _this2.menuList = result.data.menuList;
                } else {
                  _this2.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this2.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "listRedirection",
          value: function listRedirection(toDoListData) {
            var _this3 = this;

            this.sendData.alldata = toDoListData;
            this.zone.run(function () {
              if (toDoListData.link != '') {
                if (toDoListData.identifier == "external") {
                  _this3.apiservices.iab.create(toDoListData.link, "_system", _this3.apiservices.options);
                } else {
                  _this3.router.navigate([toDoListData.link]);
                }
              } else {}
            });
          }
        }, {
          key: "dynamicModule",
          value: function dynamicModule(value) {
            var _this4 = this;

            this.storageService.getStorage().then(function (storedData) {
              console.log("dynamic module get storage==", storedData);
              storedData.login_token;
              storedData.deviceId;
              var clientId;

              if (storedData.checkSumKey == undefined) {
                _this4.apiservices.checkSumKey = _this4.apiservices.checkSumKey;
                clientId = _src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["APP_CONFIG"].clientId;
              } else {
                _this4.apiservices.checkSumKey = storedData.checkSumKey;
                clientId = storedData.client_Id;
              }

              var link = "https://benepik.in/pwa/mahlepwa";
              var link_will_be = link + "/?login_token=" + storedData.login_Token + "&device_Id=" + storedData.deviceId + "&check_sum_key=" + _this4.apiservices.checkSumKey + "&clientId=" + clientId;

              if (value == "externalBrowser") {
                _this4.apiservices.iab.create(link_will_be, "_system", _this4.apiservices.options);
              } else if (value == "InAppBrowser") {
                _this4.apiservices.iab.create(link_will_be, "_blank", _this4.apiservices.optionsInApp);
              } else {
                _this4.sendData.dynamicIframeData = link_will_be;

                _this4.router.navigate(["/dynamic-iframe"]); // this.iframeLink=this.iframeLink+'/?employeeId='+this.empCode+'&pass='+this.password;

              }
            });
          }
        }]);

        return Tab2Page;
      }();

      Tab2Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"]
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"]
        }];
      };

      Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab2.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab2.page.scss */
        "./src/app/tab2/tab2.page.scss"))["default"]]
      })], Tab2Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab2-tab2-module-es5.js.map