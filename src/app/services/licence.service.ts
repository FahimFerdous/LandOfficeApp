import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class LicenceService {
 
  constructor(private db: AngularFireDatabase) { }

  async save(licence) {
    
    return await this.db.list('/licenceNo').push(licence);
  }
}
