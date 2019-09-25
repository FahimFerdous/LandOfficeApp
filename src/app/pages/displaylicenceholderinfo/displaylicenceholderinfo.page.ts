import { Pourosova } from './../../model/pourosova';
import { UserInfosService } from './../../services/user-infos.service';
import { UserInfoPage } from './../user-info/user-info.page';
import { Licence } from './../../model/licence';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserInfos } from '../../model/user-inofo';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'displaylicenceholderinfo',
  templateUrl: './displaylicenceholderinfo.page.html',
  styleUrls: ['./displaylicenceholderinfo.page.scss'],
})
export class DisplaylicenceholderinfoPage implements OnInit,OnDestroy {
   pourosovaId;
   hatId;
   licenceId;
   subscription: Subscription;
  userInfos:UserInfos[];
  searchResultUserInfos:UserInfos[];
  searchResultFound:number;

  obj=new UserInfos();
  constructor(private route:ActivatedRoute,
    private userInfoService:UserInfosService,
    public actionSheetCtrl: ActionSheetController,
    private router:Router) {
  
   }

  ngOnInit() {
    this.pourosovaId = this.route.snapshot.paramMap.get('pourosovaId');
    this.hatId = this.route.snapshot.paramMap.get('hatId');
    this.licenceId = this.route.snapshot.paramMap.get('licenceId');
   
    var x = this.userInfoService.getAllUserInfos();
    this.subscription= x.snapshotChanges().pipe().subscribe(item => {
      this.userInfos = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        
        y["key"] = element.key;                   
                this.userInfos.push(y as UserInfos);
                
                  
      }); 

      

      if(this.pourosovaId !==undefined&&this.hatId!==undefined&&this.licenceId!==undefined){  
        this.searchResultUserInfos=[];
         let filteredUserInfo = (this.licenceId) ?
        this.userInfos.filter(p => p.pourosovaId.toLowerCase()
        .includes(this.pourosovaId.toLowerCase())&& p.hatId.toLowerCase()
        .includes(this.hatId.toLowerCase()) &&p.licenceNo.toLowerCase()
        .includes(this.licenceId.toLowerCase())) :
         this.userInfos;      
         this.searchResultUserInfos=filteredUserInfo;  
        this.searchResultFound=this.searchResultUserInfos.length;    
        console.log('beforSortsearchingUserInfos',this.searchResultUserInfos); 
         
        if (this.searchResultUserInfos.length!=0){
          this.searchResultUserInfos
          .sort((a, b) => new Date(b.entryDate).getTime()
           - new Date(a.entryDate).getTime());
           
          this.obj= this.searchResultUserInfos.shift();
          console.log('ob', this.obj);
   
         var dateObj = new Date(this.obj.entryDate);
         var month = dateObj.getUTCMonth() + 1; //months from 1-12
         var day = dateObj.getUTCDate();
         var year = dateObj.getUTCFullYear();

         var currentDateObj = new Date();         
         var currentyear = currentDateObj.getUTCFullYear();

         let bokeyaBosor=(currentyear-2000);
           let step1=(bokeyaBosor+1);
           let step2 =bokeyaBosor*step1;
           let step3=step2/32;
           let bokeyaDabirSud=step3*this.obj.halDabi;
           let motDabi=bokeyaDabirSud+step1*this.obj.halDabi;

           this.obj.motDabi=motDabi;
           this.obj.bokeyaBosor=bokeyaBosor;
           this.obj.bokeyaDabirSud=bokeyaDabirSud;
           this.obj.sorbosesKhajnaPorisodherBosor=`${year}`;
        }              
            
     }
     
      });


      

   
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.searchResultUserInfos=[];
  }

  async openSpeakerShare(speaker: any) {
   let userUniCode= this.obj.userUniCode;  
   let key=this.obj.key;
   
   console.log('userUniCode',userUniCode);
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'কিভাবে রশিদ পেতে চান ? ',
      buttons: [
        {
          text: 'ইমেইল',
          handler: () => {
            this.router.navigate(['/paymentprocedure/',1,userUniCode,key]
            );            
          }
        },
        {
          text: 'ডাকযোগে',
          handler: () => {
            this.router.navigate(['/paymentprocedure/',2,userUniCode,key]
            );            
          }
        },
        {
          text: 'উপজিলা বহুমি অফিস হতে',
          handler: () => {
            this.router.navigate(['/paymentprocedure/',3,userUniCode,key]
            );            
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

}
