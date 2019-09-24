import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubmittaxformService } from '../../submittaxform.service';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInfosService } from '../../services/user-infos.service';
import { UserInfos } from '../../model/user-inofo';
import { Key } from 'protractor';


@Component({
  selector: 'paymentprocedure',
  templateUrl: './paymentprocedure.page.html',
  styleUrls: ['./paymentprocedure.page.scss'],
})
export class PaymentprocedurePage implements OnInit {
  id:string;
  userInfo:UserInfos[]=[];
  key:string;
  constructor(private route:ActivatedRoute,
   private submittaxformService: SubmittaxformService,
   private userInfoService:UserInfosService,
   private authServic:AuthService ,
   private afAuth: AngularFireAuth, ) { 

  }

  ngOnInit() {

    this.key= this.route.snapshot.paramMap.get('key');
    
    this.userInfoService.getByKey(this.key).snapshotChanges().pipe().subscribe(d=>{
     
      var x= d.payload.toJSON();
      x['key']=d.key;
      this.userInfo.push(x as UserInfos);
     
    })
  }


  typeofGettingRecit(){

    let gettingReciType={paymentTypeName:'',userUniCode:'',entryDate:0};
      this.id= this.route.snapshot.paramMap.get('id');
    let userUniCode= this.route.snapshot.paramMap.get('userUniCode');
  
      if(this.id=='1'){
        gettingReciType.paymentTypeName='ইমেইল';
      }
      if(this.id=='2'){
        gettingReciType.paymentTypeName='ডাকযোগে';
      }
      if(this.id=='3'){
        gettingReciType.paymentTypeName='উপজিলা বহুমি অফিস হতে';
      }

      gettingReciType.userUniCode=userUniCode;
      let obj= this.userInfo.find(f=>f.key==this.key);

      var dateObj = new Date(obj.entryDate);
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();

      var currentDateObj = new Date();
      var currentyear = currentDateObj.getUTCFullYear();

        let bokeyaBosor=(currentyear-2017);
        let step1=(bokeyaBosor+1);
        let step2 =bokeyaBosor*step1;
        let step3=step2/32;
        let bokeyaDabirSud=step3*obj.halDabi;
        let motDabi=bokeyaDabirSud+step1*obj.halDabi;

        obj.motDabi=motDabi;
        obj.entryDate=new Date().getTime();
        obj.approved=false;
        console.log('obj',obj);

      
        this.userInfoService.save(obj).then(t=>{})

      gettingReciType.entryDate = new Date().getTime();
      this.submittaxformService.saveGettingRecitType(gettingReciType).then(success=>{       
       })
     // })


   
  }


}
