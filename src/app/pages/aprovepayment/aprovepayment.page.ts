import { Component, OnInit } from '@angular/core';
import { UserInfosService } from '../../services/user-infos.service';
import { Subscription } from 'rxjs';
import { UserInfos } from '../../model/user-inofo';

@Component({
  selector: 'aprovepayment',
  templateUrl: './aprovepayment.page.html',
  styleUrls: ['./aprovepayment.page.scss'],
})
export class AprovepaymentPage implements OnInit {

  subscription: Subscription;
 userInfos:UserInfos[];

  constructor( private userInfoService:UserInfosService,
    ) { }

  ngOnInit() {
    var x = this.userInfoService.getAllUserInfos();
    this.subscription= x.snapshotChanges().pipe().subscribe(item => {
      this.userInfos = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        if(y['approved']==false){
            y["key"] = element.key;                   
            this.userInfos.push(y as UserInfos);
        }  
        
      });
      console.log(this.userInfos);
      
    });
  }

 


}
