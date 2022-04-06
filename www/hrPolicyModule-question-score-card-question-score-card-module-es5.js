(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hrPolicyModule-question-score-card-question-score-card-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/hrPolicyModule/question-score-card/question-score-card.page.html":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hrPolicyModule/question-score-card/question-score-card.page.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHrPolicyModuleQuestionScoreCardQuestionScoreCardPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"PickProfileImageDiv\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\" class=\"headerUserImg\">\n      <ion-icon name=\"close\" style=\"color:grey;font-size:40px;margin:20px 10px 0px 0;\" tappable (click)=\"hardWareBackButton()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"submitQuizData?.data?.result=='0'\" class=\"commonPagePadding\">\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <img style=\"width:100px;\" [src]=\"submitQuizData?.settings?.error_icon\">\n      </ion-col>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <div class=\"contentText\">\n          <p class=\"titleText\">{{submitQuizData?.settings?.error_title}}</p>\n          <p class=\"noMargin subTitleText\">{{submitQuizData?.settings?.error_msg}}</p>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col [size]=\"12\">\n        <div class=\"customCard\">\n          <ion-row class=\"progressRowDiv\">\n            <ion-col [push]=\"3\" [size]=\"6\" class=\"ion-text-center\">\n              <div class=\"progressDiv\">\n                <p><span class=\"resultText\">{{submitQuizData?.data?.scorecard?.score}}/</span><span>{{submitQuizData?.data?.scorecard?.base_score}}</span></p>\n                <circle-progress [percent]=\"progressPercentage\" [radius]=\"70\" [outerStrokeWidth]=\"7\" [innerStrokeWidth]=\"2\" \n                  [outerStrokeColor]=\"'var(--headerColor)'\" [innerStrokeColor]=\"'transparent'\" [animation]=\"true\" [animationDuration]=\"1000\">\n                </circle-progress>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col [size]=\"12\"  *ngIf=\"submitQuizData?.data?.retake_enable==1 || submitQuizData?.data?.retake_enable=='1'\" class=\"ion-text-center\">\n        <ion-button class=\"dynamicButtonColor\" tappable (click)=\"goToNext('retake')\">{{submitQuizData?.settings?.retake_button_text}}</ion-button>\n      </ion-col>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <ion-button class=\"dynamicButtonColor\" tappable (click)=\"goToNext('submit')\">{{submitQuizData?.settings?.again_read_text}}</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n\n\n\n\n\n  <div *ngIf=\"submitQuizData?.data?.result=='1'\" class=\"commonPagePadding\">\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <img *ngIf=\"submitQuizData?.data?.result=='1'\" style=\"width:100px;\" [src]=\"submitQuizData?.settings?.success_icon\">\n      </ion-col>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <div class=\"contentText\">\n          <p class=\"titleText\">{{submitQuizData?.settings?.success_title}}</p>\n          <p class=\"noMargin subTitleText\">{{submitQuizData?.settings?.success_msg}}</p>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col [size]=\"12\">\n        <div class=\"customCard\">\n          <ion-row class=\"progressRowDiv\">\n            <ion-col [push]=\"3\" [size]=\"6\" class=\"ion-text-center\">\n              <div class=\"progressDiv\">\n                <p><span class=\"resultText\">{{submitQuizData?.data?.scorecard?.score}}/</span><span>{{submitQuizData?.data?.scorecard?.base_score}}</span></p>\n                <circle-progress [percent]=\"progressPercentage\" [radius]=\"70\" [outerStrokeWidth]=\"7\" [innerStrokeWidth]=\"2\" \n                  [outerStrokeColor]=\"'var(--headerColor)'\" [innerStrokeColor]=\"'transparent'\" [animation]=\"true\" [animationDuration]=\"1000\">\n                </circle-progress>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-text-center\">\n        <ion-button class=\"dynamicButtonColor\" tappable (click)=\"successButton()\">{{submitQuizData?.settings?.success_btn_text}}</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/hrPolicyModule/question-score-card/question-score-card-routing.module.ts":
    /*!******************************************************************************************!*\
      !*** ./src/app/hrPolicyModule/question-score-card/question-score-card-routing.module.ts ***!
      \******************************************************************************************/

    /*! exports provided: QuestionScoreCardPageRoutingModule */

    /***/
    function srcAppHrPolicyModuleQuestionScoreCardQuestionScoreCardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionScoreCardPageRoutingModule", function () {
        return QuestionScoreCardPageRoutingModule;
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


      var _question_score_card_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./question-score-card.page */
      "./src/app/hrPolicyModule/question-score-card/question-score-card.page.ts");

      var routes = [{
        path: '',
        component: _question_score_card_page__WEBPACK_IMPORTED_MODULE_3__["QuestionScoreCardPage"]
      }];

      var QuestionScoreCardPageRoutingModule = function QuestionScoreCardPageRoutingModule() {
        _classCallCheck(this, QuestionScoreCardPageRoutingModule);
      };

      QuestionScoreCardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], QuestionScoreCardPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/hrPolicyModule/question-score-card/question-score-card.module.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/hrPolicyModule/question-score-card/question-score-card.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: QuestionScoreCardPageModule */

    /***/
    function srcAppHrPolicyModuleQuestionScoreCardQuestionScoreCardModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionScoreCardPageModule", function () {
        return QuestionScoreCardPageModule;
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


      var _question_score_card_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./question-score-card-routing.module */
      "./src/app/hrPolicyModule/question-score-card/question-score-card-routing.module.ts");
      /* harmony import */


      var _question_score_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./question-score-card.page */
      "./src/app/hrPolicyModule/question-score-card/question-score-card.page.ts");
      /* harmony import */


      var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-circle-progress */
      "./node_modules/ng-circle-progress/__ivy_ngcc__/fesm2015/ng-circle-progress.js");
      /* harmony import */


      var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/components/components.module */
      "./src/app/components/components.module.ts");

      var QuestionScoreCardPageModule = function QuestionScoreCardPageModule() {
        _classCallCheck(this, QuestionScoreCardPageModule);
      };

      QuestionScoreCardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _question_score_card_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuestionScoreCardPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["NgCircleProgressModule"].forRoot()],
        declarations: [_question_score_card_page__WEBPACK_IMPORTED_MODULE_6__["QuestionScoreCardPage"]]
      })], QuestionScoreCardPageModule);
      /***/
    },

    /***/
    "./src/app/hrPolicyModule/question-score-card/question-score-card.page.scss":
    /*!**********************************************************************************!*\
      !*** ./src/app/hrPolicyModule/question-score-card/question-score-card.page.scss ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHrPolicyModuleQuestionScoreCardQuestionScoreCardPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".contentText .titleText {\n  font-weight: bold;\n  font-size: 20px;\n  margin: 10px 0;\n}\n.contentText .subTitleText {\n  font-weight: bold;\n  font-size: 17px;\n  color: #717171;\n  line-height: 22px;\n  margin: 0px;\n}\n.progressDiv {\n  position: relative;\n  width: 160px;\n}\n.progressDiv p {\n  position: absolute;\n  margin: auto;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 20px;\n}\n.progressDiv p .resultText {\n  color: var(--headerColor);\n  font-weight: bold;\n  font-size: 25px;\n}\n.progressDiv::before {\n  content: \"\";\n  position: absolute;\n  margin: 0;\n  top: 49%;\n  left: 51%;\n  bottom: 0;\n  right: 0;\n  background: #fff;\n  transform: translate(-50%, -50%);\n  width: 110px;\n  height: 110px;\n  border-radius: 50%;\n  border: 3px solid var(--headerColor);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHJQb2xpY3lNb2R1bGUvcXVlc3Rpb24tc2NvcmUtY2FyZC9xdWVzdGlvbi1zY29yZS1jYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFXLGlCQUFBO0VBQWlCLGVBQUE7RUFBZSxjQUFBO0FBRy9DO0FBRkk7RUFBYyxpQkFBQTtFQUFpQixlQUFBO0VBQWUsY0FBQTtFQUFjLGlCQUFBO0VBQWlCLFdBQUE7QUFTakY7QUFOQTtFQUFhLGtCQUFBO0VBQWtCLFlBQUE7QUFXL0I7QUFWSTtFQUFFLGtCQUFBO0VBQWtCLFlBQUE7RUFBWSxRQUFBO0VBQVEsU0FBQTtFQUFTLGdDQUFBO0VBQWdDLGVBQUE7QUFrQnJGO0FBakJRO0VBQVkseUJBQUE7RUFBeUIsaUJBQUE7RUFBaUIsZUFBQTtBQXNCOUQ7QUFuQkE7RUFBcUIsV0FBQTtFQUFXLGtCQUFBO0VBQWtCLFNBQUE7RUFBUyxRQUFBO0VBQVEsU0FBQTtFQUFTLFNBQUE7RUFBUyxRQUFBO0VBQVEsZ0JBQUE7RUFDekYsZ0NBQUE7RUFBZ0MsWUFBQTtFQUFZLGFBQUE7RUFBYSxrQkFBQTtFQUFrQixvQ0FBQTtBQWtDL0UiLCJmaWxlIjoic3JjL2FwcC9oclBvbGljeU1vZHVsZS9xdWVzdGlvbi1zY29yZS1jYXJkL3F1ZXN0aW9uLXNjb3JlLWNhcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnRUZXh0e1xuICAgIC50aXRsZVRleHR7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LXNpemU6MjBweDttYXJnaW46MTBweCAwO31cbiAgICAuc3ViVGl0bGVUZXh0e2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjE3cHg7Y29sb3I6IzcxNzE3MTtsaW5lLWhlaWdodDoyMnB4O21hcmdpbjowcHg7fVxufVxuXG4ucHJvZ3Jlc3NEaXZ7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTYwcHg7XG4gICAgcHtwb3NpdGlvbjphYnNvbHV0ZTttYXJnaW46YXV0bzt0b3A6NTAlO2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgLTUwJSk7Zm9udC1zaXplOjIwcHg7XG4gICAgICAgIC5yZXN1bHRUZXh0e2NvbG9yOnZhcigtLWhlYWRlckNvbG9yKTtmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToyNXB4O31cbiAgICB9XG59XG4ucHJvZ3Jlc3NEaXY6OmJlZm9yZXtjb250ZW50OlwiXCI7cG9zaXRpb246YWJzb2x1dGU7bWFyZ2luOjA7dG9wOjQ5JTtsZWZ0OjUxJTtib3R0b206MDtyaWdodDowO2JhY2tncm91bmQ6I2ZmZjtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsIC01MCUpO3dpZHRoOjExMHB4O2hlaWdodDoxMTBweDtib3JkZXItcmFkaXVzOjUwJTtib3JkZXI6M3B4IHNvbGlkIHZhcigtLWhlYWRlckNvbG9yKTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/hrPolicyModule/question-score-card/question-score-card.page.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/hrPolicyModule/question-score-card/question-score-card.page.ts ***!
      \********************************************************************************/

    /*! exports provided: QuestionScoreCardPage */

    /***/
    function srcAppHrPolicyModuleQuestionScoreCardQuestionScoreCardPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuestionScoreCardPage", function () {
        return QuestionScoreCardPage;
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


      var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../src/assets/constant */
      "./src/assets/constant.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var src_app_services_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/events.service */
      "./src/app/services/events.service.ts");

      var QuestionScoreCardPage = /*#__PURE__*/function () {
        function QuestionScoreCardPage(apiservices, router, zone, eventService, menuCtrl, sendData, location) {
          _classCallCheck(this, QuestionScoreCardPage);

          this.apiservices = apiservices;
          this.router = router;
          this.zone = zone;
          this.eventService = eventService;
          this.menuCtrl = menuCtrl;
          this.sendData = sendData;
          this.location = location;
          this.progressPercentage = 0;
          this.policyData = this.sendData.alldata;
          console.log("policy data==", this.policyData);
          this.hrPolicyDetailData = this.sendData.hrPolicyDetailAllData;
          console.log("hr Policy Detail Array Redirection==", this.hrPolicyDetailData);
          this.submitQuizData = this.sendData.quizData;
          console.log("submit Quiz then API response all Data==", this.submitQuizData); // this.submitQuizData.min_score=this.submitQuizData.scorecard.base_score/this.submitQuizData.scorecard.score;

          this.progressPercentage = this.submitQuizData.data.scorecard.score / this.submitQuizData.data.scorecard.base_score * 100;
          console.log("get percentage==", this.progressPercentage);
          this.commingData = this.sendData.commingPageName;
          console.log("comming from which page==", this.commingData);
        }

        _createClass(QuestionScoreCardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "hardWareBackButton",
          value: function hardWareBackButton() {
            var _this = this;

            this.zone.run(function () {
              _this.apiservices.hrPolicyCount = _this.apiservices.hrPolicyCount - 1;

              if (_this.commingData.commingFrom == "hrPolicyList") {
                var data = {
                  "commingFrom": "quizScoreCard",
                  "reloadPage": true
                };

                _this.eventService.publishSomeData({
                  data: data
                });

                _this.apiservices.hrPolicyCount = 0;

                _this.router.navigate(["/hr-policy-detail"]);
              } else {
                var _data = {
                  "commingFrom": "reloadHomeApi",
                  "reloadHomePage": true
                };

                _this.eventService.publishSomeData({
                  data: _data
                });

                _this.apiservices.hrPolicyCount = 0;

                _this.router.navigate(["/tabs/tab1"]);
              }
            });
          }
        }, {
          key: "goToNext",
          value: function goToNext(value) {
            var _this2 = this;

            this.zone.run(function () {
              if (value == "retake") {
                var data = {
                  "commingFrom": "retakeQuiz",
                  "reloadPage": true
                };

                _this2.eventService.publishSomeData({
                  data: data
                });

                _this2.apiservices.hrPolicyCount = _this2.apiservices.hrPolicyCount - 1;

                _this2.location.back();
              } else {
                var apiKey = {
                  "hrpolicy_id": _this2.policyData.hrpolicy_id
                };
                console.log("Quiz Question List api keys==", apiKey);

                _this2.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].hrPolicyRetakeQuiz, apiKey).subscribe(function (result) {
                  console.log("Quiz Question List Api Result==", result);

                  if (result.status == 1 || result.status == '1') {
                    _this2.apiservices.hrPolicyCount = 0;

                    _this2.router.navigate(["/hr-policy-detail"]);
                  } else {
                    _this2.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                  }
                }, function (err) {
                  _this2.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
              }
            });
          }
        }, {
          key: "successButton",
          value: function successButton() {
            // this.apiservices.hrPolicyCount=this.apiservices.hrPolicyCount+1;
            if (this.hrPolicyDetailData.length > 0) {
              if (this.apiservices.hrPolicyCount == this.hrPolicyDetailData.length) {
                var data = {
                  "commingFrom": "reloadHomeApi",
                  "reloadHomePage": true
                };
                this.eventService.publishSomeData({
                  data: data
                });

                if (this.commingData.commingFrom == "hrPolicyList") {
                  this.router.navigate(["/hr-policy-list"]);
                } else {
                  this.router.navigate(["/tabs/tab1"]);
                } // this.router.navigate(["/hr-policy-list"]);


                this.policyData.action = "0";
              } else {
                this.sendData.alldata = this.policyData;
                this.sendData.myParam = this.hrPolicyDetailData[this.apiservices.hrPolicyCount];
                this.sendData.hrPolicyDetailAllData = this.hrPolicyDetailData;
                this.sendData.commingPageName = this.commingData;
                this.router.navigate([this.hrPolicyDetailData[this.apiservices.hrPolicyCount].data.redirect_page]);
              }
            }
          }
        }]);

        return QuestionScoreCardPage;
      }();

      QuestionScoreCardPage.ctorParameters = function () {
        return [{
          type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: src_app_services_events_service__WEBPACK_IMPORTED_MODULE_8__["EventsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__["DataTransferService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]
        }];
      };

      QuestionScoreCardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question-score-card',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./question-score-card.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/hrPolicyModule/question-score-card/question-score-card.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./question-score-card.page.scss */
        "./src/app/hrPolicyModule/question-score-card/question-score-card.page.scss"))["default"]]
      })], QuestionScoreCardPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=hrPolicyModule-question-score-card-question-score-card-module-es5.js.map