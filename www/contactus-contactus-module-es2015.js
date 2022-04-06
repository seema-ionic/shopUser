(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contactus-contactus-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{contactUsAllData?.title}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <div class=\"commonPagePadding\">\n    <br>\n    <ion-row>\n      <ion-col [size]=\"12\">\n        <div class=\"borderField\">\n          <ion-input type=\"text\" (ionFocus)=\"setInputFocus()\" (ionBlur)=\"unCheckFocus()\" [placeholder]=\"contactData?.placeholder_subject\" value=\"\" [(ngModel)]=\"subjectText\"></ion-input>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col [size]=\"12\">\n        <div class=\"borderField\">\n          <ion-textarea rows=\"6\" cols=\"20\" (ionFocus)=\"setInputFocus()\" (ionBlur)=\"unCheckFocus()\" [placeholder]=\"contactData?.placeholder_comment\" [(ngModel)]=\"contentText\"></ion-textarea>\n        </div>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col [size]=\"7\">\n        <div class=\"attachItemDiv\" tappable (click)=\"openActionDiv()\">\n          <p class=\"fontText\">\n            <span>\n              <ion-icon name=\"attach-outline\"></ion-icon>\n              <small>{{contactData?.attached_text}}</small>\n            </span>\n          </p>\n        </div>\n      </ion-col>\n      <ion-col [size]=\"5\"></ion-col>\n    </ion-row>\n\n\n    <div *ngIf=\"staticPreviewImage!=''\">\n      <div class=\"previewSectionDiv\">\n        <ion-row>\n          <ion-col [size]=\"12\" class=\"ion-no-padding\">      \n            <div class=\"previewImgDiv\">\n              <!-- <img [src]=\"staticPreviewImage\" tappable (click)=\"viewImageFunc(staticPreviewImage)\" [ngClass]=\"{'blurOn': blurImage==1, 'blurOff': blurImage==0}\" onerror=\"this.src='../../assets/watermark/watermark.png'\"> -->\n              <img [src]=\"staticPreviewImage\" [ngClass]=\"{'blurOn': blurImage==1, 'blurOff': blurImage==0}\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n              <ion-icon name=\"close\" tappable (click)=\"removeSelectedImg()\"></ion-icon>\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n\n    <br><br>\n\n    <ion-row lines=\"none\" *ngIf=\"contactData?.button_applicable==1 || contactData?.button_applicable=='1'\">\n      <ion-col [size]=\"12\" class=\"ion-text-center centerelement\">\n        <ion-button [disabled]=\"contentText?.trim()=='' || subjectText?.trim()==''\" tappable (click)=\"submitFinalArray()\" class=\"dynamicSmallButton\">{{contactData?.button_text}}</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <!-- <ion-row *ngIf=\"errorMessage!==''\">\n    <ion-col [size]=\"12\" class=\"ion-text-center\"><p style=\"font-size:12px;\" class=\"noDataFound\">{{errorMessage}}</p></ion-col>\n  </ion-row> -->\n\n  <br><br><br><br><br><br>\n</ion-content>\n\n\n\n\n<ion-footer *ngIf=\"showCallEmail==false\">\n  <div class=\"callDiv\">\n    <ion-row>\n      <ion-col [size]=\"6\" class=\"ion-no-padding ion-no-margin\">\n        <ion-row>\n          <ion-col [size]=\"12\" class=\"ion-text-center colcss\"><ion-icon name=\"call\"></ion-icon></ion-col>\n          <ion-col [size]=\"12\" class=\"ion-text-center\">\n            <p class=\"noMargin\">\n              <a class=\"noTextDecoration\" href=\"tel:{{contactData?.mobile_number}}\"> {{contactData?.mobile_number}}</a>\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col [size]=\"6\" class=\"ion-no-padding ion-no-margin\">\n        <ion-row>\n          <ion-col [size]=\"12\" class=\"ion-text-center colcss\"><ion-icon name=\"mail\"></ion-icon></ion-col>\n          <ion-col [size]=\"12\" class=\"ion-text-center\">\n            <p class=\"noMargin\">\n              <a class=\"noTextDecoration\" href=\"mailto:{{contactData?.email_id}}\"> {{contactData?.email_id}}</a>\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-footer>\n\n<ion-footer *ngIf=\"showFilterDiv == true\">\n  <div *ngIf=\"showFilterDiv\" [ngClass]=\"{'tintBg':showFilterDiv == true}\"> </div>\n  <div class=\"footerContainer\" *ngIf=\"showFilterDiv\">\n    <p class=\"titleText\">Upload <span tappable (click)=\"openActionDiv()\"><ion-icon name=\"close\" style=\"margin:0px;\"></ion-icon></span></p>\n    <br>\n    <ion-row>\n      <ion-col [size]=\"6\" class=\"ion-text-center\" tappable (click)=\"uploadImage('camera')\">\n        <img style=\"width:70px;\" src=\"../../assets/icon/camera.png\">\n        <p>Camera</p>\n      </ion-col>\n      <ion-col [size]=\"6\" class=\"ion-text-center\" tappable (click)=\"uploadImage('gallery')\">\n        <img style=\"width:70px;\" src=\"../../assets/icon/gallery.png\">\n        <p>Gallery</p>\n      </ion-col>\n    </ion-row>\n    <br>\n  </div>\n</ion-footer>");

