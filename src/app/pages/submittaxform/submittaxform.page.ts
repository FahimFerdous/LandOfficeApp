import { ActivatedRoute } from '@angular/router';
import { SubmittaxformService } from './../../submittaxform.service';
import { submitform } from './../../model/submitform';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'submittaxform',
  templateUrl: './submittaxform.page.html',
  styleUrls: ['./submittaxform.page.scss'],
})
export class SubmittaxformPage {

 submitform=new submitform(); 
 subscription:Subscription;
 submitformm=[];
  toast:any;  

  key:string;
  constructor(private submitformServices:SubmittaxformService,
    private toastController: ToastController,
    private afAuth: AngularFireAuth,private route:ActivatedRoute ) { 

     this.key= this.route.snapshot.paramMap.get('key');
    
      
    //  if (this.key) this.submitformServices.get(this.key).valueChanges()
    //  .subscribe(p => {
     
    //   const obj=  Object.assign(this.submitform,p);     
    //       this.submitform=obj;
    //  });

     }


  async save(submitform){
    
    // this.afAuth.authState.subscribe(data=>{
    //   console.log(data.uid);
    //   submitform.entryby=data.uid;
    // });
  
    submitform.entrydate=new Date().getTime();

    
    
     //   submitform.key=this.key;
     //   this.submitformServices.update(this.key,submitform);
   
  submitform.key=this.key;
  await this.submitformServices.save(submitform).then(t=>{
    this.toast=  this.toastController.create({
      message:'verified',
      duration:2000
    }).then((toastData)=>{
      toastData.present();
    });
  });

   
     
   // this.submitform =new submitform();
    
  }

  HideToast(){
    this.toast = this.toastController.dismiss();
  }


  ngOnInit() {
   
  }

}
