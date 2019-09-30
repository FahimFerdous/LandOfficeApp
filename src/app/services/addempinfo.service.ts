import { Addemp } from './../model/AddEmploye';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, finalize, catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AddempinfoService {
  
  task:AngularFireUploadTask;
  percentage:Observable<number>;
  snapshot:Observable<any>;
  toast:any;  
  constructor( private db:AngularFireDatabase,
    private storage:AngularFireStorage,
    private toastController: ToastController,)
  {}
  save(Addemp) 
  {
   
    return this.db.list('/Addemp').push(Addemp);
  }
  getAllAddempform(){
    return this.db.list('/Addemp');
   }


   startUpLoad(empInfo: Addemp){
    
    const path=`Addemp/${Date.now()}_${empInfo.imageUrlFile.name}`;
    empInfo.imageUrlName=`${Date.now()}_${empInfo.imageUrlFile.name}`;
    const ref=this.storage.ref(path);
    
    this.task=this.storage.upload(path,empInfo.imageUrlFile);
 

    this.percentage=this.task.percentageChanges();
 
   
    this.snapshot=this.task.snapshotChanges().pipe(
      finalize(async()=>{
        await ref.getDownloadURL().toPromise().then(t=>{
           
          empInfo.imageUrl=t;
          console.log(empInfo.imageUrl);
          console.log(empInfo);
          this.db.list(`Addemp/`).push(empInfo).then(t=>{
                this.toast=  this.toastController.create({
                  message:'Save Successfully !',
                  duration:2000
                 }).then((toastData)=>{
                    toastData.present();
                    });
               });;
          });
      }),
    );
        
    this.snapshot.subscribe(d=>{})
  }

}