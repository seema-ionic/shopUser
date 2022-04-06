import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { from, Observable, throwError } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';
import { URLS } from 'src/assets/constant';
import { ToastController } from '@ionic/angular';
import { StorageService } from './storage.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  currentLat:any;currentLong:any;
  constructor( public  http:HttpClient, private zone:NgZone,public toast: ToastController,  public storageService: StorageService,private geolocation: Geolocation,) { }

  async getLocation(){
    console.error('RestApiService ngOnInit:');
    let location = await this.geolocation.getCurrentPosition();
    return location;
  }

 // Handle API errors
 handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError( JSON.stringify(error.error));
};

async showSuccessToast(msg, pos, time, className) {
  const toast = await this.toast.create({
    message: msg, animated:true,  duration: time, position:pos, color: className
  });
  toast.present();
}

withoutLoginToken(url: string, data: Object): Observable<any> {
     var httpOptions = {
        headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http.post(URLS.baseUrl+url, data, httpOptions).pipe(catchError(this.handleError));
}

withLoginToken(url: string, data: Object): Observable<any> {
  return from(this.storageService.get("token")).pipe(mergeMap((token)=>{
    var httpOptions = {
        headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": 'Bearer '+ token
      }),
    };
    return this.http.post(URLS.baseUrl+url, data, httpOptions)
    .pipe(catchError(this.handleError));
  }))
  
}

callGetMethod(url){
  return from(this.storageService.get("token")).pipe(mergeMap((token)=>{
  var httpOptions = {
    headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": 'Bearer '+ token
  }),
};
return this.http.get(URLS.baseUrl+url,  httpOptions)
.pipe(catchError(this.handleError));  
}))
}

callGetMethodWithParams(url, data){
  return from(this.storageService.get("token")).pipe(mergeMap((token)=>{
  var httpOptions = {
    headers: new HttpHeaders({
    "Content-Type": "application/json",
    "Authorization": 'Bearer '+ token,    
  }),
  params: { ...data}
};
return this.http.get(URLS.baseUrl+url,  httpOptions)
.pipe(catchError(this.handleError));  
}))

}

imageUpload(url, formData) {
  return from(this.storageService.get("token")).pipe(mergeMap((token)=>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.post(URLS.baseUrl+url,formData , { headers: headers });
  }))
}


withLoginToken_putMethod(url: string, data: Object): Observable<any> {
  return from(this.storageService.get("token")).pipe(mergeMap((token)=>{
    var httpOptions = {
        headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": 'Bearer '+ token
      }),
    };
    return this.http.put(URLS.baseUrl+url, data, httpOptions)
    .pipe(catchError(this.handleError));
  }))
  
}

}
