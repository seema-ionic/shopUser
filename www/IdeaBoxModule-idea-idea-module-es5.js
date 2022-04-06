(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["IdeaBoxModule-idea-idea-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/IdeaBoxModule/idea/idea.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/IdeaBoxModule/idea/idea.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppIdeaBoxModuleIdeaIdeaPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{tab1PageData?.title}}</ion-title>\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"his\" (click)=\"gotoHistory()\">\n        <img [src]=\"tab1PageData?.header_history_icon\"/> &nbsp;History</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col>\n      <div style=\"position: relative;\">\n        <img [src]=\"tab1PageData?.header_image\" class=\"bgImage\">\n        <div [innerHTML]=\"tab1PageData?.header_image_text\" class=\"textVal\"></div>\n      </div>\n     \n    </ion-col>\n  </ion-row>\n  <div class=\"ion-padding\">\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <ion-select class=\"borderDiv\" [(ngModel)]=\"categoryVal\" placeholder=\"Category\" (ionChange)=\"selectOption($event)\">\n          <ion-select-option [value]=\"item?.cat_id\" *ngFor=\"let item of CategoryData\" >{{item?.category_name_show}}</ion-select-option>\n        </ion-select>\n      </ion-col>\n    </ion-row>\n  \n    <ion-row class=\"ion-padding-top\">\n      <ion-col class=\"ion-no-padding\">\n        <ion-textarea rows=\"6\" cols=\"20\" placeholder=\"Write your suggestion\" class=\"borderDiv\" [(ngModel)]=\"suggestions\"></ion-textarea>\n      </ion-col>\n    </ion-row>\n<br>\n    <ion-row>\n      <ion-col [size]=\"10\">\n        <div class=\"attachItemDiv\" tappable (click)=\"openActionDiv()\">\n          <!-- <label class=\"image-upload\"> -->\n            <p class=\"ion-no-margin pDiv\">\n            <ion-icon name=\"attach-outline\"></ion-icon>Attach File (Optional)</p>\n            <!-- <input type=\"file\" [(ngModel)] = \"imageFile\" accept=\"image/x-png,image/jpeg,.pdf\"  (change)=\"attachment($event)\" > -->\n           <!-- </label> -->\n        </div>\n      </ion-col>\n      <ion-col [size]=\"2\"></ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"attachData\">\n      <ion-col sizeLg=\"12\" sizeMd=\"12\" sizeXs=\"12\">\n       <div  class=\"relativeDiv\">\n          <ion-icon name=\"close-circle\" class=\"absoDiv\" (click)=\"remove()\"></ion-icon>\n        <img *ngIf=\"mediaType==1\" [src]=\"attachData\" #imageSrc class=\"imgPreview\">\n        \n        <!-- <iframe *ngIf=\"mediaType==4\" [src]=\"attachData | safe\"></iframe> -->\n\n       </div>\n       <p *ngIf=\"mediaType==4\" class=\"\"><img class=\"pdfImg\" src=\"../../assets/icon/file-pdf-o.png\"/>&nbsp;{{pdfData}}</p>\n       <!-- <div *ngIf=\"data?.mediaType=='2'\"  class=\"relativeDiv\">\n        <ion-icon name=\"close-circle\" class=\"absoDiv\" (click)=\"remove(ind)\"></ion-icon>\n        <video [src]=\"data?.filePath\" width=\"100%\" height=\"200px\" controls [poster]=\"data?.thumbnail\"></video>\n       </div>  -->\n      </ion-col>\n      </ion-row>\n  </div>\n\n  <ion-row lines=\"none\" >\n    <ion-col [size]=\"12\" class=\"ion-text-center\">\n      <ion-button [disabled]=\"suggestions?.trim()=='' || categoryVal=='' || categoryVal==undefined\" tappable (click)=\"IdeaSubmit()\" class=\"dynamicSmallButton\">Submit</ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n\n<ion-footer *ngIf=\"showFilterDiv == true\">\n  <div *ngIf=\"showFilterDiv\" [ngClass]=\"{'tintBg':showFilterDiv == true}\"> </div>\n  <div class=\"footerContainer\" *ngIf=\"showFilterDiv\">\n    <p class=\"titleText\">Upload <span tappable (click)=\"openActionDiv()\"><ion-icon name=\"close\" style=\"margin:0px;\"></ion-icon></span></p>\n    <br>\n    <ion-row>\n      <!-- tappable (click)=\"uploadImage('camera')\" -->\n      <ion-col [size]=\"6\" class=\"ion-text-center\" tappable (click)=\"opencam()\">\n        <img style=\"width:70px;\" src=\"../../assets/icon/camera.png\">\n        <!-- <p>Camera</p> -->\n        <label class=\"image-upload\"><p style=\"color:black;\">Camera</p>\n          <!-- <input type=\"file\" accept=\"image/x-png,image/jpeg\"  capture (change)=\"attachment($event)\" > -->\n         </label>\n      </ion-col>\n      <!-- tappable (click)=\"uploadImage('gallery')\" -->\n      <ion-col [size]=\"6\" class=\"ion-text-center\" >\n        <label class=\"image-upload\">\n        <img style=\"width:70px;\" src=\"../../assets/icon/gallery.png\">\n        <input type=\"file\" accept=\"image/x-png,image/jpeg,application/pdf\"  (change)=\"attachment($event)\" >\n      <p style=\"color:black;\">Files</p>\n      \n         </label>\n      </ion-col>\n    </ion-row>\n    <br>\n  </div>\n</ion-footer>\n";
      /***/
    },

    /***/
    "./src/app/IdeaBoxModule/idea/idea-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/IdeaBoxModule/idea/idea-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: IdeaPageRoutingModule */

    /***/
    function srcAppIdeaBoxModuleIdeaIdeaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IdeaPageRoutingModule", function () {
        return IdeaPageRoutingModule;
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


      var _idea_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./idea.page */
      "./src/app/IdeaBoxModule/idea/idea.page.ts");

      var routes = [{
        path: '',
        component: _idea_page__WEBPACK_IMPORTED_MODULE_3__["IdeaPage"]
      }];

      var IdeaPageRoutingModule = function IdeaPageRoutingModule() {
        _classCallCheck(this, IdeaPageRoutingModule);
      };

      IdeaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], IdeaPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/IdeaBoxModule/idea/idea.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/IdeaBoxModule/idea/idea.module.ts ***!
      \***************************************************/

    /*! exports provided: IdeaPageModule */

    /***/
    function srcAppIdeaBoxModuleIdeaIdeaModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IdeaPageModule", function () {
        return IdeaPageModule;
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


      var _idea_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./idea-routing.module */
      "./src/app/IdeaBoxModule/idea/idea-routing.module.ts");
      /* harmony import */


      var _idea_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./idea.page */
      "./src/app/IdeaBoxModule/idea/idea.page.ts");
      /* harmony import */


      var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");

      var IdeaPageModule = function IdeaPageModule() {
        _classCallCheck(this, IdeaPageModule);
      };

      IdeaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _idea_routing_module__WEBPACK_IMPORTED_MODULE_5__["IdeaPageRoutingModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
        declarations: [_idea_page__WEBPACK_IMPORTED_MODULE_6__["IdeaPage"]]
      })], IdeaPageModule);
      /***/
    },

    /***/
    "./src/app/IdeaBoxModule/idea/idea.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/IdeaBoxModule/idea/idea.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppIdeaBoxModuleIdeaIdeaPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".borderDiv {\n  border: 1px solid gray;\n  border-radius: 7px;\n}\n\n.his {\n  --background: white;\n  color: var(--headerColor);\n}\n\n.his img {\n  height: 20px;\n  width: 20px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.attachItemDiv p {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  padding: 5px 0px;\n  display: inline-block;\n}\n\n.attachItemDiv p ion-icon {\n  font-size: 20px;\n  float: left;\n  margin: 0 5px;\n}\n\n.attachItemDiv p small {\n  font-size: 15px;\n  float: left;\n  margin: 2px 15px 0 0px;\n}\n\n.image-upload > input {\n  display: none;\n}\n\nion-icon {\n  color: var(--headerColor);\n  font-size: 25px;\n  margin: 10px 0 0 0;\n}\n\n.bgImage {\n  height: 200px;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.textVal {\n  bottom: 0px;\n  background: transparent;\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  transform: translate(-100%, -90%);\n}\n\n.imgPreview {\n  height: 120px;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border: 1px solid gray;\n  border-radius: 10px;\n}\n\n.absoDiv {\n  float: right;\n}\n\n.pdfImg {\n  height: 20px;\n  width: 20px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSWRlYUJveE1vZHVsZS9pZGVhL2lkZWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVcsc0JBQUE7RUFBd0Isa0JBQUE7QUFHbkM7O0FBRkE7RUFBSyxtQkFBQTtFQUNILHlCQUFBO0FBTUY7O0FBTEE7RUFBSSxZQUFBO0VBQWEsV0FBQTtFQUFZLHNCQUFBO0tBQUEsbUJBQUE7QUFVN0I7O0FBUkk7RUFBRSwyQkFBQTtFQUEyQixrQkFBQTtFQUFrQixnQkFBQTtFQUFnQixxQkFBQTtBQWVuRTs7QUFkTTtFQUFTLGVBQUE7RUFBZSxXQUFBO0VBQVcsYUFBQTtBQW1CekM7O0FBbEJNO0VBQU0sZUFBQTtFQUFlLFdBQUE7RUFBVyxzQkFBQTtBQXVCdEM7O0FBcEJFO0VBQXFCLGFBQUE7QUF3QnZCOztBQXZCRTtFQUFTLHlCQUFBO0VBQXlCLGVBQUE7RUFBZSxrQkFBQTtBQTZCbkQ7O0FBNUJBO0VBQVMsYUFBQTtFQUFhLFdBQUE7RUFBWSxzQkFBQTtLQUFBLG1CQUFBO0FBa0NsQzs7QUFqQ0E7RUFBUyxXQUFBO0VBQVksdUJBQUE7RUFBeUIsa0JBQUE7RUFBbUIsUUFBQTtFQUFTLFNBQUE7RUFBVSxpQ0FBQTtBQTBDcEY7O0FBeENBO0VBQVksYUFBQTtFQUFjLFdBQUE7RUFBWSxzQkFBQTtLQUFBLG1CQUFBO0VBQW9CLHNCQUFBO0VBQXVCLG1CQUFBO0FBZ0RqRjs7QUEvQ0E7RUFBUyxZQUFBO0FBbURUOztBQWxEQTtFQUFRLFlBQUE7RUFDTixXQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQXNERiIsImZpbGUiOiJzcmMvYXBwL0lkZWFCb3hNb2R1bGUvaWRlYS9pZGVhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXJEaXZ7Ym9yZGVyOiAxcHggc29saWQgZ3JheTsgYm9yZGVyLXJhZGl1czogN3B4O31cbi5oaXN7LS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcbmltZ3toZWlnaHQ6IDIwcHg7d2lkdGg6IDIwcHg7b2JqZWN0LWZpdDogY29udGFpbjt9fVxuLmF0dGFjaEl0ZW1EaXZ7XG4gICAgcHtib3JkZXI6MXB4IHNvbGlkIGxpZ2h0Z3JheTtib3JkZXItcmFkaXVzOjVweDtwYWRkaW5nOjVweCAwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICBpb24taWNvbntmb250LXNpemU6MjBweDtmbG9hdDpsZWZ0O21hcmdpbjowIDVweDt9XG4gICAgICBzbWFsbHtmb250LXNpemU6MTVweDtmbG9hdDpsZWZ0O21hcmdpbjoycHggMTVweCAwIDBweDt9XG4gICAgfVxuICB9XG4gIC5pbWFnZS11cGxvYWQ+aW5wdXQge2Rpc3BsYXk6IG5vbmU7fVxuICBpb24taWNvbntjb2xvcjp2YXIoLS1oZWFkZXJDb2xvcik7Zm9udC1zaXplOjI1cHg7bWFyZ2luOjEwcHggMCAwIDA7fVxuLmJnSW1hZ2V7aGVpZ2h0OjIwMHB4O3dpZHRoOiAxMDAlO29iamVjdC1maXQ6IGNvbnRhaW47fVxuLnRleHRWYWx7Ym90dG9tOiAwcHg7YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IHBvc2l0aW9uOiBhYnNvbHV0ZTt0b3A6IDYwJTtsZWZ0OiA1MCU7dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIC05MCUpO1xufVxuLmltZ1ByZXZpZXd7aGVpZ2h0OiAxMjBweDt3aWR0aDogMTAwJTtvYmplY3QtZml0OiBjb250YWluO2JvcmRlcjogMXB4IHNvbGlkIGdyYXk7Ym9yZGVyLXJhZGl1czogMTBweDt9XG4uYWJzb0RpdntmbG9hdDogcmlnaHQ7fVxuLnBkZkltZ3toZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO31cblxuICAiXX0= */";
      /***/
    },

    /***/
    "./src/app/IdeaBoxModule/idea/idea.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/IdeaBoxModule/idea/idea.page.ts ***!
      \*************************************************/

    /*! exports provided: IdeaPage */

    /***/
    function srcAppIdeaBoxModuleIdeaIdeaPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IdeaPage", function () {
        return IdeaPage;
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


      var src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");
      /* harmony import */


      var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/local-storage.service */
      "./src/app/services/local-storage.service.ts");
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/assets/constant */
      "./src/assets/constant.ts");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");

      var IdeaPage = /*#__PURE__*/function () {
        function IdeaPage(router, sendData, camera, zone, localStorage, apiservices, navctrl) {
          _classCallCheck(this, IdeaPage);

          this.router = router;
          this.sendData = sendData;
          this.camera = camera;
          this.zone = zone;
          this.localStorage = localStorage;
          this.apiservices = apiservices;
          this.navctrl = navctrl;
          this.CategoryData = [];
          this.suggestions = '';
          this.showFilterDiv = false;
          this.mediaType = "0";
          this.tab1PageData = this.sendData.alldata;
          console.log('val', this.tab1PageData);
        }

        _createClass(IdeaPage, [{
          key: "selectOption",
          value: function selectOption(ev) {
            this.autoId = ev.detail.value;
            console.log('val ev', ev);
          }
        }, {
          key: "attachment",
          value: function attachment(event) {
            var _this = this;

            console.log('event1==>', event); // var formData = new FormData();

            if (event.target.files) {
              var file = event.target.files[0];
              console.log("file", file);
              var reader = new FileReader();
              reader.readAsDataURL(file);

              reader.onload = function () {
                // console.log("rrrrrrrrr",reader.result);
                _this.attachData = reader.result;
                _this.showFilterDiv = false;
                console.log("file", file.type.split("/"));
                var extenstion = file.type.split("/");
                console.log('this.currentObj==>', _this.attachData);

                if (extenstion[1] == 'pdf') {
                  _this.mediaType = "4";
                  _this.pdfData = file.name;
                  console.log('this.currentObj==>', _this.pdfData); //  this.pdfData= window.URL.createObjectURL(this.attachData);
                } else {
                  _this.mediaType = "1";
                  console.log('this.currentObj==>', _this.mediaType);
                } // formData.append("file", this.files);
                // console.log("files : ", this.files)


                console.log('this.currentObj==>', _this.attachData); // this.currentObj.answer= reader.result;
              };
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.categoryList();
          }
        }, {
          key: "gotoHistory",
          value: function gotoHistory() {
            this.router.navigate(['/idea-history']);
          }
        }, {
          key: "IdeaSubmit",
          value: function IdeaSubmit() {
            var _this2 = this;

            this.zone.run(function () {
              _this2.apiservices.showLoader();

              _this2.localStorage.getStorage().then(function (stored) {
                var apiKey = {
                  "employee_id": stored.employeeID,
                  "category_id": _this2.autoId,
                  "citation": _this2.suggestions,
                  "media_type": _this2.mediaType,
                  "media": _this2.attachData
                };
                var copy_apiKey = {
                  "employee_id": stored.employeeID,
                  "category_id": _this2.autoId,
                  "citation": _this2.suggestions,
                  "media_type": _this2.mediaType,
                  "media": _this2.attachData
                };
                console.log("resend OTP by Voice Call, api key", apiKey);

                _this2.apiservices.apiCallWithLoginTokenComment(src_assets_constant__WEBPACK_IMPORTED_MODULE_7__["URLS"].ideaBoxListApi, apiKey, copy_apiKey).subscribe(function (result) {
                  console.log("resend OTP by Voice Call, api response==", result);

                  _this2.apiservices.hideLoader();

                  if (result.status == 1 || result.status == '1') {
                    _this2.suggestions = '';
                    _this2.attachData = '';
                    _this2.pdfData = '';
                    _this2.mediaType = '';
                    _this2.categoryVal = ''; // this.sendData.alldata={"apiRes":result ,"formData":apiKey};

                    _this2.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg'); // this.navctrl.pop();
                    // this.router.navigate(['/qualification-priview']);

                  } else {
                    _this2.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                  }
                }, function (err) {
                  _this2.apiservices.hideLoader();

                  _this2.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
              });
            });
          }
        }, {
          key: "openActionDiv",
          value: function openActionDiv() {
            var _this3 = this;

            this.zone.run(function () {
              console.log("show filter1==", _this3.showFilterDiv);

              if (_this3.showFilterDiv) {
                console.log("show filter2==", _this3.showFilterDiv);
                _this3.showFilterDiv = false;
              } else {
                console.log("show filter3==", _this3.showFilterDiv);
                _this3.showFilterDiv = true;
              }
            });
          }
        }, {
          key: "remove",
          value: function remove() {
            this.pdfData = '';
            this.attachData = '';
          }
        }, {
          key: "opencam",
          value: function opencam() {
            var _this4 = this;

            var options = {
              quality: 30,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
              console.log('imageData', imageData);
              _this4.attachData = 'data:image/jpeg;base64,' + imageData;
              _this4.showFilterDiv = false;
              _this4.mediaType = "1";
            }, function (err) {// Handle error
            });
          }
        }, {
          key: "categoryList",
          value: function categoryList() {
            var _this5 = this;

            this.zone.run(function () {
              _this5.localStorage.getStorage().then(function (stored) {
                var apiKey = {
                  "employee_id": stored.employeeID
                };
                console.log("resend OTP by Voice Call, api key", apiKey);

                _this5.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_7__["URLS"].ideaCategoryListApi, apiKey).subscribe(function (result) {
                  console.log("resend OTP by Voice Call, api response==", result);

                  if (result.status == 1 || result.status == '1') {
                    _this5.CategoryData = result.data;
                  } else {
                    _this5.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                  }
                }, function (err) {
                  _this5.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
              });
            });
          }
        }]);

        return IdeaPage;
      }();

      IdeaPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__["DataTransferService"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]
        }, {
          type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_4__["ApiservicesService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      IdeaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-idea',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./idea.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/IdeaBoxModule/idea/idea.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./idea.page.scss */
        "./src/app/IdeaBoxModule/idea/idea.page.scss"))["default"]]
      })], IdeaPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=IdeaBoxModule-idea-idea-module-es5.js.map