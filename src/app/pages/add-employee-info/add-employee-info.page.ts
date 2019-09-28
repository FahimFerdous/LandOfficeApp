import { AddempinfoService } from './../../services/addempinfo.service';
import { Addemp } from './../../model/AddEmploye';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'add-employee-info',
  templateUrl: './add-employee-info.page.html',
  styleUrls: ['./add-employee-info.page.scss'],
})
export class AddEmployeeInfoPage {

  Addemp=new Addemp();
  toast:any;  

  constructor(private Addempinfo:AddempinfoService, private toastController: ToastController,
    private afAuth: AngularFireAuth,private route:ActivatedRoute ) { }
    async save(Addemp){
 
    await this.Addempinfo.save(Addemp).then(t=>{
      this.toast=  this.toastController.create({
        message:'seved',
        duration:2000
      }).then((toastData)=>{
        toastData.present();
      });
    });
  }
}

