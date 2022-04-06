(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{pageTitle}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content>\n  <div *ngIf=\"showProfileData\">\n    <div class=\"bannerDiv\">\n      <br>\n      <ion-row>\n        <ion-col [size]=\"12\" class=\"ion-no-padding\">\n          <div class=\"profileImgDiv\">\n            <div class=\"captureImageDiv\">\n              <img [src]=\"staticPreviewImage\" tappable (click)=\"viewImageFunc(staticPreviewImage)\" [ngClass]=\"{'blurOn': blurImage==1, 'blurOff': blurImage==0}\" onerror=\"this.src='../../assets/watermark/profileWatermark.png'\">\n            </div>\n            <ion-icon *ngIf=\"showProfileData?.upload_enable==true\" name=\"camera\" tappable (click)=\"openActionDiv()\"></ion-icon>\n          </div>\n        </ion-col>\n        <ion-col [size]=\"12\" class=\"ion-no-padding ion-text-center\">\n          <p class=\"noMargin nameText\">{{showProfileData?.name}}</p>\n          <p class=\"postionText\">{{showProfileData?.location}}</p>\n        </ion-col>\n      </ion-row>\n      <br>\n    </div>\n    \n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-padding-top\">\n        <div class=\"bottomCardDiv\">\n          <div class=\"overTextDiv\"><span>{{showProfileData?.my_details}}</span></div>\n          <div class=\"newCardDiv\">\n            <ion-row class=\"ion-text-center\">\n              <ion-col [size]=\"12\" class=\"ion-no-padding ion-margin-bottom\">\n                <img [src]=\"showProfileData?.profile_icon\" onerror=\"this.src='../../../assets/watermark/watermark.png'\">\n                <p>{{showProfileData?.designation}}</p>\n              </ion-col>\n              <ion-col [size]=\"12\" class=\"ion-no-padding ion-margin-bottom\">\n                <img [src]=\"showProfileData?.mail_icon\" onerror=\"this.src='../../../assets/watermark/watermark.png'\">\n                <p>{{showProfileData?.email_id}}</p>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"ion-text-center\">\n              <ion-col [size]=\"12\" class=\"ion-no-padding\"><img [src]=\"showProfileData?.call_icon\" onerror=\"this.src='../../../assets/watermark/watermark.png'\"></ion-col>\n              <ion-col [size]=\"8\" class=\"autoMargin ion-text-right\">\n                <p class=\"noMargin\">{{showProfileData?.contactNumber}}</p>\n              </ion-col>\n              <ion-col [size]=\"4\" class=\"ion-no-padding autoMargin ion-text-left\">\n                <ion-icon class=\"editIcon\" name=\"create\" tappable (click)=\"updateMobEmail(showProfileData)\"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n\n  <div *ngIf=\"!showProfileData\">\n    <app-skelton-listview [iconPath]=\"'sideProfile'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n</ion-content>\n\n\n\n\n<ion-footer>\n  <div *ngIf=\"showFilterDiv\" [ngClass]=\"{'tintBg':showFilterDiv == true}\"> </div>\n  <div class=\"footerContainer\" *ngIf=\"showFilterDiv\">\n    <p class=\"titleText\">Upload <span tappable (click)=\"openActionDiv()\"><ion-icon name=\"close\"></ion-icon></span></p>\n    <br>\n    <ion-row>\n      <ion-col [size]=\"6\" class=\"ion-text-center\" tappable (click)=\"uploadImage('camera')\">\n        <img style=\"width:70px;\" src=\"../../assets/icon/camera.png\">\n        <p>Camera</p>\n      </ion-col>\n      <ion-col [size]=\"6\" class=\"ion-text-center\" tappable (click)=\"uploadImage('gallery')\">\n        <img style=\"width:70px;\" src=\"../../assets/icon/gallery.png\">\n        <p>Gallery</p>\n      </ion-col>\n    </ion-row>\n    <br>\n  </div>\n</ion-footer>");

