import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SubmittaxformService } from "../../submittaxform.service";
import { AuthService } from "../../services/auth.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { UserInfosService } from "../../services/user-infos.service";
import { UserInfos } from "../../model/user-inofo";
import { Key } from "protractor";
import { SudCalculation } from '../../model/sudCalculation';

@Component({
  selector: "paymentprocedure",
  templateUrl: "./paymentprocedure.page.html",
  styleUrls: ["./paymentprocedure.page.scss"]
})
export class PaymentprocedurePage implements OnInit {
  id: string;
  userInfo: UserInfos[] = [];
  key: string;
  Motdabi;

  sudCalculation=new SudCalculation();
  constructor(
    private route: ActivatedRoute,
    private submittaxformService: SubmittaxformService,
    private userInfoService: UserInfosService,
    private authServic: AuthService,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit() {
    this.key = this.route.snapshot.paramMap.get("key");
    this.Motdabi = this.route.snapshot.paramMap.get("motDabi");
    if (this.key != "") {
      this.userInfoService
        .getByKey(this.key)
        .snapshotChanges()
        .pipe()
        .subscribe(d => {
          var x = d.payload.toJSON();
          x["key"] = d.key;
          this.userInfo.push(x as UserInfos);
        });
    }
  }

  typeofGettingRecit() {
    let gettingReciType = {
      paymentTypeName: "",
      userUniCode: "",
      entryDate: 0
    };
    this.id = this.route.snapshot.paramMap.get("id");
    let userUniCode = this.route.snapshot.paramMap.get("userUniCode");

    if (this.id == "1") {
      gettingReciType.paymentTypeName = "ইমেইল";
    }
    if (this.id == "2") {
      gettingReciType.paymentTypeName = "ডাকযোগে";
    }
    if (this.id == "3") {
      gettingReciType.paymentTypeName = "উপজিলা বহুমি অফিস হতে";
    }

    if (this.key != "") {
      let obj = this.userInfo.find(f => f.key == this.key);

      obj=this.sudCalculation.SudCalculationActionHandaler(obj);

      obj.entryDate = new Date().getTime();
      obj.approved = false;
      obj.prodottoTakarPoriman = 0;

      var currentDateObj = new Date();
      var currentyearInEnglish = currentDateObj.getUTCFullYear();
    
     let currentYearInBangla = currentyearInEnglish - 593;
     obj.sorbosesKhajnaPorisodherBosor=currentYearInBangla.toString();
      console.log("obj", obj);

      gettingReciType.userUniCode = userUniCode;
      gettingReciType.entryDate = new Date().getTime();
      this.submittaxformService
        .saveGettingRecitType(gettingReciType)
        .then(success => {
          //console.log(success.key);
        });
      this.userInfoService.save(obj).then(t => {
        this.router.navigate(["/submittaxform/", t.key]);
        console.log(t.key);
      });
    }
  }
}
