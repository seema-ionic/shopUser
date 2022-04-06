(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["RedeemModule-redeem-home-redeem-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/redeem-home/redeem-home.page.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/redeem-home/redeem-home.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRedeemModuleRedeemHomeRedeemHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{settingData?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n    <ion-buttons slot=\"end\" class=\"headericon\" tappable (click)=\"information()\">\n      <ion-icon name=\"information\"></ion-icon>\n      <!-- <img style=\"width:35px;\" [src]=\"settingData?.coins_image\" onerror=\"this.src='../../assets/watermark/watermark.png'\"> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content style=\"--background:#eaeaea;\">\n\n  <div *ngIf=\"redeemdata\" class=\"commonPagePadding\">\n    <div class=\"redeemPointDiv\">\n      <br>\n      <ion-row class=\"ion-text-center\">\n        <ion-col size=\"12\">\n          <img style=\"width:70px;\" [src]=\"settingData?.wallet_icon\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n        </ion-col>\n        <ion-col  size=\"12\">\n          <h5>{{settingData?.heading}}</h5>\n          <p *ngIf=\"allData?.balance!=''\" class=\"totalPointText\">&#8377; {{allData?.balance}}</p>\n        </ion-col>\n        <ion-col *ngIf=\"allData?.balance!=''\" size=\"12\">\n          <!-- dynamicButtonOutline -->\n          <ion-button class=\"dynamicButtonColor\" [disabled]=\"allData?.balance<1\" tappable (click)=\"redeemNow()\">{{settingData?.button_text}}</ion-button>\n        </ion-col>\n      </ion-row>\n      <br>\n    </div>\n\n\n\n    \n    \n    \n    \n    \n    \n\n    <!-- <div class=\"rewardStatusDiv\" *ngFor=\"let balanceData of redeemdata?.data?.milestone\">\n      <ion-row class=\"balanceRowDiv\">\n        <ion-col [size]=\"2\" class=\"autoMargin ion-text-center\">\n          <img [src]=\"balanceData?.icon_path\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n        </ion-col>\n        <ion-col [size]=\"8\" class=\"autoMargin\"><p class=\"noMargin\">{{balanceData?.milestone}}</p></ion-col>\n        <ion-col [size]=\"2\" class=\"ion-text-right autoMargin\">\n          <p *ngIf=\"balanceData?.credit - balanceData?.debit>0\" class=\"greenText\">\n            <span>+</span>{{balanceData?.credit - balanceData?.debit}}\n          </p>\n          <p *ngIf=\"balanceData?.credit - balanceData?.debit<0\" class=\"redText\">\n            {{balanceData?.credit - balanceData?.debit}}\n          </p>\n        </ion-col>\n      </ion-row>\n    </div> -->\n    <div class=\"rewardStatusDiv\">\n      <ion-row class=\"balanceRowDiv\">\n        <ion-col [size]=\"2\" class=\"autoMargin ion-text-center\">\n          <img [src]=\"settingData?.points_earned_icon\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n        </ion-col>\n        <ion-col [size]=\"7\" class=\"autoMargin\"><p class=\"noMargin\">{{settingData?.points_earned}}</p></ion-col>\n        <ion-col [size]=\"3\" class=\"ion-text-right autoMargin\">\n          <p class=\"greenText\">{{allData?.credit}}</p>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div class=\"rewardStatusDiv\">\n      <ion-row class=\"balanceRowDiv\">\n        <ion-col [size]=\"2\" class=\"autoMargin ion-text-center\">\n          <img [src]=\"settingData?.points_redeem_icon\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n        </ion-col>\n        <ion-col [size]=\"7\" class=\"autoMargin\"><p class=\"noMargin\">{{settingData?.points_redeemed}}</p></ion-col>\n        <ion-col [size]=\"3\" class=\"ion-text-right autoMargin\">\n          <p class=\"greenText\">{{allData?.debit}}</p>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div class=\"rewardStatusDiv\">\n      <ion-row class=\"balanceRowDiv\">\n        <ion-col [size]=\"2\" class=\"autoMargin ion-text-center\">\n          <img [src]=\"settingData?.points_value_icon\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n        </ion-col>\n        <ion-col [size]=\"7\" class=\"autoMargin\"><p class=\"noMargin\">{{settingData?.points_value}}</p></ion-col>\n        <ion-col [size]=\"3\" class=\"ion-text-right autoMargin\">\n          <p class=\"greenText\">{{allData?.denominator}}</p>\n        </ion-col>\n      </ion-row>\n    </div>\n\n\n\n\n\n\n\n    <div class=\"rewardStatusDiv\" style=\"background:transparent;padding:0;\">\n      <div class=\"walletSecDiv\">\n        <ion-row class=\"ion-text-center\">\n          <ion-col [size]=\"6\" tappable (click)=\"statementOrder(redeemdata, 'statement');\">\n            <div class=\"walletDiv\">\n              <div class=\"newDiv\">\n                <div class=\"greenIconDiv\">\n                  <img [src]=\"settingData?.wallet_summary_icon\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n                </div>\n                <p>{{settingData?.wallet_summary}}</p>\n              </div>\n            </div>\n          </ion-col>\n          <ion-col [size]=\"6\" tappable (click)=\"statementOrder(redeemdata, 'order');\">\n            <div class=\"walletDiv\">\n              <div class=\"newDiv\">\n                <div class=\"greenIconDiv\">\n                  <img [src]=\"settingData?.my_purchase_icon\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n                </div>\n                <p>{{settingData?.my_purchases}}</p>\n              </div>\n            </div>\n          </ion-col>\n          <!-- <ion-col [size]=\"10\" class=\"autoMargin\"><p class=\"noMargin\">{{settingData?.account_statement}}</p></ion-col>\n          <ion-col [size]=\"2\" class=\"ion-text-right\">\n            <img [src]=\"settingData?.tab_icon\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n          </ion-col> -->\n        </ion-row>\n      </div>\n      <!-- <div class=\"walletSecDiv\" tappable (click)=\"statementOrder(redeemdata, 'order');\">\n        <div class=\"walletDiv\">\n          <ion-row>\n            <ion-col [size]=\"10\" class=\"autoMargin\"><p class=\"noMargin\">{{settingData?.voucher_history}}</p></ion-col>\n            <ion-col [size]=\"2\" class=\"ion-text-right\">\n              <img [src]=\"settingData?.tab_icon\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n            </ion-col>\n          </ion-row>\n        </div>\n      </div> -->\n    </div>\n\n  </div>\n\n  <div *ngIf=\"!redeemdata\">\n    <app-skelton-listview [iconPath]=\"'redeemHome'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/RedeemModule/redeem-home/redeem-home-routing.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/RedeemModule/redeem-home/redeem-home-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: RedeemHomePageRoutingModule */

    /***/
    function srcAppRedeemModuleRedeemHomeRedeemHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedeemHomePageRoutingModule", function () {
        return RedeemHomePageRoutingModule;
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


      var _redeem_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./redeem-home.page */
      "./src/app/RedeemModule/redeem-home/redeem-home.page.ts");

      var routes = [{
        path: '',
        component: _redeem_home_page__WEBPACK_IMPORTED_MODULE_3__["RedeemHomePage"]
      }];

      var RedeemHomePageRoutingModule = function RedeemHomePageRoutingModule() {
        _classCallCheck(this, RedeemHomePageRoutingModule);
      };

      RedeemHomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RedeemHomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/RedeemModule/redeem-home/redeem-home.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/RedeemModule/redeem-home/redeem-home.module.ts ***!
      \****************************************************************/

    /*! exports provided: RedeemHomePageModule */

    /***/
    function srcAppRedeemModuleRedeemHomeRedeemHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedeemHomePageModule", function () {
        return RedeemHomePageModule;
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


      var _redeem_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./redeem-home-routing.module */
      "./src/app/RedeemModule/redeem-home/redeem-home-routing.module.ts");
      /* harmony import */


      var _redeem_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./redeem-home.page */
      "./src/app/RedeemModule/redeem-home/redeem-home.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var RedeemHomePageModule = function RedeemHomePageModule() {
        _classCallCheck(this, RedeemHomePageModule);
      };

      RedeemHomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _redeem_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["RedeemHomePageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_redeem_home_page__WEBPACK_IMPORTED_MODULE_6__["RedeemHomePage"]]
      })], RedeemHomePageModule);
      /***/
    },

    /***/
    "./src/app/RedeemModule/redeem-home/redeem-home.page.scss":
    /*!****************************************************************!*\
      !*** ./src/app/RedeemModule/redeem-home/redeem-home.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRedeemModuleRedeemHomeRedeemHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headericon {\n  margin: 0 15px 0 0;\n}\n.headericon ion-icon {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: var(--headerLightColor);\n  color: #fff;\n  padding: 2px;\n}\n.redeemPointDiv {\n  background: #eaeaea;\n  border-radius: 0px;\n}\n.redeemPointDiv .totalPointText {\n  margin: 15px 0 0px 0px;\n  font-size: 18px;\n  font-weight: 600;\n  color: #000000b0;\n}\n.redeemPointDiv .iconcss {\n  height: 45px;\n  width: 45px;\n}\n.redeemPointDiv .parasize {\n  font-size: 11px;\n}\n.rewardStatusDiv {\n  padding: 0 10px;\n  background: #fff;\n  margin: 0 0 10px 0px;\n  border-radius: 10px;\n}\n.rewardStatusDiv .balanceRowDiv {\n  border-bottom: 0px solid gainsboro;\n}\n.rewardStatusDiv .balanceRowDiv p {\n  font-size: 4vw;\n  font-weight: bold;\n}\n.rewardStatusDiv .balanceRowDiv img {\n  width: 30px;\n  height: 30px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.rewardStatusDiv .balanceRowDiv .greenText {\n  color: var(--headerColor);\n  font-weight: bold;\n}\n.rewardStatusDiv .balanceRowDiv .redText {\n  color: red;\n}\n.rewardStatusDiv .walletSecDiv .walletDiv {\n  background: #fff;\n  margin: 5px 0px;\n  border-radius: 10px;\n  min-height: 150px;\n  padding: 10px;\n  position: relative;\n  width: 100%;\n  box-shadow: 0px 1px 5px #c7c7c7;\n}\n.rewardStatusDiv .walletSecDiv .walletDiv .newDiv {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  transform: translate(-50%, -50%);\n}\n.rewardStatusDiv .walletSecDiv .walletDiv .newDiv p {\n  font-size: 4vw;\n  color: #313131;\n  font-weight: bold;\n  margin: 10px 0 0 0;\n}\n.rewardStatusDiv .walletSecDiv .walletDiv .newDiv .greenIconDiv {\n  background: var(--headerColor);\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  margin: auto;\n  padding: 15px;\n}\n.rewardStatusDiv .walletSecDiv .walletDiv .newDiv .greenIconDiv img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUmVkZWVtTW9kdWxlL3JlZGVlbS1ob21lL3JlZGVlbS1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFZLGtCQUFBO0FBRVo7QUFESTtFQUFTLFdBQUE7RUFBVyxZQUFBO0VBQVksa0JBQUE7RUFBa0IsbUNBQUE7RUFBbUMsV0FBQTtFQUFXLFlBQUE7QUFTcEc7QUFQQTtFQUFnQixtQkFBQTtFQUFtQixrQkFBQTtBQVluQztBQVhJO0VBQWdCLHNCQUFBO0VBQXNCLGVBQUE7RUFBZSxnQkFBQTtFQUFnQixnQkFBQTtBQWlCekU7QUFoQkk7RUFBUyxZQUFBO0VBQVksV0FBQTtBQW9CekI7QUFuQkk7RUFBVSxlQUFBO0FBc0JkO0FBcEJBO0VBQWlCLGVBQUE7RUFBZSxnQkFBQTtFQUFnQixvQkFBQTtFQUFvQixtQkFBQTtBQTJCcEU7QUExQkk7RUFBZSxrQ0FBQTtBQTZCbkI7QUE1QlE7RUFBRSxjQUFBO0VBQWMsaUJBQUE7QUFnQ3hCO0FBL0JRO0VBQUksV0FBQTtFQUFXLFlBQUE7RUFBWSxzQkFBQTtLQUFBLG1CQUFBO0FBb0NuQztBQW5DUTtFQUFXLHlCQUFBO0VBQXlCLGlCQUFBO0FBdUM1QztBQXRDUTtFQUFTLFVBQUE7QUF5Q2pCO0FBdENRO0VBQVcsZ0JBQUE7RUFBZ0IsZUFBQTtFQUFlLG1CQUFBO0VBQW1CLGlCQUFBO0VBQWlCLGFBQUE7RUFBYSxrQkFBQTtFQUN2RixXQUFBO0VBQVcsK0JBQUE7QUErQ3ZCO0FBOUNZO0VBQVEsa0JBQUE7RUFBa0IsUUFBQTtFQUFRLFNBQUE7RUFBUywwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFBa0IsZ0NBQUE7QUFxRHpFO0FBcERnQjtFQUFFLGNBQUE7RUFBYyxjQUFBO0VBQWMsaUJBQUE7RUFBaUIsa0JBQUE7QUEwRC9EO0FBekRnQjtFQUFjLDhCQUFBO0VBQThCLFdBQUE7RUFBVyxZQUFBO0VBQVksa0JBQUE7RUFBa0IsWUFBQTtFQUFZLGFBQUE7QUFpRWpIO0FBaEVvQjtFQUFJLFdBQUE7RUFBVyxZQUFBO0VBQVksc0JBQUE7S0FBQSxtQkFBQTtBQXFFL0MiLCJmaWxlIjoic3JjL2FwcC9SZWRlZW1Nb2R1bGUvcmVkZWVtLWhvbWUvcmVkZWVtLWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcmljb257bWFyZ2luOjAgMTVweCAwIDA7XG4gICAgaW9uLWljb257d2lkdGg6MjBweDtoZWlnaHQ6MjBweDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOnZhcigtLWhlYWRlckxpZ2h0Q29sb3IpO2NvbG9yOiNmZmY7cGFkZGluZzoycHg7fVxufVxuLnJlZGVlbVBvaW50RGl2e2JhY2tncm91bmQ6I2VhZWFlYTtib3JkZXItcmFkaXVzOjBweDtcbiAgICAudG90YWxQb2ludFRleHR7bWFyZ2luOjE1cHggMCAwcHggMHB4O2ZvbnQtc2l6ZToxOHB4O2ZvbnQtd2VpZ2h0OjYwMDtjb2xvcjojMDAwMDAwYjA7fVxuICAgIC5pY29uY3Nze2hlaWdodDo0NXB4O3dpZHRoOjQ1cHg7fVxuICAgIC5wYXJhc2l6ZXtmb250LXNpemU6MTFweDt9XG59XG4ucmV3YXJkU3RhdHVzRGl2e3BhZGRpbmc6MCAxMHB4O2JhY2tncm91bmQ6I2ZmZjttYXJnaW46MCAwIDEwcHggMHB4O2JvcmRlci1yYWRpdXM6MTBweDtcbiAgICAuYmFsYW5jZVJvd0Rpdntib3JkZXItYm90dG9tOjBweCBzb2xpZCBnYWluc2Jvcm87XG4gICAgICAgIHB7Zm9udC1zaXplOjR2dztmb250LXdlaWdodDpib2xkO31cbiAgICAgICAgaW1ne3dpZHRoOjMwcHg7aGVpZ2h0OjMwcHg7b2JqZWN0LWZpdDpjb250YWluO31cbiAgICAgICAgLmdyZWVuVGV4dHtjb2xvcjp2YXIoLS1oZWFkZXJDb2xvcik7Zm9udC13ZWlnaHQ6Ym9sZDt9XG4gICAgICAgIC5yZWRUZXh0e2NvbG9yOnJlZDt9XG4gICAgfVxuICAgIC53YWxsZXRTZWNEaXZ7XG4gICAgICAgIC53YWxsZXREaXZ7YmFja2dyb3VuZDojZmZmO21hcmdpbjo1cHggMHB4O2JvcmRlci1yYWRpdXM6MTBweDttaW4taGVpZ2h0OjE1MHB4O3BhZGRpbmc6MTBweDtwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7Ym94LXNoYWRvdzowcHggMXB4IDVweCAjYzdjN2M3O1xuICAgICAgICAgICAgLm5ld0Rpdntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO3dpZHRoOmZpdC1jb250ZW50O3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgcHtmb250LXNpemU6NHZ3O2NvbG9yOiMzMTMxMzE7Zm9udC13ZWlnaHQ6Ym9sZDttYXJnaW46MTBweCAwIDAgMDt9XG4gICAgICAgICAgICAgICAgLmdyZWVuSWNvbkRpdntiYWNrZ3JvdW5kOnZhcigtLWhlYWRlckNvbG9yKTt3aWR0aDo3MHB4O2hlaWdodDo3MHB4O2JvcmRlci1yYWRpdXM6NTAlO21hcmdpbjphdXRvO3BhZGRpbmc6MTVweDtcbiAgICAgICAgICAgICAgICAgICAgaW1ne3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b2JqZWN0LWZpdDpjb250YWluO31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/RedeemModule/redeem-home/redeem-home.page.ts":
    /*!**************************************************************!*\
      !*** ./src/app/RedeemModule/redeem-home/redeem-home.page.ts ***!
      \**************************************************************/

    /*! exports provided: RedeemHomePage */

    /***/
    function srcAppRedeemModuleRedeemHomeRedeemHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedeemHomePage", function () {
        return RedeemHomePage;
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

      var RedeemHomePage = /*#__PURE__*/function () {
        function RedeemHomePage(router, storageService, apiservices, sendData, zone) {
          _classCallCheck(this, RedeemHomePage);

          this.router = router;
          this.storageService = storageService;
          this.apiservices = apiservices;
          this.sendData = sendData;
          this.zone = zone;
        }

        _createClass(RedeemHomePage, [{
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
              var apiKey = {};
              console.log("redeem home page api key", apiKey);

              _this2.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].redeemFirstPage, apiKey).subscribe(function (result) {
                console.log("redeem home page Api Result==", result);

                if (result.status == 1 || result.status == "1") {
                  _this2.redeemdata = result;
                  _this2.allData = result.data;
                  _this2.settingData = result.data.settings;
                } else {
                  _this2.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                console.log("last array of account statement==", err);

                _this2.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "information",
          value: function information() {
            var _this3 = this;

            this.zone.run(function () {
              var termData = {
                "page_title": _this3.allData.settings.tnc_header,
                "discription": _this3.allData.tnc
              };
              _this3.sendData.myParam = termData;

              _this3.router.navigate(["/redeem-information"]);
            });
          }
        }, {
          key: "redeemNow",
          value: function redeemNow() {
            var _this4 = this;

            this.zone.run(function () {
              _this4.router.navigate(["/redeem-voucher-category-list"]);
            });
          }
        }, {
          key: "statementOrder",
          value: function statementOrder(clickRedeemData, redirectionValue) {
            var _this5 = this;

            this.zone.run(function () {
              _this5.sendData.myParam = clickRedeemData;
              console.log("click value==", redirectionValue);

              if (redirectionValue == "statement") {
                _this5.router.navigate(["/accountstatement"]);
              } else {
                _this5.router.navigate(["/redeem-my-order-list"]);
              }
            });
          }
        }]);

        return RedeemHomePage;
      }();

      RedeemHomePage.ctorParameters = function () {
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

      RedeemHomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-redeem-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./redeem-home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/redeem-home/redeem-home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./redeem-home.page.scss */
        "./src/app/RedeemModule/redeem-home/redeem-home.page.scss"))["default"]]
      })], RedeemHomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=RedeemModule-redeem-home-redeem-home-module-es5.js.map