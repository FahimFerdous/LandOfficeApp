import { Addemp } from './../model/AddEmploye';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AddempinfoService {

  constructor( private db:AngularFireDatabase)
  {}
  save(Addemp) 
  {
   
    return this.db.list('/Addemp').push(Addemp);
  }
}