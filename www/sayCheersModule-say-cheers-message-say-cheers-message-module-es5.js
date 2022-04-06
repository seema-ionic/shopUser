(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sayCheersModule-say-cheers-message-say-cheers-message-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sayCheersModule/say-cheers-message/say-cheers-message.page.html":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sayCheersModule/say-cheers-message/say-cheers-message.page.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSayCheersModuleSayCheersMessageSayCheersMessagePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{pageHeader}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n  <div class=\"commonPagePadding\" *ngIf=\"cardListData && apiservices?.previewData==false\">\n    <div class=\"cardListDiv\">\n      <ion-row>\n        <ion-col [push]=\"1\" [size]=\"10\">\n          <div class=\"cardDiv\">\n            <!-- <div class=\"blurImgDiv\" [style.background]=\"'url('+cardListData?.listData?.card_image+')'\"></div> -->\n            <app-image-view [img]=\"cardListData?.listData?.card_image\" [imageView]=\"false\" class=\"cheerMsgCard\" ></app-image-view>\n          </div>\n        </ion-col>\n        <div class=\"textAreaDiv\" *ngIf=\"cardListSettingData?.citationCheck==1\">\n          <br>\n          <ion-row>\n            <ion-col [size]=\"12\"><p class=\"noMargin titleText\">{{cardListSettingData?.citation?.name}}</p></ion-col>\n            <ion-col [size]=\"12\">\n              <ion-textarea rows=\"7\" type=\"text\" [(ngModel)]=\"textAreaText\" [placeholder]=\"cardListSettingData?.citation?.placeholder\"></ion-textarea>\n            </ion-col>\n          </ion-row>\n        </div>\n        <ion-col [push]=\"2\" [size]=\"8\" class=\"ion-text-center\" *ngIf=\"cardListSettingData?.isbutton_applicable==1\">\n          <ion-button class=\"dynamicButtonColor\" [disabled]=\"textAreaText.trim()==''\" tappable (click)=\"previewPage()\">\n            {{cardListSettingData?.preview_button}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n\n\n\n\n  \n  <div class=\"ion-padding\" *ngIf=\"apiservices?.previewData==true\">\n    <div class=\"customCard\">\n      <ion-row>\n        <ion-col [size]=\"12\" class=\"ion-text-center\">\n          <div class=\"cardSendImgDiv\">\n            <app-image-view [img]=\"cardListData?.listData?.card_image\" [imageView]=\"false\" class=\"radiusFullImage\" ></app-image-view>\n          </div>\n        </ion-col>\n        <ion-col [push]=\"4\" [size]=\"4\" class=\"ion-text-center\">\n          <div class=\"cheerUserImg\">\n            <div class=\"userImgIcon\">\n              <app-image-view [img]=\"cardListData?.sayCheersListData?.profile_image\" [imageView]=\"false\" class=\"circleCoverIcon\" ></app-image-view>\n            </div>\n            <p class=\"noMargin nameText\">{{cardListData?.sayCheersListData?.name}}</p>\n            <p class=\"noMargin positionText\">{{cardListData?.sayCheersListData?.designation}}</p>\n          </div>\n        </ion-col>\n        <ion-col [size]=\"12\" class=\"ion-text-left cardListDiv\">\n          <div class=\"textAreaDiv\">\n            <br>\n            <div class=\"quotesIconDiv\"><img src=\"../../assets/icon/quotIcon.png\"></div>\n            <app-text-layout style=\"white-space:pre-wrap;\" [text]=\"textAreaText\" class=\"\" [className]=\"\"></app-text-layout>\n            <!-- <ion-textarea rows=\"7\" type=\"text\" readonly [(ngModel)]=\"textAreaText\" [placeholder]=\"cardListSettingData?.citation?.placeholder\"></ion-textarea> -->\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n    <ion-row>\n      <ion-col [push]=\"2\" [size]=\"8\" class=\"ion-text-center\" *ngIf=\"cardListSettingData?.isbutton_applicable==1\">\n        <ion-button class=\"dynamicButtonColor\" [disabled]=\"textAreaText.trim()==''\" tappable (click)=\"goToNext()\" >\n          {{cardListSettingData?.button_text}}</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/sayCheersModule/say-cheers-message/say-cheers-message-routing.module.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/sayCheersModule/say-cheers-message/say-cheers-message-routing.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: SayCheersMessagePageRoutingModule */

    /***/
    function srcAppSayCheersModuleSayCheersMessageSayCheersMessageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SayCheersMessagePageRoutingModule", function () {
        return SayCheersMessagePageRoutingModule;
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


      var _say_cheers_message_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./say-cheers-message.page */
      "./src/app/sayCheersModule/say-cheers-message/say-cheers-message.page.ts");

      var routes = [{
        path: '',
        component: _say_cheers_message_page__WEBPACK_IMPORTED_MODULE_3__["SayCheersMessagePage"]
      }];

      var SayCheersMessagePageRoutingModule = function SayCheersMessagePageRoutingModule() {
        _classCallCheck(this, SayCheersMessagePageRoutingModule);
      };

      SayCheersMessagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SayCheersMessagePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/sayCheersModule/say-cheers-message/say-cheers-message.module.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/sayCheersModule/say-cheers-message/say-cheers-message.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: SayCheersMessagePageModule */

    /***/
    function srcAppSayCheersModuleSayCheersMessageSayCheersMessageModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SayCheersMessagePageModule", function () {
        return SayCheersMessagePageModule;
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


      var _say_cheers_message_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./say-cheers-message-routing.module */
      "./src/app/sayCheersModule/say-cheers-message/say-cheers-message-routing.module.ts");
      /* harmony import */


      var _say_cheers_message_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./say-cheers-message.page */
      "./src/app/sayCheersModule/say-cheers-message/say-cheers-message.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var SayCheersMessagePageModule = function SayCheersMessagePageModule() {
        _classCallCheck(this, SayCheersMessagePageModule);
      };

      SayCheersMessagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _say_cheers_message_routing_module__WEBPACK_IMPORTED_MODULE_5__["SayCheersMessagePageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_say_cheers_message_page__WEBPACK_IMPORTED_MODULE_6__["SayCheersMessagePage"]]
      })], SayCheersMessagePageModule);
      /***/
    },

    /***/
    "./src/app/sayCheersModule/say-cheers-message/say-cheers-message.page.scss":
    /*!*********************************************************************************!*\
      !*** ./src/app/sayCheersModule/say-cheers-message/say-cheers-message.page.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSayCheersModuleSayCheersMessageSayCheersMessagePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".cardListDiv .cardDiv {\n  width: 100%;\n  height: auto;\n}\n.cardListDiv .textAreaDiv {\n  width: 100%;\n  position: relative;\n}\n.cardListDiv .textAreaDiv .titleText {\n  font-size: 18px;\n  font-weight: bold;\n}\n.cardListDiv .textAreaDiv .quotesIconDiv {\n  position: absolute;\n  top: -20px;\n}\n.cardListDiv .textAreaDiv ion-textarea {\n  background: #f3f3f5;\n  border-radius: 10px;\n  min-height: 150px;\n  color: #000;\n}\n.textDiv::after {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2F5Q2hlZXJzTW9kdWxlL3NheS1jaGVlcnMtbWVzc2FnZS9zYXktY2hlZXJzLW1lc3NhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQVMsV0FBQTtFQUFXLFlBQUE7QUFFeEI7QUFESTtFQUFhLFdBQUE7RUFBVyxrQkFBQTtBQUs1QjtBQUpRO0VBQVcsZUFBQTtFQUFlLGlCQUFBO0FBUWxDO0FBUFE7RUFBZSxrQkFBQTtFQUFrQixVQUFBO0FBV3pDO0FBVlE7RUFBYSxtQkFBQTtFQUFtQixtQkFBQTtFQUFtQixpQkFBQTtFQUFpQixXQUFBO0FBZ0I1RTtBQVpBO0VBQWdCLGFBQUE7QUFnQmhCIiwiZmlsZSI6InNyYy9hcHAvc2F5Q2hlZXJzTW9kdWxlL3NheS1jaGVlcnMtbWVzc2FnZS9zYXktY2hlZXJzLW1lc3NhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRMaXN0RGl2e1xuICAgIC5jYXJkRGl2e3dpZHRoOjEwMCU7aGVpZ2h0OmF1dG87fVxuICAgIC50ZXh0QXJlYURpdnt3aWR0aDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAudGl0bGVUZXh0e2ZvbnQtc2l6ZToxOHB4O2ZvbnQtd2VpZ2h0OmJvbGQ7fVxuICAgICAgICAucXVvdGVzSWNvbkRpdntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTIwcHg7fVxuICAgICAgICBpb24tdGV4dGFyZWF7YmFja2dyb3VuZDojZjNmM2Y1O2JvcmRlci1yYWRpdXM6MTBweDttaW4taGVpZ2h0OjE1MHB4O2NvbG9yOiMwMDA7fVxuICAgIH1cbn1cblxuLnRleHREaXY6OmFmdGVye2Rpc3BsYXk6bm9uZTt9Il19 */";
      /***/
    },

    /***/
    "./src/app/sayCheersModule/say-cheers-message/say-cheers-message.page.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/sayCheersModule/say-cheers-message/say-cheers-message.page.ts ***!
      \*******************************************************************************/

    /*! exports provided: SayCheersMessagePage */

    /***/
    function srcAppSayCheersModuleSayCheersMessageSayCheersMessagePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SayCheersMessagePage", function () {
        return SayCheersMessagePage;
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


      var _src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../src/assets/constant */
      "./src/assets/constant.ts");
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");
      /* harmony import */


      var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/events.service */
      "./src/app/services/events.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var SayCheersMessagePage = /*#__PURE__*/function () {
        function SayCheersMessagePage(router, apiservices, zone, sendData, eventService, navCtrl, location) {
          _classCallCheck(this, SayCheersMessagePage);

          this.router = router;
          this.apiservices = apiservices;
          this.zone = zone;
          this.sendData = sendData;
          this.eventService = eventService;
          this.navCtrl = navCtrl;
          this.location = location;
          this.textAreaText = "";
          this.cardListData = this.sendData.alldata;
          console.log("card List Data==", this.cardListData);
          this.cardListSettingData = this.sendData.myParam;
          console.log("card List cardListSettingData==", this.cardListSettingData);
          this.pageHeader = this.sendData.myParam.page_header;
        }

        _createClass(SayCheersMessagePage, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            console.log('ionViewDidEnter');
            this.setUIBackButtonAction();
          }
        }, {
          key: "setUIBackButtonAction",
          value: function setUIBackButtonAction() {
            var _this = this;

            this.backButton.onClick = function () {
              console.log('clicked');

              if (_this.apiservices.previewData == false) {
                // this.navCtrl.back();
                _this.location.back();
              } else {
                _this.apiservices.previewData = false;
                _this.pageHeader = _this.sendData.myParam.page_header;
              }
            };
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            //Called once, before the instance is destroyed.
            //Add 'implements OnDestroy' to the class.
            this.apiservices.previewData = false;
            this.pageHeader = this.sendData.myParam.page_header;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "previewPage",
          value: function previewPage() {
            this.apiservices.previewData = true;
            this.pageHeader = this.sendData.myParam.preview_page_header; // this.pageHeader="Preview Page";
          }
        }, {
          key: "goToNext",
          value: function goToNext() {
            var _this2 = this;

            this.zone.run(function () {
              console.log("brand pending api function==");
              var apiKey = {
                "receiver": _this2.cardListData.sayCheersListData.employee_id,
                "category_id": _this2.cardListData.ArrayData.category_id,
                "card_id": _this2.cardListData.listData.card_id,
                "citation": _this2.textAreaText,
                "badge_image": _this2.cardListData.listData.card_image
              }; //following key will be used in apiservice for keeping original comment obj

              var copy_apiKey = {
                "receiver": _this2.cardListData.sayCheersListData.employee_id,
                "category_id": _this2.cardListData.ArrayData.category_id,
                "card_id": _this2.cardListData.listData.card_id,
                "citation": _this2.textAreaText,
                "badge_image": _this2.cardListData.listData.card_image
              };
              console.log("brand pending api keys==", apiKey); // this.apiservices.apiCallWithLoginToken(URLS.submitSayCheers, apiKey).subscribe((result) => {

              _this2.apiservices.apiCallWithLoginTokenComment(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].submitSayCheers, apiKey, copy_apiKey).subscribe(function (result) {
                console.log("brand pending Api Result==", result);

                if (result.status == 1) {
                  _this2.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');

                  console.log("brand detail result==", result);
                  var data = {
                    "commingFrom": "reloadHomeApi",
                    "reloadHomePage": true
                  };

                  _this2.eventService.publishSomeData({
                    data: data
                  });

                  _this2.router.navigate(["/say-cheers-board"]);
                } else {
                  _this2.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this2.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }]);

        return SayCheersMessagePage;
      }();

      SayCheersMessagePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__["DataTransferService"]
        }, {
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_6__["EventsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
        }];
      };

      SayCheersMessagePage.propDecorators = {
        backButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonBackButtonDelegate"], {
            "static": false
          }]
        }]
      };
      SayCheersMessagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-say-cheers-message',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./say-cheers-message.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sayCheersModule/say-cheers-message/say-cheers-message.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./say-cheers-message.page.scss */
        "./src/app/sayCheersModule/say-cheers-message/say-cheers-message.page.scss"))["default"]]
      })], SayCheersMessagePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=sayCheersModule-say-cheers-message-say-cheers-message-module-es5.js.map