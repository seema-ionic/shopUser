(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["communicationModule-community-list-community-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/communicationModule/community-list/community-list.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/communicationModule/community-list/community-list.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{pageHeader}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n    <!-- <ion-buttons slot=\"end\" tappable (click)=\"presentPopover($event)\">\n      <img style=\"padding:0px 15px;\" src=\"../../assets/icon/threeDots.png\">\n    </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"--background:gainsboro;\">\n  <div *ngIf=\"communicationList\">\n    <div *ngFor=\"let postListData of communicationList; let i = index;\" style=\"margin:10px 0;background:#fff;padding:10px;\">\n      <div >\n        <ion-row>\n          <ion-col [size]=\"2\" class=\"ion-no-padding autoMargin\">\n            <app-image-view [img]=\"postListData?.profile_image\" [imageView]=\"true\" class=\"leftCircleImgGray\" ></app-image-view>\n          </ion-col>\n          <ion-col [size]=\"10\" tappable (click)=\"gotoDetail(postListData, false)\" class=\"autoMargin ion-no-padding\">\n            <p class=\"noMargin titleText\" style=\"font-size:4.5vw;\">{{postListData?.createdBy}}</p>\n            <p class=\"dateText\">{{postListData?.createdDate}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col [size]=\"12\" tappable (click)=\"gotoDetail(postListData, false)\">\n            <app-text-layout *ngIf=\"postListData?.title!=''\" [text]=\"postListData?.title\" class=\"smallText\" [className]=\"\"></app-text-layout>\n            <app-text-layout-read-more *ngIf=\"postListData?.description!=''\" [text]=\"postListData?.description\" [className]=\"\"></app-text-layout-read-more>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"postListData?.media?.length>0\">\n          <ion-col [size]=\"12\">\n            <div *ngFor=\"let mediaData of postListData?.media; let ind = index\" [ngClass]=\"{'oneShow': postListData?.media?.length==1, 'twoShow': postListData?.media?.length==2,'threeShow': postListData?.media?.length>=3}\">\n\n              <div *ngIf=\"ind<3 && mediaData?.media_type==1\" class=\"imgDiv\"  tappable (click)=\"videoZoome(postListData?.media,'image',ind)\">\n                <app-image-view *ngIf=\"mediaData?.media_type==1\" [img]=\"mediaData?.media_path\" [imageView]=\"false\" class=\"fullHeightDiv\" ></app-image-view>\n                <div class=\"viewMoreDiv\" *ngIf=\"postListData?.media?.length>3 && ind==2\"><p>+{{postListData?.media?.length-3}}</p></div>\n              </div>\n\n\n              <div *ngIf=\"ind<3 && mediaData?.media_type==2\" class=\"imgDiv videoDiv\">\n                <video width=\"100%\" height=\"100%\" style=\"object-fit:cover;\" controls=\"controls\" controlsList=\"nodownload noremote foobar\"\n                  poster=\"{{mediaData?.alt_image}}\" [src]=\"mediaData?.media_path|safe\" type=\"video/mp4\" ></video>\n                <div class=\"viewMoreDiv\" *ngIf=\"postListData?.media?.length>3 && ind==2\"><p>+{{postListData?.media?.length-3}}</p></div>\n                <div *ngIf=\"postListData?.media?.length<4 && ind<=2\" class=\"playIcon\" tappable (click)=\"videoZoome(mediaData?.media_path,'video',ind)\"><img [src]=\"videoIcon\"></div>\n                <!-- <div *ngIf=\"postListData?.media?.length<4 && ind<=2\" class=\"zoomIcon\" tappable (click)=\"videoZoome(mediaData?.media_path)\"></div> -->\n              </div>\n\n\n              <!-- youTubeDiv -->\n              <div *ngIf=\"ind<3 && mediaData?.media_type==3\" class=\"imgDiv\">\n                <iframe [src]=\"mediaData?.media_path|safe\" width=\"100%\" height=\"100%\" class=\"borderDiv\"></iframe>\n                <div class=\"viewMoreDiv\" *ngIf=\"postListData?.media?.length>3 && ind==2\"><p>+{{postListData?.media?.length-3}}</p></div>\n                <div *ngIf=\"postListData?.media?.length<4 && ind<=2\" class=\"playIcon\" tappable (click)=\"videoZoome(mediaData?.media_path,'youtube',ind)\"><img [src]=\"videoIcon\"></div>\n                <!-- <div *ngIf=\"postListData?.media?.length<4 && ind<=2\" class=\"playIcon\"><img [src]=\"youTubeIcon\"></div> -->\n              </div>\n\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n    \n      <ion-row>\n        <ion-col [size]=\"12\">\n          <div *ngIf=\"postListData\">\n            <show-comment [allCommentObj]=\"postListData\" [showLikeList]=\"'false'\" [showCommentList]=\"'false'\" [showAutoScroll]=\"'true'\" [redirectPage]=\"'community-detail'\"></show-comment>\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n  </div>\n\n  \n  \n  <div *ngIf=\"!communicationList && showErrorImage==''\">\n    <app-skelton-listview [iconPath]=\"'communicationList'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n\n  <ion-row *ngIf=\"!communicationList && showErrorImage!=''\">\n    <ion-col class=\"ion-text-center\" [push]=\"1\" [size]=\"10\">\n      <br><br>\n      <img [src]=\"showErrorImage\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n      <h2 class=\"noDataFoundMessage\">{{no_data_message}}</h2>\n    </ion-col>\n  </ion-row>\n \n\n  <h2 style=\"text-align:center;font-size:12px;\" *ngIf=\"errorMessage!='' && showErrorImage!='' && communicationList\"> {{errorMessage}}</h2>\n  <ion-infinite-scroll *ngIf=\"errorMessage=='' && communicationList\" threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" \n    loadingText=\"Loading more data...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/communicationModule/community-list/community-list-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/communicationModule/community-list/community-list-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: CommunityListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityListPageRoutingModule", function() { return CommunityListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _community_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./community-list.page */ "./src/app/communicationModule/community-list/community-list.page.ts");




const routes = [
    {
        path: '',
        component: _community_list_page__WEBPACK_IMPORTED_MODULE_3__["CommunityListPage"]
    }
];
let CommunityListPageRoutingModule = class CommunityListPageRoutingModule {
};
CommunityListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CommunityListPageRoutingModule);



/***/ }),