/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bannerDiv {\n  background: var(--headerLightColor);\n  padding: 20px 15px;\n}\n.bannerDiv .profileImgDiv {\n  text-align: center;\n  width: 130px;\n  margin: 0 auto 20px;\n  height: 130px;\n  z-index: 999;\n  position: relative;\n}\n.bannerDiv .profileImgDiv .captureImageDiv {\n  border: 0px dashed var(--headerColor);\n  border-radius: 50%;\n  width: 100%;\n  margin: auto;\n  height: 100%;\n  overflow: hidden;\n  background: rgba(255, 255, 255, 0.5);\n  box-shadow: 0px 0px 20px 5px white;\n}\n.bannerDiv .profileImgDiv .captureImageDiv img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.bannerDiv .profileImgDiv .captureImageDiv .blurOn {\n  filter: blur(8px);\n}\n.bannerDiv .profileImgDiv .captureImageDiv .blurOff {\n  filter: blur(0);\n}\n.bannerDiv .profileImgDiv ion-icon {\n  position: absolute;\n  z-index: 99999;\n  bottom: -10px;\n  right: 0;\n  margin: auto;\n  font-size: 30px;\n  color: var(--headerTitleOrMenu);\n  background: var(--headerColor);\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  border: 3px solid var(--headerColor);\n  padding: 5px;\n}\n.bannerDiv .nameText {\n  font-size: 25px;\n  font-weight: bold;\n}\n.bannerDiv .postionText, .bannerDiv .emailText, .bannerDiv .mobileText {\n  margin: 5px 0;\n  font-size: 18px;\n  color: #5e5e5e;\n  font-weight: bold;\n}\n.bottomCardDiv {\n  width: 85%;\n  margin: 0 auto 20px;\n  box-shadow: 0px 5px 10px gainsboro;\n  padding: 10px;\n  border-radius: 0px 0px 15px 15px;\n  position: relative;\n}\n.bottomCardDiv .overTextDiv {\n  text-align: center;\n  position: absolute;\n  top: -40px;\n  left: 0;\n  right: 0;\n}\n.bottomCardDiv .overTextDiv span {\n  box-shadow: 0px 5px 10px gainsboro;\n  padding: 10px;\n  background: #fff;\n  border-radius: 30px;\n  min-width: 60%;\n  display: inline-block;\n  text-align: center;\n  color: gray;\n  font-weight: bold;\n  font-size: 18px;\n}\n.bottomCardDiv .newCardDiv {\n  padding: 15px 0 0 0;\n}\n.bottomCardDiv .newCardDiv p {\n  margin: 0 0 5px 0;\n  font-weight: bold;\n  color: gray;\n  font-size: 4.5vw;\n}\n.bottomCardDiv .newCardDiv ion-icon {\n  font-size: 25px;\n  color: gray;\n}\n.bottomCardDiv .newCardDiv img {\n  width: 30px;\n}\n.bottomCardDiv .newCardDiv .mobileText {\n  margin: 15px 0px;\n}\n.bottomCardDiv .newCardDiv .editIcon {\n  display: inline-block;\n  color: var(--headerColor);\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLG1DQUFBO0VBQW1DLGtCQUFBO0FBRzlDO0FBRkU7RUFBZSxrQkFBQTtFQUFrQixZQUFBO0VBQVksbUJBQUE7RUFBbUIsYUFBQTtFQUFhLFlBQUE7RUFBWSxrQkFBQTtBQVUzRjtBQVRJO0VBQWlCLHFDQUFBO0VBQXFDLGtCQUFBO0VBQWtCLFdBQUE7RUFBVyxZQUFBO0VBQVksWUFBQTtFQUFZLGdCQUFBO0VBQ3pHLG9DQUFBO0VBQW9DLGtDQUFBO0FBa0IxQztBQWpCTTtFQUFJLFdBQUE7RUFBVyxZQUFBO0VBQVksb0JBQUE7S0FBQSxpQkFBQTtBQXNCakM7QUFyQk07RUFBUSxpQkFBQTtBQXdCZDtBQXZCTTtFQUFTLGVBQUE7QUEwQmY7QUF4Qkk7RUFBUyxrQkFBQTtFQUFrQixjQUFBO0VBQWMsYUFBQTtFQUFhLFFBQUE7RUFBUSxZQUFBO0VBQVksZUFBQTtFQUN4RSwrQkFBQTtFQUErQiw4QkFBQTtFQUE4QixXQUFBO0VBQVcsWUFBQTtFQUFZLGtCQUFBO0VBQ3BGLG9DQUFBO0VBQW9DLFlBQUE7QUFxQzFDO0FBbENFO0VBQVUsZUFBQTtFQUFlLGlCQUFBO0FBc0MzQjtBQXJDRTtFQUFzQyxhQUFBO0VBQWEsZUFBQTtFQUFlLGNBQUE7RUFBYyxpQkFBQTtBQTJDbEY7QUF4Q0E7RUFBZSxVQUFBO0VBQVUsbUJBQUE7RUFBbUIsa0NBQUE7RUFBa0MsYUFBQTtFQUM1RSxnQ0FBQTtFQUFnQyxrQkFBQTtBQWdEbEM7QUEvQ0U7RUFBYSxrQkFBQTtFQUFrQixrQkFBQTtFQUFrQixVQUFBO0VBQVUsT0FBQTtFQUFPLFFBQUE7QUFzRHBFO0FBckRJO0VBQUssa0NBQUE7RUFBa0MsYUFBQTtFQUFhLGdCQUFBO0VBQWdCLG1CQUFBO0VBQW1CLGNBQUE7RUFBYyxxQkFBQTtFQUNuRyxrQkFBQTtFQUFrQixXQUFBO0VBQVcsaUJBQUE7RUFBaUIsZUFBQTtBQWdFcEQ7QUE3REU7RUFBWSxtQkFBQTtBQWdFZDtBQS9ESTtFQUFFLGlCQUFBO0VBQWlCLGlCQUFBO0VBQWlCLFdBQUE7RUFBVyxnQkFBQTtBQXFFbkQ7QUFwRUk7RUFBUyxlQUFBO0VBQWUsV0FBQTtBQXdFNUI7QUF2RUk7RUFBSSxXQUFBO0FBMEVSO0FBekVJO0VBQVksZ0JBQUE7QUE0RWhCO0FBM0VJO0VBQVUscUJBQUE7RUFBcUIseUJBQUE7RUFBeUIsZUFBQTtBQWdGNUQiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lckRpdntiYWNrZ3JvdW5kOnZhcigtLWhlYWRlckxpZ2h0Q29sb3IpO3BhZGRpbmc6MjBweCAxNXB4O1xuICAucHJvZmlsZUltZ0Rpdnt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxMzBweDttYXJnaW46MCBhdXRvIDIwcHg7aGVpZ2h0OjEzMHB4O3otaW5kZXg6OTk5O3Bvc2l0aW9uOnJlbGF0aXZlO1xuICAgIC5jYXB0dXJlSW1hZ2VEaXZ7Ym9yZGVyOjBweCBkYXNoZWQgdmFyKC0taGVhZGVyQ29sb3IpO2JvcmRlci1yYWRpdXM6NTAlO3dpZHRoOjEwMCU7bWFyZ2luOmF1dG87aGVpZ2h0OjEwMCU7b3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgYmFja2dyb3VuZDpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7Ym94LXNoYWRvdzowcHggMHB4IDIwcHggNXB4IHdoaXRlO1xuICAgICAgaW1ne3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b2JqZWN0LWZpdDpjb3Zlcjt9XG4gICAgICAuYmx1ck9ue2ZpbHRlcjpibHVyKDhweCk7fVxuICAgICAgLmJsdXJPZmZ7ZmlsdGVyOmJsdXIoMCk7fVxuICAgIH1cbiAgICBpb24taWNvbntwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4Ojk5OTk5O2JvdHRvbTotMTBweDtyaWdodDowO21hcmdpbjphdXRvO2ZvbnQtc2l6ZTozMHB4O1xuICAgICAgY29sb3I6dmFyKC0taGVhZGVyVGl0bGVPck1lbnUpO2JhY2tncm91bmQ6dmFyKC0taGVhZGVyQ29sb3IpO3dpZHRoOjM1cHg7aGVpZ2h0OjM1cHg7Ym9yZGVyLXJhZGl1czo1MCU7XG4gICAgICBib3JkZXI6M3B4IHNvbGlkIHZhcigtLWhlYWRlckNvbG9yKTtwYWRkaW5nOjVweDtcbiAgICB9XG4gIH1cbiAgLm5hbWVUZXh0e2ZvbnQtc2l6ZToyNXB4O2ZvbnQtd2VpZ2h0OmJvbGQ7fVxuICAucG9zdGlvblRleHQsIC5lbWFpbFRleHQsIC5tb2JpbGVUZXh0e21hcmdpbjo1cHggMDtmb250LXNpemU6MThweDtjb2xvcjojNWU1ZTVlO2ZvbnQtd2VpZ2h0OmJvbGQ7fVxufVxuXG4uYm90dG9tQ2FyZERpdnt3aWR0aDo4NSU7bWFyZ2luOjAgYXV0byAyMHB4O2JveC1zaGFkb3c6MHB4IDVweCAxMHB4IGdhaW5zYm9ybztwYWRkaW5nOjEwcHg7XG4gIGJvcmRlci1yYWRpdXM6MHB4IDBweCAxNXB4IDE1cHg7cG9zaXRpb246cmVsYXRpdmU7XG4gIC5vdmVyVGV4dERpdnt0ZXh0LWFsaWduOmNlbnRlcjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTQwcHg7bGVmdDowO3JpZ2h0OjA7XG4gICAgc3Bhbntib3gtc2hhZG93OjBweCA1cHggMTBweCBnYWluc2Jvcm87cGFkZGluZzoxMHB4O2JhY2tncm91bmQ6I2ZmZjtib3JkZXItcmFkaXVzOjMwcHg7bWluLXdpZHRoOjYwJTtkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO2NvbG9yOmdyYXk7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LXNpemU6MThweDtcbiAgICB9XG4gIH1cbiAgLm5ld0NhcmREaXZ7cGFkZGluZzoxNXB4IDAgMCAwO1xuICAgIHB7bWFyZ2luOjAgMCA1cHggMDtmb250LXdlaWdodDpib2xkO2NvbG9yOmdyYXk7Zm9udC1zaXplOjQuNXZ3O31cbiAgICBpb24taWNvbntmb250LXNpemU6MjVweDtjb2xvcjpncmF5O31cbiAgICBpbWd7d2lkdGg6MzBweDt9XG4gICAgLm1vYmlsZVRleHR7bWFyZ2luOjE1cHggMHB4O31cbiAgICAuZWRpdEljb257ZGlzcGxheTppbmxpbmUtYmxvY2s7Y29sb3I6dmFyKC0taGVhZGVyQ29sb3IpO2ZvbnQtc2l6ZToyNXB4fVxuICB9XG5cbn0iXX0= */");

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _src_assets_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/assets/constant */ "./src/assets/constant.ts");
/* harmony import */ var src_app_imageCapture_uploading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/imageCapture/uploading.service */ "./src/app/imageCapture/uploading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");










