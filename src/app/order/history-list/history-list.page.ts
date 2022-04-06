import { DatePipe } from '@angular/common';
import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iif } from 'rxjs';
import { IonLoaderService } from 'src/app/providers/ion-loader.service';
import { RestApiService } from 'src/app/providers/rest-api.service';
import { URLS } from 'src/assets/constant';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.page.html',
  styleUrls: ['./history-list.page.scss'],
})
export class HistoryListPage implements OnInit {
  serverRes:any;allData:any;
  // selectedSegmaent:any='history';
  selectedSegmaent:any='running';
  
  allRunningOrder:any;currentDate: any;
  toTime: any;
  fromTime:any;
  constructor( private apiServices:RestApiService, private datePipe: DatePipe,private ionLoaderService: IonLoaderService, private router: Router, private zone:NgZone) {
    this.currentDate = new Date();
    this.fromTime =  this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.toTime = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    // this.modifyDate = this.datePipe.transform(this.currentDate, "yyyy/MMM/dd");
   }

  ngOnInit() {
    // this.getHistory();
    this.runningOrder();
  }

  segmentChanged(ev){
    
    this.fromTime =  this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.toTime = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    console.log(ev);
    this.selectedSegmaent=ev.detail.value;
    if(this.selectedSegmaent=='history'){
      this.getHistory();
    }else{
      this.runningOrder();
    }
  }


  getHistory(){
    this.ionLoaderService.simpleLoader();
    let apiKey={"from_date":this.fromTime, "to_date":this.toTime };
    this.apiServices.withLoginToken(URLS.orderHistoryList, apiKey).subscribe(res=>{
      console.log('result==> ', res);
      this.serverRes=res;
      this.ionLoaderService.dismissLoader();
      if( this.serverRes.data.length>=1){
        this.allData=this.serverRes.data;
      }else{
        this.allData=[];
        // this.apiServices.showSuccessToast(this.serverRes.msg, "top", 2000, 'danger')
      }
    },err=>{
      this.ionLoaderService.dismissLoader();
        this.allData=[];
        this.apiServices.showSuccessToast(JSON.stringify(err), "top", 2000, 'danger')
      });
  }

  
  runningOrder(){
    this.ionLoaderService.simpleLoader();
    let apiKey={ };
    this.apiServices.callGetMethodWithParams(URLS.runningOrder, apiKey).subscribe(res=>{
      console.log('result==> ', res);
      this.serverRes=res;
      this.ionLoaderService.dismissLoader();
      if( this.serverRes.data.length>=1){
        this.allRunningOrder=this.serverRes.data;
      }else{
        this.allRunningOrder=[];
        // this.apiServices.showSuccessToast(this.serverRes.msg, "top", 2000, 'danger')
      }
    },err=>{
      this.ionLoaderService.dismissLoader();
        this.allRunningOrder=[];
        this.apiServices.showSuccessToast(JSON.stringify(err), "top", 2000, 'danger')
      });
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

 trackOrder(data){
  this.router.navigate(['/search-location', {data:JSON.stringify(data)}]);
 }

 changeStatus(data, index){
   this.zone.run(()=>{
  this.apiServices.showSuccessToast('Dear Sir, this feature will be removed in production build, this is  only enable for testing purpose.', "top", 4000, 'danger');
  // this.ionLoaderService.simpleLoader();
  let apiKey={"order_id":data.order_id};
  this.apiServices.withLoginToken_putMethod(URLS.deleveryUpdate, apiKey).subscribe((res:any)=>{
    console.log('result==> ', res);
    // this.ionLoaderService.dismissLoader();
    this.allRunningOrder.splice(index,1);
    
  this.apiServices.showSuccessToast(res.msg, "top", 2000, 'success');
  },err=>{
    this.ionLoaderService.dismissLoader();
    this.apiServices.showSuccessToast(JSON.stringify(err), "top", 2000, 'danger')
    });
    
})

 }

 seeDetails(data){
  this.router.navigate(['/patient-details', {data:JSON.stringify(data)}]);
 }


}
