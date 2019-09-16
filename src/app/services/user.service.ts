import { AppUser } from './../model/app-user';

import { AngularFireAuth } from '@angular/fire/auth';
//import { AngularFireDatabase, FirebaseObjectObservable } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase'; 

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable,of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  userData:any;
  

  constructor(private db: AngularFireDatabase,private af:AngularFireAuth ,private router:Router) {
    this.userData=firebase.database().ref('/users');
   }

   getAllUsers() { 
    return this.db.list('/users');
  }
  
  

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

   signUp(registrationForm){

   return this.af.auth
   .createUserWithEmailAndPassword(registrationForm.email,
    registrationForm.password).then( newUser => {      
      this.userData.child(newUser.user.uid).update({
        fullName: registrationForm.name,
        email: registrationForm.email,
        password: registrationForm.password,
        termsNcondition:registrationForm.termsNcondition       
      });
    });
   }

 
    UserSignUp(registrationForm){

      return this.af.auth
      .createUserWithEmailAndPassword(registrationForm.email,
       registrationForm.password).then( newUser => {      
         this.userData.child(newUser.user.uid).update({
           fullName: registrationForm.name,
           email: registrationForm.email,
           password: registrationForm.password,       
           
           address:registrationForm.address,
           mobile:registrationForm.mobile,
           isUser:registrationForm.isUser,
           inistituteName:registrationForm.inistituteName
         });
       });
      }
  get(uid: string) { 
    return this.db.object('/users/' + uid);
  }
  
  gett(u:string): Observable<AppUser> {
    return this.db.object('/users/' + "/" + u).valueChanges().pipe(
        catchError(err => of(null))
    );
  }
}
