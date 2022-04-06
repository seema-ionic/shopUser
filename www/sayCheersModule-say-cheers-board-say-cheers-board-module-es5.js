(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sayCheersModule-say-cheers-board-say-cheers-board-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sayCheersModule/say-cheers-board/say-cheers-board.page.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sayCheersModule/say-cheers-board/say-cheers-board.page.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSayCheersModuleSayCheersBoardSayCheersBoardPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{pageTitle}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"commonPagePadding\" *ngIf=\"sayCheersBoard\">\n\n    <div class=\"cheersPageBoard\">\n      <ion-row>\n        <ion-col [size]=\"5\" class=\"autoMargin\"><p class=\"noMargin lastDayText\">{{sayCheersBoard?.daystext}}</p></ion-col>\n        <ion-col [size]=\"7\" class=\"ion-text-right\">\n          <div class=\"cheersButton\" *ngIf=\"sayCheersBoard?.buttoninfo?.isbuttonapplicable=='1' || sayCheersBoard?.buttoninfo?.isbuttonapplicable==1\">\n            <ion-button class=\"dynamicButtonColor\" tappable (click)=\"goToNext()\">\n              {{sayCheersBoard?.buttoninfo?.btntext}} <img class=\"iconDiv\" [src]=\"sayCheersBoard?.buttoninfo?.btnicon\">\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <br>\n\n      <ion-row>\n        <ion-col [size]=\"6\">\n          <div class=\"countDivText\" >\n            <div class=\"transformDiv\" tappable (click)=\"goToBadgeList(countData?.total_sent,'sent')\">\n              <p class=\"noMargin numberText\">{{countData?.total_sent}}</p>\n              <p class=\"noMargin badgeText\">{{sayCheersBoard?.send_button}}</p>\n            </div>\n          </div>\n        </ion-col>\n        <ion-col [size]=\"6\">\n          <div class=\"countDivText\" >\n            <div class=\"transformDiv\" tappable (click)=\"goToBadgeList(countData?.total_received,'receive')\">\n              <p class=\"noMargin numberText\">{{countData?.total_received}}</p>\n              <p class=\"noMargin badgeText\">{{sayCheersBoard?.receive_button}}</p>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </div>\n\n    <div class=\"segmentSectionDiv\">\n      <br>\n      <ion-row>\n        <ion-col [size]=\"12\">\n          <ion-segment  [(ngModel)]=\"segmentModel\"  (ionChange)=\"segmentChanged($event,sayCheersBoard)\" value=\"cheer\">\n            <ion-segment-button *ngIf=\"sayCheersBoard?.cheerboard?.btnapplicable==1\" value=\"cheer\" >\n              <ion-label>{{sayCheersBoard?.cheerboard?.btntext}}</ion-label>\n            </ion-segment-button>\n            <ion-segment-button *ngIf=\"sayCheersBoard?.leaderboard?.btnapplicable==1\" value=\"leader\">\n              <ion-label>{{sayCheersBoard?.leaderboard?.btntext}}</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n        </ion-col>\n      </ion-row>\n\n\n      <br>\n      <ion-row>\n        <ion-col [size]=\"12\">\n          <!-- cheerBoard Div Start -->\n          <!-- cheerBoard Div Start -->\n          <div *ngIf=\"segmentSectionDiv === 'cheer'\">\n            <div class=\"customCard arrowDiv\" *ngFor=\"let cheerData of cheerBoard; let i=index\">\n              <div class=\"arrowImage\"><img [src]=\"Settings?.arrow_icon\" onerror=\"this.src='../../../assets/watermark/watermark.png'\"></div>\n              <!-- [style.background]=\"'url('+path+')'\" -->\n              <ion-row style=\"position:relative;\" tappable (click)=\"goToMessage(i)\">\n                <ion-col [size]=\"4\" class=\"autoMargin ion-text-center\">\n                  <div class=\"cheerUserImg\">\n                    <div class=\"userImgIcon\">\n                      <app-image-view [img]=\"cheerData?.sender_profile\" [imageView]=\"false\" class=\"circleCoverIcon\" ></app-image-view>\n                    </div>\n                    <p class=\"noMargin nameText\">{{cheerData?.sender_name}}</p>\n                    <p class=\"noMargin positionText\">{{cheerData?.sender_designation}}</p>\n                  </div>\n                </ion-col>\n                <ion-col [size]=\"4\" class=\"ion-text-center\">\n                  <div class=\"cardSendImgDiv\">\n                    <app-image-view [img]=\"cheerData?.card_image\" [imageView]=\"false\" class=\"radiusFullImage\" ></app-image-view>\n                  </div>\n                </ion-col>\n                <!-- style=\"position:absolute;right:0;bottom:0\" -->\n                <ion-col [size]=\"4\" class=\"autoMargin ion-text-center\">\n                  <div class=\"cheerUserImg\">\n                    <div class=\"userImgIcon\">\n                      <app-image-view [img]=\"cheerData?.receiver_profile\" [imageView]=\"false\" class=\"circleCoverIcon\" ></app-image-view>\n                    </div>\n                    <p class=\"noMargin nameText\">{{cheerData?.receiver_name}}</p>\n                    <p class=\"noMargin positionText\">{{cheerData?.receiver_designation}}</p>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </div>\n          </div>\n          <!-- cheerBoard Div End -->\n          <!-- cheerBoard Div End -->\n\n          <!-- leaderBoard Div Start -->\n          <!-- leaderBoard Div Start -->\n          <div *ngIf=\"segmentSectionDiv === 'leader' && cheerBoard\">\n            <div class=\"customCard\" style=\"border-radius:10px 10px 0px 0px;\">\n              <div class=\"topDesign\"> \n                <p class=\"noMargin receivedText\">{{leaderTitle}}</p>\n                <br>\n                <!-- *ngFor=\"let listData of sayCheersBoard?.leaderBoard; let ind = index;\" -->\n                <ion-row>\n                  <ion-col [size]=\"4\" class=\"secondWinner ion-no-padding\">\n                    <div class=\"winnerDiv\" *ngIf=\"cheerBoard[1]\">\n                      <app-image-view [img]=\"cheerBoard[1]?.receiver_profile\" [imageView]=\"true\" class=\"bigCircleImg\" ></app-image-view>\n                      <p class=\"noMargin nameText\">{{cheerBoard[1]?.receiver_name}}</p>\n                      <p class=\"noMargin positionText\">{{cheerBoard[1]?.receiver_designation}}</p>\n                      <p class=\"pointEarn\"><span>{{cheerBoard[1]?.badge_count}}</span></p>\n                      <p class=\"noMargin sequeNumber\">{{cheerBoard[1]?.rank}}</p>\n                    </div>\n                  </ion-col>\n                  <ion-col [size]=\"4\" class=\"firstWinner ion-no-padding\">\n                    <div class=\"winnerDiv\" *ngIf=\"cheerBoard[0]\">\n                      <img [src]=\"cheerBoard[0]?.crownicon\" class=\"crownImgDiv\">\n                      <app-image-view [img]=\"cheerBoard[0]?.receiver_profile\" [imageView]=\"true\" class=\"bigCircleImg\" ></app-image-view>\n                      <p class=\"noMargin nameText\">{{cheerBoard[0]?.receiver_name}}</p>\n                      <p class=\"noMargin positionText\">{{cheerBoard[0]?.receiver_designation}}</p>\n                      <p class=\"pointEarn\"><span>{{cheerBoard[0]?.badge_count}}</span></p>\n                      <p class=\"noMargin sequeNumber\">{{cheerBoard[0]?.rank}}</p>\n                    </div>\n                  </ion-col>\n                  <ion-col [size]=\"4\" class=\"secondWinner ion-no-padding\">\n                    <div class=\"winnerDiv\" *ngIf=\"cheerBoard[2]\">\n                      <app-image-view [img]=\"cheerBoard[2]?.receiver_profile\" [imageView]=\"true\" class=\"bigCircleImg\" ></app-image-view>\n                      <p class=\"noMargin nameText\">{{cheerBoard[2]?.receiver_name}}</p>\n                      <p class=\"noMargin positionText\">{{cheerBoard[2]?.receiver_designation}}</p>\n                      <p class=\"pointEarn\"><span>{{cheerBoard[2]?.badge_count}}</span></p>\n                      <p class=\"noMargin sequeNumber\">{{cheerBoard[2]?.rank}}</p>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </div>\n            </div>\n            <div class=\"listBoardDiv\" *ngIf=\"cheerBoard?.length>=4\">\n              <ion-row>\n                <ion-col [size]=\"12\" class=\"ion-no-padding\" *ngFor=\"let listData of cheerBoard; let ind = index;\">\n                  <ion-row *ngIf=\"ind>2\">\n                    <ion-col [size]=\"1\" class=\"autoMargin ion-no-padding ion-text-center\">\n                      <p class=\"noMargin sequeNumber\">{{ind+1}}</p>\n                    </ion-col>\n                    <ion-col [size]=\"3\" class=\"autoMargin ion-text-center\">\n                      <app-image-view [img]=\"listData?.receiver_profile\" [imageView]=\"true\" class=\"CircleImg\" ></app-image-view>\n                    </ion-col>\n                    <ion-col [size]=\"6\" class=\"autoMargin\">\n                      <p class=\"noMargin nameText\">{{listData?.receiver_name}}</p>\n                      <p class=\"noMargin positionText\">{{listData?.receiver_designation}}</p>\n                    </ion-col>\n                    <ion-col [size]=\"2\" class=\"autoMargin ion-text-right\"><p class=\"noMargin pointEarn\">{{listData?.badge_count}}</p></ion-col>\n                  </ion-row>\n                </ion-col>\n              </ion-row>\n            </div>\n          </div>\n          <!-- leaderBoard Div End -->\n          <!-- leaderBoard Div End -->\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row *ngIf=\"!cheerBoard && showErrorImage!=''\">\n        <ion-col class=\"ion-text-center\" [push]=\"1\" [size]=\"10\">\n          <br><br>\n          <img [src]=\"showErrorImage\" onerror=\"this.src='../../assets/watermark/watermark.png'\">\n          <h2 class=\"noDataFoundMessage\">{{no_data_message}}</h2>\n        </ion-col>\n      </ion-row>\n\n\n      <p style=\"text-align:center;font-size:12px;\" *ngIf=\"errorMessage!=''\">{{errorMessage}}</p>\n      <ion-infinite-scroll *ngIf=\"errorMessage=='' && cheerBoard\" threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" \n        loadingText=\"Loading more data...\"></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </div>\n\n  \n\n  </div>\n\n\n\n  <div *ngIf=\"!sayCheersBoard\">\n    <app-skelton-listview [iconPath]=\"'cheerBoard'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/sayCheersModule/say-cheers-board/say-cheers-board-routing.module.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/sayCheersModule/say-cheers-board/say-cheers-board-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: SayCheersBoardPageRoutingModule */

    /***/
    function srcAppSayCheersModuleSayCheersBoardSayCheersBoardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SayCheersBoardPageRoutingModule", function () {
        return SayCheersBoardPageRoutingModule;
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


      var _say_cheers_board_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./say-cheers-board.page */
      "./src/app/sayCheersModule/say-cheers-board/say-cheers-board.page.ts");

      var routes = [{
        path: '',
        component: _say_cheers_board_page__WEBPACK_IMPORTED_MODULE_3__["SayCheersBoardPage"]
      }];

      var SayCheersBoardPageRoutingModule = function SayCheersBoardPageRoutingModule() {
        _classCallCheck(this, SayCheersBoardPageRoutingModule);
      };

      SayCheersBoardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SayCheersBoardPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/sayCheersModule/say-cheers-board/say-cheers-board.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/sayCheersModule/say-cheers-board/say-cheers-board.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: SayCheersBoardPageModule */

    /***/
    function srcAppSayCheersModuleSayCheersBoardSayCheersBoardModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SayCheersBoardPageModule", function () {
        return SayCheersBoardPageModule;
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


      var _say_cheers_board_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./say-cheers-board-routing.module */
      "./src/app/sayCheersModule/say-cheers-board/say-cheers-board-routing.module.ts");
      /* harmony import */


      var _say_cheers_board_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./say-cheers-board.page */
      "./src/app/sayCheersModule/say-cheers-board/say-cheers-board.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var SayCheersBoardPageModule = function SayCheersBoardPageModule() {
        _classCallCheck(this, SayCheersBoardPageModule);
      };

      SayCheersBoardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _say_cheers_board_routing_module__WEBPACK_IMPORTED_MODULE_5__["SayCheersBoardPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_say_cheers_board_page__WEBPACK_IMPORTED_MODULE_6__["SayCheersBoardPage"]]
      })], SayCheersBoardPageModule);
      /***/
    },

    /***/
    "./src/app/sayCheersModule/say-cheers-board/say-cheers-board.page.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/sayCheersModule/say-cheers-board/say-cheers-board.page.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSayCheersModuleSayCheersBoardSayCheersBoardPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".cheersPageBoard .lastDayText {\n  font-size: 15px;\n  font-weight: bold;\n  color: #313131;\n}\n.cheersPageBoard .countDivText {\n  width: 100%;\n  height: 130px;\n  background: var(--headerLightColor);\n  text-align: center;\n  color: #000;\n  border-radius: 10px;\n  padding: 15px;\n}\n.cheersPageBoard .countDivText .numberText {\n  font-weight: bold;\n  font-size: 35px;\n  color: #616161;\n}\n.cheersPageBoard .countDivText .badgeText {\n  font-size: 17px;\n  font-weight: bold;\n  margin: 5px 0;\n  font-size: 4vw;\n}\n.segmentSectionDiv ion-segment {\n  background: var(--headerColor);\n  border-radius: 10px;\n  height: 35px;\n}\n.segmentSectionDiv ion-segment ion-segment-button {\n  background: #f2f2f2;\n  color: gray;\n  font-size: 12px;\n  letter-spacing: 1px;\n  margin: 0px;\n  --line-height:20px;\n  min-height: 30px;\n}\n.segmentSectionDiv ion-segment .segment-button-checked {\n  background: var(--headerColor);\n  color: white;\n  --indicator-color:transparent ;\n  border-radius: 10px;\n}\n.segmentSectionDiv .userImgIcon {\n  border: 3px solid var(--headerColor);\n  width: 55px;\n  height: 55px;\n  overflow: hidden;\n  border-radius: 50%;\n  margin: 0 auto 5px;\n  background: var(--headerLightColor);\n}\n.segmentSectionDiv .nameText {\n  font-size: 12px;\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n}\n.segmentSectionDiv .positionText {\n  font-size: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n}\n.segmentSectionDiv .cardSendImgDiv {\n  border: 1px dashed gray;\n  border-radius: 10px;\n  overflow: hidden;\n  padding: 5px 5px 2px 5px;\n}\n.segmentSectionDiv .receivedText {\n  font-size: 16px;\n  font-weight: bold;\n  margin: 10px 0 0 0;\n}\n.segmentSectionDiv .sequeNumber {\n  font-weight: bold;\n  color: gray;\n}\n.segmentSectionDiv .pointEarn {\n  color: black;\n  font-size: 16px;\n}\n.segmentSectionDiv .listBoardDiv {\n  border-radius: 30px 30px 0px 0px;\n  box-shadow: 0px -3px 10px 2px grey;\n  padding: 20px 10px 10px 10px;\n  margin: -30px 0 0px 0;\n  background: #fff;\n  position: relative;\n  z-index: 1;\n}\n.segmentSectionDiv .topDesign {\n  padding: 0px 10px 20px 10px;\n}\n.segmentSectionDiv .topDesign .sequeNumber {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  color: #fff !important;\n  font-size: 30px;\n}\n.segmentSectionDiv .topDesign .pointEarn {\n  position: relative;\n  left: 0;\n  right: 0;\n  margin: 40px auto 0;\n}\n.segmentSectionDiv .topDesign .pointEarn span {\n  background: white;\n  box-shadow: 0px 0px 5px 2px gray;\n  padding: 4px 15px 2px 15px;\n  font-size: 15px;\n  border-radius: 20px;\n}\n.segmentSectionDiv .topDesign .nameText {\n  color: var(--headerColor);\n}\n.segmentSectionDiv .topDesign .winnerDiv {\n  position: relative;\n  padding: 0 0 30px 0;\n  text-align: center;\n}\n.segmentSectionDiv .topDesign .winnerDiv::after {\n  content: \"\";\n  position: absolute;\n  bottom: -20px;\n  left: 0;\n  right: 0;\n  min-height: 80px;\n  background: var(--headerColor);\n  transform: rotate(0deg) skewX(0deg) skewY(0deg);\n  box-shadow: 0px -10px 10px #b1b1b1;\n  z-index: -1;\n}\n.segmentSectionDiv .topDesign .secondWinner {\n  margin: 70px 0px 0px 0px;\n  z-index: 0;\n}\n.segmentSectionDiv .topDesign .secondWinner .pointEarn {\n  bottom: 20px;\n}\n.segmentSectionDiv .topDesign .firstWinner {\n  margin: 30px 0px 0px 0px;\n  z-index: 0;\n}\n.segmentSectionDiv .topDesign .firstWinner .crownImgDiv {\n  position: absolute;\n  top: -35px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 50px;\n}\n.segmentSectionDiv .topDesign .firstWinner .pointEarn {\n  bottom: 30px;\n}\n.segmentSectionDiv .topDesign .firstWinner .winnerDiv::after {\n  bottom: -50px;\n  min-height: 120px;\n}\n.iconDiv {\n  height: 25px;\n  width: 20px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.arrowDiv {\n  position: relative;\n}\n.arrowDiv .arrowImage {\n  position: absolute;\n  top: 0px;\n  left: 9%;\n  right: 0;\n  bottom: 0;\n  transform: translate(13%, 10%);\n  width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2F5Q2hlZXJzTW9kdWxlL3NheS1jaGVlcnMtYm9hcmQvc2F5LWNoZWVycy1ib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0k7RUFBYSxlQUFBO0VBQWUsaUJBQUE7RUFBaUIsY0FBQTtBQUxqRDtBQU1JO0VBQWMsV0FBQTtFQUFXLGFBQUE7RUFBYSxtQ0FBQTtFQUFtQyxrQkFBQTtFQUNyRSxXQUFBO0VBQVcsbUJBQUE7RUFBbUIsYUFBQTtBQUV0QztBQURRO0VBQVksaUJBQUE7RUFBaUIsZUFBQTtFQUFlLGNBQUE7QUFNcEQ7QUFMUTtFQUFXLGVBQUE7RUFBZSxpQkFBQTtFQUFpQixhQUFBO0VBQWEsY0FBQTtBQVdoRTtBQU5JO0VBQVksOEJBQUE7RUFBOEIsbUJBQUE7RUFBbUIsWUFBQTtBQVlqRTtBQVhRO0VBQW1CLG1CQUFBO0VBQW1CLFdBQUE7RUFBVyxlQUFBO0VBQWUsbUJBQUE7RUFBbUIsV0FBQTtFQUMvRSxrQkFBQTtFQUFtQixnQkFBQTtBQW1CL0I7QUFqQlE7RUFBd0IsOEJBQUE7RUFBOEIsWUFBQTtFQUFZLDhCQUFBO0VBQzdELG1CQUFBO0FBc0JiO0FBbkJJO0VBQWEsb0NBQUE7RUFBb0MsV0FBQTtFQUFXLFlBQUE7RUFBWSxnQkFBQTtFQUNwRSxrQkFBQTtFQUFrQixrQkFBQTtFQUFrQixtQ0FBQTtBQTJCNUM7QUF6Qkk7RUFBVSxlQUFBO0VBQWUsaUJBQUE7RUE1QnpCLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBd0I4RDtBQWtDbEU7QUFqQ0k7RUFBYyxlQUFBO0VBN0JkLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBeUJpRDtBQXlDckQ7QUF4Q0k7RUFBZ0IsdUJBQUE7RUFBdUIsbUJBQUE7RUFBbUIsZ0JBQUE7RUFBZ0Isd0JBQUE7QUE4QzlFO0FBNUNJO0VBQWMsZUFBQTtFQUFlLGlCQUFBO0VBQWlCLGtCQUFBO0FBaURsRDtBQWhESTtFQUFhLGlCQUFBO0VBQWlCLFdBQUE7QUFvRGxDO0FBbkRJO0VBQVcsWUFBQTtFQUFZLGVBQUE7QUF1RDNCO0FBdERJO0VBQWMsZ0NBQUE7RUFBZ0Msa0NBQUE7RUFBa0MsNEJBQUE7RUFDNUUscUJBQUE7RUFBcUIsZ0JBQUE7RUFBZ0Isa0JBQUE7RUFBa0IsVUFBQTtBQThEL0Q7QUF0REk7RUFBVywyQkFBQTtBQXlEZjtBQXhEUTtFQUFhLGtCQUFBO0VBQWtCLFNBQUE7RUFBUyxPQUFBO0VBQU8sUUFBQTtFQUFRLHNCQUFBO0VBQXNCLGVBQUE7QUFnRXJGO0FBL0RRO0VBQVcsa0JBQUE7RUFBa0IsT0FBQTtFQUFPLFFBQUE7RUFBUSxtQkFBQTtBQXFFcEQ7QUFwRVk7RUFBSyxpQkFBQTtFQUFpQixnQ0FBQTtFQUFnQywwQkFBQTtFQUEwQixlQUFBO0VBQWUsbUJBQUE7QUEyRTNHO0FBekVRO0VBQVUseUJBQUE7QUE0RWxCO0FBM0VRO0VBQVcsa0JBQUE7RUFBa0IsbUJBQUE7RUFBbUIsa0JBQUE7QUFnRnhEO0FBL0VRO0VBQWtCLFdBQUE7RUFBVyxrQkFBQTtFQUFrQixhQUFBO0VBQWEsT0FBQTtFQUFPLFFBQUE7RUFBUSxnQkFBQTtFQUN2RSw4QkFBQTtFQUE4QiwrQ0FBQTtFQUM5QixrQ0FBQTtFQUFrQyxXQUFBO0FBeUY5QztBQW5GUTtFQUFjLHdCQUFBO0VBQXdCLFVBQUE7QUF1RjlDO0FBdEZZO0VBQVcsWUFBQTtBQXlGdkI7QUF2RlE7RUFBYSx3QkFBQTtFQUF3QixVQUFBO0FBMkY3QztBQTFGWTtFQUFhLGtCQUFBO0VBQWtCLFVBQUE7RUFBVSxPQUFBO0VBQU8sUUFBQTtFQUFRLFlBQUE7RUFBWSxXQUFBO0FBa0doRjtBQWpHWTtFQUFXLFlBQUE7QUFvR3ZCO0FBakdRO0VBQStCLGFBQUE7RUFBYSxpQkFBQTtBQXFHcEQ7QUFsR0E7RUFBUyxZQUFBO0VBQVksV0FBQTtFQUFXLG9CQUFBO0tBQUEsaUJBQUE7QUF3R2hDO0FBdEdBO0VBQVUsa0JBQUE7QUEwR1Y7QUF6R0k7RUFBWSxrQkFBQTtFQUFrQixRQUFBO0VBQVEsUUFBQTtFQUFRLFFBQUE7RUFBUSxTQUFBO0VBQVMsOEJBQUE7RUFBOEIsVUFBQTtBQWtIakciLCJmaWxlIjoic3JjL2FwcC9zYXlDaGVlcnNNb2R1bGUvc2F5LWNoZWVycy1ib2FyZC9zYXktY2hlZXJzLWJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBsaW5lLWNsYW1wKCRsaW5lcykge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6JGxpbmVzO1xufVxuICBcbi5jaGVlcnNQYWdlQm9hcmR7XG4gICAgLmxhc3REYXlUZXh0e2ZvbnQtc2l6ZToxNXB4O2ZvbnQtd2VpZ2h0OmJvbGQ7Y29sb3I6IzMxMzEzMTt9XG4gICAgLmNvdW50RGl2VGV4dHt3aWR0aDoxMDAlO2hlaWdodDoxMzBweDtiYWNrZ3JvdW5kOnZhcigtLWhlYWRlckxpZ2h0Q29sb3IpO3RleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICBjb2xvcjojMDAwO2JvcmRlci1yYWRpdXM6MTBweDtwYWRkaW5nOjE1cHg7XG4gICAgICAgIC5udW1iZXJUZXh0e2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjM1cHg7Y29sb3I6IzYxNjE2MTt9XG4gICAgICAgIC5iYWRnZVRleHR7Zm9udC1zaXplOjE3cHg7Zm9udC13ZWlnaHQ6Ym9sZDttYXJnaW46NXB4IDA7Zm9udC1zaXplOjR2dzt9XG4gICAgfVxufVxuXG4uc2VnbWVudFNlY3Rpb25EaXZ7XG4gICAgaW9uLXNlZ21lbnR7YmFja2dyb3VuZDp2YXIoLS1oZWFkZXJDb2xvcik7Ym9yZGVyLXJhZGl1czoxMHB4O2hlaWdodDozNXB4O1xuICAgICAgICBpb24tc2VnbWVudC1idXR0b257YmFja2dyb3VuZDojZjJmMmYyO2NvbG9yOmdyYXk7Zm9udC1zaXplOjEycHg7bGV0dGVyLXNwYWNpbmc6MXB4O21hcmdpbjowcHg7XG4gICAgICAgICAgICAtLWxpbmUtaGVpZ2h0OjIwcHg7bWluLWhlaWdodDozMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5zZWdtZW50LWJ1dHRvbi1jaGVja2Vke2JhY2tncm91bmQ6dmFyKC0taGVhZGVyQ29sb3IpO2NvbG9yOndoaXRlOy0taW5kaWNhdG9yLWNvbG9yOnRyYW5zcGFyZW50XG4gICAgICAgICAgICA7Ym9yZGVyLXJhZGl1czoxMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC51c2VySW1nSWNvbntib3JkZXI6M3B4IHNvbGlkIHZhcigtLWhlYWRlckNvbG9yKTt3aWR0aDo1NXB4O2hlaWdodDo1NXB4O292ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czo1MCU7bWFyZ2luOjAgYXV0byA1cHg7YmFja2dyb3VuZDp2YXIoLS1oZWFkZXJMaWdodENvbG9yKTtcbiAgICB9XG4gICAgLm5hbWVUZXh0e2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OmJvbGQ7QGluY2x1ZGUgbGluZS1jbGFtcCgxKX1cbiAgICAucG9zaXRpb25UZXh0e2ZvbnQtc2l6ZToxMHB4O0BpbmNsdWRlIGxpbmUtY2xhbXAoMSl9XG4gICAgLmNhcmRTZW5kSW1nRGl2e2JvcmRlcjoxcHggZGFzaGVkIGdyYXk7Ym9yZGVyLXJhZGl1czoxMHB4O292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjVweCA1cHggMnB4IDVweDt9XG5cbiAgICAucmVjZWl2ZWRUZXh0e2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OmJvbGQ7bWFyZ2luOjEwcHggMCAwIDA7fVxuICAgIC5zZXF1ZU51bWJlcntmb250LXdlaWdodDpib2xkO2NvbG9yOmdyYXk7fVxuICAgIC5wb2ludEVhcm57Y29sb3I6YmxhY2s7Zm9udC1zaXplOjE2cHg7fVxuICAgIC5saXN0Qm9hcmREaXZ7Ym9yZGVyLXJhZGl1czozMHB4IDMwcHggMHB4IDBweDtib3gtc2hhZG93OjBweCAtM3B4IDEwcHggMnB4IGdyZXk7cGFkZGluZzoyMHB4IDEwcHggMTBweCAxMHB4O1xuICAgICAgICBtYXJnaW46LTMwcHggMCAwcHggMDtiYWNrZ3JvdW5kOiNmZmY7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxO1xuICAgIH1cblxuXG5cblxuXG5cbiAgICAudG9wRGVzaWdue3BhZGRpbmc6MHB4IDEwcHggMjBweCAxMHB4O1xuICAgICAgICAuc2VxdWVOdW1iZXJ7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7bGVmdDowO3JpZ2h0OjA7Y29sb3I6I2ZmZiAhaW1wb3J0YW50O2ZvbnQtc2l6ZTozMHB4O31cbiAgICAgICAgLnBvaW50RWFybntwb3NpdGlvbjpyZWxhdGl2ZTtsZWZ0OjA7cmlnaHQ6MDttYXJnaW46NDBweCBhdXRvIDA7XG4gICAgICAgICAgICBzcGFue2JhY2tncm91bmQ6d2hpdGU7Ym94LXNoYWRvdzowcHggMHB4IDVweCAycHggZ3JheTtwYWRkaW5nOjRweCAxNXB4IDJweCAxNXB4O2ZvbnQtc2l6ZToxNXB4O2JvcmRlci1yYWRpdXM6MjBweDt9XG4gICAgICAgIH1cbiAgICAgICAgLm5hbWVUZXh0e2NvbG9yOnZhcigtLWhlYWRlckNvbG9yKTt9XG4gICAgICAgIC53aW5uZXJEaXZ7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZzowIDAgMzBweCAwO3RleHQtYWxpZ246Y2VudGVyO31cbiAgICAgICAgLndpbm5lckRpdjo6YWZ0ZXJ7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTotMjBweDtsZWZ0OjA7cmlnaHQ6MDttaW4taGVpZ2h0OjgwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOnZhcigtLWhlYWRlckNvbG9yKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpIHNrZXdYKDBkZWcpIHNrZXdZKDBkZWcpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzowcHggLTEwcHggMTBweCAjYjFiMWIxO3otaW5kZXg6LTE7XG4gICAgICAgICAgICAvLyAtd2Via2l0LWNsaXAtcGF0aDpwb2x5Z29uKDEwMCUgMCwgOTAlIDEwMCUsIDEwJSAxMDAlLCAwJSAwKTtcbiAgICAgICAgICAgIC8vIGNsaXAtcGF0aDpwb2x5Z29uKDEwMCUgMCwgOTAlIDEwMCUsIDEwJSAxMDAlLCAwJSAwKTtcbiAgICAgICAgICAgIC8vIHNoYXBlLW91dHNpZGU6cG9seWdvbigxMDAlIDAsIDkwJSAxMDAlLCAxMCUgMTAwJSwgMCUgMCk7XG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOjE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNlY29uZFdpbm5lcnttYXJnaW46NzBweCAwcHggMHB4IDBweDt6LWluZGV4OjA7XG4gICAgICAgICAgICAucG9pbnRFYXJue2JvdHRvbToyMHB4O31cbiAgICAgICAgfVxuICAgICAgICAuZmlyc3RXaW5uZXJ7bWFyZ2luOjMwcHggMHB4IDBweCAwcHg7ei1pbmRleDowO1xuICAgICAgICAgICAgLmNyb3duSW1nRGl2e3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMzVweDtsZWZ0OjA7cmlnaHQ6MDttYXJnaW46YXV0bzt3aWR0aDo1MHB4O31cbiAgICAgICAgICAgIC5wb2ludEVhcm57Ym90dG9tOjMwcHg7fVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLmZpcnN0V2lubmVyIC53aW5uZXJEaXY6OmFmdGVye2JvdHRvbTotNTBweDttaW4taGVpZ2h0OjEyMHB4O30gICAgIFxuICAgIH1cbn1cbi5pY29uRGl2e2hlaWdodDoyNXB4O3dpZHRoOjIwcHg7b2JqZWN0LWZpdDpjb3Zlcjt9XG5cbi5hcnJvd0Rpdntwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAuYXJyb3dJbWFnZXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MHB4O2xlZnQ6OSU7cmlnaHQ6MDtib3R0b206MDt0cmFuc2Zvcm06dHJhbnNsYXRlKDEzJSwgMTAlKTt3aWR0aDo3MCU7fVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/sayCheersModule/say-cheers-board/say-cheers-board.page.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/sayCheersModule/say-cheers-board/say-cheers-board.page.ts ***!
      \***************************************************************************/

    /*! exports provided: SayCheersBoardPage */

    /***/
    function srcAppSayCheersModuleSayCheersBoardSayCheersBoardPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SayCheersBoardPage", function () {
        return SayCheersBoardPage;
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


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/local-storage.service */
      "./src/app/services/local-storage.service.ts");
      /* harmony import */


      var _src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../src/assets/constant */
      "./src/assets/constant.ts");
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");

      var SayCheersBoardPage = /*#__PURE__*/function () {
        function SayCheersBoardPage(router, storageService, apiservices, zone, sendData) {
          _classCallCheck(this, SayCheersBoardPage);

          this.router = router;
          this.storageService = storageService;
          this.apiservices = apiservices;
          this.zone = zone;
          this.sendData = sendData;
          this.segmentSectionDiv = "cheer";
          this.value = 0;
          this.errorMessage = "";
          this.myinfiniteScrollCall = false;
          this.segmentModel = 'cheer';
          this.showErrorImage = "";
          this.no_data_message = "";
        }

        _createClass(SayCheersBoardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.storageService.getStorage().then(res=>{
            //   this.sayCheersHome();
            //   console.log("ionic lifecycle called getStorage==>",res);
            // });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            if (this.sayCheersBoard) {
              this.zone.run(function () {
                _this.segmentModel = 'cheer';
              });
            }

            console.log("ionViewDidEnter");
            this.storageService.getStorage().then(function (res) {
              setTimeout(function () {
                _this.countData = undefined;
                _this.sayCheersBoard = undefined;
                _this.cheerBoard = undefined;
                _this.value = 0;

                _this.sayCheersHome();

                console.log("ionic lifecycle called getStorage==>", res);
              }, 500);
            });
          } // public ionViewWillEnter(): void{
          //   this.eventService.getObservable().subscribe((data) => {
          //     console.log("publishData Data received==", data);
          //     if(data.data.commingFrom=="reloadHomeApi" && data.data.reloadHomePage==true){
          //       console.log("publishData Data forceupdate==", data);
          //       this.allData=undefined;
          //       this.sayCheersHome();
          //     }
          //   });
          // }

        }, {
          key: "goToBadgeList",
          value: function goToBadgeList(totalCount, value) {
            var _this2 = this;

            this.zone.run(function () {
              _this2.sendData.sayCheers = value;

              _this2.router.navigate(['/say-cheers-badges']); // if(totalCount>0){
              //   this.sendData.sayCheers=value;
              //   this.router.navigate(['/say-cheers-badges']);    
              // }else{}

            });
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(ev, tabsData) {
            var _this3 = this;

            this.zone.run(function () {
              _this3.showErrorImage = "";
              _this3.no_data_message = "";
              _this3.cheerBoard = undefined;
              _this3.errorMessage = "";
              _this3.value = 0;
              console.log('Segment change000000000000', ev);
              console.log('Segment changed2', tabsData);
              console.log('Segment changed1', ev.detail.value);

              _this3.zone.run(function () {
                _this3.segmentSectionDiv = ev.detail.value;

                if (_this3.segmentSectionDiv == 'leader') {
                  console.log('Segment changed100', ev.detail.value);

                  _this3.leaderCheerData(tabsData.leaderboard.requestTab);
                } else if (_this3.segmentSectionDiv == 'cheer') {
                  _this3.cheerBoard = undefined;
                  console.log('Segment changed1000', ev.detail.value);

                  _this3.leaderCheerData(tabsData.cheerboard.requestTab);
                } else {
                  _this3.cheerBoard = undefined;
                  console.log('Segment changed1000', ev.detail.value);

                  _this3.leaderCheerData(tabsData.cheerboard.requestTab);
                }
              });
            });
          }
        }, {
          key: "goToNext",
          value: function goToNext() {
            var _this4 = this;

            this.zone.run(function () {
              _this4.router.navigate(["/say-cheers-list"]);
            });
          }
        }, {
          key: "sayCheersHome",
          value: function sayCheersHome() {
            var _this5 = this;

            this.zone.run(function () {
              console.log("noticeBoard Detail api call function");
              var apikey = {};

              _this5.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].sayCheersHomeApi, apikey).subscribe(function (result) {
                console.log("noticeBoard Detail api result==", result);
                _this5.pageTitle = result.data.settings.page_header;

                if (result.status == 1 || result.status == '1') {
                  _this5.countData = result.data;
                  _this5.sayCheersBoard = result.data.settings;

                  _this5.leaderCheerData(_this5.sayCheersBoard.cheerboard.requestTab);
                } else {
                  _this5.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this5.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "goToMessage",
          value: function goToMessage(index) {
            var _this6 = this;

            this.zone.run(function () {
              var obj = {
                allData: _this6.cheerBoard,
                index: index,
                pageHeader: _this6.Settings
              };
              _this6.sendData.sayCheers = obj; // if(this.segmentSectionDiv=='cheer'){
              //   this.sendData.myParam=this.sayCheersBoard.cheerboard.requestTab;
              // }else{
              //   this.sendData.myParam=this.sayCheersBoard.leaderboard.requestTab;
              // }

              _this6.router.navigate(["/say-cheers-slide-detail"]);
            });
          }
        }, {
          key: "leaderCheerData",
          value: function leaderCheerData(tabsData) {
            var _this7 = this;

            this.zone.run(function () {
              console.log("noticeBoard List api call function");
              var apikey = {
                request_tab: tabsData,
                limit: _this7.value
              };

              _this7.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].leaderCheerApiUrl, apikey).subscribe(function (result) {
                console.log("noticeBoard List api result==", result);
                _this7.Settings = result.data.settings;

                if (result.status == 1 || result.status == '1') {
                  _this7.leaderTitle = result.data.boardlist.list_header;

                  if (_this7.cheerBoard == undefined) {
                    _this7.cheerBoard = result.data.boardlist.board_list;
                    console.log("HrPolicy List Infinite Scroll if1==", _this7.cheerBoard);
                  } else {
                    _this7.cheerBoard = _this7.cheerBoard.concat(result.data.boardlist.board_list);
                    console.log("HrPolicy List Infinite Scroll else1==", _this7.cheerBoard);
                  }

                  if (_this7.myinfiniteScrollCall == true) {
                    console.log("HrPolicy List Infinite Scroll if2==", _this7.cheerBoard);

                    _this7.myInfiniteScroll.target.complete();

                    _this7.errorMessage = result.message;
                    _this7.myinfiniteScrollCall = false;
                  }
                } else {
                  _this7.errorMessage = result.message;
                  _this7.no_data_message = result.data.settings.no_data_msg;
                  _this7.showErrorImage = result.data.settings.no_data_image;
                  console.log("HrPolicy List Infinite Scroll12==", _this7.cheerBoard);

                  if (_this7.myinfiniteScrollCall == true) {
                    console.log("HrPolicy List Infinite Scroll123==", _this7.cheerBoard);

                    _this7.myInfiniteScroll.target.complete();

                    _this7.myinfiniteScrollCall = false;
                  }
                }
              }, function (err) {
                _this7.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(infiniteScroll) {
            var _this8 = this;

            this.myinfiniteScrollCall = true;
            console.log("Begin async operation 1==");
            setTimeout(function () {
              _this8.value = _this8.cheerBoard.length;
              console.log("Begin async operation 2==", _this8.value);
              _this8.myInfiniteScroll = infiniteScroll;

              if (_this8.segmentSectionDiv == 'cheer') {
                _this8.leaderCheerData(_this8.sayCheersBoard.cheerboard.requestTab);
              } else {
                _this8.leaderCheerData(_this8.sayCheersBoard.leaderboard.requestTab);
              }
            }, 500);
          }
        }]);

        return SayCheersBoardPage;
      }();

      SayCheersBoardPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
        }, {
          type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__["DataTransferService"]
        }];
      };

      SayCheersBoardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-say-cheers-board',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./say-cheers-board.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sayCheersModule/say-cheers-board/say-cheers-board.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./say-cheers-board.page.scss */
        "./src/app/sayCheersModule/say-cheers-board/say-cheers-board.page.scss"))["default"]]
      })], SayCheersBoardPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=sayCheersModule-say-cheers-board-say-cheers-board-module-es5.js.map