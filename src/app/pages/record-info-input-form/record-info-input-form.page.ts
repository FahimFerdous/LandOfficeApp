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
  licences: Licence[];
  userInfo = new UserInfos();

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

  async save(userInfo: UserInfos) {
    if (!this.userCount.find(l => l.licenceNo == userInfo.licenceNo)) {
      userInfo.userUniCode = "vO00" + this.userCount.length;
      userInfo.entryDate = new Date().getTime();
      userInfo.approved = true;

      userInfo.halDabi = parseInt(userInfo.jomirPoriman) * 25;
      var currentDateObj = new Date();
      var currentyear = currentDateObj.getUTCFullYear();
      userInfo.bokeyaBosor =
        currentyear - parseInt(userInfo.sorbosesKhajnaPorisodherBosor);

      if (userInfo.bokeyaBosor == 0) {
        userInfo.bokeyaBosor = 1;
      }
      let step1 = userInfo.bokeyaBosor;
      //let step2 =userInfo.bokeyaBosor*step1;
      //let step3=step2/32;

      let tempsud = Math.round(userInfo.bokeyaDabi * 0.0625);

      let bokeyaDabirSud = tempsud * step1;
      //let motDabi=bokeyaDabirSud+step1*userInfo.halDabi;

      let motDabi =
        bokeyaDabirSud +
        parseInt(userInfo.bokeyaDabi) +
        parseInt(userInfo.halDabi);

      //this.obj.motDabi = motDabi + parseInt(this.obj.bokeyaDabi);
      //this.obj.motDabi = motDabi;

      // userInfo.sorbosesKhajnaPorisodherBosor=`${currentyear}`;
      userInfo.motDabi = motDabi;

      userInfo.bokeyaDabirSud = bokeyaDabirSud;

      //this.auth.appUid.subscribe(u=>userInfo.entryBy=u.uid);
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
}
