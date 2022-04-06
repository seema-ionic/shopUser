import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonRadioGroup } from '@ionic/angular';
import { IonLoaderService } from 'src/app/providers/ion-loader.service';
import { RestApiService } from 'src/app/providers/rest-api.service';
import { StorageService } from 'src/app/providers/storage.service';
import { URLS } from 'src/assets/constant';

import { AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';


import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  allData:any;serverRes:any;
  location:any='';
  // answer:any='1';
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  currentLat: any;
  currentLong: any;
  pinCode:any;
  addressArr:any=[];
  constructor( private router: Router,  public storageService: StorageService,  private apiServices:RestApiService,private ionLoaderService: IonLoaderService,
    private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder, public alertController: AlertController,
    private locationAccuracy: LocationAccuracy, private androidPermissions: AndroidPermissions, private zone:NgZone

    ) { }

  ngOnInit() {
    this.storageService.getObject('loginRes').then(res=>{
      console.log('storage service==> ', res);
      this.pinCode=res.pincode;
      this.currentLat=res.lat;
      this.currentLong=res.long;
      this.getData();
      this.getGeoencoder(this.currentLat, this.currentLong);
    });
    // this.fetchUserLoaction();
  }




  getData(){
    this.ionLoaderService.simpleLoader();
    let apiKey={
      "pincode":this.pinCode,
      "lat":this.currentLat,
      "long":this.currentLong
    };
    this.apiServices.withLoginToken(URLS.getAllShopListApi, apiKey).subscribe(res=>{
      console.log('result==> ', res);
      this.serverRes=res;
      this.ionLoaderService.dismissLoader();
      if( this.serverRes.data.length>=1){
        this.allData=this.serverRes.data;

       
        for(let i=0; i<this.allData.length; i++){
           //for calculating distance
          if(this.allData[i].lat && this.allData[i].long){
            this.distanceCal(this.allData[i]);
          }else{
            this.allData[i].distance="N/A"
          }

           //for getting remaininng time
          //  if(this.allData[i].closing_time, this.allData[i].opening_time){
          //   this.timeDiff(this.allData[i]);
          //  }
         

        }

       




      }else{
        this.allData=[];
        // this.apiServices.showSuccessToast(this.serverRes.msg, "top", 2000, 'danger')
      }
    },err=>{
        this.ionLoaderService.dismissLoader();
        this.allData=[];
        this.apiServices.showSuccessToast(JSON.stringify(err), "top", 2000, 'danger');
      });

    //   this.allData=[{
    //     "shopImg":"./assets/tempFolder/1.jpg",
    //     "ShopName":"Indian supermarket chains",
    //     "staffName":"Deepak Gupta",
    //     "UserRating":5,
    //     "distance":"5 KM",
    //     "time":"15 hrs"
    //   },{
    //     "shopImg":"./assets/tempFolder/6.jpg",
    //     "ShopName":"Foodmoji",
    //     "staffName":"GM Kumar",
    //     "UserRating":4,
    //     "distance":"5.5 KM",
    //     "time":"18 hrs"
    //   },{
    //     "shopImg":"./assets/tempFolder/3.jpg",
    //     "ShopName":"Farmer Jack’s Produce",
    //     "staffName":"Raja",
    //     "UserRating":5,
    //     "distance":"10 KM",
    //     "time":"20 hrs"
    //   },{
    //     "shopImg":"./assets/tempFolder/4.jpg",
    //     "ShopName":"Berries & Blooms Grocery",
    //     "staffName":"Ravi",
    //     "UserRating":5,
    //     "distance":"15 KM",
    //     "time":"12 hrs"
    //   },{
    //     "shopImg":"./assets/tempFolder/5.jpg",
    //     "ShopName":"Naturally Gourmet Grocery",
    //     "staffName":"Dinesh",
    //     "UserRating":5,
    //     "distance":"25 KM",
    //     "time":"11 hrs"
    //   },
    
    
    // ]


}


  async goToMap(){
    if(this.currentLat || this.currentLong){
      this.router.navigateByUrl('/search-location');
      // this.router.navigate(['/search-location', {data:{lat:this.currentLat, long:this.currentLong, redirectFrom:'home'}}]);

    }else{
      
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        // header: 'Confirm!',
        message: 'To continue, let your device turn on location',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            id: 'cancel-button',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
              navigator['app'].exitApp();
            }
          }, {
            text: 'Ok',
            id: 'confirm-button',
            handler: () => {
              console.log('Confirm Okay');
              this.locationAccuracy.canRequest().then((canRequest: boolean) => {
                if(canRequest) {
                  this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(() => {
                      console.log('Request successful.')
                      this.askToTurnOnGPS();
                    },
                    error => {
                      console.log('Error requesting location permissions', error)
                     
                    }
                  );
                }
              });
  
            }
          }
        ]
      });
  
      await alert.present();

    }
    
  }
  patient(data){
    this.router.navigate(['/patientform', {data:JSON.stringify(data)}]);
  }


  fetchUserLoaction(){
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log('lat', resp.coords.latitude);
      console.log('longitude', resp.coords.longitude);
      this.currentLat=resp.coords.latitude;
      this.currentLong=resp.coords.longitude;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data:any) => {
      console.log('lat watch', data.coords.latitude);
      console.log('longitude watch', data.coords.longitude);
      this.currentLat=data.coords.latitude;
      this.currentLong=data.coords.longitude;
      this.getGeoencoder(this.currentLat, this.currentLong);
     });
  }

  getGeoencoder(latitude, longitude) {
    this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        this.location = this.generateAddress(result[0]);
        console.log('address==> ', this.location);
      })
      .catch((error: any) => {
        // alert('Error getting location' + JSON.stringify(error));
      });
  }
  generateAddress(addressObj) {
    let obj = [];
    let address = "";
    for (let key in addressObj) {
      obj.push(addressObj[key]);
    }
    obj.reverse();
    for (let val in obj) {
      if (obj[val].length)
        address += obj[val] + ', ';
    }
    return address.slice(0, -2);
  }


  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        // When GPS Turned ON call method to get Accurate location coordinates
        this.getLocationCoordinates()
      },
      error => console.log('Error requesting location permissions ' + JSON.stringify(error))
    );
  }
  

  // Methos to get device accurate coordinates using device GPS
  getLocationCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.currentLat = resp.coords.latitude;
      this.currentLong = resp.coords.longitude;
      this.getGeoencoder(this.currentLat, this.currentLong);
    }).catch((error) => {
      console.log('Error getting location' + error);
    });
  }

  searchLoation(address_tex){
    this.zone.run(()=>{

    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
  };
    this.nativeGeocoder.forwardGeocode(address_tex, options)
  .then((result: NativeGeocoderResult[]) =>{ 
    console.log('The coordinates are latitude=' + JSON.stringify(result));
    let lat:any=result[0].latitude;
    let lon:any=result[0].longitude;
    this.nativeGeocoder.reverseGeocode(lat, lon, this.geoencoderOptions)
    .then((add_result: NativeGeocoderResult[]) => {
      // this.location = this.generateAddress(add_result[0]);
      console.log('address==> ', add_result);
      this.addressArr=result;
    })
    .catch((error: any) => {
      // alert('Error getting location' + JSON.stringify(error));
    });
  })
  .catch((error: any) => console.log(error));
  
})
  }

  selectedLoc(loc_address, postalCode){
    this.zone.run(()=>{
      this.pinCode=postalCode;
      this.currentLat=loc_address.latitude;
      this.currentLong=loc_address.longitude;
      this.addressArr=[];
      this.getData();
      this.getGeoencoder(this.currentLat, this.currentLong);
    
})
  }


  searchShopFun(){
    // alert('This module is under development');
    this.router.navigateByUrl('/search-shop');
  }

  distanceCal(data){

// The math module contains a function
// named toRadians which converts from
// degrees to radians.
let lon1 =  data.lat * Math.PI / 180;
let lon2 = this.currentLat * Math.PI / 180;
let lat1 = data.long * Math.PI / 180;
let lat2 =  this.currentLong * Math.PI / 180;

// Haversine formula
let dlon = lon2 - lon1;
let dlat = lat2 - lat1;
let a = Math.pow(Math.sin(dlat / 2), 2)
+ Math.cos(lat1) * Math.cos(lat2)
* Math.pow(Math.sin(dlon / 2),2);

let c = 2 * Math.asin(Math.sqrt(a));

// Radius of earth in kilometers. Use 3956
// for miles
let r = 6371;
let res:any=  (c * r);
console.log('res=> ', res);
data.distance=parseFloat(res).toFixed(2) + ' KM';
// calculate the result
// return res;
}


// timeDiff(data){
//   const date1:any = new Date(data.opening_time);
//   const date2:any = new Date(data.closing_time);
//   const diffTime = Math.abs(date2 - date1);
//   // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
//   console.log(diffTime + " milliseconds");
//   // console.log(diffDays + " days");
//   var d, h, m, s;
//   s = Math.floor(diffTime / 1000);
//   m = Math.floor(s / 60);
//   s = s % 60;
//   h = Math.floor(m / 60);
//   m = m % 60;
//   d = Math.floor(h / 24);
//   h = h % 24;
//   h += d * 24;
// if(h<1){
//   if(m<1){
//     data.shopTimming='Opened';
//   }else{
//     data.shopTimming=m +'Min';
//   }
  
// }else{
//   data.shopTimming=h +'hr';
// }

// }


}