/***/ }),

/***/ "./src/app/contactus/contactus-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/contactus/contactus-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ContactusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPageRoutingModule", function() { return ContactusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _contactus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactus.page */ "./src/app/contactus/contactus.page.ts");




const routes = [
    {
        path: '',
        component: _contactus_page__WEBPACK_IMPORTED_MODULE_3__["ContactusPage"]
    }
];
let ContactusPageRoutingModule = class ContactusPageRoutingModule {
};
ContactusPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactusPageRoutingModule);



/***/ }),

/***/ "./src/app/contactus/contactus.module.ts":
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.module.ts ***!
  \***********************************************/
/*! exports provided: ContactusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPageModule", function() { return ContactusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _contactus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contactus-routing.module */ "./src/app/contactus/contactus-routing.module.ts");
/* harmony import */ var _contactus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contactus.page */ "./src/app/contactus/contactus.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");









let ContactusPageModule = class ContactusPageModule {
};
ContactusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contactus_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactusPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_contactus_page__WEBPACK_IMPORTED_MODULE_6__["ContactusPage"]]
    })
], ContactusPageModule);



/***/ }),

/***/ "./src/app/contactus/contactus.page.scss":
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n\n.iconimg {\n  height: 60px;\n  width: 60px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.colcss {\n  margin: auto;\n}\n\n.bordercss, .borderField {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n\n.previewSectionDiv {\n  padding: 10px 0px;\n}\n\n.previewSectionDiv .previewImgDiv {\n  position: relative;\n  height: 150px;\n  width: 100%;\n  border: 1px solid var(--headerColor);\n}\n\n.previewSectionDiv .previewImgDiv img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 10px;\n  padding: 10px;\n}\n\n.previewSectionDiv .previewImgDiv ion-icon {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  font-size: 20px;\n  border: 2px solid gainsboro;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  color: gray;\n}\n\n.previewSectionDiv .previewImgDiv .blurOn {\n  filter: blur(8px);\n}\n\n.previewSectionDiv .previewImgDiv .blurOff {\n  filter: blur(0);\n}\n\n.footerContainer p {\n  color: #000;\n}\n\n.attachItemDiv span {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  padding: 5px 0px;\n  display: inline-block;\n}\n\n.attachItemDiv span ion-icon {\n  font-size: 20px;\n  float: left;\n  margin: 0 5px;\n}\n\n.attachItemDiv span small {\n  font-size: 15px;\n  float: left;\n  margin: 2px 15px 0 0px;\n}\n\nion-icon {\n  color: var(--headerColor);\n  font-size: 25px;\n  margin: 10px 0 0 0;\n}\n\n.callDiv {\n  font-size: 4.5vw;\n  margin: 0 0 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBRSxlQUFBO0VBQWUsa0JBQUE7QUFHakI7O0FBRkE7RUFBUyxZQUFBO0VBQVksV0FBQTtFQUFXLHNCQUFBO0tBQUEsbUJBQUE7QUFRaEM7O0FBUEE7RUFBUSxZQUFBO0FBV1I7O0FBVkE7RUFBeUIsMkJBQUE7RUFBMkIsa0JBQUE7QUFlcEQ7O0FBYkE7RUFBbUIsaUJBQUE7QUFpQm5COztBQWhCRTtFQUFlLGtCQUFBO0VBQWtCLGFBQUE7RUFBYSxXQUFBO0VBQVcsb0NBQUE7QUFzQjNEOztBQXJCSTtFQUFJLFdBQUE7RUFBVyxZQUFBO0VBQVksc0JBQUE7S0FBQSxtQkFBQTtFQUFtQixtQkFBQTtFQUFtQixhQUFBO0FBNEJyRTs7QUEzQkk7RUFBVSxrQkFBQTtFQUFrQixVQUFBO0VBQVUsWUFBQTtFQUFZLGVBQUE7RUFBZSwyQkFBQTtFQUMvRCxrQkFBQTtFQUFrQixXQUFBO0VBQVcsWUFBQTtFQUFZLGdCQUFBO0VBQWdCLFdBQUE7QUFzQy9EOztBQXBDSTtFQUFRLGlCQUFBO0FBdUNaOztBQXRDSTtFQUFTLGVBQUE7QUF5Q2I7O0FBcENFO0VBQUUsV0FBQTtBQXdDSjs7QUFyQ0U7RUFBSywyQkFBQTtFQUEyQixrQkFBQTtFQUFrQixnQkFBQTtFQUFnQixxQkFBQTtBQTRDcEU7O0FBM0NJO0VBQVMsZUFBQTtFQUFlLFdBQUE7RUFBVyxhQUFBO0FBZ0R2Qzs7QUEvQ0k7RUFBTSxlQUFBO0VBQWUsV0FBQTtFQUFXLHNCQUFBO0FBb0RwQzs7QUFqREE7RUFBUyx5QkFBQTtFQUF5QixlQUFBO0VBQWUsa0JBQUE7QUF1RGpEOztBQXREQTtFQUFTLGdCQUFBO0VBQWdCLGtCQUFBO0FBMkR6QiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3R1cy9jb250YWN0dXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHttYXJnaW4tdG9wOjhweDttYXJnaW4tYm90dG9tOjhweDt9XG4uaWNvbmltZ3toZWlnaHQ6NjBweDt3aWR0aDo2MHB4O29iamVjdC1maXQ6Y29udGFpbjt9XG4uY29sY3Nze21hcmdpbjphdXRvO31cbi5ib3JkZXJjc3MsIC5ib3JkZXJGaWVsZHtib3JkZXI6MXB4IHNvbGlkIGxpZ2h0Z3JheTtib3JkZXItcmFkaXVzOjVweDt9XG5cbi5wcmV2aWV3U2VjdGlvbkRpdntwYWRkaW5nOjEwcHggMHB4O1xuICAucHJldmlld0ltZ0Rpdntwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6MTUwcHg7d2lkdGg6MTAwJTtib3JkZXI6MXB4IHNvbGlkIHZhcigtLWhlYWRlckNvbG9yKTtcbiAgICBpbWd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvYmplY3QtZml0OmNvbnRhaW47Ym9yZGVyLXJhZGl1czoxMHB4O3BhZGRpbmc6MTBweDt9XG4gICAgaW9uLWljb24ge3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMTBweDtyaWdodDotMTBweDtmb250LXNpemU6MjBweDtib3JkZXI6MnB4IHNvbGlkIGdhaW5zYm9ybztcbiAgICAgIGJvcmRlci1yYWRpdXM6NTAlO3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7YmFja2dyb3VuZDojZmZmO2NvbG9yOmdyYXk7XG4gICAgfVxuICAgIC5ibHVyT257ZmlsdGVyOmJsdXIoOHB4KTt9XG4gICAgLmJsdXJPZmZ7ZmlsdGVyOmJsdXIoMCk7fVxuICB9XG59XG5cbi5mb290ZXJDb250YWluZXJ7XG4gIHB7Y29sb3I6IzAwMDt9XG59XG4uYXR0YWNoSXRlbURpdntcbiAgc3Bhbntib3JkZXI6MXB4IHNvbGlkIGxpZ2h0Z3JheTtib3JkZXItcmFkaXVzOjVweDtwYWRkaW5nOjVweCAwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgaW9uLWljb257Zm9udC1zaXplOjIwcHg7ZmxvYXQ6bGVmdDttYXJnaW46MCA1cHg7fVxuICAgIHNtYWxse2ZvbnQtc2l6ZToxNXB4O2Zsb2F0OmxlZnQ7bWFyZ2luOjJweCAxNXB4IDAgMHB4O31cbiAgfVxufVxuaW9uLWljb257Y29sb3I6dmFyKC0taGVhZGVyQ29sb3IpO2ZvbnQtc2l6ZToyNXB4O21hcmdpbjoxMHB4IDAgMCAwO31cbi5jYWxsRGl2e2ZvbnQtc2l6ZTo0LjV2dzttYXJnaW46MCAwIDIwcHggMDt9XG4iXX0= */");

/***/ }),

