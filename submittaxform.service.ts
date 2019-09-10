import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class SubmittaxformService {

  constructor(private db: AngularFireDatabase) {
        
  }

  save(submitform) {
   
   return this.db.list('/TaxRecord').push(submitform);
 }
 
 getAllsubmittexform(){
  return this.db.list('/TaxRecord');
 }


 deleteTaxRecord(key: string) {
  return this.db.list(`TaxRecord/`).remove(key);
}

update(key, obj) {
  return this.db.object('/TaxRecord/' + key).update(obj);
 }

 getTaxRecordById(key){
  return this.db.object('/TaxRecord/'+key);
}


}
