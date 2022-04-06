(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["LoginModuleNew-upload-profile-picture-upload-profile-picture-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/LoginModuleNew/upload-profile-picture/upload-profile-picture.page.html":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/LoginModuleNew/upload-profile-picture/upload-profile-picture.page.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginModuleNewUploadProfilePictureUploadProfilePicturePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>uploadProfilePicture</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <!-- <div class=\"bgImageDiv\">\n    <img src=\"assets/login_icons/bg_4.png\">\n  </div> -->\n  <br><br> <br><br>\n  <p class=\"ion-text-center\"><b>{{homePageData?.data?.profile_page?.title}}</b></p>\n  <br><br>\n     <!-- <br><br> -->\n  <ion-row>\n    <ion-col>\n      <div>\n        <img [src]=\"staticPreviewImage\" class=\"userCss\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/>\n        <img [src]=\"homePageData?.data?.profile_page?.camera_icon\" class=\"iconCss\" \n        tappable (click)=\"openActionDiv()\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/>\n        <!-- <ion-icon name=\"camera-outline\" class=\"iconCss\"></ion-icon> -->\n      </div>\n      \n    </ion-col>\n  </ion-row>\n\n  <br>  <br>\n  <ion-row>\n    <ion-col [size]=\"12\" class=\"ion-text-center\">\n      <ion-button tappable (click)=\"goToNext()\" class=\"dynamicButtonColor\" [disabled]=\"staticPreviewImage==''\"\n      *ngIf=\"homePageData?.data?.profile_page?.next_button?.enable==true\">\n        {{homePageData?.data?.profile_page?.next_button?.text}}</ion-button>\n    </ion-col>\n  </ion-row>\n\n\n  <p class=\"nextBtn\" tappable (click)=\"goToSKIP()\">Skip</p>\n</ion-content>\n\n<ion-footer>\n  <div *ngIf=\"showFilterDiv\" [ngClass]=\"{'tintBg':showFilterDiv == true}\"> </div>\n  <div class=\"footerContainer\" *ngIf=\"showFilterDiv\">\n    <p class=\"titleText\">Upload <span tappable (click)=\"openActionDiv()\"><ion-icon name=\"close\"></ion-icon></span></p>\n    <br>\n    <ion-row>\n      <ion-col [size]=\"6\" class=\"ion-text-center\" tappable (click)=\"uploadImage('camera')\">\n        <img style=\"width:70px;\" src=\"../../assets/icon/camera.png\">\n        <p>Camera</p>\n      </ion-col>\n      <ion-col [size]=\"6\" class=\"ion-text-center\" tappable (click)=\"uploadImage('gallery')\">\n        <img style=\"width:70px;\" src=\"../../assets/icon/gallery.png\">\n        <p>Gallery</p>\n      </ion-col>\n    </ion-row>\n    <br>\n  </div>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./src/app/LoginModuleNew/upload-profile-picture/upload-profile-picture-routing.module.ts":
    /*!************************************************************************************************!*\
      !*** ./src/app/LoginModuleNew/upload-profile-picture/upload-profile-picture-routing.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: UploadProfilePicturePageRoutingModule */

    /***/
    function srcAppLoginModuleNewUploadProfilePictureUploadProfilePictureRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UploadProfilePicturePageRoutingModule", function () {
        return UploadProfilePicturePageRoutingModule;
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


      var _upload_profile_picture_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./upload-profile-picture.page */
      "./src/app/LoginModuleNew/upload-profile-picture/upload-profile-picture.page.ts");

      var routes = [{
        path: '',
        component: _upload_profile_picture_page__WEBPACK_IMPORTED_MODULE_3__["UploadProfilePicturePage"]
      }];

      var UploadProfilePicturePageRoutingModule = function UploadProfilePicturePageRoutingModule() {
        _classCallCheck(this, UploadProfilePicturePageRoutingModule);
      };

      UploadProfilePicturePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UploadProfilePicturePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/LoginModuleNew/upload-profile-picture/upload-profile-picture.module.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/LoginModuleNew/upload-profile-picture/upload-profile-picture.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: UploadProfilePicturePageModule */

    /***/
    function srcAppLoginModuleNewUploadProfilePictureUploadProfilePictureModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UploadProfilePicturePageModule", function () {
        return UploadProfilePicturePageModule;
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


      var _upload_profile_picture_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./upload-profile-picture-routing.module */
      "./src/app/LoginModuleNew/upload-profile-picture/upload-profile-picture-routing.module.ts");
      /* harmony import */


      var _upload_profile_picture_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./upload-profile-picture.page */
      "./src/app/LoginModuleNew/upload-profile-picture/upload-profile-picture.page.ts");

      var UploadProfilePicturePageModule = function UploadProfilePicturePageModule() {
        _classCallCheck(this, UploadProfilePicturePageModule);
      };

      UploadProfilePicturePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _upload_profile_picture_routing_module__WEBPACK_IMPORTED_MODULE_5__["UploadProfilePicturePageRoutingModule"]],
        declarations: [_upload_profile_picture_page__WEBPACK_IMPORTED_MODULE_6__["UploadProfilePicturePage"]]
      })], UploadProfilePicturePageModule);
      /***/
    },

    /***/
    "./src/app/LoginModuleNew/upload-profile-picture/upload-profile-picture.page.scss":
    /*!****************************************************************************************!*\
      !*** ./src/app/LoginModuleNew/upload-profile-picture/upload-profile-picture.page.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginModuleNewUploadProfilePictureUploadProfilePicturePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".userCss {\n  height: 150px;\n  width: 150px;\n  border-radius: 50%;\n  display: block;\n  margin: auto;\n  border: 4px dotted var(--headerColor);\n  padding: 10px;\n}\n\n.iconCss {\n  position: absolute;\n  bottom: 0px;\n  left: 60%;\n  right: 40%;\n  border-radius: 50%;\n  color: #fff;\n  padding: 5px;\n  height: 50px;\n  width: 50px;\n}\n\nion-content {\n  --background: #fbfbfb;\n}\n\n.bgImageDiv {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.nextBtn {\n  position: absolute;\n  right: 0;\n  margin-right: 5%;\n  z-index: 999;\n  color: var(--headerColor);\n  bottom: 13.5%;\n  font-weight: bold;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTG9naW5Nb2R1bGVOZXcvdXBsb2FkLXByb2ZpbGUtcGljdHVyZS91cGxvYWQtcHJvZmlsZS1waWN0dXJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFTLGFBQUE7RUFBZSxZQUFBO0VBQWMsa0JBQUE7RUFBbUIsY0FBQTtFQUFlLFlBQUE7RUFDcEUscUNBQUE7RUFBc0MsYUFBQTtBQU8xQzs7QUFMQTtFQUFTLGtCQUFBO0VBQWtCLFdBQUE7RUFBVyxTQUFBO0VBQVMsVUFBQTtFQUFVLGtCQUFBO0VBQWtCLFdBQUE7RUFBVyxZQUFBO0VBQVksWUFBQTtFQUFZLFdBQUE7QUFpQjlHOztBQWZBO0VBQVkscUJBQUE7QUFtQlo7O0FBbEJBO0VBQVksa0JBQUE7RUFBbUIsTUFBQTtFQUFRLFFBQUE7RUFBVSxTQUFBO0VBQVcsT0FBQTtBQTBCNUQ7O0FBekJBO0VBQVMsa0JBQUE7RUFBa0IsUUFBQTtFQUFRLGdCQUFBO0VBQWdCLFlBQUE7RUFBWSx5QkFBQTtFQUF5QixhQUFBO0VBQ3BGLGlCQUFBO0VBQWlCLDBCQUFBO0FBbUNyQiIsImZpbGUiOiJzcmMvYXBwL0xvZ2luTW9kdWxlTmV3L3VwbG9hZC1wcm9maWxlLXBpY3R1cmUvdXBsb2FkLXByb2ZpbGUtcGljdHVyZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlckNzc3toZWlnaHQ6IDE1MHB4OyB3aWR0aDogMTUwcHg7IGJvcmRlci1yYWRpdXM6IDUwJTtkaXNwbGF5OiBibG9jazttYXJnaW46IGF1dG87IFxuICAgIGJvcmRlcjogNHB4IGRvdHRlZCB2YXIoLS1oZWFkZXJDb2xvcik7cGFkZGluZzogMTBweDtcbn1cbi5pY29uQ3Nze3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowcHg7bGVmdDo2MCU7cmlnaHQ6NDAlO2JvcmRlci1yYWRpdXM6NTAlO2NvbG9yOiNmZmY7cGFkZGluZzo1cHg7aGVpZ2h0OjUwcHg7d2lkdGg6IDUwcHg7XG59XG5pb24tY29udGVudHstLWJhY2tncm91bmQ6ICNmYmZiZmI7fVxuLmJnSW1hZ2VEaXZ7cG9zaXRpb246IGFic29sdXRlO3RvcDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDsgbGVmdDogMDt9XG4ubmV4dEJ0bntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO21hcmdpbi1yaWdodDo1JTt6LWluZGV4Ojk5OTtjb2xvcjp2YXIoLS1oZWFkZXJDb2xvcik7Ym90dG9tOjEzLjUlO1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7fVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/LoginModuleNew/upload-profile-picture/upload-profile-picture.page.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/LoginModuleNew/upload-profile-picture/upload-profile-picture.page.ts ***!
      \**************************************************************************************/

    /*! exports provided: UploadProfilePicturePage */

    /***/
    function srcAppLoginModuleNewUploadProfilePictureUploadProfilePicturePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UploadProfilePicturePage", function () {
        return UploadProfilePicturePage;
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


      var src_app_imageCapture_uploading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/imageCapture/uploading.service */
      "./src/app/imageCapture/uploading.service.ts");
      /* harmony import */


      var src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");
      /* harmony import */


      var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/assets/constant */
      "./src/assets/constant.ts");

      var UploadProfilePicturePage = /*#__PURE__*/function () {
        function UploadProfilePicturePage(router, sendData, zone, platform, apiservices, selectImg) {
          _classCallCheck(this, UploadProfilePicturePage);

          this.router = router;
          this.sendData = sendData;
          this.zone = zone;
          this.platform = platform;
          this.apiservices = apiservices;
          this.selectImg = selectImg;
          this.showFilterDiv = false;
          this.win = window;
          this.submitImgArr = [];
          this.homePageData = this.sendData.alldata;
          this.staticPreviewImage = this.homePageData.data.profile_page.profile_image_pic;
        }

        _createClass(UploadProfilePicturePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToNext",
          value: function goToNext() {
            this.sendData.alldata = this.homePageData;
            this.router.navigate(['/qualification']);
          }
        }, {
          key: "openActionDiv",
          value: function openActionDiv() {
            var _this = this;

            this.zone.run(function () {
              console.log("show filter1==", _this.showFilterDiv);

              if (_this.showFilterDiv) {
                console.log("show filter2==", _this.showFilterDiv);
                _this.showFilterDiv = false;
                _this.staticPreviewImage = '';
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
              var tempArray = [];

              _this2.selectImg.captureImage(value, "").then(function (res) {
                console.log("get capture 123 image==", res);
                cropTempArray.push(res);

                _this2.selectImg.cropImage(cropTempArray).then(function (cropedImage) {
                  console.log("get croped image path==", cropedImage);

                  _this2.submitImgArr.push(cropedImage);

                  console.log("get croped image submitImgArr==", _this2.submitImgArr);

                  var previewImagePath = _this2.win.Ionic.WebView.convertFileSrc(cropedImage);

                  _this2.blurImage = 1;

                  if (_this2.platform.is('ios')) {
                    _this2.staticPreviewImage = '../../assets/watermark/watermark.png';
                    _this2.apiservices.userImage = _this2.staticPreviewImage;
                  } else {
                    _this2.staticPreviewImage = previewImagePath;
                    _this2.apiservices.userImage = _this2.staticPreviewImage;
                  }

                  tempArray.push({
                    "previewImage": _this2.staticPreviewImage,
                    "module": "1",
                    "media": cropedImage
                  });
                  console.log("get imagePath previewImagePath==", previewImagePath);
                  _this2.showFilterDiv = false;

                  _this2.selectImg.uploadImageOnServer(tempArray, 'img').then(function (imgUploadRes) {
                    console.log("get apiSuccess Data imgUploadRes==", imgUploadRes);
                    _this2.blurImage = 0;
                    _this2.serverImg = imgUploadRes;

                    if (_this2.serverImg.length >= 1) {
                      console.log("if condition after getting image==", _this2.serverImg.length);

                      for (var i = 0; i < _this2.serverImg.length; i++) {
                        console.log("for loop after getting image==", _this2.serverImg);
                        _this2.sendImageToApi = _this2.serverImg[i].data.image_metadata.filePath;
                        _this2.staticPreviewImage = _this2.serverImg[i].data.image_metadata.filebaseUrl;
                        _this2.apiservices.userImage = _this2.serverImg[i].data.image_metadata.filebaseUrl;
                      }

                      console.log("upload image final array2==", _this2.sendImageToApi);

                      _this2.submitApi(_this2.sendImageToApi);
                    }
                  });
                });
              });
            });
          }
        }, {
          key: "submitApi",
          value: function submitApi(imagePath) {
            var _this3 = this;

            this.zone.run(function () {
              console.log("profile image Api keys this.sendImageToApi==", _this3.sendImageToApi);
              var apiKey = {
                "profile": imagePath
              };
              console.log("profile image Api keys of==", apiKey);

              _this3.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_7__["URLS"].profileImageSubmit, apiKey).subscribe(function (result) {
                console.log("profile image Api response==", result);

                if (result.status == '1' || result.status == 1) {
                  _this3.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');
                } else {
                  _this3.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this3.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "goToSKIP",
          value: function goToSKIP() {
            this.sendImageToApi = '';
            this.staticPreviewImage = '';
            this.apiservices.userImage = '';
            this.sendData.alldata = this.homePageData;
            this.router.navigate(['/qualification']);
          }
        }]);

        return UploadProfilePicturePage;
      }();

      UploadProfilePicturePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__["DataTransferService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_5__["ApiservicesService"]
        }, {
          type: src_app_imageCapture_uploading_service__WEBPACK_IMPORTED_MODULE_4__["UploadingService"]
        }];
      };

      UploadProfilePicturePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload-profile-picture',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./upload-profile-picture.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/LoginModuleNew/upload-profile-picture/upload-profile-picture.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./upload-profile-picture.page.scss */
        "./src/app/LoginModuleNew/upload-profile-picture/upload-profile-picture.page.scss"))["default"]]
      })], UploadProfilePicturePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=LoginModuleNew-upload-profile-picture-upload-profile-picture-module-es5.js.map