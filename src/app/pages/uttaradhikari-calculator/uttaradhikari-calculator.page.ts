import { Component, OnInit } from "@angular/core";
import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
@Component({
  selector: "uttaradhikari-calculator",
  templateUrl: "./uttaradhikari-calculator.page.html",
  styleUrls: ["./uttaradhikari-calculator.page.scss"]
})
export class UttaradhikariCalculatorPage implements OnInit {
  url: SafeResourceUrl;
  constructor(sanitizer: DomSanitizer, private iab: InAppBrowser) {
    // this.url = sanitizer.bypassSecurityTrustResourceUrl(
    //   "http://উত্তরাধিকার.বাংলা/"
    // );
  }

  openSystem() {
    this.iab.create("http://উত্তরাধিকার.বাংলা/", "_blank");
  }
  ngOnInit() {}
}