/***/ "./src/app/communicationModule/community-list/community-list.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/communicationModule/community-list/community-list.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CommunityListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityListPageModule", function() { return CommunityListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _community_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./community-list-routing.module */ "./src/app/communicationModule/community-list/community-list-routing.module.ts");
/* harmony import */ var _community_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./community-list.page */ "./src/app/communicationModule/community-list/community-list.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









let CommunityListPageModule = class CommunityListPageModule {
};
CommunityListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _community_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["CommunityListPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"]
        ],
        declarations: [_community_list_page__WEBPACK_IMPORTED_MODULE_6__["CommunityListPage"]]
    })
], CommunityListPageModule);



/***/ }),

/***/ "./src/app/communicationModule/community-list/community-list.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/communicationModule/community-list/community-list.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titleText {\n  font-size: 16px;\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n\n.dateText, .postText {\n  font-size: 12px;\n  color: gray;\n  margin: 5px 0 0 0;\n}\n\n.borderDiv {\n  border-radius: 10px;\n  border: 1px solid #c1bbbb;\n}\n\n.topImgDiv {\n  position: absolute;\n  top: 5px;\n  right: 0;\n  left: 0;\n  width: 100%;\n  height: 45%;\n  overflow: hidden;\n  border-radius: 10px;\n  border: 1px solid #c1bbbb;\n}\n\n.bottomImgDiv {\n  position: absolute;\n  bottom: 10px;\n  right: 0;\n  left: 0;\n  width: 100%;\n  height: 45%;\n  overflow: hidden;\n  border-radius: 10px;\n  border: 1px solid #c1bbbb;\n}\n\n.overDiv {\n  position: absolute;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.67);\n  top: 1px;\n  bottom: 1px;\n  left: 1px;\n  right: 1px;\n  border-radius: 5px;\n  color: #fff;\n  text-align: center;\n}\n\n.overDiv .ViewDiv {\n  font-size: 22px;\n  font-weight: bold;\n  margin: 28px;\n}\n\n.smallText {\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  margin: 0 0 5px 0;\n}\n\n.textCompoDiv {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n\n.oneShow {\n  width: 100%;\n  height: 200px;\n}\n\n.oneShow .imgDiv, .oneShow .imgDiv img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.threeShow:nth-child(1), .twoShow, .fourShow:nth-child(1) {\n  width: 50%;\n  float: left;\n  height: 200px;\n}\n\n.threeShow:nth-child(1) .imgDiv, .threeShow:nth-child(1) .imgDiv img, .twoShow .imgDiv, .twoShow .imgDiv img, .fourShow:nth-child(1) .imgDiv, .fourShow:nth-child(1) .imgDiv img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.threeShow:nth-child(2), .threeShow:nth-child(3), .fourShow:nth-child(2), .fourShow:nth-child(3) {\n  width: 50%;\n  height: 100px;\n  float: right;\n  margin: 0;\n}\n\n.threeShow:nth-child(2) .imgDiv, .threeShow:nth-child(2) .imgDiv img, .threeShow:nth-child(2) .imgDiv img, .threeShow:nth-child(2) .imgDiv, .threeShow:nth-child(3) .imgDiv, .threeShow:nth-child(3) .imgDiv img, .threeShow:nth-child(3) .imgDiv img, .threeShow:nth-child(3) .imgDiv, .fourShow:nth-child(2) .imgDiv, .fourShow:nth-child(2) .imgDiv img, .fourShow:nth-child(2) .imgDiv img, .fourShow:nth-child(2) .imgDiv, .fourShow:nth-child(3) .imgDiv, .fourShow:nth-child(3) .imgDiv img, .fourShow:nth-child(3) .imgDiv img, .fourShow:nth-child(3) .imgDiv {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: relative;\n}\n\n.threeShow:nth-child(2) .imgDiv .viewMoreDiv, .threeShow:nth-child(2) .imgDiv img .viewMoreDiv, .threeShow:nth-child(2) .imgDiv img .viewMoreDiv, .threeShow:nth-child(2) .imgDiv .viewMoreDiv, .threeShow:nth-child(3) .imgDiv .viewMoreDiv, .threeShow:nth-child(3) .imgDiv img .viewMoreDiv, .threeShow:nth-child(3) .imgDiv img .viewMoreDiv, .threeShow:nth-child(3) .imgDiv .viewMoreDiv, .fourShow:nth-child(2) .imgDiv .viewMoreDiv, .fourShow:nth-child(2) .imgDiv img .viewMoreDiv, .fourShow:nth-child(2) .imgDiv img .viewMoreDiv, .fourShow:nth-child(2) .imgDiv .viewMoreDiv, .fourShow:nth-child(3) .imgDiv .viewMoreDiv, .fourShow:nth-child(3) .imgDiv img .viewMoreDiv, .fourShow:nth-child(3) .imgDiv img .viewMoreDiv, .fourShow:nth-child(3) .imgDiv .viewMoreDiv {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99;\n  text-align: center;\n  color: #fff;\n  background: rgba(0, 0, 0, 0.7);\n  padding: 10px 10px;\n  font-size: 15px;\n  font-weight: bold;\n}\n\n.threeShow:nth-child(2) .imgDiv .viewMoreDiv p, .threeShow:nth-child(2) .imgDiv img .viewMoreDiv p, .threeShow:nth-child(2) .imgDiv img .viewMoreDiv p, .threeShow:nth-child(2) .imgDiv .viewMoreDiv p, .threeShow:nth-child(3) .imgDiv .viewMoreDiv p, .threeShow:nth-child(3) .imgDiv img .viewMoreDiv p, .threeShow:nth-child(3) .imgDiv img .viewMoreDiv p, .threeShow:nth-child(3) .imgDiv .viewMoreDiv p, .fourShow:nth-child(2) .imgDiv .viewMoreDiv p, .fourShow:nth-child(2) .imgDiv img .viewMoreDiv p, .fourShow:nth-child(2) .imgDiv img .viewMoreDiv p, .fourShow:nth-child(2) .imgDiv .viewMoreDiv p, .fourShow:nth-child(3) .imgDiv .viewMoreDiv p, .fourShow:nth-child(3) .imgDiv img .viewMoreDiv p, .fourShow:nth-child(3) .imgDiv img .viewMoreDiv p, .fourShow:nth-child(3) .imgDiv .viewMoreDiv p {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.playIcon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99;\n}\n\n.playIcon img {\n  width: 35px !important;\n  height: 35px !important;\n  position: absolute !important;\n  top: 50%;\n  left: 0;\n  right: 0;\n  margin: auto;\n  transform: translate(0, -50%);\n  z-index: 99;\n}\n\n.fourShow:nth-child(4) {\n  display: none;\n}\n\n.twoShow:nth-child(2) {\n  float: right;\n}\n\n.smallDiv {\n  width: 100%;\n  height: 150px;\n  overflow: hidden;\n}\n\n.smallDiv img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.imgDiv {\n  overflow: hidden;\n  border-radius: 0px;\n}\n\n.videoDiv, .youTubeDiv {\n  position: relative;\n}\n\n.videoDiv::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.youTubeDiv::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbXVuaWNhdGlvbk1vZHVsZS9jb21tdW5pdHktbGlzdC9jb21tdW5pdHktbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFBVyxlQUFBO0VBQWUsaUJBQUE7RUFSeEIsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFJNkQ7QUFEL0Q7O0FBRUE7RUFBcUIsZUFBQTtFQUFlLFdBQUE7RUFBVyxpQkFBQTtBQUkvQzs7QUFIQTtFQUFXLG1CQUFBO0VBQW1CLHlCQUFBO0FBUTlCOztBQVBBO0VBQVcsa0JBQUE7RUFBa0IsUUFBQTtFQUFRLFFBQUE7RUFBUSxPQUFBO0VBQU8sV0FBQTtFQUFXLFdBQUE7RUFBVyxnQkFBQTtFQUFnQixtQkFBQTtFQUFtQix5QkFBQTtBQW1CN0c7O0FBbEJBO0VBQWMsa0JBQUE7RUFBa0IsWUFBQTtFQUFZLFFBQUE7RUFBUSxPQUFBO0VBQU8sV0FBQTtFQUFXLFdBQUE7RUFBVyxnQkFBQTtFQUFnQixtQkFBQTtFQUM3Rix5QkFBQTtBQTZCSjs7QUE1QkE7RUFBUyxrQkFBQTtFQUFrQixVQUFBO0VBQVUsK0JBQUE7RUFBK0IsUUFBQTtFQUFRLFdBQUE7RUFBVyxTQUFBO0VBQVMsVUFBQTtFQUM1RixrQkFBQTtFQUFrQixXQUFBO0VBQVcsa0JBQUE7QUF3Q2pDOztBQXZDSTtFQUFTLGVBQUE7RUFBZSxpQkFBQTtFQUFpQixZQUFBO0FBNEM3Qzs7QUExQ0E7RUFBVyxlQUFBO0VBQWUsaUJBQUE7RUFBaUIsaUJBQUE7RUFsQnpDLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBYzhFO0VBQUcsaUJBQUE7QUFzRG5GOztBQXJEQTtFQW5CRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQWVnQztBQTZEbEM7O0FBNURBO0VBQVMsV0FBQTtFQUFXLGFBQUE7QUFpRXBCOztBQWhFSTtFQUFxQixXQUFBO0VBQVcsWUFBQTtFQUFZLG9CQUFBO0tBQUEsaUJBQUE7QUFxRWhEOztBQW5FRTtFQUEwRCxVQUFBO0VBQVUsV0FBQTtFQUFXLGFBQUE7QUF5RWpGOztBQXhFSTtFQUFxQixXQUFBO0VBQVcsWUFBQTtFQUFZLG9CQUFBO0tBQUEsaUJBQUE7QUE2RWhEOztBQTNFRTtFQUFpRyxVQUFBO0VBQVUsYUFBQTtFQUFhLFlBQUE7RUFBWSxTQUFBO0FBa0Z0STs7QUFqRkk7RUFBMkMsV0FBQTtFQUFXLFlBQUE7RUFBWSxvQkFBQTtLQUFBLGlCQUFBO0VBQWlCLGtCQUFBO0FBdUZ2Rjs7QUF0Rk07RUFBYSxrQkFBQTtFQUFrQixNQUFBO0VBQU0sT0FBQTtFQUFPLFFBQUE7RUFBUSxTQUFBO0VBQVMsV0FBQTtFQUFXLGtCQUFBO0VBQWtCLFdBQUE7RUFBVyw4QkFBQTtFQUNuRyxrQkFBQTtFQUFrQixlQUFBO0VBQWUsaUJBQUE7QUFtR3pDOztBQWxHUTtFQUFFLGtCQUFBO0VBQWtCLE9BQUE7RUFBTyxNQUFBO0VBQU0sUUFBQTtFQUFRLFNBQUE7RUFBUyxZQUFBO0VBQVksMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FBMkd0RTs7QUF2R0U7RUFBVSxrQkFBQTtFQUFrQixNQUFBO0VBQU0sT0FBQTtFQUFPLFFBQUE7RUFBUSxTQUFBO0VBQVMsV0FBQTtBQWdINUQ7O0FBL0dJO0VBQUksc0JBQUE7RUFBc0IsdUJBQUE7RUFBdUIsNkJBQUE7RUFBNkIsUUFBQTtFQUFRLE9BQUE7RUFBTyxRQUFBO0VBQVEsWUFBQTtFQUFZLDZCQUFBO0VBQTZCLFdBQUE7QUEwSGxKOztBQXhIRTtFQUF1QixhQUFBO0FBNEh6Qjs7QUEzSEU7RUFBc0IsWUFBQTtBQStIeEI7O0FBOUhFO0VBQVUsV0FBQTtFQUFXLGFBQUE7RUFBYSxnQkFBQTtBQW9JcEM7O0FBbklJO0VBQUksV0FBQTtFQUFXLFlBQUE7RUFBWSxvQkFBQTtLQUFBLGlCQUFBO0FBd0kvQjs7QUF0SUU7RUFBUSxnQkFBQTtFQUFnQixrQkFBQTtBQTJJMUI7O0FBMUlFO0VBQXVCLGtCQUFBO0FBOEl6Qjs7QUE3SUU7RUFBaUIsV0FBQTtFQUFXLGtCQUFBO0VBQWtCLE1BQUE7RUFBTSxPQUFBO0VBQU8sUUFBQTtFQUFRLFNBQUE7QUFzSnJFOztBQXJKRTtFQUFtQixXQUFBO0VBQVcsa0JBQUE7RUFBa0IsTUFBQTtFQUFNLE9BQUE7RUFBTyxRQUFBO0VBQVEsU0FBQTtFQUFTLDhCQUFBO0FBK0poRiIsImZpbGUiOiJzcmMvYXBwL2NvbW11bmljYXRpb25Nb2R1bGUvY29tbXVuaXR5LWxpc3QvY29tbXVuaXR5LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGxpbmUtY2xhbXAoJGxpbmVzKXtcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xuICBkaXNwbGF5Oi13ZWJraXQtYm94O1xuICAtd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7XG4gIC13ZWJraXQtbGluZS1jbGFtcDokbGluZXM7XG59XG5cblxuLnRpdGxlVGV4dHtmb250LXNpemU6MTZweDtmb250LXdlaWdodDpib2xkO0BpbmNsdWRlIGxpbmUtY2xhbXAoMik7fVxuLmRhdGVUZXh0LCAucG9zdFRleHR7Zm9udC1zaXplOjEycHg7Y29sb3I6Z3JheTttYXJnaW46NXB4IDAgMCAwO31cbi5ib3JkZXJEaXZ7Ym9yZGVyLXJhZGl1czoxMHB4O2JvcmRlcjoxcHggc29saWQgI2MxYmJiYjt9XG4udG9wSW1nRGl2e3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1cHg7cmlnaHQ6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6NDUlO292ZXJmbG93OmhpZGRlbjtib3JkZXItcmFkaXVzOjEwcHg7Ym9yZGVyOjFweCBzb2xpZCAjYzFiYmJiO31cbi5ib3R0b21JbWdEaXZ7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjEwcHg7cmlnaHQ6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6NDUlO292ZXJmbG93OmhpZGRlbjtib3JkZXItcmFkaXVzOjEwcHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjYzFiYmJiO31cbi5vdmVyRGl2e3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTtiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC42Nyk7dG9wOjFweDtib3R0b206MXB4O2xlZnQ6MXB4O3JpZ2h0OjFweDtcbiAgICBib3JkZXItcmFkaXVzOjVweDtjb2xvcjojZmZmO3RleHQtYWxpZ246Y2VudGVyO1xuICAgIC5WaWV3RGl2e2ZvbnQtc2l6ZToyMnB4O2ZvbnQtd2VpZ2h0OmJvbGQ7bWFyZ2luOjI4cHg7fVxufVxuLnNtYWxsVGV4dHtmb250LXNpemU6MTZweDtmb250LXdlaWdodDpib2xkO2xpbmUtaGVpZ2h0OjE4cHg7QGluY2x1ZGUgbGluZS1jbGFtcCgyKTttYXJnaW46MCAwIDVweCAwO31cbi50ZXh0Q29tcG9EaXZ7QGluY2x1ZGUgbGluZS1jbGFtcCgzKTt9XG4ub25lU2hvd3t3aWR0aDoxMDAlO2hlaWdodDoyMDBweDtcbiAgICAuaW1nRGl2LCAuaW1nRGl2IGltZ3t3aWR0aDoxMDAlO2hlaWdodDoxMDAlO29iamVjdC1maXQ6Y292ZXI7fVxuICB9XG4gIC50aHJlZVNob3c6bnRoLWNoaWxkKDEpLCAudHdvU2hvdywgLmZvdXJTaG93Om50aC1jaGlsZCgxKXt3aWR0aDo1MCU7ZmxvYXQ6bGVmdDtoZWlnaHQ6MjAwcHg7XG4gICAgLmltZ0RpdiwgLmltZ0RpdiBpbWd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvYmplY3QtZml0OmNvdmVyO31cbiAgfVxuICAudGhyZWVTaG93Om50aC1jaGlsZCgyKSwgLnRocmVlU2hvdzpudGgtY2hpbGQoMyksIC5mb3VyU2hvdzpudGgtY2hpbGQoMiksIC5mb3VyU2hvdzpudGgtY2hpbGQoMyl7d2lkdGg6NTAlO2hlaWdodDoxMDBweDtmbG9hdDpyaWdodDttYXJnaW46MDtcbiAgICAuaW1nRGl2LCAuaW1nRGl2IGltZywgLmltZ0RpdiBpbWcsIC5pbWdEaXZ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvYmplY3QtZml0OmNvdmVyO3Bvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgLnZpZXdNb3JlRGl2e3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO3otaW5kZXg6OTk7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgcGFkZGluZzoxMHB4IDEwcHg7Zm9udC1zaXplOjE1cHg7Zm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgcHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7cmlnaHQ6MDtib3R0b206MDttYXJnaW46YXV0bztoZWlnaHQ6Zml0LWNvbnRlbnQ7fVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAucGxheUljb257cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7ei1pbmRleDo5OTtcbiAgICBpbWd7d2lkdGg6MzVweCAhaW1wb3J0YW50O2hlaWdodDozNXB4ICFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGUgIWltcG9ydGFudDt0b3A6NTAlO2xlZnQ6MDtyaWdodDowO21hcmdpbjphdXRvO3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgLTUwJSk7ei1pbmRleDo5OTt9XG4gIH1cbiAgLmZvdXJTaG93Om50aC1jaGlsZCg0KXtkaXNwbGF5Om5vbmU7fVxuICAudHdvU2hvdzpudGgtY2hpbGQoMil7ZmxvYXQ6cmlnaHQ7fVxuICAuc21hbGxEaXZ7d2lkdGg6MTAwJTtoZWlnaHQ6MTUwcHg7b3ZlcmZsb3c6aGlkZGVuO1xuICAgIGltZ3t3aWR0aDoxMDAlO2hlaWdodDoxMDAlO29iamVjdC1maXQ6Y292ZXI7fVxuICB9XG4gIC5pbWdEaXZ7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlci1yYWRpdXM6MHB4O31cbiAgLnZpZGVvRGl2LCAueW91VHViZURpdntwb3NpdGlvbjpyZWxhdGl2ZTt9XG4gIC52aWRlb0Rpdjo6YWZ0ZXJ7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO31cbiAgLnlvdVR1YmVEaXY6OmFmdGVye2NvbnRlbnQ6XCJcIjtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDtiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC41KTt9XG4iXX0= */");

