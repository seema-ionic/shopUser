import { Key } from "protractor"

export const URLS = {
  //***************** Development URL*****************
  baseUrl:"https://benepik.in/bone/",
  discountingUrl:"https://benepik.in/yorker/privilege/api/",

  //***************** UAT URL*****************
  // baseUrl:"https://benepik.org/bone/",
  // discountingUrl:"https://benepik.org/yorker/privilege/api/",

  //***************** Production URL*****************
  // baseUrl:"https://benepik.co.in/bone/",
  // discountingUrl:"https://benepik.co.in/yorker/privilege/api/",

  
  maintainanceApiUrl:"v1/maintenance",
  organisationName:"v1/verifyclient",
  loginOtpSend:"v1/verifyphone",
  submitOtp:"v1/submitotp",
  resendOtp:"v1/resendotp",
  loginInformation:"v1/verifyemployee",
  connectToHr:"v1/contactsetting",
  connectToHrSubmit:"v1/contactus",
  profileImageSubmit:"v1/updatedp",
  sideMenu:"v1/sidemenu",
  userProfile:"v1/myprofile",
  sendOtp:"v1/sendotp",
  uploadImage:"v1/uploadmedia",
  noticeList:"v1/noticelist",
  noticeDetail:"v1/noticedetails",
  analyticsApi:"v1/noticesubmit",
  hrPolicyList:"v1/hrpolicylist",
  hrPolicyDetail:"v1/hrpolicydetail",
  hrPolicySubmitSignature:"v1/hrpolicysign",
  hrPolicySubmit:"v1/hrpolicysubmit",
  hrPolicyQuizQuestion:"v1/quizdetail",
  hrPolicyQuizSubmit:"v1/quizsubmit",
  hrPolicyRetakeQuiz:"v1/hrpolicyretake",
  homeAllData:"v1/homepage",
  tabMenuData:"v1/menulist",
  communityListApiUrl:"v1/postlist",
  leaderCheerApiUrl:"v1/badgeboards",
  submitCommentApi:"v1/docomment",
  likePostApi:"v1/dolike",
  likeListApi:"v1/likelist",
  communicationDetail:"v1/postdetail",
  sayCheersListApiUrl:"v1/getbadgecategory",
  searchCheersUserListApi:"v1/searchuser",
  sayCheersHomeApi:"v1/badgehomepage",
  sayCheersDetailApi:"v1/carddetails",
  sayCheerSentReceivedListApi:"v1/badgesentreceive",
  submitSayCheers:"v1/sendbadge",
  logoutApiUrl:"v1/logout",
  submitContactFeed:"v1/contactsubmit",
  forceUpdate:"v1/forceupdate",
  alertList:"v1/alertlist",
  alertRead:"v1/alertread",

  redeemFirstPage:"v1/accountpoints",  // Redeem Home
  accountStatementListApi:"v1/pointhistory",  // Redeem Account Statement
  redeemCategoryList:"v1/categoryredeem",  // Redeem Category List
  redeemVoucherList:"v1/dealall",  // Redeem Voucher List, after category list page
  redeemVoucherDetail:"v1/dealdetail",  // Redeem Voucher Detail
  redeemVoucherSendOtp:"v1/createorder", // Redeem Voucher Detail OTP Send
  redeemMyOrderList:"v1/orderhistory",  // Redeem My Order List API
  redeemMyOrderListDetail:"v1/orderdetail",  // Redeem My Order List Detail API
  redeemMyOrderDetailEmail:"v1/emailvoucher",  // Redeem My Order List Detail Send On Email API

  listDataOfIosRegistration:"v1/registration",  // this api is only use for ios AppStore
  IosRegistrationSubmition:"v1/submitregistration", // this api is only use for ios AppStore Testing submition
  


  //new development by shivanshi
  loginDataApi:"v1/login_page",
  get_country_code:"v1/country_list",
  verifyEmployeeApi:"v1/verifyemployee_v2",
  resendOtpApi:"v1/resendotp_v2",
  submitOtpApi:"v1/submitotp",
  initialApi:"v1/initial_check",
  previewAboardApi:"v1/previewAboard",
  previewAboardSubmitApi:"v1/submitAboard",
  ideaBoxListApi:"v1/createIdea",
  ideaCategoryListApi:"v1/all_idea_category",
  ideaHistoryApi:"v1/all_ideas",
  aboardListApi:"v1/aboardList",
  aboardDetailApi:"v1/aboardDetail",
  birthdayAnniversaryApi:"v1/birthdayAnniversarylist",
  birthdayAnniversaryDetailApi:"v1/birthdayAnniversarydetail",
  nominationListApi:"v1/nominationListFeeds",
  likeOnCommentApi:"v1/likeOnComment",
  deleteCommentApi:"v1/deleteComment",
  homePostApi:"v1/homepost",
  filterApi:"v1/rnr_app_filter",
  awardDashboardApi:"v1/rnrDashboard",
  awardDashboardDetailApi:"v1/getAwardData",
  awardEmployeeSearchApi:"v1/get_search_users_data",
  awardTemplateApi:"v1/rnr_nomination_template",
  awardSubmitApi:"v1/createNomination",
  myactvityApi:"v1/award_detail",
  hrPolicyCategoryApi:"v1/hrpolicycategory",
  nominationActionApi:"v1/nominationAction",
  updateNominationApi:"v1/update_awardee_list",
  myawardListApi:"v1/my_award_list",
  editCommentApi:"v1/editComment"


}

export const APP_CONFIG = {
  // clientId : 'CO-40',
  clientId : '',
  appVersion : "2",
  packageName : 'connect.benepikone',
}