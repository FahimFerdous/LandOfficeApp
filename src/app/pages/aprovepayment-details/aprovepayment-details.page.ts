import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfosService } from '../../services/user-infos.service';
import { Subscription } from 'rxjs';
import { UserInfos } from '../../model/user-inofo';
import { SubmittaxformService } from '../../submittaxform.service';
import { submitform } from '../../model/submitform';
import { ToastController } from '@ionic/angular';

//import { SubmittaxformService } from '../../../../submittaxform.service';


@Component({
  selector: 'aprovepayment-details',
  templateUrl: './aprovepayment-details.page.html',
  styleUrls: ['./aprovepayment-details.page.scss'],
})
export class AprovepaymentDetailsPage implements OnInit {
key:string;
subscription: Subscription;
  userInfos=new UserInfos();
  submitTaxForms:submitform[]=[];
  constructor(private route:ActivatedRoute,
    private userInfoService:UserInfosService,
    private submitTaxService:SubmittaxformService,
    private toastController: ToastController,
    private router:Router) { }

  ngOnInit() {
    this.key= this.route.snapshot.paramMap.get('key');
    console.log('key',this.key);
    var getAllSubmitTaxForm=this.submitTaxService.getAllsubmittexform();
    var getById = this.userInfoService.getByKey(this.key);

    this.subscription= getAllSubmitTaxForm.snapshotChanges().pipe().subscribe(item => {
      
      item.forEach(element => {
        var y = element.payload.toJSON();
       // y["key"] = element.key;                   
        this.submitTaxForms.push(y as submitform);
      });
     
console.log('submittedTaxForm',this.submitTaxForms);
    });

   

    this.subscription= getById.snapshotChanges().pipe().subscribe(item => {
      
      var y = item.payload.toJSON();
          y["key"] = item.key;                   
          this.userInfos=y as UserInfos;
          console.log(this.userInfos);
         if(this.submitTaxForms.length!=0){
        let result = this.submitTaxForms.find(f=> f.key ==this.userInfos.key);
        console.log(result);
          
            if(result!=undefined){
            this.userInfos.bkasNumber=result.bikashnumber;
            this.userInfos.transactionNo=result.tnsnumber;
            this.userInfos.trnxEntryDate=result.entrydate;
           }
            if(result==undefined){
              
                const toast=  this.toastController.create({
                  message:'Transaction Number does not Provide',
                  duration:2000
                }).then((toastData)=>{
                  toastData.present();
                });
              
            }
          }


    });
  }


  approved(userInfos){
    userInfos.approved=true;
    userInfos.approvedDate=new Date().getTime();
    userInfos.bokeyaDabi=(userInfos.motDabi-userInfos.prodottoTakarPoriman);
    console.log(userInfos['key'])
    this.userInfoService.update(userInfos['key'],userInfos).then(t=>{
      this.router.navigate(['/aprovepayment']);
    }) 
  }

}
