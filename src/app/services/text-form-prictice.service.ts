import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextFormPricticeService {
   tableName='TaxRecord';
  constructor(private db:AngularFireDatabase) {

   }
  update(productkey,product)
  {
    return this.db.object(`/${this.tableName}/`+productkey).update(product);
  }
  delete(productkey){
    return this.db.object(`/${this.tableName}/`+productkey).remove();
  }
  get(productkey) {
    return this.db.object(`/${this.tableName}/` + productkey);
  }

  save(submitform) {
    
   return this.db.list(`/${this.tableName}/`).push(submitform);
   //return this.db.list('/submitform').push(submitform);
 }
 
 getAllsubmittexform(){
   return this.db.list(`/${this.tableName}/`);
  //return this.db.list('/submitform');
 }

}
