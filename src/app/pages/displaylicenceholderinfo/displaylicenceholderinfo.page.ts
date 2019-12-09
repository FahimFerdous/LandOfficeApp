import { Pourosova } from "./../../model/pourosova";
import { UserInfosService } from "./../../services/user-infos.service";
import { UserInfoPage } from "./../user-info/user-info.page";
import { Licence } from "./../../model/licence";
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { UserInfos } from "../../model/user-inofo";
import { ActionSheetController } from "@ionic/angular";
import { SudCalculation } from "../../model/sudCalculation";
import { HatService } from '../../services/hat.service';
import { Hat } from '../../model/hat';

@Component({
  selector: "displaylicenceholderinfo",
  templateUrl: "./displaylicenceholderinfo.page.html",
  styleUrls: ["./displaylicenceholderinfo.page.scss"]
})
export class DisplaylicenceholderinfoPage implements OnInit, OnDestroy {
  pourosovaId;
  hatId;
  licenceId;
  subscription: Subscription;
  userInfos: UserInfos[];
  searchResultUserInfos: UserInfos[];
  searchResultFound: number;
  hats:Hat[];
  obj = new UserInfos();
  hatObj=new Hat();
  sudCalculation = new SudCalculation();
  constructor(
    private route: ActivatedRoute,
    private hatService:HatService,
    private userInfoService: UserInfosService,
    public actionSheetCtrl: ActionSheetController,
    private router: Router
  ) {}

  ngOnInit() {
    this.pourosovaId = this.route.snapshot.paramMap.get("pourosovaId");
    this.hatId = this.route.snapshot.paramMap.get("hatId");
    this.licenceId = this.route.snapshot.paramMap.get("licenceId");

    
    

    var x = this.userInfoService.getAllUserInfos();
    this.subscription = x
      .snapshotChanges()
      .pipe()
      .subscribe(item => {
        this.userInfos = [];
        item.forEach(element => {
          var y = element.payload.toJSON();

          if (y["approved"] == true) {
            y["key"] = element.key;
            this.userInfos.push(y as UserInfos);
          }
        });

      

        if (
          this.pourosovaId !== undefined &&
          this.hatId !== undefined &&
          this.licenceId !== undefined
        ) {
          this.searchResultUserInfos = [];
          let filteredUserInfo = this.licenceId
            ? this.userInfos.filter(
                p =>
                  p.pourosovaId
                    .toLowerCase()
                    .includes(this.pourosovaId.toLowerCase()) &&
                  p.hatId.toLowerCase().includes(this.hatId.toLowerCase()) &&
                  p.licenceNo == this.licenceId
              )
            : this.userInfos;
          this.searchResultUserInfos = filteredUserInfo;
          this.searchResultFound = this.searchResultUserInfos.length;

          if (this.searchResultUserInfos.length != 0) {
            this.searchResultUserInfos.sort(
              (a, b) =>
                new Date(b.entryDate).getTime() -
                new Date(a.entryDate).getTime()
            );

            this.obj = this.searchResultUserInfos.shift();

           
            // this.hatService.getAllHat()
            // .snapshotChanges()
            // .pipe()
            // .subscribe(item => {
            //   this.hats = [];
            //   item.forEach(element => {
            //     var y = element.payload.toJSON();
      
            //     if (y["approved"] == true) {
            //       y["key"] = element.key;
            //       this.hats.push(y as Hat);
            //     }
            //   });
            //   this.hatObj=this.hats.find(element => element.key == this.hatId);
            //   this.obj.licenceFee=this.hatObj.suderHar;
            //   console.log('hats', this.hats);
            //   console.log('hat id',this.hatId);
            //  });


          console.log(this.obj);
           
      // console.log('from sud displayLicence page',this.obj.licenceFee);
            this.obj = this.sudCalculation.SudCalculationActionHandaler(
              this.obj
            );
          }
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.searchResultUserInfos = [];
  }

  async openSpeakerShare(speaker: any) {
    let userUniCode = this.obj.userUniCode;
    let motDabi = this.obj.motDabi;
    let key = this.obj.key;

    console.log("userUniCode", userUniCode);
    const actionSheet = await this.actionSheetCtrl.create({
      header: "কিভাবে রশিদ পেতে চান ? ",
      buttons: [
        {
          text: "ইমেইল",
          handler: () => {
            this.router.navigate([
              "/paymentprocedure/",
              1,
              userUniCode,
              key,
              motDabi
            ]);
          }
        },
        {
          text: "ডাকযোগে",
          handler: () => {
            this.router.navigate([
              "/paymentprocedure/",
              2,
              userUniCode,
              key,
              motDabi
            ]);
          }
        },
        {
          text: "উপজেলা ভূমি অফিস হতে",
          handler: () => {
            this.router.navigate([
              "/paymentprocedure/",
              3,
              userUniCode,
              key,
              motDabi
            ]);
          }
        },
        {
          text: "Cancel",
          role: "cancel"
        }
      ]
    });

    await actionSheet.present();
  }
}
