(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loginModule-contact-hr-contact-hr-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/contact-hr/contact-hr.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/contact-hr/contact-hr.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{pageHeader}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div *ngIf=\"allData\" class=\"commonPagePadding\">\n\n    <div class=\"inputSectionDiv\">\n      <ion-row *ngFor=\"let typeAreaData of allData\">\n\n        <!-- this is only text area field start -->\n        <ion-col [size]=\"12\" *ngIf=\"typeAreaData?.type_check=='text'\">\n          <ion-row>\n            <ion-col [size]=\"12\">\n              <label>{{typeAreaData?.title}} <sup *ngIf=\"typeAreaData?.required==1 || typeAreaData?.required=='1'\" class=\"mendatText\">*</sup></label>\n            </ion-col>\n          </ion-row>\n          <div class=\"inputAreaDiv\">\n            <ion-row>\n              <ion-col [size]=\"10\" class=\"ion-no-padding autoMargin\">\n                <ion-input type=\"text\" [placeholder]=\"typeAreaData?.required_text\" value=\"\" [(ngModel)]=\"typeAreaData.save_value\"></ion-input>\n              </ion-col>\n              <ion-col [size]=\"2\" class=\"ion-no-padding ion-text-center\">\n                <img [src]=\"typeAreaData?.icon\" onerror=\"this.src='../../../assets/watermark/watermark.png'\" />\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-col>\n        <!-- this is only text area field end -->\n\n        <!-- this is only text area field for emailAddress start -->\n        <ion-col [size]=\"12\" *ngIf=\"typeAreaData?.type_check=='email'\">\n          <ion-row>\n            <ion-col [size]=\"12\">\n              <label>{{typeAreaData?.title}} <sup *ngIf=\"typeAreaData?.required==1 || typeAreaData?.required=='1'\" class=\"mendatText\">*</sup></label>\n            </ion-col>\n          </ion-row>\n          <div class=\"inputAreaDiv\">\n            <ion-row>\n              <ion-col [size]=\"10\" class=\"ion-no-padding autoMargin\">\n                <ion-input type=\"text\" [placeholder]=\"typeAreaData?.required_text\" value=\"\" [(ngModel)]=\"typeAreaData.save_value\" (ionChange)=\"validateEmail(typeAreaData.save_value)\"></ion-input>\n              </ion-col>\n              <ion-col [size]=\"2\" class=\"ion-no-padding ion-text-center\">\n                <img [src]=\"typeAreaData?.icon\" onerror=\"this.src='../../../assets/watermark/watermark.png'\" />\n              </ion-col>\n            </ion-row>\n          </div>\n          <ion-row *ngIf=\"emailIsOk==false\">\n            <ion-col [size]=\"12\"><div style=\"color:red;font-size:12px;\" [innerHTML]=\"errorEmail\"></div></ion-col>\n          </ion-row>\n        </ion-col>\n        <!-- this is only text area field for emailAddress end -->\n\n        <!-- this is number/telephone area field start -->\n        <ion-col [size]=\"12\" *ngIf=\"typeAreaData?.type_check=='tel'\">\n          <ion-row>\n            <ion-col [size]=\"12\">\n              <label>{{typeAreaData?.title}} <sup *ngIf=\"typeAreaData?.required==1 || typeAreaData?.required=='1'\" class=\"mendatText\">*</sup></label>\n            </ion-col>\n          </ion-row>\n          <div class=\"inputAreaDiv\">\n            <ion-row>\n              <ion-col [size]=\"10\" class=\"ion-no-padding autoMargin\">\n                <ion-input type=\"tel\" [placeholder]=\"typeAreaData?.required_text\" value=\"\" [(ngModel)]=\"typeAreaData.save_value\" (ionChange)=\"changeCountryCode(typeAreaData.save_value)\"></ion-input>\n              </ion-col>\n              <ion-col [size]=\"2\" class=\"ion-no-padding ion-text-center\">\n                <img [src]=\"typeAreaData?.icon\" onerror=\"this.src='../../../assets/watermark/watermark.png'\" />\n              </ion-col>\n            </ion-row>\n          </div>\n          <ion-row *ngIf=\"MobileIsOk==false\">\n            <ion-col [size]=\"12\"><div style=\"color:red;font-size:12px;\" [innerHTML]=\"mobileErr\"></div></ion-col>\n          </ion-row>\n        </ion-col>\n        <!-- this is number/telephone area field end -->\n\n        <!-- this is datePicker dob || doj area field start -->\n        <ion-col [size]=\"12\" *ngIf=\"typeAreaData?.type_check=='date'\">\n          <ion-row>\n            <ion-col [size]=\"12\">\n              <label>{{typeAreaData?.title}} <sup *ngIf=\"typeAreaData?.required==1 || typeAreaData?.required=='1'\" class=\"mendatText\">*</sup></label>\n            </ion-col>\n          </ion-row>\n          <div class=\"inputAreaDiv\">\n            <ion-row>\n              <ion-col [size]=\"10\" class=\"ion-no-padding autoMargin\">\n                <ion-datetime displayFormat=\"DD-MMM-YYYY\" [max]=\"currentDate\" [placeholder]=\"typeAreaData?.required_text\" pickerFormat=\"DD-MMM-YYYY\" displayFormat=\"DD-MMM-YYYY\" name=\"DOB\" [(ngModel)]=\"typeAreaData.save_value\" #datePicker></ion-datetime>\n              </ion-col>\n              <ion-col [size]=\"2\" class=\"ion-no-padding ion-text-center\" tappable (click)=\"datePicker.open()\">\n                <img [src]=\"typeAreaData?.icon\" onerror=\"this.src='../../../assets/watermark/watermark.png'\" />\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-col>\n        <!-- this is datePicker dob || doj area field end -->\n\n        <!-- this is text area field start -->\n        <ion-col [size]=\"12\" *ngIf=\"typeAreaData?.type_check=='comment'\">\n          <ion-row>\n            <ion-col [size]=\"12\">\n              <label>{{typeAreaData?.title}} <sup *ngIf=\"typeAreaData?.required==1 || typeAreaData?.required=='1'\" class=\"mendatText\">*</sup></label>\n            </ion-col>\n          </ion-row>\n          <div class=\"textAreaDiv\">\n            <ion-row>\n              <ion-col [size]=\"12\" class=\"ion-no-padding\">\n                <ion-textarea rows=\"6\" cols=\"20\" [placeholder]=\"typeAreaData?.required_text\" [(ngModel)]=\"typeAreaData.save_value\"></ion-textarea>\n              </ion-col>\n            </ion-row>\n          </div>\n        </ion-col>\n        <!-- this is text area field end -->\n\n      </ion-row>\n\n    </div>\n\n    \n    <ion-row>\n      <ion-col [size]=\"7\">\n        <div class=\"attachItemDiv\" tappable (click)=\"openActionDiv()\">\n          <p class=\"fontText\"><span><small>{{attachmentData?.title}}</small><ion-icon name=\"attach-outline\"></ion-icon></span></p>\n        </div>\n      </ion-col>\n      <ion-col [size]=\"5\"></ion-col>\n    </ion-row>\n\n\n    <div *ngIf=\"staticPreviewImage!=''\">\n      <div class=\"previewSectionDiv\">\n        <ion-row>\n          <ion-col [size]=\"12\" class=\"ion-no-padding\">      \n            <div class=\"previewImgDiv\">\n              <!-- <img [src]=\"staticPreviewImage\" tappable (click)=\"viewImageFunc(staticPreviewImage)\" [ngClass]=\"{'blurOn': blurImage==1, 'blurOff': blurImage==0}\" onerror=\"this.src='../../assets/watermark/watermark.png'\"> -->\n              <img [src]=\"staticPreviewImage\" [ngClass]=\"{'blurOn': blurImage==1, 'blurOff': blurImage==0}\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n              <ion-icon name=\"close\" tappable (click)=\"removeSelectedImg()\"></ion-icon>\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n\n\n    <br><br>\n    <ion-row *ngIf=\"attachmentData?.is_btn_applicable==1 || attachmentData?.is_btn_applicable=='1'\">\n      <ion-col [size]=\"12\" class=\"ion-text-center centerelement\">\n        <ion-button [disabled]=\"MobileIsOk == false || emailIsOk == false\" tappable (click)=\"submitFinalArray()\" class=\"dynamicButtonColor\">{{attachmentData?.btn_text}}</ion-button>\n      </ion-col>\n    </ion-row>\n\n\n  </div>\n\n\n\n\n\n\n\n  <div *ngIf=\"!allData && showErrorImage==''\">\n    <app-skelton-listview [iconPath]=\"'hrContactPage'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n\n  <ion-row *ngIf=\"!allData && showErrorImage!=''\">\n    <ion-col class=\"ion-text-center\" [push]=\"1\" [size]=\"10\">\n      <br><br>\n      <img [src]=\"showErrorImage\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n      <h2 class=\"noDataFoundMessage\">{{no_data_message}}</h2>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n\n<!-- <ion-footer *ngIf=\"showFilterDiv == false && allData\">\n  <ion-row lines=\"none\" *ngIf=\"attachmentData?.is_btn_applicable==1 || attachmentData?.is_btn_applicable=='1'\">\n    <ion-col [size]=\"12\" class=\"ion-text-center centerelement\">\n      <ion-button [disabled]=\"MobileIsOk == false || emailIsOk == false\" tappable (click)=\"submitFinalArray()\" class=\"dynamicButtonColor\">{{attachmentData?.btn_text}}</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer> -->\n\n<ion-footer *ngIf=\"showFilterDiv == true\">\n  <div *ngIf=\"showFilterDiv\" [ngClass]=\"{'tintBg':showFilterDiv == true}\"> </div>\n  <div class=\"footerContainer\" *ngIf=\"showFilterDiv\">\n    <p class=\"titleText\">Upload <span tappable (click)=\"openActionDiv()\"><ion-icon name=\"close\"></ion-icon></span></p>\n    <br>\n    <ion-row>\n      <ion-col [size]=\"6\" class=\"ion-text-center\" tappable (click)=\"uploadImage('camera')\">\n        <img style=\"width:70px;\" src=\"../../assets/icon/camera.png\">\n        <p>Camera</p>\n      </ion-col>\n      <ion-col [size]=\"6\" class=\"ion-text-center\" tappable (click)=\"uploadImage('gallery')\">\n        <img style=\"width:70px;\" src=\"../../assets/icon/gallery.png\">\n        <p>Gallery</p>\n      </ion-col>\n    </ion-row>\n    <br>\n  </div>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/loginModule/contact-hr/contact-hr-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/loginModule/contact-hr/contact-hr-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ContactHrPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactHrPageRoutingModule", function() { return ContactHrPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _contact_hr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-hr.page */ "./src/app/loginModule/contact-hr/contact-hr.page.ts");




const routes = [
    {
        path: '',
        component: _contact_hr_page__WEBPACK_IMPORTED_MODULE_3__["ContactHrPage"]
    }
];
let ContactHrPageRoutingModule = class ContactHrPageRoutingModule {
};
ContactHrPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactHrPageRoutingModule);



