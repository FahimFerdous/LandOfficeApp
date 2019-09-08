import { submitform } from './model/submitform';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class SubmittaxformService {

  constructor(private db: AngularFireDatabase) {
        
  }

  save(submitform) {
   
   return this.db.list('/submitform').push(submitform);
 }
 
 getAllsubmittexform(){
  return this.db.list('/submitform');
 }


}
