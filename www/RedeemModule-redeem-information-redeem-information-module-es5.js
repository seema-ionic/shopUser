(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["RedeemModule-redeem-information-redeem-information-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/redeem-information/redeem-information.page.html":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/redeem-information/redeem-information.page.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRedeemModuleRedeemInformationRedeemInformationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{redeemData?.page_title}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row>\n    <ion-col [size]=\"12\">\n      <div class=\"informationDiv\">\n        <app-text-layout [text]=\"redeemData?.discription\" [className]=\"\" style=\"text-align:justify;line-height:22px;\"></app-text-layout>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/RedeemModule/redeem-information/redeem-information-routing.module.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/RedeemModule/redeem-information/redeem-information-routing.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: RedeemInformationPageRoutingModule */

    /***/
    function srcAppRedeemModuleRedeemInformationRedeemInformationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedeemInformationPageRoutingModule", function () {
        return RedeemInformationPageRoutingModule;
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


      var _redeem_information_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./redeem-information.page */
      "./src/app/RedeemModule/redeem-information/redeem-information.page.ts");

      var routes = [{
        path: '',
        component: _redeem_information_page__WEBPACK_IMPORTED_MODULE_3__["RedeemInformationPage"]
      }];

      var RedeemInformationPageRoutingModule = function RedeemInformationPageRoutingModule() {
        _classCallCheck(this, RedeemInformationPageRoutingModule);
      };

      RedeemInformationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RedeemInformationPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/RedeemModule/redeem-information/redeem-information.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/RedeemModule/redeem-information/redeem-information.module.ts ***!
      \******************************************************************************/

    /*! exports provided: RedeemInformationPageModule */

    /***/
    function srcAppRedeemModuleRedeemInformationRedeemInformationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedeemInformationPageModule", function () {
        return RedeemInformationPageModule;
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


      var _redeem_information_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./redeem-information-routing.module */
      "./src/app/RedeemModule/redeem-information/redeem-information-routing.module.ts");
      /* harmony import */


      var _redeem_information_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./redeem-information.page */
      "./src/app/RedeemModule/redeem-information/redeem-information.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var RedeemInformationPageModule = function RedeemInformationPageModule() {
        _classCallCheck(this, RedeemInformationPageModule);
      };

      RedeemInformationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _redeem_information_routing_module__WEBPACK_IMPORTED_MODULE_5__["RedeemInformationPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_redeem_information_page__WEBPACK_IMPORTED_MODULE_6__["RedeemInformationPage"]]
      })], RedeemInformationPageModule);
      /***/
    },

    /***/
    "./src/app/RedeemModule/redeem-information/redeem-information.page.scss":
    /*!******************************************************************************!*\
      !*** ./src/app/RedeemModule/redeem-information/redeem-information.page.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRedeemModuleRedeemInformationRedeemInformationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".informationDiv {\n  padding: 5px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUmVkZWVtTW9kdWxlL3JlZGVlbS1pbmZvcm1hdGlvbi9yZWRlZW0taW5mb3JtYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWdCLGlCQUFBO0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvUmVkZWVtTW9kdWxlL3JlZGVlbS1pbmZvcm1hdGlvbi9yZWRlZW0taW5mb3JtYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm9ybWF0aW9uRGl2e3BhZGRpbmc6NXB4IDE1cHg7fSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/RedeemModule/redeem-information/redeem-information.page.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/RedeemModule/redeem-information/redeem-information.page.ts ***!
      \****************************************************************************/

    /*! exports provided: RedeemInformationPage */

    /***/
    function srcAppRedeemModuleRedeemInformationRedeemInformationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RedeemInformationPage", function () {
        return RedeemInformationPage;
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


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");

      var RedeemInformationPage = /*#__PURE__*/function () {
        function RedeemInformationPage(sendData) {
          _classCallCheck(this, RedeemInformationPage);

          this.sendData = sendData;
          this.redeemData = this.sendData.myParam;
          console.log("redeemData use for information==", this.redeemData);
        }

        _createClass(RedeemInformationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RedeemInformationPage;
      }();

      RedeemInformationPage.ctorParameters = function () {
        return [{
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_2__["DataTransferService"]
        }];
      };

      RedeemInformationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-redeem-information',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./redeem-information.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/RedeemModule/redeem-information/redeem-information.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./redeem-information.page.scss */
        "./src/app/RedeemModule/redeem-information/redeem-information.page.scss"))["default"]]
      })], RedeemInformationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=RedeemModule-redeem-information-redeem-information-module-es5.js.map