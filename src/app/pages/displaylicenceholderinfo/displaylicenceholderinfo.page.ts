import { Pourosova } from './../../model/pourosova';
import { UserInfosService } from './../../services/user-infos.service';
import { UserInfoPage } from './../user-info/user-info.page';
import { Licence } from './../../model/licence';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserInfos } from '../../model/user-inofo';

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
  constructor(private route:ActivatedRoute,private userInfoService:UserInfosService) {
    console.log('constructorCalled',this.userInfos);
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
     }
     
      });


      

   
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
