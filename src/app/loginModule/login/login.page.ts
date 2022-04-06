import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular'; 
import { RestApiService } from 'src/app/providers/rest-api.service';
import { StorageService } from 'src/app/providers/storage.service';
import { URLS } from 'src/assets/constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  num1:any="";  num2:any="";  num3:any="";  num4:any="";btnText:any='Login';
  userName:any="";//7777777777
  password:any='';//222222
  serverRes: any;
  
  constructor( public menuCtrl: MenuController, private zone:NgZone, private router: Router,
    private apiServices:RestApiService, public storageService: StorageService) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuCtrl.toggle(); //Add this method to your button click function
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
    if(id=='num1'){
      this.num1="";
    }else if(id=='num2'){
      this.num2="";
    }else if(id=='num3'){
      this.num3="";
    }else if(id=='num4'){
      this.num4="";
    }
  })
  }

  goToSignup(){
    this.router.navigateByUrl('/registration');
  }

//   <network-security-config>
//   <domain-config cleartextTrafficPermitted="true">
//       <domain includeSubdomains="true">localhost</domain>
//   </domain-config>
// </network-security-config>

  callLoginFun(){
//     this.router.navigateByUrl('/dashboard');
// return false;
    this.zone.run(()=>{
      this.btnText='Please wait...';
      // this.password=this.num1+''+this.num2+''+this.num3+''+this.num4;
      let apiKey={
        "mobile": parseInt(this.userName),
        "password": this.password
    };
      this.apiServices.withoutLoginToken(URLS.loginApi, apiKey).subscribe((result) => {
        console.log("login api result==> ",result);
        this.btnText="Login";
        this.serverRes=result;
        if(this.serverRes.status=='200'){
          // if(this.serverRes.status=='success'){
          this.storageService.setObject('loginRes', this.serverRes.data);
          this.apiServices.showSuccessToast('User validate successfully', "top", 2000, 'success');
          this.storageService.set('token', this.serverRes.token).then(res => {
            console.log('Data is saved');
            this.router.navigateByUrl('/dashboard');
            // this.router.navigate(['/dashboard', {data:res.data}]);
            }).catch(e => {
            console.log("error: " + e);
            });
          
        }else{
          this.apiServices.showSuccessToast(this.serverRes.message, "top", 2000, 'danger')
        }
        
      },err=>{
        console.log("login api err==", err);
        this.apiServices.showSuccessToast(JSON.stringify(err), "top", 4000, 'danger');
        this.btnText="Login";
      });
    });    
  }

}