/***/ }),

/***/ "./src/app/communicationModule/community-list/community-list.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/communicationModule/community-list/community-list.page.ts ***!
  \***************************************************************************/
/*! exports provided: CommunityListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityListPage", function() { return CommunityListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/assets/constant */ "./src/assets/constant.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data-transfer.service */ "./src/app/services/data-transfer.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var src_app_components_poover_component_poover_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/poover-component/poover-component.component */ "./src/app/components/poover-component/poover-component.component.ts");









let CommunityListPage = class CommunityListPage {
    constructor(apiservices, router, zone, menuCtrl, sendData, storageService, popoverController) {
        this.apiservices = apiservices;
        this.router = router;
        this.zone = zone;
        this.menuCtrl = menuCtrl;
        this.sendData = sendData;
        this.storageService = storageService;
        this.popoverController = popoverController;
        this.value = "0";
        this.errorMessage = "";
        this.myinfiniteScrollCall = false;
        this.showErrorImage = "";
        this.no_data_message = "";
    }
    videoZoome(videoPath, videoType, index) {
        this.zone.run(() => {
            this.apiservices.videoZoome(videoPath, videoType, index);
        });
    }
    ngOnInit() {
        this.storageService.getStorage().then(res => {
            this.communityList();
            console.log("ionic lifecycle called getStorage==>", res);
        });
    }
    presentPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: src_app_components_poover_component_poover_component_component__WEBPACK_IMPORTED_MODULE_8__["PooverComponentComponent"],
                // cssClass: 'popoverClass',
                cssClass: 'popoverClass',
                event: ev,
                translucent: true
            });
            return yield popover.present();
        });
    }
    gotoDetail(data, scrollValue) {
        this.zone.run(() => {
            this.sendData.myParam = data;
            this.sendData.autoScroll = scrollValue;
            this.router.navigate(['/community-detail']);
        });
    }
    communityList() {
        this.zone.run(() => {
            console.log("noticeBoard List api call function");
            let apikey = {
                module_id: '',
                limit: this.value,
            };
            this.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].communityListApiUrl, apikey).subscribe((result) => {
                console.log("noticeBoard List api result==", result);
                this.pageHeader = result.data.settings.page_header;
                if (result.status == 1 || result.status == '1') {
                    this.videoIcon = result.data.settings.video_icon;
                    this.youTubeIcon = result.data.settings.youtube_icon;
                    this.communicationData = result.data;
                    if (this.communicationList == undefined) {
                        this.communicationList = this.communicationData.post_list;
                        console.log("noticeBoard List Infinite Scroll if1==", this.communicationList);
                    }
                    else {
                        this.communicationList = this.communicationList.concat(this.communicationData.post_list);
                        console.log("noticeBoard List Infinite Scroll else1==", this.communicationList);
                    }
                    if (this.myinfiniteScrollCall == true) {
                        console.log("noticeBoard List Infinite Scroll if2==", this.communicationList);
                        this.myInfiniteScroll.target.complete();
                        this.errorMessage = "";
                        this.myinfiniteScrollCall = false;
                    }
                    console.log("thoughtOftheDayApi List data1==", this.communicationList);
                    console.log("thoughtOftheDayApi List data2==", this.errorMessage);
                }
                else {
                    this.errorMessage = result.message;
                    this.no_data_message = result.data.settings.no_data_msg;
                    this.showErrorImage = result.data.settings.no_data_image;
                    console.log("noticeBoard List Infinite Scroll12==", this.communicationList);
                    if (this.myinfiniteScrollCall == true) {
                        console.log("noticeBoard List Infinite Scroll123==", this.communicationList);
                        this.myInfiniteScroll.target.complete();
                        this.myinfiniteScrollCall = false;
                    }
                }
            }, err => {
                this.apiservices.showToastMessage(err, 'top', 3000, 'redBg');
            });
        });
    }
    doInfinite(infiniteScroll) {
        this.myinfiniteScrollCall = true;
        console.log("Begin async operation 1==");
        setTimeout(() => {
            this.value = this.communicationList.length;
            console.log("Begin async operation 2==", this.value);
            this.myInfiniteScroll = infiniteScroll;
            this.communityList();
        }, 500);
    }
};
CommunityListPage.ctorParameters = () => [
    { type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__["DataTransferService"] },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] }
];
CommunityListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-community-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./community-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/communicationModule/community-list/community-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./community-list.page.scss */ "./src/app/communicationModule/community-list/community-list.page.scss")).default]
    })
], CommunityListPage);



/***/ })

}]);
//# sourceMappingURL=communicationModule-community-list-community-list-module-es2015.js.map