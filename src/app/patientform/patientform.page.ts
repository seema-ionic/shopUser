import { Location } from '@angular/common';
import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URLS } from 'src/assets/constant';
import { RestApiService } from '../providers/rest-api.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { ActionSheetController } from '@ionic/angular';
import { StorageService } from '../providers/storage.service';
@Component({
  selector: 'app-patientform',
  templateUrl: './patientform.page.html',
  styleUrls: ['./patientform.page.scss'],
})
export class PatientformPage implements OnInit {
  previousePageData: any; btnTxt: any = 'Submit';
  // frontPrescriptionImage:any='';
  // backPrescriptionImage:any='';
  isPrescriptionAvailable: any = '1'; isMedicineQuantity: any = '1';
  userName: any = '';
  serverRes: any;
  allData: any; userNotes: any = '';
  isPrescriptionNotAvailableArr: any = [{ "s_no": 1, "medicine_name": "", "quantity": "" }];
  notAllMedicine_front: any = [{ "s_no": 1, "medicine_name": "", "quantity": "" }];
  notAllMedicine_back: any = [{ "s_no": 1, "medicine_name": "", "quantity": "" }];

  image: any;
  imageData: any;
  preciption_front_img: any = '';
  preciption_back_img: any = '';
  frontPreception_ImgPath: any = '';
  frontPreception_ImgPath_half:any='';
  backPreception_ImgPath: any = '';
  backPreception_ImgPath_half:any='';
  constructor(private apiServices: RestApiService, private zone: NgZone, private activatedRoute: ActivatedRoute, private location: Location, private camera: Camera,
    public actionSheetController: ActionSheetController, public storageService: StorageService) {

    this.previousePageData = JSON.parse(this.activatedRoute.snapshot.paramMap.get('data'));
    console.log('previousePageDaata==> ', this.previousePageData);
  }

  ngOnInit() {
   
    this.apiServices.callGetMethod(URLS.getParticularShopDetails+'/'+this.previousePageData._id).subscribe(res=>{
      console.log('getParticularShopDetails result==> ', res);
      this.serverRes=res;
      if( this.serverRes.data.length>=1){
        // this.allData=this.serverRes.data;
      }else{
        // this.allData=[];
        // this.apiServices.showSuccessToast(this.serverRes.msg, "top", 2000, 'danger')
      }
    },err=>{
        // this.allData=[];
        this.apiServices.showSuccessToast(JSON.stringify(err), "top", 2000, 'danger');
      });
  }