/***/ }),

/***/ "./src/app/loginModule/contact-hr/contact-hr.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/loginModule/contact-hr/contact-hr.module.ts ***!
  \*************************************************************/
/*! exports provided: ContactHrPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactHrPageModule", function() { return ContactHrPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _contact_hr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-hr-routing.module */ "./src/app/loginModule/contact-hr/contact-hr-routing.module.ts");
/* harmony import */ var _contact_hr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-hr.page */ "./src/app/loginModule/contact-hr/contact-hr.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let ContactHrPageModule = class ContactHrPageModule {
};
ContactHrPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contact_hr_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactHrPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_contact_hr_page__WEBPACK_IMPORTED_MODULE_6__["ContactHrPage"]]
    })
], ContactHrPageModule);



/***/ }),

/***/ "./src/app/loginModule/contact-hr/contact-hr.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/loginModule/contact-hr/contact-hr.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inputSectionDiv .inputAreaDiv, .inputSectionDiv .textAreaDiv {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  padding: 0 7px;\n  margin: 0px 0 5px 0;\n  border-radius: 50px;\n}\n.inputSectionDiv .inputAreaDiv ion-input, .inputSectionDiv .inputAreaDiv ion-textarea, .inputSectionDiv .inputAreaDiv ion-datetime, .inputSectionDiv .textAreaDiv ion-input, .inputSectionDiv .textAreaDiv ion-textarea, .inputSectionDiv .textAreaDiv ion-datetime {\n  --padding-top:10px;\n  --padding-end:0;\n  --padding-bottom:10px;\n  --padding-start:0px;\n}\n.inputSectionDiv .inputAreaDiv ion-input, .inputSectionDiv .inputAreaDiv ion-datetime, .inputSectionDiv .textAreaDiv ion-input, .inputSectionDiv .textAreaDiv ion-datetime {\n  height: 40px;\n}\n.inputSectionDiv .inputAreaDiv ion-datetime, .inputSectionDiv .textAreaDiv ion-datetime {\n  padding: 10px;\n}\n.inputSectionDiv .inputAreaDiv ion-textarea, .inputSectionDiv .textAreaDiv ion-textarea {\n  --padding-top:0px;\n  --padding-end:0;\n  --padding-bottom:0px;\n  --padding-start:0px;\n}\n.inputSectionDiv .inputAreaDiv img, .inputSectionDiv .textAreaDiv img {\n  width: 20px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  height: 100%;\n}\n.inputSectionDiv .textAreaDiv {\n  border-radius: 10px;\n}\n.inputSectionDiv label {\n  font-weight: bold;\n  font-size: 16px;\n  margin: 0 0 5px 0;\n  display: inline-block;\n}\n.inputSectionDiv label .mendatText {\n  color: red;\n}\n.previewSectionDiv {\n  padding: 10px 0px;\n}\n.previewSectionDiv .previewImgDiv {\n  position: relative;\n  height: 150px;\n  width: 100%;\n  border: 1px solid var(--headerColor);\n}\n.previewSectionDiv .previewImgDiv img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 10px;\n  padding: 10px;\n}\n.previewSectionDiv .previewImgDiv ion-icon {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  font-size: 20px;\n  border: 2px solid gainsboro;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  color: gray;\n}\n.previewSectionDiv .previewImgDiv .blurOn {\n  filter: blur(8px);\n}\n.previewSectionDiv .previewImgDiv .blurOff {\n  filter: blur(0);\n}\n.footerContainer p {\n  color: #000;\n}\n.attachItemDiv span {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  padding: 5px 0px;\n  display: inline-block;\n}\n.attachItemDiv span ion-icon {\n  font-size: 20px;\n  float: left;\n  margin: 0 5px;\n}\n.attachItemDiv span small {\n  font-size: 15px;\n  float: left;\n  margin: 0px 5px 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW5Nb2R1bGUvY29udGFjdC1oci9jb250YWN0LWhyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUE0QiwyQkFBQTtFQUEyQixrQkFBQTtFQUFrQixjQUFBO0VBQWMsbUJBQUE7RUFBbUIsbUJBQUE7QUFLNUc7QUFKSTtFQUFzQyxrQkFBQTtFQUFtQixlQUFBO0VBQWdCLHFCQUFBO0VBQXNCLG1CQUFBO0FBVW5HO0FBVEk7RUFBd0IsWUFBQTtBQVk1QjtBQVhJO0VBQWEsYUFBQTtBQWNqQjtBQWJJO0VBQWEsaUJBQUE7RUFBa0IsZUFBQTtFQUFnQixvQkFBQTtFQUFxQixtQkFBQTtBQW1CeEU7QUFsQkk7RUFBSSxXQUFBO0VBQVcsc0JBQUE7S0FBQSxtQkFBQTtFQUFtQixZQUFBO0FBdUJ0QztBQXJCRTtFQUFhLG1CQUFBO0FBd0JmO0FBdkJFO0VBQU0saUJBQUE7RUFBaUIsZUFBQTtFQUFlLGlCQUFBO0VBQWlCLHFCQUFBO0FBNkJ6RDtBQTVCSTtFQUFZLFVBQUE7QUErQmhCO0FBMUJBO0VBQW1CLGlCQUFBO0FBOEJuQjtBQTdCRTtFQUFlLGtCQUFBO0VBQWtCLGFBQUE7RUFBYSxXQUFBO0VBQVcsb0NBQUE7QUFtQzNEO0FBbENJO0VBQUksV0FBQTtFQUFXLFlBQUE7RUFBWSxzQkFBQTtLQUFBLG1CQUFBO0VBQW1CLG1CQUFBO0VBQW1CLGFBQUE7QUF5Q3JFO0FBeENJO0VBQVUsa0JBQUE7RUFBa0IsVUFBQTtFQUFVLFlBQUE7RUFBWSxlQUFBO0VBQWUsMkJBQUE7RUFDL0Qsa0JBQUE7RUFBa0IsV0FBQTtFQUFXLFlBQUE7RUFBWSxnQkFBQTtFQUFnQixXQUFBO0FBbUQvRDtBQWpESTtFQUFRLGlCQUFBO0FBb0RaO0FBbkRJO0VBQVMsZUFBQTtBQXNEYjtBQWpERTtFQUFFLFdBQUE7QUFxREo7QUFsREU7RUFBSywyQkFBQTtFQUEyQixrQkFBQTtFQUFrQixnQkFBQTtFQUFnQixxQkFBQTtBQXlEcEU7QUF4REk7RUFBUyxlQUFBO0VBQWUsV0FBQTtFQUFXLGFBQUE7QUE2RHZDO0FBNURJO0VBQU0sZUFBQTtFQUFlLFdBQUE7RUFBVyxzQkFBQTtBQWlFcEMiLCJmaWxlIjoic3JjL2FwcC9sb2dpbk1vZHVsZS9jb250YWN0LWhyL2NvbnRhY3QtaHIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0U2VjdGlvbkRpdntcbiAgLmlucHV0QXJlYURpdiwgLnRleHRBcmVhRGl2e2JvcmRlcjoxcHggc29saWQgbGlnaHRncmF5O2JvcmRlci1yYWRpdXM6NXB4O3BhZGRpbmc6MCA3cHg7bWFyZ2luOjBweCAwIDVweCAwO2JvcmRlci1yYWRpdXM6NTBweDtcbiAgICBpb24taW5wdXQsIGlvbi10ZXh0YXJlYSwgaW9uLWRhdGV0aW1ley0tcGFkZGluZy10b3A6MTBweDstLXBhZGRpbmctZW5kOjA7LS1wYWRkaW5nLWJvdHRvbToxMHB4Oy0tcGFkZGluZy1zdGFydDowcHg7fVxuICAgIGlvbi1pbnB1dCwgaW9uLWRhdGV0aW1le2hlaWdodDo0MHB4O31cbiAgICBpb24tZGF0ZXRpbWV7cGFkZGluZzoxMHB4O31cbiAgICBpb24tdGV4dGFyZWF7LS1wYWRkaW5nLXRvcDowcHg7LS1wYWRkaW5nLWVuZDowOy0tcGFkZGluZy1ib3R0b206MHB4Oy0tcGFkZGluZy1zdGFydDowcHg7fVxuICAgIGltZ3t3aWR0aDoyMHB4O29iamVjdC1maXQ6Y29udGFpbjtoZWlnaHQ6MTAwJTt9XG4gIH1cbiAgLnRleHRBcmVhRGl2e2JvcmRlci1yYWRpdXM6MTBweDt9XG4gIGxhYmVse2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjE2cHg7bWFyZ2luOjAgMCA1cHggMDtkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAubWVuZGF0VGV4dHtjb2xvcjpyZWQ7fVxuICB9XG59XG5cblxuLnByZXZpZXdTZWN0aW9uRGl2e3BhZGRpbmc6MTBweCAwcHg7XG4gIC5wcmV2aWV3SW1nRGl2e3Bvc2l0aW9uOnJlbGF0aXZlO2hlaWdodDoxNTBweDt3aWR0aDoxMDAlO2JvcmRlcjoxcHggc29saWQgdmFyKC0taGVhZGVyQ29sb3IpO1xuICAgIGltZ3t3aWR0aDoxMDAlO2hlaWdodDoxMDAlO29iamVjdC1maXQ6Y29udGFpbjtib3JkZXItcmFkaXVzOjEwcHg7cGFkZGluZzoxMHB4O31cbiAgICBpb24taWNvbiB7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0xMHB4O3JpZ2h0Oi0xMHB4O2ZvbnQtc2l6ZToyMHB4O2JvcmRlcjoycHggc29saWQgZ2FpbnNib3JvO1xuICAgICAgYm9yZGVyLXJhZGl1czo1MCU7d2lkdGg6MjBweDtoZWlnaHQ6MjBweDtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6Z3JheTtcbiAgICB9XG4gICAgLmJsdXJPbntmaWx0ZXI6Ymx1cig4cHgpO31cbiAgICAuYmx1ck9mZntmaWx0ZXI6Ymx1cigwKTt9XG4gIH1cbn1cblxuLmZvb3RlckNvbnRhaW5lcntcbiAgcHtjb2xvcjojMDAwO31cbn1cbi5hdHRhY2hJdGVtRGl2e1xuICBzcGFue2JvcmRlcjoxcHggc29saWQgbGlnaHRncmF5O2JvcmRlci1yYWRpdXM6NXB4O3BhZGRpbmc6NXB4IDBweDtkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBpb24taWNvbntmb250LXNpemU6MjBweDtmbG9hdDpsZWZ0O21hcmdpbjowIDVweDt9XG4gICAgc21hbGx7Zm9udC1zaXplOjE1cHg7ZmxvYXQ6bGVmdDttYXJnaW46MHB4IDVweCAwIDEwcHg7O31cbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/loginModule/contact-hr/contact-hr.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/loginModule/contact-hr/contact-hr.page.ts ***!
  \***********************************************************/
