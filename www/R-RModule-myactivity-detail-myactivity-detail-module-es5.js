(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["R-RModule-myactivity-detail-myactivity-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/R&RModule/myactivity-detail/myactivity-detail.page.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/R&RModule/myactivity-detail/myactivity-detail.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRRModuleMyactivityDetailMyactivityDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{myActvity?.page_header}}</ion-title>\n        <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <p class=\"ion-no-margin nameText\">{{myActvityData?.top_data?.award_name}}</p>\n  <p class=\"ion-no-margin positionText ion-margin-bottom\">{{myActvityData?.top_data?.award_type}}</p>\n  <div class=\"customCard bgDiv\" *ngIf=\"myActvityData?.nomination_data\" [style.background]=\"'url('+myActvityData?.nomination_data?.background_img+')'\">\n    <p class=\"ion-text-center ion-no-margin statusDiv\">{{myActvityData?.nomination_data?.status}}</p>\n  \n  <ion-row>\n    <ion-col [size]=\"5\" class=\"autoMargin ion-text-center\">\n      <img [src]=\"myActvityData?.nomination_data?.nominee_image\" class=\"nomineeImage\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/>\n      <p class=\"ion-no-margin nameText\">{{myActvityData?.nomination_data?.nominee_name}}</p>\n      <p class=\"ion-no-margin positionText\">{{myActvityData?.nomination_data?.nominee_designation}}</p>\n    </ion-col>\n    <ion-col [size]=\"3\" class=\"autoMargin ion-text-center\">\n       <img [src]=\"myActvityData?.nomination_data?.nominate_arrow\" class=\"arrowIcon\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/>\n\n    </ion-col>\n    <ion-col [size]=\"4\">\n      <img [src]=\"myActvityData?.nomination_data?.award_icon\" class=\"awardDiv\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/>\n      <p class=\"ion-no-margin nameText1 ion-text-center\">{{myActvityData?.nomination_data?.award_name}}</p>\n    </ion-col>\n  </ion-row>\n</div>\n<div *ngIf=\"myActvityData?.team_type==2 || myActvityData?.team_type=='2'\" class=\"customCard\">\n  <ion-row>\n    <ion-col [size]=\"11\"><p *ngIf=\"myActvityData?.team_data?.title\" class=\"marGDiv\">{{myActvityData?.team_data?.title}}</p></ion-col>\n    <ion-col [size]=\"1\" (click)=\"gotoEdit()\" *ngIf=\"myActvity?.can_edit_nominees=='1'\"><ion-icon name=\"create-outline\"></ion-icon> </ion-col>\n  </ion-row>\n\n  <ion-slides [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let item of myActvityData?.team_data?.data\">\n      <ion-row >\n        <ion-col [size]=\"12\" class=\"collDiv\">\n            <img [src]=\"item?.profile_image\" class=\"teamImage\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/> \n            <p class=\"ion-no-margin nameText lineDiv\">{{item?.full_name}}</p>\n            <p class=\"ion-no-margin positionText positionText1\">{{item?.department}}</p>\n        </ion-col>\n      </ion-row>\n\n    </ion-slide>\n  </ion-slides> \n\n</div>\n  <ion-row class=\"customCard\" *ngIf=\"myActvityData?.citation\">\n    <ion-col>\n      <p class=\"ion-text-left positionText ion-no-margin\" [innerHTML]=\"myActvityData?.citation\"></p>\n    </ion-col>\n  </ion-row>\n\n<ion-row class=\"sideProgressRow\" *ngFor=\"let item of myActvityData?.approver_data\" >\n  <ion-col [size]=\"1\" class=\"sideProgressIcons\">\n    <img *ngIf=\"item?.side_icon\" [src]=\"item?.side_icon\" class=\"sideIcon\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/>\n    <img *ngIf=\"item?.side_bar_img\" [src]=\"item?.side_bar_img\" class=\"sideBar\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/>\n  </ion-col>\n  <ion-col [size]=\"11\" class=\"customCard\">\n    <ion-row>\n      <ion-col [size]=\"4\" class=\"autoMargin ion-text-center\">\n          <img [src]=\"item?.image\" class=\"nomineeImage\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/>    \n      </ion-col>\n      <ion-col [size]=\"8\"  class=\"autoMargin\">\n        <p class=\"ion-no-margin nameText\" *ngIf=\"item?.title\">{{item?.title}}</p>\n        <p class=\"ion-no-margin positionText\" *ngIf=\"item?.name\">{{item?.name}}</p>\n        <p class=\"ion-no-margin positionText\" *ngIf=\"item?.designation\">{{item?.designation}}</p>\n        <p class=\"ion-no-margin positionText\" *ngIf=\"item?.date\">{{item?.date}}</p>\n        <p class=\"ion-no-margin positionText\" *ngIf=\"item?.nominee_designation\">{{item?.nominee_designation}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"brderTop\">\n      <ion-col [size]=\"4\" *ngIf=\"item?.remark_text\"><p class=\"ion-text-center nameText ion-no-margin\">{{item?.remark_text}}</p></ion-col>\n      <ion-col [size]=\"8\" *ngIf=\"item?.citation\"><p class=\"ion-text-left positionText ion-no-margin\" [innerHTML]=\"item?.citation\"></p></ion-col>\n    </ion-row>\n\n  </ion-col>\n\n    \n</ion-row>\n\n<ion-row *ngIf=\"myActvity?.action_data\">\n  <ion-col>\n    <label>Remark</label>\n    <ion-textarea placeholder=\"Enter the Remark\" rows=\"4\" col=\"20\" class=\"textArea\" [(ngModel)]=\"RemarkText\"></ion-textarea>\n  </ion-col>\n</ion-row>\n\n\n\n<ion-row >\n  <ion-col [size]=\"6\" *ngFor=\"let val of myActvity?.action_data\" class=\"ion-text-center\">\n    <ion-button  tappable (click)=\"presentAlertConfirm(val)\" [ngClass]=\"[val.value==2 ? 'cancelBtn':'apporveBtn']\">\n      {{val?.button_text}}</ion-button>\n  </ion-col>\n\n</ion-row>\n<div *ngIf=\"errorMessage\"><p class=\"ion-text-center\">{{errorMessage}}</p></div>\n<br>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/R&RModule/myactivity-detail/myactivity-detail-routing.module.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/R&RModule/myactivity-detail/myactivity-detail-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: MyactivityDetailPageRoutingModule */

    /***/
    function srcAppRRModuleMyactivityDetailMyactivityDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyactivityDetailPageRoutingModule", function () {
        return MyactivityDetailPageRoutingModule;
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


      var _myactivity_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./myactivity-detail.page */
      "./src/app/R&RModule/myactivity-detail/myactivity-detail.page.ts");

      var routes = [{
        path: '',
        component: _myactivity_detail_page__WEBPACK_IMPORTED_MODULE_3__["MyactivityDetailPage"]
      }];

      var MyactivityDetailPageRoutingModule = function MyactivityDetailPageRoutingModule() {
        _classCallCheck(this, MyactivityDetailPageRoutingModule);
      };

      MyactivityDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MyactivityDetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/R&RModule/myactivity-detail/myactivity-detail.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/R&RModule/myactivity-detail/myactivity-detail.module.ts ***!
      \*************************************************************************/

    /*! exports provided: MyactivityDetailPageModule */

    /***/
    function srcAppRRModuleMyactivityDetailMyactivityDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyactivityDetailPageModule", function () {
        return MyactivityDetailPageModule;
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


      var _myactivity_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./myactivity-detail-routing.module */
      "./src/app/R&RModule/myactivity-detail/myactivity-detail-routing.module.ts");
      /* harmony import */


      var _myactivity_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./myactivity-detail.page */
      "./src/app/R&RModule/myactivity-detail/myactivity-detail.page.ts");

      var MyactivityDetailPageModule = function MyactivityDetailPageModule() {
        _classCallCheck(this, MyactivityDetailPageModule);
      };

      MyactivityDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _myactivity_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyactivityDetailPageRoutingModule"]],
        declarations: [_myactivity_detail_page__WEBPACK_IMPORTED_MODULE_6__["MyactivityDetailPage"]]
      })], MyactivityDetailPageModule);
      /***/
    },

    /***/
    "./src/app/R&RModule/myactivity-detail/myactivity-detail.page.scss":
    /*!*************************************************************************!*\
      !*** ./src/app/R&RModule/myactivity-detail/myactivity-detail.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppRRModuleMyactivityDetailMyactivityDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bgDiv {\n  background-size: 100% 100% !important;\n  background-repeat: no-repeat !important;\n}\n\n.awardDiv, .arrowIcon {\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.arrowIcon {\n  height: 100%;\n}\n\n.awardDiv {\n  height: 70px;\n}\n\n.nameText1 {\n  font-size: 11px;\n  color: gray;\n}\n\n.statusDiv {\n  font-size: 12px;\n}\n\n.nomineeImage {\n  height: 60px;\n  width: 60px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 50%;\n}\n\n.positionText {\n  font-size: 11px;\n}\n\n.brderTop {\n  border-top: 1px solid #d3c9c9;\n}\n\nion-content {\n  --background: #ededed;\n}\n\n.sideProgressRow {\n  position: relative;\n}\n\n.sideProgressRow .sideProgressIcons {\n  margin: auto;\n  position: relative;\n  top: -20px;\n}\n\n.sideProgressRow .sideProgressIcons .sideBar {\n  position: absolute;\n  left: -3px;\n  top: -15px;\n  bottom: 0;\n  right: 0;\n  width: 20px;\n  height: 180px;\n  z-index: -1;\n}\n\n.sideProgressRow .sideProgressIcons .sideIcon {\n  left: 40%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-60%, 0%);\n}\n\n.positionText1 {\n  margin: 2px;\n}\n\n.teamImage {\n  height: 45px;\n  width: 45px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 50%;\n}\n\n.collDiv {\n  border: 1px solid #bbb7b7;\n  width: 105px !important;\n  border-radius: 10px;\n  height: 100px;\n}\n\n.lineDiv {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n\n.marGDiv {\n  margin: 6px 0px 6px 0px;\n}\n\n.textArea {\n  border: 1px solid #bfb9b9;\n  border-radius: 10px;\n}\n\n.cancelBtn {\n  border: 1px solid red;\n  color: red;\n  --background: white;\n}\n\n.apporveBtn {\n  --background:green;\n  color: white;\n}\n\n.apporveBtn, .cancelBtn {\n  text-transform: initial;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUiZSTW9kdWxlL215YWN0aXZpdHktZGV0YWlsL215YWN0aXZpdHktZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFPLHFDQUFBO0VBQXNDLHVDQUFBO0FBRzdDOztBQUZBO0VBQXFCLFdBQUE7RUFBWSxzQkFBQTtLQUFBLG1CQUFBO0FBT2pDOztBQU5BO0VBQVcsWUFBQTtBQVVYOztBQVRBO0VBQVUsWUFBQTtBQWFWOztBQVpBO0VBQVcsZUFBQTtFQUFlLFdBQUE7QUFpQjFCOztBQWhCQTtFQUFXLGVBQUE7QUFvQlg7O0FBbkJBO0VBQWMsWUFBQTtFQUFhLFdBQUE7RUFBWSxzQkFBQTtLQUFBLG1CQUFBO0VBQW9CLGtCQUFBO0FBMEIzRDs7QUF6QkE7RUFBYyxlQUFBO0FBNkJkOztBQTVCQTtFQUFVLDZCQUFBO0FBZ0NWOztBQTdCQTtFQUFZLHFCQUFBO0FBaUNaOztBQXZCQTtFQUFpQixrQkFBQTtBQTJCakI7O0FBMUJFO0VBQW1CLFlBQUE7RUFBWSxrQkFBQTtFQUFrQixVQUFBO0FBK0JuRDs7QUE5QkU7RUFBUyxrQkFBQTtFQUFrQixVQUFBO0VBQVUsVUFBQTtFQUFVLFNBQUE7RUFBUyxRQUFBO0VBQVEsV0FBQTtFQUFXLGFBQUE7RUFBYSxXQUFBO0FBd0MxRjs7QUF2Q0U7RUFBVSxTQUFBO0VBQVMsa0JBQUE7RUFBa0IsUUFBQTtFQUFRLDhCQUFBO0FBNkMvQzs7QUExQ0E7RUFBZSxXQUFBO0FBOENmOztBQTdDQTtFQUFXLFlBQUE7RUFBYSxXQUFBO0VBQVksc0JBQUE7S0FBQSxtQkFBQTtFQUFvQixrQkFBQTtBQW9EeEQ7O0FBbkRBO0VBQVMseUJBQUE7RUFBOEIsdUJBQUE7RUFBd0IsbUJBQUE7RUFBb0IsYUFBQTtBQTBEbkY7O0FBekRBO0VBZkUsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFXMkI7QUFpRTdCOztBQWhFQTtFQUFTLHVCQUFBO0FBb0VUOztBQW5FQTtFQUFVLHlCQUFBO0VBQTBCLG1CQUFBO0FBd0VwQzs7QUF2RUE7RUFBVyxxQkFBQTtFQUFzQixVQUFBO0VBQVcsbUJBQUE7QUE2RTVDOztBQTVFQTtFQUFZLGtCQUFBO0VBQW1CLFlBQUE7QUFpRi9COztBQWhGQTtFQUF1Qix1QkFBQTtFQUF3QixrQkFBQTtBQXFGL0MiLCJmaWxlIjoic3JjL2FwcC9SJlJNb2R1bGUvbXlhY3Rpdml0eS1kZXRhaWwvbXlhY3Rpdml0eS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnRGl2e2JhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlICFpbXBvcnRhbnQ7YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O31cbi5hd2FyZERpdiwuYXJyb3dJY29ue3dpZHRoOiAxMDAlO29iamVjdC1maXQ6IGNvbnRhaW47fVxuLmFycm93SWNvbntoZWlnaHQ6IDEwMCU7fVxuLmF3YXJkRGl2e2hlaWdodDogNzBweDt9XG4ubmFtZVRleHQxe2ZvbnQtc2l6ZToxMXB4O2NvbG9yOiBncmF5O31cbi5zdGF0dXNEaXZ7Zm9udC1zaXplOiAxMnB4O31cbi5ub21pbmVlSW1hZ2V7aGVpZ2h0OiA2MHB4O3dpZHRoOiA2MHB4O29iamVjdC1maXQ6IGNvbnRhaW47Ym9yZGVyLXJhZGl1czogNTAlO31cbi5wb3NpdGlvblRleHR7Zm9udC1zaXplOiAxMXB4O31cbi5icmRlclRvcHtib3JkZXItdG9wOjFweCBzb2xpZCAjZDNjOWM5O31cbi8vIC5zaWRlQmFye2hlaWdodDogMTAwJTt3aWR0aDogMTAwJTttYXJnaW46MzBweCAwcHggMHB4IDBweDtwb3NpdGlvbjogcmVsYXRpdmU7fVxuLy8gLnNpZGVJY29ue3Bvc2l0aW9uOiByZWxhdGl2ZTt0b3A6IDQzJTt9XG5pb24tY29udGVudHstLWJhY2tncm91bmQ6ICNlZGVkZWQ7fVxuXG5cbkBtaXhpbiBsaW5lLWNsYW1wKCRsaW5lcykge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtbGluZS1jbGFtcDokbGluZXM7XG59XG4uc2lkZVByb2dyZXNzUm93e3Bvc2l0aW9uOnJlbGF0aXZlO1xuICAuc2lkZVByb2dyZXNzSWNvbnN7bWFyZ2luOmF1dG87cG9zaXRpb246cmVsYXRpdmU7dG9wOi0yMHB4O1xuICAuc2lkZUJhcntwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0zcHg7dG9wOi0xNXB4O2JvdHRvbTowO3JpZ2h0OjA7d2lkdGg6MjBweDtoZWlnaHQ6MTgwcHg7ei1pbmRleDotMTt9XG4gIC5zaWRlSWNvbntsZWZ0OjQwJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTYwJSwgMCUpO31cbiAgfVxufVxuLnBvc2l0aW9uVGV4dDF7bWFyZ2luOiAycHg7fVxuLnRlYW1JbWFnZXtoZWlnaHQ6IDQ1cHg7d2lkdGg6IDQ1cHg7b2JqZWN0LWZpdDogY29udGFpbjtib3JkZXItcmFkaXVzOiA1MCU7fVxuLmNvbGxEaXZ7Ym9yZGVyOiAxcHggc29saWQgI2JiYjdiNzsgICAgd2lkdGg6IDEwNXB4ICFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czogMTBweDtoZWlnaHQ6IDEwMHB4O31cbi5saW5lRGl2e0BpbmNsdWRlIGxpbmUtY2xhbXAoMik7fVxuLm1hckdEaXZ7bWFyZ2luOiA2cHggMHB4IDZweCAwcHg7fVxuLnRleHRBcmVhe2JvcmRlcjogMXB4IHNvbGlkICNiZmI5Yjk7Ym9yZGVyLXJhZGl1czogMTBweDt9XG4uY2FuY2VsQnRue2JvcmRlcjogMXB4IHNvbGlkIHJlZDtjb2xvcjogcmVkOy0tYmFja2dyb3VuZDogd2hpdGU7fVxuLmFwcG9ydmVCdG57LS1iYWNrZ3JvdW5kOmdyZWVuO2NvbG9yOiB3aGl0ZTt9XG4uYXBwb3J2ZUJ0biwuY2FuY2VsQnRue3RleHQtdHJhbnNmb3JtOiBpbml0aWFsO2JvcmRlci1yYWRpdXM6IDVweDt9Il19 */";
      /***/
    },

    /***/
    "./src/app/R&RModule/myactivity-detail/myactivity-detail.page.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/R&RModule/myactivity-detail/myactivity-detail.page.ts ***!
      \***********************************************************************/

    /*! exports provided: MyactivityDetailPage */

    /***/
    function srcAppRRModuleMyactivityDetailMyactivityDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyactivityDetailPage", function () {
        return MyactivityDetailPage;
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


      var src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");
      /* harmony import */


      var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/local-storage.service */
      "./src/app/services/local-storage.service.ts");
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/assets/constant */
      "./src/assets/constant.ts");

      var MyactivityDetailPage = /*#__PURE__*/function () {
        function MyactivityDetailPage(zone, apiservices, stoargeServices, sendData, router, navctrl, alertController) {
          _classCallCheck(this, MyactivityDetailPage);

          this.zone = zone;
          this.apiservices = apiservices;
          this.stoargeServices = stoargeServices;
          this.sendData = sendData;
          this.router = router;
          this.navctrl = navctrl;
          this.alertController = alertController;
          this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 2.5,
            speed: 400,
            spaceBetween: 5
          };
          this.RemarkText = '';
        }

        _createClass(MyactivityDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.previousActvity = this.sendData.alldata; // this.myactvityFun();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.myactvityFun();
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        // header: 'Confirm!',
                        message: 'Are you sure you want to' + ' ' + item.button_text + ' ' + 'this award nomination?',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {}
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            _this.RejectAcceptFun(item);
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "myactvityFun",
          value: function myactvityFun() {
            var _this2 = this;

            this.zone.run(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _this3 = this;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        this.apiservices.showLoader();
                        this.stoargeServices.getStorage().then(function (storedData) {
                          var apiKey = {
                            employee_id: storedData.employeeID,
                            award_id: _this3.previousActvity.award_id,
                            nomination_id: _this3.previousActvity.auto_id
                          };

                          _this3.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_7__["URLS"].myactvityApi, apiKey).subscribe(function (result) {
                            _this3.apiservices.hideLoader();

                            _this3.myActvity = result;

                            if (result.status == 1) {
                              _this3.myActvityData = result.data;
                              _this3.errorMessage = '';
                            } else {
                              _this3.myActvityData = {};
                              _this3.errorMessage = result.message;

                              _this3.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                            }
                          }, function (err) {
                            _this3.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');

                            _this3.apiservices.hideLoader();
                          });
                        });

                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          }
        }, {
          key: "RejectAcceptFun",
          value: function RejectAcceptFun(item) {
            var _this4 = this;

            if (item.citation_required) {
              if (this.RemarkText.trim() == '') {
                return this.apiservices.showToastMessage('Please enter remark', 'top', 3000, 'redBg');
              }
            }

            this.zone.run(function () {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _this5 = this;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        this.apiservices.showLoader();
                        this.stoargeServices.getStorage().then(function (storedData) {
                          var apiKey = {
                            employee_id: storedData.employeeID,
                            award_id: _this5.previousActvity.award_id,
                            nomination_id: _this5.previousActvity.auto_id,
                            approval_level: _this5.myActvity.approval_level,
                            action: item.value,
                            citation: _this5.RemarkText
                          };
                          var copy_apiKey = {
                            employee_id: storedData.employeeID,
                            award_id: _this5.previousActvity.award_id,
                            nomination_id: _this5.previousActvity.auto_id,
                            approval_level: _this5.myActvity.approval_level,
                            action: item.value,
                            citation: _this5.RemarkText
                          };

                          _this5.apiservices.apiCallWithLoginTokenComment(src_assets_constant__WEBPACK_IMPORTED_MODULE_7__["URLS"].nominationActionApi, apiKey, copy_apiKey).subscribe(function (result) {
                            _this5.apiservices.hideLoader();

                            if (result.status == 1) {
                              _this5.navctrl.pop();
                            } else {
                              _this5.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                            }
                          }, function (err) {
                            _this5.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');

                            _this5.apiservices.hideLoader();
                          });
                        });

                      case 2:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            });
          }
        }, {
          key: "gotoEdit",
          value: function gotoEdit() {
            this.sendData.alldata = {
              mainData: this.myActvity,
              nominationId: this.previousActvity.auto_id
            };
            this.router.navigate(['/award-employee-list']);
          }
        }]);

        return MyactivityDetailPage;
      }();

      MyactivityDetailPage.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_4__["ApiservicesService"]
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__["DataTransferService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      MyactivityDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myactivity-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./myactivity-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/R&RModule/myactivity-detail/myactivity-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./myactivity-detail.page.scss */
        "./src/app/R&RModule/myactivity-detail/myactivity-detail.page.scss"))["default"]]
      })], MyactivityDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=R-RModule-myactivity-detail-myactivity-detail-module-es5.js.map