  async chooseOption(type) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Pick image from',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Camera',
        role: 'destructive',
        icon: 'camera',
        handler: () => {
          this.captureImage(type);
        }
      }, {
        text: 'Gallery',
        icon: 'image',
        data: 10,
        handler: () => {
          // this.pickFile(type);
          if (type == 'front') {
            document.getElementById('frontPreceptionImg').click();
          } else {
            document.getElementById('backPreceptionImg').click();
          }


        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  uploadFile(files: FileList, checkSide) {
    this.zone.run(() => {
      console.log('files', files);
      console.log('checkSide', checkSide);
      

      let fileItem = files.item(0);
      if (fileItem) {
        if (checkSide == 'backPreceptionImg') {
          this.backPreception_ImgPath = './assets/loader.gif';
        } else {
          this.frontPreception_ImgPath = './assets/loader.gif';
        }
        var formData: any = new FormData();
        formData.append('file', fileItem);
        this.apiServices.imageUpload(URLS.imageUpload, formData).subscribe((imgUpload: any) => {
          // console.log('imgUpload==> ', imgUpload);
          if (imgUpload.status == 200) {
            if (checkSide == 'backPreceptionImg') {
              this.backPreception_ImgPath = imgUpload.data[0].location;
              this.backPreception_ImgPath_half = imgUpload.data[0].key;
            } else {
              this.frontPreception_ImgPath = imgUpload.data[0].location;
              this.frontPreception_ImgPath_half = imgUpload.data[0].key;
            }
            this.apiServices.showSuccessToast(imgUpload.msg, "top", 2000, 'success');
          } else {
            this.apiServices.showSuccessToast(JSON.stringify(imgUpload), "top", 2000, 'danger');
          }

        }, err => {
          
        this.frontPreception_ImgPath="";
        this.backPreception_ImgPath="";
          this.apiServices.showSuccessToast(JSON.stringify(err), "top", 2000, 'danger');
        });
      }
    })
  }


  removeImg(side) {
    this.zone.run(() => {
      if (side == 'front') {
        this.frontPreception_ImgPath = ""
      } else {
        this.backPreception_ImgPath = "";
      }
    });
  }

  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });
    return blob;
  }

  captureImage(imageSide) {
    this.zone.run(() => {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        saveToPhotoAlbum: false,
      }
      
      this.camera.getPicture(options).then((imageData) => {
        if (imageSide != 'front') {
          this.backPreception_ImgPath = './assets/loader.gif';
        } else {
          this.frontPreception_ImgPath = './assets/loader.gif';
        }

        let postData = new FormData();
        postData.append('file', imageData);

        this.apiServices.imageUpload(URLS.imageUpload, postData).subscribe((res: any) => {
          console.log('image upload==> ', res);

          if (imageSide != 'front') {
            this.backPreception_ImgPath = res.data[0].location;
            this.backPreception_ImgPath_half = res.data[0].key;
          } else {
            this.frontPreception_ImgPath = res.data[0].location;
            this.frontPreception_ImgPath_half = res.data[0].key;
          }
          this.apiServices.showSuccessToast(res.msg, "top", 2000, 'success');

          // alert("image upload res "+JSON.stringify(res));
        }, err => {
          this.frontPreception_ImgPath="";
          this.backPreception_ImgPath="";
          // alert("error11 " + JSON.stringify(err))
          
          this.apiServices.showSuccessToast(JSON.stringify(err), "top", 2000, 'danger');
          console.log('image upload err==> ', err);

        })

      }, (err) => {
        // Handle error
        this.frontPreception_ImgPath="";
        this.backPreception_ImgPath="";
        // alert("error " + JSON.stringify(err))
        this.apiServices.showSuccessToast(JSON.stringify(err), "top", 2000, 'danger');
      });
    });

  }



  addMdeicineInPreception(val) {
    this.zone.run(() => {
      if (val == 'preception') {
        this.isPrescriptionNotAvailableArr.push({ "s_no": this.isPrescriptionNotAvailableArr.length + 1, "medicine_name": "", "quantity": "" });
      } else if (val == 'medicine_front') {
        this.notAllMedicine_front.push({ "s_no": this.notAllMedicine_front.length + 1, "medicine_name": "", "quantity": "" });
      } else if (val == 'medicine_back') {
        this.notAllMedicine_back.push({ "s_no": this.notAllMedicine_back.length + 1, "medicine_name": "", "quantity": "" });
      }

    })
  }

  removeMdeicineInPreception(val) {
    this.zone.run(() => {
      if (val == 'preception') {
        this.isPrescriptionNotAvailableArr.pop();
      } else if (val == 'medicine_front') {
        this.notAllMedicine_front.pop();
      } else if (val == 'medicine_back') {
        this.notAllMedicine_back.pop();
      }
    })
  }


  isPrescription(val) {
    this.isPrescriptionAvailable = val.detail.value;
    console.log('isPrescriptionAvailable==> ', this.isPrescriptionAvailable);
  }
  medicineQuantity(val) {
    this.isMedicineQuantity = val.detail.value;
    console.log('medicineQuantity==> ', this.isMedicineQuantity);
  }
  foundEmptyField(arr) {
    let emptyCheck = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].medicine_name.trim().length < 1 || arr[i].quantity < 1) {
        emptyCheck = 1;
      }
      if (i == arr.length - 1 && emptyCheck == 1) {
        // this.apiServices.showSuccessToast("Please check Medicine name and quantity, it can't be empty", "top", 3000, 'danger');
        return true;
      } else {
        return false;
      }
    }
  }

  submitData() {
    // console.log('backPrescriptionImage==> ', this.backPreception_ImgPath);
    // console.log('frontPrescriptionImage==> ', this.frontPreception_ImgPath);
    // console.log('isPrescriptionAvailable==> ', this.isPrescriptionAvailable);
    // console.log('isMedicineQuantity==> ', this.isMedicineQuantity);
    // console.log('isPrescriptionNotAvailableArr length==> ', this.isPrescriptionNotAvailableArr.length);
    // console.log('notAllMedicine_front length==> ', this.notAllMedicine_front.length);
    // console.log('notAllMedicine_back length==> ', this.notAllMedicine_back.length);

    if (this.userName.trim().length < 1) {
      console.log('userName==> ', this.userName);
      this.apiServices.showSuccessToast("Please inser patient's name", "top", 2000, 'danger');
      return;
    } 
    
    if (parseInt(this.isPrescriptionAvailable) < 0) {
      console.log('isPrescriptionAvailable==> ', this.isPrescriptionAvailable);
      this.apiServices.showSuccessToast("Please select any one option from  Prescription field", "top", 2000, 'danger');
      return;
    }
    
    
    if (this.isPrescriptionAvailable == 1 && this.frontPreception_ImgPath == '' || this.isPrescriptionAvailable == 1 && this.backPreception_ImgPath == '') {
      console.log('isPrescriptionAvailable11==> ', this.isPrescriptionAvailable);
      this.apiServices.showSuccessToast("Please upload prescription's picture of both side", "top", 2000, 'danger');
      return;
    } 
    
    if (this.isPrescriptionAvailable == 0 && this.foundEmptyField(this.isPrescriptionNotAvailableArr) == true) {

      console.log('isPrescriptionAvailable000==> ', this.isPrescriptionAvailable);
      this.apiServices.showSuccessToast("Please check Medicine name and quantity, it can't be empty", "top", 3000, 'danger');
      return;
  
    } 
    
    if (this.isPrescriptionAvailable == 1 && parseInt(this.isMedicineQuantity) < 0) {
      console.log('isMedicineQuantity==> ', this.isMedicineQuantity);
      console.log('isPrescriptionAvailable==> ', this.isPrescriptionAvailable);
      this.apiServices.showSuccessToast("Please select any one from All medicine field", "top", 2000, 'danger');
      return;
    } 
    
    if (this.isPrescriptionAvailable == 1 && this.isMedicineQuantity == 0) {
      console.log('isMedicineQuantity==> ', this.isMedicineQuantity);
      console.log('isPrescriptionAvailable==> ', this.isPrescriptionAvailable);
      let emptyCheck = 0;
      for (let i = 0; i < this.notAllMedicine_front.length; i++) {
        if (this.notAllMedicine_front[i].medicine_name.trim().length < 1 || this.notAllMedicine_front[i].quantity < 1) {
          emptyCheck = 1;
        }
      }
      for (let i = 0; i < this.notAllMedicine_back.length; i++) {
        if (this.notAllMedicine_back[i].medicine_name.trim().length < 1 || this.notAllMedicine_back[i].quantity < 1) {
          emptyCheck = 1;
        }
      }
      if (emptyCheck) {
        this.apiServices.showSuccessToast("Please check Medicine name and quantity, it can't be empty", "top", 3000, 'danger');
        return;
      }
    } 
    
    
      console.log('yoyoyo==> ', this.userName);
      this.zone.run(() => {
        let apiKey;
        this.btnTxt = "Please wait...";
        if(this.isPrescriptionAvailable=='0'){
           apiKey = {
            "patient_name": this.userName,
            "is_prescription": parseInt(this.isPrescriptionAvailable),
            "front_image": this.frontPreception_ImgPath_half,
            "back_image": this.backPreception_ImgPath_half,
            "is_all_medicines": parseInt(this.isMedicineQuantity),
            "front_page_medicine": this.isPrescriptionNotAvailableArr,
            "back_page_medicine": this.notAllMedicine_back,
            "medicine_quantity": 5,
            "note": this.userNotes,
            "shop_id":this.previousePageData._id
          };
        }else{
           apiKey = {
            "patient_name": this.userName,
            "is_prescription": parseInt(this.isPrescriptionAvailable),
            "front_image": this.frontPreception_ImgPath_half,
            "back_image": this.backPreception_ImgPath_half,
            "is_all_medicines": parseInt(this.isMedicineQuantity),
            "front_page_medicine": this.notAllMedicine_front,
            "back_page_medicine": this.notAllMedicine_back,
            "medicine_quantity": 5,
            "note": this.userNotes,
            "shop_id":this.previousePageData._id
  
          };
        }
       
        this.apiServices.withLoginToken(URLS.addOrderApi, apiKey).subscribe(res => {
          console.log('result==> ', res);
          this.btnTxt = "Submit";
          this.serverRes = res;
          if (this.serverRes.status == '200') {
            this.allData = this.serverRes.data;
            this.apiServices.showSuccessToast(this.serverRes.msg, "top", 2000, 'success');
            this.location.back();
          } else {
            this.allData = [];
            this.apiServices.showSuccessToast(this.serverRes.msg, "top", 2000, 'danger');
          }
        }, err => {
          this.btnTxt = "Submit";
          this.allData = [];
          this.apiServices.showSuccessToast(JSON.stringify(err), "top", 2000, 'danger')
        });

      });
    

  }

}
