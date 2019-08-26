import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserInfosService {

  constructor(private db: AngularFireDatabase) { }

 async save(userInfo) {
    
    return await this.db.list('/userInofs').push(userInfo);
  }
  
  getAllPourosova(){
    return this.db.list('/userInofs');
  }
}
