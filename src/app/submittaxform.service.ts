import { submitform } from './model/submitform';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {  catchError } from 'rxjs/operators';
import {  of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubmittaxformService {

  getTempUserInfo(userUniCode:string) {
    return this.db.list('/tempUserInfoForPayment/', ref => ref
    .orderByChild('userUniCode')
    .equalTo(userUniCode))
    .snapshotChanges()
    .pipe(catchError(err => of(null)));
  }

  update(productId, product) {
    return this.db.object('/submitform/' + productId).update(product);
  }
  get(productId) {
    return this.db.object('/submitform/' + productId);
  }
  delete(productId) {
    return this.db.object('/submitform/' + productId).remove();
  }

  constructor(private db: AngularFireDatabase) {
        
  }

 async save(submitform) {
   
   return this.db.list('/submitform').push(submitform);
 }
 
 getAllsubmittexform(){
  return this.db.list('/submitform');
 }

 saveGettingRecitType(obj) {
   
  return this.db.list('/GettingRecitType').push(obj);
}

}
