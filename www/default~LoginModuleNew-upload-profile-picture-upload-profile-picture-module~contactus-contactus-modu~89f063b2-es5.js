(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~LoginModuleNew-upload-profile-picture-upload-profile-picture-module~contactus-contactus-modu~89f063b2"], {
    /***/
    "./src/app/imageCapture/uploading.service.ts":
    /*!***************************************************!*\
      !*** ./src/app/imageCapture/uploading.service.ts ***!
      \***************************************************/

    /*! exports provided: UploadingService */

    /***/
    function srcAppImageCaptureUploadingServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UploadingService", function () {
        return UploadingService;
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


      var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/image-picker/ngx */
      "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/file-transfer/ngx */
      "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _assets_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../assets/constant */
      "./src/assets/constant.ts");
      /* harmony import */


      var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../provider/apiservices.service */
      "./src/app/provider/apiservices.service.ts");
      /* harmony import */


      var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/local-storage.service */
      "./src/app/services/local-storage.service.ts");
      /* harmony import */


      var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/media-capture/ngx */
      "./node_modules/@ionic-native/media-capture/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_video_editor_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/video-editor/ngx */
      "./node_modules/@ionic-native/video-editor/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/crop/ngx */
      "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");

      var UploadingService = /*#__PURE__*/function () {
        function UploadingService(zone, platform, sanitizer, toastController, camera, imagePicker, transfer, file, actionSheetController, apiService, storageService, mediaCapture, videoEditor, storage, crop) {
          _classCallCheck(this, UploadingService);

          this.zone = zone;
          this.platform = platform;
          this.sanitizer = sanitizer;
          this.toastController = toastController;
          this.camera = camera;
          this.imagePicker = imagePicker;
          this.transfer = transfer;
          this.file = file;
          this.actionSheetController = actionSheetController;
          this.apiService = apiService;
          this.storageService = storageService;
          this.mediaCapture = mediaCapture;
          this.videoEditor = videoEditor;
          this.storage = storage;
          this.crop = crop;
          this.videoProgressPercentage = 0;
          this.tempArraay = [];
          console.log("upload image service=="); // this.storageService.getStorage().then(res=>{
          //   this.allStorageData=res;
          //   console.log('all Storage Data===',res);
          // });

          this.fileTransfer = this.transfer.create();
        }

        _createClass(UploadingService, [{
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this = this;

            console.log("all Storage Data0==");
            this.storageService.getStorage().then(function (res) {
              console.log("all Storage Data1 upload image on server0==", res);
              _this.allStorageData = res;
              console.log("all Storage Data2 upload image on server0==", _this.allStorageData);
            });
          }
        }, {
          key: "captureImage",
          value: function captureImage(sourceType, getData) {
            // getData is used for get flag_type
            console.log("previous Page Data==", getData);
            this.previousData = getData;
            var imageTakeFrom;

            if (sourceType == "camera") {
              imageTakeFrom = this.camera.PictureSourceType.CAMERA;
            } else {
              imageTakeFrom = this.camera.PictureSourceType.PHOTOLIBRARY;
            }

            var options = {
              quality: 40,
              allowEdit: false,
              // saveToPhotoAlbum: false,
              cameraDirection: 1,
              correctOrientation: true,
              destinationType: this.camera.DestinationType.FILE_URI,
              sourceType: imageTakeFrom,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            console.log("inside captureImage function==>options==", options);
            console.log("inside captureImage function==>options==", JSON.stringify(options));
            return this.camera.getPicture(options).then(function (imagePath) {
              console.log("imagePath==", imagePath); // let fileName = imagePath.split("jpg").pop();
              // console.log("imagePath fileName123==> ", fileName);

              var path = imagePath.substring(0, imagePath.lastIndexOf("g") + 1);
              console.log("imagePath path123==", path);
              return path; // return imagePath;
            });
          }
        }, {
          key: "cropImage",
          value: function cropImage(pickedImage) {
            console.log("get pickedImage form cam/gal==", pickedImage);
            var option = {
              quality: 75,
              targetHeight: 1000,
              targetWidth: 1000
            };
            return this.crop.crop(pickedImage[0], option).then(function (newImage) {
              console.log("get new image path cropped==", newImage);
              return newImage;
            }, function (error) {
              console.error("get Cropping Image Error==", error);
            });
          }
        }, {
          key: "base64Function",
          value: function base64Function(sourceType, getData) {
            // getData is used for get flag_type
            console.log("previous Page Data==", getData);
            this.previousData = getData;
            var imageTakeFrom;

            if (sourceType == "camera") {
              imageTakeFrom = this.camera.PictureSourceType.CAMERA;
            } else {
              imageTakeFrom = this.camera.PictureSourceType.PHOTOLIBRARY;
            }

            var options = {
              quality: 40,
              allowEdit: false,
              // saveToPhotoAlbum: false,
              cameraDirection: 1,
              correctOrientation: true,
              destinationType: this.camera.DestinationType.DATA_URL,
              sourceType: imageTakeFrom,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE
            };
            console.log("inside captureImage function==>options==", options);
            console.log("inside captureImage function==>options==", JSON.stringify(options));
            return this.camera.getPicture(options).then(function (imagePath) {
              console.log("imagePath*** ==> ", imagePath);
              var path = imagePath.substring(0, imagePath.lastIndexOf("g") + 1);
              console.log("imagePath path123==", path);
              var base64Image = "data:image/jpeg;base64," + imagePath;
              return base64Image;
            });
          }
        }, {
          key: "selectMultiImage",
          value: function selectMultiImage(imageCount, getData) {
            console.log("previous Page Data==", getData);
            this.previousData = getData;
            var options = {
              maximumImagesCount: imageCount,
              quality: 40,
              outputType: 0
            };
            return this.imagePicker.getPictures(options).then(function (results) {
              console.log("imagePath multiple image==", results);

              if (results != "OK") {
                return results;
              }
            }, function (err) {
              console.log("image picker multiple image==", err);
            });
          }
        }, {
          key: "pickVideoFromGallery",
          value: function pickVideoFromGallery(mediaValue, getData) {
            var _this2 = this;

            console.log("pick video Page Data==", getData);
            this.previousData = getData;
            var mediaType;

            if (mediaValue == "video") {
              mediaType = "2";
            }

            console.log("this. is gallery video function==");
            var options = {
              quality: 20,
              destinationType: this.camera.DestinationType.FILE_URI,
              sourceType: mediaType,
              mediaType: this.camera.MediaType.VIDEO
            };
            console.log("this is gallery video options==", options);
            return this.camera.getPicture(options).then(function (imageData) {
              console.log("pick video from gallery result==", imageData);

              if (imageData != "OK") {
                return imageData;
              }
            }, function (err) {
              _this2.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');

              console.log("pick video error==", err);
            });
          }
        }, {
          key: "captureVideo",
          value: function captureVideo(mediaValue, getData) {
            var _this3 = this;

            console.log("capture video Page Data==", getData);
            this.previousData = getData;
            var mediaType;

            if (mediaValue == "video") {
              mediaType = '2';
            }

            var imageTakeFrom;
            imageTakeFrom = this.camera.PictureSourceType.CAMERA;
            console.log("this is camera vedio function==");
            var options = {
              limit: 1,
              duration: 60
            };
            console.log("this is camera vedio options==", options);
            return this.mediaCapture.captureVideo(options).then(function (videodata) {
              _this3.currentName = videodata[0].fullPath;
              console.log("current name of video captured by camera==", _this3.currentName);
              return videodata[0].fullPath; // if(this.currentName!=''){
              //   return videodata[0].fullPath;
              // }
            }, function (err) {
              _this3.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');

              console.log("capture video error==", err);
            });
          }
        }, {
          key: "createThumbnail",
          value: function createThumbnail(imagepass) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var d, captureInfo, options, tempCreatethumbnail, filePath, fileName, path, b64Str;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log("video path==", imagepass);
                      d = new Date();
                      captureInfo = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear() + "-" + d.getHours() + "-" + d.getMinutes() + "-" + d.getSeconds();
                      options = {
                        fileUri: imagepass,
                        quality: 50,
                        atTime: 0.5,
                        outputFileName: "Yorker" + captureInfo
                      };
                      _context.next = 6;
                      return this.videoEditor.createThumbnail(options);

                    case 6:
                      tempCreatethumbnail = _context.sent;
                      console.log("tempCreatethumbnail==", tempCreatethumbnail);

                      if (!(tempCreatethumbnail != '')) {
                        _context.next = 19;
                        break;
                      }

                      // file uri to base 64 convert
                      filePath = "file://" + tempCreatethumbnail; // split file path to directory and file name

                      fileName = filePath.split("/").pop();
                      path = filePath.substring(0, filePath.lastIndexOf("/") + 1);
                      console.log("here is encoded fileName==", fileName);
                      console.log("here is encoded path==", path);
                      _context.next = 16;
                      return this.file.readAsDataURL(path, fileName);

                    case 16:
                      b64Str = _context.sent;
                      console.log("b64Str==", b64Str);
                      return _context.abrupt("return", b64Str);

                    case 19:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "videoImageUpload",
          value: function videoImageUpload(dataArray) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var options, sendingImgRes, url, myheaders, _loop, i, _ret;

              return regeneratorRuntime.wrap(function _callee2$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.storageService.getStorage();

                    case 2:
                      this.allStorageData = _context3.sent;
                      console.log("stored data==", this.allStorageData);
                      console.log("dataArray==", dataArray);
                      sendingImgRes = [];
                      console.log("data for upload==", dataArray);
                      url = _assets_constant__WEBPACK_IMPORTED_MODULE_8__["URLS"].baseUrl + 'uploadImage';
                      myheaders = new Headers();
                      myheaders.append('Content-Type', 'application/json');
                      myheaders.append('Authorization', this.allStorageData.loginApiRes.login_token);
                      _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop(i) {
                        var targetPath, currentName, name, fileName, serverImgProcess, data;
                        return regeneratorRuntime.wrap(function _loop$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                console.log("path==", dataArray[i]);
                                targetPath = dataArray[i].media;
                                currentName = dataArray[i].media;
                                name = dataArray[i].media.split("/");
                                fileName = name[name.length - 1];

                                if (!(dataArray[i].media_type == 2)) {
                                  _context2.next = 13;
                                  break;
                                }

                                _context2.next = 8;
                                return _this4.createThumbnail(dataArray[i].media);

                              case 8:
                                dataArray[i].thumbnail = _context2.sent;
                                options = {
                                  filekey: "image",
                                  fileName: fileName,
                                  chunkdMode: false,
                                  mimeType: "multipart/form-data",
                                  headers: {
                                    "Authorization": _this4.allStorageData.loginApiRes.login_token
                                  },
                                  params: {
                                    "image": targetPath,
                                    "flag": _this4.previousData.flag_type,
                                    "client_id": _assets_constant__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG"].clientId,
                                    "app_version": _assets_constant__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG"].appVersion,
                                    "device": _this4.apiService.device,
                                    "device_id": _this4.allStorageData.deviceId,
                                    "user_id": _this4.allStorageData.loginApiRes.user_id,
                                    "media_type": dataArray[i].media_type,
                                    "thumb_image": dataArray[i].thumbnail
                                  }
                                };
                                console.log("passing key video==", JSON.stringify(options));
                                _context2.next = 15;
                                break;

                              case 13:
                                //for image 
                                options = {
                                  filekey: "image",
                                  fileName: fileName,
                                  chunkdMode: false,
                                  mimeType: "multipart/form-data",
                                  headers: {
                                    "Authorization": _this4.allStorageData.loginApiRes.login_token
                                  },
                                  params: {
                                    "image": targetPath,
                                    "flag": _this4.previousData.flag_type,
                                    "client_id": _assets_constant__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG"].clientId,
                                    "app_version": _assets_constant__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG"].appVersion,
                                    "device": _this4.apiService.device,
                                    "device_id": _this4.allStorageData.deviceId,
                                    "user_id": _this4.allStorageData.loginApiRes.user_id,
                                    "media_type": dataArray[i].media_type,
                                    "thumb_image": ""
                                  }
                                };
                                console.log("passing key video==", JSON.stringify(options));

                              case 15:
                                _this4.fileTransfer.onProgress(function (progressEvent) {
                                  _this4.zone.run(function () {
                                    console.log("progress==", progressEvent.loaded);
                                    dataArray[i].progressPercentage = progressEvent.loaded * 100 / progressEvent.total;
                                    _this4.videoProgressPercentage = dataArray[i].progressPercentage.toFixed(0);
                                    console.log("progress percentage==", dataArray[i].progressPercentage);
                                    console.log("videoProgressPercentage==", _this4.videoProgressPercentage); // data.progressPercentage=(progressEvent.loaded*100)/progressEvent.total;
                                    // console.log('progress percentage==>', data.progressPercentage);
                                  });
                                });

                                _context2.next = 18;
                                return _this4.fileTransfer.upload(targetPath, url, options);

                              case 18:
                                serverImgProcess = _context2.sent;
                                console.log("serverImgProcess==", serverImgProcess);
                                data = JSON.parse(serverImgProcess.response);

                                if (!(data.success == 1)) {
                                  _context2.next = 31;
                                  break;
                                }

                                if (dataArray[i].media_type == 2) {
                                  data.previewImage = dataArray[i].thumbnail;
                                  data.data.progressPercentage = dataArray[i].progressPercentage;
                                }

                                console.log("data video==", data);
                                data.positionInd = dataArray[i].positionInd;
                                sendingImgRes.push(data);
                                console.log("sendingImgRes video/image==", sendingImgRes);

                                if (!(i == dataArray.length - 1)) {
                                  _context2.next = 29;
                                  break;
                                }

                                return _context2.abrupt("return", {
                                  v: sendingImgRes
                                });

                              case 29:
                                _context2.next = 32;
                                break;

                              case 31:
                                _this4.apiService.showToastMessage(JSON.stringify(data.message), 'top', 3000, 'redBg');

                              case 32:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _loop);
                      });
                      i = 0;

                    case 13:
                      if (!(i <= dataArray.length)) {
                        _context3.next = 21;
                        break;
                      }

                      return _context3.delegateYield(_loop(i), "t0", 15);

                    case 15:
                      _ret = _context3.t0;

                      if (!(typeof _ret === "object")) {
                        _context3.next = 18;
                        break;
                      }

                      return _context3.abrupt("return", _ret.v);

                    case 18:
                      i++;
                      _context3.next = 13;
                      break;

                    case 21:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "uploadImageOnServer",
          value: function uploadImageOnServer(dataArray, mediaType) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var storegeVal, sendingImgRes, tempURL, url, myheaders, i, targetPath, name, fileName, removeExtraDataFromFileName, mediaPath, options, serverImgProcess, data;
              return regeneratorRuntime.wrap(function _callee3$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.storageService.getStorage();

                    case 2:
                      storegeVal = _context4.sent;
                      console.log("storegeVal==", storegeVal);

                      if (mediaType == "img") {
                        this.mediaTypeValue = "1";
                      } else if (mediaType == "video") {
                        this.mediaTypeValue = "2";
                      } else {
                        this.mediaTypeValue = "3";
                      }

                      sendingImgRes = [];
                      console.log("data for upload==", dataArray);
                      tempURL = _assets_constant__WEBPACK_IMPORTED_MODULE_8__["URLS"].baseUrl + "v1/uploadmedia";
                      console.log("passing tempURL==", tempURL);
                      url = _assets_constant__WEBPACK_IMPORTED_MODULE_8__["URLS"].baseUrl + "" + _assets_constant__WEBPACK_IMPORTED_MODULE_8__["URLS"].uploadImage;
                      myheaders = new Headers();
                      myheaders.append('Content-Type', 'application/json');
                      myheaders.append('Authorization', storegeVal.login_token);
                      i = 0;

                    case 14:
                      if (!(i <= dataArray.length)) {
                        _context4.next = 42;
                        break;
                      }

                      console.log("path==", dataArray[i]);
                      targetPath = dataArray[i].media; // let currentName = dataArray[i];

                      name = dataArray[i].media.split("/");
                      fileName = name[name.length - 1];

                      if (fileName.indexOf("?") >= 0 && targetPath.indexOf("?") >= 0) {
                        console.log('file path is contain ? fileName==>', fileName);
                        console.log('file path is contain ? targetPath==>', targetPath);
                        removeExtraDataFromFileName = fileName.substring(0, fileName.indexOf("?"));
                        mediaPath = targetPath.substring(0, targetPath.indexOf("?"));
                      } else {
                        console.log('file path does not contain ? fileName==>', fileName);
                        console.log('file path does not contain ? targetPath==>', targetPath);
                        removeExtraDataFromFileName = fileName;
                        mediaPath = targetPath;
                      }

                      options = {
                        filekey: "media",
                        fileName: removeExtraDataFromFileName,
                        chunkdMode: false,
                        mimeType: "multipart/form-data",
                        headers: {
                          "Authorization": storegeVal.login_token,
                          "App-Version": _assets_constant__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG"].appVersion,
                          "Device": this.apiService.device,
                          "Device-Id": storegeVal.deviceId,
                          "Client-Id": storegeVal.client_Id,
                          "Package-Name": _assets_constant__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG"].packageName
                        },
                        params: {
                          "media": mediaPath,
                          // "flag":this.previousData.flag_type,
                          // "client_id":APP_CONFIG.clientId,
                          // "app_version":APP_CONFIG.appVersion,
                          // "device":this.apiService.device,
                          // "device_id":storegeVal.deviceId,
                          // "user_id":storegeVal.loginApiRes.user_id,
                          // "media_type":this.mediaTypeValue
                          "flag": this.mediaTypeValue,
                          "module": dataArray[i].module
                        }
                      };
                      console.log("passing key==", JSON.stringify(options));
                      console.log("passing url==", url);
                      console.log("passing mediaPath==", mediaPath);
                      _context4.next = 26;
                      return this.fileTransfer.upload(mediaPath, url, options);

                    case 26:
                      serverImgProcess = _context4.sent;
                      console.log("serverImgProcess temp==", serverImgProcess);
                      data = JSON.parse(serverImgProcess.response);
                      console.log("serverImgProcess data==", data);

                      if (!(data.status == 1)) {
                        _context4.next = 38;
                        break;
                      }

                      console.log("serverImgProcess final==", data);
                      sendingImgRes.push(data);
                      console.log("serverImgProcess push==", sendingImgRes);

                      if (!(i == dataArray.length - 1)) {
                        _context4.next = 36;
                        break;
                      }

                      return _context4.abrupt("return", sendingImgRes);

                    case 36:
                      _context4.next = 39;
                      break;

                    case 38:
                      this.apiService.showToastMessage(JSON.stringify(data.message), 'top', 3000, 'greenBg');

                    case 39:
                      i++;
                      _context4.next = 14;
                      break;

                    case 42:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 2000
                      });

                    case 2:
                      toast = _context5.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return UploadingService;
      }();

      UploadingService.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]
        }, {
          type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["ImagePicker"]
        }, {
          type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
        }, {
          type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_9__["ApiservicesService"]
        }, {
          type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_10__["LocalStorageService"]
        }, {
          type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__["MediaCapture"]
        }, {
          type: _ionic_native_video_editor_ngx__WEBPACK_IMPORTED_MODULE_12__["VideoEditor"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"]
        }, {
          type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_14__["Crop"]
        }];
      };

      UploadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      })], UploadingService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~LoginModuleNew-upload-profile-picture-upload-profile-picture-module~contactus-contactus-modu~89f063b2-es5.js.map