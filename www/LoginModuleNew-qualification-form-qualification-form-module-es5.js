(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["LoginModuleNew-qualification-form-qualification-form-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/LoginModuleNew/qualification-form/qualification-form.page.html":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/LoginModuleNew/qualification-form/qualification-form.page.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginModuleNewQualificationFormQualificationFormPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Welcome Aboard</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"bgImageDiv\">\n    <img [src]=\"qualificationData?.background_image\">\n  </div>\n  <ion-row>\n    <ion-col>\n      <p>Academic Information</p>\n      <ion-item class=\"ion-margin-bottom\" lines=\"none\">\n        <ion-label position=\"floating\">Your hightest degree</ion-label>\n        <ion-input [(ngModel)]=\"hightestDegree\" type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\" class=\"ion-margin-bottom\">\n        <ion-label position=\"floating\">Your College name</ion-label>\n        <ion-input [(ngModel)]=\"collegeName\" type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label position=\"floating\">Completion Year</ion-label>\n        <ion-datetime displayFormat=\"YYYY\" [(ngModel)]=\"completeYear\"></ion-datetime>\n        <!-- <ion-input [(ngModel)]=\"completeYear\" type=\"tel\"></ion-input> -->\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"showData=='2'\">\n  <ion-col>\n    <p>Work Information</p>\n    <ion-item class=\"ion-margin-bottom\" lines=\"none\">\n      <ion-label position=\"floating\">Your total experience </ion-label>\n      <ion-input [(ngModel)]=\"experience\" type=\"tel\"  ></ion-input>\n    </ion-item>\n    <ion-item class=\"ion-margin-bottom\" lines=\"none\">\n      <ion-label position=\"floating\">Your last company name</ion-label>\n      <ion-input [(ngModel)]=\"lastCompany\" type=\"text\" (ionInput)=\"changeData()\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label position=\"floating\">Your last designation</ion-label>\n      <ion-input [(ngModel)]=\"lastDesignation\" type=\"text\" ></ion-input>\n    </ion-item>\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col>\n    <p>Personal Information</p>\n    <ion-item class=\"ion-margin-bottom\" lines=\"none\">\n      <ion-label position=\"floating\">Your favorite dish</ion-label>\n      <ion-input [(ngModel)]=\"fDish\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item class=\"ion-margin-bottom\" lines=\"none\">\n      <ion-label position=\"floating\">Your hobby</ion-label>\n      <ion-input [(ngModel)]=\"hHobby\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item class=\"ion-margin-bottom\" lines=\"none\">\n      <ion-label position=\"floating\">Your favorite holiday destination</ion-label>\n      <ion-input  [(ngModel)]=\"fDestination\" type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item class=\"ion-margin-bottom\" lines=\"none\">\n      <ion-label position=\"floating\">Your favorite Sports</ion-label>\n      <ion-input [(ngModel)]=\"fSports\" type=\"text\"></ion-input>\n    </ion-item>\n  </ion-col>\n</ion-row>\n\n<ion-row>\n  <ion-col [size]=\"12\" class=\"ion-text-center\">\n    <ion-button tappable (click)=\"goToNext('1')\" class=\"dynamicButtonColor\">Preview</ion-button>\n  </ion-col>\n</ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/LoginModuleNew/qualification-form/qualification-form-routing.module.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/LoginModuleNew/qualification-form/qualification-form-routing.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: QualificationFormPageRoutingModule */

    /***/
    function srcAppLoginModuleNewQualificationFormQualificationFormRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QualificationFormPageRoutingModule", function () {
        return QualificationFormPageRoutingModule;
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


      var _qualification_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./qualification-form.page */
      "./src/app/LoginModuleNew/qualification-form/qualification-form.page.ts");

      var routes = [{
        path: '',
        component: _qualification_form_page__WEBPACK_IMPORTED_MODULE_3__["QualificationFormPage"]
      }];

      var QualificationFormPageRoutingModule = function QualificationFormPageRoutingModule() {
        _classCallCheck(this, QualificationFormPageRoutingModule);
      };

      QualificationFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], QualificationFormPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/LoginModuleNew/qualification-form/qualification-form.module.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/LoginModuleNew/qualification-form/qualification-form.module.ts ***!
      \********************************************************************************/

    /*! exports provided: QualificationFormPageModule */

    /***/
    function srcAppLoginModuleNewQualificationFormQualificationFormModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QualificationFormPageModule", function () {
        return QualificationFormPageModule;
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


      var _qualification_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./qualification-form-routing.module */
      "./src/app/LoginModuleNew/qualification-form/qualification-form-routing.module.ts");
      /* harmony import */


      var _qualification_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./qualification-form.page */
      "./src/app/LoginModuleNew/qualification-form/qualification-form.page.ts");

      var QualificationFormPageModule = function QualificationFormPageModule() {
        _classCallCheck(this, QualificationFormPageModule);
      };

      QualificationFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _qualification_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["QualificationFormPageRoutingModule"]],
        declarations: [_qualification_form_page__WEBPACK_IMPORTED_MODULE_6__["QualificationFormPage"]]
      })], QualificationFormPageModule);
      /***/
    },

    /***/
    "./src/app/LoginModuleNew/qualification-form/qualification-form.page.scss":
    /*!********************************************************************************!*\
      !*** ./src/app/LoginModuleNew/qualification-form/qualification-form.page.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginModuleNewQualificationFormQualificationFormPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bgImageDiv {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 0;\n}\n\nion-item {\n  border: 1px solid #c9c5c5;\n  border-radius: 10px;\n}\n\np {\n  font-weight: bold;\n}\n\nion-label {\n  color: gray !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTG9naW5Nb2R1bGVOZXcvcXVhbGlmaWNhdGlvbi1mb3JtL3F1YWxpZmljYXRpb24tZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBWSxlQUFBO0VBQWdCLE1BQUE7RUFBTyxPQUFBO0VBQVEsUUFBQTtFQUFTLFNBQUE7RUFBVSxVQUFBO0FBTzlEOztBQU5BO0VBQVMseUJBQUE7RUFBMkIsbUJBQUE7QUFXcEM7O0FBVkE7RUFBRSxpQkFBQTtBQWNGOztBQWJBO0VBQVUsc0JBQUE7QUFpQlYiLCJmaWxlIjoic3JjL2FwcC9Mb2dpbk1vZHVsZU5ldy9xdWFsaWZpY2F0aW9uLWZvcm0vcXVhbGlmaWNhdGlvbi1mb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ0ltYWdlRGl2e3Bvc2l0aW9uOiBmaXhlZDt0b3A6IDA7bGVmdDogMDtyaWdodDogMDtib3R0b206IDA7ei1pbmRleDogMDt9XG5pb24taXRlbXtib3JkZXI6IDFweCBzb2xpZCAjYzljNWM1OyBib3JkZXItcmFkaXVzOiAxMHB4O31cbnB7Zm9udC13ZWlnaHQ6IGJvbGQ7fVxuaW9uLWxhYmVse2NvbG9yOmdyYXkgIWltcG9ydGFudDt9Il19 */";
      /***/
    },

    /***/
    "./src/app/LoginModuleNew/qualification-form/qualification-form.page.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/LoginModuleNew/qualification-form/qualification-form.page.ts ***!
      \******************************************************************************/

    /*! exports provided: QualificationFormPage */

    /***/
    function srcAppLoginModuleNewQualificationFormQualificationFormPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QualificationFormPage", function () {
        return QualificationFormPage;
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


      var src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");
      /* harmony import */


      var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/local-storage.service */
      "./src/app/services/local-storage.service.ts");
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/assets/constant */
      "./src/assets/constant.ts");

      var QualificationFormPage = /*#__PURE__*/function () {
        function QualificationFormPage(sendData, router, apiservices, zone, localStorage) {
          _classCallCheck(this, QualificationFormPage);

          this.sendData = sendData;
          this.router = router;
          this.apiservices = apiservices;
          this.zone = zone;
          this.localStorage = localStorage;
          this.hightestDegree = '';
          this.collegeName = '';
          this.completeYear = '';
          this.lastCompany = '';
          this.lastDesignation = '';
          this.fDish = '';
          this.hHobby = '';
          this.fDestination = '';
          this.fSports = '';
          this.qualificationData = this.sendData.alldata;
          this.showData = this.sendData.myParam;
        }

        _createClass(QualificationFormPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.localStorage.getStorage().then(function (stored) {
              _this.loginData = stored;
            });
          }
        }, {
          key: "gotChar",
          value: function gotChar(eve) {
            console.log(eve.target.value);

            if (eve.target.value === '0') {
              return this.apiservices.showToastMessage('Experience should be greater than 0', 'top', 3000, 'redBg');
            }
          } // changeData(){
          //      var emojiRegex = /(?:0\u20E3|1\u20E3|2\u20E3|3\u20E3|4\u20E3|5\u20E3|6\u20E3|7\u20E3|8\u20E3|9\u20E3|#\u20E3|\*\u20E3|\uD83C(?:\uDDE6\uD83C(?:\uDDE8|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDEE|\uDDF1|\uDDF2|\uDDF4|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFC|\uDDFD|\uDDFF)|\uDDE7\uD83C(?:\uDDE6|\uDDE7|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDEE|\uDDEF|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFB|\uDDFC|\uDDFE|\uDDFF)|\uDDE8\uD83C(?:\uDDE6|\uDDE8|\uDDE9|\uDDEB|\uDDEC|\uDDED|\uDDEE|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF5|\uDDF7|\uDDFA|\uDDFB|\uDDFC|\uDDFD|\uDDFE|\uDDFF)|\uDDE9\uD83C(?:\uDDEA|\uDDEC|\uDDEF|\uDDF0|\uDDF2|\uDDF4|\uDDFF)|\uDDEA\uD83C(?:\uDDE6|\uDDE8|\uDDEA|\uDDEC|\uDDED|\uDDF7|\uDDF8|\uDDF9|\uDDFA)|\uDDEB\uD83C(?:\uDDEE|\uDDEF|\uDDF0|\uDDF2|\uDDF4|\uDDF7)|\uDDEC\uD83C(?:\uDDE6|\uDDE7|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDEE|\uDDF1|\uDDF2|\uDDF3|\uDDF5|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFC|\uDDFE)|\uDDED\uD83C(?:\uDDF0|\uDDF2|\uDDF3|\uDDF7|\uDDF9|\uDDFA)|\uDDEE\uD83C(?:\uDDE8|\uDDE9|\uDDEA|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF6|\uDDF7|\uDDF8|\uDDF9)|\uDDEF\uD83C(?:\uDDEA|\uDDF2|\uDDF4|\uDDF5)|\uDDF0\uD83C(?:\uDDEA|\uDDEC|\uDDED|\uDDEE|\uDDF2|\uDDF3|\uDDF5|\uDDF7|\uDDFC|\uDDFE|\uDDFF)|\uDDF1\uD83C(?:\uDDE6|\uDDE7|\uDDE8|\uDDEE|\uDDF0|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFB|\uDDFE)|\uDDF2\uD83C(?:\uDDE6|\uDDE8|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF5|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFB|\uDDFC|\uDDFD|\uDDFE|\uDDFF)|\uDDF3\uD83C(?:\uDDE6|\uDDE8|\uDDEA|\uDDEB|\uDDEC|\uDDEE|\uDDF1|\uDDF4|\uDDF5|\uDDF7|\uDDFA|\uDDFF)|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C(?:\uDDE6|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF7|\uDDF8|\uDDF9|\uDDFC|\uDDFE)|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C(?:\uDDEA|\uDDF4|\uDDF8|\uDDFA|\uDDFC)|\uDDF8\uD83C(?:\uDDE6|\uDDE7|\uDDE8|\uDDE9|\uDDEA|\uDDEC|\uDDED|\uDDEE|\uDDEF|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF7|\uDDF8|\uDDF9|\uDDFB|\uDDFD|\uDDFE|\uDDFF)|\uDDF9\uD83C(?:\uDDE6|\uDDE8|\uDDE9|\uDDEB|\uDDEC|\uDDED|\uDDEF|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF7|\uDDF9|\uDDFB|\uDDFC|\uDDFF)|\uDDFA\uD83C(?:\uDDE6|\uDDEC|\uDDF2|\uDDF8|\uDDFE|\uDDFF)|\uDDFB\uD83C(?:\uDDE6|\uDDE8|\uDDEA|\uDDEC|\uDDEE|\uDDF3|\uDDFA)|\uDDFC\uD83C(?:\uDDEB|\uDDF8)|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C(?:\uDDEA|\uDDF9)|\uDDFF\uD83C(?:\uDDE6|\uDDF2|\uDDFC)))|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]/g;
          //      if(this.lastCompany.match(emojiRegex)){
          //       this.apiservices.showToastMessage('Please fill all fields ', 'top', 3000, 'redBg');
          //      }
          // }

        }, {
          key: "goToNext",
          value: function goToNext(val) {
            var _this2 = this;

            if (this.showData == 1) {
              if (this.hightestDegree.trim() == "" || this.collegeName.trim() == "" || this.fDish.trim() == "" || this.hHobby.trim() == "" || this.fDestination.trim() == "" || this.fSports.trim() == "") {
                this.apiservices.showToastMessage('Please fill all fields ', 'top', 3000, 'redBg');
                return false;
              }
            } else {
              if (this.hightestDegree.trim() == "" || this.collegeName.trim() == "" || this.fDish.trim() == "" || this.hHobby.trim() == "" || this.fDestination.trim() == "" || this.fSports.trim() == "" || this.lastCompany.trim() == "" || this.lastDesignation.trim() == "") {
                this.apiservices.showToastMessage('Please fill all fields ', 'top', 3000, 'redBg');
                return false;
              }
            }

            var emojiRegex = /(?:0\u20E3|1\u20E3|2\u20E3|3\u20E3|4\u20E3|5\u20E3|6\u20E3|7\u20E3|8\u20E3|9\u20E3|#\u20E3|\*\u20E3|\uD83C(?:\uDDE6\uD83C(?:\uDDE8|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDEE|\uDDF1|\uDDF2|\uDDF4|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFC|\uDDFD|\uDDFF)|\uDDE7\uD83C(?:\uDDE6|\uDDE7|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDEE|\uDDEF|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFB|\uDDFC|\uDDFE|\uDDFF)|\uDDE8\uD83C(?:\uDDE6|\uDDE8|\uDDE9|\uDDEB|\uDDEC|\uDDED|\uDDEE|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF5|\uDDF7|\uDDFA|\uDDFB|\uDDFC|\uDDFD|\uDDFE|\uDDFF)|\uDDE9\uD83C(?:\uDDEA|\uDDEC|\uDDEF|\uDDF0|\uDDF2|\uDDF4|\uDDFF)|\uDDEA\uD83C(?:\uDDE6|\uDDE8|\uDDEA|\uDDEC|\uDDED|\uDDF7|\uDDF8|\uDDF9|\uDDFA)|\uDDEB\uD83C(?:\uDDEE|\uDDEF|\uDDF0|\uDDF2|\uDDF4|\uDDF7)|\uDDEC\uD83C(?:\uDDE6|\uDDE7|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDEE|\uDDF1|\uDDF2|\uDDF3|\uDDF5|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFC|\uDDFE)|\uDDED\uD83C(?:\uDDF0|\uDDF2|\uDDF3|\uDDF7|\uDDF9|\uDDFA)|\uDDEE\uD83C(?:\uDDE8|\uDDE9|\uDDEA|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF6|\uDDF7|\uDDF8|\uDDF9)|\uDDEF\uD83C(?:\uDDEA|\uDDF2|\uDDF4|\uDDF5)|\uDDF0\uD83C(?:\uDDEA|\uDDEC|\uDDED|\uDDEE|\uDDF2|\uDDF3|\uDDF5|\uDDF7|\uDDFC|\uDDFE|\uDDFF)|\uDDF1\uD83C(?:\uDDE6|\uDDE7|\uDDE8|\uDDEE|\uDDF0|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFB|\uDDFE)|\uDDF2\uD83C(?:\uDDE6|\uDDE8|\uDDE9|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF5|\uDDF6|\uDDF7|\uDDF8|\uDDF9|\uDDFA|\uDDFB|\uDDFC|\uDDFD|\uDDFE|\uDDFF)|\uDDF3\uD83C(?:\uDDE6|\uDDE8|\uDDEA|\uDDEB|\uDDEC|\uDDEE|\uDDF1|\uDDF4|\uDDF5|\uDDF7|\uDDFA|\uDDFF)|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C(?:\uDDE6|\uDDEA|\uDDEB|\uDDEC|\uDDED|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF7|\uDDF8|\uDDF9|\uDDFC|\uDDFE)|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C(?:\uDDEA|\uDDF4|\uDDF8|\uDDFA|\uDDFC)|\uDDF8\uD83C(?:\uDDE6|\uDDE7|\uDDE8|\uDDE9|\uDDEA|\uDDEC|\uDDED|\uDDEE|\uDDEF|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF7|\uDDF8|\uDDF9|\uDDFB|\uDDFD|\uDDFE|\uDDFF)|\uDDF9\uD83C(?:\uDDE6|\uDDE8|\uDDE9|\uDDEB|\uDDEC|\uDDED|\uDDEF|\uDDF0|\uDDF1|\uDDF2|\uDDF3|\uDDF4|\uDDF7|\uDDF9|\uDDFB|\uDDFC|\uDDFF)|\uDDFA\uD83C(?:\uDDE6|\uDDEC|\uDDF2|\uDDF8|\uDDFE|\uDDFF)|\uDDFB\uD83C(?:\uDDE6|\uDDE8|\uDDEA|\uDDEC|\uDDEE|\uDDF3|\uDDFA)|\uDDFC\uD83C(?:\uDDEB|\uDDF8)|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C(?:\uDDEA|\uDDF9)|\uDDFF\uD83C(?:\uDDE6|\uDDF2|\uDDFC)))|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]/g;
            var completeY = this.completeYear.slice(0, 4);
            this.apiservices.showLoader();
            this.sendData.alldata = val;
            this.zone.run(function () {
              var apiKey = {
                "employee_id": _this2.loginData.employeeID,
                "experience_type": _this2.showData,
                "highest_degree": _this2.hightestDegree,
                "college_name": _this2.collegeName,
                "fav_dish": _this2.fDish,
                "hobby": _this2.hHobby,
                "holiday_destination": _this2.fDestination,
                "fav_sports": _this2.fSports,
                "experience": _this2.experience,
                "last_company": _this2.lastCompany,
                "last_designation": _this2.lastDesignation,
                "completion_year": completeY
              };
              console.log("resend OTP by Voice Call, api key", apiKey);

              _this2.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].previewAboardApi, apiKey).subscribe(function (result) {
                _this2.apiservices.hideLoader();

                console.log("resend OTP by Voice Call, api response==", result);

                if (result.status == 1 || result.status == '1') {
                  _this2.sendData.myParam = {
                    "apiRes": result,
                    "formData": apiKey
                  };

                  _this2.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');

                  _this2.router.navigate(['/qualification-priview']);
                } else {
                  _this2.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this2.apiservices.hideLoader();

                _this2.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }]);

        return QualificationFormPage;
      }();

      QualificationFormPage.ctorParameters = function () {
        return [{
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]
        }];
      };

      QualificationFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-qualification-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./qualification-form.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/LoginModuleNew/qualification-form/qualification-form.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./qualification-form.page.scss */
        "./src/app/LoginModuleNew/qualification-form/qualification-form.page.scss"))["default"]]
      })], QualificationFormPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=LoginModuleNew-qualification-form-qualification-form-module-es5.js.map