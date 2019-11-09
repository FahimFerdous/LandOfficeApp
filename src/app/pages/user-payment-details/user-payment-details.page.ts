import { Component, OnInit } from '@angular/core';
import { UserInfosService } from "./../../services/user-infos.service";
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserInfos } from '../../model/user-inofo';
@Component({
  selector: 'user-payment-details',
  templateUrl: './user-payment-details.page.html',
  styleUrls: ['./user-payment-details.page.scss'],
})
export class UserPaymentDetailsPage implements OnInit {
key:string;
subsription:Subscription;
userInfo=new UserInfos();
  constructor(private userInfoService: UserInfosService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.key= this.route.snapshot.paramMap.get('key');
    console.log('key',this.key);
    var UserInfoById = this.userInfoService.getByKey(this.key);
    this.subsription= UserInfoById.snapshotChanges().pipe().subscribe(item => {
      var y = item.payload.toJSON();
      y["key"] = item.key;                   
      this.userInfo=y as UserInfos;
      console.log('userInfos',this.userInfo);
    });
   
  }

}
