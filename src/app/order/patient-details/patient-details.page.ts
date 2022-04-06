import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.page.html',
  styleUrls: ['./patient-details.page.scss'],
})
export class PatientDetailsPage implements OnInit {
  previousePageData: any;
  userName: any;
  isPrescriptionAvailable: any;
  frontPreception_ImgPath: any = '';
  backPreception_ImgPath: any = '';
  isPrescriptionNotAvailableArr: any=[];
  isMedicineQuantity: string;
  notAllMedicine_front: any=[];
  notAllMedicine_back:any=[];
  userNotes: any;
  constructor( private zone: NgZone, private activatedRoute: ActivatedRoute, ) {
    this.previousePageData = JSON.parse(this.activatedRoute.snapshot.paramMap.get('data'));
    console.log('previousePageDaata==> ', this.previousePageData);
  }

 checkVal(val){
if(val==true){
  return  '1';
}else{
  return  '0';
}
}

  ngOnInit() {
    this.zone.run(()=>{
      if(this.previousePageData){
      //patent  name
      this.userName=this.previousePageData.patient_name;


      this.isPrescriptionAvailable=this.checkVal(this.previousePageData.is_prescription);

      if(this.previousePageData.is_prescription==false){
        for(let i=0; i<this.previousePageData.front_page_medicine.length; i++){
          this.isPrescriptionNotAvailableArr.push({ "s_no": i+1, "medicine_name": this.previousePageData.front_page_medicine[i].medicine_name, "quantity":  this.previousePageData.front_page_medicine[i].quantity });
        }
      }else{
        this.frontPreception_ImgPath=this.previousePageData.front_image;
        this.backPreception_ImgPath=this.previousePageData.back_image;
      }
      
      this.isMedicineQuantity=this.checkVal(this.previousePageData.is_all_medicines);

      if(this.previousePageData.is_all_medicines==false){
        for(let j=0; j<this.previousePageData.back_page_medicine.length; j++){
          this.notAllMedicine_back.push({ "s_no": j+1, "medicine_name": this.previousePageData.back_page_medicine[j].medicine_name, "quantity":  this.previousePageData.back_page_medicine[j].quantity });
        }
        for(let k=0; k<this.previousePageData.front_page_medicine.length; k++){
          this.notAllMedicine_front.push({ "s_no": k+1, "medicine_name": this.previousePageData.front_page_medicine[k].medicine_name, "quantity":  this.previousePageData.front_page_medicine[k].quantity });
        }
      }

      this.userNotes=this.previousePageData.note;

    }

    })

  }

}
