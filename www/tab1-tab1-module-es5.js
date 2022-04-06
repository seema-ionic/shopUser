(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n\n    <ion-title class=\"ion-text-center\">\n      <img style=\"max-height:40px;object-fit:contain;margin:8px 0 0 0;\" [src]=\"apiservices.sideMenuHeaderLogo\" onerror=\"this.src='../../assets/watermark/smallWatermark.png'\">\n    </ion-title>\n\n    <ion-buttons slot=\"end\" class=\"headerUserImg\" tappable (click)=\"goToProfile()\">\n      <img [src]=\"apiservices?.userImage\" onerror=\"this.src='../../assets/watermark/profileWatermarkWhite.png'\">\n    </ion-buttons>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button><img src='../../assets/icon/sidemenuIcon.svg' style=\"width:20px;\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<!-- <app-text-layout [text]=\"mediaData?.media\" class=\"textCompoDiv\" [className]=\"\"></app-text-layout>\n<app-image-view [img]=\"promoData?.banner\" [imageView]=\"false\" class=\"promotedDiv\" ></app-image-view> -->\n<!-- [fullscreen]=\"true\" -->\n<ion-content style=\"--background:#f1f0f0;\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <!-- commonPagePadding -->\n  <div class=\"\" *ngIf=\"allData\">\n\n\n    \n\n    <!-- To Do List Start -->\n    <div class=\"toDoList borderCard commonMargin\" *ngIf=\"allData?.todo && allData?.todo?.list?.length>=1\">\n      <div class=\"sectionTitleDiv\">\n        <ion-row>\n          <ion-col [size]=\"12\"><p class=\"noMargin\">{{allData?.todo?.setting?.title}}</p></ion-col>\n        </ion-row>\n      </div>\n      <div class=\"toDoListDiv\" *ngFor=\"let listData of allData?.todo?.list\">\n        <ion-row tappable (click)=\"toDoRedirection(listData)\">\n          <ion-col [size]=\"8\" class=\"autoMargin\">\n            <p class=\"noMargin\">{{listData?.head_title}}</p>\n            <p class=\"noMargin\"><small>{{listData?.title}}</small></p>\n          </ion-col>\n          <ion-col [size]=\"4\" class=\"ion-text-right\">\n            <ion-button class=\"dynamicButtonOutline\" *ngIf=\"listData?.is_btn_show==1 || listData?.is_btn_show=='1'\">{{listData?.button_text}}</ion-button>\n            <small style=\"color:red;margin:0 10px 0 0px;\" class=\"ion-float-right\">{{listData?.statusText}}</small>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n    <!-- To Do List End -->\n\n\n\n\n\n    <!-- Trending News Start -->\n    <div class=\"trendingPartDiv commonMargin\" *ngIf=\"allData?.trendingnews && allData?.trendingnews?.list?.length>=1\">\n      <div class=\"borderCard\">\n        <div class=\"sectionTitleDiv\">\n          <ion-row>\n            <ion-col [size]=\"12\"><p class=\"noMargin\">{{allData?.trendingnews?.setting?.title}}</p></ion-col>\n          </ion-row>\n        </div>\n        <div class=\"trandingDiv\">\n          <ion-row>\n            <ion-col [size]=\"12\" class=\"ion-no-padding\">\n              <ion-slides class=\"trendingSlides\" pager=\"true\" [options]=\"TrendingNews\">\n                <ion-slide *ngFor=\"let trendingList of allData?.trendingnews?.list\">\n                  <div style=\"width:100%;position:relative;\">\n                    <div class=\"clickDiv\" tappable (click)=\"redirectionDetail(trendingList)\"></div>\n                    <div *ngIf=\"trendingList?.media_type==1\" class=\"sliderDiv\">\n                      <div class=\"blurDiv\" [style.background]=\"'url('+trendingList?.image+')'\"></div>\n                      <app-image-view [img]=\"trendingList?.image\" [imageView]=\"false\" class=\"sliderFullDiv\" ></app-image-view>\n                      <div class=\"contentText\"><p class=\"noMargin\">{{trendingList?.title}}</p></div>\n                    </div>\n\n                    <div *ngIf=\"trendingList?.media_type==2\" class=\"sliderDiv\">\n                      <video width=\"100%\" height=\"100%\" controls=\"controls\" style=\"object-fit:cover;\" controlsList=\"nodownload noremote foobar\"\n                        poster=\"{{trendingList?.alt_image}}\" [src]=\"trendingList?.image|safe\" type=\"video/mp4\"></video>\n                      <div class=\"playIcon\"><img [src]=\"allData?.trendingnews?.setting?.video_icon\"></div>\n                      <div class=\"contentText\"><p class=\"noMargin\">{{trendingList?.title}}</p></div>\n                    </div>\n\n                    <div *ngIf=\"trendingList?.media_type==3\" class=\"sliderDiv\">\n                      <iframe *ngIf=\"trendingList?.image\" [src]=\"trendingList?.image|safe\" width=\"100%\" height=\"100%\" class=\"borderDiv\"></iframe>\n                      <div class=\"playIcon\"><img [src]=\"allData?.trendingnews?.setting?.youtube_icon\"></div>\n                      <div class=\"contentText\"><p class=\"noMargin\">{{trendingList?.title}}</p></div>\n                    </div>\n                  </div>\n\n                </ion-slide>\n              </ion-slides>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n    <!-- Trending News End -->\n\n        <!-- Quick Access Start -->\n        <div class=\"quickAccess commonMargin\" *ngIf=\"allData?.quickaccess\">\n          <div class=\"borderCard\">\n            <div class=\"sectionTitleDiv\">\n              <ion-row>\n                <ion-col [size]=\"12\"><p class=\"noMargin\">{{allData?.quickaccess?.setting?.title}}</p></ion-col>\n              </ion-row>\n            </div>\n            <div class=\"quickAccessDiv\">\n              <ion-row *ngIf=\"showQuickData==false\">\n                <ion-col [size]=\"4\" *ngFor=\"let quickAccessList of quickAccessArray\" class=\"ion-text-center\">\n                  <div tappable (click)=\"quickAccessRedirection(quickAccessList)\">\n                    <div class=\"smallDiv\">\n                      <app-image-view [img]=\"quickAccessList?.icon\" [imageView]=\"false\" class=\"sliderFullDiv\" ></app-image-view>\n                    </div>\n                    <p class=\"noMargin\">{{quickAccessList?.title}}</p>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-row *ngIf=\"showQuickData==true\">\n                <ion-col [size]=\"4\" *ngFor=\"let quickAccessList of quickAccessArray1\" class=\"ion-text-center\">\n                  <div tappable (click)=\"quickAccessRedirection(quickAccessList)\">\n                    <!-- quickAccess -->\n                    <div class=\"smallDiv\">\n                      <app-image-view [img]=\"quickAccessList?.icon\" [imageView]=\"false\" class=\"sliderFullDiv\" ></app-image-view>\n                    </div>\n                    <p class=\"noMargin\">{{quickAccessList?.title}}</p>\n                  </div>\n                </ion-col>\n              </ion-row>\n              <ion-row class=\"hidden-lg-only\">\n                <ion-col class=\"ion-text-center\" tappable (click)=\"openArrow()\">\n                  <p *ngIf=\"showQuickData==false\" class=\"QucikDiv viewM ion-no-margin\"><span>View more</span><ion-icon name=\"chevron-down-outline\"></ion-icon></p>\n                  <!-- <ion-button *ngIf=\"showQuickData==false\" class=\"dynamicSmallButton\">View more\n                    <ion-icon name=\"chevron-down-outline\"></ion-icon>\n                  </ion-button> -->\n                  <p *ngIf=\"showQuickData==true\" class=\"QucikDiv viewM ion-no-margin\"><span>View less</span>\n                    <ion-icon name=\"chevron-up-outline\"></ion-icon></p>\n                  <!-- <ion-button *ngIf=\"showQuickData==true\" class=\"dynamicSmallButton\">View less\n                    <ion-icon name=\"chevron-up-outline\"></ion-icon> -->\n                  <!-- </ion-button> -->\n                </ion-col>\n              </ion-row>\n            </div>\n          </div>\n        </div>\n        <!-- Quick Access End -->\n\n\n      <!-- birthday  start -->\n      <div class=\"quickAccess commonMargin\" *ngIf=\"allData?.birthdaylist?.list?.length>0\">\n        <div class=\"borderCard\">\n          <div class=\"sectionTitleDiv\">\n            <ion-row>\n              <ion-col [size]=\"12\">\n                <p class=\"noMargin\">{{allData?.birthdaylist?.setting?.name}}\n                  <span  tappable (click)=\"gotoBirthdayList(allData?.birthdaylist?.setting)\">{{allData?.birthdaylist?.setting?.view_txt}}</span>\n                </p></ion-col>\n            </ion-row>\n          </div>\n          <div class=\"cheersDataDiv\">\n            <ion-row *ngFor=\"let birthdayData of allData?.birthdaylist?.list\">\n              <ion-col [size]=\"3\"  class=\"ion-text-center\" tappable (click)=\"gotoBirthdayDetail(birthdayData)\" \n              class=\"ion-no-margin ion-text-center ion-no-padding\">\n                <!-- <div tappable (click)=\"quickAccessRedirection(birthdayData)\" class=\"userDiv\"> -->\n                  <!-- <div class=\"imgDiv\"> -->\n                    <app-image-view [img]=\"birthdayData?.user_image\" [imageView]=\"false\" class=\"leftCircleImgGray\" ></app-image-view>\n                  <!-- </div> -->\n                <!-- </div> -->\n              </ion-col>\n              <ion-col [size]=\"8\" tappable (click)=\"gotoBirthdayDetail(birthdayData)\" class=\"ion-text-left ion-no-padding margin10\">\n                  <p class=\"ion-no-margin bdayCss\">{{birthdayData?.name}}</p>\n                  <p class=\"ion-no-margin bdayCss\">{{birthdayData?.event_date_format}}</p>\n              </ion-col>\n            </ion-row>\n          </div>\n          </div>\n          </div>\n     <!-- birthday  end -->\n\n\n          <!-- anniversary start -->\n          <div class=\"quickAccess commonMargin\" *ngIf=\"allData?.anniversarylist?.list?.length>0\">\n            <div class=\"borderCard\">\n          <div class=\"sectionTitleDiv\">\n            <ion-row>\n              <ion-col [size]=\"12\">\n                <p class=\"ion-no-margin\">{{allData?.anniversarylist?.setting?.name}}\n                  <span  tappable (click)=\"gotoBirthdayList(allData?.anniversarylist?.setting)\">{{allData?.anniversarylist?.setting?.view_txt}}</span>\n                </p></ion-col>\n            </ion-row>\n          </div>\n          <div class=\"cheersDataDiv\">\n            <ion-row *ngFor=\"let anniversaryData of allData?.anniversarylist?.list\">\n              <ion-col [size]=\"3\"  class=\"ion-text-center\" tappable (click)=\"gotoBirthdayDetail(anniversaryData)\" \n              class=\"ion-no-margin ion-text-center ion-no-padding\">\n                <!-- <div tappable (click)=\"quickAccessRedirection(birthdayData)\" class=\"userDiv\"> -->\n                  <!-- <div class=\"imgDiv\"> -->\n                    <app-image-view [img]=\"anniversaryData?.user_image\" [imageView]=\"false\" class=\"leftCircleImgGray\" ></app-image-view>\n                  <!-- </div> -->\n                <!-- </div> -->\n              </ion-col>\n              <ion-col [size]=\"8\" tappable (click)=\"gotoBirthdayDetail(anniversaryData)\" class=\"ion-text-left ion-no-padding margin10\">\n                  <p class=\"ion-no-margin bdayCss\">{{anniversaryData?.name}}</p>\n                  <p class=\"ion-no-margin bdayCss\">{{anniversaryData?.event_date_format}}</p>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </div>\n\n       <!-- anniversary end -->\n \n\n      \n    <!-- Say Cheers Start -->\n    <div class=\"cheersDiv commonMargin\" *ngIf=\"sayCheersData\">\n      <div class=\"borderCard\">\n        <div class=\"sectionTitleDiv\">\n          <ion-row>\n            <ion-col [size]=\"12\"><p class=\"noMargin\">{{sayCheersData?.settings?.title}} \n              <span  tappable (click)=\"goToSayCheers('cheerBoard')\">{{sayCheersData?.settings?.view_more}}</span></p>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div class=\"cheersDataDiv\">\n          <ion-row>\n            <ion-col [size]=\"3\">\n              <div class=\"addCheersDiv\" tappable (click)=\"goToSayCheers('cheerList','')\">\n                <ion-icon name=\"add\"></ion-icon><p>{{sayCheersData?.settings?.button_text}}</p>\n              </div>\n            </ion-col>\n            <div class=\"showThDiv\" *ngFor=\"let cheerList of sayCheersData?.list; let ind = index\" style=\"display:inline-block;width:25%;\">\n              <ion-col [size]=\"12\" *ngIf=\"ind<3\" class=\"autoMargin ion-text-center\" style=\"display:block;\">\n                <div class=\"userDiv\" tappable (click)=\"goToSayCheers('cheerDetail',ind)\">\n                  <div class=\"imgDiv\">\n                    <app-image-view [img]=\"cheerList?.receiver_profile\" [imageView]=\"false\" class=\"sliderFullDiv\" ></app-image-view>\n                  </div>\n                  <p>{{cheerList?.receiver_name}}</p>\n                </div>\n              </ion-col>\n            </div>\n          </ion-row>\n        </div>\n      </div>\n    </div>\n    <!-- Say Cheers End -->\n\n  <!-- welcome aboard Start -->\n  <div class=\"cheersDiv commonMargin\" *ngIf=\"welcomeAboardData\">\n    <div class=\"borderCard\">\n      <div class=\"sectionTitleDiv\">\n        <ion-row>\n          <ion-col [size]=\"12\"><p class=\"noMargin\">{{awdDetailData?.page_header}} \n            <span  tappable (click)=\"gotoWelcomeAboardList()\">View More</span></p>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div class=\"cheersDataDiv\">\n        <ion-row>\n          <!-- <ion-col [size]=\"3\">\n            <div class=\"addCheersDiv\" tappable (click)=\"goToSayCheers('cheerList','')\">\n              <ion-icon name=\"add\"></ion-icon><p>{{sayCheersData?.settings?.button_text}}</p>\n            </div>\n          </ion-col> -->\n          <div class=\"showThDiv\" *ngFor=\"let welcome of welcomeAboardData; let ind = index\" style=\"display:inline-block;width:25%;\">\n            <ion-col [size]=\"12\" *ngIf=\"ind<4\" class=\"autoMargin ion-text-center\" style=\"display:block;\">\n              <div class=\"userDiv\" tappable (click)=\"gotoWelcomeAboard('0',welcome)\">\n                <div class=\"imgDiv\">\n                  <app-image-view [img]=\"welcome?.profile_img\" [imageView]=\"false\" class=\"sliderFullDiv\" ></app-image-view>\n                </div>\n                <p>{{welcome?.full_name}}</p>\n              </div>\n            </ion-col>\n          </div>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n  <!-- welcome aboard End -->\n\n\n\n\n    <!-- CommunityListPosts Start -->\n    <div class=\"postDataSecDiv\" *ngIf=\"postData\">\n      <div *ngFor=\"let postAllData of postData;let i=index\">\n        <div *ngIf=\"postAllData?.detailed_data!=null\" class=\"postDataDiv  commonMargin\">\n          <div *ngIf=\"postAllData?.module_id==4 \" class=\"borderCard\">\n            <ion-row>\n              <!-- tappable (click)=\"videoZoome(postAllData?.profile_image,'singleImage',i)\" -->\n              <ion-col [size]=\"2\" class=\"ion-no-padding autoMargin\">\n                <app-image-view [img]=\"postAllData?.detailed_data?.profile_image\" [imageView]=\"true\" class=\"leftCircleImgGray\" ></app-image-view>\n              </ion-col>\n              <ion-col [size]=\"10\" tappable (click)=\"communityPostRedirection(postAllData,false)\" class=\"ion-no-padding\">\n                <ion-row>\n                  <ion-col [size]=\"7\">\n                    <p class=\"noMargin titleText\">{{postAllData?.detailed_data?.createdBy}}</p>\n                    <p class=\"dateText\">{{postAllData?.detailed_data?.created_date}}</p>\n                  </ion-col>\n                  <ion-col [size]=\"5\" class=\"autoMargin ion-text-right\"><p class=\"postText\">{{postAllData?.module_name}}</p></ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col [size]=\"12\" tappable (click)=\"communityPostRedirection(postAllData,false)\">\n                <app-text-layout *ngIf=\"postAllData?.detailed_data?.title!=''\" class=\"titleText\" [text]=\"postAllData?.detailed_data?.title\" [className]=\"\"></app-text-layout>\n                <!-- <app-text-layout-read-more *ngIf=\"postAllData?.detailed_data?.description!=''\" [text]=\"postAllData?.detailed_data?.description\" [className]=\"\"></app-text-layout-read-more> -->\n                <!-- <app-text-layout *ngIf=\"postAllData?.description!=''\" [text]=\"postAllData?.description\" [className]=\"\"></app-text-layout> -->\n                <!-- <app-text-layout-read-more *ngIf=\"postAllData?.description!=''\" [text]=\"postAllData?.description\" [className]=\"\"></app-text-layout-read-more> -->\n              </ion-col>\n            </ion-row>\n            \n            <ion-row>\n              <ion-col [size]=\"12\">\n                <div *ngFor=\"let mediaData of postAllData?.detailed_data?.media; let ind = index\" [ngClass]=\"{'oneShow': postAllData?.detailed_data?.media?.length==1, 'twoShow': postAllData?.detailed_data?.media?.length==2,'threeShow': postAllData?.detailed_data?.media?.length>=3,'autoHeightCls':mediaData?.media_type=='4'}\">\n \n                \n                  <div *ngIf=\"ind<3 && mediaData?.media_type==1\" class=\"imgDiv\" tappable (click)=\"videoZoome(postAllData?.media,'image',ind)\">\n                    <app-image-view *ngIf=\"mediaData?.media_type==1\" [img]=\"mediaData?.media_path\" [imageView]=\"false\" class=\"fullHeightDiv\" ></app-image-view>\n                    <div class=\"viewMoreDiv\" *ngIf=\"postAllData?.media?.length>3 && ind==2\"><p>+{{postAllData?.media?.length-3}}</p></div>\n                  </div>\n\n\n                  <div *ngIf=\"ind<3 && mediaData?.media_type==2\" class=\"imgDiv videoDiv\">\n                    <video width=\"100%\" height=\"100%\" style=\"object-fit:cover;\" controls=\"controls\" controlsList=\"nodownload noremote foobar\"\n                      poster=\"{{mediaData?.alt_image}}\" [src]=\"mediaData?.media_path|safe\" type=\"video/mp4\" ></video>\n                    <div class=\"viewMoreDiv\" *ngIf=\"postAllData?.media?.length>3 && ind==2\"><p>+{{postAllData?.media?.length-3}}</p></div>\n                    <div *ngIf=\"postAllData?.media?.length<4 && ind<=2\" class=\"playIcon\" tappable (click)=\"videoZoome(mediaData?.media_path,'video',ind)\">\n                      <img [src]=\"videoIcon\">\n                    </div>\n                    <!-- <div *ngIf=\"postAllData?.media?.length<4 && ind<=2\" class=\"zoomIcon\" tappable (click)=\"videoZoome(mediaData?.media_path)\"></div> -->\n                  </div>\n\n\n                  <!-- youTubeDiv -->\n                  <div *ngIf=\"ind<3 && mediaData?.media_type==3\" class=\"imgDiv\">\n                    <iframe [src]=\"mediaData?.media_path|safe\" width=\"100%\" height=\"100%\" class=\"borderDiv\"></iframe>\n                    <div class=\"viewMoreDiv\" *ngIf=\"postAllData?.media?.length>3 && ind==2\"><p>+{{postAllData?.media?.length-3}}</p></div>\n                    <div *ngIf=\"postAllData?.media?.length<4 && ind<=2\" class=\"playIcon\" tappable (click)=\"videoZoome(mediaData?.media_path,'youtube',ind)\">\n                      <!-- <img [src]=\"videoIcon\"> -->\n                    </div>\n                    <!-- <div *ngIf=\"postAllData?.media?.length<4 && ind<=2\" class=\"playIcon\"><img [src]=\"youTubeIcon\"></div> -->\n                  </div>\n                </div>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col [size]=\"12\">\n                <div *ngIf=\"postAllData?.detailed_data\">\n                  <show-comment [allCommentObj]=\"postAllData?.detailed_data\" [showLikeList]=\"'false'\" [showCommentList]=\"'false'\" [showAutoScroll]=\"'true'\" [redirectPage]=\"'community-detail'\"></show-comment>\n                </div>\n              </ion-col>\n            </ion-row>\n          </div>\n          <div *ngIf=\"postAllData?.module_id==8\" class=\"borderCard\">\n            <ion-row class=\"borderBtm\">\n              <ion-col [size]=\"8\">\n                <p class=\"ion-no-margin homeT\">{{postAllData?.detailed_data?.home_title}}</p>\n                <p class=\"ion-no-margin postText\" *ngIf=\"postAllData?.detailed_data?.created_date\">{{postAllData?.detailed_data?.created_date}}</p></ion-col>\n              <ion-col [size]=\"4\" class=\"ion-text-right\"><p class=\"postText\">{{postAllData?.module_name}}</p></ion-col>\n            </ion-row>\n            <ion-row class=\"ion-padding-top\">\n              <ion-col [size]=\"3\">\n                <div class=\"cheerUserImg\">\n                  <div class=\"userImgIcon\">\n                    <app-image-view [img]=\"postAllData?.detailed_data?.receiver_profile\" [imageView]=\"false\" class=\"circleCoverIcon\" ></app-image-view>\n                  </div>\n                  <p class=\"noMargin nameText ion-text-center\">{{postAllData?.detailed_data?.receiver_name}}</p>\n                  <p class=\"noMargin positionText ion-text-center\">{{postAllData?.detailed_data?.receiver_designation}}</p>\n                </div>\n              </ion-col>\n              <ion-col [size]=\"1.5\" class=\"ion-no-padding autoMar\">\n                <img [src]=\"postAllData?.detailed_data?.arrow_1\"/>\n              </ion-col>\n              <ion-col [size]=\"3\">\n                <div class=\"cardSendImgDiv\">\n                  <app-image-view [img]=\"postAllData?.detailed_data?.card_image\" [imageView]=\"false\" class=\"radiusFullImage\" ></app-image-view>\n                </div>\n              </ion-col>\n              <ion-col [size]=\"1.5\" class=\"ion-no-padding autoMar\">\n                <img [src]=\"postAllData?.detailed_data?.arrow_2\"/>\n              </ion-col>\n              <ion-col [size]=\"3\">\n                <div class=\"cheerUserImg\">\n                  <div class=\"userImgIcon\">\n                    <app-image-view [img]=\"postAllData?.detailed_data?.sender_profile\" [imageView]=\"false\" class=\"circleCoverIcon\" ></app-image-view>\n                  </div>\n                  <p class=\"noMargin nameText ion-text-center\">{{postAllData?.detailed_data?.sender_name}}</p>\n                  <p class=\"noMargin positionText ion-text-center\">{{postAllData?.detailed_data?.sender_designation}}</p>\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"ion-margin-bottom ion-padding-top\">\n              <ion-col [size]=\"12\" class=\"ion-text-left\">\n                <div class=\"textDiv\">\n                  <div class=\"quotesIconDiv\"><img [src]=\"postAllData?.detailed_data?.commaIcon\"></div>\n                  <!-- use this class \"textCompoDiv\" if they want to manage font size -->\n                  <app-text-layout [text]=\"postAllData?.detailed_data?.citation\" class=\"\" style=\"white-space:pre-wrap;\" [className]=\"\"></app-text-layout>\n                  <!-- <app-text-layout-read-more style=\"white-space:pre-wrap;\" [text]=\"cheerData?.citation\" class=\"\" [className]=\"\"></app-text-layout-read-more> -->\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col [size]=\"12\">\n                <div *ngIf=\"postAllData?.detailed_data\">\n                  <show-comment [allCommentObj]=\"postAllData?.detailed_data\" [showLikeList]=\"'false'\" [showCommentList]=\"'false'\" [showAutoScroll]=\"'true'\" [redirectPage]=\"'say-cheers-detail'\"></show-comment>\n                </div>\n              </ion-col>\n            </ion-row>\n\n          </div>\n          <div *ngIf=\"postAllData?.module_id==15\" class=\"borderCard\">\n            <div tappable (click)=\"gotoWelcomeAboard('0', postAllData?.detailed_data)\">\n              <ion-row >\n                <ion-col [size]=\"4\" class=\"autoMar\">\n                  <img class=\"userImage\" [src]=\"postAllData?.detailed_data?.header_data?.profile_image\"\n                  onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"></ion-col>\n                <ion-col [size]=\"8\" class=\"ion-no-padding autoMar padd16\">\n                    <p class=\"ion-no-margin ion-text-right fontP\">{{postAllData?.module_name}}</p>\n                    <p class=\"ion-no-margin ion-text-right fontP1\">{{postAllData?.detailed_data?.header_data?.content?.name}}</p>\n                    <p class=\"ion-no-margin ion-text-right fontP2\">{{postAllData?.detailed_data?.header_data?.content?.department}}</p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col [size]=\"1\"><ion-icon name=\"mail-outline\"></ion-icon></ion-col>\n                <ion-col [size]=\"11\"><p class=\"ion-no-margin\">{{postAllData?.detailed_data?.body?.email_id}}</p></ion-col>\n              </ion-row>\n              <ion-row class=\"grayDiv\">\n                <ion-col [size]=\"1\"><ion-icon name=\"call-outline\"></ion-icon></ion-col>\n                <ion-col [size]=\"11\"><p class=\"ion-no-margin\">{{postAllData?.detailed_data?.body?.phone}}</p></ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col >\n                  <p class=\"ion-no-margin disDiv\" [innerHTML]=\"postAllData?.detailed_data?.body?.preview_data\"></p>\n                </ion-col>\n              </ion-row>\n                <ion-row class=\"radDiv\">\n                  <ion-col [size]=\"6\" *ngFor=\"let item of postAllData?.detailed_data?.footer\">\n                    <ion-row>\n                      <ion-col [size]=\"4\"><img [src]=\"item?.icon\" class=\"iconCss\"/></ion-col>\n                      <ion-col [size]=\"8\">{{item?.text}}</ion-col>\n                    </ion-row>\n            \n                  </ion-col>\n                </ion-row>\n  </div>\n                <ion-row >\n                  <ion-col [size]=\"12\">\n                    <div *ngIf=\"postAllData?.detailed_data\">\n                      <show-comment [allCommentObj]=\"postAllData?.detailed_data\" [showLikeList]=\"'false'\" [showCommentList]=\"'false'\" [showAutoScroll]=\"'true'\" \n                      [redirectPage]=\"'qualification-priview'\"></show-comment>\n                    </div>\n                  </ion-col>\n                </ion-row>\n          </div> \n          <div *ngIf=\"postAllData?.module_id==12 \" class=\"borderCard\">\n      <ion-row class=\"borderBtm\">\n        <ion-col [size]=\"12\" ><p class=\"ion-no-margin\"><span  class=\"uDiv uDiv1\">{{postAllData?.detailed_data?.header_title_one}} </span>\n          <span class=\"uDiv\">{{postAllData?.detailed_data?.header_title_two}}</span> \n          <span class=\"uDiv uDiv1\" *ngIf=\"postAllData?.detailed_data?.award_name!=''\">\"{{postAllData?.detailed_data?.award_name}}\"</span>\n        </p></ion-col>\n        <!-- <ion-col [size]=\"4\" ><p class=\"uDiv ion-no-margin\">{{item?.header_title_two}}</p></ion-col>\n        <ion-col [size]=\"3.5\" >\n          <p class=\"uDiv uDiv1 ion-no-margin\" (click)=\"awardDashboard()\">\"{{item?.award_name}}\"</p></ion-col> -->\n      </ion-row>\n      <ion-row>\n        <ion-col [size]=\"3\" class=\"ion-text-center\">\n          <div class=\"userImgIcon\">\n            <app-image-view [img]=\"postAllData?.detailed_data?.nominator_profile_image\" [imageView]=\"true\" class=\"circleCoverIcon\" ></app-image-view>\n          </div>\n         \n          <!-- <img [src]=\"postAllData?.detailed_data?.nominator_profile_image\" class=\"imgDiv\"  onerror=\"this.src='../../assets/watermark/smallWatermark.png'\"/> -->\n        </ion-col>\n        <ion-col [size]=\"9\">\n          <p class=\"ion-no-margin uDiv\">{{postAllData?.detailed_data?.nominator_name}}</p>\n          <p class=\"ion-no-margin uDiv\">{{postAllData?.detailed_data?.nominator_designation}}</p>\n          <p class=\"ion-no-margin uDiv\">{{postAllData?.detailed_data?.nominator_cc}}</p>\n        </ion-col>\n      </ion-row>\n  \n      <ion-row (click)=\"gotoAwardDetail(postAllData?.detailed_data)\">\n        <ion-col>\n          <p [innerHTML]=\"postAllData?.detailed_data?.citation\" class=\"pFont ion-no-margin\"></p>\n          <div [style.background-image]=\"'url('+ postAllData?.detailed_data?.template_link +')'\" class=\"bgImage\">\n            <p [innerHTML]=\"postAllData?.detailed_data?.award_name\" class=\"ion-text-center gpDiv topDiv\"></p>\n            <p class=\"ion-text-center gpDiv\">\n              <span *ngFor=\"let val of postAllData?.detailed_data?.nominees_arr\">{{val}},</span>\n              <span class=\"sp\" *ngIf=\"postAllData?.detailed_data?.nominees_arr?.length>postAllData?.detailed_data?.nominee_len\"> +4 more</span></p>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n      <ion-col [size]=\"12\">\n        <div *ngIf=\"postAllData?.detailed_data\">\n          <show-comment [allCommentObj]=\"postAllData?.detailed_data\" [showLikeList]=\"'false'\" [showCommentList]=\"'false'\" [showAutoScroll]=\"'true'\" \n          [redirectPage]=\"'award-detail'\"></show-comment>\n        </div>\n      </ion-col>\n    </ion-row>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <!-- CommunityListPosts End -->\n\n\n\n\n\n\n\n\n\n\n\n\n\n  </div>\n\n  <div *ngIf=\"!allData\">\n    <app-skelton-listview [iconPath]=\"'home'\" [className]=\"'ListSkeletonClass'\"></app-skelton-listview>\n  </div>\n\n  <h2 style=\"text-align:center;font-size:12px;margin:0 0 10px 0;\" *ngIf=\"errorMessage!=''\"> {{errorMessage}}</h2>\n\n  <ion-infinite-scroll *ngIf=\"errorMessage=='' && postData\" threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" \n    loadingText=\"Loading more data...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/tab1/tab1-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab1/tab1-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab1PageRoutingModule */

    /***/
    function srcAppTab1Tab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
        return Tab1PageRoutingModule;
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


      var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab1.page */
      "./src/app/tab1/tab1.page.ts");

      var routes = [{
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
      }];

      var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
        _classCallCheck(this, Tab1PageRoutingModule);
      };

      Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab1PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab1/tab1.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /*! exports provided: Tab1PageModule */

    /***/
    function srcAppTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
        return Tab1PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab1.page */
      "./src/app/tab1/tab1.page.ts");
      /* harmony import */


      var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab1-routing.module */
      "./src/app/tab1/tab1-routing.module.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/components.module */
      "./src/app/components/components.module.ts");
      /* harmony import */


      var ng_circle_progress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-circle-progress */
      "./node_modules/ng-circle-progress/__ivy_ngcc__/fesm2015/ng-circle-progress.js");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts"); // import { ComponentsModule } from 'src/app/components/components.module';


      var Tab1PageModule = function Tab1PageModule() {
        _classCallCheck(this, Tab1PageModule);
      };

      Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], // HttpClient,
        _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__["Tab1PageRoutingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_8__["NgCircleProgressModule"].forRoot()],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
      })], Tab1PageModule); // NgCircleProgressModule.forRoot({
      //   radius:100,
      //   outerStrokeWidth:16,
      //   innerStrokeWidth:8,
      //   outerStrokeColor:"#78C000",
      //   innerStrokeColor:"#C7E596",
      //   animationDuration:300,
      // })

      /***/
    },

    /***/
    "./src/app/tab1/tab1.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".toDoList {\n  margin: 0px;\n}\n.toDoList .toDoListDiv {\n  border-bottom: 1px solid gainsboro;\n}\n.toDoList .toDoListDiv p {\n  font-size: 15px;\n}\n.toDoList .toDoListDiv:nth-last-child(1) {\n  border-bottom: 0px solid gainsboro;\n}\n.quickAccessDiv .smallDiv {\n  width: 50px;\n  height: 50px;\n  margin: 5px auto;\n  padding: 2px;\n}\n.quickAccessDiv p {\n  font-size: 13px;\n  color: #000;\n  line-height: 15px;\n}\n.trandingDiv .trendingSlides {\n  padding: 0 0 30px 0;\n}\n.trandingDiv .trendingSlides .clickDiv {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 999;\n}\n.trandingDiv .trendingSlides .contentText {\n  position: absolute;\n  bottom: 0;\n  text-align: left;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  left: 0;\n  right: 0;\n  padding: 10px;\n}\n.trandingDiv .trendingSlides .contentText p {\n  font-size: 14px;\n  color: #fff;\n  line-height: 20px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.cheersDataDiv {\n  padding: 0;\n}\n.cheersDataDiv .addCheersDiv {\n  border: 1px solid var(--headerColor);\n  border-radius: 30%;\n  text-align: center;\n  width: 80%;\n  height: 100px;\n  padding: 10px 5px;\n  background: var(--headerLightColor);\n  margin: auto;\n}\n.cheersDataDiv .addCheersDiv ion-icon {\n  background: var(--headerColor);\n  color: #fff;\n  font-size: 25px;\n  border-radius: 50%;\n  margin: 8px 0 0 0;\n}\n.cheersDataDiv .addCheersDiv p {\n  margin: 5px 0 0 0;\n  font-size: 3.5vw;\n  font-weight: bold;\n  color: gray;\n}\n.cheersDataDiv .userDiv {\n  margin: 10px 0 0 0;\n}\n.cheersDataDiv .userDiv .imgDiv {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: auto;\n  border: 1px solid var(--headerColor);\n}\n.cheersDataDiv .userDiv p {\n  margin: 10px 0 0 0px;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.sliderDiv {\n  width: 100%;\n  height: 180px;\n  position: relative;\n}\n.sliderDiv .blurDiv {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -2;\n  filter: blur(20px);\n  background-position: center !important;\n  background-size: 200% !important;\n  height: 90%;\n}\n.userImgIcon {\n  height: 50px !important;\n  width: 50px !important;\n}\n.postDataSecDiv .postDataDiv {\n  padding: 5px;\n  /*background:#f6f6f6;*/\n}\n.postDataSecDiv .postDataDiv .titleText {\n  font-size: 16px;\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  margin: 0px 0 5px 0;\n}\n.postDataSecDiv .postDataDiv .discriptionText {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n}\n.postDataSecDiv .postDataDiv .dateText, .postDataSecDiv .postDataDiv .postText {\n  font-size: 12px;\n  color: gray;\n  margin: 5px 0 0 0;\n  font-size: 3.5vw;\n}\n.postDataSecDiv .postDataDiv .overDiv {\n  position: absolute;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.67);\n  top: 1px;\n  bottom: 1px;\n  left: 1px;\n  right: 1px;\n  border-radius: 5px;\n  color: #fff;\n  text-align: center;\n}\n.postDataSecDiv .postDataDiv .overDiv .ViewDiv {\n  font-size: 22px;\n  font-weight: bold;\n  margin: 28px;\n}\n.postDataSecDiv .postDataDiv .oneShow {\n  width: 100%;\n  height: 200px;\n}\n.postDataSecDiv .postDataDiv .oneShow .imgDiv, .postDataSecDiv .postDataDiv .oneShow .imgDiv img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.postDataSecDiv .postDataDiv .oneShow.autoHeightCls {\n  height: auto;\n}\n.postDataSecDiv .postDataDiv .threeShow:nth-child(1), .postDataSecDiv .postDataDiv .twoShow, .postDataSecDiv .postDataDiv .fourShow:nth-child(1) {\n  width: 50%;\n  float: left;\n  height: 200px;\n}\n.postDataSecDiv .postDataDiv .threeShow:nth-child(1) .imgDiv, .postDataSecDiv .postDataDiv .threeShow:nth-child(1) .imgDiv img, .postDataSecDiv .postDataDiv .twoShow .imgDiv, .postDataSecDiv .postDataDiv .twoShow .imgDiv img, .postDataSecDiv .postDataDiv .fourShow:nth-child(1) .imgDiv, .postDataSecDiv .postDataDiv .fourShow:nth-child(1) .imgDiv img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.postDataSecDiv .postDataDiv .threeShow:nth-child(2), .postDataSecDiv .postDataDiv .threeShow:nth-child(3), .postDataSecDiv .postDataDiv .fourShow:nth-child(2), .postDataSecDiv .postDataDiv .fourShow:nth-child(3) {\n  width: 50%;\n  height: 100px;\n  float: right;\n  margin: 0;\n}\n.postDataSecDiv .postDataDiv .threeShow:nth-child(2) .imgDiv, .postDataSecDiv .postDataDiv .threeShow:nth-child(2) .imgDiv img, .postDataSecDiv .postDataDiv .threeShow:nth-child(2) .imgDiv img, .postDataSecDiv .postDataDiv .threeShow:nth-child(2) .imgDiv, .postDataSecDiv .postDataDiv .threeShow:nth-child(3) .imgDiv, .postDataSecDiv .postDataDiv .threeShow:nth-child(3) .imgDiv img, .postDataSecDiv .postDataDiv .threeShow:nth-child(3) .imgDiv img, .postDataSecDiv .postDataDiv .threeShow:nth-child(3) .imgDiv, .postDataSecDiv .postDataDiv .fourShow:nth-child(2) .imgDiv, .postDataSecDiv .postDataDiv .fourShow:nth-child(2) .imgDiv img, .postDataSecDiv .postDataDiv .fourShow:nth-child(2) .imgDiv img, .postDataSecDiv .postDataDiv .fourShow:nth-child(2) .imgDiv, .postDataSecDiv .postDataDiv .fourShow:nth-child(3) .imgDiv, .postDataSecDiv .postDataDiv .fourShow:nth-child(3) .imgDiv img, .postDataSecDiv .postDataDiv .fourShow:nth-child(3) .imgDiv img, .postDataSecDiv .postDataDiv .fourShow:nth-child(3) .imgDiv {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: relative;\n}\n.postDataSecDiv .postDataDiv .threeShow:nth-child(2) .imgDiv .viewMoreDiv, .postDataSecDiv .postDataDiv .threeShow:nth-child(2) .imgDiv img .viewMoreDiv, .postDataSecDiv .postDataDiv .threeShow:nth-child(2) .imgDiv img .viewMoreDiv, .postDataSecDiv .postDataDiv .threeShow:nth-child(2) .imgDiv .viewMoreDiv, .postDataSecDiv .postDataDiv .threeShow:nth-child(3) .imgDiv .viewMoreDiv, .postDataSecDiv .postDataDiv .threeShow:nth-child(3) .imgDiv img .viewMoreDiv, .postDataSecDiv .postDataDiv .threeShow:nth-child(3) .imgDiv img .viewMoreDiv, .postDataSecDiv .postDataDiv .threeShow:nth-child(3) .imgDiv .viewMoreDiv, .postDataSecDiv .postDataDiv .fourShow:nth-child(2) .imgDiv .viewMoreDiv, .postDataSecDiv .postDataDiv .fourShow:nth-child(2) .imgDiv img .viewMoreDiv, .postDataSecDiv .postDataDiv .fourShow:nth-child(2) .imgDiv img .viewMoreDiv, .postDataSecDiv .postDataDiv .fourShow:nth-child(2) .imgDiv .viewMoreDiv, .postDataSecDiv .postDataDiv .fourShow:nth-child(3) .imgDiv .viewMoreDiv, .postDataSecDiv .postDataDiv .fourShow:nth-child(3) .imgDiv img .viewMoreDiv, .postDataSecDiv .postDataDiv .fourShow:nth-child(3) .imgDiv img .viewMoreDiv, .postDataSecDiv .postDataDiv .fourShow:nth-child(3) .imgDiv .viewMoreDiv {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 99;\n  background: rgba(0, 0, 0, 0.7);\n  text-align: center;\n  color: #fff;\n  padding: 10px 10px;\n  font-size: 15px;\n  font-weight: bold;\n}\n.postDataSecDiv .postDataDiv .threeShow:nth-child(2) .imgDiv .viewMoreDiv p, .postDataSecDiv .postDataDiv .threeShow:nth-child(2) .imgDiv img .viewMoreDiv p, .postDataSecDiv .postDataDiv .threeShow:nth-child(2) .imgDiv img .viewMoreDiv p, .postDataSecDiv .postDataDiv .threeShow:nth-child(2) .imgDiv .viewMoreDiv p, .postDataSecDiv .postDataDiv .threeShow:nth-child(3) .imgDiv .viewMoreDiv p, .postDataSecDiv .postDataDiv .threeShow:nth-child(3) .imgDiv img .viewMoreDiv p, .postDataSecDiv .postDataDiv .threeShow:nth-child(3) .imgDiv img .viewMoreDiv p, .postDataSecDiv .postDataDiv .threeShow:nth-child(3) .imgDiv .viewMoreDiv p, .postDataSecDiv .postDataDiv .fourShow:nth-child(2) .imgDiv .viewMoreDiv p, .postDataSecDiv .postDataDiv .fourShow:nth-child(2) .imgDiv img .viewMoreDiv p, .postDataSecDiv .postDataDiv .fourShow:nth-child(2) .imgDiv img .viewMoreDiv p, .postDataSecDiv .postDataDiv .fourShow:nth-child(2) .imgDiv .viewMoreDiv p, .postDataSecDiv .postDataDiv .fourShow:nth-child(3) .imgDiv .viewMoreDiv p, .postDataSecDiv .postDataDiv .fourShow:nth-child(3) .imgDiv img .viewMoreDiv p, .postDataSecDiv .postDataDiv .fourShow:nth-child(3) .imgDiv img .viewMoreDiv p, .postDataSecDiv .postDataDiv .fourShow:nth-child(3) .imgDiv .viewMoreDiv p {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.postDataSecDiv .postDataDiv .fourShow:nth-child(4) {\n  display: none;\n}\n.postDataSecDiv .postDataDiv .twoShow:nth-child(2) {\n  float: right;\n}\n.postDataSecDiv .postDataDiv .smallDiv {\n  width: 100%;\n  height: 150px;\n  overflow: hidden;\n}\n.postDataSecDiv .postDataDiv .smallDiv img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.postDataSecDiv .postDataDiv .imgDiv {\n  overflow: hidden;\n  border-radius: 0px;\n}\n.postDataSecDiv .postDataDiv .videoDiv, .postDataSecDiv .postDataDiv .youTubeDiv {\n  position: relative;\n}\n.postDataSecDiv .postDataDiv .youTubeDiv::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n.postDataSecDiv .postDataDiv:nth-last-child(1) {\n  margin: 0px;\n}\n.playIcon {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.playIcon img {\n  width: 35px !important;\n  height: 35px !important;\n  position: absolute !important;\n  top: 50%;\n  left: 0;\n  right: 0;\n  margin: auto;\n  transform: translate(0, -50%);\n  z-index: 99;\n}\n.zoomIcon {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 9;\n  bottom: 0;\n}\n.fontP {\n  font-size: 13px;\n}\n.fontP1 {\n  font-size: 17px;\n  color: var(--headerColor);\n  font-weight: bold;\n}\n.fontP2 {\n  font-size: 16px;\n}\n.grayDiv {\n  border-bottom: 1px solid #c5bdbd;\n}\n.userImage {\n  height: 75px;\n  width: 75px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n  display: block;\n  margin: auto;\n  border: 2px solid #51b0f6;\n}\n.disDiv {\n  font-size: 14px;\n  letter-spacing: 1px;\n  padding: 7px;\n}\n.autoMar {\n  margin: auto;\n}\n.iconCss {\n  height: 25px;\n  width: 25px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.sideDiv {\n  background: white;\n  box-shadow: 0px 0px 5px 0px var(--headerColor);\n  border-radius: 10px 0px 0px 10px;\n  padding: 7px;\n}\n.margin10 {\n  margin: 10px 0px;\n}\n.bdayCss {\n  font-size: 13px;\n  color: #000;\n  line-height: 15px;\n}\n.pFont {\n  letter-spacing: 1px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 4;\n}\n.borderDiv {\n  border: 1px solid #d5d0d0;\n  border-radius: 10px;\n}\n.borderBtm {\n  border-bottom: 1px solid #d5d0d0;\n}\n.imgDiv {\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.uDiv {\n  font-size: 12px;\n}\n.bgImage {\n  position: relative;\n  width: 100%;\n  height: 175px;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.gpDiv {\n  top: 20%;\n  left: 0;\n  position: relative;\n  width: 90%;\n  transform: translate(0px, -20%);\n  margin: auto;\n  z-index: 1;\n  color: black;\n}\n.bgImage::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0px;\n  bottom: 0;\n  z-index: 0;\n}\n.sp {\n  color: #5a57e1;\n}\n.uDiv1 {\n  color: #5a57e1;\n}\n.topDiv {\n  top: 16%;\n  color: #5a57e1;\n  font-weight: bold;\n}\n.padd16 {\n  padding-right: 16px;\n}\n.homeT {\n  font-size: 15px;\n}\n.QucikDiv {\n  font-size: 15px !important;\n  margin-top: 10px;\n  color: var(--headerColor) !important;\n  display: inline-block;\n  text-align: center;\n}\n.QucikDiv span {\n  margin: 0px 5px 0 0;\n  float: left;\n}\n.QucikDiv ion-icon {\n  font-size: 20px;\n  float: left;\n  margin: -3px 0 0 0px;\n}\n.viewM {\n  border: 1px solid var(--headerColor);\n  padding: 5px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUFVLFdBQUE7QUFOVjtBQU9FO0VBQWEsa0NBQUE7QUFKZjtBQUtJO0VBQUUsZUFBQTtBQUZOO0FBSUU7RUFBK0Isa0NBQUE7QUFEakM7QUFJRTtFQUFVLFdBQUE7RUFBVyxZQUFBO0VBQVksZ0JBQUE7RUFBZ0IsWUFBQTtBQUduRDtBQUZFO0VBQUUsZUFBQTtFQUFlLFdBQUE7RUFBVyxpQkFBQTtBQU85QjtBQUhFO0VBQWdCLG1CQUFBO0FBT2xCO0FBTkk7RUFBVSxrQkFBQTtFQUFrQixNQUFBO0VBQU0sT0FBQTtFQUFPLFNBQUE7RUFBUyxRQUFBO0VBQVEsWUFBQTtBQWM5RDtBQWJJO0VBQWEsa0JBQUE7RUFBa0IsU0FBQTtFQUFTLGdCQUFBO0VBQWdCLDhCQUFBO0VBQThCLFdBQUE7RUFBVyxPQUFBO0VBQU8sUUFBQTtFQUFRLGFBQUE7QUF1QnBIO0FBdEJNO0VBQUUsZUFBQTtFQUFlLFdBQUE7RUFBVyxpQkFBQTtFQXRCaEMsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFrQnFFO0FBZ0N2RTtBQTNCQTtFQUFlLFVBQUE7QUErQmY7QUE5QkU7RUFBYyxvQ0FBQTtFQUFvQyxrQkFBQTtFQUFrQixrQkFBQTtFQUFrQixVQUFBO0VBQVUsYUFBQTtFQUFhLGlCQUFBO0VBQzNHLG1DQUFBO0VBQW1DLFlBQUE7QUF1Q3ZDO0FBdENJO0VBQVMsOEJBQUE7RUFBOEIsV0FBQTtFQUFXLGVBQUE7RUFBZSxrQkFBQTtFQUFrQixpQkFBQTtBQTZDdkY7QUE1Q0k7RUFBRSxpQkFBQTtFQUFpQixnQkFBQTtFQUFnQixpQkFBQTtFQUFpQixXQUFBO0FBa0R4RDtBQWhERTtFQUFTLGtCQUFBO0FBbURYO0FBbERJO0VBQVEsV0FBQTtFQUFXLFlBQUE7RUFBWSxrQkFBQTtFQUFrQixnQkFBQTtFQUFnQixZQUFBO0VBQVksb0NBQUE7QUEwRGpGO0FBekRJO0VBQUUsb0JBQUE7RUFBb0IsZUFBQTtFQW5DeEIsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkErQjJEO0FBa0U3RDtBQTlEQTtFQUFXLFdBQUE7RUFBVyxhQUFBO0VBQWEsa0JBQUE7QUFvRW5DO0FBbkVFO0VBQVMsa0JBQUE7RUFBa0IsTUFBQTtFQUFNLE9BQUE7RUFBTyxRQUFBO0VBQVEsU0FBQTtFQUFTLFdBQUE7RUFBVyxrQkFBQTtFQUFrQixzQ0FBQTtFQUNwRixnQ0FBQTtFQUFnQyxXQUFBO0FBOEVwQztBQTNFQTtFQUFhLHVCQUFBO0VBQXlCLHNCQUFBO0FBZ0Z0QztBQTdFRTtFQUNFLFlBQUE7RUFFQSxzQkFBQTtBQStFSjtBQTlFSTtFQUFXLGVBQUE7RUFBZSxpQkFBQTtFQW5ENUIsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkErQ2lFO0VBQUcsbUJBQUE7QUF3RnRFO0FBdkZJO0VBcERGLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBZ0R1QztBQThGekM7QUE3Rkk7RUFBcUIsZUFBQTtFQUFlLFdBQUE7RUFBVyxpQkFBQTtFQUFpQixnQkFBQTtBQW1HcEU7QUFsR0k7RUFBUyxrQkFBQTtFQUFrQixVQUFBO0VBQVUsK0JBQUE7RUFBK0IsUUFBQTtFQUFRLFdBQUE7RUFBVyxTQUFBO0VBQVMsVUFBQTtFQUM5RixrQkFBQTtFQUFrQixXQUFBO0VBQVcsa0JBQUE7QUE2R25DO0FBNUdNO0VBQVMsZUFBQTtFQUFlLGlCQUFBO0VBQWlCLFlBQUE7QUFpSC9DO0FBN0dJO0VBQVMsV0FBQTtFQUFXLGFBQUE7QUFpSHhCO0FBaEhNO0VBQXFCLFdBQUE7RUFBVyxZQUFBO0VBQVksb0JBQUE7S0FBQSxpQkFBQTtBQXFIbEQ7QUFuSEk7RUFBdUIsWUFBQTtBQXNIM0I7QUFuSEk7RUFBMEQsVUFBQTtFQUFVLFdBQUE7RUFBVyxhQUFBO0FBd0huRjtBQXZITTtFQUFxQixXQUFBO0VBQVcsWUFBQTtFQUFZLG9CQUFBO0tBQUEsaUJBQUE7QUE0SGxEO0FBMUhJO0VBQWlHLFVBQUE7RUFBVSxhQUFBO0VBQWEsWUFBQTtFQUFZLFNBQUE7QUFnSXhJO0FBL0hNO0VBQTJDLFdBQUE7RUFBVyxZQUFBO0VBQVksb0JBQUE7S0FBQSxpQkFBQTtFQUFpQixrQkFBQTtBQXFJekY7QUFwSVE7RUFBYSxrQkFBQTtFQUFrQixNQUFBO0VBQU0sT0FBQTtFQUFPLFFBQUE7RUFBUSxTQUFBO0VBQVMsV0FBQTtFQUFXLDhCQUFBO0VBQThCLGtCQUFBO0VBQWtCLFdBQUE7RUFDdEgsa0JBQUE7RUFBa0IsZUFBQTtFQUFlLGlCQUFBO0FBaUozQztBQWhKVTtFQUFFLGtCQUFBO0VBQWtCLE9BQUE7RUFBTyxNQUFBO0VBQU0sUUFBQTtFQUFRLFNBQUE7RUFBUyxZQUFBO0VBQVksMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FBeUp4RTtBQXJKSTtFQUF1QixhQUFBO0FBd0ozQjtBQXZKSTtFQUFzQixZQUFBO0FBMEoxQjtBQXpKSTtFQUFVLFdBQUE7RUFBVyxhQUFBO0VBQWEsZ0JBQUE7QUE4SnRDO0FBN0pNO0VBQUksV0FBQTtFQUFXLFlBQUE7RUFBWSxvQkFBQTtLQUFBLGlCQUFBO0FBa0tqQztBQWhLSTtFQUFRLGdCQUFBO0VBQWdCLGtCQUFBO0FBb0s1QjtBQW5LSTtFQUF1QixrQkFBQTtBQXNLM0I7QUFwS0k7RUFBbUIsV0FBQTtFQUFXLGtCQUFBO0VBQWtCLE1BQUE7RUFBTSxPQUFBO0VBQU8sUUFBQTtFQUFRLFNBQUE7RUFBUyw4QkFBQTtBQTZLbEY7QUEzS0U7RUFBK0IsV0FBQTtBQThLakM7QUE1S0E7RUFBVSxrQkFBQTtFQUFrQixNQUFBO0VBQU0sT0FBQTtFQUFPLFFBQUE7RUFBUSxTQUFBO0FBb0xqRDtBQW5MRTtFQUFJLHNCQUFBO0VBQXNCLHVCQUFBO0VBQXVCLDZCQUFBO0VBQTZCLFFBQUE7RUFBUSxPQUFBO0VBQU8sUUFBQTtFQUFRLFlBQUE7RUFBWSw2QkFBQTtFQUE2QixXQUFBO0FBOExoSjtBQTNMQTtFQUFVLGtCQUFBO0VBQWtCLE1BQUE7RUFBTSxRQUFBO0VBQVEsT0FBQTtFQUFPLFVBQUE7RUFBVSxTQUFBO0FBb00zRDtBQTdMQTtFQUFPLGVBQUE7QUFpTVA7QUFoTUE7RUFBUSxlQUFBO0VBQWlCLHlCQUFBO0VBQTBCLGlCQUFBO0FBc01uRDtBQXJNQTtFQUFRLGVBQUE7QUF5TVI7QUF2TUE7RUFBUyxnQ0FBQTtBQTJNVDtBQTFNQTtFQUFXLFlBQUE7RUFBYSxXQUFBO0VBQVksb0JBQUE7S0FBQSxpQkFBQTtFQUFrQixrQkFBQTtFQUFtQixjQUFBO0VBQWUsWUFBQTtFQUFhLHlCQUFBO0FBb05yRztBQW5OQTtFQUFRLGVBQUE7RUFBZ0IsbUJBQUE7RUFBb0IsWUFBQTtBQXlONUM7QUF4TkE7RUFBUyxZQUFBO0FBNE5UO0FBM05BO0VBQVMsWUFBQTtFQUFjLFdBQUE7RUFBWSxzQkFBQTtLQUFBLG1CQUFBO0FBaU9uQztBQWhPQTtFQUFTLGlCQUFBO0VBQWtCLDhDQUFBO0VBQStDLGdDQUFBO0VBQWlDLFlBQUE7QUF1TzNHO0FBNU5BO0VBQVUsZ0JBQUE7QUFnT1Y7QUEvTkE7RUFBUyxlQUFBO0VBQWdCLFdBQUE7RUFBWSxpQkFBQTtBQXFPckM7QUFwT0E7RUFBTyxtQkFBQTtFQVJMLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBSTRDO0FBNk85QztBQTVPQTtFQUFXLHlCQUFBO0VBQTBCLG1CQUFBO0FBaVByQztBQWhQQTtFQUFXLGdDQUFBO0FBb1BYO0FBblBBO0VBQVEsa0JBQUE7RUFBbUIsWUFBQTtFQUFhLFdBQUE7RUFBWSxvQkFBQTtLQUFBLGlCQUFBO0FBMFBwRDtBQXpQQTtFQUFNLGVBQUE7QUE2UE47QUE1UEE7RUFBUyxrQkFBQTtFQUFtQixXQUFBO0VBQVksYUFBQTtFQUFjLHdCQUFBO0VBQXlCLDJCQUFBO0VBQTRCLDRCQUFBO0FBcVEzRztBQXBRQTtFQUFPLFFBQUE7RUFBUyxPQUFBO0VBQVEsa0JBQUE7RUFBbUIsVUFBQTtFQUFXLCtCQUFBO0VBQWdDLFlBQUE7RUFBYSxVQUFBO0VBQ2pHLFlBQUE7QUE4UUY7QUE3UUE7RUFDRSxXQUFBO0VBQVksa0JBQUE7RUFBa0IsT0FBQTtFQUFPLFFBQUE7RUFBUSxRQUFBO0VBQVEsU0FBQTtFQUVyRCxVQUFBO0FBb1JGO0FBblJBO0VBQUksY0FBQTtBQXVSSjtBQXRSQTtFQUFPLGNBQUE7QUEwUlA7QUF6UkE7RUFBUSxRQUFBO0VBQVMsY0FBQTtFQUFlLGlCQUFBO0FBK1JoQztBQTlSQTtFQUFRLG1CQUFBO0FBa1NSO0FBalNBO0VBQU8sZUFBQTtBQXFTUDtBQXBTQTtFQUFVLDBCQUFBO0VBQTJCLGdCQUFBO0VBQ25DLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQXlTRjtBQXhTRTtFQUFTLG1CQUFBO0VBQ1AsV0FBQTtBQTJTSjtBQXpTRTtFQUFhLGVBQUE7RUFDWCxXQUFBO0VBQ0Esb0JBQUE7QUE0U0o7QUExU0E7RUFBTyxvQ0FBQTtFQUNMLFlBQUE7RUFDQSxrQkFBQTtBQThTRiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gbGluZS1jbGFtcCgkbGluZXMpe1xuICBvdmVyZmxvdzpoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7XG4gIGRpc3BsYXk6LXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiRsaW5lcztcbn1cblxuLnRvRG9MaXN0e21hcmdpbjowcHg7XG4gIC50b0RvTGlzdERpdntib3JkZXItYm90dG9tOjFweCBzb2xpZCBnYWluc2Jvcm87XG4gICAgcHtmb250LXNpemU6MTVweDt9XG4gIH1cbiAgLnRvRG9MaXN0RGl2Om50aC1sYXN0LWNoaWxkKDEpe2JvcmRlci1ib3R0b206MHB4IHNvbGlkIGdhaW5zYm9ybzt9XG59XG4ucXVpY2tBY2Nlc3NEaXZ7XG4gIC5zbWFsbERpdnt3aWR0aDo1MHB4O2hlaWdodDo1MHB4O21hcmdpbjo1cHggYXV0bztwYWRkaW5nOjJweH1cbiAgcHtmb250LXNpemU6MTNweDtjb2xvcjojMDAwO2xpbmUtaGVpZ2h0OjE1cHg7fVxufVxuXG4udHJhbmRpbmdEaXZ7XG4gIC50cmVuZGluZ1NsaWRlc3twYWRkaW5nOjAgMCAzMHB4IDA7XG4gICAgLmNsaWNrRGl2e3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtib3R0b206MDtyaWdodDowO3otaW5kZXg6OTk5O31cbiAgICAuY29udGVudFRleHR7cG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjA7dGV4dC1hbGlnbjpsZWZ0O2JhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjYpO2NvbG9yOiNmZmY7bGVmdDowO3JpZ2h0OjA7cGFkZGluZzoxMHB4O1xuICAgICAgcHtmb250LXNpemU6MTRweDtjb2xvcjojZmZmO2xpbmUtaGVpZ2h0OjIwcHg7QGluY2x1ZGUgbGluZS1jbGFtcCgyKTt9XG4gICAgfVxuICB9XG59XG5cbi5jaGVlcnNEYXRhRGl2e3BhZGRpbmc6MDtcbiAgLmFkZENoZWVyc0Rpdntib3JkZXI6MXB4IHNvbGlkIHZhcigtLWhlYWRlckNvbG9yKTtib3JkZXItcmFkaXVzOjMwJTt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDo4MCU7aGVpZ2h0OjEwMHB4O3BhZGRpbmc6MTBweCA1cHg7XG4gICAgYmFja2dyb3VuZDp2YXIoLS1oZWFkZXJMaWdodENvbG9yKTttYXJnaW46YXV0bztcbiAgICBpb24taWNvbntiYWNrZ3JvdW5kOnZhcigtLWhlYWRlckNvbG9yKTtjb2xvcjojZmZmO2ZvbnQtc2l6ZToyNXB4O2JvcmRlci1yYWRpdXM6NTAlO21hcmdpbjo4cHggMCAwIDA7fVxuICAgIHB7bWFyZ2luOjVweCAwIDAgMDtmb250LXNpemU6My41dnc7Zm9udC13ZWlnaHQ6Ym9sZDtjb2xvcjpncmF5O31cbiAgfVxuICAudXNlckRpdnttYXJnaW46MTBweCAwIDAgMDtcbiAgICAuaW1nRGl2e3dpZHRoOjUwcHg7aGVpZ2h0OjUwcHg7Ym9yZGVyLXJhZGl1czo1MCU7b3ZlcmZsb3c6aGlkZGVuO21hcmdpbjphdXRvO2JvcmRlcjoxcHggc29saWQgdmFyKC0taGVhZGVyQ29sb3IpO31cbiAgICBwe21hcmdpbjoxMHB4IDAgMCAwcHg7Zm9udC1zaXplOjEycHg7QGluY2x1ZGUgbGluZS1jbGFtcCgyKTt9XG4gIH1cbn1cblxuLnNsaWRlckRpdnt3aWR0aDoxMDAlO2hlaWdodDoxODBweDtwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgLmJsdXJEaXZ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7ei1pbmRleDotMjtmaWx0ZXI6Ymx1cigyMHB4KTtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtc2l6ZToyMDAlICFpbXBvcnRhbnQ7aGVpZ2h0OjkwJTtcbiAgfVxufVxuLnVzZXJJbWdJY29ue2hlaWdodDogNTBweCAhaW1wb3J0YW50OyB3aWR0aDogNTBweCAhaW1wb3J0YW50O31cblxuLnBvc3REYXRhU2VjRGl2e1xuICAucG9zdERhdGFEaXZ7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgLy8gYmFja2dyb3VuZDojZmZmO1xuICAgIC8qYmFja2dyb3VuZDojZjZmNmY2OyovXG4gICAgLnRpdGxlVGV4dHtmb250LXNpemU6MTZweDtmb250LXdlaWdodDpib2xkO0BpbmNsdWRlIGxpbmUtY2xhbXAoMik7bWFyZ2luOjBweCAwIDVweCAwO31cbiAgICAuZGlzY3JpcHRpb25UZXh0e0BpbmNsdWRlIGxpbmUtY2xhbXAoMyk7fVxuICAgIC5kYXRlVGV4dCwgLnBvc3RUZXh0e2ZvbnQtc2l6ZToxMnB4O2NvbG9yOmdyYXk7bWFyZ2luOjVweCAwIDAgMDtmb250LXNpemU6My41dnc7fVxuICAgIC5vdmVyRGl2e3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTtiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC42Nyk7dG9wOjFweDtib3R0b206MXB4O2xlZnQ6MXB4O3JpZ2h0OjFweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6NXB4O2NvbG9yOiNmZmY7dGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAuVmlld0Rpdntmb250LXNpemU6MjJweDtmb250LXdlaWdodDpib2xkO21hcmdpbjoyOHB4O31cbiAgICB9XG5cbiAgICBcbiAgICAub25lU2hvd3t3aWR0aDoxMDAlO2hlaWdodDoyMDBweDtcbiAgICAgIC5pbWdEaXYsIC5pbWdEaXYgaW1ne3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b2JqZWN0LWZpdDpjb3Zlcjt9XG4gICAgfVxuICAgIC5vbmVTaG93LmF1dG9IZWlnaHRDbHN7aGVpZ2h0OmF1dG87fVxuXG5cbiAgICAudGhyZWVTaG93Om50aC1jaGlsZCgxKSwgLnR3b1Nob3csIC5mb3VyU2hvdzpudGgtY2hpbGQoMSl7d2lkdGg6NTAlO2Zsb2F0OmxlZnQ7aGVpZ2h0OjIwMHB4O1xuICAgICAgLmltZ0RpdiwgLmltZ0RpdiBpbWd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvYmplY3QtZml0OmNvdmVyO31cbiAgICB9XG4gICAgLnRocmVlU2hvdzpudGgtY2hpbGQoMiksIC50aHJlZVNob3c6bnRoLWNoaWxkKDMpLCAuZm91clNob3c6bnRoLWNoaWxkKDIpLCAuZm91clNob3c6bnRoLWNoaWxkKDMpe3dpZHRoOjUwJTtoZWlnaHQ6MTAwcHg7ZmxvYXQ6cmlnaHQ7bWFyZ2luOjA7XG4gICAgICAuaW1nRGl2LCAuaW1nRGl2IGltZywgLmltZ0RpdiBpbWcsIC5pbWdEaXZ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvYmplY3QtZml0OmNvdmVyO3Bvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAudmlld01vcmVEaXZ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7ei1pbmRleDo5OTtiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC43KTt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjojZmZmO1xuICAgICAgICAgIHBhZGRpbmc6MTBweCAxMHB4O2ZvbnQtc2l6ZToxNXB4O2ZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgICAgcHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7cmlnaHQ6MDtib3R0b206MDttYXJnaW46YXV0bztoZWlnaHQ6Zml0LWNvbnRlbnQ7fVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5mb3VyU2hvdzpudGgtY2hpbGQoNCl7ZGlzcGxheTpub25lO31cbiAgICAudHdvU2hvdzpudGgtY2hpbGQoMil7ZmxvYXQ6cmlnaHQ7fVxuICAgIC5zbWFsbERpdnt3aWR0aDoxMDAlO2hlaWdodDoxNTBweDtvdmVyZmxvdzpoaWRkZW47XG4gICAgICBpbWd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvYmplY3QtZml0OmNvdmVyO31cbiAgICB9XG4gICAgLmltZ0RpdntvdmVyZmxvdzpoaWRkZW47Ym9yZGVyLXJhZGl1czowcHg7fVxuICAgIC52aWRlb0RpdiwgLnlvdVR1YmVEaXZ7cG9zaXRpb246cmVsYXRpdmU7fVxuICAgIC8vIC52aWRlb0Rpdjo6YWZ0ZXJ7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO31cbiAgICAueW91VHViZURpdjo6YWZ0ZXJ7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO2JhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjUpO31cbiAgfVxuICAucG9zdERhdGFEaXY6bnRoLWxhc3QtY2hpbGQoMSl7bWFyZ2luOjBweDt9XG59XG4ucGxheUljb257cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7XG4gIGltZ3t3aWR0aDozNXB4ICFpbXBvcnRhbnQ7aGVpZ2h0OjM1cHggIWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZSAhaW1wb3J0YW50O3RvcDo1MCU7bGVmdDowO3JpZ2h0OjA7bWFyZ2luOmF1dG87dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAtNTAlKTt6LWluZGV4Ojk5O31cbn1cblxuLnpvb21JY29ue3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7bGVmdDowO3otaW5kZXg6OTtib3R0b206MDt9XG5cblxuXG4vLyAuYmdSb3csLmJnUm93MXtiYWNrZ3JvdW5kOndoaXRlO2JvcmRlci1yYWRpdXM6MTBweDtiYWNrZ3JvdW5kLXNpemU6MTAwJSAxMDAlICFpbXBvcnRhbnQ7YmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tICFpbXBvcnRhbnQ7fVxuLy8gLmJnUm93e21hcmdpbjogLTg1cHggMHB4IDBweCAwcHg7fVxuLy8gLmJnUm93MXttYXJnaW46IDBweDt9XG4uZm9udFB7Zm9udC1zaXplOiAxM3B4O31cbi5mb250UDF7Zm9udC1zaXplOiAxN3B4OyBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO2ZvbnQtd2VpZ2h0OiBib2xkO31cbi5mb250UDJ7Zm9udC1zaXplOiAxNnB4O31cbi8vIC5yYWREaXZ7Ym9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZGVyQ29sb3IpO2JvcmRlci1yYWRpdXM6IDEwcHg7cGFkZGluZzogNXB4O31cbi5ncmF5RGl2e2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNjNWJkYmQ7fVxuLnVzZXJJbWFnZXtoZWlnaHQ6IDc1cHg7d2lkdGg6IDc1cHg7b2JqZWN0LWZpdDogY292ZXI7Ym9yZGVyLXJhZGl1czogNTAlO2Rpc3BsYXk6IGJsb2NrO21hcmdpbjogYXV0bztib3JkZXI6IDJweCBzb2xpZCAjNTFiMGY2O31cbi5kaXNEaXZ7Zm9udC1zaXplOiAxNHB4O2xldHRlci1zcGFjaW5nOiAxcHg7cGFkZGluZzogN3B4O31cbi5hdXRvTWFye21hcmdpbjogYXV0bzt9XG4uaWNvbkNzc3toZWlnaHQ6IDI1cHg7IHdpZHRoOiAyNXB4O29iamVjdC1maXQ6IGNvbnRhaW47fVxuLnNpZGVEaXZ7YmFja2dyb3VuZDogd2hpdGU7Ym94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHZhcigtLWhlYWRlckNvbG9yKTtib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweDtwYWRkaW5nOiA3cHg7fVxuXG5cbi8vIGZvciBSICYgUiBcbkBtaXhpbiBsaW5lLWNsYW1wKCRsaW5lcykge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtbGluZS1jbGFtcDokbGluZXM7XG59XG4ubWFyZ2luMTB7bWFyZ2luOiAxMHB4IDBweDt9XG4uYmRheUNzc3tmb250LXNpemU6IDEzcHg7Y29sb3I6ICMwMDA7bGluZS1oZWlnaHQ6IDE1cHg7fVxuLnBGb250e2xldHRlci1zcGFjaW5nOjFweDtAaW5jbHVkZSBsaW5lLWNsYW1wKDQpO31cbi5ib3JkZXJEaXZ7Ym9yZGVyOiAxcHggc29saWQgI2Q1ZDBkMDtib3JkZXItcmFkaXVzOiAxMHB4O31cbi5ib3JkZXJCdG17Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNWQwZDA7fVxuLmltZ0Rpdntib3JkZXItcmFkaXVzOiA1MCU7aGVpZ2h0OiA2MHB4O3dpZHRoOiA2MHB4O29iamVjdC1maXQ6IGNvdmVyO31cbi51RGl2e2ZvbnQtc2l6ZTogMTJweDt9XG4uYmdJbWFnZXtwb3NpdGlvbjogcmVsYXRpdmU7d2lkdGg6IDEwMCU7aGVpZ2h0OiAxNzVweDtiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO2JhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7fVxuLmdwRGl2e3RvcDogMjAlO2xlZnQ6IDA7cG9zaXRpb246IHJlbGF0aXZlO3dpZHRoOiA5MCU7dHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMjAlKTttYXJnaW46IGF1dG87ei1pbmRleDogMTtcbiAgY29sb3I6IGJsYWNrO31cbi5iZ0ltYWdlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3JpZ2h0OjA7dG9wOjBweDtib3R0b206MDtcbiAgLy8gYmFja2dyb3VuZDpyZ2IoMCwgMCwgMCwgLjMpO1xuICB6LWluZGV4OiAwO31cbi5zcHtjb2xvcjojNWE1N2UxO31cbi51RGl2MXtjb2xvcjogIzVhNTdlMTt9XG4udG9wRGl2e3RvcDogMTYlO2NvbG9yOiAjNWE1N2UxO2ZvbnQtd2VpZ2h0OiBib2xkO31cbi5wYWRkMTZ7cGFkZGluZy1yaWdodDogMTZweDt9XG4uaG9tZVR7Zm9udC1zaXplOiAxNXB4O31cbi5RdWNpa0Rpdntmb250LXNpemU6IDE1cHggIWltcG9ydGFudDttYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBzcGFueyAgICBtYXJnaW46IDBweCA1cHggMCAwO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIGlvbi1pY29ueyAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiAtM3B4IDAgMCAwcHg7fVxufVxuLnZpZXdNe2JvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhlYWRlckNvbG9yKTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7fVxuXG5cblxuIl19 */";
      /***/
    },

    /***/
    "./src/app/tab1/tab1.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /*! exports provided: Tab1Page */

    /***/
    function srcAppTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
        return Tab1Page;
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
      /*! ../provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _src_assets_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../src/assets/constant */
      "./src/assets/constant.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/data-transfer.service */
      "./src/app/services/data-transfer.service.ts");
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/local-storage.service */
      "./src/app/services/local-storage.service.ts");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/events.service */
      "./src/app/services/events.service.ts");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

      var Tab1Page = /*#__PURE__*/function () {
        function Tab1Page(apiservices, router, zone, menuCtrl, sendData, storage, storageService, eventService, platform, statusBar) {
          _classCallCheck(this, Tab1Page);

          this.apiservices = apiservices;
          this.router = router;
          this.zone = zone;
          this.menuCtrl = menuCtrl;
          this.sendData = sendData;
          this.storage = storage;
          this.storageService = storageService;
          this.eventService = eventService;
          this.platform = platform;
          this.statusBar = statusBar;
          this.TrendingNews = {
            // autoplay:true,speed:"500",loop:true,initialSlide:0,slidesPerView:1,spaceBetween:10,zoom:false,pager:true,
            speed: "500",
            initialSlide: 0,
            slidesPerView: 1,
            spaceBetween: 10,
            pager: true
          };
          this.ToDoListSlider = {
            initialSlide: 0,
            spaceBetween: 5,
            slidesPerView: 1,
            zoom: false
          };
          this.errorMessage = "";
          this.value = 0;
          this.myinfiniteScrollCall = false;
          this.showQuickData = false;
        }

        _createClass(Tab1Page, [{
          key: "videoZoome",
          value: function videoZoome(videoPath, videoType, index) {
            var _this = this;

            this.zone.run(function () {
              _this.apiservices.videoZoome(videoPath, videoType, index);
            });
          } //ionViewWillEnter is not working after filling the form and come back on home therefore we are using events 

        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            console.log("ion view will enter function==");
            this.storage.get('fcmToken').then(function (fcmToken) {
              console.log("call fcm new storage==", fcmToken);
              _this2.newFcmTokenKey = fcmToken;

              if (_this2.newFcmTokenKey == undefined || _this2.newFcmTokenKey == '') {
                _this2.apiservices.generateFCMToken();
              }
            });
            console.log("ionViewDidEnter");
            this.storageService.getStorage().then(function (storedData) {
              console.log("forceUpdate function0==", storedData);

              if (storedData != null && storedData.login_token) {
                console.log("forceUpdate function1==", storedData);

                _this2.forceUpdateFunction();

                _this2.initialFun();
              } else {
                _this2.forceUpdateFunction();

                console.log("forceUpdate function2==", storedData);
              }
            });
            this.eventService.getObservable().subscribe(function (data) {
              console.log("publishData Data received==", data);

              if (data.data.commingFrom == "reloadHomeApi" && data.data.reloadHomePage == true) {
                console.log("publishData Data forceupdate==", data);
                _this2.allData = undefined;

                _this2.homeAllApi();
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.storageService.getStorage().then(function (res) {
              _this3.sidemenu();

              _this3.homeAllApi();

              _this3.awardListFun(); // this.initialFun();


              console.log("ionic lifecycle called getStorage==", res);
            });
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            var _this4 = this;

            console.log("Begin async opeations=="); // this.value=0;

            setTimeout(function () {
              _this4.allData = undefined;
              setTimeout(function () {
                _this4.forceUpdateFunction();

                _this4.homeAllApi();

                _this4.initialFun();

                _this4.awardListFun();
              }, 500);
              console.log("async operation has ended==");
              event.target.complete();
            }, 2000);
          }
        }, {
          key: "redirectionDetail",
          value: function redirectionDetail(trendingList) {
            var _this5 = this;

            this.zone.run(function () {
              _this5.sendData.myParam = trendingList;

              _this5.router.navigate(["/community-detail"]);
            });
          }
        }, {
          key: "openArrow",
          value: function openArrow() {
            if (this.showQuickData == false) {
              this.showQuickData = true;
            } else {
              this.showQuickData = false;
            }
          }
        }, {
          key: "gotoBirthdayDetail",
          value: function gotoBirthdayDetail(item) {
            this.sendData.alldata = item;
            this.router.navigate(['/birthday-aniversray-detail']);
          }
        }, {
          key: "homeAllApi",
          value: function homeAllApi() {
            var _this6 = this;

            this.zone.run(function () {
              console.log("home page all data api call function==");
              var apikey = {};

              _this6.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].homeAllData, apikey).subscribe(function (result) {
                console.log("home page all data api result==", result);

                if (result.status == 1 || result.status == '1') {
                  _this6.allData = result.data;
                  _this6.sayCheersData = _this6.allData.badgelist;
                  _this6.quickAccessArray1 = _this6.allData.quickaccess.list;
                  _this6.quickAccessArray = [];

                  for (var i = 0; i < _this6.quickAccessArray1.length; i++) {
                    if (i < 3) {
                      _this6.quickAccessArray.push(_this6.quickAccessArray1[i]);

                      console.log("menu data1==", _this6.quickAccessArray);
                    }

                    console.log("menu data==", _this6.allData.quickaccess.list);
                  }

                  console.log("say cheers data==", _this6.allData);
                  console.log("say cheers data==", _this6.sayCheersData);
                  console.log("this.allData.quickaccess.list==", _this6.allData.quickaccess.list);
                  _this6.value = 0;
                  _this6.postData = undefined;

                  _this6.communityList();
                } else {
                  _this6.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this6.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "initialFun",
          value: function initialFun() {
            var _this7 = this;

            this.zone.run(function () {
              _this7.storageService.getStorage().then(function (storedData) {
                console.log("storedData==", storedData);
                var apiKey = {
                  "employee_id": storedData.employeeID
                };
                console.log("resend OTP by Voice Call, api key", apiKey);

                _this7.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].initialApi, apiKey).subscribe(function (result) {
                  console.log("resend OTP by Voice Call, api response==", result);

                  if (result.status == 1 || result.status == '1') {
                    // this.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');
                    _this7.sendData.alldata = result;

                    if (result.data.is_aboard_filled == 0) {
                      _this7.router.navigate(['/welcome-login']);
                    }
                  } else {
                    _this7.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                  }
                }, function (err) {
                  _this7.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
              });
            });
          }
        }, {
          key: "gotoAwardDetail",
          value: function gotoAwardDetail(item) {
            this.sendData.myParam = item;
            this.router.navigate(['/award-detail']); // this.router.navigate(['/award-dashboard']);
          }
        }, {
          key: "awardListFun",
          value: function awardListFun() {
            var _this8 = this;

            this.zone.run(function () {
              _this8.apiservices.showLoader();

              _this8.storageService.getStorage().then(function (stored) {
                var apiKey = {
                  limit: "0"
                };
                console.log("resend OTP by Voice Call, api key", apiKey);

                _this8.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].aboardListApi, apiKey).subscribe(function (result) {
                  console.log("resend OTP by Voice Call, api response==", result);

                  _this8.apiservices.hideLoader();

                  _this8.awdDetailData = result;

                  if (result.status == 1 || result.status == '1') {
                    _this8.welcomeAboardData = result.data;
                    _this8.errorMessage = ""; // this.apiservices.showToastMessage(result.message, 'top', 3000, 'greenBg');
                  } else {
                    _this8.errorMessage = result.message;

                    _this8.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                  }
                }, function (err) {
                  _this8.apiservices.hideLoader();

                  _this8.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
              });
            });
          }
        }, {
          key: "toDoRedirection",
          value: function toDoRedirection(toDoListData) {
            var _this9 = this;

            this.zone.run(function () {
              if (toDoListData.link != '') {
                if (toDoListData.is_btn_applicable == 1 || toDoListData.is_btn_applicable == '1') {
                  _this9.sendData.alldata = toDoListData;
                  var data = {
                    "commingFrom": "homePage"
                  };
                  _this9.sendData.commingPageName = data;
                  console.log("community toDoListData==", toDoListData);

                  _this9.router.navigate([toDoListData.link]);
                } else {}
              } else {}
            });
          }
        }, {
          key: "quickAccessRedirection",
          value: function quickAccessRedirection(quickAccessList) {
            var _this10 = this;

            this.zone.run(function () {
              if (quickAccessList.link != '') {
                if (quickAccessList.identifier == "external") {
                  _this10.apiservices.iab.create(quickAccessList.link, "_system", _this10.apiservices.options);
                } else {
                  _this10.sendData.alldata = quickAccessList;
                  var data = {
                    "commingFrom": "homePage"
                  };
                  _this10.sendData.commingPageName = data;
                  console.log("community quickAccessList==", quickAccessList);

                  _this10.router.navigate([quickAccessList.link]);
                }
              } else {}
            });
          }
        }, {
          key: "communityPostRedirection",
          value: function communityPostRedirection(allData, scrollValue) {
            var _this11 = this;

            this.zone.run(function () {
              console.log("community data==", allData);
              _this11.sendData.myParam = allData;
              _this11.sendData.autoScroll = scrollValue;

              _this11.router.navigate(["/community-detail"]);
            });
          }
        }, {
          key: "gotoWelcomeAboard",
          value: function gotoWelcomeAboard(val, item) {
            this.sendData.alldata = val;
            this.sendData.myParam = item;
            this.router.navigate(['/qualification-priview']);
          }
        }, {
          key: "communityList",
          value: function communityList() {
            var _this12 = this;

            this.zone.run(function () {
              console.log("noticeBoard List api call function==");

              _this12.storageService.getStorage().then(function (storedData) {
                var apikey = {
                  "limit": _this12.value,
                  "employee_id": storedData.employeeID
                };

                _this12.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].homePostApi, apikey).subscribe(function (result) {
                  console.log("noticeBoard List api result==", result);

                  if (result.status == 1 || result.status == '1') {
                    // this.videoIcon=result.data.settings.video_icon;
                    // this.youTubeIcon=result.data.settings.youtube_icon;
                    if (_this12.postData == undefined) {
                      _this12.postData = result.data.list;
                      console.log("noticeBoard List Infinite Scroll if1==", _this12.postData);
                    } else {
                      _this12.postData = _this12.postData.concat(result.data.list);
                      console.log("noticeBoard List Infinite Scroll else1==", _this12.postData);
                    }

                    if (_this12.myinfiniteScrollCall == true) {
                      console.log("noticeBoard List Infinite Scroll if2==", _this12.postData);

                      _this12.myInfiniteScroll.target.complete();

                      _this12.errorMessage = "";
                      _this12.myinfiniteScrollCall = false;
                    }

                    console.log("thoughtOftheDayApi List data1==", _this12.postData);
                    console.log("thoughtOftheDayApi List data2==", _this12.errorMessage);
                  } else {
                    _this12.errorMessage = result.message;
                    console.log("noticeBoard List Infinite Scroll12==", _this12.postData);

                    if (_this12.myinfiniteScrollCall == true) {
                      console.log("noticeBoard List Infinite Scroll123==", _this12.postData);

                      _this12.myInfiniteScroll.target.complete();

                      _this12.myinfiniteScrollCall = false;
                    }
                  }
                }, function (err) {
                  _this12.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
              });
            });
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(infiniteScroll) {
            var _this13 = this;

            this.myinfiniteScrollCall = true;
            console.log("Begin async operation 1==");
            setTimeout(function () {
              _this13.value = _this13.postData.length;
              console.log("Begin async operation 2==", _this13.value);
              _this13.myInfiniteScroll = infiniteScroll;

              _this13.communityList();
            }, 500);
          }
        }, {
          key: "sidemenu",
          value: function sidemenu() {
            var _this14 = this;

            this.zone.run(function () {
              console.log("side menu api call function==");
              var apikey = {};

              _this14.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].sideMenu, apikey).subscribe(function (result) {
                console.log("side menu api result==", result);

                if (result.status == 1 || result.status == '1') {
                  _this14.apiservices.innerHeaderImage = result.data.settings;
                  _this14.apiservices.sideMenuList = result.data.menuData;
                  _this14.headerImage = result.data.settings;
                } else {
                  _this14.apiservices.showToastMessage(result.message, 'top', 3000, 'redBg');
                }
              }, function (err) {
                _this14.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
              });
            });
          }
        }, {
          key: "forceUpdateFunction",
          value: function forceUpdateFunction() {
            var _this15 = this;

            this.zone.run(function () {
              console.log("forceUpdate function call==");

              _this15.storage.get('fcmToken').then(function (fcmToken) {
                console.log("call fcm new storage==", fcmToken);
                var apiKey = {
                  "fcm_token": fcmToken
                };
                console.log("api keys of forceupdate function on home page==", apiKey);

                _this15.apiservices.apiCallWithLoginToken(_src_assets_constant__WEBPACK_IMPORTED_MODULE_4__["URLS"].forceUpdate, apiKey).subscribe(function (result) {
                  console.log("lifeCycle123=forceUpdate Api response123==", result);

                  if (result.status == "1" || result.status == 1) {
                    _this15.themeColor = result.data.theme;

                    if (_this15.platform.is("cordova")) {
                      // this.statusBar.backgroundColorByHexString(this.themeColor.topStatusBarColor);
                      _this15.statusBar.backgroundColorByHexString('var(--topStatusBarColor');
                    }

                    document.querySelector('body').style.setProperty('--headerColor', _this15.themeColor.headerColor);
                    document.querySelector('body').style.setProperty('--headerTitleOrMenu', _this15.themeColor.headerTitleOrMenu);
                    document.querySelector('body').style.setProperty('--headerLightColor', _this15.themeColor.headerLightColor);
                    document.querySelector('body').style.setProperty('--whiteHeader', _this15.themeColor.whiteHeader);
                    document.querySelector('body').style.setProperty('--blackHeaderText', _this15.themeColor.blackHeaderText);
                    document.querySelector('body').style.setProperty('--outlineBorderButton', _this15.themeColor.outlineBorderButton);
                    document.querySelector('body').style.setProperty('--transparentColor', _this15.themeColor.transparentColor);
                    document.querySelector('body').style.setProperty('--redTextColor', _this15.themeColor.redTextColor);
                    document.querySelector('body').style.setProperty('--blackTextColor', _this15.themeColor.blackTextColor);
                    document.querySelector('body').style.setProperty('--yellowTextColor', _this15.themeColor.yellowTextColor);
                    document.querySelector('body').style.setProperty('--toastSuccessColorApp', _this15.themeColor.toastSuccessColorApp);
                    document.querySelector('body').style.setProperty('--toastFailColorRed', _this15.themeColor.toastFailColorRed);
                    document.querySelector('body').style.setProperty('--nonSelectedTabs', _this15.themeColor.nonSelectedTabs);
                    document.querySelector('body').style.setProperty('--nonSelectedTabsBorder', _this15.themeColor.nonSelectedTabsBorder);
                    document.querySelector('body').style.setProperty('--nonSelectedTabsBg', _this15.themeColor.nonSelectedTabsBg);
                    document.querySelector('body').style.setProperty('--selectedTabBg', _this15.themeColor.selectedTabBg);
                    document.querySelector('body').style.setProperty('--topStatusBarColor', _this15.themeColor.topStatusBarColor);
                    _this15.apiservices.userImage = result.data.empData.profile_image;
                    _this15.apiservices.show_alert_dot = result.data.show_view;
                    _this15.apiservices.show_alert_count = result.data.view_count;
                    _this15.apiservices.blurCheck = result.blur;
                    _this15.apiservices.privacyPolicyData = result.data.privacypolicy;
                    _this15.apiservices.termsAndConditionData = result.data.termsofuse;
                    _this15.apiservices.contactHelpDesk = result.data.contacthelpdesk;
                    _this15.apiservices.sideMenuHeaderLogo = result.data.settings.logo;

                    if (result.data.isUpdate == 2) {
                      // forceUpdate  isUpdate==2
                      _this15.sendData.alldata = result.data.isUpdate;
                      _this15.sendData.myParam = result.data.forceUpdate;

                      _this15.router.navigate(["/force-optional-update"]);
                    }

                    if (result.data.isUpdate == 1) {
                      // optionalUpdate  isUpdate==1
                      if (_this15.apiservices.forceUpdateCount == 1) {
                        _this15.apiservices.forceUpdateCount = _this15.apiservices.forceUpdateCount + 1;
                        _this15.sendData.alldata = result.data.isUpdate;
                        _this15.sendData.myParam = result.data.forceUpdate;

                        _this15.router.navigate(["/force-optional-update"]);
                      } else {}
                    }

                    if (result.data.maintainence.app_down == "1" || result.data.clientStatus == "1" || result.data.empStatus == "1") {
                      _this15.sendData.myParam = {
                        "allData": result.data.maintainence
                      };

                      _this15.router.navigate(["/maintenance"]);
                    }

                    if (result.data.empStatus == '0' && result.data.empData.login_process == '0') {
                      _this15.apiservices.logOut();
                    }
                  }
                }, function (err) {
                  _this15.apiservices.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
                });
              });
            });
          }
        }, {
          key: "goToSayCheers",
          value: function goToSayCheers(value, index) {
            var _this16 = this;

            this.zone.run(function () {
              if (value == "cheerList") {
                _this16.router.navigate(["/say-cheers-list"]);
              } else if (value == "cheerDetail") {
                var obj = {
                  allData: _this16.sayCheersData.list,
                  index: index,
                  pageHeader: _this16.sayCheersData.settings
                };
                _this16.sendData.sayCheers = obj; // this.sendData.myParam="cheerboard";
                // this.sendData.myParam=this.sayCheersData.settings.requestTab;

                _this16.router.navigate(["/say-cheers-slide-detail"]);
              } else {
                _this16.router.navigate(["/say-cheers-board"]);
              }
            });
          }
        }, {
          key: "goToProfile",
          value: function goToProfile() {
            var _this17 = this;

            this.zone.run(function () {
              _this17.router.navigate(["/profile"]);
            });
          }
        }, {
          key: "gotoWelcomeAboardList",
          value: function gotoWelcomeAboardList() {
            this.router.navigate(["/welcome-aboard-list"]);
          }
        }, {
          key: "gotoBirthdayList",
          value: function gotoBirthdayList(item) {
            this.sendData.alldata = item;
            this.router.navigateByUrl(item.link);
          }
        }]);

        return Tab1Page;
      }();

      Tab1Page.ctorParameters = function () {
        return [{
          type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_2__["ApiservicesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
        }, {
          type: _services_data_transfer_service__WEBPACK_IMPORTED_MODULE_6__["DataTransferService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"]
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_9__["EventsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_10__["StatusBar"]
        }];
      };

      Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab1.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab1.page.scss */
        "./src/app/tab1/tab1.page.scss"))["default"]]
      })], Tab1Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab1-tab1-module-es5.js.map