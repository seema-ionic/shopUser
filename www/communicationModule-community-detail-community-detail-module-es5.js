(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["communicationModule-community-detail-community-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/communicationModule/community-detail/community-detail.page.html":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/communicationModule/community-detail/community-detail.page.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCommunicationModuleCommunityDetailCommunityDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{brandDetailApiResult?.data?.settings?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content>\n  <div class=\"commonPagePadding\" *ngIf=\"brandDetailData\">\n    <ion-row>\n      <ion-col [size]=\"2\" class=\"ion-no-padding\">\n        <app-image-view [img]=\"brandDetailData?.profile_image\" [imageView]=\"true\" class=\"leftCircleImgGray\" ></app-image-view>\n      </ion-col>\n      <ion-col [size]=\"10\" class=\"autoMargin ion-no-padding\">\n        <p class=\"noMargin titleText\">{{brandDetailData?.createdBy}}</p>\n        <p class=\"noMargin dateText\">{{brandDetailData?.created_date}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col [size]=\"12\">\n        <app-text-layout [text]=\"brandDetailData?.title\" class=\"smallText\" [className]=\"\"></app-text-layout>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col [size]=\"12\" *ngFor=\"let mediaData of brandDetailData?.media;let ind=index\">\n        <div *ngIf=\"mediaData?.media_type==1 || mediaData?.media_type=='1'\" class=\"bannerImage\" tappable (click)=\"videoZoome(brandDetailData?.media,'image',ind)\">\n          <app-image-view [img]=\"mediaData?.media_path\" [imageView]=\"false\" class=\"sliderFullDiv\" ></app-image-view>\n        </div>          \n        <div *ngIf=\"mediaData?.media_type==2 || mediaData?.media_type=='2'\" class=\"bannerImage\">\n          <video width=\"100%\" height=\"auto\" style=\"object-fit:cover;\" controls=\"controls\" controlsList=\"nodownload noremote foobar\"\n            poster=\"{{mediaData?.alt_image}}\" [src]=\"mediaData?.media_path|safe\" type=\"video/mp4\"></video>\n            <div class=\"playIcon\" tappable (click)=\"videoZoome(mediaData?.media_path,'video',ind)\">\n            </div>\n        </div>\n        <div *ngIf=\"mediaData?.media_type==3 || mediaData?.media_type=='3'\" class=\"bannerImage\">\n          <iframe [src]=\"mediaData?.media_path | safe\" width=\"100%\" height=\"auto\"></iframe>\n          <div class=\"playIcon\" tappable (click)=\"videoZoome(mediaData?.media_path,'youtube',ind)\">\n          </div>\n        </div>\n        <!-- class=\"textDiv\" -->\n        <div *ngIf=\"mediaData?.media_type==4 || mediaData?.media_type=='4'\">\n          <app-text-layout [text]=\"mediaData?.media_path\" style=\"text-align:justify;\" class=\"textCompoDiv\" [className]=\"\"></app-text-layout>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"pdfData?.length>=1\">\n      <ion-col [size]=\"12\">\n        <p class=\"noMargin likeTitleDiv\" style=\"padding:0 0 0 3px;\">{{brandDetailData?.settings?.attach_text}}</p>\n        <div class=\"pdfDiv\" *ngFor=\"let pdfView of pdfData; let ind=index\">\n          <!-- tappable (click)=\"videoZoome(pdfView?.media_path,'pdfView',ind)\" -->\n          <ion-row tappable (click)=\"openSeperateBrowser(pdfView?.media_path)\">\n            <ion-col [size]=\"1\" class=\"autoMargin ion-text-left ion-no-padding\">\n              <img [src]=\"brandDetailData?.settings?.pdf_icon\" onerror=\"this.src='../../../assets/watermark/watermark.png'\">\n            </ion-col>\n            <ion-col [size]=\"11\"><p class=\"pdfNameText\">{{pdfView?.title}}</p></ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n    \n    <div #theTarget>  <!--  show auto scroll to like component  -->\n      <ion-row >\n        <ion-col [size]=\"12\">\n          <div *ngIf=\"brandDetailData\" >\n            <show-comment [allCommentObj]=\"brandDetailData\" [showLikeList]=\"'true'\" [showCommentList]=\"'true'\" [showAutoScroll]=\"'true'\" [redirectPage]=\"\"></show-comment>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n    <br><br>\n  </div>\n\n  \n  <div *ngIf=\"!brandDetailData\">\n    <app-skelton-listview [iconPath]=\"'noticeDetail'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n\n  <p class=\"noDataFound\" *ngIf=\"errorMessage!=''\">{{errorMessage}}</p>\n</ion-content>\n\n\n\n\n\n<ion-footer *ngIf=\"apiservices?.showCommentBox==true\">\n  <div style=\"background:#fff;\" *ngIf=\"brandDetailData\">\n    <ion-row lines=\"none\">\n      <ion-col [size]=\"12\" class=\"ion-no-padding\">\n        <do-comment [doCommentData]=\"brandDetailData\" [postIndex]=\"\" [showFocus]=\"showScroll\" [pageName]=\"'detail'\"></do-comment>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./src/app/communicationModule/community-detail/community-detail-routing.module.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/communicationModule/community-detail/community-detail-routing.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: CommunityDetailPageRoutingModule */

    /***/
    function srcAppCommunicationModuleCommunityDetailCommunityDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommunityDetailPageRoutingModule", function () {
        return CommunityDetailPageRoutingModule;
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


      var _community_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./community-detail.page */
      "./src/app/communicationModule/community-detail/community-detail.page.ts");

      var routes = [{
        path: '',
        component: _community_detail_page__WEBPACK_IMPORTED_MODULE_3__["CommunityDetailPage"]
      }];

      var CommunityDetailPageRoutingModule = function CommunityDetailPageRoutingModule() {
        _classCallCheck(this, CommunityDetailPageRoutingModule);
      };

      CommunityDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CommunityDetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/communicationModule/community-detail/community-detail.module.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/communicationModule/community-detail/community-detail.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: CommunityDetailPageModule */

    /***/
    function srcAppCommunicationModuleCommunityDetailCommunityDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommunityDetailPageModule", function () {
        return CommunityDetailPageModule;
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


      var _community_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./community-detail-routing.module */
      "./src/app/communicationModule/community-detail/community-detail-routing.module.ts");
      /* harmony import */


      var _community_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./community-detail.page */
      "./src/app/communicationModule/community-detail/community-detail.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");
      /* harmony import */


      var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");

      var CommunityDetailPageModule = function CommunityDetailPageModule() {
        _classCallCheck(this, CommunityDetailPageModule);
      };

      CommunityDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _community_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommunityDetailPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]],
        declarations: [_community_detail_page__WEBPACK_IMPORTED_MODULE_6__["CommunityDetailPage"]]
      })], CommunityDetailPageModule);
      /***/
    },

    /***/
    "./src/app/communicationModule/community-detail/community-detail.page.scss":
    /*!*********************************************************************************!*\
      !*** ./src/app/communicationModule/community-detail/community-detail.page.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCommunicationModuleCommunityDetailCommunityDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".titleText {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.dateText, .postText {\n  font-size: 12px;\n  color: gray;\n  margin: 5px 0 0 0;\n}\n\n.smallText {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.textDiv::after {\n  content: \"\";\n  border-bottom: 0px solid green;\n  border-left: 0px solid transparent;\n  border-right: 0px solid transparent;\n  border-top: 0px solid #f3f3f5;\n}\n\n.bannerImage {\n  margin: 5px 0px 0px 0px;\n  border-radius: 0px;\n  position: relative;\n}\n\n.bannerImage .playIcon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99;\n}\n\n.pdfDiv {\n  border-bottom: 0px solid var(--headerColor);\n  margin: 10px 0px;\n  padding: 0 0 3px 0;\n  color: var(--headerColor);\n}\n\n.pdfDiv p {\n  margin: 0px;\n}\n\n.pdfDiv .pdfNameText {\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n}\n\n.pdfDiv img {\n  width: 100%;\n  height: 20px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.pdfDiv:nth-last-child(1) {\n  border-bottom: 0px solid black;\n  margin-bottom: 0px;\n  padding-bottom: 0px;\n}\n\n.likeTitleDiv {\n  font-size: 17px;\n  color: #000;\n  font-weight: bold;\n  margin: 0;\n  border-bottom: 0px dotted #cdcdcd;\n  margin: 0 0 10px 0;\n  padding: 0 0 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbXVuaWNhdGlvbk1vZHVsZS9jb21tdW5pdHktZGV0YWlsL2NvbW11bml0eS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQVcsZUFBQTtFQUFlLGlCQUFBO0FBTDFCOztBQU1BO0VBQXFCLGVBQUE7RUFBZSxXQUFBO0VBQVcsaUJBQUE7QUFBL0M7O0FBQ0E7RUFBVyxlQUFBO0VBQWdCLGlCQUFBO0FBSTNCOztBQURBO0VBQ0ksV0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDZCQUFBO0FBSUo7O0FBRkE7RUFBYSx1QkFBQTtFQUF1QixrQkFBQTtFQUFrQixrQkFBQTtBQVF0RDs7QUFQSTtFQUFVLGtCQUFBO0VBQWtCLE1BQUE7RUFBTSxPQUFBO0VBQU8sUUFBQTtFQUFRLFNBQUE7RUFBUyxXQUFBO0FBZTlEOztBQVpBO0VBQVEsMkNBQUE7RUFBMkMsZ0JBQUE7RUFBZ0Isa0JBQUE7RUFBa0IseUJBQUE7QUFtQnJGOztBQWxCSTtFQUFFLFdBQUE7QUFxQk47O0FBcEJJO0VBQWEsaUJBQUE7RUF6QmIsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFxQmtEO0FBNEJ0RDs7QUEzQkk7RUFBSSxXQUFBO0VBQVcsWUFBQTtFQUFZLHNCQUFBO0tBQUEsbUJBQUE7QUFnQy9COztBQTlCQTtFQUEwQiw4QkFBQTtFQUE4QixrQkFBQTtFQUFrQixtQkFBQTtBQW9DMUU7O0FBbkNBO0VBQWMsZUFBQTtFQUFlLFdBQUE7RUFBVyxpQkFBQTtFQUFpQixTQUFBO0VBQVMsaUNBQUE7RUFBaUMsa0JBQUE7RUFBa0Isa0JBQUE7QUE2Q3JIIiwiZmlsZSI6InNyYy9hcHAvY29tbXVuaWNhdGlvbk1vZHVsZS9jb21tdW5pdHktZGV0YWlsL2NvbW11bml0eS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGxpbmUtY2xhbXAoJGxpbmVzKXtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzplbGxpcHNpcztcbiAgICBkaXNwbGF5Oi13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6JGxpbmVzO1xuICB9XG4gIFxuLnRpdGxlVGV4dHtmb250LXNpemU6MTZweDtmb250LXdlaWdodDpib2xkO31cbi5kYXRlVGV4dCwgLnBvc3RUZXh0e2ZvbnQtc2l6ZToxMnB4O2NvbG9yOmdyYXk7bWFyZ2luOjVweCAwIDAgMDt9XG4uc21hbGxUZXh0e2ZvbnQtc2l6ZTogMTZweDtmb250LXdlaWdodDogYm9sZDt9XG4vLyAuY29tbWVudEFyZWFGb290ZXJ7Ym9yZGVyLXRvcDoycHggc29saWQgZ2FpbnNib3JvO2JvcmRlci1yYWRpdXM6MHB4O31cbi8vIC5ib3JkZXJEaXZ7Ym9yZGVyOiAxcHggc29saWQgZ3JheTtib3JkZXItcmFkaXVzOiAxMHB4O31cbi50ZXh0RGl2OjphZnRlcntcbiAgICBjb250ZW50OlwiXCI7XG4gICAgYm9yZGVyLWJvdHRvbTowcHggc29saWQgZ3JlZW47XG4gICAgYm9yZGVyLWxlZnQ6MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDowcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcDowcHggc29saWQgI2YzZjNmNTtcbn1cbi5iYW5uZXJJbWFnZXttYXJnaW46NXB4IDBweCAwcHggMHB4O2JvcmRlci1yYWRpdXM6MHB4O3Bvc2l0aW9uOnJlbGF0aXZlO1xuICAgIC5wbGF5SWNvbntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDt6LWluZGV4Ojk5O31cbn1cblxuLnBkZkRpdntib3JkZXItYm90dG9tOjBweCBzb2xpZCB2YXIoLS1oZWFkZXJDb2xvcik7bWFyZ2luOjEwcHggMHB4O3BhZGRpbmc6MCAwIDNweCAwO2NvbG9yOnZhcigtLWhlYWRlckNvbG9yKTtcbiAgICBwe21hcmdpbjowcHg7fVxuICAgIC5wZGZOYW1lVGV4dHtmb250LXdlaWdodDpib2xkO0BpbmNsdWRlIGxpbmUtY2xhbXAoMSk7fVxuICAgIGltZ3t3aWR0aDoxMDAlO2hlaWdodDoyMHB4O29iamVjdC1maXQ6Y29udGFpbjt9XG59XG4ucGRmRGl2Om50aC1sYXN0LWNoaWxkKDEpe2JvcmRlci1ib3R0b206MHB4IHNvbGlkIGJsYWNrO21hcmdpbi1ib3R0b206MHB4O3BhZGRpbmctYm90dG9tOjBweDt9XG4ubGlrZVRpdGxlRGl2e2ZvbnQtc2l6ZToxN3B4O2NvbG9yOiMwMDA7Zm9udC13ZWlnaHQ6Ym9sZDttYXJnaW46MDtib3JkZXItYm90dG9tOjBweCBkb3R0ZWQgI2NkY2RjZDttYXJnaW46MCAwIDEwcHggMDtwYWRkaW5nOjAgMCA1cHggMDt9Il19 */";
      /***/
    },

    /***/
    "./src/app/communicationModule/community-detail/community-detail.page.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/communicationModule/community-detail/community-detail.page.ts ***!
      \*******************************************************************************/

    /*! exports provided: CommunityDetailPage */

    /***/
    function srcAppCommunicationModuleCommunityDetailCommunityDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommunityDetailPage", function () {
        return CommunityDetailPage;
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
      /*! ../../provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");
      /* harmony import */


      var _src_assets_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../src/assets/constant */
      "./src/assets/constant.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/local-storage.service */
      "./src/app/services/local-storage.service.ts");

      var CommunityDetailPage = /*#__PURE__*/function () {
        function CommunityDetailPage(apiservices, zone, menuCtrl, sendData, storageService) {
          _classCallCheck(this, CommunityDetailPage);

          this.apiservices = apiservices;
          this.zone = zone;
          this.menuCtrl = menuCtrl;
          this.sendData = sendData;
          this.storageService = storageService;
          this.errorMessage = "";
          this.myinfiniteScrollCall = false;
          this.value = 0;
          this.listPageData = this.sendData.myParam;
          console.log("data from communityList==>", this.listPageData);

          if (this.listPageData != undefined) {
            this.showScroll = this.sendData.autoScroll;
            console.log("autoScrollClick show component click detail==>", this.showScroll);
          }
        }

        _createClass(CommunityDetailPage, [{
          key: "videoZoome",
          value: function videoZoome(videoPath, videoType, index) {
            var _this = this;

            this.zone.run(function () {
              _this.apiservices.videoZoome(videoPath, videoType, index);
            });
          }
        }, {
          key: "openSeperateBrowser",
          value: function openSeperateBrowser(browserUrl) {
            var _this2 = this;

            this.zone.run(function () {
              _this2.apiservices.iab.create(browserUrl, "_system", _this2.apiservices.options);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.storageService.getStorage().then(function (res) {
              _this3.brandDetailFunc();

              console.log("ionic lifecycle called getStorage==>", res);
            });
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.apiservices.showCommentBox = false;
            this.apiservices.showReplyComment = false;
            console.log('brandDetailData==> ', this.brandDetailData);
            this.listPageData.like_status = this.brandDetailData.like_status;
            this.listPageData.total_comments = this.brandDetailData.total_comments;
            this.listPageData.total_likes = this.brandDetailData.total_likes;
            this.listPageData.comment_setting = this.brandDetailData.comment_setting;
            this.listPageData.like_setting = this.brandDetailData.like_setting;
          }
        }, {
          key: "brandDetailFunc",
          value: function brandDetailFunc() {
            var _this4 = this;

            this.zone.run(function () {
              var apiKey = {
                "module_id": _this4.listPageData.module_id,
                "post_id": _this4.listPageData.post_id
              };
              console.log("brand pending api keys==", apiKey);

              _this4.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_3__["URLS"].communicationDetail, apiKey).subscribe(function (result) {
                console.log("brand pending Api Result==", result);
                _this4.brandDetailApiResult = result;

                if (result.status == 1) {
                  _this4.pdfData = result.data.attachment;
                  _this4.brandDetailData = result.data;
                  _this4.errorMessage = '';
                  _this4.sendData.alldata = _this4.brandDetailData;

                  if (_this4.brandDetailData.comment_setting == "1") {
                    _this4.apiservices.showCommentBox = true;
                    console.log("brand detail result==", _this4.apiservices.showCommentBox);
                  }

                  setTimeout(function () {
                    // this.updateScroll();
                    if (_this4.showScroll == 'true') {
                      _this4.myContent.scrollToPoint(0, _this4.targetx.nativeElement.offsetTop - 10, 100);
                    }
                  }, 1000);
                } else {
                  _this4.errorMessage = result.message;
                  _this4.brandDetailData = "";
                }
              }, function (err) {
                _this4.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }]);

        return CommunityDetailPage;
      }();

      CommunityDetailPage.ctorParameters = function () {
        return [{
          type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__["DataTransferService"]
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]
        }];
      };

      CommunityDetailPage.propDecorators = {
        myContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], {
            read: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"]
          }]
        }],
        targetx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['theTarget']
        }]
      };
      CommunityDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-community-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./community-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/communicationModule/community-detail/community-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./community-detail.page.scss */
        "./src/app/communicationModule/community-detail/community-detail.page.scss"))["default"]]
      })], CommunityDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=communicationModule-community-detail-community-detail-module-es5.js.map