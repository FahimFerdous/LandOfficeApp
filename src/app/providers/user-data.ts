import { Injectable } from '@angular/core';
import { Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase'; 
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class UserData {
  _favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
  userData:any;
  constructor(
    public events: Events,
    public storage: Storage,
    private db: AngularFireDatabase,
    private af:AngularFireAuth,
    private auth:AuthService
    ) {  this.userData=firebase.database().ref('/users');}

  hasFavorite(sessionName: string): boolean {
    return (this._favorites.indexOf(sessionName) > -1);
  }

  addFavorite(sessionName: string): void {
    this._favorites.push(sessionName);
  }

  removeFavorite(sessionName: string): void {
    const index = this._favorites.indexOf(sessionName);
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  }

  login(login): Promise<any> {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUsername(login.username);
    
    
      this.auth.signIn(login.email,login.password).then(success=>{
            console.log('login success',success.user);
      }).catch(error=>{
        alert(error.message);
      });
      return this.events.publish('user:login');
    });
  }

  signup(signUpObj): Promise<any> {
 
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.af.auth
      .createUserWithEmailAndPassword(signUpObj.email,
        signUpObj.password).then( newUser => {      
         this.userData.child(newUser.user.uid).update({
           fullName: signUpObj.username,
           email: signUpObj.email,
           password: signUpObj.password,
           mobile:signUpObj.mobile       
         });
        });
      this.setUsername(signUpObj.username);
      return this.events.publish('user:signup');
    });
  }

  logout(): Promise<any> {
    return this.storage.remove(this.HAS_LOGGED_IN).then(() => {
      return this.storage.remove('username');
    }).then(() => {
      this.events.publish('user:logout');
    });
  }

  setUsername(username): Promise<any> {

    return this.storage.set('username', username);
  }

  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  }

  isLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  }

  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    });
  }
}
