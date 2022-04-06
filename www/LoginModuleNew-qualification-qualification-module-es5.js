(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["LoginModuleNew-qualification-qualification-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/LoginModuleNew/qualification/qualification.page.html":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/LoginModuleNew/qualification/qualification.page.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginModuleNewQualificationQualificationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{homePageData?.data?.welcome_aboard_page?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"bgImageDiv\">\n    <img [src]=\"homePageData?.common_background_img\">\n  </div>\n  <p><b>{{homePageData?.data?.welcome_aboard_page?.title}}</b></p>\n  <ion-row >\n    <ion-col [size]=\"12\" class=\"ion-no-padding ion-margin-bottom\">\n      <div class=\"bgColorDiv\" (click)=\"gotoNext('1')\">\n   <img src=\"/assets/login_icons/fresher.png\" class=\"fresherImg\"/>\n   <p class=\"ion-text-center whiteDiv\">{{homePageData?.data?.welcome_aboard_page?.fresher_div?.title}}</p>\n  </div>\n    </ion-col>\n    <ion-col [size]=\"12\" class=\"ion-no-padding\">\n      <div class=\"bgColorDiv\" (click)=\"gotoNext('2')\">\n      <img src=\"/assets/login_icons/experienced.png\" class=\"fresherImg\"/>\n      <p class=\"ion-text-center whiteDiv\">{{homePageData?.data?.welcome_aboard_page?.experience_div?.title}}</p>\n    </div>\n       </ion-col>\n  </ion-row>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/LoginModuleNew/qualification/qualification-routing.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/LoginModuleNew/qualification/qualification-routing.module.ts ***!
      \******************************************************************************/

    /*! exports provided: QualificationPageRoutingModule */

    /***/
    function srcAppLoginModuleNewQualificationQualificationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QualificationPageRoutingModule", function () {
        return QualificationPageRoutingModule;
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


      var _qualification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./qualification.page */
      "./src/app/LoginModuleNew/qualification/qualification.page.ts");

      var routes = [{
        path: '',
        component: _qualification_page__WEBPACK_IMPORTED_MODULE_3__["QualificationPage"]
      }];

      var QualificationPageRoutingModule = function QualificationPageRoutingModule() {
        _classCallCheck(this, QualificationPageRoutingModule);
      };

      QualificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], QualificationPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/LoginModuleNew/qualification/qualification.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/LoginModuleNew/qualification/qualification.module.ts ***!
      \**********************************************************************/

    /*! exports provided: QualificationPageModule */

    /***/
    function srcAppLoginModuleNewQualificationQualificationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QualificationPageModule", function () {
        return QualificationPageModule;
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


      var _qualification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./qualification-routing.module */
      "./src/app/LoginModuleNew/qualification/qualification-routing.module.ts");
      /* harmony import */


      var _qualification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./qualification.page */
      "./src/app/LoginModuleNew/qualification/qualification.page.ts");

      var QualificationPageModule = function QualificationPageModule() {
        _classCallCheck(this, QualificationPageModule);
      };

      QualificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _qualification_routing_module__WEBPACK_IMPORTED_MODULE_5__["QualificationPageRoutingModule"]],
        declarations: [_qualification_page__WEBPACK_IMPORTED_MODULE_6__["QualificationPage"]]
      })], QualificationPageModule);
      /***/
    },

    /***/
    "./src/app/LoginModuleNew/qualification/qualification.page.scss":
    /*!**********************************************************************!*\
      !*** ./src/app/LoginModuleNew/qualification/qualification.page.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginModuleNewQualificationQualificationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bgImageDiv {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 0;\n}\n\n.fresherImg {\n  display: block;\n  margin: auto;\n  height: 50px;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  padding: 4px;\n}\n\n.bgColorDiv {\n  background-color: var(--headerColor);\n  border-radius: 10px;\n  padding: 1px;\n}\n\n.whiteDiv {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTG9naW5Nb2R1bGVOZXcvcXVhbGlmaWNhdGlvbi9xdWFsaWZpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFZLGVBQUE7RUFBZ0IsTUFBQTtFQUFPLE9BQUE7RUFBUSxRQUFBO0VBQVMsU0FBQTtFQUFVLFVBQUE7QUFPOUQ7O0FBTkE7RUFBWSxjQUFBO0VBQWUsWUFBQTtFQUFhLFlBQUE7RUFBYSxXQUFBO0VBQVksc0JBQUE7S0FBQSxtQkFBQTtFQUFvQixZQUFBO0FBZXJGOztBQWRBO0VBQVksb0NBQUE7RUFBcUMsbUJBQUE7RUFBb0IsWUFBQTtBQW9CckU7O0FBbkJBO0VBQVUsV0FBQTtBQXVCViIsImZpbGUiOiJzcmMvYXBwL0xvZ2luTW9kdWxlTmV3L3F1YWxpZmljYXRpb24vcXVhbGlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdJbWFnZURpdntwb3NpdGlvbjogZml4ZWQ7dG9wOiAwO2xlZnQ6IDA7cmlnaHQ6IDA7Ym90dG9tOiAwO3otaW5kZXg6IDA7fVxuLmZyZXNoZXJJbWd7ZGlzcGxheTogYmxvY2s7bWFyZ2luOiBhdXRvO2hlaWdodDogNTBweDt3aWR0aDogMTAwJTtvYmplY3QtZml0OiBjb250YWluO3BhZGRpbmc6IDRweDt9XG4uYmdDb2xvckRpdntiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7Ym9yZGVyLXJhZGl1czogMTBweDtwYWRkaW5nOiAxcHg7fVxuLndoaXRlRGl2e2NvbG9yOiAjZmZmO30iXX0= */";
      /***/
    },

    /***/
    "./src/app/LoginModuleNew/qualification/qualification.page.ts":
    /*!********************************************************************!*\
      !*** ./src/app/LoginModuleNew/qualification/qualification.page.ts ***!
      \********************************************************************/

    /*! exports provided: QualificationPage */

    /***/
    function srcAppLoginModuleNewQualificationQualificationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QualificationPage", function () {
        return QualificationPage;
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


      var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");

      var QualificationPage = /*#__PURE__*/function () {
        function QualificationPage(router, sendData) {
          _classCallCheck(this, QualificationPage);

          this.router = router;
          this.sendData = sendData;
          this.homePageData = this.sendData.alldata;
        }

        _createClass(QualificationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "gotoNext",
          value: function gotoNext(val) {
            this.sendData.myParam = val;
            this.sendData.alldata = this.homePageData;
            this.router.navigate(['/qualification-form']);
          }
        }]);

        return QualificationPage;
      }();

      QualificationPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__["DataTransferService"]
        }];
      };

      QualificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-qualification',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./qualification.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/LoginModuleNew/qualification/qualification.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./qualification.page.scss */
        "./src/app/LoginModuleNew/qualification/qualification.page.scss"))["default"]]
      })], QualificationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=LoginModuleNew-qualification-qualification-module-es5.js.map