(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loginModule-profile-picture-profile-picture-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/profile-picture/profile-picture.page.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/profile-picture/profile-picture.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginModuleProfilePictureProfilePicturePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{formSubmitData?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button tappable (click)=\"hardWareBackButton()\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"commonPagePadding\">\n\n    <br><br><br>\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <div class=\"proTitle\"><p class=\"noMargin\">{{formSubmitData?.title}}</p></div>\n      </ion-col>\n    </ion-row>\n    <br>\n\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <div class=\"profileDiv\">\n          <div class=\"profileImgDiv\">\n            <div class=\"imgDiv\">\n              <img [src]=\"staticPreviewImage\" [ngClass]=\"{'blurOn': blurImage==1, 'blurOff': blurImage==0}\" onerror=\"this.src='../../assets/watermark/profileWatermark.png'\">\n            </div>\n            <div class=\"iconDiv\" tappable (click)=\"openActionDiv()\"><ion-icon name=\"camera\"></ion-icon></div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <br><br><br><br>\n\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <ion-button [disabled]=\"showButtn==false\" tappable (click)=\"goToNext('submit')\" class=\"dynamicButtonColor\">{{formSubmitData?.button}}</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"formSubmitData?.skip?.enable==true\">\n      <ion-col [push]=\"4\" [size]=\"4\" class=\"ion-text-center\">\n        <p class=\"skipImgDiv\">\n          <span tappable (click)=\"goToNext('skip')\">{{formSubmitData?.skip?.text}} <ion-icon name=\"arrow-forward\"></ion-icon></span>\n        </p>\n      </ion-col>\n    </ion-row>\n\n\n  </div>\n</ion-content>\n\n\n\n<!-- <ion-footer class=\"loginFooterDiv\">\n  <ion-row>\n    <ion-col [size]=\"12\" class=\"ion-text-right\">\n      <div class=\"poweredDiv\">\n        <p class=\"noMargin\">Powered By:</p>\n        <img src=\"../../assets/icon/logoTwo.png\">\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-footer> -->\n\n\n<ion-footer>\n  <div *ngIf=\"showFilterDiv\" [ngClass]=\"{'tintBg':showFilterDiv == true}\"> </div>\n  <div class=\"footerContainer\" *ngIf=\"showFilterDiv\">\n    <p class=\"titleText\">Upload <span tappable (click)=\"openActionDiv()\"><ion-icon name=\"close\"></ion-icon></span></p>\n    <br>\n    <ion-row>\n      <ion-col [size]=\"6\" class=\"ion-text-center\" tappable (click)=\"uploadImage('camera')\">\n        <img style=\"width:70px;\" src=\"../../assets/icon/camera.png\">\n        <p>Camera</p>\n      </ion-col>\n      <ion-col [size]=\"6\" class=\"ion-text-center\" tappable (click)=\"uploadImage('gallery')\">\n        <img style=\"width:70px;\" src=\"../../assets/icon/gallery.png\">\n        <p>Gallery</p>\n      </ion-col>\n    </ion-row>\n    <br>\n  </div>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/loginModule/profile-picture/profile-picture-routing.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/loginModule/profile-picture/profile-picture-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: ProfilePicturePageRoutingModule */

    /***/
    function srcAppLoginModuleProfilePictureProfilePictureRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePicturePageRoutingModule", function () {
        return ProfilePicturePageRoutingModule;
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


      var _profile_picture_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile-picture.page */
      "./src/app/loginModule/profile-picture/profile-picture.page.ts");

      var routes = [{
        path: '',
        component: _profile_picture_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePage"]
      }];

      var ProfilePicturePageRoutingModule = function ProfilePicturePageRoutingModule() {
        _classCallCheck(this, ProfilePicturePageRoutingModule);
      };

      ProfilePicturePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePicturePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/loginModule/profile-picture/profile-picture.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/loginModule/profile-picture/profile-picture.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ProfilePicturePageModule */

    /***/
    function srcAppLoginModuleProfilePictureProfilePictureModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePicturePageModule", function () {
        return ProfilePicturePageModule;
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


      var _profile_picture_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-picture-routing.module */
      "./src/app/loginModule/profile-picture/profile-picture-routing.module.ts");
      /* harmony import */


      var _profile_picture_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile-picture.page */
      "./src/app/loginModule/profile-picture/profile-picture.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var ProfilePicturePageModule = function ProfilePicturePageModule() {
        _classCallCheck(this, ProfilePicturePageModule);
      };

      ProfilePicturePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_picture_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePicturePageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_profile_picture_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePicturePage"]]
      })], ProfilePicturePageModule);
      /***/
    },

    /***/
    "./src/app/loginModule/profile-picture/profile-picture.page.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/loginModule/profile-picture/profile-picture.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginModuleProfilePictureProfilePicturePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".proTitle p {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.profileDiv {\n  border: 2px dashed var(--headerLightColor);\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  margin: auto;\n  padding: 20px;\n}\n\n.profileDiv .profileImgDiv {\n  border: 2px solid var(--headerColor);\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  margin: auto;\n  position: relative;\n}\n\n.profileDiv .profileImgDiv .imgDiv {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.profileDiv .profileImgDiv .imgDiv img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.profileDiv .profileImgDiv .imgDiv .blurOn {\n  filter: blur(8px);\n}\n\n.profileDiv .profileImgDiv .imgDiv .blurOff {\n  filter: blur(0);\n}\n\n.profileDiv .profileImgDiv .iconDiv {\n  overflow: hidden;\n  width: 50px;\n  height: 50px;\n  background: var(--headerColor);\n  padding: 7px;\n  border-radius: 50%;\n  position: absolute;\n  right: 5px;\n  bottom: -5px;\n}\n\n.profileDiv .profileImgDiv .iconDiv ion-icon {\n  font-size: 35px;\n  color: #fff;\n}\n\n.skipImgDiv {\n  margin: 20px 0 0 0;\n  font-size: 18px;\n  font-weight: bold;\n  color: #3a3a3a;\n  display: inline-block;\n}\n\n.skipImgDiv span {\n  float: left;\n}\n\n.skipImgDiv span ion-icon {\n  float: right;\n  margin: -1px 0 0 5px;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW5Nb2R1bGUvcHJvZmlsZS1waWN0dXJlL3Byb2ZpbGUtcGljdHVyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFBRSxlQUFBO0VBQWUsaUJBQUE7QUFFckI7O0FBQUE7RUFBWSwwQ0FBQTtFQUEwQyxZQUFBO0VBQVksYUFBQTtFQUM5RCxrQkFBQTtFQUFrQixZQUFBO0VBQVksYUFBQTtBQVFsQzs7QUFQSTtFQUFlLG9DQUFBO0VBQW9DLFdBQUE7RUFBVyxZQUFBO0VBQzFELGtCQUFBO0VBQWtCLFlBQUE7RUFBWSxrQkFBQTtBQWN0Qzs7QUFiUTtFQUFRLFdBQUE7RUFBVyxZQUFBO0VBQVksa0JBQUE7RUFBa0IsZ0JBQUE7QUFtQnpEOztBQWxCWTtFQUFJLFdBQUE7RUFBVyxZQUFBO0VBQVksb0JBQUE7S0FBQSxpQkFBQTtBQXVCdkM7O0FBdEJZO0VBQVEsaUJBQUE7QUF5QnBCOztBQXhCWTtFQUFTLGVBQUE7QUEyQnJCOztBQXpCUTtFQUFTLGdCQUFBO0VBQWdCLFdBQUE7RUFBVyxZQUFBO0VBQVksOEJBQUE7RUFBOEIsWUFBQTtFQUMxRSxrQkFBQTtFQUFrQixrQkFBQTtFQUFrQixVQUFBO0VBQVUsWUFBQTtBQW1DMUQ7O0FBbENZO0VBQVMsZUFBQTtFQUFlLFdBQUE7QUFzQ3BDOztBQWpDQTtFQUFZLGtCQUFBO0VBQWtCLGVBQUE7RUFBZSxpQkFBQTtFQUFpQixjQUFBO0VBQWMscUJBQUE7QUF5QzVFOztBQXhDSTtFQUFLLFdBQUE7QUEyQ1Q7O0FBMUNRO0VBQVMsWUFBQTtFQUFZLG9CQUFBO0VBQW9CLGVBQUE7QUErQ2pEIiwiZmlsZSI6InNyYy9hcHAvbG9naW5Nb2R1bGUvcHJvZmlsZS1waWN0dXJlL3Byb2ZpbGUtcGljdHVyZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvVGl0bGV7XG4gICAgcHtmb250LXNpemU6MjBweDtmb250LXdlaWdodDpib2xkO31cbn1cbi5wcm9maWxlRGl2e2JvcmRlcjoycHggZGFzaGVkIHZhcigtLWhlYWRlckxpZ2h0Q29sb3IpO3dpZHRoOjIwMHB4O2hlaWdodDoyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOjUwJTttYXJnaW46YXV0bztwYWRkaW5nOjIwcHg7XG4gICAgLnByb2ZpbGVJbWdEaXZ7Ym9yZGVyOjJweCBzb2xpZCB2YXIoLS1oZWFkZXJDb2xvcik7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7bWFyZ2luOmF1dG87cG9zaXRpb246cmVsYXRpdmU7XG4gICAgICAgIC5pbWdEaXZ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtib3JkZXItcmFkaXVzOjUwJTtvdmVyZmxvdzpoaWRkZW47XG4gICAgICAgICAgICBpbWd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvYmplY3QtZml0OmNvdmVyO31cbiAgICAgICAgICAgIC5ibHVyT257ZmlsdGVyOmJsdXIoOHB4KTt9XG4gICAgICAgICAgICAuYmx1ck9mZntmaWx0ZXI6Ymx1cigwKTt9XG4gICAgICAgIH1cbiAgICAgICAgLmljb25EaXZ7b3ZlcmZsb3c6aGlkZGVuO3dpZHRoOjUwcHg7aGVpZ2h0OjUwcHg7YmFja2dyb3VuZDp2YXIoLS1oZWFkZXJDb2xvcik7cGFkZGluZzo3cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDo1cHg7Ym90dG9tOi01cHg7XG4gICAgICAgICAgICBpb24taWNvbntmb250LXNpemU6MzVweDtjb2xvcjojZmZmO31cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNraXBJbWdEaXZ7bWFyZ2luOjIwcHggMCAwIDA7Zm9udC1zaXplOjE4cHg7Zm9udC13ZWlnaHQ6Ym9sZDtjb2xvcjojM2EzYTNhO2Rpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBzcGFue2Zsb2F0OmxlZnQ7XG4gICAgICAgIGlvbi1pY29ue2Zsb2F0OnJpZ2h0O21hcmdpbjotMXB4IDAgMCA1cHg7Zm9udC1zaXplOjI1cHg7fVxuICAgIH1cbiAgICAvLyBzcGFue2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbjoxNXB4IDAgMCAwO3Bvc2l0aW9uOnJlbGF0aXZlO31cbiAgICAvLyBzcGFuOjpiZWZvcmV7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MTIwJTt0b3A6MTNweDt3aWR0aDoxNXB4O2hlaWdodDoycHg7XG4gICAgLy8gICAgIGJhY2tncm91bmQ6YmxhY2s7dHJhbnNmb3JtOnJvdGF0ZSgtMzVkZWcpO1xuICAgIC8vIH1cbiAgICAvLyBzcGFuOjphZnRlcntjb250ZW50OlwiXCI7cG9zaXRpb246YWJzb2x1dGU7bGVmdDoxMjAlO3RvcDo1cHg7d2lkdGg6MTVweDtoZWlnaHQ6MnB4O1xuICAgIC8vICAgICBiYWNrZ3JvdW5kOmJsYWNrO3RyYW5zZm9ybTpyb3RhdGUoMzVkZWcpO1xuICAgIC8vIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/loginModule/profile-picture/profile-picture.page.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/loginModule/profile-picture/profile-picture.page.ts ***!
      \*********************************************************************/

    /*! exports provided: ProfilePicturePage */

    /***/
    function srcAppLoginModuleProfilePictureProfilePicturePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePicturePage", function () {
        return ProfilePicturePage;
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


      var _src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../src/assets/constant */
      "./src/assets/constant.ts");
      /* harmony import */


      var src_app_imageCapture_uploading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/imageCapture/uploading.service */
      "./src/app/imageCapture/uploading.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ProfilePicturePage = /*#__PURE__*/function () {
        function ProfilePicturePage(router, zone, apiservices, sendData, platform, selectImg, navCtrl) {
          _classCallCheck(this, ProfilePicturePage);

          this.router = router;
          this.zone = zone;
          this.apiservices = apiservices;
          this.sendData = sendData;
          this.platform = platform;
          this.selectImg = selectImg;
          this.navCtrl = navCtrl;
          this.showFilterDiv = false;
          this.win = window;
          this.submitImgArr = [];
          this.showButtn = false;
          this.formSubmitData = this.sendData.alldata;
          console.log("organisation name data from organisationNamePage 4==", this.formSubmitData);
          this.profileImage = this.sendData.myParam;
          console.log("organisation name data from organisationNamePage 4.1==", this.profileImage);
          this.staticPreviewImage = this.profileImage.prev_profile;
          console.log("organisation name data from organisationNamePage 4.1==", this.staticPreviewImage);
        }

        _createClass(ProfilePicturePage, [{
          key: "hardWareBackButton",
          value: function hardWareBackButton() {
            // this.navCtrl.navigateBack("/hr-policy-list"); 
            this.navCtrl.navigateBack("/organisation-name");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openActionDiv",
          value: function openActionDiv() {
            var _this = this;

            this.zone.run(function () {
              console.log("show filter1==", _this.showFilterDiv);

              if (_this.showFilterDiv) {
                console.log("show filter2==", _this.showFilterDiv);
                _this.showFilterDiv = false;
              } else {
                console.log("show filter3==", _this.showFilterDiv);
                _this.showFilterDiv = true;
              }
            });
          }
        }, {
          key: "uploadImage",
          value: function uploadImage(value) {
            var _this2 = this;

            console.log("get click value image/camera==", value); // value=camera || value=gallery

            this.zone.run(function () {
              var cropTempArray = [];
              _this2.submitImgArr = [];
              var tempArray = []; // this.selectImg.captureImage(value,this.sideMenuData).then(res=>{

              _this2.selectImg.captureImage(value, "").then(function (res) {
                console.log("get capture 123 image==", res);
                cropTempArray.push(res);

                _this2.selectImg.cropImage(cropTempArray).then(function (cropedImage) {
                  console.log("get croped image path==", cropedImage);

                  _this2.submitImgArr.push(cropedImage);

                  console.log("get croped image submitImgArr==", _this2.submitImgArr);

                  var previewImagePath = _this2.win.Ionic.WebView.convertFileSrc(cropedImage);

                  _this2.blurImage = 1;
                  _this2.showButtn = false;

                  if (_this2.platform.is('ios')) {
                    _this2.staticPreviewImage = '../../assets/watermark/watermark.png';
                  } else {
                    _this2.staticPreviewImage = previewImagePath;
                  }

                  tempArray.push({
                    "previewImage": _this2.staticPreviewImage,
                    "module": "1",
                    "media": cropedImage
                  });
                  console.log("get imagePath previewImagePath==", previewImagePath);
                  _this2.showFilterDiv = false;

                  _this2.selectImg.uploadImageOnServer(tempArray, 'img').then(function (imgUploadRes) {
                    // console.log("get apiSuccess Data submitImgArr==", this.submitImgArr);
                    console.log("get apiSuccess Data imgUploadRes==", imgUploadRes);
                    _this2.blurImage = 0;
                    _this2.showButtn = true;
                    _this2.serverImg = imgUploadRes;

                    if (_this2.serverImg.length >= 1) {
                      console.log("if condition after getting image==", _this2.serverImg.length);

                      for (var i = 0; i < _this2.serverImg.length; i++) {
                        console.log("for loop after getting image==", _this2.serverImg);
                        _this2.staticPreviewImage = _this2.serverImg[i].data.image_metadata.filebaseUrl;
                        _this2.sendImageToApi = _this2.serverImg[i].data.image_metadata.filePath;
                      }

                      console.log("upload image final array2==", _this2.sendImageToApi);
                    } // console.log("get apiSuccess Data tempImgUploadResArray==", this.profileData);

                  });
                });
              });
            });
          }
        }, {
          key: "goToNext",
          value: function goToNext(value) {
            var _this3 = this;

            this.zone.run(function () {
              if (value == "submit") {
                _this3.apiservices.showLoader;
                console.log("profile image Api keys this.sendImageToApi==", _this3.sendImageToApi);
                var apiKey = {
                  "profile": _this3.sendImageToApi
                };
                console.log("profile image Api keys of==", apiKey);

                _this3.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].profileImageSubmit, apiKey).subscribe(function (result) {
                  console.log("profile image Api response==", result);

                  _this3.apiservices.hideLoader();

                  if (result.status == '1' || result.status == 1) {
                    _this3.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg'); // this.storageService.setStorage('clientId', result.data.token);


                    _this3.router.navigate(["/tabs/tab1"]);
                  } else {
                    _this3.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                  }
                }, function (err) {
                  _this3.apiservices.hideLoader();

                  _this3.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
              } else {
                _this3.router.navigate(["/tabs/tab1"]);
              }
            });
          }
        }]);

        return ProfilePicturePage;
      }();

      ProfilePicturePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"]
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"]
        }, {
          type: src_app_imageCapture_uploading_service__WEBPACK_IMPORTED_MODULE_6__["UploadingService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }];
      };

      ProfilePicturePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-picture',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./profile-picture.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/profile-picture/profile-picture.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./profile-picture.page.scss */
        "./src/app/loginModule/profile-picture/profile-picture.page.scss"))["default"]]
      })], ProfilePicturePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=loginModule-profile-picture-profile-picture-module-es5.js.map