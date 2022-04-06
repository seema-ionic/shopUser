
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';
import { StorageService } from './providers/storage.service';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation,GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { AlertController } from '@ionic/angular';
import { RestApiService } from './providers/rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent{
  public appPages = [
    { title: 'My Order', url: '/history-list', icon: 'list', id:"orderHistory"},
    { title: 'Patient list', url: '/patient-list', icon: 'clipboard', id:"patientList"},
    { title: 'Sing out', url: '', icon: 'log-out', id:"signOut"},
  ];
  public labels = [];
  locationCoords: any;
  timetest: any;


  constructor(private router: Router,  public menuCtrl: MenuController, private diagnostic: Diagnostic, public storageService: StorageService,private locationAccuracy: LocationAccuracy, private androidPermissions: AndroidPermissions, private geolocation: Geolocation, private plt:Platform, public alertController: AlertController, private apiServices: RestApiService,) {
    this.initializeApp();
    this.menuCtrl.close();
    this.locationCoords = {
      latitude: "",
      longitude: "",
      accuracy: "",
      timestamp: ""
    }
    this.timetest = Date.now();

   
  }
  ngOnInit(){
    console.log('AppComponent ngOnInit');
    // this.router.navigateByUrl('/login');
    this.storageService.get('token').then(res=>{
      console.log('token', res);
      if(res){
        // this.router.navigateByUrl('/dashboard');
        // this.router.navigateByUrl('/history-list');
        
      }else{
        this.router.navigateByUrl('/login');
      }
    });
  }
 

  initializeApp(){
    this.plt.ready().then(()=>{
      if(this.plt.is('android')){
        this.checkGpsEnableDisable();
        // this.checkGPSPermission();
        this.checkOtherPermission();
        this.getUserPosition();
      }
    })
  }
  
  checkOtherPermission(){
    console.log('checkOtherPermission fun called');

    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(status => {
          if (status.hasPermission) {
            console.log('check READ_EXTERNAL_STORAGE Permission', status.hasPermission);
          } else {
            this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
            .then(status =>{
            console.log('check READ_EXTERNAL_STORAGE Permission requestPermission', status);
            });
          }
        })

        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(status => {
          if (status.hasPermission) {
            console.log('check CAMERA Permission', status.hasPermission);
          } else {
            this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
            .then(status =>{
            console.log('check CAMERA Permission requestPermission', status);
            });
          }
        })

  }

  
  getUserPosition() {
    return new Promise((resolve, reject) => {
    let options = {
      maximumAge: 3000,
      enableHighAccuracy: true
    };
   
    this.geolocation.getCurrentPosition(options).then((pos: Geoposition) => {
    // this.currentPos = pos;

    console.log('AppComponent geolocation', pos);
    const location = {
       lat: pos.coords.latitude,
       lng: pos.coords.longitude,
       time: new Date(),
     };
    console.log('loc', location);
    resolve(pos);
   }, (err: PositionError) => {
     console.log("error : " + err.message);
     reject(err.message);
    });
   });
  }

  checkGpsEnableDisable(){
    
this.diagnostic.isGpsLocationEnabled().then((enabled) => {
  if (enabled){
    // do something
    this.checkGPSPermission();
  } else {
    // do something else
    this.presentAlertConfirm()
  }
}).catch(e => console.error(e));


  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      // header: 'Confirm!',
      message: 'To continue, let your device turn on location',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            navigator['app'].exitApp();
          }
        }, {
          text: 'Ok',
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


   checkGPSPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        if (result.hasPermission) {

          //If having permission show 'Turn On GPS' dialogue
          this.askToTurnOnGPS();
        } else {

          //If not having permission ask for permission
          this.requestGPSPermission();
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        console.log("4");
      } else {
        //Show 'GPS Permission Request' dialogue
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(
            () => {
              // call method to turn on GPS
              this.askToTurnOnGPS();
            },
            error => {
              //Show alert if user click on 'No Thanks'
              console.log('requestPermission Error requesting location permissions ' + error)
            }
          );
      }
    });
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
      this.locationCoords.latitude = resp.coords.latitude;
      this.locationCoords.longitude = resp.coords.longitude;
      this.locationCoords.accuracy = resp.coords.accuracy;
      this.locationCoords.timestamp = resp.timestamp;
    }).catch((error) => {
      console.log('Error getting location' + error);
    });
  }

  async signOutFun(){
    
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      // header: 'Confirm!',
      message: 'Are you sure, you want to Sign-out from this app?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            // navigator['app'].exitApp();
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            this.storageService.remove('token');
            this.apiServices.showSuccessToast("You have logout successfully.", "top", 2000, 'success');
            setTimeout(() => {
              navigator['app'].exitApp();
            }, 1500);
          }
        }
      ]
    });

    await alert.present();
  }





}