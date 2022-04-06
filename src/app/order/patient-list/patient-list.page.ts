import { Component, NgZone, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { iif } from 'rxjs';
import { IonLoaderService } from 'src/app/providers/ion-loader.service';
import { RestApiService } from 'src/app/providers/rest-api.service';
import { URLS } from 'src/assets/constant';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.page.html',
  styleUrls: ['./patient-list.page.scss'],
})
export class PatientListPage implements OnInit {
  serverRes: any;
  allData: any[];
  selectedDiv:any;
  constructor( private apiServices:RestApiService, private datePipe: DatePipe,private ionLoaderService: IonLoaderService, private router: Router, private zone:NgZone) {

   }

  ngOnInit() {
    this.getPatentList();
  }

  
 getPatentList(){
  this.ionLoaderService.simpleLoader();
  let apiKey={ };
  this.apiServices.callGetMethodWithParams(URLS.getPatentOrder, apiKey).subscribe(res=>{
    console.log('patent list result==> ', res);
    this.serverRes=res;
    this.ionLoaderService.dismissLoader();
    if( this.serverRes.data.length>=1){
      this.allData=this.serverRes.data;
    }else{
      this.allData=[];
    }
  },err=>{
    this.ionLoaderService.dismissLoader();
      this.apiServices.showSuccessToast(JSON.stringify(err), "top", 2000, 'danger')
    });
 }


 expandDIV(ind){
   this.zone.run(()=>{
    this.selectedDiv=ind;
   })
 }


 patient(data){
  this.router.navigate(['/patient-details', {data:JSON.stringify(data)}]);
}


}
