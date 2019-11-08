import { Key } from 'protractor';

import { Component, OnInit } from '@angular/core';
import { UserInfosService } from "./../../services/user-infos.service";
import { Subscription } from "rxjs";
import { UserInfos } from '../../model/user-inofo';
@Component({
  selector: 'aprovepayment-list',
  templateUrl: './aprovepayment-list.page.html',
  styleUrls: ['./aprovepayment-list.page.scss'],
})
export class AprovepaymentListPage implements OnInit {
  subscription:Subscription
  userInfos:UserInfos[]=[];
  userInfosAfter:UserInfos[]=[];
  
  constructor( private userInfoService: UserInfosService) { 

    var allUserInfo = this.userInfoService.getAllUserInfos();
    this.subscription= allUserInfo.snapshotChanges().pipe().subscribe(item => {
      this.userInfos = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        if(y['approved']==true){
            y["key"] = element.key;                   
            this.userInfos.push(y as UserInfos);
        }  
      })
      console.log('userInfos',this.userInfos);
      const grouped =this.groupBy(this.userInfos, pet => pet.userUniCode);
    
      grouped.forEach(item=>{
      this.userInfosAfter.push(item[0]);

      });     
    //   this.userInfosAfter.forEach(item=>{
    //     this.userInfoAfterGroup.push(item);
      console.log('userInfosAfter',this.userInfosAfter);
    //  });
      });

  }

  ngOnInit() {

   
  }




 groupBy(list, keyGetter) {
          const map = new Map();
          list.forEach((item) => {
              const key = keyGetter(item);
              const collection = map.get(key);
              if (!collection) {
                  map.set(key, [item]);
              } else {
                  collection.push(item);
              }
          });
          return map;
      }

  getRowClass(row){

  }
  async open(row){
    
  }
}
