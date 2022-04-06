import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular'; 
import { RestApiService } from 'src/app/providers/rest-api.service';
import { URLS } from 'src/assets/constant';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  btnText:any='Submit';userName:any='';email:any='';mobile:any;password:any='';confirmPassword:any='';address:any='';
  num13:any="";  num14:any="";  num15:any="";  num16:any="";  num5:any="";  num6:any="";  num7:any="";  num8:any="";  num9:any="";  num10:any="";  num11:any="";  num12:any="";
  pincode:any='';currentLat:any;currentLong:any;
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  constructor( public menuCtrl: MenuController, private zone:NgZone, private router: Router,private navCtrl: NavController,  private apiServices:RestApiService,  private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) { }

  ngOnInit() {
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

  ngAfterViewInit(){
    console.log('lat11', this.currentLat);
    console.log('longitude11', this.currentLong);
  }

  moveToNext(id){
    var getId:any=document.getElementById(id);
    var val=getId.value;
    console.log("val==", val);
    if(val==""){
      document.getElementById(id).focus();
    }
  }
  makeEmpty(id){
    this.zone.run(()=>{
    var getId:any=document.getElementById(id);
    getId.value="";
  })
  }

  getGeoencoder(latitude, longitude) {
    this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        this.address = this.generateAddress(result[0]);
        console.log('address==> ', this.address);
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

   signUpFun(){
    
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   console.log('lat', resp.coords.latitude);
    //   console.log('longitude', resp.coords.longitude);
    //   this.currentLat=resp.coords.latitude;
    //   this.currentLong=resp.coords.longitude;
    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });

    this.zone.run(()=>{
      this.btnText='Please wait...';
      // this.password=this.num1+''+this.num2+''+this.num3+''+this.num4;
      let apiKey={
        "name":this.userName,
        "email":this.email,
        "password":this.password,
        "passwordConfirm":this.confirmPassword,
        "address":this.address,
        "mobile":this.mobile,
        "pincode":this.pincode,
        "lat":this.currentLat || "",
        "long":this.currentLong || ""
        };
      this.apiServices.withoutLoginToken(URLS.signupApi, apiKey).subscribe((result) => {
        console.log("signUp api result==> ",result);
        this.btnText="Submit";
        if(result.success!='0'){
          this.apiServices.showSuccessToast('User details submitted successfully', "top", 2000, 'success');
          this.navCtrl.pop();
        }else{
          this.apiServices.showSuccessToast(result.message, "top", 2000, 'danger')
        }
        
      },err=>{
        console.log("login api err==",err);
        this.apiServices.showSuccessToast(JSON.stringify(err), "top", 6000, 'danger');
        this.btnText="Submit";
      });
    }); 
  }
  
  goBack(){
    this.navCtrl.pop();
  }

}
