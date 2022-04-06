(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-sizebutton/custom-sizebutton.component.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-sizebutton/custom-sizebutton.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCustomSizebuttonCustomSizebuttonComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-button  class=\"customBtn\" size=\"{{buttonSize}}\" >\n  <ion-icon *ngIf=\"buttonIconPath\" name=\"{{buttonIconPath}}\"></ion-icon>\n  <!-- <img src=\"{{buttonIconPath}}\" class=\"{{iconClass}}\"/>  -->\n  {{buttonName}} \n</ion-button>\n<!-- shape=\"round\" -->";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/do-comment/do-comment.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/do-comment/do-comment.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsDoCommentDoCommentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-row  style=\"background-color:#fff;\" *ngIf=\"editedData?.editComment=='noEdit'\">\n  <ion-col [size]=\"12\" class=\"ion-no-padding\">\n    <div class=\"commentAreaDiv\">\n      <ion-row>\n        <!-- <ion-col [size]=\"2\">\n          <app-image-view [img]=\"commentData?.settings?.loggedEmpProfile\" [imageView]=\"true\" class=\"circleCoverImg\" ></app-image-view>\n        </ion-col> -->\n        <ion-col [size]=\"10\" class=\"autoMargin ion-no-padding\">\n          <div class=\"commentDiv\">\n            <ion-textarea #input placeholder=\"Leave your comments here....\" rows=\"1\" [(ngModel)]=\"myComment\" (ngModelChange)=\"countLetter(myComment)\"></ion-textarea>\n          </div>\n        </ion-col>\n        <ion-col [size]=\"2\" class=\"ion-text-right autoMargin\">\n          <div >\n            <!-- class=\"dynamicSmallButton\" -->\n            <ion-button [disabled]=\"myComment?.trim()==''\" tappable (click)=\"doComment(myComment)\" class=\"sendCommentButton\">\n              <ion-icon name=\"navigate\"></ion-icon>\n            </ion-button>            \n          </div>\n        </ion-col>\n      </ion-row>\n    </div>    \n  </ion-col>\n</ion-row>\n\n\n<ion-row *ngIf=\"editedData?.editComment=='edit'\" style=\"background-color:#fff;\">\n  <ion-col [size]=\"12\" class=\"ion-no-padding\">\n    <div class=\"commentAreaDiv\">\n      <ion-row>\n        <ion-col [size]=\"10\" class=\"autoMargin ion-no-padding\">\n          <div class=\"commentDiv\">\n            <ion-textarea #input placeholder=\"Leave your comments here....\" rows=\"1\" [(ngModel)]=\"myComment\" (ngModelChange)=\"countLetter(myComment)\"></ion-textarea>\n          </div>\n        </ion-col>\n        <ion-col [size]=\"2\" class=\"ion-text-right autoMargin\">\n          <div >\n            <ion-button [disabled]=\"myComment?.trim()==''\" tappable (click)=\"editCommentFun(myComment)\" class=\"sendCommentButton\">\n              <ion-icon name=\"navigate\"></ion-icon>\n            </ion-button>            \n          </div>\n        </ion-col>\n      </ion-row>\n    </div>    \n  </ion-col>\n</ion-row>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/editpopover/editpopover.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/editpopover/editpopover.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsEditpopoverEditpopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-row >\n  <!-- <ion-col [size]=\"12\"><p> hello chor ==  {{objectArr?.can_edit}}</p></ion-col> -->\n  <ion-col [size]=\"12\" >\n    <p  class=\"ion-no-margin ion-margin-bottom\" tappable (click)=\"gotoEdit()\">Edit</p>\n  </ion-col>\n  <ion-col [size]=\"12\">\n    <p  class=\"ion-no-margin\" tappable (click)=\"presentAlertConfirm()\">Delete</p>\n  </ion-col>\n</ion-row>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/poover-component/poover-component.component.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/poover-component/poover-component.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsPooverComponentPooverComponentComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"popOverStaticDiv\" *ngIf=\"listData?.length>=1\">\n  <ion-row class=\"listDiv\" *ngFor=\"let dataList of listData\">\n    <ion-col [size]=\"12\" tappable (click)=\"goToRedirection(dataList)\">\n      <p class=\"noMargin\">{{dataList?.name}}</p>\n    </ion-col>\n  </ion-row>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/show-comment/show-comment.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/show-comment/show-comment.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsShowCommentShowCommentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"data?.like_setting=='1' || data?.comment_setting=='1'\">\n  <div class=\"likeModuleDiv\">\n    <ion-row>\n      <ion-col [size]=\"6\" class=\"ion-no-padding\" *ngIf=\"data?.like_setting=='1'\">\n        <div class=\"likeDiv\">\n          <ion-row tappable (click)=\"changeLikeStatus(data)\">\n            <ion-col [size]=\"3\"  >\n              <p>\n                <ion-icon *ngIf=\"data?.like_status==1\" name=\"thumbs-up\" class=\"fillHeart\"></ion-icon>\n                <ion-icon *ngIf=\"data?.like_status==0\" name=\"thumbs-up-outline\"></ion-icon>\n              </p>\n            </ion-col>\n            <ion-col [size]=\"9\" class=\"autoMargin ion-text-left\">\n              <!-- <div *ngIf=\"data?.total_likes>=0\" tappable (click)=\"likeUserList(data)\"> -->\n              <div *ngIf=\"data?.total_likes>=0\" >\n                <p><span *ngIf=\"data?.total_likes>=1\">{{data?.total_likes}}</span> Like<span *ngIf=\"data?.total_likes>1\">s</span></p>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n      <!-- <ion-col [size]=\"2\" class=\"ion-no-padding\" style=\"border-left:1px solid gray;margin:0 -10px 0 10px;\"></ion-col> -->\n      <ion-col [size]=\"6\" class=\"ion-no-padding\" *ngIf=\"data?.comment_setting=='1'\">\n        <div class=\"commentDiv\">\n          <ion-row tappable (click)=\"showCommentBox(data)\">\n            <ion-col [size]=\"3\" >\n              <p><ion-icon style=\"margin:3px 0 0  0;\" name=\"chatbox-ellipses-outline\"></ion-icon></p>     \n            </ion-col>\n            <ion-col [size]=\"9\" class=\"autoMargin ion-text-left\">\n              <div *ngIf=\"data?.total_comments>=0\">\n                <p><span *ngIf=\"data?.total_comments>=1\">{{data?.total_comments}}</span>&nbsp;Comment<span *ngIf=\"data?.total_comments>1\">s</span></p>\n              </div>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n\n\n\n\n  <!-- this is limited like list which is shown on detail page Start -->\n  <div class=\"limitedLikeListDiv\" *ngIf=\"likeList=='true' && data?.likes?.length>=1\">\n    <ion-row>\n      <ion-col [size]=\"12\"><p class=\"likeTitleDiv\">Like<span *ngIf=\"data?.likes?.length>=2\">s</span></p></ion-col>\n    </ion-row>\n    <div class=\"staticWidth\" *ngFor=\"let likeData of data?.likes; let in = index\">\n      <div class=\"likeUserDiv\" *ngIf=\"in<4\">\n        <div class=\"imgIcon\">\n          <app-image-view [img]=\"likeData?.profile_image\" [imageView]=\"true\" class=\"radiusFullImage\" ></app-image-view>\n        </div>\n        <ion-icon name=\"thumbs-up\" class=\"fillHeart\"></ion-icon>\n      </div>\n      <div class=\"likeMoreDiv\" *ngIf=\"in==4\" tappable (click)=\"likeUserList(likeData)\">\n        <ion-icon name=\"information-circle\" *ngFor=\"let data of [0,1,2]\"></ion-icon>\n      </div>\n    </div>\n  </div>\n  <!-- this is limited like list which is shown on detail page End -->\n\n  <!-- here comment list codeing will be start -->\n  <div class=\"fullCmntList limitedLikeListDiv\" *ngIf=\"commentList=='true'\">\n    <ion-row *ngIf=\"data?.comments?.length>=1\">\n      <ion-col [size]=\"12\"><p class=\"likeTitleDiv\">Comment<span *ngIf=\"data?.comments?.length>=2\">s</span></p></ion-col>\n    </ion-row>\n    <div class=\"borderList\" *ngFor=\"let cmtData of data?.comments; let ind = index\" >\n      <ion-row class=\"commentsList\">\n        <ion-col [size]=\"2\" class=\"ion-no-padding\">\n          <app-image-view [img]=\"cmtData?.profile_image\" [imageView]=\"true\" class=\"circleCoverImg\" ></app-image-view>\n        </ion-col>\n        <ion-col [size]=\"10\" class=\"ion-no-padding\" >\n          <div class=\"commentListData\"> \n            <ion-row>\n              <ion-col [size]=\"8\">\n                <p class=\"noMargin userText\">{{cmtData?.full_name}}</p>\n                <p class=\"locationText\" *ngIf=\"cmtData?.designation!=''\">{{cmtData?.designation}}</p>\n                <p class=\"noMargin timeText\">{{cmtData?.comment_date}}{{cmtData?.comment_time}}</p>\n              </ion-col>\n              <ion-col [size]=\"4\" *ngIf=\"cmtData?.can_edit=='1' || cmtData?.can_delete=='1'\" class=\"ion-text-right\" \n              tappable (click)=\"presentPopover($event,ind,data?.comments,cmtData,data)\">\n                <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\n              </ion-col>\n            </ion-row>\n            <ion-row *ngIf=\"cmtData?.comment!=''\">\n              <ion-col [size]=\"12\">\n                <app-text-layout [text]=\"cmtData?.comment\" style=\"white-space:pre-wrap;\" [className]=\"\"></app-text-layout>\n              </ion-col>\n            </ion-row>\n          </div>\n          <ion-row *ngIf=\"cmtData?.isCommentLikeSetting==1 || cmtData?.isCommentReplySetting==1\">\n            <ion-col [size]=\"5\" *ngIf=\"cmtData?.isCommentLikeSetting==1\" >\n              <p class=\"ion-no-margin\" >\n                <span tappable (click)=\"changeLikeStatus1(cmtData)\" \n                [ngClass]=\"{'colorChangeLike': cmtData?.like_status==1}\">Like</span>\n                <span *ngIf=\"cmtData?.total_likes>1\" [ngClass]=\"{'colorChangeLike': cmtData?.like_status==1}\">s</span>\n                <span *ngIf=\"cmtData?.total_likes>=1\" [ngClass]=\"{'colorChangeLike': cmtData?.like_status==1}\" \n                  tappable (click)=\"changeLikeStatus1(cmtData)\">{{cmtData?.total_likes}}</span>\n                <!-- <ion-icon *ngIf=\"cmtData?.like_status==1\" tappable (click)=\"likeUserList(cmtData)\"\n                style=\"margin:3px 0px -3px 4px;\" name=\"thumbs-up\" class=\"fillHeart\"></ion-icon>\n                <ion-icon *ngIf=\"cmtData?.like_status==0\" style=\"margin:3px 0px -3px 4px;\"\n                 name=\"thumbs-up-outline\" tappable (click)=\"likeUserList(cmtData)\"></ion-icon> -->\n                 <img *ngIf=\"cmtData?.total_likes>0\" [src]=\"data?.like_thumb_image\" tappable (click)=\"likeUserList(cmtData)\" class=\"iconCSSimg\">\n              </p>\n            </ion-col>\n            <ion-col [size]=\"2\">|</ion-col>\n            <ion-col [size]=\"5\" *ngIf=\"cmtData?.isCommentReplySetting==1\" tappable (click)=\"showCommentBox1(ind,cmtData)\"\n            >\n              <p class=\"ion-no-margin\">Reply\n                <!-- <span *ngIf=\"cmtData?.total_comments>1\">s</span>&nbsp;  -->\n                <span *ngIf=\"cmtData?.total_comments>=1\">{{cmtData?.total_comments}}</span>&nbsp;</p>\n            </ion-col>\n          </ion-row>\n          <div class=\"borderList\" *ngFor=\"let replyData of cmtData?.comments; let in = index\" >\n          <ion-row class=\"commentsList\">\n            <ion-col [size]=\"2\" class=\"ion-text-center ion-no-padding\">\n              <app-image-view [img]=\"replyData?.profile_image\" [imageView]=\"true\" class=\"circleCoverImg\" ></app-image-view>\n            </ion-col>\n            <ion-col [size]=\"10\" class=\"ion-no-padding\" >\n              <div class=\"commentListData\"> \n                <ion-row>\n                  <ion-col [size]=\"9\">\n                    <p class=\"noMargin userText\">{{replyData?.full_name}}</p>\n                    <p class=\"locationText\" *ngIf=\"replyData?.designation!=''\">{{replyData?.designation}}</p>\n                    <p class=\"noMargin timeText\">{{replyData?.comment_date}}{{replyData?.comment_time}}</p>\n                  </ion-col>\n                  <ion-col [size]=\"3\" *ngIf=\"replyData?.can_edit=='1' || replyData?.can_delete=='1'\" class=\"ion-text-right\" \n                  tappable (click)=\"presentPopover($event,ind,cmtData?.comments,replyData,cmtData)\">\n                    <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\n                  </ion-col>\n                </ion-row>\n                <ion-row *ngIf=\"replyData?.comment!=''\">\n                  <ion-col [size]=\"12\">\n                    <app-text-layout [text]=\"replyData?.comment\" style=\"white-space:pre-wrap;font-size: 12px;\" [className]=\"\"></app-text-layout>\n                  </ion-col>\n                </ion-row>\n              </div>\n              <ion-row *ngIf=\"replyData?.isCommentLikeSetting==1\">\n                <ion-col [size]=\"12\" *ngIf=\"replyData?.isCommentLikeSetting==1\" >\n                  <p class=\"ion-no-margin\" >\n                    <span tappable (click)=\"changeLikeStatus1(replyData)\">Like</span>\n                    <span *ngIf=\"replyData?.total_likes>1\">s</span>\n                    <span *ngIf=\"replyData?.total_likes>=1\">{{replyData?.total_likes}}</span>\n                    <!-- <ion-icon *ngIf=\"replyData?.like_status==1\" style=\"margin:3px 0px -3px 4px;\" name=\"thumbs-up\" class=\"fillHeart\"></ion-icon>\n                    <ion-icon *ngIf=\"replyData?.like_status==0\" style=\"margin:3px 0px -3px 4px;\" name=\"thumbs-up-outline\"></ion-icon> -->\n                    <img  *ngIf=\"replyData?.total_likes>0\" [src]=\"data?.like_thumb_image\" tappable (click)=\"likeUserList(replyData)\" class=\"iconCSSimg\">\n                  </p>\n                </ion-col>\n                </ion-row>\n            </ion-col>\n          \n          \n          </ion-row>\n     \n        </div>\n        <ion-row *ngIf=\"apiServices?.showReplyComment==true && showIndex==ind\"  class=\"commentAreaDiv\">\n          <ion-col [size]=\"10\" class=\"autoMargin ion-no-padding\">\n            <div class=\"commentDiv\">\n              <ion-textarea #input placeholder=\"Leave your comments....\" rows=\"1\" [(ngModel)]=\"myComment\" class=\"textAreaReply\"></ion-textarea>\n            </div>\n            <!-- (ngModelChange)=\"countLetter(myComment)\" -->\n          </ion-col>\n          <ion-col [size]=\"2\" class=\"ion-text-right autoMargin ion-no-padding\">\n            <!-- <div > -->\n              <!-- class=\"dynamicSmallButton\" -->\n              <ion-button [disabled]=\"myComment?.trim()==''\" tappable (click)=\"replyOnCommentF(myComment,cmtData)\" \n              class=\"sendCommentButton ion-no-padding\">\n                <ion-icon name=\"navigate\"></ion-icon>\n              </ion-button>            \n            <!-- </div> -->\n          </ion-col>\n        </ion-row>\n     \n        </ion-col>\n      </ion-row>\n    </div>\n    <div *ngIf=\"data?.comments?.length<=0 \" class=\"noCommentList\">\n      <!-- && data?.noComment_image!='' -->\n      <ion-row>\n        <ion-col [size]=\"12\" class=\"ion-text-center\">\n          <p *ngIf=\"data?.noComment_text!=''\">{{data?.settings?.noComment_text}}</p>\n          <app-image-view *ngIf=\"data?.settings?.noComment_imageStatus==1\" [img]=\"data?.settings?.noComment_image\" [imageView]=\"false\" class=\"\" ></app-image-view>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/skelton-listview/skelton-listview.component.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/skelton-listview/skelton-listview.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsSkeltonListviewSkeltonListviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"commonPagePadding\">\n\n\n  <div *ngIf=\"skeletonPath=='iosRegistration'\">\n    <ion-row>\n      <ion-col [size]=\"12\" *ngFor=\"let data of [0,1,2,3]\" style=\"margin:0 0 15px 0;\">\n        <ion-skeleton-text animated style=\"width:40%;height:15px;margin:0 0 15px 5px\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width:100%;height:40px;border-radius:30px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col [size]=\"12\">\n        <ion-skeleton-text animated style=\"width:50%;height:40px;margin:auto;border-radius:30px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n  <div *ngIf=\"skeletonPath=='organisationName'\">\n    <br><br><br><br><br><br>\n    <ion-row>\n      <ion-col [size]=\"12\">\n        <ion-skeleton-text animated style=\"width:90%;height:20px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n    <br>\n    <ion-row>\n      <ion-col [size]=\"10\">\n        <ion-skeleton-text animated style=\"width:70%;height:30px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width:100%;background:transparent;border-bottom:1px solid gainsboro;\"></ion-skeleton-text>\n      </ion-col>\n      <ion-col [size]=\"2\">\n        <ion-skeleton-text animated style=\"width:25px;height:25px;margin:auto;border-radius:50%;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n    <br><br>\n    <ion-row>\n      <ion-col [size]=\"12\">\n        <ion-skeleton-text animated style=\"width:50%;height:40px;margin:auto;border-radius:30px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div *ngIf=\"skeletonPath=='tabMenu'\">\n    <ion-row class=\"ion-margin-bottom\" *ngFor=\"let data of [0,1,2,3,4]\">\n      <ion-col [size]=\"3\" class=\"ion-no-padding\">\n        <ion-skeleton-text animated style=\"width:50px;height:50px;border-radius:50%;\"></ion-skeleton-text>\n      </ion-col>\n      <ion-col [size]=\"7\" class=\"ion-no-padding autoMargin\">\n        <ion-skeleton-text animated style=\"width:80%;height:15px;display:block;margin:5px 0 8px 0;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width:30%;height:15px;\"></ion-skeleton-text>\n      </ion-col>\n      <ion-col [size]=\"2\" class=\"ion-no-padding autoMargin\">\n        <ion-skeleton-text animated style=\"float:right;width:15px;height:20px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div *ngIf=\"skeletonPath=='countryList'\">\n    <br><br><br>\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-no-padding ion-text-center\">\n        <ion-skeleton-text animated style=\"width:50%;height:90px;margin:auto;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n    <br><br>\n    <ion-row>\n      <ion-col [size]=\"12\">\n        <ion-skeleton-text animated style=\"width:60%;height:20px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width:100%;height:20px;margin:10px 0 0 0;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width:100%;height:50px;margin:30px 0 70px 0;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width:50%;height:40px;margin:auto;border-radius:30px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div *ngIf=\"skeletonPath=='enterOtp'\">\n    <br><br><br>\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-no-padding ion-text-center\">\n        <ion-skeleton-text animated style=\"width:50%;height:90px;margin:auto;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n    <br><br>\n    <ion-row>\n      <ion-col [size]=\"12\">\n        <ion-skeleton-text animated style=\"width:60%;height:20px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width:100%;height:20px;margin:10px 0 0 0;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width:30%;height:20px;float:right;margin:10px 0px 20px 0;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col [size]=\"3\" *ngFor=\"let data of [0,1,2,3]\">\n        <ion-skeleton-text animated style=\"width:90%;height:5px;margin:40px 0 0 0;float:right\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-margin-top\">\n        <ion-skeleton-text animated style=\"width:50%;height:40px;margin:auto;border-radius:30px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width:30%;height:20px;margin:20px auto 0;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div *ngIf=\"skeletonPath=='createAccount'\">\n    <br><br><br>\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-no-padding ion-text-center\">\n        <ion-skeleton-text animated style=\"width:50%;height:90px;margin:auto;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n    <br><br>\n    <ion-row>\n      <ion-col [size]=\"12\">\n        <ion-skeleton-text animated style=\"width:80%;height:20px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col [size]=\"12\" *ngFor=\"let data of [0,1]\">\n        <ion-skeleton-text animated style=\"width:45%;height:20px;margin:0 0 10px 0;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width:100%;height:50px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-margin-top\">\n        <ion-skeleton-text animated style=\"width:50%;height:40px;margin:auto;border-radius:30px;\"></ion-skeleton-text>\n        <!-- <ion-skeleton-text animated style=\"width:30%;height:20px;margin:20px auto 0;\"></ion-skeleton-text> -->\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n\n  <div *ngIf=\"skeletonPath=='hrAcknowData'\">\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-margin-bottom\">\n        <ion-skeleton-text animated style=\"width:100%;height:150px;border-radius:10px;\"></ion-skeleton-text>\n      </ion-col>\n      <ion-col [size]=\"12\" *ngFor=\"let data of [0,1,2]\" style=\"margin:15px 0;\">\n        <ion-skeleton-text animated style=\"width:90%;height:15px;border-radius:0px;margin:0px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width:100%;height:15px;border-radius:0px;margin:5px 0;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width:40%;height:15px;border-radius:0px;margin:0px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n\n  <div *ngIf=\"skeletonPath=='hrEnterOtp'\">\n    <br><br><br><br><br>\n    <ion-row>\n      <ion-col [size]=\"12\">\n        <ion-skeleton-text animated style=\"width:60%;height:20px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width:100%;height:10px;margin:10px 0 0 0;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width:30%;height:10px;margin:5px 0 0 0;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col [size]=\"3\" *ngFor=\"let data of [0,1,2,3]\">\n        <ion-skeleton-text animated style=\"width:90%;height:5px;margin:40px 0 0 0;float:right\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n    <br><br>\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-margin-top\">\n        <ion-skeleton-text animated style=\"width:50%;height:40px;margin:auto;border-radius:30px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width:30%;height:20px;margin:20px auto 0;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n\n  <div *ngIf=\"skeletonPath=='hrQuestion'\">\n    <br>\n    <ion-row>\n      <ion-col [size]=\"12\">\n        <ion-skeleton-text animated style=\"width:90%;height:15px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width:40%;height:15px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n    <div *ngFor=\"let data of [0,1]\">\n      <ion-row>\n        <ion-col [size]=\"12\" class=\"ion-margin-top\">\n          <ion-skeleton-text animated style=\"width:100%;height:10px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width:10%;height:20px;margin:15px 0 0 0;float:left;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width:80%;height:20px;margin:15px 0 0 0;float:right;\"></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor=\"let data of [0,1,2,3]\">\n        <ion-col [size]=\"2\">\n          <ion-skeleton-text animated style=\"width:30px;height:30px;border-radius:50%;float:right;\"></ion-skeleton-text>\n        </ion-col>\n        <ion-col [size]=\"10\" class=\"autoMargin\">\n          <ion-skeleton-text animated style=\"width:90%;height:15px;margin:0;\"></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n\n\n  <div *ngIf=\"skeletonPath=='noticeDetail'\">\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-no-padding\">\n        <ion-skeleton-text animated style=\"width:100%;height:200px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n    <br>\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-margin-bottom\" *ngFor=\"let data of [0,1,2,3,4]\">\n        <ion-skeleton-text animated style=\"width:90%;height:10px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width:70%;height:10px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width:40%;height:10px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n\n  <div *ngIf=\"skeletonPath=='noticeArchive'\">\n    <ion-row>\n      <ion-col [size]=\"12\" *ngFor=\"let data of[0,1,2,3,4]\" class=\"ion-no-padding\">\n        <ion-skeleton-text animated style=\"width:100%;height:100px;border-radius:5px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n\n  <div *ngIf=\"skeletonPath=='sayCheerCard'\">\n    <br>\n    <ion-row>\n      <ion-col [size]=\"4\" *ngFor=\"let data of [0,1,2]\">\n        <ion-skeleton-text animated style=\"width:100%;height:35px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n    <br>\n    <ion-row>\n      <ion-col [size]=\"4\" *ngFor=\"let data of [0,1,2,3,4,5]\">\n        <ion-skeleton-text animated style=\"width:100%;height:150px;border-radius:5px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n\n  <div *ngIf=\"skeletonPath=='redeemHome'\">\n    <div class=\"customCard\" style=\"background:#f3f3f3;\">\n      <br>\n      <ion-row>\n        <ion-col [size]=\"12\">\n          <ion-skeleton-text animated style=\"width:65px;height:65px;border-radius:50%;margin:auto;\"></ion-skeleton-text>\n        </ion-col>\n        <ion-col [size]=\"12\" class=\"autoMargin\">\n          <ion-skeleton-text animated style=\"width:70%;height:15px;margin:10px auto 7px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width:40%;height:15px;margin:auto;\"></ion-skeleton-text>\n        </ion-col>\n        <ion-col [size]=\"12\" class=\"autoMargin ion-margin-top\">\n          <ion-skeleton-text animated style=\"width:60%;height:35px;border-radius:30px;margin:auto;\"></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n      <br>\n    </div>\n    <div style=\"border-bottom:1px solid gainsboro;\" *ngFor=\"let dat of [0,1,2,3]\">\n      <ion-row>\n        <ion-col [size]=\"2\" class=\"ion-text-center\">\n          <ion-skeleton-text animated style=\"width:50px;height:50px;border-radius:50%;\"></ion-skeleton-text>\n        </ion-col>\n        <ion-col [size]=\"7\" class=\"ion-text-center autoMargin\">\n          <ion-skeleton-text animated style=\"width:80%;height:20px;\"></ion-skeleton-text>\n        </ion-col>\n        <ion-col [size]=\"3\" class=\"ion-text-center autoMargin\">\n          <ion-skeleton-text animated style=\"width:100%;height:20px;\"></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n\n\n\n  <div *ngIf=\"skeletonPath=='redeemOrderList'\">\n    <div class=\"customCard\" *ngFor=\"let data of [0,1,2,3,4]\">\n      <ion-row>\n        <ion-col [size]=\"3\">\n          <ion-skeleton-text animated style=\"width:100%;height:60px;margin:auto;\"></ion-skeleton-text>\n        </ion-col>\n        <ion-col [size]=\"9\">\n          <ion-skeleton-text animated style=\"width:80%;height:20px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width:70%;height:15px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width:40%;height:10px;\"></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n\n\n\n\n\n  <div *ngIf=\"skeletonPath=='redeemCategoryList'\">\n    <ion-row>\n      <ion-col [size]=\"6\" *ngFor=\"let data of [0,1,2,3,4,5,6,7]\">\n        <ion-skeleton-text animated style=\"width:100%;height:100px;margin:auto;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div *ngIf=\"skeletonPath=='likeList'\">\n    <ion-row style=\"border-bottom:1px solid gainsboro;padding:5px 0px;\" *ngFor=\"let data of [0,1,2,3,4,5,6]\">\n      <ion-col [size]=\"3\">\n        <ion-skeleton-text animated style=\"width:50px;height:50px;border-radius:50%;\"></ion-skeleton-text>\n      </ion-col>\n      <ion-col [size]=\"6\" class=\"autoMargin\">\n        <ion-skeleton-text animated style=\"width:80%;height:20px;\"></ion-skeleton-text>\n      </ion-col>\n      <ion-col [size]=\"3\" class=\"autoMargin\">\n        <ion-skeleton-text animated style=\"width:100%;height:20px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n  <div *ngIf=\"skeletonPath=='voucherCatList'\">\n    <ion-row>\n      <ion-col [size]=\"6\" *ngFor=\"let data of [0,1,2,3,4,5,6,7]\">\n        <ion-skeleton-text animated style=\"width:100%;height:100px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n  <div *ngIf=\"skeletonPath=='cheerBoard'\">\n    <ion-row>\n      <ion-col [size]=\"6\" class=\"autoMargin\">\n        <ion-skeleton-text animated style=\"width:100%;height:20px;\"></ion-skeleton-text>\n      </ion-col>\n      <ion-col [size]=\"6\">\n        <ion-skeleton-text animated style=\"width:80%;height:40px;float:right;border-radius:30px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-margin-top\">\n      <ion-col [size]=\"6\" *ngFor=\"let data of [0,1]\">\n        <ion-skeleton-text animated style=\"width:100%;height:130px;margin:auto;border-radius:10px;\"></ion-skeleton-text>\n      </ion-col>\n      <ion-col [size]=\"12\" class=\"ion-margin-top\">\n        <ion-skeleton-text animated style=\"width:100%;height:40px;margin:auto;border-radius:10px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col [size]=\"12\">\n        <ion-row class=\"ion-padding ion-margin-top\" style=\"border:1px solid gainsboro;padding:10px;border-radius:10px;\" *ngFor=\"let data of [0,1]\">\n          <ion-col [size]=\"12\">\n            <div style=\"position:relative;\">\n              <ion-row>\n                <ion-col [size]=\"3\" class=\"ion-no-padding\">\n                  <ion-skeleton-text animated style=\"width:60px;height:60px;margin:auto;border-radius:50%;\"></ion-skeleton-text>\n                  <ion-skeleton-text animated style=\"width:100%;height:15px;\"></ion-skeleton-text>\n                  <ion-skeleton-text animated style=\"width:80%;height:10px;margin:auto\"></ion-skeleton-text>\n                </ion-col>\n                <ion-col [size]=\"6\" class=\"ion-no-padding\">\n                  <ion-skeleton-text animated style=\"width:80%;height:150px;margin:auto;border-radius:0px;\"></ion-skeleton-text>\n                </ion-col>\n                <ion-col [size]=\"3\" style=\"position:absolute;right:0px;bottom:0px;\" class=\"ion-no-padding\">\n                  <ion-skeleton-text animated style=\"width:60px;height:60px;margin:auto;border-radius:50%;\"></ion-skeleton-text>\n                  <ion-skeleton-text animated style=\"width:100%;height:15px;\"></ion-skeleton-text>\n                  <ion-skeleton-text animated style=\"width:80%;height:10px;margin:auto\"></ion-skeleton-text>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n  <div *ngIf=\"skeletonPath=='cheerBadges'\">\n    <ion-row style=\"border:1px solid gainsboro;border-radius:10px;margin:0 0 10px 0;\" *ngFor=\"let data of [0,1,2,3]\">\n      <ion-col [size]=\"12\">\n        <div style=\"position:relative;\">\n          <ion-row>\n            <ion-col [size]=\"8\" class=\"ion-no-padding\">\n              <ion-skeleton-text animated style=\"width:60%;height:150px;border-radius:0px;\"></ion-skeleton-text>\n            </ion-col>\n            <ion-col [size]=\"4\" class=\"autoMargin ion-no-padding\">\n              <ion-skeleton-text animated style=\"width:60px;height:60px;margin:auto;border-radius:50%;\"></ion-skeleton-text>\n              <ion-skeleton-text animated style=\"width:100%;height:15px;\"></ion-skeleton-text>\n              <ion-skeleton-text animated style=\"width:80%;height:10px;margin:auto\"></ion-skeleton-text>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n  <div *ngIf=\"skeletonPath=='cheerBadgesDetail'\">\n    <ion-row class=\"ion-padding\" style=\"background:white;margin:0 0 10px 0;border:1px solid gainsboro;padding:10px;border-radius:10px;\">\n      <ion-col [size]=\"3\" class=\"ion-no-padding\">\n        <ion-skeleton-text animated style=\"width:60px;height:60px;margin:auto;border-radius:50%;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width:100%;height:15px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width:80%;height:10px;margin:auto\"></ion-skeleton-text>\n      </ion-col>\n      <ion-col [size]=\"7\" class=\"ion-no-padding\">\n        <ion-skeleton-text animated style=\"width:80%;height:150px;margin:auto;border-radius:0px;\"></ion-skeleton-text>\n      </ion-col>\n      <ion-col [size]=\"12\">\n        <div class=\"arrawIcon\">\n          <ion-skeleton-text animated style=\"width:100%;height:150px;border-radius:10px;\"></ion-skeleton-text>\n        </div>\n      </ion-col>\n      <ion-col [size]=\"12\" class=\"ion-no-padding ion-margin-top\">\n        <ion-row>\n          <ion-col [push]=\"8\" [size]=\"4\" class=\"ion-no-padding\">\n            <ion-skeleton-text animated style=\"width:60px;height:60px;margin:auto;border-radius:50%;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width:100%;height:15px;\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width:80%;height:10px;margin:auto\"></ion-skeleton-text>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col [size]=\"12\" class=\"ion-margin-top ion-no-padding\">\n        <ion-row>\n          <ion-col [size]=\"6\" *ngFor=\"let data of [0,1]\">\n            <ion-skeleton-text animated style=\"width:100%;height:35px;margin:auto\"></ion-skeleton-text>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </div>\n\n\n\n\n\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div *ngIf=\"skeletonPath=='hrContactPage'\" style=\"margin:-20px 0 0 0;padding:0 15px;\">\n  <ion-row *ngFor=\"let data of[0,1,2,3,4,5,6]\" style=\"background: #fff;padding:5px 0px;margin:5px 0;\">\n    <ion-col [size]=\"12\">\n      <ion-skeleton-text animated style=\"width:150px;height:20px;\"></ion-skeleton-text>\n    </ion-col>\n    <ion-col [size]=\"12\" style=\"border:1px solid gainsboro;border-radius:30px;padding:5px 15px;\">\n      <ion-skeleton-text animated style=\"width:80%;height:25px;float:left;\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width:15%;height:25px;float:right;\"></ion-skeleton-text>\n    </ion-col>\n  </ion-row>\n</div>\n\n\n<div *ngIf=\"skeletonPath=='sideProfile'\" style=\"margin:-20px 0 0 0;\">\n  <ion-row style=\"position:relative;margin:0;\">\n    <ion-col [size]=\"12\" class=\"ion-no-padding\">\n      <ion-skeleton-text animated style=\"width:100%;height:180px;margin:0px;\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width:110px;height:110px;border-radius:50%;position:absolute;top:47%;left:50%;transform:translate(-50%, -55%);\"></ion-skeleton-text>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"position:relative;margin:0;\">\n    <ion-col [size]=\"12\" class=\"ion-no-padding\">\n      <ion-skeleton-text animated style=\"width:100%;height:80px;margin:0px;\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width:50%;height:20px;margin:auto;position:absolute;top:-20%;left:50%;transform:translate(-50%, 0%);\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width:40%;height:20px;margin:auto;position:absolute;top:20%;left:50%;transform:translate(-50%, 0%);\"></ion-skeleton-text>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col [size]=\"12\">\n      <ion-skeleton-text animated style=\"width:50%;height:45px;border-radius:30px;margin:-28px auto 0;\"></ion-skeleton-text>\n    </ion-col>\n    <ion-col [push]=\"1\" [size]=\"10\" class=\"ion-margin-top\" style=\"box-shadow:0px 5px 10px gainsboro;border-radius:0px 0px 15px 15px;\">\n      <ion-skeleton-text animated style=\"width:40px;height:30px;margin:10px auto 7px;\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width:35%;height:20px;margin:auto;\"></ion-skeleton-text><br>\n      <ion-skeleton-text animated style=\"width:40px;height:30px;margin:10px auto 7px;\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width:80%;height:20px;margin:auto;\"></ion-skeleton-text><br>\n      <ion-skeleton-text animated style=\"width:40px;height:30px;margin:10px auto 7px;\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width:65%;height:20px;margin:auto;\"></ion-skeleton-text>\n    </ion-col>\n  </ion-row>\n</div>\n\n\n<div *ngIf=\"skeletonPath=='alertTab'\" style=\"margin:-20px 0 0 0;\">\n  <ion-row *ngFor=\"let data of [0,1,2,3,4]\" style=\"border-bottom:1px solid gainsboro;background:#fff;padding:5px;margin:10px 0;\">\n    <ion-col [size]=\"2\" class=\"autoMargin\"><ion-skeleton-text animated style=\"width:50px;height:50px;border-radius:50%;\"></ion-skeleton-text></ion-col>\n    <ion-col [size]=\"10\" class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col [size]=\"12\">\n          <ion-skeleton-text animated style=\"width:40%;height:15px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width:95%;height:10px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width:80%;height:10px;\"></ion-skeleton-text>\n        </ion-col>\n        <ion-col [size]=\"6\" class=\"autoMargin\">\n          <ion-skeleton-text animated style=\"width:60%;height:10px;\"></ion-skeleton-text>\n        </ion-col>\n        <ion-col [size]=\"6\" class=\"ion-no-padding\">\n          <ion-skeleton-text animated style=\"border-radius:15px;float:right;width:70%;height:30px;\"></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</div>\n\n\n<div *ngIf=\"skeletonPath=='sayCheerList'\" style=\"margin:-20px 0 0 0;\">\n  <ion-row *ngFor=\"let data of[0,1,2,3,4,5,6]\" style=\"background: #fff;padding:5px 0px;margin:5px 0;\">\n    <ion-col [size]=\"3\" class=\"ion-no-padding\">\n      <ion-skeleton-text animated style=\"width:50px;height:50px;border-radius:50%;margin:auto;\"></ion-skeleton-text>\n    </ion-col>\n    <ion-col [size]=\"9\" class=\"ion-no-padding\">\n      <ion-skeleton-text animated style=\"width:80%;height:15px;\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width:40%;height:15px;\"></ion-skeleton-text>\n    </ion-col>\n  </ion-row>\n</div>\n\n\n<div *ngIf=\"skeletonPath=='noticeboardList'\" style=\"margin:-20px 0 0 0;\">\n  <ion-row *ngFor=\"let data of [0,1,2,3]\">\n    <ion-col [size]=\"12\" class=\"ion-no-padding\">\n      <ion-skeleton-text animated style=\"width:100%;height:100px;margin:5px 0px;background:#fff;\"></ion-skeleton-text>\n    </ion-col>\n  </ion-row>\n</div>\n\n\n\n<div *ngIf=\"skeletonPath=='hrPolicyList'\" style=\"margin:-20px 0 0 0;\">\n  <ion-row>\n    <ion-col [size]=\"12\" class=\"ion-no-padding\" *ngFor=\"let data of [0,1,2,3,4,5,6,7]\">\n      <ion-skeleton-text animated style=\"width:100%;height:50px;margin:5px 0px;background:#fff;\"></ion-skeleton-text>\n    </ion-col>\n  </ion-row>\n</div>\n\n\n<div *ngIf=\"skeletonPath=='communicationList'\" style=\"background:#fff;\">\n  <ion-row>\n    <ion-col [size]=\"3\" class=\"autoMargin\">\n      <ion-skeleton-text animated style=\"width:60px;height:60px;border-radius:50%;margin:auto;\"></ion-skeleton-text>\n    </ion-col>\n    <ion-col [size]=\"9\" class=\"autoMargin\">\n      <ion-skeleton-text animated style=\"width:50%;height:15px;\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width:30%;height:10px;\"></ion-skeleton-text>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col [size]=\"12\" class=\"ion-padding-horizontal\">\n      <ion-skeleton-text animated style=\"width:100%;height:15px;border-radius:0px;margin:0px;\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width:60%;height:15px;border-radius:0px;margin:5px 0;\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width:100%;height:10px;border-radius:0px;margin:5px 0;\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width:90%;height:10px;border-radius:0px;margin:5px 0;\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width:50%;height:10px;border-radius:0px;margin:5px 0;\"></ion-skeleton-text>\n    </ion-col>\n    <ion-col [size]=\"12\" class=\"ion-padding-horizontal\">\n      <div style=\"border-bottom:1px solid gainsboro;\" class=\"ion-padding-bottom\">\n        <ion-skeleton-text animated style=\"width:100%;height:150px;border-radius:10px;\"></ion-skeleton-text>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col [size]=\"6\" *ngFor=\"let data of [0,1]\" class=\"ion-padding-horizontal\">\n      <ion-row>\n        <ion-col [size]=\"4\"><ion-skeleton-text animated style=\"width:25px;height:25px;\"></ion-skeleton-text></ion-col>\n        <ion-col [size]=\"8\" class=\"autoMargin\"><ion-skeleton-text animated style=\"width:100%;height:15px;\"></ion-skeleton-text></ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</div>\n\n\n<div *ngIf=\"skeletonPath=='home'\">\n  <div class=\"customCard\" style=\"border-radius:0px;\">\n    <ion-row class=\"ion-margin-bottom\">\n      <ion-col [size]=\"12\" class=\"ion-no-padding\">\n        <ion-skeleton-text animated style=\"width:40%;height:20px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let data of [0,1,2]\">\n      <ion-col [size]=\"8\" class=\"autoMargin ion-no-padding\"><ion-skeleton-text animated style=\"height:20px;\"></ion-skeleton-text></ion-col>\n      <ion-col [size]=\"4\" class=\"ion-no-padding\"><ion-skeleton-text animated style=\"border-radius:15px;float:right;width:80%;height:35px;\"></ion-skeleton-text></ion-col>\n    </ion-row>\n  </div>\n  <div class=\"borderCard\" style=\"border-radius:0px;\">\n    <ion-row class=\"ion-margin-bottom\">\n      <ion-col [size]=\"12\" class=\"ion-no-padding\">\n        <ion-skeleton-text animated style=\"width:70%;height:20px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col [size]=\"4\" *ngFor=\"let data of [0,1,2,4]\" class=\"ion-no-padding ion-text-center ion-margin-bottom\">\n        <ion-skeleton-text animated style=\"margin:auto;width:50px;height:50px;border-radius:50%;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"margin:10px auto 0;width:70%;height:10px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"borderCard\" style=\"border-radius:0px;\">\n    <ion-row class=\"ion-margin-bottom\">\n      <ion-col [size]=\"12\" class=\"ion-no-padding\">\n        <ion-skeleton-text animated style=\"width:70%;height:20px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col [size]=\"12\" class=\"ion-no-padding ion-text-center\">\n        <ion-skeleton-text animated style=\"width:100%;height:150px;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n  </div>\n</div>\n\n\n<div *ngIf=\"skeletonPath=='redeemOrderDetail'\" style=\"margin:-20px 0 0 0;\">\n  <ion-row>\n    <ion-col class=\"ion-no-padding\" [size]=\"12\">\n      <ion-skeleton-text animated style=\"width:100%;height:200px;\"></ion-skeleton-text>\n    </ion-col>\n  </ion-row>\n  <div style=\"padding:0px 20px;margin:-100px 0 0 0;position:relative;\">\n    <div class=\"customCard\">\n      <ion-row>\n        <ion-col class=\"ion-no-padding\" [size]=\"12\">\n          <ion-skeleton-text animated style=\"width:60%;height:15px;margin:15px auto;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width:100px;height:80px;margin:auto;\"></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n      <br>\n      <ion-row>\n        <ion-col class=\"ion-no-padding\" [size]=\"6\" *ngFor=\"let data of [0,1,2,3,4,5,6,7,8,9]\">\n          <ion-skeleton-text animated style=\"width:80%;height:15px;margin:7px auto;\"></ion-skeleton-text>\n        </ion-col>\n        <ion-col [size]=\"12\">\n          <ion-skeleton-text animated style=\"width:60%;height:35px;border-radius:30px;margin:auto;\"></ion-skeleton-text>\n        </ion-col>\n      </ion-row>      \n    </div>\n  </div>\n  <div style=\"padding:0px 20px;\">\n    <div class=\"customCard\">\n      <ion-row>\n        <ion-col [size]=\"12\" *ngFor=\"let data of [0,1]\">\n          <ion-skeleton-text animated style=\"width:100%;height:12px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width:60%;height:12px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width:100%;height:12px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width:40%;height:12px;\"></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</div>\n\n\n<div *ngIf=\"skeletonPath=='redeemVoucherList'\" style=\"margin:-20px 0px 0px 0px;\">\n  <ion-row>\n    <ion-col [size]=\"12\" class=\"ion-margin-bottom\" style=\"border:1px solid gainsboro;\" *ngFor=\"let data of [0,1,2]\">\n      <ion-skeleton-text animated style=\"width:40%;height:20px;float:left;margin:60px auto;\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width:70%;height:150px;border-radius:0;transform:skew(-40deg, 0deg);float:right;margin:0px -100px 0 0px;\"></ion-skeleton-text>\n    </ion-col>\n  </ion-row>\n</div>\n\n\n<div *ngIf=\"skeletonPath=='redeemVoucherDetails'\" style=\"margin:-20px 0px 0px 0px;\">\n  <ion-row>\n    <ion-col [size]=\"12\" class=\"ion-no-padding\">\n      <ion-skeleton-text animated style=\"width:100%;height:200px;\"></ion-skeleton-text>\n    </ion-col>\n    <ion-col [size]=\"12\" class=\"ion-padding-horizontal\" style=\"margin:-100px 0 0 0;\">\n      <div class=\"customCard\">\n        <ion-skeleton-text animated style=\"border-radius:0;width:30%;height:70px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"border-radius:0;width:60%;height:15px;margin:25px 0;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"border-radius:0;width:50%;height:15px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width:45%;height:50px;border-radius:0;display:inline-block;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width:25%;height:20px;border-radius:0;float:right;margin:20px 15px 0 0px;\"></ion-skeleton-text>\n      </div>\n    </ion-col>\n    <ion-col [size]=\"12\" class=\"ion-padding-horizontal\">\n      <div class=\"customCard\">\n        <div *ngFor=\"let data of [0,1,2,3]\" style=\"margin:15px 0;\">\n          <ion-skeleton-text animated style=\"border-radius:0;width:90%;height:10px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"border-radius:0;width:70%;height:10px;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"border-radius:0;width:80%;height:10px;\"></ion-skeleton-text>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</div>\n\n<div *ngIf=\"skeletonPath=='redeemAccountStatement'\" style=\"margin:-20px 0 0 0;\">\n  <ion-row>\n    <ion-col [size]=\"12\" class=\"ion-no-padding\" style=\"position:relative;\">\n      <ion-skeleton-text animated style=\"width:100%;height:150px;background:#f5f5f5;\"></ion-skeleton-text>\n      <ion-row style=\"position:absolute;top:50%;left:0;right:0;transform:translate(0%, -50%);\">\n        <ion-col [size]=\"6\" *ngFor=\"let data of [0,1]\">\n          <ion-skeleton-text animated style=\"width:50px;height:50px;margin:auto;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width:60%;height:10px;margin:10px auto;\"></ion-skeleton-text>\n          <ion-skeleton-text animated style=\"width:40%;height:15px;margin:auto;\"></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n  <br>\n  <div class=\"commonPagePadding\">\n    <ion-row style=\"border-bottom:1px solid gainsboro;padding:0px 0 15px 0px;margin:0 0 15px 0;\" *ngFor=\"let data of [0,1,2,3,4]\">\n      <ion-col [size]=\"8\" class=\"ion-no-padding\">\n        <ion-skeleton-text animated style=\"width:80%;height:20px;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width:50%;height:15px;\"></ion-skeleton-text>\n      </ion-col>\n      <ion-col [size]=\"4\" class=\"autoMargin\">\n        <ion-skeleton-text animated style=\"width:30%;height:15px;margin:auto;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width:80%;height:20px;margin:5px auto 0;\"></ion-skeleton-text>\n      </ion-col>\n    </ion-row>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/text-layout-read-more/text-layout-read-more.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/text-layout-read-more/text-layout-read-more.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsTextLayoutReadMoreTextLayoutReadMoreComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [innerHTML]=\"truncString(text, 150, '')\" class=\"tncData {{divClass}}\" tappable (click)=\"handleClick($event)\"></div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/text-layout/text-layout.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/text-layout/text-layout.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsTextLayoutTextLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [innerHTML]=\"text\" class=\"tncData {{divClass}}\" tappable (click)=\"handleClick($event)\"></div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/theme-button/theme-button.component.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/theme-button/theme-button.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsThemeButtonThemeButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-button  class=\"customBtn\" >\n    <img src=\"{{buttonIconPath}}\" class=\"{{iconClass}}\"/> \n    {{buttonName}} \n </ion-button>\n\n <!-- shape=\"round\" -->";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/image-view/image-view.component.html":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/image-view/image-view.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppImageViewImageViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<img [src]=\"image\" tappable (click)=\"viewImageFunc()\" onerror=\"this.src='../../../assets/watermark/watermark.png'\" />\n\n\n<!-- <ion-img ionImgViewer tappable (click)=\"viewImageFunc()\" [src]=\"image\"></ion-img> -->";
      /***/
    },

    /***/
    "./src/app/components/components.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _theme_button_theme_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./theme-button/theme-button.component */
      "./src/app/components/theme-button/theme-button.component.ts");
      /* harmony import */


      var _text_layout_text_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./text-layout/text-layout.component */
      "./src/app/components/text-layout/text-layout.component.ts");
      /* harmony import */


      var _text_layout_read_more_text_layout_read_more_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./text-layout-read-more/text-layout-read-more.component */
      "./src/app/components/text-layout-read-more/text-layout-read-more.component.ts");
      /* harmony import */


      var _custom_sizebutton_custom_sizebutton_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./custom-sizebutton/custom-sizebutton.component */
      "./src/app/components/custom-sizebutton/custom-sizebutton.component.ts");
      /* harmony import */


      var _skelton_listview_skelton_listview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./skelton-listview/skelton-listview.component */
      "./src/app/components/skelton-listview/skelton-listview.component.ts");
      /* harmony import */


      var _image_view_image_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../image-view/image-view.component */
      "./src/app/image-view/image-view.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _show_comment_show_comment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./show-comment/show-comment */
      "./src/app/components/show-comment/show-comment.ts");
      /* harmony import */


      var _do_comment_do_comment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./do-comment/do-comment */
      "./src/app/components/do-comment/do-comment.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _poover_component_poover_component_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./poover-component/poover-component.component */
      "./src/app/components/poover-component/poover-component.component.ts");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_theme_button_theme_button_component__WEBPACK_IMPORTED_MODULE_3__["ThemeButtonComponent"], _text_layout_text_layout_component__WEBPACK_IMPORTED_MODULE_4__["TextLayoutComponent"], _custom_sizebutton_custom_sizebutton_component__WEBPACK_IMPORTED_MODULE_6__["CustomSizebuttonComponent"], _skelton_listview_skelton_listview_component__WEBPACK_IMPORTED_MODULE_7__["SkeltonListviewComponent"], _image_view_image_view_component__WEBPACK_IMPORTED_MODULE_8__["ImageViewComponent"], _show_comment_show_comment__WEBPACK_IMPORTED_MODULE_10__["ShowCommentComponent"], _do_comment_do_comment__WEBPACK_IMPORTED_MODULE_11__["DoCommentComponent"], _poover_component_poover_component_component__WEBPACK_IMPORTED_MODULE_13__["PooverComponentComponent"], _text_layout_read_more_text_layout_read_more_component__WEBPACK_IMPORTED_MODULE_5__["TextLayoutReadMoreComponent"]],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]],
        exports: [_theme_button_theme_button_component__WEBPACK_IMPORTED_MODULE_3__["ThemeButtonComponent"], _text_layout_text_layout_component__WEBPACK_IMPORTED_MODULE_4__["TextLayoutComponent"], _custom_sizebutton_custom_sizebutton_component__WEBPACK_IMPORTED_MODULE_6__["CustomSizebuttonComponent"], _skelton_listview_skelton_listview_component__WEBPACK_IMPORTED_MODULE_7__["SkeltonListviewComponent"], _image_view_image_view_component__WEBPACK_IMPORTED_MODULE_8__["ImageViewComponent"], _show_comment_show_comment__WEBPACK_IMPORTED_MODULE_10__["ShowCommentComponent"], _do_comment_do_comment__WEBPACK_IMPORTED_MODULE_11__["DoCommentComponent"], _poover_component_poover_component_component__WEBPACK_IMPORTED_MODULE_13__["PooverComponentComponent"], _text_layout_read_more_text_layout_read_more_component__WEBPACK_IMPORTED_MODULE_5__["TextLayoutReadMoreComponent"]]
      })], ComponentsModule);
      /***/
    },

    /***/
    "./src/app/components/custom-sizebutton/custom-sizebutton.component.scss":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/custom-sizebutton/custom-sizebutton.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCustomSizebuttonCustomSizebuttonComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-button.customBtn {\n  --background: linear-gradient(to right, #d33479 , #d33479);\n  min-width: 60% !important;\n  max-width: 100%;\n  white-space: pre-wrap;\n  --box-shadow: 1px 10px 11px -9px #d33479;\n  --border-radius: 20px;\n}\nion-button.customBtn .w-20 {\n  width: 20px !important;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tc2l6ZWJ1dHRvbi9jdXN0b20tc2l6ZWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBEQUFBO0VBQ0EseUJBQUE7RUFFSixlQUFBO0VBQWdCLHFCQUFBO0VBQ2hCLHdDQUFBO0VBQ0EscUJBQUE7QUFDQTtBQUFJO0VBQU0sc0JBQUE7RUFBc0IsaUJBQUE7QUFJaEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2N1c3RvbS1zaXplYnV0dG9uL2N1c3RvbS1zaXplYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbi5jdXN0b21CdG57XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkMzM0NzkgLCAjZDMzNDc5KTtcbiAgICBtaW4td2lkdGg6IDYwJSAhaW1wb3J0YW50OyBcbiAgICAvLyBib3gtc2hhZG93OiAxcHggMTBweCAxOXB4IC05cHggIzU0YmNlYztcbm1heC13aWR0aDogMTAwJTt3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4tLWJveC1zaGFkb3c6IDFweCAxMHB4IDExcHggLTlweCAjZDMzNDc5O1xuLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC53LTIwe3dpZHRoOjIwcHggIWltcG9ydGFudDttYXJnaW4tcmlnaHQ6IDVweDt9ICBcbiAgICAvLyAudy0yMHt3aWR0aDoyMHB4ICFpbXBvcnRhbnQ7bWFyZ2luLXJpZ2h0OiA1cHg7fSAgICBcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/custom-sizebutton/custom-sizebutton.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/custom-sizebutton/custom-sizebutton.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: CustomSizebuttonComponent */

    /***/
    function srcAppComponentsCustomSizebuttonCustomSizebuttonComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomSizebuttonComponent", function () {
        return CustomSizebuttonComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CustomSizebuttonComponent = /*#__PURE__*/function () {
        // @Input('btnDisable') btnDisable;
        function CustomSizebuttonComponent(zone) {
          _classCallCheck(this, CustomSizebuttonComponent);

          this.zone = zone;
          this.buttonName = '';
          this.buttonIconPath = '';
          this.iconClass = '';
          this.buttonSize = '';
        }

        _createClass(CustomSizebuttonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this = this;

            //Called after ngOnInit when the component's or directive's content has been initialized.
            //Add 'implements AfterContentInit' to the class.
            this.zone.run(function () {
              _this.buttonName = _this.btnText;
              _this.buttonIconPath = _this.iconPath;
              _this.iconClass = _this.className;
              _this.buttonSize = _this.buttonClass;
              console.log('buttonName== ', _this.buttonName + ' /buttonIconPath== ' + _this.buttonIconPath + ' /iconClass== ' + _this.iconClass + '/size', _this.buttonSize);
            });
          }
        }]);

        return CustomSizebuttonComponent;
      }();

      CustomSizebuttonComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      CustomSizebuttonComponent.propDecorators = {
        btnText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['btnText']
        }],
        iconPath: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['iconPath']
        }],
        className: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['className']
        }],
        buttonClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['size']
        }]
      };
      CustomSizebuttonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-custom-sizebutton',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./custom-sizebutton.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-sizebutton/custom-sizebutton.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./custom-sizebutton.component.scss */
        "./src/app/components/custom-sizebutton/custom-sizebutton.component.scss"))["default"]]
      })], CustomSizebuttonComponent);
      /***/
    },

    /***/
    "./src/app/components/do-comment/do-comment.ts":
    /*!*****************************************************!*\
      !*** ./src/app/components/do-comment/do-comment.ts ***!
      \*****************************************************/

    /*! exports provided: DoCommentComponent */

    /***/
    function srcAppComponentsDoCommentDoCommentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoCommentComponent", function () {
        return DoCommentComponent;
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


      var src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");
      /* harmony import */


      var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/local-storage.service */
      "./src/app/services/local-storage.service.ts");
      /* harmony import */


      var _src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../src/assets/constant */
      "./src/assets/constant.ts"); // import { IonInput } from 'node_modules2/@ionic/angular';


      var DoCommentComponent = /*#__PURE__*/function () {
        function DoCommentComponent(zone, apiServices, sendData, storageService) {
          _classCallCheck(this, DoCommentComponent);

          // this.sendData.alldata
          // console.log("Hello DoCommentComponent Component==");
          this.zone = zone;
          this.apiServices = apiServices;
          this.sendData = sendData;
          this.storageService = storageService;
          this.myComment = '';
          this.currentActivePage = '';
          this.remainingLetterCount = 150;
          this.remainingLetter = 150;
          this.btnDisable = true;
        }

        _createClass(DoCommentComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            if (this.showFocusCurser == 'true') {
              console.log("show focus curser0==", this.showFocusCurser);
              setTimeout(function () {
                _this2.inputElement.setFocus();
              }, 400);
            } else {
              console.log("show focus curser1==", this.showFocusCurser);
            }
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.commentData = this.doCommentData;
            console.log("commentData received==", this.commentData);
            this.currentActivePage = this.pageName;
            console.log("commentData pageName==", this.currentActivePage);
            this.showFocusCurser = this.showFocus;
            console.log("show focus curser2==", this.showFocusCurser); // this function is use to edit the text(comment) Start

            this.editedData = this.sendData.alldata;

            if (this.editedData) {
              console.log("commentData editedData SR==", this.editedData);

              for (var i = 0; i < this.commentData.comments.length; i++) {
                if (this.commentData.comments[i].comment_id == this.editedData.comment_id) {
                  console.log("commentData comments==", this.editedData.comments);
                  this.myComment = this.editedData.comment;
                }
              }
            } // this function is use to edit the text(comment) End


            if (this.postIndex == undefined) {
              this.index = 0;
            } else {
              this.index = this.postIndex;
            }

            console.log("commentData received==", this.commentData + 'index==> ' + this.index);
          }
        }, {
          key: "linkify",
          value: function linkify(plainText) {
            // let replacedText;
            // let replacePattern1;
            // let replacePattern2;
            // let replacePattern3;
            // //URLs starting with http://, https://, or ftp://
            // replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
            // // replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
            // replacedText = plainText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');
            // //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
            // replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
            // replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');
            // //Change email addresses to mailto:: links.
            // replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
            // replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');
            // return replacedText;
            var result = plainText.replace(/((?:(http|https|Http|Https|rtsp|Rtsp):\/\/(?:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,64}(?:\:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,25})?\@)?)?((?:(?:[a-zA-Z0-9][a-zA-Z0-9\-]{0,64}\.)+(?:(?:aero|arpa|asia|a[cdefgilmnoqrstuwxz])|(?:biz|b[abdefghijmnorstvwyz])|(?:cat|com|coop|c[acdfghiklmnoruvxyz])|d[ejkmoz]|(?:edu|e[cegrstu])|f[ijkmor]|(?:gov|g[abdefghilmnpqrstuwy])|h[kmnrtu]|(?:info|int|i[delmnoqrst])|(?:jobs|j[emop])|k[eghimnrwyz]|l[abcikrstuvy]|(?:mil|mobi|museum|m[acdghklmnopqrstuvwxyz])|(?:name|net|n[acefgilopruz])|(?:org|om)|(?:pro|p[aefghklmnrstwy])|qa|r[eouw]|s[abcdeghijklmnortuvyz]|(?:tel|travel|t[cdfghjklmnoprtvwz])|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw]))|(?:(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9])\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[0-9])))(?:\:\d{1,5})?)(\/(?:(?:[a-zA-Z0-9\;\/\?\:\@\&\=\#\~\-\.\+\!\*\'\(\)\,\_])|(?:\%[a-fA-F0-9]{2}))*)?(?:\b|$)/g, '<a href="$1"  target="_blank" >$1</a>');
            return result;
          }
        }, {
          key: "doComment",
          value: function doComment(text) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var HTMLText;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log("text of comment==", text); // text=text.toString();

                      _context.next = 3;
                      return this.linkify(text);

                    case 3:
                      HTMLText = _context.sent;
                      console.log('html tag==> ', HTMLText);
                      this.zone.run(function () {
                        console.log("typed text of comment==", text);
                        console.log("all comment data array==", _this3.commentData);
                        var apiKey = {
                          "post_id": _this3.commentData.post_id,
                          "module_id": _this3.commentData.module_id,
                          "comment": text,
                          "parent_commentid": ""
                        }; //following key will be used in apiservice for keeping original comment obj

                        var copy_apiKey = {
                          "post_id": _this3.commentData.post_id,
                          "module_id": _this3.commentData.module_id,
                          "comment": text,
                          "parent_commentid": ""
                        };
                        console.log("brand pending api keys==", apiKey); // console.log("this commentData==", this.commentData);      
                        // this function is use to edit the text(comment) Start
                        // this.editedData=this.sendData.alldata;
                        // console.log("sho list==", this.editedData);

                        _this3.apiServices.apiCallWithLoginTokenComment(_src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].submitCommentApi, apiKey, copy_apiKey).subscribe(function (result) {
                          console.log("brand pending Api Result==", result);

                          if (result.status == 1) {
                            console.log("brand detail result==", result);
                            var obj = {
                              "profile_image": _this3.commentData.settings.loggedEmpProfile,
                              "full_name": _this3.commentData.settings.loggedEmpName,
                              "designation": _this3.commentData.settings.loggedEmpDesg,
                              "comment": HTMLText,
                              "comment_time": "Just now",
                              "isCommentLikeSetting": "1",
                              "isCommentReplySetting": "1",
                              "like_status": "0",
                              "total_likes": "0",
                              "total_comments": "0",
                              "comment_id": result.last_comment_id,
                              "comments": [],
                              "can_edit": "1",
                              "can_delete": "1",
                              "parent_comment_id": "0"
                            };

                            _this3.commentData.comments.unshift(obj);

                            _this3.commentData.total_comments = parseInt(_this3.commentData.total_comments) + 1;
                            console.log("edit success==", _this3.commentData);
                            _this3.myComment = '';

                            _this3.inputElement.setFocus();
                          } else {}
                        }, function (err) {
                          console.log("edit text api error==", JSON.stringify(err));

                          _this3.apiServices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                        });
                      });

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "editCommentFun",
          value: function editCommentFun(text) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var HTMLText;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log("text of comment==", text); // text=text.toString();

                      _context2.next = 3;
                      return this.linkify(text);

                    case 3:
                      HTMLText = _context2.sent;
                      console.log('html tag==> ', HTMLText);
                      this.zone.run(function () {
                        _this4.storageService.getStorage().then(function (stored) {
                          console.log("typed text of comment==", text);
                          console.log("all comment data array==", _this4.commentData);
                          var apiKey = {
                            "post_id": _this4.commentData.post_id,
                            "module_id": _this4.commentData.module_id,
                            "comment": text,
                            "employee_id": stored.employeeID,
                            "comment_id": _this4.editedData.comment_id
                          }; //following key will be used in apiservice for keeping original comment obj

                          var copy_apiKey = {
                            "post_id": _this4.commentData.post_id,
                            "module_id": _this4.commentData.module_id,
                            "comment": text,
                            "employee_id": stored.employeeID,
                            "comment_id": _this4.editedData.comment_id
                          };
                          console.log("brand pending api keys==", apiKey);

                          _this4.apiServices.apiCallWithLoginTokenComment(_src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].editCommentApi, apiKey, copy_apiKey).subscribe(function (result) {
                            console.log("brand pending Api Result==", result);

                            if (result.status == 1) {
                              console.log("brand detail result==", result); // if(this.editedData.editComment=="edit"){

                              console.log("this.commentData.comments", _this4.commentData.comments);

                              for (var i = 0; i < _this4.commentData.comments.length; i++) {
                                if (_this4.commentData.comments[i].comment_id == _this4.editedData.comment_id) {
                                  console.log("this commentData.comments==", _this4.commentData.comments[i].comment_id);
                                  _this4.commentData.comments[i].comment = text;
                                  _this4.apiServices.showCommentBox = false;
                                  _this4.myComment = "";
                                }
                              }

                              console.log("edit success==", _this4.commentData); // this function is use to edit the text(comment) End        
                              // }
                            } else {}
                          }, function (err) {
                            console.log("edit text api error==", JSON.stringify(err));

                            _this4.apiServices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                          });
                        });
                      });

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "countLetter",
          value: function countLetter(text) {
            var _this5 = this;

            this.zone.run(function () {
              if (_this5.currentActivePage == "badgeSend") {
                _this5.remainingLetter = _this5.remainingLetterCount - text.length;

                if (_this5.remainingLetter < 0) {
                  _this5.btnDisable = true;
                } else {
                  _this5.btnDisable = false;
                }
              } else {
                if (text.trim().length < 1) {
                  _this5.btnDisable = true;
                } else {
                  _this5.btnDisable = false;
                }
              }
            });
          }
        }]);

        return DoCommentComponent;
      }();

      DoCommentComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"]
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_3__["DataTransferService"]
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]
        }];
      };

      DoCommentComponent.propDecorators = {
        inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['input']
        }],
        doCommentData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        postIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pageName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      DoCommentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'do-comment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./do-comment.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/do-comment/do-comment.html"))["default"]
      })], DoCommentComponent);
      /***/
    },

    /***/
    "./src/app/components/editpopover/editpopover.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/components/editpopover/editpopover.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsEditpopoverEditpopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdHBvcG92ZXIvZWRpdHBvcG92ZXIuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/components/editpopover/editpopover.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/editpopover/editpopover.component.ts ***!
      \*****************************************************************/

    /*! exports provided: EditpopoverComponent */

    /***/
    function srcAppComponentsEditpopoverEditpopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditpopoverComponent", function () {
        return EditpopoverComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");
      /* harmony import */


      var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");
      /* harmony import */


      var src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/assets/constant */
      "./src/assets/constant.ts");

      var EditpopoverComponent = /*#__PURE__*/function () {
        function EditpopoverComponent(alertController, navParams, popover, zone, apiservices, sendData) {
          _classCallCheck(this, EditpopoverComponent);

          this.alertController = alertController;
          this.navParams = navParams;
          this.popover = popover;
          this.zone = zone;
          this.apiservices = apiservices;
          this.sendData = sendData;
          this.showEdit = false;
          this.index = this.navParams.get('index');
          this.deleteArr = this.navParams.get('deletedata');
          this.objectArr = this.navParams.get('objectArr');
          this.MainArrObject = this.navParams.get('mainArrObject');
          console.log('ind', this.index);
          console.log('ind1', this.deleteArr);
          console.log('ind2', this.objectArr);
          console.log('ind3', this.MainArrObject); // if
          // this.showEdit=this.objectArr.can_edit;
          // this.showDelete=this.objectArr.can_edit
        }

        _createClass(EditpopoverComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this6 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        // header: 'Confirm!',
                        message: 'Are you sure you want to delete your comment?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {}
                        }, {
                          text: 'Delete',
                          handler: function handler() {
                            _this6.deleteFun();
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "gotoEdit",
          value: function gotoEdit() {
            this.popover.dismiss({
              'dismissed': true,
              'data': {
                ind: this.index,
                objectData: this.objectArr
              }
            });
            this.showFocus = true;

            if (this.objectArr.parent_comment_id == '0') {
              console.log("resend OTP by Voice Call this.MainArrObject", this.MainArrObject);
              this.objectArr.editComment = "edit";
              this.apiservices.showCommentBox = true;
              this.sendData.alldata = this.objectArr;
              console.log('val', this.sendData.alldata);
            } else {
              this.apiservices.showReplyComment = true;
              console.log("resend OTP by Voice Call this.MainArrObject1", this.MainArrObject);
              this.objectArr.editComment = "edit";
              this.sendData.alldata = this.objectArr; //   // this.showIndex=this.index;
            } // this.allDataEdit=this.objectArr;

          }
        }, {
          key: "deleteFun",
          value: function deleteFun() {
            var _this7 = this;

            this.zone.run(function () {
              _this7.apiservices.showLoader();

              var apiKey = {
                comment_id: _this7.objectArr.comment_id
              };
              console.log("resend OTP by Voice Call, api key", apiKey);

              _this7.apiservices.apiCallWithLoginToken(src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].deleteCommentApi, apiKey).subscribe(function (result) {
                console.log("resend OTP by Voice Call, api response==", result);

                _this7.apiservices.hideLoader();

                if (result.status == 1 || result.status == '1') {
                  _this7.deleteArr.splice(_this7.index, 1);

                  _this7.MainArrObject.total_comments = parseInt(_this7.MainArrObject.total_comments) - 1;
                  console.log("resend OTP by Voice Call, api response==", _this7.objectArr);

                  _this7.popover.dismiss({
                    'dismissed': true,
                    'data': {
                      ind: '',
                      objectData: ''
                    }
                  });

                  _this7.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');
                } else {
                  _this7.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this7.apiservices.hideLoader();

                _this7.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }]);

        return EditpopoverComponent;
      }();

      EditpopoverComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_3__["ApiservicesService"]
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"]
        }];
      };

      EditpopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editpopover',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./editpopover.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/editpopover/editpopover.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./editpopover.component.scss */
        "./src/app/components/editpopover/editpopover.component.scss"))["default"]]
      })], EditpopoverComponent);
      /***/
    },

    /***/
    "./src/app/components/poover-component/poover-component.component.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/poover-component/poover-component.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsPooverComponentPooverComponentComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".popOverStaticDiv p {\n  font-size: 16px;\n}\n.popOverStaticDiv .listDiv {\n  border-bottom: 1px solid gray;\n  padding: 10px;\n}\n.popOverStaticDiv .listDiv:nth-last-child(1) {\n  border-bottom: 0px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb292ZXItY29tcG9uZW50L3Bvb3Zlci1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFBRSxlQUFBO0FBQ047QUFBSTtFQUFTLDZCQUFBO0VBQTZCLGFBQUE7QUFJMUM7QUFISTtFQUEyQiw4QkFBQTtBQU0vQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9vdmVyLWNvbXBvbmVudC9wb292ZXItY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcE92ZXJTdGF0aWNEaXZ7XG4gICAgcHtmb250LXNpemU6MTZweDt9XG4gICAgLmxpc3REaXZ7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgZ3JheTtwYWRkaW5nOjEwcHg7fVxuICAgIC5saXN0RGl2Om50aC1sYXN0LWNoaWxkKDEpe2JvcmRlci1ib3R0b206MHB4IHNvbGlkIGJsYWNrO31cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/poover-component/poover-component.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/components/poover-component/poover-component.component.ts ***!
      \***************************************************************************/

    /*! exports provided: PooverComponentComponent */

    /***/
    function srcAppComponentsPooverComponentPooverComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PooverComponentComponent", function () {
        return PooverComponentComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/local-storage.service */
      "./src/app/services/local-storage.service.ts");
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/events.service */
      "./src/app/services/events.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var PooverComponentComponent = /*#__PURE__*/function () {
        function PooverComponentComponent(apiservices, router, zone, menuCtrl, storage, sendData, storageService, eventService, location) {
          _classCallCheck(this, PooverComponentComponent);

          this.apiservices = apiservices;
          this.router = router;
          this.zone = zone;
          this.menuCtrl = menuCtrl;
          this.storage = storage;
          this.sendData = sendData;
          this.storageService = storageService;
          this.eventService = eventService;
          this.location = location;
          this.listData = [];
        }

        _createClass(PooverComponentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this8 = this;

            //Called after ngOnInit when the component's or directive's content has been initialized.
            //Add 'implements AfterContentInit' to the class.
            this.zone.run(function () {
              _this8.listData = [{
                "name": "News",
                "redirection_url": ""
              }, {
                "name": "Leadership Connect",
                "redirection_url": ""
              }, {
                "name": "Newsletter",
                "redirection_url": ""
              }];
              console.log("popoverData==", _this8.listData);
            });
          }
        }, {
          key: "goToRedirection",
          value: function goToRedirection(value) {
            if (value.redirection_url != '') {
              this.router.navigate([value.redirection_url]);
            } else {}
          }
        }]);

        return PooverComponentComponent;
      }();

      PooverComponentComponent.ctorParameters = function () {
        return [{
          type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__["DataTransferService"]
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_8__["EventsService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]
        }];
      };

      PooverComponentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-poover-component',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./poover-component.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/poover-component/poover-component.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./poover-component.component.scss */
        "./src/app/components/poover-component/poover-component.component.scss"))["default"]]
      })], PooverComponentComponent);
      /***/
    },

    /***/
    "./src/app/components/show-comment/show-comment.ts":
    /*!*********************************************************!*\
      !*** ./src/app/components/show-comment/show-comment.ts ***!
      \*********************************************************/

    /*! exports provided: ShowCommentComponent */

    /***/
    function srcAppComponentsShowCommentShowCommentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowCommentComponent", function () {
        return ShowCommentComponent;
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


      var src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");
      /* harmony import */


      var _src_assets_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../src/assets/constant */
      "./src/assets/constant.ts");
      /* harmony import */


      var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/local-storage.service */
      "./src/app/services/local-storage.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _editpopover_editpopover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../editpopover/editpopover.component */
      "./src/app/components/editpopover/editpopover.component.ts");

      var ShowCommentComponent = /*#__PURE__*/function () {
        function ShowCommentComponent(zone, apiServices, router, sendData, localStorage, popoverController) {
          _classCallCheck(this, ShowCommentComponent);

          this.zone = zone;
          this.apiServices = apiServices;
          this.router = router;
          this.sendData = sendData;
          this.localStorage = localStorage;
          this.popoverController = popoverController;
          this.commentList = 'false';
          this.likeList = 'false';
          this.currentPage = '';
          this.autoScroll = false; // showReplyComment: boolean=false;

          this.myComment = '';
          console.log("like and comment data object0==", this.allCommentObj);
        }

        _createClass(ShowCommentComponent, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.data = this.allCommentObj;
            console.log("like and comment data object1==", this.data);
            console.log("like and comment data object2==", this.allCommentObj);
            this.commentList = this.showCommentList;
            console.log("showCommentList check==", this.commentList);
            this.likeList = this.showLikeList;
            console.log("showLikeList check==", this.likeList);
            this.currentPage = this.redirectPage, console.log("redirectPage ==", this.currentPage);
            this.autoScroll = this.showAutoScroll, console.log("autoScrollClick show component ==", this.showAutoScroll);
          } // editComment(cmntData){
          //   this.zone.run(()=>{      
          //     console.log("comment Data editable==", cmntData);
          //     cmntData.editComment="edit",
          //     console.log("comment Data editableing==", cmntData);
          //     this.sendData.alldata=cmntData;
          //     this.apiServices.showCommentBox=true;
          //   });
          // }
          // deleteComment(index){
          //   this.zone.run(()=>{
          //     console.log("deleted index==", index);
          //     this.allCommentObj.comments.splice(index,1);
          //     this.allCommentObj.total_comments=parseInt(this.allCommentObj.total_comments) -1;
          //   });
          // }

        }, {
          key: "showCommentBox",
          value: function showCommentBox(data) {
            var _this9 = this;

            this.zone.run(function () {
              console.log("data data==", data);
              console.log("show comment currentPage==", _this9.currentPage); // return(this.apiServices.showCommentBox=false);
              //agar 'currentPage==empty' that means show comment box otherwise redirect on particular page

              if (_this9.currentPage == '' || _this9.currentPage == null || _this9.currentPage == undefined) {
                data.editComment = "noEdit", _this9.sendData.alldata = data;
                _this9.apiServices.showCommentBox = true;
                console.log("show commen showCommentBox==", _this9.apiServices.showCommentBox);
              } else {
                // this.apiServices.showCommentBox=true;
                _this9.sendData.autoScroll = _this9.autoScroll;
                console.log("autoScrollClick show component click==", _this9.autoScroll);
                _this9.sendData.myParam = data;
                console.log("autoScrollClick show component click==", _this9.sendData.myParam); // this.apiServices.showCommentBox=true;

                _this9.router.navigate([_this9.currentPage]);
              }
            });
          }
        }, {
          key: "showCommentBox1",
          value: function showCommentBox1(ind, cmtDat) {
            console.log('heiii');
            this.showIndex = ind;
            this.myComment = '';
            this.autoScroll = true;
            cmtDat.editComment = "noEdit";
            console.log("typed text of comment==", cmtDat);
            this.apiServices.showReplyComment = true;
            this.editedData = undefined;
          }
        }, {
          key: "linkify",
          value: function linkify(plainText) {
            var result = plainText.replace(/((?:(http|https|Http|Https|rtsp|Rtsp):\/\/(?:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,64}(?:\:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,25})?\@)?)?((?:(?:[a-zA-Z0-9][a-zA-Z0-9\-]{0,64}\.)+(?:(?:aero|arpa|asia|a[cdefgilmnoqrstuwxz])|(?:biz|b[abdefghijmnorstvwyz])|(?:cat|com|coop|c[acdfghiklmnoruvxyz])|d[ejkmoz]|(?:edu|e[cegrstu])|f[ijkmor]|(?:gov|g[abdefghilmnpqrstuwy])|h[kmnrtu]|(?:info|int|i[delmnoqrst])|(?:jobs|j[emop])|k[eghimnrwyz]|l[abcikrstuvy]|(?:mil|mobi|museum|m[acdghklmnopqrstuvwxyz])|(?:name|net|n[acefgilopruz])|(?:org|om)|(?:pro|p[aefghklmnrstwy])|qa|r[eouw]|s[abcdeghijklmnortuvyz]|(?:tel|travel|t[cdfghjklmnoprtvwz])|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw]))|(?:(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9])\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[0-9])))(?:\:\d{1,5})?)(\/(?:(?:[a-zA-Z0-9\;\/\?\:\@\&\=\#\~\-\.\+\!\*\'\(\)\,\_])|(?:\%[a-fA-F0-9]{2}))*)?(?:\b|$)/g, '<a href="$1"  target="_blank" >$1</a>');
            return result;
          }
        }, {
          key: "replyOnCommentF",
          value: function replyOnCommentF(text, cmtData) {
            console.log("typed text of comment editedData==", this.editedData);
            console.log("typed text of comment cmtData==", cmtData);

            if (this.editedData == undefined) {
              this.replyOnCommentFun(text, cmtData);
            } else {
              this.replyOnCommentEditFun(text, cmtData);
            } // if(cmtData.editComment=='edit'){
            //   console.log("typed text of comment edit==", cmtData);
            // }else{
            //   console.log("typed text of comment fresh==", cmtData);
            // }

          }
        }, {
          key: "replyOnCommentFun",
          value: function replyOnCommentFun(text, cmtData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this10 = this;

              var HTMLText;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.log("text of comment==", text);
                      _context4.next = 3;
                      return this.linkify(text);

                    case 3:
                      HTMLText = _context4.sent;
                      console.log('html tag==> ', HTMLText);
                      this.zone.run(function () {
                        console.log("typed text of comment==", text); // console.log("all comment data array==", this.commentData);

                        _this10.localStorage.getStorage().then(function (storedData) {
                          var apiKey = {
                            "employee_id": storedData.employeeID,
                            "post_id": _this10.data.post_id,
                            "module_id": _this10.data.module_id,
                            "comment": text,
                            "parent_commentid": cmtData.comment_id
                          }; //following key will be used in apiservice for keeping original comment obj

                          var copy_apiKey = {
                            "employee_id": storedData.employeeID,
                            "post_id": _this10.data.post_id,
                            "module_id": _this10.data.module_id,
                            "comment": text,
                            "parent_commentid": cmtData.comment_id
                          };
                          console.log("brand pending api keys==", apiKey);
                          console.log("this commentData==", _this10.data); // this function is use to edit the text(comment) Start

                          console.log("brand detail result==", _this10.showIndex);

                          _this10.apiServices.apiCallWithLoginTokenComment(_src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].submitCommentApi, apiKey, copy_apiKey).subscribe(function (result) {
                            console.log("brand pending Api Result==", result);

                            if (result.status == 1) {
                              _this10.apiServices.showReplyComment = false;
                              var obj = {
                                "profile_image": _this10.data.settings.loggedEmpProfile,
                                "full_name": _this10.data.settings.loggedEmpName,
                                "designation": _this10.data.settings.loggedEmpDesg,
                                "comment": HTMLText,
                                "comment_time": "Just now",
                                "comment_id": result.last_comment_id,
                                "isCommentLikeSetting": "1",
                                "total_likes": "0",
                                "like_status": "0",
                                "can_edit": "1",
                                "can_delete": "1",
                                "parent_comment_id": result.last_comment_id
                              };
                              cmtData.comments.unshift(obj);
                              cmtData.total_comments = parseInt(cmtData.total_comments) + 1;
                              console.log("edit success==", _this10.data);
                              _this10.myComment = '';

                              _this10.inputElement.setFocus();
                            } else {}
                          }, function (err) {
                            console.log("edit text api error==", JSON.stringify(err));

                            _this10.apiServices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                          });
                        });
                      });

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "replyOnCommentEditFun",
          value: function replyOnCommentEditFun(text, cmtData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this11 = this;

              var HTMLText;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      console.log("text of comment==", text);
                      _context5.next = 3;
                      return this.linkify(text);

                    case 3:
                      HTMLText = _context5.sent;
                      console.log('html tag==> ', HTMLText);
                      this.zone.run(function () {
                        console.log("typed text of comment==", text);

                        _this11.localStorage.getStorage().then(function (storedData) {
                          var apiKey = {
                            "employee_id": storedData.employeeID,
                            "post_id": _this11.data.post_id,
                            "module_id": _this11.data.module_id,
                            "comment": text,
                            "comment_id": _this11.editedData.comment_id
                          }; //following key will be used in apiservice for keeping original comment obj

                          var copy_apiKey = {
                            "employee_id": storedData.employeeID,
                            "post_id": _this11.data.post_id,
                            "module_id": _this11.data.module_id,
                            "comment": text,
                            "comment_id": _this11.editedData.comment_id
                          };
                          console.log("brand pending api keys==", apiKey);
                          console.log("this commentData==", _this11.data); // this function is use to edit the text(comment) Start

                          console.log("brand detail result==", _this11.showIndex);

                          _this11.apiServices.apiCallWithLoginTokenComment(_src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].editCommentApi, apiKey, copy_apiKey).subscribe(function (result) {
                            console.log("brand pending Api Result==", result);

                            if (result.status == 1) {
                              _this11.apiServices.showReplyComment = false; // if(this.editedData){
                              //   if(this.editedData.editComment=="edit"){

                              console.log("this.commentData.comments", _this11.editedData);

                              for (var i = 0; i < cmtData.comments.length; i++) {
                                if (cmtData.comments[i].comment_id == _this11.editedData.comment_id) {
                                  console.log("this commentData.comments==", cmtData.comments[i].comment_id);
                                  cmtData.comments[i].comment = text; // this.apiServices.showReplyComment=false;

                                  _this11.myComment = ""; // this.editedData=undefined;
                                  // this.editedData='';
                                  // this.editedData.editComment=="noEdit";
                                  //   }
                                  // }

                                  console.log("edit success==", cmtData); // this function is use to edit the text(comment) End 
                                }
                              }
                            } else {}
                          }, function (err) {
                            console.log("edit text api error==", JSON.stringify(err));

                            _this11.apiServices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                          });
                        });
                      });

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "changeLikeStatus",
          value: function changeLikeStatus(data) {
            var _this12 = this;

            console.log("like count data1==", data);
            this.zone.run(function () {
              if (_this12.data.like_status == 1) {
                console.log("like count data2==", data);
                _this12.data.total_likes = parseInt(_this12.data.total_likes) - 1;
                _this12.data.like_status = 0;

                if (_this12.data.likes != undefined) {
                  for (var i = 0; i < _this12.data.likes.length; i++) {
                    if (_this12.data.settings.loggedEmpName == _this12.data.likes[i].full_name) {
                      console.log("like status;==", i);

                      _this12.data.likes.splice(i, 1);
                    }
                  }
                }
              } else {
                console.log("like count data3==", data);
                _this12.data.total_likes = parseInt(_this12.data.total_likes) + 1;
                _this12.data.like_status = 1;

                if (_this12.data.likes != undefined) {
                  var obj = {
                    "profile_image": _this12.data.settings.loggedEmpProfile,
                    "full_name": _this12.data.settings.loggedEmpName
                  };

                  _this12.data.likes.unshift(obj);
                }
              }

              var apiKey = {
                "post_id": _this12.data.post_id,
                "like_flag": _this12.data.like_status,
                "module_id": _this12.data.module_id,
                "like_id": "1"
              };
              console.log("brand pending api keys==", apiKey);

              _this12.apiServices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].likePostApi, apiKey).subscribe(function (result) {
                console.log("brand pending Api Result==", result);

                if (result.status == 1) {
                  // this.apiServices.showToastMessage(result.message, 'top', 3000, 'greenBg');
                  console.log("brand detail result==", _this12.data);
                } else {// this.apiServices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this12.apiServices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "changeLikeStatus1",
          value: function changeLikeStatus1(val) {
            var _this13 = this;

            console.log("like count data1==", val);
            this.zone.run(function () {
              if (val.like_status == 1) {
                console.log("like count data2==", val);
                val.total_likes = parseInt(val.total_likes) - 1;
                val.like_status = 0; // if(this.data.likes!=undefined){
                //   for(let i=0; i<this.data.likes.length; i++){
                //     if(this.data.settings.loggedEmpName==this.data.likes[i].full_name){
                //       console.log("like status;==",i);
                //       this.data.likes.splice(i,1);
                //     }
                //   }
                // }
              } else {
                console.log("like count data3==", val);
                val.total_likes = parseInt(val.total_likes) + 1;
                val.like_status = 1; // if(this.data.likes!=undefined){
                //   let obj={
                //     "profile_image":this.data.settings.loggedEmpProfile,
                //     "full_name":this.data.settings.loggedEmpName
                //   }
                //   this.data.likes.unshift(obj);
                // }
              }

              _this13.localStorage.getStorage().then(function (stored) {
                var apiKey = {
                  "employee_id": stored.employeeID,
                  "post_id": _this13.data.post_id,
                  "like_flag": val.like_status,
                  "module_id": _this13.data.module_id,
                  "like_id": "1",
                  "comment_id": val.comment_id
                };
                console.log("brand pending api keys==", apiKey);

                _this13.apiServices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_5__["URLS"].likeOnCommentApi, apiKey).subscribe(function (result) {
                  console.log("brand pending Api Result==", result);

                  if (result.status == 1) {
                    // this.apiServices.showToastMessage(result.message, 'top', 3000, 'greenBg');
                    console.log("brand detail result==", _this13.data);
                  } else {// this.apiServices.showToastMessage(result.message, 'top', 3000, 'redBg');
                  }
                }, function (err) {
                  _this13.apiServices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
              });
            });
          }
        }, {
          key: "presentPopover",
          value: function presentPopover(event, ind, allData, cmtData, MainArrObject) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this14 = this;

              var popover;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      this.apiServices.showCommentBox = false;
                      _context6.next = 3;
                      return this.popoverController.create({
                        event: event,
                        component: _editpopover_editpopover_component__WEBPACK_IMPORTED_MODULE_8__["EditpopoverComponent"],
                        cssClass: 'editDeleteClass',
                        componentProps: {
                          index: ind,
                          deletedata: allData,
                          objectArr: cmtData,
                          mainArrObject: MainArrObject
                        },
                        translucent: true
                      });

                    case 3:
                      popover = _context6.sent;
                      popover.onDidDismiss().then(function (result) {
                        console.log("ggggggggggggggggg", result['data']);

                        if (result.data.data.objectData.parent_comment_id == 0) {} else {
                          _this14.sendData.autoScroll = 'true';
                          _this14.editedData = result.data.data.objectData;
                          _this14.showIndex = result.data.data.ind;
                          console.log("commentData editedData SR==", _this14.editedData);
                          console.log("commentData comments==", MainArrObject);

                          for (var i = 0; i < MainArrObject.comments.length; i++) {
                            if (MainArrObject.comments[i].comment_id == _this14.editedData.comment_id) {
                              console.log("commentData comments==", _this14.editedData.comment_id);
                              _this14.myComment = _this14.editedData.comment;
                            }
                          }
                        }
                      });
                      _context6.next = 7;
                      return popover.present();

                    case 7:
                      return _context6.abrupt("return", _context6.sent);

                    case 8:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "likeUserList",
          value: function likeUserList(data) {
            var _this15 = this;

            this.zone.run(function () {
              console.log("data==>", data);
              _this15.sendData.alldata = data;
              _this15.sendData.myParam = _this15.data;

              _this15.router.navigate(["/like-list"]);
            });
          }
        }]);

        return ShowCommentComponent;
      }();

      ShowCommentComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_data_transfer_service__WEBPACK_IMPORTED_MODULE_4__["DataTransferService"]
        }, {
          type: src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"]
        }];
      };

      ShowCommentComponent.propDecorators = {
        inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['input']
        }],
        allCommentObj: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showCommentList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showLikeList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        redirectPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showAutoScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      ShowCommentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'show-comment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./show-comment.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/show-comment/show-comment.html"))["default"]
      })], ShowCommentComponent);
      /***/
    },

    /***/
    "./src/app/components/skelton-listview/skelton-listview.component.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/skelton-listview/skelton-listview.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsSkeltonListviewSkeltonListviewComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".arrawIcon {\n  position: relative;\n  margin: 10px 0 0 0;\n}\n\n.arrawIcon::after {\n  content: \"\";\n  position: absolute;\n  right: 30px;\n  bottom: -20px;\n  border-bottom: 0px solid green;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  border-top: 25px solid #eeeeee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9za2VsdG9uLWxpc3R2aWV3L3NrZWx0b24tbGlzdHZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVyxrQkFBQTtFQUFrQixrQkFBQTtBQUc3Qjs7QUFEQTtFQUFrQixXQUFBO0VBQVcsa0JBQUE7RUFBa0IsV0FBQTtFQUFXLGFBQUE7RUFBYSw4QkFBQTtFQUNuRSxtQ0FBQTtFQUFtQyxvQ0FBQTtFQUFvQyw4QkFBQTtBQVczRSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2tlbHRvbi1saXN0dmlldy9za2VsdG9uLWxpc3R2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFycmF3SWNvbntwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MTBweCAwIDAgMDt9XG5cbi5hcnJhd0ljb246OmFmdGVye2NvbnRlbnQ6XCJcIjtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDozMHB4O2JvdHRvbTotMjBweDtib3JkZXItYm90dG9tOjBweCBzb2xpZCBncmVlbjtcbiAgICBib3JkZXItbGVmdDoyMHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yaWdodDoyMHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci10b3A6MjVweCBzb2xpZCAjZWVlZWVlO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/skelton-listview/skelton-listview.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/components/skelton-listview/skelton-listview.component.ts ***!
      \***************************************************************************/

    /*! exports provided: SkeltonListviewComponent */

    /***/
    function srcAppComponentsSkeltonListviewSkeltonListviewComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkeltonListviewComponent", function () {
        return SkeltonListviewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SkeltonListviewComponent = /*#__PURE__*/function () {
        function SkeltonListviewComponent(zone) {
          _classCallCheck(this, SkeltonListviewComponent);

          this.zone = zone;
          this.skeletonPath = '';
          this.iconClass = '';
        }

        _createClass(SkeltonListviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.zone.run(function () {
              _this16.skeletonPath = _this16.iconPath;
              _this16.iconClass = _this16.className;
              console.log('list view skeletonPath== ', _this16.skeletonPath);
              console.log('list view iconClass== ', _this16.iconClass);
            });
          }
        }]);

        return SkeltonListviewComponent;
      }();

      SkeltonListviewComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      SkeltonListviewComponent.propDecorators = {
        iconPath: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        className: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      SkeltonListviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skelton-listview',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./skelton-listview.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/skelton-listview/skelton-listview.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./skelton-listview.component.scss */
        "./src/app/components/skelton-listview/skelton-listview.component.scss"))["default"]]
      })], SkeltonListviewComponent);
      /***/
    },

    /***/
    "./src/app/components/text-layout-read-more/text-layout-read-more.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/components/text-layout-read-more/text-layout-read-more.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsTextLayoutReadMoreTextLayoutReadMoreComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGV4dC1sYXlvdXQtcmVhZC1tb3JlL3RleHQtbGF5b3V0LXJlYWQtbW9yZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/components/text-layout-read-more/text-layout-read-more.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/text-layout-read-more/text-layout-read-more.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: TextLayoutReadMoreComponent */

    /***/
    function srcAppComponentsTextLayoutReadMoreTextLayoutReadMoreComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextLayoutReadMoreComponent", function () {
        return TextLayoutReadMoreComponent;
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


      var src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");
      /* harmony import */


      var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/photo-viewer/ngx */
      "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");

      var TextLayoutReadMoreComponent = /*#__PURE__*/function () {
        function TextLayoutReadMoreComponent(zone, apiservices, photoViewer) {
          _classCallCheck(this, TextLayoutReadMoreComponent);

          this.zone = zone;
          this.apiservices = apiservices;
          this.photoViewer = photoViewer;
          this.textData = '';
          this.divClass = '';
        }

        _createClass(TextLayoutReadMoreComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            setTimeout(function () {
              _this17.zone.run(function () {
                _this17.textData = _this17.text;
                _this17.divClass = _this17.className;
              });
            }, 500);
          }
        }, {
          key: "handleClick",
          value: function handleClick(event) {
            if (event.target.tagName == "IMG") {
              this.photoViewer.show(event.target);
              return false;
            }

            if (event.target.tagName == "A") {
              // open link using inappbrowser
              this.apiservices.iab.create(event.target.href, "_system", this.apiservices.options);
              return false;
            }
          }
        }, {
          key: "truncString",
          value: function truncString(str, max, add) {
            if (str.length > max) {
              var tempStr = str.substring(0, max);
              var openAtag = tempStr.split("<a ");
              var closeAtag = tempStr.split("</a>");

              if (openAtag.length == closeAtag.length) {
                str = tempStr;
                add = add || '<span class="community-ReadmoreUpdated redText" >...Read more</span>';
                return str + " " + add;
              } else {
                var nextStr = str.substring(max, str.length);
                var nextCloseAtagIndex = nextStr.search("</a>");
                str = tempStr + "" + nextStr.substring(0, nextCloseAtagIndex + 4);
                add = add || '<span class="community-ReadmoreUpdated redText" >...Read more</span>';
                return str + " " + add;
              }
            } else {
              return str;
            }
          }
        }]);

        return TextLayoutReadMoreComponent;
      }();

      TextLayoutReadMoreComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"]
        }, {
          type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_3__["PhotoViewer"]
        }];
      };

      TextLayoutReadMoreComponent.propDecorators = {
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['text']
        }],
        className: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['className']
        }]
      };
      TextLayoutReadMoreComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-text-layout-read-more',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./text-layout-read-more.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/text-layout-read-more/text-layout-read-more.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./text-layout-read-more.component.scss */
        "./src/app/components/text-layout-read-more/text-layout-read-more.component.scss"))["default"]]
      })], TextLayoutReadMoreComponent);
      /***/
    },

    /***/
    "./src/app/components/text-layout/text-layout.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/components/text-layout/text-layout.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsTextLayoutTextLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".instaructionPage {\n  font-size: 20px;\n}\n.instaructionPage h3.title {\n  text-align: center;\n  font-size: 25px;\n  letter-spacing: 2px;\n  border-bottom: 2px solid #c5c5c5;\n  padding: 0px 0px 10px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXh0LWxheW91dC90ZXh0LWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFrQixlQUFBO0FBRWxCO0FBREs7RUFBUyxrQkFBQTtFQUFrQixlQUFBO0VBQWUsbUJBQUE7RUFDckMsZ0NBQUE7RUFBZ0MseUJBQUE7QUFPMUMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RleHQtbGF5b3V0L3RleHQtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluc3RhcnVjdGlvblBhZ2V7Zm9udC1zaXplOjIwcHg7XG4gICAgIGgzLnRpdGxle3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZToyNXB4O2xldHRlci1zcGFjaW5nOjJweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjYzVjNWM1O3BhZGRpbmc6MHB4IDBweCAxMHB4IDBweDtcbiAgICAgfVxufVxuXG4vLyAuaXRlbURldGFpbENvbnRlbnR7Zm9udC1zaXplOjEzcHg7Y29sb3I6dmFyKC0tdGl0bGVMaWdodENvbG9yKTtsaW5lLWhlaWdodDoxOXB4O31cbi8vIC50bmNEYXRhLml0ZW1EZXRhaWxDb250ZW50e2ZvbnQtc2l6ZToxM3B4O2NvbG9yOnZhcigtLXRpdGxlTGlnaHRDb2xvcik7bGluZS1oZWlnaHQ6MTlweDt9Il19 */";
      /***/
    },

    /***/
    "./src/app/components/text-layout/text-layout.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/text-layout/text-layout.component.ts ***!
      \*****************************************************************/

    /*! exports provided: TextLayoutComponent */

    /***/
    function srcAppComponentsTextLayoutTextLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextLayoutComponent", function () {
        return TextLayoutComponent;
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


      var src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");
      /* harmony import */


      var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/photo-viewer/ngx */
      "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var TextLayoutComponent = /*#__PURE__*/function () {
        function TextLayoutComponent(zone, apiservices, photoViewer, platform) {
          _classCallCheck(this, TextLayoutComponent);

          this.zone = zone;
          this.apiservices = apiservices;
          this.photoViewer = photoViewer;
          this.platform = platform;
          this.textData = '';
          this.divClass = '';
        }

        _createClass(TextLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            setTimeout(function () {
              _this18.zone.run(function () {
                _this18.textData = _this18.text;
                _this18.divClass = _this18.className;
              });
            }, 500);
          }
        }, {
          key: "handleClick",
          value: function handleClick(event) {
            console.log("click event on text layout0==", event);

            if (event.target.tagName == "IMG") {
              console.log("click event on text layout1==", event);
              console.log("click event on text layout image==", event.target.tagName);
              this.photoViewer.show(event.target);
              return false;
            }

            if (event.target.tagName == "A") {
              console.log("click event on text layout2==", event);
              console.log("click event on text layout link==", event.target.tagName);

              if (this.platform.is("ios")) {
                var newString = event.target.href;
                console.log("click event on text newString ios==", newString);
                var checkHTTP = newString.includes("ionic://localhost/");
                console.log("click event on text checkHTTP ios==", checkHTTP);

                if (checkHTTP == true) {
                  console.log("click event on text checkHTTP1 ios==", checkHTTP);
                  var to_remove = "ionic://localhost/";
                  var newURL = newString.replace(to_remove, "");
                  console.log("click event on text newURL ios==", newURL);
                  var forwartURL = 'https://' + newURL;
                  console.log("click event on text forwartURL ios==", forwartURL);
                  this.apiservices.iab.create(forwartURL, "_system", this.apiservices.options);
                  return false;
                } else {
                  console.log("click event on text checkHTTP2 ios==", checkHTTP);
                  var newStr = newString;
                  console.log("click event on text newStr ios==", newStr);
                  this.apiservices.iab.create(newStr, "_system", this.apiservices.options);
                  return false;
                }
              } else {
                var _newString = event.target.href;
                console.log("click event on text newString android==", _newString);

                var _checkHTTP = _newString.includes("http://localhost/");

                console.log("click event on text checkHTTP android==", _checkHTTP);

                if (_checkHTTP == true) {
                  console.log("click event on text checkHTTP1 android==", _checkHTTP);
                  var _to_remove = "http://localhost/";

                  var _newURL = _newString.replace(_to_remove, "");

                  console.log("click event on text newURL android==", _newURL);

                  var _forwartURL = 'https://' + _newURL;

                  console.log("click event on text forwartURL android==", _forwartURL);
                  this.apiservices.iab.create(_forwartURL, "_system", this.apiservices.options);
                  return false;
                } else {
                  console.log("click event on text checkHTTP2 android==", _checkHTTP);
                  var _newStr = _newString;
                  console.log("click event on text newStr android==", _newStr);
                  this.apiservices.iab.create(_newStr, "_system", this.apiservices.options);
                  return false;
                }
              }
            }
          }
        }]);

        return TextLayoutComponent;
      }();

      TextLayoutComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: src_app_provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"]
        }, {
          type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_3__["PhotoViewer"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      TextLayoutComponent.propDecorators = {
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['text']
        }],
        className: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['className']
        }]
      };
      TextLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-text-layout',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./text-layout.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/text-layout/text-layout.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./text-layout.component.scss */
        "./src/app/components/text-layout/text-layout.component.scss"))["default"]]
      })], TextLayoutComponent);
      /***/
    },

    /***/
    "./src/app/components/theme-button/theme-button.component.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/components/theme-button/theme-button.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsThemeButtonThemeButtonComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-button.customBtn {\n  --background: linear-gradient(to right, #54bcec , #acdaf1);\n  min-width: 60% !important;\n  max-width: 100%;\n  white-space: pre-wrap;\n  --box-shadow: 1px 10px 11px -9px #54bcec;\n  border: 1px solid #56bdec;\n  border-radius: 10px;\n  overflow: hidden;\n}\nion-button.customBtn .w-20 {\n  width: 20px !important;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aGVtZS1idXR0b24vdGhlbWUtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMERBQUE7RUFDQSx5QkFBQTtFQUVBLGVBQUE7RUFBa0IscUJBQUE7RUFDbEIsd0NBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNJO0VBQU0sc0JBQUE7RUFBc0IsaUJBQUE7QUFHaEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RoZW1lLWJ1dHRvbi90aGVtZS1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uLmN1c3RvbUJ0bntcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzU0YmNlYyAsICNhY2RhZjEpO1xuICAgIG1pbi13aWR0aDogNjAlICFpbXBvcnRhbnQ7IFxuICAgIC8vIGJveC1zaGFkb3c6IDFweCAxMHB4IDE5cHggLTlweCAjNTRiY2VjO1xuICAgIG1heC13aWR0aDogMTAwJTsgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAtLWJveC1zaGFkb3c6IDFweCAxMHB4IDExcHggLTlweCAjNTRiY2VjO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NmJkZWM7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLnctMjB7d2lkdGg6MjBweCAhaW1wb3J0YW50O21hcmdpbi1yaWdodDogNXB4O30gICAgXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/theme-button/theme-button.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/components/theme-button/theme-button.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ThemeButtonComponent */

    /***/
    function srcAppComponentsThemeButtonThemeButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThemeButtonComponent", function () {
        return ThemeButtonComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ThemeButtonComponent = /*#__PURE__*/function () {
        // @Input('btnDisable') btnDisable;
        function ThemeButtonComponent(zone) {
          _classCallCheck(this, ThemeButtonComponent);

          this.zone = zone;
          this.buttonName = '';
          this.buttonIconPath = '';
          this.iconClass = '';
        }

        _createClass(ThemeButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this19 = this;

            //Called after ngOnInit when the component's or directive's content has been initialized.
            //Add 'implements AfterContentInit' to the class.
            this.zone.run(function () {
              _this19.buttonName = _this19.btnText;
              _this19.buttonIconPath = _this19.iconPath;
              _this19.iconClass = _this19.className;
              console.log('buttonName== ', _this19.buttonName + ' /buttonIconPath== ' + _this19.buttonIconPath + ' /iconClass== ' + _this19.iconClass);
            });
          }
        }]);

        return ThemeButtonComponent;
      }();

      ThemeButtonComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      ThemeButtonComponent.propDecorators = {
        btnText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['btnText']
        }],
        iconPath: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['iconPath']
        }],
        className: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['className']
        }]
      };
      ThemeButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-theme-button',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./theme-button.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/theme-button/theme-button.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./theme-button.component.scss */
        "./src/app/components/theme-button/theme-button.component.scss"))["default"]]
      })], ThemeButtonComponent);
      /***/
    },

    /***/
    "./src/app/image-view/image-view.component.scss":
    /*!******************************************************!*\
      !*** ./src/app/image-view/image-view.component.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppImageViewImageViewComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlLXZpZXcvaW1hZ2Utdmlldy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/image-view/image-view.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/image-view/image-view.component.ts ***!
      \****************************************************/

    /*! exports provided: ImageViewComponent */

    /***/
    function srcAppImageViewImageViewComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageViewComponent", function () {
        return ImageViewComponent;
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


      var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/photo-viewer/ngx */
      "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");

      var ImageViewComponent = /*#__PURE__*/function () {
        function ImageViewComponent(zone, photoViewer) {
          _classCallCheck(this, ImageViewComponent);

          this.zone = zone;
          this.photoViewer = photoViewer;
        }

        _createClass(ImageViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this20 = this;

            //Called after ngOnInit when the component's or directive's content has been initialized.
            //Add 'implements AfterContentInit' to the class.
            this.zone.run(function () {
              _this20.image = _this20.img;
            });
          }
        }, {
          key: "viewImageFunc",
          value: function viewImageFunc() {
            if (this.imageView == true) {
              this.photoViewer.show(this.image); // this.photoViewer.show(this.image, "Benepik One", {headers: "{username:foo,password:bar}"});
            } else {}
          }
        }]);

        return ImageViewComponent;
      }();

      ImageViewComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_2__["PhotoViewer"]
        }];
      };

      ImageViewComponent.propDecorators = {
        img: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['img']
        }],
        imageView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['imageView']
        }]
      };
      ImageViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./image-view.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/image-view/image-view.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./image-view.component.scss */
        "./src/app/image-view/image-view.component.scss"))["default"]]
      })], ImageViewComponent);
      /***/
    },

    /***/
    "./src/app/services/events.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/events.service.ts ***!
      \********************************************/

    /*! exports provided: EventsService */

    /***/
    function srcAppServicesEventsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsService", function () {
        return EventsService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var EventsService = /*#__PURE__*/function () {
        function EventsService() {
          _classCallCheck(this, EventsService);

          this.fooSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }

        _createClass(EventsService, [{
          key: "publishSomeData",
          value: function publishSomeData(data) {
            this.fooSubject.next(data);
          }
        }, {
          key: "getObservable",
          value: function getObservable() {
            return this.fooSubject;
          }
        }]);

        return EventsService;
      }();

      EventsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], EventsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~LoginModuleNew-qualification-priview-qualification-priview-module~R-RModule-award-dashboard-~a4e7da8d-es5.js.map