/*! exports provided: ContactHrPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactHrPage", function() { return ContactHrPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/assets/constant */ "./src/assets/constant.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_imageCapture_uploading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/imageCapture/uploading.service */ "./src/app/imageCapture/uploading.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");









let ContactHrPage = class ContactHrPage {
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
        this.showErrorImage = "";
        this.no_data_message = "";
        this.MobileIsOk = true;
        this.mobileErr = "";
        this.emailIsOk = true;
        this.errorEmail = "";
        this.currentDate = new Date().toISOString();
        console.log("current Date==", this.currentDate);
    }
    ngOnInit() {
        this.storageService.getStorage().then(res => {
            this.designApiFun();
            console.log("ionic lifecycle called getStorage==>", res);
        });
    }
    viewImageFunc(image) {
        this.zone.run(() => {
            this.photoViewer.show(image);
            // this.photoViewer.show(this.image, "Benepik One", {headers: "{username:foo,password:bar}"});
        });
    }
    designApiFun() {
        this.zone.run(() => {
            console.log("connect to HR call function");
            let apikey = {};
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].connectToHr, apikey).subscribe((result) => {
                console.log("connect to HR api response ==", result);
                this.pageHeader = result.data.settings.page_header;
                if (result.status == 1) {
                    this.allData = result.data.contact_data;
                    this.attachmentData = result.data.attachment;
                }
                else {
                    this.no_data_message = result.data.settings.no_data_msg;
                    this.showErrorImage = result.data.settings.no_data_image;
                    // this.apiservices.showToastMessage(result.message,'top',3000,'redBg');
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
    removeSelectedImg(index) {
        this.zone.run(() => {
            console.log("remove image index==", index);
            console.log("remove serverImg==", this.mediaArr);
            this.staticPreviewImage = "";
        });
    }
    changeCountryCode(mobileNumber) {
        this.zone.run(() => {
            console.log("code of country and mobile no==", mobileNumber);
            var regexEmail = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/; //first no.should not be 0
            if (mobileNumber.trim() != '') {
                if (!regexEmail.test(mobileNumber)) {
                    this.MobileIsOk = true;
                    this.mobileErr = '';
                }
                else {
                    this.MobileIsOk = false;
                    this.mobileErr = "<sup>*</sup>You can't add any special symbol in country code (eg:- +, -. * etc)";
                }
            }
            else {
                this.MobileIsOk = true;
                this.mobileErr = "";
            }
        });
    }
    validateEmail(email) {
        this.zone.run(() => {
            if (email.trim() != "") {
                console.log("validate emial on profile page==", email);
                var regexEmail = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
                if (regexEmail.test(email)) {
                    this.emailIsOk = true;
                    this.errorEmail = '';
                }
                else {
                    this.emailIsOk = false;
                    this.errorEmail = "<sup>*</sup>Invalid email format.";
                }
            }
            else {
                this.emailIsOk = true;
                this.errorEmail = "";
            }
        });
    }
    submitFinalArray() {
        this.zone.run(() => {
            console.log("contact you hr all data==", this.allData);
            for (let j = 0; j < this.allData.length; j++) {
                if (this.allData[j].required == true && this.allData[j].save_value.trim() == "") {
                    this.apiservices.showToastMessage(this.allData[j].required_text, 'top', 3000, 'redBg');
                    return;
                }
                if (this.allData[j].type == "name") {
                    var name = this.allData[j].save_value;
                }
                else if (this.allData[j].type == "emp_code") {
                    var empCode = this.allData[j].save_value;
                }
                else if (this.allData[j].type == "email_address") {
                    var emailAddress = this.allData[j].save_value;
                }
                else if (this.allData[j].type == "contact_number") {
                    this.contactNumber = this.allData[j].save_value;
                }
                else if (this.allData[j].type == "dob") {
                    var dateOfBirth = this.allData[j].save_value;
                }
                else if (this.allData[j].type == "doj") {
                    var dateOfJoining = this.allData[j].save_value;
                }
                else if (this.allData[j].type == "comment") {
                    var commentText = this.allData[j].save_value;
                }
            }
            console.log("home page api call function");
            let apikey = {
                "name": name,
                "employee_code": empCode,
                "email_address": emailAddress,
                "contact_number": this.contactNumber,
                "dob": dateOfBirth,
                "doj": dateOfJoining,
                "comment": commentText,
                "attachment": this.sendImageToApi
            };
            //following key will be used in apiservice for keeping original comment obj
            let copy_apiKey = {
                "name": name,
                "employee_code": empCode,
                "email_address": emailAddress,
                "contact_number": this.contactNumber,
                "dob": dateOfBirth,
                "doj": dateOfJoining,
                "comment": commentText,
                "attachment": this.sendImageToApi
            };
            // this.apiservices.apiCallWithLoginToken(URLS.connectToHrSubmit, apikey).subscribe((result)=>{
            this.apiservices.apiCallWithLoginTokenComment(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].connectToHrSubmit, apikey, copy_apiKey).subscribe((result) => {
                console.log("api response of home page api==", result);
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
ContactHrPage.ctorParameters = () => [
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: src_app_imageCapture_uploading_service__WEBPACK_IMPORTED_MODULE_6__["UploadingService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__["PhotoViewer"] }
];
ContactHrPage.propDecorators = {
    datePicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['datePicker',] }]
};
ContactHrPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-hr',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contact-hr.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loginModule/contact-hr/contact-hr.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contact-hr.page.scss */ "./src/app/loginModule/contact-hr/contact-hr.page.scss")).default]
    })
], ContactHrPage);



/***/ })

}]);
//# sourceMappingURL=loginModule-contact-hr-contact-hr-module-es2015.js.map