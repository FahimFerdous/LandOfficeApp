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
  constructor(private route:ActivatedRoute,
    private userInfoService:UserInfosService,
    public actionSheetCtrl: ActionSheetController,
    private router:Router) {
  
   }

  ngOnInit() {
    this.pourosovaId = this.route.snapshot.paramMap.get('pourosovaId');
    this.hatId = this.route.snapshot.paramMap.get('hatId');
    this.licenceId = this.route.snapshot.paramMap.get('licenceId');
    this.userInfos = [];
    var x = this.userInfoService.getAllUserInfos();
    this.subscription= x.snapshotChanges().pipe().subscribe(item => {
      
      item.forEach(element => {
        var y = element.payload.toJSON();
        
        y["key"] = element.key;                   
                this.userInfos.push(y as UserInfos);
                
                  
      }); 

      

      if(this.pourosovaId !==undefined&&this.hatId!==undefined&&this.licenceId!==undefined){    
         let filteredUserInfo = (this.licenceId) ?
        this.userInfos.filter(p => p.pourosovaId.toLowerCase()
        .includes(this.pourosovaId.toLowerCase())&& p.hatId.toLowerCase()
        .includes(this.hatId.toLowerCase()) &&p.licenceNo.toLowerCase()
        .includes(this.licenceId.toLowerCase())) :
         this.userInfos;      
         this.searchResultUserInfos=filteredUserInfo;  
        this.searchResultFound=this.searchResultUserInfos.length;    
        console.log('beforSortsearchingUserInfos',this.searchResultUserInfos); 

        this.searchResultUserInfos.sort((a, b) => new Date(b.entryDate).getTime() - new Date(a.entryDate).getTime());
       let ob= this.searchResultUserInfos.shift();
       console.log('ob',ob);
        this.ob.forEach(data=>{
          
       
             var dateObj = new Date(data.entryDate);
             var month = dateObj.getUTCMonth() + 1; //months from 1-12
             var day = dateObj.getUTCDate();
             var year = dateObj.getUTCFullYear();

             console.log('last',year);
             var currentDateObj = new Date();
            // var month = dateObj.getUTCMonth() + 1; //months from 1-12
            // var day = dateObj.getUTCDate();
             var currentyear = currentDateObj.getUTCFullYear();
             console.log('currernty',currentyear);


             let bokeyaBosor=(currentyear-2017);
               let step1=(bokeyaBosor+1);
               let step2 =bokeyaBosor*step1;
               let step3=step2/32;
               let bokeyaDabirSud=step3*data.halDabi;
               let motDabi=bokeyaDabirSud+step1*data.halDabi;

               console.log('step1',step1);
               console.log('step2',step2);
               console.log('step3',step3);
               console.log('bokeyaDabirSud',bokeyaDabirSud);
               console.log('data.halDabi',data.halDabi);               
               console.log('motDabi',motDabi);

               data.motDabi=motDabi;

             

              
        })
     }
     
      });


      

   
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async openSpeakerShare(speaker: any) {
   let userUniCode= this.searchResultUserInfos[0].userUniCode;  
   let key=this.searchResultUserInfos[0].key;
   
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