/***/ "./src/app/contactus/contactus.page.ts":
/*!*********************************************!*\
  !*** ./src/app/contactus/contactus.page.ts ***!
  \*********************************************/
/*! exports provided: ContactusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPage", function() { return ContactusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/assets/constant */ "./src/assets/constant.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_imageCapture_uploading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/imageCapture/uploading.service */ "./src/app/imageCapture/uploading.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");









let ContactusPage = class ContactusPage {
    constructor(storageService, zone, apiservices, platform, actionSheetController, selectImg, location, photoViewer) {
        this.storageService = storageService;
        this.zone = zone;
        this.apiservices = apiservices;
        this.platform = platform;
        this.actionSheetController = actionSheetController;
        this.selectImg = selectImg;
        this.location = location;
        this.photoViewer = photoViewer;
        this.showFilterDiv = false;
        this.win = window;
        this.mediaArr = [];
        this.subjectText = "";
        this.contentText = "";
        this.staticPreviewImage = "";
        this.submitImgArr = [];
        this.sendImageToApi = "";
        this.showCallEmail = false;
        this.contactUsAllData = this.apiservices.contactHelpDesk;
        this.contactData = this.contactUsAllData.settings;
        console.log("contact data send from sideMenu API==", this.contactData);
    }
    ngOnInit() {
        this.storageService.getStorage().then(res => {
            console.log("ionic lifecycle called getStorage==>", res);
        });
    }
    viewImageFunc(image) {
        this.zone.run(() => {
            this.photoViewer.show(image);
            // this.photoViewer.show(this.image, "Benepik One", {headers: "{username:foo,password:bar}"});
        });
    }
    setInputFocus() {
        this.showCallEmail = true;
        console.log("Input box is active==", this.showCallEmail);
    }
    unCheckFocus() {
        this.showCallEmail = false;
        console.log("Input box is Deactive==", this.showCallEmail);
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
            this.sendImageToApi = [];
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
                    }
                    else {
                        this.staticPreviewImage = previewImagePath;
                    }
                    tempArray.push({ "previewImage": this.staticPreviewImage, "module": "9", "media": cropedImage });
                    console.log("get imagePath previewImagePath==", previewImagePath);
                    this.showFilterDiv = false;
                    this.selectImg.uploadImageOnServer(tempArray, 'img').then(imgUploadRes => {
                        // console.log("get apiSuccess Data submitImgArr==", this.submitImgArr);
                        console.log("get apiSuccess Data imgUploadRes==", imgUploadRes);
                        this.blurImage = 0;
                        this.serverImg = imgUploadRes;
                        if (this.serverImg.length >= 1) {
                            console.log("if condition after getting image==", this.serverImg.length);
                            for (let i = 0; i < this.serverImg.length; i++) {
                                console.log("for loop after getting image==", this.serverImg);
                                this.apiservices.showToastMessage(this.serverImg[i].message, 'top', 3000, 'greenBg');
                                this.staticPreviewImage = this.serverImg[i].data.image_metadata.filebaseUrl;
                                this.sendImageToApi = this.serverImg[i].data.image_metadata.filePath;
                            }
                            console.log("upload image final array2==", this.sendImageToApi);
                        }
                    });
                });
            });
        });
    }
    // uploadImage(value){
    //   console.log("click value image/camera==", value);
    //   this.zone.run(()=>{
    //     this.selectImg.base64Function(value,'this.contactData').then(res=>{
    //       console.log("capture 123 image==>", res);
    //       this.showFilterDiv = false;
    //       this.profileData=res;
    //     });
    //   });
    // }
    removeSelectedImg(index) {
        this.zone.run(() => {
            console.log("remove image index==", index);
            console.log("remove serverImg==", this.mediaArr);
            this.staticPreviewImage = "";
        });
    }
    submitFinalArray() {
        this.zone.run(() => {
            this.apiservices.showLoader();
            console.log("home page api call function");
            let apikey = {
                "subject": this.subjectText,
                "comment": this.contentText,
                "attachment": this.sendImageToApi
            };
            //following key will be used in apiservice for keeping original comment obj
            let copy_apiKey = {
                "subject": this.subjectText,
                "comment": this.contentText,
                "attachment": this.sendImageToApi
            };
            // this.apiservices.apiCallWithLoginToken(URLS.submitContactFeed, apikey).subscribe((result)=>{
            this.apiservices.apiCallWithLoginTokenComment(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].submitContactFeed, apikey, copy_apiKey).subscribe((result) => {
                console.log("api response of home page api==", result);
                this.apiservices.hideLoader();
                if (result.status == 1) {
                    this.location.back();
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
};
ContactusPage.ctorParameters = () => [
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: src_app_imageCapture_uploading_service__WEBPACK_IMPORTED_MODULE_6__["UploadingService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__["PhotoViewer"] }
];
ContactusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contactus',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contactus.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contactus.page.scss */ "./src/app/contactus/contactus.page.scss")).default]
    })
], ContactusPage);



/***/ })

}]);
//# sourceMappingURL=contactus-contactus-module-es2015.js.map