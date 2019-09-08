import { SubmittaxformService } from './../../submittaxform.service';
import { submitform } from './../../model/submitform';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'submittaxform',
  templateUrl: './submittaxform.page.html',
  styleUrls: ['./submittaxform.page.scss'],
})
export class SubmittaxformPage {

 submitform=new submitform();
  toast:any;  
  constructor(private submitformServices:SubmittaxformService,
    private toastController: ToastController) { 
      
    }


  async save(submitform){
    
    await this.submitformServices.save(submitform).then(t=>{
      this.toast=  this.toastController.create({
        message:'verified',
        duration:2000
      }).then((toastData)=>{
        toastData.present();
      });
    });
     
    this.submitform =new submitform();
    
  }

  HideToast(){
    this.toast = this.toastController.dismiss();
  }


  ngOnInit() {
  }

}
