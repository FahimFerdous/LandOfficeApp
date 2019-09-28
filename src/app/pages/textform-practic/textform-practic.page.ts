import { SubmittaxformService } from './../../../../submittaxform.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';

import { submitform } from './../../model/submitform';
import { TextFormPricticeService } from './../../services/text-form-prictice.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'textform-practic',
  templateUrl: './textform-practic.page.html',
  styleUrls: ['./textform-practic.page.scss'],
})
export class TextformPracticPage implements OnInit,OnDestroy {
  
  subscription:Subscription;
  submitform=new submitform();
  subformarrays=[];
  key:string;
  constructor( private textformservice:TextFormPricticeService)
    {
      
     
    }
    ngOnInit() {
    var alldata=this.textformservice.getAllsubmittexform();
    
    this.subscription=alldata.snapshotChanges().pipe().subscribe(item=>{
      this.subformarrays=[];
      

      
      item.forEach(element=>{
       var jsondata= element.payload.toJSON();
            jsondata["key"]=element.key;
            this.subformarrays.push(jsondata);
            
      })
    });

    }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    
  }
  delete(taxrecord){
    this.textformservice.delete(taxrecord.key);
  }

}
