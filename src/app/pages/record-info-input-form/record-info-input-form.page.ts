import { UserInfosService } from "./../../services/user-infos.service";
import { UserInfos } from "./../../model/user-inofo";
import { Licence } from "./../../model/licence";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Pourosova } from "../../model/pourosova";
import { Hat } from "../../model/hat";
import { PourosovaService } from "../../services/pourosova.service";
import { HatService } from "../../services/hat.service";
import { LicenceService } from "../../services/licence.service";
import { ToastController } from "@ionic/angular";
import { AuthService } from "../../services/auth.service";
import { SudCalculation } from '../../model/sudCalculation';

@Component({
  selector: "record-info-input-form",
  templateUrl: "./record-info-input-form.page.html",
  styleUrls: ["./record-info-input-form.page.scss"]
})
// create user info page
export class RecordInfoInputFormPage implements OnInit, OnDestroy {
  subscription: Subscription;
  pourosova: Pourosova[];

  hats: Hat[];
  searchHats: Hat[];

  licences: Licence[];
  searchLicences: Licence[];

  userInfo = new UserInfos();
  
  sudCalculation=new SudCalculation();

  userCount: UserInfos[];
  constructor(
    private pourosovaServices: PourosovaService,
    private hatService: HatService,
    private licenceServices: LicenceService,
    private toastController: ToastController,
    private userInfoService: UserInfosService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    var allPourosova = this.pourosovaServices.getAllPourosova();
    var allHat = this.hatService.getAllHat();
    var allLicence = this.licenceServices.getAllLicense();

    this.subscription = allPourosova
      .snapshotChanges()
      .pipe()
      .subscribe(item => {
        this.pourosova = [];
        item.forEach(element => {
          var y = element.payload.toJSON();

          y["key"] = element.key;
          this.pourosova.push(y as Pourosova);
        });
      });

    this.subscription = allHat
      .snapshotChanges()
      .pipe()
      .subscribe(item => {
        this.hats = [];
        item.forEach(element => {
          var y = element.payload.toJSON();

          y["key"] = element.key;
          this.hats.push(y as Hat);
        });
      });

    this.subscription = allLicence
      .snapshotChanges()
      .pipe()
      .subscribe(item => {
        this.licences = [];
        item.forEach(element => {
          var y = element.payload.toJSON();

          y["key"] = element.key;
          this.licences.push(y as Licence);
        });
      });

    var x = this.userInfoService.getAllUserInfos();
    this.subscription = x
      .snapshotChanges()
      .pipe()
      .subscribe(item => {
        this.userCount = [];

        item.forEach(element => {
          var y = element.payload.toJSON();
          if (!y["key"]) {
            y["key"] = element.key;
            this.userCount.push(y as UserInfos);
          }
        });

        console.log("userInfo", this.userCount);
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  converBanglaNumberToEnglish(input) {
    var numbers = {
      "০": 0,
      "১": 1,
      "২": 2,
      "৩": 3,
      "৪": 4,
      "৫": 5,
      "৬": 6,
      "৭": 7,
      "৮": 8,
      "৯": 9
    };

    var output = [];
    for (var i = 0; i < input.length; ++i) {
      if (numbers.hasOwnProperty(input[i])) {
        output.push(numbers[input[i]]);
      } else {
        output.push(input[i]);
      }
    }
    return output.join("");
  }

  async save(userInfo: UserInfos) {
    if (!this.userCount.find(l => l.licenceNo == userInfo.licenceNo)) {
      userInfo.userUniCode = "vO00" + this.userCount.length;
      userInfo.entryDate = new Date().getTime();
      userInfo.approved = true;
      
      userInfo.jomirPoriman=this.converBanglaNumberToEnglish(userInfo.jomirPoriman);
      userInfo.bokeyaDabi=this.converBanglaNumberToEnglish(userInfo.bokeyaDabi);
      userInfo.sorbosesKhajnaPorisodherBosor = this.converBanglaNumberToEnglish(
        userInfo.sorbosesKhajnaPorisodherBosor
      );

      var hatObj=this.hats.find(element => element.key ==userInfo.hatId);
      userInfo.licenceFee=hatObj.suderHar;
      console.log('from sud input page',userInfo.licenceFee);

      userInfo= this.sudCalculation.SudCalculationActionHandaler(userInfo);  
      await this.userInfoService.save(userInfo).then(t => {
        const toast = this.toastController
          .create({
            message: "Saved Succesfully",
            duration: 2000
          })
          .then(toastData => {
            toastData.present();
          });
      });
      this.userInfo = new UserInfos();
    } else {
      const toast = this.toastController
        .create({
          message: "This Licence Number Already Assign to Another User",
          duration: 2000
        })
        .then(toastData => {
          toastData.present();
        });
    }
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
}
