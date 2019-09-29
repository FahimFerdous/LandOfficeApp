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
empInfos=[];
subscription:Subscription;

  constructor(private Addemp:AddempinfoService) { }

  ngOnInit() {
  var empFormdata=this.Addemp.getAllAddempform();
 
  this.subscription=empFormdata.snapshotChanges().pipe().subscribe(item=>{
   this.empInfos=[];
   item.forEach(element=>{
     var y=element.payload.toJSON();
     y["key"]=element.key;
     this.empInfos.push(y);
     
   });
   console.log(this.empInfos);
  });
  }


}
