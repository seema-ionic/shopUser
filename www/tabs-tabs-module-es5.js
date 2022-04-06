(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\" style=\"position:relative;\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"home\"></ion-icon>\n      <!-- <ion-icon name=\"home-outline\"></ion-icon> -->\n      <!-- <ion-label>Home</ion-label> -->\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"apps-outline\"></ion-icon>\n      <!-- <ion-label>My Brands</ion-label> -->\n    </ion-tab-button>\n    <ion-tab-button tab=\"redeem-home\">\n      <ion-icon name=\"trophy-outline\"></ion-icon>\n    </ion-tab-button>\n   \n\n    <ion-tab-button tab=\"tab3\">\n      <div class=\"notificationDiv\">\n        <ion-icon name=\"notifications\"></ion-icon>\n        <!-- <p *ngIf=\"apiservices?.alertCount>=1\"></p> -->\n        <p *ngIf=\"apiservices?.show_alert_dot==1\">\n          <span>{{apiservices?.show_alert_count}}</span>\n        </p>\n      </div>\n      <!-- <ion-icon name=\"notifications-outline\"></ion-icon> -->\n      <!-- <ion-label>Alerts</ion-label> -->\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n";
      /***/
    },

    /***/
    "./src/app/tabs/tabs-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tabs/tabs-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: TabsPageRoutingModule */

    /***/
    function srcAppTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
        return TabsPageRoutingModule;
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


      var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tabs.page */
      "./src/app/tabs/tabs.page.ts");

      var routes = [{
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [{
          path: 'tab1',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab1-tab1-module */
            [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("common"), __webpack_require__.e("tab1-tab1-module")]).then(__webpack_require__.bind(null,
            /*! ../tab1/tab1.module */
            "./src/app/tab1/tab1.module.ts")).then(function (m) {
              return m.Tab1PageModule;
            });
          }
        }, {
          path: 'tab2',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab2-tab2-module */
            [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("common"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null,
            /*! ../tab2/tab2.module */
            "./src/app/tab2/tab2.module.ts")).then(function (m) {
              return m.Tab2PageModule;
            });
          }
        }, {
          path: 'redeem-home',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | RedeemModule-redeem-home-redeem-home-module */
            [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("RedeemModule-redeem-home-redeem-home-module")]).then(__webpack_require__.bind(null,
            /*! ../RedeemModule/redeem-home/redeem-home.module */
            "./src/app/RedeemModule/redeem-home/redeem-home.module.ts")).then(function (m) {
              return m.RedeemHomePageModule;
            });
          }
        }, {
          path: 'tab3',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab3-tab3-module */
            [__webpack_require__.e("default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"), __webpack_require__.e("common"), __webpack_require__.e("tab3-tab3-module")]).then(__webpack_require__.bind(null,
            /*! ../tab3/tab3.module */
            "./src/app/tab3/tab3.module.ts")).then(function (m) {
              return m.Tab3PageModule;
            });
          }
        }, {
          path: '',
          redirectTo: '/tabs/tab1',
          pathMatch: 'full'
        }]
      } // {
      //   path: '',
      //   redirectTo: '/welcome-screens',
      //   pathMatch: 'full'
      // }
      ];

      var TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TabsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tabs/tabs.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.module.ts ***!
      \*************************************/

    /*! exports provided: TabsPageModule */

    /***/
    function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
        return TabsPageModule;
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


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tabs-routing.module */
      "./src/app/tabs/tabs-routing.module.ts");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tabs.page */
      "./src/app/tabs/tabs.page.ts");

      var TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
      })], TabsPageModule);
      /***/
    },

    /***/
    "./src/app/tabs/tabs.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tabs/tabs.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-tab-button {\n  color: #bfbfbf;\n  border-bottom: 3px solid var(--nonSelectedTabsBorder);\n  background: var(--nonSelectedTabsBg);\n}\n\n.tab-selected {\n  border-bottom: 3px solid var(--headerColor);\n  background: var(--selectedTabBg);\n}\n\n.tab-selected ion-label {\n  font-weight: bold;\n}\n\n.tab-selected ion-icon {\n  color: var(--headerColor);\n}\n\nion-icon {\n  font-size: 25px;\n}\n\n.notificationDiv {\n  position: relative;\n}\n\n.notificationDiv p {\n  position: absolute;\n  margin: 0;\n  font-size: 12px;\n  top: -5px;\n  right: -5px;\n  border-radius: 50%;\n  min-width: 20px;\n  min-height: 20px;\n  background: red;\n  text-align: center;\n  padding: 3px 2px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFlLGNBQUE7RUFBYyxxREFBQTtFQUFxRCxvQ0FBQTtBQUlsRjs7QUFIQTtFQUFjLDJDQUFBO0VBQTJDLGdDQUFBO0FBUXpEOztBQVBJO0VBQVUsaUJBQUE7QUFVZDs7QUFUSTtFQUFTLHlCQUFBO0FBWWI7O0FBVkE7RUFBUyxlQUFBO0FBY1Q7O0FBVkE7RUFBaUIsa0JBQUE7QUFjakI7O0FBYkk7RUFBRSxrQkFBQTtFQUFrQixTQUFBO0VBQVMsZUFBQTtFQUFlLFNBQUE7RUFBUyxXQUFBO0VBQVcsa0JBQUE7RUFBa0IsZUFBQTtFQUM5RSxnQkFBQTtFQUFnQixlQUFBO0VBQWUsa0JBQUE7RUFBa0IsZ0JBQUE7RUFBZ0IsV0FBQTtBQTBCekUiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1idXR0b257Y29sb3I6I2JmYmZiZjtib3JkZXItYm90dG9tOjNweCBzb2xpZCB2YXIoLS1ub25TZWxlY3RlZFRhYnNCb3JkZXIpO2JhY2tncm91bmQ6dmFyKC0tbm9uU2VsZWN0ZWRUYWJzQmcpO31cbi50YWItc2VsZWN0ZWR7Ym9yZGVyLWJvdHRvbTozcHggc29saWQgdmFyKC0taGVhZGVyQ29sb3IpO2JhY2tncm91bmQ6dmFyKC0tc2VsZWN0ZWRUYWJCZyk7XG4gICAgaW9uLWxhYmVse2ZvbnQtd2VpZ2h0OmJvbGQ7fVxuICAgIGlvbi1pY29ue2NvbG9yOnZhcigtLWhlYWRlckNvbG9yKTt9XG59XG5pb24taWNvbntmb250LXNpemU6MjVweDt9XG5cblxuXG4ubm90aWZpY2F0aW9uRGl2e3Bvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHB7cG9zaXRpb246YWJzb2x1dGU7bWFyZ2luOjA7Zm9udC1zaXplOjEycHg7dG9wOi01cHg7cmlnaHQ6LTVweDtib3JkZXItcmFkaXVzOjUwJTttaW4td2lkdGg6MjBweDtcbiAgICAgICAgbWluLWhlaWdodDoyMHB4O2JhY2tncm91bmQ6cmVkO3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6M3B4IDJweDtjb2xvcjojZmZmO1xuICAgIH1cbiAgICAvLyBwe3Bvc2l0aW9uOmFic29sdXRlO21hcmdpbjowO3RvcDowcHg7cmlnaHQ6NXB4O2JvcmRlci1yYWRpdXM6NTAlO2hlaWdodDo3cHg7d2lkdGg6N3B4O2JhY2tncm91bmQ6cmVkO31cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/tabs/tabs.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tabs/tabs.page.ts ***!
      \***********************************/

    /*! exports provided: TabsPage */

    /***/
    function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
        return TabsPage;
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


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/local-storage.service */
      "./src/app/services/local-storage.service.ts");
      /* harmony import */


      var _src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../src/assets/constant */
      "./src/assets/constant.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");

      var TabsPage = /*#__PURE__*/function () {
        function TabsPage(storageService, zone, apiservices, router, platform, storage, statusBar, sendData) {
          var _this = this;

          _classCallCheck(this, TabsPage);

          this.storageService = storageService;
          this.zone = zone;
          this.apiservices = apiservices;
          this.router = router;
          this.platform = platform;
          this.storage = storage;
          this.statusBar = statusBar;
          this.sendData = sendData;
          this.value = 0; // alert('tabs page is==> '+ this.router.url);

          this.platform.backButton.subscribeWithPriority(0, function () {
            _this.routerOutlets.forEach(function (outlet) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));
            });
          });
        }

        _createClass(TabsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.storageService.getStorage().then(function (res) {
              console.log("ionic lifecycle called getStorage==>", res); // this.alertListApi();
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            console.log("ion view will enter function==");
            console.log("ionViewDidEnter");
            this.apiservices.hrPolicyCount = 0;
            this.storageService.getStorage().then(function (storedData) {
              console.log("forceUpdate function0==", storedData);

              if (storedData != null && storedData.login_token) {
                console.log("forceUpdate function1==", storedData);

                _this2.forceUpdateFunction();
              } else {
                _this2.forceUpdateFunction();

                console.log("forceUpdate function2==", storedData);
              }
            });
          }
        }, {
          key: "forceUpdateFunction",
          value: function forceUpdateFunction() {
            var _this3 = this;

            this.zone.run(function () {
              console.log("forceUpdate function call==");

              _this3.storage.get('fcmToken').then(function (fcmToken) {
                console.log("call fcm new storage==", fcmToken);
                var apiKey = {
                  "fcm_token": fcmToken
                };
                console.log("api keys of forceupdate function on home page==", apiKey);

                _this3.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].forceUpdate, apiKey).subscribe(function (result) {
                  console.log("lifeCycle123=forceUpdate Api response123==", result);

                  if (result.status == "1" || result.status == 1) {
                    _this3.themeColor = result.data.theme;

                    if (_this3.platform.is("cordova")) {
                      // this.statusBar.backgroundColorByHexString(this.themeColor.topStatusBarColor);
                      _this3.statusBar.backgroundColorByHexString('var(--topStatusBarColor');
                    }

                    document.querySelector('body').style.setProperty('--headerColor', _this3.themeColor.headerColor);
                    document.querySelector('body').style.setProperty('--headerTitleOrMenu', _this3.themeColor.headerTitleOrMenu);
                    document.querySelector('body').style.setProperty('--headerLightColor', _this3.themeColor.headerLightColor);
                    document.querySelector('body').style.setProperty('--whiteHeader', _this3.themeColor.whiteHeader);
                    document.querySelector('body').style.setProperty('--blackHeaderText', _this3.themeColor.blackHeaderText);
                    document.querySelector('body').style.setProperty('--outlineBorderButton', _this3.themeColor.outlineBorderButton);
                    document.querySelector('body').style.setProperty('--transparentColor', _this3.themeColor.transparentColor);
                    document.querySelector('body').style.setProperty('--redTextColor', _this3.themeColor.redTextColor);
                    document.querySelector('body').style.setProperty('--blackTextColor', _this3.themeColor.blackTextColor);
                    document.querySelector('body').style.setProperty('--yellowTextColor', _this3.themeColor.yellowTextColor);
                    document.querySelector('body').style.setProperty('--toastSuccessColorApp', _this3.themeColor.toastSuccessColorApp);
                    document.querySelector('body').style.setProperty('--toastFailColorRed', _this3.themeColor.toastFailColorRed);
                    document.querySelector('body').style.setProperty('--nonSelectedTabs', _this3.themeColor.nonSelectedTabs);
                    document.querySelector('body').style.setProperty('--nonSelectedTabsBorder', _this3.themeColor.nonSelectedTabsBorder);
                    document.querySelector('body').style.setProperty('--nonSelectedTabsBg', _this3.themeColor.nonSelectedTabsBg);
                    document.querySelector('body').style.setProperty('--selectedTabBg', _this3.themeColor.selectedTabBg);
                    document.querySelector('body').style.setProperty('--topStatusBarColor', _this3.themeColor.topStatusBarColor);
                    _this3.apiservices.userImage = result.data.empData.profile_image;
                    _this3.apiservices.show_alert_dot = result.data.show_view;
                    _this3.apiservices.show_alert_count = result.data.view_count;
                    _this3.apiservices.blurCheck = result.blur;
                    _this3.apiservices.privacyPolicyData = result.data.privacypolicy;
                    _this3.apiservices.termsAndConditionData = result.data.termsofuse;
                    _this3.apiservices.contactHelpDesk = result.data.contacthelpdesk;
                    _this3.apiservices.sideMenuHeaderLogo = result.data.settings.logo;

                    if (result.data.isUpdate == 2) {
                      // forceUpdate  isUpdate==2
                      _this3.sendData.alldata = result.data.isUpdate;
                      _this3.sendData.myParam = result.data.forceUpdate;

                      _this3.router.navigate(["/force-optional-update"]);
                    }

                    if (result.data.isUpdate == 1) {
                      // optionalUpdate  isUpdate==1
                      if (_this3.apiservices.forceUpdateCount == 1) {
                        _this3.apiservices.forceUpdateCount = _this3.apiservices.forceUpdateCount + 1;
                        _this3.sendData.alldata = result.data.isUpdate;
                        _this3.sendData.myParam = result.data.forceUpdate;

                        _this3.router.navigate(["/force-optional-update"]);
                      } else {}
                    }

                    if (result.data.maintainence.app_down == "1" || result.data.clientStatus == "1" || result.data.empStatus == "1") {
                      _this3.sendData.myParam = {
                        "allData": result.data.maintainence
                      };

                      _this3.router.navigate(["/maintenance"]);
                    }

                    if (result.data.empStatus == '0' && result.data.empData.login_process == '0') {
                      _this3.apiservices.logOut();
                    }
                  }
                }, function (err) {
                  _this3.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
              });
            });
          }
        }]);

        return TabsPage;
      }();

      TabsPage.ctorParameters = function () {
        return [{
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"]
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_9__["DataTransferService"]
        }];
      };

      TabsPage.propDecorators = {
        routerOutlets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRouterOutlet"]]
        }]
      };
      TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tabs.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tabs.page.scss */
        "./src/app/tabs/tabs.page.scss"))["default"]]
      })], TabsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tabs-tabs-module-es5.js.map