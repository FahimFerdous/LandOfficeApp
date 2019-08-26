import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class PourosovaService {

  constructor(private db: AngularFireDatabase) {

   }

   save(pourosova) {
    
    return this.db.list('/pourosova').push(pourosova);
  }
  
  getAllPourosova(){
    return this.db.list('/pourosova');
  }

}
