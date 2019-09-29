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

  update(key, userInfo) {
    return this.db.object('/userInofs/' + key).update(userInfo);
  }
  
  getAllUserInfos(){
    return this.db.list('/userInofs');
  }

  getByKey(key) {    
    return this.db.object('/userInofs/'+ key);
  }
}
