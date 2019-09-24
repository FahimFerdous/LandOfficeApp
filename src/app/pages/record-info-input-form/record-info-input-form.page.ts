import { UserInfosService } from './../../services/user-infos.service';
import { UserInfos } from './../../model/user-inofo';
import { Licence } from './../../model/licence';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pourosova } from '../../model/pourosova';
import { Hat } from '../../model/hat';
import { PourosovaService } from '../../services/pourosova.service';
import { HatService } from '../../services/hat.service';
import { LicenceService } from '../../services/licence.service';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'record-info-input-form',
  templateUrl: './record-info-input-form.page.html',
  styleUrls: ['./record-info-input-form.page.scss'],
})
// create user info page
export class RecordInfoInputFormPage implements OnInit ,OnDestroy{
  subscription: Subscription;
  pourosova:Pourosova[];
  hats:Hat[];
  licences:Licence[];
  userInfo=new UserInfos();

  userCount:UserInfos[];
  constructor(private pourosovaServices:PourosovaService,
    private hatService:HatService,
    private licenceServices:LicenceService,
    private toastController: ToastController,
    private userInfoService:UserInfosService,
    private auth:AuthService) { }

  ngOnInit() {
    var allPourosova = this.pourosovaServices.getAllPourosova();
    var allHat = this.hatService.getAllHat();
    var allLicence=this.licenceServices.getAllLicense();


    this.subscription= allPourosova.snapshotChanges().pipe().subscribe(item => {
      this.pourosova = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        
        y["key"] = element.key;                   
                this.pourosova.push(y as Pourosova);
                
                  
      });   
    
      });

      this.subscription= allHat.snapshotChanges().pipe().subscribe(item => {
        this.hats = [];
        item.forEach(element => {
          var y = element.payload.toJSON();
          
          y["key"] = element.key;                   
                  this.hats.push(y as Hat);
                    
        });   
      
        })

        this.subscription= allLicence.snapshotChanges().pipe().subscribe(item => {
          this.licences = [];
          item.forEach(element => {
            var y = element.payload.toJSON();
            
            y["key"] = element.key;                   
                    this.licences.push(y as Licence);
                    
                      
          });   
        
          });


        
          var x = this.userInfoService.getAllUserInfos();
          this.subscription= x.snapshotChanges().pipe().subscribe(item => {
            this.userCount=[];
            
            item.forEach(element => {
              var y = element.payload.toJSON();
              
              y["key"] = element.key;                   
                      this.userCount.push(y as UserInfos);
                      
                        
            }); 
      
            console.log('userInfo',this.userCount);
           
          });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  async save(userInfo){
   
    userInfo.userUniCode='vO00'+this.userCount.length;
    console.log('userInfo',this.userCount);
    userInfo.entryDate = new Date().getTime();
    userInfo.approved=true;
    //this.auth.appUid.subscribe(u=>userInfo.entryBy=u.uid);
   
    await this.userInfoService.save(userInfo).then(t=>{
      const toast=  this.toastController.create({
        message:'Saved Succesfully',
        duration:2000
      }).then((toastData)=>{
        toastData.present();
      });
    });
     
    this.userInfo=new UserInfos();
    
  }

}
