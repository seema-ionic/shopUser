import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/providers/rest-api.service';
import { StorageService } from 'src/app/providers/storage.service';
import { URLS } from 'src/assets/constant';

@Component({
  selector: 'app-search-shop',
  templateUrl: './search-shop.page.html',
  styleUrls: ['./search-shop.page.scss'],
})
export class SearchShopPage implements OnInit {
  shop_name:any='';serverRes:any;allData:any=[];
  msg:any='';searchingInProgress:boolean=false;pinCode:any;
  constructor(private router: Router,  public storageService: StorageService,  private apiServices:RestApiService,) { }

  ngOnInit() {
    this.storageService.getObject('loginRes').then(res=>{
      console.log('storage service==> ', res);
      this.pinCode=res.pincode;
    });
  }

  getData(){
    this.searchingInProgress=true;
    let apiKey={ "shop_name":this.shop_name, "pincode":this.pinCode};
    this.apiServices.withLoginToken(URLS.searchShop, apiKey).subscribe(res=>{
      console.log('result==> ', res);
      this.serverRes=res;
      if( this.serverRes.success==1){
        this.allData=this.serverRes.data;
        if(this.allData.length<1){
          this.allData=[];
          this.msg='No shop available';
        }
      }else{
        this.allData=[];
        this.msg='No shop available';
      }

      setTimeout(() => {
        this.searchingInProgress=false;
      }, 1000);
    },err=>{
        this.allData=[];
        this.msg=JSON.stringify(err);
        this.apiServices.showSuccessToast(JSON.stringify(err), "top", 2000, 'danger');
        this.searchingInProgress=false;
      });

    }

    
  patient(data){
    this.router.navigate(['/patientform', {data:JSON.stringify(data)}]);
  }


}
