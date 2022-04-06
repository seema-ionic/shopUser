(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["force-optional-update-force-optional-update-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/force-optional-update/force-optional-update.page.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/force-optional-update/force-optional-update.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppForceOptionalUpdateForceOptionalUpdatePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content style=\"position:relative;\" >\n\n  <div class=\"backgroundDiv\" [style.background]=\"'url('+showAllData?.update_image+')'\">\n\n    <div class=\"updateDataDiv\">\n      <div class=\"innerTextDiv\">\n        <ion-row>\n          <ion-col [size]=\"12\"><p class=\"titleText\">{{showAllData?.title}}</p></ion-col>\n          <ion-col [size]=\"12\"><p class=\"discriptionText\">{{showAllData?.content}}</p></ion-col>\n        </ion-row>\n        <br>\n        <ion-row>\n          <ion-col [size]=\"2\"></ion-col>\n          <ion-col [size]=\"8\">\n            <ion-button *ngIf=\"appStatus==1 || appStatus==2\" class=\"dynamicButtonColor\" tappable (click)=\"updateApp(showAllData)\">{{showAllData?.button_text}}</ion-button>\n            <p class=\"continueAppDiv\" *ngIf=\"appStatus==1 || appStatus=='1'\" tappable (click)=\"goToHome()\" >{{showAllData?.button_text2}}</p>\n          </ion-col>\n          <ion-col [size]=\"2\"></ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/force-optional-update/force-optional-update-routing.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/force-optional-update/force-optional-update-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: ForceOptionalUpdatePageRoutingModule */

    /***/
    function srcAppForceOptionalUpdateForceOptionalUpdateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForceOptionalUpdatePageRoutingModule", function () {
        return ForceOptionalUpdatePageRoutingModule;
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


      var _force_optional_update_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./force-optional-update.page */
      "./src/app/force-optional-update/force-optional-update.page.ts");

      var routes = [{
        path: '',
        component: _force_optional_update_page__WEBPACK_IMPORTED_MODULE_3__["ForceOptionalUpdatePage"]
      }];

      var ForceOptionalUpdatePageRoutingModule = function ForceOptionalUpdatePageRoutingModule() {
        _classCallCheck(this, ForceOptionalUpdatePageRoutingModule);
      };

      ForceOptionalUpdatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForceOptionalUpdatePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/force-optional-update/force-optional-update.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/force-optional-update/force-optional-update.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ForceOptionalUpdatePageModule */

    /***/
    function srcAppForceOptionalUpdateForceOptionalUpdateModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForceOptionalUpdatePageModule", function () {
        return ForceOptionalUpdatePageModule;
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


      var _force_optional_update_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./force-optional-update-routing.module */
      "./src/app/force-optional-update/force-optional-update-routing.module.ts");
      /* harmony import */


      var _force_optional_update_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./force-optional-update.page */
      "./src/app/force-optional-update/force-optional-update.page.ts");

      var ForceOptionalUpdatePageModule = function ForceOptionalUpdatePageModule() {
        _classCallCheck(this, ForceOptionalUpdatePageModule);
      };

      ForceOptionalUpdatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _force_optional_update_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForceOptionalUpdatePageRoutingModule"]],
        declarations: [_force_optional_update_page__WEBPACK_IMPORTED_MODULE_6__["ForceOptionalUpdatePage"]]
      })], ForceOptionalUpdatePageModule);
      /***/
    },

    /***/
    "./src/app/force-optional-update/force-optional-update.page.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/force-optional-update/force-optional-update.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppForceOptionalUpdateForceOptionalUpdatePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".backgroundDiv {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.updateDataDiv {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  border: 0;\n  margin: auto;\n  transform: translate(0%, -50%);\n  text-align: center;\n  color: #fff;\n  padding: 0 15px;\n}\n\n.updateDataDiv .innerTextDiv {\n  background: #fff;\n  border-radius: 10px;\n  padding: 15px;\n  color: gray;\n}\n\n.updateDataDiv .innerTextDiv .titleText {\n  font-size: 18px;\n  margin: 0;\n  font-weight: bold;\n}\n\n.updateDataDiv .innerTextDiv .discriptionText {\n  font-size: 13px;\n  margin: 10px 0 0 0;\n  line-height: 20px;\n}\n\n.updateDataDiv .innerTextDiv .continueAppDiv {\n  color: var(--Appcolor);\n  margin: 15px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yY2Utb3B0aW9uYWwtdXBkYXRlL2ZvcmNlLW9wdGlvbmFsLXVwZGF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBZSxlQUFBO0VBQWUsV0FBQTtFQUFXLFlBQUE7RUFBWSxvQkFBQTtLQUFBLGlCQUFBO0FBS3JEOztBQUpJO0VBQWUsa0JBQUE7RUFBa0IsUUFBQTtFQUFRLE9BQUE7RUFBTyxRQUFBO0VBQVEsU0FBQTtFQUFTLFlBQUE7RUFDN0QsOEJBQUE7RUFBOEIsa0JBQUE7RUFBa0IsV0FBQTtFQUFXLGVBQUE7QUFnQm5FOztBQWZRO0VBQWMsZ0JBQUE7RUFBZ0IsbUJBQUE7RUFBbUIsYUFBQTtFQUFhLFdBQUE7QUFxQnRFOztBQXBCWTtFQUFXLGVBQUE7RUFBZSxTQUFBO0VBQVMsaUJBQUE7QUF5Qi9DOztBQXhCWTtFQUFpQixlQUFBO0VBQWUsa0JBQUE7RUFBa0IsaUJBQUE7QUE2QjlEOztBQTVCWTtFQUFnQixzQkFBQTtFQUFzQixrQkFBQTtBQWdDbEQiLCJmaWxlIjoic3JjL2FwcC9mb3JjZS1vcHRpb25hbC11cGRhdGUvZm9yY2Utb3B0aW9uYWwtdXBkYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kRGl2e3Bvc2l0aW9uOmZpeGVkO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b2JqZWN0LWZpdDpjb3Zlcjs7fVxuICAgIC51cGRhdGVEYXRhRGl2e3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDowO3JpZ2h0OjA7Ym9yZGVyOjA7bWFyZ2luOmF1dG87XG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoMCUsIC01MCUpO3RleHQtYWxpZ246Y2VudGVyO2NvbG9yOiNmZmY7cGFkZGluZzowIDE1cHg7XG4gICAgICAgIC5pbm5lclRleHREaXZ7YmFja2dyb3VuZDojZmZmO2JvcmRlci1yYWRpdXM6MTBweDtwYWRkaW5nOjE1cHg7Y29sb3I6Z3JheTtcbiAgICAgICAgICAgIC50aXRsZVRleHR7Zm9udC1zaXplOjE4cHg7bWFyZ2luOjA7Zm9udC13ZWlnaHQ6Ym9sZDt9XG4gICAgICAgICAgICAuZGlzY3JpcHRpb25UZXh0e2ZvbnQtc2l6ZToxM3B4O21hcmdpbjoxMHB4IDAgMCAwO2xpbmUtaGVpZ2h0OjIwcHg7fVxuICAgICAgICAgICAgLmNvbnRpbnVlQXBwRGl2e2NvbG9yOnZhcigtLUFwcGNvbG9yKTttYXJnaW46MTVweCAwIDAgMDt9XG4gICAgICAgIH1cbiAgICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/force-optional-update/force-optional-update.page.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/force-optional-update/force-optional-update.page.ts ***!
      \*********************************************************************/

    /*! exports provided: ForceOptionalUpdatePage */

    /***/
    function srcAppForceOptionalUpdateForceOptionalUpdatePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForceOptionalUpdatePage", function () {
        return ForceOptionalUpdatePage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");
      /* harmony import */


      var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");

      var ForceOptionalUpdatePage = /*#__PURE__*/function () {
        function ForceOptionalUpdatePage(router, zone, apiServices, menuCtrl, sendData) {
          _classCallCheck(this, ForceOptionalUpdatePage);

          this.router = router;
          this.zone = zone;
          this.apiServices = apiServices;
          this.menuCtrl = menuCtrl;
          this.sendData = sendData;
          this.showAllData = "";
          this.showAllData = this.sendData.myParam;
          console.log("showing data form force update==", this.showAllData);
          this.appStatus = this.sendData.alldata;
          console.log("showing data button form force update==", this.appStatus);
        }

        _createClass(ForceOptionalUpdatePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "updateApp",
          value: function updateApp(linkUpdate) {
            var _this = this;

            this.zone.run(function () {
              _this.apiServices.iab.create(linkUpdate.update_link, "_system", _this.apiServices.options);
            });
          }
        }, {
          key: "goToHome",
          value: function goToHome() {
            var _this2 = this;

            this.zone.run(function () {
              _this2.router.navigate(["/tabs"], {
                replaceUrl: true
              });
            });
          }
        }]);

        return ForceOptionalUpdatePage;
      }();

      ForceOptionalUpdatePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_5__["ApiservicesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"]
        }];
      };

      ForceOptionalUpdatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-force-optional-update',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./force-optional-update.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/force-optional-update/force-optional-update.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./force-optional-update.page.scss */
        "./src/app/force-optional-update/force-optional-update.page.scss"))["default"]]
      })], ForceOptionalUpdatePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=force-optional-update-force-optional-update-module-es5.js.map