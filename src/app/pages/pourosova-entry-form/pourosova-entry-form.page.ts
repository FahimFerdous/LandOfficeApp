import { PourosovaService } from './../../services/pourosova.service';
import { Pourosova } from './../../model/pourosova';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'pourosova-entry-form',
  templateUrl: './pourosova-entry-form.page.html',
  styleUrls: ['./pourosova-entry-form.page.scss'],
})
export class PourosovaEntryFormPage implements OnInit {
  Pourosova=new Pourosova();
  toast:any;
  constructor(private pourosovaServices:PourosovaService,
    private toastController: ToastController) { }

  ngOnInit() {
  }

  async save(hat){
    console.log(hat);
    await this.pourosovaServices.save(hat).then(t=>{
      const toast=  this.toastController.create({
        message:'Saved Succesfully',
        duration:2000
      }).then((toastData)=>{
        console.log(toastData);
        toastData.present();
      });
    });
     
    this.Pourosova=new Pourosova();
    
  }

  HideToast(){
    this.toast = this.toastController.dismiss();
  }
 

}
