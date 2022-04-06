(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-screens-welcome-screens-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome-screens/welcome-screens.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome-screens/welcome-screens.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWelcomeScreensWelcomeScreensPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"welcomeScreenDiv\">\n   <ion-slides pager=\"true\" [options]=\"slideOpts\" #slideWithNav (ionSlideDidChange)=\"slideDidChange()\">\n      <ion-slide *ngFor=\"let data of allData; let ind=index\">\n        <ion-row>\n          <ion-col [size]=\"12\"><img [src]=\"data?.image\"></ion-col>\n          <ion-col [push]=\"1\" [size]=\"10\" class=\"\">\n            <h3 class=\"titleText\" *ngIf=\"data?.title\">{{data?.title}}</h3>\n            <p class=\"subTitleText\" [ngClass]=\"{'adjustText': data?.title==''}\">{{data?.subTitle}}</p>\n          </ion-col>\n        </ion-row>\n        <small class=\"skipBtn\" *ngIf=\"showNextButton==false\" tappable (click)=\"seeLoginPage()\">{{data?.skipText}}</small>\n        <!-- <small *ngIf=\"showPreviewBtn==true\" class=\"preBtn\" tappable (click)=\"seePreSlide()\">{{preButtonText}}</small> -->\n        <small *ngIf=\"showNextButton==true\" class=\"nextBtn\" tappable (click)=\"seeNextSlide()\">{{netButtonText}}</small>\n      </ion-slide>    \n    </ion-slides>\n  </div>\n<!-- <br><br> -->\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/welcome-screens/welcome-screens-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/welcome-screens/welcome-screens-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: WelcomeScreensPageRoutingModule */

    /***/
    function srcAppWelcomeScreensWelcomeScreensRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomeScreensPageRoutingModule", function () {
        return WelcomeScreensPageRoutingModule;
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


      var _welcome_screens_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./welcome-screens.page */
      "./src/app/welcome-screens/welcome-screens.page.ts");

      var routes = [{
        path: '',
        component: _welcome_screens_page__WEBPACK_IMPORTED_MODULE_3__["WelcomeScreensPage"]
      }];

      var WelcomeScreensPageRoutingModule = function WelcomeScreensPageRoutingModule() {
        _classCallCheck(this, WelcomeScreensPageRoutingModule);
      };

      WelcomeScreensPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], WelcomeScreensPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/welcome-screens/welcome-screens.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/welcome-screens/welcome-screens.module.ts ***!
      \***********************************************************/

    /*! exports provided: WelcomeScreensPageModule */

    /***/
    function srcAppWelcomeScreensWelcomeScreensModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomeScreensPageModule", function () {
        return WelcomeScreensPageModule;
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


      var _welcome_screens_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./welcome-screens-routing.module */
      "./src/app/welcome-screens/welcome-screens-routing.module.ts");
      /* harmony import */


      var _welcome_screens_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./welcome-screens.page */
      "./src/app/welcome-screens/welcome-screens.page.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/components.module */
      "./src/app/components/components.module.ts");

      var WelcomeScreensPageModule = function WelcomeScreensPageModule() {
        _classCallCheck(this, WelcomeScreensPageModule);
      };

      WelcomeScreensPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _welcome_screens_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomeScreensPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_welcome_screens_page__WEBPACK_IMPORTED_MODULE_6__["WelcomeScreensPage"]]
      })], WelcomeScreensPageModule);
      /***/
    },

    /***/
    "./src/app/welcome-screens/welcome-screens.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/welcome-screens/welcome-screens.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppWelcomeScreensWelcomeScreensPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".titleText {\n  margin: 10px 0 0 0;\n  font-weight: bold;\n  font-size: 7vw;\n  letter-spacing: 0.5px;\n}\n\n.subTitleText {\n  margin: 5px 0 0 0;\n  font-size: 4.5vw;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n  color: #484848;\n  font-weight: bold;\n}\n\n.adjustText {\n  margin: 30px 0 0 0;\n}\n\n.welcomeScreenDiv {\n  position: relative;\n  width: 100%;\n  height: 90%;\n  margin: 0px;\n}\n\n.welcomeScreenDiv ion-slides {\n  width: 100%;\n  height: 100%;\n}\n\n.welcomeScreenDiv ion-slides img {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.welcomeScreenDiv .nextBtn, .welcomeScreenDiv .skipBtn {\n  position: absolute;\n  right: 0;\n  margin-right: 5%;\n  z-index: 999;\n  color: var(--headerColor);\n  font-weight: bold;\n  text-transform: capitalize;\n}\n\n.welcomeScreenDiv .nextBtn {\n  bottom: 2.5%;\n}\n\n.welcomeScreenDiv .preBtn {\n  bottom: 2.5%;\n  position: absolute;\n  left: 0;\n  margin-left: 5%;\n  color: var(--headerColor);\n  font-weight: bold;\n  text-transform: capitalize;\n}\n\n.welcomeScreenDiv .skipBtn {\n  top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS1zY3JlZW5zL3dlbGNvbWUtc2NyZWVucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVyxrQkFBQTtFQUFrQixpQkFBQTtFQUFpQixjQUFBO0VBQWMscUJBQUE7QUFLNUQ7O0FBSkE7RUFBYyxpQkFBQTtFQUFpQixnQkFBQTtFQUFnQixpQkFBQTtFQUFpQixxQkFBQTtFQUFxQixjQUFBO0VBQWMsaUJBQUE7QUFhbkc7O0FBWkE7RUFBWSxrQkFBQTtBQWdCWjs7QUFkQTtFQUFrQixrQkFBQTtFQUFrQixXQUFBO0VBQVcsV0FBQTtFQUFXLFdBQUE7QUFxQjFEOztBQXBCSTtFQUFXLFdBQUE7RUFBVyxZQUFBO0FBd0IxQjs7QUF2QlE7RUFBSSxXQUFBO0VBQVcsb0JBQUE7S0FBQSxpQkFBQTtBQTJCdkI7O0FBekJJO0VBQW1CLGtCQUFBO0VBQWtCLFFBQUE7RUFBUSxnQkFBQTtFQUFnQixZQUFBO0VBQVkseUJBQUE7RUFDckUsaUJBQUE7RUFBaUIsMEJBQUE7QUFpQ3pCOztBQWhDSTtFQUFTLFlBQUE7QUFtQ2I7O0FBbENJO0VBQVEsWUFBQTtFQUFZLGtCQUFBO0VBQWtCLE9BQUE7RUFBTyxlQUFBO0VBQWUseUJBQUE7RUFDeEQsaUJBQUE7RUFBaUIsMEJBQUE7QUEwQ3pCOztBQXpDSTtFQUFTLE9BQUE7QUE0Q2IiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lLXNjcmVlbnMvd2VsY29tZS1zY3JlZW5zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZVRleHR7bWFyZ2luOjEwcHggMCAwIDA7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LXNpemU6N3Z3O2xldHRlci1zcGFjaW5nOjAuNXB4O31cbi5zdWJUaXRsZVRleHR7bWFyZ2luOjVweCAwIDAgMDtmb250LXNpemU6NC41dnc7bGluZS1oZWlnaHQ6MjBweDtsZXR0ZXItc3BhY2luZzowLjVweDtjb2xvcjojNDg0ODQ4O2ZvbnQtd2VpZ2h0OmJvbGQ7fVxuLmFkanVzdFRleHR7bWFyZ2luOjMwcHggMCAwIDA7fVxuXG4ud2VsY29tZVNjcmVlbkRpdntwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDo5MCU7bWFyZ2luOjBweDtcbiAgICBpb24tc2xpZGVze3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7XG4gICAgICAgIGltZ3t3aWR0aDoxMDAlO29iamVjdC1maXQ6Y292ZXI7fVxuICAgIH1cbiAgICAubmV4dEJ0biwgLnNraXBCdG57cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDttYXJnaW4tcmlnaHQ6NSU7ei1pbmRleDo5OTk7Y29sb3I6dmFyKC0taGVhZGVyQ29sb3IpO1xuICAgICAgICBmb250LXdlaWdodDpib2xkO3RleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO31cbiAgICAubmV4dEJ0bntib3R0b206Mi41JTt9XG4gICAgLnByZUJ0bntib3R0b206Mi41JTtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7bWFyZ2luLWxlZnQ6NSU7Y29sb3I6dmFyKC0taGVhZGVyQ29sb3IpO1xuICAgICAgICBmb250LXdlaWdodDpib2xkO3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemU7fVxuICAgIC5za2lwQnRue3RvcDo1JX1cblxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/welcome-screens/welcome-screens.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/welcome-screens/welcome-screens.page.ts ***!
      \*********************************************************/

    /*! exports provided: WelcomeScreensPage */

    /***/
    function srcAppWelcomeScreensWelcomeScreensPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomeScreensPage", function () {
        return WelcomeScreensPage;
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

      var WelcomeScreensPage = /*#__PURE__*/function () {
        function WelcomeScreensPage(router, zone) {
          _classCallCheck(this, WelcomeScreensPage);

          this.router = router;
          this.zone = zone;
          this.allData = [];
          this.netButtonText = "Next";
          this.preButtonText = "Previous";
          this.showPreviewBtn = false;
          this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            zoom: false,
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true
          };
          this.showNextButton = false;
        }

        _createClass(WelcomeScreensPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.allData = [{
              "image": "../../assets/welcomeScreen/WelcomOne.png",
              "skipText": "Skip",
              "title": "",
              "subTitle": "Welcome to your workspace"
            }, {
              "image": "../../assets/welcomeScreen/WelcomThird.png",
              "skipText": "Skip",
              "title": "Say Cheers",
              "subTitle": "Say Cheers to your peers for a job done well."
            }, {
              "image": "../../assets/welcomeScreen/WelcomTwo.png",
              "skipText": "Skip",
              "title": "Newsfeed",
              "subTitle": "Find the latest company updates and connect with your colleagues."
            }];
          }
        }, {
          key: "slideDidChange",
          value: function slideDidChange() {
            var _this = this;

            this.zone.run(function () {
              console.log('swipeChange==');
              _this.showPreviewBtn = true;

              _this.slideWithNav.isEnd().then(function (val) {
                if (val == true) {
                  _this.showNextButton = val;
                  console.log("next button==", _this.showNextButton); // this.router.navigate(['/organisation-name']);
                  // this.netButtonText="Start";

                  _this.netButtonText = "Next";
                } else {
                  // this.netButtonText="Next";
                  _this.showNextButton = val;
                  _this.netButtonText = "";
                }
              });

              _this.slideWithNav.getActiveIndex().then(function (num) {
                console.log('swipeChange num==', num);

                if (num < 1) {
                  _this.showPreviewBtn = false;
                } else {
                  _this.showPreviewBtn = true;
                }
              });
            });
          }
        }, {
          key: "seeNextSlide",
          value: function seeNextSlide() {
            var _this2 = this;

            this.zone.run(function () {
              _this2.slideWithNav.isEnd().then(function (val) {
                if (val == true) {
                  _this2.router.navigate(['/login']); // this.router.navigate(['/organisation-name']);

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
                      _this3.netButtonText = "Next";
                    });
                  });
                } else {
                  _this3.showPreviewBtn = false;
                }
              });
            });
          }
        }, {
          key: "seeLoginPage",
          value: function seeLoginPage() {
            var _this4 = this;

            this.zone.run(function () {
              // this.router.navigate(['/organisation-name']);
              // this.router.navigate(['/award-list']);
              _this4.router.navigate(['/login']);
            });
          }
        }]);

        return WelcomeScreensPage;
      }();

      WelcomeScreensPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      WelcomeScreensPage.propDecorators = {
        slideWithNav: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['slideWithNav', {
            "static": false
          }]
        }]
      };
      WelcomeScreensPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome-screens',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./welcome-screens.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome-screens/welcome-screens.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./welcome-screens.page.scss */
        "./src/app/welcome-screens/welcome-screens.page.scss"))["default"]]
      })], WelcomeScreensPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=welcome-screens-welcome-screens-module-es5.js.map