import { Pourosova } from './../../model/pourosova';
import { HatService } from './../../services/hat.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hat } from '../../model/hat';
import { Subscription } from 'rxjs';
import { PourosovaService } from '../../services/pourosova.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'hat-entry-form',
  templateUrl: './hat-entry-form.page.html',
  styleUrls: ['./hat-entry-form.page.scss'],
})
export class HatEntryFormPage implements OnInit,OnDestroy {
hat=new Hat();
subscription: Subscription;
pourosova:Pourosova[];

  constructor(private pourosovaServices:PourosovaService,
    private hatServices:HatService,private toastController: ToastController) { }

  ngOnInit() {
    var allPourosova = this.pourosovaServices.getAllPourosova();
    
    this.subscription= allPourosova.snapshotChanges().pipe().subscribe(item => {
     
      
      this.pourosova = [];
      item.forEach(element => {
       
        var y = element.payload.toJSON();
        
        y["key"] = element.key;  
        
        console.log(y);
                this.pourosova.push(y as Pourosova);
                  
      });   
    
      })

  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }




  async save(hat){
    console.log(hat);
    await this.hatServices.save(hat).then(t=>{
      const toast=  this.toastController.create({
        message:'Saved Succesfully',
        duration:2000
      }).then((toastData)=>{        
        toastData.present();
      });
    });

    this.hat=new Hat();
    
  }
}

