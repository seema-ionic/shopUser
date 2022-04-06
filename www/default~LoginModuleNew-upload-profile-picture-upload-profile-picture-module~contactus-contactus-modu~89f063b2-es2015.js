(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~LoginModuleNew-upload-profile-picture-upload-profile-picture-module~contactus-contactus-modu~89f063b2"],{

/***/ "./src/app/imageCapture/uploading.service.ts":
/*!***************************************************!*\
  !*** ./src/app/imageCapture/uploading.service.ts ***!
  \***************************************************/
/*! exports provided: UploadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadingService", function() { return UploadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _assets_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/constant */ "./src/assets/constant.ts");
/* harmony import */ var _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../provider/apiservices.service */ "./src/app/provider/apiservices.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/media-capture/ngx */ "./node_modules/@ionic-native/media-capture/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_video_editor_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/video-editor/ngx */ "./node_modules/@ionic-native/video-editor/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/__ivy_ngcc__/ngx/index.js");















let UploadingService = class UploadingService {
    constructor(zone, platform, sanitizer, toastController, camera, imagePicker, transfer, file, actionSheetController, apiService, storageService, mediaCapture, videoEditor, storage, crop) {
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
        console.log("upload image service==");
        // this.storageService.getStorage().then(res=>{
        //   this.allStorageData=res;
        //   console.log('all Storage Data===',res);
        // });
        this.fileTransfer = this.transfer.create();
    }
    ionViewDidEnter() {
        console.log("all Storage Data0==");
        this.storageService.getStorage().then(res => {
            console.log("all Storage Data1 upload image on server0==", res);
            this.allStorageData = res;
            console.log("all Storage Data2 upload image on server0==", this.allStorageData);
        });
    }
    captureImage(sourceType, getData) {
        // getData is used for get flag_type
        console.log("previous Page Data==", getData);
        this.previousData = getData;
        var imageTakeFrom;
        if (sourceType == "camera") {
            imageTakeFrom = this.camera.PictureSourceType.CAMERA;
        }
        else {
            imageTakeFrom = this.camera.PictureSourceType.PHOTOLIBRARY;
        }
        const options = {
            quality: 40,
            allowEdit: false,
            // saveToPhotoAlbum: false,
            cameraDirection: 1,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: imageTakeFrom,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        console.log("inside captureImage function==>options==", options);
        console.log("inside captureImage function==>options==", JSON.stringify(options));
        return this.camera.getPicture(options).then((imagePath) => {
            console.log("imagePath==", imagePath);
            // let fileName = imagePath.split("jpg").pop();
            // console.log("imagePath fileName123==> ", fileName);
            let path = imagePath.substring(0, imagePath.lastIndexOf("g") + 1);
            console.log("imagePath path123==", path);
            return path;
            // return imagePath;
        });
    }
    cropImage(pickedImage) {
        console.log("get pickedImage form cam/gal==", pickedImage);
        let option = { quality: 75, targetHeight: 1000, targetWidth: 1000 };
        return this.crop.crop(pickedImage[0], option).then(newImage => {
            console.log("get new image path cropped==", newImage);
            return newImage;
        }, error => {
            console.error("get Cropping Image Error==", error);
        });
    }
    base64Function(sourceType, getData) {
        // getData is used for get flag_type
        console.log("previous Page Data==", getData);
        this.previousData = getData;
        var imageTakeFrom;
        if (sourceType == "camera") {
            imageTakeFrom = this.camera.PictureSourceType.CAMERA;
        }
        else {
            imageTakeFrom = this.camera.PictureSourceType.PHOTOLIBRARY;
        }
        const options = {
            quality: 40,
            allowEdit: false,
            // saveToPhotoAlbum: false,
            cameraDirection: 1,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: imageTakeFrom,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        console.log("inside captureImage function==>options==", options);
        console.log("inside captureImage function==>options==", JSON.stringify(options));
        return this.camera.getPicture(options).then((imagePath) => {
            console.log("imagePath*** ==> ", imagePath);
            let path = imagePath.substring(0, imagePath.lastIndexOf("g") + 1);
            console.log("imagePath path123==", path);
            let base64Image = "data:image/jpeg;base64," + imagePath;
            return base64Image;
        });
    }
    selectMultiImage(imageCount, getData) {
        console.log("previous Page Data==", getData);
        this.previousData = getData;
        const options = {
            maximumImagesCount: imageCount,
            quality: 40,
            outputType: 0,
        };
        return this.imagePicker.getPictures(options).then((results) => {
            console.log("imagePath multiple image==", results);
            if (results != "OK") {
                return results;
            }
        }, (err) => {
            console.log("image picker multiple image==", err);
        });
    }
    pickVideoFromGallery(mediaValue, getData) {
        console.log("pick video Page Data==", getData);
        this.previousData = getData;
        var mediaType;
        if (mediaValue == "video") {
            mediaType = "2";
        }
        console.log("this. is gallery video function==");
        const options = {
            quality: 20,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: mediaType,
            mediaType: this.camera.MediaType.VIDEO,
        };
        console.log("this is gallery video options==", options);
        return this.camera.getPicture(options).then((imageData) => {
            console.log("pick video from gallery result==", imageData);
            if (imageData != "OK") {
                return imageData;
            }
        }, (err) => {
            this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            console.log("pick video error==", err);
        });
    }
    captureVideo(mediaValue, getData) {
        console.log("capture video Page Data==", getData);
        this.previousData = getData;
        var mediaType;
        if (mediaValue == "video") {
            mediaType = '2';
        }
        var imageTakeFrom;
        imageTakeFrom = this.camera.PictureSourceType.CAMERA;
        console.log("this is camera vedio function==");
        let options = { limit: 1, duration: 60 };
        console.log("this is camera vedio options==", options);
        return this.mediaCapture.captureVideo(options).then((videodata) => {
            this.currentName = videodata[0].fullPath;
            console.log("current name of video captured by camera==", this.currentName);
            return videodata[0].fullPath;
            // if(this.currentName!=''){
            //   return videodata[0].fullPath;
            // }
        }, (err) => {
            this.apiService.showToastMessage(JSON.stringify(err), 'top', 3000, 'redBg');
            console.log("capture video error==", err);
        });
    }
    createThumbnail(imagepass) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("video path==", imagepass);
            var d = new Date();
            var captureInfo = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear() + "-" + d.getHours() + "-" + d.getMinutes() + "-" + d.getSeconds();
            const options = {
                fileUri: imagepass,
                quality: 50,
                atTime: 0.5,
                outputFileName: "Yorker" + captureInfo,
            };
            const tempCreatethumbnail = yield this.videoEditor.createThumbnail(options);
            console.log("tempCreatethumbnail==", tempCreatethumbnail);
            if (tempCreatethumbnail != '') {
                // file uri to base 64 convert
                let filePath = "file://" + tempCreatethumbnail;
                // split file path to directory and file name
                let fileName = filePath.split("/").pop();
                let path = filePath.substring(0, filePath.lastIndexOf("/") + 1);
                console.log("here is encoded fileName==", fileName);
                console.log("here is encoded path==", path);
                const b64Str = yield this.file.readAsDataURL(path, fileName);
                console.log("b64Str==", b64Str);
                return b64Str;
            }
        });
    }
    videoImageUpload(dataArray) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let options;
            this.allStorageData = yield this.storageService.getStorage();
            console.log("stored data==", this.allStorageData);
            console.log("dataArray==", dataArray);
            var sendingImgRes = [];
            console.log("data for upload==", dataArray);
            var url = _assets_constant__WEBPACK_IMPORTED_MODULE_8__["URLS"].baseUrl + 'uploadImage';
            let myheaders = new Headers();
            myheaders.append('Content-Type', 'application/json');
            myheaders.append('Authorization', this.allStorageData.loginApiRes.login_token);
            for (let i = 0; i <= dataArray.length; i++) {
                console.log("path==", dataArray[i]);
                let targetPath = dataArray[i].media;
                let currentName = dataArray[i].media;
                let name = dataArray[i].media.split("/");
                let fileName = name[name.length - 1];
                if (dataArray[i].media_type == 2) {
                    //for video:- create thumbnail
                    dataArray[i].thumbnail = yield this.createThumbnail(dataArray[i].media);
                    options = {
                        filekey: "image",
                        fileName: fileName,
                        chunkdMode: false,
                        mimeType: "multipart/form-data",
                        headers: { "Authorization": this.allStorageData.loginApiRes.login_token },
                        params: {
                            "image": targetPath,
                            "flag": this.previousData.flag_type,
                            "client_id": _assets_constant__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG"].clientId,
                            "app_version": _assets_constant__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG"].appVersion,
                            "device": this.apiService.device,
                            "device_id": this.allStorageData.deviceId,
                            "user_id": this.allStorageData.loginApiRes.user_id,
                            "media_type": dataArray[i].media_type,
                            "thumb_image": dataArray[i].thumbnail
                        }
                    };
                    console.log("passing key video==", JSON.stringify(options));
                }
                else {
                    //for image 
                    options = {
                        filekey: "image",
                        fileName: fileName,
                        chunkdMode: false,
                        mimeType: "multipart/form-data",
                        headers: { "Authorization": this.allStorageData.loginApiRes.login_token },
                        params: {
                            "image": targetPath,
                            "flag": this.previousData.flag_type,
                            "client_id": _assets_constant__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG"].clientId,
                            "app_version": _assets_constant__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG"].appVersion,
                            "device": this.apiService.device,
                            "device_id": this.allStorageData.deviceId,
                            "user_id": this.allStorageData.loginApiRes.user_id,
                            "media_type": dataArray[i].media_type,
                            "thumb_image": ""
                        }
                    };
                    console.log("passing key video==", JSON.stringify(options));
                }
                this.fileTransfer.onProgress((progressEvent) => {
                    this.zone.run(() => {
                        console.log("progress==", progressEvent.loaded);
                        dataArray[i].progressPercentage = (progressEvent.loaded * 100) / progressEvent.total;
                        this.videoProgressPercentage = dataArray[i].progressPercentage.toFixed(0);
                        console.log("progress percentage==", dataArray[i].progressPercentage);
                        console.log("videoProgressPercentage==", this.videoProgressPercentage);
                        // data.progressPercentage=(progressEvent.loaded*100)/progressEvent.total;
                        // console.log('progress percentage==>', data.progressPercentage);
                    });
                });
                const serverImgProcess = yield this.fileTransfer.upload(targetPath, url, options);
                console.log("serverImgProcess==", serverImgProcess);
                let data = JSON.parse(serverImgProcess.response);
                if (data.success == 1) {
                    if (dataArray[i].media_type == 2) {
                        data.previewImage = dataArray[i].thumbnail;
                        data.data.progressPercentage = dataArray[i].progressPercentage;
                    }
                    console.log("data video==", data);
                    data.positionInd = dataArray[i].positionInd;
                    sendingImgRes.push(data);
                    console.log("sendingImgRes video/image==", sendingImgRes);
                    if (i == dataArray.length - 1) {
                        return sendingImgRes;
                    }
                }
                else {
                    this.apiService.showToastMessage(JSON.stringify(data.message), 'top', 3000, 'redBg');
                }
            }
        });
    }
    uploadImageOnServer(dataArray, mediaType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const storegeVal = yield this.storageService.getStorage();
            console.log("storegeVal==", storegeVal);
            if (mediaType == "img") {
                this.mediaTypeValue = "1";
            }
            else if (mediaType == "video") {
                this.mediaTypeValue = "2";
            }
            else {
                this.mediaTypeValue = "3";
            }
            var sendingImgRes = [];
            console.log("data for upload==", dataArray);
            var tempURL = _assets_constant__WEBPACK_IMPORTED_MODULE_8__["URLS"].baseUrl + "v1/uploadmedia";
            console.log("passing tempURL==", tempURL);
            var url = _assets_constant__WEBPACK_IMPORTED_MODULE_8__["URLS"].baseUrl + "" + _assets_constant__WEBPACK_IMPORTED_MODULE_8__["URLS"].uploadImage;
            let myheaders = new Headers();
            myheaders.append('Content-Type', 'application/json');
            myheaders.append('Authorization', storegeVal.login_token);
            for (let i = 0; i <= dataArray.length; i++) {
                console.log("path==", dataArray[i]);
                let targetPath = dataArray[i].media;
                // let currentName = dataArray[i];
                let name = dataArray[i].media.split("/");
                let fileName = name[name.length - 1];
                if (fileName.indexOf("?") >= 0 && targetPath.indexOf("?") >= 0) {
                    console.log('file path is contain ? fileName==>', fileName);
                    console.log('file path is contain ? targetPath==>', targetPath);
                    var removeExtraDataFromFileName = fileName.substring(0, fileName.indexOf("?"));
                    var mediaPath = targetPath.substring(0, targetPath.indexOf("?"));
                }
                else {
                    console.log('file path does not contain ? fileName==>', fileName);
                    console.log('file path does not contain ? targetPath==>', targetPath);
                    var removeExtraDataFromFileName = fileName;
                    var mediaPath = targetPath;
                }
                let options = {
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
                        "Package-Name": _assets_constant__WEBPACK_IMPORTED_MODULE_8__["APP_CONFIG"].packageName,
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
                        "module": dataArray[i].module,
                    }
                };
                console.log("passing key==", JSON.stringify(options));
                console.log("passing url==", url);
                console.log("passing mediaPath==", mediaPath);
                const serverImgProcess = yield this.fileTransfer.upload(mediaPath, url, options);
                console.log("serverImgProcess temp==", serverImgProcess);
                let data = JSON.parse(serverImgProcess.response);
                console.log("serverImgProcess data==", data);
                if (data.status == 1) {
                    console.log("serverImgProcess final==", data);
                    sendingImgRes.push(data);
                    console.log("serverImgProcess push==", sendingImgRes);
                    if (i == dataArray.length - 1) {
                        return sendingImgRes;
                    }
                }
                else {
                    this.apiService.showToastMessage(JSON.stringify(data.message), 'top', 3000, 'greenBg');
                }
            }
        });
    }
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
};
UploadingService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["ImagePicker"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _provider_apiservices_service__WEBPACK_IMPORTED_MODULE_9__["ApiservicesService"] },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_10__["LocalStorageService"] },
    { type: _ionic_native_media_capture_ngx__WEBPACK_IMPORTED_MODULE_11__["MediaCapture"] },
    { type: _ionic_native_video_editor_ngx__WEBPACK_IMPORTED_MODULE_12__["VideoEditor"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_13__["Storage"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_14__["Crop"] }
];
UploadingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], UploadingService);



/***/ })

}]);
//# sourceMappingURL=default~LoginModuleNew-upload-profile-picture-upload-profile-picture-module~contactus-contactus-modu~89f063b2-es2015.js.map