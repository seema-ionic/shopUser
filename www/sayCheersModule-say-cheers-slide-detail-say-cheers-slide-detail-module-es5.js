(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sayCheersModule-say-cheers-slide-detail-say-cheers-slide-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/sayCheersModule/say-cheers-slide-detail/say-cheers-slide-detail.page.html":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sayCheersModule/say-cheers-slide-detail/say-cheers-slide-detail.page.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSayCheersModuleSayCheersSlideDetailSayCheersSlideDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{cheerBoardData?.pageHeader?.page_header}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bodyColor\">\n  <div *ngIf=\"cheerBoardData && cheerBoardData?.allData && showData\" class=\"commonPagePadding cheersMainDiv\" >\n    <!-- [options]=\"cheersSlide\" -->\n    <ion-slides class=\"trendingSlides\" #slideWithNav [options]=\"cheersSlide\" initialSlide=\"{{cheerBoardData?.index}}\" \n    (ionSlideDidChange)=\"ionSlideDidChange()\" (ionSlideWillChange)=\"slideChangeDetect()\" >\n      <ion-slide style=\"padding:0 10px;\" *ngFor=\"let cheerData of cheerBoardData?.allData ; let ind = index\">\n        <div class=\"slideDiv\">\n          <div class=\"customCard noMargin\">\n            <!-- upper card image discription user Start -->\n            <div tappable (click)=\"goToMessage(cheerData, false)\">\n              <ion-row>\n                <ion-col [size]=\"4\" class=\"ion-text-center\">\n                  <div class=\"cheerUserImg\">\n                    <div class=\"userImgIcon\">\n                      <app-image-view [img]=\"cheerData?.receiver_profile\" [imageView]=\"false\" class=\"circleCoverIcon\" ></app-image-view>\n                    </div>\n                    <p class=\"noMargin nameText\">{{cheerData?.receiver_name}}</p>\n                    <p class=\"noMargin positionText\">{{cheerData?.receiver_designation}}</p>\n                  </div>\n                </ion-col>\n                <ion-col [size]=\"7\" class=\"ion-text-center\">\n                  <div class=\"cardSendImgDiv\">\n                    <app-image-view [img]=\"cheerData?.card_image\" [imageView]=\"false\" class=\"radiusFullImage\" ></app-image-view>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-row class=\"ion-margin-bottom\">\n                <ion-col [size]=\"12\" class=\"ion-text-left\">\n                  <div class=\"textDiv\">\n                    <div class=\"quotesIconDiv\"><img src=\"../../assets/icon/quotIcon.png\"></div>\n                    <!-- use this class \"textCompoDiv\" if they want to manage font size -->\n                    <app-text-layout [text]=\"cheerData?.citation\" class=\"\" style=\"white-space:pre-wrap;\" [className]=\"\"></app-text-layout>\n                    <!-- <app-text-layout-read-more style=\"white-space:pre-wrap;\" [text]=\"cheerData?.citation\" class=\"\" [className]=\"\"></app-text-layout-read-more> -->\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col [size]=\"8\" style=\"position:relative;\">\n                  <div style=\"position:absolute;bottom:5px;left:10px;\">\n                    <app-text-layout [text]=\"cheerData?.badgesent_date\" class=\"\" style=\"font-size:14px;color:gray;\" [className]=\"\"></app-text-layout>\n                  </div>\n                </ion-col>\n                <ion-col [size]=\"4\" class=\"ion-text-center\">\n                  <div class=\"cheerUserImg\">\n                    <div class=\"userImgIcon\">\n                      <app-image-view [img]=\"cheerData?.sender_profile\" [imageView]=\"false\" class=\"circleCoverIcon\" ></app-image-view>\n                    </div>\n                    <p class=\"noMargin nameText\">{{cheerData?.sender_name}}</p>\n                    <p class=\"noMargin positionText\">{{cheerData?.sender_designation}}</p>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </div>\n            <!-- upper card image discription user End -->\n            <!-- show like and comment start -->\n            <ion-row>\n              <ion-col [size]=\"12\">\n                <div *ngIf=\"cheerData\">\n                  <show-comment [allCommentObj]=\"cheerData\" [showLikeList]=\"'false'\" [showCommentList]=\"'false'\" [showAutoScroll]=\"'true'\" [redirectPage]=\"'say-cheers-detail'\"></show-comment>\n                </div>\n              </ion-col>\n            </ion-row>\n            <!-- show like and comment start -->\n          </div>\n        </div>\n        <!-- <ion-row>\n          <ion-col [size]=\"12\" class=\"ion-text-right\"><p>{{i+1}} / {{cheerBoardData?.length}}</p></ion-col>\n        </ion-row> -->\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n\n  <div *ngIf=\"!cheerBoardData && !cheerBoardData?.allData && showData==false\">\n    <app-skelton-listview [iconPath]=\"'cheerBadgesDetail'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n\n  <div class=\"overDiv\">\n    <div class=\"leftDiv\" tappable (click)=\"seePreSlide()\"></div>\n    <div class=\"rightDiv\" tappable (click)=\"seeNextSlide()\"></div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/sayCheersModule/say-cheers-slide-detail/say-cheers-slide-detail-routing.module.ts":
    /*!***************************************************************************************************!*\
      !*** ./src/app/sayCheersModule/say-cheers-slide-detail/say-cheers-slide-detail-routing.module.ts ***!
      \***************************************************************************************************/

    /*! exports provided: SayCheersSlideDetailPageRoutingModule */

    /***/
    function srcAppSayCheersModuleSayCheersSlideDetailSayCheersSlideDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SayCheersSlideDetailPageRoutingModule", function () {
        return SayCheersSlideDetailPageRoutingModule;
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


      var _say_cheers_slide_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./say-cheers-slide-detail.page */
      "./src/app/sayCheersModule/say-cheers-slide-detail/say-cheers-slide-detail.page.ts");

      var routes = [{
        path: '',
        component: _say_cheers_slide_detail_page__WEBPACK_IMPORTED_MODULE_3__["SayCheersSlideDetailPage"]
      }];

      var SayCheersSlideDetailPageRoutingModule = function SayCheersSlideDetailPageRoutingModule() {
        _classCallCheck(this, SayCheersSlideDetailPageRoutingModule);
      };

      SayCheersSlideDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SayCheersSlideDetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/sayCheersModule/say-cheers-slide-detail/say-cheers-slide-detail.module.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/sayCheersModule/say-cheers-slide-detail/say-cheers-slide-detail.module.ts ***!
      \*******************************************************************************************/

    /*! exports provided: SayCheersSlideDetailPageModule */

    /***/
    function srcAppSayCheersModuleSayCheersSlideDetailSayCheersSlideDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SayCheersSlideDetailPageModule", function () {
        return SayCheersSlideDetailPageModule;
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


      var _say_cheers_slide_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./say-cheers-slide-detail-routing.module */
      "./src/app/sayCheersModule/say-cheers-slide-detail/say-cheers-slide-detail-routing.module.ts");
      /* harmony import */


      var _say_cheers_slide_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./say-cheers-slide-detail.page */
      "./src/app/sayCheersModule/say-cheers-slide-detail/say-cheers-slide-detail.page.ts");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var SayCheersSlideDetailPageModule = function SayCheersSlideDetailPageModule() {
        _classCallCheck(this, SayCheersSlideDetailPageModule);
      };

      SayCheersSlideDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _say_cheers_slide_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["SayCheersSlideDetailPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_say_cheers_slide_detail_page__WEBPACK_IMPORTED_MODULE_6__["SayCheersSlideDetailPage"]]
      })], SayCheersSlideDetailPageModule);
      /***/
    },

    /***/
    "./src/app/sayCheersModule/say-cheers-slide-detail/say-cheers-slide-detail.page.scss":
    /*!*******************************************************************************************!*\
      !*** ./src/app/sayCheersModule/say-cheers-slide-detail/say-cheers-slide-detail.page.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppSayCheersModuleSayCheersSlideDetailSayCheersSlideDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".commonPagePadding, .trendingSlides, ion-slide {\n  --width: 100% !important;\n}\n\napp-text-layout {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n\n.bodyColor {\n  --ion-background-color:var(--headerLightColor);\n  position: relative;\n}\n\n.bodyColor .overDiv {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  z-index: -1;\n}\n\n.bodyColor .overDiv .leftDiv {\n  height: 100%;\n  width: 50%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.bodyColor .overDiv .rightDiv {\n  height: 100%;\n  width: 50%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.slideDiv {\n  max-width: 100%;\n}\n\n.cheersMainDiv {\n  padding: 0px;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.nameText {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  font-size: 3vw;\n}\n\n.positionText {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2F5Q2hlZXJzTW9kdWxlL3NheS1jaGVlcnMtc2xpZGUtZGV0YWlsL3NheS1jaGVlcnMtc2xpZGUtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUFpRCx3QkFBQTtBQUxqRDs7QUFNQTtFQVBJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBR2dDO0FBRXBDOztBQURBO0VBQVcsOENBQUE7RUFBK0Msa0JBQUE7QUFNMUQ7O0FBTEk7RUFBUyxrQkFBQTtFQUFrQixPQUFBO0VBQU8sTUFBQTtFQUFNLFNBQUE7RUFBUyxZQUFBO0VBQVksV0FBQTtFQUFXLFdBQUE7QUFjNUU7O0FBYlE7RUFBUyxZQUFBO0VBQVksVUFBQTtFQUFVLGtCQUFBO0VBQWtCLE9BQUE7RUFBTyxNQUFBO0VBQU0sU0FBQTtBQXFCdEU7O0FBcEJRO0VBQVUsWUFBQTtFQUFZLFVBQUE7RUFBVSxrQkFBQTtFQUFrQixRQUFBO0VBQVEsTUFBQTtFQUFNLFNBQUE7QUE0QnhFOztBQXpCQTtFQUFVLGVBQUE7QUE2QlY7O0FBNUJBO0VBQWUsWUFBQTtFQUFZLGtCQUFBO0VBQWtCLFFBQUE7RUFBUSwyQkFBQTtBQW1DckQ7O0FBakNBO0VBakJJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBYTBCO0VBQUcsY0FBQTtBQTBDakM7O0FBekNBO0VBbEJJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBYzhCO0FBaURsQyIsImZpbGUiOiJzcmMvYXBwL3NheUNoZWVyc01vZHVsZS9zYXktY2hlZXJzLXNsaWRlLWRldGFpbC9zYXktY2hlZXJzLXNsaWRlLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gbGluZS1jbGFtcCgkbGluZXMpIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiRsaW5lcztcbn1cbi5jb21tb25QYWdlUGFkZGluZywgLnRyZW5kaW5nU2xpZGVzICwgaW9uLXNsaWRlIHstLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7fVxuYXBwLXRleHQtbGF5b3V0e0BpbmNsdWRlIGxpbmUtY2xhbXAoMil9XG4uYm9keUNvbG9yey0taW9uLWJhY2tncm91bmQtY29sb3I6dmFyKC0taGVhZGVyTGlnaHRDb2xvcik7cG9zaXRpb246cmVsYXRpdmU7XG4gICAgLm92ZXJEaXZ7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO2JvdHRvbTowO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7ei1pbmRleDogLTE7XG4gICAgICAgIC5sZWZ0RGl2e2hlaWdodDoxMDAlO3dpZHRoOjUwJTtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7Ym90dG9tOjA7fVxuICAgICAgICAucmlnaHREaXZ7aGVpZ2h0OjEwMCU7d2lkdGg6NTAlO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7fVxuICAgIH1cbn1cbi5zbGlkZURpdnttYXgtd2lkdGg6IDEwMCU7fVxuLmNoZWVyc01haW5EaXZ7cGFkZGluZzowcHg7cG9zaXRpb246cmVsYXRpdmU7dG9wOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt9XG5cbi5uYW1lVGV4dHtAaW5jbHVkZSBsaW5lLWNsYW1wKDIpO2ZvbnQtc2l6ZTozdnc7fVxuLnBvc2l0aW9uVGV4dHtAaW5jbHVkZSBsaW5lLWNsYW1wKDEpO31cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/sayCheersModule/say-cheers-slide-detail/say-cheers-slide-detail.page.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/sayCheersModule/say-cheers-slide-detail/say-cheers-slide-detail.page.ts ***!
      \*****************************************************************************************/

    /*! exports provided: SayCheersSlideDetailPage */

    /***/
    function srcAppSayCheersModuleSayCheersSlideDetailSayCheersSlideDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SayCheersSlideDetailPage", function () {
        return SayCheersSlideDetailPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../src/assets/constant */
      "./src/assets/constant.ts");
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");

      var SayCheersSlideDetailPage = /*#__PURE__*/function () {
        // request_tab:any;
        function SayCheersSlideDetailPage(router, apiservices, zone, sendData) {
          _classCallCheck(this, SayCheersSlideDetailPage);

          this.router = router;
          this.apiservices = apiservices;
          this.zone = zone;
          this.sendData = sendData;
          this.showData = false;
          this.myinfiniteScrollCall = false; // @ViewChild(Slides) slides:Slides;

          this.activeSliderIndexDetect = 0;
          this.cheerBoardData = this.sendData.sayCheers; // this.request_tab=this.sendData.myParam;

          console.log('clicked', this.cheerBoardData);
          this.showData = true;
          this.cheersSlide = {
            speed: "500",
            initialSlide: this.cheerBoardData.index,
            slidesPerView: 1,
            spaceBetween: 10,
            pager: true
          };
        }

        _createClass(SayCheersSlideDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToMessage",
          value: function goToMessage(cheerData, scrollValue) {
            var _this = this;

            this.zone.run(function () {
              _this.sendData.myParam = cheerData;
              _this.sendData.autoScroll = scrollValue;

              _this.router.navigate(["/say-cheers-detail"]);
            });
          }
        }, {
          key: "seeNextSlide",
          value: function seeNextSlide(ind) {
            var _this2 = this;

            this.zone.run(function () {
              _this2.sliderIndex = ind;
              console.log('clicked', ind);

              _this2.slideWithNav.isEnd().then(function (val) {
                if (val == true) {// this.router.navigate(['/enternumber']);
                } else {
                  _this2.slideWithNav.slideNext(500, true);
                }
              });
            });
          }
        }, {
          key: "seePreSlide",
          value: function seePreSlide() {
            var _this3 = this;

            this.zone.run(function () {
              _this3.slideWithNav.getActiveIndex().then(function (num) {
                console.log('preview Slider==', num);

                if (num >= 1) {
                  _this3.slideWithNav.lockSwipes(false).then(function () {
                    _this3.slideWithNav.slideTo(num - 1, 500, true).then(function () {
                      console.log('goBack slide sucessfully');
                    });
                  });
                }
              });
            });
          }
        }, {
          key: "slideChangeDetect",
          value: function slideChangeDetect() {
            var _this4 = this;

            this.zone.run(function () {
              var _a, _b;

              console.log("index==", _this4.activeSliderIndexDetect);

              if (_this4.cheerBoardData.allData.length >= 10) {
                if (_this4.activeSliderIndexDetect == ((_a = _this4.cheerBoardData) === null || _a === void 0 ? void 0 : _a.allData.length) - 5) {
                  _this4.value = (_b = _this4.cheerBoardData) === null || _b === void 0 ? void 0 : _b.allData.length;

                  _this4.leaderCheerData();
                }
              }
            });
          }
        }, {
          key: "ionSlideDidChange",
          value: function ionSlideDidChange() {
            var _this5 = this;

            this.zone.run(function () {
              console.log("this is ionSlideDidChange2");
              setTimeout(function () {
                // this.activeSliderIndexDetect = this.slides.getActiveIndex();
                console.log("thought auto id 1==", _this5.activeSliderIndexDetect);
              }, 500); // this.CommentDetailsList();

              _this5.slideWithNav.isEnd().then(function (res) {
                if (res == true) {
                  _this5.value = _this5.cheerBoardData.allData.length;

                  _this5.leaderCheerData();
                }
              });
            });
          }
        }, {
          key: "leaderCheerData",
          value: function leaderCheerData() {
            var _this6 = this;

            this.zone.run(function () {
              console.log("noticeBoard List api call function");
              var apikey = {
                // "request_tab":this.request_tab,
                "limit": _this6.value
              };

              _this6.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].leaderCheerApiUrl, apikey).subscribe(function (result) {
                console.log("noticeBoard List api result==", result);

                if (result.status == 1 || result.status == '1') {
                  _this6.cheerBoardData.allData = _this6.cheerBoardData.allData.concat(result.data.boardlist.board_list);
                  console.log("this.cheerBoardData.allData==", _this6.cheerBoardData.allData);
                } else {
                  console.log("noticeBoard List api error==", result);
                }
              }, function (err) {
                _this6.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }]);

        return SayCheersSlideDetailPage;
      }();

      SayCheersSlideDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__["DataTransferService"]
        }];
      };

      SayCheersSlideDetailPage.propDecorators = {
        slideWithNav: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['slideWithNav', {
            "static": false
          }]
        }],
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"]]
        }]
      };
      SayCheersSlideDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-say-cheers-slide-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./say-cheers-slide-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/sayCheersModule/say-cheers-slide-detail/say-cheers-slide-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./say-cheers-slide-detail.page.scss */
        "./src/app/sayCheersModule/say-cheers-slide-detail/say-cheers-slide-detail.page.scss"))["default"]]
      })], SayCheersSlideDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=sayCheersModule-say-cheers-slide-detail-say-cheers-slide-detail-module-es5.js.map