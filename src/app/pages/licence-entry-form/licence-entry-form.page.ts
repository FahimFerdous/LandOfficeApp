import { Hat } from './../../model/hat';
import { HatService } from './../../services/hat.service';
import { PourosovaService } from './../../services/pourosova.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pourosova } from '../../model/pourosova';
import { Licence } from '../../model/licence';
import { LicenceService } from '../../services/licence.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'licence-entry-form',
  templateUrl: './licence-entry-form.page.html',
  styleUrls: ['./licence-entry-form.page.scss'],
})
export class LicenceEntryFormPage implements OnInit,OnDestroy {
  subscription: Subscription;
  pourosova:Pourosova[];
  hats:Hat[];
  licence=new Licence();
  searchHats: Hat[];

  constructor(private pourosovaServices:PourosovaService,
    private hatService:HatService,
    private licenceServices:LicenceService,
    private toastController: ToastController) { }

  ngOnInit() {
    var x = this.pourosovaServices.getAllPourosova();
    var hatInfos = this.hatService.getAllHat();
    this.subscription= x.snapshotChanges().pipe().subscribe(item => {
      this.pourosova = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        
        y["key"] = element.key;                   
                this.pourosova.push(y as Pourosova);
                
                  
      });   
    
      });

      this.subscription= hatInfos.snapshotChanges().pipe().subscribe(item => {
        this.hats = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          
          y["key"] = element.key;                   
                  this.hats.push(y as Hat);
                    
        });   
      
        })

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

 
  async save(licence){
    console.log(licence);
    await this.licenceServices.save(licence).then(t=>{
      const toast=  this.toastController.create({
        message:'Saved Succesfully',
        duration:2000
      }).then((toastData)=>{        
        toastData.present();
      });
    });

    this.licence=new Licence();
    
  }

  pourosovaDDLChange(pourosovaId){
    this.searchHats=[];
    let filterHats = (pourosovaId) ?
       this.hats.filter(p => p.pourosovaId.toLowerCase().includes(pourosovaId.toLowerCase())):
        this.hats;      
        this.searchHats=filterHats;
       
  }
}
