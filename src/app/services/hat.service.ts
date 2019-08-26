import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class HatService {

  constructor(private db: AngularFireDatabase) { }

  save(pourosova) {
    
    return this.db.list('/hat').push(pourosova);
  }

  getAllHat(){
    return this.db.list('/hat');
  }

}