let ProfilePage = class ProfilePage {
    constructor(router, storageService, zone, platform, apiservices, sendData, selectImg, photoViewer) {
        this.router = router;
        this.storageService = storageService;
        this.zone = zone;
        this.platform = platform;
        this.apiservices = apiservices;
        this.sendData = sendData;
        this.selectImg = selectImg;
        this.photoViewer = photoViewer;
        this.showFilterDiv = false;
        this.win = window;
        this.mediaArr = [];
        this.cameraIcon = "camera";
        this.submitImgArr = [];
    }
    videoZoome(staticImage, videoType, index) {
        this.zone.run(() => {
            this.apiservices.videoZoome(staticImage, videoType, index);
        });
    }
    viewImageFunc(image) {
        this.zone.run(() => {
            this.photoViewer.show(image);
            // this.photoViewer.show(this.image, "Benepik One", {headers: "{username:foo,password:bar}"});
        });
    }
    ngOnInit() {
        this.storageService.getStorage().then(res => {
            this.profileDetails();
            console.log("ionic lifecycle called getStorage==>", res);
        });
    }
    profileDetails() {
        this.zone.run(() => {
            console.log("user profile api call function");
            let apikey = {};
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].userProfile, apikey).subscribe((result) => {
                console.log("user profile api result==", result);
                if (result.status == 1) {
                    this.showProfileData = result.data;
                    this.staticPreviewImage = result.data.profile_image;
                    this.pageTitle = result.data.settings.page_header;
                    console.log("final result profile==", this.showProfileData);
                }
                else {
                    this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    openActionDiv() {
        this.zone.run(() => {
            console.log("show filter1==", this.showFilterDiv);
            if (this.showFilterDiv) {
                console.log("show filter2==", this.showFilterDiv);
                this.showFilterDiv = false;
            }
            else {
                console.log("show filter3==", this.showFilterDiv);
                this.showFilterDiv = true;
            }
        });
    }
    uploadImage(value) {
        console.log("get click value image/camera==", value); // value=camera || value=gallery
        this.zone.run(() => {
            let cropTempArray = [];
            this.submitImgArr = [];
            let tempArray = [];
            this.selectImg.captureImage(value, "").then(res => {
                console.log("get capture 123 image==", res);
                cropTempArray.push(res);
                this.selectImg.cropImage(cropTempArray).then(cropedImage => {
                    console.log("get croped image path==", cropedImage);
                    this.submitImgArr.push(cropedImage);
                    console.log("get croped image submitImgArr==", this.submitImgArr);
                    var previewImagePath = this.win.Ionic.WebView.convertFileSrc(cropedImage);
                    this.blurImage = 1;
                    if (this.platform.is('ios')) {
                        this.staticPreviewImage = '../../assets/watermark/watermark.png';
                        this.apiservices.userImage = this.staticPreviewImage;
                    }
                    else {
                        this.staticPreviewImage = previewImagePath;
                        this.apiservices.userImage = this.staticPreviewImage;
                    }
                    tempArray.push({ "previewImage": this.staticPreviewImage, "module": "1", "media": cropedImage });
                    console.log("get imagePath previewImagePath==", previewImagePath);
                    this.showFilterDiv = false;
                    this.selectImg.uploadImageOnServer(tempArray, 'img').then(imgUploadRes => {
                        console.log("get apiSuccess Data imgUploadRes==", imgUploadRes);
                        this.blurImage = 0;
                        this.serverImg = imgUploadRes;
                        if (this.serverImg.length >= 1) {
                            console.log("if condition after getting image==", this.serverImg.length);
                            for (let i = 0; i < this.serverImg.length; i++) {
                                console.log("for loop after getting image==", this.serverImg);
                                this.sendImageToApi = this.serverImg[i].data.image_metadata.filePath;
                                this.staticPreviewImage = this.serverImg[i].data.image_metadata.filebaseUrl;
                                this.apiservices.userImage = this.serverImg[i].data.image_metadata.filebaseUrl;
                            }
                            console.log("upload image final array2==", this.sendImageToApi);
                            this.submitApi(this.sendImageToApi);
                        }
                    });
                });
            });
        });
    }
    submitApi(imagePath) {
        this.zone.run(() => {
            console.log("profile image Api keys this.sendImageToApi==", this.sendImageToApi);
            let apiKey = {
                "profile": imagePath,
            };
            console.log("profile image Api keys of==", apiKey);
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_6__["URLS"].profileImageSubmit, apiKey).subscribe((result) => {
                console.log("profile image Api response==", result);
                if (result.status == '1' || result.status == 1) {
                    this.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');
                }
                else {
                    this.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
            }, err => {
                this.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            });
        });
    }
    updateMobEmail(mobileNumb) {
        this.zone.run(() => {
            this.sendData.alldata = mobileNumb;
            this.router.navigate(["/update-mob-email"]);
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"] },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"] },
    { type: src_app_imageCapture_uploading_service__WEBPACK_IMPORTED_MODULE_7__["UploadingService"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_9__["PhotoViewer"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map