import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubmittaxformService } from '../../submittaxform.service';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'paymentprocedure',
  templateUrl: './paymentprocedure.page.html',
  styleUrls: ['./paymentprocedure.page.scss'],
})
export class PaymentprocedurePage implements OnInit {
  id:string;
  constructor(private route:ActivatedRoute,
   private submittaxformService: SubmittaxformService,
   private authServic:AuthService ,
   private afAuth: AngularFireAuth, ) { 

  }

  ngOnInit() {
  }


  typeofGettingRecit(){

    let gettingReciType={paymentTypeName:'',userId:'',entryDate:0};
      this.id= this.route.snapshot.paramMap.get('id');
      if(this.id=='1'){
        gettingReciType.paymentTypeName='ইমেইল';
      }
      if(this.id=='2'){
        gettingReciType.paymentTypeName='ডাকযোগে';
      }
      if(this.id=='3'){
        gettingReciType.paymentTypeName='উপজিলা বহুমি অফিস হতে';
      }
     
      //console.log(this.afAuth.authState)
      this.authServic.appUid.subscribe(data=>{
      gettingReciType.userId=data.uid;
      gettingReciType.entryDate = new Date().getTime();
      this.submittaxformService.saveGettingRecitType(gettingReciType).then(success=>{       
      })
      })


   
  }


}
