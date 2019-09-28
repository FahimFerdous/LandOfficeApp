import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInfosService } from '../../services/user-infos.service';
import { Subscription } from 'rxjs';
import { UserInfos } from '../../model/user-inofo';

@Component({
  selector: 'aprovepayment-details',
  templateUrl: './aprovepayment-details.page.html',
  styleUrls: ['./aprovepayment-details.page.scss'],
})
export class AprovepaymentDetailsPage implements OnInit {
key:string;
subscription: Subscription;
  userInfos=new UserInfos();
  constructor(private route:ActivatedRoute,
    private userInfoService:UserInfosService) { }

  ngOnInit() {
    this.key= this.route.snapshot.paramMap.get('key');
    console.log('key',this.key);
    var x = this.userInfoService.getByKey(this.key);
    this.subscription= x.snapshotChanges().pipe().subscribe(item => {
      
      var y = item.payload.toJSON();
          y["key"] = item.key;                   
          this.userInfos=y as UserInfos;
console.log(this.userInfos);
    });
  }

}
