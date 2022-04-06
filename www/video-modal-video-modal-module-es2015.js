(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-modal-video-modal-module"],{

/***/ "./src/app/video-modal/video-modal-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/video-modal/video-modal-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: VideoModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoModalPageRoutingModule", function() { return VideoModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _video_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video-modal.page */ "./src/app/video-modal/video-modal.page.ts");




const routes = [
    {
        path: '',
        component: _video_modal_page__WEBPACK_IMPORTED_MODULE_3__["VideoModalPage"]
    }
];
let VideoModalPageRoutingModule = class VideoModalPageRoutingModule {
};
VideoModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VideoModalPageRoutingModule);



/***/ }),

/***/ "./src/app/video-modal/video-modal.module.ts":
/*!***************************************************!*\
  !*** ./src/app/video-modal/video-modal.module.ts ***!
  \***************************************************/
/*! exports provided: VideoModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoModalPageModule", function() { return VideoModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _video_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video-modal-routing.module */ "./src/app/video-modal/video-modal-routing.module.ts");
/* harmony import */ var _video_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-modal.page */ "./src/app/video-modal/video-modal.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









let VideoModalPageModule = class VideoModalPageModule {
};
VideoModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _video_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideoModalPageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_video_modal_page__WEBPACK_IMPORTED_MODULE_6__["VideoModalPage"]]
    })
], VideoModalPageModule);



/***/ })

}]);
//# sourceMappingURL=video-modal-video-modal-module-es2015.js.map