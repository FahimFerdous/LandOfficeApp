import { submitform } from './model/submitform';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class SubmittaxformService {

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

  save(submitform) {
   
   return this.db.list('/submitform').push(submitform);
 }
 
 getAllsubmittexform(){
  return this.db.list('/submitform');
 }


}
