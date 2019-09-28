import { Subscription } from 'rxjs';
import { AddempinfoService } from './../../services/addempinfo.service';
import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'employees-info',
  templateUrl: './employees-info.page.html',
  styleUrls: ['./employees-info.page.scss'],
})
export class EmployeesInfoPage implements OnInit {
textRecords=[];
subscription:Subscription;

  constructor(private Addemp:AddempinfoService) { }

  ngOnInit() {
  var empFormdata=this.Addemp.getAllAddempform();
  console.log(empFormdata);
  this.subscription=empFormdata.snapshotChanges().pipe().subscribe(item=>{
   this.textRecords=[];
   item.forEach(element=>{
     var y=element.payload.toJSON();
     y["key"]=element.key;
     this.textRecords.push(y);
     console.log(this.textRecords);
   });
  });
  }


}
