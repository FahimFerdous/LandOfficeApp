
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SubmittaxformService } from '../../submittaxform.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'taxform-display',
  templateUrl: './taxform-display.page.html',
  styleUrls: ['./taxform-display.page.scss'],
})
export class TaxformDisplayPage implements OnInit,OnDestroy {
  taxRecords=[];
  subscription:Subscription;
  constructor(private submitformServices:SubmittaxformService,) { }

  ngOnInit() {
    var confirmform=this.submitformServices.getAllsubmittexform();
 
    this.subscription=confirmform.snapshotChanges().pipe().subscribe(item=>{
      this.taxRecords=[];
      item.forEach(element=>{
       
        var y=element.payload.toJSON();
        y["key"]=element.key;
       // console.log(y);
        this.taxRecords.push(y);
        console.log(this.taxRecords);
      })
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  deleteR(taxrecord){
    this.submitformServices.delete(taxrecord.key);
  }
}
