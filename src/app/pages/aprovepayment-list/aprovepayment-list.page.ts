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
  constructor( private userInfoService: UserInfosService) { }

  ngOnInit() {

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
  console.log(this.userInfos);

      });

  }

  getRowClass(row){

  }
  async open(row){
    
  }
}
