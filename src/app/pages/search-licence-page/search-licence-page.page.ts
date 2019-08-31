import { Licence } from './../../model/licence';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pourosova } from '../../model/pourosova';
import { Hat } from '../../model/hat';
import { PourosovaService } from '../../services/pourosova.service';
import { HatService } from '../../services/hat.service';
import { LicenceService } from '../../services/licence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'search-licence-page',
  templateUrl: './search-licence-page.page.html',
  styleUrls: ['./search-licence-page.page.scss'],
})
export class SearchLicencePagePage implements OnInit,OnDestroy {

  subscription: Subscription;
  pourosova:Pourosova[];
  hats:Hat[];
  licences:Licence[];

  searchHats:Hat[];
  searchLicences:Licence[];

  licence=new Licence();

  constructor(private pourosovaServices:PourosovaService,
    private hatService:HatService,
    private licenceServices:LicenceService,private router:Router) {
     }

  ngOnInit() {
    var allPourosova = this.pourosovaServices.getAllPourosova();
    var allHats = this.hatService.getAllHat();
    
    var allLicence=this.licenceServices.getAllLicense();
    this.pourosova = [];
    this.hats = [];
    this.licences = [];
        this.subscription= allPourosova.snapshotChanges().pipe().subscribe(item => {
          
          item.forEach(element => {
            var y = element.payload.toJSON();
            
            y["key"] = element.key;                   
                    this.pourosova.push(y as Pourosova);
                    
                      
          });   
        
          });

        this.subscription= allHats.snapshotChanges().pipe().subscribe(item => {
           
            item.forEach(element => {
              var y = element.payload.toJSON();
              
              y["key"] = element.key;                   
                      this.hats.push(y as Hat);
                      
               });   
           
            })

            this.subscription= allLicence.snapshotChanges().pipe().subscribe(item => {
             
              item.forEach(element => {
                var y = element.payload.toJSON();
                
                y["key"] = element.key;                   
                        this.licences.push(y as Licence);
                      
              });   
            
              })

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  pourosovaDDLChange(pourosovaId){
    this.searchHats=[];
    this.searchLicences=[];
    let filterHats = (pourosovaId) ?
       this.hats.filter(p => p.pourosovaId==pourosovaId):
        this.hats;      
        this.searchHats=filterHats;
       
  }

  hatDDLChange(hatId){
    this.searchLicences=[];
    let filterLicence = (hatId) ?
       this.licences.filter(p => p.hatId==hatId) :
        this.licences;      
        this.searchLicences=filterLicence;
       
  }
 

  search(licence:Licence){
     
 // const v=   this.router.navigate(['/displaylicenceholderinfo/'], { queryParams: { pourosovaId: licence.pourosovaId } });
  //console.log(v);
  }
 

}
