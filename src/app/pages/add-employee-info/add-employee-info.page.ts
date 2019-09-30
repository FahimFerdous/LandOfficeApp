import { AddempinfoService } from './../../services/addempinfo.service';
import { Addemp } from './../../model/AddEmploye';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'add-employee-info',
  templateUrl: './add-employee-info.page.html',
  styleUrls: ['./add-employee-info.page.scss'],
})
export class AddEmployeeInfoPage {

  Addemp=new Addemp();
  toast:any;  

  selectedFilesForImage:FileList;
  constructor(private Addempinfo:AddempinfoService, private toastController: ToastController,
    private afAuth: AngularFireAuth,private route:ActivatedRoute,private router:Router ) { }


    async save(Addemp){
      this.Addemp.entryDate = new Date().getTime();
      console.log(this.Addemp.imageUrlFile);
      await this.Addempinfo.startUpLoad(Addemp);
      this.router.navigate(['/employees-info']);
    }

    uploadFile(event) {
    console.log('event',event);
      this.selectedFilesForImage = event;
      console.log('f', this.selectedFilesForImage);
    this.Addemp.imageUrlFile = this.selectedFilesForImage.item(0);
  }
  


  
}

